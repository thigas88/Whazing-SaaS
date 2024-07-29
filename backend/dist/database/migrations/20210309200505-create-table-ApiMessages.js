'use strict';
const N = b, O = b;
(function (c, d) {
    const L = b, M = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(L(0x7d)) / (0x1 * -0x241 + -0x910 + 0xb52) + -parseInt(L(0xa0)) / (0x1e9 * 0xc + 0x16ec + -0x16eb * 0x2) + parseInt(L(0x84)) / (0x7 * -0x52 + -0xcf7 * -0x2 + 0x13 * -0x13f) + parseInt(M(0x9c)) / (-0x21fd * 0x1 + 0x2078 + 0x189 * 0x1) + parseInt(M(0x99)) / (0xee9 * -0x1 + 0x1 * -0x742 + 0x1630) * (parseInt(M(0x97)) / (-0x1c9f * -0x1 + -0x196 * -0x8 + 0x27 * -0x10f)) + -parseInt(M(0x88)) / (0x125e + 0x2e3 * 0x9 + -0x3 * 0xec6) * (-parseInt(M(0x83)) / (0x1ec4 + -0x3b6 + -0x3 * 0x902)) + parseInt(M(0x93)) / (-0x15d * 0xd + 0xc67 + 0x55b) * (-parseInt(M(0x80)) / (0x228a * 0x1 + -0x829 * 0x1 + -0x1a57));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x14f3c0 * 0x1 + -0x4cd * -0x443 + -0x1eea7c));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd00 + 0x91a + 0x460);
        let h = e[f];
        return h;
    }, b(c, d);
}
const K = {};
K[N(0xa3)] = !![], Object[N(0x7c) + O(0x7e)](exports, N(0x9e), K);
function a() {
    const T = [
        'INTEGER',
        '1519845AJViOd',
        'len',
        'fGepb',
        '3225028wWuCFG',
        'DataTypes',
        '__esModule',
        'ApiMessage',
        '1967044sDaUbW',
        'MUSKM',
        'SET\x20NULL',
        'value',
        'EXRFY',
        'UUID',
        'Whatsapps',
        '_uuid()',
        'defineProp',
        '15739oyupyF',
        'erty',
        'uWPso',
        '106980ITOrEt',
        'STRING',
        'literal',
        '55416oHOykE',
        '1651125kmpBXS',
        'dropTable',
        'TEXT',
        'gen_random',
        '1043tFEkts',
        'notEmpty',
        'Tenants',
        'JSONB',
        'createTabl',
        'sequelize',
        'DhMVW',
        'CASCADE',
        'Sequelize',
        'exports',
        'DATE',
        '846DWUkvB',
        'yMHMM',
        'ExnxE',
        'all',
        '6ZsgYfk'
    ];
    a = function () {
        return T;
    };
    return a();
}
const sequelize_1 = require(O(0x8d));
module[N(0x91)] = {
    'up': f => {
        const P = N, Q = O, g = {};
        g[P(0x94)] = P(0x9f) + 's', g[Q(0xa4)] = Q(0x87) + P(0x7b), g[P(0x95)] = Q(0x7a), g[P(0x8e)] = Q(0x8f), g[P(0xa1)] = P(0xa2), g[P(0x9b)] = P(0x8a);
        const h = g, i = {};
        i[Q(0x89)] = !![];
        const j = {};
        return j[Q(0x89)] = !![], j[P(0x9a)] = [
            0x1 * 0x215f + 0x16e8 + 0x5 * -0xb3f,
            0x1 * -0xfc4 + 0x1884 + -0x8b2
        ], Promise[Q(0x96)]([f[P(0x8c) + 'e'](h[Q(0x94)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[P(0x9d)][Q(0xa5)],
                    'defaultValue': sequelize_1[P(0x90)][P(0x82)](h[P(0xa4)])
                },
                'messageId': {
                    'type': sequelize_1[Q(0x9d)][Q(0x81)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'externalKey': {
                    'type': sequelize_1[Q(0x9d)][P(0x81)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'body': {
                    'type': sequelize_1[P(0x9d)][P(0x86)],
                    'allowNull': ![],
                    'validate': i
                },
                'ack': {
                    'type': sequelize_1[Q(0x9d)][P(0x98)],
                    'allowNull': ![],
                    'defaultValue': 0x0
                },
                'number': {
                    'type': sequelize_1[Q(0x9d)][P(0x81)],
                    'allowNull': ![],
                    'validate': j
                },
                'mediaName': {
                    'type': sequelize_1[P(0x9d)][Q(0x86)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'timestamp': {
                    'type': sequelize_1[Q(0x9d)][Q(0x98)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'sessionId': {
                    'type': sequelize_1[P(0x9d)][P(0x98)],
                    'references': {
                        'model': h[Q(0x95)],
                        'key': 'id'
                    },
                    'onUpdate': h[P(0x8e)],
                    'onDelete': h[Q(0xa1)]
                },
                'tenantId': {
                    'type': sequelize_1[P(0x9d)][Q(0x98)],
                    'references': {
                        'model': h[Q(0x9b)],
                        'key': 'id'
                    },
                    'onUpdate': h[P(0x8e)],
                    'onDelete': h[Q(0x8e)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'messageWA': {
                    'type': sequelize_1[P(0x9d)][P(0x8b)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'apiConfig': {
                    'type': sequelize_1[P(0x9d)][Q(0x8b)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'createdAt': {
                    'type': sequelize_1[P(0x9d)][P(0x92)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[P(0x9d)][P(0x92)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const R = O, S = N, e = {};
        e[R(0x7f)] = R(0x9f) + 's';
        const f = e;
        return Promise[S(0x96)]([d[R(0x85)](f[R(0x7f)])]);
    }
};