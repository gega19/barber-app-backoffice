module.exports = [
"[project]/Desktop/projects/barber-application/barber-app-backoffice/lib/appointments.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appointmentsService",
    ()=>appointmentsService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/lib/api.ts [app-ssr] (ecmascript)");
;
const appointmentsService = {
    async getAppointments (page = 1, limit = 10, search, status, dateFrom, dateTo) {
        const params = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString()
        });
        if (search) params.append('search', search);
        if (status) params.append('status', status);
        if (dateFrom) params.append('dateFrom', dateFrom);
        if (dateTo) params.append('dateTo', dateTo);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/appointments/admin?${params.toString()}`);
        return response.data;
    },
    async getAppointmentById (id) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/appointments/admin/${id}`);
        return response.data.data;
    },
    async createAppointment (data) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/appointments', data);
        return response.data.data;
    },
    async updateAppointment (id, data) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/appointments/admin/${id}`, data);
        return response.data.data;
    },
    async deleteAppointment (id) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/appointments/admin/${id}`);
    },
    async getPendingPaymentAppointments (page = 1, limit = 10, paymentStatus) {
        const params = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString()
        });
        if (paymentStatus !== undefined && paymentStatus !== null && paymentStatus !== '') {
            params.append('paymentStatus', paymentStatus);
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/appointments/admin/pending-payments?${params.toString()}`);
        return response.data;
    },
    async verifyPayment (id, verified) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/appointments/admin/${id}/verify-payment`, {
            verified
        });
        return response.data.data;
    }
};
}),
"[project]/Desktop/projects/barber-application/barber-app-backoffice/lib/users.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usersService",
    ()=>usersService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/lib/api.ts [app-ssr] (ecmascript)");
;
const usersService = {
    async getUsers (page = 1, limit = 10, search) {
        const params = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString()
        });
        if (search) {
            params.append('search', search);
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/users?${params.toString()}`);
        return response.data;
    },
    async getUserById (id) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/users/${id}`);
        return response.data.data;
    },
    async createUser (data) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/users', data);
        return response.data.data;
    },
    async updateUser (id, data) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/users/${id}`, data);
        return response.data.data;
    },
    async deleteUser (id) {
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/users/${id}`);
    },
    async getBarbers () {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/barbers');
        return response.data.data || [];
    }
};
}),
"[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppointmentsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-ssr] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/funnel.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-ssr] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$appointments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/lib/appointments.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/lib/users.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/barber-application/barber-app-backoffice/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
;
;
;
;
;
;
const appointmentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    userId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Selecciona un cliente'),
    barberId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Selecciona un barbero'),
    serviceId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    date: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'La fecha es requerida'),
    time: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'La hora es requerida'),
    paymentMethod: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'El método de pago es requerido'),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'PENDING',
        'CONFIRMED',
        'COMPLETED',
        'CANCELLED'
    ]).optional()
});
function AppointmentsPage() {
    const [appointments, setAppointments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditMode, setIsEditMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedAppointment, setSelectedAppointment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [totalPages, setTotalPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [deleteConfirm, setDeleteConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showFilters, setShowFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('ALL');
    const [dateFromFilter, setDateFromFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [dateToFilter, setDateToFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [copiedId, setCopiedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [barbers, setBarbers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodResolver"])(appointmentSchema),
        defaultValues: {
            status: 'PENDING'
        }
    });
    const loadUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usersService"].getUsers(1, 100);
            setUsers(response.data);
        } catch (err) {
            console.error('Error loading users:', err);
        }
    }, []);
    const loadBarbers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const barbersList = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$users$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usersService"].getBarbers();
            setBarbers(barbersList);
        } catch (err) {
            console.error('Error loading barbers:', err);
        }
    }, []);
    const loadAppointments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setIsLoading(true);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$appointments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appointmentsService"].getAppointments(currentPage, 10, searchTerm || undefined, statusFilter !== 'ALL' ? statusFilter : undefined, dateFromFilter || undefined, dateToFilter || undefined);
            setAppointments(response.data);
            setTotalPages(response.pagination.totalPages);
        } catch (err) {
            setError(err.response?.data?.message || 'Error al cargar citas');
        } finally{
            setIsLoading(false);
        }
    }, [
        currentPage,
        searchTerm,
        statusFilter,
        dateFromFilter,
        dateToFilter
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadAppointments();
        loadUsers();
        loadBarbers();
    }, [
        loadAppointments,
        loadUsers,
        loadBarbers
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
        setStatusFilter('ALL');
        setDateFromFilter('');
        setDateToFilter('');
        setCurrentPage(1);
    };
    const hasActiveFilters = searchTerm !== '' || statusFilter !== 'ALL' || dateFromFilter !== '' || dateToFilter !== '';
    const getAvatarUrl = (avatar, avatarSeed)=>{
        if (avatar && avatar.trim() !== '') {
            return avatar;
        }
        if (avatarSeed) {
            return `https://api.dicebear.com/7.x/avataaars/png?seed=${avatarSeed}&size=512`;
        }
        return null;
    };
    const getStatusBadgeColor = (status)=>{
        switch(status){
            case 'PENDING':
                return 'bg-yellow-100 text-yellow-800';
            case 'CONFIRMED':
                return 'bg-blue-100 text-blue-800';
            case 'COMPLETED':
                return 'bg-green-100 text-green-800';
            case 'CANCELLED':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };
    const getStatusLabel = (status)=>{
        switch(status){
            case 'PENDING':
                return 'Pendiente';
            case 'CONFIRMED':
                return 'Confirmada';
            case 'COMPLETED':
                return 'Completada';
            case 'CANCELLED':
                return 'Cancelada';
            default:
                return status;
        }
    };
    const handleCreate = ()=>{
        setIsEditMode(false);
        setSelectedAppointment(null);
        reset({
            status: 'PENDING'
        });
        setIsModalOpen(true);
    };
    const handleView = (appointment)=>{
        setSelectedAppointment(appointment);
        setIsEditMode(false);
        setIsModalOpen(true);
    };
    const handleEdit = (appointment)=>{
        setSelectedAppointment(appointment);
        setIsEditMode(true);
        const appointmentDate = new Date(appointment.date);
        const dateStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(appointmentDate, 'yyyy-MM-dd');
        reset({
            userId: appointment.userId,
            barberId: appointment.barberId,
            serviceId: appointment.serviceId || '',
            date: dateStr,
            time: appointment.time,
            paymentMethod: appointment.paymentMethod || '',
            notes: appointment.notes || '',
            status: appointment.status
        });
        setIsModalOpen(true);
    };
    const onSubmit = async (data)=>{
        try {
            setError(null);
            if (isEditMode && selectedAppointment) {
                const updateData = {
                    status: data.status,
                    date: data.date,
                    time: data.time,
                    paymentMethod: data.paymentMethod,
                    notes: data.notes || undefined
                };
                await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$appointments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appointmentsService"].updateAppointment(selectedAppointment.id, updateData);
            } else {
                const createData = {
                    userId: data.userId,
                    barberId: data.barberId,
                    serviceId: data.serviceId || undefined,
                    date: data.date,
                    time: data.time,
                    paymentMethod: data.paymentMethod,
                    notes: data.notes || undefined
                };
                await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$appointments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appointmentsService"].createAppointment(createData);
            }
            setIsModalOpen(false);
            reset();
            loadAppointments();
        } catch (err) {
            setError(err.response?.data?.message || 'Error al guardar cita');
        }
    };
    const handleDelete = async (id)=>{
        try {
            setError(null);
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$lib$2f$appointments$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appointmentsService"].deleteAppointment(id);
            setDeleteConfirm(null);
            loadAppointments();
        } catch (err) {
            setError(err.response?.data?.message || 'Error al eliminar cita');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold text-gray-900 flex items-center gap-3 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 bg-indigo-100 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "w-8 h-8 text-indigo-600"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 246,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this),
                                    "Citas"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-lg",
                                children: "Gestiona todas las citas y reservas"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCreate,
                        className: "flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-6 py-3 rounded-xl hover:from-indigo-700 hover:to-indigo-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this),
                            "Nueva Cita"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-lg shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-5 h-5 mr-2"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                            lineNumber: 265,
                            columnNumber: 13
                        }, this),
                        error
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                    lineNumber: 264,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                lineNumber: 263,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowFilters(!showFilters),
                        className: "w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                        className: "w-5 h-5 text-gray-600"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                        lineNumber: 278,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-gray-900",
                                        children: "Filtros"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this),
                                    hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full",
                                        children: "Activos"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                        lineNumber: 281,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this),
                            showFilters ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                className: "w-5 h-5 text-gray-600"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                lineNumber: 287,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "w-5 h-5 text-gray-600"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                lineNumber: 289,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    showFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-4 border-t border-gray-200 bg-gray-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-4 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Buscar"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                lineNumber: 298,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "Cliente o barbero...",
                                                        value: searchTerm,
                                                        onChange: (e)=>{
                                                            setSearchTerm(e.target.value);
                                                            setCurrentPage(1);
                                                        },
                                                        className: "w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                lineNumber: 299,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                        lineNumber: 297,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Estado"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                lineNumber: 316,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: statusFilter,
                                                onChange: (e)=>{
                                                    setStatusFilter(e.target.value);
                                                    setCurrentPage(1);
                                                },
                                                className: "w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "ALL",
                                                        children: "Todos los estados"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "PENDING",
                                                        children: "Pendiente"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "CONFIRMED",
                                                        children: "Confirmada"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "COMPLETED",
                                                        children: "Completada"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "CANCELLED",
                                                        children: "Cancelada"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                lineNumber: 317,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Fecha Desde"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                lineNumber: 335,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: dateFromFilter,
                                                onChange: (e)=>{
                                                    setDateFromFilter(e.target.value);
                                                    setCurrentPage(1);
                                                },
                                                className: "w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                lineNumber: 336,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                        lineNumber: 334,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Fecha Hasta"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                lineNumber: 349,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: dateToFilter,
                                                onChange: (e)=>{
                                                    setDateToFilter(e.target.value);
                                                    setCurrentPage(1);
                                                },
                                                className: "w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none bg-white"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                lineNumber: 350,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                        lineNumber: 348,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                lineNumber: 295,
                                columnNumber: 13
                            }, this),
                            hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: clearFilters,
                                    className: "flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 368,
                                            columnNumber: 19
                                        }, this),
                                        "Limpiar filtros"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                    lineNumber: 364,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                lineNumber: 363,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                        lineNumber: 294,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden",
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                        lineNumber: 381,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                    lineNumber: 380,
                    columnNumber: 11
                }, this) : appointments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12 text-gray-500",
                    children: "No se encontraron citas"
                }, void 0, false, {
                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                    lineNumber: 384,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider",
                                                    children: "Cliente"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider",
                                                    children: "Barbero"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider",
                                                    children: "Fecha y Hora"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 399,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider",
                                                    children: "Estado"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider",
                                                    children: "Método de Pago"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-6 py-4 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider",
                                                    children: "Acciones"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 408,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 392,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                        lineNumber: 391,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "bg-white divide-y divide-gray-200",
                                        children: appointments.map((appointment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-indigo-50/50 transition-colors duration-150",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-shrink-0 h-12 w-12 rounded-full overflow-hidden border-2 border-indigo-300 shadow-md",
                                                                    children: getAvatarUrl(appointment.client.avatar, appointment.client.avatarSeed) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: getAvatarUrl(appointment.client.avatar, appointment.client.avatarSeed),
                                                                        alt: appointment.client.name,
                                                                        className: "w-full h-full object-cover",
                                                                        onError: (e)=>{
                                                                            const target = e.target;
                                                                            target.style.display = 'none';
                                                                            const parent = target.parentElement;
                                                                            if (parent) {
                                                                                parent.innerHTML = `<span class="text-white font-semibold text-lg flex items-center justify-center w-full h-full bg-gradient-to-br from-indigo-400 to-indigo-600">${appointment.client.name.charAt(0).toUpperCase()}</span>`;
                                                                            }
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                        lineNumber: 420,
                                                                        columnNumber: 31
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-full h-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-white font-semibold text-lg",
                                                                            children: appointment.client.name.charAt(0).toUpperCase()
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                            lineNumber: 435,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                        lineNumber: 434,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                    lineNumber: 418,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "ml-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-sm font-semibold text-gray-900",
                                                                            children: appointment.client.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                            lineNumber: 442,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-sm text-gray-500",
                                                                            children: appointment.client.email
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                            lineNumber: 443,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                    lineNumber: 441,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                            lineNumber: 417,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-shrink-0 h-10 w-10 rounded-full overflow-hidden border-2 border-amber-300 shadow-md",
                                                                    children: getAvatarUrl(appointment.barber.image, appointment.barber.avatarSeed) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: getAvatarUrl(appointment.barber.image, appointment.barber.avatarSeed),
                                                                        alt: appointment.barber.name,
                                                                        className: "w-full h-full object-cover",
                                                                        onError: (e)=>{
                                                                            const target = e.target;
                                                                            target.style.display = 'none';
                                                                            const parent = target.parentElement;
                                                                            if (parent) {
                                                                                parent.innerHTML = `<span class="text-white font-semibold flex items-center justify-center w-full h-full bg-gradient-to-br from-amber-400 to-amber-600">${appointment.barber.name.charAt(0).toUpperCase()}</span>`;
                                                                            }
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                        lineNumber: 451,
                                                                        columnNumber: 31
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-full h-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-white font-semibold",
                                                                            children: appointment.barber.name.charAt(0).toUpperCase()
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                            lineNumber: 466,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                        lineNumber: 465,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                    lineNumber: 449,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "ml-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-sm font-semibold text-gray-900",
                                                                            children: appointment.barber.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                            lineNumber: 473,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        appointment.barber.specialty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: appointment.barber.specialty
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                            lineNumber: 475,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                    lineNumber: 472,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                            lineNumber: 448,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 text-sm text-gray-900",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                        className: "w-4 h-4 text-gray-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                        lineNumber: 482,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: new Date(appointment.date).toLocaleDateString('es-VE')
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                        lineNumber: 483,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                lineNumber: 481,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 text-sm text-gray-500 mt-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                        className: "w-4 h-4 text-gray-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                        lineNumber: 486,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: appointment.time
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                        lineNumber: 487,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                lineNumber: 485,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                        lineNumber: 480,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(appointment.status)}`,
                                                            children: getStatusLabel(appointment.status)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                            lineNumber: 491,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                        lineNumber: 490,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 text-sm text-gray-900",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                                                    className: "w-4 h-4 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                    lineNumber: 501,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: appointment.paymentMethod || '-'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                    lineNumber: 502,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                            lineNumber: 500,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                        lineNumber: 499,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-end gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleView(appointment),
                                                                    className: "p-2 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-lg transition",
                                                                    title: "Ver detalles",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                        lineNumber: 512,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                    lineNumber: 507,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleEdit(appointment),
                                                                    className: "p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-100 rounded-lg transition",
                                                                    title: "Editar",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                        lineNumber: 519,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                    lineNumber: 514,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>setDeleteConfirm(appointment.id),
                                                                    className: "p-2 text-red-600 hover:text-red-700 hover:bg-red-100 rounded-lg transition",
                                                                    title: "Eliminar",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "w-5 h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                        lineNumber: 526,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                    lineNumber: 521,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                            lineNumber: 506,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                        lineNumber: 505,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, appointment.id, true, {
                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                lineNumber: 415,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                        lineNumber: 413,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                lineNumber: 390,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                            lineNumber: 389,
                            columnNumber: 13
                        }, this),
                        totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium text-gray-700",
                                    children: [
                                        "Página ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-indigo-600",
                                            children: currentPage
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 540,
                                            columnNumber: 26
                                        }, this),
                                        " de ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-indigo-600",
                                            children: totalPages
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 540,
                                            columnNumber: 94
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                    lineNumber: 539,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentPage((p)=>Math.max(1, p - 1)),
                                            disabled: currentPage === 1,
                                            className: "px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 font-medium transition",
                                            children: "Anterior"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 543,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentPage((p)=>Math.min(totalPages, p + 1)),
                                            disabled: currentPage === totalPages,
                                            className: "px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 font-medium transition",
                                            children: "Siguiente"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 550,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                    lineNumber: 542,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                            lineNumber: 538,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                lineNumber: 378,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto m-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 border-b border-gray-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-gray-900",
                                children: isEditMode ? 'Editar Cita' : selectedAppointment ? 'Detalles de la Cita' : 'Nueva Cita'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                lineNumber: 569,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                            lineNumber: 568,
                            columnNumber: 13
                        }, this),
                        selectedAppointment && !isEditMode ? // View mode
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 rounded-lg p-4 border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                            children: "ID de Cita"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 579,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    className: "flex-1 px-3 py-2 bg-white border border-gray-300 rounded text-sm font-mono text-gray-800",
                                                    children: selectedAppointment.id
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 581,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>copyToClipboard(selectedAppointment.id, selectedAppointment.id),
                                                    className: "p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2",
                                                    title: "Copiar ID",
                                                    children: copiedId === selectedAppointment.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                        lineNumber: 590,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                        lineNumber: 592,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 584,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 580,
                                            columnNumber: 19
                                        }, this),
                                        copiedId === selectedAppointment.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-green-600 flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 598,
                                                    columnNumber: 23
                                                }, this),
                                                "ID copiado al portapapeles"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 597,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                    lineNumber: 578,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-1",
                                                    children: "Cliente"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 606,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 bg-gray-50 px-3 py-2 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0 h-10 w-10 rounded-full overflow-hidden border-2 border-indigo-300",
                                                            children: getAvatarUrl(selectedAppointment.client.avatar, selectedAppointment.client.avatarSeed) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: getAvatarUrl(selectedAppointment.client.avatar, selectedAppointment.client.avatarSeed),
                                                                alt: selectedAppointment.client.name,
                                                                className: "w-full h-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                lineNumber: 610,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full h-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white font-semibold",
                                                                    children: selectedAppointment.client.name.charAt(0).toUpperCase()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                    lineNumber: 617,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                lineNumber: 616,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                            lineNumber: 608,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium text-gray-900",
                                                                    children: selectedAppointment.client.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                    lineNumber: 624,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: selectedAppointment.client.email
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                    lineNumber: 625,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                            lineNumber: 623,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 607,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 605,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-1",
                                                    children: "Barbero"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 630,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 bg-gray-50 px-3 py-2 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0 h-10 w-10 rounded-full overflow-hidden border-2 border-amber-300",
                                                            children: getAvatarUrl(selectedAppointment.barber.image, selectedAppointment.barber.avatarSeed) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: getAvatarUrl(selectedAppointment.barber.image, selectedAppointment.barber.avatarSeed),
                                                                alt: selectedAppointment.barber.name,
                                                                className: "w-full h-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                lineNumber: 634,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full h-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-white font-semibold",
                                                                    children: selectedAppointment.barber.name.charAt(0).toUpperCase()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                    lineNumber: 641,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                lineNumber: 640,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                            lineNumber: 632,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium text-gray-900",
                                                                    children: selectedAppointment.barber.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                    lineNumber: 648,
                                                                    columnNumber: 25
                                                                }, this),
                                                                selectedAppointment.barber.specialty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-500",
                                                                    children: selectedAppointment.barber.specialty
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                    lineNumber: 650,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                            lineNumber: 647,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 631,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 629,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-1",
                                                    children: "Fecha"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 656,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg",
                                                    children: new Date(selectedAppointment.date).toLocaleDateString('es-VE', {
                                                        weekday: 'long',
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 657,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 655,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-1",
                                                    children: "Hora"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 667,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg",
                                                    children: selectedAppointment.time
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 668,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 666,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-1",
                                                    children: "Estado"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 671,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `px-3 py-1 inline-flex text-sm font-semibold rounded-full ${getStatusBadgeColor(selectedAppointment.status)}`,
                                                    children: getStatusLabel(selectedAppointment.status)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 672,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 670,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-1",
                                                    children: "Método de Pago"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 681,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg",
                                                    children: selectedAppointment.paymentMethod || '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 682,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 680,
                                            columnNumber: 19
                                        }, this),
                                        selectedAppointment.service && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-1",
                                                    children: "Servicio"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 688,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-gray-50 px-3 py-2 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-gray-900",
                                                            children: selectedAppointment.service.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                            lineNumber: 690,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-500",
                                                            children: [
                                                                "$",
                                                                selectedAppointment.service.price.toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                            lineNumber: 691,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 689,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 687,
                                            columnNumber: 21
                                        }, this),
                                        selectedAppointment.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-semibold text-gray-700 mb-1",
                                                    children: "Notas"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 697,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg",
                                                    children: selectedAppointment.notes
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 698,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 696,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                    lineNumber: 604,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-2 pt-4 border-t border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setIsModalOpen(false);
                                                setSelectedAppointment(null);
                                            },
                                            className: "px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50",
                                            children: "Cerrar"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 704,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setIsEditMode(true);
                                            },
                                            className: "px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700",
                                            children: "Editar"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 713,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                    lineNumber: 703,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                            lineNumber: 576,
                            columnNumber: 15
                        }, this) : // Create/Edit form
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit(onSubmit),
                            className: "p-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Cliente *"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 728,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    ...register('userId'),
                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none",
                                                    disabled: isEditMode,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Selecciona un cliente"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                            lineNumber: 734,
                                                            columnNumber: 23
                                                        }, this),
                                                        users.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: user.id,
                                                                children: [
                                                                    user.name,
                                                                    " (",
                                                                    user.email,
                                                                    ")"
                                                                ]
                                                            }, user.id, true, {
                                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                lineNumber: 736,
                                                                columnNumber: 25
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 729,
                                                    columnNumber: 21
                                                }, this),
                                                errors.userId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm text-red-600",
                                                    children: errors.userId.message
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 742,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 727,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Barbero *"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 747,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    ...register('barberId'),
                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none",
                                                    disabled: isEditMode,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Selecciona un barbero"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                            lineNumber: 753,
                                                            columnNumber: 23
                                                        }, this),
                                                        barbers.map((barber)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: barber.id,
                                                                children: [
                                                                    barber.name,
                                                                    " ",
                                                                    barber.specialty ? `- ${barber.specialty}` : ''
                                                                ]
                                                            }, barber.id, true, {
                                                                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                                lineNumber: 755,
                                                                columnNumber: 25
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 748,
                                                    columnNumber: 21
                                                }, this),
                                                errors.barberId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm text-red-600",
                                                    children: errors.barberId.message
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 761,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 746,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Fecha *"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 766,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ...register('date'),
                                                    type: "date",
                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 767,
                                                    columnNumber: 21
                                                }, this),
                                                errors.date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm text-red-600",
                                                    children: errors.date.message
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 773,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 765,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Hora *"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 778,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ...register('time'),
                                                    type: "time",
                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 779,
                                                    columnNumber: 21
                                                }, this),
                                                errors.time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm text-red-600",
                                                    children: errors.time.message
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 785,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 777,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Método de Pago *"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 790,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ...register('paymentMethod'),
                                                    type: "text",
                                                    placeholder: "Efectivo, Tarjeta, etc.",
                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 791,
                                                    columnNumber: 21
                                                }, this),
                                                errors.paymentMethod && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm text-red-600",
                                                    children: errors.paymentMethod.message
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 798,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 789,
                                            columnNumber: 19
                                        }, this),
                                        isEditMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Estado"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 804,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    ...register('status'),
                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "PENDING",
                                                            children: "Pendiente"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                            lineNumber: 809,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "CONFIRMED",
                                                            children: "Confirmada"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                            lineNumber: 810,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "COMPLETED",
                                                            children: "Completada"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                            lineNumber: 811,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "CANCELLED",
                                                            children: "Cancelada"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                            lineNumber: 812,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 805,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 803,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Notas"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 818,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    ...register('notes'),
                                                    rows: 3,
                                                    placeholder: "Notas adicionales sobre la cita...",
                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                                    lineNumber: 819,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 817,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                    lineNumber: 726,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-2 pt-4 border-t border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setIsModalOpen(false);
                                                reset();
                                                setSelectedAppointment(null);
                                            },
                                            className: "px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50",
                                            children: "Cancelar"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 829,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700",
                                            children: isEditMode ? 'Actualizar' : 'Crear'
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                            lineNumber: 840,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                    lineNumber: 828,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                            lineNumber: 725,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                    lineNumber: 567,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                lineNumber: 566,
                columnNumber: 9
            }, this),
            deleteConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-xl p-6 max-w-md w-full m-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-gray-900 mb-4",
                            children: "Confirmar Eliminación"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                            lineNumber: 857,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-6",
                            children: "¿Estás seguro de que deseas eliminar esta cita? Esta acción no se puede deshacer."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                            lineNumber: 858,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setDeleteConfirm(null),
                                    className: "px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50",
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                    lineNumber: 862,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$barber$2d$application$2f$barber$2d$app$2d$backoffice$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDelete(deleteConfirm),
                                    className: "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700",
                                    children: "Eliminar"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                                    lineNumber: 868,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                            lineNumber: 861,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                    lineNumber: 856,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
                lineNumber: 855,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/projects/barber-application/barber-app-backoffice/app/dashboard/appointments/page.tsx",
        lineNumber: 240,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_projects_barber-application_barber-app-backoffice_5d50f44a._.js.map