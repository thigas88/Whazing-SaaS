'use strict';
const l = b, m = b;
function a() {
    const r = [
        '8AMgLGB',
        'sequelize',
        '98424iaPXRX',
        'RjQTF',
        '3436181tyZafp',
        'addColumn',
        'value',
        '4dDwctZ',
        '185591TjdBLQ',
        'defineProp',
        'Users',
        'offline',
        '__esModule',
        'all',
        '506PYiwhh',
        'exports',
        'erty',
        'DataTypes',
        '11313krHfYl',
        '2793180AroFhg',
        'removeColu',
        '4610ZDWjTP',
        'status',
        'LBAgy',
        'xKzmF',
        '20700ZAcFLt',
        'zGbOi',
        'oUZnT',
        '810MZBjJh',
        '174837DWyyWX',
        'STRING',
        '3gNajpW'
    ];
    a = function () {
        return r;
    };
    return a();
}
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0x177)) / (0x1898 + 0x47c + -0x1d13) * (-parseInt(j(0x176)) / (0x10fe + -0x1 * 0x883 + -0x879)) + -parseInt(j(0x16e)) / (-0x3dc + 0x1 * 0xd7f + -0x2c * 0x38) * (-parseInt(k(0x182)) / (0xdf8 * -0x1 + -0x1d5 * -0x13 + -0x14d3)) + -parseInt(j(0x18b)) / (0x6 * -0x4a2 + -0x1925 * 0x1 + 0x34f6) * (-parseInt(k(0x188)) / (-0x2 * -0xf4d + 0x2f9 * 0xb + -0x3f47)) + -parseInt(k(0x173)) / (-0x15a9 * -0x1 + -0x7ce + -0xdd4) * (-parseInt(j(0x16f)) / (-0xd1b + -0x751 * 0x1 + 0x1474)) + -parseInt(k(0x181)) / (0x173c + -0xc62 + 0x3 * -0x39b) * (parseInt(j(0x184)) / (-0x5 * 0x137 + -0x2d * -0x44 + -0x73 * 0xd)) + -parseInt(k(0x17d)) / (0xe + 0x1fe0 + -0x1fe3 * 0x1) * (parseInt(k(0x171)) / (0x55 * 0x28 + 0x28 * 0x88 + -0x227c)) + parseInt(j(0x16c)) / (0x191e + -0x1 * 0x82a + -0x10e7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x6dd75 + -0x6d8c5 + 0x698f8));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x30 * -0x6c + 0x1b * -0x153 + 0x10ed);
        let h = e[f];
        return h;
    }, b(c, d);
}
const i = {};
i[l(0x175)] = !![], Object[l(0x178) + l(0x17f)](exports, m(0x17b), i);
const sequelize_1 = require(m(0x170));
module[m(0x17e)] = {
    'up': d => {
        const n = l, o = l, e = {};
        e[n(0x187)] = n(0x179), e[n(0x189)] = o(0x185), e[n(0x172)] = n(0x17a);
        const f = e;
        return Promise[o(0x17c)]([d[o(0x174)](f[n(0x187)], f[n(0x189)], {
                'type': sequelize_1[n(0x180)][n(0x16d)],
                'allowNull': ![],
                'defaultValue': f[n(0x172)]
            })]);
    },
    'down': d => {
        const p = m, q = l, e = {};
        e[p(0x18a)] = q(0x179), e[p(0x186)] = p(0x185);
        const f = e;
        return Promise[p(0x17c)]([d[p(0x183) + 'mn'](f[p(0x18a)], f[q(0x186)])]);
    }
};