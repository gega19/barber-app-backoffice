(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/projects/barber-application/barber-app-backoffice/lib/workplaces.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "workplaceMediaService",
    ()=>workplaceMediaService,
    "workplacesService",
    ()=>workplacesService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/lib/api.ts [app-client] (ecmascript)");
;
const workplacesService = {
    async getWorkplaces (page = 1, limit = 10, search) {
        const params = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString()
        });
        if (search) {
            params.append('search', search);
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/workplaces?${params.toString()}`);
        return response.data;
    },
    async getWorkplaceById (id) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/workplaces/${id}`);
        return response.data.data;
    },
    async createWorkplace (data) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/workplaces', data);
        return response.data.data;
    },
    async updateWorkplace (id, data) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/workplaces/${id}`, data);
        return response.data.data;
    },
    async deleteWorkplace (id) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/workplaces/${id}`);
    }
};
const workplaceMediaService = {
    async getWorkplaceMedia (workplaceId) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/workplace-media/workplace/${workplaceId}`);
        return response.data.data;
    },
    async createMedia (workplaceId, data) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/workplace-media/workplace/${workplaceId}`, data);
        return response.data.data;
    },
    async createMultipleMedia (workplaceId, mediaItems) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/workplace-media/workplace/${workplaceId}/multiple`, {
            mediaItems
        });
        return response.data.data;
    },
    async updateMedia (id, data) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/workplace-media/${id}`, data);
        return response.data.data;
    },
    async deleteMedia (id) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/workplace-media/${id}`);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/projects/barber-application/barber-app-backoffice/lib/upload.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "uploadService",
    ()=>uploadService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
;
;
const baseURL = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'https://barber-api.corporacionceg.com/api';
const uploadService = {
    async uploadFile (file) {
        const formData = new FormData();
        formData.append('file', file);
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('token');
        const headers = {};
        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${baseURL}/upload`, formData, {
            headers
        });
        if (response.data.success && response.data.data) {
            // Return relative URL (same as Flutter app does)
            // The app will construct the full URL using its baseUrl
            return response.data.data.url;
        }
        throw new Error('Upload failed');
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BarbershopsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/scissors.js [app-client] (ecmascript) <export default as Scissors>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$workplaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/lib/workplaces.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$upload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/lib/upload.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
// Importar LocationPicker dinámicamente para evitar problemas con Turbopack
const LocationPicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/Desktop/projects/barber-application/barber-app-backoffice/components/map/LocationPicker.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/Desktop/projects/barber-application/barber-app-backoffice/components/map/LocationPicker.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-96 bg-gray-100 rounded-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-500",
                children: "Cargando selector de ubicación..."
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
            lineNumber: 16,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
});
_c = LocationPicker;
// Helper para construir URLs de imágenes (sin /api)
const getImageUrl = (url)=>{
    if (url.startsWith('http')) {
        return url;
    }
    // Remover /api de la URL base si existe
    const baseUrl = (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'https://barber-api.corporacionceg.com/api').replace('/api', '');
    return `${baseUrl}${url}`;
};
// Helper para truncar texto a un máximo de caracteres
const truncateText = (text, maxLength = 50)=>{
    if (!text) return '-';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
};
const workplaceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, 'El nombre debe tener al menos 2 caracteres'),
    address: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    city: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    latitude: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(-90).max(90).optional().nullable(),
    longitude: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(-180).max(180).optional().nullable(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    image: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    banner: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    instagramUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().refine((val)=>!val || val.trim() === '' || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().safeParse(val).success, {
        message: 'Debe ser una URL válida o @usuario'
    }),
    tiktokUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional().refine((val)=>!val || val.trim() === '' || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().safeParse(val).success, {
        message: 'Debe ser una URL válida o @usuario'
    })
});
function BarbershopsPage() {
    _s();
    const [workplaces, setWorkplaces] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditMode, setIsEditMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedWorkplace, setSelectedWorkplace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [totalPages, setTotalPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [deleteConfirm, setDeleteConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showFilters, setShowFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copiedId, setCopiedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadingImage, setUploadingImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadingBanner, setUploadingBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [workplaceMedia, setWorkplaceMedia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [uploadingMedia, setUploadingMedia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMediaGallery, setShowMediaGallery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMediaModalOpen, setIsMediaModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mediaWorkplace, setMediaWorkplace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedFiles, setSelectedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const imageInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bannerInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(workplaceSchema)
    });
    const watchedImage = watch('image');
    const watchedBanner = watch('banner');
    const loadWorkplaceMedia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BarbershopsPage.useCallback[loadWorkplaceMedia]": async (workplaceId)=>{
            try {
                const media = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$workplaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["workplaceMediaService"].getWorkplaceMedia(workplaceId);
                setWorkplaceMedia(media);
            } catch (err) {
                console.error('Error loading workplace media:', err);
            }
        }
    }["BarbershopsPage.useCallback[loadWorkplaceMedia]"], []);
    const handleOpenMediaModal = async (workplace)=>{
        setMediaWorkplace(workplace);
        setIsMediaModalOpen(true);
        await loadWorkplaceMedia(workplace.id);
    };
    const handleCloseMediaModal = ()=>{
        setIsMediaModalOpen(false);
        setMediaWorkplace(null);
        setWorkplaceMedia([]);
        setSelectedFiles([]);
    };
    const loadWorkplaces = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BarbershopsPage.useCallback[loadWorkplaces]": async ()=>{
            setIsLoading(true);
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$workplaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["workplacesService"].getWorkplaces(currentPage, 10, searchTerm || undefined);
                setWorkplaces(response.data);
                setTotalPages(response.pagination.totalPages);
            } catch (err) {
                setError(err.response?.data?.message || 'Error al cargar barberías');
            } finally{
                setIsLoading(false);
            }
        }
    }["BarbershopsPage.useCallback[loadWorkplaces]"], [
        currentPage,
        searchTerm
    ]);
    const handleSeedRealData = async ()=>{
        const realWorkplaces = [
            {
                name: "Gentlemen Suites",
                address: "Av. Orinoco, Edif. Nalania, Piso 1, Las Mercedes, Caracas",
                city: "Caracas",
                latitude: 10.4847,
                longitude: -66.8625,
                description: "Exclusiva suite de barbería en Las Mercedes. Cortes de cabello para caballeros y arreglo de barba con atención personalizada en un ambiente elegante.",
                instagramUrl: "https://www.instagram.com/gentlemensuites/"
            },
            {
                name: "Geronimo Barbiere",
                address: "C.C. Paseo El Hatillo, Piso 5, La Boyera, Caracas",
                city: "Caracas",
                latitude: 10.4412,
                longitude: -66.8145,
                description: "Estética masculina con profesionales especializados. Utiliza productos importados y garantiza una atención de primera clase.",
                instagramUrl: "https://www.instagram.com/geronimobarbiere/"
            },
            {
                name: "Guillotina Barber Club",
                address: "Calle La Paz, Edif. San José, El Hatillo, Caracas",
                city: "Caracas",
                latitude: 10.4225,
                longitude: -66.8238,
                description: "Club de barbería con estilo clásico e industrial. Expertos en cortes tradicionales, degradados y cuidado de la barba.",
                instagramUrl: "https://www.instagram.com/guillotinabarberclub/"
            },
            {
                name: "Hc Barber",
                address: "Av. Abraham Lincoln, Sabana Grande, Caracas",
                city: "Caracas",
                latitude: 10.4912,
                longitude: -66.8755,
                description: "Barbería urbana en Sabana Grande. Especialistas en estilos modernos, diseños urbanos y los mejores fades de la ciudad.",
                instagramUrl: "https://www.instagram.com/hcbarber/"
            },
            {
                name: "Elegant Barber Studio",
                address: "Calle Zulia, La Vega, Caracas",
                city: "Caracas",
                latitude: 10.4735,
                longitude: -66.9421,
                description: "Estudio profesional dedicado al arte de la barbería. Ofrece cortes premium, limpieza facial y cuidado integral para el hombre.",
                instagramUrl: "https://www.instagram.com/elegantbarber/"
            },
            {
                name: "Romanos Barbershop & Spa",
                address: "C.C. Sambil Chacao, Nivel Autopista, Caracas",
                city: "Caracas",
                latitude: 10.4916,
                longitude: -66.8532,
                description: "Barbería de alto tráfico en el Sambil. Ofrece servicios rápidos y de calidad con un equipo de barberos expertos en las últimas tendencias.",
                instagramUrl: "https://www.instagram.com/romanosbarbershop/"
            },
            {
                name: "Valhalla's Barber Shop",
                address: "Av. José Félix Sosa, Urb. Bello Campo, Caracas",
                city: "Caracas",
                latitude: 10.4942,
                longitude: -66.8505,
                description: "Inspirada en la temática vikinga, esta barbería ofrece un ambiente rudo y masculino con servicios de cortes de precisión y rituales de barba.",
                instagramUrl: "https://www.instagram.com/valhallas_barbers/"
            },
            {
                name: "Barber Beer",
                address: "Calle Urdaneta, Edif. Cabrinis, PB, Local 3, Chacao",
                city: "Caracas",
                latitude: 10.4905,
                longitude: -66.8521,
                description: "Un concepto que combina la barbería clásica con la degustación de cervezas artesanales. El lugar perfecto para relajarse y mejorar el estilo.",
                instagramUrl: "https://www.instagram.com/barberbeer/"
            },
            {
                name: "Ares Barber Shop",
                address: "C.C. Altamira Village, Nivel Lobby, Altamira, Caracas",
                city: "Caracas",
                latitude: 10.4981,
                longitude: -66.8485,
                description: "Localizado en el prestigioso Altamira Village, Ares ofrece servicios de barbería de lujo y tratamientos de cuidado facial para caballeros.",
                instagramUrl: "https://www.instagram.com/aresbarbershop/"
            },
            {
                name: "Thetiger barber",
                address: "Av. Transversal 5, Altamira Village, Nivel Lobby, Caracas",
                city: "Caracas",
                latitude: 10.4982,
                longitude: -66.8486,
                description: "Barbería creativa con enfoque en diseños personalizados y cortes artísticos en el corazón de Altamira.",
                instagramUrl: "https://www.instagram.com/thetigh_barber/"
            },
            {
                name: "Cuts Barber Shop (El Recreo)",
                address: "C.C. El Recreo, Local C3-36B, Caracas",
                city: "Caracas",
                latitude: 10.4895,
                longitude: -66.8778,
                description: "Barbería moderna ubicada en el Centro Comercial El Recreo, ideal para un corte rápido y de calidad mientras haces tus compras.",
                instagramUrl: "https://www.instagram.com/cutsbarbershop.ve/"
            },
            {
                name: "Barbería New York (Aloa)",
                address: "C.C. Aloa, Nivel PP, Local 32, Horizonte, Caracas",
                city: "Caracas",
                latitude: 10.4952,
                longitude: -66.8221,
                description: "Tradición y estilo neoyorquino en Caracas. Servicios de afeitado con toalla caliente y cortes clásicos.",
                instagramUrl: "https://www.instagram.com/barberianewyork/"
            },
            {
                name: "Elite Barbería (La Candelaria)",
                address: "Urb. La Candelaria, Caracas",
                city: "Caracas",
                latitude: 10.5065,
                longitude: -66.9032,
                description: "Barbería de alta calidad en La Candelaria. Conocida por su atención al detalle y ambiente acogedor.",
                instagramUrl: "https://www.instagram.com/elitebarberia/"
            },
            {
                name: "Barbería Funchal",
                address: "Av. Casanova, Res. El Recreo, Caracas",
                city: "Caracas",
                latitude: 10.4902,
                longitude: -66.8785,
                description: "Con historia desde 1962, la Barbería Funchal es un ícono de la tradición barberil en Caracas.",
                instagramUrl: "https://www.instagram.com/barberiafunchal/"
            },
            {
                name: "Caracas Barber Shop & Spa",
                address: "Las Mercedes, Av. Principal, Caracas",
                city: "Caracas",
                latitude: 10.4835,
                longitude: -66.8612,
                description: "Un oasis de cuidado personal para el hombre que combina barbería con servicios de spa y masajes relajantes.",
                instagramUrl: "https://www.instagram.com/ccsbarbershop/"
            }
        ];
        if (!window.confirm(`¿Estás seguro de que quieres cargar ${realWorkplaces.length} barberías reales? Se crearán una por una.`)) {
            return;
        }
        setIsLoading(true);
        let successCount = 0;
        let errorCount = 0;
        try {
            for (const wp of realWorkplaces){
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$workplaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["workplacesService"].createWorkplace(wp);
                    successCount++;
                } catch (err) {
                    console.error(`Error creando ${wp.name}:`, err);
                    // Si ya existe (409), lo contamos como "procesado" o simplemente ignoramos el error específico
                    if (err.response?.status === 409) {
                        successCount++;
                    } else {
                        errorCount++;
                    }
                }
            }
            setError(null);
            await loadWorkplaces();
            alert(`Proceso completado.\nÉxito: ${successCount}\nErrores: ${errorCount}`);
        } catch (err) {
            setError('Error general durante el proceso de carga');
        } finally{
            setIsLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BarbershopsPage.useEffect": ()=>{
            loadWorkplaces();
        }
    }["BarbershopsPage.useEffect"], [
        loadWorkplaces
    ]);
    const copyToClipboard = async (text, id)=>{
        try {
            await navigator.clipboard.writeText(text);
            setCopiedId(id);
            setTimeout(()=>setCopiedId(null), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };
    const clearFilters = ()=>{
        setSearchTerm('');
        setCurrentPage(1);
    };
    const hasActiveFilters = searchTerm !== '';
    const handleCreate = ()=>{
        setIsEditMode(false);
        setSelectedWorkplace(null);
        reset({
            name: '',
            address: '',
            city: '',
            latitude: null,
            longitude: null,
            description: '',
            image: '',
            banner: '',
            instagramUrl: '',
            tiktokUrl: ''
        });
        setIsModalOpen(true);
    };
    const handleEdit = (workplace)=>{
        setIsEditMode(true);
        setSelectedWorkplace(workplace);
        setValue('name', workplace.name);
        setValue('address', workplace.address || '');
        setValue('city', workplace.city || '');
        setValue('latitude', workplace.latitude ?? null);
        setValue('longitude', workplace.longitude ?? null);
        setValue('description', workplace.description || '');
        setValue('image', workplace.image || '');
        setValue('banner', workplace.banner || '');
        setValue('instagramUrl', workplace.instagramUrl || '');
        setValue('tiktokUrl', workplace.tiktokUrl || '');
        setIsModalOpen(true);
    };
    const handleView = async (workplace)=>{
        try {
            const fullWorkplace = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$workplaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["workplacesService"].getWorkplaceById(workplace.id);
            setSelectedWorkplace(fullWorkplace);
            await loadWorkplaceMedia(workplace.id);
            setIsModalOpen(true);
        } catch (err) {
            setError(err.response?.data?.message || 'Error al cargar barbería');
        }
    };
    const handleImageUpload = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        setUploadingImage(true);
        try {
            const url = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$upload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadService"].uploadFile(file);
            setValue('image', url);
            setError(null);
        } catch (err) {
            setError(err.message || 'Error al subir imagen');
        } finally{
            setUploadingImage(false);
            if (imageInputRef.current) {
                imageInputRef.current.value = '';
            }
        }
    };
    const handleBannerUpload = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        setUploadingBanner(true);
        try {
            const url = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$upload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadService"].uploadFile(file);
            setValue('banner', url);
            setError(null);
        } catch (err) {
            setError(err.message || 'Error al subir banner');
        } finally{
            setUploadingBanner(false);
            if (bannerInputRef.current) {
                bannerInputRef.current.value = '';
            }
        }
    };
    const handleFileSelect = (e)=>{
        const files = e.target.files;
        if (files && files.length > 0) {
            setSelectedFiles(Array.from(files));
        }
        // Reset input value to allow selecting the same files again
        if (mediaInputRef.current) {
            mediaInputRef.current.value = '';
        }
    };
    const handleMediaUpload = async ()=>{
        if (selectedFiles.length === 0) return;
        const workplace = mediaWorkplace || selectedWorkplace;
        if (!workplace) return;
        setUploadingMedia(true);
        try {
            const uploadPromises = selectedFiles.map(async (file)=>{
                const url = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$upload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadService"].uploadFile(file);
                const type = file.type.startsWith('video/') ? 'video' : 'image';
                return {
                    type,
                    url,
                    caption: ''
                };
            });
            const mediaItems = await Promise.all(uploadPromises);
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$workplaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["workplaceMediaService"].createMultipleMedia(workplace.id, mediaItems);
            await loadWorkplaceMedia(workplace.id);
            setSelectedFiles([]);
            setError(null);
        } catch (err) {
            setError(err.message || 'Error al subir multimedia');
        } finally{
            setUploadingMedia(false);
        }
    };
    const handleDeleteMedia = async (mediaId)=>{
        const workplace = mediaWorkplace || selectedWorkplace;
        if (!workplace) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$workplaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["workplaceMediaService"].deleteMedia(mediaId);
            await loadWorkplaceMedia(workplace.id);
        } catch (err) {
            setError(err.response?.data?.message || 'Error al eliminar multimedia');
        }
    };
    const onSubmit = async (data)=>{
        try {
            setError(null);
            if (isEditMode && selectedWorkplace) {
                const updateData = {
                    name: data.name,
                    address: data.address || undefined,
                    city: data.city || undefined,
                    latitude: data.latitude ?? undefined,
                    longitude: data.longitude ?? undefined,
                    description: data.description || undefined,
                    image: data.image || undefined,
                    banner: data.banner || undefined,
                    instagramUrl: data.instagramUrl && data.instagramUrl.trim() ? data.instagramUrl.trim() : undefined,
                    tiktokUrl: data.tiktokUrl && data.tiktokUrl.trim() ? data.tiktokUrl.trim() : undefined
                };
                await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$workplaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["workplacesService"].updateWorkplace(selectedWorkplace.id, updateData);
            } else {
                const createData = {
                    name: data.name,
                    address: data.address || undefined,
                    city: data.city || undefined,
                    latitude: data.latitude ?? undefined,
                    longitude: data.longitude ?? undefined,
                    description: data.description || undefined,
                    image: data.image || undefined,
                    banner: data.banner || undefined,
                    instagramUrl: data.instagramUrl && data.instagramUrl.trim() ? data.instagramUrl.trim() : undefined,
                    tiktokUrl: data.tiktokUrl && data.tiktokUrl.trim() ? data.tiktokUrl.trim() : undefined
                };
                await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$workplaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["workplacesService"].createWorkplace(createData);
            }
            setIsModalOpen(false);
            reset();
            loadWorkplaces();
        } catch (err) {
            setError(err.response?.data?.message || 'Error al guardar barbería');
        }
    };
    const handleDelete = async (id)=>{
        try {
            setError(null);
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$workplaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["workplacesService"].deleteWorkplace(id);
            setDeleteConfirm(null);
            loadWorkplaces();
        } catch (err) {
            const errorMessage = err.response?.data?.message || err.message || 'Error al eliminar barbería';
            setError(errorMessage);
            setDeleteConfirm(null); // Cerrar el modal de confirmación para que el usuario vea el error
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold text-gray-900 flex items-center gap-3 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 bg-indigo-100 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"], {
                                            className: "w-8 h-8 text-indigo-600"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 524,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                        lineNumber: 523,
                                        columnNumber: 13
                                    }, this),
                                    "Barberías"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                lineNumber: 522,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-lg",
                                children: "Gestiona todas las barberías y lugares de trabajo"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                lineNumber: 528,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                        lineNumber: 521,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSeedRealData,
                                disabled: isLoading,
                                className: "flex items-center gap-2 bg-white border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl hover:bg-indigo-50 transition-all shadow-md active:scale-95 disabled:opacity-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                        lineNumber: 536,
                                        columnNumber: 13
                                    }, this),
                                    "Cargar Datos Reales"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                lineNumber: 531,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCreate,
                                className: "flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-6 py-3 rounded-xl hover:from-indigo-700 hover:to-indigo-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                        lineNumber: 543,
                                        columnNumber: 13
                                    }, this),
                                    "Nueva Barbería"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                lineNumber: 539,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                        lineNumber: 530,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                lineNumber: 520,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-lg shadow-sm animate-fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5 mr-2 flex-shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                    lineNumber: 554,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: error.includes('associated barbers') || error.includes('barberos asociados') ? 'No se puede eliminar la barbería porque tiene barberos activos trabajando ahí. Por favor, elimina o reasigna los barberos primero.' : error
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                    lineNumber: 555,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                            lineNumber: 553,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setError(null),
                            className: "ml-4 text-red-500 hover:text-red-700 transition-colors",
                            "aria-label": "Cerrar",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                lineNumber: 566,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                            lineNumber: 561,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                    lineNumber: 552,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                lineNumber: 551,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowFilters(!showFilters),
                        className: "w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        className: "w-5 h-5 text-gray-600"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                        lineNumber: 579,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-gray-900",
                                        children: "Filtros"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                        lineNumber: 580,
                                        columnNumber: 13
                                    }, this),
                                    hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full",
                                        children: "Activos"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                        lineNumber: 582,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                lineNumber: 578,
                                columnNumber: 11
                            }, this),
                            showFilters ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                className: "w-5 h-5 text-gray-600"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                lineNumber: 588,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "w-5 h-5 text-gray-600"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                lineNumber: 590,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                        lineNumber: 574,
                        columnNumber: 9
                    }, this),
                    showFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-4 border-t border-gray-200 bg-gray-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-1 gap-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Buscar"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 599,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 601,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Nombre, dirección o ciudad...",
                                                    value: searchTerm,
                                                    onChange: (e)=>{
                                                        setSearchTerm(e.target.value);
                                                        setCurrentPage(1);
                                                    },
                                                    className: "w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 602,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 600,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                    lineNumber: 598,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                lineNumber: 596,
                                columnNumber: 13
                            }, this),
                            hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: clearFilters,
                                    className: "flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 622,
                                            columnNumber: 19
                                        }, this),
                                        "Limpiar filtros"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                    lineNumber: 618,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                lineNumber: 617,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                        lineNumber: 595,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                lineNumber: 573,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden",
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                        lineNumber: 635,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                    lineNumber: 634,
                    columnNumber: 11
                }, this) : workplaces.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12 text-gray-500",
                    children: "No se encontraron barberías"
                }, void 0, false, {
                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                    lineNumber: 638,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider",
                                                    children: "Barbería"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 647,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider",
                                                    children: "Ubicación"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 650,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider",
                                                    children: "Calificación"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 653,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider",
                                                    children: "Barberos"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 656,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider",
                                                    children: "Fecha de Registro"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 659,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider",
                                                    children: "Acciones"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 662,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 646,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                        lineNumber: 645,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "bg-white divide-y divide-gray-200",
                                        children: workplaces.map((workplace)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-indigo-50/50 transition-colors duration-150",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-shrink-0 h-12 w-12 rounded-lg overflow-hidden border-2 border-indigo-300 shadow-md",
                                                                    children: workplace.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: getImageUrl(workplace.image),
                                                                        alt: workplace.name,
                                                                        className: "w-full h-full object-cover",
                                                                        onError: (e)=>{
                                                                            const target = e.target;
                                                                            target.style.display = 'none';
                                                                            const parent = target.parentElement;
                                                                            if (parent) {
                                                                                parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center"><Scissors class="w-6 h-6 text-white" /></div>`;
                                                                            }
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                        lineNumber: 674,
                                                                        columnNumber: 31
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-full h-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scissors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scissors$3e$__["Scissors"], {
                                                                            className: "w-6 h-6 text-white"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                            lineNumber: 689,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                        lineNumber: 688,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 672,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "ml-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-sm font-semibold text-gray-900",
                                                                            children: workplace.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                            lineNumber: 694,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        workplace.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-sm text-gray-500 line-clamp-1 max-w-xs",
                                                                            children: workplace.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                            lineNumber: 696,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 693,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 671,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                        lineNumber: 670,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1 text-sm text-gray-900",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    className: "w-4 h-4 text-gray-400 flex-shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 705,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0",
                                                                    children: [
                                                                        workplace.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "truncate",
                                                                            title: workplace.address,
                                                                            children: truncateText(workplace.address, 40)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                            lineNumber: 708,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        workplace.city && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-gray-500 truncate",
                                                                            title: workplace.city,
                                                                            children: truncateText(workplace.city, 40)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                            lineNumber: 713,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        !workplace.address && !workplace.city && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-gray-400",
                                                                            children: "-"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                            lineNumber: 718,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 706,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 704,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                        lineNumber: 703,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                    className: "w-4 h-4 text-yellow-400 fill-yellow-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 725,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-medium text-gray-900",
                                                                    children: workplace.rating.toFixed(1)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 726,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-gray-500",
                                                                    children: [
                                                                        "(",
                                                                        workplace.reviews,
                                                                        ")"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 729,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 724,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                        lineNumber: 723,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1 text-sm text-gray-900",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                    className: "w-4 h-4 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 736,
                                                                    columnNumber: 27
                                                                }, this),
                                                                workplace.barbersCount || 0
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 735,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                        lineNumber: 734,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                                        children: new Date(workplace.createdAt).toLocaleDateString('es-VE')
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                        lineNumber: 740,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-end gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleView(workplace),
                                                                    className: "p-2 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-lg transition",
                                                                    title: "Ver detalles",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                        lineNumber: 750,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 745,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleEdit(workplace),
                                                                    className: "p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-100 rounded-lg transition",
                                                                    title: "Editar",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                        lineNumber: 757,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 752,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleOpenMediaModal(workplace),
                                                                    className: "p-2 text-purple-600 hover:text-purple-700 hover:bg-purple-100 rounded-lg transition",
                                                                    title: "Gestionar Multimedia",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                        lineNumber: 764,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 759,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setDeleteConfirm(workplace.id),
                                                                    className: "p-2 text-red-600 hover:text-red-700 hover:bg-red-100 rounded-lg transition",
                                                                    title: "Eliminar",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                        lineNumber: 771,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 766,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 744,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                        lineNumber: 743,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, workplace.id, true, {
                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                lineNumber: 669,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                        lineNumber: 667,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                lineNumber: 644,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                            lineNumber: 643,
                            columnNumber: 13
                        }, this),
                        totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium text-gray-700",
                                    children: [
                                        "Página ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-indigo-600",
                                            children: currentPage
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 785,
                                            columnNumber: 26
                                        }, this),
                                        " de ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-indigo-600",
                                            children: totalPages
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 785,
                                            columnNumber: 94
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                    lineNumber: 784,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentPage((p)=>Math.max(1, p - 1)),
                                            disabled: currentPage === 1,
                                            className: "px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 font-medium transition",
                                            children: "Anterior"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 788,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentPage((p)=>Math.min(totalPages, p + 1)),
                                            disabled: currentPage === totalPages,
                                            className: "px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 font-medium transition",
                                            children: "Siguiente"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 795,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                    lineNumber: 787,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                            lineNumber: 783,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                lineNumber: 632,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto m-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 border-b border-gray-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-gray-900",
                                children: isEditMode ? 'Editar Barbería' : selectedWorkplace ? 'Detalles de la Barbería' : 'Nueva Barbería'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                lineNumber: 814,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                            lineNumber: 813,
                            columnNumber: 13
                        }, this),
                        selectedWorkplace && !isEditMode ? // View mode
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 rounded-lg p-4 border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                            children: "ID de Barbería"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 824,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    className: "flex-1 px-3 py-2 bg-white border border-gray-300 rounded text-sm font-mono text-gray-800",
                                                    children: selectedWorkplace.id
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 826,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>copyToClipboard(selectedWorkplace.id, selectedWorkplace.id),
                                                    className: "p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2",
                                                    title: "Copiar ID",
                                                    children: copiedId === selectedWorkplace.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                        lineNumber: 835,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                        lineNumber: 837,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 829,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 825,
                                            columnNumber: 19
                                        }, this),
                                        copiedId === selectedWorkplace.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-green-600 flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 843,
                                                    columnNumber: 23
                                                }, this),
                                                "ID copiado al portapapeles"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 842,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                    lineNumber: 823,
                                    columnNumber: 17
                                }, this),
                                selectedWorkplace.banner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg overflow-hidden border border-gray-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: getImageUrl(selectedWorkplace.banner),
                                        alt: "Banner",
                                        className: "w-full h-48 object-cover",
                                        onError: (e)=>{
                                            e.target.style.display = 'none';
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                        lineNumber: 852,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                    lineNumber: 851,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-1",
                                                    children: "Nombre"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 865,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg",
                                                    children: selectedWorkplace.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 866,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 864,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-1",
                                                    children: "Ciudad"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 869,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg",
                                                    children: selectedWorkplace.city || '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 870,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 868,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-1",
                                                    children: "Dirección"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 873,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg",
                                                    children: selectedWorkplace.address || '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 874,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 872,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-1",
                                                    children: "Descripción"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 877,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg",
                                                    children: selectedWorkplace.description || '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 878,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 876,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-1",
                                                    children: "Calificación"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 881,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            className: "w-4 h-4 text-yellow-400 fill-yellow-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 883,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium",
                                                            children: selectedWorkplace.rating.toFixed(1)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 884,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-500",
                                                            children: [
                                                                "(",
                                                                selectedWorkplace.reviews,
                                                                " reseñas)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 885,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 882,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 880,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-1",
                                                    children: "Barberos"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 889,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg",
                                                    children: selectedWorkplace.barbersCount || 0
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 890,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 888,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-1",
                                                    children: "Imagen"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 893,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500 break-all",
                                                    children: selectedWorkplace.image || '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 894,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 892,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-1",
                                                    children: "Banner"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 897,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500 break-all",
                                                    children: selectedWorkplace.banner || '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 898,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 896,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                    lineNumber: 863,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-4 border-t border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-gray-900",
                                                    children: "Galería Multimedia"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 905,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            ref: mediaInputRef,
                                                            type: "file",
                                                            accept: "image/*,video/*",
                                                            multiple: true,
                                                            onChange: handleMediaUpload,
                                                            className: "hidden",
                                                            id: "media-upload"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 907,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "media-upload",
                                                            className: `px-4 py-2 bg-indigo-600 text-white rounded-lg cursor-pointer hover:bg-indigo-700 transition flex items-center gap-2 ${uploadingMedia ? 'opacity-50 cursor-not-allowed' : ''}`,
                                                            children: uploadingMedia ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                        lineNumber: 922,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Subiendo..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                        lineNumber: 923,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                        lineNumber: 927,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Agregar Multimedia"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                        lineNumber: 928,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 916,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 906,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 904,
                                            columnNumber: 19
                                        }, this),
                                        workplaceMedia.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                    className: "w-12 h-12 mx-auto mb-2 text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 937,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "No hay multimedia agregada"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 938,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm",
                                                    children: "Sube imágenes o videos para la galería"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 939,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 936,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-4",
                                            children: workplaceMedia.map((media)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "aspect-square rounded-lg overflow-hidden border border-gray-200 bg-gray-100",
                                                            children: media.type === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                                src: getImageUrl(media.url),
                                                                className: "w-full h-full object-cover",
                                                                controls: false,
                                                                crossOrigin: "anonymous",
                                                                children: "Tu navegador no soporta videos."
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                lineNumber: 947,
                                                                columnNumber: 31
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: getImageUrl(media.url),
                                                                alt: media.caption || 'Media',
                                                                className: "w-full h-full object-cover",
                                                                crossOrigin: "anonymous",
                                                                onError: (e)=>{
                                                                    e.target.style.display = 'none';
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                lineNumber: 956,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 945,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleDeleteMedia(media.id),
                                                            className: "absolute top-2 right-2 p-1.5 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-red-700",
                                                            title: "Eliminar",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                lineNumber: 972,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 967,
                                                            columnNumber: 27
                                                        }, this),
                                                        media.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-2 rounded-b-lg",
                                                            children: media.caption
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 975,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, media.id, true, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 944,
                                                    columnNumber: 25
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 942,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                    lineNumber: 903,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-2 pt-4 border-t border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setIsModalOpen(false);
                                                setSelectedWorkplace(null);
                                                setWorkplaceMedia([]);
                                            },
                                            className: "px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50",
                                            children: "Cerrar"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 986,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setIsEditMode(true);
                                            },
                                            className: "px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700",
                                            children: "Editar"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 996,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                    lineNumber: 985,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                            lineNumber: 821,
                            columnNumber: 15
                        }, this) : // Create/Edit form
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit(onSubmit),
                            className: "p-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: [
                                                        "Nombre ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 1012,
                                                            columnNumber: 30
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 1011,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ...register('name'),
                                                    type: "text",
                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 1014,
                                                    columnNumber: 21
                                                }, this),
                                                errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm text-red-600",
                                                    children: errors.name.message
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 1020,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 1010,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Dirección"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 1025,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ...register('address'),
                                                    type: "text",
                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 1026,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 1024,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Ciudad"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 1034,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ...register('city'),
                                                    type: "text",
                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 1035,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 1033,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "hidden",
                                            ...register('latitude', {
                                                valueAsNumber: true
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 1043,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "hidden",
                                            ...register('longitude', {
                                                valueAsNumber: true
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 1044,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LocationPicker, {
                                                latitude: watch('latitude'),
                                                longitude: watch('longitude'),
                                                onLocationChange: (lat, lng)=>{
                                                    setValue('latitude', lat, {
                                                        shouldValidate: true
                                                    });
                                                    setValue('longitude', lng, {
                                                        shouldValidate: true
                                                    });
                                                },
                                                onClear: ()=>{
                                                    setValue('latitude', null);
                                                    setValue('longitude', null);
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                lineNumber: 1047,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 1046,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Descripción"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 1062,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    ...register('description'),
                                                    rows: 3,
                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 1063,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 1061,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Redes Sociales"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 1071,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs text-gray-600 mb-1",
                                                                    children: "Instagram"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 1074,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    ...register('instagramUrl'),
                                                                    type: "text",
                                                                    placeholder: "@usuario o https://instagram.com/usuario",
                                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 1075,
                                                                    columnNumber: 25
                                                                }, this),
                                                                errors.instagramUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-1 text-xs text-red-600",
                                                                    children: errors.instagramUrl.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 1082,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 1073,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-xs text-gray-600 mb-1",
                                                                    children: "TikTok"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 1086,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    ...register('tiktokUrl'),
                                                                    type: "text",
                                                                    placeholder: "@usuario o https://tiktok.com/@usuario",
                                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 1087,
                                                                    columnNumber: 25
                                                                }, this),
                                                                errors.tiktokUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-1 text-xs text-red-600",
                                                                    children: errors.tiktokUrl.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 1094,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 1085,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 1072,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-xs text-gray-500",
                                                    children: "Puedes usar @usuario o la URL completa. El sistema normalizará automáticamente."
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 1098,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 1070,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Imagen de Perfil"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 1104,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    ...register('image'),
                                                                    type: "text",
                                                                    placeholder: "URL de imagen o sube un archivo",
                                                                    className: "flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 1107,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    ref: imageInputRef,
                                                                    type: "file",
                                                                    accept: "image/*",
                                                                    onChange: handleImageUpload,
                                                                    className: "hidden",
                                                                    id: "image-upload-form"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 1113,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "image-upload-form",
                                                                    className: `px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition flex items-center gap-2 ${uploadingImage ? 'opacity-50 cursor-not-allowed' : ''}`,
                                                                    children: uploadingImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "animate-spin rounded-full h-4 w-4 border-b-2 border-indigo-600"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                                lineNumber: 1127,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Subiendo..."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                                lineNumber: 1128,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                                lineNumber: 1132,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Subir"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                                lineNumber: 1133,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 1121,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 1106,
                                                            columnNumber: 23
                                                        }, this),
                                                        watchedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-lg overflow-hidden border border-gray-200 max-w-xs",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: getImageUrl(watchedImage),
                                                                alt: "Preview",
                                                                className: "w-full h-32 object-cover",
                                                                onError: (e)=>{
                                                                    e.target.style.display = 'none';
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                lineNumber: 1140,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 1139,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 1105,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 1103,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Banner"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 1154,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    ...register('banner'),
                                                                    type: "text",
                                                                    placeholder: "URL de banner o sube un archivo",
                                                                    className: "flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 1157,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    ref: bannerInputRef,
                                                                    type: "file",
                                                                    accept: "image/*",
                                                                    onChange: handleBannerUpload,
                                                                    className: "hidden",
                                                                    id: "banner-upload-form"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 1163,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "banner-upload-form",
                                                                    className: `px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition flex items-center gap-2 ${uploadingBanner ? 'opacity-50 cursor-not-allowed' : ''}`,
                                                                    children: uploadingBanner ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "animate-spin rounded-full h-4 w-4 border-b-2 border-indigo-600"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                                lineNumber: 1177,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Subiendo..."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                                lineNumber: 1178,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                                lineNumber: 1182,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Subir"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                                lineNumber: 1183,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 1171,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 1156,
                                                            columnNumber: 23
                                                        }, this),
                                                        watchedBanner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-lg overflow-hidden border border-gray-200",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: getImageUrl(watchedBanner),
                                                                alt: "Banner Preview",
                                                                className: "w-full h-48 object-cover",
                                                                onError: (e)=>{
                                                                    e.target.style.display = 'none';
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                lineNumber: 1190,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 1189,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 1155,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 1153,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                    lineNumber: 1009,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-2 pt-4 border-t border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setIsModalOpen(false);
                                                setSelectedWorkplace(null);
                                                reset();
                                            },
                                            className: "px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50",
                                            children: "Cancelar"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 1205,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700",
                                            children: isEditMode ? 'Actualizar' : 'Crear'
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 1216,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                    lineNumber: 1204,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                            lineNumber: 1008,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                    lineNumber: 812,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                lineNumber: 811,
                columnNumber: 9
            }, this),
            isMediaModalOpen && mediaWorkplace && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto m-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-gray-900",
                                            children: "Galería Multimedia"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 1235,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 mt-1",
                                            children: mediaWorkplace.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 1236,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                    lineNumber: 1234,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCloseMediaModal,
                                    className: "p-2 text-gray-400 hover:text-gray-600 rounded-lg transition",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                        lineNumber: 1242,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                    lineNumber: 1238,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                            lineNumber: 1233,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-gray-900",
                                                children: "Agregar Multimedia"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                lineNumber: 1250,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 1249,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            ref: mediaInputRef,
                                                            type: "file",
                                                            accept: "image/*,video/*",
                                                            multiple: true,
                                                            onChange: handleFileSelect,
                                                            className: "hidden",
                                                            id: "media-upload-modal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 1254,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "media-upload-modal",
                                                            className: "px-4 py-2 bg-gray-600 text-white rounded-lg cursor-pointer hover:bg-gray-700 transition flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 1267,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Seleccionar Archivos"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 1268,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 1263,
                                                            columnNumber: 21
                                                        }, this),
                                                        selectedFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleMediaUpload,
                                                            disabled: uploadingMedia,
                                                            className: `px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2 ${uploadingMedia ? 'opacity-50 cursor-not-allowed' : ''}`,
                                                            children: uploadingMedia ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                        lineNumber: 1278,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Subiendo..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                        lineNumber: 1279,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                        lineNumber: 1283,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "Subir ",
                                                                            selectedFiles.length,
                                                                            " archivo",
                                                                            selectedFiles.length > 1 ? 's' : ''
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                        lineNumber: 1284,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 1271,
                                                            columnNumber: 23
                                                        }, this),
                                                        selectedFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setSelectedFiles([]),
                                                            className: "px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition",
                                                            children: "Limpiar"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 1290,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 1253,
                                                    columnNumber: 19
                                                }, this),
                                                selectedFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 rounded-lg p-4 border border-gray-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-gray-700 mb-2",
                                                            children: [
                                                                "Archivos seleccionados (",
                                                                selectedFiles.length,
                                                                "):"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 1300,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "text-sm text-gray-600 space-y-1",
                                                            children: selectedFiles.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "w-2 h-2 bg-indigo-600 rounded-full"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                            lineNumber: 1306,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        file.name,
                                                                        " (",
                                                                        (file.size / 1024 / 1024).toFixed(2),
                                                                        " MB)"
                                                                    ]
                                                                }, index, true, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                                    lineNumber: 1305,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 1303,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 1299,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 1252,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 mt-4",
                                            children: "Puedes seleccionar múltiples imágenes o videos a la vez"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 1314,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                    lineNumber: 1248,
                                    columnNumber: 15
                                }, this),
                                workplaceMedia.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-12 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                            className: "w-16 h-16 mx-auto mb-4 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 1320,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-medium",
                                            children: "No hay multimedia agregada"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 1321,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm mt-2",
                                            children: "Sube imágenes o videos para la galería"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 1322,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                    lineNumber: 1319,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-4",
                                    children: workplaceMedia.map((media)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "aspect-square rounded-lg overflow-hidden border border-gray-200 bg-gray-100",
                                                    children: media.type === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                        src: getImageUrl(media.url),
                                                        className: "w-full h-full object-cover",
                                                        controls: false,
                                                        crossOrigin: "anonymous",
                                                        children: "Tu navegador no soporta videos."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                        lineNumber: 1330,
                                                        columnNumber: 27
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: getImageUrl(media.url),
                                                        alt: media.caption || 'Media',
                                                        className: "w-full h-full object-cover",
                                                        crossOrigin: "anonymous",
                                                        onError: (e)=>{
                                                            e.target.style.display = 'none';
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                        lineNumber: 1339,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 1328,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleDeleteMedia(media.id),
                                                    className: "absolute top-2 right-2 p-1.5 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-red-700 shadow-lg",
                                                    title: "Eliminar",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                        lineNumber: 1355,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 1350,
                                                    columnNumber: 23
                                                }, this),
                                                media.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-2 rounded-b-lg",
                                                    children: media.caption
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 1358,
                                                    columnNumber: 25
                                                }, this),
                                                media.type === 'video' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                            className: "w-3 h-3 inline mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                            lineNumber: 1364,
                                                            columnNumber: 27
                                                        }, this),
                                                        "Video"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                                    lineNumber: 1363,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, media.id, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                            lineNumber: 1327,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                    lineNumber: 1325,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                            lineNumber: 1246,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCloseMediaModal,
                                className: "px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition",
                                children: "Cerrar"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                lineNumber: 1375,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                            lineNumber: 1374,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                    lineNumber: 1232,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                lineNumber: 1231,
                columnNumber: 9
            }, this),
            deleteConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-xl p-6 max-w-md w-full m-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-900 mb-4",
                            children: "Confirmar Eliminación"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                            lineNumber: 1390,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-6",
                            children: "¿Estás seguro de que deseas eliminar esta barbería? Esta acción no se puede deshacer."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                            lineNumber: 1391,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setDeleteConfirm(null),
                                    className: "px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50",
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                    lineNumber: 1395,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDelete(deleteConfirm),
                                    className: "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700",
                                    children: "Eliminar"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                                    lineNumber: 1401,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                            lineNumber: 1394,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                    lineNumber: 1389,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
                lineNumber: 1388,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/barbershops/page.tsx",
        lineNumber: 518,
        columnNumber: 5
    }, this);
}
_s(BarbershopsPage, "87eB/uuN4EL8xbMqZ540nGvw3Ag=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c1 = BarbershopsPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "LocationPicker");
__turbopack_context__.k.register(_c1, "BarbershopsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_projects_barber-application_barber-app-backoffice_53ef2df7._.js.map