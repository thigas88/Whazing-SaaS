'use strict';
const A = b, B = b;
(function (c, d) {
    const y = b, z = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(y(0xa4)) / (0x74b + 0x1 * -0x1d51 + 0x1607) + parseInt(z(0xb8)) / (-0x1 * -0x114b + 0x1 * -0x1619 + 0x4d0) * (parseInt(z(0xba)) / (0x6a9 + 0x1a67 + -0x210d)) + parseInt(z(0xb1)) / (0xe95 * 0x1 + -0x169d + 0x80c) * (-parseInt(z(0x92)) / (-0x1356 + 0x672 + 0xce9)) + -parseInt(z(0x8a)) / (-0x1176 + -0x9 * 0x3b + 0x138f) * (-parseInt(z(0xb2)) / (0x39e * 0x1 + -0xe2e + 0xa97)) + -parseInt(y(0x74)) / (-0x13b2 + 0x1 * -0x7a8 + 0x1b62 * 0x1) + -parseInt(z(0x76)) / (0x23c3 + 0x2f2 + 0x14a * -0x1e) * (parseInt(z(0xb7)) / (0x1570 + 0x1d * 0x82 + -0x2420)) + -parseInt(y(0x79)) / (0x1196 + -0x4 * -0x821 + -0x320f) * (-parseInt(z(0xa0)) / (0x2 * 0x715 + -0x1 * -0x2407 + -0x3225));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1c2 * 0x32b + 0x38a7 + -0x147 * -0x90b));
var __importDefault = this && this[A(0x83) + B(0xaa)] || function (c) {
    const C = A;
    return c && c[C(0xa2)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x13eb + -0xd5b + 0x21ba);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const F = [
        'CkFVr',
        'BVXor',
        'KWmPX',
        'ains\x20defin',
        '\x20Admin',
        '4296232yMjdZp',
        'user',
        '9epAnAi',
        'auth',
        'tenantId',
        '9020tYxsAb',
        'fGjwS',
        'gxLeg',
        'ed.',
        'split',
        'not\x20provid',
        '../models/',
        '\x20admin\x20dom',
        'FtGKp',
        'EzVpt',
        '__importDe',
        'indexOf',
        '../errors/',
        'ion',
        'ken\x20or\x20not',
        'Not\x20exists',
        'yrRGC',
        '54282WgmqzF',
        'profile',
        'ZZxXw',
        'erty',
        'ADMIN_DOMA',
        'qgRzF',
        'Invalid\x20to',
        'Not\x20admin\x20',
        '115yPJxni',
        'xodqj',
        'XlOYr',
        'authorizat',
        'default',
        'verify',
        'MGXDg',
        'Token\x20was\x20',
        'HJiFq',
        'env',
        'email',
        'OxvQS',
        'secret',
        'MPZKU',
        '24228aCuBrr',
        'User',
        '__esModule',
        'AppError',
        '649246NnTFAO',
        'value',
        'wsStq',
        'wGUfA',
        'pAXUJ',
        'permission',
        'fault',
        'findByPk',
        'oFrAi',
        'peIuF',
        'arDiy',
        'CnrQV',
        'hfrSc',
        '34836WSKulV',
        '7OxLGkJ',
        'PHWMr',
        'defineProp',
        '../config/',
        'headers',
        '399530ThEleo',
        '524zswwri',
        'jsonwebtok',
        '1929bFFvOF',
        'zPoEx'
    ];
    a = function () {
        return F;
    };
    return a();
}
k[A(0xa5)] = !![], Object[A(0xb4) + B(0x8d)](exports, A(0xa2), k);
const jsonwebtoken_1 = require(B(0xb9) + 'en'), AppError_1 = __importDefault(require(B(0x85) + A(0xa3))), auth_1 = __importDefault(require(B(0xb5) + B(0x77))), User_1 = __importDefault(require(B(0x7f) + A(0xa1))), isAuthAdmin = async (d, e, f) => {
        const D = A, E = B, g = {
                'CkFVr': D(0x88) + D(0x80) + D(0xbf) + E(0x7c),
                'yrRGC': E(0x90) + E(0x87) + D(0xc0),
                'FtGKp': E(0x91) + D(0xa9),
                'zPoEx': E(0x99) + D(0x7e) + D(0x7c),
                'OxvQS': function (l, m) {
                    return l === m;
                },
                'KWmPX': E(0xaf),
                'ZZxXw': E(0xa8),
                'xodqj': function (l, m) {
                    return l !== m;
                },
                'gxLeg': D(0x9a),
                'wsStq': function (l, m) {
                    return l !== m;
                },
                'MGXDg': E(0xb3),
                'fGjwS': function (l, m) {
                    return l === m;
                },
                'peIuF': E(0x94),
                'EzVpt': D(0xae),
                'qgRzF': function (l, m) {
                    return l !== m;
                },
                'MPZKU': D(0xa7),
                'oFrAi': D(0xb0),
                'BVXor': function (l) {
                    return l();
                }
            }, h = d[E(0xb6)][E(0x95) + E(0x86)], i = process[D(0x9b)][E(0x8e) + 'IN'];
        if (!h) {
            if (g[E(0x9d)](g[E(0xbe)], g[E(0x8c)]))
                throw new d[(E(0x96))](g[D(0xbc)], -0x2503 + 0x12cf * -0x2 + 0x4c34);
            else
                throw new AppError_1[(E(0x96))](g[E(0xbb)], -0xca + 0x1e03 + -0xdd3 * 0x2);
        }
        if (!i) {
            if (g[E(0x93)](g[D(0x7b)], g[D(0x7b)]))
                throw new d[(D(0x96))](g[D(0x89)], 0x1 * 0x1e2f + -0x26d4 + -0x51c * -0x2);
            else
                throw new AppError_1[(D(0x96))](g[E(0xbc)], 0x90a + -0xc2 * 0x2 + -0x5f3);
        }
        const [, j] = h[D(0x7d)]('\x20');
        try {
            if (g[D(0xa6)](g[E(0x98)], g[D(0x98)]))
                throw new d[(E(0x96))](g[D(0x81)], 0x1833 + -0x44e + -0x1252);
            else {
                const o = (0x156 * -0x1 + -0x2 * 0x994 + -0x147e * -0x1, jsonwebtoken_1[D(0x97)])(j, auth_1[E(0x96)][D(0x9e)]), {
                        id: p,
                        profile: q,
                        tenantId: r
                    } = o, s = await User_1[E(0x96)][D(0xab)](p);
                if (!s || g[D(0x7a)](s[D(0x9c)][E(0x84)](i), 0x1 * 0x1c5b + 0x978 + -0x25d2)) {
                    if (g[E(0x9d)](g[E(0xad)], g[D(0x82)]))
                        throw new d[(D(0x96))](g[D(0xbb)], 0x1405 + -0xed9 + -0x399 * 0x1);
                    else
                        throw new AppError_1[(E(0x96))](g[D(0x81)], -0x204e + 0x22f8 + 0x117 * -0x1);
                }
                const t = {};
                t['id'] = p, t[E(0x8b)] = q, t[D(0x78)] = r, d[E(0x75)] = t;
            }
        } catch (v) {
            if (g[E(0x8f)](g[D(0x9f)], g[E(0xac)]))
                throw new AppError_1[(D(0x96))](g[E(0x89)], -0x1 * 0x1c4c + -0x5 * -0x38 + 0x1cc7);
            else {
                const x = {};
                return x[E(0x96)] = j, g && h[D(0xa2)] ? i : x;
            }
        }
        return g[D(0xbd)](f);
    };
exports[B(0x96)] = isAuthAdmin;