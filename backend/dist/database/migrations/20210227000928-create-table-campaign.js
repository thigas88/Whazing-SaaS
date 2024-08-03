'use strict';
const L = b, M = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x630 + -0x3 * -0x804 + -0x1ce8);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(J(0x15d)) / (-0x2 * -0x5ad + 0x27 * 0x2d + -0x1d2 * 0xa) * (-parseInt(K(0x163)) / (0x1f93 * -0x1 + -0x29 * -0xca + 0xc5 * -0x1)) + -parseInt(J(0x178)) / (0xc * -0x329 + 0x39 * 0x24 + -0x25 * -0xcf) + parseInt(K(0x179)) / (0x28c + 0x2f * 0x2f + -0xb29 * 0x1) + -parseInt(K(0x15e)) / (0xe6b + -0xbb6 + -0x2b0) + parseInt(J(0x17a)) / (-0xa * 0x2eb + 0x95c + 0x13d8) * (parseInt(J(0x171)) / (-0x1437 + -0x1 * 0x727 + 0x1b65 * 0x1)) + -parseInt(J(0x17c)) / (-0x23c7 + 0xa94 * -0x3 + 0x438b * 0x1) + parseInt(J(0x16c)) / (0xb5 + -0xb04 + 0xa58);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x13b98 + -0x5 * -0x42687 + 0x142 * -0x6fb));
function a() {
    const R = [
        'defineProp',
        'SET\x20NULL',
        'type',
        'value',
        'XZBso',
        'createTabl',
        'INTEGER',
        'DATE',
        '9161UTGVwd',
        '4560710hpTkop',
        'Tenants',
        'exports',
        'CASCADE',
        'erty',
        '266WoaTcn',
        'wGqnK',
        '__esModule',
        'cGWcB',
        'autoIncrem',
        'Whatsapps',
        'IZXkj',
        'qUvcI',
        'dropTable',
        '31839651AGlkjl',
        'Campaigns',
        'all',
        'pending',
        'TEXT',
        '14izBNxf',
        'primaryKey',
        'STRING',
        'DataTypes',
        'sequelize',
        'hScQr',
        'ent',
        '3932934rndxRa',
        '3453688rwprtw',
        '3021654CJmJSW',
        'Users',
        '10104136TkyUlp',
        'allowNull',
        'aAPjY',
        'fjSXu'
    ];
    a = function () {
        return R;
    };
    return a();
}
const I = {};
I[L(0x158)] = !![], Object[M(0x155) + L(0x162)](exports, M(0x165), I);
const sequelize_1 = require(M(0x175));
module[L(0x160)] = {
    'up': g => {
        const N = M, O = L, h = {};
        h[N(0x176)] = N(0x16d), h[N(0x166)] = N(0x16f), h[N(0x154)] = N(0x168), h[N(0x159)] = N(0x161), h[N(0x164)] = O(0x156), h[N(0x169)] = N(0x17b), h[N(0x17e)] = O(0x15f);
        const i = h, j = {};
        j[N(0x157)] = sequelize_1[N(0x174)][O(0x15b)], j[O(0x172)] = !![], j[N(0x167) + O(0x177)] = !![], j[O(0x17d)] = ![];
        const k = {};
        k[O(0x157)] = sequelize_1[O(0x174)][N(0x173)], k[N(0x17d)] = ![];
        const l = {};
        return l[N(0x157)] = sequelize_1[O(0x174)][O(0x15c)], l[N(0x17d)] = ![], Promise[N(0x16e)]([g[O(0x15a) + 'e'](i[O(0x176)], {
                'id': j,
                'name': k,
                'start': l,
                'status': {
                    'type': sequelize_1[O(0x174)][N(0x173)],
                    'allowNull': ![],
                    'defaultValue': i[N(0x166)]
                },
                'sessionId': {
                    'type': sequelize_1[N(0x174)][O(0x15b)],
                    'references': {
                        'model': i[O(0x154)],
                        'key': 'id'
                    },
                    'onUpdate': i[N(0x159)],
                    'onDelete': i[N(0x164)]
                },
                'message1': {
                    'type': sequelize_1[O(0x174)][O(0x170)],
                    'allowNull': ![]
                },
                'message2': {
                    'type': sequelize_1[O(0x174)][N(0x170)],
                    'allowNull': ![]
                },
                'message3': {
                    'type': sequelize_1[O(0x174)][O(0x170)],
                    'allowNull': ![]
                },
                'mediaUrl': {
                    'type': sequelize_1[N(0x174)][N(0x173)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'mediaType': {
                    'type': sequelize_1[O(0x174)][O(0x173)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'userId': {
                    'type': sequelize_1[N(0x174)][N(0x15b)],
                    'references': {
                        'model': i[N(0x169)],
                        'key': 'id'
                    },
                    'onUpdate': i[N(0x159)],
                    'onDelete': i[N(0x164)]
                },
                'tenantId': {
                    'type': sequelize_1[O(0x174)][N(0x15b)],
                    'references': {
                        'model': i[N(0x17e)],
                        'key': 'id'
                    },
                    'onUpdate': i[O(0x159)],
                    'onDelete': i[O(0x159)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'createdAt': {
                    'type': sequelize_1[O(0x174)][N(0x15c)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[O(0x174)][N(0x15c)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const P = L, Q = M, e = {};
        e[P(0x16a)] = Q(0x16d);
        const f = e;
        return Promise[P(0x16e)]([d[Q(0x16b)](f[Q(0x16a)])]);
    }
};