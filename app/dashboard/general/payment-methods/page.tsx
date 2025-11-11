'use client';

import { useState, useEffect, useCallback } from 'react';
import { CreditCard, Plus, Search, Edit, Trash2, Eye, Filter, X, Copy, Check, ChevronDown, ChevronUp, ToggleLeft, ToggleRight } from 'lucide-react';
import { paymentMethodsService, PaymentMethod, CreatePaymentMethodData, UpdatePaymentMethodData, PaymentMethodType, PaymentMethodConfig } from '@/lib/payment-methods';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const paymentMethodSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  icon: z.string().optional(),
  type: z.enum(['PAGO_MOVIL', 'BINANCE', 'EFECTIVO', 'TRANSFERENCIA', 'OTRO']).optional(),
  isActive: z.boolean().optional(),
  // Campos dinámicos para Pago Móvil
  phone: z.string().optional(),
  bank: z.string().optional(),
  idNumber: z.string().optional(),
  accountName: z.string().optional(),
  // Campos dinámicos para Binance
  wallet: z.string().optional(),
  network: z.string().optional(),
  // Campos dinámicos para Transferencia
  accountNumber: z.string().optional(),
  accountType: z.string().optional(),
  bankName: z.string().optional(),
  accountHolder: z.string().optional(),
});

type PaymentMethodFormData = z.infer<typeof paymentMethodSchema>;

export default function PaymentMethodsPage() {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [isActiveFilter, setIsActiveFilter] = useState<boolean | undefined>(undefined);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<PaymentMethodFormData>({
    resolver: zodResolver(paymentMethodSchema),
    defaultValues: {
      isActive: true,
    },
  });

  const watchedIsActive = watch('isActive');
  const watchedType = watch('type');

  const loadPaymentMethods = useCallback(async () => {
    setIsLoading(true);
    try {
      const methods = await paymentMethodsService.getPaymentMethods();
      let filtered = methods;
      
      if (searchTerm) {
        filtered = filtered.filter(method => 
          method.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      
      if (isActiveFilter !== undefined) {
        filtered = filtered.filter(method => method.isActive === isActiveFilter);
      }
      
      setPaymentMethods(filtered);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al cargar métodos de pago');
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm, isActiveFilter]);

  useEffect(() => {
    loadPaymentMethods();
  }, [loadPaymentMethods]);

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
  };

  const hasActiveFilters = searchTerm !== '' || isActiveFilter !== undefined;

  const handleCreate = () => {
    setIsEditMode(false);
    setSelectedPaymentMethod(null);
    reset({
      isActive: true,
    });
    setIsModalOpen(true);
  };

  const handleView = (paymentMethod: PaymentMethod) => {
    setSelectedPaymentMethod(paymentMethod);
    setIsEditMode(false);
    setIsModalOpen(true);
  };

  const handleEdit = (paymentMethod: PaymentMethod) => {
    setSelectedPaymentMethod(paymentMethod);
    setIsEditMode(true);
    const config = paymentMethod.config as PaymentMethodConfig || {};
    reset({
      name: paymentMethod.name,
      icon: paymentMethod.icon || '',
      type: (paymentMethod.type as PaymentMethodType) || undefined,
      isActive: paymentMethod.isActive,
      // Cargar campos de config
      phone: config.phone || '',
      bank: config.bank || '',
      idNumber: config.idNumber || '',
      accountName: config.name || '',
      wallet: config.wallet || '',
      network: config.network || '',
      accountNumber: config.accountNumber || '',
      accountType: config.accountType || '',
      bankName: config.bankName || '',
      accountHolder: config.accountHolder || '',
    });
    setIsModalOpen(true);
  };

  const toggleActive = async (paymentMethod: PaymentMethod) => {
    try {
      setError(null);
      await paymentMethodsService.updatePaymentMethod(paymentMethod.id, {
        isActive: !paymentMethod.isActive,
      });
      loadPaymentMethods();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al actualizar método de pago');
    }
  };

  const buildConfig = (data: PaymentMethodFormData): PaymentMethodConfig | undefined => {
    if (!data.type || data.type === 'EFECTIVO' || data.type === 'OTRO') {
      return undefined;
    }

    const config: PaymentMethodConfig = {};

    if (data.type === 'PAGO_MOVIL') {
      if (data.phone) config.phone = data.phone;
      if (data.bank) config.bank = data.bank;
      if (data.idNumber) config.idNumber = data.idNumber;
      if (data.accountName) config.name = data.accountName;
    } else if (data.type === 'BINANCE') {
      if (data.wallet) config.wallet = data.wallet;
      if (data.network) config.network = data.network;
    } else if (data.type === 'TRANSFERENCIA') {
      if (data.accountNumber) config.accountNumber = data.accountNumber;
      if (data.accountType) config.accountType = data.accountType;
      if (data.bankName) config.bankName = data.bankName;
      if (data.accountHolder) config.accountHolder = data.accountHolder;
    }

    return Object.keys(config).length > 0 ? config : undefined;
  };

  const onSubmit = async (data: PaymentMethodFormData) => {
    try {
      setError(null);
      const config = buildConfig(data);
      
      if (isEditMode && selectedPaymentMethod) {
        const updateData: UpdatePaymentMethodData = {
          name: data.name,
          icon: data.icon || undefined,
          type: data.type || undefined,
          config: config,
          isActive: data.isActive,
        };
        await paymentMethodsService.updatePaymentMethod(selectedPaymentMethod.id, updateData);
      } else {
        const createData: CreatePaymentMethodData = {
          name: data.name,
          icon: data.icon || undefined,
          type: data.type || undefined,
          config: config,
          isActive: data.isActive ?? true,
        };
        await paymentMethodsService.createPaymentMethod(createData);
      }
      setIsModalOpen(false);
      loadPaymentMethods();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al guardar método de pago');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setError(null);
      await paymentMethodsService.deletePaymentMethod(id);
      setDeleteConfirm(null);
      loadPaymentMethods();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al eliminar método de pago');
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <CreditCard className="w-8 h-8 text-blue-600" />
            Métodos de Pago
          </h1>
          <p className="text-gray-600 mt-2">Gestiona los métodos de pago disponibles</p>
        </div>
        <button
          onClick={handleCreate}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Nuevo Método
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
                    placeholder="Nombre del método..."
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
                  <option value="true">Activos</option>
                  <option value="false">Inactivos</option>
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
            <p className="mt-4 text-gray-500">Cargando métodos de pago...</p>
          </div>
        ) : paymentMethods.length === 0 ? (
          <div className="p-12 text-center">
            <CreditCard className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No se encontraron métodos de pago</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Icono</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Creado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paymentMethods.map((paymentMethod) => (
                  <tr key={paymentMethod.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-2xl">{paymentMethod.icon || '💳'}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{paymentMethod.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {paymentMethod.type ? (
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                          {paymentMethod.type === 'PAGO_MOVIL' ? 'Pago Móvil' :
                           paymentMethod.type === 'BINANCE' ? 'Binance' :
                           paymentMethod.type === 'TRANSFERENCIA' ? 'Transferencia' :
                           paymentMethod.type === 'EFECTIVO' ? 'Efectivo' :
                           paymentMethod.type}
                        </span>
                      ) : (
                        <span className="text-sm text-gray-400">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => toggleActive(paymentMethod)}
                        className="flex items-center gap-2"
                      >
                        {paymentMethod.isActive ? (
                          <>
                            <ToggleRight className="w-6 h-6 text-green-600" />
                            <span className="text-sm text-green-600 font-medium">Activo</span>
                          </>
                        ) : (
                          <>
                            <ToggleLeft className="w-6 h-6 text-gray-400" />
                            <span className="text-sm text-gray-400 font-medium">Inactivo</span>
                          </>
                        )}
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(paymentMethod.createdAt).toLocaleDateString('es-ES')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleView(paymentMethod)}
                          className="text-blue-600 hover:text-blue-900"
                          title="Ver detalles"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleEdit(paymentMethod)}
                          className="text-yellow-600 hover:text-yellow-900"
                          title="Editar"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(paymentMethod.id)}
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
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  {isEditMode ? 'Editar Método de Pago' : selectedPaymentMethod ? 'Detalles de Método de Pago' : 'Nuevo Método de Pago'}
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {!isEditMode && selectedPaymentMethod ? (
              // View Mode
              <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Icono</label>
                  <div className="text-4xl">{selectedPaymentMethod.icon || '💳'}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <p className="text-gray-900">{selectedPaymentMethod.name}</p>
                </div>
                {selectedPaymentMethod.type && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
                    <p className="text-gray-900">{selectedPaymentMethod.type}</p>
                  </div>
                )}
                {selectedPaymentMethod.config && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Información de Pago</label>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                      {Object.entries(selectedPaymentMethod.config as PaymentMethodConfig).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-sm font-medium text-gray-600 capitalize">
                            {key === 'phone' ? 'Teléfono' :
                             key === 'bank' ? 'Banco' :
                             key === 'idNumber' ? 'Cédula' :
                             key === 'name' ? 'Nombre' :
                             key === 'wallet' ? 'Wallet' :
                             key === 'network' ? 'Red' :
                             key === 'accountNumber' ? 'Número de Cuenta' :
                             key === 'accountType' ? 'Tipo de Cuenta' :
                             key === 'bankName' ? 'Banco' :
                             key === 'accountHolder' ? 'Titular' :
                             key}:
                          </span>
                          <span className="text-sm text-gray-900">{String(value)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    selectedPaymentMethod.isActive 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {selectedPaymentMethod.isActive ? 'Activo' : 'Inactivo'}
                  </span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ID</label>
                  <div className="flex items-center gap-2">
                    <code className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs font-mono">
                      {selectedPaymentMethod.id}
                    </code>
                    <button
                      onClick={() => copyToClipboard(selectedPaymentMethod.id, selectedPaymentMethod.id)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      {copiedId === selectedPaymentMethod.id ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Edit/Create Mode
              <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
                  <input
                    {...register('name')}
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Método</label>
                  <select
                    {...register('type')}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecciona un tipo (opcional)</option>
                    <option value="PAGO_MOVIL">Pago Móvil</option>
                    <option value="BINANCE">Binance</option>
                    <option value="TRANSFERENCIA">Transferencia Bancaria</option>
                    <option value="EFECTIVO">Efectivo</option>
                    <option value="OTRO">Otro</option>
                  </select>
                </div>

                {/* Campos dinámicos para Pago Móvil */}
                {watchedType === 'PAGO_MOVIL' && (
                  <div className="space-y-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="text-sm font-semibold text-blue-900">Datos de Pago Móvil</h4>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                      <input
                        {...register('phone')}
                        type="text"
                        placeholder="0412-1234567"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Banco</label>
                      <input
                        {...register('bank')}
                        type="text"
                        placeholder="Banco de Venezuela"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Cédula</label>
                      <input
                        {...register('idNumber')}
                        type="text"
                        placeholder="V-12345678"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del Titular</label>
                      <input
                        {...register('accountName')}
                        type="text"
                        placeholder="Juan Pérez"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}

                {/* Campos dinámicos para Binance */}
                {watchedType === 'BINANCE' && (
                  <div className="space-y-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="text-sm font-semibold text-yellow-900">Datos de Binance</h4>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Wallet Address</label>
                      <input
                        {...register('wallet')}
                        type="text"
                        placeholder="0x1234...5678"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Red (Network)</label>
                      <select
                        {...register('network')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Selecciona una red</option>
                        <option value="BSC">BSC (Binance Smart Chain)</option>
                        <option value="ETH">Ethereum</option>
                        <option value="TRX">Tron</option>
                        <option value="POLYGON">Polygon</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Campos dinámicos para Transferencia */}
                {watchedType === 'TRANSFERENCIA' && (
                  <div className="space-y-3 p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="text-sm font-semibold text-green-900">Datos de Transferencia Bancaria</h4>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Número de Cuenta</label>
                      <input
                        {...register('accountNumber')}
                        type="text"
                        placeholder="0102-1234-5678901234"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Cuenta</label>
                      <select
                        {...register('accountType')}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Selecciona un tipo</option>
                        <option value="CORRIENTE">Corriente</option>
                        <option value="AHORRO">Ahorro</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Banco</label>
                      <input
                        {...register('bankName')}
                        type="text"
                        placeholder="Banco de Venezuela"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Titular de la Cuenta</label>
                      <input
                        {...register('accountHolder')}
                        type="text"
                        placeholder="Juan Pérez"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Icono (Emoji o texto)</label>
                  <input
                    {...register('icon')}
                    type="text"
                    placeholder="Ej: 💳, 🏦, 💰"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="mt-1 text-xs text-gray-500">Puedes usar un emoji o texto corto</p>
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <input
                      {...register('isActive')}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">Activo</span>
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
              ¿Estás seguro de que deseas eliminar este método de pago? Esta acción no se puede deshacer.
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

