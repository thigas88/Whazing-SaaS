'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xe25 + 0xe27 + -0x1a89);
        let h = e[f];
        return h;
    }, b(c, d);
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1e3)) / (-0x7c * 0x46 + -0x598 * -0x1 + 0x1c51) + parseInt(q(0x1d0)) / (-0x2 * -0xca3 + 0x1f * 0x101 + -0xb47 * 0x5) * (-parseInt(q(0x1d8)) / (-0x43a + -0x1 * 0x1273 + 0x790 * 0x3)) + -parseInt(q(0x1df)) / (-0x1763 + 0x135 * 0x11 + 0x52 * 0x9) * (parseInt(q(0x1e1)) / (-0x23d5 * 0x1 + -0x18c8 + -0x3ca2 * -0x1)) + parseInt(q(0x1e4)) / (0x58d + -0x391 * 0x3 + 0x52c) * (-parseInt(p(0x1e7)) / (0x2669 + -0x60d * 0x2 + -0x1 * 0x1a48)) + parseInt(p(0x1d4)) / (-0x1035 + 0x231d + -0x12e0) * (-parseInt(p(0x1c8)) / (-0x113f * -0x2 + 0x5d * -0xc + -0x1e19)) + parseInt(p(0x1ca)) / (-0x1ab0 * -0x1 + 0x1 * 0x750 + 0x45 * -0x7e) * (parseInt(q(0x1c7)) / (-0x4 * 0x155 + -0x1e9 * 0x5 + 0xeec)) + parseInt(p(0x1d7)) / (0x19fb * -0x1 + -0x131e * 0x2 + 0x4043);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1297e + -0x68020 + 0x116635));
function a() {
    const x = [
        'createTabl',
        'SUPzv',
        '135135JVsPwK',
        '10969146YokHNm',
        'allowNull',
        '1180fXOGQI',
        '__esModule',
        'type',
        'uKPML',
        'STRING',
        'defineProp',
        '1094374VYdkTj',
        'sequelize',
        'Queues',
        'DATE',
        '8ridTxP',
        'erty',
        'aiWNx',
        '33440412bJDCIB',
        '3RglWGc',
        'autoIncrem',
        'Users',
        'exports',
        'INTEGER',
        'CASCADE',
        'ent',
        '5539284SzlirQ',
        'DataTypes',
        '5okRtmu',
        'primaryKey',
        '307841tbQGNc',
        '6ODZuzi',
        'value',
        'QwEoX',
        '4220657Kxuylq',
        'SET\x20NULL',
        'dropTable',
        'zXXtD'
    ];
    a = function () {
        return x;
    };
    return a();
}
const o = {};
o[r(0x1e5)] = !![], Object[s(0x1cf) + s(0x1d5)](exports, s(0x1cb), o);
const sequelize_1 = require(s(0x1d1));
module[s(0x1db)] = {
    'up': f => {
        const t = r, u = r, g = {};
        g[t(0x1d6)] = u(0x1d2), g[t(0x1e6)] = t(0x1da), g[t(0x1cd)] = t(0x1dd), g[t(0x1c4)] = t(0x1e8);
        const h = g, i = {};
        i[t(0x1cc)] = sequelize_1[u(0x1e0)][t(0x1dc)], i[t(0x1e2)] = !![], i[t(0x1d9) + t(0x1de)] = !![], i[u(0x1c9)] = ![];
        const j = {};
        return j[u(0x1cc)] = sequelize_1[u(0x1e0)][u(0x1ce)], j[u(0x1c9)] = ![], f[t(0x1c5) + 'e'](h[u(0x1d6)], {
            'id': i,
            'queue': j,
            'userId': {
                'type': sequelize_1[t(0x1e0)][t(0x1dc)],
                'references': {
                    'model': h[t(0x1e6)],
                    'key': 'id'
                },
                'onUpdate': h[t(0x1cd)],
                'onDelete': h[t(0x1c4)]
            },
            'createdAt': {
                'type': sequelize_1[t(0x1e0)][t(0x1d3)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0x1e0)][t(0x1d3)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = s, e = {};
        e[v(0x1c6)] = w(0x1d2);
        const f = e;
        return d[v(0x1c3)](f[v(0x1c6)]);
    }
};