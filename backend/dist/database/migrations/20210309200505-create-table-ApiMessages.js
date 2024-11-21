'use strict';
const N = b, O = b;
(function (c, d) {
    const L = b, M = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(L(0x13d)) / (-0x2099 + 0xad4 + 0x3a1 * 0x6) + -parseInt(M(0x147)) / (-0x5 * -0x1ed + -0x11cf + 0x830) + parseInt(M(0x159)) / (0x23a1 + 0x3 * -0x703 + -0x1 * 0xe95) * (-parseInt(L(0x156)) / (0x1 * -0x121d + -0x15cf + 0x27f0)) + parseInt(L(0x14a)) / (0x13eb + 0x7d3 + 0x1 * -0x1bb9) + -parseInt(M(0x139)) / (0x1f0b + -0x11b0 + -0x1 * 0xd55) * (-parseInt(L(0x150)) / (0x21a1 + 0xae5 * 0x2 + -0x3764)) + parseInt(L(0x13f)) / (-0x2cd + -0x1 * -0x6a9 + 0x2 * -0x1ea) + -parseInt(L(0x142)) / (0xf1 * -0xa + -0x2233 + 0x2 * 0x15d3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x21f6a * 0x6 + 0x5c22 + -0x143939 * -0x1));
function a() {
    const T = [
        'TEXT',
        'pMBOe',
        'notEmpty',
        'lvQxB',
        'STRING',
        'wSLEw',
        '4438074owqNle',
        'dropTable',
        'literal',
        'JSONB',
        '491157sNaozW',
        '__esModule',
        '5332448gHOZrY',
        'value',
        'Tenants',
        '5267970DnSoJa',
        '_uuid()',
        'INTEGER',
        'obBFC',
        'PZCPZ',
        '166056hxJYjj',
        'all',
        'Sequelize',
        '1710440KFJyoo',
        'SET\x20NULL',
        'len',
        'createTabl',
        'UUID',
        'gen_random',
        '7vCEQaX',
        'DataTypes',
        'sequelize',
        'zckzk',
        'exports',
        'defineProp',
        '4kbVXUo',
        'HydTI',
        'ApiMessage',
        '223611wublVP',
        'Whatsapps',
        'DATE',
        'CASCADE',
        'erty'
    ];
    a = function () {
        return T;
    };
    return a();
}
const K = {};
K[N(0x140)] = !![], Object[O(0x155) + O(0x15d)](exports, N(0x13e), K);
const sequelize_1 = require(N(0x152));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1a99 + 0x375 + -0x1cd6);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[N(0x154)] = {
    'up': f => {
        const P = N, Q = O, g = {};
        g[P(0x15f)] = P(0x158) + 's', g[P(0x146)] = Q(0x14f) + Q(0x143), g[Q(0x157)] = Q(0x15a), g[Q(0x161)] = Q(0x15c), g[P(0x145)] = Q(0x14b), g[Q(0x138)] = P(0x141);
        const h = g, i = {};
        i[P(0x160)] = !![];
        const j = {};
        return j[Q(0x160)] = !![], j[Q(0x14c)] = [
            0x1963 + -0x1979 * 0x1 + 0x2 * 0x11,
            0x1 * -0x1864 + 0x15fb + -0x1 * -0x277
        ], Promise[P(0x148)]([f[Q(0x14d) + 'e'](h[Q(0x15f)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[Q(0x151)][Q(0x14e)],
                    'defaultValue': sequelize_1[P(0x149)][Q(0x13b)](h[Q(0x146)])
                },
                'messageId': {
                    'type': sequelize_1[P(0x151)][P(0x162)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'externalKey': {
                    'type': sequelize_1[P(0x151)][Q(0x162)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'body': {
                    'type': sequelize_1[Q(0x151)][P(0x15e)],
                    'allowNull': ![],
                    'validate': i
                },
                'ack': {
                    'type': sequelize_1[Q(0x151)][Q(0x144)],
                    'allowNull': ![],
                    'defaultValue': 0x0
                },
                'number': {
                    'type': sequelize_1[P(0x151)][Q(0x162)],
                    'allowNull': ![],
                    'validate': j
                },
                'mediaName': {
                    'type': sequelize_1[Q(0x151)][Q(0x15e)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'timestamp': {
                    'type': sequelize_1[P(0x151)][Q(0x144)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'sessionId': {
                    'type': sequelize_1[Q(0x151)][P(0x144)],
                    'references': {
                        'model': h[P(0x157)],
                        'key': 'id'
                    },
                    'onUpdate': h[P(0x161)],
                    'onDelete': h[Q(0x145)]
                },
                'tenantId': {
                    'type': sequelize_1[Q(0x151)][P(0x144)],
                    'references': {
                        'model': h[Q(0x138)],
                        'key': 'id'
                    },
                    'onUpdate': h[P(0x161)],
                    'onDelete': h[P(0x161)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'messageWA': {
                    'type': sequelize_1[P(0x151)][Q(0x13c)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'apiConfig': {
                    'type': sequelize_1[P(0x151)][P(0x13c)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'createdAt': {
                    'type': sequelize_1[Q(0x151)][P(0x15b)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[P(0x151)][Q(0x15b)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const R = N, S = N, e = {};
        e[R(0x153)] = S(0x158) + 's';
        const f = e;
        return Promise[R(0x148)]([d[S(0x13a)](f[R(0x153)])]);
    }
};