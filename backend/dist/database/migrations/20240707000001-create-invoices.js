'use strict';
const F = b, G = b;
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(D(0x1c3)) / (0x1 * -0x2276 + 0x563 * 0x4 + -0x1 * -0xceb) + -parseInt(D(0x1c8)) / (-0x1 * 0x55 + 0xa31 + -0x2 * 0x4ed) + parseInt(D(0x1c9)) / (-0x1df * 0x9 + 0x563 + 0xb77) * (parseInt(D(0x1c7)) / (0x50e * 0x5 + -0x2378 + -0xa36 * -0x1)) + parseInt(D(0x1c6)) / (-0x2161 + -0x1974 + 0x3ada) * (-parseInt(D(0x1b3)) / (-0x1062 + 0x1aa9 + -0x20d * 0x5)) + -parseInt(E(0x1b5)) / (-0x1906 + 0x5 * -0x564 + 0x3401 * 0x1) + parseInt(D(0x1b2)) / (-0x6 * -0x35 + -0x2b1 + 0x1 * 0x17b) + parseInt(D(0x1bb)) / (-0x323 * -0x2 + -0x1b40 + 0x1503) * (parseInt(E(0x1b6)) / (-0x1cbc + 0xac5 + 0x1201));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5a383 + -0x11 * -0xb6d2 + 0x45076));
const C = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1340 + 0x1 * -0xd4f + 0x2237);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const L = [
        '159867NuFFLU',
        'ent',
        'type',
        'idx_txid',
        'erty',
        'ozCwi',
        '__esModule',
        'DATE',
        '1324477flDJqJ',
        'DataTypes',
        'TEXT',
        '5925955PCxUbH',
        '16036pxCZRY',
        '1035874ZIeWub',
        '417WVtQUQ',
        'addIndex',
        'dropTable',
        'Invoices',
        'autoIncrem',
        'defineProp',
        'STRING',
        'zOGGP',
        'FLOAT',
        'allowNull',
        'YsYcv',
        'exports',
        'vpuSS',
        'uaJsr',
        'CASCADE',
        'INTEGER',
        'value',
        'Tenants',
        '641488RoxnnB',
        '6jAMxGq',
        'txId',
        '828555yFzvvT',
        '320UfVNrG',
        'primaryKey',
        'eALiD',
        'sequelize',
        'createTabl'
    ];
    a = function () {
        return L;
    };
    return a();
}
C[F(0x1b0)] = !![], Object[F(0x1ce) + G(0x1bf)](exports, G(0x1c1), C);
const sequelize_1 = require(G(0x1b9));
module[F(0x1ab)] = {
    'up': k => {
        const H = F, I = F, l = {};
        l[H(0x1ad)] = H(0x1cc), l[I(0x1b8)] = H(0x1b1), l[I(0x1d0)] = H(0x1ae), l[I(0x1aa)] = H(0x1b4), l[H(0x1ac)] = H(0x1be);
        const m = l, n = {};
        n[H(0x1bd)] = sequelize_1[H(0x1c4)][H(0x1af)], n[H(0x1cd) + H(0x1bc)] = !![], n[H(0x1b7)] = !![], n[I(0x1a9)] = ![];
        const o = {};
        o[I(0x1bd)] = sequelize_1[I(0x1c4)][H(0x1cf)];
        const p = {};
        p[I(0x1bd)] = sequelize_1[H(0x1c4)][I(0x1cf)];
        const q = {};
        q[H(0x1bd)] = sequelize_1[I(0x1c4)][H(0x1a8)];
        const r = {};
        r[H(0x1bd)] = sequelize_1[I(0x1c4)][I(0x1c2)], r[I(0x1a9)] = ![];
        const s = {};
        s[I(0x1bd)] = sequelize_1[H(0x1c4)][H(0x1c2)], s[I(0x1a9)] = ![];
        const t = {};
        t[H(0x1bd)] = sequelize_1[I(0x1c4)][I(0x1cf)];
        return k[H(0x1ba) + 'e'](m[I(0x1ad)], {
            'id': n,
            'detail': o,
            'status': p,
            'value': q,
            'createdAt': r,
            'updatedAt': s,
            'dueDate': t,
            'tenantId': {
                'type': sequelize_1[I(0x1c4)][I(0x1af)],
                'references': {
                    'model': m[I(0x1b8)],
                    'key': 'id'
                },
                'onUpdate': m[H(0x1d0)],
                'onDelete': m[I(0x1d0)]
            },
            'txId': { 'type': sequelize_1[H(0x1c4)][I(0x1cf)] },
            'payGw': { 'type': sequelize_1[I(0x1c4)][H(0x1cf)] },
            'payGwData': { 'type': sequelize_1[I(0x1c4)][I(0x1c5)] }
        });
        k[H(0x1ca)](m[H(0x1ad)], [m[I(0x1aa)]], {
            'name': m[I(0x1ac)],
            'unique': ![]
        });
    },
    'down': d => {
        const J = G, K = F, e = {};
        e[J(0x1c0)] = J(0x1cc);
        const f = e;
        return d[K(0x1cb)](f[J(0x1c0)]);
    }
};