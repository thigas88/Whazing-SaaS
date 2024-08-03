'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x144)) / (0x3c7 * -0x2 + -0x2631 + 0x40 * 0xb7) + -parseInt(s(0x142)) / (0x25 * 0xae + -0xec0 + -0xa64) * (parseInt(s(0x13b)) / (-0xa * 0x174 + 0x14c6 + 0x37 * -0x1d)) + parseInt(r(0x136)) / (-0xb7 * -0x1d + -0x1008 + -0x4af * 0x1) * (-parseInt(s(0x131)) / (-0xa3 * 0x33 + 0xb71 + 0x150d)) + parseInt(s(0x140)) / (-0x2b * 0xd9 + 0x1df0 * -0x1 + 0x4269) * (parseInt(s(0x125)) / (0x1c6 * 0xa + 0x154c + 0x2701 * -0x1)) + parseInt(r(0x12d)) / (-0x2bc + -0x6eb + 0x43 * 0x25) + -parseInt(r(0x138)) / (-0x166 * 0x19 + 0xb22 + 0x17dd) * (parseInt(r(0x12a)) / (0x2 * -0xbb2 + 0x1 * -0x18dd + 0x304b)) + -parseInt(s(0x146)) / (0xaf5 + -0x257 + -0x1 * 0x893) * (-parseInt(r(0x14b)) / (0x12be + -0xb * 0x179 + -0x27f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1d * -0x31f3 + 0x8 * 0x149a7 + 0x4e * -0x1170));
const q = {};
q[t(0x13a)] = !![], Object[u(0x13f) + u(0x12c)](exports, t(0x129), q);
const sequelize_1 = require(t(0x12e));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1b06 + -0x7a5 * 0x1 + 0x3 * -0x615);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const z = [
        '381804aTdrTM',
        'VQIfL',
        'wozWd',
        'removeColu',
        'defineProp',
        '104820AvYDMt',
        'izJNl',
        '16DJpjeE',
        'CASCADE',
        '1096530DDwXJI',
        'lrQot',
        '77CLKfvX',
        'type',
        'yTDFn',
        'lkHSf',
        'defaultVal',
        '5856456BnNtlE',
        'Users',
        'all',
        'INTEGER',
        'Actions',
        'queue',
        'addColumn',
        'exports',
        'Queues',
        'restrict',
        '217HKoShl',
        'othIO',
        'KLkiY',
        'queueId',
        '__esModule',
        '170TUzEwF',
        'allowNull',
        'erty',
        '10499448uTgeMh',
        'sequelize',
        'ination',
        'XUlAz',
        '25daAMtu',
        'jlCPg',
        'DataTypes',
        'userIdDest',
        'StepsReply',
        '891364KkWQDe',
        'xRJTn',
        '711333bAiACi',
        'ggaPu',
        'value'
    ];
    a = function () {
        return z;
    };
    return a();
}
module[u(0x122)] = {
    'up': d => {
        const v = t, w = u, e = {};
        e[v(0x141)] = v(0x135) + v(0x14f), e[v(0x13c)] = w(0x150), e[v(0x148)] = w(0x128), e[w(0x126)] = w(0x123), e[v(0x145)] = w(0x143), e[w(0x127)] = v(0x124), e[w(0x139)] = w(0x134) + w(0x12f), e[w(0x130)] = v(0x14c);
        const f = e;
        return Promise[v(0x14d)]([
            d[v(0x13e) + 'mn'](f[v(0x141)], f[v(0x13c)]),
            d[w(0x151)](f[v(0x141)], f[w(0x148)], {
                'type': sequelize_1[v(0x133)][v(0x14e)],
                'references': {
                    'model': f[w(0x126)],
                    'key': 'id'
                },
                'onUpdate': f[w(0x145)],
                'onDelete': f[v(0x127)],
                'defaultValue': null,
                'allowNull': !![]
            }),
            d[v(0x13e) + 'mn'](f[w(0x141)], f[w(0x139)]),
            d[w(0x151)](f[w(0x141)], f[w(0x139)], {
                'type': sequelize_1[w(0x133)][w(0x14e)],
                'references': {
                    'model': f[v(0x130)],
                    'key': 'id'
                },
                'onUpdate': f[w(0x145)],
                'onDelete': f[v(0x127)],
                'defaultValue': null,
                'allowNull': !![]
            })
        ]);
    },
    'down': f => {
        const x = t, y = u, g = {};
        g[x(0x137)] = x(0x135) + x(0x14f), g[y(0x149)] = x(0x128), g[x(0x132)] = x(0x150), g[y(0x13d)] = y(0x134) + y(0x12f);
        const h = g, i = {};
        i[y(0x147)] = sequelize_1[y(0x133)][x(0x14e)], i[y(0x14a) + 'ue'] = null, i[x(0x12b)] = !![];
        const j = {};
        return j[y(0x147)] = sequelize_1[y(0x133)][x(0x14e)], j[x(0x14a) + 'ue'] = null, j[y(0x12b)] = !![], Promise[y(0x14d)]([
            f[y(0x13e) + 'mn'](h[x(0x137)], h[y(0x149)]),
            f[x(0x151)](h[x(0x137)], h[x(0x132)], i),
            f[y(0x13e) + 'mn'](h[x(0x137)], h[x(0x13d)]),
            f[y(0x151)](h[x(0x137)], h[x(0x13d)], j)
        ]);
    }
};