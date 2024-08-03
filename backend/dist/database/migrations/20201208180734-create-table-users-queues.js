'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x99)) / (0x917 + 0xd * 0x4f + -0xd19) * (-parseInt(p(0x82)) / (-0xa74 + -0x28 * -0x8e + -0xbba * 0x1)) + -parseInt(p(0x9e)) / (-0x6 * 0x313 + 0x15b * 0x5 + -0x256 * -0x5) + -parseInt(p(0x98)) / (-0x198 * -0x10 + 0x13 * 0x79 + -0x3 * 0xb7d) + -parseInt(p(0xa0)) / (-0x5d6 + -0x26 * -0x59 + 0x7 * -0x10d) + -parseInt(q(0x84)) / (0x1 * 0x45f + -0x1eb8 + -0x1 * -0x1a5f) * (parseInt(q(0xa1)) / (0xfdc + -0x34 * -0x86 + -0x2b0d)) + parseInt(q(0x90)) / (0x21bc + 0x2250 + -0x4 * 0x1101) + parseInt(q(0x9d)) / (-0x1 * 0x347 + 0x952 * -0x4 + 0x2898);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x23f5a + -0xcc7 * -0x11 + 0x466bb));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x31d + -0x147a + 0x1f * 0xc7);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        'allowNull',
        'Users',
        'wkCsc',
        'createTabl',
        'erty',
        'primaryKey',
        'sMiaW',
        'xXMjP',
        'ent',
        'DataTypes',
        '3007384KtRtCk',
        'defineProp',
        'Queues',
        'VxHzL',
        '__esModule',
        'sequelize',
        'DATE',
        'autoIncrem',
        '1437408ifWCZi',
        '1FodNCp',
        'dropTable',
        'INTEGER',
        'CASCADE',
        '2214963IXwgzP',
        '87375cCRkof',
        'type',
        '722680qQBvRf',
        '7ZIWkPl',
        'exports',
        'UsersQueue',
        '401404IXoCvy',
        'value',
        '557754MSuoQc',
        'WkMAg'
    ];
    a = function () {
        return x;
    };
    return a();
}
const o = {};
o[r(0x83)] = !![], Object[r(0x91) + r(0x8a)](exports, r(0x94), o);
const sequelize_1 = require(r(0x95));
module[s(0xa2)] = {
    'up': e => {
        const t = s, u = s, f = {};
        f[t(0x93)] = t(0xa3) + 's', f[u(0x8d)] = u(0x92), f[t(0x85)] = u(0x9c), f[t(0x8c)] = u(0x87);
        const g = f, h = {};
        return h[t(0x9f)] = sequelize_1[t(0x8f)][u(0x9b)], h[t(0x8b)] = !![], h[u(0x97) + u(0x8e)] = !![], h[u(0x86)] = ![], e[u(0x89) + 'e'](g[t(0x93)], {
            'id': h,
            'queueId': {
                'type': sequelize_1[u(0x8f)][t(0x9b)],
                'references': {
                    'model': g[u(0x8d)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x85)],
                'onDelete': g[u(0x85)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[t(0x8f)][u(0x9b)],
                'references': {
                    'model': g[u(0x8c)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x85)],
                'onDelete': g[u(0x85)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[u(0x8f)][u(0x96)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0x8f)][t(0x96)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = s, e = {};
        e[v(0x88)] = w(0xa3) + 's';
        const f = e;
        return d[w(0x9a)](f[v(0x88)]);
    }
};