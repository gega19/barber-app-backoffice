'use client';

import { useState, useEffect } from 'react';
import { usersService, User } from '@/lib/users';
import { campaignsService, CreateCampaignData } from '@/lib/campaigns';
import { Send, Users, Loader2, CheckCircle2, XCircle } from 'lucide-react';

export default function CampaignsPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string>('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setIsLoadingUsers(true);
      const response = await usersService.getUsers(1, 100); // Cargar hasta 100 usuarios
      setUsers(response.data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al cargar usuarios');
    } finally {
      setIsLoadingUsers(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedUserId) {
      setError('Por favor selecciona un usuario');
      return;
    }

    if (!title.trim() || !message.trim()) {
      setError('Por favor completa todos los campos');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const campaignData: CreateCampaignData = {
        title: title.trim(),
        message: message.trim(),
        targetType: 'specific_users',
        targetUserIds: [selectedUserId],
      };

      const campaign = await campaignsService.createCampaign(campaignData);
      
      setSuccess(`Notificación enviada exitosamente a ${users.find(u => u.id === selectedUserId)?.name}. ${campaign.sentCount} notificación(es) enviada(s).`);
      
      // Limpiar formulario
      setTitle('');
      setMessage('');
      setSelectedUserId('');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al enviar la notificación');
    } finally {
      setIsLoading(false);
    }
  };

  const selectedUser = users.find(u => u.id === selectedUserId);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Campañas de Notificaciones</h1>
          <p className="text-gray-600 mt-1">Envía notificaciones push de prueba a usuarios</p>
        </div>
      </div>

      {/* Alertas */}
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5" />
          <span>{success}</span>
          <button
            onClick={() => setSuccess(null)}
            className="ml-auto text-green-600 hover:text-green-800"
          >
            <XCircle className="w-5 h-5" />
          </button>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-center gap-2">
          <XCircle className="w-5 h-5" />
          <span>{error}</span>
          <button
            onClick={() => setError(null)}
            className="ml-auto text-red-600 hover:text-red-800"
          >
            <XCircle className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Formulario */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Selección de Usuario */}
          <div>
            <label htmlFor="user" className="block text-sm font-medium text-gray-700 mb-2">
              <Users className="w-4 h-4 inline mr-1" />
              Seleccionar Usuario
            </label>
            {isLoadingUsers ? (
              <div className="flex items-center gap-2 text-gray-500">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Cargando usuarios...</span>
              </div>
            ) : (
              <select
                id="user"
                value={selectedUserId}
                onChange={(e) => setSelectedUserId(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-white text-gray-900"
                required
              >
                <option value="">-- Selecciona un usuario --</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name} ({user.email}) {user.role === 'ADMIN' ? '👑' : ''}
                  </option>
                ))}
              </select>
            )}
            {selectedUser && (
              <div className="mt-2 p-3 bg-indigo-50 rounded-lg">
                <p className="text-sm text-indigo-900">
                  <strong>Usuario seleccionado:</strong> {selectedUser.name} ({selectedUser.email})
                </p>
              </div>
            )}
          </div>

          {/* Título */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Título de la Notificación
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ej: Prueba de Notificación"
              maxLength={100}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-white text-gray-900 placeholder:text-gray-400"
              required
            />
            <p className="mt-1 text-xs text-gray-500">{title.length}/100 caracteres</p>
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Mensaje de la Notificación
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe el mensaje que recibirá el usuario..."
              rows={4}
              maxLength={500}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-white text-gray-900 placeholder:text-gray-400 resize-none"
              required
            />
            <p className="mt-1 text-xs text-gray-500">{message.length}/500 caracteres</p>
          </div>

          {/* Botón de Envío */}
          <button
            type="submit"
            disabled={isLoading || !selectedUserId || !title.trim() || !message.trim()}
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Enviando...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Enviar Notificación</span>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Información */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-blue-900 mb-2">ℹ️ Información</h3>
        <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
          <li>Selecciona un usuario de la lista para enviarle una notificación push de prueba</li>
          <li>La notificación aparecerá en el dispositivo del usuario si tiene la app abierta o en segundo plano</li>
          <li>El usuario debe tener un token FCM registrado para recibir la notificación</li>
        </ul>
      </div>
    </div>
  );
}

