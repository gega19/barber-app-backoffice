import api from './api';
import Cookies from 'js-cookie';

export interface AppVersion {
  id: string;
  version: string;
  versionCode: number;
  apkUrl: string;
  apkSize: number;
  releaseNotes?: string | null;
  isActive: boolean;
  downloadCount: number;
  createdBy?: string | null;
  createdAt: string;
  updatedAt: string;
  _count?: {
    downloads: number;
  };
}

export interface CreateAppVersionData {
  version: string;
  versionCode: number;
  releaseNotes?: string;
  isActive?: boolean;
  apk: File;
}

export interface UpdateAppVersionData {
  version?: string;
  releaseNotes?: string;
  isActive?: boolean;
}

export interface AppVersionsResponse {
  success: boolean;
  data: AppVersion[];
}

export interface AppVersionResponse {
  success: boolean;
  data: AppVersion;
}

export interface DownloadStats {
  totalDownloads: number;
  downloadsByDate: Array<{
    date: string;
    count: number;
  }>;
}

export const appVersionsService = {
  async getActiveVersion(): Promise<AppVersion> {
    const response = await api.get<AppVersionResponse>('/app/version');
    return response.data.data;
  },

  async getAllVersions(): Promise<AppVersion[]> {
    const response = await api.get<AppVersionsResponse>('/admin/app/versions');
    return response.data.data;
  },

  async getVersionById(id: string): Promise<AppVersion> {
    const response = await api.get<AppVersionResponse>(`/admin/app/versions/${id}`);
    return response.data.data;
  },

  async createVersion(data: CreateAppVersionData): Promise<AppVersion> {
    const formData = new FormData();
    
    // Verificar que el archivo existe
    if (!data.apk || !(data.apk instanceof File)) {
      throw new Error('El archivo APK es requerido');
    }
    
    console.log('📦 Creating app version...');
    console.log('📄 File:', {
      name: data.apk.name,
      size: data.apk.size,
      type: data.apk.type,
    });
    
    formData.append('apk', data.apk);
    formData.append('version', data.version);
    formData.append('versionCode', data.versionCode.toString());
    if (data.releaseNotes) {
      formData.append('releaseNotes', data.releaseNotes);
    }
    if (data.isActive !== undefined) {
      formData.append('isActive', data.isActive.toString());
    }

    // Verificar que el archivo está en el FormData
    const apkInFormData = formData.get('apk');
    console.log('✅ File in FormData:', apkInFormData instanceof File ? 'Yes' : 'No');

    // Obtener token de cookies
    const token = Cookies.get('token');
    const headers: Record<string, string> = {};
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    // No establecer Content-Type - el browser lo hará automáticamente con el boundary

    const response = await api.post<AppVersionResponse>('/admin/app/versions', formData, {
      headers,
    });
    return response.data.data;
  },

  async updateVersion(id: string, data: UpdateAppVersionData): Promise<AppVersion> {
    const response = await api.put<AppVersionResponse>(`/admin/app/versions/${id}`, data);
    return response.data.data;
  },

  async activateVersion(id: string): Promise<AppVersion> {
    const response = await api.put<AppVersionResponse>(`/admin/app/versions/${id}/activate`, {});
    return response.data.data;
  },

  async deleteVersion(id: string): Promise<void> {
    await api.delete(`/admin/app/versions/${id}`);
  },

  async getDownloadStats(versionId?: string): Promise<DownloadStats> {
    const url = versionId 
      ? `/admin/app/stats?versionId=${versionId}`
      : '/admin/app/stats';
    const response = await api.get<{ success: boolean; data: DownloadStats }>(url);
    return response.data.data;
  },
};

