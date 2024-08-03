'use strict';
function a() {
    const u = [
        '28iDOiIb',
        '1849032ahGuqN',
        '../../mode',
        'default',
        '3083948NiIJIc',
        '5668YRdFyh',
        'OUND',
        '2251328QiWWJI',
        'erty',
        'defineProp',
        'NFIG_NOT_F',
        'destroy',
        '7454565ikxhPJ',
        'rs/AppErro',
        'findOne',
        'ERR_API_CO',
        '../../erro',
        'tenantId',
        '2957235kTLssw',
        '__importDe',
        'mGHnt',
        '4206lcNpta',
        'where',
        'ls/ApiConf',
        '1112Geoule',
        'value',
        'fault',
        '__esModule'
    ];
    a = function () {
        return u;
    };
    return a();
}
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x111)) / (0xfb2 + 0x67d + -0x22 * 0xa7) * (-parseInt(o(0x116)) / (-0xa49 * 0x1 + 0x1755 + 0x1 * -0xd0a)) + -parseInt(o(0x126)) / (-0xea4 * -0x1 + 0x1d67 * -0x1 + -0x1f * -0x7a) * (-parseInt(n(0x129)) / (-0xc31 * -0x2 + 0x1d0a + -0x6ad * 0x8)) + parseInt(o(0x123)) / (0x11f * 0x7 + 0x811 + -0xfe5) + parseInt(n(0x112)) / (0xf04 + -0x2697 + 0x1799) + -parseInt(o(0x115)) / (0x120f + 0xfeb + -0x1 * 0x21f3) + parseInt(n(0x118)) / (-0x529 + -0x21a8 + 0x26d9) + -parseInt(o(0x11d)) / (-0xdcd * 0x1 + -0x3d * 0x73 + 0x293d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x613 * 0x4 + -0x1 * -0x7a3b7 + 0x1 * -0x1b9fd));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x27 * -0x4d + 0x14ff + -0x834);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[p(0x124) + q(0x12b)] || function (c) {
    const r = q;
    return c && c[r(0x110)] ? c : { 'default': c };
};
const k = {};
k[p(0x12a)] = !![], Object[p(0x11a) + p(0x119)](exports, p(0x110), k);
const AppError_1 = __importDefault(require(p(0x121) + p(0x11e) + 'r')), ApiConfig_1 = __importDefault(require(p(0x113) + q(0x128) + 'ig')), DeleteApiConfigService = async ({
        apiId: f,
        tenantId: g
    }) => {
        const s = q, t = q, h = {};
        h[s(0x125)] = s(0x120) + s(0x11b) + s(0x117);
        const i = h, j = {};
        j['id'] = f, j[s(0x122)] = g;
        const l = {};
        l[s(0x127)] = j;
        const m = await ApiConfig_1[s(0x114)][s(0x11f)](l);
        if (!m)
            throw new AppError_1[(s(0x114))](i[t(0x125)], -0x12 * 0xe0 + 0x25db + 0x41b * -0x5);
        await m[s(0x11c)]();
    };
exports[q(0x114)] = DeleteApiConfigService;