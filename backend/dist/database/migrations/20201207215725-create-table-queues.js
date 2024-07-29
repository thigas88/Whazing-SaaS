'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x17e)) / (-0x3 * -0x9ad + 0x1 * 0x1aba + 0x1be * -0x20) * (-parseInt(p(0x198)) / (-0xdfa + -0x336 * -0x1 + 0x563 * 0x2)) + parseInt(q(0x193)) / (-0x1 * 0x2d5 + -0xfa2 + 0x37 * 0x56) + parseInt(q(0x186)) / (0x98c + -0x955 + -0x33) + -parseInt(p(0x197)) / (-0x1463 + 0x224d + -0xde5) + parseInt(q(0x185)) / (0x13 * -0x1e9 + 0x62c + 0x1e25) + parseInt(p(0x187)) / (0x1 * -0x1a15 + 0x5 * 0x5ed + -0x385) + -parseInt(q(0x192)) / (0xbfa + -0x1434 + 0x1 * 0x842);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x43 * 0x6dac + -0x1ccb74 + -0x619 * -0xbe1));
function a() {
    const x = [
        'CASCADE',
        'DataTypes',
        'STRING',
        'value',
        'SET\x20NULL',
        'AWsSM',
        '266863AwsvPA',
        'CmrCo',
        'ent',
        'Users',
        'dropTable',
        'erty',
        'HTnPO',
        '11468904obycdN',
        '368788mqzabU',
        '4806480uJtmea',
        'allowNull',
        'autoIncrem',
        'INTEGER',
        'exports',
        'DATE',
        '__esModule',
        'defineProp',
        'JIklz',
        'createTabl',
        'sequelize',
        '2915040lqqjHx',
        '3533880bAYZNa',
        'ucBap',
        'primaryKey',
        'Queues',
        '5953845zdLZYZ',
        '10donBoF',
        'type'
    ];
    a = function () {
        return x;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x82a + 0x14ad + -0xb05);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = {};
o[r(0x19d)] = !![], Object[r(0x18e) + r(0x183)](exports, s(0x18d), o);
const sequelize_1 = require(r(0x191));
module[s(0x18b)] = {
    'up': f => {
        const t = r, u = r, g = {};
        g[t(0x18f)] = t(0x196), g[t(0x194)] = t(0x181), g[u(0x184)] = t(0x19a), g[t(0x17f)] = t(0x19e);
        const h = g, i = {};
        i[t(0x199)] = sequelize_1[u(0x19b)][u(0x18a)], i[u(0x195)] = !![], i[t(0x189) + t(0x180)] = !![], i[t(0x188)] = ![];
        const j = {};
        return j[u(0x199)] = sequelize_1[t(0x19b)][t(0x19c)], j[u(0x188)] = ![], f[t(0x190) + 'e'](h[t(0x18f)], {
            'id': i,
            'queue': j,
            'userId': {
                'type': sequelize_1[u(0x19b)][t(0x18a)],
                'references': {
                    'model': h[u(0x194)],
                    'key': 'id'
                },
                'onUpdate': h[u(0x184)],
                'onDelete': h[u(0x17f)]
            },
            'createdAt': {
                'type': sequelize_1[t(0x19b)][u(0x18c)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0x19b)][t(0x18c)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = s, e = {};
        e[v(0x19f)] = w(0x196);
        const f = e;
        return d[v(0x182)](f[w(0x19f)]);
    }
};