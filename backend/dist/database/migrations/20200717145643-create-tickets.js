'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x1de)) / (-0x1 * -0x1265 + 0x21ea + 0x1a27 * -0x2) + -parseInt(t(0x1ce)) / (-0x1d * -0xf4 + 0x7 * -0x1eb + -0xe35 * 0x1) * (parseInt(t(0x1e9)) / (0x463 * 0x4 + 0xc59 + -0x1de2)) + parseInt(u(0x1c9)) / (-0x1 * -0x4cb + -0x89 * 0x23 + 0xdf4) * (parseInt(t(0x1d0)) / (0x1e57 * -0x1 + -0x37 * 0x19 + 0x23bb)) + -parseInt(u(0x1c2)) / (0x28 * 0x53 + -0x20ab + 0xb * 0x1cb) * (-parseInt(u(0x1e7)) / (-0x1 * -0x21d1 + -0x1cf0 + 0x6 * -0xcf)) + parseInt(u(0x1cb)) / (0x14b8 + -0x2386 + 0xed6) + parseInt(t(0x1d4)) / (0xe16 + -0x5 * -0x3e + -0xf43) * (parseInt(u(0x1cf)) / (0x1 * 0x11a2 + 0xec5 + -0x679 * 0x5)) + -parseInt(u(0x1c6)) / (-0x1ff * 0x7 + -0xda + 0x15a * 0xb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd94f8 + 0x1 * -0xf1631 + -0x233 * -0x62f));
const s = {};
function a() {
    const B = [
        'dwBHb',
        'CASCADE',
        'hLdjo',
        'SET\x20NULL',
        'ersDj',
        'allowNull',
        'pending',
        '5634433QPOfqf',
        'Contacts',
        '3063759ApXbiE',
        'primaryKey',
        '6rtVMkT',
        'autoIncrem',
        'gCZAI',
        'YitcX',
        '12911118qbarIN',
        'sequelize',
        'Users',
        '5396WxmIjg',
        'oWWUI',
        '6837624XjzjRp',
        'sWOTA',
        'ent',
        '2UMbUNg',
        '40zRBVBq',
        '4415eYEUuU',
        'type',
        'INTEGER',
        'Tickets',
        '1400445yCJMoz',
        'value',
        'createTabl',
        'DATE',
        'dropTable',
        '__esModule',
        'DataTypes',
        'defineProp',
        'STRING',
        'erty',
        '485606mzICTf',
        'exports'
    ];
    a = function () {
        return B;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x223f + 0x2556 + -0x4 * 0x1175);
        let h = e[f];
        return h;
    }, b(c, d);
}
s[v(0x1d5)] = !![], Object[v(0x1db) + v(0x1dd)](exports, w(0x1d9), s);
const sequelize_1 = require(w(0x1c7));
module[w(0x1df)] = {
    'up': e => {
        const x = v, y = w, f = {};
        f[x(0x1c5)] = x(0x1d3), f[y(0x1e4)] = y(0x1e6), f[y(0x1cc)] = y(0x1e8), f[y(0x1ca)] = y(0x1e1), f[y(0x1c4)] = y(0x1c8), f[y(0x1e0)] = y(0x1e3);
        const g = f, h = {};
        return h[y(0x1d1)] = sequelize_1[x(0x1da)][x(0x1d2)], h[x(0x1c3) + y(0x1cd)] = !![], h[x(0x1c1)] = !![], h[x(0x1e5)] = ![], e[x(0x1d6) + 'e'](g[x(0x1c5)], {
            'id': h,
            'status': {
                'type': sequelize_1[y(0x1da)][x(0x1dc)],
                'defaultValue': g[y(0x1e4)],
                'allowNull': ![]
            },
            'lastMessage': { 'type': sequelize_1[x(0x1da)][y(0x1dc)] },
            'contactId': {
                'type': sequelize_1[y(0x1da)][y(0x1d2)],
                'references': {
                    'model': g[y(0x1cc)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x1ca)],
                'onDelete': g[x(0x1ca)]
            },
            'userId': {
                'type': sequelize_1[y(0x1da)][y(0x1d2)],
                'references': {
                    'model': g[x(0x1c4)],
                    'key': 'id'
                },
                'onUpdate': g[x(0x1ca)],
                'onDelete': g[x(0x1e0)]
            },
            'createdAt': {
                'type': sequelize_1[y(0x1da)][x(0x1d7)](-0x26cf + -0x2 * -0x377 + 0x1fe7),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[y(0x1da)][y(0x1d7)](-0x1 * -0x1bc3 + 0xdf5 + -0x29b2),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = v, A = w, e = {};
        e[z(0x1e2)] = z(0x1d3);
        const f = e;
        return d[A(0x1d8)](f[A(0x1e2)]);
    }
};