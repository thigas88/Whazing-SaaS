'use strict';
const F = b, G = b;
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(D(0x8b)) / (0x52 * -0x5 + -0x67 * 0x3d + 0x1a26 * 0x1) + parseInt(E(0x82)) / (-0x1ec9 + -0x25d + 0x2128) + -parseInt(D(0x71)) / (-0x123f + 0x1 * 0x2491 + -0x6d * 0x2b) + -parseInt(D(0x7c)) / (0xa35 * 0x1 + 0x2395 + 0x3 * -0xf42) + -parseInt(E(0x77)) / (0x2516 + 0xa3d + 0x2 * -0x17a7) + parseInt(D(0x6d)) / (0x1823 * -0x1 + 0x929 + -0x20 * -0x78) * (parseInt(E(0x66)) / (-0x1172 * 0x2 + 0x6 * -0x50b + 0x47 * 0xeb)) + parseInt(E(0x7e)) / (0x1f49 + 0x24c2 + 0x4403 * -0x1) * (parseInt(D(0x68)) / (0xa1d * -0x2 + 0x570 + 0xed3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0xef8ff + -0xbb96a + 0x28b45c));
const C = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1a2 * 0x5 + -0x2444 + 0x2cd3);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const L = [
        'addIndex',
        'idx_txid',
        'allowNull',
        'Tenants',
        'INTEGER',
        'primaryKey',
        'lbDIN',
        'IBXmu',
        '119354wggHkZ',
        'FLOAT',
        'xcIur',
        '7dbDloX',
        'TEXT',
        '10817316Fgxmia',
        'defineProp',
        'MWxCv',
        'Invoices',
        'ent',
        '6675330LOHMXH',
        'DATE',
        'DataTypes',
        'value',
        '5096361KaTMqh',
        'createTabl',
        'tieNK',
        '__esModule',
        'exports',
        'dropTable',
        '3940515VYvdIO',
        'txId',
        'LJOGj',
        'CASCADE',
        'autoIncrem',
        '6506104tiqvWm',
        'type',
        '24ejHGXI',
        'STRING',
        'erty',
        'sequelize',
        '387476LuTkMK'
    ];
    a = function () {
        return L;
    };
    return a();
}
C[F(0x70)] = !![], Object[G(0x69) + G(0x80)](exports, F(0x74), C);
const sequelize_1 = require(F(0x81));
module[F(0x75)] = {
    'up': k => {
        const H = F, I = F, l = {};
        l[H(0x8a)] = I(0x6b), l[I(0x6a)] = I(0x86), l[I(0x73)] = I(0x7a), l[I(0x79)] = H(0x78), l[H(0x65)] = I(0x84);
        const m = l, n = {};
        n[H(0x7d)] = sequelize_1[I(0x6f)][H(0x87)], n[H(0x7b) + I(0x6c)] = !![], n[H(0x88)] = !![], n[I(0x85)] = ![];
        const o = {};
        o[H(0x7d)] = sequelize_1[I(0x6f)][H(0x7f)];
        const p = {};
        p[H(0x7d)] = sequelize_1[I(0x6f)][H(0x7f)];
        const q = {};
        q[H(0x7d)] = sequelize_1[I(0x6f)][I(0x8c)];
        const r = {};
        r[H(0x7d)] = sequelize_1[H(0x6f)][H(0x6e)], r[I(0x85)] = ![];
        const s = {};
        s[I(0x7d)] = sequelize_1[I(0x6f)][I(0x6e)], s[I(0x85)] = ![];
        const t = {};
        t[H(0x7d)] = sequelize_1[H(0x6f)][I(0x7f)];
        return k[H(0x72) + 'e'](m[H(0x8a)], {
            'id': n,
            'detail': o,
            'status': p,
            'value': q,
            'createdAt': r,
            'updatedAt': s,
            'dueDate': t,
            'tenantId': {
                'type': sequelize_1[I(0x6f)][I(0x87)],
                'references': {
                    'model': m[H(0x6a)],
                    'key': 'id'
                },
                'onUpdate': m[I(0x73)],
                'onDelete': m[I(0x73)]
            },
            'txId': { 'type': sequelize_1[I(0x6f)][H(0x7f)] },
            'payGw': { 'type': sequelize_1[H(0x6f)][H(0x7f)] },
            'payGwData': { 'type': sequelize_1[H(0x6f)][I(0x67)] }
        });
        k[H(0x83)](m[I(0x8a)], [m[H(0x79)]], {
            'name': m[I(0x65)],
            'unique': ![]
        });
    },
    'down': d => {
        const J = F, K = F, e = {};
        e[J(0x89)] = J(0x6b);
        const f = e;
        return d[K(0x76)](f[J(0x89)]);
    }
};