'use client';

import { useState, useEffect, useCallback } from 'react';
import { CreditCard, Search, CheckCircle, XCircle, Eye, Filter, X, ChevronDown, ChevronUp, Image as ImageIcon, User, Calendar, Clock } from 'lucide-react';
import { appointmentsService, Appointment } from '@/lib/appointments';
import { format } from 'date-fns';

// Helper para construir URLs de imágenes (sin /api)
const getImageUrl = (url: string): string => {
  if (url.startsWith('http')) {
    return url;
  }
  const baseUrl = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api').replace('/api', '');
  return `${baseUrl}${url}`;
};

type PaymentStatusFilter = 'ALL' | 'PENDING' | 'VERIFIED' | 'REJECTED';

export default function PaymentVerificationPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [verifying, setVerifying] = useState<string | null>(null);
  const [paymentStatusFilter, setPaymentStatusFilter] = useState<PaymentStatusFilter>('ALL');

  const loadAppointments = useCallback(async () => {
    setIsLoading(true);
    try {
      const statusParam = paymentStatusFilter === 'ALL' ? null : paymentStatusFilter;
      const response = await appointmentsService.getPendingPaymentAppointments(currentPage, 10, statusParam);
      setAppointments(response.data);
      setTotalPages(response.pagination.totalPages);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al cargar citas de verificación de pago');
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, paymentStatusFilter]);

  useEffect(() => {
    loadAppointments();
  }, [loadAppointments]);

  const handleView = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setIsModalOpen(true);
  };

  const handleVerify = async (id: string, verified: boolean) => {
    try {
      setVerifying(id);
      setError(null);
      await appointmentsService.verifyPayment(id, verified);
      setIsModalOpen(false);
      setSelectedAppointment(null);
      loadAppointments();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al verificar pago');
    } finally {
      setVerifying(null);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'PENDING':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Pendiente</span>;
      case 'VERIFIED':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Verificado</span>;
      case 'REJECTED':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">Rechazado</span>;
      default:
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">{status}</span>;
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <CreditCard className="w-8 h-8 text-blue-600" />
            Verificación de Pagos
          </h1>
          <p className="text-gray-600 mt-2">Revisa y verifica los comprobantes de pago de las citas</p>
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <Filter className="w-5 h-5" />
          <span>Filtros</span>
          {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-gray-700">Estado de Pago:</label>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setPaymentStatusFilter('ALL');
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  paymentStatusFilter === 'ALL'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => {
                  setPaymentStatusFilter('PENDING');
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  paymentStatusFilter === 'PENDING'
                    ? 'bg-yellow-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Pendientes
              </button>
              <button
                onClick={() => {
                  setPaymentStatusFilter('VERIFIED');
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  paymentStatusFilter === 'VERIFIED'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Verificados
              </button>
              <button
                onClick={() => {
                  setPaymentStatusFilter('REJECTED');
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  paymentStatusFilter === 'REJECTED'
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Rechazados
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {isLoading ? (
          <div className="p-12 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-500">Cargando citas...</p>
          </div>
        ) : appointments.length === 0 ? (
          <div className="p-12 text-center">
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <p className="text-gray-500">
              {paymentStatusFilter === 'ALL'
                ? 'No hay citas con comprobante de pago'
                : `No hay citas ${paymentStatusFilter === 'PENDING' ? 'pendientes' : paymentStatusFilter === 'VERIFIED' ? 'verificadas' : 'rechazadas'} de verificación de pago`}
            </p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Barbero</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hora</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Método de Pago</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comprobante</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {appointments.map((appointment) => (
                    <tr key={appointment.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {appointment.client.avatar ? (
                            <img
                              src={appointment.client.avatar}
                              alt={appointment.client.name}
                              className="w-10 h-10 rounded-full"
                            />
                          ) : appointment.client.avatarSeed ? (
                            <img
                              src={`https://api.dicebear.com/7.x/avataaars/png?seed=${appointment.client.avatarSeed}&size=512`}
                              alt={appointment.client.name}
                              className="w-10 h-10 rounded-full"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                              <User className="w-5 h-5 text-gray-400" />
                            </div>
                          )}
                          <div>
                            <div className="text-sm font-medium text-gray-900">{appointment.client.name}</div>
                            <div className="text-sm text-gray-500">{appointment.client.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{appointment.barber?.name || 'N/A'}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {format(new Date(appointment.date), 'dd/MM/yyyy')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {appointment.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{appointment.paymentMethodName || appointment.paymentMethod || 'N/A'}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(appointment.paymentStatus || 'PENDING')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {appointment.paymentProof ? (
                          <button
                            onClick={() => handleView(appointment)}
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-900"
                          >
                            <ImageIcon className="w-5 h-5" />
                            <span className="text-sm">Ver</span>
                          </button>
                        ) : (
                          <span className="text-sm text-gray-400">Sin comprobante</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleView(appointment)}
                            className="text-blue-600 hover:text-blue-900"
                            title="Ver detalles"
                          >
                            <Eye className="w-5 h-5" />
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

      {/* View/Verify Modal */}
      {isModalOpen && selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Verificar Pago</h2>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setSelectedAppointment(null);
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Información de la Cita */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cliente</label>
                  <p className="text-gray-900">{selectedAppointment.client.name}</p>
                  <p className="text-sm text-gray-500">{selectedAppointment.client.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Barbero</label>
                  <p className="text-gray-900">{selectedAppointment.barber?.name || 'N/A'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fecha</label>
                  <p className="text-gray-900">{format(new Date(selectedAppointment.date), 'dd/MM/yyyy')}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Hora</label>
                  <p className="text-gray-900">{selectedAppointment.time}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Método de Pago</label>
                  <p className="text-gray-900">{selectedAppointment.paymentMethodName || selectedAppointment.paymentMethod || 'N/A'}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Estado de Pago</label>
                  {getStatusBadge(selectedAppointment.paymentStatus || 'PENDING')}
                </div>
              </div>

              {/* Comprobante de Pago */}
              {selectedAppointment.paymentProof && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Comprobante de Pago</label>
                  <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <img
                      src={getImageUrl(selectedAppointment.paymentProof)}
                      alt="Comprobante de pago"
                      className="w-full h-auto rounded-lg max-h-96 object-contain"
                      crossOrigin="anonymous"
                    />
                  </div>
                </div>
              )}

              {/* Botones de Acción */}
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setSelectedAppointment(null);
                  }}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cerrar
                </button>
                {selectedAppointment.paymentStatus === 'PENDING' && (
                  <>
                    <button
                      onClick={() => handleVerify(selectedAppointment.id, false)}
                      disabled={verifying === selectedAppointment.id}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {verifying === selectedAppointment.id ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>Rechazando...</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-5 h-5" />
                          <span>Rechazar Pago</span>
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => handleVerify(selectedAppointment.id, true)}
                      disabled={verifying === selectedAppointment.id}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {verifying === selectedAppointment.id ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>Verificando...</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          <span>Verificar Pago</span>
                        </>
                      )}
                    </button>
                  </>
                )}
                {selectedAppointment.paymentStatus !== 'PENDING' && (
                  <div className="text-sm text-gray-500 italic">
                    Este pago ya ha sido {selectedAppointment.paymentStatus === 'VERIFIED' ? 'verificado' : 'rechazado'}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

