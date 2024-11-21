'use strict';
const F = b, G = b;
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(D(0x108)) / (0x5c * 0x1d + 0x507 + -0xf72) + -parseInt(E(0x10c)) / (0x1 * 0x6b + 0x1c21 * -0x1 + 0x1bb8) * (-parseInt(D(0x123)) / (0x32 * 0x3b + 0x1a8f + -0x2612)) + -parseInt(E(0xfd)) / (0x2098 + -0x61c + -0x7 * 0x3c8) + -parseInt(E(0x114)) / (0x1 * -0xb90 + 0x15a9 * 0x1 + 0x35c * -0x3) * (-parseInt(D(0x11b)) / (-0x118c + 0x2c6 + 0xecc * 0x1)) + -parseInt(E(0x11d)) / (0x168 * 0x19 + 0x2052 + -0x4373) * (-parseInt(E(0x11e)) / (-0x1285 + -0x16de * -0x1 + -0x451)) + -parseInt(E(0x101)) / (-0x10 * -0x162 + -0x1 * -0x1d71 + -0x3388) * (parseInt(E(0x125)) / (0x1019 * 0x1 + -0x911 * 0x3 + 0xb24)) + -parseInt(D(0x10f)) / (0x3 * -0xae5 + -0x1bcc + 0x3c86) * (parseInt(E(0xfb)) / (0xf * -0x198 + -0x2 * 0x83e + 0x2870));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x50dd4 + -0x58a93 + 0x597d5));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1bde * 0x1 + 0x13 * -0x1a3 + -0x19 * -0x2b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const C = {};
C[F(0x113)] = !![], Object[G(0x118) + G(0xfc)](exports, F(0x11a), C);
const sequelize_1 = require(G(0x11f));
function a() {
    const L = [
        'BIGINT',
        'dropTable',
        'ssage',
        '27WeYKBs',
        'DATE',
        'Groups',
        'jMJVy',
        'dDiUF',
        'CASCADE',
        'primaryKey',
        '507694vvyebm',
        'InternalMe',
        'createTabl',
        'Tenants',
        '1336282lHxUZP',
        'BOOLEAN',
        'ent',
        '2038597ootCMz',
        'DataTypes',
        'allowNull',
        'SET\x20NULL',
        'value',
        '10350tNyomo',
        'LYwKJ',
        'INTEGER',
        'Users',
        'defineProp',
        'autoIncrem',
        '__esModule',
        '1038qncwdV',
        'defaultVal',
        '362642ktopYp',
        '24geMAeB',
        'sequelize',
        'GXISF',
        'STRING',
        'jwWyJ',
        '3pDoFDD',
        'exports',
        '309800MtrnXF',
        'XWFfl',
        'CGkcS',
        'TEXT',
        'type',
        '12psQMNH',
        'erty',
        '244376DFCCSu'
    ];
    a = function () {
        return L;
    };
    return a();
}
module[F(0x124)] = {
    'up': i => {
        const H = F, I = F, j = {};
        j[H(0xf8)] = H(0x109) + I(0x100), j[H(0x104)] = H(0x117), j[I(0x126)] = I(0x106), j[I(0x120)] = H(0x112), j[H(0x105)] = I(0x103), j[H(0x122)] = I(0x10b);
        const k = j, l = {};
        l[I(0xfa)] = sequelize_1[H(0x110)][H(0xfe)], l[I(0x107)] = !![], l[H(0x119) + I(0x10e)] = !![], l[H(0x111)] = ![];
        const m = {};
        m[I(0xfa)] = sequelize_1[H(0x110)][I(0xf9)], m[I(0x111)] = ![];
        const n = {};
        n[I(0xfa)] = sequelize_1[H(0x110)][I(0x10d)], n[I(0x111)] = ![], n[I(0x11c) + 'ue'] = ![];
        const o = {};
        o[H(0xfa)] = sequelize_1[I(0x110)][H(0x121)];
        const p = {};
        return p[I(0xfa)] = sequelize_1[H(0x110)][H(0x121)], i[I(0x10a) + 'e'](k[I(0xf8)], {
            'id': l,
            'text': m,
            'read': n,
            'mediaType': o,
            'mediaUrl': p,
            'senderId': {
                'type': sequelize_1[H(0x110)][I(0x116)],
                'references': {
                    'model': k[H(0x104)],
                    'key': 'id'
                },
                'onUpdate': k[H(0x126)],
                'onDelete': k[I(0x120)]
            },
            'receiverId': {
                'type': sequelize_1[I(0x110)][H(0x116)],
                'references': {
                    'model': k[H(0x104)],
                    'key': 'id'
                },
                'onUpdate': k[I(0x126)],
                'onDelete': k[H(0x120)]
            },
            'groupId': {
                'type': sequelize_1[I(0x110)][I(0x116)],
                'references': {
                    'model': k[I(0x105)],
                    'key': 'id'
                },
                'onUpdate': k[I(0x126)],
                'onDelete': k[I(0x126)]
            },
            'tenantId': {
                'type': sequelize_1[H(0x110)][I(0x116)],
                'references': {
                    'model': k[I(0x122)],
                    'key': 'id'
                },
                'onUpdate': k[I(0x126)],
                'onDelete': k[I(0x126)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'timestamp': {
                'type': sequelize_1[H(0x110)][H(0xfe)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[H(0x110)][I(0x102)](-0x1 * 0x1157 + -0x1d50 + 0x3 * 0xf8f),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[I(0x110)][I(0x102)](0x77 * -0x16 + 0x110a + -0x9e * 0xb),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const J = G, K = F, e = {};
        e[J(0x115)] = J(0x109) + J(0x100);
        const f = e;
        return d[K(0xff)](f[J(0x115)]);
    }
};