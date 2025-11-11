'use client';

import { useEffect, useState } from 'react';

export default function DebugPage() {
  const [loginDebug, setLoginDebug] = useState<any>(null);
  const [dashboardDebug, setDashboardDebug] = useState<any>(null);
  const [redirectReason, setRedirectReason] = useState<string | null>(null);

  useEffect(() => {
    const loginData = localStorage.getItem('loginDebug');
    const dashboardData = localStorage.getItem('dashboardDebug');
    const reason = localStorage.getItem('redirectReason');

    if (loginData) {
      try {
        setLoginDebug(JSON.parse(loginData));
      } catch (e) {
        console.error('Error parsing loginDebug:', e);
      }
    }

    if (dashboardData) {
      try {
        setDashboardDebug(JSON.parse(dashboardData));
      } catch (e) {
        console.error('Error parsing dashboardDebug:', e);
      }
    }

    if (reason) {
      setRedirectReason(reason);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Debug Information</h1>

        {redirectReason && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <h2 className="text-lg font-semibold text-red-800 mb-2">⚠️ Redirect Reason</h2>
            <p className="text-red-700">{redirectReason}</p>
          </div>
        )}

        {loginDebug && (
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Login Debug</h2>
            <div className="space-y-2">
              <div>
                <strong>User Role:</strong> <code className="bg-gray-100 px-2 py-1 rounded">{loginDebug.userRole}</code>
              </div>
              <div>
                <strong>Role Type:</strong> <code className="bg-gray-100 px-2 py-1 rounded">{loginDebug.roleType}</code>
              </div>
              <div>
                <strong>Can Access Backoffice:</strong>{' '}
                <span className={loginDebug.canAccess ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                  {loginDebug.canAccess ? '✅ YES' : '❌ NO'}
                </span>
              </div>
              <div>
                <strong>Token (first 20 chars):</strong> <code className="bg-gray-100 px-2 py-1 rounded">{loginDebug.token}</code>
              </div>
              <details className="mt-4">
                <summary className="cursor-pointer text-blue-600 hover:text-blue-800">Full Login Response</summary>
                <pre className="mt-2 bg-gray-100 p-4 rounded overflow-auto text-xs">
                  {JSON.stringify(loginDebug.loginResponse, null, 2)}
                </pre>
              </details>
            </div>
          </div>
        )}

        {dashboardDebug && (
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Dashboard Debug</h2>
            <div className="space-y-2">
              <div>
                <strong>Is Authenticated:</strong>{' '}
                <span className={dashboardDebug.isAuthenticated ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                  {dashboardDebug.isAuthenticated ? '✅ YES' : '❌ NO'}
                </span>
              </div>
              <div>
                <strong>Token Exists:</strong>{' '}
                <span className={dashboardDebug.token !== 'NO TOKEN' ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                  {dashboardDebug.token !== 'NO TOKEN' ? '✅ YES' : '❌ NO'}
                </span>
              </div>
              <div>
                <strong>Token:</strong> <code className="bg-gray-100 px-2 py-1 rounded">{dashboardDebug.token}</code>
              </div>
              <div>
                <strong>User Role from Token:</strong> <code className="bg-gray-100 px-2 py-1 rounded">{dashboardDebug.userRole || 'null'}</code>
              </div>
              <div>
                <strong>Can Access Backoffice:</strong>{' '}
                <span className={dashboardDebug.canAccess ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                  {dashboardDebug.canAccess ? '✅ YES' : '❌ NO'}
                </span>
              </div>
              <div>
                <strong>Timestamp:</strong> <code className="bg-gray-100 px-2 py-1 rounded">{dashboardDebug.timestamp}</code>
              </div>
            </div>
          </div>
        )}

        {!loginDebug && !dashboardDebug && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-yellow-800">No hay información de debug disponible. Intenta hacer login primero.</p>
          </div>
        )}

        <div className="mt-6">
          <button
            onClick={() => {
              localStorage.removeItem('loginDebug');
              localStorage.removeItem('dashboardDebug');
              localStorage.removeItem('redirectReason');
              window.location.reload();
            }}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Limpiar Debug Info
          </button>
        </div>
      </div>
    </div>
  );
}

