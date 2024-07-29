'use strict';
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(H(0x167)) / (0x1470 + -0x143d + 0x5 * -0xa) * (-parseInt(H(0x175)) / (0x1f * 0x17 + -0x1d8a * -0x1 + 0x1 * -0x2051)) + parseInt(H(0x172)) / (-0xf * -0x71 + -0x2 * -0x73a + -0x1510) + parseInt(I(0x191)) / (-0xe0d * -0x1 + -0x12a + -0xcdf) * (-parseInt(H(0x182)) / (0xeb7 * -0x1 + 0xa4b + 0x471)) + parseInt(I(0x185)) / (-0x38 + -0xb11 * 0x1 + 0xb4f) * (parseInt(H(0x195)) / (0x14af + 0x21 * 0x11b + -0x1 * 0x3923)) + -parseInt(H(0x177)) / (0x4c * -0x4a + 0x2676 + -0x1076 * 0x1) * (-parseInt(H(0x186)) / (-0x202b + -0x7a * -0x34 + 0x14 * 0x5f)) + -parseInt(I(0x171)) / (-0x2b8 + 0x1 * -0x2671 + 0x2933) + -parseInt(H(0x181)) / (-0x1 * 0x459 + -0x77b * -0x2 + 0x3 * -0x386) * (parseInt(I(0x190)) / (-0xbf + 0x3 * -0x567 + 0x1100));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x424f3 + -0xa * 0x4a73 + -0x21bc3 * -0x3));
const G = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * -0xe87 + -0x8 * -0x48a + -0x59 * 0xb8);
        let h = e[f];
        return h;
    }, b(c, d);
}
G[J(0x18e)] = !![], Object[J(0x17c) + K(0x169)](exports, K(0x189), G);
const sequelize_1 = require(J(0x18a));
module[K(0x17f)] = {
    'up': j => {
        const L = K, M = J, k = {};
        k[L(0x187)] = M(0x16c) + M(0x18f), k[M(0x192)] = M(0x17b), k[M(0x188)] = M(0x166), k[M(0x174)] = M(0x180), k[L(0x176)] = M(0x18c), k[L(0x17d)] = M(0x193), k[M(0x16d)] = M(0x16e);
        const l = k, m = {};
        m[L(0x16b)] = sequelize_1[L(0x178)][L(0x170)], m[L(0x16a) + M(0x179)] = !![], m[L(0x17e)] = !![], m[M(0x184)] = ![];
        const n = {};
        n[L(0x16b)] = sequelize_1[M(0x178)][L(0x183)], n[L(0x184)] = ![];
        const o = {};
        o[M(0x16b)] = sequelize_1[L(0x178)][M(0x170)], o[L(0x184)] = ![], o[M(0x194) + 'ue'] = 0x0;
        const p = {};
        p[M(0x16b)] = sequelize_1[L(0x178)][M(0x168)], p[L(0x184)] = ![], p[L(0x194) + 'ue'] = ![];
        const q = {};
        q[M(0x16b)] = sequelize_1[L(0x178)][M(0x18b)];
        const r = {};
        return r[M(0x16b)] = sequelize_1[M(0x178)][L(0x18b)], j[M(0x17a) + 'e'](l[M(0x187)], {
            'id': m,
            'body': n,
            'ack': o,
            'read': p,
            'mediaType': q,
            'mediaUrl': r,
            'userId': {
                'type': sequelize_1[M(0x178)][M(0x170)],
                'references': {
                    'model': l[M(0x192)],
                    'key': 'id'
                },
                'onUpdate': l[M(0x188)],
                'onDelete': l[M(0x174)]
            },
            'ticketId': {
                'type': sequelize_1[L(0x178)][M(0x170)],
                'references': {
                    'model': l[M(0x176)],
                    'key': 'id'
                },
                'onUpdate': l[M(0x188)],
                'onDelete': l[M(0x188)],
                'allowNull': ![]
            },
            'fromMe': {
                'type': sequelize_1[M(0x178)][M(0x168)],
                'allowNull': ![],
                'defaultValue': ![]
            },
            'isDeleted': {
                'type': sequelize_1[L(0x178)][M(0x168)],
                'allowNull': ![],
                'defaultValue': ![]
            },
            'contactId': {
                'type': sequelize_1[M(0x178)][L(0x170)],
                'references': {
                    'model': l[M(0x17d)],
                    'key': 'id'
                },
                'onUpdate': l[M(0x188)],
                'onDelete': l[L(0x188)]
            },
            'quotedMsgId': {
                'type': sequelize_1[M(0x178)][M(0x18b)],
                'references': {
                    'model': l[M(0x16d)],
                    'key': 'id'
                },
                'onUpdate': l[L(0x188)],
                'onDelete': l[L(0x174)]
            },
            'createdAt': {
                'type': sequelize_1[L(0x178)][L(0x173)](-0x219c + 0x1 * 0xc77 + 0x152b),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[M(0x178)][M(0x173)](0x125 + -0x1f7d + 0xa9 * 0x2e),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const N = J, O = J, e = {};
        e[N(0x18d)] = O(0x16c) + O(0x18f);
        const f = e;
        return d[O(0x16f)](f[N(0x18d)]);
    }
};
function a() {
    const P = [
        'Tickets',
        'hqmfa',
        'value',
        'fLine',
        '84JvrFjx',
        '486452RMBsOy',
        'hYhOZ',
        'Contacts',
        'defaultVal',
        '154063LYggWh',
        'CASCADE',
        '10Dfpbua',
        'BOOLEAN',
        'erty',
        'autoIncrem',
        'type',
        'MessagesOf',
        'NVGYc',
        'Messages',
        'dropTable',
        'INTEGER',
        '1836780ElipNP',
        '357936NparQc',
        'DATE',
        'LxVdo',
        '86226gTyZfp',
        'mYjVI',
        '32DvNOWK',
        'DataTypes',
        'ent',
        'createTabl',
        'Users',
        'defineProp',
        'ytZMp',
        'primaryKey',
        'exports',
        'SET\x20NULL',
        '12001blDNEo',
        '10NBKzQD',
        'TEXT',
        'allowNull',
        '126HsJcVS',
        '1754370kjisQe',
        'mifma',
        'tOobT',
        '__esModule',
        'sequelize',
        'STRING'
    ];
    a = function () {
        return P;
    };
    return a();
}