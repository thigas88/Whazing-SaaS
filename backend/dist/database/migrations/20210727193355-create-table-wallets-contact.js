'use strict';
const t = b, u = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * -0x3c3 + 0xd03 * 0x1 + -0x2 * 0x289);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x83)) / (-0x13cf * -0x1 + -0x780 + -0xc4e) + -parseInt(r(0x7d)) / (-0x1d * -0xc7 + -0x4e7 * -0x3 + -0x129f * 0x2) * (-parseInt(s(0x6b)) / (0x86d * -0x4 + 0xf67 + 0x1250)) + -parseInt(r(0x7b)) / (-0x10da + 0x5f + -0x107f * -0x1) + -parseInt(r(0x74)) / (-0x235d + 0xaaa + 0x18b8) + parseInt(s(0x76)) / (0xb2 * 0x26 + 0x2598 + 0x1 * -0x3ffe) * (-parseInt(s(0x8c)) / (0x3 * 0x30d + 0x3 * 0x44b + -0x1601)) + parseInt(r(0x81)) / (-0x1ad6 + -0x1 * 0xa3d + 0x251b) * (-parseInt(s(0x8e)) / (0xf36 * 0x2 + 0x270f + -0x4572)) + -parseInt(r(0x6d)) / (0x73d + -0x2b * 0x3 + -0x6b2) * (-parseInt(s(0x7a)) / (-0x3 * 0x199 + -0x1b40 + 0x2016));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3e121 + 0x295 * 0x175 + 0x1 * 0x2b052));
function a() {
    const z = [
        'ContactWal',
        'type',
        '2168mzxBqn',
        'Users',
        '243194ieUhwb',
        'autoIncrem',
        'CASCADE',
        'tVaOu',
        'primaryKey',
        'Tenants',
        'dropTable',
        'GfQjg',
        'qCOzf',
        '1891330ONwabr',
        'exports',
        '2952ZLWGEb',
        'erty',
        'lets',
        'Hxrca',
        '27663lBInBS',
        'value',
        '87610LRBfMY',
        'DATE',
        'allowNull',
        'gjscN',
        'DataTypes',
        'sequelize',
        'defineProp',
        '1089315HGiORr',
        '__esModule',
        '6mbrcJu',
        'ent',
        'Eaxsd',
        'INTEGER',
        '1606alkDvM',
        '1346216zWIhIS',
        'Contacts',
        '10BBQLDJ',
        'createTabl'
    ];
    a = function () {
        return z;
    };
    return a();
}
const q = {};
q[t(0x6c)] = !![], Object[u(0x73) + u(0x8f)](exports, u(0x75), q);
const sequelize_1 = require(u(0x72));
module[t(0x8d)] = {
    'up': e => {
        const v = t, w = u, f = {};
        f[v(0x78)] = w(0x7f) + w(0x90), f[w(0x70)] = v(0x82), f[w(0x8b)] = v(0x85), f[w(0x91)] = w(0x7c), f[v(0x8a)] = v(0x88);
        const g = f, h = {};
        return h[v(0x80)] = sequelize_1[v(0x71)][w(0x79)], h[v(0x84) + w(0x77)] = !![], h[v(0x87)] = !![], h[w(0x6f)] = ![], e[v(0x7e) + 'e'](g[v(0x78)], {
            'id': h,
            'walletId': {
                'type': sequelize_1[v(0x71)][w(0x79)],
                'references': {
                    'model': g[w(0x70)],
                    'key': 'id'
                },
                'onUpdate': g[v(0x8b)],
                'onDelete': g[v(0x8b)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[w(0x71)][v(0x79)],
                'references': {
                    'model': g[w(0x91)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x8b)],
                'onDelete': g[w(0x8b)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[v(0x71)][v(0x79)],
                'references': {
                    'model': g[w(0x8a)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x8b)],
                'onDelete': g[w(0x8b)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[v(0x71)][v(0x6e)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[w(0x71)][w(0x6e)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = t, y = u, e = {};
        e[x(0x86)] = x(0x7f) + x(0x90);
        const f = e;
        return d[y(0x89)](f[y(0x86)]);
    }
};