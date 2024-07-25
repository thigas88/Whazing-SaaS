'use strict';
const v = b, w = b;
function a() {
    const B = [
        'primaryKey',
        'erty',
        '270052wsmTlH',
        'DataTypes',
        '9295895rdhjxB',
        'value',
        'HcXfW',
        'Users',
        'exports',
        'DATE',
        'Tickets',
        'dropTable',
        'allowNull',
        '3938445JqaQcq',
        'fagGF',
        '78UBaFGV',
        'CASCADE',
        '1045565XLCHrR',
        'uvfam',
        'sequelize',
        'defineProp',
        '16oOmKHG',
        '808219qyvnBv',
        '3493620WDUOUd',
        '9415464DCKPel',
        '__esModule',
        'wKJwW',
        'LogTickets',
        'createTabl',
        'autoIncrem',
        '132wWZDNN',
        'STRING',
        '4NEBdjX',
        'type',
        'ent',
        'HsDQS',
        'KGzRg',
        'Queues',
        'INTEGER'
    ];
    a = function () {
        return B;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3 * 0x907 + -0x134e + 0x17cc * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x153)) / (0x2 * 0x37c + 0x543 + 0xa * -0x139) * (parseInt(t(0x136)) / (0xa2a + 0x9d * 0x1 + -0x397 * 0x3)) + parseInt(t(0x14c)) / (-0x14f3 + -0x1a * 0x8 + 0x3 * 0x742) * (parseInt(t(0x13f)) / (0xbf6 + 0x21ac + -0x2d9e)) + -parseInt(t(0x14e)) / (0x7 * -0x9c + -0x17d3 + 0xe0e * 0x2) + parseInt(u(0x155)) / (0x3d7 * -0x1 + 0x1e6 + -0x1 * -0x1f7) + parseInt(u(0x141)) / (-0x2662 + -0x863 + 0x2ecc * 0x1) + -parseInt(u(0x152)) / (-0x6dd + -0x1811 + 0x2 * 0xf7b) * (parseInt(u(0x14a)) / (-0x1 * -0xeb9 + -0xd0b + -0x1a5 * 0x1)) + -parseInt(t(0x154)) / (-0x1a5 * -0x1 + -0x5 * -0x5bc + -0x1e47) * (parseInt(u(0x15b)) / (0x116f + 0x1 * 0x199 + 0x12fd * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1431db + 0x75ed1 + -0x1c656 * 0x7));
const s = {};
s[v(0x142)] = !![], Object[w(0x151) + w(0x13e)](exports, v(0x156), s);
const sequelize_1 = require(w(0x150));
module[v(0x145)] = {
    'up': e => {
        const x = v, y = w, f = {};
        f[x(0x143)] = x(0x158), f[y(0x14b)] = y(0x144), f[x(0x14f)] = x(0x14d), f[y(0x139)] = y(0x147), f[x(0x157)] = y(0x13b);
        const g = f, h = {};
        return h[y(0x137)] = sequelize_1[x(0x140)][y(0x13c)], h[y(0x15a) + y(0x138)] = !![], h[x(0x13d)] = !![], h[y(0x149)] = ![], e[x(0x159) + 'e'](g[y(0x143)], {
            'id': h,
            'userId': {
                'type': sequelize_1[y(0x140)][x(0x13c)],
                'references': {
                    'model': g[y(0x14b)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x14f)],
                'onDelete': g[x(0x14f)],
                'allowNull': !![],
                'defaultValue': null
            },
            'ticketId': {
                'type': sequelize_1[y(0x140)][x(0x13c)],
                'references': {
                    'model': g[x(0x139)],
                    'key': 'id'
                },
                'onUpdate': g[x(0x14f)],
                'onDelete': g[y(0x14f)],
                'allowNull': ![]
            },
            'queueId': {
                'type': sequelize_1[x(0x140)][y(0x13c)],
                'references': {
                    'model': g[y(0x157)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x14f)],
                'onDelete': g[y(0x14f)],
                'defaultValue': null,
                'allowNull': !![]
            },
            'type': {
                'type': sequelize_1[x(0x140)][x(0x135)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[y(0x140)][y(0x146)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[x(0x140)][x(0x146)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = v, A = w, e = {};
        e[z(0x13a)] = z(0x158);
        const f = e;
        return d[A(0x148)](f[z(0x13a)]);
    }
};