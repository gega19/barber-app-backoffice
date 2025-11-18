import api from './api';

export type LegalDocumentType = 'privacy' | 'terms' | 'cookies';

export interface LegalDocument {
  id: string;
  type: LegalDocumentType;
  title: string;
  content: string;
  version: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  createdBy?: string | null;
}

export interface CreateLegalDocumentData {
  type: LegalDocumentType;
  title: string;
  content: string;
  isActive?: boolean;
}

export interface UpdateLegalDocumentData {
  title?: string;
  content?: string;
  isActive?: boolean;
}

export interface LegalDocumentsResponse {
  success: boolean;
  data: LegalDocument[];
}

export interface LegalDocumentResponse {
  success: boolean;
  data: LegalDocument;
}

export const legalDocumentsService = {
  async getActiveDocument(type: LegalDocumentType): Promise<LegalDocument> {
    const response = await api.get<LegalDocumentResponse>(`/legal/${type}`);
    return response.data.data;
  },

  async getAllDocuments(): Promise<LegalDocument[]> {
    const response = await api.get<LegalDocumentsResponse>('/legal/admin/documents');
    return response.data.data;
  },

  async getDocumentsByType(type: LegalDocumentType): Promise<LegalDocument[]> {
    const response = await api.get<LegalDocumentsResponse>(`/legal/admin/documents/${type}`);
    return response.data.data;
  },

  async getDocumentById(id: string): Promise<LegalDocument> {
    const response = await api.get<LegalDocumentResponse>(`/legal/admin/documents/id/${id}`);
    return response.data.data;
  },

  async createDocument(data: CreateLegalDocumentData): Promise<LegalDocument> {
    const response = await api.post<LegalDocumentResponse>('/legal/admin/documents', data);
    return response.data.data;
  },

  async updateDocument(id: string, data: UpdateLegalDocumentData): Promise<LegalDocument> {
    const response = await api.put<LegalDocumentResponse>(`/legal/admin/documents/${id}`, data);
    return response.data.data;
  },

  async activateDocument(id: string): Promise<LegalDocument> {
    const response = await api.put<LegalDocumentResponse>(`/legal/admin/documents/${id}/activate`, {});
    return response.data.data;
  },

  async deleteDocument(id: string): Promise<void> {
    await api.delete(`/legal/admin/documents/${id}`);
  },
};

