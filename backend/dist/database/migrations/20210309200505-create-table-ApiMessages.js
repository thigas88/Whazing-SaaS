'use strict';
const N = b, O = b;
(function (c, d) {
    const L = b, M = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(L(0x109)) / (0x2 * -0x1367 + 0x14fe + 0x11d1) * (-parseInt(L(0x108)) / (-0x26f6 + 0x6f1 * -0x3 + 0x3bcb)) + parseInt(L(0x10b)) / (-0x56f + 0x833 + 0x1 * -0x2c1) + -parseInt(M(0x11c)) / (0x6a5 + -0x2 * 0x134f + -0x1af * -0x13) * (parseInt(L(0x104)) / (0x1 * -0x1ffd + -0x12 * -0x20b + -0x4c4)) + -parseInt(M(0x106)) / (-0x1ff9 + -0x5b8 + 0x5 * 0x78b) + parseInt(L(0x125)) / (0x13cf + 0x225b + -0x3623) * (parseInt(M(0x11e)) / (0x5 * -0xac + 0x6d5 + -0x371)) + -parseInt(M(0x10c)) / (0x1fb3 + -0x2e * -0x9d + 0x20 * -0x1df) + parseInt(L(0x11f)) / (-0x933 + -0x15a1 + 0x1ede) * (parseInt(M(0x11a)) / (0x1 * 0xa1f + 0x8 * -0x2c7 + 0xc24));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x82b71 + -0x998f1 + 0x7d14d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1e70 + -0x1d78 + -0x6d * -0x8f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const K = {};
K[N(0x126)] = !![], Object[N(0x119) + O(0x11b)](exports, O(0x113), K);
function a() {
    const T = [
        'DataTypes',
        '__esModule',
        'ZuHHN',
        'Sequelize',
        'INTEGER',
        'notEmpty',
        'exports',
        'defineProp',
        '1749eSlWMN',
        'erty',
        '836LRYDXP',
        'Tenants',
        '451448QVLKvK',
        '4930mbayYt',
        'SET\x20NULL',
        'JSONB',
        '_uuid()',
        'len',
        'Whatsapps',
        '56LvlqfU',
        'value',
        'sequelize',
        'createTabl',
        'CASCADE',
        'jtHJK',
        'aZvkT',
        'dropTable',
        'STRING',
        'all',
        'rgQPW',
        'DATE',
        '3260jZsNrI',
        'gen_random',
        '2309346olpyOJ',
        'bpFGy',
        '439298iHQfvw',
        '1hvHftS',
        'SCICd',
        '1736877gcUulE',
        '3496671LibYli',
        'TEXT',
        'SIjyq',
        'literal',
        'UUID',
        'ApiMessage'
    ];
    a = function () {
        return T;
    };
    return a();
}
const sequelize_1 = require(N(0x127));
module[N(0x118)] = {
    'up': f => {
        const P = N, Q = O, g = {};
        g[P(0x114)] = P(0x111) + 's', g[P(0xfd)] = Q(0x105) + Q(0x122), g[Q(0x107)] = P(0x124), g[Q(0x10a)] = Q(0xfc), g[Q(0x10e)] = Q(0x120), g[P(0xfe)] = P(0x11d);
        const h = g, i = {};
        i[P(0x117)] = !![];
        const j = {};
        return j[Q(0x117)] = !![], j[Q(0x123)] = [
            0x1345 * -0x2 + 0x1 * 0xa5d + 0x1c39,
            0x137e + 0xb75 + -0x1ee5 * 0x1
        ], Promise[P(0x101)]([f[P(0xfb) + 'e'](h[P(0x114)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[Q(0x112)][Q(0x110)],
                    'defaultValue': sequelize_1[P(0x115)][Q(0x10f)](h[P(0xfd)])
                },
                'messageId': {
                    'type': sequelize_1[Q(0x112)][P(0x100)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'externalKey': {
                    'type': sequelize_1[P(0x112)][P(0x100)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'body': {
                    'type': sequelize_1[Q(0x112)][Q(0x10d)],
                    'allowNull': ![],
                    'validate': i
                },
                'ack': {
                    'type': sequelize_1[Q(0x112)][Q(0x116)],
                    'allowNull': ![],
                    'defaultValue': 0x0
                },
                'number': {
                    'type': sequelize_1[P(0x112)][P(0x100)],
                    'allowNull': ![],
                    'validate': j
                },
                'mediaName': {
                    'type': sequelize_1[P(0x112)][P(0x10d)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'timestamp': {
                    'type': sequelize_1[Q(0x112)][Q(0x116)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'sessionId': {
                    'type': sequelize_1[P(0x112)][Q(0x116)],
                    'references': {
                        'model': h[Q(0x107)],
                        'key': 'id'
                    },
                    'onUpdate': h[Q(0x10a)],
                    'onDelete': h[P(0x10e)]
                },
                'tenantId': {
                    'type': sequelize_1[Q(0x112)][P(0x116)],
                    'references': {
                        'model': h[P(0xfe)],
                        'key': 'id'
                    },
                    'onUpdate': h[P(0x10a)],
                    'onDelete': h[Q(0x10a)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'messageWA': {
                    'type': sequelize_1[P(0x112)][P(0x121)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'apiConfig': {
                    'type': sequelize_1[Q(0x112)][Q(0x121)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'createdAt': {
                    'type': sequelize_1[P(0x112)][P(0x103)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[P(0x112)][Q(0x103)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const R = N, S = N, e = {};
        e[R(0x102)] = S(0x111) + 's';
        const f = e;
        return Promise[R(0x101)]([d[S(0xff)](f[S(0x102)])]);
    }
};