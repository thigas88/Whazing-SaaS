'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0xfd)) / (-0x6dd * -0x3 + -0x2 * -0x1381 + -0x8 * 0x773) + parseInt(w(0x10b)) / (-0x1dce + 0x1 * 0x2405 + -0x635) + -parseInt(v(0xfe)) / (-0x1fdc + 0x2 * -0xcf2 + 0x39c3) + -parseInt(v(0x115)) / (0x1436 + -0x6 * -0x24 + 0x150a * -0x1) + -parseInt(v(0x10e)) / (0x102d + 0x2 * -0x86 + 0x1 * -0xf1c) * (parseInt(w(0xf4)) / (0x8b6 + 0x26cb + -0x2f7b)) + -parseInt(v(0x101)) / (-0x1034 + 0x2675 + -0x163a) + parseInt(w(0x106)) / (0x1 * 0x923 + -0x2275 * 0x1 + 0xb * 0x24e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xa013b + 0x14b3 + 0xf38f3 * 0x1));
const u = {};
function a() {
    const D = [
        '2084244DxmaCf',
        'StepsReply',
        'zBFwJ',
        'VDnKS',
        'pdLLq',
        'autoIncrem',
        'erty',
        'ent',
        'INTEGER',
        '452913nSkkaf',
        '865371EQGSQE',
        'sequelize',
        'defineProp',
        '4228042SyzksZ',
        'type',
        'exports',
        'Users',
        'createTabl',
        '10616880XDsSUj',
        '__esModule',
        'DataTypes',
        'STRING',
        'CASCADE',
        '153940gcgYtV',
        'TLgNb',
        'value',
        '5MAEzph',
        'AutoReply',
        'dropTable',
        'DATE',
        'OqjYx',
        'primaryKey',
        'cyPte',
        '1079652AAQcIw',
        'allowNull',
        'SET\x20NULL'
    ];
    a = function () {
        return D;
    };
    return a();
}
u[x(0x10d)] = !![], Object[y(0x100) + x(0xfa)](exports, x(0x107), u);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4ae * 0x6 + 0x1 * 0xc5e + -0x2780);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(x(0xff));
module[x(0x103)] = {
    'up': g => {
        const z = y, A = y, h = {};
        h[z(0x114)] = z(0xf5), h[z(0x112)] = z(0x10f), h[z(0x10c)] = A(0x10a), h[A(0xf7)] = z(0x104), h[A(0xf8)] = z(0xf3);
        const i = h, j = {};
        j[z(0x102)] = sequelize_1[A(0x108)][z(0xfc)], j[A(0xf9) + A(0xfb)] = !![], j[z(0x113)] = !![], j[A(0xf2)] = ![];
        const k = {};
        k[A(0x102)] = sequelize_1[A(0x108)][A(0x109)], k[z(0xf2)] = ![];
        const l = {};
        return l[A(0x102)] = sequelize_1[z(0x108)][z(0xfc)], l[z(0xf2)] = ![], g[A(0x105) + 'e'](i[z(0x114)], {
            'id': j,
            'reply': k,
            'stepOrder': l,
            'idAutoReply': {
                'type': sequelize_1[z(0x108)][z(0xfc)],
                'references': {
                    'model': i[A(0x112)],
                    'key': 'id'
                },
                'onUpdate': i[z(0x10c)],
                'onDelete': i[A(0x10c)]
            },
            'action': {
                'type': sequelize_1[z(0x108)][A(0xfc)],
                'allowNull': ![],
                'defaultValue': 0x0
            },
            'userId': {
                'type': sequelize_1[z(0x108)][A(0xfc)],
                'references': {
                    'model': i[A(0xf7)],
                    'key': 'id'
                },
                'onUpdate': i[A(0x10c)],
                'onDelete': i[A(0xf8)]
            },
            'createdAt': {
                'type': sequelize_1[z(0x108)][z(0x111)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[z(0x108)][z(0x111)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const B = y, C = x, e = {};
        e[B(0xf6)] = B(0xf5);
        const f = e;
        return d[C(0x110)](f[B(0xf6)]);
    }
};