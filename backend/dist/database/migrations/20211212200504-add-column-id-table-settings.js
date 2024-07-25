'use strict';
const l = b, m = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2542 + -0x7 * 0x10f + -0x1cc5);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0x12e)) / (-0x1a75 + -0x2bd * -0x9 + 0x1d1) + -parseInt(k(0x12c)) / (0x974 + 0x101 * 0x3 + 0x3 * -0x427) * (parseInt(k(0x120)) / (-0x765 + 0x3 * 0xb8d + 0x5d * -0x4b)) + -parseInt(j(0x122)) / (0xc4a + 0x15a9 * 0x1 + -0x49 * 0x77) * (parseInt(j(0x12a)) / (-0x20b5 + 0x24fb + 0xb * -0x63)) + -parseInt(j(0x12b)) / (-0xd5b + 0x242b * 0x1 + -0xb65 * 0x2) + -parseInt(j(0x118)) / (0x1 * -0x3ec + -0x20fb * 0x1 + 0x24ee) * (parseInt(j(0x115)) / (-0x1 * -0x1616 + 0x51 * -0x1b + 0x3 * -0x481)) + -parseInt(j(0x11f)) / (0xa * -0x3c4 + -0x7 * 0x49d + 0x45fc) + -parseInt(k(0x121)) / (-0x2 * -0x133 + -0x3d * -0x7c + -0x1fe8) * (-parseInt(j(0x12d)) / (-0x1deb + -0xe43 * 0x1 + 0x2c39));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x142354 + 0x7932 * -0x12 + 0x2866fb));
function a() {
    const r = [
        '1298244mrmBiZ',
        '10PhENQX',
        '1689611JpkGAc',
        '993470OGhYxX',
        'Settings',
        'nBklt',
        'sequelize',
        'exports',
        '8fZQyUu',
        'defineProp',
        'INTEGER',
        '8197756UXIIcK',
        'primaryKey',
        'value',
        'DataTypes',
        'type',
        'allowNull',
        'tDYYG',
        '1379709QRhsjn',
        '61113FCuAFp',
        '110YhDocg',
        '11056nJKTZD',
        'autoIncrem',
        '__esModule',
        'removeColu',
        'erty',
        'addColumn',
        'ent',
        'all',
        '490CNfQpE'
    ];
    a = function () {
        return r;
    };
    return a();
}
const i = {};
i[l(0x11a)] = !![], Object[l(0x116) + m(0x126)](exports, m(0x124), i);
const sequelize_1 = require(l(0x131));
module[m(0x114)] = {
    'up': e => {
        const n = l, o = l, f = {};
        f[n(0x11e)] = o(0x12f);
        const g = f, h = {};
        return h[n(0x11c)] = sequelize_1[n(0x11b)][n(0x117)], h[n(0x123) + o(0x128)] = !![], h[o(0x119)] = !![], h[n(0x11d)] = ![], Promise[o(0x129)]([e[n(0x127)](g[o(0x11e)], 'id', h)]);
    },
    'down': d => {
        const p = m, q = m, e = {};
        e[p(0x130)] = q(0x12f);
        const f = e;
        return Promise[p(0x129)]([d[q(0x125) + 'mn'](f[p(0x130)], 'id')]);
    }
};