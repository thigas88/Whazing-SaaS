'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x152)) / (-0x50e * 0x2 + 0x48d + 0x590) * (parseInt(n(0x155)) / (-0x1ddf + -0x3ba + -0x1 * -0x219b)) + -parseInt(n(0x164)) / (-0x19c6 + -0x335 * 0x4 + 0x269d) + parseInt(n(0x154)) / (-0x1f0b * 0x1 + 0x15 * 0x18f + 0x4 * -0x6b) * (parseInt(o(0x16c)) / (-0x3b1 * -0x3 + 0x237b + 0x21 * -0x169)) + parseInt(n(0x168)) / (0x1 * 0x205 + -0x1 * -0x1d0f + 0x19 * -0x13e) + parseInt(n(0x16f)) / (-0xd2f * -0x1 + -0x23 * -0xa2 + -0x234e * 0x1) * (parseInt(n(0x165)) / (0x5 * -0x14d + -0x9 * -0x45 + 0x41c)) + parseInt(n(0x151)) / (0x7b0 + -0xad * -0xd + -0x1070) * (parseInt(n(0x15f)) / (0x1 * -0x479 + 0x16b3 + -0x1230)) + parseInt(o(0x15b)) / (-0x12 * 0x69 + -0x190 + 0x8fd * 0x1) * (-parseInt(n(0x15d)) / (-0x1 * -0x22f7 + 0xc2c + 0x96b * -0x5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x9251 * 0x1d + 0x1d819f + 0xf9505 * -0x2));
function a() {
    const v = [
        'all',
        'hfUXG',
        'erty',
        '207wAZjqW',
        '55987squSqJ',
        'DataTypes',
        '4jnIvCF',
        '60yVJhqN',
        'removeColu',
        'type',
        'stepOrder',
        'defineProp',
        'Pshzk',
        '2597177OoXiiw',
        'vLAvT',
        '12aBnLrd',
        'value',
        '480030dSonAO',
        'sequelize',
        '__esModule',
        'exports',
        'StepsReply',
        '4069293QpQgkV',
        '21296zEHFfw',
        'rOUND',
        'addColumn',
        '11350248cXtJTg',
        'HVVGh',
        'action',
        'allowNull',
        '5165135ZCaLWa',
        'INTEGER',
        'defaultVal',
        '581FfJmkW',
        'rtgHX'
    ];
    a = function () {
        return v;
    };
    return a();
}
const m = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x19c5 * -0x1 + 0x1 * -0x22de + 0x3df2 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
m[p(0x15e)] = !![], Object[q(0x159) + q(0x150)](exports, p(0x161), m);
const sequelize_1 = require(p(0x160));
module[q(0x162)] = {
    'up': d => {
        const r = q, s = p, e = {};
        e[r(0x166)] = r(0x163), e[r(0x14f)] = r(0x16a), e[r(0x170)] = r(0x158);
        const f = e;
        return Promise[s(0x171)]([
            d[r(0x156) + 'mn'](f[r(0x166)], f[r(0x14f)]),
            d[s(0x156) + 'mn'](f[r(0x166)], f[s(0x170)])
        ]);
    },
    'down': f => {
        const t = q, u = q, g = {};
        g[t(0x15c)] = u(0x163), g[t(0x15a)] = t(0x16a), g[u(0x169)] = u(0x158);
        const h = g, i = {};
        i[t(0x157)] = sequelize_1[t(0x153)][t(0x16d)], i[t(0x16b)] = ![], i[u(0x16e) + 'ue'] = 0x0;
        const j = {};
        return j[u(0x157)] = sequelize_1[u(0x153)][u(0x16d)], j[u(0x16b)] = ![], Promise[u(0x171)]([
            f[u(0x167)](h[t(0x15c)], h[u(0x15a)], i),
            f[t(0x167)](h[u(0x15c)], h[t(0x169)], j)
        ]);
    }
};