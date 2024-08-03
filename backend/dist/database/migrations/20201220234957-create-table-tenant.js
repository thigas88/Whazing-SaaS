'use strict';
function a() {
    const x = [
        'ent',
        'createTabl',
        '775940LRTxME',
        '45SAfemA',
        'primaryKey',
        '__esModule',
        'restrict',
        'bzMwd',
        'erty',
        'defineProp',
        'Yrfcb',
        '10410224fuMlgp',
        'VdlrC',
        'rCnNj',
        '114324uwoRHg',
        'allowNull',
        'DataTypes',
        '308021wSFmWA',
        'active',
        'Tenants',
        '2224138ADrbxw',
        'STRING',
        'sequelize',
        'DATE',
        'type',
        'INTEGER',
        '881175MUiJAQ',
        'vyeFp',
        'value',
        'dropTable',
        'CASCADE',
        '767552jmhIrs',
        'CPDje',
        'autoIncrem',
        'Users',
        'exports'
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
            const f = -parseInt(p(0x8f)) / (-0x413 * 0x4 + 0x325 * 0x5 + -0x94 * -0x1) + -parseInt(q(0x9d)) / (0xcdb + -0x4e0 * -0x6 + -0x2a19) + parseInt(p(0x98)) / (0x2103 + 0x1 * 0x12ad + 0x33ad * -0x1) + -parseInt(q(0x80)) / (0x4af * 0x3 + 0x1fa3 * -0x1 + 0x5de * 0x3) + parseInt(q(0x81)) / (0x8 * 0x20e + 0x3d * 0x58 + -0x2563) * (-parseInt(p(0x8c)) / (-0x1 * -0x1983 + 0x24e5 + -0x2 * 0x1f31)) + -parseInt(q(0x92)) / (-0x173a * -0x1 + -0x133c + -0x3f7) + parseInt(p(0x89)) / (0xd7b + -0x4 * -0x342 + -0x1a7b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xb0c * -0x97 + -0x61c46 * -0x1 + -0x23 * -0x1b85));
const o = {};
o[r(0x9a)] = !![], Object[r(0x87) + r(0x86)](exports, r(0x83), o);
const sequelize_1 = require(s(0x94));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x449 * 0x5 + 0xd * -0x71 + 0x1d8 * 0xf);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[s(0xa1)] = {
    'up': e => {
        const t = s, u = s, f = {};
        f[t(0x99)] = u(0x91), f[t(0x8b)] = t(0x90), f[u(0x88)] = u(0xa0), f[t(0x8a)] = t(0x9c), f[t(0x9e)] = u(0x84);
        const g = f, h = {};
        return h[u(0x96)] = sequelize_1[u(0x8e)][t(0x97)], h[u(0x9f) + u(0x7e)] = !![], h[t(0x82)] = !![], h[u(0x8d)] = ![], e[u(0x7f) + 'e'](g[t(0x99)], {
            'id': h,
            'status': {
                'type': sequelize_1[u(0x8e)][u(0x93)],
                'defaultValue': g[t(0x8b)],
                'allowNull': ![]
            },
            'ownerId': {
                'type': sequelize_1[u(0x8e)][u(0x97)],
                'references': {
                    'model': g[t(0x88)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x8a)],
                'onDelete': g[u(0x9e)]
            },
            'createdAt': {
                'type': sequelize_1[u(0x8e)][u(0x95)](0x1aa2 + 0xd33 + -0x2b * 0xed),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0x8e)][u(0x95)](-0xf0c + 0x67 * 0xa + 0xb0c),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = r, e = {};
        e[v(0x85)] = v(0x91);
        const f = e;
        return d[v(0x9b)](f[w(0x85)]);
    }
};