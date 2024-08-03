'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x144)) / (-0x1 * -0x146c + -0x7 * -0x22c + -0x33d * 0xb) + parseInt(i(0x12f)) / (0x2183 + 0x22c0 + -0xad * 0x65) * (parseInt(i(0x131)) / (-0x1 * -0x657 + -0x20f5 + 0x1aa1 * 0x1)) + parseInt(j(0x13e)) / (-0x1c82 + 0x18df + 0xbb * 0x5) + -parseInt(i(0x140)) / (-0x22f5 + 0x1ef + 0x210b * 0x1) + -parseInt(j(0x13a)) / (-0x5a1 + -0x13b7 + 0x195e) * (parseInt(i(0x12e)) / (0x1baa + 0x1b5 + -0x1d58)) + -parseInt(i(0x135)) / (-0x2432 + 0x4 * 0x5c1 + 0xd36) * (-parseInt(i(0x127)) / (0x2643 + -0x4 * 0x85f + -0x4be)) + parseInt(i(0x12d)) / (-0x2b8 + -0x2d3 * 0x9 + 0x1c2d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0xc1742 + 0x12adcf + -0x14b93f));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1d82 + 0x37 * -0x55 + -0xa19);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
g[k(0x129)] = !![], Object[l(0x134) + l(0x133)](exports, k(0x145), g);
const sequelize_1 = require(k(0x136));
function a() {
    const q = [
        '521574IrtFAt',
        '__esModule',
        'siTVf',
        '8261586PjLsZP',
        'INTEGER',
        'value',
        'Users',
        'gRBYK',
        'SET\x20NULL',
        '5565990lYnTrI',
        '35YrDVnl',
        '2lOyzYD',
        'DataTypes',
        '2862129mggKvi',
        'CASCADE',
        'erty',
        'defineProp',
        '8ORvKzH',
        'sequelize',
        'iVlWR',
        'Messages',
        'exports',
        '1459860iVbuJD',
        'removeColu',
        'BLNNf',
        'userId',
        '3701876aSSxlT',
        'addColumn',
        '4787775JzChid',
        'LSusx',
        'siuuR',
        'zchQj'
    ];
    a = function () {
        return q;
    };
    return a();
}
module[k(0x139)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0x141)] = m(0x138), e[m(0x137)] = n(0x13d);
        const f = e;
        return d[n(0x13b) + 'mn'](f[m(0x141)], f[n(0x137)]);
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0x13c)] = p(0x138), e[p(0x143)] = o(0x13d), e[p(0x12b)] = o(0x12a), e[p(0x126)] = o(0x132), e[p(0x142)] = o(0x12c);
        const f = e;
        return d[o(0x13f)](f[p(0x13c)], f[p(0x143)], {
            'type': sequelize_1[p(0x130)][o(0x128)],
            'references': {
                'model': f[p(0x12b)],
                'key': 'id'
            },
            'onUpdate': f[p(0x126)],
            'onDelete': f[p(0x142)]
        });
    }
};