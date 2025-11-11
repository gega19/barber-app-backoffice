'use client';

import { useState, useEffect } from 'react';
import { Bell, Send, User as UserIcon, AlertCircle, CheckCircle2 } from 'lucide-react';
import { notificationsService, SendTestNotificationData } from '@/lib/notifications';
import { usersService, type User } from '@/lib/users';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const notificationSchema = z.object({
  userId: z.string().min(1, 'Debes seleccionar un usuario'),
  title: z.string().min(1, 'El título es requerido').max(100, 'El título no puede exceder 100 caracteres'),
  body: z.string().min(1, 'El mensaje es requerido').max(500, 'El mensaje no puede exceder 500 caracteres'),
});

type NotificationFormData = z.infer<typeof notificationSchema>;

export default function NotificationsPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<NotificationFormData>({
    resolver: zodResolver(notificationSchema),
    defaultValues: {
      userId: '',
      title: '',
      body: '',
    },
  });

  const selectedUserId = watch('userId');

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setIsLoadingUsers(true);
    try {
      const response = await usersService.getUsers(1, 100);
      setUsers(response.data);
    } catch (error) {
      console.error('Error loading users:', error);
      setMessage({
        type: 'error',
        text: 'Error al cargar usuarios',
      });
    } finally {
      setIsLoadingUsers(false);
    }
  };

  const onSubmit = async (data: NotificationFormData) => {
    setIsSending(true);
    setMessage(null);

    try {
      await notificationsService.sendTestNotification({
        userId: data.userId,
        title: data.title,
        body: data.body,
      });

      setMessage({
        type: 'success',
        text: 'Notificación enviada exitosamente',
      });

      reset();
    } catch (error: any) {
      console.error('Error sending notification:', error);
      setMessage({
        type: 'error',
        text: error.response?.data?.message || 'Error al enviar la notificación',
      });
    } finally {
      setIsSending(false);
    }
  };

  const filteredUsers = users.filter((user) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      user.name.toLowerCase().includes(searchLower) ||
      user.email.toLowerCase().includes(searchLower)
    );
  });

  const selectedUser = users.find((u) => u.id === selectedUserId);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
            <Bell className="w-6 h-6 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Notificaciones</h1>
        </div>
        <p className="text-gray-600">Envía notificaciones de prueba a usuarios</p>
      </div>

      {/* Message Alert */}
      {message && (
        <div
          className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
            message.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          {message.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5" />
          ) : (
            <AlertCircle className="w-5 h-5" />
          )}
          <span>{message.text}</span>
        </div>
      )}

      {/* Form */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* User Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Usuario <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Buscar usuario por nombre o email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <select
                {...register('userId')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Selecciona un usuario</option>
                {isLoadingUsers ? (
                  <option disabled>Cargando usuarios...</option>
                ) : filteredUsers.length === 0 ? (
                  <option disabled>No se encontraron usuarios</option>
                ) : (
                  filteredUsers.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name} ({user.email})
                    </option>
                  ))
                )}
              </select>
            </div>
            {errors.userId && (
              <p className="mt-1 text-sm text-red-600">{errors.userId.message}</p>
            )}
            {selectedUser && (
              <div className="mt-3 p-3 bg-gray-50 rounded-lg flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <UserIcon className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{selectedUser.name}</p>
                  <p className="text-sm text-gray-600">{selectedUser.email}</p>
                </div>
              </div>
            )}
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Título <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register('title')}
              placeholder="Ej: Notificación de prueba"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
            )}
          </div>

          {/* Body */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mensaje <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register('body')}
              placeholder="Ej: Esta es una notificación de prueba desde el backoffice"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"
            />
            {errors.body && (
              <p className="mt-1 text-sm text-red-600">{errors.body.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSending}
              className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-5 h-5" />
              {isSending ? 'Enviando...' : 'Enviar Notificación'}
            </button>
          </div>
        </form>
      </div>

      {/* Info Box */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">Información importante:</p>
            <ul className="list-disc list-inside space-y-1 text-blue-700">
              <li>La notificación se enviará a todos los dispositivos del usuario seleccionado</li>
              <li>El usuario debe tener la app instalada y haber iniciado sesión al menos una vez</li>
              <li>Si el usuario no tiene tokens FCM registrados, la notificación no se enviará</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

