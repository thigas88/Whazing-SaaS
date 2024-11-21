'use strict';
const F = b, G = b;
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(D(0x108)) / (-0x4d5 * 0x4 + 0x1616 + -0x2c1) + -parseInt(E(0x100)) / (-0xf8 * -0x11 + 0x1 * -0x1ba9 + -0xb33 * -0x1) * (parseInt(E(0xe2)) / (-0xfc * -0xe + 0x1 * -0x259b + 0x17d6)) + parseInt(D(0xe9)) / (0x3 * 0x36d + 0x1 * -0xe28 + 0x3e5) + parseInt(D(0x113)) / (-0x1129 + 0x74 * -0x26 + -0x103 * -0x22) * (parseInt(E(0xf1)) / (0xea8 + 0x1e78 * 0x1 + -0x2d1a)) + -parseInt(E(0xfd)) / (0x33c + -0x16e7 + 0x13b2 * 0x1) * (-parseInt(D(0x102)) / (0x3d6 * 0x5 + -0x2285 + -0x1 * -0xf5f)) + parseInt(E(0xed)) / (-0x4 * -0x551 + -0x864 * 0x3 + -0x1 * -0x3f1) * (parseInt(E(0xe6)) / (0x21ca + -0x1 * -0x1963 + 0x3b23 * -0x1)) + -parseInt(D(0x10c)) / (-0x67b + -0x2166 + 0x27ec);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd9315 * -0x1 + 0xeb5 * 0x67 + 0x162fc4));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x525 + 0x4d + 0x92 * 0xa);
        let h = e[f];
        return h;
    }, b(c, d);
}
const C = {};
C[F(0xf4)] = !![], Object[F(0x112) + G(0xdd)](exports, F(0xff), C);
const sequelize_1 = require(G(0x10b));
module[G(0xe4)] = {
    'up': i => {
        const H = F, I = F, j = {};
        j[H(0xec)] = H(0x107), j[I(0xfe)] = H(0xfc), j[I(0xeb)] = H(0x101), j[I(0x10e)] = I(0xee), j[I(0xf8)] = I(0x10a), j[I(0x10d)] = H(0xf6), j[H(0xf3)] = I(0x110), j[I(0xe3)] = H(0x106), j[I(0x103)] = H(0x10f), j[I(0xef)] = I(0xdc), j[H(0xf9)] = I(0xe1), j[H(0xf5)] = H(0xf2);
        const k = j, l = {};
        l[H(0x111)] = sequelize_1[I(0xdf)][I(0xe5)], l[I(0xf0) + I(0xde)] = !![], l[H(0x109)] = !![], l[H(0xe8)] = ![];
        const m = {};
        m[H(0x111)] = sequelize_1[H(0xdf)][I(0xe7)], m[H(0xe8)] = !![], m[H(0x105) + 'ue'] = null;
        const n = {};
        n[I(0x111)] = sequelize_1[H(0xdf)][I(0xe7)], n[I(0xe8)] = !![], n[H(0x105) + 'ue'] = null;
        const o = {};
        o[I(0x111)] = sequelize_1[H(0xdf)][I(0x104)], o[I(0xe8)] = !![], o[H(0x105) + 'ue'] = null;
        const p = {};
        return p[H(0x111)] = sequelize_1[I(0xdf)][H(0xe0)], p[I(0xe8)] = !![], p[H(0x105) + 'ue'] = null, i[H(0xea) + 'e'](k[H(0xec)], {
            'id': l,
            'name': m,
            'description': n,
            'limitDate': o,
            'owner': p,
            'status': {
                'type': sequelize_1[H(0xdf)][I(0xf7)](k[I(0xfe)], k[I(0xeb)], k[I(0x10e)]),
                'allowNull': !![],
                'defaultValue': null
            },
            'priority': {
                'type': sequelize_1[H(0xdf)][I(0xf7)](k[H(0xf8)], k[H(0x10d)], k[I(0xf3)], k[H(0xe3)]),
                'allowNull': !![],
                'defaultValue': null
            },
            'comments': {
                'type': sequelize_1[I(0xdf)][H(0xe7)],
                'allowNull': !![],
                'defaultValue': null
            },
            'tenantId': {
                'type': sequelize_1[I(0xdf)][H(0xe5)],
                'references': {
                    'model': k[H(0x103)],
                    'key': 'id'
                },
                'onUpdate': k[H(0xef)],
                'onDelete': k[I(0xf9)],
                'allowNull': !![]
            },
            'userId': {
                'type': sequelize_1[H(0xdf)][I(0xe5)],
                'references': {
                    'model': k[I(0xf5)],
                    'key': 'id'
                },
                'onUpdate': k[I(0xef)],
                'onDelete': k[H(0xf9)],
                'allowNull': !![]
            },
            'createdAt': {
                'type': sequelize_1[I(0xdf)][I(0x104)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[I(0xdf)][I(0x104)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const J = G, K = F, e = {};
        e[J(0xfb)] = J(0x107);
        const f = e;
        return d[K(0xfa)](f[J(0xfb)]);
    }
};
function a() {
    const L = [
        'none',
        'Tasks',
        '74728bGwRgB',
        'primaryKey',
        'high',
        'sequelize',
        '29397104NNFyjM',
        'bPHQW',
        'hbRpg',
        'Tenants',
        'low',
        'type',
        'defineProp',
        '2366005kejQky',
        'CASCADE',
        'erty',
        'ent',
        'DataTypes',
        'STRING',
        'SET\x20NULL',
        '2014161AnUTJO',
        'PLFiM',
        'exports',
        'INTEGER',
        '10UAEleM',
        'TEXT',
        'allowNull',
        '7187396rSZZLt',
        'createTabl',
        'zMZfz',
        'NBQlj',
        '5536179rDeEMs',
        'finished',
        'chDIV',
        'autoIncrem',
        '6BRlNaf',
        'Users',
        'kSRHD',
        'value',
        'pVtIN',
        'medium',
        'ENUM',
        'qzYBE',
        'OZpYE',
        'dropTable',
        'gYQpW',
        'delayed',
        '28moVVnh',
        'rHhnJ',
        '__esModule',
        '2iEhLAv',
        'pending',
        '2971184XNIzbW',
        'hqcpq',
        'DATE',
        'defaultVal'
    ];
    a = function () {
        return L;
    };
    return a();
}