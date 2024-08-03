'use strict';
const F = b, G = b;
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(D(0x105)) / (-0xd04 + 0xb93 * 0x1 + -0xa * -0x25) + -parseInt(E(0x114)) / (0x408 + 0x25e3 + -0x29e9) + parseInt(D(0x10f)) / (-0xaad + 0xffb * 0x1 + -0x54b) + -parseInt(D(0x111)) / (-0x22f9 + -0x49b * -0x1 + 0x1e62) * (parseInt(D(0xfa)) / (0x1445 + -0x1062 + -0x16 * 0x2d)) + -parseInt(D(0xfb)) / (-0x101c + 0x385 * 0x4 + 0x20e) * (parseInt(D(0x10e)) / (-0x209a + 0xbd3 * -0x1 + 0x14 * 0x239)) + parseInt(E(0x124)) / (-0x66b + 0x1 * 0xedb + 0x10d * -0x8) * (-parseInt(D(0x113)) / (0x1 * 0x1a5a + 0x4 * -0x56d + 0x49d * -0x1)) + -parseInt(E(0x11a)) / (-0x14fb + -0x2a4 + 0x17a9) * (-parseInt(D(0x109)) / (-0x44e * -0x3 + -0x2202 * 0x1 + 0x1523));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2 * 0x7027a + -0x47 * -0x256f + 0xdd647));
function a() {
    const L = [
        'ssage',
        'DATE',
        'DataTypes',
        '143611iyBMVl',
        'ent',
        'Users',
        'ilvPo',
        '16215958qaWYhY',
        'dropTable',
        'createTabl',
        'erty',
        'SET\x20NULL',
        '355740qxBdKM',
        '2289765nrXSuA',
        'HtwHG',
        '4684LNnLWs',
        '__esModule',
        '144OEHPpV',
        '1109390bJpADs',
        'VJOAV',
        'BOOLEAN',
        'EJuJw',
        'autoIncrem',
        'CASCADE',
        '10NtKgDz',
        'wiwJg',
        'Nimkg',
        'exports',
        'defineProp',
        'TEXT',
        'Tenants',
        'type',
        'allowNull',
        'STRING',
        '59928XIBZNq',
        'Groups',
        'BIGINT',
        'FGZAJ',
        '385PpALAb',
        '78WLSlOC',
        'defaultVal',
        'value',
        'INTEGER',
        'sequelize',
        'primaryKey',
        'InternalMe'
    ];
    a = function () {
        return L;
    };
    return a();
}
const C = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xe57 * -0x1 + 0x11c9 + -0x27b);
        let h = e[f];
        return h;
    }, b(c, d);
}
C[F(0xfd)] = !![], Object[G(0x11e) + G(0x10c)](exports, F(0x112), C);
const sequelize_1 = require(F(0xff));
module[G(0x11d)] = {
    'up': i => {
        const H = F, I = G, j = {};
        j[H(0x115)] = I(0x101) + I(0x102), j[H(0xf9)] = I(0x107), j[I(0x11c)] = I(0x119), j[I(0x108)] = H(0x10d), j[H(0x117)] = H(0xf7), j[H(0x110)] = I(0x120);
        const k = j, l = {};
        l[I(0x121)] = sequelize_1[I(0x104)][I(0xf8)], l[H(0x100)] = !![], l[H(0x118) + I(0x106)] = !![], l[H(0x122)] = ![];
        const m = {};
        m[I(0x121)] = sequelize_1[H(0x104)][H(0x11f)], m[I(0x122)] = ![];
        const n = {};
        n[I(0x121)] = sequelize_1[H(0x104)][H(0x116)], n[H(0x122)] = ![], n[H(0xfc) + 'ue'] = ![];
        const o = {};
        o[I(0x121)] = sequelize_1[I(0x104)][I(0x123)];
        const p = {};
        return p[I(0x121)] = sequelize_1[I(0x104)][H(0x123)], i[I(0x10b) + 'e'](k[I(0x115)], {
            'id': l,
            'text': m,
            'read': n,
            'mediaType': o,
            'mediaUrl': p,
            'senderId': {
                'type': sequelize_1[H(0x104)][H(0xfe)],
                'references': {
                    'model': k[I(0xf9)],
                    'key': 'id'
                },
                'onUpdate': k[H(0x11c)],
                'onDelete': k[I(0x108)]
            },
            'receiverId': {
                'type': sequelize_1[I(0x104)][H(0xfe)],
                'references': {
                    'model': k[H(0xf9)],
                    'key': 'id'
                },
                'onUpdate': k[H(0x11c)],
                'onDelete': k[I(0x108)]
            },
            'groupId': {
                'type': sequelize_1[H(0x104)][H(0xfe)],
                'references': {
                    'model': k[H(0x117)],
                    'key': 'id'
                },
                'onUpdate': k[I(0x11c)],
                'onDelete': k[H(0x11c)]
            },
            'tenantId': {
                'type': sequelize_1[I(0x104)][H(0xfe)],
                'references': {
                    'model': k[I(0x110)],
                    'key': 'id'
                },
                'onUpdate': k[I(0x11c)],
                'onDelete': k[H(0x11c)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'timestamp': {
                'type': sequelize_1[H(0x104)][H(0xf8)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[H(0x104)][H(0x103)](-0xd0e + 0xcdb * -0x3 + 0x33a5),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[H(0x104)][H(0x103)](-0x1c9c + 0x138d + 0x915),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const J = F, K = G, e = {};
        e[J(0x11b)] = J(0x101) + J(0x102);
        const f = e;
        return d[K(0x10a)](f[J(0x11b)]);
    }
};