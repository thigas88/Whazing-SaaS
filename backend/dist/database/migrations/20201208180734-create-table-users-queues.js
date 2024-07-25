'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x112)) / (0x1fda + -0x1267 * 0x2 + 0x4f5) + parseInt(q(0x110)) / (-0x19d4 + 0x1 * -0x117e + -0x3b * -0xbc) + parseInt(q(0x11a)) / (-0x132a + 0xd5c + -0x1 * -0x5d1) + parseInt(p(0x11f)) / (-0x90 + -0x133c + 0x13d0) * (parseInt(p(0x10a)) / (-0x1e1a + 0x114 * -0x17 + 0x36eb)) + parseInt(q(0x119)) / (0x12ce + -0x2 * 0x22d + -0xe6e * 0x1) * (-parseInt(q(0x11d)) / (0x3 * -0x1a6 + 0xde9 + -0x8f0)) + parseInt(p(0x11c)) / (-0xf * -0x1a7 + 0x2de * 0x8 + -0x2fb1) + -parseInt(q(0x109)) / (-0x163b + -0x208d + 0x36d1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3d57 * 0x28 + 0x68bb2 + 0x7f787));
const o = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0xba2 + -0x16e1 + -0x1 * -0x238a);
        let h = e[f];
        return h;
    }, b(c, d);
}
o[r(0x128)] = !![], Object[r(0x116) + s(0x125)](exports, r(0x118), o);
function a() {
    const x = [
        'primaryKey',
        'DATE',
        'fMRWp',
        'INTEGER',
        'ATSvI',
        '207648qivdnK',
        'Queues',
        '276355bNseBn',
        'createTabl',
        'type',
        'exports',
        'defineProp',
        'allowNull',
        '__esModule',
        '12cgroAo',
        '1842321TJKGzJ',
        'UsersQueue',
        '1928240rTIcxO',
        '2007271JiJtEq',
        'CASCADE',
        '4sRgKpd',
        'HwppS',
        'Ziamr',
        'dropTable',
        'DataTypes',
        'sequelize',
        'erty',
        'ent',
        'Qkgyy',
        'value',
        'autoIncrem',
        'Users',
        '3762729ZGVqLm',
        '396240liqSSI'
    ];
    a = function () {
        return x;
    };
    return a();
}
const sequelize_1 = require(s(0x124));
module[s(0x115)] = {
    'up': e => {
        const t = r, u = r, f = {};
        f[t(0x121)] = t(0x11b) + 's', f[u(0x10f)] = t(0x111), f[u(0x120)] = t(0x11e), f[u(0x127)] = t(0x108);
        const g = f, h = {};
        return h[t(0x114)] = sequelize_1[u(0x123)][u(0x10e)], h[t(0x10b)] = !![], h[u(0x107) + u(0x126)] = !![], h[u(0x117)] = ![], e[u(0x113) + 'e'](g[u(0x121)], {
            'id': h,
            'queueId': {
                'type': sequelize_1[u(0x123)][u(0x10e)],
                'references': {
                    'model': g[u(0x10f)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x120)],
                'onDelete': g[t(0x120)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[t(0x123)][t(0x10e)],
                'references': {
                    'model': g[t(0x127)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x120)],
                'onDelete': g[u(0x120)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[t(0x123)][u(0x10c)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0x123)][t(0x10c)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = r, e = {};
        e[v(0x10d)] = v(0x11b) + 's';
        const f = e;
        return d[v(0x122)](f[w(0x10d)]);
    }
};