'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x593 * 0x1 + -0x1 * -0x25e1 + -0x2a8f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0xf1)) / (-0x20ea + -0x16b8 + 0x37a3 * 0x1) * (parseInt(j(0xef)) / (-0x1df1 * 0x1 + 0x1b77 + -0x6a * -0x6)) + -parseInt(j(0x102)) / (0x8a * -0x9 + -0x28 * 0xf2 + 0x13 * 0x23f) + parseInt(i(0xe5)) / (0x1 * 0x1690 + 0x158e + -0x2c1a) + parseInt(j(0x103)) / (-0x1a7b * 0x1 + 0x814 + 0x126c) * (parseInt(i(0xf9)) / (0xb7b * 0x1 + 0x2 * 0x129b + -0x30ab)) + -parseInt(j(0xf4)) / (0x1be7 * -0x1 + -0x493 + 0x1 * 0x2081) + parseInt(j(0xf2)) / (-0x86d * -0x1 + -0x710 + -0x1 * 0x155) * (parseInt(i(0xe9)) / (0x18bd + -0x1ad1 + 0x21d * 0x1)) + parseInt(j(0xe6)) / (0xa4 * 0x37 + 0x227a + -0x45ac);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7a069 * 0x1 + -0x3a * 0x203e + 0x12da44));
const g = {};
g[k(0xff)] = !![], Object[k(0xf6) + k(0xf8)](exports, l(0xf5), g);
const sequelize_1 = require(k(0xed));
function a() {
    const q = [
        'value',
        'addColumn',
        'VlOvu',
        '1151439RsgyLz',
        '1560035sovUgt',
        '724244MblCmt',
        '2354940wZWgYl',
        'teFZf',
        'Contacts',
        '3156741vWhCHM',
        'vcardConta',
        'DataTypes',
        'yuAvl',
        'sequelize',
        'lfMTb',
        '2094gIdvgO',
        'cHzxN',
        '85OrukEU',
        '8yHMPim',
        'zWLYZ',
        '2446696sIfkUm',
        '__esModule',
        'defineProp',
        'ctId',
        'erty',
        '6jFWpgh',
        'INTEGER',
        'removeColu',
        'Messages',
        'exports',
        'CASCADE'
    ];
    a = function () {
        return q;
    };
    return a();
}
module[k(0xfd)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0xe7)] = m(0xfc), e[m(0x101)] = n(0xea) + n(0xf7), e[m(0xf3)] = n(0xe8), e[m(0xee)] = m(0xfe);
        const f = e;
        return d[n(0x100)](f[m(0xe7)], f[m(0x101)], {
            'type': sequelize_1[m(0xeb)][m(0xfa)],
            'references': {
                'model': f[n(0xf3)],
                'key': 'id'
            },
            'onUpdate': f[m(0xee)],
            'onDelete': f[n(0xee)]
        });
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0xec)] = p(0xfc), e[o(0xf0)] = o(0xea) + p(0xf7);
        const f = e;
        return d[o(0xfb) + 'mn'](f[p(0xec)], f[o(0xf0)]);
    }
};