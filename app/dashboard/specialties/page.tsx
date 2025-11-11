'use client';

import { useState, useEffect, useCallback } from 'react';
import { Scissors, Plus, Search, Edit, Trash2, Eye, Filter, X, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { specialtiesService, Specialty, CreateSpecialtyData, UpdateSpecialtyData } from '@/lib/specialties';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const specialtySchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  description: z.string().optional(),
});

type SpecialtyFormData = z.infer<typeof specialtySchema>;

export default function SpecialtiesPage() {
  const [specialties, setSpecialties] = useState<Specialty[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SpecialtyFormData>({
    resolver: zodResolver(specialtySchema),
  });

  const loadSpecialties = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await specialtiesService.getSpecialties();
      setSpecialties(data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al cargar especialidades');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadSpecialties();
  }, [loadSpecialties]);

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
    setSearchTerm('');
  };

  const hasActiveFilters = searchTerm !== '';

  const filteredSpecialties = specialties.filter((specialty) => {
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return (
        specialty.name.toLowerCase().includes(searchLower) ||
        (specialty.description && specialty.description.toLowerCase().includes(searchLower))
      );
    }
    return true;
  });

  const handleCreate = () => {
    setIsEditMode(false);
    setSelectedSpecialty(null);
    reset({
      name: '',
      description: '',
    });
    setIsModalOpen(true);
  };

  const handleView = (specialty: Specialty) => {
    setSelectedSpecialty(specialty);
    setIsEditMode(false);
    setIsModalOpen(true);
  };

  const handleEdit = (specialty: Specialty) => {
    setSelectedSpecialty(specialty);
    setIsEditMode(true);
    reset({
      name: specialty.name,
      description: specialty.description || '',
    });
    setIsModalOpen(true);
  };

  const onSubmit = async (data: SpecialtyFormData) => {
    try {
      setError(null);
      if (isEditMode && selectedSpecialty) {
        const updateData: UpdateSpecialtyData = {
          name: data.name,
          description: data.description || undefined,
        };
        await specialtiesService.updateSpecialty(selectedSpecialty.id, updateData);
      } else {
        const createData: CreateSpecialtyData = {
          name: data.name,
          description: data.description || undefined,
        };
        await specialtiesService.createSpecialty(createData);
      }
      setIsModalOpen(false);
      loadSpecialties();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al guardar especialidad');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setError(null);
      await specialtiesService.deleteSpecialty(id);
      setDeleteConfirm(null);
      loadSpecialties();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al eliminar especialidad');
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Scissors className="w-8 h-8 text-blue-600" />
            Especialidades
          </h1>
          <p className="text-gray-600 mt-2">Gestiona las especialidades de los barberos</p>
        </div>
        <button
          onClick={handleCreate}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Nueva Especialidad
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="font-medium text-gray-700">Filtros</span>
            {hasActiveFilters && (
              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
                Activos
              </span>
            )}
          </div>
          {showFilters ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>

        {showFilters && (
          <div className="p-4 border-t border-gray-200 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Buscar</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Nombre o descripción..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex items-end">
                <button
                  onClick={clearFilters}
                  className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Limpiar Filtros
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {isLoading ? (
          <div className="p-12 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-500">Cargando especialidades...</p>
          </div>
        ) : filteredSpecialties.length === 0 ? (
          <div className="p-12 text-center">
            <Scissors className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">
              {searchTerm ? 'No se encontraron especialidades con ese criterio' : 'No hay especialidades registradas'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Creada</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSpecialties.map((specialty) => (
                  <tr key={specialty.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{specialty.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500 truncate max-w-xs">
                        {specialty.description || <span className="text-gray-400">Sin descripción</span>}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(specialty.createdAt).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleView(specialty)}
                          className="text-blue-600 hover:text-blue-900"
                          title="Ver detalles"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleEdit(specialty)}
                          className="text-yellow-600 hover:text-yellow-900"
                          title="Editar"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(specialty.id)}
                          className="text-red-600 hover:text-red-900"
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
        )}
      </div>

      {/* Create/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  {isEditMode ? 'Editar Especialidad' : selectedSpecialty ? 'Detalles de Especialidad' : 'Nueva Especialidad'}
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {!isEditMode && selectedSpecialty ? (
              // View Mode
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                    <p className="text-gray-900">{selectedSpecialty.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ID</label>
                    <div className="flex items-center gap-2">
                      <code className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs font-mono">
                        {selectedSpecialty.id}
                      </code>
                      <button
                        onClick={() => copyToClipboard(selectedSpecialty.id, selectedSpecialty.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        {copiedId === selectedSpecialty.id ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                    <p className="text-gray-900">{selectedSpecialty.description || <span className="text-gray-400">Sin descripción</span>}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Creada</label>
                    <p className="text-gray-900">
                      {new Date(selectedSpecialty.createdAt).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Actualizada</label>
                    <p className="text-gray-900">
                      {new Date(selectedSpecialty.updatedAt).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              // Edit/Create Mode
              <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
                  <input
                    {...register('name')}
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ej: Corte Clásico, Barba, Fade, etc."
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
                  <textarea
                    {...register('description')}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Descripción opcional de la especialidad..."
                  />
                  {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Confirmar Eliminación</h3>
            <p className="text-gray-600 mb-6">
              ¿Estás seguro de que deseas eliminar esta especialidad? Esta acción no se puede deshacer.
              Si hay barberos usando esta especialidad, no se podrá eliminar.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
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

