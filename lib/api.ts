import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper to create FormData requests
export const createFormDataRequest = (config: any) => {
  const token = typeof window !== 'undefined' ? document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1] : null;
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  // Remove Content-Type to let browser set it with boundary
  delete config.headers['Content-Type'];
  return config;
};

// Interceptor para agregar token
api.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor para manejar errores
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expirado o inválido
      Cookies.remove('token');
      Cookies.remove('refreshToken');
      
      // Solo redirigir si NO estamos ya en la página de login
      // Esto evita que se limpie el error cuando hay credenciales incorrectas
      if (typeof window !== 'undefined' && !window.location.pathname.includes('/login')) {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;

