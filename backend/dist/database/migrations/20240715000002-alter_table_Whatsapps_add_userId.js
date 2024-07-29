'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0xc7 + 0xd3 * -0x1 + -0x286 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const q = [
        '407105iespxT',
        'SET\x20NULL',
        '1011140JgjEJo',
        'INTEGER',
        '9614825JuzPWy',
        'erty',
        'addColumn',
        'kpQzr',
        'exports',
        '__esModule',
        'CASCADE',
        'sequelize',
        'LtjWi',
        '12zqvgPN',
        'DataTypes',
        '254XlNQeo',
        'defineProp',
        'IZOGh',
        'Users',
        '50JhAtXo',
        'jwsMK',
        '2091LXZmqM',
        'value',
        'removeColu',
        'xwBkb',
        '495621LHxLZm',
        'qUCdv',
        'Whatsapps',
        '957351WwZRNa',
        'KZxTj',
        '35KgZUTt',
        'userId',
        '21848tEdPiM',
        '12FesVeQ'
    ];
    a = function () {
        return q;
    };
    return a();
}
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x109)) / (-0x336 * -0x2 + -0x1bef + 0x44 * 0x51) * (parseInt(i(0x103)) / (0x229e + 0x26e + 0x2 * -0x1285)) + -parseInt(i(0xee)) / (-0x5a7 + -0x1e2b + 0x23d5) + -parseInt(j(0xf6)) / (0x1cd7 + -0x1581 + -0x1 * 0x752) + -parseInt(i(0xf4)) / (-0x7b * 0x25 + 0x2702 + -0x1536) * (parseInt(j(0x101)) / (-0x162c + 0x49f + 0x199 * 0xb)) + -parseInt(i(0xf0)) / (-0xd95 * 0x2 + -0x1317 + -0x4 * -0xb92) * (-parseInt(j(0xf2)) / (0x1b0d + 0x153 + -0x1c58 * 0x1)) + parseInt(i(0x10d)) / (-0xe5 * 0x1f + 0x14a7 * 0x1 + 0x71d) * (parseInt(i(0x107)) / (0x24b6 + -0x28c + -0x2220)) + -parseInt(j(0xf8)) / (-0x29 * 0x9f + -0x5b + -0x19dd * -0x1) * (-parseInt(j(0xf3)) / (-0x52 * 0x2a + 0x1e28 * -0x1 + 0x2ba8));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3ff6c + -0x95 * 0x372 + 0x7dc4));
const g = {};
g[k(0x10a)] = !![], Object[l(0x104) + k(0xf9)](exports, k(0xfd), g);
const sequelize_1 = require(k(0xff));
module[k(0xfc)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x105)] = n(0xed), e[n(0xec)] = n(0xf1), e[m(0x10c)] = m(0x106), e[m(0x108)] = m(0xfe), e[m(0x100)] = m(0xf5);
        const f = e;
        return d[n(0xfa)](f[n(0x105)], f[n(0xec)], {
            'type': sequelize_1[n(0x102)][n(0xf7)],
            'references': {
                'model': f[m(0x10c)],
                'key': 'id'
            },
            'onUpdate': f[n(0x108)],
            'onDelete': f[n(0x100)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0xef)] = o(0xed), e[p(0xfb)] = p(0xf1);
        const f = e;
        return d[o(0x10b) + 'mn'](f[o(0xef)], f[o(0xfb)]);
    }
};