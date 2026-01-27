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
  Package,
  Edit,
  AlertCircle
} from 'lucide-react';

export default function AppVersionsPage() {
  const [versions, setVersions] = useState<AppVersion[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingVersion, setEditingVersion] = useState<AppVersion | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    version: '',
    versionCode: '',
    releaseNotes: '',
    isActive: false,
    minimumVersionCode: '',
    updateUrl: '',
    updateType: 'apk',
    forceUpdate: false,
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
    
    if (formData.updateType === 'apk' && !selectedFile) {
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

    // Validar minimumVersionCode <= versionCode
    if (formData.minimumVersionCode) {
      const minVersionCode = parseInt(formData.minimumVersionCode, 10);
      const versionCode = parseInt(formData.versionCode, 10);
      if (minVersionCode > versionCode) {
        setError('La versión mínima no puede ser mayor que el código de versión');
        return;
      }
    }

    // Validar updateType
    if (formData.updateType && !['store', 'url', 'apk'].includes(formData.updateType)) {
      setError('El tipo de actualización debe ser: store, url o apk');
      return;
    }

    // Validar updateUrl si updateType es 'url'
    if (formData.updateType === 'url' && !formData.updateUrl) {
      setError('La URL de actualización es requerida cuando el tipo es "url"');
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
        minimumVersionCode: formData.minimumVersionCode ? parseInt(formData.minimumVersionCode, 10) : undefined,
        updateUrl: formData.updateUrl || undefined,
        updateType: formData.updateType || undefined,
        forceUpdate: formData.forceUpdate,
        apk: formData.updateType === 'apk' ? selectedFile : undefined,
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
        minimumVersionCode: '',
        updateUrl: '',
        updateType: 'apk',
        forceUpdate: false,
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

  const handleEdit = (version: AppVersion) => {
    setEditingVersion(version);
    setFormData({
      version: version.version,
      versionCode: version.versionCode.toString(),
      releaseNotes: version.releaseNotes || '',
      isActive: version.isActive,
      minimumVersionCode: version.minimumVersionCode?.toString() || '',
      updateUrl: version.updateUrl || '',
      updateType: version.updateType || 'apk',
      forceUpdate: version.forceUpdate || false,
    });
    setShowForm(true);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!editingVersion) return;

    // Validar minimumVersionCode <= versionCode
    if (formData.minimumVersionCode) {
      const minVersionCode = parseInt(formData.minimumVersionCode, 10);
      const versionCode = parseInt(formData.versionCode, 10);
      if (minVersionCode > versionCode) {
        setError('La versión mínima no puede ser mayor que el código de versión');
        return;
      }
    }

    // Validar updateType
    if (formData.updateType && !['store', 'url', 'apk'].includes(formData.updateType)) {
      setError('El tipo de actualización debe ser: store, url o apk');
      return;
    }

    // Validar updateUrl si updateType es 'url'
    if (formData.updateType === 'url' && !formData.updateUrl) {
      setError('La URL de actualización es requerida cuando el tipo es "url"');
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      await appVersionsService.updateVersion(editingVersion.id, {
        version: formData.version,
        releaseNotes: formData.releaseNotes || undefined,
        isActive: formData.isActive,
        minimumVersionCode: formData.minimumVersionCode ? parseInt(formData.minimumVersionCode, 10) : null,
        updateUrl: formData.updateUrl || null,
        updateType: formData.updateType || null,
        forceUpdate: formData.forceUpdate,
      });

      setSuccess('Versión actualizada exitosamente');
      setShowForm(false);
      setEditingVersion(null);
      setFormData({
        version: '',
        versionCode: '',
        releaseNotes: '',
        isActive: false,
        minimumVersionCode: '',
        updateUrl: '',
        updateType: 'apk',
        forceUpdate: false,
      });
      loadVersions();
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error al actualizar versión');
    } finally {
      setIsSubmitting(false);
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

      {/* Formulario de nueva versión / edición */}
      {showForm && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {editingVersion ? 'Editar Versión' : 'Subir Nueva Versión'}
          </h2>
          <form onSubmit={editingVersion ? handleUpdate : handleSubmit} className="space-y-4">
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
                  disabled={!!editingVersion}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white text-gray-900 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  required
                />
                <p className="mt-1 text-xs text-gray-500">
                  {editingVersion ? 'No se puede modificar el código de versión' : 'Debe ser mayor que el código anterior'}
                </p>
              </div>
            </div>

            {!editingVersion && (
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
            )}

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="minimumVersionCode" className="block text-sm font-medium text-gray-700 mb-2">
                  Versión Mínima Requerida
                </label>
                <input
                  type="number"
                  id="minimumVersionCode"
                  value={formData.minimumVersionCode}
                  onChange={(e) => setFormData({ ...formData, minimumVersionCode: e.target.value })}
                  placeholder="Ej: 2"
                  min="1"
                  max={formData.versionCode || undefined}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white text-gray-900"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Versión mínima que los usuarios deben tener. Debe ser ≤ código de versión.
                </p>
              </div>

              <div>
                <label htmlFor="updateType" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Actualización
                </label>
                <select
                  id="updateType"
                  value={formData.updateType}
                  onChange={(e) => setFormData({ ...formData, updateType: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white text-gray-900"
                >
                  <option value="apk">APK Directo</option>
                  <option value="store">Tienda (Play Store/App Store)</option>
                  <option value="url">URL Personalizada</option>
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  Cómo se actualizará la app cuando sea necesario
                </p>
              </div>
            </div>

            {formData.updateType === 'url' && (
              <div>
                <label htmlFor="updateUrl" className="block text-sm font-medium text-gray-700 mb-2">
                  URL de Actualización *
                </label>
                <input
                  type="url"
                  id="updateUrl"
                  value={formData.updateUrl}
                  onChange={(e) => setFormData({ ...formData, updateUrl: e.target.value })}
                  placeholder="https://ejemplo.com/descargar"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white text-gray-900"
                  required={formData.updateType === 'url'}
                />
                <p className="mt-1 text-xs text-gray-500">
                  URL donde los usuarios descargarán la actualización
                </p>
              </div>
            )}

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

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="forceUpdate"
                checked={formData.forceUpdate}
                onChange={(e) => setFormData({ ...formData, forceUpdate: e.target.checked })}
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="forceUpdate" className="text-sm font-medium text-gray-700">
                Forzar actualización (bloquear app si la versión es menor)
              </label>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={isSubmitting || (!editingVersion && !selectedFile)}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>{editingVersion ? 'Actualizando...' : 'Subiendo...'}</span>
                  </>
                ) : (
                  <>
                    {editingVersion ? <Edit className="w-5 h-5" /> : <Upload className="w-5 h-5" />}
                    <span>{editingVersion ? 'Actualizar Versión' : 'Subir Versión'}</span>
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setEditingVersion(null);
                  setSelectedFile(null);
                  setFormData({
                    version: '',
                    versionCode: '',
                    releaseNotes: '',
                    isActive: false,
                    minimumVersionCode: '',
                    updateUrl: '',
                    updateType: 'apk',
                    forceUpdate: false,
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Versión Mínima</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actualización</th>
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
                      {version.minimumVersionCode ? (
                        <div className="flex items-center gap-1">
                          <AlertCircle className="w-4 h-4 text-orange-500" />
                          <span className="font-medium">{version.minimumVersionCode}</span>
                          {version.forceUpdate && (
                            <span className="text-xs text-red-600 font-semibold">(Forzado)</span>
                          )}
                        </div>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {version.updateType ? (
                        <div className="flex flex-col gap-1">
                          <span className="font-medium capitalize">{version.updateType}</span>
                          {version.updateUrl && version.updateType === 'url' && (
                            <a
                              href={version.updateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-indigo-600 hover:underline truncate max-w-xs"
                              title={version.updateUrl}
                            >
                              {version.updateUrl}
                            </a>
                          )}
                        </div>
                      ) : (
                        <span className="text-gray-400">-</span>
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
                        <button
                          onClick={() => handleEdit(version)}
                          className="text-indigo-600 hover:text-indigo-900"
                          title="Editar versión"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        {!version.isActive && (
                          <button
                            onClick={() => handleActivate(version.id)}
                            className="text-green-600 hover:text-green-900 flex items-center gap-1"
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

