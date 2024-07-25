'use strict';
const z = b, A = b;
function a() {
    const F = [
        'all',
        'exports',
        'MlgfU',
        'Tenants',
        '15453CnMJeG',
        'value',
        '__esModule',
        'aDGaU',
        '14kVGwUo',
        'allowNull',
        'CASCADE',
        'dropTable',
        'type',
        '195uIPxzq',
        '1039916iodEaY',
        'BOOLEAN',
        '796568OzVVMK',
        'erty',
        '611576IBUNDY',
        'jIUZK',
        'BMLuP',
        'ent',
        'createTabl',
        '2810Yjaizf',
        'DATE',
        'Tags',
        'defaultVal',
        '22108AdfWOK',
        'STRING',
        'sequelize',
        'SET\x20NULL',
        'defineProp',
        'JIMtV',
        'primaryKey',
        'Users',
        '325cPVpOU',
        '1787214jQtaov',
        'RuXUr',
        'autoIncrem',
        'INTEGER',
        '89598AmIQZp',
        'DataTypes'
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
            const f = parseInt(x(0x1f1)) / (-0x1cd3 * -0x1 + -0x3 * 0xb56 + -0x53 * -0x10) + -parseInt(y(0x1ed)) / (-0x12e * 0x3 + -0xd50 + -0x10dc * -0x1) + -parseInt(y(0x1ec)) / (0x614 + 0x1a2 + -0x49 * 0x1b) * (-parseInt(x(0x1fa)) / (0x1f5b + 0x568 + -0x24bf)) + -parseInt(y(0x1d8)) / (0x37e * 0x1 + -0x1c7 * -0x1 + 0x1c0 * -0x3) * (-parseInt(y(0x1dd)) / (0x25b + 0x83b + -0xa90)) + parseInt(y(0x1e7)) / (-0x1f0d + 0x709 + 0x180b) * (-parseInt(y(0x1ef)) / (0x356 + 0x2694 + -0x29e2)) + parseInt(x(0x1e3)) / (-0x168b * 0x1 + -0x61f + 0x991 * 0x3) * (-parseInt(x(0x1f6)) / (0x25ed + -0x6 * -0x3d1 + -0x3cc9)) + -parseInt(y(0x1d9)) / (0x13 * -0x167 + 0x363 + -0x4a9 * -0x5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x11294e + 0x2d8 * 0x3cb + 0xd * -0x178d9));
const w = {};
w[z(0x1e4)] = !![], Object[A(0x1d4) + A(0x1f0)](exports, z(0x1e5), w);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x8 * -0x11b + 0xe65 + -0x156c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(z(0x1d2));
module[A(0x1e0)] = {
    'up': h => {
        const B = z, C = A, i = {};
        i[B(0x1e1)] = B(0x1f8), i[B(0x1e6)] = C(0x1d7), i[C(0x1da)] = C(0x1e9), i[B(0x1f3)] = C(0x1d3), i[B(0x1f2)] = C(0x1e2);
        const j = i, k = {};
        k[C(0x1eb)] = sequelize_1[C(0x1de)][B(0x1dc)], k[C(0x1d6)] = !![], k[C(0x1db) + B(0x1f4)] = !![], k[C(0x1e8)] = ![];
        const l = {};
        l[B(0x1eb)] = sequelize_1[C(0x1de)][B(0x1d1)], l[B(0x1e8)] = ![];
        const m = {};
        m[B(0x1eb)] = sequelize_1[B(0x1de)][B(0x1ee)], m[B(0x1f9) + 'ue'] = !![], m[B(0x1e8)] = ![];
        const n = {};
        return n[C(0x1eb)] = sequelize_1[B(0x1de)][C(0x1d1)], n[C(0x1e8)] = ![], Promise[B(0x1df)]([h[C(0x1f5) + 'e'](j[C(0x1e1)], {
                'id': k,
                'tag': l,
                'isActive': m,
                'color': n,
                'userId': {
                    'type': sequelize_1[B(0x1de)][B(0x1dc)],
                    'references': {
                        'model': j[B(0x1e6)],
                        'key': 'id'
                    },
                    'onUpdate': j[C(0x1da)],
                    'onDelete': j[B(0x1f3)]
                },
                'tenantId': {
                    'type': sequelize_1[C(0x1de)][C(0x1dc)],
                    'references': {
                        'model': j[B(0x1f2)],
                        'key': 'id'
                    },
                    'onUpdate': j[C(0x1da)],
                    'onDelete': j[B(0x1da)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'createdAt': {
                    'type': sequelize_1[B(0x1de)][C(0x1f7)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[B(0x1de)][C(0x1f7)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const D = z, E = A, e = {};
        e[D(0x1d5)] = D(0x1f8);
        const f = e;
        return Promise[D(0x1df)]([d[E(0x1ea)](f[D(0x1d5)])]);
    }
};