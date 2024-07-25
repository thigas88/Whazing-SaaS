'use strict';
function a() {
    const r = [
        '442828vvytzs',
        'erty',
        'removeColu',
        'DyPaH',
        '6365128MuwiIX',
        'addColumn',
        'DataTypes',
        'lWiOY',
        '__esModule',
        'restrict',
        'iOjzL',
        'tenantId',
        '699740okscxe',
        'xaHKN',
        'Tenants',
        '1416903oIBVLb',
        'defineProp',
        'INTEGER',
        '161535PWStvM',
        'all',
        'exports',
        'aLiQG',
        'Messages',
        'sequelize',
        '10DMsYrS',
        '1082154BJuLpx',
        'huWZR',
        'UuLrg',
        'value',
        'CASCADE',
        '685426fMJDKu'
    ];
    a = function () {
        return r;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x536 + -0x1bf * -0x1 + -0x5be);
        let h = e[f];
        return h;
    }, b(c, d);
}
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(j(0x14c)) / (-0x10ca + -0x3d9 + 0x4 * 0x529) + -parseInt(k(0x146)) / (0x5f * -0x12 + -0x9 * 0x238 + 0x1aa8) + -parseInt(j(0x149)) / (-0x1 * -0x1b4f + 0x652 * -0x3 + -0x61 * 0x16) + parseInt(k(0x13a)) / (-0x61 * -0x13 + 0xec7 + -0x15f6) + parseInt(k(0x152)) / (-0x98a + -0x4a * -0x1b + 0x1c1) * (parseInt(k(0x153)) / (-0x1d3f * -0x1 + 0x5d0 + -0x2309)) + parseInt(k(0x139)) / (0x4e9 + 0x1 * -0xb65 + 0x1 * 0x683) + parseInt(j(0x13e)) / (0xf25 + 0x4 * -0x345 + -0x209);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7b492 * 0x1 + 0x45 * 0x2386 + 0x3f2d2));
const i = {};
i[l(0x137)] = !![], Object[l(0x14a) + m(0x13b)](exports, l(0x142), i);
const sequelize_1 = require(m(0x151));
module[m(0x14e)] = {
    'up': d => {
        const n = l, o = l, e = {};
        e[n(0x147)] = o(0x150), e[o(0x155)] = o(0x145), e[o(0x13d)] = o(0x148), e[n(0x14f)] = n(0x138), e[n(0x144)] = o(0x143);
        const f = e;
        return Promise[n(0x14d)]([d[o(0x13f)](f[n(0x147)], f[o(0x155)], {
                'type': sequelize_1[o(0x140)][n(0x14b)],
                'references': {
                    'model': f[n(0x13d)],
                    'key': 'id'
                },
                'onUpdate': f[n(0x14f)],
                'onDelete': f[n(0x144)],
                'allowNull': !![],
                'defaultValue': null
            })]);
    },
    'down': d => {
        const p = m, q = m, e = {};
        e[p(0x141)] = q(0x150), e[p(0x154)] = q(0x145);
        const f = e;
        return Promise[q(0x14d)]([d[p(0x13c) + 'mn'](f[p(0x141)], f[p(0x154)])]);
    }
};