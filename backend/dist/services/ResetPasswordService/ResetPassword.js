'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x9a)) / (0x1 * 0x2383 + -0xa09 + 0x1979 * -0x1) * (-parseInt(u(0x80)) / (-0x286 + 0x144c + 0x3 * -0x5ec)) + -parseInt(t(0x86)) / (0x1d52 + -0x1f9e + 0x24f) * (-parseInt(t(0x83)) / (0x2f4 + -0xe3f * -0x1 + -0x35 * 0x53)) + -parseInt(t(0x81)) / (-0x1 * -0x1163 + -0x1 * -0xfbb + -0x2119) * (-parseInt(u(0xa2)) / (0x245 + -0x5f * -0x46 + -0x1c39)) + parseInt(t(0x7e)) / (-0x25c * -0xc + 0x59 * 0x35 + 0x7c9 * -0x6) * (-parseInt(u(0x9d)) / (-0x2e2 + 0x160f + 0x1325 * -0x1)) + parseInt(t(0xa4)) / (0xe36 + 0x24c3 + 0x10 * -0x32f) + parseInt(u(0x92)) / (0x3 * -0x6bb + -0x1698 * 0x1 + 0x2ad3 * 0x1) * (parseInt(t(0xaa)) / (0x21cb + -0xb89 + -0x1637 * 0x1)) + parseInt(t(0xa3)) / (-0xb25 + 0x740 * 0x2 + -0xb * 0x4d) * (-parseInt(u(0x9f)) / (-0x2114 + -0x2113 + -0x13 * -0x37c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x9c6d3 + 0xa8581 * -0x1 + 0x89af3));
var __importDefault = this && this[v(0x7b) + v(0xab)] || function (c) {
    const x = v;
    return c && c[x(0x82)] ? c : { 'default': c };
};
const k = {};
k[w(0x78)] = !![], Object[v(0xae) + w(0x7f)](exports, v(0x82), k);
function a() {
    const E = [
        'sers\x22\x20\x20SET',
        '5694186ZgfMBW',
        '1781244zNjGmS',
        '8011098VhAJeh',
        '\x22\x20!=\x20\x27\x27',
        'Password\x22\x20',
        'SELECT',
        'log',
        'cBwpJ',
        '194645pDlmJP',
        'fault',
        '\x27\x20AND\x20\x22res',
        'encontrado',
        'defineProp',
        'UPDATE',
        'length',
        '\x20email=\x20\x27',
        'base',
        'wYidR',
        'value',
        'default',
        '\x20\x22password',
        '__importDe',
        'Hash\x22=\x20\x27',
        'tReRm',
        '1939kThZHZ',
        'erty',
        '11590tAyfvK',
        '5AtLhYS',
        '__esModule',
        '4WYpebp',
        'kDrpa',
        '=\x20\x27\x27\x20WHERE',
        '1048695akGbOn',
        'Email\x20não\x20',
        'SELECT\x20*\x20F',
        'Token\x20não\x20',
        'bcryptjs',
        '\x22\x20\x20WHERE\x20e',
        'ROM\x20\x22Users',
        'NQSik',
        'QueryTypes',
        'mail\x20=\x20\x27',
        'wQZmA',
        '../../data',
        '410vMhWJP',
        'hash',
        '\x22\x20=\x20\x27',
        'status',
        '\x27\x20,\x20\x22reset',
        'KACwK',
        'query',
        'UPDATE\x20\x20\x22U',
        '23CAknCz',
        'sequelize',
        'etPassword',
        '22568mnjxVf',
        'message',
        '130LeQCwz',
        'type'
    ];
    a = function () {
        return E;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1246 * 0x1 + -0x1 * -0x475 + 0xe45);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = __importDefault(require(v(0x9b))), database_1 = __importDefault(require(v(0x91) + w(0x76))), bcryptjs_1 = require(v(0x8a)), ResetPassword = async (e, f, g) => {
        const y = w, z = w, h = {
                'tReRm': function (l, m, n) {
                    return l(m, n);
                },
                'KACwK': y(0x87) + y(0xad),
                'cBwpJ': function (l, m) {
                    return l === m;
                },
                'kDrpa': function (l, m, n, o) {
                    return l(m, n, o);
                },
                'wQZmA': z(0x89) + y(0xad)
            }, {
                hasResult: i,
                data: j
            } = await h[y(0x7d)](filterUser, e, f);
        if (!i) {
            const l = {};
            return l[y(0x95)] = 0x194, l[y(0x9e)] = h[z(0x97)], l;
        }
        if (h[z(0xa9)](i, !![]))
            try {
                const m = await (-0x8bb + -0x1 * -0x1b20 + -0x11 * 0x115, bcryptjs_1[z(0x93)])(g, -0x10a0 + 0x1 * -0x3e5 + 0x148d), {
                        hasResults: n,
                        datas: o
                    } = await h[y(0x84)](insertHasPassword, e, f, m);
                if (h[y(0xa9)](o[y(0x74)], -0x1 * 0xc47 + 0x2251 + -0x1 * 0x160a)) {
                    const p = {};
                    return p[y(0x95)] = 0x194, p[z(0x9e)] = h[z(0x90)], p;
                }
            } catch (q) {
                console[y(0xa8)](q);
            }
    };
exports[w(0x79)] = ResetPassword;
const filterUser = async (e, f) => {
        const A = v, B = v, g = {};
        g[A(0x8d)] = function (m, n) {
            return m > n;
        };
        const h = g, i = A(0x88) + B(0x8c) + B(0x8b) + B(0x8f) + e + (A(0xac) + A(0x9c) + B(0xa5)), j = {};
        j[B(0xa0)] = sequelize_1[A(0x79)][A(0x8e)][A(0xa7)];
        const l = await database_1[B(0x79)][B(0x98)](i, j);
        return {
            'hasResult': h[B(0x8d)](l[B(0x74)], 0x5c8 * 0x2 + -0x11ce + 0x63e),
            'data': l
        };
    }, insertHasPassword = async (f, g, h) => {
        const C = w, D = w, i = {};
        i[C(0x77)] = function (r, s) {
            return r > s;
        };
        const j = i, l = D(0x88) + D(0x8c) + D(0x8b) + D(0x8f) + f + (C(0xac) + C(0x9c) + C(0x94)) + g + '\x27', m = {};
        m[D(0xa0)] = sequelize_1[D(0x79)][C(0x8e)][C(0xa7)];
        const n = await database_1[D(0x79)][D(0x98)](l, m), o = D(0x99) + D(0xa1) + C(0x7a) + C(0x7c) + h + (C(0x96) + C(0xa6) + C(0x85) + C(0x75)) + f + (C(0xac) + C(0x9c) + D(0x94)) + g + '\x27', p = {};
        p[C(0xa0)] = sequelize_1[C(0x79)][D(0x8e)][D(0xaf)];
        const q = await database_1[D(0x79)][C(0x98)](o, p);
        return {
            'hasResults': j[D(0x77)](q[C(0x74)], -0x136 + 0x1942 + -0x180c),
            'datas': n
        };
    };