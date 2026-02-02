import api from './api';

export const barbersService = {
  /**
   * Recomputa el wallScore de todos los barberos.
   * Solo disponible para usuarios con rol ADMIN.
   */
  async recomputeWallScores(): Promise<{ success: boolean; message?: string }> {
    const response = await api.post<{ success: boolean; message?: string }>(
      '/barbers/admin/recompute-wall-scores'
    );
    return response.data;
  },
};
