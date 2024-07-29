'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xad)) / (0x1fa * -0xb + 0x1 * -0x19cb + 0x2f8a) * (parseInt(r(0xb6)) / (0x217 * -0xa + -0x2d8 + 0x17c0)) + -parseInt(r(0xb0)) / (0x4 * -0x4bd + -0x137b + -0x57e * -0x7) * (-parseInt(s(0xb4)) / (-0x120c + -0x1 * -0x1cf + 0x3 * 0x56b)) + -parseInt(s(0xa7)) / (-0xed * 0x15 + -0xc05 + 0x1f7b) + -parseInt(r(0xaa)) / (-0x1699 + 0x1a4d + -0x3ae) + parseInt(r(0xa5)) / (0x27 * -0x76 + 0x7eb * 0x2 + -0xf * -0x25) * (-parseInt(s(0xa4)) / (-0x140d + -0x17d * -0x1a + -0x129d)) + parseInt(r(0xa0)) / (0x1db4 + -0xcde + -0x10cd) + parseInt(s(0xb1)) / (0x1 * 0x353 + -0x2658 + 0x19 * 0x167) * (parseInt(s(0xb9)) / (0x1a39 + -0xec9 + 0x1 * -0xb65));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1e7 * 0x1ca + 0x9 * 0x4261 + -0x34ffc));
const q = {};
q[t(0xbb)] = !![], Object[t(0xb8) + t(0xbd)](exports, t(0xae), q);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xdb8 + 0x3d * 0x5b + -0x22cf);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(u(0x9d));
function a() {
    const z = [
        'addColumn',
        'dZnQQ',
        'TEXT',
        '8064unnuiz',
        '1946NxiNfa',
        'DataTypes',
        '1000935QadmXT',
        'LwbEY',
        'QGzRZ',
        '1731156DPjpVt',
        'lHEkl',
        'allowNull',
        '7vimkGS',
        '__esModule',
        'defaultVal',
        '42lJSJee',
        '1629370zRdNLb',
        'Uoutt',
        'nhDVS',
        '32756swazmd',
        'Whatsapps',
        '26902jMzacC',
        'STRING',
        'defineProp',
        '44mONZNC',
        'WpIsu',
        'value',
        'wabaKeyHoo',
        'erty',
        'type',
        'all',
        'exports',
        'tokenAPI',
        'xfEXW',
        'sequelize',
        'wabaBSP',
        'removeColu',
        '2300391hZpXIl'
    ];
    a = function () {
        return z;
    };
    return a();
}
module[t(0x9a)] = {
    'up': g => {
        const v = u, w = u, h = {};
        h[v(0xab)] = v(0xb5), h[v(0xa8)] = v(0x9b), h[w(0x9c)] = w(0x9e), h[v(0xb2)] = w(0xbc) + 'k';
        const i = h, j = {};
        j[v(0x98)] = sequelize_1[v(0xa6)][w(0xa3)], j[v(0xac)] = !![], j[w(0xaf) + 'ue'] = null;
        const k = {};
        k[v(0x98)] = sequelize_1[w(0xa6)][v(0xb7)], k[v(0xac)] = !![], k[w(0xaf) + 'ue'] = null;
        const l = {};
        return l[w(0x98)] = sequelize_1[w(0xa6)][v(0xa3)], l[v(0xac)] = !![], l[w(0xaf) + 'ue'] = null, Promise[v(0x99)]([
            g[v(0xa1)](i[v(0xab)], i[w(0xa8)], j),
            g[v(0xa1)](i[w(0xab)], i[v(0x9c)], k),
            g[w(0xa1)](i[w(0xab)], i[w(0xb2)], l)
        ]);
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0xb3)] = y(0xb5), e[x(0xa2)] = x(0x9b), e[x(0xba)] = y(0x9e), e[x(0xa9)] = y(0xbc) + 'k';
        const f = e;
        return Promise[x(0x99)]([
            d[y(0x9f) + 'mn'](f[y(0xb3)], f[y(0xa2)]),
            d[x(0x9f) + 'mn'](f[y(0xb3)], f[x(0xba)]),
            d[x(0x9f) + 'mn'](f[y(0xb3)], f[x(0xa9)])
        ]);
    }
};