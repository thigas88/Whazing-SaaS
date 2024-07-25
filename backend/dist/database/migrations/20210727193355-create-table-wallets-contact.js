'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xde)) / (-0x219e + -0x1634 + 0x37d3) + -parseInt(r(0xdf)) / (0xaba + -0x5 * 0x566 + 0x1046) * (-parseInt(s(0xe4)) / (-0x2 * 0x859 + 0x14ce * -0x1 + 0x123 * 0x21)) + parseInt(s(0xef)) / (0x1 * -0x24bf + 0x1f64 + 0x55f) * (-parseInt(s(0xfc)) / (0x1197 + -0x247 * -0xb + 0x1 * -0x2a9f)) + parseInt(s(0xe3)) / (-0x4 * 0x485 + 0xf92 + -0x24 * -0x12) * (-parseInt(s(0xf5)) / (0x1771 * 0x1 + 0x1eca + -0x3634)) + -parseInt(r(0xee)) / (0x12be + 0x1015 + 0x3 * -0xb99) * (parseInt(r(0xf7)) / (-0x2167 + 0x3 * -0x96a + 0x3dae)) + -parseInt(s(0xe6)) / (0x1d5f * 0x1 + 0x4 * -0x39d + -0xee1) + parseInt(s(0xfd)) / (-0x1 * 0x2067 + 0x2368 + -0x2f6) * (parseInt(s(0xe1)) / (-0x1 * 0x244a + 0x1950 + -0x2 * -0x583));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xf446 + -0xa72d * 0x1 + 0x706 * 0x14d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1502 + 0xa5c + -0xf44 * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = {};
function a() {
    const z = [
        'Tenants',
        '617569yHvMVV',
        '20IvhvZJ',
        'crmHM',
        '3850104DMPMVA',
        'uhUse',
        '4496586XsMPZw',
        '33720mfIzKk',
        'type',
        '8754860ubsevZ',
        'autoIncrem',
        'eXaDx',
        'INTEGER',
        'createTabl',
        'Contacts',
        'Users',
        'ezxwo',
        '176632XXgtDM',
        '8zgotmF',
        'defineProp',
        'ContactWal',
        'sequelize',
        'erty',
        'CASCADE',
        '7BDfsSn',
        '__esModule',
        '333JPtPIM',
        'ent',
        'allowNull',
        'DATE',
        'lets',
        '222125umKpRS',
        '121qrzPGi',
        'DataTypes',
        'dropTable',
        'primaryKey',
        'uAJNn',
        'value',
        'exports',
        'RMVqV'
    ];
    a = function () {
        return z;
    };
    return a();
}
q[t(0xda)] = !![], Object[u(0xf0) + t(0xf3)](exports, u(0xf6), q);
const sequelize_1 = require(t(0xf2));
module[t(0xdb)] = {
    'up': e => {
        const v = u, w = t, f = {};
        f[v(0xe2)] = w(0xf1) + w(0xfb), f[v(0xed)] = w(0xec), f[v(0xd9)] = v(0xf4), f[w(0xe0)] = v(0xeb), f[v(0xdc)] = v(0xdd);
        const g = f, h = {};
        return h[v(0xe5)] = sequelize_1[v(0xd6)][v(0xe9)], h[v(0xe7) + v(0xf8)] = !![], h[w(0xd8)] = !![], h[v(0xf9)] = ![], e[w(0xea) + 'e'](g[v(0xe2)], {
            'id': h,
            'walletId': {
                'type': sequelize_1[w(0xd6)][w(0xe9)],
                'references': {
                    'model': g[w(0xed)],
                    'key': 'id'
                },
                'onUpdate': g[v(0xd9)],
                'onDelete': g[w(0xd9)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[v(0xd6)][v(0xe9)],
                'references': {
                    'model': g[w(0xe0)],
                    'key': 'id'
                },
                'onUpdate': g[v(0xd9)],
                'onDelete': g[v(0xd9)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[w(0xd6)][v(0xe9)],
                'references': {
                    'model': g[w(0xdc)],
                    'key': 'id'
                },
                'onUpdate': g[w(0xd9)],
                'onDelete': g[w(0xd9)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[w(0xd6)][v(0xfa)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0xd6)][w(0xfa)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0xe8)] = y(0xf1) + y(0xfb);
        const f = e;
        return d[x(0xd7)](f[y(0xe8)]);
    }
};