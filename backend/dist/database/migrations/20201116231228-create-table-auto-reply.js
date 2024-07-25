'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1823 + 0x125 + 0x1778 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x7f)) / (0x1e1e + -0x2025 + 0x208) * (-parseInt(t(0x8a)) / (0x2473 * 0x1 + 0x1697 + 0xec2 * -0x4)) + -parseInt(t(0x9b)) / (0x5ab + 0x3c4 * 0x9 + -0x1 * 0x278c) * (parseInt(u(0x9e)) / (0x1 * 0x23 + 0x60a + -0x629)) + -parseInt(u(0x8f)) / (0x5d * 0x42 + -0xa9 * -0x33 + -0x39a0) + parseInt(t(0x99)) / (0x24f8 + 0x1a5d + -0x355 * 0x13) + -parseInt(t(0x91)) / (-0x43 * -0x2b + -0x2172 + 0x2c7 * 0x8) * (parseInt(u(0x7e)) / (-0x80f + 0x9 * 0x1da + 0x5 * -0x1b7)) + -parseInt(u(0x8e)) / (0xc47 + -0x84e * 0x1 + -0x30 * 0x15) + parseInt(u(0x7c)) / (-0x200 + -0x144a + -0x1 * -0x1654) * (parseInt(t(0x83)) / (-0x1 * -0x19f6 + -0x1bc5 + 0x1da));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd3e28 + -0x2519f * -0x7 + -0x140b9c));
function a() {
    const B = [
        '__esModule',
        'ySlrM',
        'lEWoe',
        'primaryKey',
        'IEeLJ',
        '2805396hskQHf',
        'STRING',
        '138cUWXpm',
        'value',
        'HKUET',
        '91460VIEHsV',
        'type',
        'CASCADE',
        'defineProp',
        '15072280MJpEvb',
        'allowNull',
        '8fCXKKC',
        '280414ogUkQE',
        'createTabl',
        'dropTable',
        'DataTypes',
        '33wngSpZ',
        'INTEGER',
        'sequelize',
        'DATE',
        'erty',
        'AutoReply',
        'MuikF',
        '2DlEDoe',
        'SET\x20NULL',
        'autoIncrem',
        'exports',
        '10346904FqGxkK',
        '3407030gcpTMA',
        'defaultVal',
        '8456189EUuWdC',
        'Users',
        'ent'
    ];
    a = function () {
        return B;
    };
    return a();
}
const s = {};
s[v(0x9c)] = !![], Object[v(0x7b) + w(0x87)](exports, w(0x94), s);
const sequelize_1 = require(w(0x85));
module[w(0x8d)] = {
    'up': h => {
        const x = w, y = v, i = {};
        i[x(0x96)] = x(0x88), i[y(0x9d)] = x(0x92), i[x(0x89)] = y(0x7a), i[y(0x98)] = x(0x8b);
        const j = i, k = {};
        k[y(0x9f)] = sequelize_1[x(0x82)][y(0x84)], k[y(0x8c) + x(0x93)] = !![], k[x(0x97)] = !![], k[y(0x7d)] = ![];
        const l = {};
        l[y(0x9f)] = sequelize_1[x(0x82)][x(0x9a)], l[y(0x7d)] = ![];
        const m = {};
        m[y(0x9f)] = sequelize_1[x(0x82)][y(0x9a)], m[x(0x7d)] = ![];
        const n = {};
        return n[y(0x9f)] = sequelize_1[x(0x82)][x(0x84)], n[x(0x7d)] = ![], n[y(0x90) + 'ue'] = 0x0, h[y(0x80) + 'e'](j[y(0x96)], {
            'id': k,
            'reply': l,
            'words': m,
            'action': n,
            'userId': {
                'type': sequelize_1[x(0x82)][y(0x84)],
                'references': {
                    'model': j[y(0x9d)],
                    'key': 'id'
                },
                'onUpdate': j[x(0x89)],
                'onDelete': j[y(0x98)]
            },
            'createdAt': {
                'type': sequelize_1[y(0x82)][x(0x86)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[y(0x82)][x(0x86)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = v, A = v, e = {};
        e[z(0x95)] = A(0x88);
        const f = e;
        return d[A(0x81)](f[A(0x95)]);
    }
};