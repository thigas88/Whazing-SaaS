'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x12b * 0x7 + 0xfc2 + -0x16cf);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        'sequelize',
        'CASCADE',
        'vaAxL',
        'groupId',
        'MoKpm',
        'npBBV',
        'qVjrP',
        'GXqIN',
        'LPrdm',
        '3106971ratWcw',
        'erty',
        'xONle',
        '2465924NMwTTc',
        '14929200jGnEXw',
        'exports',
        '7722604hxDywP',
        'INTEGER',
        'DataTypes',
        'VXodb',
        'OgIft',
        'changeColu',
        'LwOdj',
        '__esModule',
        '5krQZwG',
        '6552245lOmMuO',
        'receiverId',
        'Users',
        'JiYjW',
        '11165994JPICyi',
        'ssage',
        '1zJqtto',
        'value',
        'ugyGs',
        'jvKPV',
        'SOfxK',
        'defineProp',
        'Groups',
        'all',
        '674736qBFKWb',
        'InternalMe',
        'SET\x20NULL'
    ];
    a = function () {
        return v;
    };
    return a();
}
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x144)) / (-0x19b1 + -0x1 * -0x1924 + -0x47 * -0x2) * (-parseInt(n(0x132)) / (0x1a3 * -0x11 + 0x1 * 0x71 + 0x2 * 0xdb2)) + parseInt(n(0x12f)) / (-0x1131 + -0xc95 * 0x1 + 0x5 * 0x5f5) + -parseInt(o(0x135)) / (-0x1bf7 + 0xc11 * 0x1 + -0x2 * -0x7f5) * (parseInt(n(0x13d)) / (-0x9 * 0x40 + -0x9f0 + 0x271 * 0x5)) + -parseInt(n(0x142)) / (0x5 * -0x6a3 + 0xeb * -0x1b + 0x39fe) + parseInt(n(0x13e)) / (0x1bd * -0x11 + -0x81d + -0x25b1 * -0x1) + -parseInt(n(0x123)) / (-0xde * 0x21 + -0xf6d * -0x2 + -0x234) + parseInt(o(0x133)) / (-0x17eb * -0x1 + -0x56d * -0x2 + 0x9c * -0x39);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x18899a + -0x11192a * -0x1 + -0x1a917e));
const m = {};
m[p(0x145)] = !![], Object[p(0x120) + q(0x130)](exports, q(0x13c), m);
const sequelize_1 = require(p(0x126));
module[p(0x134)] = {
    'up': d => {
        const r = p, s = q, e = {};
        e[r(0x139)] = r(0x124) + s(0x143), e[r(0x12a)] = s(0x129), e[s(0x12c)] = r(0x121), e[s(0x147)] = r(0x127), e[s(0x12d)] = s(0x13f), e[s(0x138)] = s(0x140), e[r(0x148)] = r(0x125);
        const f = e;
        return Promise[r(0x122)]([
            d[r(0x13a) + 'mn'](f[r(0x139)], f[r(0x12a)], {
                'type': sequelize_1[r(0x137)][s(0x136)],
                'references': {
                    'model': f[r(0x12c)],
                    'key': 'id'
                },
                'onUpdate': f[r(0x147)],
                'onDelete': f[s(0x147)],
                'allowNull': !![]
            }),
            d[s(0x13a) + 'mn'](f[s(0x139)], f[s(0x12d)], {
                'type': sequelize_1[s(0x137)][r(0x136)],
                'references': {
                    'model': f[r(0x138)],
                    'key': 'id'
                },
                'onUpdate': f[s(0x147)],
                'onDelete': f[r(0x148)],
                'allowNull': !![]
            })
        ]);
    },
    'down': d => {
        const t = p, u = p, e = {};
        e[t(0x12b)] = u(0x124) + u(0x143), e[u(0x141)] = u(0x129), e[t(0x13b)] = u(0x121), e[t(0x146)] = u(0x127), e[u(0x12e)] = u(0x13f), e[t(0x128)] = t(0x140), e[u(0x131)] = u(0x125);
        const f = e;
        return Promise[t(0x122)]([
            d[u(0x13a) + 'mn'](f[t(0x12b)], f[u(0x141)], {
                'type': sequelize_1[u(0x137)][t(0x136)],
                'references': {
                    'model': f[u(0x13b)],
                    'key': 'id'
                },
                'onUpdate': f[u(0x146)],
                'onDelete': f[u(0x146)],
                'allowNull': !![]
            }),
            d[t(0x13a) + 'mn'](f[u(0x12b)], f[u(0x12e)], {
                'type': sequelize_1[t(0x137)][u(0x136)],
                'references': {
                    'model': f[u(0x128)],
                    'key': 'id'
                },
                'onUpdate': f[u(0x146)],
                'onDelete': f[t(0x131)],
                'allowNull': !![]
            })
        ]);
    }
};