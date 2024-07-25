'use strict';
const B = b, C = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xc5f + 0x248f + -0x165d);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x1f2)) / (-0x13e4 + 0xb * -0x316 + 0x7 * 0x7b1) * (-parseInt(A(0x1da)) / (-0x2 * 0x682 + -0x2390 + -0x184b * -0x2)) + -parseInt(A(0x1e5)) / (0x1c3 * -0x6 + -0x2537 + 0x2fcc) * (parseInt(z(0x1ef)) / (-0x2402 + 0x1203 + -0x601 * -0x3)) + -parseInt(z(0x1f5)) / (-0x2 * 0x42e + 0x3 * 0x905 + -0x31d * 0x6) * (-parseInt(z(0x1e9)) / (-0x725 * -0x1 + 0x31 * -0xc + -0x4d3)) + parseInt(A(0x1e3)) / (-0x125e + 0x25 * 0x37 + 0xa72) + -parseInt(A(0x1fb)) / (0x7ca + 0xda * 0x1d + -0x2074) * (parseInt(A(0x1d9)) / (0x374 + 0x4e1 + -0x84c)) + parseInt(z(0x1f3)) / (-0x2 * -0x6b9 + -0x79 * 0x3b + 0x1 * 0xe7b) + -parseInt(A(0x1e7)) / (-0x1c78 + 0xb3b * -0x2 + 0x32f9) * (-parseInt(A(0x1fa)) / (-0x2 * -0xe7f + -0xa87 + -0x29 * 0x73));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x479 * 0x2a4 + -0x84add + -0x5 * -0x8919));
const y = {};
y[B(0x1df)] = !![], Object[C(0x1f1) + C(0x1f6)](exports, B(0x1ea), y);
function a() {
    const H = [
        'AutoReplyL',
        'STRING',
        'HwtHW',
        'gJULC',
        'INTEGER',
        '6704055KjJSjJ',
        '205718EHlleg',
        'dropTable',
        'type',
        'createTabl',
        'allowNull',
        'value',
        'DataTypes',
        'zVkhX',
        'exports',
        '865137mZAgwp',
        'Tickets',
        '1185306PXUQzm',
        'autoIncrem',
        '1243JnyFwq',
        'ogs',
        '6pWAZqz',
        '__esModule',
        'sequelize',
        'ekITx',
        'ent',
        'DATE',
        '8TWTpGZ',
        'YBlnc',
        'defineProp',
        '4FCbdhT',
        '7712050PIYHTf',
        'primaryKey',
        '3780305lnTrZj',
        'erty',
        'Contacts',
        'CASCADE',
        'MbtRw',
        '74520RjcQVh',
        '8OiSKUK',
        'restrict'
    ];
    a = function () {
        return H;
    };
    return a();
}
const sequelize_1 = require(C(0x1eb));
module[B(0x1e2)] = {
    'up': j => {
        const D = C, E = C, k = {};
        k[D(0x1d7)] = E(0x1d4) + D(0x1e8), k[D(0x1e1)] = E(0x1f7), k[D(0x1f9)] = D(0x1f8), k[E(0x1f0)] = D(0x1d3), k[D(0x1d6)] = E(0x1e4);
        const l = k, m = {};
        m[D(0x1dc)] = sequelize_1[E(0x1e0)][E(0x1d8)], m[E(0x1e6) + E(0x1ed)] = !![], m[E(0x1f4)] = !![], m[D(0x1de)] = ![];
        const n = {};
        n[D(0x1dc)] = sequelize_1[D(0x1e0)][E(0x1d8)], n[E(0x1de)] = ![];
        const o = {};
        o[D(0x1dc)] = sequelize_1[D(0x1e0)][E(0x1d5)], o[E(0x1de)] = ![];
        const p = {};
        p[E(0x1dc)] = sequelize_1[E(0x1e0)][E(0x1d8)], p[D(0x1de)] = ![];
        const q = {};
        q[D(0x1dc)] = sequelize_1[E(0x1e0)][D(0x1d5)], q[D(0x1de)] = ![];
        const r = {};
        return r[E(0x1dc)] = sequelize_1[E(0x1e0)][D(0x1d5)], r[E(0x1de)] = ![], j[E(0x1dd) + 'e'](l[E(0x1d7)], {
            'id': m,
            'autoReplyId': n,
            'autoReplyName': o,
            'stepsReplyId': p,
            'stepsReplyMessage': q,
            'wordsReply': r,
            'contactId': {
                'type': sequelize_1[E(0x1e0)][D(0x1d8)],
                'references': {
                    'model': l[D(0x1e1)],
                    'key': 'id'
                },
                'onUpdate': l[E(0x1f9)],
                'onDelete': l[E(0x1f0)]
            },
            'ticketId': {
                'type': sequelize_1[D(0x1e0)][E(0x1d8)],
                'references': {
                    'model': l[D(0x1d6)],
                    'key': 'id'
                },
                'onUpdate': l[D(0x1f9)],
                'onDelete': l[D(0x1f0)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[D(0x1e0)][E(0x1ee)](0x1f7a + 0x1 * 0x1229 + 0xd * -0x3d1),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[D(0x1e0)][D(0x1ee)](-0x1251 * -0x1 + -0xe5 * -0x2 + -0x1 * 0x1415),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const F = C, G = B, e = {};
        e[F(0x1ec)] = G(0x1d4) + F(0x1e8);
        const f = e;
        return d[F(0x1db)](f[G(0x1ec)]);
    }
};