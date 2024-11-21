'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0xfc)) / (0x21df + -0x123 + -0x20bb) + parseInt(t(0x109)) / (-0x58e * 0x2 + -0x2559 + -0x1 * -0x3077) * (-parseInt(u(0x10e)) / (0x569 * -0x3 + 0x93c + 0x702)) + parseInt(t(0x113)) / (-0x47 * -0x11 + -0x57 * 0x33 + -0x651 * -0x2) * (parseInt(t(0x11f)) / (-0x730 + -0x1651 + 0x2 * 0xec3)) + parseInt(u(0x116)) / (0x293 * -0xb + 0x1082 + 0xbd5) * (parseInt(u(0x106)) / (0x2225 + -0x2b * 0x75 + 0x7 * -0x211)) + parseInt(u(0x131)) / (-0x3 * 0x9 + 0x895 + -0x872) + parseInt(t(0xff)) / (0x119 * 0x19 + -0xced * 0x1 + 0x1 * -0xe7b) + parseInt(t(0x10b)) / (-0x6f7 * 0x1 + -0x184d + -0x1f4e * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xdbcd + -0x3 * 0x6ff1 + 0x1 * 0x52868));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3b * -0x20 + -0x1b54 + 0x28 * 0x86);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const E = [
        '21272tYjfNT',
        'log',
        'base',
        '6TzaooY',
        '=\x20\x27\x27\x20WHERE',
        'ynupR',
        '\x20email=\x20\x27',
        'defineProp',
        'fault',
        'message',
        'UPDATE\x20\x20\x22U',
        '../../data',
        '5qAwrvr',
        'status',
        'QueryTypes',
        'query',
        '\x22\x20\x20WHERE\x20e',
        'CEuSq',
        '__esModule',
        '\x20\x22password',
        'bcryptjs',
        'Email\x20não\x20',
        'type',
        'BYwOB',
        'mail\x20=\x20\x27',
        'FKdQj',
        'sers\x22\x20\x20SET',
        'encontrado',
        '\x27\x20AND\x20\x22res',
        'SELECT',
        '440544fYFckP',
        'KSnQg',
        'default',
        'kCFUL',
        '__importDe',
        '195834eOVlrq',
        'sequelize',
        'Token\x20não\x20',
        '608130aIDrBO',
        'erty',
        '\x27\x20,\x20\x22reset',
        'SELECT\x20*\x20F',
        'EgStd',
        '\x22\x20=\x20\x27',
        'Password\x22\x20',
        '793030CTDIQt',
        '\x22\x20!=\x20\x27\x27',
        'hash',
        '192476uRsSNb',
        'length',
        '4390860OekzhZ',
        'ROM\x20\x22Users',
        'etPassword',
        '9MYWdki',
        'Hash\x22=\x20\x27',
        'UPDATE',
        'lhxlW',
        'value'
    ];
    a = function () {
        return E;
    };
    return a();
}
var __importDefault = this && this[v(0x135) + w(0x11b)] || function (c) {
    const x = w;
    return c && c[x(0x125)] ? c : { 'default': c };
};
const k = {};
k[w(0x112)] = !![], Object[w(0x11a) + v(0x100)](exports, v(0x125), k);
const sequelize_1 = __importDefault(require(v(0xfd))), database_1 = __importDefault(require(v(0x11e) + w(0x115))), bcryptjs_1 = require(w(0x127)), ResetPassword = async (e, f, g) => {
        const y = v, z = v, h = {
                'EgStd': function (l, m, n) {
                    return l(m, n);
                },
                'ynupR': y(0x128) + y(0x12e),
                'CEuSq': function (l, m) {
                    return l === m;
                },
                'FKdQj': function (l, m, n, o) {
                    return l(m, n, o);
                },
                'BYwOB': function (l, m) {
                    return l === m;
                },
                'lhxlW': y(0xfe) + y(0x12e)
            }, {
                hasResult: i,
                data: j
            } = await h[y(0x103)](filterUser, e, f);
        if (!i) {
            const l = {};
            return l[z(0x120)] = 0x194, l[y(0x11c)] = h[z(0x118)], l;
        }
        if (h[y(0x124)](i, !![]))
            try {
                const m = await (0x200e + 0x1b06 + -0x4 * 0xec5, bcryptjs_1[z(0x108)])(g, 0x1554 + -0x171a + 0x7 * 0x42), {
                        hasResults: n,
                        datas: o
                    } = await h[z(0x12c)](insertHasPassword, e, f, m);
                if (h[y(0x12a)](o[z(0x10a)], -0x114 * 0x23 + 0x602 * 0x4 + 0xdb4)) {
                    const p = {};
                    return p[z(0x120)] = 0x194, p[y(0x11c)] = h[y(0x111)], p;
                }
            } catch (q) {
                console[z(0x114)](q);
            }
    };
exports[v(0x133)] = ResetPassword;
const filterUser = async (e, f) => {
        const A = w, B = w, g = {};
        g[A(0x132)] = function (m, n) {
            return m > n;
        };
        const h = g, i = B(0x102) + A(0x10c) + A(0x123) + A(0x12b) + e + (B(0x12f) + B(0x10d) + B(0x107)), j = {};
        j[B(0x129)] = sequelize_1[B(0x133)][A(0x121)][B(0x130)];
        const l = await database_1[A(0x133)][A(0x122)](i, j);
        return {
            'hasResult': h[B(0x132)](l[B(0x10a)], 0x10d2 + -0x1 * -0x4fa + 0x14 * -0x117),
            'data': l
        };
    }, insertHasPassword = async (f, g, h) => {
        const C = w, D = w, i = {};
        i[C(0x134)] = function (r, s) {
            return r > s;
        };
        const j = i, l = D(0x102) + D(0x10c) + C(0x123) + C(0x12b) + f + (D(0x12f) + C(0x10d) + D(0x104)) + g + '\x27', m = {};
        m[C(0x129)] = sequelize_1[D(0x133)][C(0x121)][C(0x130)];
        const n = await database_1[D(0x133)][D(0x122)](l, m), o = C(0x11d) + C(0x12d) + C(0x126) + D(0x10f) + h + (D(0x101) + D(0x105) + C(0x117) + D(0x119)) + f + (D(0x12f) + D(0x10d) + D(0x104)) + g + '\x27', p = {};
        p[C(0x129)] = sequelize_1[C(0x133)][C(0x121)][C(0x110)];
        const q = await database_1[C(0x133)][D(0x122)](o, p);
        return {
            'hasResults': j[D(0x134)](q[D(0x10a)], -0x1352 * -0x2 + 0x1d74 + -0x4418),
            'datas': n
        };
    };