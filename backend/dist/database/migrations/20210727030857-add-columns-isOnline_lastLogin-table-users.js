'use strict';
const t = b, u = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x8d + 0x154f + -0x1467);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x197)) / (0x191f + 0x696 + -0x2 * 0xfda) + -parseInt(s(0x178)) / (-0xf7 + 0xffa * 0x1 + -0x17 * 0xa7) * (parseInt(r(0x18b)) / (0x2 * 0xf3a + 0x1d * -0x89 + -0xeec)) + parseInt(s(0x177)) / (-0x900 + 0x503 + 0x29 * 0x19) + -parseInt(r(0x17c)) / (-0x351 * 0x1 + 0x1 * 0x1a69 + -0x1713) * (parseInt(r(0x185)) / (-0x19ee * 0x1 + 0x1a52 + -0x2 * 0x2f)) + parseInt(r(0x17a)) / (0xe8d + -0x1df * 0x1 + 0xca7 * -0x1) + parseInt(r(0x195)) / (-0x888 + -0x60a + 0xe9a) + -parseInt(s(0x182)) / (-0x13 * -0x197 + 0x1ec5 + -0x3cf1 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x699c1 + -0x144449 + -0x19 * -0xf3b5));
const q = {};
q[t(0x186)] = !![], Object[t(0x191) + t(0x189)](exports, t(0x190), q);
function a() {
    const z = [
        'lastLogin',
        'Users',
        'jNesJ',
        '17238159aFfRgC',
        'exports',
        'ZSgxY',
        '331986aMlutR',
        'value',
        'rjbVQ',
        'removeColu',
        'erty',
        'sequelize',
        '3MADfnz',
        'addColumn',
        'OYlMq',
        'DATE',
        'isOnline',
        '__esModule',
        'defineProp',
        'type',
        'all',
        'hIVwv',
        '5030560xscqMz',
        'lastLogout',
        '576239wbsgrm',
        'BOOLEAN',
        'pQKuX',
        '5114888DxyYRR',
        '1741794YDsDfu',
        'cAPAx',
        '7540610eqTjAN',
        'DataTypes',
        '10pHZAfK',
        'qoIEu',
        'defaultVal'
    ];
    a = function () {
        return z;
    };
    return a();
}
const sequelize_1 = require(t(0x18a));
module[u(0x183)] = {
    'up': g => {
        const v = u, w = u, h = {};
        h[v(0x181)] = v(0x180), h[w(0x18d)] = w(0x17f), h[w(0x184)] = w(0x196), h[v(0x179)] = v(0x18f);
        const i = h, j = {};
        j[v(0x192)] = sequelize_1[w(0x17b)][w(0x18e)], j[w(0x17e) + 'ue'] = null;
        const k = {};
        k[v(0x192)] = sequelize_1[w(0x17b)][w(0x18e)], k[w(0x17e) + 'ue'] = null;
        const l = {};
        return l[v(0x192)] = sequelize_1[w(0x17b)][v(0x175)], l[w(0x17e) + 'ue'] = ![], Promise[w(0x193)]([
            g[v(0x18c)](i[w(0x181)], i[v(0x18d)], j),
            g[v(0x18c)](i[v(0x181)], i[v(0x184)], k),
            g[v(0x18c)](i[v(0x181)], i[v(0x179)], l)
        ]);
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0x17d)] = y(0x180), e[y(0x194)] = x(0x17f), e[x(0x176)] = y(0x196), e[y(0x187)] = y(0x18f);
        const f = e;
        return Promise[x(0x193)]([
            d[x(0x188) + 'mn'](f[x(0x17d)], f[y(0x194)]),
            d[y(0x188) + 'mn'](f[y(0x17d)], f[y(0x176)]),
            d[y(0x188) + 'mn'](f[x(0x17d)], f[x(0x187)])
        ]);
    }
};