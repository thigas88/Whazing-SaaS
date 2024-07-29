'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x140)) / (-0x8 * 0xb2 + 0xe * 0x14b + -0xc89) + parseInt(w(0x136)) / (-0x12 * 0x125 + 0x16df + 0x3 * -0xc1) + parseInt(v(0x144)) / (0x2 * 0x4c + 0x23c5 + -0x34e * 0xb) + parseInt(w(0x134)) / (-0x963 * 0x2 + -0x1be5 + 0x2eaf) * (parseInt(w(0x14a)) / (0x1eb5 + 0x1 * -0x22de + 0x42e)) + parseInt(w(0x156)) / (0x5 * -0x131 + 0x1481 + -0x1 * 0xe86) * (parseInt(v(0x143)) / (0x1ed0 + 0xbbe + -0x2a87)) + parseInt(w(0x13e)) / (0xdb2 + 0x1d * 0x12 + -0xfb4) + parseInt(v(0x154)) / (-0x13 * -0x1d8 + 0x6dc + 0x85f * -0x5) * (-parseInt(v(0x145)) / (-0x4d8 + -0xf5 * 0xf + -0x19 * -0xc5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2b0e6 + -0x1a7fe + 0x1 * 0x69a51));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x21 * -0x28 + 0x1087 * -0x1 + -0x3 * -0x430);
        let h = e[f];
        return h;
    }, b(c, d);
}
const u = {};
function a() {
    const D = [
        'DATE',
        '286312nVfWOm',
        'type',
        '480820AXFRrR',
        'value',
        'SET\x20NULL',
        'DataTypes',
        'erty',
        'Users',
        'ent',
        'Actions',
        '464408dtLEck',
        'StepsReply',
        '51754rrLPXz',
        'skTgC',
        'sequelize',
        '91QuYjIC',
        '729885FkewVM',
        '2168960luKSMJ',
        'cLaiO',
        '__esModule',
        'defineProp',
        'dropTable',
        '5aRUWbR',
        'CASCADE',
        'xROVL',
        'primaryKey',
        'STRING',
        'createTabl',
        'INTEGER',
        'allowNull',
        'exports',
        'YOeRU',
        '18EcBJHz',
        'FldUH',
        '9246hezkLj',
        'autoIncrem',
        'zaKbD'
    ];
    a = function () {
        return D;
    };
    return a();
}
u[x(0x137)] = !![], Object[x(0x148) + y(0x13a)](exports, y(0x147), u);
const sequelize_1 = require(x(0x142));
module[y(0x152)] = {
    'up': e => {
        const z = y, A = x, f = {};
        f[z(0x155)] = z(0x13f) + z(0x13d), f[A(0x153)] = z(0x13f), f[z(0x146)] = A(0x14b), f[z(0x132)] = A(0x13b), f[A(0x141)] = A(0x138);
        const g = f, h = {};
        return h[A(0x135)] = sequelize_1[A(0x139)][A(0x150)], h[A(0x131) + A(0x13c)] = !![], h[z(0x14d)] = !![], h[z(0x151)] = ![], e[z(0x14f) + 'e'](g[A(0x155)], {
            'id': h,
            'stepReplyId': {
                'type': sequelize_1[z(0x139)][A(0x150)],
                'references': {
                    'model': g[z(0x153)],
                    'key': 'id'
                },
                'onUpdate': g[A(0x146)],
                'onDelete': g[A(0x146)]
            },
            'words': {
                'type': sequelize_1[A(0x139)][z(0x14e)],
                'allowNull': ![]
            },
            'action': {
                'type': sequelize_1[z(0x139)][z(0x150)],
                'allowNull': ![],
                'defaultValue': 0x0
            },
            'reply': {
                'type': sequelize_1[z(0x139)][z(0x14e)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[A(0x139)][A(0x150)],
                'references': {
                    'model': g[A(0x132)],
                    'key': 'id'
                },
                'onUpdate': g[A(0x146)],
                'onDelete': g[A(0x141)]
            },
            'createdAt': {
                'type': sequelize_1[z(0x139)][A(0x133)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[z(0x139)][A(0x133)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const B = x, C = x, e = {};
        e[B(0x14c)] = C(0x13f) + C(0x13d);
        const f = e;
        return d[B(0x149)](f[C(0x14c)]);
    }
};