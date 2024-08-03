'use strict';
const k = b, l = b;
function a() {
    const q = [
        'vcardConta',
        'addColumn',
        'AAaic',
        '1046213MlIuDB',
        '339RhQmEH',
        'defineProp',
        '292265wpKjFD',
        'INTEGER',
        'DjFcd',
        '10ltRxvI',
        '309552wwdUoF',
        'Messages',
        '11rKfGpe',
        'tQFEv',
        'CASCADE',
        'xsSLV',
        '483669HBflFj',
        '8214ahOtGP',
        'Contacts',
        '18wNpVhv',
        '936551brObpB',
        'ctId',
        'exports',
        '7468cuxVoF',
        'removeColu',
        'erty',
        '__esModule',
        'DataTypes',
        'ESiLW',
        'sequelize',
        'OXEuI',
        'value'
    ];
    a = function () {
        return q;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x18d * 0x2 + 0x23d0 + -0x2533);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x1bc)) / (-0x1c1c * 0x1 + 0x1efc + -0x2df) * (-parseInt(j(0x1c1)) / (0x752 + 0x1ca3 + -0x1 * 0x23f3)) + -parseInt(j(0x1d4)) / (-0x1850 + 0x1 * 0xa83 + 0xdd0) * (-parseInt(j(0x1c7)) / (0x2 * 0x31d + -0x1cbe + -0x5a2 * -0x4)) + -parseInt(i(0x1d6)) / (0x1 * 0x313 + 0xc5e * 0x2 + -0x1bca) * (parseInt(i(0x1c3)) / (0x18a7 * 0x1 + 0xc59 + 0x2 * -0x127d)) + -parseInt(j(0x1d3)) / (-0x658 * -0x3 + 0xc6 + -0x13c7) + parseInt(j(0x1ba)) / (-0xa26 + 0x2f3 + 0x73b * 0x1) + parseInt(i(0x1c0)) / (0x190f + -0x1e8b + 0x9d * 0x9) + parseInt(j(0x1b9)) / (0xa0b * -0x2 + -0x2645 + 0x3a65) * (parseInt(i(0x1c4)) / (0x151 * 0x8 + 0xfce + -0x35 * 0x7f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1061f + -0x1aed * 0x15 + 0x2d8bc));
const g = {};
g[k(0x1cf)] = !![], Object[l(0x1d5) + k(0x1c9)](exports, k(0x1ca), g);
const sequelize_1 = require(l(0x1cd));
module[l(0x1c6)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0x1bf)] = m(0x1bb), e[n(0x1cc)] = m(0x1d0) + m(0x1c5);
        const f = e;
        return d[n(0x1c8) + 'mn'](f[n(0x1bf)], f[n(0x1cc)]);
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0x1b8)] = p(0x1bb), e[p(0x1d2)] = o(0x1d0) + o(0x1c5), e[o(0x1ce)] = o(0x1c2), e[p(0x1bd)] = p(0x1be);
        const f = e;
        return d[o(0x1d1)](f[o(0x1b8)], f[o(0x1d2)], {
            'type': sequelize_1[o(0x1cb)][p(0x1b7)],
            'references': {
                'model': f[o(0x1ce)],
                'key': 'id'
            },
            'onUpdate': f[o(0x1bd)],
            'onDelete': f[o(0x1bd)]
        });
    }
};