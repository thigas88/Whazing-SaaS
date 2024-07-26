'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x174)) / (0x528 + 0x1 * -0x1163 + 0x6c * 0x1d) + parseInt(i(0x17a)) / (0x40e + 0xae5 + -0xef1) * (parseInt(i(0x173)) / (-0x2 * 0x11fc + 0x1df5 + 0x606)) + -parseInt(j(0x187)) / (-0x1c61 + 0x1 * 0x4ce + 0x29f * 0x9) + -parseInt(i(0x176)) / (-0x598 + -0x105 + 0x11b * 0x6) * (-parseInt(j(0x18f)) / (0x22cd + -0x1187 + -0x1140)) + -parseInt(j(0x181)) / (0x179 * -0x19 + -0xc7 * -0x1f + -0xfb * -0xd) * (-parseInt(i(0x172)) / (-0x986 + -0x195f + 0x1 * 0x22ed)) + parseInt(j(0x179)) / (0x13d8 + 0x2 * 0x833 + -0x12b * 0x1f) + -parseInt(j(0x175)) / (0x665 * 0x1 + 0x5aa + -0xb5 * 0x11) * (-parseInt(i(0x178)) / (-0x2076 * -0x1 + 0x1057 + 0x2 * -0x1861));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x313f * 0x12 + 0x6c4 * 0x8 + 0x1 * 0xae973));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd9f * 0x1 + 0x8b * 0x1e + -0x13c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
function a() {
    const q = [
        '40HaFqOC',
        '852237romFJU',
        '734254OhmUEQ',
        '5470QzByfY',
        '60bfYiUa',
        '__esModule',
        '14234iKhhwt',
        '379008stQrVM',
        '2Eigosk',
        'erty',
        'Tenants',
        'exports',
        'DataTypes',
        'HkOtU',
        'ZTrCD',
        '728721WjEZIG',
        'INTEGER',
        'value',
        'SET\x20NULL',
        'Plans',
        'sequelize',
        '2471908Clglzm',
        'vWAHu',
        'jjZpF',
        'XZNeP',
        'removeColu',
        'heDzZ',
        'addColumn',
        'planId',
        '149880LnLmqX',
        'defineProp',
        'xnqxT',
        'CASCADE'
    ];
    a = function () {
        return q;
    };
    return a();
}
g[k(0x183)] = !![], Object[k(0x16f) + l(0x17b)](exports, k(0x177), g);
const sequelize_1 = require(k(0x186));
module[l(0x17d)] = {
    'up': d => {
        const m = l, n = l, e = {};
        e[m(0x17f)] = m(0x17c), e[m(0x189)] = n(0x18e), e[m(0x188)] = m(0x185), e[m(0x18a)] = n(0x171), e[m(0x18c)] = m(0x184);
        const f = e;
        return d[m(0x18d)](f[m(0x17f)], f[n(0x189)], {
            'type': sequelize_1[m(0x17e)][n(0x182)],
            'references': {
                'model': f[n(0x188)],
                'key': 'id'
            },
            'onUpdate': f[n(0x18a)],
            'onDelete': f[m(0x18c)]
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0x170)] = p(0x17c), e[o(0x180)] = o(0x18e);
        const f = e;
        return d[o(0x18b) + 'mn'](f[p(0x170)], f[p(0x180)]);
    }
};