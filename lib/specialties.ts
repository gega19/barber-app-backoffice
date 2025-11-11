import api from './api';

export interface Specialty {
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateSpecialtyData {
  name: string;
  description?: string;
}

export interface UpdateSpecialtyData {
  name?: string;
  description?: string;
}

export const specialtiesService = {
  async getSpecialties(): Promise<Specialty[]> {
    const response = await api.get<{ success: boolean; data: Specialty[] }>('/specialties');
    return response.data.data;
  },

  async getSpecialtyById(id: string): Promise<Specialty> {
    const response = await api.get<{ success: boolean; data: Specialty }>(`/specialties/${id}`);
    return response.data.data;
  },

  async createSpecialty(data: CreateSpecialtyData): Promise<Specialty> {
    const response = await api.post<{ success: boolean; data: Specialty }>('/specialties/admin', data);
    return response.data.data;
  },

  async updateSpecialty(id: string, data: UpdateSpecialtyData): Promise<Specialty> {
    const response = await api.put<{ success: boolean; data: Specialty }>(`/specialties/admin/${id}`, data);
    return response.data.data;
  },

  async deleteSpecialty(id: string): Promise<void> {
    await api.delete(`/specialties/admin/${id}`);
  },
};

