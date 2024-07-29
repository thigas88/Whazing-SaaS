'use strict';
function a() {
    const L = [
        'EDlzS',
        'NLZUk',
        'type',
        'erty',
        'DATE',
        'autoIncrem',
        '1225158PKuiTz',
        'Tenants',
        'primaryKey',
        'DataTypes',
        'ent',
        '8gkFhoZ',
        '438ZouZUk',
        'INTEGER',
        'ihBrP',
        'value',
        'sequelize',
        'DqYkc',
        'exports',
        'addIndex',
        'Invoices',
        'ZKabe',
        'allowNull',
        '3901068aCMLGD',
        '4621043gsksyu',
        '__esModule',
        'createTabl',
        '18515XAEAfI',
        'TEXT',
        'FLOAT',
        '1045815tYOCNx',
        'STRING',
        'CASCADE',
        'idx_txid',
        'defineProp',
        'idiJo',
        '2gnQowE',
        'txId',
        '2339829zWpWvL',
        'dropTable',
        '17211870YYXEmO'
    ];
    a = function () {
        return L;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x255e + 0x1d9 * -0xd + 0x2d * 0x161);
        let h = e[f];
        return h;
    }, b(c, d);
}
const F = b, G = b;
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(D(0xae)) / (0x4a * -0x67 + -0x1b74 + 0x393b) + -parseInt(E(0xcc)) / (0x1dd5 + 0x726 + -0x24f9) * (-parseInt(D(0xc6)) / (-0x62f + 0x2 * -0x10bf + 0x4f6 * 0x8)) + parseInt(E(0xbf)) / (0x551 * -0x3 + -0x11e3 + 0x21da) + parseInt(D(0xc3)) / (0x4fd * 0x4 + -0x4 * -0x315 + -0x2043) * (-parseInt(D(0xb4)) / (-0x2054 + -0x2f * 0xa2 + 0x3e18)) + -parseInt(D(0xc0)) / (-0x2649 + 0x2 * 0xa13 + 0x122a) * (parseInt(E(0xb3)) / (-0x4db * -0x3 + -0x1 * 0xe35 + -0x54)) + -parseInt(D(0xce)) / (0x264c + -0x1 * -0x2112 + -0x4755) + parseInt(E(0xd0)) / (-0x21d5 + 0x1445 + -0x2 * -0x6cd);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7 * 0x27886 + 0x2 * 0x6837f + -0x14b7dc));
const C = {};
C[F(0xb7)] = !![], Object[F(0xca) + F(0xab)](exports, F(0xc1), C);
const sequelize_1 = require(G(0xb8));
module[F(0xba)] = {
    'up': k => {
        const H = F, I = G, l = {};
        l[H(0xcb)] = H(0xbc), l[H(0xbd)] = I(0xaf), l[I(0xb6)] = I(0xc8), l[H(0xd1)] = I(0xcd), l[I(0xb9)] = I(0xc9);
        const m = l, n = {};
        n[I(0xaa)] = sequelize_1[H(0xb1)][I(0xb5)], n[H(0xad) + H(0xb2)] = !![], n[I(0xb0)] = !![], n[I(0xbe)] = ![];
        const o = {};
        o[I(0xaa)] = sequelize_1[I(0xb1)][I(0xc7)];
        const p = {};
        p[H(0xaa)] = sequelize_1[H(0xb1)][H(0xc7)];
        const q = {};
        q[H(0xaa)] = sequelize_1[I(0xb1)][H(0xc5)];
        const r = {};
        r[I(0xaa)] = sequelize_1[H(0xb1)][H(0xac)], r[I(0xbe)] = ![];
        const s = {};
        s[I(0xaa)] = sequelize_1[H(0xb1)][H(0xac)], s[I(0xbe)] = ![];
        const t = {};
        t[H(0xaa)] = sequelize_1[H(0xb1)][H(0xc7)];
        return k[I(0xc2) + 'e'](m[I(0xcb)], {
            'id': n,
            'detail': o,
            'status': p,
            'value': q,
            'createdAt': r,
            'updatedAt': s,
            'dueDate': t,
            'tenantId': {
                'type': sequelize_1[H(0xb1)][H(0xb5)],
                'references': {
                    'model': m[H(0xbd)],
                    'key': 'id'
                },
                'onUpdate': m[H(0xb6)],
                'onDelete': m[H(0xb6)]
            },
            'txId': { 'type': sequelize_1[I(0xb1)][H(0xc7)] },
            'payGw': { 'type': sequelize_1[H(0xb1)][I(0xc7)] },
            'payGwData': { 'type': sequelize_1[H(0xb1)][H(0xc4)] }
        });
        k[I(0xbb)](m[I(0xcb)], [m[H(0xd1)]], {
            'name': m[I(0xb9)],
            'unique': ![]
        });
    },
    'down': d => {
        const J = F, K = G, e = {};
        e[J(0xd2)] = K(0xbc);
        const f = e;
        return d[J(0xcf)](f[K(0xd2)]);
    }
};