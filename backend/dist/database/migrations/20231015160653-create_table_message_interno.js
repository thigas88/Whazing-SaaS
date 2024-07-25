'use strict';
const F = b, G = b;
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(D(0x1eb)) / (0x5 * -0x5e1 + 0x1bed + 0x179) * (-parseInt(D(0x1cf)) / (-0x10a9 + -0x44 * 0x1 + 0x11 * 0xff)) + -parseInt(D(0x1e6)) / (-0x1f36 + 0xd7a + -0x1 * -0x11bf) + -parseInt(D(0x1d5)) / (0x14cc + 0x2f * 0x47 + -0x21d1) + -parseInt(D(0x1c3)) / (-0x1aec + -0x80f + 0x2300) + -parseInt(E(0x1d2)) / (0x19bc + -0x240f + 0x373 * 0x3) * (-parseInt(E(0x1cc)) / (-0xc03 + 0x1154 * -0x2 + 0x2b * 0x116)) + parseInt(D(0x1d0)) / (0x2 * -0x6fd + -0x3db + 0x11dd) + -parseInt(E(0x1e9)) / (-0x14 * -0x13d + -0x2 * 0x709 + -0xaa9) * (-parseInt(E(0x1d4)) / (-0x1238 + -0x55f + 0x1 * 0x17a1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7e94 * 0x4 + 0x97 * 0xb5 + -0xc96e * -0x4));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x231a + 0xb * 0x229 + 0x22 * -0x1ae);
        let h = e[f];
        return h;
    }, b(c, d);
}
const C = {};
C[F(0x1cb)] = !![], Object[F(0x1e0) + G(0x1ed)](exports, F(0x1c1), C);
const sequelize_1 = require(F(0x1db));
module[F(0x1d9)] = {
    'up': i => {
        const H = G, I = G, j = {};
        j[H(0x1ca)] = I(0x1c7) + I(0x1e3), j[I(0x1da)] = I(0x1dc), j[H(0x1d7)] = I(0x1c4), j[H(0x1c2)] = H(0x1e1), j[I(0x1ec)] = I(0x1d6), j[I(0x1dd)] = I(0x1c6);
        const k = j, l = {};
        l[H(0x1c5)] = sequelize_1[H(0x1de)][I(0x1c8)], l[I(0x1df)] = !![], l[I(0x1d1) + H(0x1ea)] = !![], l[H(0x1cd)] = ![];
        const m = {};
        m[H(0x1c5)] = sequelize_1[H(0x1de)][I(0x1e4)], m[I(0x1cd)] = ![];
        const n = {};
        n[I(0x1c5)] = sequelize_1[I(0x1de)][H(0x1d3)], n[I(0x1cd)] = ![], n[I(0x1e5) + 'ue'] = ![];
        const o = {};
        o[H(0x1c5)] = sequelize_1[H(0x1de)][I(0x1c9)];
        const p = {};
        return p[H(0x1c5)] = sequelize_1[I(0x1de)][H(0x1c9)], i[H(0x1e2) + 'e'](k[H(0x1ca)], {
            'id': l,
            'text': m,
            'read': n,
            'mediaType': o,
            'mediaUrl': p,
            'senderId': {
                'type': sequelize_1[H(0x1de)][H(0x1e8)],
                'references': {
                    'model': k[I(0x1da)],
                    'key': 'id'
                },
                'onUpdate': k[H(0x1d7)],
                'onDelete': k[I(0x1c2)]
            },
            'receiverId': {
                'type': sequelize_1[I(0x1de)][H(0x1e8)],
                'references': {
                    'model': k[I(0x1da)],
                    'key': 'id'
                },
                'onUpdate': k[I(0x1d7)],
                'onDelete': k[I(0x1c2)]
            },
            'groupId': {
                'type': sequelize_1[I(0x1de)][H(0x1e8)],
                'references': {
                    'model': k[I(0x1ec)],
                    'key': 'id'
                },
                'onUpdate': k[I(0x1d7)],
                'onDelete': k[I(0x1d7)]
            },
            'tenantId': {
                'type': sequelize_1[I(0x1de)][I(0x1e8)],
                'references': {
                    'model': k[H(0x1dd)],
                    'key': 'id'
                },
                'onUpdate': k[I(0x1d7)],
                'onDelete': k[H(0x1d7)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'timestamp': {
                'type': sequelize_1[H(0x1de)][I(0x1c8)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[H(0x1de)][H(0x1e7)](0x2621 + -0x93 + -0x2588),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[H(0x1de)][H(0x1e7)](0x7f + 0x3 * -0xbbd + -0x1 * -0x22be),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const J = G, K = G, e = {};
        e[J(0x1d8)] = J(0x1c7) + J(0x1e3);
        const f = e;
        return d[J(0x1ce)](f[J(0x1d8)]);
    }
};
function a() {
    const L = [
        'dropTable',
        '5746eCUBHZ',
        '2539664iueSXE',
        'autoIncrem',
        '12hfNphR',
        'BOOLEAN',
        '30ICheNF',
        '166108tycQPA',
        'Groups',
        'GkleP',
        'pybHt',
        'exports',
        'xJByb',
        'sequelize',
        'Users',
        'yrORa',
        'DataTypes',
        'primaryKey',
        'defineProp',
        'SET\x20NULL',
        'createTabl',
        'ssage',
        'TEXT',
        'defaultVal',
        '2110857QQXNVv',
        'DATE',
        'INTEGER',
        '4005333MVVzfX',
        'ent',
        '22zFiGak',
        'jPqcM',
        'erty',
        '__esModule',
        'jyEML',
        '3513500bctjyT',
        'CASCADE',
        'type',
        'Tenants',
        'InternalMe',
        'BIGINT',
        'STRING',
        'PmcED',
        'value',
        '775929duvBEa',
        'allowNull'
    ];
    a = function () {
        return L;
    };
    return a();
}