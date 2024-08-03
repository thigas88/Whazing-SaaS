'use strict';
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(H(0xff)) / (-0x17fb + -0x1bcf + 0x1 * 0x33cb) * (parseInt(H(0x10e)) / (-0x63 + 0xd * 0x132 + -0xf25)) + -parseInt(H(0x118)) / (-0x5d3 + -0x1955 * 0x1 + 0x1f2b) + -parseInt(I(0x111)) / (-0x1 * 0x1323 + -0x89a + 0x1bc1) * (-parseInt(I(0xf4)) / (-0xb45 * 0x3 + -0x7db * -0x1 + 0x19f9)) + parseInt(H(0xfe)) / (0x3 * 0x5bd + -0x23 * -0xe9 + 0x92 * -0x56) * (-parseInt(I(0xfa)) / (-0x4 * 0x44f + -0x15d + 0x12a0)) + -parseInt(I(0x100)) / (-0xe5a + -0x552 + 0x13b4) * (-parseInt(H(0x110)) / (-0xd82 + 0x2418 + -0x168d * 0x1)) + parseInt(H(0xf6)) / (-0x1631 + -0x221 * 0xf + 0x1b15 * 0x2) * (-parseInt(H(0x10b)) / (0x8bf * -0x3 + -0x1b19 + 0x3561)) + parseInt(H(0x10c)) / (0x1 * -0x16e1 + 0x20a9 + -0x9bc) * (parseInt(H(0x105)) / (0x1f * 0xc4 + 0x6d * -0x1f + -0xa7c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xd6881 + 0x98c31 + 0x1fa9 * 0x6a));
const G = {};
G[J(0xf0)] = !![], Object[J(0xea) + K(0x119)](exports, K(0xe9), G);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xbf * 0x1 + 0x9 * -0x16e + 0x2 * 0x743);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(J(0x104));
module[J(0x106)] = {
    'up': j => {
        const L = J, M = J, k = {};
        k[L(0x113)] = L(0x101) + M(0xf3), k[M(0xee)] = M(0x103), k[M(0x114)] = M(0x115), k[M(0x107)] = L(0xf8), k[M(0xf1)] = L(0x102), k[L(0xf5)] = L(0x10d), k[M(0xfb)] = M(0xf2);
        const l = k, m = {};
        m[M(0x116)] = sequelize_1[L(0x109)][M(0xf9)], m[M(0x112) + M(0xeb)] = !![], m[L(0xf7)] = !![], m[L(0xef)] = ![];
        const n = {};
        n[M(0x116)] = sequelize_1[L(0x109)][M(0x108)], n[L(0xef)] = ![];
        const o = {};
        o[L(0x116)] = sequelize_1[L(0x109)][L(0xf9)], o[L(0xef)] = ![], o[M(0x10a) + 'ue'] = 0x0;
        const p = {};
        p[M(0x116)] = sequelize_1[M(0x109)][L(0x10f)], p[L(0xef)] = ![], p[L(0x10a) + 'ue'] = ![];
        const q = {};
        q[M(0x116)] = sequelize_1[M(0x109)][L(0x117)];
        const r = {};
        return r[M(0x116)] = sequelize_1[L(0x109)][L(0x117)], j[L(0xfc) + 'e'](l[L(0x113)], {
            'id': m,
            'body': n,
            'ack': o,
            'read': p,
            'mediaType': q,
            'mediaUrl': r,
            'userId': {
                'type': sequelize_1[M(0x109)][M(0xf9)],
                'references': {
                    'model': l[L(0xee)],
                    'key': 'id'
                },
                'onUpdate': l[L(0x114)],
                'onDelete': l[M(0x107)]
            },
            'ticketId': {
                'type': sequelize_1[L(0x109)][M(0xf9)],
                'references': {
                    'model': l[L(0xf1)],
                    'key': 'id'
                },
                'onUpdate': l[L(0x114)],
                'onDelete': l[L(0x114)],
                'allowNull': ![]
            },
            'fromMe': {
                'type': sequelize_1[M(0x109)][M(0x10f)],
                'allowNull': ![],
                'defaultValue': ![]
            },
            'isDeleted': {
                'type': sequelize_1[M(0x109)][L(0x10f)],
                'allowNull': ![],
                'defaultValue': ![]
            },
            'contactId': {
                'type': sequelize_1[L(0x109)][L(0xf9)],
                'references': {
                    'model': l[L(0xf5)],
                    'key': 'id'
                },
                'onUpdate': l[L(0x114)],
                'onDelete': l[L(0x114)]
            },
            'quotedMsgId': {
                'type': sequelize_1[M(0x109)][M(0x117)],
                'references': {
                    'model': l[L(0xfb)],
                    'key': 'id'
                },
                'onUpdate': l[M(0x114)],
                'onDelete': l[M(0x107)]
            },
            'createdAt': {
                'type': sequelize_1[M(0x109)][L(0xec)](-0x4b1 * 0x2 + 0x29 + 0x93f),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[L(0x109)][L(0xec)](0x2 * -0x127d + -0x98e * 0x3 + -0x691 * -0xa),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const N = K, O = J, e = {};
        e[N(0xed)] = O(0x101) + O(0xf3);
        const f = e;
        return d[O(0xfd)](f[N(0xed)]);
    }
};
function a() {
    const P = [
        '__esModule',
        'defineProp',
        'ent',
        'DATE',
        'sNEUz',
        'GZpbF',
        'allowNull',
        'value',
        'LYkXs',
        'Messages',
        'fLine',
        '395ZyVIIO',
        'tsnAf',
        '9363770uUkGOC',
        'primaryKey',
        'SET\x20NULL',
        'INTEGER',
        '3042739AaBsbz',
        'vNwuH',
        'createTabl',
        'dropTable',
        '6XvIOsR',
        '61909fXgOfu',
        '48MUbXgh',
        'MessagesOf',
        'Tickets',
        'Users',
        'sequelize',
        '2795BtKwYH',
        'exports',
        'hNBwl',
        'TEXT',
        'DataTypes',
        'defaultVal',
        '11XHmjsu',
        '119772NzzwfV',
        'Contacts',
        '6ccUsNT',
        'BOOLEAN',
        '327942FymEmu',
        '47024McgGAv',
        'autoIncrem',
        'UstqV',
        'sygea',
        'CASCADE',
        'type',
        'STRING',
        '3391092UgGnMs',
        'erty'
    ];
    a = function () {
        return P;
    };
    return a();
}