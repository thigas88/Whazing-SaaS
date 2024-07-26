'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x13d)) / (0xa1a + -0x5f7 * 0x2 + 0x1d5) * (parseInt(r(0x159)) / (0xf67 * 0x1 + 0xfd * 0xe + -0x7 * 0x42d)) + -parseInt(s(0x15a)) / (-0x1 * 0xe8f + 0x1c7e + -0xdec * 0x1) + -parseInt(s(0x141)) / (0x10ed * 0x1 + 0x7e1 + -0x18ca) * (parseInt(s(0x13e)) / (0x1 * 0x2171 + -0x9fe * -0x2 + -0xd5a * 0x4)) + parseInt(s(0x146)) / (-0xbaf + 0x238 * -0x2 + 0x1 * 0x1025) * (-parseInt(r(0x154)) / (0x9 * -0x426 + 0xb0d + 0x694 * 0x4)) + parseInt(s(0x14b)) / (-0x1 * 0x192e + -0x1 * 0xc68 + 0x2 * 0x12cf) + parseInt(r(0x153)) / (0x1840 + -0xc44 + 0xbf3 * -0x1) + parseInt(r(0x14c)) / (0x600 * 0x1 + -0xa03 + -0x11 * -0x3d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x3d192 + -0xc072e + -0x964 * -0x18b));
var __importDefault = this && this[t(0x151) + t(0x156)] || function (c) {
    const v = t;
    return c && c[v(0x147)] ? c : { 'default': c };
};
const k = {};
k[u(0x157)] = !![], Object[u(0x14e) + t(0x150)](exports, u(0x147), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xa17 + 0x12e3 + 0x66 * -0x13);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(u(0x152) + t(0x155) + 'r')), Tenant_1 = __importDefault(require(t(0x140) + u(0x143))), UpdateMessageBusinessHoursService = async ({
        messageBusinessHours: h,
        tenantId: i
    }) => {
        const w = u, x = u, j = {};
        j[w(0x142)] = w(0x13a) + x(0x158), j[w(0x13f)] = x(0x14d) + x(0x149), j[w(0x15b)] = x(0x148) + x(0x13c);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[w(0x145)] = m;
        const o = await Tenant_1[w(0x15c)][x(0x144)](n);
        if (!o)
            throw new AppError_1[(w(0x15c))](l[w(0x142)], -0xf82 + 0x1e3e + -0xd28);
        const p = {};
        p[x(0x148) + w(0x13c)] = h, await o[w(0x14a)](p);
        const q = {};
        return q[w(0x14f)] = [
            l[x(0x13f)],
            l[x(0x15b)]
        ], await o[x(0x13b)](q), o;
    };
exports[t(0x15c)] = UpdateMessageBusinessHoursService;
function a() {
    const y = [
        'erty',
        '__importDe',
        '../../erro',
        '4943889TvHIvX',
        '3927XUcDGh',
        'rs/AppErro',
        'fault',
        'value',
        'ANT_FOUND',
        '1334926mCthvZ',
        '15525Rqevch',
        'XlIna',
        'default',
        'ERR_NO_TEN',
        'reload',
        'inessHours',
        '1CrJUwP',
        '11490mqzliN',
        'nkhAX',
        '../../mode',
        '1224pDDfGG',
        'hbhyx',
        'ls/Tenant',
        'findOne',
        'where',
        '5760UIVdeh',
        '__esModule',
        'messageBus',
        'urs',
        'update',
        '5422720LESsnc',
        '10987930pNUCSM',
        'businessHo',
        'defineProp',
        'attributes'
    ];
    a = function () {
        return y;
    };
    return a();
}