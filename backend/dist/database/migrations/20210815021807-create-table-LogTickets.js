'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x10d)) / (0x2 * -0xbc + 0x12 * -0x1fd + 0x2543 * 0x1) + parseInt(t(0x105)) / (-0x482 + -0x25b9 + 0x2a3d) + -parseInt(u(0x10e)) / (-0x9a6 + 0x1cfb * -0x1 + 0x26a4) * (-parseInt(t(0x110)) / (0x1 * -0xa21 + -0x96 + 0xabb)) + -parseInt(u(0xfc)) / (-0xa0a + 0x1 * 0x1cc9 + -0x12ba) + -parseInt(u(0xfb)) / (0x342 + -0x25fb + 0x22bf) * (parseInt(u(0x10b)) / (-0x824 + 0x92a + -0xff)) + -parseInt(u(0x109)) / (0x1219 + 0x2124 + 0x1 * -0x3335) + parseInt(t(0x101)) / (0x12ae + 0x12e9 * -0x1 + 0x44);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xe044 * -0x10 + 0x39c17 * -0x5 + 0xf5afe));
const s = {};
s[v(0xf8)] = !![], Object[v(0xef) + v(0xf5)](exports, v(0x10a), s);
const sequelize_1 = require(v(0x111));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1d52 + 0x1ae9 + 0x357);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[w(0xfd)] = {
    'up': e => {
        const x = w, y = w, f = {};
        f[x(0xee)] = y(0x108), f[x(0xf1)] = x(0xf0), f[y(0x104)] = y(0x103), f[x(0x112)] = x(0x107), f[x(0x106)] = x(0xf2);
        const g = f, h = {};
        return h[y(0xf4)] = sequelize_1[x(0xf9)][y(0x10c)], h[x(0xfe) + y(0x102)] = !![], h[y(0xf6)] = !![], h[y(0xfa)] = ![], e[y(0x100) + 'e'](g[x(0xee)], {
            'id': h,
            'userId': {
                'type': sequelize_1[x(0xf9)][y(0x10c)],
                'references': {
                    'model': g[x(0xf1)],
                    'key': 'id'
                },
                'onUpdate': g[x(0x104)],
                'onDelete': g[y(0x104)],
                'allowNull': !![],
                'defaultValue': null
            },
            'ticketId': {
                'type': sequelize_1[y(0xf9)][y(0x10c)],
                'references': {
                    'model': g[x(0x112)],
                    'key': 'id'
                },
                'onUpdate': g[x(0x104)],
                'onDelete': g[y(0x104)],
                'allowNull': ![]
            },
            'queueId': {
                'type': sequelize_1[x(0xf9)][x(0x10c)],
                'references': {
                    'model': g[y(0x106)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x104)],
                'onDelete': g[x(0x104)],
                'defaultValue': null,
                'allowNull': !![]
            },
            'type': {
                'type': sequelize_1[x(0xf9)][y(0x10f)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[y(0xf9)][y(0xff)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[x(0xf9)][x(0xff)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = v, A = v, e = {};
        e[z(0xf3)] = A(0x108);
        const f = e;
        return d[A(0xf7)](f[A(0xf3)]);
    }
};
function a() {
    const B = [
        'jPVIh',
        'type',
        'erty',
        'primaryKey',
        'dropTable',
        'value',
        'DataTypes',
        'allowNull',
        '6hoQOMz',
        '6992045ptdZIA',
        'exports',
        'autoIncrem',
        'DATE',
        'createTabl',
        '6523947SrYiUK',
        'ent',
        'CASCADE',
        'KtRyx',
        '2698432IvQrbs',
        'MATMo',
        'Tickets',
        'LogTickets',
        '958192tLIqXP',
        '__esModule',
        '1054823HhnWln',
        'INTEGER',
        '291656rchMfS',
        '57JeMivi',
        'STRING',
        '132320liPaCo',
        'sequelize',
        'HKPOG',
        'nkNUO',
        'defineProp',
        'Users',
        'oSqgV',
        'Queues'
    ];
    a = function () {
        return B;
    };
    return a();
}