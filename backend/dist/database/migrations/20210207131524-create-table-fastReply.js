'use strict';
const v = b, w = b;
function a() {
    const B = [
        'DataTypes',
        'primaryKey',
        '1518856DUdsQo',
        'TEXT',
        'DATE',
        '43494soaFUQ',
        'erty',
        'FfRxp',
        'allowNull',
        '__esModule',
        'dropTable',
        'ent',
        'LKNZV',
        '1644108rmwCQS',
        'exports',
        'EuUXA',
        'Tenants',
        '25TbGMCb',
        'SET\x20NULL',
        '874482QOjgbd',
        '1758337JUMOvF',
        'type',
        '601036NiFHYM',
        'defineProp',
        'STRING',
        'rxunQ',
        '1318670eSkJWb',
        'sequelize',
        'CASCADE',
        'Users',
        'INTEGER',
        'autoIncrem',
        'createTabl',
        'value',
        'LtgTg',
        'FastReply',
        'ulDZV'
    ];
    a = function () {
        return B;
    };
    return a();
}
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x135)) / (-0x495 + -0x1 * 0x2429 + 0x28bf) + parseInt(u(0x139)) / (-0x1a6a * -0x1 + 0x2521 * 0x1 + -0x1 * 0x3f89) + parseInt(t(0x124)) / (-0x1bb7 + 0x1b0f + 0xab) + -parseInt(u(0x12c)) / (0x17c4 + 0x12d9 + -0x2d7 * 0xf) + -parseInt(u(0x130)) / (-0x833 * -0x1 + 0x13f * -0x7 + -0x1 * -0x8b) * (-parseInt(u(0x132)) / (-0x140f + 0x6 * 0x4b8 + -0x83b)) + parseInt(t(0x133)) / (-0x10cb * -0x2 + 0x1fd7 + -0x5f2 * 0xb) + -parseInt(u(0x146)) / (-0xa77 * 0x1 + -0x10 * -0xcb + -0x231);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x91ca9 + 0x2 * 0x5d50 + 0xf4708));
const s = {};
s[v(0x140)] = !![], Object[v(0x136) + v(0x125)](exports, w(0x128), s);
const sequelize_1 = require(w(0x13a));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb5d + 0x1499 * -0x1 + -0x26 * -0xdf);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[v(0x12d)] = {
    'up': g => {
        const x = v, y = w, h = {};
        h[x(0x12e)] = y(0x142), h[x(0x141)] = y(0x13c), h[x(0x12b)] = x(0x13b), h[x(0x138)] = y(0x131), h[x(0x126)] = y(0x12f);
        const i = h, j = {};
        j[x(0x134)] = sequelize_1[x(0x144)][y(0x13d)], j[x(0x13e) + x(0x12a)] = !![], j[y(0x145)] = !![], j[y(0x127)] = ![];
        const k = {};
        k[y(0x134)] = sequelize_1[y(0x144)][y(0x137)], k[y(0x127)] = ![];
        const l = {};
        return l[y(0x134)] = sequelize_1[x(0x144)][x(0x147)], l[y(0x127)] = ![], g[x(0x13f) + 'e'](i[x(0x12e)], {
            'id': j,
            'key': k,
            'message': l,
            'userId': {
                'type': sequelize_1[x(0x144)][x(0x13d)],
                'references': {
                    'model': i[x(0x141)],
                    'key': 'id'
                },
                'onUpdate': i[x(0x12b)],
                'onDelete': i[y(0x138)]
            },
            'tenantId': {
                'type': sequelize_1[y(0x144)][y(0x13d)],
                'references': {
                    'model': i[y(0x126)],
                    'key': 'id'
                },
                'onUpdate': i[y(0x12b)],
                'onDelete': i[x(0x12b)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'createdAt': {
                'type': sequelize_1[x(0x144)][x(0x148)](-0x1d0a + -0x7 * 0x3c1 + 0x3757),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[x(0x144)][x(0x148)](-0x3a * -0x30 + -0x3 * -0x20a + -0x10f8),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = v, A = v, e = {};
        e[z(0x143)] = A(0x142);
        const f = e;
        return d[A(0x129)](f[A(0x143)]);
    }
};