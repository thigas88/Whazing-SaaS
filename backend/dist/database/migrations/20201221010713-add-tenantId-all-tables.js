'use strict';
const J = b, K = b;
function a() {
    const P = [
        'addColumn',
        '238280Piutih',
        '2018856OlJdLu',
        '166bZPwUr',
        'tenantId',
        '7503656xHQHjk',
        '2819720RpLgCg',
        'gitYa',
        'Jglpo',
        'restrict',
        'Tickets',
        'femZR',
        'Settings',
        'Imnvq',
        'HAhmA',
        'hrzOA',
        'ehFCf',
        'GrHqk',
        'oUXUi',
        'rdocm',
        '110fPMZQS',
        'CASCADE',
        'removeColu',
        'mBsXq',
        'sequelize',
        '8570793mkVDWC',
        'value',
        'Whatsapps',
        'Tenants',
        '778068agNHov',
        '__esModule',
        'bOerS',
        'DataTypes',
        'OJBZK',
        '66VtCEzp',
        'exports',
        'zcLXp',
        'GUvso',
        'AutoReply',
        'bvhCM',
        'all',
        'defineProp',
        'INTEGER',
        'Queues',
        'erty',
        '7IHdNmJ',
        'vLRnl',
        '3624imzQEk',
        'Contacts',
        'Users',
        'poJnR',
        'RRBDi'
    ];
    a = function () {
        return P;
    };
    return a();
}
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(H(0xfb)) / (-0x1421 * -0x1 + 0x1f1a + 0x2 * -0x199d) * (parseInt(H(0x103)) / (0x1afb * -0x1 + -0x4 * 0x86d + 0x143b * 0x3)) + parseInt(H(0x102)) / (-0xc96 + 0x1c59 + -0x2 * 0x7e0) + parseInt(I(0x106)) / (0x1471 * -0x1 + 0xef9 + 0x57c) + parseInt(I(0x101)) / (0x2086 + -0xcc1 + -0x13c0) * (parseInt(H(0xee)) / (-0x1946 * 0x1 + 0x1 * -0x1ae5 + 0x1 * 0x3431)) + parseInt(I(0xf9)) / (0x33 * -0xbc + -0x1 * -0x1919 + 0xc62) * (-parseInt(H(0x105)) / (-0x10f7 + 0x1 * -0x2e1 + 0x13e0)) + -parseInt(I(0xe9)) / (-0x2585 * 0x1 + 0x2e * -0x7d + 0x3c04) * (parseInt(H(0xe0)) / (0x16e3 + -0x1e2f + 0x756)) + parseInt(I(0xe5)) / (-0x15 * -0x9d + -0x1ac + -0xb2a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4764d + -0x879 * -0x57 + 0x28a8));
const G = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xba7 + -0x2169 + 0x2dec);
        let h = e[f];
        return h;
    }, b(c, d);
}
G[J(0xe6)] = !![], Object[J(0xf5) + J(0xf8)](exports, K(0xea), G);
const sequelize_1 = require(J(0xe4));
module[J(0xef)] = {
    'up': d => {
        const L = K, M = K, e = {};
        e[L(0x108)] = L(0x10a), e[M(0x10f)] = L(0x104), e[M(0xe3)] = L(0xe8), e[M(0xfe)] = M(0xe1), e[M(0xdc)] = M(0x109), e[L(0xde)] = M(0xfc), e[M(0xf0)] = M(0xf7), e[M(0xeb)] = M(0x10c), e[M(0x107)] = L(0xf2), e[L(0xed)] = L(0xfd), e[M(0xfa)] = M(0xe7);
        const f = e;
        return Promise[M(0xf4)]([
            d[M(0x100)](f[L(0x108)], f[L(0x10f)], {
                'type': sequelize_1[M(0xec)][M(0xf6)],
                'references': {
                    'model': f[L(0xe3)],
                    'key': 'id'
                },
                'onUpdate': f[M(0xfe)],
                'onDelete': f[M(0xdc)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0x100)](f[L(0xde)], f[M(0x10f)], {
                'type': sequelize_1[L(0xec)][L(0xf6)],
                'references': {
                    'model': f[L(0xe3)],
                    'key': 'id'
                },
                'onUpdate': f[M(0xfe)],
                'onDelete': f[M(0xdc)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0x100)](f[L(0xf0)], f[M(0x10f)], {
                'type': sequelize_1[M(0xec)][L(0xf6)],
                'references': {
                    'model': f[M(0xe3)],
                    'key': 'id'
                },
                'onUpdate': f[M(0xfe)],
                'onDelete': f[L(0xdc)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0x100)](f[L(0xeb)], f[M(0x10f)], {
                'type': sequelize_1[L(0xec)][M(0xf6)],
                'references': {
                    'model': f[L(0xe3)],
                    'key': 'id'
                },
                'onUpdate': f[L(0xfe)],
                'onDelete': f[M(0xdc)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0x100)](f[L(0x107)], f[M(0x10f)], {
                'type': sequelize_1[M(0xec)][L(0xf6)],
                'references': {
                    'model': f[L(0xe3)],
                    'key': 'id'
                },
                'onUpdate': f[L(0xfe)],
                'onDelete': f[M(0xdc)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0x100)](f[M(0xed)], f[L(0x10f)], {
                'type': sequelize_1[L(0xec)][L(0xf6)],
                'references': {
                    'model': f[L(0xe3)],
                    'key': 'id'
                },
                'onUpdate': f[L(0xfe)],
                'onDelete': f[M(0xdc)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0x100)](f[L(0xfa)], f[M(0x10f)], {
                'type': sequelize_1[M(0xec)][M(0xf6)],
                'references': {
                    'model': f[L(0xe3)],
                    'key': 'id'
                },
                'onUpdate': f[L(0xfe)],
                'onDelete': f[M(0xdc)],
                'allowNull': ![],
                'defaultValue': 0x1
            })
        ]);
    },
    'down': d => {
        const N = K, O = K, e = {};
        e[N(0xff)] = N(0x10a), e[N(0xdf)] = O(0x104), e[N(0x10d)] = O(0xfc), e[N(0xf1)] = N(0xf7), e[N(0xf3)] = O(0x10c), e[N(0x10e)] = N(0xf2), e[N(0xdd)] = O(0xfd), e[N(0x10b)] = N(0xe7);
        const f = e;
        return Promise[O(0xf4)]([
            d[O(0xe2) + 'mn'](f[O(0xff)], f[N(0xdf)]),
            d[O(0xe2) + 'mn'](f[N(0x10d)], f[N(0xdf)]),
            d[N(0xe2) + 'mn'](f[O(0xf1)], f[N(0xdf)]),
            d[N(0xe2) + 'mn'](f[O(0xf3)], f[N(0xdf)]),
            d[O(0xe2) + 'mn'](f[O(0x10e)], f[N(0xdf)]),
            d[N(0xe2) + 'mn'](f[N(0xdd)], f[N(0xdf)]),
            d[O(0xe2) + 'mn'](f[O(0x10b)], f[N(0xdf)])
        ]);
    }
};