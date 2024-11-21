'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x1df)) / (-0xcd + 0x16e7 + -0x1619) + parseInt(w(0x1e3)) / (-0x126e * 0x1 + 0x2 * 0x1cb + -0x76d * -0x2) + parseInt(v(0x1fb)) / (-0x4 * 0x3f1 + -0xba7 * -0x1 + 0xb0 * 0x6) + -parseInt(v(0x1ea)) / (-0x11 * 0xcc + -0xf70 + 0x1d00) + -parseInt(w(0x1e6)) / (0x67c + 0x3 * 0x345 + -0x1 * 0x1046) + parseInt(w(0x1f6)) / (-0x1680 + 0x7 * -0x70 + -0x2 * -0xccb) + -parseInt(v(0x1dd)) / (-0x66 * -0x32 + -0x66f + -0x2 * 0x6bb) * (parseInt(v(0x1eb)) / (0x927 + 0xce * -0x5 + -0x519));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0xce8c + 0x32d43 + 0x27 * -0x5f5));
const u = {};
function a() {
    const D = [
        'autoIncrem',
        'WMNKD',
        '1574616GcNTGu',
        'ent',
        'PgmUa',
        'type',
        'reBfM',
        '529146RAlLoD',
        'exports',
        'INTEGER',
        'allowNull',
        'erty',
        'sequelize',
        '43106cMheui',
        'CASCADE',
        '22991walsmT',
        'StepsReply',
        'qnmlY',
        'createTabl',
        '353750OfRaXE',
        'gzclU',
        'value',
        '699750dbrHoN',
        'DataTypes',
        'primaryKey',
        'SET\x20NULL',
        '1163920UlwuRJ',
        '8wXjSdP',
        'dropTable',
        'Actions',
        'defineProp',
        'yOMUM',
        'DATE',
        'Users',
        '__esModule',
        'STRING'
    ];
    a = function () {
        return D;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1831 + -0x1 * -0xc13 + 0xdfa * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
u[x(0x1e5)] = !![], Object[y(0x1ee) + x(0x1ff)](exports, y(0x1f2), u);
const sequelize_1 = require(y(0x1dc));
module[y(0x1fc)] = {
    'up': e => {
        const z = y, A = y, f = {};
        f[z(0x1f5)] = A(0x1e0) + z(0x1ed), f[A(0x1ef)] = z(0x1e0), f[A(0x1e1)] = A(0x1de), f[z(0x1f8)] = z(0x1f1), f[z(0x1e4)] = z(0x1e9);
        const g = f, h = {};
        return h[z(0x1f9)] = sequelize_1[z(0x1e7)][z(0x1fd)], h[A(0x1f4) + A(0x1f7)] = !![], h[A(0x1e8)] = !![], h[A(0x1fe)] = ![], e[z(0x1e2) + 'e'](g[z(0x1f5)], {
            'id': h,
            'stepReplyId': {
                'type': sequelize_1[z(0x1e7)][z(0x1fd)],
                'references': {
                    'model': g[A(0x1ef)],
                    'key': 'id'
                },
                'onUpdate': g[A(0x1e1)],
                'onDelete': g[A(0x1e1)]
            },
            'words': {
                'type': sequelize_1[A(0x1e7)][z(0x1f3)],
                'allowNull': ![]
            },
            'action': {
                'type': sequelize_1[z(0x1e7)][A(0x1fd)],
                'allowNull': ![],
                'defaultValue': 0x0
            },
            'reply': {
                'type': sequelize_1[A(0x1e7)][A(0x1f3)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[A(0x1e7)][z(0x1fd)],
                'references': {
                    'model': g[A(0x1f8)],
                    'key': 'id'
                },
                'onUpdate': g[z(0x1e1)],
                'onDelete': g[A(0x1e4)]
            },
            'createdAt': {
                'type': sequelize_1[A(0x1e7)][z(0x1f0)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[z(0x1e7)][z(0x1f0)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const B = x, C = y, e = {};
        e[B(0x1fa)] = C(0x1e0) + B(0x1ed);
        const f = e;
        return d[B(0x1ec)](f[C(0x1fa)]);
    }
};