import api from './api';

export interface Barber {
  id: string;
  name: string;
  email: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  code: string;
  discount?: number | null;
  discountAmount?: number | null;
  validFrom: string;
  validUntil: string;
  isActive: boolean;
  image?: string | null;
  barberId?: string | null;
  barber?: Barber | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePromotionData {
  title: string;
  description: string;
  code: string;
  discount?: number;
  discountAmount?: number;
  validFrom: string;
  validUntil: string;
  isActive?: boolean;
  image?: string;
  barberId?: string;
}

export interface UpdatePromotionData {
  title?: string;
  description?: string;
  code?: string;
  discount?: number;
  discountAmount?: number;
  validFrom?: string;
  validUntil?: string;
  isActive?: boolean;
  image?: string;
  barberId?: string;
}

export interface PromotionsResponse {
  success: boolean;
  data: Promotion[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export const promotionsService = {
  async getPromotions(page: number = 1, limit: number = 10, search?: string, isActive?: boolean): Promise<PromotionsResponse> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });
    
    if (search) params.append('search', search);
    if (isActive !== undefined) params.append('isActive', isActive.toString());

    const response = await api.get<PromotionsResponse>(`/promotions/admin?${params.toString()}`);
    return response.data;
  },

  async getPromotionById(id: string): Promise<Promotion> {
    const response = await api.get<{ success: boolean; data: Promotion }>(`/promotions/admin/${id}`);
    return response.data.data;
  },

  async createPromotion(data: CreatePromotionData): Promise<Promotion> {
    const response = await api.post<{ success: boolean; data: Promotion }>('/promotions/admin', data);
    return response.data.data;
  },

  async updatePromotion(id: string, data: UpdatePromotionData): Promise<Promotion> {
    const response = await api.put<{ success: boolean; data: Promotion }>(`/promotions/admin/${id}`, data);
    return response.data.data;
  },

  async deletePromotion(id: string): Promise<void> {
    await api.delete(`/promotions/admin/${id}`);
  },
};

