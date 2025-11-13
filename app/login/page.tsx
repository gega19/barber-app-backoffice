'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { authService, LoginCredentials, UserRole } from '@/lib/auth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { LogIn, Loader2 } from 'lucide-react';
import Cookies from 'js-cookie';

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginCredentials) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.login(data);
      
      // Validar que la respuesta tenga la estructura esperada
      if (!response || !response.user || !response.token) {
        throw new Error('Respuesta del servidor inválida. Falta información del usuario o token.');
      }
      
      // Verificar si el usuario tiene permisos para acceder al backoffice
      // Normalizar el role a mayúsculas para la comparación
      const userRole = (response.user.role as string)?.toUpperCase() as UserRole;
      
      if (!authService.canAccessBackoffice(userRole)) {
        await authService.logout();
        setError(`No tienes permisos para acceder al panel de administración.`);
        return;
      }
      
      // Esperar un momento para asegurar que las cookies se guarden
      await new Promise(resolve => setTimeout(resolve, 100));
      
      router.push('/dashboard');
      router.refresh();
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Error al iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-4">
              <img 
                src="/logo.png" 
                alt="bartop" 
                className="w-20 h-20 rounded-full object-cover"
                onError={(e) => {
                  // Fallback si el logo no se carga
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.fallback-icon')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center fallback-icon';
                    parent.appendChild(fallback);
                    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    icon.setAttribute('class', 'w-10 h-10 text-white');
                    icon.setAttribute('fill', 'none');
                    icon.setAttribute('stroke', 'currentColor');
                    icon.setAttribute('viewBox', '0 0 24 24');
                    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path.setAttribute('stroke-linecap', 'round');
                    path.setAttribute('stroke-linejoin', 'round');
                    path.setAttribute('stroke-width', '2');
                    path.setAttribute('d', 'M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1');
                    icon.appendChild(path);
                    fallback.appendChild(icon);
                  }
                }}
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">bartop</h1>
            <p className="text-gray-600 mt-2">Panel de Administración</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-white text-gray-900 placeholder:text-gray-400"
                placeholder="admin@barberapp.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <input
                {...register('password')}
                type="password"
                id="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-white text-gray-900 placeholder:text-gray-400"
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Iniciando sesión...
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  Iniciar Sesión
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          © 2024 bartop. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}

