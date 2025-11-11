import api from './api';

export interface Workplace {
  id: string;
  name: string;
  address?: string | null;
  city?: string | null;
  description?: string | null;
  image?: string | null;
  banner?: string | null;
  rating: number;
  reviews: number;
  barbersCount?: number;
  reviewsCount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateWorkplaceData {
  name: string;
  address?: string;
  city?: string;
  description?: string;
  image?: string;
  banner?: string;
}

export interface UpdateWorkplaceData {
  name?: string;
  address?: string;
  city?: string;
  description?: string;
  image?: string;
  banner?: string;
}

export interface WorkplacesResponse {
  success: boolean;
  data: Workplace[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export const workplacesService = {
  async getWorkplaces(page: number = 1, limit: number = 10, search?: string): Promise<WorkplacesResponse> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });
    
    if (search) {
      params.append('search', search);
    }

    const response = await api.get<WorkplacesResponse>(`/workplaces?${params.toString()}`);
    return response.data;
  },

  async getWorkplaceById(id: string): Promise<Workplace> {
    const response = await api.get<{ success: boolean; data: Workplace }>(`/workplaces/${id}`);
    return response.data.data;
  },

  async createWorkplace(data: CreateWorkplaceData): Promise<Workplace> {
    const response = await api.post<{ success: boolean; data: Workplace }>('/workplaces', data);
    return response.data.data;
  },

  async updateWorkplace(id: string, data: UpdateWorkplaceData): Promise<Workplace> {
    const response = await api.put<{ success: boolean; data: Workplace }>(`/workplaces/${id}`, data);
    return response.data.data;
  },

  async deleteWorkplace(id: string): Promise<void> {
    await api.delete(`/workplaces/${id}`);
  },
};

export interface WorkplaceMedia {
  id: string;
  workplaceId: string;
  type: string;
  url: string;
  thumbnail?: string | null;
  caption?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateWorkplaceMediaData {
  type: string;
  url: string;
  thumbnail?: string;
  caption?: string;
}

export const workplaceMediaService = {
  async getWorkplaceMedia(workplaceId: string): Promise<WorkplaceMedia[]> {
    const response = await api.get<{ success: boolean; data: WorkplaceMedia[] }>(`/workplace-media/workplace/${workplaceId}`);
    return response.data.data;
  },

  async createMedia(workplaceId: string, data: CreateWorkplaceMediaData): Promise<WorkplaceMedia> {
    const response = await api.post<{ success: boolean; data: WorkplaceMedia }>(`/workplace-media/workplace/${workplaceId}`, data);
    return response.data.data;
  },

  async createMultipleMedia(workplaceId: string, mediaItems: CreateWorkplaceMediaData[]): Promise<WorkplaceMedia[]> {
    const response = await api.post<{ success: boolean; data: WorkplaceMedia[] }>(`/workplace-media/workplace/${workplaceId}/multiple`, {
      mediaItems,
    });
    return response.data.data;
  },

  async updateMedia(id: string, data: { caption?: string; thumbnail?: string }): Promise<WorkplaceMedia> {
    const response = await api.put<{ success: boolean; data: WorkplaceMedia }>(`/workplace-media/${id}`, data);
    return response.data.data;
  },

  async deleteMedia(id: string): Promise<void> {
    await api.delete(`/workplace-media/${id}`);
  },
};

