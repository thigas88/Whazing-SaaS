'use strict';
const t = b, u = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2558 + 0x1181 * 0x1 + -0x1 * -0x149d);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xe3)) / (-0x1548 + 0x1 * -0x1bd3 + -0x1c1 * -0x1c) * (-parseInt(r(0xdf)) / (0x3 * 0x752 + 0x760 + -0x1 * 0x1d54)) + parseInt(s(0xde)) / (-0x4f0 + -0x2aa * 0x7 + 0x7 * 0x35f) * (-parseInt(s(0xd2)) / (-0x1 * -0x1396 + -0x71e + -0x1 * 0xc74)) + -parseInt(s(0xe0)) / (-0x1 * -0x1da7 + 0x1 * 0x4ae + -0x894 * 0x4) * (-parseInt(s(0xcd)) / (-0x249c + -0x1b * 0x66 + 0x2f64)) + parseInt(r(0xe2)) / (0xec6 + -0x11 * 0x1bd + 0xece) + parseInt(r(0xc8)) / (0x1c50 + -0xef8 + 0x4 * -0x354) + parseInt(s(0xd6)) / (-0x4bd + -0xf89 + 0x3 * 0x6c5) * (parseInt(r(0xd4)) / (0x5c6 + -0x6 * 0x7c + -0x2d4)) + -parseInt(r(0xe1)) / (-0x9cb + -0x98e * 0x1 + 0x1364);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x76fc4 + 0x95895 + -0x1 * -0x33b10));
const q = {};
function a() {
    const z = [
        'vfxWc',
        'lbSAA',
        'dropTable',
        '1374656RzElbs',
        'exports',
        'autoIncrem',
        'CASCADE',
        'ContactCus',
        '1135026MOScnh',
        'buHKN',
        'INTEGER',
        'value',
        'Contacts',
        '8jCtlEE',
        'createTabl',
        '64810sysZtE',
        'yzPlE',
        '351dicGqS',
        'sequelize',
        'type',
        'erty',
        'primaryKey',
        'DATE',
        'allowNull',
        '__esModule',
        '31602sDeuaq',
        '1622NyrwoD',
        '15LSLJvW',
        '11992244XsNObB',
        '2176048aNSOeX',
        '179PjQqfP',
        'ent',
        'defineProp',
        'STRING',
        'DataTypes',
        'tomFields'
    ];
    a = function () {
        return z;
    };
    return a();
}
q[t(0xd0)] = !![], Object[u(0xe5) + u(0xd9)](exports, t(0xdd), q);
const sequelize_1 = require(u(0xd7));
module[u(0xc9)] = {
    'up': g => {
        const v = t, w = u, h = {};
        h[v(0xe9)] = w(0xcc) + v(0xe8), h[v(0xce)] = w(0xd1), h[v(0xd5)] = w(0xcb);
        const i = h, j = {};
        j[w(0xd8)] = sequelize_1[w(0xe7)][w(0xcf)], j[v(0xca) + v(0xe4)] = !![], j[v(0xda)] = !![], j[v(0xdc)] = ![];
        const k = {};
        k[v(0xd8)] = sequelize_1[v(0xe7)][w(0xe6)], k[v(0xdc)] = ![];
        const l = {};
        return l[w(0xd8)] = sequelize_1[v(0xe7)][v(0xe6)], l[w(0xdc)] = ![], g[v(0xd3) + 'e'](i[v(0xe9)], {
            'id': j,
            'name': k,
            'value': l,
            'contactId': {
                'type': sequelize_1[v(0xe7)][v(0xcf)],
                'references': {
                    'model': i[v(0xce)],
                    'key': 'id'
                },
                'onUpdate': i[v(0xd5)],
                'onDelete': i[v(0xd5)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[v(0xe7)][v(0xdb)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0xe7)][w(0xdb)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = u, y = t, e = {};
        e[x(0xc6)] = y(0xcc) + x(0xe8);
        const f = e;
        return d[y(0xc7)](f[x(0xc6)]);
    }
};