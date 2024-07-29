'use strict';
function a() {
    const x = [
        'primaryKey',
        'Users',
        '2528SWrYNk',
        '20kupaBM',
        'allowNull',
        'WGGBZ',
        '23555VTbaDN',
        'type',
        'gjRaT',
        'TgMeF',
        'defineProp',
        'INTEGER',
        'UsersGroup',
        '531FsfScf',
        'vQMWG',
        'sequelize',
        '656737FCEMzP',
        '906ZzfMUb',
        'CASCADE',
        'DataTypes',
        '__esModule',
        'erty',
        'DATE',
        '6635943RYmrsj',
        'value',
        'dropTable',
        'exports',
        '4985472aPARwC',
        'Groups',
        '1596511srDxiS',
        'UsersQueue',
        'ent',
        '2407780ysJuAw',
        'jfArf',
        'autoIncrem',
        'createTabl'
    ];
    a = function () {
        return x;
    };
    return a();
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x145)) / (-0x655 * -0x3 + 0x1811 + -0x2b0f) + -parseInt(q(0x15b)) / (-0x6d * -0x1b + 0x48b * -0x6 + 0x1 * 0xfc5) * (-parseInt(q(0x142)) / (-0xcd3 * -0x3 + -0x1a * 0x1a + -0x23d2)) + -parseInt(q(0x155)) / (-0x925 * -0x1 + -0x26c8 + 0x1 * 0x1da7) + parseInt(q(0x15f)) / (-0x1abc + 0x3 * 0x46e + -0x9 * -0x17f) * (parseInt(p(0x146)) / (0x1dff + 0x5d * 0x1f + 0x7 * -0x5e4)) + parseInt(q(0x152)) / (0xb * 0x97 + 0x1ee3 * -0x1 + 0x1 * 0x186d) + parseInt(p(0x150)) / (-0x20a1 * 0x1 + 0x8 * 0xd4 + -0x9b * -0x2b) + -parseInt(p(0x14c)) / (0x1f47 + -0xdd3 + -0x116b * 0x1) * (parseInt(q(0x15c)) / (0xa39 + 0xd9 + -0xb08 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1f705 * -0x5 + -0x397d9 + -0x5 * 0x20bc));
const o = {};
o[r(0x14d)] = !![], Object[s(0x13f) + r(0x14a)](exports, s(0x149), o);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * -0xa0f + 0xedb + -0x21bb);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(r(0x144));
module[r(0x14f)] = {
    'up': e => {
        const t = s, u = r, f = {};
        f[t(0x143)] = t(0x141) + 's', f[u(0x156)] = t(0x151), f[u(0x161)] = t(0x147), f[t(0x13e)] = t(0x15a);
        const g = f, h = {};
        return h[u(0x160)] = sequelize_1[t(0x148)][u(0x140)], h[u(0x159)] = !![], h[u(0x157) + u(0x154)] = !![], h[u(0x15d)] = ![], e[u(0x158) + 'e'](g[u(0x143)], {
            'id': h,
            'groupId': {
                'type': sequelize_1[t(0x148)][u(0x140)],
                'references': {
                    'model': g[u(0x156)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x161)],
                'onDelete': g[t(0x161)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[t(0x148)][u(0x140)],
                'references': {
                    'model': g[t(0x13e)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x161)],
                'onDelete': g[t(0x161)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[u(0x148)][t(0x14b)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0x148)][t(0x14b)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = s, e = {};
        e[v(0x15e)] = w(0x153) + 's';
        const f = e;
        return d[v(0x14e)](f[w(0x15e)]);
    }
};