'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x25b + -0x50d + -0x1c6 * -0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x183)) / (-0x1877 * -0x1 + -0x10bb + -0x7bb) + parseInt(s(0x181)) / (-0x3 * -0x296 + 0x1 * -0xd5f + -0x1 * -0x59f) * (parseInt(r(0x18c)) / (-0x11 * -0x22f + -0x2326 + -0x1 * 0x1f6)) + -parseInt(s(0x17c)) / (-0x1 * 0x1bd + 0x105e + -0x2b * 0x57) * (parseInt(s(0x193)) / (-0xf01 * -0x1 + 0x22c * -0x10 + 0x13c4)) + -parseInt(s(0x1a3)) / (-0x1 * 0x188 + -0x2425 + 0x25b3) + -parseInt(s(0x18e)) / (0x182 * 0x2 + -0xa90 + 0x115 * 0x7) * (parseInt(r(0x186)) / (0xd89 + 0xb3d + -0x18be)) + parseInt(s(0x190)) / (0x84a + 0x10a7 + -0x1 * 0x18e8) * (parseInt(s(0x192)) / (0x73 * 0x22 + 0x7 * -0x165 + -0x579)) + parseInt(r(0x188)) / (-0x243 * 0x6 + 0x1d19 + -0xf7c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5bc2a + 0x1 * -0x16c3d + 0x5c * 0x23bd));
function a() {
    const z = [
        'value',
        '285553mUggDk',
        'UoloE',
        'cAaLk',
        '784uPmNBs',
        'type',
        '11594363GOxxZP',
        'all',
        'DataTypes',
        'sSqlZ',
        '411DyUfZd',
        'allowNull',
        '1967YIlSsS',
        'HPtCM',
        '370611FYcssF',
        'Actions',
        '110QbEPqd',
        '3641755yjYsie',
        'addColumn',
        'erty',
        'FizRO',
        'restrict',
        'IHKUb',
        'exports',
        'Users',
        'userIdDest',
        'defineProp',
        'mgKJE',
        '__esModule',
        'GIdUh',
        'EdxcP',
        'defaultVal',
        'sequelize',
        '2501712pDOzEr',
        'RWkNZ',
        'pfIkB',
        'yGPOk',
        'Queues',
        'CASCADE',
        'queueId',
        'INTEGER',
        '4dBTLzg',
        'StepsReply',
        'removeColu',
        'ination',
        'queue',
        '4730qzDEBZ'
    ];
    a = function () {
        return z;
    };
    return a();
}
const q = {};
q[t(0x182)] = !![], Object[u(0x19c) + t(0x195)](exports, u(0x19e), q);
const sequelize_1 = require(u(0x1a2));
module[u(0x199)] = {
    'up': d => {
        const v = u, w = u, e = {};
        e[v(0x1a0)] = v(0x17d) + w(0x191), e[v(0x18f)] = w(0x180), e[w(0x19d)] = w(0x17a), e[v(0x198)] = v(0x178), e[w(0x177)] = w(0x179), e[w(0x18b)] = w(0x197), e[w(0x19f)] = v(0x19b) + w(0x17f), e[v(0x1a4)] = v(0x19a);
        const f = e;
        return Promise[v(0x189)]([
            d[w(0x17e) + 'mn'](f[v(0x1a0)], f[v(0x18f)]),
            d[v(0x194)](f[v(0x1a0)], f[v(0x19d)], {
                'type': sequelize_1[w(0x18a)][w(0x17b)],
                'references': {
                    'model': f[v(0x198)],
                    'key': 'id'
                },
                'onUpdate': f[w(0x177)],
                'onDelete': f[v(0x18b)],
                'defaultValue': null,
                'allowNull': !![]
            }),
            d[w(0x17e) + 'mn'](f[v(0x1a0)], f[w(0x19f)]),
            d[w(0x194)](f[v(0x1a0)], f[v(0x19f)], {
                'type': sequelize_1[v(0x18a)][w(0x17b)],
                'references': {
                    'model': f[w(0x1a4)],
                    'key': 'id'
                },
                'onUpdate': f[w(0x177)],
                'onDelete': f[v(0x18b)],
                'defaultValue': null,
                'allowNull': !![]
            })
        ]);
    },
    'down': f => {
        const x = u, y = t, g = {};
        g[x(0x176)] = x(0x17d) + y(0x191), g[y(0x184)] = x(0x17a), g[y(0x196)] = y(0x180), g[y(0x185)] = y(0x19b) + x(0x17f);
        const h = g, i = {};
        i[x(0x187)] = sequelize_1[x(0x18a)][x(0x17b)], i[y(0x1a1) + 'ue'] = null, i[y(0x18d)] = !![];
        const j = {};
        return j[x(0x187)] = sequelize_1[x(0x18a)][x(0x17b)], j[x(0x1a1) + 'ue'] = null, j[y(0x18d)] = !![], Promise[x(0x189)]([
            f[x(0x17e) + 'mn'](h[x(0x176)], h[x(0x184)]),
            f[x(0x194)](h[x(0x176)], h[y(0x196)], i),
            f[x(0x17e) + 'mn'](h[y(0x176)], h[x(0x185)]),
            f[x(0x194)](h[y(0x176)], h[y(0x185)], j)
        ]);
    }
};