'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2ed * 0xb + 0x1338 + -0x320e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const x = b, y = b;
function a() {
    const D = [
        '130544IaZRho',
        'defineProp',
        'STRING',
        '5UxLkax',
        'Actions',
        'primaryKey',
        'dropTable',
        '__esModule',
        '284oiSSvA',
        '13707kwiPei',
        'EtRwg',
        '319lVbRXr',
        'elNIr',
        '20LNpptW',
        '2709948yvIAeX',
        'kUpYI',
        'allowNull',
        'value',
        'ent',
        'exports',
        'CASCADE',
        'DataTypes',
        'Users',
        'SET\x20NULL',
        'autoIncrem',
        'INTEGER',
        '30600oWNRJV',
        'type',
        '105DzKMtV',
        '3GWDoGz',
        'erty',
        'DATE',
        'MBSeZ',
        'HgRoz',
        'sequelize',
        '359757GUyQXU',
        'StepsReply',
        'createTabl',
        'yYkOB',
        '7369401lRmfen',
        '301658pDEgot'
    ];
    a = function () {
        return D;
    };
    return a();
}
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x167)) / (-0x779 + 0x3d * 0x17 + 0x1ff) * (-parseInt(w(0x172)) / (0x3 * 0x5d2 + -0x83 * -0x3b + -0x2fa5)) + parseInt(w(0x17c)) / (0x22b + 0x600 * -0x3 + 0xfd8) * (parseInt(w(0x17b)) / (-0x1554 + -0x2607 + -0x1 * -0x3b5f)) + parseInt(v(0x176)) / (-0x876 * 0x2 + 0xd3 * -0x2e + 0x1249 * 0x3) * (-parseInt(v(0x181)) / (0x221e + -0x25cb + 0x3b3 * 0x1)) + -parseInt(v(0x166)) / (0x119 * 0x4 + -0x109d + 0xc4 * 0x10) * (-parseInt(w(0x173)) / (0x5a1 * -0x1 + 0x130b + -0x1 * 0xd62)) + parseInt(w(0x16d)) / (-0x9 * 0x178 + -0x733 + -0x9a * -0x22) * (parseInt(v(0x180)) / (-0x25 * 0xc1 + 0x11b5 + 0xa3a)) + -parseInt(v(0x17e)) / (0x249e + 0x964 + -0x2df7) * (parseInt(v(0x164)) / (0x1943 + -0x8f5 + -0x1042)) + parseInt(v(0x171)) / (-0x95 * -0x19 + 0x21a * -0x7 + 0x36);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x226 * 0x1f + 0xa0 * 0x99e + -0x21edd));
const u = {};
u[x(0x15b)] = !![], Object[y(0x174) + y(0x168)](exports, x(0x17a), u);
const sequelize_1 = require(x(0x16c));
module[y(0x15d)] = {
    'up': e => {
        const z = y, A = y, f = {};
        f[z(0x17d)] = A(0x16e) + A(0x177), f[A(0x159)] = z(0x16e), f[z(0x16b)] = A(0x15e), f[z(0x17f)] = A(0x160), f[z(0x16a)] = A(0x161);
        const g = f, h = {};
        return h[A(0x165)] = sequelize_1[z(0x15f)][A(0x163)], h[z(0x162) + A(0x15c)] = !![], h[A(0x178)] = !![], h[A(0x15a)] = ![], e[z(0x16f) + 'e'](g[z(0x17d)], {
            'id': h,
            'stepReplyId': {
                'type': sequelize_1[A(0x15f)][z(0x163)],
                'references': {
                    'model': g[A(0x159)],
                    'key': 'id'
                },
                'onUpdate': g[A(0x16b)],
                'onDelete': g[z(0x16b)]
            },
            'words': {
                'type': sequelize_1[z(0x15f)][A(0x175)],
                'allowNull': ![]
            },
            'action': {
                'type': sequelize_1[A(0x15f)][A(0x163)],
                'allowNull': ![],
                'defaultValue': 0x0
            },
            'reply': {
                'type': sequelize_1[A(0x15f)][A(0x175)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[z(0x15f)][z(0x163)],
                'references': {
                    'model': g[A(0x17f)],
                    'key': 'id'
                },
                'onUpdate': g[z(0x16b)],
                'onDelete': g[z(0x16a)]
            },
            'createdAt': {
                'type': sequelize_1[z(0x15f)][z(0x169)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[z(0x15f)][z(0x169)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const B = x, C = x, e = {};
        e[B(0x170)] = B(0x16e) + B(0x177);
        const f = e;
        return d[C(0x179)](f[B(0x170)]);
    }
};