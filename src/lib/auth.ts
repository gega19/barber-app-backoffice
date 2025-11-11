import api from './api';
import Cookies from 'js-cookie';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
  token: string;
  refreshToken: string;
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await api.post<{ success: boolean; data: AuthResponse }>('/auth/login', credentials);
    
    if (response.data.success && response.data.data) {
      const { token, refreshToken, user } = response.data.data;
      
      // Guardar tokens en cookies
      Cookies.set('token', token, { expires: 7 }); // 7 días
      Cookies.set('refreshToken', refreshToken, { expires: 7 });
      
      return response.data.data;
    }
    
    throw new Error('Login failed');
  },

  async logout(): Promise<void> {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      Cookies.remove('token');
      Cookies.remove('refreshToken');
    }
  },

  async getCurrentUser() {
    const response = await api.get<{ success: boolean; data: any }>('/auth/me');
    return response.data.data;
  },

  isAuthenticated(): boolean {
    return !!Cookies.get('token');
  },
};

