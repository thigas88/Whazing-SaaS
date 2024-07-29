'use strict';
function a() {
    const E = [
        'cNSJI',
        'sers\x22\x20\x20SET',
        'status',
        '8094SLktFf',
        'type',
        'query',
        'defineProp',
        'cjbYK',
        'encontrado',
        '\x22\x20\x20WHERE\x20e',
        '248544VQFVww',
        'length',
        'log',
        '../../data',
        '\x20email=\x20\x27',
        'erty',
        'pkWUm',
        '\x27\x20,\x20\x22reset',
        'Email\x20não\x20',
        'base',
        '__importDe',
        '145nDHxbq',
        'SELECT',
        '\x22\x20=\x20\x27',
        '5154264FXQkbB',
        'iBWAQ',
        '\x20\x22password',
        'mmEcF',
        '963shOdvL',
        'sequelize',
        'value',
        'ROM\x20\x22Users',
        '5736204ormfZv',
        '__esModule',
        '8792371INsbme',
        '\x27\x20AND\x20\x22res',
        'default',
        'Token\x20não\x20',
        '226YsMbHo',
        'mail\x20=\x20\x27',
        'HPzOR',
        'UPDATE',
        'message',
        'QueryTypes',
        'bcryptjs',
        'HhOLd',
        '4131296diBudE',
        'UPDATE\x20\x20\x22U',
        'Password\x22\x20',
        '=\x20\x27\x27\x20WHERE',
        'hash',
        '90110DLmjSO',
        'SELECT\x20*\x20F',
        'etPassword',
        'Hash\x22=\x20\x27',
        'fault',
        '\x22\x20!=\x20\x27\x27'
    ];
    a = function () {
        return E;
    };
    return a();
}
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x1f2)) / (0x25f * 0xa + -0x1d46 + -0x1 * -0x591) * (parseInt(t(0x215)) / (0x24b7 + 0x60b + -0x2ac0)) + -parseInt(u(0x20f)) / (0xf83 + -0x2f5 + -0xc8b) + parseInt(t(0x1e4)) / (-0x2 * 0x6e6 + -0x74b * -0x5 + -0x16a7) + parseInt(t(0x204)) / (0x234b + -0x187c + 0x2 * -0x565) * (parseInt(u(0x1f9)) / (0x3 * 0xa11 + -0x1579 + -0x8b4)) + parseInt(u(0x211)) / (-0xd * -0x267 + 0xf1 * -0x3 + -0x1c61) + -parseInt(u(0x207)) / (-0x2149 + -0x768 + -0x19 * -0x1a1) + -parseInt(u(0x20b)) / (0x4 * 0x203 + -0x10cc + 0x8c9) * (-parseInt(t(0x1e9)) / (-0x6b3 + 0x153c + -0xe7f * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x11 * -0x17e31 + -0xe03e * 0xb + 0x32053c));
var __importDefault = this && this[v(0x203) + w(0x1ed)] || function (c) {
    const x = v;
    return c && c[x(0x210)] ? c : { 'default': c };
};
const k = {};
k[w(0x20d)] = !![], Object[w(0x1f5) + w(0x1fe)](exports, v(0x210), k);
const sequelize_1 = __importDefault(require(v(0x20c))), database_1 = __importDefault(require(v(0x1fc) + w(0x202))), bcryptjs_1 = require(w(0x1e2)), ResetPassword = async (e, f, g) => {
        const y = w, z = v, h = {
                'cjbYK': function (l, m, n) {
                    return l(m, n);
                },
                'HhOLd': y(0x201) + y(0x1f7),
                'cNSJI': function (l, m) {
                    return l === m;
                },
                'pkWUm': function (l, m, n, o) {
                    return l(m, n, o);
                },
                'mmEcF': y(0x214) + z(0x1f7)
            }, {
                hasResult: i,
                data: j
            } = await h[y(0x1f6)](filterUser, e, f);
        if (!i) {
            const l = {};
            return l[y(0x1f1)] = 0x194, l[y(0x1e0)] = h[z(0x1e3)], l;
        }
        if (h[z(0x1ef)](i, !![]))
            try {
                const m = await (-0x2e7 * -0xb + 0x83f * 0x2 + -0x306b, bcryptjs_1[z(0x1e8)])(g, 0x1 * 0x14bc + -0x2ba * -0x1 + 0x176e * -0x1), {
                        hasResults: n,
                        datas: o
                    } = await h[z(0x1ff)](insertHasPassword, e, f, m);
                if (h[z(0x1ef)](o[y(0x1fa)], -0x2 * -0x70f + -0x1a57 + 0x413 * 0x3)) {
                    const p = {};
                    return p[y(0x1f1)] = 0x194, p[y(0x1e0)] = h[y(0x20a)], p;
                }
            } catch (q) {
                console[z(0x1fb)](q);
            }
    };
exports[w(0x213)] = ResetPassword;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2058 + -0x483 + 0x26b9);
        let h = e[f];
        return h;
    }, b(c, d);
}
const filterUser = async (e, f) => {
        const A = v, B = w, g = {};
        g[A(0x208)] = function (m, n) {
            return m > n;
        };
        const h = g, i = B(0x1ea) + A(0x20e) + B(0x1f8) + B(0x216) + e + (B(0x212) + B(0x1eb) + B(0x1ee)), j = {};
        j[A(0x1f3)] = sequelize_1[A(0x213)][B(0x1e1)][A(0x205)];
        const l = await database_1[B(0x213)][B(0x1f4)](i, j);
        return {
            'hasResult': h[A(0x208)](l[A(0x1fa)], -0x17 * -0x27 + 0xfa2 * 0x2 + -0x22c5),
            'data': l
        };
    }, insertHasPassword = async (f, g, h) => {
        const C = v, D = v, i = {};
        i[C(0x1de)] = function (r, s) {
            return r > s;
        };
        const j = i, l = D(0x1ea) + C(0x20e) + C(0x1f8) + D(0x216) + f + (C(0x212) + D(0x1eb) + D(0x206)) + g + '\x27', m = {};
        m[C(0x1f3)] = sequelize_1[D(0x213)][C(0x1e1)][C(0x205)];
        const n = await database_1[C(0x213)][D(0x1f4)](l, m), o = C(0x1e5) + C(0x1f0) + D(0x209) + D(0x1ec) + h + (C(0x200) + D(0x1e6) + C(0x1e7) + D(0x1fd)) + f + (D(0x212) + D(0x1eb) + D(0x206)) + g + '\x27', p = {};
        p[C(0x1f3)] = sequelize_1[C(0x213)][D(0x1e1)][D(0x1df)];
        const q = await database_1[D(0x213)][C(0x1f4)](o, p);
        return {
            'hasResults': j[D(0x1de)](q[C(0x1fa)], -0xb1 * 0x9 + -0x11 * 0x150 + 0x1 * 0x1c89),
            'datas': n
        };
    };