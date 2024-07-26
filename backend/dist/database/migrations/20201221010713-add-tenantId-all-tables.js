'use strict';
const J = b, K = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x261f + -0x5f2 + 0x2cd6);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(H(0xdd)) / (0xff5 * -0x1 + -0x6 * -0x4af + -0xc24) * (-parseInt(H(0xe5)) / (0x76 * 0x1c + -0x1438 + -0x752 * -0x1)) + parseInt(I(0xc9)) / (0x2404 + 0xa5d + 0x946 * -0x5) + parseInt(I(0xf1)) / (-0x41 * 0x6b + 0x105f + 0xad0) * (-parseInt(I(0xcb)) / (-0x18e4 + 0xc74 + 0xc75)) + -parseInt(I(0xe0)) / (-0x1a1 * -0xb + 0xe8a + 0x13 * -0x1b5) + parseInt(H(0xe7)) / (-0x1 * 0x1c31 + 0xf4d * 0x1 + 0xceb * 0x1) + parseInt(H(0xd6)) / (0x10 + 0x1ed1 + -0x35 * 0x95) * (-parseInt(I(0xc5)) / (-0x423 * -0x5 + 0x2696 + 0x4 * -0xecf)) + parseInt(H(0xf5)) / (0x1 * 0x18f3 + -0x1243 * -0x1 + -0x2b2c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x79 * 0x3e8d + -0x1d2421 * -0x1 + 0x1 * 0xfacd9));
const G = {};
G[J(0xee)] = !![], Object[J(0xec) + J(0xf2)](exports, K(0xeb), G);
const sequelize_1 = require(J(0xdb));
function a() {
    const P = [
        'Users',
        '59113980TCzSvX',
        'lQWqf',
        'fuNDW',
        '27HaxXep',
        'bZyha',
        'lhgIY',
        'CKGUS',
        '1482318vATSgJ',
        'YYKEr',
        '125AoNcua',
        'INTEGER',
        'addColumn',
        'dHhyx',
        'qNmCT',
        'Tenants',
        'Contacts',
        'AutoReply',
        'exports',
        'tenantId',
        'DataTypes',
        '4235240ZQKUdF',
        'all',
        'Queues',
        'Whatsapps',
        'QXnUQ',
        'sequelize',
        'removeColu',
        '1ZIRTKk',
        'cWOai',
        'iISYK',
        '6942612RjPlLv',
        'CASCADE',
        'avACi',
        'Settings',
        'bQdnZ',
        '3753854RnAkZZ',
        'restrict',
        '4001718jkEYUv',
        'pRfZz',
        'Tickets',
        'NEHeF',
        '__esModule',
        'defineProp',
        'YKcHT',
        'value',
        'JQdFN',
        'XQtPH',
        '216868bajPCw',
        'erty',
        'WUnUB'
    ];
    a = function () {
        return P;
    };
    return a();
}
module[J(0xd3)] = {
    'up': d => {
        const L = K, M = K, e = {};
        e[L(0xf0)] = M(0xe9), e[L(0xda)] = M(0xd4), e[L(0xc6)] = M(0xd0), e[M(0xdf)] = M(0xe1), e[L(0xea)] = L(0xe6), e[M(0xe4)] = L(0xd1), e[L(0xe8)] = L(0xd8), e[M(0xce)] = L(0xe3), e[M(0xf6)] = M(0xd2), e[L(0xed)] = M(0xf4), e[M(0xc8)] = L(0xd9);
        const f = e;
        return Promise[M(0xd7)]([
            d[L(0xcd)](f[L(0xf0)], f[M(0xda)], {
                'type': sequelize_1[M(0xd5)][M(0xcc)],
                'references': {
                    'model': f[M(0xc6)],
                    'key': 'id'
                },
                'onUpdate': f[L(0xdf)],
                'onDelete': f[L(0xea)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0xcd)](f[L(0xe4)], f[M(0xda)], {
                'type': sequelize_1[L(0xd5)][M(0xcc)],
                'references': {
                    'model': f[M(0xc6)],
                    'key': 'id'
                },
                'onUpdate': f[M(0xdf)],
                'onDelete': f[L(0xea)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0xcd)](f[L(0xe8)], f[M(0xda)], {
                'type': sequelize_1[L(0xd5)][M(0xcc)],
                'references': {
                    'model': f[M(0xc6)],
                    'key': 'id'
                },
                'onUpdate': f[L(0xdf)],
                'onDelete': f[L(0xea)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0xcd)](f[M(0xce)], f[M(0xda)], {
                'type': sequelize_1[L(0xd5)][L(0xcc)],
                'references': {
                    'model': f[L(0xc6)],
                    'key': 'id'
                },
                'onUpdate': f[M(0xdf)],
                'onDelete': f[M(0xea)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0xcd)](f[L(0xf6)], f[M(0xda)], {
                'type': sequelize_1[M(0xd5)][L(0xcc)],
                'references': {
                    'model': f[L(0xc6)],
                    'key': 'id'
                },
                'onUpdate': f[L(0xdf)],
                'onDelete': f[L(0xea)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0xcd)](f[L(0xed)], f[L(0xda)], {
                'type': sequelize_1[M(0xd5)][L(0xcc)],
                'references': {
                    'model': f[L(0xc6)],
                    'key': 'id'
                },
                'onUpdate': f[L(0xdf)],
                'onDelete': f[L(0xea)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0xcd)](f[L(0xc8)], f[M(0xda)], {
                'type': sequelize_1[L(0xd5)][M(0xcc)],
                'references': {
                    'model': f[L(0xc6)],
                    'key': 'id'
                },
                'onUpdate': f[M(0xdf)],
                'onDelete': f[M(0xea)],
                'allowNull': ![],
                'defaultValue': 0x1
            })
        ]);
    },
    'down': d => {
        const N = K, O = K, e = {};
        e[N(0xde)] = N(0xe9), e[N(0xf3)] = O(0xd4), e[O(0xca)] = O(0xd1), e[O(0xf7)] = O(0xd8), e[O(0xcf)] = N(0xe3), e[N(0xef)] = O(0xd2), e[N(0xc7)] = N(0xf4), e[O(0xe2)] = N(0xd9);
        const f = e;
        return Promise[N(0xd7)]([
            d[O(0xdc) + 'mn'](f[N(0xde)], f[N(0xf3)]),
            d[N(0xdc) + 'mn'](f[O(0xca)], f[N(0xf3)]),
            d[N(0xdc) + 'mn'](f[N(0xf7)], f[O(0xf3)]),
            d[N(0xdc) + 'mn'](f[O(0xcf)], f[N(0xf3)]),
            d[N(0xdc) + 'mn'](f[O(0xef)], f[O(0xf3)]),
            d[N(0xdc) + 'mn'](f[O(0xc7)], f[N(0xf3)]),
            d[O(0xdc) + 'mn'](f[O(0xe2)], f[N(0xf3)])
        ]);
    }
};