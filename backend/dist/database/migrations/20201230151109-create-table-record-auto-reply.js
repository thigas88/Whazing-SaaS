'use strict';
const B = b, C = b;
function a() {
    const H = [
        'sequelize',
        'type',
        'restrict',
        '64xqrMug',
        'createTabl',
        '8339412FrVvXS',
        'Tickets',
        'erty',
        'EiDFJ',
        '11aQJgWK',
        '21hnSYCv',
        'allowNull',
        'defineProp',
        'uzGbp',
        'HITpv',
        '1622188Bggrva',
        'CASCADE',
        'ogs',
        'value',
        '5394470kqNpyu',
        '6898164pqMjyq',
        '53460MHWTLu',
        'STRING',
        '__esModule',
        '2224qNVdHQ',
        'DataTypes',
        '10262pRplqB',
        'exports',
        'lamlm',
        'xQuKG',
        '157780xWWyuo',
        'autoIncrem',
        'primaryKey',
        'DATE',
        'AutoReplyL',
        'Contacts',
        'INTEGER',
        'dropTable',
        'ent',
        'YdzGW'
    ];
    a = function () {
        return H;
    };
    return a();
}
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x111)) / (-0x1590 + -0x26ce + 0x3c5f) + parseInt(A(0xf4)) / (-0x3 * 0x99a + 0x213b + 0x27 * -0x1d) * (-parseInt(z(0x10c)) / (0x2e * -0x97 + 0x1aa0 + -0x7 * -0x13)) + parseInt(z(0x105)) / (0x2b * -0xdb + -0x2441 + 0x3 * 0x185a) * (parseInt(A(0xf8)) / (0x85 * -0x2e + 0x1 * -0x13c3 + 0x2 * 0x15d7)) + -parseInt(A(0x107)) / (0xd4 * -0x13 + -0x2549 + 0x350b) + -parseInt(z(0xee)) / (0x746 + -0x1 * 0x133b + 0x2ff * 0x4) + -parseInt(z(0xf2)) / (-0x677 * 0x2 + 0xf26 + -0x230) * (-parseInt(z(0xef)) / (-0x1 * -0x1855 + 0x1 * -0x407 + -0x1445)) + -parseInt(A(0xed)) / (-0x1831 + 0xb16 + 0xd25) * (parseInt(A(0x10b)) / (-0x1bdb + 0x2c6 * -0x6 + 0x2c8a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x160121 + 0x3 * 0x7c4d6 + -0x1 * 0x20ae7d));
const y = {};
y[B(0x114)] = !![], Object[B(0x10e) + C(0x109)](exports, C(0xf1), y);
const sequelize_1 = require(C(0x102));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3fb * -0x4 + 0x1 * 0x8d5 + 0x4c4 * -0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[C(0xf5)] = {
    'up': j => {
        const D = B, E = B, k = {};
        k[D(0x101)] = E(0xfc) + D(0x113), k[E(0xf7)] = E(0xfd), k[D(0x10a)] = D(0x112), k[E(0x110)] = D(0x104), k[E(0xf6)] = D(0x108);
        const l = k, m = {};
        m[D(0x103)] = sequelize_1[E(0xf3)][E(0xfe)], m[E(0xf9) + E(0x100)] = !![], m[D(0xfa)] = !![], m[E(0x10d)] = ![];
        const n = {};
        n[D(0x103)] = sequelize_1[E(0xf3)][E(0xfe)], n[E(0x10d)] = ![];
        const o = {};
        o[D(0x103)] = sequelize_1[D(0xf3)][D(0xf0)], o[E(0x10d)] = ![];
        const p = {};
        p[E(0x103)] = sequelize_1[E(0xf3)][D(0xfe)], p[D(0x10d)] = ![];
        const q = {};
        q[E(0x103)] = sequelize_1[D(0xf3)][D(0xf0)], q[E(0x10d)] = ![];
        const r = {};
        return r[D(0x103)] = sequelize_1[E(0xf3)][D(0xf0)], r[D(0x10d)] = ![], j[E(0x106) + 'e'](l[D(0x101)], {
            'id': m,
            'autoReplyId': n,
            'autoReplyName': o,
            'stepsReplyId': p,
            'stepsReplyMessage': q,
            'wordsReply': r,
            'contactId': {
                'type': sequelize_1[E(0xf3)][E(0xfe)],
                'references': {
                    'model': l[D(0xf7)],
                    'key': 'id'
                },
                'onUpdate': l[E(0x10a)],
                'onDelete': l[D(0x110)]
            },
            'ticketId': {
                'type': sequelize_1[D(0xf3)][D(0xfe)],
                'references': {
                    'model': l[E(0xf6)],
                    'key': 'id'
                },
                'onUpdate': l[D(0x10a)],
                'onDelete': l[E(0x110)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[D(0xf3)][E(0xfb)](0xb * 0x1bb + -0x1 * -0x1391 + -0x2694),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[E(0xf3)][D(0xfb)](-0x20b + 0x1 * 0x25b1 + -0x23a0),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const F = B, G = C, e = {};
        e[F(0x10f)] = G(0xfc) + F(0x113);
        const f = e;
        return d[F(0xff)](f[F(0x10f)]);
    }
};