'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x118)) / (0xd22 * 0x1 + -0x14e0 + 0x7bf) + -parseInt(j(0x10f)) / (0x1238 + 0x4c3 * 0x8 + 0x2 * -0x1c27) * (parseInt(j(0x10e)) / (-0x1146 + 0x14dd + -0x394)) + -parseInt(j(0x10a)) / (0x4bc + -0xc7f + 0x7c7 * 0x1) * (-parseInt(j(0x107)) / (-0x2f * -0x11 + 0x5 * -0x1a1 + 0x50b)) + -parseInt(j(0xfd)) / (-0x1706 + 0x2fb + 0x1411) + parseInt(i(0x108)) / (0x71 * 0x40 + 0x7bb * -0x5 + -0x37a * -0x3) * (parseInt(j(0xff)) / (0x1cb7 + -0x20 * 0x69 + -0xf8f * 0x1)) + -parseInt(i(0x112)) / (-0x25a * -0x8 + -0x1fa1 * 0x1 + 0xcda) * (parseInt(i(0x114)) / (0x164a + -0x7 * -0x55d + -0x3bcb)) + -parseInt(i(0x119)) / (0x228 + -0x2593 * 0x1 + -0x59 * -0x66) * (-parseInt(i(0x11a)) / (0x6 * -0x3ea + -0x809 + -0x1f91 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3b2fd + -0x5 * 0x10083 + -0x1 * -0x5259a));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x336 * 0x7 + -0xa4e + 0x21c4);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
function a() {
    const q = [
        '584484QSwNsg',
        'INTEGER',
        '156296UatwYl',
        '__esModule',
        'caUxu',
        'value',
        'SET\x20NULL',
        'IZNBW',
        'defineProp',
        'erty',
        '7615OfVXAm',
        '168EIgGOC',
        'sequelize',
        '64DVCEjN',
        'removeColu',
        'qlqhQ',
        'Whatsapps',
        '84891tOlPsh',
        '22ctpMhU',
        'Users',
        'KJSwC',
        '249993aBEFIM',
        'IqdCZ',
        '80LnNpNJ',
        'DataTypes',
        'userId',
        'eaNcR',
        '360807HoAcXk',
        '418ylslCZ',
        '8916UrYuQl',
        'addColumn',
        'exports',
        'ALRgh',
        'CASCADE'
    ];
    a = function () {
        return q;
    };
    return a();
}
g[k(0x102)] = !![], Object[k(0x105) + k(0x106)](exports, l(0x100), g);
const sequelize_1 = require(k(0x109));
module[l(0x11c)] = {
    'up': d => {
        const m = l, n = l, e = {};
        e[m(0x101)] = n(0x10d), e[n(0x104)] = m(0x116), e[m(0x11d)] = m(0x110), e[n(0x117)] = m(0xfc), e[n(0x10c)] = m(0x103);
        const f = e;
        return d[n(0x11b)](f[n(0x101)], f[n(0x104)], {
            'type': sequelize_1[m(0x115)][m(0xfe)],
            'references': {
                'model': f[n(0x11d)],
                'key': 'id'
            },
            'onUpdate': f[n(0x117)],
            'onDelete': f[m(0x10c)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x113)] = o(0x10d), e[o(0x111)] = o(0x116);
        const f = e;
        return d[o(0x10b) + 'mn'](f[p(0x113)], f[p(0x111)]);
    }
};