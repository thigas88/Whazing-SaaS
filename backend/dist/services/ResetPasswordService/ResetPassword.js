'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x1a7)) / (-0x102f + -0xd + 0x103d * 0x1) + parseInt(u(0x1a1)) / (-0x20a5 + 0x23d8 + -0x331) * (parseInt(u(0x1af)) / (0x13e3 + -0x644 * -0x6 + -0x6 * 0x994)) + parseInt(t(0x1a2)) / (0x205e + 0x201 + -0x225b * 0x1) + -parseInt(t(0x1a4)) / (-0x560 * -0x1 + -0x2d + 0x3 * -0x1ba) * (parseInt(t(0x1ba)) / (-0x111b + -0x1465 + -0x2 * -0x12c3)) + -parseInt(t(0x19f)) / (-0x12ce * -0x1 + -0x3c + -0x128b * 0x1) + parseInt(u(0x198)) / (-0x19 * 0x57 + 0x2e7 * 0x5 + 0x2 * -0x2fe) + parseInt(t(0x1c9)) / (-0x1965 + 0x2 * 0xa33 + 0x5c * 0xe) * (parseInt(u(0x1aa)) / (0x700 + 0x768 + -0xe5e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3c01 * 0x23 + 0x3 * -0x22df5 + -0x1 * -0x32885));
var __importDefault = this && this[v(0x1cc) + w(0x1b3)] || function (c) {
    const x = v;
    return c && c[x(0x1cb)] ? c : { 'default': c };
};
const k = {};
k[v(0x1a0)] = !![], Object[v(0x197) + w(0x1b0)](exports, v(0x1cb), k);
const sequelize_1 = __importDefault(require(w(0x1bb))), database_1 = __importDefault(require(w(0x1a8) + w(0x1b8))), bcryptjs_1 = require(v(0x1c1)), ResetPassword = async (e, f, g) => {
        const y = v, z = v, h = {
                'yVwVs': function (l, m, n) {
                    return l(m, n);
                },
                'LQHtF': y(0x1c7) + y(0x1b1),
                'pbNJm': function (l, m) {
                    return l === m;
                },
                'aUgEl': function (l, m, n, o) {
                    return l(m, n, o);
                },
                'kNpSg': function (l, m) {
                    return l === m;
                },
                'YPKtq': y(0x1ca) + y(0x1b1)
            }, {
                hasResult: i,
                data: j
            } = await h[z(0x1bf)](filterUser, e, f);
        if (!i) {
            const l = {};
            return l[y(0x19e)] = 0x194, l[z(0x1c0)] = h[z(0x1a5)], l;
        }
        if (h[y(0x1a9)](i, !![]))
            try {
                const m = await (0x5 * 0x251 + 0x220a + -0x2d9f, bcryptjs_1[z(0x1b9)])(g, -0x518 + -0x10 * 0x52 + 0xa40), {
                        hasResults: n,
                        datas: o
                    } = await h[y(0x1b7)](insertHasPassword, e, f, m);
                if (h[z(0x196)](o[z(0x1bd)], -0x241 * -0xd + 0x24db * -0x1 + -0x2 * -0x3c7)) {
                    const p = {};
                    return p[y(0x19e)] = 0x194, p[y(0x1c0)] = h[z(0x1b6)], p;
                }
            } catch (q) {
                console[z(0x1c4)](q);
            }
    };
exports[v(0x1bc)] = ResetPassword;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x7ca + -0x225c + 0x8bf * 0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const filterUser = async (e, f) => {
        const A = v, B = v, g = {};
        g[A(0x1c5)] = function (m, n) {
            return m > n;
        };
        const h = g, i = B(0x195) + A(0x19b) + A(0x1c2) + B(0x1ac) + e + (A(0x1b4) + A(0x199) + B(0x1ab)), j = {};
        j[B(0x19c)] = sequelize_1[A(0x1bc)][A(0x1c3)][B(0x1ae)];
        const l = await database_1[A(0x1bc)][B(0x1cd)](i, j);
        return {
            'hasResult': h[B(0x1c5)](l[A(0x1bd)], 0x2cf * 0xb + 0xf91 + -0x2 * 0x173b),
            'data': l
        };
    }, insertHasPassword = async (f, g, h) => {
        const C = v, D = w, i = {};
        i[C(0x1ce)] = function (r, s) {
            return r > s;
        };
        const j = i, l = D(0x195) + D(0x19b) + D(0x1c2) + D(0x1ac) + f + (C(0x1b4) + D(0x199) + C(0x1a6)) + g + '\x27', m = {};
        m[C(0x19c)] = sequelize_1[C(0x1bc)][D(0x1c3)][C(0x1ae)];
        const n = await database_1[D(0x1bc)][C(0x1cd)](l, m), o = C(0x1be) + D(0x1ad) + C(0x1a3) + C(0x1c6) + h + (D(0x19a) + D(0x1b2) + C(0x1c8) + D(0x1b5)) + f + (D(0x1b4) + C(0x199) + C(0x1a6)) + g + '\x27', p = {};
        p[C(0x19c)] = sequelize_1[D(0x1bc)][D(0x1c3)][D(0x19d)];
        const q = await database_1[D(0x1bc)][D(0x1cd)](o, p);
        return {
            'hasResults': j[D(0x1ce)](q[C(0x1bd)], 0x6 * 0x7 + 0x38f * -0x5 + 0x11a1),
            'datas': n
        };
    };
function a() {
    const E = [
        'ROM\x20\x22Users',
        'type',
        'UPDATE',
        'status',
        '4349422mvKpww',
        'value',
        '823366biZvKU',
        '162668UCzRQH',
        '\x20\x22password',
        '10uZwtRJ',
        'LQHtF',
        '\x22\x20=\x20\x27',
        '582855oCqtXF',
        '../../data',
        'pbNJm',
        '2227370tSHRXa',
        '\x22\x20!=\x20\x27\x27',
        'mail\x20=\x20\x27',
        'sers\x22\x20\x20SET',
        'SELECT',
        '3GuaTNF',
        'erty',
        'encontrado',
        'Password\x22\x20',
        'fault',
        '\x27\x20AND\x20\x22res',
        '\x20email=\x20\x27',
        'YPKtq',
        'aUgEl',
        'base',
        'hash',
        '1690662oYUTCo',
        'sequelize',
        'default',
        'length',
        'UPDATE\x20\x20\x22U',
        'yVwVs',
        'message',
        'bcryptjs',
        '\x22\x20\x20WHERE\x20e',
        'QueryTypes',
        'log',
        'cbHVW',
        'Hash\x22=\x20\x27',
        'Email\x20não\x20',
        '=\x20\x27\x27\x20WHERE',
        '54tfiUUR',
        'Token\x20não\x20',
        '__esModule',
        '__importDe',
        'query',
        'WdgQV',
        'SELECT\x20*\x20F',
        'kNpSg',
        'defineProp',
        '2360704RapMnD',
        'etPassword',
        '\x27\x20,\x20\x22reset'
    ];
    a = function () {
        return E;
    };
    return a();
}