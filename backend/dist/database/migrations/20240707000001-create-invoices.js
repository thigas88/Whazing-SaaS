'use strict';
const F = b, G = b;
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(D(0x12f)) / (0x760 + 0x6b * 0x5d + -0x2e3e) + -parseInt(E(0x134)) / (0x1 * 0x1079 + 0x7a * -0x20 + -0x137) + parseInt(D(0x11f)) / (0x5 * 0x547 + 0x17 * 0x35 + 0x1f23 * -0x1) + parseInt(E(0x119)) / (0xeb * 0x5 + 0x1e09 + 0x376 * -0xa) + -parseInt(E(0x12b)) / (-0xfe0 + 0x91 * 0x5 + 0xd10) * (-parseInt(E(0x11a)) / (0x12d2 + 0x1cb0 + 0xfd4 * -0x3)) + parseInt(E(0x133)) / (0x1439 + 0xb14 * -0x1 + -0x48f * 0x2) * (-parseInt(D(0x131)) / (-0x211 + -0x3 * 0x2d7 + 0xa9e)) + -parseInt(E(0x126)) / (0x323 * -0x6 + 0x5 * -0xd3 + -0xad * -0x22);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x925 * -0x149 + 0x19ec29 + -0xdaff));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x2680 + 0x1a73 + -0x1 * -0xd26);
        let h = e[f];
        return h;
    }, b(c, d);
}
const C = {};
function a() {
    const L = [
        'lKyqa',
        'vTMMT',
        'allowNull',
        'addIndex',
        'INTEGER',
        'ent',
        '1764819WbvJWX',
        'CASCADE',
        'DATE',
        'primaryKey',
        'Invoices',
        '7565avpwzR',
        'Tenants',
        'value',
        'dropTable',
        '1141313RWNIhD',
        'ijIoO',
        '8DuRaYD',
        'eNDXx',
        '11796449IaHACu',
        '3156530nuBwJf',
        'XxVCf',
        'createTabl',
        'idx_txid',
        'DataTypes',
        'TEXT',
        'exports',
        '__esModule',
        'txId',
        'autoIncrem',
        'defineProp',
        'sequelize',
        'type',
        '6951532UegJAE',
        '4566HIQIOk',
        'OLtaa',
        'STRING',
        'FLOAT',
        'erty',
        '904737JqdvlA'
    ];
    a = function () {
        return L;
    };
    return a();
}
C[F(0x12d)] = !![], Object[F(0x13e) + F(0x11e)](exports, G(0x13b), C);
const sequelize_1 = require(F(0x13f));
module[F(0x13a)] = {
    'up': k => {
        const H = G, I = G, l = {};
        l[H(0x11b)] = H(0x12a), l[H(0x121)] = H(0x12c), l[I(0x132)] = H(0x127), l[H(0x120)] = I(0x13c), l[I(0x130)] = H(0x137);
        const m = l, n = {};
        n[H(0x140)] = sequelize_1[H(0x138)][H(0x124)], n[H(0x13d) + H(0x125)] = !![], n[H(0x129)] = !![], n[I(0x122)] = ![];
        const o = {};
        o[I(0x140)] = sequelize_1[H(0x138)][I(0x11c)];
        const p = {};
        p[H(0x140)] = sequelize_1[H(0x138)][H(0x11c)];
        const q = {};
        q[I(0x140)] = sequelize_1[H(0x138)][H(0x11d)];
        const r = {};
        r[H(0x140)] = sequelize_1[I(0x138)][I(0x128)], r[H(0x122)] = ![];
        const s = {};
        s[H(0x140)] = sequelize_1[H(0x138)][H(0x128)], s[H(0x122)] = ![];
        const t = {};
        t[H(0x140)] = sequelize_1[H(0x138)][H(0x11c)];
        return k[H(0x136) + 'e'](m[H(0x11b)], {
            'id': n,
            'detail': o,
            'status': p,
            'value': q,
            'createdAt': r,
            'updatedAt': s,
            'dueDate': t,
            'tenantId': {
                'type': sequelize_1[H(0x138)][I(0x124)],
                'references': {
                    'model': m[H(0x121)],
                    'key': 'id'
                },
                'onUpdate': m[I(0x132)],
                'onDelete': m[H(0x132)]
            },
            'txId': { 'type': sequelize_1[I(0x138)][I(0x11c)] },
            'payGw': { 'type': sequelize_1[I(0x138)][H(0x11c)] },
            'payGwData': { 'type': sequelize_1[I(0x138)][I(0x139)] }
        });
        k[H(0x123)](m[I(0x11b)], [m[H(0x120)]], {
            'name': m[I(0x130)],
            'unique': ![]
        });
    },
    'down': d => {
        const J = F, K = G, e = {};
        e[J(0x135)] = J(0x12a);
        const f = e;
        return d[J(0x12e)](f[K(0x135)]);
    }
};