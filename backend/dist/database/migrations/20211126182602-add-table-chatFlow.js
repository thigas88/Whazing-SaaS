'use strict';
const z = b, A = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * 0x580 + 0x17ff * -0x1 + -0x49d * -0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0xeb)) / (0xd81 + -0x14 * 0x199 + 0x1274) + -parseInt(y(0xd9)) / (0x17ad + -0x2541 + -0x2 * -0x6cb) + parseInt(y(0xf4)) / (-0x1 * -0x5ba + -0x1d2d + 0x1776) + -parseInt(x(0xf9)) / (0x1f0e + -0x15 * -0x75 + -0x67 * 0x65) + parseInt(y(0xe0)) / (-0xb * -0x355 + -0x1 * -0x275 + -0x2717) + -parseInt(x(0xdd)) / (-0x43 * 0x3e + -0xb * 0xb3 + -0xe3 * -0x1b) * (parseInt(y(0xf0)) / (-0xa85 + 0x1d43 * -0x1 + 0x81 * 0x4f)) + -parseInt(x(0xee)) / (-0x143 * 0x1 + -0x1a4b + 0x6 * 0x499);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x29b8f + 0x25 * -0xf07 + -0x27 * -0x3229));
const w = {};
function a() {
    const F = [
        'CASCADE',
        'INTEGER',
        'autoIncrem',
        '191214lKvCeW',
        'dropTable',
        'Users',
        'allowNull',
        '1164jhYAHJ',
        'DataTypes',
        'ToomQ',
        '514170kKSdZJ',
        'Tenants',
        'BOOLEAN',
        'value',
        'aFZoX',
        'createTabl',
        'erty',
        'restrict',
        'type',
        'defaultVal',
        'ChatFlow',
        '218010JwXygW',
        'HDVDM',
        'primaryKey',
        '16936xcWFdk',
        'Aqpsk',
        '11837jPKMVX',
        'ent',
        'defineProp',
        'YRNEj',
        '1013622xouiaC',
        'STRING',
        '__esModule',
        'sequelize',
        'tLnnE',
        '181500kYhaBE',
        'JSON',
        'DATE',
        'exports'
    ];
    a = function () {
        return F;
    };
    return a();
}
w[z(0xe3)] = !![], Object[z(0xf2) + z(0xe6)](exports, z(0xf6), w);
const sequelize_1 = require(z(0xf7));
module[z(0xfc)] = {
    'up': i => {
        const B = A, C = z, j = {};
        j[B(0xe4)] = B(0xea), j[C(0xf3)] = C(0xdb), j[B(0xdf)] = B(0xfd), j[B(0xf8)] = C(0xe1), j[C(0xec)] = B(0xe7);
        const k = j, l = {};
        l[B(0xe8)] = sequelize_1[B(0xde)][B(0xfe)], l[C(0xd8) + C(0xf1)] = !![], l[B(0xed)] = !![], l[C(0xdc)] = ![];
        const m = {};
        m[B(0xe8)] = sequelize_1[B(0xde)][B(0xf5)], m[B(0xdc)] = ![], m[B(0xe9) + 'ue'] = '';
        const n = {};
        n[C(0xe8)] = sequelize_1[B(0xde)][B(0xfa)], n[B(0xdc)] = ![], n[B(0xe9) + 'ue'] = {};
        const o = {};
        o[B(0xe8)] = sequelize_1[C(0xde)][B(0xe2)], o[B(0xdc)] = ![], o[B(0xe9) + 'ue'] = !![];
        const p = {};
        return p[C(0xe8)] = sequelize_1[C(0xde)][B(0xf5)], p[B(0xdc)] = !![], p[B(0xe9) + 'ue'] = null, i[C(0xe5) + 'e'](k[C(0xe4)], {
            'id': l,
            'name': m,
            'flow': n,
            'isActive': o,
            'celularTeste': p,
            'userId': {
                'type': sequelize_1[B(0xde)][C(0xfe)],
                'references': {
                    'model': k[C(0xf3)],
                    'key': 'id'
                },
                'onUpdate': k[C(0xdf)],
                'onDelete': k[B(0xdf)],
                'allowNull': !![],
                'defaultValue': null
            },
            'tenantId': {
                'type': sequelize_1[B(0xde)][B(0xfe)],
                'references': {
                    'model': k[C(0xf8)],
                    'key': 'id'
                },
                'onUpdate': k[C(0xdf)],
                'onDelete': k[B(0xec)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'createdAt': {
                'type': sequelize_1[B(0xde)][C(0xfb)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[B(0xde)][B(0xfb)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const D = A, E = z, e = {};
        e[D(0xef)] = E(0xea);
        const f = e;
        return d[D(0xda)](f[E(0xef)]);
    }
};