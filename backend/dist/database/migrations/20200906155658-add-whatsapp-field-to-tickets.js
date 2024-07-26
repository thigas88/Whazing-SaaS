'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x13f)) / (-0x7 * -0x21a + 0x1cc * -0x3 + -0x3 * 0x31b) + parseInt(i(0x145)) / (0x1 * -0x715 + -0x4 * 0x63a + 0x1 * 0x1fff) + parseInt(i(0x13e)) / (-0x1e5 + 0xb4b + 0x963 * -0x1) + parseInt(j(0x142)) / (-0x13f7 + 0xf4d + 0x1 * 0x4ae) * (-parseInt(j(0x14b)) / (-0x7fd + -0xb58 + 0x135a)) + -parseInt(j(0x152)) / (0x113 * -0x23 + -0x382 * -0x7 + 0xd11) + parseInt(i(0x136)) / (-0x166d + -0x48e + 0x1b02) * (-parseInt(j(0x13a)) / (0xa * -0x97 + -0x1347 + -0xef * -0x1b)) + -parseInt(i(0x144)) / (-0x5f1 * -0x1 + 0xa7d * 0x1 + -0x1065);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x193d8b + -0x1b86e5 + -0x50e * -0xd66));
function a() {
    const q = [
        'sequelize',
        '8795898ltanTw',
        'jqLrx',
        'utBgj',
        '35xIimgw',
        'ifCGY',
        'CASCADE',
        'whatsappId',
        '1208888frPDcp',
        'exports',
        'value',
        'defineProp',
        '5747007stvfBI',
        '922056qhkzZG',
        'SET\x20NULL',
        'AsJHe',
        '322272vFuDQS',
        'PYgAZ',
        '13554792TPlkkF',
        '3901458GxyLJj',
        'removeColu',
        'yDrKk',
        'erty',
        '__esModule',
        'DataTypes',
        '5DUQWnk',
        'addColumn',
        'Whatsapps',
        'nSRHn',
        'Tickets',
        'INTEGER'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0x13c)] = !![], Object[k(0x13d) + k(0x148)](exports, l(0x149), g);
const sequelize_1 = require(k(0x151));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1b4 * -0x16 + 0x1cbb + -0x40ff);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[l(0x13b)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x135)] = n(0x14f), e[m(0x14e)] = n(0x139), e[m(0x137)] = n(0x14d), e[m(0x143)] = n(0x138), e[m(0x147)] = n(0x140);
        const f = e;
        return d[n(0x14c)](f[n(0x135)], f[n(0x14e)], {
            'type': sequelize_1[n(0x14a)][n(0x150)],
            'references': {
                'model': f[n(0x137)],
                'key': 'id'
            },
            'onUpdate': f[n(0x143)],
            'onDelete': f[n(0x147)]
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x141)] = o(0x14f), e[o(0x134)] = p(0x139);
        const f = e;
        return d[p(0x146) + 'mn'](f[o(0x141)], f[o(0x134)]);
    }
};