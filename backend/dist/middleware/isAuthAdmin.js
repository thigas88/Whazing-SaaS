'use strict';
const A = b, B = b;
function a() {
    const F = [
        'IUPxl',
        'EXGRE',
        'fault',
        'Token\x20was\x20',
        '../config/',
        'fcrhw',
        'yFjvL',
        'secret',
        'AppError',
        'IqYjv',
        '2618208zDcFil',
        'indexOf',
        'YRdaq',
        '6yYezzo',
        'kgbcb',
        'ADMIN_DOMA',
        'ken\x20or\x20not',
        'BhDqs',
        '1609990DMXPTY',
        '920542kWnHiy',
        '63283eOHGPU',
        '__esModule',
        'authorizat',
        'user',
        'findByPk',
        '119488tfyxSr',
        '../models/',
        'env',
        'defineProp',
        'gYEyM',
        'auth',
        '315951wSnybZ',
        'Not\x20exists',
        'yYbrq',
        'eypZk',
        '8EYYcAy',
        'gdEWb',
        '__importDe',
        '8170yllWJb',
        'ZNAOP',
        'jsonwebtok',
        '\x20admin\x20dom',
        'WoQux',
        'not\x20provid',
        'profile',
        'email',
        'User',
        'sgGcg',
        'szfOJ',
        'default',
        'wAJmc',
        'ains\x20defin',
        'yGoko',
        'split',
        'Invalid\x20to',
        'headers',
        'OQpVo',
        'permission',
        '../errors/',
        'ion',
        'weRkk',
        'kpFFI',
        'ed.',
        'erty',
        'HLUfz',
        'nZmhL',
        'qeiou',
        'Not\x20admin\x20',
        'ehFVU',
        'XXSRM',
        '\x20Admin',
        'eDRDB',
        'verify',
        'tenantId',
        'value',
        '12iGdZSu'
    ];
    a = function () {
        return F;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xa4e * -0x2 + -0x2683 + 0x1254);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const y = b, z = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(y(0xa4)) / (0x226c * -0x1 + -0x2f * -0x77 + 0xc94) + -parseInt(z(0xa9)) / (0x1080 + 0x251 * 0xd + 0x29 * -0x123) + parseInt(y(0xaf)) / (-0x996 + 0x11de + -0x845) * (-parseInt(z(0x8f)) / (-0x14f0 + 0x118e + 0x366)) + -parseInt(z(0xa2)) / (-0x7b2 + -0x1879 + 0x2030) * (-parseInt(z(0x9d)) / (-0x1b93 + -0x175 * 0xa + 0x2a2b)) + -parseInt(y(0xa3)) / (-0x1d27 + 0xe9 * -0xb + 0x2731) + parseInt(y(0xb3)) / (-0x1156 + -0x1 * -0xdb + -0x581 * -0x3) * (parseInt(y(0x9a)) / (-0x2062 + -0x1872 + 0x38dd)) + -parseInt(y(0xb6)) / (-0x4b0 + 0x15 * 0x10e + -0x116c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x90cb + 0x1 * -0xf8a5 + 0x2f8c9));
var __importDefault = this && this[A(0xb5) + A(0x92)] || function (c) {
    const C = B;
    return c && c[C(0xa5)] ? c : { 'default': c };
};
const k = {};
k[B(0x8e)] = !![], Object[A(0xac) + B(0x83)](exports, A(0xa5), k);
const jsonwebtoken_1 = require(B(0xb8) + 'en'), AppError_1 = __importDefault(require(A(0x7e) + A(0x98))), auth_1 = __importDefault(require(B(0x94) + B(0xae))), User_1 = __importDefault(require(A(0xaa) + B(0x72))), isAuthAdmin = async (d, e, f) => {
        const D = B, E = A, g = {
                'XXSRM': D(0x87) + E(0x7d),
                'yFjvL': D(0xb0) + D(0x6d) + D(0x77) + D(0x82),
                'HLUfz': E(0x93) + D(0x6f) + D(0x82),
                'sgGcg': D(0x7a) + E(0xa0) + D(0x8a),
                'WoQux': function (l, m) {
                    return l !== m;
                },
                'gdEWb': D(0x81),
                'weRkk': D(0x9e),
                'szfOJ': function (l, m) {
                    return l === m;
                },
                'gYEyM': D(0xb1),
                'wAJmc': E(0x85),
                'yGoko': function (l, m) {
                    return l === m;
                },
                'IUPxl': D(0x99),
                'ehFVU': D(0xa1),
                'eDRDB': E(0x95),
                'YRdaq': function (l, m) {
                    return l === m;
                },
                'EXGRE': D(0xb2),
                'qeiou': E(0x7c),
                'ZNAOP': function (l) {
                    return l();
                }
            }, h = d[E(0x7b)][E(0xa6) + E(0x7f)], i = process[D(0xab)][E(0x9f) + 'IN'];
        if (!h) {
            if (g[E(0x6e)](g[D(0xb4)], g[E(0x80)]))
                throw new AppError_1[(E(0x75))](g[E(0x84)], -0x8b8 + 0x214a + 0x7 * -0x349);
            else
                throw new d[(E(0x75))](g[E(0x89)], 0x246a + 0x1ec5 + -0x286 * 0x1a);
        }
        if (!i) {
            if (g[D(0x74)](g[E(0xad)], g[D(0x76)]))
                throw new d[(E(0x75))](g[E(0x96)], 0x16 * 0xe2 + 0x82 + -0x125b);
            else
                throw new AppError_1[(D(0x75))](g[E(0x96)], 0x1f8b + -0x1d03 + 0x7 * -0x23);
        }
        const [, j] = h[E(0x79)]('\x20');
        try {
            if (g[E(0x78)](g[D(0x90)], g[D(0x88)]))
                throw new d[(E(0x75))](g[D(0x84)], 0x10f * 0x14 + -0x26bd * 0x1 + 0x46 * 0x46);
            else {
                const o = (-0x519 + -0x1 * 0x19bb + 0x1ed4, jsonwebtoken_1[D(0x8c)])(j, auth_1[E(0x75)][D(0x97)]), {
                        id: p,
                        profile: q,
                        tenantId: r
                    } = o, s = await User_1[D(0x75)][D(0xa8)](p);
                if (!s || g[E(0x74)](s[D(0x71)][D(0x9b)](i), 0x11ef * -0x1 + -0x1 * 0x392 + 0x1582 * 0x1)) {
                    if (g[E(0x78)](g[D(0x8b)], g[E(0x8b)]))
                        throw new AppError_1[(D(0x75))](g[D(0x89)], -0xfe6 + 0x621 + -0x58 * -0x21);
                    else
                        throw new d[(D(0x75))](g[E(0x73)], 0x43 * 0x3b + 0x445 + 0x1 * -0x1223);
                }
                const t = {};
                t['id'] = p, t[D(0x70)] = q, t[E(0x8d)] = r, d[D(0xa7)] = t;
            }
        } catch (v) {
            if (g[E(0x9c)](g[E(0x91)], g[D(0x86)])) {
                const x = {};
                return x[E(0x75)] = j, g && h[E(0xa5)] ? i : x;
            } else
                throw new AppError_1[(D(0x75))](g[D(0x73)], 0x1ed5 + 0x30f + -0x2051);
        }
        return g[D(0xb7)](f);
    };
exports[B(0x75)] = isAuthAdmin;