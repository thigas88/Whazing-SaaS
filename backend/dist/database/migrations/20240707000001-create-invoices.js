'use strict';
function a() {
    const L = [
        '538872VRasum',
        'erty',
        'primaryKey',
        'txId',
        'dropTable',
        'FLOAT',
        'idx_txid',
        'defineProp',
        'autoIncrem',
        '43710LUaxDL',
        'createTabl',
        'TECIu',
        'FYIuG',
        'Invoices',
        'exports',
        '3817100JPgCwT',
        'CASCADE',
        '665MjUAtW',
        'Tenants',
        '3dJDadI',
        'DATE',
        '740268PxqVLS',
        'sequelize',
        '124688dhqXUu',
        'value',
        'egzZJ',
        'wTifM',
        '95278orjKRF',
        'allowNull',
        'ent',
        'TEXT',
        '2817432ezbZNn',
        'type',
        'INTEGER',
        'vqlLA',
        'STRING',
        'VEKHj',
        '__esModule',
        'addIndex',
        'DataTypes'
    ];
    a = function () {
        return L;
    };
    return a();
}
const F = b, G = b;
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(D(0x14f)) / (-0x518 + 0x20b2 + -0x1b99) + parseInt(E(0x142)) / (-0x281 * -0xb + 0x51 * 0x7 + -0x440 * 0x7) + -parseInt(D(0x13a)) / (-0x327 + 0xc23 + -0x8f9) * (parseInt(E(0x13c)) / (-0xd * -0xfb + 0xacd * 0x3 + -0x2d22)) + -parseInt(D(0x138)) / (-0x295 * -0x3 + 0x1b * -0x112 + 0x10f * 0x14) * (-parseInt(E(0x130)) / (0x19 * 0x18 + -0x1e33 + 0x1be1)) + -parseInt(D(0x136)) / (0x21fc + -0x1053 + -0x11a2) + parseInt(D(0x13e)) / (0x1 * 0x6ef + -0x10b5 + -0x1f6 * -0x5) + -parseInt(E(0x146)) / (0x46 + 0xae * -0xb + -0x73d * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6a75d + 0xe198d + 0x1 * -0xcb407));
const C = {};
C[F(0x13f)] = !![], Object[G(0x12e) + G(0x128)](exports, G(0x14c), C);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x534 + 0x12da + -0x1a * 0x7b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(G(0x13d));
module[F(0x135)] = {
    'up': k => {
        const H = G, I = F, l = {};
        l[H(0x133)] = H(0x134), l[I(0x149)] = H(0x139), l[I(0x141)] = I(0x137), l[I(0x140)] = H(0x12a), l[I(0x14b)] = I(0x12d);
        const m = l, n = {};
        n[I(0x147)] = sequelize_1[H(0x14e)][H(0x148)], n[I(0x12f) + I(0x144)] = !![], n[I(0x129)] = !![], n[H(0x143)] = ![];
        const o = {};
        o[I(0x147)] = sequelize_1[H(0x14e)][I(0x14a)];
        const p = {};
        p[I(0x147)] = sequelize_1[H(0x14e)][I(0x14a)];
        const q = {};
        q[H(0x147)] = sequelize_1[H(0x14e)][H(0x12c)];
        const r = {};
        r[H(0x147)] = sequelize_1[H(0x14e)][H(0x13b)], r[H(0x143)] = ![];
        const s = {};
        s[H(0x147)] = sequelize_1[I(0x14e)][I(0x13b)], s[I(0x143)] = ![];
        const t = {};
        t[I(0x147)] = sequelize_1[I(0x14e)][H(0x14a)];
        return k[I(0x131) + 'e'](m[I(0x133)], {
            'id': n,
            'detail': o,
            'status': p,
            'value': q,
            'createdAt': r,
            'updatedAt': s,
            'dueDate': t,
            'tenantId': {
                'type': sequelize_1[H(0x14e)][H(0x148)],
                'references': {
                    'model': m[H(0x149)],
                    'key': 'id'
                },
                'onUpdate': m[I(0x141)],
                'onDelete': m[H(0x141)]
            },
            'txId': { 'type': sequelize_1[H(0x14e)][H(0x14a)] },
            'payGw': { 'type': sequelize_1[H(0x14e)][I(0x14a)] },
            'payGwData': { 'type': sequelize_1[H(0x14e)][H(0x145)] }
        });
        k[I(0x14d)](m[H(0x133)], [m[I(0x140)]], {
            'name': m[H(0x14b)],
            'unique': ![]
        });
    },
    'down': d => {
        const J = G, K = F, e = {};
        e[J(0x132)] = J(0x134);
        const f = e;
        return d[J(0x12b)](f[K(0x132)]);
    }
};