'use strict';
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(F(0x92)) / (0x80 + 0x11df + 0x125e * -0x1) * (-parseInt(G(0x78)) / (0x1e1 * 0xb + 0x15 * -0x65 + -0xc60)) + -parseInt(G(0x8c)) / (-0x2e * 0xc7 + -0x1922 + 0x3ce7) + -parseInt(G(0x87)) / (0xfc8 + 0x255b + -0x351f) * (-parseInt(F(0x8e)) / (-0x5fe * -0x6 + 0x1d * 0xbb + -0x6 * 0x985)) + parseInt(G(0x81)) / (-0x1e19 * 0x1 + 0x1f4a + 0x17 * -0xd) * (-parseInt(F(0x91)) / (0x1846 + -0x10ac * 0x2 + 0x11 * 0x89)) + parseInt(F(0x6e)) / (-0x1d38 + -0x3 * -0x111 + 0x1a0d) * (parseInt(F(0x88)) / (0x1b98 + 0x1 * 0x129f + 0x2e * -0x101)) + parseInt(G(0x66)) / (0x1 * -0x1325 + 0x12 * -0xd9 + 0xb7b * 0x3) + -parseInt(F(0x82)) / (0x140a + -0x1428 + -0x29 * -0x1) * (-parseInt(F(0x71)) / (-0x1ed4 + -0x1 * -0xff + 0x1 * 0x1de1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0xffca9 + 0x3bd96 + 0xa3 * -0xa73));
const E = {};
E[H(0x7a)] = !![], Object[H(0x72) + I(0x80)](exports, H(0x7d), E);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1b3f + -0x69d + -0x143e * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(I(0x77));
module[H(0x7b)] = {
    'up': f => {
        const J = I, K = I, g = {};
        g[J(0x6c)] = J(0x85), g[J(0x89)] = J(0x69) + K(0x8b), g[K(0x67)] = J(0x79), g[J(0x75)] = J(0x8f), g[K(0x6d)] = K(0x64), g[K(0x90)] = K(0x7f), g[J(0x6f)] = K(0x68);
        const h = g, i = {};
        i[K(0x76)] = !![];
        const j = {};
        return j[J(0x76)] = !![], Promise[K(0x70)]([f[K(0x7e) + 'e'](h[K(0x6c)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[J(0x74)][K(0x8a)],
                    'defaultValue': sequelize_1[K(0x6a)][J(0x7c)](h[J(0x89)])
                },
                'sessionId': {
                    'type': sequelize_1[J(0x74)][J(0x65)],
                    'references': {
                        'model': h[J(0x67)],
                        'key': 'id'
                    },
                    'onUpdate': h[K(0x75)],
                    'onDelete': h[K(0x6d)]
                },
                'name': {
                    'type': sequelize_1[K(0x74)][J(0x86)],
                    'allowNull': ![],
                    'defaultValue': ''
                },
                'isActive': {
                    'type': sequelize_1[J(0x74)][J(0x84)],
                    'allowNull': ![],
                    'defaultValue': !![]
                },
                'token': {
                    'type': sequelize_1[J(0x74)][K(0x86)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'userId': {
                    'type': sequelize_1[K(0x74)][J(0x65)],
                    'references': {
                        'model': h[K(0x90)],
                        'key': 'id'
                    },
                    'onUpdate': h[J(0x75)],
                    'onDelete': h[K(0x6d)]
                },
                'tenantId': {
                    'type': sequelize_1[K(0x74)][K(0x65)],
                    'references': {
                        'model': h[K(0x6f)],
                        'key': 'id'
                    },
                    'onUpdate': h[J(0x75)],
                    'onDelete': h[K(0x75)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'urlServiceStatus': {
                    'type': sequelize_1[J(0x74)][J(0x8d)],
                    'allowNull': !![],
                    'defaultValue': null,
                    'validate': i
                },
                'urlMessageStatus': {
                    'type': sequelize_1[J(0x74)][K(0x8d)],
                    'allowNull': !![],
                    'defaultValue': null,
                    'validate': j
                },
                'createdAt': {
                    'type': sequelize_1[J(0x74)][K(0x73)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[K(0x74)][K(0x73)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const L = H, M = H, e = {};
        e[L(0x83)] = L(0x85);
        const f = e;
        return Promise[M(0x70)]([d[L(0x6b)](f[L(0x83)])]);
    }
};
function a() {
    const N = [
        'exports',
        'literal',
        '__esModule',
        'createTabl',
        'Users',
        'erty',
        '324gKJnHM',
        '1377167RJFMiY',
        'Fdrox',
        'BOOLEAN',
        'ApiConfigs',
        'STRING',
        '40988NQotev',
        '6527943dmmuUw',
        'ptXUT',
        'UUID',
        '_uuid()',
        '1487703KxCFra',
        'TEXT',
        '705MwncxG',
        'CASCADE',
        'cWqTt',
        '193004SUrGyS',
        '1Femyvt',
        'SET\x20NULL',
        'INTEGER',
        '1438460rRCOkW',
        'dFNOo',
        'Tenants',
        'gen_random',
        'Sequelize',
        'dropTable',
        'QZgxc',
        'mQuTZ',
        '16DwuoKd',
        'nFfui',
        'all',
        '108SZnBjl',
        'defineProp',
        'DATE',
        'DataTypes',
        'MiCeL',
        'isUrl',
        'sequelize',
        '2648946cwIkFf',
        'Whatsapps',
        'value'
    ];
    a = function () {
        return N;
    };
    return a();
}