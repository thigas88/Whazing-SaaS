'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x210)) / (0x1f98 + -0x992 + -0x757 * 0x3) * (-parseInt(v(0x20b)) / (-0xda9 + -0x1793 + -0xe * -0x2a9)) + -parseInt(v(0x215)) / (0x2511 + -0x22b9 + -0x3 * 0xc7) + -parseInt(v(0x1f7)) / (-0x196a * 0x1 + 0x217 + 0x1757) * (parseInt(w(0x1fd)) / (0x2303 + -0x2214 + -0xd * 0x12)) + parseInt(v(0x20a)) / (-0x1043 + 0x17 * -0x199 + 0x3508 * 0x1) * (parseInt(w(0x213)) / (-0x14aa + 0xbe1 + 0x8d0)) + parseInt(w(0x20c)) / (0xa2a * -0x2 + -0x1 * 0xbb9 + 0x2015 * 0x1) * (-parseInt(v(0x219)) / (-0x3 * -0x511 + 0x21d * 0x1 + -0x1147 * 0x1)) + -parseInt(w(0x20e)) / (-0x58 * 0x16 + -0x1e01 + 0xc89 * 0x3) + parseInt(v(0x1f8)) / (-0x2568 + 0x25ec + -0x79 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x36 * -0x3c17 + -0x3d954 * -0x4 + -0x1068e7 * 0x1));
function a() {
    const D = [
        'tbpdj',
        '4413402kLmyaP',
        'autoIncrem',
        'ECHUx',
        'DATE',
        '13490505HkXOTk',
        'AutoReply',
        'erty',
        'INTEGER',
        '__esModule',
        '4rGSuCF',
        '60345472Csbofb',
        'value',
        'SET\x20NULL',
        'exports',
        'createTabl',
        '5053295pxXkpA',
        'type',
        'CASCADE',
        'primaryKey',
        'ent',
        'sequelize',
        'QKzqd',
        'allowNull',
        'defineProp',
        'VoPCM',
        'STRING',
        'StepsReply',
        'qvsXR',
        '6tGzTBs',
        '12HQEBvP',
        '8RqNFeM',
        'Users',
        '4612780ZXCLmA',
        'QBakw',
        '136367XIagat',
        'dropTable',
        'DataTypes',
        '3769451GxWLkm'
    ];
    a = function () {
        return D;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1b * 0x99 + 0xc19 * 0x3 + 0x4 * -0x48d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const u = {};
u[x(0x1f9)] = !![], Object[x(0x205) + x(0x1f4)](exports, y(0x1f6), u);
const sequelize_1 = require(x(0x202));
module[y(0x1fb)] = {
    'up': g => {
        const z = y, A = y, h = {};
        h[z(0x209)] = A(0x208), h[z(0x206)] = z(0x21a), h[A(0x203)] = z(0x1ff), h[z(0x217)] = z(0x20d), h[A(0x20f)] = z(0x1fa);
        const i = h, j = {};
        j[z(0x1fe)] = sequelize_1[z(0x212)][A(0x1f5)], j[z(0x216) + A(0x201)] = !![], j[z(0x200)] = !![], j[z(0x204)] = ![];
        const k = {};
        k[z(0x1fe)] = sequelize_1[A(0x212)][A(0x207)], k[A(0x204)] = ![];
        const l = {};
        return l[z(0x1fe)] = sequelize_1[A(0x212)][z(0x1f5)], l[z(0x204)] = ![], g[z(0x1fc) + 'e'](i[A(0x209)], {
            'id': j,
            'reply': k,
            'stepOrder': l,
            'idAutoReply': {
                'type': sequelize_1[A(0x212)][z(0x1f5)],
                'references': {
                    'model': i[A(0x206)],
                    'key': 'id'
                },
                'onUpdate': i[z(0x203)],
                'onDelete': i[z(0x203)]
            },
            'action': {
                'type': sequelize_1[z(0x212)][A(0x1f5)],
                'allowNull': ![],
                'defaultValue': 0x0
            },
            'userId': {
                'type': sequelize_1[z(0x212)][A(0x1f5)],
                'references': {
                    'model': i[A(0x217)],
                    'key': 'id'
                },
                'onUpdate': i[z(0x203)],
                'onDelete': i[A(0x20f)]
            },
            'createdAt': {
                'type': sequelize_1[A(0x212)][z(0x218)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[A(0x212)][A(0x218)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const B = x, C = x, e = {};
        e[B(0x214)] = C(0x208);
        const f = e;
        return d[C(0x211)](f[B(0x214)]);
    }
};