'use strict';
function a() {
    const V = [
        'rations',
        '215316ogODFn',
        'erty',
        '1959568TjNdIw',
        '14pfMLlR',
        'DATE',
        '1089KoyGXV',
        '5DShEgP',
        'kvXEw',
        '455387yogymA',
        'autoIncrem',
        'DataTypes',
        'primaryKey',
        'QueueInteg',
        'exports',
        'STRING',
        'sequelize',
        'value',
        'allowNull',
        '6gNvtRo',
        '1733166ArhkRi',
        '2406948KerqxT',
        '__esModule',
        '365638XVZtlE',
        'NDLmS',
        'createTabl',
        'tcSMF',
        'SET\x20NULL',
        'type',
        'INTEGER',
        'CASCADE',
        'defineProp',
        'daOBo',
        'dropTable',
        'LSwyN',
        '159970OfAwco',
        'Tenants',
        'TEXT',
        'ent'
    ];
    a = function () {
        return V;
    };
    return a();
}
const P = b, Q = b;
(function (c, d) {
    const N = b, O = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(N(0x171)) / (0x1 * -0x114b + 0x26a * 0xe + -0x1080) + -parseInt(N(0x158)) / (0x298 * 0xb + 0x492 + -0x2118) * (-parseInt(N(0x154)) / (-0x11a5 + 0x699 * 0x1 + 0xb0f)) + parseInt(N(0x156)) / (0x1 * 0x1444 + 0x4a3 * -0x8 + 0x58 * 0x31) * (-parseInt(N(0x16f)) / (0x337 * 0x9 + -0x23cb + 0x6e1)) + -parseInt(O(0x169)) / (0x1 * 0xbbf + 0x8d2 + -0x6d9 * 0x3) * (parseInt(N(0x16c)) / (0xb2d * -0x1 + -0x1a2e + -0x16 * -0x1b3)) + -parseInt(O(0x16b)) / (-0x2485 * -0x1 + 0x2481 + -0x48fe) + -parseInt(N(0x155)) / (-0x134 * -0x1f + 0x1373 * -0x1 + -0x11d0) + -parseInt(O(0x164)) / (0x1c56 + -0x446 + -0x1806) * (-parseInt(O(0x16e)) / (-0x1c * -0x109 + 0x34 * -0xb + -0x1ab5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x9c47e + 0x1 * -0x777f7 + -0x2 * -0xb8a21));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2528 + 0x5 * 0x3b3 + -0x365c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const M = {};
M[P(0x152)] = !![], Object[Q(0x160) + P(0x16a)](exports, P(0x157), M);
const sequelize_1 = require(Q(0x151));
module[Q(0x14f)] = {
    'up': k => {
        const R = P, S = Q, l = {};
        l[R(0x170)] = S(0x14e) + S(0x168), l[S(0x159)] = R(0x165), l[R(0x163)] = R(0x15f), l[S(0x161)] = S(0x15c);
        const m = l, n = {};
        n[S(0x15d)] = sequelize_1[S(0x14c)][S(0x15e)], n[S(0x14b) + R(0x167)] = !![], n[S(0x14d)] = !![], n[R(0x153)] = ![];
        const o = {};
        o[R(0x15d)] = sequelize_1[S(0x14c)][S(0x166)], o[R(0x153)] = !![];
        const p = {};
        p[R(0x15d)] = sequelize_1[S(0x14c)][S(0x166)], p[R(0x153)] = !![];
        const q = {};
        q[R(0x15d)] = sequelize_1[S(0x14c)][S(0x166)], q[R(0x153)] = !![];
        const r = {};
        r[R(0x15d)] = sequelize_1[R(0x14c)][R(0x166)], r[R(0x153)] = !![];
        const s = {};
        s[S(0x15d)] = sequelize_1[S(0x14c)][S(0x166)], s[R(0x153)] = !![];
        const t = {};
        return t[S(0x15d)] = sequelize_1[R(0x14c)][S(0x166)], t[R(0x153)] = !![], k[R(0x15a) + 'e'](m[R(0x170)], {
            'id': n,
            'type': o,
            'name': p,
            'projectName': q,
            'jsonContent': r,
            'urlN8N': s,
            'language': t,
            'createdAt': {
                'type': sequelize_1[S(0x14c)][S(0x16d)](0xcb7 + -0x1ff3 + -0xaa * -0x1d),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[R(0x14c)][R(0x16d)](-0x46c * 0x5 + -0x6e + 0x1690),
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[R(0x14c)][S(0x15e)],
                'references': {
                    'model': m[R(0x159)],
                    'key': 'id'
                },
                'onUpdate': m[S(0x163)],
                'onDelete': m[S(0x161)],
                'allowNull': !![]
            },
            'typebotSlug': {
                'type': sequelize_1[S(0x14c)][R(0x150)],
                'allowNull': !![]
            },
            'typebotExpires': {
                'type': sequelize_1[S(0x14c)][S(0x15e)],
                'allowNull': !![],
                'defaultValue': 0x0
            },
            'typebotKeywordFinish': {
                'type': sequelize_1[S(0x14c)][S(0x150)],
                'allowNull': !![]
            },
            'typebotUnknownMessage': {
                'type': sequelize_1[R(0x14c)][R(0x150)],
                'allowNull': !![]
            },
            'typebotDelayMessage': {
                'type': sequelize_1[S(0x14c)][R(0x15e)],
                'allowNull': !![],
                'defaultValue': 0x3e8
            },
            'typebotKeywordRestart': {
                'type': sequelize_1[R(0x14c)][R(0x150)],
                'allowNull': !![]
            },
            'typebotRestartMessage': {
                'type': sequelize_1[R(0x14c)][R(0x150)],
                'allowNull': !![]
            }
        });
    },
    'down': d => {
        const T = Q, U = P, e = {};
        e[T(0x15b)] = U(0x14e) + T(0x168);
        const f = e;
        return d[U(0x162)](f[U(0x15b)]);
    }
};