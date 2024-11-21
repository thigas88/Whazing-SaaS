'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x177)) / (-0x1 * -0x262b + -0x1 * -0xfa3 + 0x11ef * -0x3) * (-parseInt(x(0x183)) / (0x2 * -0x1075 + -0x1e21 + 0x3f0d * 0x1)) + -parseInt(x(0x163)) / (-0xf18 + 0x1c6 * 0xb + -0x17 * 0x31) * (parseInt(y(0x16d)) / (-0x8b4 * 0x1 + 0x1518 + -0xc60)) + parseInt(y(0x16b)) / (-0x946 + 0x4 * -0x2a3 + -0x3 * -0x69d) + -parseInt(x(0x169)) / (-0xdb * 0x1b + 0x1c5c + -0x53d) + -parseInt(y(0x174)) / (-0x1 * -0x23d1 + 0x14b6 + 0xe2 * -0x40) * (-parseInt(x(0x189)) / (0x22a * -0x4 + -0x1fb1 + 0x2861)) + -parseInt(x(0x188)) / (-0xa1e + 0x17bc + -0xd95) * (parseInt(x(0x17c)) / (-0x662 + 0xbd0 + -0x5 * 0x114)) + parseInt(x(0x180)) / (-0xcfb * -0x3 + 0x3b * -0x5d + -0x1 * 0x1177) * (parseInt(y(0x17a)) / (-0x1ca * -0x10 + -0x6 * 0x6 + -0x1c70));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x609f2 + 0x379c9 + 0x71f09));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x8c9 * 0x2 + 0x7ba + -0x17e9 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const w = {};
w[z(0x181)] = !![], Object[z(0x164) + z(0x187)](exports, z(0x167), w);
const sequelize_1 = require(A(0x16a));
function a() {
    const F = [
        '1zEEuvZ',
        'allowNull',
        'Tags',
        '228paXIrC',
        'Tenants',
        '826050AQHxyz',
        'Users',
        'all',
        'fxPud',
        '617353NUTDrf',
        'value',
        'SET\x20NULL',
        '457720CxRoTZ',
        'CASCADE',
        'createTabl',
        'dropTable',
        'erty',
        '63QJMMSB',
        '500136KSLfYJ',
        'type',
        'primaryKey',
        'BOOLEAN',
        'NzGgc',
        '1668387lCoGKj',
        'defineProp',
        'ent',
        'wbLmR',
        '__esModule',
        'TSnhF',
        '934032gCapwr',
        'sequelize',
        '530040dkwBRD',
        'gaBrO',
        '4ZRUXTh',
        'autoIncrem',
        'defaultVal',
        'DataTypes',
        'ElzKd',
        'exports',
        'INTEGER',
        '21vgyBWR',
        'STRING',
        'DATE'
    ];
    a = function () {
        return F;
    };
    return a();
}
module[z(0x172)] = {
    'up': h => {
        const B = z, C = z, i = {};
        i[B(0x168)] = C(0x179), i[B(0x171)] = B(0x17d), i[C(0x166)] = C(0x184), i[C(0x17f)] = C(0x182), i[B(0x16c)] = C(0x17b);
        const j = i, k = {};
        k[C(0x18a)] = sequelize_1[C(0x170)][C(0x173)], k[C(0x18b)] = !![], k[B(0x16e) + B(0x165)] = !![], k[C(0x178)] = ![];
        const l = {};
        l[B(0x18a)] = sequelize_1[B(0x170)][B(0x175)], l[B(0x178)] = ![];
        const m = {};
        m[B(0x18a)] = sequelize_1[C(0x170)][C(0x18c)], m[C(0x16f) + 'ue'] = !![], m[C(0x178)] = ![];
        const n = {};
        return n[B(0x18a)] = sequelize_1[C(0x170)][B(0x175)], n[B(0x178)] = ![], Promise[C(0x17e)]([h[C(0x185) + 'e'](j[B(0x168)], {
                'id': k,
                'tag': l,
                'isActive': m,
                'color': n,
                'userId': {
                    'type': sequelize_1[C(0x170)][B(0x173)],
                    'references': {
                        'model': j[B(0x171)],
                        'key': 'id'
                    },
                    'onUpdate': j[B(0x166)],
                    'onDelete': j[C(0x17f)]
                },
                'tenantId': {
                    'type': sequelize_1[C(0x170)][C(0x173)],
                    'references': {
                        'model': j[C(0x16c)],
                        'key': 'id'
                    },
                    'onUpdate': j[B(0x166)],
                    'onDelete': j[B(0x166)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'createdAt': {
                    'type': sequelize_1[B(0x170)][C(0x176)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[B(0x170)][B(0x176)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const D = A, E = z, e = {};
        e[D(0x18d)] = D(0x179);
        const f = e;
        return Promise[E(0x17e)]([d[E(0x186)](f[D(0x18d)])]);
    }
};