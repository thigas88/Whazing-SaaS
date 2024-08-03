'use strict';
const J = b, K = b;
function a() {
    const P = [
        'imwVW',
        'Settings',
        'WvHXj',
        '5mfnPLd',
        'AROri',
        'GUnZo',
        'jgVJQ',
        'NwYht',
        'TjDLu',
        'Tickets',
        '1337428IbscXM',
        '6005784oszxqX',
        'CASCADE',
        'LhaCp',
        'defineProp',
        '150095NErotd',
        'AutoReply',
        'Whatsapps',
        '260EzFShK',
        'addColumn',
        'FurIK',
        '14NPBFkc',
        'restrict',
        'HlUxA',
        '31960nhcdCQ',
        'tenantId',
        '499653JCKOkq',
        'VMNDE',
        'RBqZo',
        'erty',
        'value',
        'lBBZD',
        'exports',
        'sequelize',
        'RFJOM',
        'Queues',
        'lPCfx',
        'pooVz',
        '409470AhSEzp',
        '105177YXNzQm',
        'FYrvo',
        '441gFqslu',
        'Users',
        '__esModule',
        'DataTypes',
        'vqtRl',
        'Contacts',
        'INTEGER',
        '9gmHpuy',
        'all',
        'Tenants',
        'removeColu',
        'KAafq'
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
            const f = -parseInt(H(0x1c6)) / (0xcc + -0xda * 0x19 + 0x147f) * (parseInt(I(0x1e9)) / (-0x54d + 0x160d + -0x10be)) + parseInt(H(0x1cf)) / (-0x2 * 0xe3f + -0x1447 + 0x30c8) * (parseInt(I(0x1de)) / (0x23ec + -0x1 * 0x11b3 + -0x1235)) + parseInt(H(0x1d7)) / (0x14ac + 0x39 + -0x10 * 0x14e) * (-parseInt(H(0x1c5)) / (-0x513 + -0x18f * 0xb + 0xd * 0x1b6)) + -parseInt(H(0x1c8)) / (-0xa9b + -0x13b4 + 0x1e56) * (-parseInt(H(0x1b7)) / (0x59 * -0x32 + 0x21a1 * 0x1 + -0x1037)) + parseInt(I(0x1b9)) / (-0x184e + -0xae5 + 0x6e * 0x52) + -parseInt(I(0x1e6)) / (-0x1aab + 0x1d00 + -0x24b) * (parseInt(H(0x1e3)) / (-0x221b + 0x1928 + 0x8fe)) + parseInt(I(0x1df)) / (0x1253 + 0x24a5 + -0x25 * 0x17c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x6ebde * 0x2 + -0x1101 * 0x111 + 0x29eaba));
const G = {};
G[J(0x1bd)] = !![], Object[J(0x1e2) + K(0x1bc)](exports, K(0x1ca), G);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x464 * -0x1 + -0xb46 * 0x3 + 0x27ec);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(K(0x1c0));
module[J(0x1bf)] = {
    'up': d => {
        const L = K, M = J, e = {};
        e[L(0x1d6)] = L(0x1dd), e[M(0x1be)] = M(0x1b8), e[L(0x1bb)] = L(0x1d1), e[L(0x1db)] = L(0x1e0), e[M(0x1c7)] = M(0x1ea), e[L(0x1c1)] = L(0x1cd), e[L(0x1e8)] = L(0x1c2), e[M(0x1c3)] = L(0x1d5), e[L(0x1b6)] = M(0x1e4), e[M(0x1ba)] = L(0x1c9), e[L(0x1dc)] = L(0x1e5);
        const f = e;
        return Promise[M(0x1d0)]([
            d[L(0x1e7)](f[M(0x1d6)], f[M(0x1be)], {
                'type': sequelize_1[M(0x1cb)][M(0x1ce)],
                'references': {
                    'model': f[M(0x1bb)],
                    'key': 'id'
                },
                'onUpdate': f[M(0x1db)],
                'onDelete': f[M(0x1c7)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0x1e7)](f[L(0x1c1)], f[L(0x1be)], {
                'type': sequelize_1[L(0x1cb)][L(0x1ce)],
                'references': {
                    'model': f[M(0x1bb)],
                    'key': 'id'
                },
                'onUpdate': f[M(0x1db)],
                'onDelete': f[M(0x1c7)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0x1e7)](f[L(0x1e8)], f[M(0x1be)], {
                'type': sequelize_1[M(0x1cb)][L(0x1ce)],
                'references': {
                    'model': f[L(0x1bb)],
                    'key': 'id'
                },
                'onUpdate': f[M(0x1db)],
                'onDelete': f[M(0x1c7)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0x1e7)](f[L(0x1c3)], f[L(0x1be)], {
                'type': sequelize_1[L(0x1cb)][M(0x1ce)],
                'references': {
                    'model': f[M(0x1bb)],
                    'key': 'id'
                },
                'onUpdate': f[L(0x1db)],
                'onDelete': f[M(0x1c7)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[L(0x1e7)](f[M(0x1b6)], f[L(0x1be)], {
                'type': sequelize_1[M(0x1cb)][L(0x1ce)],
                'references': {
                    'model': f[M(0x1bb)],
                    'key': 'id'
                },
                'onUpdate': f[M(0x1db)],
                'onDelete': f[L(0x1c7)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0x1e7)](f[M(0x1ba)], f[L(0x1be)], {
                'type': sequelize_1[M(0x1cb)][M(0x1ce)],
                'references': {
                    'model': f[L(0x1bb)],
                    'key': 'id'
                },
                'onUpdate': f[L(0x1db)],
                'onDelete': f[M(0x1c7)],
                'allowNull': ![],
                'defaultValue': 0x1
            }),
            d[M(0x1e7)](f[M(0x1dc)], f[L(0x1be)], {
                'type': sequelize_1[M(0x1cb)][M(0x1ce)],
                'references': {
                    'model': f[L(0x1bb)],
                    'key': 'id'
                },
                'onUpdate': f[M(0x1db)],
                'onDelete': f[M(0x1c7)],
                'allowNull': ![],
                'defaultValue': 0x1
            })
        ]);
    },
    'down': d => {
        const N = J, O = K, e = {};
        e[N(0x1da)] = O(0x1dd), e[O(0x1cc)] = O(0x1b8), e[O(0x1e1)] = O(0x1cd), e[O(0x1d3)] = N(0x1c2), e[N(0x1d8)] = O(0x1d5), e[N(0x1d4)] = O(0x1e4), e[N(0x1d9)] = N(0x1c9), e[N(0x1c4)] = O(0x1e5);
        const f = e;
        return Promise[O(0x1d0)]([
            d[N(0x1d2) + 'mn'](f[N(0x1da)], f[O(0x1cc)]),
            d[O(0x1d2) + 'mn'](f[O(0x1e1)], f[N(0x1cc)]),
            d[N(0x1d2) + 'mn'](f[N(0x1d3)], f[O(0x1cc)]),
            d[O(0x1d2) + 'mn'](f[O(0x1d8)], f[O(0x1cc)]),
            d[O(0x1d2) + 'mn'](f[N(0x1d4)], f[O(0x1cc)]),
            d[N(0x1d2) + 'mn'](f[N(0x1d9)], f[O(0x1cc)]),
            d[N(0x1d2) + 'mn'](f[N(0x1c4)], f[N(0x1cc)])
        ]);
    }
};