'use strict';
const z = b, A = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x311 * -0x2 + 0xd1e + -0x5e7 * 0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const F = [
        '2335dzwfzK',
        '64eJxLNo',
        'primaryKey',
        'ent',
        'Users',
        '768338uzaguc',
        'defaultVal',
        '3uRrDvk',
        'DataTypes',
        '572736jemjba',
        'QjiAM',
        'Tenants',
        'exports',
        '1998njMTYF',
        'createTabl',
        'autoIncrem',
        '22mJdSsc',
        '3004rdwZyK',
        '1125190dKRkTg',
        'CASCADE',
        'ChatFlow',
        'DATE',
        'hHUde',
        'STRING',
        'BOOLEAN',
        '99859kXPfFe',
        'defineProp',
        'type',
        'value',
        'sequelize',
        'INTEGER',
        '__esModule',
        'JSON',
        'kwoyk',
        '138321SMPCtT',
        'allowNull',
        'Hyxua',
        'restrict',
        'erty',
        '16576UBKfAS',
        'dropTable',
        'YunIa',
        'vusgE'
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
            const f = parseInt(x(0x19e)) / (-0x3ef + 0x25 * -0x66 + 0x957 * 0x2) + parseInt(y(0x1b5)) / (-0x156b + 0x2 * -0xa94 + 0x2a95) * (-parseInt(x(0x18c)) / (0x241c + 0xf41 + -0x7 * 0x756)) + parseInt(y(0x196)) / (-0x1 * 0x44 + -0xc30 + 0xc78) * (-parseInt(y(0x1b0)) / (-0xc6 + -0x1ef0 + 0x1 * 0x1fbb)) + -parseInt(x(0x192)) / (0x25ce + 0x2653 + 0x1 * -0x4c1b) * (-parseInt(y(0x1ac)) / (-0x5c0 + -0xb17 + -0x11 * -0xfe)) + parseInt(y(0x1b1)) / (-0x1 * -0x113b + -0xb9c + -0x597) * (parseInt(x(0x1a7)) / (-0x10c1 * 0x1 + -0x108f + 0x2159)) + parseInt(y(0x197)) / (0x515 * 0x7 + -0x8 * -0x284 + -0x37a9) * (parseInt(x(0x195)) / (0x1 * 0x92d + -0x1 * -0x1e3d + -0x275f)) + -parseInt(y(0x18e)) / (0x1c8a * -0x1 + -0x1ebb + 0x3b51);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4e1a3 + 0x15fd * -0x7a + 0x1648c8));
const w = {};
w[z(0x1a1)] = !![], Object[A(0x19f) + A(0x1ab)](exports, A(0x1a4), w);
const sequelize_1 = require(A(0x1a2));
module[A(0x191)] = {
    'up': i => {
        const B = z, C = z, j = {};
        j[B(0x1a9)] = B(0x199), j[B(0x1af)] = B(0x1b4), j[C(0x1a6)] = C(0x198), j[C(0x18f)] = B(0x190), j[B(0x1ae)] = B(0x1aa);
        const k = j, l = {};
        l[C(0x1a0)] = sequelize_1[C(0x18d)][B(0x1a3)], l[C(0x194) + B(0x1b3)] = !![], l[C(0x1b2)] = !![], l[C(0x1a8)] = ![];
        const m = {};
        m[C(0x1a0)] = sequelize_1[B(0x18d)][B(0x19c)], m[B(0x1a8)] = ![], m[B(0x18b) + 'ue'] = '';
        const n = {};
        n[C(0x1a0)] = sequelize_1[C(0x18d)][C(0x1a5)], n[C(0x1a8)] = ![], n[B(0x18b) + 'ue'] = {};
        const o = {};
        o[B(0x1a0)] = sequelize_1[C(0x18d)][C(0x19d)], o[C(0x1a8)] = ![], o[B(0x18b) + 'ue'] = !![];
        const p = {};
        return p[B(0x1a0)] = sequelize_1[B(0x18d)][C(0x19c)], p[B(0x1a8)] = !![], p[C(0x18b) + 'ue'] = null, i[B(0x193) + 'e'](k[B(0x1a9)], {
            'id': l,
            'name': m,
            'flow': n,
            'isActive': o,
            'celularTeste': p,
            'userId': {
                'type': sequelize_1[C(0x18d)][B(0x1a3)],
                'references': {
                    'model': k[B(0x1af)],
                    'key': 'id'
                },
                'onUpdate': k[B(0x1a6)],
                'onDelete': k[B(0x1a6)],
                'allowNull': !![],
                'defaultValue': null
            },
            'tenantId': {
                'type': sequelize_1[C(0x18d)][C(0x1a3)],
                'references': {
                    'model': k[C(0x18f)],
                    'key': 'id'
                },
                'onUpdate': k[C(0x1a6)],
                'onDelete': k[B(0x1ae)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'createdAt': {
                'type': sequelize_1[B(0x18d)][C(0x19a)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[B(0x18d)][C(0x19a)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const D = A, E = z, e = {};
        e[D(0x19b)] = D(0x199);
        const f = e;
        return d[E(0x1ad)](f[E(0x19b)]);
    }
};