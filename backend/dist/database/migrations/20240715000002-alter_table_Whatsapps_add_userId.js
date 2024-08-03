'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0xcf)) / (-0x1e1 * -0x4 + -0x22f0 + -0x77 * -0x3b) + -parseInt(i(0xda)) / (-0x3 * 0x1c5 + 0x2139 + -0x5e * 0x4c) * (parseInt(j(0xc9)) / (-0x63d * -0x4 + 0x6d3 * -0x1 + -0x3 * 0x60a)) + -parseInt(i(0xdb)) / (-0x1d5d + -0x8c1 + 0x2622) + -parseInt(i(0xcb)) / (-0x1f * -0x37 + 0x1 * 0x8db + -0xf7f) + parseInt(j(0xde)) / (-0x1b * 0x16d + -0xafa + 0x317f) + parseInt(i(0xcc)) / (-0x13 * -0x135 + -0xb * -0x2 + -0x16fe) * (parseInt(j(0xdc)) / (0x6c5 * 0x1 + 0x52a * -0x7 + 0x1 * 0x1d69)) + -parseInt(j(0xd9)) / (0x16ec + -0x16 * -0x3a + -0x1 * 0x1bdf) * (-parseInt(j(0xc5)) / (0x1f * -0x10d + -0x122d + -0x42 * -0xc5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1ecc4 + 0x3d0b3 + -0x1b7c5));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1a93 * -0x1 + 0x11cf + -0x2ba3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
function a() {
    const q = [
        'iAOXq',
        'value',
        'Whatsapps',
        '10huaVew',
        'addColumn',
        'fgztr',
        'CASCADE',
        '1074081yiiLyz',
        'DataTypes',
        '2291065dkVpSO',
        '11795HIbWvI',
        'INTEGER',
        'userId',
        '514746MbDzuV',
        'rNMDO',
        'cdDBU',
        '__esModule',
        'zVGyJ',
        'exports',
        'Users',
        'sequelize',
        'gIsLk',
        'erty',
        '2872854TMhCkM',
        '2oAZWBG',
        '214724ukHipr',
        '152YnncnK',
        'SET\x20NULL',
        '1605336yzQgfA',
        'defineProp',
        'xWTlp',
        'removeColu'
    ];
    a = function () {
        return q;
    };
    return a();
}
g[k(0xc3)] = !![], Object[l(0xbf) + k(0xd8)](exports, k(0xd2), g);
const sequelize_1 = require(k(0xd6));
module[l(0xd4)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0xd1)] = m(0xc4), e[m(0xd0)] = n(0xce), e[n(0xd7)] = m(0xd5), e[m(0xc2)] = m(0xc8), e[m(0xc0)] = m(0xdd);
        const f = e;
        return d[m(0xc6)](f[m(0xd1)], f[m(0xd0)], {
            'type': sequelize_1[n(0xca)][m(0xcd)],
            'references': {
                'model': f[n(0xd7)],
                'key': 'id'
            },
            'onUpdate': f[m(0xc2)],
            'onDelete': f[n(0xc0)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0xd3)] = o(0xc4), e[o(0xc7)] = p(0xce);
        const f = e;
        return d[o(0xc1) + 'mn'](f[o(0xd3)], f[p(0xc7)]);
    }
};