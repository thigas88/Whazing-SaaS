'use strict';
const t = b, u = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x14f2 + 0x3 * -0x56 + 0x1c * 0xda);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x205)) / (-0x4 * 0x745 + -0x11e5 + 0x2efa) + -parseInt(s(0x1f9)) / (-0x152 * -0x10 + 0x1 * -0xaa8 + -0xa76) + parseInt(r(0x1f2)) / (0xd4b + -0x2585 + 0x183d) + -parseInt(r(0x1e7)) / (-0x13e6 + -0x35 * 0x59 + 0x2657) * (-parseInt(s(0x1ff)) / (-0x1 * -0x259d + 0x2678 + -0x4c10)) + -parseInt(r(0x1ef)) / (0x1 * -0x23c6 + 0x26c6 + -0x2fa) + parseInt(s(0x1e4)) / (0x1 * 0x86 + -0x7 * 0xdf + 0x59a) * (-parseInt(s(0x20b)) / (0x1b71 + 0x2 * -0xeda + 0x24b)) + parseInt(s(0x1ed)) / (-0xc * -0x123 + -0x7 * -0x3f4 + 0x2947 * -0x1) * (parseInt(s(0x1fe)) / (0x17c6 + -0x245a + -0x2 * -0x64f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1bbe7 + -0x16e99 + 0x2f5c5));
const q = {};
q[t(0x20c)] = !![], Object[t(0x206) + u(0x209)](exports, u(0x200), q);
function a() {
    const z = [
        '7057809szJkRk',
        'primaryKey',
        '1548192UBkfbB',
        'UserMessag',
        'sequelize',
        '396027KALesv',
        'WLQGr',
        'SET\x20NULL',
        'DujRZ',
        'STRING',
        'type',
        'HyLDW',
        '835806Tmpypu',
        'CASCADE',
        'esLog',
        'autoIncrem',
        'Tickets',
        '10jTBDBW',
        '4595KMihfV',
        '__esModule',
        'OLSKY',
        'RESTRICT',
        'MSwaW',
        'allowNull',
        '108144DQqmTm',
        'defineProp',
        'exports',
        'fWuFv',
        'erty',
        'defaultVal',
        '3120976XGKFMj',
        'value',
        'INTEGER',
        '7ksDIyT',
        'DataTypes',
        'ent',
        '1112FctTAS',
        'DATE',
        'Rpfci',
        'createTabl',
        'Users',
        'dropTable'
    ];
    a = function () {
        return z;
    };
    return a();
}
const sequelize_1 = require(t(0x1f1));
module[u(0x207)] = {
    'up': f => {
        const v = u, w = u, g = {};
        g[v(0x208)] = w(0x1f0) + v(0x1fb), g[v(0x1e9)] = w(0x1eb), g[v(0x1f3)] = v(0x1fa), g[w(0x201)] = w(0x202), g[v(0x1f5)] = w(0x1fd), g[w(0x1f8)] = w(0x1f4);
        const h = g, i = {};
        i[w(0x1f7)] = sequelize_1[v(0x1e5)][v(0x20d)], i[v(0x1fc) + w(0x1e6)] = !![], i[v(0x1ee)] = !![], i[v(0x204)] = ![];
        const j = {};
        return j[w(0x1f7)] = sequelize_1[w(0x1e5)][w(0x1f6)], j[v(0x204)] = !![], j[v(0x20a) + 'ue'] = null, f[w(0x1ea) + 'e'](h[v(0x208)], {
            'id': i,
            'messageId': j,
            'userId': {
                'type': sequelize_1[v(0x1e5)][v(0x20d)],
                'references': {
                    'model': h[v(0x1e9)],
                    'key': 'id'
                },
                'onUpdate': h[v(0x1f3)],
                'onDelete': h[v(0x201)]
            },
            'ticketId': {
                'type': sequelize_1[w(0x1e5)][w(0x20d)],
                'references': {
                    'model': h[v(0x1f5)],
                    'key': 'id'
                },
                'onUpdate': h[v(0x1f3)],
                'onDelete': h[v(0x1f8)],
                'allowNull': !![]
            },
            'createdAt': {
                'type': sequelize_1[v(0x1e5)][v(0x1e8)](-0x15a6 + -0x2 * -0x35b + 0xef6),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0x1e5)][w(0x1e8)](-0x1a71 + 0x5 * -0x21d + 0x2508),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0x203)] = y(0x1f0) + x(0x1fb);
        const f = e;
        return d[x(0x1ec)](f[x(0x203)]);
    }
};