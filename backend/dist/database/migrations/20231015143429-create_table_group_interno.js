'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd6e + -0x1532 + -0x1 * -0x2474);
        let h = e[f];
        return h;
    }, b(c, d);
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1e9)) / (-0x1d5b * 0x1 + 0x1d88 + 0x4 * -0xb) + parseInt(p(0x1d8)) / (-0xb * 0xe3 + -0xfd * 0x1f + 0x1433 * 0x2) + parseInt(p(0x1e8)) / (-0xe63 * 0x1 + 0x2123 + -0x215 * 0x9) * (parseInt(p(0x1e3)) / (0x85 + -0x1502 + -0x1 * -0x1481)) + -parseInt(q(0x1f3)) / (-0xd2d + 0x246d + -0x1 * 0x173b) * (parseInt(p(0x1ea)) / (-0x127b + -0x14f2 + -0x1 * -0x2773)) + parseInt(p(0x1ef)) / (0xf8f + 0x21dd + -0x3165) + parseInt(q(0x1e6)) / (-0x21a + -0x2 * -0x589 + -0x23c * 0x4) * (parseInt(q(0x1eb)) / (0x7 * -0x32b + 0x47d * 0x7 + 0x935 * -0x1)) + parseInt(q(0x1db)) / (-0xb8 * -0x31 + -0x6 * -0x482 + -0x3e3a) * (-parseInt(p(0x1df)) / (-0x16 * 0xf6 + 0x1 * -0x1f63 + 0x3492));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x18cde6 + 0x14ae57 + -0x35 * 0x9851));
const o = {};
o[r(0x1f1)] = !![], Object[s(0x1ee) + s(0x1dd)](exports, r(0x1e7), o);
function a() {
    const x = [
        'DATE',
        'MAYDN',
        'defineProp',
        '11595871UpxiHb',
        'exports',
        'value',
        'type',
        '535FYgJrS',
        'CASCADE',
        'dropTable',
        'DataTypes',
        'SET\x20NULL',
        'HyEMc',
        'ent',
        'INTEGER',
        'Groups',
        'zrSiY',
        '238092ozAPeh',
        'tQLTV',
        'STRING',
        '30vcdhSO',
        'allowNull',
        'erty',
        'createTabl',
        '11951599ufodKo',
        'Users',
        'primaryKey',
        'sequelize',
        '4473788ZdYleD',
        'oJHCn',
        'autoIncrem',
        '24uHwefI',
        '__esModule',
        '3UEKObc',
        '1272659CljKpk',
        '79986CbjCNx',
        '4300605gzuEqx'
    ];
    a = function () {
        return x;
    };
    return a();
}
const sequelize_1 = require(r(0x1e2));
module[s(0x1f0)] = {
    'up': f => {
        const t = r, u = s, g = {};
        g[t(0x1e4)] = t(0x1d6), g[u(0x1d9)] = t(0x1e0), g[u(0x1f8)] = u(0x1f4), g[u(0x1ed)] = t(0x1f7);
        const h = g, i = {};
        i[u(0x1f2)] = sequelize_1[u(0x1f6)][u(0x1d5)], i[t(0x1e1)] = !![], i[t(0x1e5) + t(0x1d4)] = !![], i[t(0x1dc)] = ![];
        const j = {};
        return j[t(0x1f2)] = sequelize_1[t(0x1f6)][t(0x1da)], j[t(0x1dc)] = ![], f[t(0x1de) + 'e'](h[t(0x1e4)], {
            'id': i,
            'group': j,
            'userId': {
                'type': sequelize_1[t(0x1f6)][t(0x1d5)],
                'references': {
                    'model': h[u(0x1d9)],
                    'key': 'id'
                },
                'onUpdate': h[u(0x1f8)],
                'onDelete': h[t(0x1ed)]
            },
            'createdAt': {
                'type': sequelize_1[t(0x1f6)][t(0x1ec)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0x1f6)][u(0x1ec)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = r, e = {};
        e[v(0x1d7)] = v(0x1d6);
        const f = e;
        return d[w(0x1f5)](f[w(0x1d7)]);
    }
};