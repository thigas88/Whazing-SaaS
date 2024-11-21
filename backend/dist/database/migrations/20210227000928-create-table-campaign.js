'use strict';
const L = b, M = b;
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(J(0x176)) / (-0xaf6 + -0x13b2 * 0x1 + 0x1ea9) * (parseInt(J(0x17f)) / (0x1 * -0x338 + -0xdf * -0xc + -0x73a)) + parseInt(K(0x179)) / (0x1a6 + 0x823 * -0x3 + 0x16c6) + -parseInt(J(0x181)) / (0xdb1 + -0xebb + 0x10e) + -parseInt(K(0x188)) / (-0x58b * 0x2 + 0x1b3 * 0x11 + -0x11c8) * (-parseInt(K(0x192)) / (0x2375 + 0x501 + 0x10 * -0x287)) + -parseInt(J(0x194)) / (-0x1 * -0x2446 + -0x244d + 0x7 * 0x2) + -parseInt(K(0x182)) / (-0xe56 + 0x8 * 0x278 + 0x562 * -0x1) + parseInt(K(0x196)) / (-0x1a0 * -0x17 + -0x60b + -0x1f4c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x12 * -0x5840 + -0x1a5213 * -0x1 + 0x1 * -0x12d4ae));
const I = {};
I[L(0x191)] = !![], Object[L(0x18f) + M(0x180)](exports, M(0x195), I);
const sequelize_1 = require(L(0x17d));
module[L(0x197)] = {
    'up': g => {
        const N = L, O = M, h = {};
        h[N(0x187)] = N(0x199), h[O(0x18a)] = O(0x19a), h[N(0x173)] = N(0x18c), h[O(0x175)] = O(0x198), h[O(0x189)] = O(0x19c), h[O(0x178)] = N(0x18e), h[N(0x172)] = O(0x190);
        const i = h, j = {};
        j[N(0x17b)] = sequelize_1[N(0x185)][O(0x17c)], j[O(0x17a)] = !![], j[N(0x193) + O(0x18d)] = !![], j[O(0x183)] = ![];
        const k = {};
        k[O(0x17b)] = sequelize_1[O(0x185)][O(0x177)], k[O(0x183)] = ![];
        const l = {};
        return l[O(0x17b)] = sequelize_1[O(0x185)][O(0x186)], l[N(0x183)] = ![], Promise[O(0x184)]([g[O(0x17e) + 'e'](i[N(0x187)], {
                'id': j,
                'name': k,
                'start': l,
                'status': {
                    'type': sequelize_1[O(0x185)][N(0x177)],
                    'allowNull': ![],
                    'defaultValue': i[O(0x18a)]
                },
                'sessionId': {
                    'type': sequelize_1[N(0x185)][N(0x17c)],
                    'references': {
                        'model': i[N(0x173)],
                        'key': 'id'
                    },
                    'onUpdate': i[N(0x175)],
                    'onDelete': i[N(0x189)]
                },
                'message1': {
                    'type': sequelize_1[N(0x185)][N(0x174)],
                    'allowNull': ![]
                },
                'message2': {
                    'type': sequelize_1[O(0x185)][O(0x174)],
                    'allowNull': ![]
                },
                'message3': {
                    'type': sequelize_1[N(0x185)][N(0x174)],
                    'allowNull': ![]
                },
                'mediaUrl': {
                    'type': sequelize_1[N(0x185)][N(0x177)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'mediaType': {
                    'type': sequelize_1[N(0x185)][O(0x177)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'userId': {
                    'type': sequelize_1[N(0x185)][N(0x17c)],
                    'references': {
                        'model': i[O(0x178)],
                        'key': 'id'
                    },
                    'onUpdate': i[O(0x175)],
                    'onDelete': i[N(0x189)]
                },
                'tenantId': {
                    'type': sequelize_1[O(0x185)][N(0x17c)],
                    'references': {
                        'model': i[O(0x172)],
                        'key': 'id'
                    },
                    'onUpdate': i[O(0x175)],
                    'onDelete': i[N(0x175)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'createdAt': {
                    'type': sequelize_1[O(0x185)][O(0x186)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[N(0x185)][O(0x186)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const P = L, Q = M, e = {};
        e[P(0x19b)] = Q(0x199);
        const f = e;
        return Promise[P(0x184)]([d[P(0x18b)](f[Q(0x19b)])]);
    }
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xbbc + -0x23d5 + 0x198b);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const R = [
        '2098347CvcsHc',
        'primaryKey',
        'type',
        'INTEGER',
        'sequelize',
        'createTabl',
        '24tKViMo',
        'erty',
        '5467648fWamsn',
        '1932168SURBOx',
        'allowNull',
        'all',
        'DataTypes',
        'DATE',
        'CJyAL',
        '1472665jytDFs',
        'QaTAC',
        'VFqUv',
        'dropTable',
        'Whatsapps',
        'ent',
        'Users',
        'defineProp',
        'Tenants',
        'value',
        '24UNpzlQ',
        'autoIncrem',
        '3854585PfURnE',
        '__esModule',
        '3997116aherux',
        'exports',
        'CASCADE',
        'Campaigns',
        'pending',
        'vnwMJ',
        'SET\x20NULL',
        'KpfWi',
        'LGLcl',
        'TEXT',
        'kGbeg',
        '61241tlLZWJ',
        'STRING',
        'whQqh'
    ];
    a = function () {
        return R;
    };
    return a();
}