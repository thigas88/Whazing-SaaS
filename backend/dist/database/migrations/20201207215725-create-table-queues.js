'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xdd)) / (-0x905 * 0x2 + 0x2201 + -0x2a9 * 0x6) * (-parseInt(q(0xcd)) / (-0x1 * 0x1fd8 + -0x1b * 0x131 + 0x1557 * 0x3)) + parseInt(p(0xd2)) / (0xa3 * -0x34 + 0x143a + 0xce5) * (parseInt(q(0xd5)) / (-0x21 * -0xc1 + -0x727 * -0x5 + 0x2 * -0x1e50)) + -parseInt(p(0xca)) / (-0xf * 0x45 + 0x1 * 0x1333 + 0x1 * -0xf23) + -parseInt(q(0xd7)) / (-0x492 + 0x225c + 0x7f * -0x3c) + -parseInt(q(0xc4)) / (0x24de + 0x2 * -0xa85 + 0x329 * -0x5) * (-parseInt(q(0xe5)) / (-0x1cce * -0x1 + 0x57 * -0x37 + -0xa15)) + parseInt(p(0xe4)) / (0x2 * 0x502 + -0x1 * -0xcfd + -0x16f8 * 0x1) * (-parseInt(q(0xcc)) / (-0x8 * -0x406 + -0xb * -0x27 + -0x21d3)) + parseInt(q(0xcb)) / (0xd16 + 0x13e5 + 0x1 * -0x20f0) * (parseInt(p(0xd1)) / (-0x34 * 0x44 + 0x868 + 0x574));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x66279 + 0xa8d6a + -0xa6296));
function a() {
    const x = [
        'primaryKey',
        '1467470WLWlHd',
        '11jMpLFR',
        '1211290NSssDR',
        '10sdnpqS',
        'type',
        'ent',
        'CASCADE',
        '10195116PDWfLq',
        '2525826GrxpyQ',
        'hUWhW',
        'dropTable',
        '4SSSQNI',
        'FXtJi',
        '4173240sHpCfs',
        'Queues',
        'INTEGER',
        'createTabl',
        'DATE',
        'DataTypes',
        '138025BDVYYd',
        'value',
        'SET\x20NULL',
        'allowNull',
        'sNwjk',
        'STRING',
        'biqwi',
        '9FtMYqJ',
        '176pxQoLi',
        'RbyKH',
        'Users',
        'erty',
        'autoIncrem',
        '171227kBbYWi',
        'exports',
        'sequelize',
        '__esModule',
        'defineProp'
    ];
    a = function () {
        return x;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4 * -0x7cd + -0x1 * 0xc55 + -0x121e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = {};
o[r(0xde)] = !![], Object[r(0xc8) + s(0xc2)](exports, s(0xc7), o);
const sequelize_1 = require(r(0xc6));
module[r(0xc5)] = {
    'up': f => {
        const t = s, u = s, g = {};
        g[t(0xe6)] = t(0xd8), g[t(0xd6)] = u(0xc1), g[u(0xe3)] = u(0xd0), g[u(0xd3)] = t(0xdf);
        const h = g, i = {};
        i[t(0xce)] = sequelize_1[u(0xdc)][t(0xd9)], i[u(0xc9)] = !![], i[u(0xc3) + t(0xcf)] = !![], i[u(0xe0)] = ![];
        const j = {};
        return j[u(0xce)] = sequelize_1[u(0xdc)][u(0xe2)], j[t(0xe0)] = ![], f[t(0xda) + 'e'](h[u(0xe6)], {
            'id': i,
            'queue': j,
            'userId': {
                'type': sequelize_1[t(0xdc)][t(0xd9)],
                'references': {
                    'model': h[t(0xd6)],
                    'key': 'id'
                },
                'onUpdate': h[u(0xe3)],
                'onDelete': h[u(0xd3)]
            },
            'createdAt': {
                'type': sequelize_1[u(0xdc)][t(0xdb)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0xdc)][u(0xdb)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = s, e = {};
        e[v(0xe1)] = w(0xd8);
        const f = e;
        return d[v(0xd4)](f[w(0xe1)]);
    }
};