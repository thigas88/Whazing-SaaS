'use strict';
const z = b, A = b;
function a() {
    const E = [
        'ains\x20defin',
        'pbVpm',
        'mQEKy',
        'indexOf',
        'wDpVi',
        '836420IbdoYm',
        'findByPk',
        '2658tBJYcA',
        '\x20admin\x20dom',
        'tenantId',
        'split',
        '__importDe',
        '5173mdRpwn',
        '__esModule',
        'permission',
        'authorizat',
        'env',
        'User',
        'FVMPy',
        'ksqqk',
        '\x20Admin',
        'default',
        'xSKtC',
        'ADMIN_DOMA',
        'jkUNe',
        'ZeAHk',
        'MwIKx',
        'headers',
        'email',
        'ed.',
        'erty',
        'pTfpZ',
        'fault',
        'bafHY',
        'jsonwebtok',
        'UUudI',
        'XGjbI',
        'Invalid\x20to',
        '../models/',
        'fZZGd',
        'defineProp',
        'fgJwB',
        '1510000JLokNR',
        '530949vfpzgN',
        'adDLx',
        'rYmNu',
        '../config/',
        'AppError',
        'Token\x20was\x20',
        'verify',
        'ken\x20or\x20not',
        '547957QvqWaN',
        'TURZE',
        'Not\x20exists',
        '108bhBUIw',
        'Not\x20admin\x20',
        'value',
        'aymDk',
        'secret',
        '4882224NhGzns',
        'not\x20provid',
        'cCTgo',
        '14mBXEkh',
        '../errors/',
        'YBsnQ',
        'user',
        'VHMuk',
        'lMrow',
        'ion',
        '1643660OGNNgZ',
        'profile',
        'nXCnH',
        'auth'
    ];
    a = function () {
        return E;
    };
    return a();
}
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x159)) / (-0x1d2f + -0x443 * -0x9 + -0x1 * 0x92b) + -parseInt(x(0x164)) / (-0x1 * -0x26bf + 0x4e * -0x1b + 0x6b * -0x49) * (parseInt(x(0x151)) / (-0x1313 + -0x2 * -0x7a + -0x1a6 * -0xb)) + parseInt(y(0x161)) / (0x2 * 0x22d + 0x16e9 + -0x1b3f) + parseInt(y(0x16b)) / (-0x28 * 0x3a + -0x3d * -0xe + 0x5bf) + -parseInt(x(0x176)) / (-0x9b + 0x1d16 + -0x5b1 * 0x5) * (parseInt(x(0x132)) / (-0x1f8 * 0x4 + -0x1811 + 0x1ff8)) + parseInt(y(0x150)) / (-0x53 * -0x55 + 0x1011 + 0x117 * -0x28) + parseInt(x(0x15c)) / (0x106e + -0x139a + 0x335) * (parseInt(x(0x174)) / (0x1190 + -0x1eea + -0xd64 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x47363 + -0xb * -0x1a21c + -0x3f08a));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xe53 * -0x1 + 0x1 * 0x2202 + 0x1281 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[z(0x131) + z(0x146)] || function (c) {
    const B = A;
    return c && c[B(0x133)] ? c : { 'default': c };
};
const k = {};
k[A(0x15e)] = !![], Object[z(0x14e) + A(0x144)](exports, A(0x133), k);
const jsonwebtoken_1 = require(A(0x148) + 'en'), AppError_1 = __importDefault(require(z(0x165) + A(0x155))), auth_1 = __importDefault(require(A(0x154) + z(0x16e))), User_1 = __importDefault(require(A(0x14c) + A(0x137))), isAuthAdmin = async (d, e, f) => {
        const C = z, D = z, g = {
                'VHMuk': C(0x156) + C(0x162) + C(0x143),
                'fgJwB': C(0x15b) + D(0x12e) + D(0x16f) + C(0x143),
                'adDLx': C(0x14b) + D(0x158) + D(0x13a),
                'TURZE': C(0x15d) + C(0x134),
                'aymDk': function (l, m) {
                    return l !== m;
                },
                'UUudI': D(0x13f),
                'nXCnH': function (l, m) {
                    return l === m;
                },
                'lMrow': C(0x170),
                'rYmNu': D(0x145),
                'fZZGd': function (l, m) {
                    return l === m;
                },
                'MwIKx': D(0x13e),
                'bafHY': function (l, m) {
                    return l === m;
                },
                'FVMPy': C(0x163),
                'xSKtC': C(0x166),
                'XGjbI': function (l, m) {
                    return l !== m;
                },
                'ksqqk': D(0x171),
                'wDpVi': function (l) {
                    return l();
                }
            }, h = d[C(0x141)][D(0x135) + C(0x16a)], i = process[C(0x136)][C(0x13d) + 'IN'];
        if (!h) {
            if (g[D(0x15f)](g[D(0x149)], g[D(0x149)]))
                throw new d[(C(0x13b))](g[C(0x168)], -0x94c + -0x1 * -0x337 + 0x7a8);
            else
                throw new AppError_1[(C(0x13b))](g[D(0x168)], 0x1c * -0x162 + -0x4 * 0x837 + -0x3d * -0x133);
        }
        if (!i) {
            if (g[D(0x16d)](g[D(0x169)], g[D(0x153)])) {
                const n = {};
                return n[C(0x13b)] = j, g && h[C(0x133)] ? i : n;
            } else
                throw new AppError_1[(C(0x13b))](g[D(0x14f)], -0x263b + -0x1b3c + 0x430a);
        }
        const [, j] = h[C(0x130)]('\x20');
        try {
            if (g[C(0x14d)](g[D(0x140)], g[C(0x140)])) {
                const n = (0x1 * -0x2333 + -0x1049 + 0x337c, jsonwebtoken_1[D(0x157)])(j, auth_1[D(0x13b)][D(0x160)]), {
                        id: o,
                        profile: p,
                        tenantId: q
                    } = n, r = await User_1[C(0x13b)][C(0x175)](o);
                if (!r || g[C(0x147)](r[C(0x142)][C(0x172)](i), -0x1f14 + 0x11 * 0x1f3 + -0x20e * 0x1)) {
                    if (g[C(0x15f)](g[C(0x138)], g[C(0x13c)]))
                        throw new AppError_1[(C(0x13b))](g[D(0x15a)], -0x46f * -0x4 + 0x224f * 0x1 + -0x55 * 0x98);
                    else
                        throw new d[(D(0x13b))](g[D(0x14f)], 0x6ef + 0x11 * -0x58 + 0x7c);
                }
                const s = {};
                s['id'] = o, s[C(0x16c)] = p, s[D(0x12f)] = q, d[D(0x167)] = s;
            } else
                throw new d[(D(0x13b))](g[C(0x152)], -0x4d1 * -0x7 + 0xf5b * -0x1 + -0x10c9);
        } catch (v) {
            if (g[C(0x14a)](g[D(0x139)], g[D(0x139)]))
                throw new d[(D(0x13b))](g[C(0x15a)], -0x4bf + -0x8 * -0x21d + -0xa96);
            else
                throw new AppError_1[(D(0x13b))](g[D(0x152)], -0x96d + 0xd6e + -0x26e);
        }
        return g[D(0x173)](f);
    };
exports[z(0x13b)] = isAuthAdmin;