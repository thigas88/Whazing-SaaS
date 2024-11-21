'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xc9)) / (0x22ce + -0x945 + -0x1988 * 0x1) * (parseInt(r(0xe7)) / (0x1 * 0xaac + -0x3 * 0x4ff + 0x453)) + parseInt(s(0xe6)) / (0x2 * -0xe39 + 0x13dd + 0x1b8 * 0x5) * (-parseInt(s(0xcf)) / (0x1902 + 0x1330 + -0x2c2e)) + parseInt(r(0xd0)) / (-0x3 * -0x5f6 + -0x13 * 0xfd + 0x1 * 0xea) * (parseInt(s(0xd9)) / (0x1872 + 0xef + -0x195b)) + parseInt(s(0xcd)) / (0x1eca + 0x1433 * 0x1 + -0x1 * 0x32f6) * (parseInt(s(0xc8)) / (-0x5de * -0x3 + -0x2 * -0x97e + 0x1 * -0x248e)) + -parseInt(s(0xca)) / (0xfda + 0x2ca * 0xa + -0x2bb5) + parseInt(r(0xe3)) / (0x1d45 * 0x1 + -0x145 * -0x17 + 0x6 * -0x9bd) * (parseInt(r(0xd5)) / (-0x2dd * -0x2 + -0x93 * 0x1d + 0x24 * 0x4e)) + parseInt(r(0xdb)) / (0x11ee + 0x3 * 0x113 + 0x1 * -0x151b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5 * 0x3b152 + -0x2 * 0x6c22 + -0x1 * 0x638fe));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xf87 + -0xf23 + -0x1f71 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[t(0xd7) + u(0xdd)] || function (c) {
    const v = u;
    return c && c[v(0xcc)] ? c : { 'default': c };
};
const k = {};
function a() {
    const y = [
        'rs/AppErro',
        'reload',
        'ANT_FOUND',
        'attributes',
        'erty',
        '7956072rpVevb',
        '249355lmPfvX',
        '6702921gwUkGl',
        'update',
        '__esModule',
        '7klEagz',
        'businessHo',
        '23564ygeIco',
        '10190EMqoxb',
        'value',
        'defineProp',
        'default',
        '../../erro',
        '3201935rwFPHl',
        'urs',
        '__importDe',
        'ls/Tenant',
        '1182OASyxK',
        'nJBIE',
        '2944416rhgMKT',
        'SMtFf',
        'fault',
        'messageBus',
        'where',
        'ERR_NO_TEN',
        '../../mode',
        'tonPI',
        '30NQRTKE',
        'inessHours',
        'findOne',
        '267toPhpk',
        '4rLyVOA'
    ];
    a = function () {
        return y;
    };
    return a();
}
k[u(0xd1)] = !![], Object[u(0xd2) + u(0xc7)](exports, t(0xcc), k);
const AppError_1 = __importDefault(require(u(0xd4) + u(0xe8) + 'r')), Tenant_1 = __importDefault(require(u(0xe1) + u(0xd8))), UpdateBusinessHoursService = async ({
        businessHours: h,
        tenantId: i
    }) => {
        const w = t, x = t, j = {};
        j[w(0xdc)] = x(0xe0) + x(0xea), j[x(0xe2)] = x(0xce) + w(0xd6), j[w(0xda)] = w(0xde) + x(0xe4);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[w(0xdf)] = m;
        const o = await Tenant_1[w(0xd3)][w(0xe5)](n);
        if (!o)
            throw new AppError_1[(w(0xd3))](l[w(0xdc)], -0x17f1 + -0x269 + 0x1bee);
        const p = {};
        p[w(0xce) + w(0xd6)] = h, await o[x(0xcb)](p);
        const q = {};
        return q[x(0xeb)] = [
            l[w(0xe2)],
            l[x(0xda)]
        ], await o[w(0xe9)](q), o;
    };
exports[t(0xd3)] = UpdateBusinessHoursService;