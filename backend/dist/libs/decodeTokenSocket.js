'use strict';
const A = b, B = b;
(function (c, d) {
    const y = b, z = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(y(0x153)) / (0x1390 + -0x129c + 0x1 * -0xf3) + parseInt(z(0x156)) / (-0x709 * 0x5 + -0x968 + 0xf * 0x2f9) + -parseInt(y(0x15d)) / (0x15fb + 0x25b2 + -0x3baa) + -parseInt(z(0x16a)) / (-0x1886 + 0x1 * 0x207b + -0x1 * 0x7f1) * (-parseInt(z(0x16b)) / (0x43 * 0x25 + -0x110a + 0x760)) + parseInt(y(0x173)) / (0x20e5 + -0x159a + -0xb45) * (parseInt(z(0x167)) / (-0x24f5 + 0x55b + 0xa8b * 0x3)) + parseInt(y(0x162)) / (-0x1 * 0x1a4f + -0x10c6 + 0x2b1d) + -parseInt(y(0x150)) / (0x4 * 0x660 + -0x31f + 0x8 * -0x2cb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4b4c * 0xa + 0x26f5 * 0x5 + -0x3f3f6 * -0x1));
var __importDefault = this && this[A(0x16c) + A(0x154)] || function (c) {
    const C = A;
    return c && c[C(0x14f)] ? c : { 'default': c };
};
const x = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1a4d * -0x1 + -0x23be + 0xabc);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const F = [
        'verify',
        '../utils/l',
        'psWgs',
        '395008nfxVVk',
        'provided',
        'UKoML',
        '../config/',
        'wSAye',
        '693reGSUu',
        'oPRug',
        'JpcKn',
        '150940yUIHdj',
        '20HTTgSy',
        '__importDe',
        'profile',
        'default',
        'defineProp',
        'logger',
        'jsonwebtok',
        'BlzSn',
        '12564bEudzs',
        'Owofx',
        'isValid',
        'dAWXl',
        'data',
        'value',
        'ogger',
        'secret',
        '__esModule',
        '655308vrVJHe',
        'Token\x20not\x20',
        'vaHGX',
        '99924tyrFEl',
        'fault',
        'auth',
        '136014qlkldT',
        'tQGQh',
        'error',
        'praxB',
        'WtQxC',
        'GZCNn',
        'tenantId',
        '560178BgZyxn',
        'erty'
    ];
    a = function () {
        return F;
    };
    return a();
}
x[A(0x14c)] = !![], Object[A(0x16f) + B(0x15e)](exports, A(0x14f), x);
const jsonwebtoken_1 = require(B(0x171) + 'en'), auth_1 = __importDefault(require(B(0x165) + B(0x155))), logger_1 = require(B(0x160) + A(0x14d)), decode = g => {
        const D = A, E = B, h = {};
        h[D(0x174)] = D(0x151) + D(0x163), h[D(0x152)] = function (m, n) {
            return m !== n;
        }, h[E(0x161)] = D(0x166), h[E(0x172)] = function (m, n) {
            return m !== n;
        }, h[D(0x176)] = D(0x169), h[D(0x15a)] = E(0x157), h[E(0x168)] = E(0x15b), h[E(0x164)] = E(0x159);
        const i = h, j = {};
        j['id'] = '', j[D(0x16d)] = '', j[E(0x15c)] = 0x0;
        const k = {};
        k[D(0x175)] = ![], k[D(0x14b)] = j;
        const l = k;
        if (!g) {
            if (i[D(0x152)](i[E(0x161)], i[D(0x161)])) {
                const n = (-0x1a4 * 0x2 + 0x15ed + -0x12a5, h[D(0x15f)])(i, j[E(0x16e)][D(0x14e)]), {
                        id: o,
                        profile: p,
                        tenantId: q
                    } = n;
                k[D(0x175)] = !![];
                const r = {};
                r['id'] = o, r[D(0x16d)] = p, r[D(0x15c)] = q, l[E(0x14b)] = r;
            } else
                return logger_1[D(0x170)][E(0x158)](i[D(0x174)]), l;
        }
        try {
            if (i[E(0x172)](i[E(0x176)], i[D(0x15a)])) {
                const n = (-0x1339 + -0x2 * -0x1011 + -0x1 * 0xce9, jsonwebtoken_1[E(0x15f)])(g, auth_1[E(0x16e)][E(0x14e)]), {
                        id: o,
                        profile: p,
                        tenantId: q
                    } = n;
                l[D(0x175)] = !![];
                const r = {};
                r['id'] = o, r[D(0x16d)] = p, r[E(0x15c)] = q, l[D(0x14b)] = r;
            } else
                return k[D(0x170)][D(0x158)](i[D(0x174)]), f;
        } catch (t) {
            i[D(0x152)](i[D(0x168)], i[D(0x164)]) ? logger_1[E(0x170)][D(0x158)](t) : k[E(0x170)][D(0x158)](f);
        }
        return l;
    };
exports[B(0x16e)] = decode;