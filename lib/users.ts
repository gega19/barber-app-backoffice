import api from './api';

export type UserRole = 'ADMIN' | 'CLIENT' | 'USER' | 'BARBERSHOP' | 'BARBER';

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
  workplaceId?: string | null;
  emailVerified?: boolean | null;
  phoneVerifiedAt?: string | null;
  createdAt: string;
  updatedAt: string;
  isBarber?: boolean;
}

export interface CreateUserData {
  email: string;
  password: string;
  name: string;
  phone?: string;
  location?: string;
  role?: UserRole;
  workplaceId?: string;
  country?: string;
  gender?: string;
}

export interface UpdateUserData {
  name?: string;
  phone?: string;
  location?: string;
  role?: UserRole;
  workplaceId?: string;
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
  async getUsers(
    page: number = 1,
    limit: number = 10,
    search?: string,
    filters?: {
      role?: string;
      userType?: 'BARBER' | 'NORMAL' | 'ALL';
      dateRange?: 'TODAY' | 'WEEK' | 'MONTH' | 'ALL';
    }
  ): Promise<UsersResponse> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });

    if (search) {
      params.append('search', search);
    }

    if (filters) {
      if (filters.role && filters.role !== 'ALL') {
        params.append('role', filters.role);
      }

      if (filters.userType && filters.userType !== 'ALL') {
        // Map userType filter to backend logic
        if (filters.userType === 'BARBER') {
          params.append('isBarber', 'true');
        } else if (filters.userType === 'NORMAL') {
          params.append('isBarber', 'false');
        }
      }

      if (filters.dateRange && filters.dateRange !== 'ALL') {
        const now = new Date();
        const fromDate = new Date();

        switch (filters.dateRange) {
          case 'TODAY':
            fromDate.setHours(0, 0, 0, 0);
            break;
          case 'WEEK':
            fromDate.setDate(now.getDate() - 7);
            break;
          case 'MONTH':
            fromDate.setMonth(now.getMonth() - 1);
            break;
        }

        params.append('fromDate', fromDate.toISOString());
        // For TODAY, we imply 'until now' or end of day? 
        // Backend handles gte fromDate. If we want exact ranges we can send toDate too.
        // For simplicity, we just send start date.
      }
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

  async verifyUserEmail(userId: string): Promise<User> {
    const response = await api.put<{ success: boolean; data: User; message: string }>(
      `/users/${userId}/verify-email`
    );
    return response.data.data;
  },
};

