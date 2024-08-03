'use strict';
const A = b, B = b;
(function (c, d) {
    const y = b, z = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(y(0x105)) / (0xdf * -0x11 + 0x7 * 0x3de + -0xc42) * (parseInt(z(0xff)) / (-0x1 * -0xf01 + -0x383 * -0x1 + -0x941 * 0x2)) + -parseInt(z(0x103)) / (0x56c * 0x7 + 0x2 * 0x96b + -0x38c7) * (parseInt(y(0x119)) / (0x1e1f + 0xbe3 + -0x29fe)) + -parseInt(z(0xe9)) / (-0xae + -0x19dc + -0x1a8f * -0x1) * (parseInt(z(0x123)) / (-0x40 + 0x1 * 0x5fe + -0x2 * 0x2dc)) + parseInt(y(0x109)) / (0x1 * 0x16ac + -0x21b4 + 0xb0f) + parseInt(z(0x115)) / (0x13ff + -0x79 * 0x3a + -0x1 * -0x773) + parseInt(y(0x11e)) / (-0x5ea * -0x2 + 0xfa9 + -0x1b74) * (-parseInt(y(0xf9)) / (0x33 * -0x28 + -0x1b76 + -0x718 * -0x5)) + parseInt(z(0x11d)) / (-0x11 * 0x133 + -0xfbb * 0x1 + 0x1 * 0x2429) * (-parseInt(z(0x104)) / (0x5 * -0x770 + -0x1047 + 0x3583));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xcb7b * -0x1 + 0x3e5f1 + -0x2107e));
var __importDefault = this && this[A(0x11a) + A(0xdf)] || function (c) {
    const C = B;
    return c && c[C(0x10b)] ? c : { 'default': c };
};
function a() {
    const F = [
        'permission',
        '../config/',
        'headers',
        '\x20Admin',
        'email',
        'value',
        'qXYLo',
        '320DhpWPp',
        'KeKDl',
        'ains\x20defin',
        'Sswju',
        'BhitZ',
        'YfepY',
        'oNTOk',
        'env',
        'oxiwL',
        'ken\x20or\x20not',
        'jsonwebtok',
        '../errors/',
        'Not\x20exists',
        'auth',
        'user',
        'default',
        '40owMVRu',
        'User',
        'almok',
        'xTJTS',
        'indexOf',
        'profile',
        '4908ouvech',
        'SDzuq',
        'split',
        'ezSRM',
        '794595mFZTvK',
        '12Vodyqx',
        '110qQVsxA',
        'tRtKO',
        'BBrvt',
        'MTWeF',
        '2349676cxWXOb',
        'verify',
        '__esModule',
        'SxfnA',
        'Token\x20was\x20',
        'authorizat',
        'findByPk',
        'hJokz',
        'erty',
        'AppError',
        'secret',
        'tenantId',
        '2457328HCFCtD',
        'bOAKh',
        'BqwhL',
        'not\x20provid',
        '4gSKQhW',
        '__importDe',
        'Not\x20admin\x20',
        'defineProp',
        '2455585bbMZmC',
        '255429dVvQnU',
        'EWUEY',
        'ADMIN_DOMA',
        '../models/',
        'Invalid\x20to',
        '13020PjesZk',
        'NPYZh',
        '\x20admin\x20dom',
        'fault',
        'ed.',
        'ion'
    ];
    a = function () {
        return F;
    };
    return a();
}
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xa6 + 0x16ae + -0x9 * 0x27f);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[A(0xe7)] = !![], Object[B(0x11c) + B(0x111)](exports, A(0x10b), k);
const jsonwebtoken_1 = require(B(0xf3) + 'en'), AppError_1 = __importDefault(require(A(0xf4) + A(0x112))), auth_1 = __importDefault(require(A(0xe3) + A(0xf6))), User_1 = __importDefault(require(B(0x121) + A(0xfa))), isAuthAdmin = async (d, e, f) => {
        const D = B, E = A, g = {
                'hJokz': D(0x10d) + E(0x118) + E(0xe0),
                'tRtKO': D(0xf5) + D(0xde) + E(0xeb) + D(0xe0),
                'BhitZ': D(0x122) + E(0xf2) + D(0xe5),
                'NPYZh': D(0x11b) + E(0xe2),
                'oxiwL': function (l, m) {
                    return l !== m;
                },
                'xTJTS': D(0xee),
                'BqwhL': D(0x11f),
                'qXYLo': function (l, m) {
                    return l === m;
                },
                'oNTOk': E(0xfb),
                'bOAKh': E(0xec),
                'MTWeF': D(0x107),
                'KeKDl': function (l, m) {
                    return l === m;
                },
                'ezSRM': D(0x10c),
                'SDzuq': function (l) {
                    return l();
                }
            }, h = d[D(0xe4)][E(0x10e) + E(0xe1)], i = process[D(0xf0)][D(0x120) + 'IN'];
        if (!h) {
            if (g[D(0xf1)](g[D(0xfc)], g[E(0xfc)]))
                throw new d[(E(0xf8))](g[E(0x110)], -0x1099 + -0x182c + 0x54b * 0x8);
            else
                throw new AppError_1[(D(0xf8))](g[D(0x110)], 0x255d * -0x1 + 0x25a3 + -0x3 * -0x6f);
        }
        if (!i) {
            if (g[D(0xf1)](g[D(0x117)], g[E(0x117)]))
                throw new d[(D(0xf8))](g[E(0x106)], -0x3 * 0x969 + 0x343 + 0x1a8b);
            else
                throw new AppError_1[(D(0xf8))](g[D(0x106)], 0x1 * 0x1f45 + -0xca * -0x7 + -0x2 * 0x119c);
        }
        const [, j] = h[D(0x101)]('\x20');
        try {
            if (g[E(0xe8)](g[D(0xef)], g[D(0x116)]))
                throw new d[(E(0xf8))](g[D(0xed)], 0x2110 + 0x2e6 + -0x2263);
            else {
                const o = (0x401 + 0x3 * 0x455 + -0x88 * 0x20, jsonwebtoken_1[E(0x10a)])(j, auth_1[E(0xf8)][E(0x113)]), {
                        id: p,
                        profile: q,
                        tenantId: r
                    } = o, s = await User_1[D(0xf8)][D(0x10f)](p);
                if (!s || g[D(0xe8)](s[D(0xe6)][D(0xfd)](i), 0x213 * -0xa + -0x111 * -0x1 + 0x13ae)) {
                    if (g[E(0xf1)](g[D(0x108)], g[D(0x108)]))
                        throw new d[(E(0xf8))](g[D(0xdd)], -0x1609 * -0x1 + -0x1dea + -0x37 * -0x2c);
                    else
                        throw new AppError_1[(D(0xf8))](g[E(0xdd)], 0x1f67 * 0x1 + -0x6e6 + -0x5 * 0x496);
                }
                const t = {};
                t['id'] = p, t[D(0xfe)] = q, t[E(0x114)] = r, d[E(0xf7)] = t;
            }
        } catch (v) {
            if (g[E(0xea)](g[E(0x102)], g[E(0x102)]))
                throw new AppError_1[(D(0xf8))](g[E(0xed)], -0xe3f + -0x2285 + 0x3257);
            else {
                const x = {};
                return x[D(0xf8)] = j, g && h[E(0x10b)] ? i : x;
            }
        }
        return g[E(0x100)](f);
    };
exports[A(0xf8)] = isAuthAdmin;