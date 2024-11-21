'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0x1d3)) / (-0xfe9 + 0x1 * -0x275 + 0x125f * 0x1) * (parseInt(C(0x1c3)) / (-0x2244 + -0xcac + -0x7d3 * -0x6)) + parseInt(C(0x1b0)) / (0x2f1 + 0x434 + -0x2 * 0x391) * (-parseInt(B(0x1c6)) / (-0x461 * -0x4 + 0x2 * -0x829 + -0x97 * 0x2)) + -parseInt(B(0x1c0)) / (0xcc4 + 0x4 * -0x36a + 0xe9) * (-parseInt(B(0x1d9)) / (-0xa1b + 0xb02 + -0xe1)) + -parseInt(B(0x1c7)) / (-0x1dba + 0x252 + -0x1b6f * -0x1) * (-parseInt(B(0x1ca)) / (-0xae7 * -0x2 + 0x35f * 0xb + 0x487 * -0xd)) + parseInt(C(0x1ae)) / (0x1de7 + -0x2 * -0x981 + -0x30e0) * (parseInt(C(0x1da)) / (-0x1421 + 0x1e53 + -0x34 * 0x32)) + parseInt(C(0x1b5)) / (-0x1 * -0x16f9 + 0x1 * 0x12f6 + -0x4 * 0xa79) + parseInt(C(0x1b2)) / (-0x583 * 0x2 + 0x4a8 * 0x1 + 0x66a) * (-parseInt(B(0x1df)) / (-0x633 + -0x172a * -0x1 + -0x1 * 0x10ea));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x25452 + -0x105877 + 0x18d2c1));
function a() {
    const I = [
        '__importDe',
        'headers',
        '../errors/',
        'authorizat',
        '6065334zbsspa',
        'tenantId',
        '975342ybqmLR',
        'uAUKT',
        '98652XngkBa',
        'user',
        'WHdGb',
        '8854208BORDWu',
        'defineProp',
        'Invalid\x20to',
        'secret',
        'split',
        'hRByy',
        'FppsK',
        'rogeY',
        'verify',
        'yNgjd',
        'WTraV',
        '3379875rJisqn',
        'Token\x20was\x20',
        'ken.',
        '2uBrrbJ',
        'gHfQm',
        'default',
        '8cSWHac',
        '98uZFqej',
        '../config/',
        'erty',
        '635704seefoh',
        'TeZou',
        'not\x20provid',
        'jsonwebtok',
        'profile',
        'EwkQP',
        'auth',
        'oCDPk',
        'ion',
        '626159iSTsXP',
        'UxEmr',
        'cCrHW',
        'AppError',
        'ed.',
        'fault',
        '6kkhKNx',
        '20FaivKj',
        '__esModule',
        'gpDbi',
        'RGXPZ',
        'value',
        '3094lQkyyC',
        'faTUI'
    ];
    a = function () {
        return I;
    };
    return a();
}
var __importDefault = this && this[D(0x1e1) + E(0x1d8)] || function (c) {
    const F = E;
    return c && c[F(0x1db)] ? c : { 'default': c };
};
const A = {};
A[E(0x1de)] = !![], Object[D(0x1b6) + D(0x1c9)](exports, E(0x1db), A);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x2163 + -0x1 * 0x18bf + 0x3bcf * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const jsonwebtoken_1 = require(E(0x1cd) + 'en'), AppError_1 = __importDefault(require(D(0x1e3) + D(0x1d6))), auth_1 = __importDefault(require(E(0x1c8) + D(0x1d0))), isAuth = (d, e, f) => {
        const G = D, H = E, g = {
                'RGXPZ': G(0x1b7) + H(0x1c2),
                'uAUKT': function (j, k) {
                    return j === k;
                },
                'gHfQm': G(0x1dc),
                'oCDPk': H(0x1b4),
                'WTraV': G(0x1c1) + G(0x1cc) + G(0x1d7),
                'TeZou': function (j, k) {
                    return j === k;
                },
                'UxEmr': G(0x1bb),
                'rogeY': G(0x1e0),
                'EwkQP': function (j, k) {
                    return j !== k;
                },
                'yNgjd': H(0x1d5),
                'hRByy': function (j) {
                    return j();
                }
            }, h = d[H(0x1e2)][H(0x1ad) + G(0x1d2)];
        if (!h) {
            if (g[H(0x1b1)](g[H(0x1c4)], g[G(0x1d1)])) {
                const k = {};
                return k[H(0x1c5)] = j, g && h[G(0x1db)] ? i : k;
            } else
                throw new AppError_1[(G(0x1c5))](g[G(0x1bf)], -0x1588 + -0xb2 * 0x1c + 0x3 * 0xe31);
        }
        const [, i] = h[H(0x1b9)]('\x20');
        try {
            if (g[H(0x1cb)](g[H(0x1d4)], g[H(0x1bc)]))
                throw new d[(G(0x1c5))](g[H(0x1dd)], 0x25c5 + -0x2688 + 0x256);
            else {
                const l = (-0x1a19 + 0xbd + -0xc * -0x21d, jsonwebtoken_1[H(0x1bd)])(i, auth_1[G(0x1c5)][G(0x1b8)]), {
                        id: m,
                        profile: n,
                        tenantId: o
                    } = l, p = {};
                p['id'] = m, p[H(0x1ce)] = n, p[G(0x1af)] = o, d[H(0x1b3)] = p;
            }
        } catch (q) {
            if (g[G(0x1cf)](g[G(0x1be)], g[G(0x1be)])) {
                const s = (0x1c68 + -0x2 * 0x4e7 + 0x2 * -0x94d, g[H(0x1bd)])(h, i[H(0x1c5)][G(0x1b8)]), {
                        id: t,
                        profile: u,
                        tenantId: v
                    } = s, w = {};
                w['id'] = t, w[G(0x1ce)] = u, w[G(0x1af)] = v, j[H(0x1b3)] = w;
            } else
                throw new AppError_1[(G(0x1c5))](g[H(0x1dd)], -0x15bb + -0x3bb * 0x2 + 0x1ec4);
        }
        return g[G(0x1ba)](f);
    };
exports[D(0x1c5)] = isAuth;