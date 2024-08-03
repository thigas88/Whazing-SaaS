'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x1ae)) / (-0x1173 + -0x1aab + 0x2c1f) + parseInt(t(0x1c5)) / (0x1af * 0x2 + -0x119e + 0xe42) + -parseInt(u(0x1cc)) / (-0x1 * -0x2327 + 0x52b + -0x284f) + -parseInt(u(0x1a9)) / (-0x4d1 + 0x3cf * -0x3 + 0x821 * 0x2) * (-parseInt(u(0x1ac)) / (0x19db + 0x69d * 0x2 + -0x2710)) + parseInt(u(0x1bb)) / (0x1 * 0x1f73 + 0x1a65 + -0x39d2) * (-parseInt(u(0x1aa)) / (-0x5 * 0x520 + 0x239f * -0x1 + -0x1 * -0x3d46)) + parseInt(u(0x1c3)) / (-0x22ab + 0x2428 + 0x1 * -0x175) * (-parseInt(u(0x1b4)) / (0x8b * -0x41 + -0x18fb + 0x3c4f)) + parseInt(t(0x1b1)) / (-0x4 * -0x56d + -0x2511 + 0xf67 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x134c41 + 0x7e475 + -0x4aa * 0x2b6));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1b6e + -0x1515 + -0x4b1 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const s = {};
function a() {
    const B = [
        'Tickets',
        'autoIncrem',
        'SET\x20NULL',
        'allowNull',
        'exports',
        '78NryOwJ',
        'OKIUs',
        'createTabl',
        '__esModule',
        'value',
        'primaryKey',
        'type',
        'wJtXw',
        '2320768RQQmjC',
        'erty',
        '2183354AuFxAH',
        'DATE',
        'pending',
        'DataTypes',
        'zKIQY',
        'Users',
        'SJqnw',
        '959175AUxjpr',
        'INTEGER',
        'STRING',
        'mgtAx',
        'CASCADE',
        '32SWnQBA',
        '623973HfbzhS',
        'sequelize',
        '1179010IxPcdC',
        'defineProp',
        '1033493zpVBAM',
        'fSEBK',
        'dropTable',
        '7773340bxNUWz',
        'ent',
        'Contacts',
        '9TfXJSy',
        'LMgAh'
    ];
    a = function () {
        return B;
    };
    return a();
}
s[v(0x1bf)] = !![], Object[w(0x1ad) + v(0x1c4)](exports, w(0x1be), s);
const sequelize_1 = require(w(0x1ab));
module[w(0x1ba)] = {
    'up': e => {
        const x = w, y = v, f = {};
        f[x(0x1cf)] = x(0x1b6), f[y(0x1b5)] = x(0x1c7), f[x(0x1cb)] = y(0x1b3), f[y(0x1bc)] = y(0x1a8), f[y(0x1c9)] = x(0x1ca), f[y(0x1c2)] = x(0x1b8);
        const g = f, h = {};
        return h[y(0x1c1)] = sequelize_1[y(0x1c8)][y(0x1cd)], h[y(0x1b7) + x(0x1b2)] = !![], h[y(0x1c0)] = !![], h[y(0x1b9)] = ![], e[y(0x1bd) + 'e'](g[y(0x1cf)], {
            'id': h,
            'status': {
                'type': sequelize_1[x(0x1c8)][y(0x1ce)],
                'defaultValue': g[y(0x1b5)],
                'allowNull': ![]
            },
            'lastMessage': { 'type': sequelize_1[x(0x1c8)][y(0x1ce)] },
            'contactId': {
                'type': sequelize_1[x(0x1c8)][x(0x1cd)],
                'references': {
                    'model': g[y(0x1cb)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x1bc)],
                'onDelete': g[y(0x1bc)]
            },
            'userId': {
                'type': sequelize_1[x(0x1c8)][y(0x1cd)],
                'references': {
                    'model': g[x(0x1c9)],
                    'key': 'id'
                },
                'onUpdate': g[x(0x1bc)],
                'onDelete': g[x(0x1c2)]
            },
            'createdAt': {
                'type': sequelize_1[x(0x1c8)][y(0x1c6)](-0x617 * 0x1 + 0x6b * -0x39 + 0x1df0),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[y(0x1c8)][x(0x1c6)](-0x335 * 0x9 + -0x179b * 0x1 + -0x2 * -0x1a3f),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = w, A = w, e = {};
        e[z(0x1af)] = A(0x1b6);
        const f = e;
        return d[z(0x1b0)](f[z(0x1af)]);
    }
};