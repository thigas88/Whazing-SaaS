'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x9c)) / (0x1214 + 0x1 * 0x39 + 0x926 * -0x2) + parseInt(q(0x93)) / (0x1 * -0x741 + -0x16b8 + 0x133 * 0x19) * (parseInt(p(0x84)) / (0x2ba * 0x7 + -0x2691 + -0x1 * -0x137e)) + parseInt(q(0x90)) / (0x1 * 0x1c02 + 0x32 * -0x1a + -0x1a3 * 0xe) + -parseInt(p(0x8f)) / (-0xc7 * 0x7 + -0x3 * 0x330 + 0x502 * 0x3) + parseInt(q(0x87)) / (0x10b2 * 0x2 + -0x1e4a + 0x18a * -0x2) + parseInt(p(0x8d)) / (0x2 * -0x19d + -0x7fd + 0xb3e) * (parseInt(q(0x91)) / (-0x1b32 + -0xec5 * -0x1 + 0x427 * 0x3)) + -parseInt(q(0x94)) / (-0x13a2 + 0x1973 + -0x5c8);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7 * -0x29c6f + -0x9e592 + 0x1f841));
const o = {};
o[r(0x81)] = !![], Object[r(0x7b) + s(0x8b)](exports, s(0x88), o);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xabb * -0x1 + -0x25bc + 0x1b7b);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        'cWdXm',
        'DATE',
        'Users',
        'UsersQueue',
        'value',
        'CASCADE',
        'VGhIM',
        '1437627fmumOz',
        'ent',
        'type',
        '3498762PBbtPX',
        '__esModule',
        'primaryKey',
        'DataTypes',
        'erty',
        'createTabl',
        '428155JMeGPG',
        'VwMtm',
        '4265885yMkwoU',
        '2886112RhhvmA',
        '128DzleDA',
        'INTEGER',
        '4smicJE',
        '24888906oplxoW',
        'sequelize',
        'CLdfq',
        'exports',
        'dropTable',
        'PCZZO',
        'autoIncrem',
        'UsersGroup',
        '1055226EFClMK',
        'Groups',
        'defineProp',
        'allowNull'
    ];
    a = function () {
        return x;
    };
    return a();
}
const sequelize_1 = require(s(0x95));
module[s(0x97)] = {
    'up': e => {
        const t = r, u = s, f = {};
        f[t(0x83)] = u(0x9b) + 's', f[t(0x7d)] = u(0x7a), f[u(0x99)] = t(0x82), f[t(0x8e)] = u(0x7f);
        const g = f, h = {};
        return h[u(0x86)] = sequelize_1[u(0x8a)][u(0x92)], h[u(0x89)] = !![], h[u(0x9a) + t(0x85)] = !![], h[t(0x7c)] = ![], e[t(0x8c) + 'e'](g[u(0x83)], {
            'id': h,
            'groupId': {
                'type': sequelize_1[t(0x8a)][t(0x92)],
                'references': {
                    'model': g[u(0x7d)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x99)],
                'onDelete': g[u(0x99)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[u(0x8a)][t(0x92)],
                'references': {
                    'model': g[u(0x8e)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x99)],
                'onDelete': g[t(0x99)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[t(0x8a)][t(0x7e)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0x8a)][t(0x7e)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = s, e = {};
        e[v(0x96)] = v(0x80) + 's';
        const f = e;
        return d[w(0x98)](f[v(0x96)]);
    }
};