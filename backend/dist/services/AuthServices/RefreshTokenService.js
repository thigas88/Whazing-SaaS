'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x1ca)) / (0x2 * -0x537 + 0x1 * -0x16a9 + 0x1 * 0x2118) + -parseInt(s(0x1bf)) / (-0x47 * -0x18 + -0x33f * 0x5 + 0x995) * (-parseInt(r(0x1d8)) / (-0x4a2 * -0x1 + 0x156b * -0x1 + 0x10cc)) + -parseInt(s(0x1c4)) / (0x115f + 0xa56 + 0x1 * -0x1bb1) * (parseInt(s(0x1b9)) / (0x102 * -0x6 + -0xc * -0x327 + -0x2f * 0xad)) + parseInt(s(0x1c7)) / (0x178a + -0x1 * -0x1bac + 0x9 * -0x5b0) * (-parseInt(r(0x1cd)) / (0x15fb + -0xbd9 + 0xc7 * -0xd)) + -parseInt(r(0x1bb)) / (-0x5 * 0x565 + 0x2001 + -0x500) + -parseInt(s(0x1bc)) / (-0x11b3 + 0xf3 * -0x11 + 0x21df) + parseInt(r(0x1b3)) / (-0x2 * 0x8ad + -0x23 * -0xdc + -0xcb0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1ec02 + -0x527 * -0x17e + -0x14c51));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1070 + 0x1d0b + -0x2bcc);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[t(0x1bd) + t(0x1b5)] || function (c) {
    const v = t;
    return c && c[v(0x1b0)] ? c : { 'default': c };
};
const k = {};
k[u(0x1d6)] = !![], Object[u(0x1c6) + t(0x1b8)](exports, t(0x1b0), k), exports[t(0x1d9) + u(0x1da)] = void (0x13dd + 0x331 * -0x3 + 0x36e * -0x3);
const jsonwebtoken_1 = require(u(0x1c1) + 'en'), AppError_1 = __importDefault(require(t(0x1b1) + t(0x1c0) + 'r')), ShowUserService_1 = __importDefault(require(u(0x1d1) + t(0x1cc) + t(0x1be) + 'e')), auth_1 = __importDefault(require(u(0x1b6) + u(0x1c2))), CreateTokens_1 = require(u(0x1b4) + t(0x1ba) + u(0x1d4)), RefreshTokenService = async e => {
        const w = u, x = u, f = {};
        f[w(0x1d0)] = x(0x1c5) + w(0x1d7), f[x(0x1d3)] = function (p, q) {
            return p !== q;
        };
        const g = f;
        let h;
        try {
            h = (0x1 * 0x18a7 + -0x6f2 + -0x1 * 0x11b5, jsonwebtoken_1[w(0x1c3)])(e, auth_1[x(0x1c8)][w(0x1ce) + w(0x1d2)]);
        } catch (p) {
            throw new AppError_1[(x(0x1c8))](g[w(0x1d0)], -0x59 * 0x6a + 0x3 * -0x685 + 0x39fa);
        }
        const {
                id: i,
                tokenVersion: j
            } = h, l = await (0x2502 + 0x1d16 + -0x4218, ShowUserService_1[x(0x1c8)])(i, -0xab9 + -0x1b3b + 0x25f5);
        if (g[x(0x1d3)](l[x(0x1d5) + 'on'], j))
            throw new AppError_1[(x(0x1c8))](g[w(0x1d0)], 0xce0 + 0x1 * 0x5db + -0x112a);
        const m = (0x25 * 0x4f + -0x5c1 * 0x3 + -0x88 * -0xb, CreateTokens_1[x(0x1cb) + w(0x1af)])(l), n = (-0x539 + -0x2290 + -0x69 * -0x61, CreateTokens_1[x(0x1cf) + w(0x1b2)])(l), o = {};
        return o[x(0x1b7)] = m, o[x(0x1c9) + 'en'] = n, o;
    };
function a() {
    const y = [
        '../../erro',
        'eshToken',
        '14661860tarXey',
        '../../help',
        'fault',
        '../../conf',
        'newToken',
        'erty',
        '5gGxHXg',
        'ers/Create',
        '1366976FatpgY',
        '1283895iaZtsX',
        '__importDe',
        'UserServic',
        '348tYuRuU',
        'rs/AppErro',
        'jsonwebtok',
        'ig/auth',
        'verify',
        '1554936jQFfKj',
        'ERR_SESSIO',
        'defineProp',
        '1467966DsxGyS',
        'default',
        'refreshTok',
        '194618yMWbyo',
        'createAcce',
        'vices/Show',
        '14zdFFfm',
        'refreshSec',
        'createRefr',
        'pwwMZ',
        '../UserSer',
        'ret',
        'OInGE',
        'Tokens',
        'tokenVersi',
        'value',
        'N_EXPIRED',
        '8013ZTItUE',
        'RefreshTok',
        'enService',
        'ssToken',
        '__esModule'
    ];
    a = function () {
        return y;
    };
    return a();
}
exports[t(0x1d9) + t(0x1da)] = RefreshTokenService;