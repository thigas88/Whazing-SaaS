'use strict';
const k = b, l = b;
function a() {
    const q = [
        'exports',
        'Vdmnr',
        'erty',
        'addColumn',
        'SET\x20NULL',
        'DataTypes',
        'sequelize',
        '93bJodtN',
        '16004DSzztW',
        'ogeGp',
        '1075564WTubcS',
        '80conAmD',
        '1702860ZiwjGG',
        '77032ztHlqI',
        'value',
        'TMbbH',
        '466119BSrzOZ',
        'INTEGER',
        'Messages',
        'qHpYh',
        'WUzYd',
        'mmDyR',
        'pgmZj',
        'removeColu',
        'userId',
        'defineProp',
        '__esModule',
        '237972mtZSIL',
        'CASCADE',
        '1066970ZRREFQ',
        'Users'
    ];
    a = function () {
        return q;
    };
    return a();
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x16a)) / (0xe31 * -0x2 + -0x1 * -0x14f6 + 0x76d) + parseInt(j(0x159)) / (0x7d7 * -0x3 + 0x1 * -0x745 + -0xdb * -0x24) + -parseInt(i(0x164)) / (0x57 * 0x2a + 0xa * 0x1a1 + -0x1e8d) * (parseInt(j(0x165)) / (0x17c6 + -0x160e + -0x1b4)) + parseInt(j(0x15b)) / (0x2c9 * -0x3 + 0x1e3d + 0xc1 * -0x1d) + -parseInt(i(0x169)) / (0x6 * -0x517 + 0xc20 + 0x10 * 0x127) + -parseInt(j(0x167)) / (0x1a0e + -0x1c7e + -0x1 * -0x277) + parseInt(j(0x168)) / (-0x1 * -0x1ae3 + -0x1cab + -0x3a * -0x8) * (parseInt(i(0x16d)) / (-0xf7f * 0x1 + 0x1f08 + 0x7c0 * -0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x5406 + 0x500f + -0xcfcb * -0x4));
const g = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x580 * -0x3 + -0x2ea + 0x2 * -0x61f);
        let h = e[f];
        return h;
    }, b(c, d);
}
g[k(0x16b)] = !![], Object[k(0x176) + k(0x15f)](exports, l(0x158), g);
const sequelize_1 = require(l(0x163));
module[k(0x15d)] = {
    'up': d => {
        const m = l, n = k, e = {};
        e[m(0x173)] = m(0x16f), e[m(0x16c)] = n(0x175), e[n(0x170)] = n(0x15c), e[m(0x172)] = n(0x15a), e[n(0x15e)] = n(0x161);
        const f = e;
        return d[m(0x160)](f[n(0x173)], f[m(0x16c)], {
            'type': sequelize_1[n(0x162)][n(0x16e)],
            'references': {
                'model': f[m(0x170)],
                'key': 'id'
            },
            'onUpdate': f[n(0x172)],
            'onDelete': f[n(0x15e)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0x166)] = p(0x16f), e[p(0x171)] = p(0x175);
        const f = e;
        return d[o(0x174) + 'mn'](f[p(0x166)], f[p(0x171)]);
    }
};