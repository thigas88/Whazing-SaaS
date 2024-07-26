'use strict';
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(F(0x12c)) / (0x2246 + -0x24b2 + 0x26d) + -parseInt(F(0x153)) / (-0x1e9 + 0x1b67 + -0x197c) + -parseInt(G(0x142)) / (-0x167a + 0x2704 + -0x1087) * (parseInt(G(0x141)) / (0x1 * 0x113f + 0x1db8 + -0x1 * 0x2ef3)) + parseInt(G(0x139)) / (0x806 + 0x1 * -0x4c6 + -0x33b) + parseInt(F(0x14b)) / (-0x7a + 0x764 * -0x3 + -0x2 * -0xb56) * (parseInt(F(0x12d)) / (-0xfd * 0xd + 0x1 * -0xa52 + 0x1732 * 0x1)) + -parseInt(F(0x134)) / (0x3 * 0x66a + -0x22 + -0x1314) * (parseInt(G(0x13f)) / (-0x11 * -0x209 + 0x272 * -0xb + -0x7aa)) + parseInt(G(0x12f)) / (-0x3b + -0xe6b * 0x2 + 0x1d1b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x33a98 * -0x8 + 0x1 * -0x11cdeb + 0x2 * 0x30e79));
function a() {
    const N = [
        '4EutrIA',
        '1176213hEPrrD',
        'defineProp',
        'dropTable',
        'kKirz',
        'value',
        'SET\x20NULL',
        'QuwWt',
        'Sequelize',
        'exports',
        '6EEBhAT',
        'all',
        'gNSpT',
        'TEXT',
        'Users',
        'CASCADE',
        'Whatsapps',
        'INTEGER',
        '848974GlIaPe',
        'ZSsur',
        '__esModule',
        'UUID',
        'DataTypes',
        'gen_random',
        '1544700cmFscn',
        '103670PbtVrg',
        'STRING',
        '26589850MYftoI',
        'literal',
        'jugKl',
        'GnPAu',
        'DATE',
        '40AuHiMM',
        '_uuid()',
        'BOOLEAN',
        'rCjhS',
        'sequelize',
        '6112255uaxxuL',
        'createTabl',
        'ApiConfigs',
        'isUrl',
        'Tenants',
        'LnaSl',
        '1094985waUaQX',
        'erty'
    ];
    a = function () {
        return N;
    };
    return a();
}
const E = {};
E[H(0x146)] = !![], Object[I(0x143) + I(0x140)](exports, H(0x155), E);
const sequelize_1 = require(I(0x138));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x24ef + 0xfa6 + -0x336b);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[I(0x14a)] = {
    'up': f => {
        const J = H, K = H, g = {};
        g[J(0x13e)] = J(0x13b), g[K(0x148)] = J(0x12b) + K(0x135), g[J(0x14d)] = J(0x151), g[K(0x145)] = J(0x150), g[K(0x131)] = K(0x147), g[K(0x132)] = K(0x14f), g[K(0x137)] = K(0x13d);
        const h = g, i = {};
        i[J(0x13c)] = !![];
        const j = {};
        return j[J(0x13c)] = !![], Promise[J(0x14c)]([f[J(0x13a) + 'e'](h[K(0x13e)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[K(0x12a)][K(0x156)],
                    'defaultValue': sequelize_1[K(0x149)][J(0x130)](h[J(0x148)])
                },
                'sessionId': {
                    'type': sequelize_1[J(0x12a)][K(0x152)],
                    'references': {
                        'model': h[K(0x14d)],
                        'key': 'id'
                    },
                    'onUpdate': h[J(0x145)],
                    'onDelete': h[J(0x131)]
                },
                'name': {
                    'type': sequelize_1[J(0x12a)][J(0x12e)],
                    'allowNull': ![],
                    'defaultValue': ''
                },
                'isActive': {
                    'type': sequelize_1[K(0x12a)][J(0x136)],
                    'allowNull': ![],
                    'defaultValue': !![]
                },
                'token': {
                    'type': sequelize_1[J(0x12a)][K(0x12e)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'userId': {
                    'type': sequelize_1[J(0x12a)][J(0x152)],
                    'references': {
                        'model': h[J(0x132)],
                        'key': 'id'
                    },
                    'onUpdate': h[J(0x145)],
                    'onDelete': h[J(0x131)]
                },
                'tenantId': {
                    'type': sequelize_1[K(0x12a)][J(0x152)],
                    'references': {
                        'model': h[J(0x137)],
                        'key': 'id'
                    },
                    'onUpdate': h[K(0x145)],
                    'onDelete': h[J(0x145)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'urlServiceStatus': {
                    'type': sequelize_1[K(0x12a)][K(0x14e)],
                    'allowNull': !![],
                    'defaultValue': null,
                    'validate': i
                },
                'urlMessageStatus': {
                    'type': sequelize_1[J(0x12a)][K(0x14e)],
                    'allowNull': !![],
                    'defaultValue': null,
                    'validate': j
                },
                'createdAt': {
                    'type': sequelize_1[K(0x12a)][J(0x133)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[J(0x12a)][K(0x133)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const L = H, M = I, e = {};
        e[L(0x154)] = M(0x13b);
        const f = e;
        return Promise[M(0x14c)]([d[L(0x144)](f[M(0x154)])]);
    }
};