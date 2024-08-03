'use strict';
const N = b, O = b;
(function (c, d) {
    const L = b, M = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(L(0x1e5)) / (0x6e1 * -0x1 + -0xce * 0x4 + 0xa1a) + parseInt(L(0x1de)) / (-0xcbd + 0x1b16 + -0xe57) + parseInt(M(0x1d8)) / (-0x378 * 0x7 + -0x682 + -0x1ecd * -0x1) + parseInt(L(0x1ce)) / (-0x9 * 0x38b + 0x1e87 + 0x160) + parseInt(L(0x1df)) / (-0x19c0 + 0x21a9 + -0x5 * 0x194) * (-parseInt(M(0x1cb)) / (-0x1 * 0x8db + -0xbab * -0x2 + 0xe75 * -0x1)) + -parseInt(L(0x1d6)) / (-0x1dcb + -0xc6a + -0x13e * -0x22) + parseInt(M(0x1e2)) / (0x1aa1 * -0x1 + -0x1bde + -0x1a7 * -0x21) * (parseInt(M(0x1d3)) / (0x115 * -0x9 + -0x595 + 0xf5b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x82099 * -0x1 + 0x143e5 + 0xbdc71));
const K = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x11 * 0x1c1 + -0x1fd * -0xf + 0x1c1);
        let h = e[f];
        return h;
    }, b(c, d);
}
K[N(0x1e1)] = !![], Object[N(0x1c3) + O(0x1e3)](exports, N(0x1c4), K);
const sequelize_1 = require(N(0x1e0));
module[O(0x1d5)] = {
    'up': f => {
        const P = O, Q = N, g = {};
        g[P(0x1c7)] = Q(0x1cc) + 's', g[Q(0x1dd)] = Q(0x1e4) + P(0x1c9), g[Q(0x1db)] = P(0x1dc), g[P(0x1ed)] = Q(0x1d4), g[Q(0x1e8)] = Q(0x1d2), g[P(0x1ca)] = P(0x1da);
        const h = g, i = {};
        i[Q(0x1e9)] = !![];
        const j = {};
        return j[P(0x1e9)] = !![], j[P(0x1e7)] = [
            -0x2 * 0xa43 + 0x7 * 0x491 + -0xb65,
            0x1 * 0x1ab5 + -0x628 + -0x9 * 0x247
        ], Promise[P(0x1eb)]([f[Q(0x1cd) + 'e'](h[Q(0x1c7)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[Q(0x1d1)][Q(0x1e6)],
                    'defaultValue': sequelize_1[Q(0x1d0)][Q(0x1d9)](h[P(0x1dd)])
                },
                'messageId': {
                    'type': sequelize_1[P(0x1d1)][Q(0x1ea)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'externalKey': {
                    'type': sequelize_1[P(0x1d1)][Q(0x1ea)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'body': {
                    'type': sequelize_1[P(0x1d1)][P(0x1ec)],
                    'allowNull': ![],
                    'validate': i
                },
                'ack': {
                    'type': sequelize_1[Q(0x1d1)][Q(0x1c5)],
                    'allowNull': ![],
                    'defaultValue': 0x0
                },
                'number': {
                    'type': sequelize_1[P(0x1d1)][Q(0x1ea)],
                    'allowNull': ![],
                    'validate': j
                },
                'mediaName': {
                    'type': sequelize_1[P(0x1d1)][Q(0x1ec)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'timestamp': {
                    'type': sequelize_1[P(0x1d1)][Q(0x1c5)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'sessionId': {
                    'type': sequelize_1[Q(0x1d1)][P(0x1c5)],
                    'references': {
                        'model': h[Q(0x1db)],
                        'key': 'id'
                    },
                    'onUpdate': h[P(0x1ed)],
                    'onDelete': h[Q(0x1e8)]
                },
                'tenantId': {
                    'type': sequelize_1[P(0x1d1)][Q(0x1c5)],
                    'references': {
                        'model': h[Q(0x1ca)],
                        'key': 'id'
                    },
                    'onUpdate': h[Q(0x1ed)],
                    'onDelete': h[Q(0x1ed)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'messageWA': {
                    'type': sequelize_1[Q(0x1d1)][Q(0x1c6)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'apiConfig': {
                    'type': sequelize_1[P(0x1d1)][P(0x1c6)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'createdAt': {
                    'type': sequelize_1[P(0x1d1)][Q(0x1d7)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[P(0x1d1)][Q(0x1d7)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const R = O, S = N, e = {};
        e[R(0x1cf)] = R(0x1cc) + 's';
        const f = e;
        return Promise[S(0x1eb)]([d[S(0x1c8)](f[S(0x1cf)])]);
    }
};
function a() {
    const T = [
        'yQVwU',
        'notEmpty',
        'STRING',
        'all',
        'TEXT',
        'WYduy',
        'defineProp',
        '__esModule',
        'INTEGER',
        'JSONB',
        'fbitF',
        'dropTable',
        '_uuid()',
        'RRySb',
        '126xiGZRy',
        'ApiMessage',
        'createTabl',
        '1478912FMePML',
        'vpLMB',
        'Sequelize',
        'DataTypes',
        'SET\x20NULL',
        '18POOdoA',
        'CASCADE',
        'exports',
        '3097521mIczIU',
        'DATE',
        '1136895iwhVbP',
        'literal',
        'Tenants',
        'xkbeS',
        'Whatsapps',
        'oIeMg',
        '2412qqNIKf',
        '95495tFtoGg',
        'sequelize',
        'value',
        '905704kUxfBX',
        'erty',
        'gen_random',
        '194870WutxFL',
        'UUID',
        'len'
    ];
    a = function () {
        return T;
    };
    return a();
}