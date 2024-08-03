'use strict';
const p = b, q = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x594 + 0xdce + -0x6f3);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        '11RbWtCJ',
        'fTllI',
        'sequelize',
        'DbxrL',
        '2668956JgQzhK',
        'type',
        'aVBVP',
        'stepOrder',
        '108pNZTSq',
        '5psfFKj',
        'removeColu',
        'DataTypes',
        'allowNull',
        'value',
        'hqvaZ',
        'INTEGER',
        '72fhbTnb',
        '14206UsRGMO',
        '192220ZVAASf',
        'exports',
        '12AYRpVK',
        'StepsReply',
        'defineProp',
        '__esModule',
        '2420536PtZejh',
        '30718vIbyCd',
        '183337KDUlAr',
        '21759636jXUztj',
        'erty',
        'action',
        'defaultVal',
        'zngWN',
        'MboKR',
        'all',
        'addColumn'
    ];
    a = function () {
        return v;
    };
    return a();
}
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x14a)) / (-0x81 * -0x3f + 0x1219 + 0x109d * -0x3) + parseInt(o(0x152)) / (0x1 * -0x1539 + -0x249 * 0x3 + 0x1c16) * (parseInt(o(0x14d)) / (0x10 * -0x263 + 0xee + 0x2545)) + -parseInt(o(0x151)) / (-0x682 + -0x1585 + 0x1c0b * 0x1) * (parseInt(n(0x165)) / (-0x9d * 0xa + -0x1a * -0x26 + 0x24b * 0x1)) + -parseInt(n(0x160)) / (-0x16b8 + -0x8d4 + 0x1f92) + parseInt(n(0x153)) / (0x1c75 + -0x2 * 0x11e + -0x7 * 0x3be) * (-parseInt(o(0x149)) / (0x1c * 0x39 + 0x168e + -0x4cb * 0x6)) + -parseInt(n(0x164)) / (0x2e * 0x8e + 0x1064 + -0x29df) * (parseInt(o(0x14b)) / (-0xcd8 + -0x1c34 + 0x148b * 0x2)) + -parseInt(n(0x15c)) / (-0x101a + 0xe * 0x7a + -0x61 * -0x19) * (-parseInt(o(0x154)) / (0x1 * 0x110f + -0x4 * -0x24 + 0xb * -0x199));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x68a54 + 0x8b9d4 + 0x2 * 0x1887f));
const m = {};
m[p(0x169)] = !![], Object[p(0x14f) + p(0x155)](exports, p(0x150), m);
const sequelize_1 = require(p(0x15e));
module[q(0x14c)] = {
    'up': d => {
        const r = p, s = q, e = {};
        e[r(0x15d)] = s(0x14e), e[s(0x15f)] = s(0x156), e[s(0x162)] = s(0x163);
        const f = e;
        return Promise[r(0x15a)]([
            d[r(0x166) + 'mn'](f[r(0x15d)], f[s(0x15f)]),
            d[s(0x166) + 'mn'](f[s(0x15d)], f[s(0x162)])
        ]);
    },
    'down': f => {
        const t = p, u = p, g = {};
        g[t(0x159)] = u(0x14e), g[u(0x158)] = u(0x156), g[u(0x147)] = u(0x163);
        const h = g, i = {};
        i[t(0x161)] = sequelize_1[t(0x167)][t(0x148)], i[u(0x168)] = ![], i[u(0x157) + 'ue'] = 0x0;
        const j = {};
        return j[t(0x161)] = sequelize_1[t(0x167)][t(0x148)], j[u(0x168)] = ![], Promise[u(0x15a)]([
            f[t(0x15b)](h[u(0x159)], h[u(0x158)], i),
            f[u(0x15b)](h[t(0x159)], h[u(0x147)], j)
        ]);
    }
};