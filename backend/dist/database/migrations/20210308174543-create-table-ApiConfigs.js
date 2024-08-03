'use strict';
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(F(0x175)) / (0xac9 * -0x2 + -0x24b5 * -0x1 + -0xf22) + parseInt(F(0x185)) / (-0x1 * -0x16ca + 0x532 + -0x1bfa) * (parseInt(F(0x196)) / (0x62 * 0x13 + -0x59 * 0x20 + 0x3dd)) + parseInt(G(0x18f)) / (0xf72 + 0x1 * 0x22be + -0x34 * 0xf7) + -parseInt(F(0x17e)) / (0x6f5 * 0x1 + 0x24e6 + 0xb5 * -0x3e) + -parseInt(G(0x19d)) / (-0x6 * -0x63d + 0x2a * -0x58 + 0x2 * -0xb7c) * (-parseInt(G(0x180)) / (0x1 * 0x6b3 + -0x395 + 0x1 * -0x317)) + parseInt(F(0x179)) / (-0x93 * 0x43 + 0xc77 + 0x65 * 0x42) + parseInt(F(0x191)) / (0x1d55 * -0x1 + 0x1b53 * 0x1 + -0x20b * -0x1) * (-parseInt(G(0x17b)) / (0x1 * -0x146a + -0x1eb9 * 0x1 + 0x332d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x12121 * 0x1 + 0x52b10 + -0x1cf95));
function a() {
    const N = [
        '28RRiorh',
        'value',
        'DataTypes',
        'NxTmo',
        '__esModule',
        '458LhAZNi',
        'createTabl',
        'sequelize',
        'EQjia',
        'STRING',
        'all',
        'erty',
        'ApiConfigs',
        'SET\x20NULL',
        'TEXT',
        '1727100sfLCRR',
        'DATE',
        '5131179kSlmcW',
        'INTEGER',
        'isUrl',
        'defineProp',
        'UUID',
        '7023JenNIO',
        'XrrLl',
        'Whatsapps',
        'dropTable',
        'literal',
        'QsRuP',
        'gen_random',
        '655920RzfoSr',
        'exports',
        'KJBwe',
        'CASCADE',
        'LKEac',
        '227551vlixnK',
        'ESgEa',
        'Sequelize',
        'SxXIr',
        '823896aibVid',
        'Tenants',
        '10dnEuua',
        'BOOLEAN',
        '_uuid()',
        '2082025EVLUFm',
        'Users'
    ];
    a = function () {
        return N;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x22ea * 0x1 + -0x8f * -0x25 + 0x3623 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const E = {};
E[H(0x181)] = !![], Object[I(0x194) + H(0x18b)](exports, I(0x184), E);
const sequelize_1 = require(I(0x187));
module[H(0x19e)] = {
    'up': f => {
        const J = H, K = I, g = {};
        g[J(0x197)] = J(0x18c), g[K(0x19b)] = K(0x19c) + K(0x17d), g[K(0x174)] = J(0x198), g[J(0x178)] = K(0x173), g[J(0x188)] = J(0x18d), g[K(0x183)] = K(0x17f), g[K(0x176)] = K(0x17a);
        const h = g, i = {};
        i[J(0x193)] = !![];
        const j = {};
        return j[J(0x193)] = !![], Promise[K(0x18a)]([f[K(0x186) + 'e'](h[K(0x197)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[K(0x182)][J(0x195)],
                    'defaultValue': sequelize_1[J(0x177)][J(0x19a)](h[J(0x19b)])
                },
                'sessionId': {
                    'type': sequelize_1[K(0x182)][J(0x192)],
                    'references': {
                        'model': h[J(0x174)],
                        'key': 'id'
                    },
                    'onUpdate': h[J(0x178)],
                    'onDelete': h[J(0x188)]
                },
                'name': {
                    'type': sequelize_1[J(0x182)][J(0x189)],
                    'allowNull': ![],
                    'defaultValue': ''
                },
                'isActive': {
                    'type': sequelize_1[J(0x182)][K(0x17c)],
                    'allowNull': ![],
                    'defaultValue': !![]
                },
                'token': {
                    'type': sequelize_1[J(0x182)][J(0x189)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'userId': {
                    'type': sequelize_1[J(0x182)][J(0x192)],
                    'references': {
                        'model': h[J(0x183)],
                        'key': 'id'
                    },
                    'onUpdate': h[K(0x178)],
                    'onDelete': h[K(0x188)]
                },
                'tenantId': {
                    'type': sequelize_1[J(0x182)][K(0x192)],
                    'references': {
                        'model': h[K(0x176)],
                        'key': 'id'
                    },
                    'onUpdate': h[J(0x178)],
                    'onDelete': h[K(0x178)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'urlServiceStatus': {
                    'type': sequelize_1[K(0x182)][K(0x18e)],
                    'allowNull': !![],
                    'defaultValue': null,
                    'validate': i
                },
                'urlMessageStatus': {
                    'type': sequelize_1[J(0x182)][K(0x18e)],
                    'allowNull': !![],
                    'defaultValue': null,
                    'validate': j
                },
                'createdAt': {
                    'type': sequelize_1[K(0x182)][K(0x190)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[K(0x182)][K(0x190)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const L = I, M = H, e = {};
        e[L(0x172)] = L(0x18c);
        const f = e;
        return Promise[M(0x18a)]([d[L(0x199)](f[L(0x172)])]);
    }
};