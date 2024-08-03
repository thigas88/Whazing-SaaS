'use strict';
const r = b, s = b;
function a() {
    const x = [
        'exports',
        'type',
        '2560158RfNMWL',
        'createTabl',
        'erty',
        'Groups',
        '6648tLRPWW',
        'DATE',
        'defineProp',
        'DataTypes',
        '3OfSLpa',
        'autoIncrem',
        '56DKKgKn',
        'CASCADE',
        'uIFvk',
        'pcBcE',
        'DDpCd',
        'SET\x20NULL',
        '6ZrGYmp',
        '1217036RIWIBW',
        'sequelize',
        'WlPPp',
        'Users',
        'value',
        '26bUyiXe',
        'ent',
        '2756578pJXmpV',
        'STRING',
        '24034KpRFGu',
        'dropTable',
        'allowNull',
        '10pXdMlE',
        'INTEGER',
        '__esModule',
        'oNEkD',
        '13257864DwZfZZ',
        '5327tMIoji',
        'primaryKey',
        '732660ZAeNgk'
    ];
    a = function () {
        return x;
    };
    return a();
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x9b)) / (0x1c5c + -0x1bd7 + -0x84) * (parseInt(q(0x8b)) / (-0x12eb + 0xd * -0x211 + 0x2dca)) + -parseInt(q(0x89)) / (-0x970 * -0x2 + 0x1 * 0x68e + -0x196b * 0x1) * (parseInt(q(0x92)) / (-0x2b * -0x98 + 0xde8 + -0x276c)) + parseInt(p(0xa5)) / (-0x56e * -0x6 + -0x6 * -0x33b + -0x33f1 * 0x1) * (-parseInt(p(0x91)) / (-0x4f9 * -0x7 + 0x25d1 + -0x489a)) + -parseInt(p(0xa3)) / (-0x47 * -0x71 + 0x2258 + -0x41a8) * (parseInt(p(0x85)) / (0x1 * 0x1f1 + -0xc4b * 0x3 + -0x8be * -0x4)) + -parseInt(q(0x81)) / (0x165a * 0x1 + -0x35f * -0x1 + -0x3 * 0x890) + -parseInt(p(0x9e)) / (0x2b * 0xd1 + 0x1b8 * -0xc + -0x1 * 0xe71) * (-parseInt(p(0x99)) / (0x2 * 0x9c2 + 0x16 * -0x159 + 0xa2d)) + parseInt(p(0xa2)) / (0x25a1 + 0x1314 + -0x38a9) * (parseInt(q(0x97)) / (0x1c90 + 0x78c + -0x1 * 0x240f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xb61f * -0xe + -0x9f0 * -0x33 + -0x8860 * -0x1b));
const o = {};
o[r(0x96)] = !![], Object[s(0x87) + s(0x83)](exports, s(0xa0), o);
const sequelize_1 = require(s(0x93));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x261a + 0xf81 + 0x171a);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[s(0xa6)] = {
    'up': f => {
        const t = r, u = s, g = {};
        g[t(0x94)] = t(0x84), g[u(0xa1)] = u(0x95), g[t(0x8f)] = u(0x8c), g[t(0x8d)] = t(0x90);
        const h = g, i = {};
        i[u(0xa7)] = sequelize_1[t(0x88)][u(0x9f)], i[t(0xa4)] = !![], i[t(0x8a) + u(0x98)] = !![], i[u(0x9d)] = ![];
        const j = {};
        return j[u(0xa7)] = sequelize_1[t(0x88)][t(0x9a)], j[t(0x9d)] = ![], f[u(0x82) + 'e'](h[u(0x94)], {
            'id': i,
            'group': j,
            'userId': {
                'type': sequelize_1[u(0x88)][t(0x9f)],
                'references': {
                    'model': h[u(0xa1)],
                    'key': 'id'
                },
                'onUpdate': h[u(0x8f)],
                'onDelete': h[t(0x8d)]
            },
            'createdAt': {
                'type': sequelize_1[t(0x88)][u(0x86)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0x88)][u(0x86)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = s, e = {};
        e[v(0x8e)] = v(0x84);
        const f = e;
        return d[v(0x9c)](f[w(0x8e)]);
    }
};