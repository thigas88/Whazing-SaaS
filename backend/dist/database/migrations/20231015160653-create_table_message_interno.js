'use strict';
function a() {
    const L = [
        'InternalMe',
        'primaryKey',
        'exports',
        'BOOLEAN',
        'Groups',
        'SQMAt',
        'erty',
        'sequelize',
        '8206578CMKXxg',
        '93657qwQTMu',
        'VDCCZ',
        'defaultVal',
        'autoIncrem',
        'FJVWY',
        'TEXT',
        'KYxPI',
        '__esModule',
        'LGiKd',
        'INTEGER',
        '7mLQaDg',
        'SET\x20NULL',
        '2561676WZTjiE',
        'DataTypes',
        'value',
        '918855UtLTuu',
        'STRING',
        'Kszxg',
        'BIGINT',
        'type',
        '4jkomzc',
        'CASCADE',
        'DATE',
        'allowNull',
        'Tenants',
        '6522912PhbhLn',
        'ssage',
        'dropTable',
        'ent',
        'Users',
        'defineProp',
        'OdsBK',
        '877434rakyTv',
        '469120hACoUE',
        'createTabl'
    ];
    a = function () {
        return L;
    };
    return a();
}
const F = b, G = b;
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(D(0x8d)) / (0x6a0 + -0x3 * 0x67a + -0x445 * -0x3) + -parseInt(D(0x82)) / (-0x40d + -0x1b6d + 0x9b * 0x34) + parseInt(D(0x99)) / (-0x828 * 0x3 + -0x817 * 0x1 + 0x2092) + -parseInt(E(0x75)) / (0xb * 0x373 + -0x7db * 0x2 + 0x1637 * -0x1) * (-parseInt(E(0x9c)) / (-0x19b1 + 0x1 * 0x26b6 + -0x34 * 0x40)) + parseInt(E(0x81)) / (0xf53 + 0x19 * -0x15d + 0x12c8) * (-parseInt(D(0x97)) / (0x853 * -0x1 + -0x6bb * 0x1 + -0x1ad * -0x9)) + parseInt(E(0x7a)) / (0x5e * -0x1 + 0x118f + -0x1 * 0x1129) + -parseInt(E(0x8c)) / (-0x1f * -0x73 + -0x1b45 + 0xd61);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x199 * -0x7e3 + -0x68e92 + 0x1a4766));
const C = {};
C[F(0x9b)] = !![], Object[G(0x7f) + G(0x8a)](exports, F(0x94), C);
const sequelize_1 = require(F(0x8b));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1d88 + -0x133e + -0x276 * 0x4);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[F(0x86)] = {
    'up': i => {
        const H = F, I = F, j = {};
        j[H(0x80)] = H(0x84) + I(0x7b), j[I(0x91)] = H(0x7e), j[H(0x8e)] = H(0x76), j[I(0x95)] = H(0x98), j[I(0x72)] = H(0x88), j[I(0x89)] = H(0x79);
        const k = j, l = {};
        l[H(0x74)] = sequelize_1[I(0x9a)][I(0x73)], l[H(0x85)] = !![], l[H(0x90) + H(0x7d)] = !![], l[I(0x78)] = ![];
        const m = {};
        m[H(0x74)] = sequelize_1[I(0x9a)][I(0x92)], m[H(0x78)] = ![];
        const n = {};
        n[I(0x74)] = sequelize_1[I(0x9a)][I(0x87)], n[I(0x78)] = ![], n[H(0x8f) + 'ue'] = ![];
        const o = {};
        o[H(0x74)] = sequelize_1[I(0x9a)][I(0x9d)];
        const p = {};
        return p[H(0x74)] = sequelize_1[H(0x9a)][H(0x9d)], i[I(0x83) + 'e'](k[I(0x80)], {
            'id': l,
            'text': m,
            'read': n,
            'mediaType': o,
            'mediaUrl': p,
            'senderId': {
                'type': sequelize_1[H(0x9a)][H(0x96)],
                'references': {
                    'model': k[I(0x91)],
                    'key': 'id'
                },
                'onUpdate': k[H(0x8e)],
                'onDelete': k[I(0x95)]
            },
            'receiverId': {
                'type': sequelize_1[I(0x9a)][H(0x96)],
                'references': {
                    'model': k[H(0x91)],
                    'key': 'id'
                },
                'onUpdate': k[I(0x8e)],
                'onDelete': k[H(0x95)]
            },
            'groupId': {
                'type': sequelize_1[I(0x9a)][H(0x96)],
                'references': {
                    'model': k[H(0x72)],
                    'key': 'id'
                },
                'onUpdate': k[I(0x8e)],
                'onDelete': k[I(0x8e)]
            },
            'tenantId': {
                'type': sequelize_1[H(0x9a)][H(0x96)],
                'references': {
                    'model': k[I(0x89)],
                    'key': 'id'
                },
                'onUpdate': k[H(0x8e)],
                'onDelete': k[H(0x8e)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'timestamp': {
                'type': sequelize_1[I(0x9a)][I(0x73)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[H(0x9a)][I(0x77)](-0x14 * 0x1cc + -0xd07 + 0x30fd),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[H(0x9a)][H(0x77)](0x1263 + -0x1880 + 0x623),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const J = F, K = F, e = {};
        e[J(0x93)] = J(0x84) + K(0x7b);
        const f = e;
        return d[J(0x7c)](f[K(0x93)]);
    }
};