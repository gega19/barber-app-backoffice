import axios from 'axios';
import Cookies from 'js-cookie';

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export interface UploadResponse {
  success: boolean;
  data: {
    url: string;
    filename: string;
    originalName: string;
    mimetype: string;
    size: number;
  };
}

export const uploadService = {
  async uploadFile(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);

    const token = Cookies.get('token');
    const headers: Record<string, string> = {};
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await axios.post<UploadResponse>(`${baseURL}/upload`, formData, {
      headers,
    });

    if (response.data.success && response.data.data) {
      // Return relative URL (same as Flutter app does)
      // The app will construct the full URL using its baseUrl
      return response.data.data.url;
    }

    throw new Error('Upload failed');
  },
};

