'use strict';
const J = b, K = b;
function a() {
    const P = [
        'kEOSC',
        'type',
        'createTabl',
        'Users',
        'MhxpE',
        'sequelize',
        'fLine',
        '77jmSgxf',
        'SET\x20NULL',
        'AmBHA',
        'dropTable',
        'GYCNR',
        '234BoqXes',
        '1336520hqViRC',
        'TEXT',
        '5gDNxNk',
        'allowNull',
        'primaryKey',
        'ent',
        'gaFnl',
        '__esModule',
        'defineProp',
        'MessagesOf',
        'value',
        'defaultVal',
        '1491276IVgRNz',
        '4800fpcUva',
        'BOOLEAN',
        'Messages',
        '1OvwQEg',
        '263122WrHskf',
        'STRING',
        'tcWQB',
        'Munan',
        'DATE',
        '2296847opMAKj',
        '1072zLcVnF',
        'INTEGER',
        'exports',
        'autoIncrem',
        '16024YKnnXr',
        'DataTypes',
        'Tickets',
        'deMex',
        'CASCADE',
        'erty',
        'Contacts',
        '1507194veOlJd'
    ];
    a = function () {
        return P;
    };
    return a();
}
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(H(0x208)) / (-0x74 * -0x4e + 0x1037 * 0x1 + -0x338e) * (parseInt(H(0x209)) / (-0x4 * -0x2d7 + -0x341 + 0x3 * -0x2b3)) + -parseInt(H(0x205)) / (-0x1063 + 0x1 * 0xcf2 + 0x374) * (parseInt(H(0x1df)) / (0x31f + 0x1 * -0xce4 + 0x9c9 * 0x1)) + -parseInt(I(0x1fa)) / (-0xb * -0x5b + -0xa8d + 0x6a9) * (-parseInt(H(0x1ea)) / (-0x1bba + -0x203e + -0x892 * -0x7)) + -parseInt(I(0x1de)) / (0x9f9 + -0xac5 + -0xd3 * -0x1) + -parseInt(I(0x1e3)) / (0x1ed4 + -0x8db * 0x1 + -0x15f1) * (-parseInt(I(0x1f7)) / (-0xe79 + -0x332 + 0xb * 0x19c)) + -parseInt(I(0x1f8)) / (-0x1f5f + -0xa0d + 0x2976) + -parseInt(H(0x1f2)) / (-0x72e + 0x1 * 0x1669 + -0xf30) * (-parseInt(H(0x204)) / (-0x13 * 0x191 + 0x2f * -0xc + 0x2003));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x24e3b + -0x150b * -0x8c + 0x4f5 * -0x183));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3 * 0x656 + -0xb5 * 0x22 + 0x6e2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const G = {};
G[J(0x202)] = !![], Object[K(0x200) + K(0x1e8)](exports, K(0x1ff), G);
const sequelize_1 = require(J(0x1f0));
module[J(0x1e1)] = {
    'up': j => {
        const L = K, M = K, k = {};
        k[L(0x1dc)] = L(0x201) + L(0x1f1), k[M(0x1ef)] = L(0x1ee), k[L(0x1e6)] = L(0x1e7), k[L(0x1f6)] = M(0x1f3), k[L(0x1fe)] = M(0x1e5), k[L(0x1eb)] = L(0x1e9), k[M(0x1f4)] = M(0x207);
        const l = k, m = {};
        m[M(0x1ec)] = sequelize_1[M(0x1e4)][L(0x1e0)], m[L(0x1e2) + M(0x1fd)] = !![], m[L(0x1fc)] = !![], m[M(0x1fb)] = ![];
        const n = {};
        n[L(0x1ec)] = sequelize_1[M(0x1e4)][L(0x1f9)], n[M(0x1fb)] = ![];
        const o = {};
        o[M(0x1ec)] = sequelize_1[L(0x1e4)][L(0x1e0)], o[L(0x1fb)] = ![], o[L(0x203) + 'ue'] = 0x0;
        const p = {};
        p[L(0x1ec)] = sequelize_1[M(0x1e4)][L(0x206)], p[M(0x1fb)] = ![], p[M(0x203) + 'ue'] = ![];
        const q = {};
        q[L(0x1ec)] = sequelize_1[L(0x1e4)][M(0x1da)];
        const r = {};
        return r[M(0x1ec)] = sequelize_1[M(0x1e4)][L(0x1da)], j[L(0x1ed) + 'e'](l[M(0x1dc)], {
            'id': m,
            'body': n,
            'ack': o,
            'read': p,
            'mediaType': q,
            'mediaUrl': r,
            'userId': {
                'type': sequelize_1[L(0x1e4)][L(0x1e0)],
                'references': {
                    'model': l[M(0x1ef)],
                    'key': 'id'
                },
                'onUpdate': l[M(0x1e6)],
                'onDelete': l[M(0x1f6)]
            },
            'ticketId': {
                'type': sequelize_1[M(0x1e4)][M(0x1e0)],
                'references': {
                    'model': l[M(0x1fe)],
                    'key': 'id'
                },
                'onUpdate': l[L(0x1e6)],
                'onDelete': l[M(0x1e6)],
                'allowNull': ![]
            },
            'fromMe': {
                'type': sequelize_1[M(0x1e4)][M(0x206)],
                'allowNull': ![],
                'defaultValue': ![]
            },
            'isDeleted': {
                'type': sequelize_1[M(0x1e4)][L(0x206)],
                'allowNull': ![],
                'defaultValue': ![]
            },
            'contactId': {
                'type': sequelize_1[L(0x1e4)][L(0x1e0)],
                'references': {
                    'model': l[M(0x1eb)],
                    'key': 'id'
                },
                'onUpdate': l[L(0x1e6)],
                'onDelete': l[L(0x1e6)]
            },
            'quotedMsgId': {
                'type': sequelize_1[M(0x1e4)][L(0x1da)],
                'references': {
                    'model': l[M(0x1f4)],
                    'key': 'id'
                },
                'onUpdate': l[M(0x1e6)],
                'onDelete': l[M(0x1f6)]
            },
            'createdAt': {
                'type': sequelize_1[M(0x1e4)][M(0x1dd)](-0xfa8 + -0x1 * 0x1647 + 0x25f5),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[M(0x1e4)][L(0x1dd)](0x1 * 0x2233 + -0x4c5 + -0x1d68),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const N = K, O = K, e = {};
        e[N(0x1db)] = N(0x201) + N(0x1f1);
        const f = e;
        return d[O(0x1f5)](f[N(0x1db)]);
    }
};