'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Scissors, Plus, Search, Edit, Trash2, Eye, Filter, X, Copy, Check, ChevronDown, ChevronUp, Star, MapPin, Users, Upload, Image as ImageIcon, Video, XCircle } from 'lucide-react';
import { workplacesService, Workplace, CreateWorkplaceData, UpdateWorkplaceData, workplaceMediaService, WorkplaceMedia } from '@/lib/workplaces';
import { uploadService } from '@/lib/upload';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Helper para construir URLs de imágenes (sin /api)
const getImageUrl = (url: string): string => {
  if (url.startsWith('http')) {
    return url;
  }
  // Remover /api de la URL base si existe
  const baseUrl = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api').replace('/api', '');
  return `${baseUrl}${url}`;
};

const workplaceSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  address: z.string().optional(),
  city: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
  banner: z.string().optional(),
});

type WorkplaceFormData = z.infer<typeof workplaceSchema>;

export default function BarbershopsPage() {
  const [workplaces, setWorkplaces] = useState<Workplace[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedWorkplace, setSelectedWorkplace] = useState<Workplace | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingBanner, setUploadingBanner] = useState(false);
  const [workplaceMedia, setWorkplaceMedia] = useState<WorkplaceMedia[]>([]);
  const [uploadingMedia, setUploadingMedia] = useState(false);
  const [showMediaGallery, setShowMediaGallery] = useState(false);
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false);
  const [mediaWorkplace, setMediaWorkplace] = useState<Workplace | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const bannerInputRef = useRef<HTMLInputElement>(null);
  const mediaInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<WorkplaceFormData>({
    resolver: zodResolver(workplaceSchema),
  });

  const watchedImage = watch('image');
  const watchedBanner = watch('banner');

  const loadWorkplaceMedia = useCallback(async (workplaceId: string) => {
    try {
      const media = await workplaceMediaService.getWorkplaceMedia(workplaceId);
      setWorkplaceMedia(media);
    } catch (err) {
      console.error('Error loading workplace media:', err);
    }
  }, []);

  const handleOpenMediaModal = async (workplace: Workplace) => {
    setMediaWorkplace(workplace);
    setIsMediaModalOpen(true);
    await loadWorkplaceMedia(workplace.id);
  };

  const handleCloseMediaModal = () => {
    setIsMediaModalOpen(false);
    setMediaWorkplace(null);
    setWorkplaceMedia([]);
    setSelectedFiles([]);
  };

  const loadWorkplaces = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await workplacesService.getWorkplaces(currentPage, 10, searchTerm || undefined);
      setWorkplaces(response.data);
      setTotalPages(response.pagination.totalPages);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al cargar barberías');
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, searchTerm]);

  useEffect(() => {
    loadWorkplaces();
  }, [loadWorkplaces]);

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
    setCurrentPage(1);
  };

  const hasActiveFilters = searchTerm !== '';

  const handleCreate = () => {
    setIsEditMode(false);
    setSelectedWorkplace(null);
    reset({
      name: '',
      address: '',
      city: '',
      description: '',
      image: '',
      banner: '',
    });
    setIsModalOpen(true);
  };

  const handleEdit = (workplace: Workplace) => {
    setIsEditMode(true);
    setSelectedWorkplace(workplace);
    setValue('name', workplace.name);
    setValue('address', workplace.address || '');
    setValue('city', workplace.city || '');
    setValue('description', workplace.description || '');
    setValue('image', workplace.image || '');
    setValue('banner', workplace.banner || '');
    setIsModalOpen(true);
  };

  const handleView = async (workplace: Workplace) => {
    try {
      const fullWorkplace = await workplacesService.getWorkplaceById(workplace.id);
      setSelectedWorkplace(fullWorkplace);
      await loadWorkplaceMedia(workplace.id);
      setIsModalOpen(true);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al cargar barbería');
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    try {
      const url = await uploadService.uploadFile(file);
      setValue('image', url);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Error al subir imagen');
    } finally {
      setUploadingImage(false);
      if (imageInputRef.current) {
        imageInputRef.current.value = '';
      }
    }
  };

  const handleBannerUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingBanner(true);
    try {
      const url = await uploadService.uploadFile(file);
      setValue('banner', url);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Error al subir banner');
    } finally {
      setUploadingBanner(false);
      if (bannerInputRef.current) {
        bannerInputRef.current.value = '';
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFiles(Array.from(files));
    }
    // Reset input value to allow selecting the same files again
    if (mediaInputRef.current) {
      mediaInputRef.current.value = '';
    }
  };

  const handleMediaUpload = async () => {
    if (selectedFiles.length === 0) return;
    
    const workplace = mediaWorkplace || selectedWorkplace;
    if (!workplace) return;

    setUploadingMedia(true);
    try {
      const uploadPromises = selectedFiles.map(async (file) => {
        const url = await uploadService.uploadFile(file);
        const type = file.type.startsWith('video/') ? 'video' : 'image';
        return {
          type,
          url,
          caption: '',
        };
      });

      const mediaItems = await Promise.all(uploadPromises);
      await workplaceMediaService.createMultipleMedia(workplace.id, mediaItems);
      await loadWorkplaceMedia(workplace.id);
      setSelectedFiles([]);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Error al subir multimedia');
    } finally {
      setUploadingMedia(false);
    }
  };

  const handleDeleteMedia = async (mediaId: string) => {
    const workplace = mediaWorkplace || selectedWorkplace;
    if (!workplace) return;
    try {
      await workplaceMediaService.deleteMedia(mediaId);
      await loadWorkplaceMedia(workplace.id);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al eliminar multimedia');
    }
  };

  const onSubmit = async (data: WorkplaceFormData) => {
    try {
      setError(null);
      if (isEditMode && selectedWorkplace) {
        const updateData: UpdateWorkplaceData = {
          name: data.name,
          address: data.address || undefined,
          city: data.city || undefined,
          description: data.description || undefined,
          image: data.image || undefined,
          banner: data.banner || undefined,
        };
        await workplacesService.updateWorkplace(selectedWorkplace.id, updateData);
      } else {
        const createData: CreateWorkplaceData = {
          name: data.name,
          address: data.address || undefined,
          city: data.city || undefined,
          description: data.description || undefined,
          image: data.image || undefined,
          banner: data.banner || undefined,
        };
        await workplacesService.createWorkplace(createData);
      }
      
      setIsModalOpen(false);
      reset();
      loadWorkplaces();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al guardar barbería');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setError(null);
      await workplacesService.deleteWorkplace(id);
      setDeleteConfirm(null);
      loadWorkplaces();
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || 'Error al eliminar barbería';
      setError(errorMessage);
      setDeleteConfirm(null); // Cerrar el modal de confirmación para que el usuario vea el error
    }
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3 mb-2">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Scissors className="w-8 h-8 text-indigo-600" />
            </div>
            Barberías
          </h1>
          <p className="text-gray-600 text-lg">Gestiona todas las barberías y lugares de trabajo</p>
        </div>
        <button
          onClick={handleCreate}
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-6 py-3 rounded-xl hover:from-indigo-700 hover:to-indigo-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <Plus className="w-5 h-5" />
          Nueva Barbería
        </button>
      </div>

      {/* Error message */}
      {error && (
        <div className="mb-6 bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-lg shadow-sm animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <X className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="font-medium">
                {error.includes('associated barbers') || error.includes('barberos asociados')
                  ? 'No se puede eliminar la barbería porque tiene barberos activos trabajando ahí. Por favor, elimina o reasigna los barberos primero.'
                  : error}
              </span>
            </div>
            <button
              onClick={() => setError(null)}
              className="ml-4 text-red-500 hover:text-red-700 transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>
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
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Buscar</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Nombre, dirección o ciudad..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white"
                  />
                </div>
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
        ) : workplaces.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No se encontraron barberías
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Barbería
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Ubicación
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Calificación
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Barberos
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
                  {workplaces.map((workplace) => (
                    <tr key={workplace.id} className="hover:bg-indigo-50/50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-12 w-12 rounded-lg overflow-hidden border-2 border-indigo-300 shadow-md">
                            {workplace.image ? (
                              <img
                                src={getImageUrl(workplace.image)}
                                alt={workplace.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const parent = target.parentElement;
                                  if (parent) {
                                    parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center"><Scissors class="w-6 h-6 text-white" /></div>`;
                                  }
                                }}
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
                                <Scissors className="w-6 h-6 text-white" />
                              </div>
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-semibold text-gray-900">{workplace.name}</div>
                            {workplace.description && (
                              <div className="text-sm text-gray-500 line-clamp-1 max-w-xs">
                                {workplace.description}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-1 text-sm text-gray-900">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <div>
                            {workplace.address && <div>{workplace.address}</div>}
                            {workplace.city && <div className="text-gray-500">{workplace.city}</div>}
                            {!workplace.address && !workplace.city && <span className="text-gray-400">-</span>}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-sm font-medium text-gray-900">
                            {workplace.rating.toFixed(1)}
                          </span>
                          <span className="text-sm text-gray-500">
                            ({workplace.reviews})
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-1 text-sm text-gray-900">
                          <Users className="w-4 h-4 text-gray-400" />
                          {workplace.barbersCount || 0}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(workplace.createdAt).toLocaleDateString('es-VE')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleView(workplace)}
                            className="p-2 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-lg transition"
                            title="Ver detalles"
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleEdit(workplace)}
                            className="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-100 rounded-lg transition"
                            title="Editar"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleOpenMediaModal(workplace)}
                            className="p-2 text-purple-600 hover:text-purple-700 hover:bg-purple-100 rounded-lg transition"
                            title="Gestionar Multimedia"
                          >
                            <ImageIcon className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(workplace.id)}
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
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto m-4">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">
                {isEditMode ? 'Editar Barbería' : selectedWorkplace ? 'Detalles de la Barbería' : 'Nueva Barbería'}
              </h2>
            </div>

            {selectedWorkplace && !isEditMode ? (
              // View mode
              <div className="p-6 space-y-4">
                {/* ID Section */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">ID de Barbería</label>
                  <div className="flex items-center gap-2">
                    <code className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded text-sm font-mono text-gray-800">
                      {selectedWorkplace.id}
                    </code>
                    <button
                      onClick={() => copyToClipboard(selectedWorkplace.id, selectedWorkplace.id)}
                      className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
                      title="Copiar ID"
                    >
                      {copiedId === selectedWorkplace.id ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {copiedId === selectedWorkplace.id && (
                    <p className="mt-2 text-sm text-green-600 flex items-center gap-1">
                      <Check className="w-4 h-4" />
                      ID copiado al portapapeles
                    </p>
                  )}
                </div>

                {/* Banner Preview */}
                {selectedWorkplace.banner && (
                  <div className="rounded-lg overflow-hidden border border-gray-200">
                    <img
                        src={getImageUrl(selectedWorkplace.banner)}
                      alt="Banner"
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre</label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">{selectedWorkplace.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Ciudad</label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">{selectedWorkplace.city || '-'}</p>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Dirección</label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">{selectedWorkplace.address || '-'}</p>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Descripción</label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">{selectedWorkplace.description || '-'}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Calificación</label>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-medium">{selectedWorkplace.rating.toFixed(1)}</span>
                      <span className="text-sm text-gray-500">({selectedWorkplace.reviews} reseñas)</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Barberos</label>
                    <p className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">{selectedWorkplace.barbersCount || 0}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Imagen</label>
                    <p className="text-sm text-gray-500 break-all">{selectedWorkplace.image || '-'}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Banner</label>
                    <p className="text-sm text-gray-500 break-all">{selectedWorkplace.banner || '-'}</p>
                  </div>
                </div>

                {/* Media Gallery Section */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Galería Multimedia</h3>
                    <div className="flex gap-2">
                      <input
                        ref={mediaInputRef}
                        type="file"
                        accept="image/*,video/*"
                        multiple
                        onChange={handleMediaUpload}
                        className="hidden"
                        id="media-upload"
                      />
                      <label
                        htmlFor="media-upload"
                        className={`px-4 py-2 bg-indigo-600 text-white rounded-lg cursor-pointer hover:bg-indigo-700 transition flex items-center gap-2 ${uploadingMedia ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {uploadingMedia ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            <span>Subiendo...</span>
                          </>
                        ) : (
                          <>
                            <Upload className="w-4 h-4" />
                            <span>Agregar Multimedia</span>
                          </>
                        )}
                      </label>
                    </div>
                  </div>

                  {workplaceMedia.length === 0 ? (
                    <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
                      <ImageIcon className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                      <p>No hay multimedia agregada</p>
                      <p className="text-sm">Sube imágenes o videos para la galería</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-4">
                      {workplaceMedia.map((media) => (
                        <div key={media.id} className="relative group">
                          <div className="aspect-square rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                            {media.type === 'video' ? (
                              <video
                                src={getImageUrl(media.url)}
                                className="w-full h-full object-cover"
                                controls={false}
                                crossOrigin="anonymous"
                              >
                                Tu navegador no soporta videos.
                              </video>
                            ) : (
                              <img
                                src={getImageUrl(media.url)}
                                alt={media.caption || 'Media'}
                                className="w-full h-full object-cover"
                                crossOrigin="anonymous"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).style.display = 'none';
                                }}
                              />
                            )}
                          </div>
                          <button
                            onClick={() => handleDeleteMedia(media.id)}
                            className="absolute top-2 right-2 p-1.5 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-red-700"
                            title="Eliminar"
                          >
                            <XCircle className="w-4 h-4" />
                          </button>
                          {media.caption && (
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-2 rounded-b-lg">
                              {media.caption}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex justify-end gap-2 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setSelectedWorkplace(null);
                      setWorkplaceMedia([]);
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
                  <div className="col-span-2">
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
                    <input
                      {...register('address')}
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad</label>
                    <input
                      {...register('city')}
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                    <textarea
                      {...register('description')}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Imagen de Perfil</label>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <input
                          {...register('image')}
                          type="text"
                          placeholder="URL de imagen o sube un archivo"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                        />
                        <input
                          ref={imageInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="image-upload-form"
                        />
                        <label
                          htmlFor="image-upload-form"
                          className={`px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition flex items-center gap-2 ${uploadingImage ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          {uploadingImage ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-indigo-600"></div>
                              <span>Subiendo...</span>
                            </>
                          ) : (
                            <>
                              <Upload className="w-4 h-4" />
                              <span>Subir</span>
                            </>
                          )}
                        </label>
                      </div>
                      {watchedImage && (
                        <div className="rounded-lg overflow-hidden border border-gray-200 max-w-xs">
                          <img
                                src={getImageUrl(watchedImage)}
                            alt="Preview"
                            className="w-full h-32 object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Banner</label>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <input
                          {...register('banner')}
                          type="text"
                          placeholder="URL de banner o sube un archivo"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                        />
                        <input
                          ref={bannerInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleBannerUpload}
                          className="hidden"
                          id="banner-upload-form"
                        />
                        <label
                          htmlFor="banner-upload-form"
                          className={`px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition flex items-center gap-2 ${uploadingBanner ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          {uploadingBanner ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-indigo-600"></div>
                              <span>Subiendo...</span>
                            </>
                          ) : (
                            <>
                              <Upload className="w-4 h-4" />
                              <span>Subir</span>
                            </>
                          )}
                        </label>
                      </div>
                      {watchedBanner && (
                        <div className="rounded-lg overflow-hidden border border-gray-200">
                          <img
                                src={getImageUrl(watchedBanner)}
                            alt="Banner Preview"
                            className="w-full h-48 object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      setSelectedWorkplace(null);
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

      {/* Media Management Modal */}
      {isMediaModalOpen && mediaWorkplace && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto m-4">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Galería Multimedia</h2>
                <p className="text-sm text-gray-600 mt-1">{mediaWorkplace.name}</p>
              </div>
              <button
                onClick={handleCloseMediaModal}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-lg transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {/* Upload Section */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Agregar Multimedia</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <input
                      ref={mediaInputRef}
                      type="file"
                      accept="image/*,video/*"
                      multiple
                      onChange={handleFileSelect}
                      className="hidden"
                      id="media-upload-modal"
                    />
                    <label
                      htmlFor="media-upload-modal"
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg cursor-pointer hover:bg-gray-700 transition flex items-center gap-2"
                    >
                      <Upload className="w-4 h-4" />
                      <span>Seleccionar Archivos</span>
                    </label>
                    {selectedFiles.length > 0 && (
                      <button
                        onClick={handleMediaUpload}
                        disabled={uploadingMedia}
                        className={`px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2 ${uploadingMedia ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {uploadingMedia ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            <span>Subiendo...</span>
                          </>
                        ) : (
                          <>
                            <Upload className="w-4 h-4" />
                            <span>Subir {selectedFiles.length} archivo{selectedFiles.length > 1 ? 's' : ''}</span>
                          </>
                        )}
                      </button>
                    )}
                    {selectedFiles.length > 0 && (
                      <button
                        onClick={() => setSelectedFiles([])}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                      >
                        Limpiar
                      </button>
                    )}
                  </div>
                  {selectedFiles.length > 0 && (
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Archivos seleccionados ({selectedFiles.length}):
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {selectedFiles.map((file, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                            {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-4">Puedes seleccionar múltiples imágenes o videos a la vez</p>
              </div>

              {/* Media Gallery */}
              {workplaceMedia.length === 0 ? (
                <div className="text-center py-12 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
                  <ImageIcon className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-lg font-medium">No hay multimedia agregada</p>
                  <p className="text-sm mt-2">Sube imágenes o videos para la galería</p>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-4">
                  {workplaceMedia.map((media) => (
                    <div key={media.id} className="relative group">
                      <div className="aspect-square rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                        {media.type === 'video' ? (
                          <video
                            src={getImageUrl(media.url)}
                            className="w-full h-full object-cover"
                            controls={false}
                            crossOrigin="anonymous"
                          >
                            Tu navegador no soporta videos.
                          </video>
                        ) : (
                          <img
                            src={getImageUrl(media.url)}
                            alt={media.caption || 'Media'}
                            className="w-full h-full object-cover"
                            crossOrigin="anonymous"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        )}
                      </div>
                      <button
                        onClick={() => handleDeleteMedia(media.id)}
                        className="absolute top-2 right-2 p-1.5 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-red-700 shadow-lg"
                        title="Eliminar"
                      >
                        <XCircle className="w-4 h-4" />
                      </button>
                      {media.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-2 rounded-b-lg">
                          {media.caption}
                        </div>
                      )}
                      {media.type === 'video' && (
                        <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                          <Video className="w-3 h-3 inline mr-1" />
                          Video
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-end">
              <button
                onClick={handleCloseMediaModal}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full m-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Confirmar Eliminación</h3>
            <p className="text-gray-600 mb-6">
              ¿Estás seguro de que deseas eliminar esta barbería? Esta acción no se puede deshacer.
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
