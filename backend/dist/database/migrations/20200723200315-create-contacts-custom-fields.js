'use strict';
const t = b, u = b;
function a() {
    const z = [
        'DvcaW',
        'ContactCus',
        'zBhUT',
        'DATE',
        'value',
        '5811096QWxoYO',
        '2770328WwNeaf',
        'createTabl',
        '4CBeGNa',
        'type',
        'autoIncrem',
        'DataTypes',
        'tbhAf',
        'INTEGER',
        '44OKFdmY',
        'Contacts',
        '__esModule',
        'ent',
        '4691192xUenZY',
        'primaryKey',
        '1984735DibONI',
        'STRING',
        'CASCADE',
        'dropTable',
        'defineProp',
        '49003OHkrBh',
        '20jEoXmx',
        'exports',
        '5704884uCnXow',
        '7YByMwh',
        'VQlLr',
        'allowNull',
        '864027jNyPtW',
        'sequelize',
        'tomFields',
        'erty'
    ];
    a = function () {
        return z;
    };
    return a();
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0xca)) / (-0x167 + 0x2400 + 0x4 * -0x8a6) * (parseInt(s(0xe3)) / (0x1760 + 0x1 * -0x26c1 + -0x65 * -0x27)) + parseInt(r(0xd1)) / (0xf9f + -0x2523 + -0xb * -0x1f5) * (-parseInt(s(0xdd)) / (-0x143c + 0x2 * 0x94f + 0x16 * 0x13)) + parseInt(s(0xc5)) / (0x83 * 0x47 + 0x1 * -0x23a2 + -0xae) + -parseInt(s(0xda)) / (0x1dbd + -0x14fe + -0x8b9) + parseInt(s(0xce)) / (0x2215 + -0x68 * -0x5 + -0x120b * 0x2) * (-parseInt(s(0xdb)) / (0x1 * -0x1069 + 0x6d5 * -0x1 + 0x1746)) + -parseInt(s(0xcd)) / (-0x22ac + -0x964 + 0x2c19) * (-parseInt(r(0xcb)) / (-0x3 * 0x2e3 + 0x1459 + 0x1f1 * -0x6)) + -parseInt(s(0xe7)) / (0x1694 + -0x28 * 0x90 + -0x9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x25d4c * -0x1 + -0xeb043 * 0x1 + 0x23 * 0xcc5c));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x193c + -0x1 * 0x250e + -0x3 * -0x1505);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = {};
q[t(0xd9)] = !![], Object[t(0xc9) + u(0xd4)](exports, u(0xe5), q);
const sequelize_1 = require(t(0xd2));
module[t(0xcc)] = {
    'up': g => {
        const v = u, w = t, h = {};
        h[v(0xcf)] = v(0xd6) + w(0xd3), h[v(0xd7)] = v(0xe4), h[w(0xe1)] = v(0xc7);
        const i = h, j = {};
        j[v(0xde)] = sequelize_1[w(0xe0)][w(0xe2)], j[v(0xdf) + w(0xe6)] = !![], j[v(0xe8)] = !![], j[v(0xd0)] = ![];
        const k = {};
        k[w(0xde)] = sequelize_1[w(0xe0)][v(0xc6)], k[v(0xd0)] = ![];
        const l = {};
        return l[w(0xde)] = sequelize_1[w(0xe0)][w(0xc6)], l[w(0xd0)] = ![], g[w(0xdc) + 'e'](i[v(0xcf)], {
            'id': j,
            'name': k,
            'value': l,
            'contactId': {
                'type': sequelize_1[v(0xe0)][w(0xe2)],
                'references': {
                    'model': i[w(0xd7)],
                    'key': 'id'
                },
                'onUpdate': i[v(0xe1)],
                'onDelete': i[v(0xe1)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[w(0xe0)][w(0xd8)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[w(0xe0)][w(0xd8)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0xd5)] = x(0xd6) + x(0xd3);
        const f = e;
        return d[y(0xc8)](f[y(0xd5)]);
    }
};