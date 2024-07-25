'use strict';
const t = b, u = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x161b + -0x13 * 0x65 + -0xd9e);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0xfe)) / (-0xb70 + 0x1 * -0x2631 + 0x31a2) + -parseInt(s(0x112)) / (0x3 * 0x269 + 0x1d07 * 0x1 + -0x1220 * 0x2) * (parseInt(s(0x114)) / (0x1fe8 + -0x47 * -0x47 + -0x3396)) + parseInt(r(0x10d)) / (-0x34 * 0xb + 0x1cca + -0x1a8a) + -parseInt(s(0x125)) / (0x1 * -0x16e + -0xf98 + 0x1 * 0x110b) * (-parseInt(r(0x119)) / (-0x3f5 * 0x7 + -0x14b2 + 0x306b)) + -parseInt(s(0x113)) / (-0x1293 + -0x1715 + 0x1 * 0x29af) + -parseInt(r(0x108)) / (-0x2307 + -0x2 * 0x12b5 + -0x4879 * -0x1) + parseInt(r(0x100)) / (0x123a + 0x1 * -0x19d3 + 0x7a2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xc872 * -0x1 + -0x3db * -0x51 + 0xfb3));
function a() {
    const z = [
        'wqEtn',
        'queueId',
        'userIdDest',
        'qwcXp',
        'exports',
        'value',
        'erty',
        'Users',
        'khPQg',
        'INTEGER',
        '145EltBgY',
        'defaultVal',
        'TddCK',
        'defineProp',
        'allowNull',
        'hISzj',
        '31927wePxwF',
        'removeColu',
        '5088771XTUMig',
        'sequelize',
        'jyYxY',
        'Actions',
        'SVFeb',
        '__esModule',
        'Queues',
        'addColumn',
        '1322232bjMxOd',
        'gLexF',
        'DataTypes',
        'type',
        'all',
        '66200RXJJtQ',
        'queue',
        'restrict',
        'CASCADE',
        'PsriW',
        '18aywylo',
        '1221976feuwny',
        '82371JwXqLQ',
        'buydG',
        'PjEqC',
        'StepsReply',
        'ination',
        '22416zBhpPC',
        'FzglM'
    ];
    a = function () {
        return z;
    };
    return a();
}
const q = {};
q[t(0x120)] = !![], Object[u(0x128) + u(0x121)](exports, u(0x105), q);
const sequelize_1 = require(t(0x101));
module[t(0x11f)] = {
    'up': d => {
        const v = u, w = t, e = {};
        e[v(0x12a)] = v(0x117) + v(0x103), e[v(0x11e)] = w(0x10e), e[w(0x127)] = v(0x11c), e[w(0x11b)] = w(0x106), e[w(0x116)] = w(0x110), e[v(0x111)] = w(0x10f), e[v(0x11a)] = v(0x11d) + v(0x118), e[v(0x102)] = w(0x122);
        const f = e;
        return Promise[w(0x10c)]([
            d[v(0xff) + 'mn'](f[v(0x12a)], f[v(0x11e)]),
            d[v(0x107)](f[v(0x12a)], f[w(0x127)], {
                'type': sequelize_1[v(0x10a)][v(0x124)],
                'references': {
                    'model': f[v(0x11b)],
                    'key': 'id'
                },
                'onUpdate': f[w(0x116)],
                'onDelete': f[v(0x111)],
                'defaultValue': null,
                'allowNull': !![]
            }),
            d[w(0xff) + 'mn'](f[v(0x12a)], f[w(0x11a)]),
            d[v(0x107)](f[v(0x12a)], f[v(0x11a)], {
                'type': sequelize_1[w(0x10a)][v(0x124)],
                'references': {
                    'model': f[v(0x102)],
                    'key': 'id'
                },
                'onUpdate': f[w(0x116)],
                'onDelete': f[v(0x111)],
                'defaultValue': null,
                'allowNull': !![]
            })
        ]);
    },
    'down': f => {
        const x = t, y = t, g = {};
        g[x(0x115)] = x(0x117) + x(0x103), g[y(0x109)] = x(0x11c), g[y(0x104)] = y(0x10e), g[y(0x123)] = y(0x11d) + x(0x118);
        const h = g, i = {};
        i[y(0x10b)] = sequelize_1[x(0x10a)][y(0x124)], i[x(0x126) + 'ue'] = null, i[y(0x129)] = !![];
        const j = {};
        return j[x(0x10b)] = sequelize_1[y(0x10a)][y(0x124)], j[y(0x126) + 'ue'] = null, j[x(0x129)] = !![], Promise[y(0x10c)]([
            f[x(0xff) + 'mn'](h[x(0x115)], h[y(0x109)]),
            f[y(0x107)](h[x(0x115)], h[x(0x104)], i),
            f[x(0xff) + 'mn'](h[y(0x115)], h[y(0x123)]),
            f[x(0x107)](h[y(0x115)], h[y(0x123)], j)
        ]);
    }
};