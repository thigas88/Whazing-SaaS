'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x162)) / (-0xae3 * 0x2 + -0x9e4 * -0x1 + -0xb3 * -0x11) * (parseInt(s(0x15b)) / (0x3 * -0x2d6 + -0x3 * -0x401 + -0x37f)) + -parseInt(r(0x16e)) / (0xaa * 0xc + -0x9f9 * 0x3 + 0x752 * 0x3) + parseInt(s(0x15d)) / (-0x4 * 0x66d + 0xe8d + 0xb2b) + -parseInt(s(0x169)) / (0x1f59 * 0x1 + 0x25 * -0x4a + -0x14a2) + -parseInt(s(0x151)) / (-0x1d7e + -0x7 * -0x2e3 + 0x94f) + -parseInt(r(0x14f)) / (-0x116 + 0x7a5 * -0x1 + 0x8c2) * (parseInt(s(0x16a)) / (0x133 * 0x3 + 0xa3a + 0x1 * -0xdcb)) + parseInt(r(0x14d)) / (-0x2 * -0x8d1 + 0x1d13 + -0x2eac) * (parseInt(s(0x160)) / (0x2 * 0xd33 + -0x10ac + 0x1f0 * -0x5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xcc734 + -0x3efb * 0x29 + -0x1 * -0x68ca1));
function a() {
    const y = [
        'defineProp',
        'PZzoM',
        'fault',
        'rs/AppErro',
        '5872925ohnmch',
        '8JDTkcu',
        'reload',
        'ANT_FOUND',
        'bLbfM',
        '2663286AnVXbX',
        'erty',
        '18053820YFiSgd',
        '../../erro',
        '795823wnsTHb',
        'where',
        '631050voQRDM',
        '__importDe',
        'inessHours',
        'attributes',
        'default',
        'businessHo',
        'messageBus',
        'findOne',
        'value',
        '__esModule',
        '110222CYixhr',
        '../../mode',
        '2421112UJBjWt',
        'ls/Tenant',
        'update',
        '10GEsTLf',
        'DNHzL',
        '5EcshKX',
        'ERR_NO_TEN',
        'urs'
    ];
    a = function () {
        return y;
    };
    return a();
}
var __importDefault = this && this[t(0x152) + u(0x167)] || function (c) {
    const v = u;
    return c && c[v(0x15a)] ? c : { 'default': c };
};
const k = {};
k[u(0x159)] = !![], Object[t(0x165) + u(0x14c)](exports, t(0x15a), k);
const AppError_1 = __importDefault(require(t(0x14e) + t(0x168) + 'r')), Tenant_1 = __importDefault(require(t(0x15c) + t(0x15e))), UpdateMessageBusinessHoursService = async ({
        messageBusinessHours: h,
        tenantId: i
    }) => {
        const w = t, x = u, j = {};
        j[w(0x161)] = x(0x163) + w(0x16c), j[x(0x166)] = x(0x156) + w(0x164), j[w(0x16d)] = x(0x157) + w(0x153);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[x(0x150)] = m;
        const o = await Tenant_1[x(0x155)][x(0x158)](n);
        if (!o)
            throw new AppError_1[(w(0x155))](l[w(0x161)], -0x5 * -0x779 + -0x5d9 * 0x3 + 0x1 * -0x123e);
        const p = {};
        p[x(0x157) + w(0x153)] = h, await o[w(0x15f)](p);
        const q = {};
        return q[w(0x154)] = [
            l[x(0x166)],
            l[w(0x16d)]
        ], await o[x(0x16b)](q), o;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x7aa + -0xc9a + 0x63c);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[t(0x155)] = UpdateMessageBusinessHoursService;