'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x196)) / (-0x77 * 0x1 + -0x16bb + 0x1733 * 0x1) + -parseInt(i(0x191)) / (0x261c + -0x1 * 0x10a2 + -0x1578) + -parseInt(j(0x1a2)) / (0x1661 + -0x1d9f + 0x741) * (parseInt(i(0x188)) / (-0x1df9 + 0x3 * -0x3df + 0x299a)) + -parseInt(i(0x18f)) / (0x250 + 0x61 * 0x57 + 0x1 * -0x2342) * (-parseInt(i(0x19c)) / (-0x5eb + 0xaa + 0x547)) + parseInt(i(0x1a3)) / (0x2209 * -0x1 + 0x2053 + -0x5 * -0x59) * (parseInt(i(0x185)) / (0x151c + 0x25d1 * 0x1 + -0x3ae5)) + -parseInt(j(0x187)) / (0x17dc + 0x8 * -0x2bb + -0x1fb) * (parseInt(j(0x1a1)) / (0x78d * 0x5 + -0x23ac + -0x1 * 0x20b)) + parseInt(j(0x198)) / (0xe27 + -0x97 * 0x1 + 0x1 * -0xd85);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0xac8b * -0x5 + 0x3a6 * -0x21d + 0x2 * 0xab626));
function a() {
    const q = [
        'YQrvQ',
        '38025CuKFWX',
        'YeIJV',
        '127858IVOJOx',
        'SET\x20NULL',
        'erty',
        'defineProp',
        'iUblL',
        '299427yKSyjP',
        'hLJqw',
        '8541522JoMDCY',
        'SpsUH',
        'DataTypes',
        '__esModule',
        '762vgUUmf',
        'CASCADE',
        'Users',
        'userId',
        'value',
        '5828990XBREHC',
        '129657SrIklk',
        '2030ocyPmB',
        'rkUCU',
        'exports',
        '10024mYUbtc',
        'Whatsapps',
        '9CNawAr',
        '100tBHgME',
        'sequelize',
        'INTEGER',
        'removeColu',
        'XCKcA',
        'addColumn'
    ];
    a = function () {
        return q;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x30a + 0x325 + 0x16a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
g[k(0x1a0)] = !![], Object[l(0x194) + l(0x193)](exports, l(0x19b), g);
const sequelize_1 = require(k(0x189));
module[k(0x1a5)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x195)] = m(0x186), e[m(0x197)] = n(0x19f), e[m(0x1a4)] = n(0x19e), e[m(0x18c)] = m(0x19d), e[m(0x190)] = m(0x192);
        const f = e;
        return d[m(0x18d)](f[m(0x195)], f[m(0x197)], {
            'type': sequelize_1[m(0x19a)][n(0x18a)],
            'references': {
                'model': f[m(0x1a4)],
                'key': 'id'
            },
            'onUpdate': f[n(0x18c)],
            'onDelete': f[n(0x190)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x18e)] = p(0x186), e[p(0x199)] = o(0x19f);
        const f = e;
        return d[p(0x18b) + 'mn'](f[o(0x18e)], f[p(0x199)]);
    }
};