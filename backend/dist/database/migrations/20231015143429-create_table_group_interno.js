'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x13b)) / (0x22ad + 0x92c * 0x1 + -0x1e8 * 0x17) * (parseInt(p(0x142)) / (0x631 + -0xd2b * -0x1 + -0x135a)) + -parseInt(q(0x139)) / (-0x1c8b + 0x1ead + -0xb5 * 0x3) + -parseInt(q(0x122)) / (0xed2 + 0xe * -0x18d + 0x1ba * 0x4) * (-parseInt(p(0x13e)) / (-0x51 * 0x63 + 0x13b5 + 0xba3 * 0x1)) + parseInt(q(0x138)) / (0x1ee8 + -0x16e * -0x1b + 0x1 * -0x457c) * (-parseInt(q(0x133)) / (-0x185e * 0x1 + 0xd53 + 0xb12)) + -parseInt(p(0x13f)) / (0x7e + -0x28 * 0xec + 0x1235 * 0x2) + parseInt(q(0x12c)) / (0x260a + -0x1f93 + -0x66e) * (parseInt(p(0x13d)) / (-0x17a0 + 0x1c8f + -0x4e5)) + parseInt(p(0x146)) / (-0x2ca + 0x209c * 0x1 + -0x1dc7) * (parseInt(p(0x12f)) / (-0x1 * -0x236f + 0x1 * -0xa61 + -0x1902));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1399e9 + -0x106b01 + 0x6c913));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1062 + 0x2 * -0x1223 + 0xea * 0x17);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = {};
o[r(0x126)] = !![], Object[r(0x125) + s(0x12e)](exports, s(0x130), o);
const sequelize_1 = require(r(0x147));
function a() {
    const x = [
        'AbuFV',
        'pROhL',
        '11RVhkrR',
        'sequelize',
        '6316JyLfxQ',
        'INTEGER',
        'exports',
        'defineProp',
        'value',
        'Users',
        'createTabl',
        'DataTypes',
        'MJKMG',
        'autoIncrem',
        '9jmoAaP',
        'Groups',
        'erty',
        '16489812IIomzY',
        '__esModule',
        'SET\x20NULL',
        'STRING',
        '21245hfmhVA',
        'CASCADE',
        'allowNull',
        'gZtJV',
        'ent',
        '786LxZqBJ',
        '2097366ZaOAry',
        'qcnly',
        '1HPKkXf',
        'type',
        '8206620pyNWUK',
        '1030gDzIBI',
        '2588440ZgbwDw',
        'DATE',
        'dropTable',
        '893036FRWNfD',
        'primaryKey'
    ];
    a = function () {
        return x;
    };
    return a();
}
module[s(0x124)] = {
    'up': f => {
        const t = s, u = r, g = {};
        g[t(0x145)] = u(0x12d), g[t(0x12a)] = t(0x127), g[t(0x13a)] = u(0x134), g[t(0x136)] = u(0x131);
        const h = g, i = {};
        i[t(0x13c)] = sequelize_1[u(0x129)][t(0x123)], i[t(0x143)] = !![], i[u(0x12b) + u(0x137)] = !![], i[t(0x135)] = ![];
        const j = {};
        return j[t(0x13c)] = sequelize_1[u(0x129)][t(0x132)], j[t(0x135)] = ![], f[u(0x128) + 'e'](h[u(0x145)], {
            'id': i,
            'group': j,
            'userId': {
                'type': sequelize_1[t(0x129)][t(0x123)],
                'references': {
                    'model': h[t(0x12a)],
                    'key': 'id'
                },
                'onUpdate': h[t(0x13a)],
                'onDelete': h[u(0x136)]
            },
            'createdAt': {
                'type': sequelize_1[u(0x129)][t(0x140)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x129)][u(0x140)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = r, e = {};
        e[v(0x144)] = w(0x12d);
        const f = e;
        return d[w(0x141)](f[v(0x144)]);
    }
};