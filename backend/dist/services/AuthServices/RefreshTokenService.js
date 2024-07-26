'use strict';
const t = b, u = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x899 + 0x167 * 0x5 + -0xec8);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const y = [
        'vices/Show',
        '5250751cdGcvu',
        '1068968JrtznI',
        '__esModule',
        '184106GYUWAc',
        'value',
        '../../conf',
        'ers/Create',
        'N_EXPIRED',
        'ret',
        'refreshSec',
        'OSxkK',
        'verify',
        'RefreshTok',
        '9ZxXHJe',
        '../UserSer',
        'wustw',
        'erty',
        'refreshTok',
        '__importDe',
        'jsonwebtok',
        '600KNBCBu',
        'ig/auth',
        '../../help',
        '274316DRUgYd',
        'eshToken',
        'default',
        'ssToken',
        'newToken',
        'rs/AppErro',
        '862044XQRzPv',
        'createAcce',
        'enService',
        '2035103ymBlkA',
        'fault',
        'ERR_SESSIO',
        'Tokens',
        'tokenVersi',
        'UserServic',
        '8292lIyjCe',
        '../../erro',
        '3pfqMiS',
        '10BFOGpB',
        'defineProp',
        'createRefr'
    ];
    a = function () {
        return y;
    };
    return a();
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0xe8)) / (0x5d5 * -0x1 + 0x14f4 + -0xf1e) + parseInt(r(0xfc)) / (-0x1c * 0x15d + 0x749 + -0xb * -0x2cf) * (-parseInt(s(0xe0)) / (0xec3 * -0x1 + -0x24d + 0x1113)) + parseInt(r(0xd5)) / (0xf5e + -0x1c93 * -0x1 + -0x2bed * 0x1) + parseInt(s(0xf9)) / (-0x1c5 * 0x11 + -0x5ed + 0x1 * 0x2407) * (-parseInt(s(0xde)) / (0x1f5f + -0x1 * 0x1127 + 0x4f * -0x2e)) + -parseInt(s(0xd8)) / (-0x45 + 0x4f * -0x67 + 0x2015) + -parseInt(s(0xe6)) / (-0x165e + 0x1 * 0x336 + -0x1 * -0x1330) * (parseInt(s(0xf2)) / (0x7d8 * -0x2 + -0x1 * 0x21f0 + 0x1 * 0x31a9)) + -parseInt(r(0xe1)) / (0xb * 0x241 + 0xca * 0xd + 0x1 * -0x2303) * (-parseInt(s(0xe5)) / (-0x3 * -0x727 + 0x2263 * -0x1 + 0xcf9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1d * 0x8a5 + 0x1 * -0x382d6 + -0x1f * -0x37ef));
var __importDefault = this && this[t(0xf7) + u(0xd9)] || function (c) {
    const v = u;
    return c && c[v(0xe7)] ? c : { 'default': c };
};
const k = {};
k[u(0xe9)] = !![], Object[u(0xe2) + t(0xf5)](exports, u(0xe7), k), exports[u(0xf1) + t(0xd7)] = void (0x79d + -0x1 * -0xfee + 0x93 * -0x29);
const jsonwebtoken_1 = require(t(0xf8) + 'en'), AppError_1 = __importDefault(require(u(0xdf) + u(0xd4) + 'r')), ShowUserService_1 = __importDefault(require(t(0xf3) + t(0xe4) + u(0xdd) + 'e')), auth_1 = __importDefault(require(u(0xea) + t(0xfa))), CreateTokens_1 = require(t(0xfb) + u(0xeb) + t(0xdb)), RefreshTokenService = async e => {
        const w = t, x = u, f = {};
        f[w(0xf4)] = x(0xda) + x(0xec), f[w(0xef)] = function (p, q) {
            return p !== q;
        };
        const g = f;
        let h;
        try {
            h = (0x430 + -0x1 * -0xca5 + -0x10d5, jsonwebtoken_1[w(0xf0)])(e, auth_1[w(0xfe)][w(0xee) + w(0xed)]);
        } catch (p) {
            throw new AppError_1[(x(0xfe))](g[x(0xf4)], -0x8ef * -0x2 + 0x1686 + -0x26d3);
        }
        const {
                id: i,
                tokenVersion: j
            } = h, l = await (-0x1973 + 0x284 + 0x16ef, ShowUserService_1[x(0xfe)])(i, 0x18b2 + 0x1a * -0x1f + -0x158b * 0x1);
        if (g[x(0xef)](l[x(0xdc) + 'on'], j))
            throw new AppError_1[(x(0xfe))](g[x(0xf4)], 0x737 * -0x5 + 0x110b * 0x1 + -0x1499 * -0x1);
        const m = (0x2df + 0x2460 + -0x273f, CreateTokens_1[w(0xd6) + x(0xff)])(l), n = (-0x97e + -0x5e2 * 0x1 + 0xf60, CreateTokens_1[w(0xe3) + w(0xfd)])(l), o = {};
        return o[w(0x100)] = m, o[x(0xf6) + 'en'] = n, o;
    };
exports[t(0xf1) + u(0xd7)] = RefreshTokenService;