'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x1a5)) / (-0xbda + 0x39e + 0x83d) * (parseInt(r(0x191)) / (0x2f * 0x95 + -0x1c34 + -0x49 * -0x3)) + -parseInt(s(0x17f)) / (-0x4 * 0x49d + 0x85e + 0xa19) + -parseInt(r(0x181)) / (-0xe51 * -0x1 + 0x1c0 + 0x1 * -0x100d) + -parseInt(s(0x19b)) / (0x1 * 0x5ed + 0x2 * 0xcd8 + 0x3 * -0xa88) * (-parseInt(s(0x199)) / (-0x41 * 0x6d + 0x1465 + 0x74e)) + parseInt(s(0x186)) / (-0x17ce + 0xd70 + 0xa65 * 0x1) * (-parseInt(r(0x19d)) / (0x346 + 0x91 * -0x2c + 0x15ae)) + -parseInt(r(0x195)) / (-0xcfa + 0x31 * 0x6f + -0x83c) + parseInt(s(0x18f)) / (0xb6f * -0x1 + -0xa52 + 0x31d * 0x7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xc88d9 + 0x9b3d1 + -0xfe5d3));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2220 + 0x2450 + -0x44f1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const z = [
        '2305924zlVnVO',
        'type',
        'RESTRICT',
        'gBqXE',
        'Contacts',
        '7wFtFxu',
        'sequelize',
        'INTEGER',
        'defineProp',
        'jcPap',
        'rUkPq',
        'qoykL',
        'DATE',
        'ContactTag',
        '17019950NpxCJm',
        'psBjl',
        '16OCGgzs',
        'Tags',
        'dRUvf',
        'erty',
        '6449022zpcjZa',
        'Tenants',
        'dropTable',
        'autoIncrem',
        '24Xwjkkz',
        'value',
        '1025665bqUylX',
        'tGALC',
        '196376dbuKZt',
        'primaryKey',
        '__esModule',
        'ent',
        'allowNull',
        'exports',
        'createTabl',
        'DataTypes',
        '20110siHmas',
        '1885842hcKAZQ',
        'CASCADE'
    ];
    a = function () {
        return z;
    };
    return a();
}
const q = {};
q[t(0x19a)] = !![], Object[t(0x189) + u(0x194)](exports, u(0x19f), q);
const sequelize_1 = require(u(0x187));
module[u(0x1a2)] = {
    'up': e => {
        const v = u, w = u, f = {};
        f[v(0x19c)] = w(0x18e) + 's', f[w(0x18c)] = v(0x192), f[w(0x193)] = v(0x180), f[w(0x18a)] = w(0x183), f[w(0x184)] = w(0x185), f[v(0x18b)] = v(0x196);
        const g = f, h = {};
        return h[w(0x182)] = sequelize_1[v(0x1a4)][v(0x188)], h[w(0x198) + v(0x1a0)] = !![], h[v(0x19e)] = !![], h[v(0x1a1)] = ![], e[w(0x1a3) + 'e'](g[w(0x19c)], {
            'id': h,
            'tagId': {
                'type': sequelize_1[w(0x1a4)][v(0x188)],
                'references': {
                    'model': g[w(0x18c)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x193)],
                'onDelete': g[w(0x18a)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[w(0x1a4)][v(0x188)],
                'references': {
                    'model': g[w(0x184)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x193)],
                'onDelete': g[w(0x193)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[w(0x1a4)][v(0x188)],
                'references': {
                    'model': g[v(0x18b)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x193)],
                'onDelete': g[v(0x193)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[v(0x1a4)][v(0x18d)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0x1a4)][v(0x18d)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = t, y = u, e = {};
        e[x(0x190)] = x(0x18e) + 's';
        const f = e;
        return d[x(0x197)](f[x(0x190)]);
    }
};