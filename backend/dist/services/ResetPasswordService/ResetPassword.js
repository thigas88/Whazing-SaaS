'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x1d6)) / (-0x17b5 + 0x3 * 0x8c5 + -0x299) * (parseInt(u(0x1eb)) / (-0x774 + 0x109 * -0x1 + 0x87f)) + -parseInt(u(0x1cb)) / (-0xe1f + 0x12df * -0x1 + 0x2101) + parseInt(u(0x1f4)) / (0x53 * 0x71 + 0x1a73 + 0x702 * -0x9) * (-parseInt(t(0x1de)) / (0x20f9 + 0x2290 + -0x4384)) + -parseInt(u(0x1d0)) / (0x20d8 * 0x1 + 0x1a2e + 0x76 * -0x80) + parseInt(u(0x1e1)) / (-0x1857 + -0x10 * -0x20d + -0x439 * 0x2) * (-parseInt(t(0x1dd)) / (-0x1d77 + -0x1 * -0x703 + 0x167c)) + parseInt(t(0x1f6)) / (-0x481 + -0xf24 + 0x16 * 0xe5) + parseInt(t(0x200)) / (-0x2136 + -0x1 * -0x1f7b + 0x97 * 0x3) * (parseInt(u(0x1dc)) / (0x1552 + 0x3f1 * 0x1 + -0x1 * 0x1938));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x14b439 + -0x36f2c + 0x1720 * 0x19f));
var __importDefault = this && this[v(0x1d4) + w(0x1cf)] || function (c) {
    const x = v;
    return c && c[x(0x1f9)] ? c : { 'default': c };
};
const k = {};
k[w(0x1f1)] = !![], Object[v(0x1db) + w(0x1e3)](exports, v(0x1f9), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xe62 + 0x2564 * 0x1 + -0x31fd);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const E = [
        'rPgGF',
        '178MqzGPw',
        '=\x20\x27\x27\x20WHERE',
        'sers\x22\x20\x20SET',
        'sequelize',
        'RyqOZ',
        'ROM\x20\x22Users',
        'value',
        'UPDATE\x20\x20\x22U',
        '\x22\x20=\x20\x27',
        '100fYVFUx',
        '\x20\x22password',
        '105372gcHAOB',
        'Token\x20não\x20',
        'mail\x20=\x20\x27',
        '__esModule',
        'UyxXm',
        'base',
        'Email\x20não\x20',
        'nGpaA',
        'QueryTypes',
        'SELECT',
        '1924990WMqUzt',
        'Hash\x22=\x20\x27',
        '\x27\x20,\x20\x22reset',
        '../../data',
        'type',
        '\x22\x20\x20WHERE\x20e',
        '822246kaqqmT',
        '\x27\x20AND\x20\x22res',
        'UPDATE',
        'length',
        'fault',
        '8542584seMPgG',
        'message',
        'query',
        '\x22\x20!=\x20\x27\x27',
        '__importDe',
        'status',
        '4435JTxyNo',
        'hash',
        '\x20email=\x20\x27',
        'bcryptjs',
        'JXEwe',
        'defineProp',
        '253hWNNOj',
        '437384kJgaUp',
        '200740JsXjow',
        'NsOqm',
        'etPassword',
        '161zLYNVf',
        'log',
        'erty',
        'default',
        'Password\x22\x20',
        'encontrado',
        'SELECT\x20*\x20F',
        'zudFI',
        'tDxGV'
    ];
    a = function () {
        return E;
    };
    return a();
}
const sequelize_1 = __importDefault(require(v(0x1ee))), database_1 = __importDefault(require(w(0x203) + v(0x1fb))), bcryptjs_1 = require(v(0x1d9)), ResetPassword = async (e, f, g) => {
        const y = v, z = w, h = {
                'nGpaA': function (l, m, n) {
                    return l(m, n);
                },
                'NsOqm': y(0x1fc) + y(0x1e6),
                'UyxXm': function (l, m) {
                    return l === m;
                },
                'JXEwe': function (l, m, n, o) {
                    return l(m, n, o);
                },
                'rPgGF': function (l, m) {
                    return l === m;
                },
                'RyqOZ': y(0x1f7) + y(0x1e6)
            }, {
                hasResult: i,
                data: j
            } = await h[y(0x1fd)](filterUser, e, f);
        if (!i) {
            const l = {};
            return l[z(0x1d5)] = 0x194, l[y(0x1d1)] = h[z(0x1df)], l;
        }
        if (h[z(0x1fa)](i, !![]))
            try {
                const m = await (-0x16f * 0x3 + 0x5c * 0x3d + -0x15b * 0xd, bcryptjs_1[y(0x1d7)])(g, -0xa37 + 0x8fa * -0x1 + 0x25 * 0x85), {
                        hasResults: n,
                        datas: o
                    } = await h[z(0x1da)](insertHasPassword, e, f, m);
                if (h[z(0x1ea)](o[y(0x1ce)], 0x16b1 + 0x190a + -0x2fbb * 0x1)) {
                    const p = {};
                    return p[z(0x1d5)] = 0x194, p[y(0x1d1)] = h[z(0x1ef)], p;
                }
            } catch (q) {
                console[y(0x1e2)](q);
            }
    };
exports[w(0x1e4)] = ResetPassword;
const filterUser = async (e, f) => {
        const A = v, B = v, g = {};
        g[A(0x1e8)] = function (m, n) {
            return m > n;
        };
        const h = g, i = A(0x1e7) + B(0x1f0) + B(0x1ca) + A(0x1f8) + e + (A(0x1cc) + B(0x1e0) + B(0x1d3)), j = {};
        j[A(0x1c9)] = sequelize_1[B(0x1e4)][B(0x1fe)][B(0x1ff)];
        const l = await database_1[A(0x1e4)][B(0x1d2)](i, j);
        return {
            'hasResult': h[B(0x1e8)](l[A(0x1ce)], -0x77 * 0x14 + -0x2 * 0xe1b + -0x1 * -0x2582),
            'data': l
        };
    }, insertHasPassword = async (f, g, h) => {
        const C = v, D = v, i = {};
        i[C(0x1e9)] = function (r, s) {
            return r > s;
        };
        const j = i, l = C(0x1e7) + C(0x1f0) + C(0x1ca) + D(0x1f8) + f + (D(0x1cc) + C(0x1e0) + C(0x1f3)) + g + '\x27', m = {};
        m[D(0x1c9)] = sequelize_1[C(0x1e4)][D(0x1fe)][C(0x1ff)];
        const n = await database_1[C(0x1e4)][D(0x1d2)](l, m), o = C(0x1f2) + D(0x1ed) + D(0x1f5) + C(0x201) + h + (D(0x202) + C(0x1e5) + C(0x1ec) + C(0x1d8)) + f + (C(0x1cc) + C(0x1e0) + D(0x1f3)) + g + '\x27', p = {};
        p[C(0x1c9)] = sequelize_1[C(0x1e4)][D(0x1fe)][D(0x1cd)];
        const q = await database_1[D(0x1e4)][D(0x1d2)](o, p);
        return {
            'hasResults': j[D(0x1e9)](q[C(0x1ce)], 0x15b1 + 0x47 * -0x1 + -0x1 * 0x156a),
            'datas': n
        };
    };