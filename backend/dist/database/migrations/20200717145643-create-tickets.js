'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0xc3)) / (-0xd49 + -0x2 * -0xbba + 0x515 * -0x2) + parseInt(t(0xbe)) / (-0x1d1c + -0x81 + -0x1 * -0x1d9f) + parseInt(u(0xa0)) / (-0x1978 + 0x1f05 + -0x58a) * (-parseInt(u(0xc2)) / (-0x270c + 0xb1e + -0xe * -0x1ff)) + -parseInt(u(0xb5)) / (0x1fed * 0x1 + -0x161e + 0x4e5 * -0x2) + parseInt(t(0xaf)) / (-0x101 * -0xd + -0x5 * 0x61f + 0x1194) * (-parseInt(u(0xa4)) / (-0x2c0 + -0x2 * 0x517 + -0x1 * -0xcf5)) + parseInt(t(0xba)) / (0xc57 + 0x1afd + -0x274c) + parseInt(t(0xa2)) / (0x1d49 * -0x1 + 0x1 * 0x2582 + -0x830) * (parseInt(u(0xc6)) / (-0x393 + -0xfea + 0x1387));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x51e4 * -0xf + -0x4c48a + 0x2f8b5));
const s = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2248 + -0x227e + 0x4566);
        let h = e[f];
        return h;
    }, b(c, d);
}
s[v(0xb2)] = !![], Object[w(0xc5) + w(0xb1)](exports, w(0xa1), s);
const sequelize_1 = require(v(0xab));
module[w(0xc1)] = {
    'up': e => {
        const x = w, y = w, f = {};
        f[x(0xc7)] = y(0xa5), f[y(0xa9)] = x(0xb8), f[x(0xc4)] = x(0xb6), f[y(0xb9)] = x(0xa8), f[x(0xb4)] = y(0xaa), f[y(0xbc)] = y(0xc0);
        const g = f, h = {};
        return h[x(0xb0)] = sequelize_1[y(0xbf)][y(0xbb)], h[y(0xbd) + x(0xae)] = !![], h[x(0xa6)] = !![], h[y(0xac)] = ![], e[y(0xb7) + 'e'](g[x(0xc7)], {
            'id': h,
            'status': {
                'type': sequelize_1[x(0xbf)][y(0xb3)],
                'defaultValue': g[y(0xa9)],
                'allowNull': ![]
            },
            'lastMessage': { 'type': sequelize_1[y(0xbf)][y(0xb3)] },
            'contactId': {
                'type': sequelize_1[x(0xbf)][y(0xbb)],
                'references': {
                    'model': g[x(0xc4)],
                    'key': 'id'
                },
                'onUpdate': g[y(0xb9)],
                'onDelete': g[y(0xb9)]
            },
            'userId': {
                'type': sequelize_1[x(0xbf)][y(0xbb)],
                'references': {
                    'model': g[y(0xb4)],
                    'key': 'id'
                },
                'onUpdate': g[x(0xb9)],
                'onDelete': g[x(0xbc)]
            },
            'createdAt': {
                'type': sequelize_1[y(0xbf)][x(0xad)](-0x13b + 0x16f0 + -0x5b * 0x3d),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[y(0xbf)][y(0xad)](-0x6a1 * 0x2 + 0x1442 + -0x6fa),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = w, A = w, e = {};
        e[z(0xa3)] = z(0xa5);
        const f = e;
        return d[z(0xa7)](f[A(0xa3)]);
    }
};
function a() {
    const B = [
        'ent',
        '2330106cqjeDn',
        'type',
        'erty',
        'value',
        'STRING',
        'EAIxf',
        '1545540jbKiaq',
        'Contacts',
        'createTabl',
        'pending',
        'kiTPF',
        '945432nlAYUx',
        'INTEGER',
        'QnrMy',
        'autoIncrem',
        '182116wkaTTV',
        'DataTypes',
        'SET\x20NULL',
        'exports',
        '52KaUhFj',
        '179481HUNrQJ',
        'rRbVl',
        'defineProp',
        '830ehNJIc',
        'yXzJa',
        '39243TMYdIT',
        '__esModule',
        '73251ykeyDN',
        'KrCob',
        '7tQFzkK',
        'Tickets',
        'primaryKey',
        'dropTable',
        'CASCADE',
        'qWGyH',
        'Users',
        'sequelize',
        'allowNull',
        'DATE'
    ];
    a = function () {
        return B;
    };
    return a();
}