'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0xb7)) / (-0x44a + 0x18ad + -0x1462) * (-parseInt(x(0xbf)) / (-0x139b + 0x1 * -0x19d6 + 0x2d73)) + parseInt(y(0xaa)) / (0x3c1 + -0xc0f + 0x851) * (-parseInt(y(0xb3)) / (0x2603 + -0x3 * -0x809 + -0x3e1a)) + parseInt(y(0xb5)) / (0x1c09 + -0xa9 * -0x2 + -0x2ef * 0xa) * (parseInt(x(0xa5)) / (-0x1025 * -0x2 + 0x2 * 0x11e7 + -0x4412)) + parseInt(y(0xad)) / (0x690 + -0x875 * -0x1 + 0xefe * -0x1) + parseInt(y(0xa6)) / (0x1 * -0x1565 + 0x8ad * -0x3 + 0x17ba * 0x2) * (parseInt(y(0xc2)) / (0x1f91 * -0x1 + 0x1a72 + -0xdc * -0x6)) + parseInt(y(0xb9)) / (-0x2 * -0x6d3 + 0xe42 * 0x1 + -0x1bde) * (parseInt(y(0xa8)) / (0x148d + 0x60d * -0x6 + 0xfcc)) + -parseInt(y(0xb6)) / (-0x1a53 + 0x1806 + -0x1 * -0x259);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x8aa6c + -0x116 * 0x163 + 0x109016));
function a() {
    const F = [
        'INTEGER',
        'fEaby',
        '378xyamdf',
        'value',
        'type',
        'allowNull',
        'BOOLEAN',
        'STRING',
        'dropTable',
        'OCgqI',
        'ULDaR',
        'primaryKey',
        'sequelize',
        'autoIncrem',
        'CASCADE',
        'ent',
        '66wFGcth',
        '8752AnWcmA',
        'erty',
        '11KHWIwO',
        'createTabl',
        '678bPCiFj',
        'exports',
        'DATE',
        '5203520gNEBeD',
        'restrict',
        'DataTypes',
        '__esModule',
        'ChatFlow',
        'KohKr',
        '9056hdTASe',
        'defineProp',
        '158885BKMaIq',
        '5567484iDCkCy',
        '317QXyqrC',
        'JSON',
        '5986160hRWIiu',
        'defaultVal',
        'Users',
        'BpAbm',
        'vXBqy',
        'Tenants',
        '2164RtyhTE'
    ];
    a = function () {
        return F;
    };
    return a();
}
const w = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1e72 + -0x21c8 + 0x40d4);
        let h = e[f];
        return h;
    }, b(c, d);
}
w[z(0xc3)] = !![], Object[A(0xb4) + z(0xa7)](exports, z(0xb0), w);
const sequelize_1 = require(z(0xa1));
module[z(0xab)] = {
    'up': i => {
        const B = A, C = A, j = {};
        j[B(0x9e)] = C(0xb1), j[C(0xbc)] = B(0xbb), j[B(0x9f)] = C(0xa3), j[C(0xc1)] = B(0xbe), j[B(0xbd)] = B(0xae);
        const k = j, l = {};
        l[B(0xc4)] = sequelize_1[C(0xaf)][C(0xc0)], l[C(0xa2) + B(0xa4)] = !![], l[B(0xa0)] = !![], l[C(0x9a)] = ![];
        const m = {};
        m[C(0xc4)] = sequelize_1[C(0xaf)][C(0x9c)], m[B(0x9a)] = ![], m[C(0xba) + 'ue'] = '';
        const n = {};
        n[B(0xc4)] = sequelize_1[C(0xaf)][C(0xb8)], n[C(0x9a)] = ![], n[C(0xba) + 'ue'] = {};
        const o = {};
        o[B(0xc4)] = sequelize_1[B(0xaf)][B(0x9b)], o[B(0x9a)] = ![], o[B(0xba) + 'ue'] = !![];
        const p = {};
        return p[C(0xc4)] = sequelize_1[C(0xaf)][B(0x9c)], p[B(0x9a)] = !![], p[B(0xba) + 'ue'] = null, i[C(0xa9) + 'e'](k[B(0x9e)], {
            'id': l,
            'name': m,
            'flow': n,
            'isActive': o,
            'celularTeste': p,
            'userId': {
                'type': sequelize_1[B(0xaf)][B(0xc0)],
                'references': {
                    'model': k[B(0xbc)],
                    'key': 'id'
                },
                'onUpdate': k[C(0x9f)],
                'onDelete': k[B(0x9f)],
                'allowNull': !![],
                'defaultValue': null
            },
            'tenantId': {
                'type': sequelize_1[C(0xaf)][C(0xc0)],
                'references': {
                    'model': k[C(0xc1)],
                    'key': 'id'
                },
                'onUpdate': k[B(0x9f)],
                'onDelete': k[B(0xbd)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'createdAt': {
                'type': sequelize_1[C(0xaf)][B(0xac)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[C(0xaf)][B(0xac)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const D = A, E = A, e = {};
        e[D(0xb2)] = D(0xb1);
        const f = e;
        return d[D(0x9d)](f[D(0xb2)]);
    }
};