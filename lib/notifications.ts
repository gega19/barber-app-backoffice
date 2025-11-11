import api from './api';

export interface SendTestNotificationData {
  userId: string;
  title: string;
  body: string;
  data?: Record<string, string>;
}

export const notificationsService = {
  /**
   * Envía una notificación de prueba a un usuario
   */
  async sendTestNotification(data: SendTestNotificationData): Promise<void> {
    await api.post('/fcm-tokens/admin/test', data);
  },
};

