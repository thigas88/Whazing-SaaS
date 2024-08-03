'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x128)) / (-0x15c7 * -0x1 + 0x1b * -0x6e + -0xa2c) * (parseInt(s(0x13e)) / (0x1b31 + -0x86c + 0x1 * -0x12c3)) + parseInt(r(0x144)) / (-0x713 + 0xa97 * 0x1 + -0x27 * 0x17) * (-parseInt(s(0x12d)) / (0x3 * -0x6d3 + 0x1 * -0x203d + -0x22 * -0x18d)) + -parseInt(r(0x143)) / (0x1 * 0x258d + 0x4 * -0x5ad + -0x49 * 0x34) + parseInt(r(0x149)) / (-0x26e8 + -0x1d92 + 0x224 * 0x20) + parseInt(r(0x12e)) / (-0x24d8 + -0x1d0f * 0x1 + -0x57 * -0xc2) + -parseInt(s(0x145)) / (-0xee4 + 0x1 * 0x25af + -0x16c3) + parseInt(r(0x13d)) / (0x10e + 0xc * 0x241 + -0xf * 0x1df);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5dcd5 + -0x1 * 0x97c87 + 0xd9799));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x1821 + 0xbf * -0x27 + -0x488 * -0xc);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[t(0x138) + t(0x14d)] || function (c) {
    const v = t;
    return c && c[v(0x14e)] ? c : { 'default': c };
};
function a() {
    const y = [
        'erty',
        'Tokens',
        '1GzhbJR',
        '../UserSer',
        'N_EXPIRED',
        'onBpL',
        '../../conf',
        '4EhZwuW',
        '4050816yaiGeE',
        'eshToken',
        'ssToken',
        'vices/Show',
        'createRefr',
        'createAcce',
        'newToken',
        'ig/auth',
        'jsonwebtok',
        'yrzSw',
        '__importDe',
        'default',
        '../../erro',
        'tokenVersi',
        'enService',
        '10591920iGQEEI',
        '687002Vtcuom',
        'rs/AppErro',
        'verify',
        'refreshTok',
        'refreshSec',
        '5608195mowUnd',
        '2109801uXGRdj',
        '46368BGKccN',
        'RefreshTok',
        'value',
        'ret',
        '2309520XMxWdb',
        'UserServic',
        'ers/Create',
        '../../help',
        'fault',
        '__esModule',
        'ERR_SESSIO',
        'defineProp'
    ];
    a = function () {
        return y;
    };
    return a();
}
const k = {};
k[t(0x147)] = !![], Object[t(0x150) + t(0x126)](exports, t(0x14e), k), exports[t(0x146) + u(0x13c)] = void (0x435 + -0x1e6f + 0x1a3a);
const jsonwebtoken_1 = require(u(0x136) + 'en'), AppError_1 = __importDefault(require(t(0x13a) + u(0x13f) + 'r')), ShowUserService_1 = __importDefault(require(t(0x129) + t(0x131) + t(0x14a) + 'e')), auth_1 = __importDefault(require(t(0x12c) + t(0x135))), CreateTokens_1 = require(t(0x14c) + t(0x14b) + t(0x127)), RefreshTokenService = async e => {
        const w = t, x = u, f = {};
        f[w(0x12b)] = w(0x14f) + w(0x12a), f[x(0x137)] = function (p, q) {
            return p !== q;
        };
        const g = f;
        let h;
        try {
            h = (-0x1 * 0x2655 + -0x14b * -0x12 + 0xf0f, jsonwebtoken_1[x(0x140)])(e, auth_1[x(0x139)][w(0x142) + x(0x148)]);
        } catch (p) {
            throw new AppError_1[(w(0x139))](g[w(0x12b)], 0x1775 * -0x1 + -0x13 * 0x19d + 0x37ad);
        }
        const {
                id: i,
                tokenVersion: j
            } = h, l = await (0x115e + 0x548 + 0xdf * -0x1a, ShowUserService_1[x(0x139)])(i, -0xb * -0x335 + 0x2f * 0x83 + 0x3b53 * -0x1);
        if (g[w(0x137)](l[w(0x13b) + 'on'], j))
            throw new AppError_1[(x(0x139))](g[w(0x12b)], 0x3e * 0x71 + -0x1 * 0xb27 + 0x6 * -0x271);
        const m = (-0x2532 + -0x114a + 0x367c, CreateTokens_1[w(0x133) + w(0x130)])(l), n = (-0x1d18 + 0xc09 + -0x18d * -0xb, CreateTokens_1[x(0x132) + w(0x12f)])(l), o = {};
        return o[x(0x134)] = m, o[x(0x141) + 'en'] = n, o;
    };
exports[u(0x146) + t(0x13c)] = RefreshTokenService;