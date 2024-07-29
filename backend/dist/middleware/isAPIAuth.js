'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0xf1)) / (-0x5 * 0x699 + -0x215e * 0x1 + 0x112 * 0x3e) * (parseInt(B(0xec)) / (-0x21c0 + 0x1f93 + -0xd * -0x2b)) + -parseInt(C(0x113)) / (0x1520 + 0x124 * 0x1d + -0x3631) + -parseInt(C(0xfa)) / (-0x7f4 + 0x1 * -0x147 + 0x93f) + -parseInt(B(0xef)) / (-0x29 * -0x5f + -0x273 + -0xcbf) + parseInt(B(0x10e)) / (0x1f16 + -0x1 * 0x1c72 + 0x2 * -0x14f) + parseInt(C(0xf8)) / (0xab7 + 0x9e * 0x1 + -0x5a7 * 0x2) * (-parseInt(B(0xee)) / (0x1 * 0x12af + -0x3 * -0x3d6 + 0x7 * -0x44f)) + parseInt(B(0xf3)) / (0x872 * -0x2 + 0x3f3 * -0x7 + 0x2c92);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x881ee + -0x71c85 + 0xa3956));
function a() {
    const I = [
        '__importDe',
        'tenantId',
        'apiId',
        'not\x20provid',
        'split',
        'fault',
        'PwjIY',
        'gvGRI',
        'authorizat',
        '../config/',
        '5280972jsjgUl',
        'osGyf',
        'ed.',
        'headers',
        'auth',
        '101424TMUHGP',
        '../errors/',
        'secret',
        'Token\x20was\x20',
        'AFstE',
        'xoWKr',
        'defineProp',
        'default',
        '1802yZLptZ',
        'sessionId',
        '9379832tToMtf',
        '972325LZFnqI',
        'AppError',
        '1609GklcBF',
        'TijFz',
        '31132575lRkaRP',
        'hjetK',
        'Invalid\x20to',
        'jsonwebtok',
        'APIAuth',
        '7yiGakv',
        'verify',
        '2909364RJwvmJ',
        'XZhEa',
        'glTXh',
        'AQZHd',
        'ken.',
        'erty',
        '__esModule',
        'ion',
        'iiNIg',
        'value'
    ];
    a = function () {
        return I;
    };
    return a();
}
var __importDefault = this && this[D(0x104) + E(0x109)] || function (c) {
    const F = D;
    return c && c[F(0x100)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xea0 + -0x1c42 + 0x1 * 0x2bcc);
        let h = e[f];
        return h;
    }, b(c, d);
}
const A = {};
A[D(0x103)] = !![], Object[E(0xea) + E(0xff)](exports, E(0x100), A);
const jsonwebtoken_1 = require(D(0xf6) + 'en'), AppError_1 = __importDefault(require(E(0x114) + E(0xf0))), auth_1 = __importDefault(require(E(0x10d) + E(0x112))), isAPIAuth = (d, e, f) => {
        const G = D, H = D, g = {
                'gvGRI': G(0xf5) + G(0xfe),
                'PwjIY': G(0x116) + H(0x107) + G(0x110),
                'iiNIg': function (j) {
                    return j();
                },
                'AQZHd': function (j, k) {
                    return j === k;
                },
                'osGyf': G(0xfb),
                'TijFz': function (j, k) {
                    return j !== k;
                },
                'glTXh': H(0x117),
                'xoWKr': H(0xf4)
            }, h = d[H(0x111)][G(0x10c) + G(0x101)];
        if (!h) {
            if (g[H(0xfd)](g[H(0x10f)], g[H(0x10f)]))
                throw new AppError_1[(H(0xeb))](g[G(0x10a)], 0x5d6 + 0x1e34 + -0x2277);
            else
                throw new d[(H(0xeb))](g[H(0x10b)], -0x1 * -0x6b9 + 0x26b * 0x5 + -0x113d);
        }
        const [, i] = h[H(0x108)]('\x20');
        try {
            if (g[G(0xf2)](g[G(0xfc)], g[H(0xfc)])) {
                const l = j[G(0x111)][G(0x10c) + H(0x101)];
                if (!l)
                    throw new q[(H(0xeb))](g[G(0x10a)], 0x63 * 0x1 + -0x1c * 0xb2 + 0x14a8);
                const [, m] = l[H(0x108)]('\x20');
                try {
                    const n = (0x1697 * 0x1 + -0x2 * -0x1b7 + 0x1 * -0x1a05, r[H(0xf9)])(m, s[G(0xeb)][G(0x115)]), {
                            apiId: o,
                            sessionId: p,
                            tenantId: q
                        } = n, r = {};
                    r[H(0x106)] = o, r[G(0xed)] = p, r[H(0x105)] = q, t[G(0xf7)] = r;
                } catch (s) {
                    throw new v[(G(0xeb))](g[G(0x10b)], 0xc88 + 0x58d + -0x1082);
                }
                return g[G(0x102)](p);
            } else {
                const l = (0x1765 * 0x1 + -0x116f + -0xe * 0x6d, jsonwebtoken_1[H(0xf9)])(i, auth_1[H(0xeb)][G(0x115)]), {
                        apiId: m,
                        sessionId: n,
                        tenantId: o
                    } = l, p = {};
                p[G(0x106)] = m, p[H(0xed)] = n, p[G(0x105)] = o, d[G(0xf7)] = p;
            }
        } catch (q) {
            if (g[G(0xfd)](g[G(0x118)], g[G(0x118)]))
                throw new AppError_1[(H(0xeb))](g[G(0x10b)], -0x195d * 0x1 + 0x12fd + -0x5 * -0x197);
            else {
                const s = (-0x2213 + -0x2555 + 0x4768, g[H(0xf9)])(h, i[H(0xeb)][G(0x115)]), {
                        apiId: t,
                        sessionId: u,
                        tenantId: v
                    } = s, w = {};
                w[H(0x106)] = t, w[H(0xed)] = u, w[G(0x105)] = v, j[G(0xf7)] = w;
            }
        }
        return g[H(0x102)](f);
    };
exports[D(0xeb)] = isAPIAuth;