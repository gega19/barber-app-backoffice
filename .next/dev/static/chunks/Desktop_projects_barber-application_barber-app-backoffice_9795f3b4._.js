(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/projects/barber-application/barber-app-backoffice/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createFormDataRequest",
    ()=>createFormDataRequest,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
;
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'https://barber-app-backend-kj6s.onrender.com/api',
    headers: {
        'Content-Type': 'application/json'
    }
});
const createFormDataRequest = (config)=>{
    const token = ("TURBOPACK compile-time truthy", 1) ? document.cookie.split('; ').find((row)=>row.startsWith('token='))?.split('=')[1] : "TURBOPACK unreachable";
    if (token) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`
        };
    }
    // Remove Content-Type to let browser set it with boundary
    delete config.headers['Content-Type'];
    return config;
};
// Interceptor para agregar token
api.interceptors.request.use((config)=>{
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
// Interceptor para manejar errores
api.interceptors.response.use((response)=>response, (error)=>{
    if (error.response?.status === 401) {
        // Token expirado o inválido
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('token');
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('refreshToken');
        if ("TURBOPACK compile-time truthy", 1) {
            window.location.href = '/login';
        }
    }
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/projects/barber-application/barber-app-backoffice/lib/auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authService",
    ()=>authService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
;
;
// Roles permitidos para acceder al backoffice
const ALLOWED_BACKOFFICE_ROLES = [
    'ADMIN',
    'CLIENT'
];
const authService = {
    async login (credentials) {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/auth/login', credentials);
            if (response.data.success && response.data.data) {
                const data = response.data.data;
                // El backend devuelve accessToken, no token - mapear correctamente
                const token = data.accessToken || data.token;
                const refreshToken = data.refreshToken;
                const user = data.user;
                // Validar que todos los campos necesarios estén presentes
                if (!token || !refreshToken || !user) {
                    throw new Error('Respuesta del servidor incompleta. Faltan datos de autenticación.');
                }
                // Guardar tokens en cookies
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set('token', token, {
                    expires: 7
                }); // 7 días
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set('refreshToken', refreshToken, {
                    expires: 7
                });
                // Retornar con la estructura correcta
                return {
                    token,
                    refreshToken,
                    user
                };
            }
            throw new Error('Login failed: respuesta del servidor inválida');
        } catch (error) {
            if (error.response) {
                throw new Error(error.response.data?.message || 'Error al iniciar sesión');
            }
            throw error;
        }
    },
    async logout () {
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/auth/logout');
        } catch (error) {
        // Silently fail on logout
        } finally{
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('token');
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove('refreshToken');
        }
    },
    async getCurrentUser () {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/auth/me');
        return response.data.data;
    },
    isAuthenticated () {
        return !!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('token');
    },
    canAccessBackoffice (role) {
        if (!role) {
            // Intentar obtener el role del token si está disponible
            const token = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('token');
            if (!token) return false;
            try {
                // Decodificar el token para obtener el role
                const payload = JSON.parse(atob(token.split('.')[1]));
                role = payload.role?.toUpperCase();
            } catch  {
                return false;
            }
        }
        // Normalizar el role a mayúsculas para comparación
        const normalizedRole = role.toUpperCase();
        // Verificar que el role esté en la lista de roles permitidos
        return ALLOWED_BACKOFFICE_ROLES.some((allowedRole)=>allowedRole.toUpperCase() === normalizedRole);
    },
    getCurrentRole () {
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('token');
        if (!token) return null;
        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const role = payload.role;
            if (!role) return null;
            // Normalizar a mayúsculas y validar que sea un role válido
            const normalizedRole = role.toUpperCase();
            if ([
                'ADMIN',
                'CLIENT',
                'USER'
            ].includes(normalizedRole)) {
                return normalizedRole;
            }
            return null;
        } catch  {
            return null;
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/projects/barber-application/barber-app-backoffice/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/lib/auth.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Home() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            // Verificar si está autenticado y tiene permisos
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].isAuthenticated() && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].canAccessBackoffice()) {
                router.push('/dashboard');
            } else {
                router.push('/login');
            }
        }
    }["Home.useEffect"], [
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"
        }, void 0, false, {
            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/page.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/page.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(Home, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_projects_barber-application_barber-app-backoffice_9795f3b4._.js.map