'use strict';
const z = b, A = b;
function a() {
    const F = [
        'autoIncrem',
        '42STMjQE',
        'erty',
        'sequelize',
        'DATE',
        'defaultVal',
        'SET\x20NULL',
        '1189352XUgfSP',
        'XXMlX',
        'createTabl',
        '3055060Rekzvo',
        '144zEAWTA',
        '3493428uOwZji',
        'DataTypes',
        '7135737oEGErG',
        'INTEGER',
        'Users',
        'value',
        'BOOLEAN',
        'iQhng',
        '601828WFozPL',
        'vkaPS',
        'STRING',
        'dropTable',
        'primaryKey',
        'ent',
        'defineProp',
        'Tenants',
        'all',
        '__esModule',
        'CASCADE',
        'type',
        'exports',
        'roltk',
        '66012HqyWTT',
        'allowNull',
        '490195ukfVYo',
        'Tags',
        'YFEVM',
        'OWdhq'
    ];
    a = function () {
        return F;
    };
    return a();
}
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x10e)) / (-0x2 * -0x7a9 + 0xd * 0x2e3 + -0x8 * 0x69b) + -parseInt(x(0xfe)) / (-0x1bf2 + 0x1b28 + 0x4 * 0x33) + -parseInt(y(0x113)) / (0x5 * -0xd7 + 0x32d + 0x35 * 0x5) * (-parseInt(y(0x10c)) / (-0xb52 + 0x1 * 0x1d2c + -0x11d6)) + -parseInt(y(0xf4)) / (-0x8e + 0x2195 + -0x2102) + -parseInt(y(0xf6)) / (-0x2e * 0x8e + -0x1719 + 0x30a3 * 0x1) + -parseInt(y(0xf8)) / (-0x5e + -0x11b2 + 0x1 * 0x1217) + parseInt(y(0x119)) / (-0x1f8 + -0xff2 + 0x11f2) * (parseInt(y(0xf5)) / (0x1f * -0x104 + 0x25e5 + 0x3 * -0x220));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd90cf * 0x1 + -0x7144 + -0x1 * 0x42cf9));
const w = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb7 * -0x35 + 0x3 * -0x273 + -0x1d96);
        let h = e[f];
        return h;
    }, b(c, d);
}
w[z(0xfb)] = !![], Object[A(0x104) + z(0x114)](exports, z(0x107), w);
const sequelize_1 = require(z(0x115));
module[z(0x10a)] = {
    'up': h => {
        const B = A, C = z, i = {};
        i[B(0x11a)] = C(0x10f), i[C(0x111)] = B(0xfa), i[B(0xff)] = C(0x108), i[C(0x10b)] = B(0x118), i[B(0x110)] = C(0x105);
        const j = i, k = {};
        k[B(0x109)] = sequelize_1[B(0xf7)][C(0xf9)], k[C(0x102)] = !![], k[C(0x112) + B(0x103)] = !![], k[B(0x10d)] = ![];
        const l = {};
        l[B(0x109)] = sequelize_1[B(0xf7)][C(0x100)], l[C(0x10d)] = ![];
        const m = {};
        m[B(0x109)] = sequelize_1[B(0xf7)][B(0xfc)], m[C(0x117) + 'ue'] = !![], m[C(0x10d)] = ![];
        const n = {};
        return n[C(0x109)] = sequelize_1[C(0xf7)][B(0x100)], n[B(0x10d)] = ![], Promise[C(0x106)]([h[C(0x11b) + 'e'](j[B(0x11a)], {
                'id': k,
                'tag': l,
                'isActive': m,
                'color': n,
                'userId': {
                    'type': sequelize_1[B(0xf7)][B(0xf9)],
                    'references': {
                        'model': j[C(0x111)],
                        'key': 'id'
                    },
                    'onUpdate': j[C(0xff)],
                    'onDelete': j[C(0x10b)]
                },
                'tenantId': {
                    'type': sequelize_1[B(0xf7)][B(0xf9)],
                    'references': {
                        'model': j[C(0x110)],
                        'key': 'id'
                    },
                    'onUpdate': j[B(0xff)],
                    'onDelete': j[C(0xff)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'createdAt': {
                    'type': sequelize_1[B(0xf7)][B(0x116)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[C(0xf7)][B(0x116)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const D = z, E = A, e = {};
        e[D(0xfd)] = D(0x10f);
        const f = e;
        return Promise[D(0x106)]([d[D(0x101)](f[D(0xfd)])]);
    }
};