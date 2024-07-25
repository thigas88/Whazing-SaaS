'use strict';
function a() {
    const N = [
        'UUID',
        'TppPd',
        'exports',
        'ApiConfigs',
        'DataTypes',
        '2vqCgeU',
        'Users',
        'Tenants',
        '562017QytuMw',
        'INTEGER',
        'gen_random',
        'TEXT',
        'SET\x20NULL',
        'CASCADE',
        'ydAce',
        'dropTable',
        'BOOLEAN',
        '2664957CUrEfo',
        'createTabl',
        'anHQj',
        '12546144jXwYSv',
        '6102579OnecCH',
        'literal',
        'jfJMc',
        '300gZZjrY',
        'all',
        'rCiyG',
        'isUrl',
        '_uuid()',
        'usDkv',
        '8968600qFSVUA',
        'sequelize',
        '2075256UYoNrW',
        '__esModule',
        'Sequelize',
        'STRING',
        'defineProp',
        'value',
        'DATE',
        '82272UXRpRP',
        'Whatsapps',
        'HbYry',
        'erty',
        'acpZo'
    ];
    a = function () {
        return N;
    };
    return a();
}
const H = b, I = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1b43 + -0x19 * 0xf7 + 0x341f);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(F(0xbf)) / (0x1347 + 0xfb0 * -0x2 + -0x1 * -0xc1a) + -parseInt(F(0xe8)) / (0x7d6 + -0x2f1 + -0x4e3) * (-parseInt(F(0xc8)) / (0x19da + -0xcc2 + -0x1 * 0xd15)) + -parseInt(F(0xd7)) / (-0x867 + -0x309 + -0x4 * -0x2dd) + parseInt(F(0xcf)) / (0x24ec + -0x13bb + -0x112c) * (-parseInt(F(0xde)) / (-0x101a + 0x16df + -0x6bf)) + -parseInt(G(0xcc)) / (0x11e9 + -0x147f + -0x1 * -0x29d) + parseInt(F(0xd5)) / (0x1b18 + 0x1135 * -0x1 + -0x9db) + parseInt(G(0xcb)) / (0xe13 + 0x1 * 0x1177 + -0x1f81);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1cc9d * 0x8 + -0x177d5 * 0x8 + 0x6ef1e));
const E = {};
E[H(0xdc)] = !![], Object[I(0xdb) + H(0xe1)](exports, H(0xd8), E);
const sequelize_1 = require(H(0xd6));
module[H(0xe5)] = {
    'up': f => {
        const J = I, K = H, g = {};
        g[J(0xe0)] = J(0xe6), g[J(0xc5)] = J(0xc1) + J(0xd3), g[K(0xe2)] = K(0xdf), g[J(0xe4)] = J(0xc4), g[K(0xca)] = J(0xc3), g[K(0xd4)] = J(0xbd), g[K(0xce)] = J(0xbe);
        const h = g, i = {};
        i[K(0xd2)] = !![];
        const j = {};
        return j[J(0xd2)] = !![], Promise[J(0xd0)]([f[J(0xc9) + 'e'](h[J(0xe0)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[K(0xe7)][J(0xe3)],
                    'defaultValue': sequelize_1[J(0xd9)][J(0xcd)](h[K(0xc5)])
                },
                'sessionId': {
                    'type': sequelize_1[K(0xe7)][J(0xc0)],
                    'references': {
                        'model': h[K(0xe2)],
                        'key': 'id'
                    },
                    'onUpdate': h[J(0xe4)],
                    'onDelete': h[K(0xca)]
                },
                'name': {
                    'type': sequelize_1[K(0xe7)][K(0xda)],
                    'allowNull': ![],
                    'defaultValue': ''
                },
                'isActive': {
                    'type': sequelize_1[K(0xe7)][J(0xc7)],
                    'allowNull': ![],
                    'defaultValue': !![]
                },
                'token': {
                    'type': sequelize_1[K(0xe7)][K(0xda)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'userId': {
                    'type': sequelize_1[J(0xe7)][J(0xc0)],
                    'references': {
                        'model': h[J(0xd4)],
                        'key': 'id'
                    },
                    'onUpdate': h[J(0xe4)],
                    'onDelete': h[J(0xca)]
                },
                'tenantId': {
                    'type': sequelize_1[K(0xe7)][K(0xc0)],
                    'references': {
                        'model': h[K(0xce)],
                        'key': 'id'
                    },
                    'onUpdate': h[J(0xe4)],
                    'onDelete': h[K(0xe4)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'urlServiceStatus': {
                    'type': sequelize_1[K(0xe7)][J(0xc2)],
                    'allowNull': !![],
                    'defaultValue': null,
                    'validate': i
                },
                'urlMessageStatus': {
                    'type': sequelize_1[K(0xe7)][K(0xc2)],
                    'allowNull': !![],
                    'defaultValue': null,
                    'validate': j
                },
                'createdAt': {
                    'type': sequelize_1[J(0xe7)][J(0xdd)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[K(0xe7)][J(0xdd)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const L = H, M = I, e = {};
        e[L(0xd1)] = M(0xe6);
        const f = e;
        return Promise[M(0xd0)]([d[L(0xc6)](f[L(0xd1)])]);
    }
};