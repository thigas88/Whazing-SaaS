'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0x160)) / (0xddc * 0x2 + 0x220b + -0x3dc2) + parseInt(j(0x15e)) / (0x43 * -0x95 + 0x1 * 0xf1f + -0x6 * -0x3fb) + parseInt(k(0x16a)) / (-0x88d * 0x1 + -0x5 * 0xde + 0xce6) * (parseInt(j(0x154)) / (-0xde4 + 0x1bb5 * -0x1 + 0x299d)) + -parseInt(k(0x15f)) / (-0x4bd * 0x5 + -0x5ca + 0x3b * 0x80) + -parseInt(j(0x158)) / (-0xe * -0x2b1 + 0x12f9 + -0x38a1) * (parseInt(k(0x162)) / (0x104c + -0x54b + -0xafa)) + parseInt(k(0x16f)) / (0x1902 + 0x73 + 0x196d * -0x1) + parseInt(j(0x15c)) / (0x14fe + 0x24 * -0xe9 + 0xbcf);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4198c * 0x3 + -0x33b0e + 0x179526));
const i = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x82c + 0x3d0 + -0xaa9 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const r = [
        'all',
        'INTEGER',
        'Ijzcx',
        '1354016gWHgsU',
        'sequelize',
        '36YbPRBw',
        'removeColu',
        'addColumn',
        'timestamp',
        '28434XuHRUy',
        'defaultVal',
        'value',
        'type',
        '5631201LlZLqk',
        'Messages',
        '119322VlZSCF',
        '2994415FmiaKB',
        '247791HgWlop',
        'allowNull',
        '21SWSjWH',
        'RNRfg',
        'DataTypes',
        'DijYI',
        'oXINB',
        'erty',
        '__esModule',
        'defineProp',
        '12813bkNcLh',
        'exports'
    ];
    a = function () {
        return r;
    };
    return a();
}
i[l(0x15a)] = !![], Object[l(0x169) + m(0x167)](exports, l(0x168), i);
const sequelize_1 = require(m(0x153));
module[l(0x16b)] = {
    'up': e => {
        const n = l, o = m, f = {};
        f[n(0x163)] = n(0x15d), f[n(0x165)] = o(0x157);
        const g = f, h = {};
        return h[n(0x15b)] = sequelize_1[n(0x164)][o(0x16d)], h[o(0x161)] = !![], h[n(0x159) + 'ue'] = null, Promise[o(0x16c)]([e[n(0x156)](g[o(0x163)], g[n(0x165)], h)]);
    },
    'down': d => {
        const p = m, q = l, e = {};
        e[p(0x16e)] = p(0x15d), e[q(0x166)] = q(0x157);
        const f = e;
        return Promise[p(0x16c)]([d[p(0x155) + 'mn'](f[q(0x16e)], f[p(0x166)])]);
    }
};