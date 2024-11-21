'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x1ad)) / (0xc5 * -0x5 + 0x398 + 0x42 * 0x1) + parseInt(r(0x1af)) / (-0x13f5 + -0x1257 + -0x1 * -0x264e) * (-parseInt(s(0x1bd)) / (-0x2 * -0xef + 0xa * -0x127 + 0x9ab)) + parseInt(s(0x1b8)) / (0x10b1 + -0x2637 + -0x397 * -0x6) * (-parseInt(s(0x1b7)) / (0x226 + 0x3 * 0x397 + -0xce6)) + -parseInt(s(0x1aa)) / (0x97 * -0x1 + 0x207 + 0x2 * -0xb5) + parseInt(s(0x1c6)) / (-0x5d + -0x1 * 0x139d + 0x1401) + parseInt(s(0x1bb)) / (0x1905 * -0x1 + -0x4e4 + -0xdb * -0x23) * (-parseInt(r(0x1ba)) / (0x185f + -0x5 * 0x6c3 + 0x1e5 * 0x5)) + parseInt(r(0x1bc)) / (0x1d95 + -0x1d21 * -0x1 + -0x3aac);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x86 * 0x12a7 + 0x11bbe + 0x6fece * 0x2));
var __importDefault = this && this[t(0x1ac) + t(0x1b9)] || function (c) {
    const v = u;
    return c && c[v(0x1b4)] ? c : { 'default': c };
};
function a() {
    const y = [
        '226100rPhhQK',
        'erty',
        'GoOox',
        'messageBus',
        'urs',
        '../../erro',
        'CAZwU',
        '202014eKYZUO',
        'mWNbJ',
        '__importDe',
        '292349TxLnBI',
        'defineProp',
        '71548OnrMRc',
        'inessHours',
        '../../mode',
        'ls/Tenant',
        'businessHo',
        '__esModule',
        'rs/AppErro',
        'ERR_NO_TEN',
        '77635YkoIKk',
        '12sgkgru',
        'fault',
        '3249kPDrBK',
        '11912qBDbBp',
        '12990560MjInAO',
        '6HMuitt',
        'findOne',
        'value',
        'update',
        'ANT_FOUND',
        'reload',
        'attributes',
        'default',
        'where'
    ];
    a = function () {
        return y;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1756 + -0x1 * -0x14b0 + 0x44d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[t(0x1bf)] = !![], Object[u(0x1ae) + u(0x1c7)](exports, u(0x1b4), k);
const AppError_1 = __importDefault(require(t(0x1a8) + u(0x1b5) + 'r')), Tenant_1 = __importDefault(require(u(0x1b1) + t(0x1b2))), UpdateMessageBusinessHoursService = async ({
        messageBusinessHours: h,
        tenantId: i
    }) => {
        const w = u, x = t, j = {};
        j[w(0x1a9)] = x(0x1b6) + x(0x1c1), j[w(0x1c8)] = x(0x1b3) + x(0x1a7), j[w(0x1ab)] = w(0x1c9) + w(0x1b0);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[w(0x1c5)] = m;
        const o = await Tenant_1[x(0x1c4)][w(0x1be)](n);
        if (!o)
            throw new AppError_1[(w(0x1c4))](l[x(0x1a9)], 0x15b1 * -0x1 + -0x3 * 0x8a1 + -0x3128 * -0x1);
        const p = {};
        p[w(0x1c9) + x(0x1b0)] = h, await o[x(0x1c0)](p);
        const q = {};
        return q[w(0x1c3)] = [
            l[x(0x1c8)],
            l[w(0x1ab)]
        ], await o[w(0x1c2)](q), o;
    };
exports[t(0x1c4)] = UpdateMessageBusinessHoursService;