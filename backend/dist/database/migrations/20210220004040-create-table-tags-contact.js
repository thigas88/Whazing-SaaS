'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xe2)) / (0x5f3 + 0x1 * -0xaea + 0x4f8) + parseInt(s(0xdd)) / (0x1 * -0x3a1 + -0x1 * 0x24ed + 0x2890) + -parseInt(r(0xf8)) / (-0x3b7 + 0x1e89 + -0x1acf) + -parseInt(s(0xf6)) / (-0x1 * 0x14a1 + 0x156f + -0xca) + parseInt(r(0xe0)) / (0x840 + 0x335 + -0xb70) + parseInt(r(0xf7)) / (-0x2 * 0x7f6 + -0x161 * 0x13 + 0x2a25 * 0x1) * (parseInt(r(0xe1)) / (-0x2324 + 0x1d4d + -0x2 * -0x2ef)) + -parseInt(r(0xf3)) / (0x1cd * -0x1 + -0x5f1 * 0x3 + 0x13a8);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x274f * -0x49 + 0x1 * -0xf321a + 0x27da35));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xf45 * 0x1 + -0x25f7 + 0x3615);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = {};
q[t(0xe5)] = !![], Object[u(0xe7) + u(0xf5)](exports, u(0xda), q);
const sequelize_1 = require(t(0xeb));
function a() {
    const z = [
        '220132Gyzaai',
        'Tags',
        'cTbzy',
        'value',
        'primaryKey',
        'defineProp',
        'RESTRICT',
        'frqki',
        'nVvKW',
        'sequelize',
        'CASCADE',
        'createTabl',
        'ContactTag',
        'TzSQh',
        'ent',
        'izsWY',
        'INTEGER',
        '551280PLHcuF',
        'Tenants',
        'erty',
        '241264JxTijX',
        '6AtUuLS',
        '764496MNbmwO',
        'DATE',
        'autoIncrem',
        'anvQM',
        'exports',
        'dropTable',
        'zYWZI',
        '__esModule',
        'DataTypes',
        'Contacts',
        '356014wDyEqu',
        'type',
        'allowNull',
        '2156795URVPbB',
        '6132868gBeRRH'
    ];
    a = function () {
        return z;
    };
    return a();
}
module[t(0xfc)] = {
    'up': e => {
        const v = u, w = u, f = {};
        f[v(0xfb)] = w(0xee) + 's', f[w(0xea)] = v(0xe3), f[v(0xf1)] = w(0xec), f[v(0xe9)] = v(0xe8), f[w(0xd9)] = v(0xdc), f[v(0xe4)] = w(0xf4);
        const g = f, h = {};
        return h[w(0xde)] = sequelize_1[v(0xdb)][v(0xf2)], h[w(0xfa) + w(0xf0)] = !![], h[w(0xe6)] = !![], h[w(0xdf)] = ![], e[w(0xed) + 'e'](g[w(0xfb)], {
            'id': h,
            'tagId': {
                'type': sequelize_1[v(0xdb)][v(0xf2)],
                'references': {
                    'model': g[w(0xea)],
                    'key': 'id'
                },
                'onUpdate': g[v(0xf1)],
                'onDelete': g[w(0xe9)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[v(0xdb)][v(0xf2)],
                'references': {
                    'model': g[v(0xd9)],
                    'key': 'id'
                },
                'onUpdate': g[w(0xf1)],
                'onDelete': g[w(0xf1)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[v(0xdb)][v(0xf2)],
                'references': {
                    'model': g[v(0xe4)],
                    'key': 'id'
                },
                'onUpdate': g[w(0xf1)],
                'onDelete': g[v(0xf1)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[v(0xdb)][w(0xf9)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0xdb)][v(0xf9)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = t, y = t, e = {};
        e[x(0xef)] = y(0xee) + 's';
        const f = e;
        return d[y(0xfd)](f[y(0xef)]);
    }
};