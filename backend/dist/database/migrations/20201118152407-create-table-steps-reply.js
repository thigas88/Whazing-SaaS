'use strict';
function a() {
    const D = [
        'vNitz',
        '114HUSUSt',
        'createTabl',
        '16DWPFYT',
        'YUhFy',
        'DataTypes',
        '9820UVKfpI',
        '2418284dUOIlS',
        '34cqvLub',
        'rKCUS',
        'StepsReply',
        'CASCADE',
        '6325MLNFRB',
        'SET\x20NULL',
        'sequelize',
        'dropTable',
        'INTEGER',
        '74915XXvJeg',
        'autoIncrem',
        'sUrHo',
        'WZYju',
        'DATE',
        'exports',
        '__esModule',
        'AutoReply',
        '2999759BBKJAl',
        'value',
        'allowNull',
        'ent',
        '199323wlHBge',
        '15996lNUTCQ',
        'defineProp',
        'Users',
        'primaryKey',
        'mRiXH',
        'type',
        '43191aVkvuL',
        '4446jMIBGi',
        'erty',
        'STRING'
    ];
    a = function () {
        return D;
    };
    return a();
}
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0xd6)) / (-0x12be * 0x2 + -0x565 * -0x3 + 0x154e) + parseInt(w(0xc1)) / (-0x10af + -0xabf * -0x2 + 0x1 * -0x4cd) * (-parseInt(w(0xdd)) / (-0x135c + 0x1969 + -0x60a)) + parseInt(v(0xc0)) / (0x2d6 * -0x1 + 0x766 * 0x3 + -0x1358) + -parseInt(w(0xca)) / (0x17af + 0x1327 * 0x1 + -0x2ad1) * (parseInt(w(0xe2)) / (-0x1 * -0x1600 + -0x15fb + 0x1 * 0x1)) + parseInt(v(0xd2)) / (0x3 * 0x3cb + 0x594 + -0x10ee) * (parseInt(w(0xe4)) / (-0xf43 * -0x1 + 0x1092 + -0x1fcd * 0x1)) + parseInt(w(0xde)) / (0x486 * 0x8 + -0x1 * -0xfd3 + -0x2 * 0x19fd) * (parseInt(v(0xbf)) / (0x25cb + -0x355 * 0x3 + -0x1bc2)) + -parseInt(v(0xc5)) / (0x1b5 + 0x1ef6 + 0x1d0 * -0x12) * (parseInt(w(0xd7)) / (0x21d0 + 0x1ea9 + -0x406d * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x254b1 + -0x122 * -0x794 + -0xb0 * 0x5db));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x250d + -0x17f6 * -0x1 + 0xdd6);
        let h = e[f];
        return h;
    }, b(c, d);
}
const u = {};
u[x(0xd3)] = !![], Object[y(0xd8) + y(0xdf)](exports, y(0xd0), u);
const sequelize_1 = require(x(0xc7));
module[y(0xcf)] = {
    'up': g => {
        const z = y, A = x, h = {};
        h[z(0xe1)] = A(0xc3), h[z(0xdb)] = z(0xd1), h[z(0xe5)] = A(0xc4), h[z(0xc2)] = z(0xd9), h[A(0xcd)] = A(0xc6);
        const i = h, j = {};
        j[z(0xdc)] = sequelize_1[A(0xe6)][A(0xc9)], j[A(0xcb) + z(0xd5)] = !![], j[z(0xda)] = !![], j[z(0xd4)] = ![];
        const k = {};
        k[z(0xdc)] = sequelize_1[z(0xe6)][z(0xe0)], k[z(0xd4)] = ![];
        const l = {};
        return l[A(0xdc)] = sequelize_1[z(0xe6)][A(0xc9)], l[A(0xd4)] = ![], g[A(0xe3) + 'e'](i[A(0xe1)], {
            'id': j,
            'reply': k,
            'stepOrder': l,
            'idAutoReply': {
                'type': sequelize_1[A(0xe6)][z(0xc9)],
                'references': {
                    'model': i[z(0xdb)],
                    'key': 'id'
                },
                'onUpdate': i[A(0xe5)],
                'onDelete': i[A(0xe5)]
            },
            'action': {
                'type': sequelize_1[A(0xe6)][A(0xc9)],
                'allowNull': ![],
                'defaultValue': 0x0
            },
            'userId': {
                'type': sequelize_1[A(0xe6)][z(0xc9)],
                'references': {
                    'model': i[A(0xc2)],
                    'key': 'id'
                },
                'onUpdate': i[z(0xe5)],
                'onDelete': i[z(0xcd)]
            },
            'createdAt': {
                'type': sequelize_1[A(0xe6)][A(0xce)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[A(0xe6)][A(0xce)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const B = x, C = x, e = {};
        e[B(0xcc)] = C(0xc3);
        const f = e;
        return d[C(0xc8)](f[B(0xcc)]);
    }
};