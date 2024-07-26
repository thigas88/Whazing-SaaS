'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x177)) / (0x3bd * -0x4 + -0x13b9 + -0x182 * -0x17) + -parseInt(p(0x17d)) / (-0x133 * -0x9 + -0x1093 + 0x5ca) * (parseInt(q(0x17e)) / (-0x173e + 0x2173 + -0xa32)) + -parseInt(q(0x164)) / (0x553 + -0x1 * 0x1f61 + -0x2f * -0x8e) + -parseInt(q(0x15e)) / (-0x5d1 * -0x2 + 0x92a + 0x24f * -0x9) + -parseInt(q(0x175)) / (0x9b8 + 0x13 * 0x13d + 0x51 * -0x69) * (parseInt(q(0x15b)) / (-0x2 * -0x1017 + 0x421 * -0x7 + -0x340)) + -parseInt(p(0x176)) / (0x22cf + 0x362 * 0x1 + -0x2629) + parseInt(q(0x15d)) / (0x1877 + 0xfe + -0x196c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6862a + -0xf2a94 + 0x4 * 0x4b8c3));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x1977 + 0x61 * -0x25 + -0xa18);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = {};
function a() {
    const x = [
        '6335280aDHHow',
        'DATE',
        'primaryKey',
        'restrict',
        'active',
        'exports',
        '619692HFOtfN',
        'INTEGER',
        'xnYoD',
        'CASCADE',
        'dropTable',
        'Users',
        'type',
        'defineProp',
        'createTabl',
        'YdPjw',
        '__esModule',
        'allowNull',
        'DataTypes',
        'STRING',
        'sequelize',
        'XgqnW',
        'Tenants',
        '1212EhCoam',
        '6356816kbxfYc',
        '995449AtFeWJ',
        'ent',
        'NyfsB',
        'value',
        'autoIncrem',
        'erty',
        '4ihLFvW',
        '384978MCIHNG',
        'XxVJi',
        '13153phmPYv',
        'CAYsy',
        '40676706agiIbP'
    ];
    a = function () {
        return x;
    };
    return a();
}
o[r(0x17a)] = !![], Object[r(0x16b) + r(0x17c)](exports, r(0x16e), o);
const sequelize_1 = require(s(0x172));
module[s(0x163)] = {
    'up': e => {
        const t = r, u = s, f = {};
        f[t(0x179)] = t(0x174), f[u(0x16d)] = u(0x162), f[u(0x15a)] = t(0x169), f[t(0x173)] = t(0x167), f[u(0x166)] = u(0x161);
        const g = f, h = {};
        return h[u(0x16a)] = sequelize_1[u(0x170)][t(0x165)], h[u(0x17b) + t(0x178)] = !![], h[u(0x160)] = !![], h[t(0x16f)] = ![], e[u(0x16c) + 'e'](g[t(0x179)], {
            'id': h,
            'status': {
                'type': sequelize_1[t(0x170)][t(0x171)],
                'defaultValue': g[t(0x16d)],
                'allowNull': ![]
            },
            'ownerId': {
                'type': sequelize_1[t(0x170)][t(0x165)],
                'references': {
                    'model': g[u(0x15a)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x173)],
                'onDelete': g[t(0x166)]
            },
            'createdAt': {
                'type': sequelize_1[t(0x170)][t(0x15f)](0xf10 + 0x5 * -0x5df + 0xe51),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x170)][t(0x15f)](0x385 + 0x1a6c + -0x1deb),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = s, e = {};
        e[v(0x15c)] = w(0x174);
        const f = e;
        return d[v(0x168)](f[v(0x15c)]);
    }
};