'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x146)) / (-0xc5 * -0x1e + -0xdaa + -0x96b) + -parseInt(r(0x13f)) / (0x21e1 + -0x1616 + 0xbc9 * -0x1) + parseInt(s(0x14c)) / (-0xfb + 0x1 * 0x18b2 + -0x4 * 0x5ed) * (-parseInt(r(0x13e)) / (-0x1f54 + -0x4 * -0x716 + -0xc0 * -0x4)) + parseInt(r(0x12f)) / (-0x1 * -0x2cf + -0x1d * 0xa9 + 0x1 * 0x105b) + -parseInt(r(0x13a)) / (0x79c + 0x12 * 0x106 + -0x1 * 0x1a02) + -parseInt(s(0x143)) / (0x1b * 0x47 + 0x60b * 0x3 + 0x1 * -0x1997) * (-parseInt(r(0x139)) / (-0x472 + -0x168a + 0xd * 0x214)) + -parseInt(s(0x140)) / (0x6ee * -0x3 + -0x1fa5 + 0x3478) * (-parseInt(r(0x132)) / (-0x61 * -0x19 + 0x6b0 + -0x101f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x12d7b + -0x11d91f + 0x1ca801));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1f * -0xd0 + 0x1f0b + -0x4b0);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[t(0x142) + u(0x13c)] || function (c) {
    const v = u;
    return c && c[v(0x12e)] ? c : { 'default': c };
};
const k = {};
k[u(0x133)] = !![], Object[u(0x12c) + t(0x12d)](exports, t(0x12e), k);
const AppError_1 = __importDefault(require(t(0x134) + u(0x14d) + 'r')), Tenant_1 = __importDefault(require(u(0x13b) + t(0x144))), UpdateBusinessHoursService = async ({
        businessHours: h,
        tenantId: i
    }) => {
        const w = t, x = u, j = {};
        j[w(0x138)] = x(0x145) + x(0x136), j[x(0x13d)] = x(0x130) + x(0x137), j[x(0x14a)] = x(0x147) + x(0x141);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[w(0x149)] = m;
        const o = await Tenant_1[w(0x135)][x(0x14b)](n);
        if (!o)
            throw new AppError_1[(x(0x135))](l[x(0x138)], -0x1c51 * 0x1 + 0xf22 + 0x1 * 0xec3);
        const p = {};
        p[w(0x130) + x(0x137)] = h, await o[w(0x12b)](p);
        const q = {};
        return q[w(0x148)] = [
            l[x(0x13d)],
            l[w(0x14a)]
        ], await o[w(0x131)](q), o;
    };
exports[u(0x135)] = UpdateBusinessHoursService;
function a() {
    const y = [
        '8091013RwMttH',
        'ls/Tenant',
        'ERR_NO_TEN',
        '921675iMLOLM',
        'messageBus',
        'attributes',
        'where',
        'jDnDz',
        'findOne',
        '1068051tMRukw',
        'rs/AppErro',
        'update',
        'defineProp',
        'erty',
        '__esModule',
        '629525AxjKZO',
        'businessHo',
        'reload',
        '128930ZTCtak',
        'value',
        '../../erro',
        'default',
        'ANT_FOUND',
        'urs',
        'CiDFa',
        '8xMFaIq',
        '2087778BQwfeQ',
        '../../mode',
        'fault',
        'oHfoM',
        '4zBGsiZ',
        '2200780eoremd',
        '162Ivadza',
        'inessHours',
        '__importDe'
    ];
    a = function () {
        return y;
    };
    return a();
}