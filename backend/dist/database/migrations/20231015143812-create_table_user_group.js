'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x10c)) / (-0x5 * 0x7a4 + 0xb * 0x6 + 0x25f3) * (parseInt(q(0x10b)) / (-0x3 * -0x434 + -0x1 * 0x16a6 + -0x4 * -0x283)) + parseInt(p(0x11f)) / (-0x60a + -0x2618 + -0x3 * -0xeb7) * (-parseInt(p(0x11c)) / (0xda6 + -0x1fb1 + 0x120f)) + parseInt(p(0x11d)) / (-0x1b04 + 0x13 * -0x1ed + 0x2 * 0x1fd0) * (-parseInt(q(0x118)) / (-0x233 * -0xb + -0x1af5 + -0x2a * -0x11)) + parseInt(p(0x12b)) / (0x1aaa * 0x1 + 0x21ae + -0x1 * 0x3c51) * (-parseInt(p(0x124)) / (-0x2 * -0x840 + -0x3a * 0x7d + 0x29 * 0x4a)) + -parseInt(p(0x115)) / (-0x5 * 0x773 + 0xb3e + -0x25e * -0xb) * (-parseInt(p(0x117)) / (0x26cc + 0x2 * 0x10d9 + -0x4874)) + parseInt(p(0x113)) / (-0x1 * -0x2bd + -0x53b * -0x1 + -0x7ed) * (parseInt(q(0x130)) / (-0x51f + 0x1 * -0x26f8 + -0x2c23 * -0x1)) + parseInt(q(0x11e)) / (0x1f79 + -0x5cd + -0x199f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x10 * 0x9e3b + -0x3 * -0x73675 + 0x2c984));
const o = {};
function a() {
    const x = [
        '12194203aNHtCX',
        'VTfdg',
        'dropTable',
        'Groups',
        'autoIncrem',
        '225564zUuSJg',
        'exports',
        '193484COQnJO',
        '18oXIznx',
        'defineProp',
        'CASCADE',
        'ent',
        'Rgxqx',
        'DataTypes',
        'primaryKey',
        '880RwyGxz',
        'UsersQueue',
        '9bZGGDV',
        'INTEGER',
        '11531570UHWFIO',
        '96bXhqQL',
        'DATE',
        'sequelize',
        'createTabl',
        '1926148kykYWh',
        '236685jaVcGC',
        '6479018LeuaBb',
        '9CudXNi',
        '__esModule',
        'UsersGroup',
        'type',
        'DcmXm',
        '8qKcwks',
        'VkdmY',
        'erty',
        'Users',
        'allowNull',
        'hmHAX',
        'value'
    ];
    a = function () {
        return x;
    };
    return a();
}
o[r(0x12a)] = !![], Object[s(0x10d) + s(0x126)](exports, s(0x120), o);
const sequelize_1 = require(r(0x11a));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x18b5 + 0x36d + 0x908 * -0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[s(0x10a)] = {
    'up': e => {
        const t = s, u = s, f = {};
        f[t(0x12c)] = u(0x121) + 's', f[t(0x129)] = u(0x12e), f[t(0x123)] = t(0x10e), f[u(0x125)] = u(0x127);
        const g = f, h = {};
        return h[u(0x122)] = sequelize_1[u(0x111)][u(0x116)], h[u(0x112)] = !![], h[t(0x12f) + u(0x10f)] = !![], h[u(0x128)] = ![], e[t(0x11b) + 'e'](g[u(0x12c)], {
            'id': h,
            'groupId': {
                'type': sequelize_1[t(0x111)][t(0x116)],
                'references': {
                    'model': g[t(0x129)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x123)],
                'onDelete': g[t(0x123)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[u(0x111)][u(0x116)],
                'references': {
                    'model': g[u(0x125)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x123)],
                'onDelete': g[u(0x123)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[t(0x111)][u(0x119)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x111)][t(0x119)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = r, e = {};
        e[v(0x110)] = w(0x114) + 's';
        const f = e;
        return d[v(0x12d)](f[v(0x110)]);
    }
};