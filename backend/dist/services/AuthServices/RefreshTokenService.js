'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x80)) / (0x1be + -0xe9e + 0x1d7 * 0x7) + parseInt(r(0x96)) / (-0x18bb + -0x90a + -0x1 * -0x21c7) + parseInt(s(0x98)) / (0xd3 * -0x2 + 0x257e + -0x23d5 * 0x1) + parseInt(s(0xa4)) / (-0x1 * -0x224f + 0x1 * 0x2501 + 0x1b * -0x2a4) * (parseInt(s(0x7f)) / (-0x1e49 + 0x62 * -0x7 + 0x107e * 0x2)) + -parseInt(s(0x84)) / (-0x2050 + -0x1dac + -0x2 * -0x1f01) * (-parseInt(s(0x9d)) / (-0x1 * 0x93b + 0x6 * -0xf6 + 0xf06)) + parseInt(r(0x86)) / (-0xf5a + -0x56 * -0x31 + 0xc * -0x17) * (-parseInt(s(0x8d)) / (-0xbc4 + -0x1 * 0x1492 + 0x1 * 0x205f)) + -parseInt(r(0xa0)) / (-0x96 + 0x1187 + -0x10e7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa243 + 0x2c99f + -0x1 * 0xe5bb));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x11f2 * 0x2 + 0x2b7 * -0x7 + 0x375f);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const y = [
        'newToken',
        'FPOKQ',
        'refreshTok',
        'ig/auth',
        '5rffjJo',
        '228462mhIedB',
        'CJfEP',
        '__importDe',
        '../../help',
        '176568UDhXFa',
        'createRefr',
        '8Aurguz',
        'verify',
        '../../erro',
        '../../conf',
        'jsonwebtok',
        'N_EXPIRED',
        'ERR_SESSIO',
        '1068903SPbfzt',
        'UserServic',
        'enService',
        'rs/AppErro',
        '../UserSer',
        'tokenVersi',
        'ers/Create',
        'RefreshTok',
        'vices/Show',
        '180098CzYqoa',
        'defineProp',
        '939264viRGDV',
        'value',
        'default',
        '__esModule',
        'fault',
        '28zyOGgn',
        'ret',
        'erty',
        '1304890dPPeKN',
        'Tokens',
        'createAcce',
        'ssToken',
        '489136JTWAcT',
        'refreshSec',
        'eshToken'
    ];
    a = function () {
        return y;
    };
    return a();
}
var __importDefault = this && this[t(0x82) + t(0x9c)] || function (c) {
    const v = t;
    return c && c[v(0x9b)] ? c : { 'default': c };
};
const k = {};
k[u(0x99)] = !![], Object[t(0x97) + u(0x9f)](exports, t(0x9b), k), exports[t(0x94) + t(0x8f)] = void (-0x1a8d + -0x1046 * 0x1 + -0x241 * -0x13);
const jsonwebtoken_1 = require(t(0x8a) + 'en'), AppError_1 = __importDefault(require(u(0x88) + t(0x90) + 'r')), ShowUserService_1 = __importDefault(require(u(0x91) + u(0x95) + t(0x8e) + 'e')), auth_1 = __importDefault(require(u(0x89) + t(0x7e))), CreateTokens_1 = require(t(0x83) + t(0x93) + t(0xa1)), RefreshTokenService = async e => {
        const w = t, x = t, f = {};
        f[w(0x7c)] = x(0x8c) + x(0x8b), f[x(0x81)] = function (p, q) {
            return p !== q;
        };
        const g = f;
        let h;
        try {
            h = (-0xc7d * -0x1 + -0xccd + 0x50, jsonwebtoken_1[x(0x87)])(e, auth_1[x(0x9a)][x(0xa5) + w(0x9e)]);
        } catch (p) {
            throw new AppError_1[(w(0x9a))](g[w(0x7c)], -0x215f + 0x16d7 + 0x1 * 0xc19);
        }
        const {
                id: i,
                tokenVersion: j
            } = h, l = await (0x2 * 0x653 + -0x1122 + -0x1 * -0x47c, ShowUserService_1[x(0x9a)])(i, -0x167 * 0x7 + 0xdbd + -0x3eb);
        if (g[w(0x81)](l[x(0x92) + 'on'], j))
            throw new AppError_1[(x(0x9a))](g[x(0x7c)], 0x12a1 * 0x2 + -0x13 * 0x85 + -0x19d2);
        const m = (0x172f + -0x1 * 0x5fc + -0x1133, CreateTokens_1[x(0xa2) + x(0xa3)])(l), n = (0x3 * -0x6f3 + -0x233 * 0xd + 0x3170, CreateTokens_1[x(0x85) + w(0x7a)])(l), o = {};
        return o[x(0x7b)] = m, o[w(0x7d) + 'en'] = n, o;
    };
exports[t(0x94) + t(0x8f)] = RefreshTokenService;