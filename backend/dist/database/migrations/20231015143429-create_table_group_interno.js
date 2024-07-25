'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x142)) / (-0x12d + -0x1d8 + 0x306) * (parseInt(p(0x136)) / (0x1 * -0x1733 + -0xa33 * 0x1 + 0x4 * 0x85a)) + -parseInt(p(0x13f)) / (-0x25 * -0xd5 + -0x188 * -0x17 + -0x41fe) * (-parseInt(q(0x13a)) / (-0x1b94 + 0x4be * 0x3 + -0x3b * -0x3a)) + -parseInt(q(0x155)) / (0x31a * 0x3 + 0x988 + -0x12d1) + parseInt(p(0x14b)) / (0x2 * -0x173 + -0x9 * -0x3fd + -0x20f9) + parseInt(q(0x143)) / (0x1 * -0x1706 + 0x279 * -0x1 + 0x1986) * (-parseInt(p(0x153)) / (0x17f7 + 0x1 * 0xe2a + -0x2619)) + parseInt(p(0x13d)) / (-0xf5b * 0x2 + 0x1d * 0x59 + -0xe6 * -0x17) + parseInt(p(0x139)) / (0x1 * 0x1d82 + -0x295 * -0x3 + -0x2537) * (-parseInt(q(0x148)) / (0x24ed + 0x1d3c + -0x421e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x3ebd5 + -0x1 * 0xafdbf + 0x12cf7 * 0xd));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x16f2 + -0x119 * -0x1f + 0x1 * -0x9e3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = {};
function a() {
    const x = [
        '2854672Lqwdxh',
        'INTEGER',
        '2259990ElnUOn',
        'VRptz',
        '__esModule',
        'erty',
        'QExAn',
        'ent',
        '130AdLewD',
        'defineProp',
        'DATE',
        '14013610rNAJlJ',
        '1291308bWHoGb',
        'sequelize',
        'SET\x20NULL',
        '7214175FtSRsg',
        'Users',
        '9pKwhkA',
        'primaryKey',
        'yTqvs',
        '5449UkEeKB',
        '7CXNMHI',
        'dropTable',
        'autoIncrem',
        'exports',
        'allowNull',
        '11nRPYXj',
        'createTabl',
        'EYvqS',
        '3745350FiiMAb',
        'CASCADE',
        'value',
        'Groups',
        'DataTypes',
        'STRING',
        'type',
        'hmVRS'
    ];
    a = function () {
        return x;
    };
    return a();
}
o[r(0x14d)] = !![], Object[s(0x137) + r(0x133)](exports, r(0x132), o);
const sequelize_1 = require(r(0x13b));
module[s(0x146)] = {
    'up': f => {
        const t = r, u = r, g = {};
        g[t(0x14a)] = t(0x14e), g[u(0x141)] = t(0x13e), g[t(0x134)] = t(0x14c), g[u(0x152)] = t(0x13c);
        const h = g, i = {};
        i[u(0x151)] = sequelize_1[t(0x14f)][t(0x154)], i[u(0x140)] = !![], i[t(0x145) + t(0x135)] = !![], i[u(0x147)] = ![];
        const j = {};
        return j[u(0x151)] = sequelize_1[u(0x14f)][u(0x150)], j[u(0x147)] = ![], f[t(0x149) + 'e'](h[t(0x14a)], {
            'id': i,
            'group': j,
            'userId': {
                'type': sequelize_1[t(0x14f)][u(0x154)],
                'references': {
                    'model': h[t(0x141)],
                    'key': 'id'
                },
                'onUpdate': h[t(0x134)],
                'onDelete': h[t(0x152)]
            },
            'createdAt': {
                'type': sequelize_1[t(0x14f)][u(0x138)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0x14f)][u(0x138)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = s, e = {};
        e[v(0x156)] = w(0x14e);
        const f = e;
        return d[v(0x144)](f[v(0x156)]);
    }
};