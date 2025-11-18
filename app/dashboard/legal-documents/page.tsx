'use client';

import { useState, useEffect } from 'react';
import { legalDocumentsService, LegalDocument, LegalDocumentType, CreateLegalDocumentData } from '@/lib/legal-documents';
import { 
  FileText, 
  Loader2, 
  CheckCircle2, 
  XCircle, 
  Trash2, 
  Power, 
  Save,
  Edit,
  Eye,
  Plus
} from 'lucide-react';

const DOCUMENT_TYPES: { value: LegalDocumentType; label: string }[] = [
  { value: 'privacy', label: 'Política de Privacidad' },
  { value: 'terms', label: 'Términos de Servicio' },
  { value: 'cookies', label: 'Política de Cookies' },
];

export default function LegalDocumentsPage() {
  const [documents, setDocuments] = useState<LegalDocument[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<LegalDocumentType | ''>('');
  const [formData, setFormData] = useState({
    type: '' as LegalDocumentType | '',
    title: '',
    content: '',
    isActive: false,
  });

  useEffect(() => {
    loadDocuments();
  }, []);

  const loadDocuments = async () => {
    try {
      setIsLoading(true);
      const data = await legalDocumentsService.getAllDocuments();
      setDocuments(data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al cargar documentos');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTypeChange = (type: LegalDocumentType) => {
    setSelectedType(type);
    const activeDoc = documents.find(d => d.type === type && d.isActive);
    if (activeDoc) {
      setFormData({
        type,
        title: activeDoc.title,
        content: activeDoc.content,
        isActive: activeDoc.isActive,
      });
      setEditingId(activeDoc.id);
    } else {
      setFormData({
        type,
        title: '',
        content: '',
        isActive: false,
      });
      setEditingId(null);
    }
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.type || !formData.title || !formData.content) {
      setError('Por favor completa todos los campos');
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      if (editingId) {
        await legalDocumentsService.updateDocument(editingId, {
          title: formData.title,
          content: formData.content,
          isActive: formData.isActive,
        });
        setSuccess('Documento actualizado exitosamente');
      } else {
        await legalDocumentsService.createDocument({
          type: formData.type as LegalDocumentType,
          title: formData.title,
          content: formData.content,
          isActive: formData.isActive,
        });
        setSuccess('Documento creado exitosamente');
      }
      
      setShowForm(false);
      setEditingId(null);
      setSelectedType('');
      setFormData({
        type: '' as LegalDocumentType | '',
        title: '',
        content: '',
        isActive: false,
      });
      loadDocuments();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al guardar documento');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleActivate = async (id: string) => {
    if (!confirm('¿Estás seguro de activar esta versión? Esto desactivará la versión actualmente activa del mismo tipo.')) {
      return;
    }

    try {
      await legalDocumentsService.activateDocument(id);
      setSuccess('Documento activado exitosamente');
      loadDocuments();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al activar documento');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('¿Estás seguro de eliminar este documento? Esta acción no se puede deshacer.')) {
      return;
    }

    try {
      await legalDocumentsService.deleteDocument(id);
      setSuccess('Documento eliminado exitosamente');
      loadDocuments();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al eliminar documento');
    }
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getDocumentsByType = (type: LegalDocumentType) => {
    return documents.filter(d => d.type === type).sort((a, b) => b.version - a.version);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Documentos Legales</h1>
          <p className="text-gray-600 mt-1">Gestiona las políticas y términos de servicio</p>
        </div>
      </div>

      {/* Alertas */}
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5" />
          <span>{success}</span>
          <button
            onClick={() => setSuccess(null)}
            className="ml-auto text-green-600 hover:text-green-800"
          >
            <XCircle className="w-5 h-5" />
          </button>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-center gap-2">
          <XCircle className="w-5 h-5" />
          <span>{error}</span>
          <button
            onClick={() => setError(null)}
            className="ml-auto text-red-600 hover:text-red-800"
          >
            <XCircle className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Selector de tipo de documento */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Seleccionar Tipo de Documento</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {DOCUMENT_TYPES.map((docType) => {
            const activeDoc = documents.find(d => d.type === docType.value && d.isActive);
            return (
              <button
                key={docType.value}
                onClick={() => handleTypeChange(docType.value)}
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors text-left"
              >
                <div className="flex items-center justify-between mb-2">
                  <FileText className="w-6 h-6 text-indigo-600" />
                  {activeDoc && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      Activo
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900">{docType.label}</h3>
                {activeDoc && (
                  <p className="text-sm text-gray-500 mt-1">
                    Versión {activeDoc.version} - {formatDate(activeDoc.updatedAt)}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Formulario de edición */}
      {showForm && selectedType && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {editingId ? 'Editar' : 'Crear Nuevo'} {DOCUMENT_TYPES.find(t => t.value === selectedType)?.label}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Título
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white text-gray-900"
                required
              />
            </div>

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Contenido (HTML o Markdown)
              </label>
              <textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={15}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white text-gray-900 font-mono text-sm resize-none"
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                Puedes usar HTML o Markdown. El contenido se renderizará en la página pública.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="isActive"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="isActive" className="text-sm font-medium text-gray-700">
                Activar esta versión automáticamente
              </label>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Guardando...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    <span>Guardar</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                  setSelectedType('');
                  setFormData({
                    type: '' as LegalDocumentType | '',
                    title: '',
                    content: '',
                    isActive: false,
                  });
                  setError(null);
                }}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-300"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Lista de versiones por tipo */}
      {DOCUMENT_TYPES.map((docType) => {
        const typeDocs = getDocumentsByType(docType.value);
        if (typeDocs.length === 0) return null;

        return (
          <div key={docType.value} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">{docType.label}</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Versión</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Título</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fecha</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acciones</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {typeDocs.map((doc) => (
                    <tr key={doc.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        v{doc.version}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">{doc.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {doc.isActive ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <Power className="w-3 h-3 mr-1" />
                            Activo
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            Inactivo
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(doc.updatedAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center gap-2">
                          {!doc.isActive && (
                            <button
                              onClick={() => handleActivate(doc.id)}
                              className="text-indigo-600 hover:text-indigo-900"
                              title="Activar"
                            >
                              <Power className="w-4 h-4" />
                            </button>
                          )}
                          <button
                            onClick={() => {
                              setFormData({
                                type: doc.type,
                                title: doc.title,
                                content: doc.content,
                                isActive: doc.isActive,
                              });
                              setEditingId(doc.id);
                              setSelectedType(doc.type);
                              setShowForm(true);
                            }}
                            className="text-blue-600 hover:text-blue-900"
                            title="Editar"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(doc.id)}
                            className="text-red-600 hover:text-red-900"
                            title="Eliminar"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
}

