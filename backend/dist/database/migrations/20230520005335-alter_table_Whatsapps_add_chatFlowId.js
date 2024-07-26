'use strict';
const k = b, l = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x31c * 0x4 + 0x351 + 0xa8d);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x186)) / (-0x1 * -0x12f + 0x1 * 0x198b + 0x1 * -0x1ab9) * (parseInt(j(0x17e)) / (-0x234f + 0x1b0a + 0x847)) + parseInt(i(0x175)) / (-0xd3 * 0x6 + -0x4 * 0x556 + 0x1 * 0x1a4d) + -parseInt(i(0x176)) / (-0x1267 + 0x2 * 0x7bb + 0x2f5 * 0x1) * (parseInt(j(0x178)) / (-0xa * -0xb + -0x17b5 + 0x174c)) + -parseInt(i(0x16f)) / (0xbbf + 0x1 * -0x1d6c + 0xc5 * 0x17) * (-parseInt(i(0x17d)) / (-0x26b5 * -0x1 + -0x95 + -0x2619)) + -parseInt(i(0x185)) / (0x2c6 + -0x1 * 0x23e3 + 0x2125) + -parseInt(j(0x183)) / (0x192f + -0x1417 + -0x7 * 0xb9) * (parseInt(j(0x187)) / (0x2425 + 0x2 * -0x3af + 0x1cbd * -0x1)) + parseInt(j(0x18b)) / (-0x1cd8 + 0x19b4 + 0x32f) * (parseInt(i(0x188)) / (-0xd69 + -0x12d1 + -0x66 * -0x51));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1446f * -0xb + -0x19a3d + 0x1 * 0x179095));
const g = {};
function a() {
    const q = [
        'Whatsapps',
        '1050012UmcLmf',
        '8aiMcKg',
        'erty',
        '1592105pbMLPu',
        'exports',
        'jlzFh',
        'SET\x20NULL',
        'ChatFlow',
        '56455SLlCPA',
        '10PdbzRN',
        'value',
        'CASCADE',
        'GwNEm',
        'chatFlowId',
        '27jPZzwV',
        'removeColu',
        '2232456MUkMfK',
        '185511GZsErr',
        '3414530reduQe',
        '36qnVvKs',
        'INTEGER',
        '__esModule',
        '2583218zUjyEL',
        'sequelize',
        'cHYbJ',
        'QbQrt',
        'defineProp',
        'GADKc',
        '360RmFkDr',
        'Ksgpi',
        'addColumn',
        'DataTypes',
        'qhSKy'
    ];
    a = function () {
        return q;
    };
    return a();
}
g[k(0x17f)] = !![], Object[k(0x18f) + l(0x177)](exports, k(0x18a), g);
const sequelize_1 = require(k(0x18c));
module[l(0x179)] = {
    'up': d => {
        const m = l, n = l, e = {};
        e[m(0x170)] = m(0x174), e[n(0x16e)] = n(0x182), e[m(0x17a)] = m(0x17c), e[m(0x18e)] = n(0x180), e[m(0x181)] = m(0x17b);
        const f = e;
        return d[n(0x171)](f[m(0x170)], f[m(0x16e)], {
            'type': sequelize_1[m(0x172)][n(0x189)],
            'references': {
                'model': f[m(0x17a)],
                'key': 'id'
            },
            'onUpdate': f[n(0x18e)],
            'onDelete': f[m(0x181)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0x18d)] = p(0x174), e[o(0x173)] = p(0x182);
        const f = e;
        return d[p(0x184) + 'mn'](f[o(0x18d)], f[o(0x173)]);
    }
};