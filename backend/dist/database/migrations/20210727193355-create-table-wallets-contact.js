'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x1b5)) / (-0x186e + 0xae * -0x4 + 0x1b27) + parseInt(r(0x1b8)) / (0x2 * 0x4e4 + 0x1cb9 + -0x3 * 0xcd5) * (parseInt(r(0x1cb)) / (-0x7 * -0x41b + -0x2077 * 0x1 + 0x1 * 0x3bd)) + parseInt(r(0x1cd)) / (-0x17 * 0xf9 + 0x722 * -0x3 + 0x2bc9) + -parseInt(r(0x1c3)) / (0x1e7e + 0x45f + -0x22d8) + parseInt(s(0x1c5)) / (-0x1 * -0x97f + -0x7a1 + -0x1d8) + parseInt(s(0x1be)) / (-0xab8 + -0xe * 0x14e + 0x1d03) + parseInt(s(0x1ba)) / (0x1 * -0xd81 + 0x1c5c + 0x17 * -0xa5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xca992 * -0x1 + 0x1 * 0x2f795 + 0x18d4ad));
const q = {};
q[t(0x1ca)] = !![], Object[t(0x1d3) + t(0x1c9)](exports, u(0x1c8), q);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1814 + -0xc68 + 0x2630);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const z = [
        'Users',
        '1617065IUtvXF',
        'ContactWal',
        'Contacts',
        '1234SosIOX',
        'uFkqJ',
        '748080jOOHTP',
        'primaryKey',
        'amchz',
        'iEwUI',
        '5596913QXwrQT',
        'sequelize',
        'createTabl',
        'INTEGER',
        'GyVBo',
        '253815BuVgls',
        'lets',
        '6506706CQWKIZ',
        'exports',
        'autoIncrem',
        '__esModule',
        'erty',
        'value',
        '123CEmGTN',
        'type',
        '2627724XCgMRP',
        'dropTable',
        'ent',
        'allowNull',
        'DataTypes',
        'SZhFa',
        'defineProp',
        'Tenants',
        'FZRAa',
        'CASCADE',
        'DATE'
    ];
    a = function () {
        return z;
    };
    return a();
}
const sequelize_1 = require(t(0x1bf));
module[u(0x1c6)] = {
    'up': e => {
        const v = u, w = t, f = {};
        f[v(0x1d5)] = w(0x1b6) + v(0x1c4), f[w(0x1b9)] = v(0x1b4), f[w(0x1bc)] = w(0x1d6), f[w(0x1d2)] = w(0x1b7), f[w(0x1bd)] = v(0x1d4);
        const g = f, h = {};
        return h[v(0x1cc)] = sequelize_1[w(0x1d1)][w(0x1c1)], h[w(0x1c7) + w(0x1cf)] = !![], h[v(0x1bb)] = !![], h[w(0x1d0)] = ![], e[v(0x1c0) + 'e'](g[v(0x1d5)], {
            'id': h,
            'walletId': {
                'type': sequelize_1[v(0x1d1)][v(0x1c1)],
                'references': {
                    'model': g[v(0x1b9)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x1bc)],
                'onDelete': g[w(0x1bc)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[w(0x1d1)][v(0x1c1)],
                'references': {
                    'model': g[v(0x1d2)],
                    'key': 'id'
                },
                'onUpdate': g[v(0x1bc)],
                'onDelete': g[w(0x1bc)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[w(0x1d1)][w(0x1c1)],
                'references': {
                    'model': g[v(0x1bd)],
                    'key': 'id'
                },
                'onUpdate': g[v(0x1bc)],
                'onDelete': g[w(0x1bc)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[w(0x1d1)][w(0x1d7)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[w(0x1d1)][w(0x1d7)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = u, y = t, e = {};
        e[x(0x1c2)] = y(0x1b6) + y(0x1c4);
        const f = e;
        return d[y(0x1ce)](f[y(0x1c2)]);
    }
};