'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0xfe)) / (0x1c7b * -0x1 + 0x21c1 + -0x47 * 0x13) + parseInt(s(0xee)) / (-0x28 * 0xba + 0x1c34 * 0x1 + -0x25 * -0x6) + parseInt(s(0xe4)) / (-0x1ca * -0x11 + -0xa3 + -0x1dc4) + parseInt(t(0xea)) / (0x2076 + 0x2b * 0x5d + 0x99d * -0x5) * (-parseInt(s(0xeb)) / (0x21ea + 0x16ef + -0x38d4 * 0x1)) + parseInt(t(0xdf)) / (0x7ee + -0x1abf * -0x1 + -0x22a7) + parseInt(s(0xde)) / (-0xb1 * 0x2b + -0x2 * -0x331 + 0x1760) + parseInt(t(0xef)) / (-0x1261 + -0x6 * -0x17e + 0x975 * 0x1) * (-parseInt(s(0xf8)) / (0x1 * 0x9ef + 0xc81 + -0x1667));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x89f57 + 0xdd6e0 + 0x286ad));
var __importDefault = this && this[u(0xf1) + u(0xdb)] || function (c) {
    const w = v;
    return c && c[w(0xf9)] ? c : { 'default': c };
};
const k = {};
k[v(0xe3)] = !![], Object[u(0x101) + v(0xec)](exports, u(0xf9), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x63 * 0x52 + -0x11f * -0x2 + 0x1e53);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const z = [
        'expiresIn',
        'defineProp',
        'update',
        'fault',
        'findByPk',
        'sign',
        '4677757RVQWor',
        '434466pmRwkQ',
        'reload',
        'default',
        'fmFjo',
        'value',
        '2687883ozSUed',
        'ig/auth',
        'NFIG_NOT_F',
        'BLpFT',
        'jsonwebtok',
        '../../conf',
        '4OLuzbh',
        '4462720modiMT',
        'erty',
        'rs/AppErro',
        '1379868rczAaV',
        '2809672DmbxqS',
        'OUND',
        '__importDe',
        '../../erro',
        'profile',
        'token',
        'sessionId',
        'YisVB',
        'ls/ApiConf',
        '36ZVaIYP',
        '__esModule',
        'ERR_API_CO',
        'admin',
        '730d',
        'tenantId',
        '478269stnOWZ',
        '../../mode'
    ];
    a = function () {
        return z;
    };
    return a();
}
const jsonwebtoken_1 = require(u(0xe8) + 'en'), ApiConfig_1 = __importDefault(require(u(0xff) + v(0xf7) + 'ig')), auth_1 = __importDefault(require(v(0xe9) + v(0xe5))), AppError_1 = __importDefault(require(u(0xf2) + v(0xed) + 'r')), RenewApiConfigTokenService = async ({
        apiId: g,
        sessionId: h,
        tenantId: i
    }) => {
        const x = v, y = v, j = {};
        j[x(0xf6)] = x(0xfa) + y(0xe6) + x(0xf0), j[x(0xe7)] = y(0xfb), j[y(0xe2)] = x(0xfc);
        const l = j, {secret: m} = auth_1[y(0xe1)], n = await ApiConfig_1[x(0xe1)][x(0xdc)](g);
        if (!n)
            throw new AppError_1[(x(0xe1))](l[x(0xf6)], -0x1 * -0x122b + 0x1 * 0x1ddb + -0x4a5 * 0xa);
        const o = {};
        o[x(0xfd)] = i, o[y(0xf3)] = l[x(0xe7)], o[y(0xf5)] = h;
        const p = {};
        p[y(0x100)] = l[x(0xe2)];
        const q = (0x12f2 + -0xe * 0x36 + 0x17 * -0xb2, jsonwebtoken_1[x(0xdd)])(o, m, p), r = {};
        return r[x(0xf4)] = q, n[y(0x102)](r), n[y(0xe0)](), n;
    };
exports[v(0xe1)] = RenewApiConfigTokenService;