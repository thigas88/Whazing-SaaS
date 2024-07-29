'use strict';
const u = b, v = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xfc3 + 0x192f + -0x8b9);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0xc8)) / (0x29a + -0x3 * 0x745 + 0x1336) + -parseInt(t(0xc7)) / (0x6 * 0x657 + 0x200f + -0x1 * 0x4617) * (parseInt(s(0xd4)) / (-0x1 * 0x8b5 + 0x1 * -0xd11 + 0x15c9)) + -parseInt(t(0xb7)) / (-0x14f + -0x15a3 * 0x1 + 0x16f6) + parseInt(s(0xdc)) / (-0x2342 + 0xbd6 + 0x1771) + parseInt(t(0xc5)) / (-0x1c * -0xf7 + 0x35 * 0x51 + -0x11 * 0x293) * (-parseInt(s(0xc9)) / (0x1 * 0x894 + 0x586 * 0x1 + -0xe13)) + -parseInt(s(0xdb)) / (0x255e + -0x489 + -0x20cd) * (-parseInt(t(0xca)) / (0x1 * -0x206f + 0x1 * -0xde7 + -0x1 * -0x2e5f)) + parseInt(t(0xd2)) / (-0xc1f * -0x3 + -0x25ec + 0x199) * (parseInt(s(0xcf)) / (0x1bc9 * 0x1 + 0x4a3 * 0x1 + 0x1b * -0x133));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd795d + -0x9881 * 0x5 + -0x13 * -0x3f6b));
var __importDefault = this && this[u(0xd7) + v(0xbf)] || function (c) {
    const w = v;
    return c && c[w(0xd9)] ? c : { 'default': c };
};
const k = {};
k[v(0xd8)] = !![], Object[v(0xd1) + u(0xb5)](exports, u(0xd9), k);
function a() {
    const z = [
        '828008EUUgPx',
        '553yNMZuz',
        '9oAwaEJ',
        'ls/ApiConf',
        'ig/auth',
        'reload',
        'token',
        '41788571rCGBPE',
        'update',
        'defineProp',
        '10YFxeui',
        'sign',
        '1728102VqqlNb',
        'NFIG_NOT_F',
        '730d',
        '__importDe',
        'value',
        '__esModule',
        'HlkQL',
        '1848768lQGfTT',
        '9808645lLAfMR',
        'jsonwebtok',
        '../../conf',
        'erty',
        'default',
        '7703560TDdJlZ',
        'ERR_API_CO',
        'NBexK',
        'sessionId',
        'findByPk',
        'rs/AppErro',
        '../../mode',
        'tenantId',
        'fault',
        'expiresIn',
        'bynJO',
        'profile',
        'admin',
        'OUND',
        '126498nlHmOY',
        '../../erro',
        '2iYiKYT'
    ];
    a = function () {
        return z;
    };
    return a();
}
const jsonwebtoken_1 = require(v(0xb3) + 'en'), ApiConfig_1 = __importDefault(require(u(0xbd) + u(0xcb) + 'ig')), auth_1 = __importDefault(require(v(0xb4) + u(0xcc))), AppError_1 = __importDefault(require(u(0xc6) + u(0xbc) + 'r')), RenewApiConfigTokenService = async ({
        apiId: g,
        sessionId: h,
        tenantId: i
    }) => {
        const x = u, y = v, j = {};
        j[x(0xc1)] = x(0xb8) + y(0xd5) + y(0xc4), j[x(0xb9)] = y(0xc3), j[x(0xda)] = x(0xd6);
        const l = j, {secret: m} = auth_1[y(0xb6)], n = await ApiConfig_1[y(0xb6)][x(0xbb)](g);
        if (!n)
            throw new AppError_1[(y(0xb6))](l[x(0xc1)], -0x1f06 + 0x14d6 + 0xbc4);
        const o = {};
        o[x(0xbe)] = i, o[x(0xc2)] = l[x(0xb9)], o[x(0xba)] = h;
        const p = {};
        p[y(0xc0)] = l[y(0xda)];
        const q = (-0x1 * 0x3af + 0x2546 + -0x2197 * 0x1, jsonwebtoken_1[y(0xd3)])(o, m, p), r = {};
        return r[x(0xce)] = q, n[y(0xd0)](r), n[x(0xcd)](), n;
    };
exports[v(0xb6)] = RenewApiConfigTokenService;