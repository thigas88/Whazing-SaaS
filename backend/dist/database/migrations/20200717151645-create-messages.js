'use strict';
function a() {
    const H = [
        '560CfcRsE',
        '2964MGMKAc',
        'STRING',
        'defineProp',
        'HWjZB',
        '919432LfaWaW',
        'primaryKey',
        '__esModule',
        'nHkYp',
        'SET\x20NULL',
        'type',
        'MCVXx',
        'KLqqj',
        '131432lUdRiu',
        'createTabl',
        '112760HmrTgR',
        '33rJBJWl',
        '10zcrpxx',
        'uZOBP',
        'DATE',
        '496089LMBbVU',
        'XvKOL',
        'allowNull',
        'TEXT',
        'exports',
        'BOOLEAN',
        '120YQSQIR',
        '3BLIbsn',
        '941160DBXDTG',
        '3751DFqaHI',
        'value',
        'DataTypes',
        'Messages',
        'defaultVal',
        'Users',
        'INTEGER',
        'sequelize',
        'dropTable',
        'Tickets',
        'erty',
        'CASCADE'
    ];
    a = function () {
        return H;
    };
    return a();
}
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0xfb)) / (0x19ef * 0x1 + 0xb3b * -0x1 + 0xeb3 * -0x1) * (-parseInt(z(0xf8)) / (-0x871 + -0x916 + 0x1189)) + parseInt(z(0xf9)) / (0x4cf * 0x3 + 0x3 * 0x296 + -0x56 * 0x42) * (-parseInt(A(0x10c)) / (-0x111 + 0x1b16 + -0x1a01 * 0x1)) + parseInt(A(0x107)) / (0x103f * 0x2 + -0x26ba + 0x641) * (-parseInt(A(0x108)) / (-0x26cd + 0x2461 + 0x272 * 0x1)) + parseInt(z(0x114)) / (0x71 + 0xe90 + -0xefa) + -parseInt(z(0x116)) / (0x260 * 0x8 + -0x14aa + -0x1f * -0xe) + -parseInt(A(0x11b)) / (0x1d * 0x76 + -0xf11 + -0x1bc * -0x1) * (parseInt(z(0x118)) / (-0x229e + -0x1 * -0x25c4 + -0x31c)) + -parseInt(z(0x117)) / (-0x1 * -0x59e + -0xe7d * 0x2 + -0x3 * -0x7cd) * (-parseInt(z(0xfa)) / (0x7 * -0x2a7 + 0x6b * -0x49 + 0x3120));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xffab * -0x3 + 0xcf76 + 0x416bf));
const y = {};
y[B(0xfc)] = !![], Object[B(0x10a) + B(0x105)](exports, B(0x10e), y);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4a * -0x25 + 0x51 * 0x49 + -0x20d4);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(B(0x102));
module[C(0x11f)] = {
    'up': j => {
        const D = C, E = B, k = {};
        k[D(0x113)] = D(0xfe), k[D(0x10b)] = D(0x100), k[D(0x11c)] = D(0x106), k[E(0x112)] = D(0x110), k[D(0x10f)] = E(0x104);
        const l = k, m = {};
        m[E(0x111)] = sequelize_1[E(0xfd)][E(0x109)], m[E(0x10d)] = !![], m[D(0x11d)] = ![];
        const n = {};
        n[E(0x111)] = sequelize_1[D(0xfd)][D(0x11e)], n[D(0x11d)] = ![];
        const o = {};
        o[E(0x111)] = sequelize_1[D(0xfd)][E(0x101)], o[D(0x11d)] = ![], o[E(0xff) + 'ue'] = 0x0;
        const p = {};
        p[E(0x111)] = sequelize_1[D(0xfd)][D(0xf7)], p[D(0x11d)] = ![], p[D(0xff) + 'ue'] = ![];
        const q = {};
        q[E(0x111)] = sequelize_1[E(0xfd)][E(0x109)];
        const r = {};
        return r[D(0x111)] = sequelize_1[E(0xfd)][D(0x109)], j[D(0x115) + 'e'](l[D(0x113)], {
            'id': m,
            'body': n,
            'ack': o,
            'read': p,
            'mediaType': q,
            'mediaUrl': r,
            'userId': {
                'type': sequelize_1[D(0xfd)][D(0x101)],
                'references': {
                    'model': l[E(0x10b)],
                    'key': 'id'
                },
                'onUpdate': l[D(0x11c)],
                'onDelete': l[E(0x112)]
            },
            'ticketId': {
                'type': sequelize_1[D(0xfd)][E(0x101)],
                'references': {
                    'model': l[D(0x10f)],
                    'key': 'id'
                },
                'onUpdate': l[D(0x11c)],
                'onDelete': l[E(0x11c)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[D(0xfd)][E(0x11a)](0x2166 + -0x1891 + -0x8cf),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[D(0xfd)][D(0x11a)](0x3 * 0xae5 + 0x2 * 0xf58 + -0x3f59),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const F = C, G = C, e = {};
        e[F(0x119)] = F(0xfe);
        const f = e;
        return d[F(0x103)](f[F(0x119)]);
    }
};