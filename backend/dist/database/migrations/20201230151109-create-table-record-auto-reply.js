'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x110)) / (-0x7 * 0x1a5 + 0x886 * 0x1 + 0x2fe) * (-parseInt(z(0x125)) / (0x50e * -0x3 + -0x7f * -0x3b + -0xe19 * 0x1)) + parseInt(A(0x109)) / (0x1 * -0x1586 + 0x1 * -0x844 + 0x1dcd) + parseInt(z(0x127)) / (0x1bdb + 0x1ee0 + -0x3ab7 * 0x1) * (parseInt(z(0x118)) / (0x6b * 0x2e + 0x33 * -0x5 + 0x15 * -0xde)) + -parseInt(z(0x129)) / (-0x9aa * -0x1 + 0xb38 + 0x6 * -0x37a) * (parseInt(z(0x104)) / (-0x16ab + -0xd82 + 0x2 * 0x121a)) + parseInt(A(0x10c)) / (0x2 * 0xd49 + -0x1178 + -0x912) * (parseInt(A(0x10d)) / (0x6e6 + 0x4a * -0x3 + -0x1 * 0x5ff)) + parseInt(z(0x11e)) / (-0xc2c + 0x200 + 0xa36) * (-parseInt(z(0x119)) / (0x562 + 0x1bf0 + -0x2147)) + parseInt(A(0x115)) / (0x1ac8 + 0x2 * 0xb15 + -0x30e6);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x295cd + -0x643d0 + -0xce1fa * -0x1));
const y = {};
y[B(0x117)] = !![], Object[B(0x105) + C(0x120)](exports, C(0x10e), y);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x29d * 0x7 + -0x16 * -0x72 + 0x1 * 0x982);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(B(0x11d));
function a() {
    const H = [
        'gTyre',
        'ybMQi',
        'DataTypes',
        '4hZrCGZ',
        'type',
        '4cReDrQ',
        'AutoReplyL',
        '11436BtmZmy',
        'createTabl',
        'allowNull',
        'dropTable',
        '504ZvkyVn',
        'defineProp',
        'STRING',
        'CASCADE',
        'ent',
        '358716RhPVQZ',
        'restrict',
        'DATE',
        '86960IKIBPr',
        '315OxnPLG',
        '__esModule',
        'INTEGER',
        '152473xEKgaF',
        'primaryKey',
        'Contacts',
        'ZoHdn',
        'ogs',
        '5479668HUGhPq',
        'yflyB',
        'value',
        '437975qkjrJU',
        '11vZKWCH',
        'yMFAa',
        'exports',
        'Tickets',
        'sequelize',
        '3377930PrxmQM',
        'autoIncrem',
        'erty',
        'kEryQ'
    ];
    a = function () {
        return H;
    };
    return a();
}
module[C(0x11b)] = {
    'up': j => {
        const D = B, E = C, k = {};
        k[D(0x116)] = E(0x128) + E(0x114), k[D(0x11a)] = E(0x112), k[E(0x121)] = D(0x107), k[D(0x122)] = E(0x10a), k[D(0x123)] = E(0x11c);
        const l = k, m = {};
        m[E(0x126)] = sequelize_1[E(0x124)][D(0x10f)], m[D(0x11f) + E(0x108)] = !![], m[E(0x111)] = !![], m[E(0x12b)] = ![];
        const n = {};
        n[E(0x126)] = sequelize_1[E(0x124)][E(0x10f)], n[E(0x12b)] = ![];
        const o = {};
        o[D(0x126)] = sequelize_1[E(0x124)][E(0x106)], o[D(0x12b)] = ![];
        const p = {};
        p[E(0x126)] = sequelize_1[E(0x124)][E(0x10f)], p[D(0x12b)] = ![];
        const q = {};
        q[E(0x126)] = sequelize_1[E(0x124)][D(0x106)], q[E(0x12b)] = ![];
        const r = {};
        return r[D(0x126)] = sequelize_1[D(0x124)][E(0x106)], r[E(0x12b)] = ![], j[E(0x12a) + 'e'](l[D(0x116)], {
            'id': m,
            'autoReplyId': n,
            'autoReplyName': o,
            'stepsReplyId': p,
            'stepsReplyMessage': q,
            'wordsReply': r,
            'contactId': {
                'type': sequelize_1[E(0x124)][D(0x10f)],
                'references': {
                    'model': l[D(0x11a)],
                    'key': 'id'
                },
                'onUpdate': l[D(0x121)],
                'onDelete': l[E(0x122)]
            },
            'ticketId': {
                'type': sequelize_1[D(0x124)][E(0x10f)],
                'references': {
                    'model': l[D(0x123)],
                    'key': 'id'
                },
                'onUpdate': l[E(0x121)],
                'onDelete': l[D(0x122)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[D(0x124)][D(0x10b)](0x26fa * 0x1 + -0x18 * 0x1 + 0xc * -0x33d),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[E(0x124)][E(0x10b)](0x1add + 0x199 * 0xd + -0x2f9c),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const F = B, G = C, e = {};
        e[F(0x113)] = F(0x128) + G(0x114);
        const f = e;
        return d[F(0x103)](f[F(0x113)]);
    }
};