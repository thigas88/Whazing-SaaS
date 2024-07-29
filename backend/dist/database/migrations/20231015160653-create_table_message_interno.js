'use strict';
const F = b, G = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2245 + 0x1 * 0xd45 + 0x1624);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(D(0x14e)) / (0x2357 + 0x3af * -0x2 + 0x6fe * -0x4) * (-parseInt(E(0x12b)) / (0x264f + 0x1f0f + -0x455c)) + -parseInt(E(0x14a)) / (0x2 * -0x685 + -0x1 * -0x1175 + -0x468) + -parseInt(E(0x150)) / (0x261f + -0xff3 + -0x1628) * (-parseInt(E(0x153)) / (0xfcc * 0x2 + 0x31 * 0x51 + -0x4 * 0xbc5)) + parseInt(D(0x143)) / (0x466 * 0x1 + 0x293 + -0x6f3) * (parseInt(D(0x13f)) / (-0x11ea + -0x15 * 0x101 + 0x5 * 0x7ce)) + -parseInt(E(0x12d)) / (0x5ae * -0x1 + 0x1 * -0x1e19 + 0x59 * 0x67) * (-parseInt(D(0x14c)) / (-0x1a10 + -0x24bc + 0x3ed5)) + parseInt(D(0x13d)) / (0xd09 + -0x1b31 * 0x1 + -0x719 * -0x2) * (-parseInt(D(0x136)) / (-0x25ae + -0x1de8 + 0x1d * 0x255)) + -parseInt(E(0x145)) / (0x3cb * -0x4 + 0x2464 + -0x152c) * (-parseInt(D(0x139)) / (-0xbfe + -0x1 * -0x839 + 0x1 * 0x3d2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xf9558 + 0x5ea2 * -0x13 + 0x20202d));
const C = {};
C[F(0x149)] = !![], Object[G(0x140) + G(0x129)](exports, G(0x13a), C);
const sequelize_1 = require(F(0x148));
function a() {
    const L = [
        '53838JnHrWn',
        'CASCADE',
        '8828076fULWmR',
        'HdCBz',
        'exports',
        'sequelize',
        'value',
        '3025176WMnvGK',
        'SET\x20NULL',
        '9ydkOQd',
        'BIGINT',
        '1DXBYVR',
        'Tenants',
        '189640maYYcq',
        'primaryKey',
        'STRING',
        '5ljoqos',
        'MxdRc',
        'DataTypes',
        'createTabl',
        'DATE',
        'defaultVal',
        'erty',
        'autoIncrem',
        '272038haurGq',
        'Groups',
        '6872120nqcUIs',
        'ent',
        'TEXT',
        'BOOLEAN',
        'InternalMe',
        'allowNull',
        'FRYPr',
        'qUmfW',
        'NPflD',
        '77leWWbh',
        'type',
        'Users',
        '13pOiipQ',
        '__esModule',
        'ssage',
        'INTEGER',
        '221250ylsoCs',
        'dropTable',
        '7HIEbEx',
        'defineProp',
        'ldCnz',
        'uQoJN'
    ];
    a = function () {
        return L;
    };
    return a();
}
module[F(0x147)] = {
    'up': i => {
        const H = F, I = G, j = {};
        j[H(0x135)] = H(0x131) + H(0x13b), j[I(0x141)] = H(0x138), j[I(0x124)] = H(0x144), j[H(0x142)] = H(0x14b), j[I(0x146)] = H(0x12c), j[H(0x134)] = I(0x14f);
        const k = j, l = {};
        l[H(0x137)] = sequelize_1[I(0x125)][H(0x14d)], l[H(0x151)] = !![], l[I(0x12a) + H(0x12e)] = !![], l[H(0x132)] = ![];
        const m = {};
        m[I(0x137)] = sequelize_1[H(0x125)][H(0x12f)], m[I(0x132)] = ![];
        const n = {};
        n[I(0x137)] = sequelize_1[H(0x125)][I(0x130)], n[I(0x132)] = ![], n[I(0x128) + 'ue'] = ![];
        const o = {};
        o[H(0x137)] = sequelize_1[H(0x125)][H(0x152)];
        const p = {};
        return p[I(0x137)] = sequelize_1[H(0x125)][H(0x152)], i[H(0x126) + 'e'](k[H(0x135)], {
            'id': l,
            'text': m,
            'read': n,
            'mediaType': o,
            'mediaUrl': p,
            'senderId': {
                'type': sequelize_1[I(0x125)][H(0x13c)],
                'references': {
                    'model': k[H(0x141)],
                    'key': 'id'
                },
                'onUpdate': k[I(0x124)],
                'onDelete': k[H(0x142)]
            },
            'receiverId': {
                'type': sequelize_1[I(0x125)][H(0x13c)],
                'references': {
                    'model': k[H(0x141)],
                    'key': 'id'
                },
                'onUpdate': k[H(0x124)],
                'onDelete': k[H(0x142)]
            },
            'groupId': {
                'type': sequelize_1[I(0x125)][I(0x13c)],
                'references': {
                    'model': k[H(0x146)],
                    'key': 'id'
                },
                'onUpdate': k[H(0x124)],
                'onDelete': k[I(0x124)]
            },
            'tenantId': {
                'type': sequelize_1[I(0x125)][H(0x13c)],
                'references': {
                    'model': k[I(0x134)],
                    'key': 'id'
                },
                'onUpdate': k[I(0x124)],
                'onDelete': k[I(0x124)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'timestamp': {
                'type': sequelize_1[I(0x125)][I(0x14d)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[H(0x125)][H(0x127)](0x234c + -0xabd + -0x1889),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[I(0x125)][H(0x127)](-0x194b + 0x7 * 0x14c + 0x103d),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const J = G, K = G, e = {};
        e[J(0x133)] = J(0x131) + J(0x13b);
        const f = e;
        return d[K(0x13e)](f[J(0x133)]);
    }
};