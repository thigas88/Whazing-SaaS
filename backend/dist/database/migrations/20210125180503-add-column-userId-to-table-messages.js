'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6 * 0x1fd + 0x43 * -0x34 + 0x271);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0xd4)) / (0x1b45 + 0x698 + 0x16 * -0x18a) * (-parseInt(j(0xd5)) / (0xaa * 0x22 + -0xc1 * -0x1 + -0x1753)) + -parseInt(i(0xda)) / (-0x203f + 0xfd2 + 0x1070) * (-parseInt(j(0xc8)) / (-0x1 * 0x1933 + -0x1df * -0xb + 0x4a2)) + -parseInt(i(0xc4)) / (-0x1 * 0xa7f + 0x2 * 0x2f6 + -0x93 * -0x8) + -parseInt(j(0xde)) / (-0xf55 + 0x1dac + -0xe51) + -parseInt(j(0xce)) / (-0x3a9 * 0x4 + 0x1b5 + 0xcf6) * (-parseInt(i(0xc6)) / (-0x9 * -0x3f5 + -0x1783 + -0xc12)) + -parseInt(j(0xdb)) / (0x1d82 + 0x11ef + -0x2f68) + parseInt(i(0xc9)) / (0x9cd + 0x2494 + -0x2e57);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3156 * -0x37 + 0x1 * 0x7bdcc + 0x11752 * -0xb));
const g = {};
function a() {
    const q = [
        'exports',
        'CASCADE',
        '35bgRBBm',
        'INTEGER',
        'hNopG',
        'DataTypes',
        'aMwrN',
        '__esModule',
        '285OsEDsN',
        '4310tewAaC',
        'userId',
        'bURfz',
        'GlcGm',
        'removeColu',
        '526017hsAPuH',
        '2424267TCsHAL',
        'defineProp',
        'erty',
        '4575066kSEzEJ',
        'addColumn',
        'Messages',
        'Users',
        'tbqdg',
        'UCBdz',
        '351530ruDjji',
        'WILTG',
        '188872PMmAtN',
        'value',
        '8LOSmoO',
        '4347060ebZujw',
        'SET\x20NULL',
        'sequelize'
    ];
    a = function () {
        return q;
    };
    return a();
}
g[k(0xc7)] = !![], Object[k(0xdc) + l(0xdd)](exports, l(0xd3), g);
const sequelize_1 = require(k(0xcb));
module[l(0xcc)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0xd7)] = n(0xe0), e[n(0xd8)] = n(0xd6), e[m(0xc3)] = m(0xe1), e[n(0xd0)] = m(0xcd), e[m(0xe2)] = m(0xca);
        const f = e;
        return d[n(0xdf)](f[m(0xd7)], f[m(0xd8)], {
            'type': sequelize_1[n(0xd1)][n(0xcf)],
            'references': {
                'model': f[n(0xc3)],
                'key': 'id'
            },
            'onUpdate': f[m(0xd0)],
            'onDelete': f[m(0xe2)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0xc5)] = o(0xe0), e[o(0xd2)] = p(0xd6);
        const f = e;
        return d[o(0xd9) + 'mn'](f[p(0xc5)], f[p(0xd2)]);
    }
};