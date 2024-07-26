'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0xed)) / (-0x1e27 + -0x1961 + 0x3789) * (-parseInt(r(0x100)) / (0x3 * -0xad3 + 0x745 * 0x3 + -0x2 * -0x556)) + parseInt(s(0x10a)) / (0x1bac + -0x1d5c + 0x1b3) + parseInt(r(0x10b)) / (-0x1 * -0x2216 + 0x2305 + -0x4517) * (-parseInt(r(0xef)) / (0x10d7 + 0xd9d + -0x1e6f)) + -parseInt(r(0x10f)) / (0x1dca + 0x4 * 0x5cf + 0xd4 * -0x40) + parseInt(r(0x104)) / (-0x10b8 + -0x1 * -0x7bf + 0x480 * 0x2) * (parseInt(s(0x107)) / (0x7 * 0x103 + -0xc4 * 0x2c + -0x1aa3 * -0x1)) + parseInt(s(0x10c)) / (-0x1c0c * -0x1 + 0x249e + -0x40a1) + -parseInt(s(0xf8)) / (-0x4f8 * 0x4 + 0x1 * 0x1fca + -0xbe0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x22c05 * 0x1 + 0x6e2 + -0x2 * -0xfae));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1fc7 * 0x1 + 0x1824 + 0x890);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[t(0xf6) + t(0xf9)] || function (c) {
    const v = t;
    return c && c[v(0xf3)] ? c : { 'default': c };
};
const k = {};
k[u(0x102)] = !![], Object[t(0x109) + t(0xfc)](exports, t(0xf3), k);
const AppError_1 = __importDefault(require(u(0x108) + u(0xfe) + 'r')), Tenant_1 = __importDefault(require(u(0xf0) + t(0x105))), UpdateBusinessHoursService = async ({
        businessHours: h,
        tenantId: i
    }) => {
        const w = t, x = u, j = {};
        j[w(0xee)] = w(0x10e) + w(0xf5), j[w(0xff)] = x(0xf2) + w(0x101), j[x(0x10d)] = w(0xfb) + w(0xfa);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[w(0xfd)] = m;
        const o = await Tenant_1[x(0x103)][x(0xf7)](n);
        if (!o)
            throw new AppError_1[(w(0x103))](l[w(0xee)], -0x4c7 * -0x4 + -0x2b * 0x1e + -0xc7e);
        const p = {};
        p[w(0xf2) + w(0x101)] = h, await o[w(0x106)](p);
        const q = {};
        return q[w(0xf1)] = [
            l[x(0xff)],
            l[w(0x10d)]
        ], await o[x(0xf4)](q), o;
    };
function a() {
    const y = [
        'ls/Tenant',
        'update',
        '68128fZbCWv',
        '../../erro',
        'defineProp',
        '783708JxpjXL',
        '1123540CiNHXa',
        '2590641ZFPyfr',
        'gTWMb',
        'ERR_NO_TEN',
        '752124GyFLxA',
        '53055XraxRU',
        'PBfIa',
        '5yDyeFg',
        '../../mode',
        'attributes',
        'businessHo',
        '__esModule',
        'reload',
        'ANT_FOUND',
        '__importDe',
        'findOne',
        '313360fWLoUK',
        'fault',
        'inessHours',
        'messageBus',
        'erty',
        'where',
        'rs/AppErro',
        'arsJc',
        '2oOfORw',
        'urs',
        'value',
        'default',
        '77UBIhxz'
    ];
    a = function () {
        return y;
    };
    return a();
}
exports[t(0x103)] = UpdateBusinessHoursService;