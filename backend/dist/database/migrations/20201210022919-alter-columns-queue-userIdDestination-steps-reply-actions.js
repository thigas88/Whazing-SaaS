'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xd9)) / (0x1e95 + -0x2257 + 0x6b * 0x9) + -parseInt(r(0xd5)) / (-0xe8 * -0x3 + 0x1164 + -0x141a) + -parseInt(r(0xfd)) / (0x1c95 + 0x18a5 + -0x3537) + -parseInt(s(0xf7)) / (0x1 * -0x1de4 + -0x12b6 + -0x1 * -0x309e) + parseInt(r(0xdf)) / (0x8eb * 0x1 + 0x6da + 0x540 * -0x3) + parseInt(r(0xee)) / (0xb22 + -0x7b5 + -0x367) * (-parseInt(s(0xe9)) / (-0x1991 + -0x19f * 0xf + 0x1 * 0x31e9)) + -parseInt(r(0xf2)) / (-0x1 * 0x233 + -0x15 * 0x1d8 + -0x3b9 * -0xb) * (-parseInt(r(0xfc)) / (0x3 * 0x1bd + -0x1 * -0x251b + -0x19 * 0x1b1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x31 * -0x8b5 + -0x29064 + 0x29662));
const q = {};
q[t(0xe6)] = !![], Object[u(0xde) + u(0xec)](exports, t(0x101), q);
function a() {
    const z = [
        '138508uwIgms',
        'sequelize',
        'BZaLn',
        'queueId',
        'all',
        'defineProp',
        '466430tzFzvH',
        'defaultVal',
        'cgeFj',
        'Actions',
        'DataTypes',
        'PEfoU',
        'vTcbM',
        'value',
        'lRsiw',
        'osMFw',
        '28189ICnbuU',
        'addColumn',
        'removeColu',
        'erty',
        'IhfYi',
        '114TtdCyK',
        'NGxhs',
        'TvllJ',
        'exports',
        '3788488lwYowb',
        'queue',
        'rkCGZ',
        'ination',
        'allowNull',
        '327664VMMBod',
        'userIdDest',
        'type',
        'StepsReply',
        'INTEGER',
        '9GbvRNp',
        '273582WnwBFo',
        'PgHub',
        'restrict',
        'CASCADE',
        '__esModule',
        '135922mwvrnX',
        'Queues',
        'Users',
        'wSeDU'
    ];
    a = function () {
        return z;
    };
    return a();
}
const sequelize_1 = require(u(0xda));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4c9 + -0x8f0 + 0x4fc);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[u(0xf1)] = {
    'up': d => {
        const v = u, w = u, e = {};
        e[v(0xf0)] = w(0xfa) + v(0xe2), e[w(0xe7)] = w(0xf3), e[v(0xf4)] = w(0xdc), e[w(0xe4)] = v(0xd6), e[w(0xef)] = w(0x100), e[v(0xe8)] = v(0xff), e[v(0xfe)] = v(0xf8) + v(0xf5), e[w(0xe5)] = w(0xd7);
        const f = e;
        return Promise[w(0xdd)]([
            d[v(0xeb) + 'mn'](f[w(0xf0)], f[w(0xe7)]),
            d[v(0xea)](f[w(0xf0)], f[v(0xf4)], {
                'type': sequelize_1[v(0xe3)][v(0xfb)],
                'references': {
                    'model': f[w(0xe4)],
                    'key': 'id'
                },
                'onUpdate': f[w(0xef)],
                'onDelete': f[v(0xe8)],
                'defaultValue': null,
                'allowNull': !![]
            }),
            d[w(0xeb) + 'mn'](f[v(0xf0)], f[v(0xfe)]),
            d[v(0xea)](f[v(0xf0)], f[w(0xfe)], {
                'type': sequelize_1[w(0xe3)][v(0xfb)],
                'references': {
                    'model': f[v(0xe5)],
                    'key': 'id'
                },
                'onUpdate': f[w(0xef)],
                'onDelete': f[v(0xe8)],
                'defaultValue': null,
                'allowNull': !![]
            })
        ]);
    },
    'down': f => {
        const x = u, y = u, g = {};
        g[x(0xd8)] = x(0xfa) + y(0xe2), g[y(0xe1)] = x(0xdc), g[y(0xed)] = x(0xf3), g[x(0xdb)] = x(0xf8) + x(0xf5);
        const h = g, i = {};
        i[x(0xf9)] = sequelize_1[y(0xe3)][y(0xfb)], i[x(0xe0) + 'ue'] = null, i[y(0xf6)] = !![];
        const j = {};
        return j[y(0xf9)] = sequelize_1[x(0xe3)][x(0xfb)], j[y(0xe0) + 'ue'] = null, j[y(0xf6)] = !![], Promise[x(0xdd)]([
            f[x(0xeb) + 'mn'](h[x(0xd8)], h[x(0xe1)]),
            f[y(0xea)](h[y(0xd8)], h[x(0xed)], i),
            f[y(0xeb) + 'mn'](h[x(0xd8)], h[y(0xdb)]),
            f[x(0xea)](h[x(0xd8)], h[x(0xdb)], j)
        ]);
    }
};