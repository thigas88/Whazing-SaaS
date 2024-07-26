'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0xd65 + -0x1 * -0x24d7 + -0x3154);
        let h = e[f];
        return h;
    }, b(c, d);
}
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(H(0x102)) / (-0x21c3 + -0x2e * -0xb5 + 0x13e) + parseInt(I(0xf6)) / (0x1a3b * 0x1 + 0x2 * 0x2e7 + -0x2007) * (-parseInt(I(0x111)) / (0x1 * 0x18b6 + -0x1d5 + 0x16de * -0x1)) + parseInt(I(0x10e)) / (0x1979 * -0x1 + 0x118 * -0x2 + -0x41 * -0x6d) + -parseInt(H(0xfb)) / (0x1b23 * -0x1 + -0x7e0 + 0x2308) * (parseInt(H(0xf3)) / (0x2df + 0x11 * -0xa9 + 0x860)) + -parseInt(H(0xff)) / (0x10f2 + -0x1 * 0x2303 + 0x1218) * (parseInt(I(0xf5)) / (-0xc57 * -0x1 + 0x5 * -0xfb + -0x768)) + -parseInt(I(0xfc)) / (0x3da + 0x20ad + -0x247e) * (parseInt(I(0x103)) / (0x1f15 + -0x4bb + -0x1a50)) + parseInt(I(0xf0)) / (-0x3 * 0x1f + -0x7 * -0x18f + -0xa81);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x8c009 + -0x13 * 0x71d7 + 0x7690b));
const G = {};
G[J(0xfe)] = !![], Object[J(0x104) + K(0x10a)](exports, K(0x106), G);
function a() {
    const P = [
        'GpdRv',
        'aUYTB',
        'sequelize',
        'CASCADE',
        'vXmwN',
        'vKWHG',
        'Users',
        'DataTypes',
        'DrWrD',
        'BOOLEAN',
        'createTabl',
        'MessagesOf',
        '30949919MFcxvQ',
        'WvRNb',
        'fLine',
        '6nzVStN',
        'primaryKey',
        '40CjUmEL',
        '14bsjMux',
        'defaultVal',
        'exports',
        'allowNull',
        'oZWMR',
        '2624155GeGxJN',
        '410247ghoWDG',
        'Messages',
        'value',
        '77651wPuoFw',
        'INTEGER',
        'ent',
        '626866HqsmKj',
        '140SFfnYi',
        'defineProp',
        'UaucN',
        '__esModule',
        'STRING',
        'TEXT',
        'SET\x20NULL',
        'erty',
        'Tickets',
        'autoIncrem',
        'dropTable',
        '654896uACSWt',
        'DATE',
        'Contacts',
        '268566aJfOvk',
        'type'
    ];
    a = function () {
        return P;
    };
    return a();
}
const sequelize_1 = require(K(0x115));
module[J(0xf8)] = {
    'up': j => {
        const L = J, M = K, k = {};
        k[L(0xe9)] = L(0xef) + L(0xf2), k[L(0x113)] = M(0xea), k[M(0x105)] = L(0x116), k[M(0x114)] = M(0x109), k[L(0xe8)] = L(0x10b), k[M(0xec)] = M(0x110), k[L(0xf1)] = L(0xfd);
        const l = k, m = {};
        m[L(0x112)] = sequelize_1[M(0xeb)][M(0x100)], m[M(0x10c) + M(0x101)] = !![], m[L(0xf4)] = !![], m[L(0xf9)] = ![];
        const n = {};
        n[L(0x112)] = sequelize_1[L(0xeb)][M(0x108)], n[L(0xf9)] = ![];
        const o = {};
        o[L(0x112)] = sequelize_1[L(0xeb)][L(0x100)], o[L(0xf9)] = ![], o[M(0xf7) + 'ue'] = 0x0;
        const p = {};
        p[L(0x112)] = sequelize_1[M(0xeb)][M(0xed)], p[M(0xf9)] = ![], p[M(0xf7) + 'ue'] = ![];
        const q = {};
        q[M(0x112)] = sequelize_1[M(0xeb)][L(0x107)];
        const r = {};
        return r[L(0x112)] = sequelize_1[L(0xeb)][M(0x107)], j[L(0xee) + 'e'](l[M(0xe9)], {
            'id': m,
            'body': n,
            'ack': o,
            'read': p,
            'mediaType': q,
            'mediaUrl': r,
            'userId': {
                'type': sequelize_1[L(0xeb)][M(0x100)],
                'references': {
                    'model': l[L(0x113)],
                    'key': 'id'
                },
                'onUpdate': l[M(0x105)],
                'onDelete': l[M(0x114)]
            },
            'ticketId': {
                'type': sequelize_1[M(0xeb)][M(0x100)],
                'references': {
                    'model': l[M(0xe8)],
                    'key': 'id'
                },
                'onUpdate': l[L(0x105)],
                'onDelete': l[M(0x105)],
                'allowNull': ![]
            },
            'fromMe': {
                'type': sequelize_1[L(0xeb)][L(0xed)],
                'allowNull': ![],
                'defaultValue': ![]
            },
            'isDeleted': {
                'type': sequelize_1[L(0xeb)][M(0xed)],
                'allowNull': ![],
                'defaultValue': ![]
            },
            'contactId': {
                'type': sequelize_1[L(0xeb)][L(0x100)],
                'references': {
                    'model': l[L(0xec)],
                    'key': 'id'
                },
                'onUpdate': l[L(0x105)],
                'onDelete': l[M(0x105)]
            },
            'quotedMsgId': {
                'type': sequelize_1[M(0xeb)][M(0x107)],
                'references': {
                    'model': l[M(0xf1)],
                    'key': 'id'
                },
                'onUpdate': l[M(0x105)],
                'onDelete': l[L(0x114)]
            },
            'createdAt': {
                'type': sequelize_1[M(0xeb)][L(0x10f)](0x18fd + -0x3d * -0x67 + -0x3182),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[M(0xeb)][M(0x10f)](0xdbd * -0x2 + 0xd10 + 0x108 * 0xe),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const N = K, O = J, e = {};
        e[N(0xfa)] = N(0xef) + N(0xf2);
        const f = e;
        return d[N(0x10d)](f[O(0xfa)]);
    }
};