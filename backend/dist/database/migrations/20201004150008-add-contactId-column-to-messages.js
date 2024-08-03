'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x110)) / (-0x15b6 + -0x1fdf + 0x13 * 0x2d2) * (-parseInt(i(0x104)) / (-0x2177 + -0x165d + -0x3fd * -0xe)) + parseInt(j(0x101)) / (0x122a + -0x12e8 + 0x1 * 0xc1) + -parseInt(i(0xfc)) / (0x234e * -0x1 + -0x1be8 + 0x2 * 0x1f9d) * (parseInt(i(0x10c)) / (0x29 * 0xbf + -0x2503 + 0x11 * 0x61)) + -parseInt(j(0x108)) / (-0x66e * -0x1 + 0x1a * -0x15c + 0x1cf0) + -parseInt(j(0x10e)) / (0x502 + 0x53b * 0x4 + -0x19e7) * (parseInt(i(0x109)) / (-0x1 * -0x5bf + -0x206 * 0x8 + 0xa79)) + -parseInt(j(0x102)) / (0x1d23 + -0x1048 + -0xcd2) + parseInt(j(0x114)) / (0xa3f * 0x3 + -0x17 * 0x49 + 0x67 * -0x3c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0xdfc6 + -0x3c00d * 0x1 + 0x13187 * 0x4));
function a() {
    const q = [
        'exports',
        'UhVnx',
        '30jBIxuE',
        'OBWBT',
        '35YOPofA',
        'erty',
        '248577JlQmUP',
        'INTEGER',
        'contactId',
        'DataTypes',
        '1734640nyZFSU',
        'ktFye',
        'CZWuB',
        'defineProp',
        'eXJTY',
        'value',
        '79452QwoMBa',
        'addColumn',
        'lDugf',
        'sequelize',
        'removeColu',
        '741297aESCKq',
        '1736640aiEBkd',
        'Messages',
        '2kVZbiL',
        'Contacts',
        '__esModule',
        'CASCADE',
        '926964ompZGQ',
        '125016sBGMlw'
    ];
    a = function () {
        return q;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3 * -0x901 + -0x1 * -0xe86 + 0xd75);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
g[k(0xfb)] = !![], Object[k(0xf9) + l(0x10f)](exports, l(0x106), g);
const sequelize_1 = require(k(0xff));
module[k(0x10a)] = {
    'up': d => {
        const m = l, n = k, e = {};
        e[m(0x115)] = m(0x103), e[m(0xfe)] = n(0x112), e[n(0x10b)] = n(0x105), e[n(0x10d)] = m(0x107);
        const f = e;
        return d[m(0xfd)](f[n(0x115)], f[n(0xfe)], {
            'type': sequelize_1[m(0x113)][n(0x111)],
            'references': {
                'model': f[m(0x10b)],
                'key': 'id'
            },
            'onUpdate': f[n(0x10d)],
            'onDelete': f[m(0x10d)]
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0xf8)] = p(0x103), e[o(0xfa)] = p(0x112);
        const f = e;
        return d[p(0x100) + 'mn'](f[p(0xf8)], f[p(0xfa)]);
    }
};