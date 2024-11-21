'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x10a)) / (0x16 * 0x96 + 0x433 + -0x1116) + parseInt(p(0x107)) / (0x27c + 0x3 * 0xa36 + -0x211c) + -parseInt(p(0x103)) / (-0x203 * -0x13 + -0x19e * -0x2 + -0x14b9 * 0x2) + parseInt(q(0x10b)) / (0x812 * -0x1 + 0x1b81 + -0x136b) * (-parseInt(p(0x11e)) / (-0x1f3 * -0x12 + -0x9aa * -0x3 + 0x2c9 * -0x17)) + parseInt(p(0x112)) / (0x23a * 0x1 + 0xdc0 + -0x1 * 0xff4) * (-parseInt(q(0x120)) / (-0x41f + -0x15db + 0x1a01)) + parseInt(q(0x105)) / (0x5 * 0x4a7 + -0x13 * 0x9d + 0x39 * -0x34) + parseInt(p(0x108)) / (0x2 * 0x125 + -0x6b * -0x2e + -0x1 * 0x157b) * (-parseInt(p(0x110)) / (0x2 * 0xcb9 + 0x3 * -0x5bc + -0xaf * 0xc));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x14b4 + -0x7 * -0x22ff4 + 0x1f1c * -0x2f));
const o = {};
o[r(0x114)] = !![], Object[s(0x123) + r(0x126)](exports, s(0x117), o);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x258d + 0x1aca * 0x1 + -0x486 * 0xe);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(s(0x104));
module[s(0x11b)] = {
    'up': e => {
        const t = s, u = s, f = {};
        f[t(0x11a)] = t(0x11f) + 's', f[u(0x10f)] = u(0x10d), f[t(0x11d)] = u(0x111), f[t(0x122)] = u(0x124);
        const g = f, h = {};
        return h[t(0x115)] = sequelize_1[t(0x10e)][u(0x11c)], h[t(0x10c)] = !![], h[u(0x116) + u(0x121)] = !![], h[u(0x109)] = ![], e[t(0x119) + 'e'](g[u(0x11a)], {
            'id': h,
            'groupId': {
                'type': sequelize_1[u(0x10e)][t(0x11c)],
                'references': {
                    'model': g[t(0x10f)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x11d)],
                'onDelete': g[u(0x11d)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[u(0x10e)][u(0x11c)],
                'references': {
                    'model': g[t(0x122)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x11d)],
                'onDelete': g[t(0x11d)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[t(0x10e)][u(0x125)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0x10e)][u(0x125)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = r, e = {};
        e[v(0x118)] = v(0x106) + 's';
        const f = e;
        return d[w(0x113)](f[v(0x118)]);
    }
};
function a() {
    const x = [
        'defineProp',
        'Users',
        'DATE',
        'erty',
        '3467496xqsbvZ',
        'sequelize',
        '7094672zUrPqs',
        'UsersQueue',
        '1245370fSSXte',
        '27LXXcJc',
        'allowNull',
        '880715AOTbyE',
        '312apPHLZ',
        'primaryKey',
        'Groups',
        'DataTypes',
        'ESAmI',
        '977810piRdLL',
        'CASCADE',
        '6olQyVC',
        'dropTable',
        'value',
        'type',
        'autoIncrem',
        '__esModule',
        'odCqr',
        'createTabl',
        'fwLDm',
        'exports',
        'INTEGER',
        'zixoV',
        '9865WQJDUi',
        'UsersGroup',
        '1069159LEyjXR',
        'ent',
        'xRQbY'
    ];
    a = function () {
        return x;
    };
    return a();
}