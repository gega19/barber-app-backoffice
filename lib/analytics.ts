import api from './api';

export interface AnalyticsEvent {
  id: string;
  eventType: string;
  eventName: string;
  platform: string;
  userId?: string;
  sessionId?: string;
  properties?: Record<string, any>;
  metadata?: Record<string, any>;
  createdAt: string;
}

export interface AnalyticsStats {
  totalEvents: number;
  eventsByType: Array<{ eventType: string; count: number }>;
  topEvents: Array<{ eventName: string; count: number }>;
  eventsByPlatform: Array<{ platform: string; count: number }>;
}

export interface AnalyticsEventsResponse {
  events: AnalyticsEvent[];
  total: number;
  limit: number;
  offset: number;
}

export const analyticsApi = {
  /**
   * Obtiene estadísticas agregadas de eventos
   */
  async getStats(params?: {
    startDate?: string;
    endDate?: string;
    platform?: string;
  }): Promise<AnalyticsStats> {
    const response = await api.get<{ success: boolean; data: AnalyticsStats }>(
      '/analytics/stats',
      { params }
    );
    if (!response.data.success) {
      throw new Error('Failed to fetch analytics stats');
    }
    return response.data.data;
  },

  /**
   * Obtiene eventos con filtros opcionales
   */
  async getEvents(params?: {
    eventType?: string;
    eventName?: string;
    platform?: string;
    userId?: string;
    sessionId?: string;
    startDate?: string;
    endDate?: string;
    limit?: number;
    offset?: number;
  }): Promise<AnalyticsEventsResponse> {
    const response = await api.get<{ success: boolean; data: AnalyticsEventsResponse }>(
      '/analytics/events',
      { params }
    );
    if (!response.data.success) {
      throw new Error('Failed to fetch analytics events');
    }
    return response.data.data;
  },
};

