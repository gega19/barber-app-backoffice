import api from './api';

export interface Campaign {
  id: string;
  title: string;
  message: string;
  targetType: 'all' | 'specific_users' | 'barbers_only' | 'clients_only';
  targetUserIds?: string[] | null;
  sentAt?: string | null;
  sentCount: number;
  createdBy?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCampaignData {
  title: string;
  message: string;
  targetType: 'all' | 'specific_users' | 'barbers_only' | 'clients_only';
  targetUserIds?: string[];
}

export interface CampaignsResponse {
  success: boolean;
  data: Campaign[];
}

export const campaignsService = {
  async getCampaigns(): Promise<Campaign[]> {
    const response = await api.get<CampaignsResponse>('/campaigns');
    return response.data.data;
  },

  async getCampaignById(id: string): Promise<Campaign> {
    const response = await api.get<{ success: boolean; data: Campaign }>(`/campaigns/${id}`);
    return response.data.data;
  },

  async createCampaign(data: CreateCampaignData): Promise<Campaign> {
    const response = await api.post<{ success: boolean; data: Campaign; message: string }>('/campaigns', data);
    return response.data.data;
  },
};

