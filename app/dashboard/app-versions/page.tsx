'use client';

import { useState, useEffect } from 'react';
import { appVersionsService, AppVersion, CreateAppVersionData } from '@/lib/app-versions';
import { 
  Upload, 
  Loader2, 
  CheckCircle2, 
  XCircle, 
  Trash2, 
  Power, 
  Download,
  FileText,
  Calendar,
  Package
} from 'lucide-react';

export default function AppVersionsPage() {
  const [versions, setVersions] = useState<AppVersion[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    version: '',
    versionCode: '',
    releaseNotes: '',
    isActive: false,
  });

  useEffect(() => {
    loadVersions();
  }, []);

  const loadVersions = async () => {
    try {
      setIsLoading(true);
      const data = await appVersionsService.getAllVersions();
      setVersions(data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al cargar versiones');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 100 * 1024 * 1024) {
        setError('El archivo APK no puede ser mayor a 100 MB');
        return;
      }
      if (!file.name.endsWith('.apk')) {
        setError('Solo se permiten archivos APK');
        return;
      }
      setSelectedFile(file);
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile) {
      setError('Por favor selecciona un archivo APK');
      return;
    }

    if (!formData.version || !formData.versionCode) {
      setError('Por favor completa todos los campos requeridos');
      return;
    }

    // Validar formato de versión (semántica)
    const versionRegex = /^\d+\.\d+\.\d+$/;
    if (!versionRegex.test(formData.version)) {
      setError('La versión debe seguir el formato semántico (ej: 1.0.0)');
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const createData: CreateAppVersionData = {
        version: formData.version,
        versionCode: parseInt(formData.versionCode, 10),
        releaseNotes: formData.releaseNotes || undefined,
        isActive: formData.isActive,
        apk: selectedFile,
      };

      await appVersionsService.createVersion(createData);
      
      setSuccess('Versión creada exitosamente');
      setShowForm(false);
      setSelectedFile(null);
      setFormData({
        version: '',
        versionCode: '',
        releaseNotes: '',
        isActive: false,
      });
      loadVersions();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al crear versión');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleActivate = async (id: string) => {
    if (!confirm('¿Estás seguro de activar esta versión? Esto desactivará la versión actualmente activa.')) {
      return;
    }

    try {
      await appVersionsService.activateVersion(id);
      setSuccess('Versión activada exitosamente');
      loadVersions();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al activar versión');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('¿Estás seguro de eliminar esta versión? Esta acción no se puede deshacer.')) {
      return;
    }

    try {
      await appVersionsService.deleteVersion(id);
      setSuccess('Versión eliminada exitosamente');
      loadVersions();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al eliminar versión');
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
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

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Versiones APK</h1>
          <p className="text-gray-600 mt-1">Administra las versiones de la aplicación Android</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 flex items-center gap-2"
        >
          <Upload className="w-5 h-5" />
          {showForm ? 'Cancelar' : 'Nueva Versión'}
        </button>
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

      {/* Formulario de nueva versión */}
      {showForm && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Subir Nueva Versión</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="version" className="block text-sm font-medium text-gray-700 mb-2">
                  Versión (Semántica) *
                </label>
                <input
                  type="text"
                  id="version"
                  value={formData.version}
                  onChange={(e) => setFormData({ ...formData, version: e.target.value })}
                  placeholder="1.0.0"
                  pattern="^\d+\.\d+\.\d+$"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white text-gray-900"
                  required
                />
                <p className="mt-1 text-xs text-gray-500">Formato: X.Y.Z (ej: 1.0.0)</p>
              </div>

              <div>
                <label htmlFor="versionCode" className="block text-sm font-medium text-gray-700 mb-2">
                  Código de Versión *
                </label>
                <input
                  type="number"
                  id="versionCode"
                  value={formData.versionCode}
                  onChange={(e) => setFormData({ ...formData, versionCode: e.target.value })}
                  placeholder="1"
                  min="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white text-gray-900"
                  required
                />
                <p className="mt-1 text-xs text-gray-500">Debe ser mayor que el código anterior</p>
              </div>
            </div>

            <div>
              <label htmlFor="apk" className="block text-sm font-medium text-gray-700 mb-2">
                Archivo APK *
              </label>
              <input
                type="file"
                id="apk"
                accept=".apk"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white text-gray-900"
                required
              />
              {selectedFile && (
                <p className="mt-2 text-sm text-gray-600">
                  Archivo seleccionado: {selectedFile.name} ({formatFileSize(selectedFile.size)})
                </p>
              )}
              <p className="mt-1 text-xs text-gray-500">Tamaño máximo: 100 MB</p>
            </div>

            <div>
              <label htmlFor="releaseNotes" className="block text-sm font-medium text-gray-700 mb-2">
                Notas de Versión
              </label>
              <textarea
                id="releaseNotes"
                value={formData.releaseNotes}
                onChange={(e) => setFormData({ ...formData, releaseNotes: e.target.value })}
                placeholder="Describe los cambios y mejoras de esta versión..."
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white text-gray-900 resize-none"
              />
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
                disabled={isSubmitting || !selectedFile}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Subiendo...</span>
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5" />
                    <span>Subir Versión</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setSelectedFile(null);
                  setFormData({
                    version: '',
                    versionCode: '',
                    releaseNotes: '',
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

      {/* Lista de versiones */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Versiones Disponibles</h2>
        </div>
        
        {isLoading ? (
          <div className="p-12 text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-indigo-600" />
            <p className="mt-4 text-gray-600">Cargando versiones...</p>
          </div>
        ) : versions.length === 0 ? (
          <div className="p-12 text-center">
            <Package className="w-12 h-12 mx-auto text-gray-400" />
            <p className="mt-4 text-gray-600">No hay versiones disponibles</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Versión</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tamaño</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descargas</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {versions.map((version) => (
                  <tr key={version.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Package className="w-5 h-5 text-indigo-600" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">v{version.version}</div>
                          <div className="text-xs text-gray-500">Code: {version.versionCode}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {version.isActive ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <Power className="w-3 h-3 mr-1" />
                          Activa
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          Inactiva
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatFileSize(version.apkSize)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        {version.downloadCount}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(version.createdAt)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-2">
                        {!version.isActive && (
                          <button
                            onClick={() => handleActivate(version.id)}
                            className="text-indigo-600 hover:text-indigo-900 flex items-center gap-1"
                            title="Activar versión"
                          >
                            <Power className="w-4 h-4" />
                          </button>
                        )}
                        {version.releaseNotes && (
                          <button
                            onClick={() => alert(version.releaseNotes)}
                            className="text-blue-600 hover:text-blue-900"
                            title="Ver notas de versión"
                          >
                            <FileText className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(version.id)}
                          className="text-red-600 hover:text-red-900"
                          title="Eliminar versión"
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
        )}
      </div>
    </div>
  );
}

