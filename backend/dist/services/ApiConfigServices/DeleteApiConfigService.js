'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x157)) / (0x1f * -0x3b + -0xb06 * 0x1 + 0x122c) * (-parseInt(o(0x162)) / (-0x382 + -0x1f73 + -0x22f7 * -0x1)) + -parseInt(o(0x15e)) / (-0x1 * 0xffb + -0x1810 + -0x1407 * -0x2) + -parseInt(o(0x168)) / (-0x2548 + -0x1d59 + -0x60f * -0xb) + -parseInt(n(0x163)) / (0x1528 + -0xb * 0x1 + -0xf * 0x168) * (-parseInt(o(0x159)) / (-0x463 * 0x6 + -0x222a + 0x3c82)) + parseInt(n(0x15b)) / (-0x1b3e + 0x25e * -0x1 + 0x1da3) + parseInt(n(0x15d)) / (0x775 + 0x37 * 0x43 + -0x26 * 0x93) * (-parseInt(o(0x174)) / (0x1d18 + -0x19a9 + -0x366)) + -parseInt(o(0x16f)) / (-0x363 * -0xb + -0x133d + -0x11fa) * (-parseInt(n(0x158)) / (0x6c2 + -0xf11 + 0x85a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x62730 + 0x43376 + 0x2a2f8));
var __importDefault = this && this[p(0x167) + q(0x16d)] || function (c) {
    const r = p;
    return c && c[r(0x164)] ? c : { 'default': c };
};
function a() {
    const u = [
        'ERR_API_CO',
        'findOne',
        '__importDe',
        '2526996tpmcao',
        'NFIG_NOT_F',
        'ls/ApiConf',
        'erty',
        'where',
        'fault',
        'OUND',
        '18570630qNiSaJ',
        'tenantId',
        'TzIpa',
        'defineProp',
        'value',
        '13866921vIqXqp',
        '3256bQiaii',
        '11IXNiFl',
        '6Orrvkf',
        'default',
        '11337984zEQxPq',
        '../../erro',
        '8NGUZNw',
        '1945314kBexyM',
        'destroy',
        'rs/AppErro',
        '../../mode',
        '290yLIwYG',
        '3338295mzFrtS',
        '__esModule'
    ];
    a = function () {
        return u;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x86a * -0x4 + -0xff6 + 0x32f5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[p(0x173)] = !![], Object[p(0x172) + p(0x16b)](exports, q(0x164), k);
const AppError_1 = __importDefault(require(p(0x15c) + p(0x160) + 'r')), ApiConfig_1 = __importDefault(require(p(0x161) + p(0x16a) + 'ig')), DeleteApiConfigService = async ({
        apiId: f,
        tenantId: g
    }) => {
        const s = q, t = p, h = {};
        h[s(0x171)] = s(0x165) + t(0x169) + t(0x16e);
        const i = h, j = {};
        j['id'] = f, j[t(0x170)] = g;
        const l = {};
        l[t(0x16c)] = j;
        const m = await ApiConfig_1[t(0x15a)][t(0x166)](l);
        if (!m)
            throw new AppError_1[(s(0x15a))](i[s(0x171)], -0x162b + -0x10b4 + 0x1 * 0x2873);
        await m[s(0x15f)]();
    };
exports[p(0x15a)] = DeleteApiConfigService;