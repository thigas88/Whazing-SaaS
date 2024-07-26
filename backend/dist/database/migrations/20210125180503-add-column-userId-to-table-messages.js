'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x15 * -0x17a + 0xdd * 0x25 + -0x3d4c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x1c5)) / (0x1 * 0x17d + -0x9fc + -0x44 * -0x20) * (parseInt(j(0x1bf)) / (-0x1c05 + 0x1bd5 + 0x32)) + -parseInt(i(0x1bb)) / (0x311 * -0x1 + 0x5 * 0x18 + 0x29c) + -parseInt(j(0x1ad)) / (0x22 * 0xee + -0x13a4 + -0xbf4) + parseInt(j(0x1b6)) / (0x1370 * 0x2 + 0x249f + 0x4b7a * -0x1) + -parseInt(i(0x1c1)) / (0x7cc * -0x2 + 0x761 * -0x5 + -0x3 * -0x1181) + parseInt(j(0x1ba)) / (-0x866 + -0x1 * -0x227 + 0x92 * 0xb) * (-parseInt(j(0x1c3)) / (-0x1649 + 0x312 + 0x133f * 0x1)) + parseInt(i(0x1ac)) / (0x1fa0 + -0x1c2a + -0x36d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x9d3e + -0x3ff0b * 0x1 + -0x1 * -0x6e351));
const g = {};
g[k(0x1a8)] = !![], Object[k(0x1b9) + k(0x1b4)](exports, l(0x1b0), g);
function a() {
    const q = [
        'pMUGb',
        'sequelize',
        'defineProp',
        '35602KKVqAv',
        '343029ihDXTg',
        'CASCADE',
        'rcmyH',
        'hBKSe',
        '2EExEVS',
        'Users',
        '1773984QTkCQh',
        'exports',
        '360qxFxKd',
        'sDgND',
        '176949HPcBhw',
        'QoANQ',
        'value',
        'xNCBP',
        'INTEGER',
        'addColumn',
        '9286101BcitWE',
        '940416dLAIPq',
        'SET\x20NULL',
        'gVYPq',
        '__esModule',
        'Messages',
        'userId',
        'DataTypes',
        'erty',
        'removeColu',
        '841985QgTQXE'
    ];
    a = function () {
        return q;
    };
    return a();
}
const sequelize_1 = require(l(0x1b8));
module[l(0x1c2)] = {
    'up': d => {
        const m = l, n = k, e = {};
        e[m(0x1c4)] = n(0x1b1), e[m(0x1bd)] = m(0x1b2), e[n(0x1a9)] = m(0x1c0), e[m(0x1af)] = n(0x1bc), e[n(0x1be)] = n(0x1ae);
        const f = e;
        return d[n(0x1ab)](f[n(0x1c4)], f[n(0x1bd)], {
            'type': sequelize_1[n(0x1b3)][n(0x1aa)],
            'references': {
                'model': f[n(0x1a9)],
                'key': 'id'
            },
            'onUpdate': f[n(0x1af)],
            'onDelete': f[n(0x1be)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x1b7)] = o(0x1b1), e[o(0x1a7)] = o(0x1b2);
        const f = e;
        return d[p(0x1b5) + 'mn'](f[p(0x1b7)], f[o(0x1a7)]);
    }
};