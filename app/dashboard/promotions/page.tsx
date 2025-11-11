'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Tag, Plus, Search, Edit, Trash2, Eye, Filter, X, Copy, Check, ChevronDown, ChevronUp, Upload, Image as ImageIcon, Calendar, Percent, DollarSign } from 'lucide-react';
import { promotionsService, Promotion, CreatePromotionData, UpdatePromotionData } from '@/lib/promotions';
import { usersService } from '@/lib/users';
import { uploadService } from '@/lib/upload';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';

// Helper para construir URLs de imágenes (sin /api)
const getImageUrl = (url: string): string => {
  if (url.startsWith('http')) {
    return url;
  }
  const baseUrl = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api').replace('/api', '');
  return `${baseUrl}${url}`;
};

const promotionSchema = z.object({
  title: z.string().min(2, 'El título debe tener al menos 2 caracteres'),
  description: z.string().min(5, 'La descripción debe tener al menos 5 caracteres'),
  code: z.string().min(2, 'El código debe tener al menos 2 caracteres'),
  discount: z.number().optional(),
  discountAmount: z.number().optional(),
  validFrom: z.string().min(1, 'La fecha de inicio es requerida'),
  validUntil: z.string().min(1, 'La fecha de fin es requerida'),
  isActive: z.boolean().optional(),
  image: z.string().optional(),
  barberId: z.string().optional(),
}).refine((data) => data.discount || data.discountAmount, {
  message: 'Debe especificar un descuento (porcentaje o monto)',
  path: ['discount'],
});

type PromotionFormData = z.infer<typeof promotionSchema>;

export default function PromotionsPage() {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedPromotion, setSelectedPromotion] = useState<Promotion | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [isActiveFilter, setIsActiveFilter] = useState<boolean | undefined>(undefined);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [barbers, setBarbers] = useState<any[]>([]);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<PromotionFormData>({
    resolver: zodResolver(promotionSchema),
    defaultValues: {
      isActive: true,
    },
  });

  const watchedImage = watch('image');
  const watchedDiscount = watch('discount');
  const watchedDiscountAmount = watch('discountAmount');

  const loadBarbers = useCallback(async () => {
    try {
      const barbersList = await usersService.getBarbers();
      setBarbers(barbersList);
    } catch (err) {
      console.error('Error loading barbers:', err);
    }
  }, []);

  const loadPromotions = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await promotionsService.getPromotions(
        currentPage,
        10,
        searchTerm || undefined,
        isActiveFilter
      );
      setPromotions(response.data);
      setTotalPages(response.pagination.totalPages);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al cargar promociones');
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, searchTerm, isActiveFilter]);

  useEffect(() => {
    loadPromotions();
    loadBarbers();
  }, [loadPromotions, loadBarbers]);

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
    setIsActiveFilter(undefined);
    setCurrentPage(1);
  };

  const hasActiveFilters = searchTerm !== '' || isActiveFilter !== undefined;

  const handleCreate = () => {
    setIsEditMode(false);
    setSelectedPromotion(null);
    reset({
      isActive: true,
    });
    setIsModalOpen(true);
  };

  const handleView = (promotion: Promotion) => {
    setSelectedPromotion(promotion);
    setIsEditMode(false);
    setIsModalOpen(true);
  };

  const handleEdit = (promotion: Promotion) => {
    setSelectedPromotion(promotion);
    setIsEditMode(true);
    const validFrom = new Date(promotion.validFrom);
    const validUntil = new Date(promotion.validUntil);
    reset({
      title: promotion.title,
      description: promotion.description,
      code: promotion.code,
      discount: promotion.discount || undefined,
      discountAmount: promotion.discountAmount || undefined,
      validFrom: format(validFrom, 'yyyy-MM-dd'),
      validUntil: format(validUntil, 'yyyy-MM-dd'),
      isActive: promotion.isActive,
      image: promotion.image || '',
      barberId: promotion.barberId || '',
    });
    setIsModalOpen(true);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    try {
      const url = await uploadService.uploadFile(file);
      setValue('image', url);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al subir imagen');
    } finally {
      setUploadingImage(false);
      if (imageInputRef.current) {
        imageInputRef.current.value = '';
      }
    }
  };

  const onSubmit = async (data: PromotionFormData) => {
    try {
      setError(null);
      if (isEditMode && selectedPromotion) {
        const updateData: UpdatePromotionData = {
          title: data.title,
          description: data.description,
          code: data.code,
          discount: data.discount,
          discountAmount: data.discountAmount,
          validFrom: new Date(data.validFrom).toISOString(),
          validUntil: new Date(data.validUntil).toISOString(),
          isActive: data.isActive,
          image: data.image,
          barberId: data.barberId || undefined,
        };
        await promotionsService.updatePromotion(selectedPromotion.id, updateData);
      } else {
        const createData: CreatePromotionData = {
          title: data.title,
          description: data.description,
          code: data.code,
          discount: data.discount,
          discountAmount: data.discountAmount,
          validFrom: new Date(data.validFrom).toISOString(),
          validUntil: new Date(data.validUntil).toISOString(),
          isActive: data.isActive ?? true,
          image: data.image,
          barberId: data.barberId || undefined,
        };
        await promotionsService.createPromotion(createData);
      }
      setIsModalOpen(false);
      loadPromotions();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al guardar promoción');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setError(null);
      await promotionsService.deletePromotion(id);
      setDeleteConfirm(null);
      loadPromotions();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al eliminar promoción');
    }
  };

  const getStatusBadge = (promotion: Promotion) => {
    const now = new Date();
    const validFrom = new Date(promotion.validFrom);
    const validUntil = new Date(promotion.validUntil);

    if (!promotion.isActive) {
      return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">Inactiva</span>;
    }

    if (now < validFrom) {
      return <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">Próxima</span>;
    }

    if (now > validUntil) {
      return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">Expirada</span>;
    }

    return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Activa</span>;
  };

  const getDiscountDisplay = (promotion: Promotion) => {
    if (promotion.discount) {
      return `${promotion.discount}%`;
    }
    if (promotion.discountAmount) {
      return `$${promotion.discountAmount.toFixed(2)}`;
    }
    return 'N/A';
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Tag className="w-8 h-8 text-blue-600" />
            Promociones
          </h1>
          <p className="text-gray-600 mt-2">Gestiona las promociones y ofertas especiales</p>
        </div>
        <button
          onClick={handleCreate}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Nueva Promoción
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
                    placeholder="Título, descripción o código..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
                <select
                  value={isActiveFilter === undefined ? 'ALL' : isActiveFilter ? 'true' : 'false'}
                  onChange={(e) => {
                    const value = e.target.value;
                    setIsActiveFilter(value === 'ALL' ? undefined : value === 'true');
                  }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="ALL">Todos</option>
                  <option value="true">Activas</option>
                  <option value="false">Inactivas</option>
                </select>
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
            <p className="mt-4 text-gray-500">Cargando promociones...</p>
          </div>
        ) : promotions.length === 0 ? (
          <div className="p-12 text-center">
            <Tag className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No se encontraron promociones</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Imagen</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Código</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descuento</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Válida Desde</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Válida Hasta</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {promotions.map((promotion) => (
                    <tr key={promotion.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        {promotion.image ? (
                          <img
                            src={getImageUrl(promotion.image)}
                            alt={promotion.title}
                            className="w-16 h-16 object-cover rounded-lg"
                            crossOrigin="anonymous"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                            <ImageIcon className="w-6 h-6 text-gray-400" />
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{promotion.title}</div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">{promotion.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <code className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm font-mono">
                            {promotion.code}
                          </code>
                          <button
                            onClick={() => copyToClipboard(promotion.code, promotion.id)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            {copiedId === promotion.id ? (
                              <Check className="w-4 h-4 text-green-600" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-medium text-gray-900">{getDiscountDisplay(promotion)}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {format(new Date(promotion.validFrom), 'dd/MM/yyyy')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {format(new Date(promotion.validUntil), 'dd/MM/yyyy')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(promotion)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleView(promotion)}
                            className="text-blue-600 hover:text-blue-900"
                            title="Ver detalles"
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleEdit(promotion)}
                            className="text-yellow-600 hover:text-yellow-900"
                            title="Editar"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(promotion.id)}
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Página {currentPage} de {totalPages}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                  >
                    Anterior
                  </button>
                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  {isEditMode ? 'Editar Promoción' : selectedPromotion ? 'Detalles de Promoción' : 'Nueva Promoción'}
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {!isEditMode && selectedPromotion ? (
              // View Mode
              <div className="p-6 space-y-6">
                {selectedPromotion.image && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Imagen</label>
                    <img
                      src={getImageUrl(selectedPromotion.image)}
                      alt={selectedPromotion.title}
                      className="w-full h-64 object-cover rounded-lg"
                      crossOrigin="anonymous"
                    />
                  </div>
                )}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
                    <p className="text-gray-900">{selectedPromotion.title}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Código</label>
                    <code className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm font-mono">
                      {selectedPromotion.code}
                    </code>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                    <p className="text-gray-900">{selectedPromotion.description}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Descuento</label>
                    <p className="text-gray-900">{getDiscountDisplay(selectedPromotion)}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                    {getStatusBadge(selectedPromotion)}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Válida Desde</label>
                    <p className="text-gray-900">{format(new Date(selectedPromotion.validFrom), 'dd/MM/yyyy')}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Válida Hasta</label>
                    <p className="text-gray-900">{format(new Date(selectedPromotion.validUntil), 'dd/MM/yyyy')}</p>
                  </div>
                  {selectedPromotion.barber && (
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Barbero</label>
                      <p className="text-gray-900">{selectedPromotion.barber.name} ({selectedPromotion.barber.email})</p>
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ID</label>
                    <div className="flex items-center gap-2">
                      <code className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs font-mono">
                        {selectedPromotion.id}
                      </code>
                      <button
                        onClick={() => copyToClipboard(selectedPromotion.id, selectedPromotion.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        {copiedId === selectedPromotion.id ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Edit/Create Mode
              <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Título *</label>
                  <input
                    {...register('title')}
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Descripción *</label>
                  <textarea
                    {...register('description')}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Código *</label>
                  <input
                    {...register('code')}
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono"
                  />
                  {errors.code && <p className="mt-1 text-sm text-red-600">{errors.code.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Descuento (%)</label>
                    <div className="relative">
                      <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register('discount', { valueAsNumber: true })}
                        type="number"
                        step="0.01"
                        min="0"
                        max="100"
                        placeholder="Ej: 10"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    {errors.discount && <p className="mt-1 text-sm text-red-600">{errors.discount.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Descuento (Monto)</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register('discountAmount', { valueAsNumber: true })}
                        type="number"
                        step="0.01"
                        min="0"
                        placeholder="Ej: 50.00"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    {errors.discountAmount && <p className="mt-1 text-sm text-red-600">{errors.discountAmount.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Válida Desde *</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register('validFrom')}
                        type="date"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    {errors.validFrom && <p className="mt-1 text-sm text-red-600">{errors.validFrom.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Válida Hasta *</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        {...register('validUntil')}
                        type="date"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    {errors.validUntil && <p className="mt-1 text-sm text-red-600">{errors.validUntil.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Barbero (Opcional)</label>
                  <select
                    {...register('barberId')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Ninguno (Promoción general)</option>
                    {barbers.map((barber) => (
                      <option key={barber.id} value={barber.id}>
                        {barber.name} ({barber.email})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Imagen</label>
                  <div className="space-y-2">
                    {watchedImage && (
                      <img
                        src={getImageUrl(watchedImage)}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded-lg"
                        crossOrigin="anonymous"
                      />
                    )}
                    <input
                      ref={imageInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => imageInputRef.current?.click()}
                      disabled={uploadingImage}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
                    >
                      {uploadingImage ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                          <span>Subiendo...</span>
                        </>
                      ) : (
                        <>
                          <Upload className="w-5 h-5" />
                          <span>{watchedImage ? 'Cambiar Imagen' : 'Subir Imagen'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <input
                      {...register('isActive')}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">Activa</span>
                  </label>
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
              ¿Estás seguro de que deseas eliminar esta promoción? Esta acción no se puede deshacer.
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
