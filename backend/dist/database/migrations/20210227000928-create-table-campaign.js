'use strict';
function a() {
    const R = [
        '3231760NljWaC',
        'FePzx',
        'allowNull',
        'sequelize',
        'DataTypes',
        'INTEGER',
        '3547621wjkKTE',
        'bENWU',
        'DATE',
        'IvAcc',
        'createTabl',
        '18bokRjS',
        'Tenants',
        '3573ynMOCJ',
        'all',
        'defineProp',
        '1636HsubIf',
        'autoIncrem',
        'primaryKey',
        'RbijU',
        'MxChq',
        'Whatsapps',
        'Campaigns',
        'dropTable',
        '__esModule',
        'SRBaT',
        'value',
        'SET\x20NULL',
        '56KBqqjR',
        'TEXT',
        '342594UtuXjT',
        '45ewKOIe',
        'ent',
        '591402rfbHdj',
        'STRING',
        'pending',
        'type',
        'CASCADE',
        '355883fgUQas',
        'Users',
        'erty',
        'zZYYB',
        'PZvBn',
        '48965zBNDqF',
        'exports'
    ];
    a = function () {
        return R;
    };
    return a();
}
const L = b, M = b;
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(J(0x175)) / (0x222a + 0x274 * 0x8 + -0x35c9) + parseInt(J(0x170)) / (0x1636 + 0xe3b * 0x1 + -0x246f) + parseInt(J(0x15c)) / (-0x1 * -0xc4f + 0x1677 + -0x22c3) * (-parseInt(K(0x15f)) / (0xb7 * -0x2c + -0x17ac + 0x1b92 * 0x2)) + parseInt(K(0x16e)) / (-0x5e8 + -0xa13 + 0x1000) * (parseInt(K(0x16d)) / (-0x19e1 + -0x11b * -0x5 + 0x1460)) + parseInt(J(0x14d)) / (0xd49 + 0x1f0b + -0xb * 0x407) * (parseInt(K(0x16b)) / (-0x26c3 * -0x1 + -0x1cf0 + 0x17 * -0x6d)) + -parseInt(K(0x15a)) / (0x1a * 0x65 + 0x7 * 0x52b + -0x2e66) * (-parseInt(K(0x14f)) / (-0x17 * 0xbe + 0x15ad * 0x1 + -0x491 * 0x1)) + -parseInt(J(0x155)) / (0x3ad + 0x1212 * -0x1 + 0xe70);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7ce8a + 0x17ad3 * 0x5 + -0x1 * -0x5962f));
const I = {};
I[L(0x169)] = !![], Object[M(0x15e) + L(0x177)](exports, L(0x167), I);
const sequelize_1 = require(M(0x152));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2145 * -0x1 + 0x1e0c * -0x1 + -0x1ed);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[M(0x14e)] = {
    'up': g => {
        const N = M, O = M, h = {};
        h[N(0x178)] = O(0x165), h[N(0x14c)] = N(0x172), h[O(0x163)] = N(0x164), h[O(0x168)] = N(0x174), h[N(0x156)] = N(0x16a), h[N(0x162)] = O(0x176), h[N(0x150)] = O(0x15b);
        const i = h, j = {};
        j[N(0x173)] = sequelize_1[O(0x153)][N(0x154)], j[O(0x161)] = !![], j[O(0x160) + O(0x16f)] = !![], j[N(0x151)] = ![];
        const k = {};
        k[O(0x173)] = sequelize_1[N(0x153)][O(0x171)], k[O(0x151)] = ![];
        const l = {};
        return l[N(0x173)] = sequelize_1[O(0x153)][O(0x157)], l[O(0x151)] = ![], Promise[N(0x15d)]([g[O(0x159) + 'e'](i[O(0x178)], {
                'id': j,
                'name': k,
                'start': l,
                'status': {
                    'type': sequelize_1[O(0x153)][N(0x171)],
                    'allowNull': ![],
                    'defaultValue': i[O(0x14c)]
                },
                'sessionId': {
                    'type': sequelize_1[N(0x153)][O(0x154)],
                    'references': {
                        'model': i[O(0x163)],
                        'key': 'id'
                    },
                    'onUpdate': i[N(0x168)],
                    'onDelete': i[N(0x156)]
                },
                'message1': {
                    'type': sequelize_1[N(0x153)][N(0x16c)],
                    'allowNull': ![]
                },
                'message2': {
                    'type': sequelize_1[O(0x153)][N(0x16c)],
                    'allowNull': ![]
                },
                'message3': {
                    'type': sequelize_1[O(0x153)][N(0x16c)],
                    'allowNull': ![]
                },
                'mediaUrl': {
                    'type': sequelize_1[O(0x153)][O(0x171)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'mediaType': {
                    'type': sequelize_1[O(0x153)][O(0x171)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'userId': {
                    'type': sequelize_1[N(0x153)][N(0x154)],
                    'references': {
                        'model': i[O(0x162)],
                        'key': 'id'
                    },
                    'onUpdate': i[N(0x168)],
                    'onDelete': i[N(0x156)]
                },
                'tenantId': {
                    'type': sequelize_1[N(0x153)][N(0x154)],
                    'references': {
                        'model': i[N(0x150)],
                        'key': 'id'
                    },
                    'onUpdate': i[N(0x168)],
                    'onDelete': i[N(0x168)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'createdAt': {
                    'type': sequelize_1[N(0x153)][N(0x157)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[N(0x153)][N(0x157)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const P = M, Q = L, e = {};
        e[P(0x158)] = P(0x165);
        const f = e;
        return Promise[P(0x15d)]([d[Q(0x166)](f[Q(0x158)])]);
    }
};