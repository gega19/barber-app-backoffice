import api from './api';

export interface PaymentMethod {
  id: string;
  name: string;
  icon?: string | null;
  type?: string | null;
  config?: any | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePaymentMethodData {
  name: string;
  icon?: string;
  type?: string;
  config?: any;
  isActive?: boolean;
}

export interface UpdatePaymentMethodData {
  name?: string;
  icon?: string;
  type?: string;
  config?: any;
  isActive?: boolean;
}

export type PaymentMethodType = 'PAGO_MOVIL' | 'BINANCE' | 'EFECTIVO' | 'TRANSFERENCIA' | 'OTRO';

export interface PaymentMethodConfig {
  // Pago Móvil
  phone?: string;
  bank?: string;
  idNumber?: string;
  name?: string;
  
  // Binance
  wallet?: string;
  network?: string;
  qrCode?: string;
  
  // Transferencia
  accountNumber?: string;
  accountType?: string;
  bankName?: string;
  accountHolder?: string;
  
  // Otros campos genéricos
  [key: string]: any;
}

export const paymentMethodsService = {
  async getPaymentMethods(): Promise<PaymentMethod[]> {
    const response = await api.get<{ success: boolean; data: PaymentMethod[] }>('/payment-methods/admin');
    return response.data.data;
  },

  async getPaymentMethodById(id: string): Promise<PaymentMethod> {
    const response = await api.get<{ success: boolean; data: PaymentMethod }>(`/payment-methods/admin/${id}`);
    return response.data.data;
  },

  async createPaymentMethod(data: CreatePaymentMethodData): Promise<PaymentMethod> {
    const response = await api.post<{ success: boolean; data: PaymentMethod }>('/payment-methods/admin', data);
    return response.data.data;
  },

  async updatePaymentMethod(id: string, data: UpdatePaymentMethodData): Promise<PaymentMethod> {
    const response = await api.put<{ success: boolean; data: PaymentMethod }>(`/payment-methods/admin/${id}`, data);
    return response.data.data;
  },

  async deletePaymentMethod(id: string): Promise<void> {
    await api.delete(`/payment-methods/admin/${id}`);
  },
};

