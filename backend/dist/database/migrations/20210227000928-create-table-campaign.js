'use strict';
const L = b, M = b;
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(J(0xbe)) / (-0x672 + -0x18b6 * 0x1 + -0xa63 * -0x3) + parseInt(J(0xa9)) / (-0x11ab + -0x7ba * 0x1 + 0x3a1 * 0x7) * (-parseInt(K(0xaa)) / (-0x638 + -0x556 * -0x3 + -0x9c7)) + parseInt(J(0xa5)) / (-0x3a + 0xa3d + -0x9ff * 0x1) * (-parseInt(K(0xb9)) / (-0x1415 + -0x31 * 0x71 + 0x29bb)) + parseInt(J(0x99)) / (0x1 * -0xaf4 + -0x28 * -0xf5 + -0x2 * 0xda7) + parseInt(K(0xad)) / (-0x10 * -0x6 + 0x30 * 0x1 + -0x89) + parseInt(J(0xa8)) / (0x1de6 * -0x1 + 0x1794 + 0x65a * 0x1) + parseInt(K(0xa1)) / (0x1222 * 0x2 + -0x6 * -0x5ab + -0x463d) * (-parseInt(K(0xb6)) / (0xcb9 + -0x2 * -0xac0 + -0x222f * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * -0x4a7f7 + -0x1 * 0x100722 + 0x35dc * 0xa9));
function a() {
    const R = [
        '970443sWEeZz',
        'TEXT',
        'YanRt',
        'createTabl',
        'autoIncrem',
        'zVVlz',
        'ent',
        '2732952hAmGWs',
        'INTEGER',
        'DATE',
        'RwDWX',
        'NuJav',
        'Tenants',
        'iZJJP',
        'value',
        '61146oKHcDt',
        'CASCADE',
        'all',
        'erty',
        '1812BIlRJA',
        'defineProp',
        'nEvYJ',
        '8358584MuXACW',
        '2302YxBfMq',
        '3111kOmRFa',
        'pending',
        'dropTable',
        '4935098YAyeUY',
        'exports',
        '__esModule',
        'allowNull',
        'dfLSV',
        'Users',
        'uiRTL',
        'STRING',
        'DataTypes',
        '930WTkXyM',
        'Campaigns',
        'SET\x20NULL',
        '7515RfSpvv',
        'Whatsapps',
        'primaryKey',
        'sequelize',
        'type'
    ];
    a = function () {
        return R;
    };
    return a();
}
const I = {};
I[L(0xa0)] = !![], Object[M(0xa6) + L(0xa4)](exports, L(0xaf), I);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x22b3 + 0x1179 + 0xf0 * 0x13);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(M(0xbc));
module[L(0xae)] = {
    'up': g => {
        const N = L, O = M, h = {};
        h[N(0x9f)] = O(0xb7), h[O(0xa7)] = N(0xab), h[O(0xc0)] = O(0xba), h[N(0x9d)] = N(0xa2), h[N(0xb3)] = N(0xb8), h[N(0x9c)] = O(0xb2), h[N(0x97)] = N(0x9e);
        const i = h, j = {};
        j[N(0xbd)] = sequelize_1[N(0xb5)][O(0x9a)], j[N(0xbb)] = !![], j[N(0x96) + N(0x98)] = !![], j[N(0xb0)] = ![];
        const k = {};
        k[N(0xbd)] = sequelize_1[N(0xb5)][N(0xb4)], k[N(0xb0)] = ![];
        const l = {};
        return l[N(0xbd)] = sequelize_1[N(0xb5)][N(0x9b)], l[O(0xb0)] = ![], Promise[O(0xa3)]([g[N(0xc1) + 'e'](i[N(0x9f)], {
                'id': j,
                'name': k,
                'start': l,
                'status': {
                    'type': sequelize_1[O(0xb5)][N(0xb4)],
                    'allowNull': ![],
                    'defaultValue': i[O(0xa7)]
                },
                'sessionId': {
                    'type': sequelize_1[O(0xb5)][O(0x9a)],
                    'references': {
                        'model': i[O(0xc0)],
                        'key': 'id'
                    },
                    'onUpdate': i[N(0x9d)],
                    'onDelete': i[N(0xb3)]
                },
                'message1': {
                    'type': sequelize_1[O(0xb5)][O(0xbf)],
                    'allowNull': ![]
                },
                'message2': {
                    'type': sequelize_1[O(0xb5)][N(0xbf)],
                    'allowNull': ![]
                },
                'message3': {
                    'type': sequelize_1[O(0xb5)][O(0xbf)],
                    'allowNull': ![]
                },
                'mediaUrl': {
                    'type': sequelize_1[O(0xb5)][O(0xb4)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'mediaType': {
                    'type': sequelize_1[N(0xb5)][O(0xb4)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'userId': {
                    'type': sequelize_1[N(0xb5)][O(0x9a)],
                    'references': {
                        'model': i[O(0x9c)],
                        'key': 'id'
                    },
                    'onUpdate': i[O(0x9d)],
                    'onDelete': i[O(0xb3)]
                },
                'tenantId': {
                    'type': sequelize_1[N(0xb5)][O(0x9a)],
                    'references': {
                        'model': i[O(0x97)],
                        'key': 'id'
                    },
                    'onUpdate': i[N(0x9d)],
                    'onDelete': i[O(0x9d)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'createdAt': {
                    'type': sequelize_1[O(0xb5)][O(0x9b)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[O(0xb5)][N(0x9b)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const P = L, Q = L, e = {};
        e[P(0xb1)] = Q(0xb7);
        const f = e;
        return Promise[P(0xa3)]([d[P(0xac)](f[Q(0xb1)])]);
    }
};