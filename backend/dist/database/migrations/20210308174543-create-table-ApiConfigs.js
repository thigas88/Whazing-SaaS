'use strict';
function a() {
    const N = [
        '1140JNoYip',
        'Sequelize',
        'sequelize',
        'value',
        'SET\x20NULL',
        '4210224fqFlQO',
        'literal',
        'Tenants',
        'cmhyr',
        'CASCADE',
        '72162OmfEtU',
        'Users',
        'gen_random',
        'TEXT',
        '233592bZUKGe',
        '3DGGSrS',
        '4862620soVWsh',
        'wGTEf',
        'DataTypes',
        'isUrl',
        'defineProp',
        'ApiConfigs',
        'UUID',
        'INTEGER',
        'BOOLEAN',
        '1915384UYoqmS',
        '_uuid()',
        '__esModule',
        'STRING',
        '3aoYBws',
        'qftdN',
        'all',
        'Whatsapps',
        'JhLDO',
        'IcJSY',
        'QxoKv',
        '2444320lZAqpj',
        '7RMSZtp',
        'dropTable',
        '7755341jvyZUN',
        'fjvFq',
        'createTabl',
        'exports',
        '24mfLIAG',
        'DATE',
        'BUyKW',
        'erty'
    ];
    a = function () {
        return N;
    };
    return a();
}
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(F(0x17e)) / (-0x1b * 0x93 + -0xfd3 + -0x1f55 * -0x1) * (-parseInt(F(0x19e)) / (-0x119c * 0x1 + 0x6 * 0x551 + 0x4 * -0x392)) + parseInt(F(0x19f)) / (-0x17 * -0xad + 0x1 * 0xecb + -0x1e53) * (parseInt(F(0x185)) / (-0xb99 + 0xcde + -0x141)) + parseInt(G(0x1a0)) / (-0x35 + 0x1912 + 0x1a8 * -0xf) + -parseInt(F(0x195)) / (-0x7b * -0x21 + 0xa67 + -0x1a3c) * (parseInt(G(0x186)) / (-0x1073 + -0x24fc + -0x2 * -0x1abb)) + -parseInt(G(0x17a)) / (-0x1 * 0x1319 + 0x213b + -0xe1a) + parseInt(G(0x19a)) / (-0x593 + 0xef * -0x14 + -0x378 * -0x7) * (parseInt(F(0x190)) / (-0x1 * 0x22db + -0x1c2a + 0x3f0f)) + parseInt(F(0x188)) / (0x3 * -0x118 + -0xf * 0x5b + 0x454 * 0x2) * (-parseInt(F(0x18c)) / (0x94c + 0x2509 * 0x1 + -0x2e49));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xeecba + 0x6e6 * -0xb4 + 0x1b5b49));
const E = {};
E[H(0x193)] = !![], Object[I(0x1a4) + I(0x18f)](exports, I(0x17c), E);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x18e1 * -0x1 + -0x1 * 0xf86 + -0x1 * 0x7e4);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(H(0x192));
module[H(0x18b)] = {
    'up': f => {
        const J = I, K = H, g = {};
        g[J(0x1a1)] = K(0x1a5), g[J(0x198)] = K(0x19c) + K(0x17b), g[K(0x182)] = J(0x181), g[J(0x189)] = J(0x199), g[J(0x17f)] = K(0x194), g[K(0x183)] = K(0x19b), g[J(0x18e)] = K(0x197);
        const h = g, i = {};
        i[J(0x1a3)] = !![];
        const j = {};
        return j[J(0x1a3)] = !![], Promise[J(0x180)]([f[K(0x18a) + 'e'](h[K(0x1a1)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[K(0x1a2)][K(0x177)],
                    'defaultValue': sequelize_1[K(0x191)][J(0x196)](h[J(0x198)])
                },
                'sessionId': {
                    'type': sequelize_1[J(0x1a2)][K(0x178)],
                    'references': {
                        'model': h[K(0x182)],
                        'key': 'id'
                    },
                    'onUpdate': h[J(0x189)],
                    'onDelete': h[J(0x17f)]
                },
                'name': {
                    'type': sequelize_1[K(0x1a2)][K(0x17d)],
                    'allowNull': ![],
                    'defaultValue': ''
                },
                'isActive': {
                    'type': sequelize_1[J(0x1a2)][K(0x179)],
                    'allowNull': ![],
                    'defaultValue': !![]
                },
                'token': {
                    'type': sequelize_1[K(0x1a2)][K(0x17d)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'userId': {
                    'type': sequelize_1[J(0x1a2)][K(0x178)],
                    'references': {
                        'model': h[J(0x183)],
                        'key': 'id'
                    },
                    'onUpdate': h[J(0x189)],
                    'onDelete': h[J(0x17f)]
                },
                'tenantId': {
                    'type': sequelize_1[J(0x1a2)][K(0x178)],
                    'references': {
                        'model': h[K(0x18e)],
                        'key': 'id'
                    },
                    'onUpdate': h[K(0x189)],
                    'onDelete': h[K(0x189)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'urlServiceStatus': {
                    'type': sequelize_1[K(0x1a2)][J(0x19d)],
                    'allowNull': !![],
                    'defaultValue': null,
                    'validate': i
                },
                'urlMessageStatus': {
                    'type': sequelize_1[J(0x1a2)][K(0x19d)],
                    'allowNull': !![],
                    'defaultValue': null,
                    'validate': j
                },
                'createdAt': {
                    'type': sequelize_1[J(0x1a2)][K(0x18d)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[K(0x1a2)][J(0x18d)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const L = I, M = I, e = {};
        e[L(0x184)] = M(0x1a5);
        const f = e;
        return Promise[M(0x180)]([d[M(0x187)](f[M(0x184)])]);
    }
};