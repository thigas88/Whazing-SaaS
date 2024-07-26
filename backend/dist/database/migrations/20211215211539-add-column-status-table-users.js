'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x371 + 0x1678 + -0x1 * 0x123d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0xe4)) / (0x21a9 + 0x58 * 0x5e + -0x83f * 0x8) * (parseInt(k(0xd2)) / (-0x16f8 + 0x2 * -0x134f + 0x3d98)) + -parseInt(k(0xe5)) / (0xd * -0x185 + -0xf55 + -0x1 * -0x2319) * (parseInt(k(0xda)) / (-0x2492 + 0x3 * -0x92f + 0x4023)) + parseInt(j(0xdd)) / (0x10fd * -0x1 + 0x1 * 0x2441 + -0x133f) * (parseInt(j(0xe3)) / (0x4ab * 0x7 + 0xa * -0x353 + -0x1 * -0x97)) + -parseInt(k(0xce)) / (-0x1b74 + 0x2c1 * 0x7 + 0x834) + -parseInt(k(0xd1)) / (-0x89 * 0x6 + 0x1d0 + 0x16e) + parseInt(k(0xd4)) / (0x2090 + -0x2018 + -0x3 * 0x25) + -parseInt(k(0xd9)) / (-0x1e9a + 0x55 * 0x69 + 0x1 * -0x439);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x23994 + 0x16 * 0x241e + 0x1450c));
const i = {};
function a() {
    const r = [
        'sequelize',
        'status',
        'offline',
        'STRING',
        'all',
        '6DrryDO',
        '335OApbAC',
        '321tOfPNe',
        'addColumn',
        'erty',
        'QREiL',
        '__esModule',
        'DataTypes',
        '5177599GdxPQj',
        'XvSro',
        'ELsyO',
        '1198856hcaang',
        '1262QtyrPX',
        'defineProp',
        '7770924fsIIcs',
        'exports',
        'value',
        'PaZCA',
        'wwKGJ',
        '1690990DloYbE',
        '2292BWBuPd',
        'Users',
        'removeColu',
        '2387695MvnkHX'
    ];
    a = function () {
        return r;
    };
    return a();
}
i[l(0xd6)] = !![], Object[l(0xd3) + m(0xca)](exports, m(0xcc), i);
const sequelize_1 = require(m(0xde));
module[l(0xd5)] = {
    'up': d => {
        const n = l, o = l, e = {};
        e[n(0xcb)] = n(0xdb), e[n(0xd8)] = n(0xdf), e[o(0xcf)] = n(0xe0);
        const f = e;
        return Promise[n(0xe2)]([d[n(0xe6)](f[n(0xcb)], f[o(0xd8)], {
                'type': sequelize_1[n(0xcd)][n(0xe1)],
                'allowNull': ![],
                'defaultValue': f[o(0xcf)]
            })]);
    },
    'down': d => {
        const p = m, q = l, e = {};
        e[p(0xd7)] = p(0xdb), e[p(0xd0)] = p(0xdf);
        const f = e;
        return Promise[p(0xe2)]([d[q(0xdc) + 'mn'](f[q(0xd7)], f[p(0xd0)])]);
    }
};