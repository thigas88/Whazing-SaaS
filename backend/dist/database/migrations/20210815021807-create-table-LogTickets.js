'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * -0xcd2 + -0xbe9 * -0x1 + -0x28e * 0xe);
        let h = e[f];
        return h;
    }, b(c, d);
}
const v = b, w = b;
function a() {
    const B = [
        '__esModule',
        '245dDGwwT',
        'Tickets',
        '6285828BOQyMr',
        '3825VDBxFB',
        'CASCADE',
        'createTabl',
        'autoIncrem',
        'primaryKey',
        'Wpbwe',
        '348210mAMKZG',
        'type',
        'Users',
        '1038378Rblqqm',
        'LogTickets',
        '132174VbfdtO',
        '4SHXKFc',
        '4663yKzzCH',
        'DataTypes',
        'ZjoUu',
        'ent',
        'oBbCH',
        'sequelize',
        'erty',
        '70QCUwfr',
        'xnxZv',
        '58gJdwvt',
        'defineProp',
        'xwpGi',
        '1535365rEGDBg',
        'exports',
        'LrMAZ',
        'value',
        '5800bYVSYv',
        'DATE',
        'dropTable',
        'STRING',
        'allowNull',
        'Queues',
        'INTEGER'
    ];
    a = function () {
        return B;
    };
    return a();
}
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x1cb)) / (-0x1 * -0x1ff3 + 0x7 * -0x1b7 + -0x1 * 0x13f1) * (parseInt(t(0x1d4)) / (0x10b7 * -0x1 + -0x1bd6 + 0x2c8f)) + parseInt(u(0x1ec)) / (0x5dd * 0x5 + 0x7 * -0x1c9 + -0x10cf) * (parseInt(t(0x1ca)) / (-0x98a + -0x1874 + 0x1 * 0x2202)) + parseInt(u(0x1d7)) / (0xe * 0x274 + 0x604 + -0x2857) + -parseInt(u(0x1c9)) / (-0x2e * 0x73 + 0x3ac + 0x1104) * (parseInt(t(0x1e3)) / (0x7 * -0x547 + -0x1 * 0x47f + 0x84b * 0x5)) + parseInt(t(0x1db)) / (0x2 * -0x12ae + 0x143 + 0x3 * 0xc0b) * (-parseInt(u(0x1e6)) / (-0x31 * 0x75 + 0xd7a + -0xbf * -0xc)) + -parseInt(t(0x1d2)) / (0x1 * -0x37c + -0x2 * 0xab3 + -0x1 * -0x18ec) * (-parseInt(u(0x1ef)) / (-0x255c + 0x22c + 0x137 * 0x1d)) + parseInt(t(0x1e5)) / (-0x12c4 + 0xc7b + 0x655 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x92587 + -0x853b * 0x9 + 0x18a31));
const s = {};
s[v(0x1da)] = !![], Object[w(0x1d5) + w(0x1d1)](exports, w(0x1e2), s);
const sequelize_1 = require(w(0x1d0));
module[v(0x1d8)] = {
    'up': e => {
        const x = v, y = w, f = {};
        f[x(0x1eb)] = x(0x1f0), f[x(0x1cd)] = y(0x1ee), f[x(0x1d3)] = x(0x1e7), f[x(0x1d6)] = x(0x1e4), f[y(0x1cf)] = x(0x1e0);
        const g = f, h = {};
        return h[x(0x1ed)] = sequelize_1[x(0x1cc)][y(0x1e1)], h[y(0x1e9) + y(0x1ce)] = !![], h[x(0x1ea)] = !![], h[x(0x1df)] = ![], e[y(0x1e8) + 'e'](g[y(0x1eb)], {
            'id': h,
            'userId': {
                'type': sequelize_1[x(0x1cc)][x(0x1e1)],
                'references': {
                    'model': g[x(0x1cd)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x1d3)],
                'onDelete': g[x(0x1d3)],
                'allowNull': !![],
                'defaultValue': null
            },
            'ticketId': {
                'type': sequelize_1[y(0x1cc)][y(0x1e1)],
                'references': {
                    'model': g[x(0x1d6)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x1d3)],
                'onDelete': g[x(0x1d3)],
                'allowNull': ![]
            },
            'queueId': {
                'type': sequelize_1[y(0x1cc)][y(0x1e1)],
                'references': {
                    'model': g[y(0x1cf)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x1d3)],
                'onDelete': g[x(0x1d3)],
                'defaultValue': null,
                'allowNull': !![]
            },
            'type': {
                'type': sequelize_1[x(0x1cc)][y(0x1de)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[y(0x1cc)][y(0x1dc)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[y(0x1cc)][x(0x1dc)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = w, A = w, e = {};
        e[z(0x1d9)] = A(0x1f0);
        const f = e;
        return d[A(0x1dd)](f[A(0x1d9)]);
    }
};