import api from './api';

export type UserRole = 'ADMIN' | 'CLIENT' | 'USER';

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string | null;
  avatar?: string | null;
  avatarSeed?: string | null;
  location?: string | null;
  country?: string | null;
  gender?: string | null;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserData {
  email: string;
  password: string;
  name: string;
  phone?: string;
  location?: string;
  role?: UserRole;
  country?: string;
  gender?: string;
}

export interface UpdateUserData {
  name?: string;
  phone?: string;
  location?: string;
  role?: UserRole;
  country?: string;
  gender?: string;
  password?: string;
}

export interface UsersResponse {
  success: boolean;
  data: User[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export const usersService = {
  async getUsers(page: number = 1, limit: number = 10, search?: string): Promise<UsersResponse> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });
    
    if (search) {
      params.append('search', search);
    }

    const response = await api.get<UsersResponse>(`/users?${params.toString()}`);
    return response.data;
  },

  async getUserById(id: string): Promise<User> {
    const response = await api.get<{ success: boolean; data: User }>(`/users/${id}`);
    return response.data.data;
  },

  async createUser(data: CreateUserData): Promise<User> {
    const response = await api.post<{ success: boolean; data: User }>('/users', data);
    return response.data.data;
  },

  async updateUser(id: string, data: UpdateUserData): Promise<User> {
    const response = await api.put<{ success: boolean; data: User }>(`/users/${id}`, data);
    return response.data.data;
  },

  async deleteUser(id: string): Promise<void> {
    await api.delete(`/users/${id}`);
  },

  async getBarbers(): Promise<any[]> {
    const response = await api.get<{ success: boolean; data: any[] }>('/barbers');
    return response.data.data || [];
  },
};

