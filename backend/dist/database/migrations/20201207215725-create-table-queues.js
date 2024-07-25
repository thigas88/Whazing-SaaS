'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1c0)) / (-0x26d8 + 0xf * 0xae + 0x1ca7) * (-parseInt(q(0x1ae)) / (0x82 + 0x1ff * 0x9 + -0x1277)) + parseInt(q(0x1c2)) / (-0x1c6 * 0x13 + -0x10d0 + 0x3285) * (-parseInt(p(0x1c5)) / (0x9 * -0x2ae + -0x1cfb + 0x351d * 0x1)) + parseInt(q(0x1b5)) / (-0x150c + 0x6 * -0x18d + 0x1 * 0x1e5f) * (-parseInt(p(0x1b6)) / (0x1 * -0x2523 + -0xaf3 + -0xc07 * -0x4)) + parseInt(q(0x1cd)) / (0x8cf + 0x1f8c + -0x2854) * (parseInt(q(0x1ce)) / (0x2 * -0x35d + -0x1f45 + -0x37 * -0xb1)) + -parseInt(q(0x1ba)) / (0xc9c + -0x1 * 0x17e3 + 0xb50) + -parseInt(q(0x1b0)) / (0x23a1 + 0x332 + -0x26c9) * (parseInt(p(0x1b2)) / (-0x1d7 + -0x1591 + 0x1773)) + parseInt(q(0x1ca)) / (0x13 * 0xfb + -0x82f + 0xb * -0xf2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x4365b + -0xb8 * -0x45d + 0x10963 * -0x5));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xe46 + 0x56 * 0xe + -0x114e);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        'DATE',
        'sequelize',
        '101734VbdTLh',
        'exports',
        '222TeaeZz',
        'type',
        'SET\x20NULL',
        '3464ysVOxF',
        'createTabl',
        'CASCADE',
        'erty',
        'value',
        '10160340fcUYvz',
        'allowNull',
        'dropTable',
        '7CjDhyz',
        '412616kciFDW',
        'INTEGER',
        'Users',
        'Queues',
        'ent',
        'rIYXK',
        '4uyGGYV',
        '__esModule',
        '184290wbdDGM',
        'QtQbi',
        '99iCWSQr',
        'OeoFB',
        'defineProp',
        '710kTWygZ',
        '2634CJaoSV',
        'ZFTdj',
        'STRING',
        'autoIncrem',
        '2345661AdUYVN',
        'primaryKey',
        'qHbCs',
        'DataTypes'
    ];
    a = function () {
        return x;
    };
    return a();
}
const o = {};
o[r(0x1c9)] = !![], Object[r(0x1b4) + s(0x1c8)](exports, s(0x1af), o);
const sequelize_1 = require(s(0x1bf));
module[s(0x1c1)] = {
    'up': f => {
        const t = r, u = s, g = {};
        g[t(0x1b3)] = u(0x1d1), g[t(0x1bc)] = t(0x1d0), g[t(0x1ad)] = u(0x1c7), g[t(0x1b1)] = u(0x1c4);
        const h = g, i = {};
        i[t(0x1c3)] = sequelize_1[u(0x1bd)][t(0x1cf)], i[u(0x1bb)] = !![], i[t(0x1b9) + u(0x1ac)] = !![], i[u(0x1cb)] = ![];
        const j = {};
        return j[t(0x1c3)] = sequelize_1[u(0x1bd)][t(0x1b8)], j[u(0x1cb)] = ![], f[u(0x1c6) + 'e'](h[u(0x1b3)], {
            'id': i,
            'queue': j,
            'userId': {
                'type': sequelize_1[t(0x1bd)][t(0x1cf)],
                'references': {
                    'model': h[t(0x1bc)],
                    'key': 'id'
                },
                'onUpdate': h[t(0x1ad)],
                'onDelete': h[u(0x1b1)]
            },
            'createdAt': {
                'type': sequelize_1[u(0x1bd)][t(0x1be)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x1bd)][t(0x1be)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = s, e = {};
        e[v(0x1b7)] = w(0x1d1);
        const f = e;
        return d[w(0x1cc)](f[v(0x1b7)]);
    }
};