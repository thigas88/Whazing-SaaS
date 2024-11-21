'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4d * 0x47 + 0x10b0 + 0x542 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        'type',
        'DATE',
        '1039507pcxHKU',
        '1124814xsXeZr',
        'ent',
        'DataTypes',
        'allowNull',
        '1542264nyAWcp',
        'dropTable',
        'restrict',
        'CASCADE',
        'active',
        'aXQwo',
        '10xVcslw',
        'STRING',
        'Tenants',
        'erty',
        '__esModule',
        'defineProp',
        'autoIncrem',
        'primaryKey',
        'OjUTt',
        'yjTff',
        '517766FlqVcK',
        'DQMhe',
        'INTEGER',
        'LFWBG',
        'exports',
        '1256742dDiGfZ',
        '90460IfgPUl',
        'sequelize',
        '1080548fuaYaE',
        'Users',
        'createTabl',
        'qJJWb',
        'value'
    ];
    a = function () {
        return x;
    };
    return a();
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0xa8)) / (-0x1 * 0x1732 + 0x26d7 + -0x7 * 0x23c) + parseInt(q(0xa2)) / (-0x22ed * -0x1 + -0x17cc + -0x3b5 * 0x3) + parseInt(p(0xa7)) / (0x258e + 0x44d * -0x6 + -0x1 * 0xbbd) + -parseInt(p(0xaa)) / (-0x67 * -0x35 + -0x1b5 + 0x182 * -0xd) + -parseInt(p(0x98)) / (0x11e7 + -0xe47 * 0x1 + -0x39b) * (-parseInt(q(0xb2)) / (0x1afe + -0xb7b + 0x5 * -0x319)) + -parseInt(q(0xb1)) / (-0x14ce + -0x137a * -0x1 + -0x1 * -0x15b) + -parseInt(q(0xb6)) / (0x448 + -0x2 * 0x697 + 0x8ee);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x10e3a * -0x1 + 0xa8f60 + 0x3094 * -0x21));
const o = {};
o[r(0xae)] = !![], Object[r(0x9d) + s(0x9b)](exports, s(0x9c), o);
const sequelize_1 = require(r(0xa9));
module[s(0xa6)] = {
    'up': e => {
        const t = r, u = s, f = {};
        f[t(0xa1)] = u(0x9a), f[u(0xa3)] = t(0xba), f[t(0x97)] = t(0xab), f[u(0xad)] = t(0xb9), f[u(0xa5)] = u(0xb8);
        const g = f, h = {};
        return h[t(0xaf)] = sequelize_1[u(0xb4)][t(0xa4)], h[t(0x9e) + u(0xb3)] = !![], h[u(0x9f)] = !![], h[t(0xb5)] = ![], e[u(0xac) + 'e'](g[t(0xa1)], {
            'id': h,
            'status': {
                'type': sequelize_1[t(0xb4)][u(0x99)],
                'defaultValue': g[t(0xa3)],
                'allowNull': ![]
            },
            'ownerId': {
                'type': sequelize_1[t(0xb4)][t(0xa4)],
                'references': {
                    'model': g[u(0x97)],
                    'key': 'id'
                },
                'onUpdate': g[u(0xad)],
                'onDelete': g[u(0xa5)]
            },
            'createdAt': {
                'type': sequelize_1[t(0xb4)][u(0xb0)](-0x1 * -0xe8 + -0x2258 + 0x2176),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0xb4)][t(0xb0)](-0x1d9 + 0x1 * -0x1db9 + 0x1f98),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = s, e = {};
        e[v(0xa0)] = v(0x9a);
        const f = e;
        return d[w(0xb7)](f[w(0xa0)]);
    }
};