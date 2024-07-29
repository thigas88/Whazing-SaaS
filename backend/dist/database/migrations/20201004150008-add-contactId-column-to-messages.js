'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x186)) / (-0x2 * -0xf51 + 0x1 * -0x266f + -0x12 * -0x6f) * (parseInt(j(0x175)) / (0x784 + -0x1b14 + 0x1392)) + -parseInt(i(0x171)) / (-0xca1 + 0x1 * -0xd79 + -0x1 * -0x1a1d) * (-parseInt(j(0x182)) / (0x12d1 * 0x1 + 0x22ee + -0x35bb)) + -parseInt(j(0x176)) / (-0x7ed + 0x13 * 0x1f4 + 0xe95 * -0x2) * (parseInt(i(0x178)) / (-0x29 * -0x17 + 0x1055 * 0x1 + -0x13fe)) + parseInt(i(0x173)) / (0x1180 + -0x385 + -0xdf4) * (parseInt(i(0x189)) / (-0x2037 + 0x256f + -0x530)) + -parseInt(j(0x174)) / (-0x45 + -0x6 * 0x3be + -0x796 * -0x3) + -parseInt(j(0x16a)) / (-0x1fcd + 0x3b5 * -0x1 + -0x514 * -0x7) + parseInt(i(0x188)) / (-0xb57 + 0x1 * -0x903 + 0x1465) * (parseInt(j(0x187)) / (0x13d6 + -0xfb + -0x12cf));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5dc1d * 0x4 + -0x75e21 + 0xdf * 0x3295));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x85e * -0x3 + 0x620 + 0x2 * -0xee8);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
g[k(0x17b)] = !![], Object[k(0x16f) + l(0x16d)](exports, l(0x16c), g);
function a() {
    const q = [
        'removeColu',
        '105930OsqNBt',
        'DataTypes',
        'exports',
        'value',
        'CkZMJ',
        'INTEGER',
        'hbAsF',
        'QIOCc',
        'contactId',
        'Contacts',
        '656696MKbjIX',
        'Messages',
        'Bjrhz',
        'addColumn',
        '1270757SbIsTV',
        '760044zKqPfJ',
        '825TRnPxc',
        '216488VZmHOF',
        '12083730cCkRwG',
        'TzKCL',
        '__esModule',
        'erty',
        'sequelize',
        'defineProp',
        'Qupsu',
        '9nxOFfZ',
        'CASCADE',
        '56Pnbywy',
        '15507747bVUtfT',
        '2ujvydE',
        '110TNLQEa'
    ];
    a = function () {
        return q;
    };
    return a();
}
const sequelize_1 = require(k(0x16e));
module[k(0x17a)] = {
    'up': d => {
        const m = l, n = k, e = {};
        e[m(0x17e)] = n(0x183), e[m(0x184)] = m(0x180), e[m(0x17f)] = m(0x181), e[n(0x17c)] = m(0x172);
        const f = e;
        return d[m(0x185)](f[m(0x17e)], f[n(0x184)], {
            'type': sequelize_1[n(0x179)][n(0x17d)],
            'references': {
                'model': f[n(0x17f)],
                'key': 'id'
            },
            'onUpdate': f[n(0x17c)],
            'onDelete': f[m(0x17c)]
        });
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0x16b)] = p(0x183), e[o(0x170)] = p(0x180);
        const f = e;
        return d[p(0x177) + 'mn'](f[p(0x16b)], f[p(0x170)]);
    }
};