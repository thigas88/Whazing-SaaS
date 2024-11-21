'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0xf6)) / (0x275 * 0x2 + -0xd80 + 0x1 * 0x897) * (parseInt(u(0xf4)) / (0x121f + -0x1b35 + 0x918)) + parseInt(t(0xd5)) / (-0x2e * 0x6b + -0x2c * 0x19 + 0x1789) * (-parseInt(u(0xd3)) / (-0x1ccd + -0x77 * 0x5 + 0x2 * 0xf92)) + parseInt(t(0xec)) / (0x2 * 0x705 + -0x2022 + 0x121d * 0x1) * (parseInt(u(0xef)) / (-0xb5 * 0x22 + 0x1ec0 + -0x6b0)) + parseInt(u(0xf0)) / (-0x2189 + 0x14d * 0x17 + -0x3 * -0x137) * (parseInt(u(0xe8)) / (-0x1a * -0xa3 + 0x1d6 * -0xe + -0x1d6 * -0x5)) + parseInt(t(0xde)) / (0x1 * -0x247f + -0xaa7 + 0x2f2f) + parseInt(u(0xd4)) / (-0x1af7 + -0xad * -0x1d + 0x768) * (-parseInt(u(0xdf)) / (-0x42 + -0x4a1 * -0x6 + -0x1b79)) + parseInt(t(0xe6)) / (-0x382 * -0x9 + -0x1a * -0x121 + -0x3ce0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1106f * 0x1 + 0xf6f * 0x11b + -0x436d6));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xac * -0x8 + -0x1 * 0xe3f + 0x9b0);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const B = [
        '9BvzYxY',
        'autoIncrem',
        'type',
        'erty',
        'ent',
        'exports',
        'sequelize',
        'CASCADE',
        'Users',
        '2043342uRlxab',
        '115863YbrAIy',
        'SkkZJ',
        'Queues',
        'VlxDm',
        'INTEGER',
        'DataTypes',
        'primaryKey',
        '5933568BkHLpH',
        'allowNull',
        '40adOovC',
        'createTabl',
        'HBmRa',
        'Tickets',
        '636415FmqByM',
        'LogTickets',
        'JShNV',
        '6zYQtHh',
        '1258159uJeOhL',
        'DATE',
        'ZrBGO',
        'value',
        '726602iKZaVM',
        '__esModule',
        '2bSgBNb',
        'dropTable',
        'IyduF',
        'defineProp',
        'STRING',
        '1272028xIqjjc',
        '710ItGdqD'
    ];
    a = function () {
        return B;
    };
    return a();
}
const s = {};
s[v(0xf3)] = !![], Object[w(0xd1) + v(0xd8)](exports, v(0xf5), s);
const sequelize_1 = require(w(0xdb));
module[w(0xda)] = {
    'up': e => {
        const x = v, y = w, f = {};
        f[x(0xe2)] = x(0xed), f[y(0xf2)] = y(0xdd), f[x(0xe0)] = x(0xdc), f[x(0xea)] = y(0xeb), f[y(0xee)] = x(0xe1);
        const g = f, h = {};
        return h[y(0xd7)] = sequelize_1[x(0xe4)][x(0xe3)], h[y(0xd6) + x(0xd9)] = !![], h[x(0xe5)] = !![], h[y(0xe7)] = ![], e[x(0xe9) + 'e'](g[x(0xe2)], {
            'id': h,
            'userId': {
                'type': sequelize_1[x(0xe4)][x(0xe3)],
                'references': {
                    'model': g[y(0xf2)],
                    'key': 'id'
                },
                'onUpdate': g[y(0xe0)],
                'onDelete': g[y(0xe0)],
                'allowNull': !![],
                'defaultValue': null
            },
            'ticketId': {
                'type': sequelize_1[x(0xe4)][x(0xe3)],
                'references': {
                    'model': g[x(0xea)],
                    'key': 'id'
                },
                'onUpdate': g[y(0xe0)],
                'onDelete': g[x(0xe0)],
                'allowNull': ![]
            },
            'queueId': {
                'type': sequelize_1[y(0xe4)][x(0xe3)],
                'references': {
                    'model': g[y(0xee)],
                    'key': 'id'
                },
                'onUpdate': g[x(0xe0)],
                'onDelete': g[y(0xe0)],
                'defaultValue': null,
                'allowNull': !![]
            },
            'type': {
                'type': sequelize_1[y(0xe4)][y(0xd2)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[y(0xe4)][y(0xf1)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[x(0xe4)][x(0xf1)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = w, A = w, e = {};
        e[z(0xf8)] = A(0xed);
        const f = e;
        return d[A(0xf7)](f[z(0xf8)]);
    }
};