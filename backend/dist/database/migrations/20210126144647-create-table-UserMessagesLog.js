'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x15e)) / (-0x6 * -0x358 + -0x449 * 0x7 + 0x9f0) * (-parseInt(r(0x14f)) / (0x1 * -0xaa9 + 0x20c9 + -0x161e)) + -parseInt(r(0x14b)) / (-0x2231 + 0x1fda * -0x1 + 0x420e) + -parseInt(s(0x152)) / (-0x110c + 0x1d30 + -0xc20) * (parseInt(s(0x168)) / (0x22 * 0x3d + -0x11 * 0x9b + -0x1 * -0x236)) + -parseInt(s(0x149)) / (0x3 * -0xb0f + -0x168b * -0x1 + -0x1f * -0x58) + -parseInt(r(0x161)) / (-0x2 * 0x68e + -0x67b + 0x139e) + parseInt(s(0x143)) / (0x73 * -0x43 + 0x2365 + -0x544) + -parseInt(r(0x155)) / (-0x11 * 0x13d + -0x3 * 0x999 + 0x31e1) * (-parseInt(s(0x15d)) / (-0x16 * 0x49 + 0x18f5 + -0x12a5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa0ba9 + -0x2d * 0x15be + 0x188 * 0xef));
const q = {};
q[t(0x154)] = !![], Object[t(0x144) + u(0x162)](exports, t(0x166), q);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xbc1 + 0x54b + 0xfcb * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const z = [
        'DataTypes',
        'UtRcc',
        'DATE',
        '4716432OIXoxb',
        'SET\x20NULL',
        '85902UAyFEP',
        'createTabl',
        'RESTRICT',
        'exports',
        '9652Zeytup',
        'JMjKp',
        'ZGyDi',
        '83068wYRbst',
        'imXiQ',
        'value',
        '927kFwNyo',
        'type',
        'CASCADE',
        'autoIncrem',
        'ZzHFB',
        'Users',
        'STRING',
        'primaryKey',
        '202610YtTyaU',
        '199nStXrE',
        'UserMessag',
        'dropTable',
        '3275293TxxLVp',
        'erty',
        'allowNull',
        'qgJsk',
        'sequelize',
        '__esModule',
        'INTEGER',
        '25bEbhnQ',
        'ent',
        'Tickets',
        'HKBQP',
        'esLog',
        '6091952lCdgtj',
        'defineProp',
        'defaultVal'
    ];
    a = function () {
        return z;
    };
    return a();
}
const sequelize_1 = require(u(0x165));
module[t(0x14e)] = {
    'up': f => {
        const v = u, w = t, g = {};
        g[v(0x141)] = w(0x15f) + v(0x142), g[w(0x164)] = v(0x15a), g[v(0x150)] = w(0x157), g[w(0x159)] = v(0x14d), g[v(0x151)] = w(0x16a), g[v(0x147)] = w(0x14a);
        const h = g, i = {};
        i[v(0x156)] = sequelize_1[v(0x146)][w(0x167)], i[w(0x158) + w(0x169)] = !![], i[v(0x15c)] = !![], i[v(0x163)] = ![];
        const j = {};
        return j[v(0x156)] = sequelize_1[v(0x146)][w(0x15b)], j[v(0x163)] = !![], j[w(0x145) + 'ue'] = null, f[v(0x14c) + 'e'](h[w(0x141)], {
            'id': i,
            'messageId': j,
            'userId': {
                'type': sequelize_1[w(0x146)][w(0x167)],
                'references': {
                    'model': h[v(0x164)],
                    'key': 'id'
                },
                'onUpdate': h[w(0x150)],
                'onDelete': h[v(0x159)]
            },
            'ticketId': {
                'type': sequelize_1[v(0x146)][w(0x167)],
                'references': {
                    'model': h[w(0x151)],
                    'key': 'id'
                },
                'onUpdate': h[v(0x150)],
                'onDelete': h[w(0x147)],
                'allowNull': !![]
            },
            'createdAt': {
                'type': sequelize_1[v(0x146)][v(0x148)](-0x1 * 0x2681 + 0x1145 * -0x1 + -0x2 * -0x1be6),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[w(0x146)][v(0x148)](0x980 + 0x34d + -0xcc7),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = t, y = u, e = {};
        e[x(0x153)] = x(0x15f) + x(0x142);
        const f = e;
        return d[y(0x160)](f[x(0x153)]);
    }
};