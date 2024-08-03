'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0xf5)) / (-0x1718 + -0x1596 + 0x5d * 0x7b) * (parseInt(A(0xe3)) / (-0xa21 * -0x1 + -0x9 * -0x381 + -0x2b * 0xf8)) + -parseInt(A(0xe4)) / (0x1 * -0x1861 + 0x10e2 + -0x3c1 * -0x2) * (-parseInt(A(0xe9)) / (-0x101 * -0x19 + 0x1485 * -0x1 + -0x490)) + -parseInt(z(0xe6)) / (-0x20bf + 0x1139 + -0xf8b * -0x1) * (-parseInt(A(0xe7)) / (0x1b78 + -0x269b + 0x1 * 0xb29)) + parseInt(z(0xf3)) / (0x1 * -0xec3 + -0x1 * -0x139f + -0x4d5) + -parseInt(A(0xd3)) / (0x3 * 0x89e + 0x166 * -0x12 + -0xa6) * (-parseInt(A(0xd9)) / (0x37b + -0xa * 0x15b + 0xa1c)) + -parseInt(A(0xf4)) / (-0x11 * 0x56 + 0xb9c * -0x1 + 0x115c) + parseInt(z(0xef)) / (0x723 * 0x5 + -0x3 * -0xbe1 + -0x4747) * (-parseInt(A(0xdb)) / (0xafd * -0x3 + 0x483 + -0x1c80 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x520aa + -0x7 * -0x1079c + 0x1 * 0x303a3));
function a() {
    const H = [
        'INTEGER',
        '8tZaFuo',
        'jOdKx',
        'type',
        'allowNull',
        'JZBNb',
        'DATE',
        '2742687zPcwjR',
        'Messages',
        '15021564SgUIUE',
        'CHWka',
        'EsUWd',
        'DataTypes',
        'TEXT',
        'Users',
        'Tickets',
        'primaryKey',
        '18454TtQScl',
        '1815006WKXlMd',
        'dropTable',
        '35CMDBEm',
        '237984SsStLT',
        'SET\x20NULL',
        '4dmPDta',
        'erty',
        'CmmTC',
        'STRING',
        'exports',
        'sequelize',
        '11OMUyOj',
        'defaultVal',
        '__esModule',
        'eKyGc',
        '1296666HsTblJ',
        '2206180UkCLfb',
        '47UsPeww',
        'BOOLEAN',
        'createTabl',
        'value',
        'defineProp',
        'CASCADE'
    ];
    a = function () {
        return H;
    };
    return a();
}
const y = {};
y[B(0xf8)] = !![], Object[B(0xf9) + C(0xea)](exports, B(0xf1), y);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xbbe + 0x11 * -0x221 + -0x287 * -0xa);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(C(0xee));
module[C(0xed)] = {
    'up': j => {
        const D = B, E = B, k = {};
        k[D(0xdc)] = E(0xda), k[D(0xf2)] = D(0xe0), k[D(0xd4)] = D(0xfa), k[E(0xd7)] = E(0xe8), k[E(0xdd)] = D(0xe1);
        const l = k, m = {};
        m[D(0xd5)] = sequelize_1[E(0xde)][D(0xec)], m[D(0xe2)] = !![], m[E(0xd6)] = ![];
        const n = {};
        n[E(0xd5)] = sequelize_1[E(0xde)][E(0xdf)], n[E(0xd6)] = ![];
        const o = {};
        o[E(0xd5)] = sequelize_1[E(0xde)][D(0xfb)], o[D(0xd6)] = ![], o[D(0xf0) + 'ue'] = 0x0;
        const p = {};
        p[D(0xd5)] = sequelize_1[D(0xde)][D(0xf6)], p[D(0xd6)] = ![], p[E(0xf0) + 'ue'] = ![];
        const q = {};
        q[E(0xd5)] = sequelize_1[E(0xde)][D(0xec)];
        const r = {};
        return r[D(0xd5)] = sequelize_1[D(0xde)][E(0xec)], j[E(0xf7) + 'e'](l[D(0xdc)], {
            'id': m,
            'body': n,
            'ack': o,
            'read': p,
            'mediaType': q,
            'mediaUrl': r,
            'userId': {
                'type': sequelize_1[E(0xde)][D(0xfb)],
                'references': {
                    'model': l[D(0xf2)],
                    'key': 'id'
                },
                'onUpdate': l[E(0xd4)],
                'onDelete': l[D(0xd7)]
            },
            'ticketId': {
                'type': sequelize_1[E(0xde)][E(0xfb)],
                'references': {
                    'model': l[E(0xdd)],
                    'key': 'id'
                },
                'onUpdate': l[D(0xd4)],
                'onDelete': l[D(0xd4)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[D(0xde)][D(0xd8)](0x125a + -0x4 * -0x908 + -0x3674),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[D(0xde)][D(0xd8)](0x11 * 0x138 + -0x185 * 0xd + -0xf1),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const F = C, G = B, e = {};
        e[F(0xeb)] = F(0xda);
        const f = e;
        return d[G(0xe5)](f[F(0xeb)]);
    }
};