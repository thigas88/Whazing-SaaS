'use strict';
const t = b, u = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x185f + -0x29 * 0xd6 + 0x3b4a);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0xa8)) / (-0x22a2 + 0x4b1 * 0x3 + -0xa48 * -0x2) + -parseInt(r(0xb5)) / (0x774 + 0x8c5 * -0x1 + -0x1 * -0x153) + -parseInt(r(0xca)) / (0x1 * 0xd21 + -0xe90 + 0x172) * (-parseInt(s(0xcd)) / (-0x160a + -0x71b + -0x5 * -0x5d5)) + -parseInt(s(0xa5)) / (0x2 * -0x58a + 0x1002 + -0x3 * 0x1a3) + -parseInt(r(0xb3)) / (-0x1cf4 + -0x1 * -0x251b + -0x821) * (parseInt(s(0xcb)) / (0x1 * -0xc67 + 0x2a7 * 0x1 + 0x9c7)) + -parseInt(s(0xab)) / (-0x2ef + 0x1413 + -0x36c * 0x5) + parseInt(s(0xbb)) / (0x23a0 + -0x180c * 0x1 + 0x1 * -0xb8b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2af3 + 0x5c04e + 0x39652));
var __importDefault = this && this[t(0xc6) + u(0xc4)] || function (c) {
    const v = t;
    return c && c[v(0xb2)] ? c : { 'default': c };
};
const k = {};
k[u(0xc0)] = !![], Object[t(0xce) + t(0xba)](exports, t(0xb2), k), exports[t(0xb7) + u(0xb0)] = void (0x1 * -0x2699 + 0x1ebd + 0x7dc);
const jsonwebtoken_1 = require(u(0xb4) + 'en'), AppError_1 = __importDefault(require(u(0xc8) + u(0xae) + 'r')), ShowUserService_1 = __importDefault(require(t(0xb6) + u(0xb1) + u(0xb8) + 'e')), auth_1 = __importDefault(require(t(0xc3) + u(0xcc))), CreateTokens_1 = require(u(0xb9) + t(0xcf) + u(0xc7)), RefreshTokenService = async e => {
        const w = t, x = t, f = {};
        f[w(0xbe)] = x(0xa6) + x(0xac), f[w(0xa9)] = function (p, q) {
            return p !== q;
        };
        const g = f;
        let h;
        try {
            h = (0xa1d * -0x3 + -0x1cec * 0x1 + 0x13c1 * 0x3, jsonwebtoken_1[w(0xc9)])(e, auth_1[x(0xaa)][w(0xc2) + x(0xbf)]);
        } catch (p) {
            throw new AppError_1[(w(0xaa))](g[x(0xbe)], -0x1 * 0xd3 + -0x26c7 + 0x292b);
        }
        const {
                id: i,
                tokenVersion: j
            } = h, l = await (-0x4 * 0x2ff + -0x7 * -0x27 + -0x5 * -0x22f, ShowUserService_1[w(0xaa)])(i, 0x42c + 0x501 + 0x4 * -0x24b);
        if (g[x(0xa9)](l[w(0xbc) + 'on'], j))
            throw new AppError_1[(w(0xaa))](g[w(0xbe)], -0x263b + -0x2a4 + -0x61 * -0x70);
        const m = (0xfe2 + 0x37 * -0x43 + 0x1 * -0x17d, CreateTokens_1[w(0xad) + w(0xa7)])(l), n = (-0x26f7 + -0x17c1 * 0x1 + -0x7d7 * -0x8, CreateTokens_1[w(0xc1) + w(0xbd)])(l), o = {};
        return o[x(0xaf)] = m, o[w(0xc5) + 'en'] = n, o;
    };
function a() {
    const y = [
        '14PrwiXB',
        'ig/auth',
        '973412KtjZEi',
        'defineProp',
        'ers/Create',
        '1330395qrmRpA',
        'ERR_SESSIO',
        'ssToken',
        '1108035LEOMYw',
        'hwsLR',
        'default',
        '8950440qFhuZs',
        'N_EXPIRED',
        'createAcce',
        'rs/AppErro',
        'newToken',
        'enService',
        'vices/Show',
        '__esModule',
        '1018050GXZWjf',
        'jsonwebtok',
        '1640374gMsFMy',
        '../UserSer',
        'RefreshTok',
        'UserServic',
        '../../help',
        'erty',
        '14154075iCSiFB',
        'tokenVersi',
        'eshToken',
        'bKjRF',
        'ret',
        'value',
        'createRefr',
        'refreshSec',
        '../../conf',
        'fault',
        'refreshTok',
        '__importDe',
        'Tokens',
        '../../erro',
        'verify',
        '6nJSwST'
    ];
    a = function () {
        return y;
    };
    return a();
}
exports[u(0xb7) + u(0xb0)] = RefreshTokenService;