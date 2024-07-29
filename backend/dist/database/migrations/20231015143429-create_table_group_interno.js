'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x114)) / (-0x19c * -0x7 + 0x1 * -0xa1c + -0x127) * (-parseInt(q(0x11c)) / (0x657 + 0x7e6 + 0x1 * -0xe3b)) + -parseInt(p(0x122)) / (0x39 + -0xb77 + -0x1 * -0xb41) + parseInt(q(0x12b)) / (-0x5d1 + 0x1667 + 0x6 * -0x2c3) + parseInt(p(0x118)) / (0x167a + 0x215 * -0x3 + -0x1036 * 0x1) + parseInt(p(0x130)) / (0x69 * 0x51 + 0x8 * 0x226 + -0x1 * 0x3263) + parseInt(p(0x113)) / (-0x1f95 + -0x7 * 0x2bd + 0x32c7) + -parseInt(p(0x11f)) / (-0x72d + 0x1d0e + -0x15d9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x202b3 + 0x6eef4 + 0x1d * 0x1e9e));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x171f + -0x5 * -0x2fc + -0x24fc);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        'Ndzge',
        '2xnaPqV',
        'STRING',
        'primaryKey',
        '16347712JpqrTn',
        'Users',
        'kyOfR',
        '1601544nXIyts',
        'sequelize',
        'ugjYB',
        'dropTable',
        'defineProp',
        '__esModule',
        'type',
        'value',
        'erty',
        '1515504cpouNa',
        'CASCADE',
        'allowNull',
        'Groups',
        'INTEGER',
        '3259134dmXhAY',
        'DATE',
        'createTabl',
        'HQLpZ',
        'ent',
        '3451903XSseGM',
        '1084145FEIHKc',
        'LhUNB',
        'DataTypes',
        'exports',
        '3139500CSFdLq',
        'autoIncrem',
        'SET\x20NULL'
    ];
    a = function () {
        return x;
    };
    return a();
}
const o = {};
o[r(0x129)] = !![], Object[s(0x126) + s(0x12a)](exports, r(0x127), o);
const sequelize_1 = require(r(0x123));
module[r(0x117)] = {
    'up': f => {
        const t = r, u = r, g = {};
        g[t(0x124)] = t(0x12e), g[u(0x111)] = u(0x120), g[u(0x115)] = t(0x12c), g[u(0x121)] = u(0x11a);
        const h = g, i = {};
        i[t(0x128)] = sequelize_1[u(0x116)][u(0x12f)], i[t(0x11e)] = !![], i[u(0x119) + t(0x112)] = !![], i[u(0x12d)] = ![];
        const j = {};
        return j[u(0x128)] = sequelize_1[u(0x116)][u(0x11d)], j[u(0x12d)] = ![], f[t(0x110) + 'e'](h[u(0x124)], {
            'id': i,
            'group': j,
            'userId': {
                'type': sequelize_1[t(0x116)][t(0x12f)],
                'references': {
                    'model': h[t(0x111)],
                    'key': 'id'
                },
                'onUpdate': h[u(0x115)],
                'onDelete': h[t(0x121)]
            },
            'createdAt': {
                'type': sequelize_1[t(0x116)][u(0x10f)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0x116)][u(0x10f)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = s, e = {};
        e[v(0x11b)] = w(0x12e);
        const f = e;
        return d[w(0x125)](f[v(0x11b)]);
    }
};