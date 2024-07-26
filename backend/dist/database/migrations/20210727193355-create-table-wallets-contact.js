'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x68)) / (-0x11 * -0x1f5 + 0x107f + -0x31c3) + -parseInt(r(0x80)) / (-0x1 * 0x2072 + -0xd93 + 0x2e07) * (parseInt(r(0x67)) / (0x1 * 0x1c6b + -0x1e0 + -0x1a88)) + -parseInt(s(0x7a)) / (-0x50a + 0x4 * 0x7a5 + -0x1986) * (-parseInt(r(0x8c)) / (-0x90d * -0x1 + -0x2 * -0x103c + -0x2980)) + parseInt(s(0x79)) / (0x1 * 0x2459 + -0x53c * 0x7 + 0x51) * (parseInt(r(0x73)) / (0x6d5 + -0x16 * 0x61 + 0x188)) + parseInt(s(0x71)) / (0x1 * -0xd8d + 0x16e1 + 0x11 * -0x8c) * (parseInt(r(0x6e)) / (-0x1 * -0x147d + -0x1905 + -0x1 * -0x491)) + -parseInt(s(0x8a)) / (-0xa3d * -0x1 + 0xa4d + 0x8 * -0x290) + parseInt(s(0x6a)) / (-0x5 * -0x1cb + 0x1425 + -0x1 * 0x1d11) * (parseInt(s(0x69)) / (-0x1cc0 + -0x25e * -0x2 + -0x46 * -0x58));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3356 * 0x19 + 0xc0c5e + -0xa31e));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2403 + 0x1ffc + -0xe * 0x4d4);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const z = [
        'sequelize',
        'createTabl',
        '6967210DeULFg',
        'INTEGER',
        '2089910pMWSaW',
        '__esModule',
        'value',
        '132621ycqrDv',
        '212836nyjEWn',
        '38604DfoEQD',
        '2167kWTdeV',
        'autoIncrem',
        'Users',
        'DataTypes',
        '711HlvVMT',
        'BRJoe',
        'Tenants',
        '32672jcrLWX',
        'primaryKey',
        '1087772aKvBAE',
        'DATE',
        'type',
        'ContactWal',
        'Contacts',
        'CASCADE',
        '6TBEwHG',
        '8gVKMKf',
        'erty',
        'whtaF',
        'allowNull',
        'lets',
        'exports',
        '28bxdJLg',
        'defineProp',
        'HHWeC',
        'ent',
        'fALot',
        'Svenu',
        'dropTable',
        'nvRFF'
    ];
    a = function () {
        return z;
    };
    return a();
}
const q = {};
q[t(0x8e)] = !![], Object[u(0x81) + t(0x7b)](exports, u(0x8d), q);
const sequelize_1 = require(u(0x88));
module[t(0x7f)] = {
    'up': e => {
        const v = u, w = t, f = {};
        f[v(0x82)] = v(0x76) + v(0x7e), f[v(0x85)] = v(0x6c), f[w(0x84)] = v(0x78), f[v(0x87)] = w(0x77), f[w(0x6f)] = v(0x70);
        const g = f, h = {};
        return h[v(0x75)] = sequelize_1[v(0x6d)][v(0x8b)], h[w(0x6b) + w(0x83)] = !![], h[w(0x72)] = !![], h[w(0x7d)] = ![], e[w(0x89) + 'e'](g[w(0x82)], {
            'id': h,
            'walletId': {
                'type': sequelize_1[v(0x6d)][v(0x8b)],
                'references': {
                    'model': g[v(0x85)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x84)],
                'onDelete': g[v(0x84)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[v(0x6d)][v(0x8b)],
                'references': {
                    'model': g[w(0x87)],
                    'key': 'id'
                },
                'onUpdate': g[v(0x84)],
                'onDelete': g[w(0x84)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[v(0x6d)][v(0x8b)],
                'references': {
                    'model': g[w(0x6f)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x84)],
                'onDelete': g[w(0x84)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[v(0x6d)][v(0x74)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0x6d)][w(0x74)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = u, y = t, e = {};
        e[x(0x7c)] = x(0x76) + x(0x7e);
        const f = e;
        return d[x(0x86)](f[x(0x7c)]);
    }
};