'use strict';
function a() {
    const T = [
        'erty',
        'hnQnN',
        '16101XHYyEe',
        'all',
        'notEmpty',
        '4UbTcqr',
        'SET\x20NULL',
        'INTEGER',
        '3738077UlUMLM',
        '866DStaan',
        'vrZNJ',
        '181491UQjVik',
        'STRING',
        '__esModule',
        'ApiMessage',
        '1498692NjFJvO',
        'DATE',
        'Tenants',
        'srJZB',
        'value',
        'CASCADE',
        'Whatsapps',
        'len',
        '1121690keXnHP',
        'zfkNs',
        'dropTable',
        'createTabl',
        'WgQZi',
        'DataTypes',
        '1639lxKyNT',
        'exports',
        'mlOrj',
        '6636lhaBmj',
        'sequelize',
        'Sequelize',
        'defineProp',
        '2190fLCXdg',
        'JSONB',
        '_uuid()',
        '967aSWmIf',
        'UUID',
        'TEXT',
        '8FUdJMX',
        'gen_random',
        'aJAys',
        'literal'
    ];
    a = function () {
        return T;
    };
    return a();
}
const N = b, O = b;
(function (c, d) {
    const L = b, M = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(L(0x1ef)) / (0x2553 + -0xe27 + -0x172b) * (parseInt(L(0x1ff)) / (0x6 * 0x1f5 + 0x1c16 + 0x6 * -0x6a3)) + parseInt(L(0x1d3)) / (-0x8 * -0x4be + -0x25b7 + -0x3 * 0x12) * (-parseInt(M(0x1fb)) / (0x7 * 0x481 + -0x1591 + 0x9f2 * -0x1)) + parseInt(M(0x1df)) / (0x19dd + -0xaa * -0x2b + 0x1222 * -0x3) + -parseInt(M(0x1d7)) / (-0x55a * -0x1 + 0x11e4 + -0x1738 * 0x1) + -parseInt(L(0x1fe)) / (0x1 * 0x2350 + -0x1648 * 0x1 + -0x1 * 0xd01) * (parseInt(M(0x1f2)) / (0x1e43 + 0x116e + 0x245 * -0x15)) + -parseInt(L(0x1f8)) / (-0x20df + 0x791 + 0x1957) * (-parseInt(L(0x1ec)) / (-0x5d * -0x1d + -0x17d1 + 0xd52)) + -parseInt(L(0x1e5)) / (-0x2 * 0x12aa + -0x3be + 0x291d) * (-parseInt(L(0x1e8)) / (-0x13a6 + 0xb * -0x1a1 + 0x1 * 0x259d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x182b1 + 0x38808 + 0x1454 * 0x1b));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x2fb + -0x1 * 0x1a35 + 0x190c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const K = {};
K[N(0x1db)] = !![], Object[O(0x1eb) + O(0x1f6)](exports, O(0x1d5), K);
const sequelize_1 = require(O(0x1e9));
module[N(0x1e6)] = {
    'up': f => {
        const P = N, Q = O, g = {};
        g[P(0x1da)] = Q(0x1d6) + 's', g[P(0x1e3)] = Q(0x1f3) + P(0x1ee), g[P(0x1e7)] = P(0x1dd), g[P(0x1d2)] = Q(0x1dc), g[P(0x1e0)] = P(0x1fc), g[P(0x1f7)] = P(0x1d9);
        const h = g, i = {};
        i[Q(0x1fa)] = !![];
        const j = {};
        return j[Q(0x1fa)] = !![], j[Q(0x1de)] = [
            0x4ac + 0xe74 + -0x1314,
            -0xfb8 + -0x142 * -0x6 + 0x83a
        ], Promise[P(0x1f9)]([f[P(0x1e2) + 'e'](h[P(0x1da)], {
                'id': {
                    'allowNull': ![],
                    'primaryKey': !![],
                    'type': sequelize_1[P(0x1e4)][Q(0x1f0)],
                    'defaultValue': sequelize_1[Q(0x1ea)][P(0x1f5)](h[Q(0x1e3)])
                },
                'messageId': {
                    'type': sequelize_1[P(0x1e4)][Q(0x1d4)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'externalKey': {
                    'type': sequelize_1[P(0x1e4)][Q(0x1d4)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'body': {
                    'type': sequelize_1[P(0x1e4)][Q(0x1f1)],
                    'allowNull': ![],
                    'validate': i
                },
                'ack': {
                    'type': sequelize_1[P(0x1e4)][P(0x1fd)],
                    'allowNull': ![],
                    'defaultValue': 0x0
                },
                'number': {
                    'type': sequelize_1[P(0x1e4)][Q(0x1d4)],
                    'allowNull': ![],
                    'validate': j
                },
                'mediaName': {
                    'type': sequelize_1[Q(0x1e4)][Q(0x1f1)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'timestamp': {
                    'type': sequelize_1[P(0x1e4)][Q(0x1fd)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'sessionId': {
                    'type': sequelize_1[P(0x1e4)][P(0x1fd)],
                    'references': {
                        'model': h[Q(0x1e7)],
                        'key': 'id'
                    },
                    'onUpdate': h[P(0x1d2)],
                    'onDelete': h[P(0x1e0)]
                },
                'tenantId': {
                    'type': sequelize_1[Q(0x1e4)][Q(0x1fd)],
                    'references': {
                        'model': h[Q(0x1f7)],
                        'key': 'id'
                    },
                    'onUpdate': h[Q(0x1d2)],
                    'onDelete': h[Q(0x1d2)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'messageWA': {
                    'type': sequelize_1[Q(0x1e4)][P(0x1ed)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'apiConfig': {
                    'type': sequelize_1[Q(0x1e4)][P(0x1ed)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'createdAt': {
                    'type': sequelize_1[P(0x1e4)][P(0x1d8)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[P(0x1e4)][P(0x1d8)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const R = N, S = O, e = {};
        e[R(0x1f4)] = R(0x1d6) + 's';
        const f = e;
        return Promise[S(0x1f9)]([d[R(0x1e1)](f[R(0x1f4)])]);
    }
};