'use strict';
function a() {
    const P = [
        'restrict',
        'MGGza',
        'inehp',
        '4612416uFgBdu',
        'rGNVV',
        'addColumn',
        'exports',
        'value',
        '31724MOsJGp',
        'Pkizk',
        '28736180ZVhrRF',
        'sequelize',
        'Tickets',
        '__esModule',
        'IXCxY',
        'pRJZJ',
        'hRxPq',
        'all',
        'CASCADE',
        'QerhX',
        'EOnVc',
        '36OduHse',
        'QyxlL',
        'Settings',
        'VniNJ',
        'Contacts',
        'AlWBu',
        '462312HdrYmL',
        'INTEGER',
        'WbSkm',
        'Tenants',
        '72244iyYbVy',
        'erty',
        'Queues',
        'removeColu',
        'dFatr',
        'Users',
        'DataTypes',
        'Whatsapps',
        '32DLvTQM',
        'yeQAx',
        '568xpZVNQ',
        'AutoReply',
        'defineProp',
        'EFILS',
        '2598540tpgYUO',
        'nRVzo',
        'modgb',
        '425275LNFHFC',
        'tenantId',
        'lzIXY'
    ];
    a = function () {
        return P;
    };
    return a();
}
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(H(0xf0)) / (0x13 * -0x3a + -0x2067 + 0x25 * 0xfe) * (parseInt(H(0xf8)) / (0x3 * -0x265 + -0xcf1 * 0x2 + 0x2113)) + parseInt(I(0xcb)) / (0x3d * 0x2f + 0x21 * -0xd6 + 0x1066) + -parseInt(I(0xd4)) / (0x3 * -0x5d9 + 0xa + 0x1185) + -parseInt(I(0xce)) / (0x509 * 0x3 + -0x23be + -0x14a8 * -0x1) * (parseInt(H(0xe6)) / (0x717 + 0x1bc6 + -0x22d7)) + -parseInt(H(0xd9)) / (-0x7 * 0x309 + 0x2304 + 0x6df * -0x2) * (parseInt(I(0xfa)) / (-0x3b3 * 0x7 + -0x28c * -0x4 + 0xfbd)) + parseInt(H(0xec)) / (-0x1988 + 0x13 * 0x10f + -0x4 * -0x15d) + parseInt(I(0xdb)) / (0x1 * 0xd40 + -0xacf * 0x2 + 0x868);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x115 * 0x187 + -0x36152 + 0xba587));
const G = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x20ae + 0x6c1 + -0x26a6);
        let h = e[f];
        return h;
    }, b(c, d);
}
G[J(0xd8)] = !![], Object[K(0xc9) + K(0xf1)](exports, K(0xde), G);
const sequelize_1 = require(K(0xdc));
module[K(0xd7)] = {
    'up': d => {
        const L = J, M = J, e = {};
        e[L(0xee)] = M(0xdd), e[L(0xd5)] = L(0xcf), e[M(0xf4)] = M(0xef), e[M(0xca)] = M(0xe3), e[M(0xd2)] = M(0xd1), e[M(0xe4)] = M(0xea), e[L(0xd0)] = L(0xf2), e[L(0xda)] = M(0xe8), e[M(0xdf)] = L(0xfb), e[M(0xe1)] = L(0xf5), e[M(0xd3)] = L(0xf7);
        const f = e;
        return Promise[M(0xe2)]([
            d[M(0xd6)](f[M(0xee)], f[L(0xd5)], {
                'type': sequelize_1[L(0xf6)][L(0xed)],
                'references': {
                    'model': f[L(0xf4)],
                    'key': 'id'
                },
                'onUpdate': f[M(0xca)],
                'onDelete': f[L(0xd2)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0xd6)](f[L(0xe4)], f[L(0xd5)], {
                'type': sequelize_1[L(0xf6)][L(0xed)],
                'references': {
                    'model': f[L(0xf4)],
                    'key': 'id'
                },
                'onUpdate': f[L(0xca)],
                'onDelete': f[L(0xd2)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0xd6)](f[M(0xd0)], f[M(0xd5)], {
                'type': sequelize_1[L(0xf6)][M(0xed)],
                'references': {
                    'model': f[L(0xf4)],
                    'key': 'id'
                },
                'onUpdate': f[M(0xca)],
                'onDelete': f[L(0xd2)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0xd6)](f[M(0xda)], f[M(0xd5)], {
                'type': sequelize_1[L(0xf6)][L(0xed)],
                'references': {
                    'model': f[L(0xf4)],
                    'key': 'id'
                },
                'onUpdate': f[L(0xca)],
                'onDelete': f[L(0xd2)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0xd6)](f[M(0xdf)], f[L(0xd5)], {
                'type': sequelize_1[L(0xf6)][M(0xed)],
                'references': {
                    'model': f[L(0xf4)],
                    'key': 'id'
                },
                'onUpdate': f[M(0xca)],
                'onDelete': f[L(0xd2)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0xd6)](f[L(0xe1)], f[M(0xd5)], {
                'type': sequelize_1[L(0xf6)][M(0xed)],
                'references': {
                    'model': f[L(0xf4)],
                    'key': 'id'
                },
                'onUpdate': f[M(0xca)],
                'onDelete': f[L(0xd2)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0xd6)](f[M(0xd3)], f[L(0xd5)], {
                'type': sequelize_1[M(0xf6)][L(0xed)],
                'references': {
                    'model': f[M(0xf4)],
                    'key': 'id'
                },
                'onUpdate': f[M(0xca)],
                'onDelete': f[M(0xd2)],
                'allowNull': ![],
                'defaultValue': 0x1
            })
        ]);
    },
    'down': d => {
        const N = K, O = J, e = {};
        e[N(0xf9)] = N(0xdd), e[N(0xe7)] = N(0xcf), e[N(0xcd)] = N(0xea), e[N(0xcc)] = N(0xf2), e[N(0xe0)] = O(0xe8), e[O(0xe5)] = N(0xfb), e[N(0xeb)] = N(0xf5), e[N(0xe9)] = N(0xf7);
        const f = e;
        return Promise[O(0xe2)]([
            d[O(0xf3) + 'mn'](f[N(0xf9)], f[O(0xe7)]),
            d[N(0xf3) + 'mn'](f[O(0xcd)], f[N(0xe7)]),
            d[N(0xf3) + 'mn'](f[O(0xcc)], f[O(0xe7)]),
            d[O(0xf3) + 'mn'](f[O(0xe0)], f[N(0xe7)]),
            d[O(0xf3) + 'mn'](f[N(0xe5)], f[N(0xe7)]),
            d[N(0xf3) + 'mn'](f[O(0xeb)], f[O(0xe7)]),
            d[N(0xf3) + 'mn'](f[N(0xe9)], f[O(0xe7)])
        ]);
    }
};