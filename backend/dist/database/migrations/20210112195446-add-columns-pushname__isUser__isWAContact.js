'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x9e)) / (0x1c51 + 0x263c + -0x428c) * (-parseInt(r(0x93)) / (-0x24c0 + -0x1ee0 + 0x2 * 0x21d1)) + -parseInt(s(0xa6)) / (-0x18f2 + 0x254 * -0x5 + 0x2499) + parseInt(s(0x96)) / (0x4 * -0x383 + -0x703 + 0xd * 0x19f) * (parseInt(s(0xa7)) / (-0x1 * 0x170f + -0x3 * 0x1a3 + 0x1bfd)) + -parseInt(r(0x99)) / (0xb05 * -0x1 + 0x23f0 + -0x18e5) * (parseInt(r(0x9c)) / (0x21e0 + -0x1 * -0x1d3 + 0x8eb * -0x4)) + parseInt(s(0x90)) / (-0x26b9 + -0x1 * 0xd81 + 0x3442) + -parseInt(r(0x9a)) / (0x4d7 * -0x2 + -0x2188 + 0x1 * 0x2b3f) + -parseInt(s(0xa2)) / (0x1c6c + -0x2565 + -0x1 * -0x903) * (-parseInt(r(0xa3)) / (0xb + -0x116f + 0x116f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8 * -0x37d + 0x35d11 + -0x10a1 * -0x79));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x24b9 + 0x20 * -0x8d + -0x108 * 0x12);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = {};
q[t(0xae)] = !![], Object[u(0x8e) + u(0x89)](exports, u(0xad), q);
const sequelize_1 = require(u(0x8c));
function a() {
    const z = [
        'prnXJ',
        'defineProp',
        'removeColu',
        '3083456VIuVei',
        'DVIde',
        'sMXVD',
        '6ANAvXX',
        'isUser',
        'DataTypes',
        '1800JyXgoD',
        'defaultVal',
        'Contacts',
        '12rybhPm',
        '10375650zDhzsr',
        'UCZzP',
        '1621718BSSWkr',
        'all',
        '192481cDolwI',
        'pushname',
        'STRING',
        'addColumn',
        '106010YJJqtG',
        '2519MifwKa',
        'exports',
        'kaSWN',
        '3037302wHlKKh',
        '12460Vvyygl',
        'UsaeS',
        'type',
        'isWAContac',
        'allowNull',
        'bKOBB',
        '__esModule',
        'value',
        'erty',
        'KvJKm',
        'BOOLEAN',
        'sequelize'
    ];
    a = function () {
        return z;
    };
    return a();
}
module[t(0xa4)] = {
    'up': g => {
        const v = u, w = u, h = {};
        h[v(0x91)] = v(0x98), h[v(0x8a)] = v(0x9f), h[w(0xa8)] = v(0x94), h[w(0xac)] = w(0xaa) + 't';
        const i = h, j = {};
        j[w(0xa9)] = sequelize_1[w(0x95)][v(0xa0)], j[v(0xab)] = !![], j[v(0x97) + 'ue'] = null;
        const k = {};
        k[v(0xa9)] = sequelize_1[v(0x95)][w(0x8b)], k[w(0xab)] = !![], k[w(0x97) + 'ue'] = null;
        const l = {};
        return l[w(0xa9)] = sequelize_1[v(0x95)][w(0x8b)], l[w(0xab)] = !![], l[v(0x97) + 'ue'] = null, Promise[w(0x9d)]([
            g[w(0xa1)](i[w(0x91)], i[w(0x8a)], j),
            g[v(0xa1)](i[w(0x91)], i[w(0xa8)], k),
            g[w(0xa1)](i[v(0x91)], i[w(0xac)], l)
        ]);
    },
    'down': d => {
        const x = t, y = t, e = {};
        e[x(0xa5)] = y(0x98), e[x(0x8d)] = x(0x9f), e[y(0x92)] = x(0x94), e[x(0x9b)] = y(0xaa) + 't';
        const f = e;
        return Promise[x(0x9d)]([
            d[x(0x8f) + 'mn'](f[x(0xa5)], f[x(0x8d)]),
            d[x(0x8f) + 'mn'](f[x(0xa5)], f[x(0x92)]),
            d[y(0x8f) + 'mn'](f[y(0xa5)], f[x(0x9b)])
        ]);
    }
};