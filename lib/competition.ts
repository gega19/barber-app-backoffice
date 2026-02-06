import api from './api';

export type CompetitionPeriodStatus = 'DRAFT' | 'ACTIVE' | 'CLOSED';

export interface CompetitionPeriod {
  id: string;
  name: string | null;
  startDate: string;
  endDate: string;
  status: CompetitionPeriodStatus;
  winnerBarberId: string | null;
  winnerName: string | null;
  prize: string | null;
  closedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface LeaderboardEntry {
  position: number;
  barberId: string;
  barberName: string;
  barberImage: string;
  points: number;
}

export interface MyCompetitionResult {
  position: number;
  points: number;
  totalParticipants: number;
  period: CompetitionPeriod;
}

export interface LastWinner {
  barberId: string;
  barberName: string;
  periodName: string | null;
  periodId: string;
}

export const competitionService = {
  async getPeriods(status?: CompetitionPeriodStatus): Promise<CompetitionPeriod[]> {
    const params = status ? { status } : {};
    const { data } = await api.get<{ success: boolean; data: CompetitionPeriod[] }>(
      '/competition/periods',
      { params }
    );
    return data.data;
  },

  async getCurrentPeriod(): Promise<CompetitionPeriod | null> {
    const { data } = await api.get<{ success: boolean; data: CompetitionPeriod | null }>(
      '/competition/periods/current'
    );
    return data.data;
  },

  async getPeriodById(periodId: string): Promise<CompetitionPeriod | null> {
    const { data } = await api.get<{ success: boolean; data: CompetitionPeriod | null }>(
      `/competition/periods/${periodId}`
    );
    return data.data;
  },

  async getLeaderboard(
    periodId: string,
    limit = 50,
    offset = 0
  ): Promise<{ entries: LeaderboardEntry[]; total: number }> {
    const { data } = await api.get<{
      success: boolean;
      data: LeaderboardEntry[];
      pagination?: { limit: number; offset: number; total: number };
    }>(`/competition/periods/${periodId}/leaderboard`, {
      params: { limit, offset },
    });
    const entries = Array.isArray(data.data) ? data.data : [];
    const total = data.pagination?.total ?? entries.length;
    return { entries, total };
  },

  async getLastWinner(): Promise<LastWinner | null> {
    const { data } = await api.get<{ success: boolean; data: LastWinner | null }>(
      '/competition/last-winner'
    );
    return data.data;
  },

  async createPeriod(body: {
    name?: string;
    startDate: string;
    endDate: string;
    status?: CompetitionPeriodStatus;
    prize?: string | null;
  }): Promise<CompetitionPeriod> {
    const { data } = await api.post<{ success: boolean; data: CompetitionPeriod }>(
      '/competition/periods',
      body
    );
    return data.data;
  },

  async updatePeriod(
    periodId: string,
    body: {
      name?: string;
      startDate?: string;
      endDate?: string;
      status?: CompetitionPeriodStatus;
      prize?: string | null;
    }
  ): Promise<CompetitionPeriod> {
    const { data } = await api.patch<{ success: boolean; data: CompetitionPeriod }>(
      `/competition/periods/${periodId}`,
      body
    );
    return data.data;
  },

  async recomputePeriod(periodId: string): Promise<CompetitionPeriod> {
    const { data } = await api.post<{ success: boolean; data: CompetitionPeriod }>(
      `/competition/periods/${periodId}/recompute`
    );
    return data.data;
  },

  async closePeriod(periodId: string): Promise<CompetitionPeriod> {
    const { data } = await api.post<{ success: boolean; data: CompetitionPeriod }>(
      `/competition/periods/${periodId}/close`
    );
    return data.data;
  },

  async deletePeriod(periodId: string): Promise<void> {
    await api.delete(`/competition/periods/${periodId}`);
  },

  async getHelpRules(): Promise<string[]> {
    const { data } = await api.get<{ success: boolean; data: { rules: string[] } }>(
      '/competition/help-rules'
    );
    return data.data?.rules ?? [];
  },

  async updateHelpRules(rules: string[]): Promise<string[]> {
    const { data } = await api.patch<{ success: boolean; data: { rules: string[] } }>(
      '/competition/admin/help-rules',
      { rules }
    );
    return data.data?.rules ?? [];
  },
};
