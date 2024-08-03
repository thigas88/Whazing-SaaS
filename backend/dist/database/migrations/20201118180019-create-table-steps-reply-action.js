'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0xc0)) / (-0x1 * -0xd3 + 0x7ea + -0x1a * 0x56) * (-parseInt(v(0xc5)) / (0x179a + -0x2345 + -0x7 * -0x1ab)) + parseInt(v(0xe2)) / (0xfe * 0x26 + -0x1f8 + -0x23b9 * 0x1) + -parseInt(w(0xd6)) / (0x805 * 0x4 + -0x3b * -0x1 + 0x7 * -0x49d) + parseInt(w(0xc6)) / (-0x958 + -0xfc1 + 0x191e) + -parseInt(w(0xe1)) / (0x203b + -0x22fc + -0x9 * -0x4f) * (parseInt(w(0xe3)) / (0x47e + 0x8b * 0x15 + 0x3 * -0x54a)) + -parseInt(v(0xc7)) / (-0x1 * 0x12f5 + -0x108c + 0x2389) * (parseInt(v(0xd3)) / (0x231e + -0x1 * -0x3a4 + -0x26b9)) + -parseInt(w(0xce)) / (-0x9 * -0x351 + 0x2 * 0xc81 + -0x36d1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd953 * 0x5 + -0xc6f85 * 0x1 + 0x126b0d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xc09 + -0xb3 * -0x1 + 0xc15);
        let h = e[f];
        return h;
    }, b(c, d);
}
const u = {};
function a() {
    const D = [
        'SdeKQ',
        'SET\x20NULL',
        'QmMCB',
        'StepsReply',
        'value',
        'dropTable',
        'createTabl',
        'type',
        '474yokVqQ',
        '3100965hdDeHC',
        '27958GsgLij',
        'Users',
        'allowNull',
        '10713ANnKXA',
        'sequelize',
        'Actions',
        'ent',
        'lqRUG',
        '130RFfxWz',
        '5107205dyjVXs',
        '7457104PXzVXq',
        'INTEGER',
        'DATE',
        'autoIncrem',
        'CASCADE',
        'primaryKey',
        '__esModule',
        '4879720UCkiFq',
        'DataTypes',
        'defineProp',
        'exports',
        'uscqI',
        '9bCKkwo',
        'STRING',
        'ksnIS',
        '1382232iqICUj',
        'erty',
        'frjhh'
    ];
    a = function () {
        return D;
    };
    return a();
}
u[x(0xdd)] = !![], Object[x(0xd0) + x(0xd7)](exports, y(0xcd), u);
const sequelize_1 = require(y(0xc1));
module[x(0xd1)] = {
    'up': e => {
        const z = x, A = x, f = {};
        f[z(0xd2)] = A(0xdc) + A(0xc2), f[z(0xd8)] = z(0xdc), f[A(0xd9)] = A(0xcb), f[A(0xd5)] = A(0xe4), f[z(0xdb)] = A(0xda);
        const g = f, h = {};
        return h[z(0xe0)] = sequelize_1[z(0xcf)][A(0xc8)], h[z(0xca) + A(0xc3)] = !![], h[z(0xcc)] = !![], h[z(0xbf)] = ![], e[z(0xdf) + 'e'](g[A(0xd2)], {
            'id': h,
            'stepReplyId': {
                'type': sequelize_1[z(0xcf)][z(0xc8)],
                'references': {
                    'model': g[A(0xd8)],
                    'key': 'id'
                },
                'onUpdate': g[A(0xd9)],
                'onDelete': g[A(0xd9)]
            },
            'words': {
                'type': sequelize_1[A(0xcf)][A(0xd4)],
                'allowNull': ![]
            },
            'action': {
                'type': sequelize_1[A(0xcf)][z(0xc8)],
                'allowNull': ![],
                'defaultValue': 0x0
            },
            'reply': {
                'type': sequelize_1[A(0xcf)][A(0xd4)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[A(0xcf)][A(0xc8)],
                'references': {
                    'model': g[z(0xd5)],
                    'key': 'id'
                },
                'onUpdate': g[A(0xd9)],
                'onDelete': g[A(0xdb)]
            },
            'createdAt': {
                'type': sequelize_1[A(0xcf)][z(0xc9)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[A(0xcf)][z(0xc9)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const B = x, C = x, e = {};
        e[B(0xc4)] = C(0xdc) + B(0xc2);
        const f = e;
        return d[B(0xde)](f[C(0xc4)]);
    }
};