'use client';

import { useState, useEffect, useCallback } from 'react';
import { Users as UsersIcon, Plus, Search, Edit, Trash2, Eye, Filter, X, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { usersService, User, CreateUserData, UpdateUserData, UserRole } from '@/lib/users';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres').optional(),
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  phone: z.string().optional(),
  location: z.string().optional(),
  role: z.enum(['ADMIN', 'CLIENT', 'USER']),
  country: z.string().optional(),
  gender: z.string().optional(),
});

type UserFormData = z.infer<typeof userSchema>;

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [roleFilter, setRoleFilter] = useState<UserRole | 'ALL'>('ALL');
  const [dateFilter, setDateFilter] = useState<'ALL' | 'TODAY' | 'WEEK' | 'MONTH'>('ALL');
  const [userTypeFilter, setUserTypeFilter] = useState<'ALL' | 'BARBER' | 'NORMAL'>('ALL');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [userBarberMap, setUserBarberMap] = useState<Record<string, boolean>>({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      role: 'USER',
    },
  });

  const loadUsers = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await usersService.getUsers(currentPage, 10, searchTerm || undefined);
      let filteredUsers = response.data;
      
      // Load barbers to check user types
      const barbersResponse = await usersService.getBarbers();
      const barberEmails = new Set(barbersResponse.map((b: any) => b.email));
      const barberMap: Record<string, boolean> = {};
      filteredUsers.forEach((user: User) => {
        barberMap[user.id] = barberEmails.has(user.email);
      });
      setUserBarberMap(barberMap);
      
      // Apply role filter
      if (roleFilter !== 'ALL') {
        filteredUsers = filteredUsers.filter(user => user.role === roleFilter);
      }
      
      // Apply user type filter (barber vs normal)
      if (userTypeFilter !== 'ALL') {
        filteredUsers = filteredUsers.filter(user => {
          const isBarber = barberMap[user.id] || false;
          return userTypeFilter === 'BARBER' ? isBarber : !isBarber;
        });
      }
      
      // Apply date filter
      if (dateFilter !== 'ALL') {
        const now = new Date();
        const filterDate = new Date();
        
        switch (dateFilter) {
          case 'TODAY':
            filterDate.setHours(0, 0, 0, 0);
            break;
          case 'WEEK':
            filterDate.setDate(now.getDate() - 7);
            break;
          case 'MONTH':
            filterDate.setMonth(now.getMonth() - 1);
            break;
        }
        
        filteredUsers = filteredUsers.filter(user => {
          const userDate = new Date(user.createdAt);
          return userDate >= filterDate;
        });
      }
      
      setUsers(filteredUsers);
      // Recalculate total pages based on filtered results
      const totalFiltered = filteredUsers.length;
      setTotalPages(Math.ceil(totalFiltered / 10) || 1);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al cargar usuarios');
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, searchTerm, roleFilter, dateFilter, userTypeFilter]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const clearFilters = () => {
    setRoleFilter('ALL');
    setDateFilter('ALL');
    setUserTypeFilter('ALL');
    setSearchTerm('');
    setCurrentPage(1);
  };

  const hasActiveFilters = roleFilter !== 'ALL' || dateFilter !== 'ALL' || userTypeFilter !== 'ALL' || searchTerm !== '';

  // Avatar component function
  const getAvatarUrl = (user: User) => {
    if (user.avatar && user.avatar.trim() !== '') {
      return user.avatar;
    }
    if (user.avatarSeed) {
      return `https://api.dicebear.com/7.x/avataaars/png?seed=${user.avatarSeed}&size=512`;
    }
    return null;
  };

  const handleCreate = () => {
    setIsEditMode(false);
    setSelectedUser(null);
    reset({
      role: 'USER',
    });
    setIsModalOpen(true);
  };

  const handleEdit = (user: User) => {
    setIsEditMode(true);
    setSelectedUser(user);
    setValue('email', user.email);
    setValue('name', user.name);
    setValue('phone', user.phone || '');
    setValue('location', user.location || '');
    setValue('role', user.role);
    setValue('country', user.country || '');
    setValue('gender', user.gender || '');
    setIsModalOpen(true);
  };

  const handleView = async (user: User) => {
    try {
      const fullUser = await usersService.getUserById(user.id);
      setSelectedUser(fullUser);
      setIsModalOpen(true);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al cargar usuario');
    }
  };

  const onSubmit = async (data: UserFormData) => {
    try {
      setError(null);
      if (isEditMode && selectedUser) {
        const updateData: UpdateUserData = {
          name: data.name,
          phone: data.phone || undefined,
          location: data.location || undefined,
          role: data.role,
          country: data.country || undefined,
          gender: data.gender || undefined,
        };
        
        if (data.password) {
          updateData.password = data.password;
        }

        await usersService.updateUser(selectedUser.id, updateData);
      } else {
        const createData: CreateUserData = {
          email: data.email,
          password: data.password || 'Password123!', // Default password if not provided
          name: data.name,
          phone: data.phone || undefined,
          location: data.location || undefined,
          role: data.role,
          country: data.country || undefined,
          gender: data.gender || undefined,
        };
        await usersService.createUser(createData);
      }
      
      setIsModalOpen(false);
      reset();
      loadUsers();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al guardar usuario');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setError(null);
      await usersService.deleteUser(id);
      setDeleteConfirm(null);
      loadUsers();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al eliminar usuario');
    }
  };

  const getRoleBadgeColor = (role: UserRole) => {
    switch (role) {
      case 'ADMIN':
        return 'bg-red-100 text-red-800';
      case 'CLIENT':
        return 'bg-blue-100 text-blue-800';
      case 'USER':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3 mb-2">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <UsersIcon className="w-8 h-8 text-indigo-600" />
            </div>
            Usuarios
          </h1>
          <p className="text-gray-600 text-lg">Gestiona todos los usuarios de la aplicación</p>
        </div>
        <button
          onClick={handleCreate}
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-6 py-3 rounded-xl hover:from-indigo-700 hover:to-indigo-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <Plus className="w-5 h-5" />
          Nuevo Usuario
        </button>
      </div>

      {/* Error message */}
      {error && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-lg shadow-sm">
          <div className="flex items-center">
            <X className="w-5 h-5 mr-2" />
            {error}
          </div>
        </div>
      )}

      {/* Filters Section */}
      <div className="mb-6 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition"
        >
          <div className="flex items-center gap-3">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-900">Filtros</span>
            {hasActiveFilters && (
              <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">
                Activos
              </span>
            )}
          </div>
          {showFilters ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </button>

        {showFilters && (
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Buscar</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Nombre o email..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white"
                  />
                </div>
              </div>

              {/* Role Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rol</label>
                <select
                  value={roleFilter}
                  onChange={(e) => {
                    setRoleFilter(e.target.value as UserRole | 'ALL');
                    setCurrentPage(1);
                  }}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white"
                >
                  <option value="ALL">Todos los roles</option>
                  <option value="ADMIN">Administrador</option>
                  <option value="CLIENT">Cliente</option>
                  <option value="USER">Usuario</option>
                </select>
              </div>

              {/* User Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Usuario</label>
                <select
                  value={userTypeFilter}
                  onChange={(e) => {
                    setUserTypeFilter(e.target.value as 'ALL' | 'BARBER' | 'NORMAL');
                    setCurrentPage(1);
                  }}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white"
                >
                  <option value="ALL">Todos</option>
                  <option value="BARBER">Barbero</option>
                  <option value="NORMAL">Usuario Normal</option>
                </select>
              </div>

              {/* Date Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de Registro</label>
                <select
                  value={dateFilter}
                  onChange={(e) => {
                    setDateFilter(e.target.value as 'ALL' | 'TODAY' | 'WEEK' | 'MONTH');
                    setCurrentPage(1);
                  }}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white"
                >
                  <option value="ALL">Todas las fechas</option>
                  <option value="TODAY">Hoy</option>
                  <option value="WEEK">Última semana</option>
                  <option value="MONTH">Último mes</option>
                </select>
              </div>
            </div>

            {hasActiveFilters && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition"
                >
                  <X className="w-4 h-4" />
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          </div>
        ) : users.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No se encontraron usuarios
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Usuario
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Teléfono
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Rol
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Fecha de Registro
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-indigo-50/50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden border-2 border-indigo-300 shadow-md">
                            {getAvatarUrl(user) ? (
                              <img
                                src={getAvatarUrl(user)!}
                                alt={user.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  // Fallback to initial if image fails
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const parent = target.parentElement;
                                  if (parent) {
                                    parent.innerHTML = `<span class="text-white font-semibold text-lg flex items-center justify-center w-full h-full bg-gradient-to-br from-indigo-400 to-indigo-600">${user.name.charAt(0).toUpperCase()}</span>`;
                                  }
                                }}
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
                                <span className="text-white font-semibold text-lg">
                                  {user.name.charAt(0).toUpperCase()}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-gray-900">{user.name}</span>
                              {userBarberMap[user.id] && (
                                <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-amber-100 text-amber-800">
                                  Barbero
                                </span>
                              )}
                            </div>
                            {user.location && (
                              <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                <span>{user.location}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.phone || '-'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleBadgeColor(
                            user.role
                          )}`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(user.createdAt).toLocaleDateString('es-VE')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleView(user)}
                            className="p-2 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-lg transition"
                            title="Ver detalles"
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleEdit(user)}
                            className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-100 rounded-lg transition"
                            title="Editar"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(user.id)}
                            className="p-2 text-red-600 hover:text-red-700 hover:bg-red-100 rounded-lg transition"
                            title="Eliminar"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
                <div className="text-sm font-medium text-gray-700">
                  Página <span className="font-bold text-indigo-600">{currentPage}</span> de <span className="font-bold text-indigo-600">{totalPages}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 font-medium transition"
                  >
                    Anterior
                  </button>
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 font-medium transition"
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Create/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto m-4">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">
                {isEditMode ? 'Editar Usuario' : selectedUser ? 'Detalles del Usuario' : 'Nuevo Usuario'}
              </h2>
            </div>

            {selectedUser && !isEditMode ? (
              // View mode
              <div className="p-6 space-y-4">
                {/* ID Section */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">ID de Usuario</label>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded text-sm font-mono text-gray-800">
                      {selectedUser.id}
                    </code>
                    <button
                      onClick={() => copyToClipboard(selectedUser.id, selectedUser.id)}
                      className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
                      title="Copiar ID"
                    >
                      {copiedId === selectedUser.id ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {copiedId === selectedUser.id && (
                    <p className="mt-2 text-sm text-green-600 flex items-center gap-1">
                      <Check className="w-4 h-4" />
                      ID copiado al portapapeles
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre</label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">{selectedUser.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">{selectedUser.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Teléfono</label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">{selectedUser.phone || '-'}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Rol</label>
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${getRoleBadgeColor(selectedUser.role)}`}>
                      {selectedUser.role}
                    </span>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Ubicación</label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">{selectedUser.location || '-'}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">País</label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">{selectedUser.country || '-'}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Género</label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">{selectedUser.gender || '-'}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Fecha de Registro</label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">
                      {new Date(selectedUser.createdAt).toLocaleString('es-VE')}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end gap-2 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setSelectedUser(null);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cerrar
                  </button>
                  <button
                    onClick={() => {
                      setIsEditMode(true);
                    }}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    Editar
                  </button>
                </div>
              </div>
            ) : (
              // Create/Edit form
              <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email {!isEditMode && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      disabled={isEditMode}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none disabled:bg-gray-100"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contraseña {!isEditMode && <span className="text-red-500">*</span>}
                      {isEditMode && <span className="text-gray-500 text-xs">(dejar vacío para no cambiar)</span>}
                    </label>
                    <input
                      {...register('password')}
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    />
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Rol <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register('role')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    >
                      <option value="USER">Usuario</option>
                      <option value="CLIENT">Cliente</option>
                      <option value="ADMIN">Administrador</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ubicación</label>
                    <input
                      {...register('location')}
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">País</label>
                    <input
                      {...register('country')}
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Género</label>
                    <select
                      {...register('gender')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    >
                      <option value="">Seleccionar...</option>
                      <option value="M">Masculino</option>
                      <option value="F">Femenino</option>
                      <option value="O">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      setSelectedUser(null);
                      reset();
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    {isEditMode ? 'Actualizar' : 'Crear'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full m-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Confirmar Eliminación</h3>
            <p className="text-gray-600 mb-6">
              ¿Estás seguro de que deseas eliminar este usuario? Esta acción no se puede deshacer.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
