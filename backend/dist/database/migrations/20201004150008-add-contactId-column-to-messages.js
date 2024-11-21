'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x119)) / (0x14bc + -0x13 * 0x5 + 0x2 * -0xa2e) + parseInt(i(0x122)) / (-0x7 * -0x175 + -0xad * 0xb + -0x2c2) + parseInt(j(0x10f)) / (-0x16 * -0x135 + -0x3 * 0x5b2 + -0x975) * (-parseInt(j(0x10b)) / (0x1926 * -0x1 + 0x21f9 * -0x1 + 0x3b23)) + parseInt(j(0x111)) / (-0xf04 + -0x1fff + -0x158 * -0x23) * (parseInt(j(0x121)) / (-0x1a9f * -0x1 + -0x1ed5 + -0x43c * -0x1)) + -parseInt(j(0x10e)) / (0x1 * 0x124a + -0x1b05 * 0x1 + 0x26 * 0x3b) * (parseInt(i(0x118)) / (0xffc * 0x1 + -0x2 * -0xa31 + -0x1 * 0x2456)) + -parseInt(i(0x11c)) / (0x851 + 0x1 * -0xb12 + 0x7 * 0x66) + parseInt(j(0x123)) / (-0x15b8 + 0x101e + 0x5a4);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5ef63 * 0x2 + -0x835 * -0x76 + 0x1 * -0x4d7a9));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2097 * 0x1 + -0x1e38 * -0x1 + 0xd * 0x43);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const q = [
        '1699428GOVfLI',
        '22778430BWlGkp',
        'exports',
        'CASCADE',
        'removeColu',
        'sequelize',
        'defineProp',
        '600296XOeVZJ',
        'addColumn',
        'Messages',
        '135219fchLxQ',
        '3fjQzEx',
        'contactId',
        '481315xKPYCO',
        'YPCDO',
        'IjRqr',
        'MNReD',
        'Contacts',
        'erty',
        'DataTypes',
        '392IyRgpH',
        '1037845LHmWwK',
        'UAHlD',
        'ZAATV',
        '6893361GibMBJ',
        'INTEGER',
        'value',
        'VEtYO',
        '__esModule',
        '30kcsgNH'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0x11e)] = !![], Object[l(0x10a) + k(0x116)](exports, l(0x120), g);
const sequelize_1 = require(k(0x109));
module[l(0x124)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x11b)] = m(0x10d), e[m(0x113)] = n(0x110), e[m(0x112)] = n(0x115), e[m(0x11f)] = m(0x125);
        const f = e;
        return d[m(0x10c)](f[n(0x11b)], f[n(0x113)], {
            'type': sequelize_1[m(0x117)][m(0x11d)],
            'references': {
                'model': f[n(0x112)],
                'key': 'id'
            },
            'onUpdate': f[n(0x11f)],
            'onDelete': f[m(0x11f)]
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x11a)] = o(0x10d), e[p(0x114)] = p(0x110);
        const f = e;
        return d[o(0x108) + 'mn'](f[o(0x11a)], f[p(0x114)]);
    }
};