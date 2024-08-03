'use strict';
const z = b, A = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xc9 * 0xd + -0x120d * -0x1 + -0x1bc3);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x92)) / (-0x31f + 0x26b0 + -0x2390) + -parseInt(y(0x7f)) / (0x15c + 0xc37 * 0x1 + -0x1 * 0xd91) + parseInt(y(0xa4)) / (-0x16d7 * 0x1 + -0x19c5 + 0x309f * 0x1) * (-parseInt(y(0x95)) / (-0x12c1 + 0x1f31 + 0x2 * -0x636)) + parseInt(y(0x85)) / (0x1f8f + -0x23a7 * 0x1 + 0x41d) + parseInt(x(0x9b)) / (0x28 * -0x35 + -0x60a + 0xe58) * (parseInt(x(0x89)) / (0x1ef + -0xb28 + 0x940)) + parseInt(y(0x9c)) / (0x5b8 + -0x28 * 0x8 + -0x470) + parseInt(y(0x9a)) / (-0x1 * 0x1b0e + -0x930 + -0x2447 * -0x1) * (-parseInt(x(0x8e)) / (0x1e3d * 0x1 + 0x1a5f + -0x3892));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x13c7 * 0xb + 0x1 * -0xe3079 + -0x26 * -0x939a));
const w = {};
w[z(0x8f)] = !![], Object[A(0xa0) + A(0xa7)](exports, A(0x82), w);
function a() {
    const F = [
        'autoIncrem',
        'twppW',
        'defaultVal',
        '4039jKLsFs',
        'JSON',
        'sequelize',
        'type',
        'bAejl',
        '20RUwEAK',
        'value',
        'dropTable',
        'Tenants',
        '656099fJrdVI',
        'INTEGER',
        'NhbDg',
        '164RfzOoZ',
        'allowNull',
        'DATE',
        'ChatFlow',
        'STRING',
        '322497gaqwZR',
        '9732PoeVyD',
        '976624taixUr',
        'ent',
        'exports',
        'rraiX',
        'defineProp',
        'restrict',
        'CASCADE',
        'BOOLEAN',
        '12039GADfcX',
        'ITvSy',
        'createTabl',
        'erty',
        '183308IccQpU',
        'Users',
        'DataTypes',
        '__esModule',
        'primaryKey',
        'SXFAu',
        '2438140dbttXI'
    ];
    a = function () {
        return F;
    };
    return a();
}
const sequelize_1 = require(A(0x8b));
module[A(0x9e)] = {
    'up': i => {
        const B = A, C = A, j = {};
        j[B(0x87)] = C(0x98), j[B(0x84)] = C(0x80), j[B(0x94)] = C(0xa2), j[C(0xa5)] = C(0x91), j[B(0x9f)] = B(0xa1);
        const k = j, l = {};
        l[C(0x8c)] = sequelize_1[C(0x81)][C(0x93)], l[B(0x86) + C(0x9d)] = !![], l[C(0x83)] = !![], l[C(0x96)] = ![];
        const m = {};
        m[C(0x8c)] = sequelize_1[C(0x81)][C(0x99)], m[C(0x96)] = ![], m[C(0x88) + 'ue'] = '';
        const n = {};
        n[C(0x8c)] = sequelize_1[B(0x81)][B(0x8a)], n[C(0x96)] = ![], n[B(0x88) + 'ue'] = {};
        const o = {};
        o[C(0x8c)] = sequelize_1[B(0x81)][C(0xa3)], o[C(0x96)] = ![], o[C(0x88) + 'ue'] = !![];
        const p = {};
        return p[C(0x8c)] = sequelize_1[C(0x81)][C(0x99)], p[C(0x96)] = !![], p[B(0x88) + 'ue'] = null, i[C(0xa6) + 'e'](k[B(0x87)], {
            'id': l,
            'name': m,
            'flow': n,
            'isActive': o,
            'celularTeste': p,
            'userId': {
                'type': sequelize_1[C(0x81)][C(0x93)],
                'references': {
                    'model': k[B(0x84)],
                    'key': 'id'
                },
                'onUpdate': k[B(0x94)],
                'onDelete': k[C(0x94)],
                'allowNull': !![],
                'defaultValue': null
            },
            'tenantId': {
                'type': sequelize_1[C(0x81)][B(0x93)],
                'references': {
                    'model': k[C(0xa5)],
                    'key': 'id'
                },
                'onUpdate': k[C(0x94)],
                'onDelete': k[C(0x9f)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'createdAt': {
                'type': sequelize_1[C(0x81)][B(0x97)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[C(0x81)][B(0x97)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const D = A, E = A, e = {};
        e[D(0x8d)] = E(0x98);
        const f = e;
        return d[E(0x90)](f[E(0x8d)]);
    }
};