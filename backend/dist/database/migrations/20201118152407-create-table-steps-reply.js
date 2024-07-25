'use strict';
const x = b, y = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x1349 + -0xfc6 + -0x1bd);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x1c6)) / (-0x72 * -0x49 + -0x1626 + 0xa5b * -0x1) + -parseInt(v(0x1e5)) / (-0xccb + 0x53 * -0x2 + -0x1 * -0xd73) + parseInt(v(0x1dc)) / (-0x2474 + 0x5 * 0x69b + 0x370) + -parseInt(w(0x1cf)) / (-0x7 * 0x3b7 + -0xda4 + 0x27a9) * (-parseInt(v(0x1e9)) / (0x4a * 0x11 + 0x1e8b + 0x6c * -0x54)) + -parseInt(w(0x1d4)) / (-0x1 * -0xfb3 + -0xb * 0x303 + 0x1174) + -parseInt(v(0x1d9)) / (0x12f * -0x1 + -0x141c + 0x1552) * (parseInt(w(0x1de)) / (-0x12 * 0x1c9 + 0xe59 * -0x1 + -0x1b9 * -0x1b)) + parseInt(w(0x1da)) / (0xdf * -0x1c + -0x6ce + 0x5 * 0x63f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x59f7d + 0x1daa5 + -0x25f * 0x4d));
const u = {};
u[x(0x1cb)] = !![], Object[y(0x1c9) + y(0x1d1)](exports, x(0x1d8), u);
function a() {
    const D = [
        'INTEGER',
        '__esModule',
        '5425CQAfAD',
        '753741wWmyxA',
        'STRING',
        '1599474QjGdoH',
        'sequelize',
        '5512MCYyjv',
        'exports',
        'SET\x20NULL',
        'HXEQF',
        'bvTAz',
        'DataTypes',
        'CASCADE',
        '404280pUIJJR',
        'type',
        'wmJmM',
        'StepsReply',
        '300Motuew',
        'primaryKey',
        '470926EDliHc',
        'NXXqu',
        'autoIncrem',
        'defineProp',
        'Users',
        'value',
        'dropTable',
        'QgqXy',
        'ent',
        '20716IqrgHD',
        'JxEOA',
        'erty',
        'DATE',
        'AutoReply',
        '1315074CaYlge',
        'allowNull',
        'createTabl'
    ];
    a = function () {
        return D;
    };
    return a();
}
const sequelize_1 = require(y(0x1dd));
module[x(0x1df)] = {
    'up': g => {
        const z = y, A = x, h = {};
        h[z(0x1e1)] = A(0x1e8), h[z(0x1cd)] = A(0x1d3), h[A(0x1e7)] = z(0x1e4), h[z(0x1c7)] = A(0x1ca), h[A(0x1d0)] = z(0x1e0);
        const i = h, j = {};
        j[A(0x1e6)] = sequelize_1[z(0x1e3)][z(0x1d7)], j[A(0x1c8) + A(0x1ce)] = !![], j[A(0x1ea)] = !![], j[A(0x1d5)] = ![];
        const k = {};
        k[A(0x1e6)] = sequelize_1[z(0x1e3)][z(0x1db)], k[A(0x1d5)] = ![];
        const l = {};
        return l[z(0x1e6)] = sequelize_1[z(0x1e3)][z(0x1d7)], l[A(0x1d5)] = ![], g[A(0x1d6) + 'e'](i[z(0x1e1)], {
            'id': j,
            'reply': k,
            'stepOrder': l,
            'idAutoReply': {
                'type': sequelize_1[z(0x1e3)][A(0x1d7)],
                'references': {
                    'model': i[z(0x1cd)],
                    'key': 'id'
                },
                'onUpdate': i[A(0x1e7)],
                'onDelete': i[z(0x1e7)]
            },
            'action': {
                'type': sequelize_1[A(0x1e3)][z(0x1d7)],
                'allowNull': ![],
                'defaultValue': 0x0
            },
            'userId': {
                'type': sequelize_1[A(0x1e3)][z(0x1d7)],
                'references': {
                    'model': i[A(0x1c7)],
                    'key': 'id'
                },
                'onUpdate': i[z(0x1e7)],
                'onDelete': i[z(0x1d0)]
            },
            'createdAt': {
                'type': sequelize_1[z(0x1e3)][z(0x1d2)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[A(0x1e3)][z(0x1d2)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const B = y, C = x, e = {};
        e[B(0x1e2)] = C(0x1e8);
        const f = e;
        return d[C(0x1cc)](f[C(0x1e2)]);
    }
};