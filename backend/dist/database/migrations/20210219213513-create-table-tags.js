'use strict';
function a() {
    const F = [
        '646035WOUEjh',
        'autoIncrem',
        'dropTable',
        'sequelize',
        'exports',
        'SET\x20NULL',
        'all',
        'type',
        'DATE',
        'Users',
        '640AbkWUB',
        'REISg',
        '1204868dktMny',
        'GZNMl',
        'createTabl',
        'primaryKey',
        'defaultVal',
        'HvSnC',
        'defineProp',
        '5traeWd',
        'UcBRo',
        'value',
        'Tags',
        'erty',
        'INTEGER',
        'DataTypes',
        '2581716MwkUjz',
        'BOOLEAN',
        '2424090UGVSaB',
        'rvDpq',
        '64341nkPlPA',
        'CASCADE',
        '__esModule',
        '5239710EPeskE',
        'adZyP',
        'STRING',
        'Tenants',
        'allowNull',
        'ent',
        '508948KgKoBq'
    ];
    a = function () {
        return F;
    };
    return a();
}
const z = b, A = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4d * -0x3a + -0x18a4 * 0x1 + 0x1 * 0x83c);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x12c)) / (-0x245 * 0x2 + 0x1492 + -0x1007 * 0x1) + -parseInt(y(0x111)) / (-0x10d2 + -0x1bea + 0x2cbe) + parseInt(y(0x12d)) / (-0x160 + -0x1739 + 0xa * 0x276) + -parseInt(x(0x11f)) / (0x2163 + -0x63c + -0x1 * 0x1b23) + -parseInt(y(0x118)) / (0x1cca + -0xe67 + -0xe5e) * (parseInt(y(0x121)) / (0x1 * -0x13a0 + -0x143 + 0x35 * 0x65)) + parseInt(y(0x126)) / (0x3c6 + 0xdde + -0x119d) + parseInt(x(0x10f)) / (-0x2 * -0x11 + 0x123 * -0x17 + -0x1a0b * -0x1) * (parseInt(y(0x123)) / (-0x1 * -0x5ea + 0x612 + 0x85 * -0x17));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x385b9 + 0x5b8b4 * 0x1 + 0x1e5d3 * 0x2));
const w = {};
w[z(0x11a)] = !![], Object[A(0x117) + A(0x11c)](exports, z(0x125), w);
const sequelize_1 = require(A(0x130));
module[z(0x131)] = {
    'up': h => {
        const B = A, C = A, i = {};
        i[B(0x112)] = C(0x11b), i[B(0x127)] = C(0x10e), i[C(0x110)] = C(0x124), i[B(0x122)] = C(0x10a), i[B(0x119)] = C(0x129);
        const j = i, k = {};
        k[C(0x10c)] = sequelize_1[B(0x11e)][B(0x11d)], k[B(0x114)] = !![], k[C(0x12e) + B(0x12b)] = !![], k[B(0x12a)] = ![];
        const l = {};
        l[B(0x10c)] = sequelize_1[C(0x11e)][B(0x128)], l[C(0x12a)] = ![];
        const m = {};
        m[C(0x10c)] = sequelize_1[C(0x11e)][B(0x120)], m[B(0x115) + 'ue'] = !![], m[B(0x12a)] = ![];
        const n = {};
        return n[C(0x10c)] = sequelize_1[B(0x11e)][B(0x128)], n[C(0x12a)] = ![], Promise[B(0x10b)]([h[C(0x113) + 'e'](j[B(0x112)], {
                'id': k,
                'tag': l,
                'isActive': m,
                'color': n,
                'userId': {
                    'type': sequelize_1[B(0x11e)][B(0x11d)],
                    'references': {
                        'model': j[C(0x127)],
                        'key': 'id'
                    },
                    'onUpdate': j[C(0x110)],
                    'onDelete': j[B(0x122)]
                },
                'tenantId': {
                    'type': sequelize_1[C(0x11e)][B(0x11d)],
                    'references': {
                        'model': j[C(0x119)],
                        'key': 'id'
                    },
                    'onUpdate': j[B(0x110)],
                    'onDelete': j[C(0x110)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'createdAt': {
                    'type': sequelize_1[C(0x11e)][C(0x10d)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[C(0x11e)][B(0x10d)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const D = A, E = A, e = {};
        e[D(0x116)] = E(0x11b);
        const f = e;
        return Promise[E(0x10b)]([d[D(0x12f)](f[D(0x116)])]);
    }
};