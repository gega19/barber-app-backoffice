import api from './api';

export type AppointmentStatus = 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED';

export interface Client {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  avatar?: string | null;
  avatarSeed?: string | null;
}

export interface Barber {
  id: string;
  name: string;
  email: string;
  specialty?: string | null;
  rating?: number | null;
  image?: string | null;
  avatarSeed?: string | null;
  location?: string | null;
}

export interface Service {
  id: string;
  name: string;
  price: number;
  description?: string | null;
}

export interface Appointment {
  id: string;
  userId: string;
  barberId: string;
  serviceId?: string | null;
  client: Client;
  barber: Barber;
  service?: Service | null;
  date: string;
  time: string;
  status: AppointmentStatus;
  paymentMethod?: string | null;
  paymentMethodName?: string | null;
  paymentStatus?: string | null;
  paymentProof?: string | null;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAppointmentData {
  userId: string;
  barberId: string;
  serviceId?: string;
  date: string;
  time: string;
  paymentMethod: string;
  paymentProof?: string;
  notes?: string;
}

export interface UpdateAppointmentData {
  status?: AppointmentStatus;
  date?: string;
  time?: string;
  paymentMethod?: string;
  notes?: string;
}

export interface AppointmentsResponse {
  success: boolean;
  data: Appointment[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export const appointmentsService = {
  async getAppointments(page: number = 1, limit: number = 10, search?: string, status?: string, dateFrom?: string, dateTo?: string): Promise<AppointmentsResponse> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });
    
    if (search) params.append('search', search);
    if (status) params.append('status', status);
    if (dateFrom) params.append('dateFrom', dateFrom);
    if (dateTo) params.append('dateTo', dateTo);

    const response = await api.get<AppointmentsResponse>(`/appointments/admin?${params.toString()}`);
    return response.data;
  },

  async getAppointmentById(id: string): Promise<Appointment> {
    const response = await api.get<{ success: boolean; data: Appointment }>(`/appointments/admin/${id}`);
    return response.data.data;
  },

  async createAppointment(data: CreateAppointmentData): Promise<Appointment> {
    const response = await api.post<{ success: boolean; data: Appointment }>('/appointments', data);
    return response.data.data;
  },

  async updateAppointment(id: string, data: UpdateAppointmentData): Promise<Appointment> {
    const response = await api.put<{ success: boolean; data: Appointment }>(`/appointments/admin/${id}`, data);
    return response.data.data;
  },

  async deleteAppointment(id: string): Promise<void> {
    await api.delete(`/appointments/admin/${id}`);
  },

  async getPendingPaymentAppointments(page: number = 1, limit: number = 10, paymentStatus?: string | null): Promise<AppointmentsResponse> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });

    if (paymentStatus !== undefined && paymentStatus !== null && paymentStatus !== '') {
      params.append('paymentStatus', paymentStatus);
    }

    const response = await api.get<AppointmentsResponse>(`/appointments/admin/pending-payments?${params.toString()}`);
    return response.data;
  },

  async verifyPayment(id: string, verified: boolean): Promise<Appointment> {
    const response = await api.put<{ success: boolean; data: Appointment }>(`/appointments/admin/${id}/verify-payment`, { verified });
    return response.data.data;
  },
};

