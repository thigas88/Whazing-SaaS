'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x15c)) / (-0xb * 0x1f3 + 0x26ac + 0x23 * -0x7e) * (parseInt(r(0x15e)) / (0x523 + -0x9f8 + -0x1 * -0x4d7)) + -parseInt(r(0x17b)) / (0xc91 * 0x1 + 0x1dea + -0x2a78) + parseInt(s(0x16c)) / (0x217c + -0x107d * 0x1 + -0x10fb) + parseInt(s(0x177)) / (0x161 * -0x1 + 0xa3 * 0x31 + -0x1 * 0x1dcd) * (-parseInt(s(0x159)) / (0xcf2 + -0x19 * 0x5 + -0xc6f)) + -parseInt(r(0x16a)) / (0xc3 + -0x5b * -0x43 + -0x188d) + -parseInt(s(0x175)) / (-0xf4f + 0x5e + 0xef9 * 0x1) + parseInt(s(0x16d)) / (-0x1 * -0x1209 + -0x5 + -0x11fb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * -0x92360 + 0xdd5dd + 0xe11dc));
function a() {
    const z = [
        'dropTable',
        'Tags',
        'createTabl',
        'sequelize',
        'INTEGER',
        '__esModule',
        'autoIncrem',
        'DataTypes',
        'FqIuu',
        '5855563ZNsMCK',
        'erty',
        '637056WXBJYY',
        '35519067azYEpj',
        'DATE',
        'jekux',
        'RESTRICT',
        'zsqMy',
        'Tenants',
        'primaryKey',
        'CASCADE',
        '8182864WRtsDx',
        'NHint',
        '1051510xQglnf',
        'IDPDc',
        'value',
        'defineProp',
        '2800695HPAwqC',
        'allowNull',
        'Contacts',
        'type',
        '18PCpnPB',
        'hYMGD',
        'exports',
        '2kmDPkG',
        'dGvDH',
        '50956OrVVRT',
        'ent',
        'ContactTag'
    ];
    a = function () {
        return z;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x419 + 0x1fa1 * -0x1 + -0x41 * -0x92);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = {};
q[t(0x179)] = !![], Object[u(0x17a) + u(0x16b)](exports, u(0x166), q);
const sequelize_1 = require(t(0x164));
module[t(0x15b)] = {
    'up': e => {
        const v = u, w = u, f = {};
        f[v(0x16f)] = w(0x160) + 's', f[v(0x178)] = w(0x162), f[v(0x171)] = w(0x174), f[w(0x15a)] = w(0x170), f[w(0x169)] = w(0x17d), f[w(0x15d)] = v(0x172);
        const g = f, h = {};
        return h[v(0x158)] = sequelize_1[v(0x168)][w(0x165)], h[v(0x167) + v(0x15f)] = !![], h[v(0x173)] = !![], h[w(0x17c)] = ![], e[w(0x163) + 'e'](g[w(0x16f)], {
            'id': h,
            'tagId': {
                'type': sequelize_1[v(0x168)][w(0x165)],
                'references': {
                    'model': g[w(0x178)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x171)],
                'onDelete': g[w(0x15a)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[w(0x168)][w(0x165)],
                'references': {
                    'model': g[v(0x169)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x171)],
                'onDelete': g[v(0x171)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[v(0x168)][w(0x165)],
                'references': {
                    'model': g[v(0x15d)],
                    'key': 'id'
                },
                'onUpdate': g[v(0x171)],
                'onDelete': g[v(0x171)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[v(0x168)][v(0x16e)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[w(0x168)][w(0x16e)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0x176)] = y(0x160) + 's';
        const f = e;
        return d[y(0x161)](f[y(0x176)]);
    }
};