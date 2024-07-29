'use strict';
const L = b, M = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1a28 + -0x185f + 0x3442);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(J(0x1c7)) / (-0x3 * 0x9b9 + 0x2279 * -0x1 + 0x3fa5) + parseInt(K(0x1bf)) / (-0x1d67 + -0xdf8 + -0x8ad * -0x5) * (-parseInt(J(0x1cf)) / (0x4d8 + 0x1d1a + 0x21ef * -0x1)) + -parseInt(J(0x1e0)) / (-0x1 * 0x22 + 0x1d * 0x83 + -0xeb1) * (parseInt(K(0x1bb)) / (-0x249 + 0x1 * 0x1565 + -0x1317)) + -parseInt(K(0x1e2)) / (0x5 * -0x1ef + 0x1 * -0x1c80 + 0x2631) * (parseInt(J(0x1cb)) / (-0x444 + 0x47 * -0x3b + 0x14a8)) + -parseInt(K(0x1c8)) / (-0x857 + 0x2125 + 0x1 * -0x18c6) + parseInt(J(0x1d6)) / (-0x1 * 0x2483 + -0x20ea + -0x11 * -0x416) + parseInt(K(0x1be)) / (-0x1ae + 0xf * 0x7f + 0x1 * -0x5b9) * (parseInt(K(0x1e3)) / (0xcc5 * 0x1 + 0x9a5 + -0x165f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xa59fe + 0x120383 * 0x1 + 0x6d * 0x5ad));
const I = {};
I[L(0x1dd)] = !![], Object[L(0x1bd) + L(0x1cd)](exports, M(0x1c9), I);
function a() {
    const R = [
        '11YdWFOa',
        'Users',
        'exports',
        'allowNull',
        'SET\x20NULL',
        '10ZASHag',
        'STRING',
        'defineProp',
        '3119730kWHtNy',
        '90yngMYi',
        'XQSeW',
        'primaryKey',
        'TEXT',
        'Campaigns',
        'mngQJ',
        'lkpky',
        'Whatsapps',
        '1097445dtLUHk',
        '2320992NvTTko',
        '__esModule',
        'CASCADE',
        '2931243QCQJLR',
        'DATE',
        'erty',
        'autoIncrem',
        '20751WdcJzk',
        'okoez',
        'Tenants',
        'TLvkx',
        'sequelize',
        'XkmQK',
        'type',
        '4608396RnOIdx',
        'all',
        'createTabl',
        'pending',
        'ueegd',
        'ent',
        'DataTypes',
        'value',
        'dropTable',
        'INTEGER',
        '481596gaNgqW',
        'lFTZh',
        '6CEwDUl'
    ];
    a = function () {
        return R;
    };
    return a();
}
const sequelize_1 = require(L(0x1d3));
module[M(0x1e5)] = {
    'up': g => {
        const N = M, O = M, h = {};
        h[N(0x1e1)] = N(0x1c3), h[O(0x1c0)] = N(0x1d9), h[O(0x1c4)] = N(0x1c6), h[O(0x1d4)] = O(0x1ca), h[O(0x1d0)] = O(0x1e7), h[N(0x1d2)] = O(0x1e4), h[N(0x1da)] = N(0x1d1);
        const i = h, j = {};
        j[N(0x1d5)] = sequelize_1[O(0x1dc)][O(0x1df)], j[N(0x1c1)] = !![], j[N(0x1ce) + N(0x1db)] = !![], j[O(0x1e6)] = ![];
        const k = {};
        k[N(0x1d5)] = sequelize_1[O(0x1dc)][N(0x1bc)], k[N(0x1e6)] = ![];
        const l = {};
        return l[N(0x1d5)] = sequelize_1[O(0x1dc)][O(0x1cc)], l[N(0x1e6)] = ![], Promise[O(0x1d7)]([g[N(0x1d8) + 'e'](i[N(0x1e1)], {
                'id': j,
                'name': k,
                'start': l,
                'status': {
                    'type': sequelize_1[O(0x1dc)][O(0x1bc)],
                    'allowNull': ![],
                    'defaultValue': i[O(0x1c0)]
                },
                'sessionId': {
                    'type': sequelize_1[N(0x1dc)][O(0x1df)],
                    'references': {
                        'model': i[O(0x1c4)],
                        'key': 'id'
                    },
                    'onUpdate': i[N(0x1d4)],
                    'onDelete': i[O(0x1d0)]
                },
                'message1': {
                    'type': sequelize_1[N(0x1dc)][N(0x1c2)],
                    'allowNull': ![]
                },
                'message2': {
                    'type': sequelize_1[N(0x1dc)][N(0x1c2)],
                    'allowNull': ![]
                },
                'message3': {
                    'type': sequelize_1[N(0x1dc)][N(0x1c2)],
                    'allowNull': ![]
                },
                'mediaUrl': {
                    'type': sequelize_1[N(0x1dc)][O(0x1bc)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'mediaType': {
                    'type': sequelize_1[N(0x1dc)][N(0x1bc)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'userId': {
                    'type': sequelize_1[O(0x1dc)][O(0x1df)],
                    'references': {
                        'model': i[N(0x1d2)],
                        'key': 'id'
                    },
                    'onUpdate': i[O(0x1d4)],
                    'onDelete': i[O(0x1d0)]
                },
                'tenantId': {
                    'type': sequelize_1[N(0x1dc)][N(0x1df)],
                    'references': {
                        'model': i[N(0x1da)],
                        'key': 'id'
                    },
                    'onUpdate': i[O(0x1d4)],
                    'onDelete': i[N(0x1d4)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'createdAt': {
                    'type': sequelize_1[N(0x1dc)][N(0x1cc)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[O(0x1dc)][O(0x1cc)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const P = M, Q = M, e = {};
        e[P(0x1c5)] = P(0x1c3);
        const f = e;
        return Promise[P(0x1d7)]([d[P(0x1de)](f[Q(0x1c5)])]);
    }
};