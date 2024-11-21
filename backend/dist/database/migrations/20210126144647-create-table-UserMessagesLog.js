'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0xc3)) / (0x631 * 0x1 + -0x3f * -0x16 + -0xb9a) * (-parseInt(s(0xba)) / (-0x3b * -0x47 + 0x1a5 * 0x4 + -0x16ef)) + parseInt(s(0xcd)) / (-0x21cc + -0x7e8 + 0x1 * 0x29b7) + parseInt(s(0xb9)) / (0x43f * -0x5 + 0x2059 + -0xb1a) + -parseInt(r(0xc6)) / (0x2273 + 0x207 * 0xd + 0x3cc9 * -0x1) * (-parseInt(r(0xb7)) / (0xe * -0x20b + -0x17cc + 0xa * 0x53e)) + -parseInt(r(0xbf)) / (0x3 * 0x85b + 0x4 * 0x581 + -0x2f0e) + -parseInt(r(0xc5)) / (-0x1829 + 0x1004 + 0x82d) * (-parseInt(r(0xb3)) / (-0x197e + 0x9e8 + 0xf9f)) + -parseInt(r(0xcf)) / (-0x2 * 0x7cd + -0x19 * -0xa3 + -0x47);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x41753 * -0x5 + -0x8d728 + 0x54bb));
const q = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4a * -0x3 + 0x1 * 0x500 + -0x52c);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const z = [
        'autoIncrem',
        'RESTRICT',
        '6hjZJoO',
        'VZbwf',
        '4127148YbXJmE',
        '494MGScVO',
        'hkcAJ',
        'jKWys',
        'NxsFC',
        'dLZwX',
        '9564520nwFexG',
        'DataTypes',
        'primaryKey',
        'zDHIR',
        '5118LkMmJq',
        'CASCADE',
        '1920272bGgpCy',
        '5264005bpqTuB',
        'allowNull',
        'UserMessag',
        'SET\x20NULL',
        'Tickets',
        '__esModule',
        'esLog',
        '3070329FVAmzR',
        'DATE',
        '1746950EZgcIn',
        'Users',
        'createTabl',
        'INTEGER',
        'defineProp',
        'dropTable',
        'defaultVal',
        'sequelize',
        'ent',
        'type',
        'erty',
        'STRING',
        'exports',
        'value',
        '18yRPasT',
        'waZtS'
    ];
    a = function () {
        return z;
    };
    return a();
}
q[t(0xb2)] = !![], Object[t(0xd3) + t(0xd9)](exports, t(0xcb), q);
const sequelize_1 = require(t(0xd6));
module[u(0xdb)] = {
    'up': f => {
        const v = t, w = t, g = {};
        g[v(0xbb)] = v(0xc8) + w(0xcc), g[w(0xbd)] = w(0xd0), g[w(0xbe)] = w(0xc4), g[v(0xbc)] = w(0xb6), g[v(0xc2)] = v(0xca), g[w(0xb8)] = w(0xc9);
        const h = g, i = {};
        i[w(0xd8)] = sequelize_1[w(0xc0)][v(0xd2)], i[w(0xb5) + v(0xd7)] = !![], i[w(0xc1)] = !![], i[v(0xc7)] = ![];
        const j = {};
        return j[w(0xd8)] = sequelize_1[v(0xc0)][v(0xda)], j[w(0xc7)] = !![], j[w(0xd5) + 'ue'] = null, f[v(0xd1) + 'e'](h[w(0xbb)], {
            'id': i,
            'messageId': j,
            'userId': {
                'type': sequelize_1[v(0xc0)][w(0xd2)],
                'references': {
                    'model': h[v(0xbd)],
                    'key': 'id'
                },
                'onUpdate': h[v(0xbe)],
                'onDelete': h[v(0xbc)]
            },
            'ticketId': {
                'type': sequelize_1[w(0xc0)][w(0xd2)],
                'references': {
                    'model': h[v(0xc2)],
                    'key': 'id'
                },
                'onUpdate': h[v(0xbe)],
                'onDelete': h[w(0xb8)],
                'allowNull': !![]
            },
            'createdAt': {
                'type': sequelize_1[v(0xc0)][w(0xce)](-0xb07 + -0x102a + 0x1b37),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0xc0)][w(0xce)](-0x94b + -0x82a * -0x3 + -0xf2d),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0xb4)] = x(0xc8) + x(0xcc);
        const f = e;
        return d[x(0xd4)](f[y(0xb4)]);
    }
};