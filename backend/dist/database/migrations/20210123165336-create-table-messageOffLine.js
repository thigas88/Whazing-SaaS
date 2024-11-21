'use strict';
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(H(0x130)) / (0x2143 + 0x4 * -0x323 + -0x14b6) + parseInt(I(0x128)) / (-0x1d60 + -0xf * -0x181 + 0x1 * 0x6d3) + -parseInt(I(0x10b)) / (0x5cc * 0x1 + 0x566 + -0x1 * 0xb2f) + parseInt(H(0x11f)) / (0x83 * 0x3d + -0xdf * -0x29 + -0x42ea) + parseInt(H(0x11e)) / (-0x326 + 0xe60 + -0xb35) * (-parseInt(I(0x10d)) / (-0x4c3 * 0x6 + 0x1 * 0x2257 + -0x5bf)) + parseInt(H(0x105)) / (0xcc7 * -0x1 + 0x2 * -0x1127 + 0x3c * 0xc9) + parseInt(I(0x12a)) / (0xf * 0x74 + 0xe68 * 0x1 + 0xa * -0x21e) * (-parseInt(H(0x129)) / (0x1f + -0x12d * 0x1 + 0x117));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x74e2 * 0x17 + -0x15d3eb * 0x1 + 0x2b7c21));
const G = {};
function a() {
    const P = [
        '6orTckh',
        'ent',
        'Contacts',
        'defaultVal',
        'exports',
        'YXqAY',
        'Messages',
        'primaryKey',
        'dropTable',
        'DataTypes',
        'STRING',
        'oxqYN',
        'MsUmv',
        'qgpYD',
        'Users',
        'BzFQI',
        'type',
        '4042985dhaqJK',
        '4381984ToKxEU',
        'kgbof',
        'autoIncrem',
        'Tickets',
        'DATE',
        'INTEGER',
        'sequelize',
        'erty',
        'MessagesOf',
        '584612renAIi',
        '10359yMoPZz',
        '5832PwneIk',
        'createTabl',
        'allowNull',
        'BOOLEAN',
        'CASCADE',
        'SET\x20NULL',
        '1044271tzHkzQ',
        'value',
        '5230267GisabE',
        'fLine',
        '__esModule',
        'defineProp',
        'yxcWS',
        'TEXT',
        '2401398oEtzqu',
        'SqHza'
    ];
    a = function () {
        return P;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x23a8 + 0x7e2 * 0x1 + 0x1ccb);
        let h = e[f];
        return h;
    }, b(c, d);
}
G[J(0x131)] = !![], Object[K(0x108) + K(0x126)](exports, K(0x107), G);
const sequelize_1 = require(J(0x125));
module[J(0x111)] = {
    'up': j => {
        const L = K, M = J, k = {};
        k[L(0x10c)] = L(0x127) + L(0x106), k[L(0x112)] = M(0x11b), k[L(0x118)] = M(0x12e), k[M(0x11c)] = L(0x12f), k[M(0x11a)] = M(0x122), k[M(0x120)] = L(0x10f), k[L(0x119)] = M(0x113);
        const l = k, m = {};
        m[M(0x11d)] = sequelize_1[M(0x116)][M(0x124)], m[L(0x121) + L(0x10e)] = !![], m[L(0x114)] = !![], m[L(0x12c)] = ![];
        const n = {};
        n[L(0x11d)] = sequelize_1[L(0x116)][L(0x10a)], n[L(0x12c)] = ![];
        const o = {};
        o[M(0x11d)] = sequelize_1[L(0x116)][L(0x124)], o[M(0x12c)] = ![], o[M(0x110) + 'ue'] = 0x0;
        const p = {};
        p[M(0x11d)] = sequelize_1[M(0x116)][M(0x12d)], p[M(0x12c)] = ![], p[L(0x110) + 'ue'] = ![];
        const q = {};
        q[M(0x11d)] = sequelize_1[L(0x116)][M(0x117)];
        const r = {};
        return r[L(0x11d)] = sequelize_1[L(0x116)][L(0x117)], j[L(0x12b) + 'e'](l[M(0x10c)], {
            'id': m,
            'body': n,
            'ack': o,
            'read': p,
            'mediaType': q,
            'mediaUrl': r,
            'userId': {
                'type': sequelize_1[L(0x116)][L(0x124)],
                'references': {
                    'model': l[L(0x112)],
                    'key': 'id'
                },
                'onUpdate': l[L(0x118)],
                'onDelete': l[L(0x11c)]
            },
            'ticketId': {
                'type': sequelize_1[L(0x116)][L(0x124)],
                'references': {
                    'model': l[M(0x11a)],
                    'key': 'id'
                },
                'onUpdate': l[M(0x118)],
                'onDelete': l[L(0x118)],
                'allowNull': ![]
            },
            'fromMe': {
                'type': sequelize_1[M(0x116)][M(0x12d)],
                'allowNull': ![],
                'defaultValue': ![]
            },
            'isDeleted': {
                'type': sequelize_1[L(0x116)][M(0x12d)],
                'allowNull': ![],
                'defaultValue': ![]
            },
            'contactId': {
                'type': sequelize_1[L(0x116)][L(0x124)],
                'references': {
                    'model': l[L(0x120)],
                    'key': 'id'
                },
                'onUpdate': l[L(0x118)],
                'onDelete': l[L(0x118)]
            },
            'quotedMsgId': {
                'type': sequelize_1[L(0x116)][L(0x117)],
                'references': {
                    'model': l[M(0x119)],
                    'key': 'id'
                },
                'onUpdate': l[M(0x118)],
                'onDelete': l[M(0x11c)]
            },
            'createdAt': {
                'type': sequelize_1[L(0x116)][M(0x123)](-0x1 * 0x214f + -0x1dd7 + 0x4 * 0xfcb),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[M(0x116)][L(0x123)](0x2250 + 0x78c + 0x66 * -0x69),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const N = J, O = J, e = {};
        e[N(0x109)] = N(0x127) + N(0x106);
        const f = e;
        return d[N(0x115)](f[O(0x109)]);
    }
};