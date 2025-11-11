import api from './api';
import Cookies from 'js-cookie';

export interface LoginCredentials {
  email: string;
  password: string;
}

export type UserRole = 'ADMIN' | 'CLIENT' | 'USER';

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    name: string;
    role: UserRole;
  };
  token: string;
  refreshToken: string;
}

// Roles permitidos para acceder al backoffice
const ALLOWED_BACKOFFICE_ROLES: UserRole[] = ['ADMIN', 'CLIENT'];

export const authService = {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await api.post<{ success: boolean; data: AuthResponse }>('/auth/login', credentials);
      
      if (response.data.success && response.data.data) {
        const data = response.data.data;
        
        // El backend devuelve accessToken, no token - mapear correctamente
        const token = (data as any).accessToken || data.token;
        const refreshToken = data.refreshToken;
        const user = data.user;
        
        // Validar que todos los campos necesarios estén presentes
        if (!token || !refreshToken || !user) {
          throw new Error('Respuesta del servidor incompleta. Faltan datos de autenticación.');
        }
        
        // Guardar tokens en cookies
        Cookies.set('token', token, { expires: 7 }); // 7 días
        Cookies.set('refreshToken', refreshToken, { expires: 7 });
        
        // Retornar con la estructura correcta
        return {
          token,
          refreshToken,
          user,
        };
      }
      
      throw new Error('Login failed: respuesta del servidor inválida');
    } catch (error: any) {
      if (error.response) {
        throw new Error(error.response.data?.message || 'Error al iniciar sesión');
      }
      throw error;
    }
  },

  async logout(): Promise<void> {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      // Silently fail on logout
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

  canAccessBackoffice(role?: UserRole): boolean {
    if (!role) {
      // Intentar obtener el role del token si está disponible
      const token = Cookies.get('token');
      if (!token) return false;
      
      try {
        // Decodificar el token para obtener el role
        const payload = JSON.parse(atob(token.split('.')[1]));
        role = (payload.role as string)?.toUpperCase() as UserRole;
      } catch {
        return false;
      }
    }
    
    // Normalizar el role a mayúsculas para comparación
    const normalizedRole = role.toUpperCase() as UserRole;
    
    // Verificar que el role esté en la lista de roles permitidos
    return ALLOWED_BACKOFFICE_ROLES.some(allowedRole => 
      allowedRole.toUpperCase() === normalizedRole
    );
  },

  getCurrentRole(): UserRole | null {
    const token = Cookies.get('token');
    if (!token) return null;
    
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const role = payload.role as string;
      if (!role) return null;
      
      // Normalizar a mayúsculas y validar que sea un role válido
      const normalizedRole = role.toUpperCase();
      if (['ADMIN', 'CLIENT', 'USER'].includes(normalizedRole)) {
        return normalizedRole as UserRole;
      }
      
      return null;
    } catch {
      return null;
    }
  },
};

