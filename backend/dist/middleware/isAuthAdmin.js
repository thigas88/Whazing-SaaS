'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0xf5)) / (-0x1e03 * 0x1 + -0x119 * -0x19 + 0x1 * 0x293) * (-parseInt(y(0xf7)) / (-0x1037 + -0x5 * 0x72 + 0x1273 * 0x1)) + -parseInt(x(0x11d)) / (-0x1bd * 0x16 + -0xa2e + 0x306f) + -parseInt(x(0xeb)) / (-0x99f + -0x1 * -0xbb6 + 0x213 * -0x1) + -parseInt(x(0xf9)) / (0x5 * 0x9a + 0x5ab * 0x3 + -0x13fe) + parseInt(y(0x116)) / (-0xcc9 * -0x1 + 0x2f9 * 0x2 + -0x12b5) + -parseInt(x(0x105)) / (0x21e7 + 0x1bb2 + -0x3d92) + -parseInt(y(0x108)) / (-0x1ef6 + -0x73 * -0x1d + 0x3 * 0x5fd) * (-parseInt(y(0xef)) / (-0x17f * 0xc + -0x13f9 + 0x25f6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2ef0a + -0x3ddd7 + -0x663b * -0x15));
var __importDefault = this && this[z(0x109) + z(0xe2)] || function (c) {
    const B = z;
    return c && c[B(0x114)] ? c : { 'default': c };
};
function a() {
    const E = [
        'KbpHM',
        'fEqBW',
        'EPeDV',
        'tenantId',
        'headers',
        'Token\x20was\x20',
        'hqenx',
        'indexOf',
        'email',
        'fault',
        '../models/',
        'auth',
        'xoHoz',
        'ken\x20or\x20not',
        'not\x20provid',
        'AppError',
        'defineProp',
        'Invalid\x20to',
        '2138868UVplvu',
        'ed.',
        '../config/',
        'erty',
        '300771IzGrgF',
        'secret',
        'jixtZ',
        'env',
        'ePfnG',
        'EDrbC',
        '181151HiiFHM',
        'LhFnR',
        '6ompLPR',
        'permission',
        '146785zyLeiH',
        'ojdnD',
        'MDQHq',
        'vgQFZ',
        'mPDEA',
        'split',
        'ains\x20defin',
        'TVxGF',
        'default',
        'Not\x20exists',
        'profile',
        'cTkJm',
        '1427692hqRRZr',
        '\x20Admin',
        '\x20admin\x20dom',
        '296yQoGIc',
        '__importDe',
        'value',
        'pmjLF',
        'ADMIN_DOMA',
        '../errors/',
        'ion',
        'user',
        'jsonwebtok',
        'User',
        'verify',
        'xAfSs',
        '__esModule',
        'oTOok',
        '5519034mumFZH',
        'vfzxN',
        'findByPk',
        'HYOPX',
        'Not\x20admin\x20',
        'ueDXF',
        'ENIpe',
        '1069203UOscFt',
        'authorizat',
        'kEkMH'
    ];
    a = function () {
        return E;
    };
    return a();
}
const k = {};
k[A(0x10a)] = !![], Object[z(0xe9) + z(0xee)](exports, A(0x114), k);
const jsonwebtoken_1 = require(A(0x110) + 'en'), AppError_1 = __importDefault(require(A(0x10d) + A(0xe8))), auth_1 = __importDefault(require(A(0xed) + A(0xe4))), User_1 = __importDefault(require(z(0xe3) + A(0x111))), isAuthAdmin = async (d, e, f) => {
        const C = z, D = A, g = {
                'ojdnD': C(0x11a) + D(0xf8),
                'vgQFZ': D(0xea) + D(0xe6) + D(0x106),
                'vfzxN': D(0x102) + C(0x107) + C(0xff) + C(0xec),
                'hqenx': C(0x125) + C(0xe7) + D(0xec),
                'xoHoz': function (l, m) {
                    return l === m;
                },
                'LhFnR': D(0x113),
                'ueDXF': D(0x119),
                'ENIpe': function (l, m) {
                    return l !== m;
                },
                'fEqBW': C(0x10b),
                'EDrbC': C(0xf1),
                'kEkMH': D(0x104),
                'ePfnG': D(0x122),
                'mPDEA': D(0x115),
                'MDQHq': D(0x120),
                'TVxGF': function (l) {
                    return l();
                }
            }, h = d[D(0x124)][C(0x11e) + D(0x10e)], i = process[C(0xf2)][C(0x10c) + 'IN'];
        if (!h) {
            if (g[C(0xe5)](g[C(0xf6)], g[C(0x11b)]))
                throw new d[(C(0x101))](g[D(0xfa)], 0x19 * -0x89 + 0x1a0d + -0xb19);
            else
                throw new AppError_1[(D(0x101))](g[D(0x126)], -0x17c2 + -0x1 * 0x1aaa + 0x33ff);
        }
        if (!i) {
            if (g[D(0x11c)](g[C(0x121)], g[D(0x121)]))
                throw new d[(C(0x101))](g[D(0xfc)], -0xd * -0x3b + -0x25ba * 0x1 + 0x244e);
            else
                throw new AppError_1[(D(0x101))](g[D(0x117)], 0x1 * 0xbd6 + 0x230b + 0x2d4e * -0x1);
        }
        const [, j] = h[D(0xfe)]('\x20');
        try {
            if (g[C(0x11c)](g[D(0xf4)], g[C(0xf4)]))
                throw new d[(C(0x101))](g[C(0x117)], -0x236 + -0x6 * -0x591 + 0x169 * -0x15);
            else {
                const o = (0xd * -0xd7 + 0x2452 + 0x1967 * -0x1, jsonwebtoken_1[D(0x112)])(j, auth_1[C(0x101)][C(0xf0)]), {
                        id: p,
                        profile: q,
                        tenantId: r
                    } = o, s = await User_1[C(0x101)][C(0x118)](p);
                if (!s || g[D(0xe5)](s[C(0xe1)][D(0xe0)](i), 0xbaf * -0x3 + 0x1079 * 0x1 + 0x47 * 0x43)) {
                    if (g[C(0xe5)](g[C(0x11f)], g[C(0xf3)])) {
                        const v = {};
                        return v[D(0x101)] = j, g && h[D(0x114)] ? i : v;
                    } else
                        throw new AppError_1[(D(0x101))](g[D(0xfa)], -0xa97 + -0x11c5 * -0x1 + -0x59b);
                }
                const t = {};
                t['id'] = p, t[D(0x103)] = q, t[C(0x123)] = r, d[D(0x10f)] = t;
            }
        } catch (v) {
            if (g[C(0xe5)](g[D(0xfd)], g[D(0xfb)]))
                throw new d[(D(0x101))](g[C(0x126)], -0x1a * 0x12 + -0x59 * -0x56 + -0x13 * 0x165);
            else
                throw new AppError_1[(C(0x101))](g[C(0xfc)], -0x19f9 + 0xecd * -0x1 + 0x2a59);
        }
        return g[C(0x100)](f);
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x28d + 0x6a4 + -0x851);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[A(0x101)] = isAuthAdmin;