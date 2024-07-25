'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x167)) / (0x5 * -0x3b + -0x1f7c * 0x1 + 0x20a4) * (parseInt(q(0x174)) / (-0x208 * 0x1 + 0x871 * 0x1 + -0x667)) + parseInt(q(0x17a)) / (-0x1981 * -0x1 + 0x258 * -0xc + 0x2a2) * (-parseInt(q(0x175)) / (0xaa0 + 0x80d + -0x12a9)) + -parseInt(p(0x15e)) / (-0x9 * -0x189 + 0xa * -0x114 + -0x182 * 0x2) * (-parseInt(q(0x16c)) / (0x1 * 0x5cb + -0x5 * -0x1a1 + -0xdea)) + parseInt(p(0x17b)) / (0x1f1e + -0xb10 + -0x1407) + -parseInt(q(0x171)) / (-0xd29 + -0x1af * 0x7 + 0xc7d * 0x2) + -parseInt(p(0x15f)) / (0x1d25 + -0x22a9 + 0x58d) + parseInt(q(0x177)) / (-0x47 * -0x7 + 0x984 + -0xb6b) * (parseInt(q(0x169)) / (-0x10d0 + 0x34e + -0xd8d * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1c0d * 0x1d + 0xe70f * 0x2 + -0x1d247));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xa8a * -0x1 + 0x1 * -0x2393 + 0x1a67);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = {};
function a() {
    const x = [
        'CASCADE',
        'allowNull',
        '7RyhYLa',
        'GPfiv',
        '341AyaKtL',
        'ent',
        'UsersGroup',
        '66CpnWVQ',
        'DataTypes',
        'erty',
        'autoIncrem',
        'sequelize',
        '3164752EasSeL',
        'DATE',
        'defineProp',
        '61014JKHkQY',
        '39768iMQHQt',
        'primaryKey',
        '358010qfthPH',
        'Groups',
        'type',
        '87sTULCD',
        '515641INlpCk',
        'BZeTC',
        'EpHlu',
        'NYSgZ',
        'Users',
        'value',
        'INTEGER',
        'UsersQueue',
        '73665NjJoLW',
        '2168208AzxKKh',
        'createTabl',
        '__esModule',
        'rwsYw',
        'exports',
        'dropTable'
    ];
    a = function () {
        return x;
    };
    return a();
}
o[r(0x180)] = !![], Object[r(0x173) + r(0x16e)](exports, r(0x161), o);
const sequelize_1 = require(s(0x170));
module[r(0x163)] = {
    'up': e => {
        const t = r, u = r, f = {};
        f[t(0x168)] = u(0x16b) + 's', f[u(0x17c)] = u(0x178), f[u(0x17d)] = u(0x165), f[t(0x162)] = u(0x17f);
        const g = f, h = {};
        return h[u(0x179)] = sequelize_1[t(0x16d)][u(0x181)], h[u(0x176)] = !![], h[t(0x16f) + t(0x16a)] = !![], h[t(0x166)] = ![], e[t(0x160) + 'e'](g[u(0x168)], {
            'id': h,
            'groupId': {
                'type': sequelize_1[t(0x16d)][u(0x181)],
                'references': {
                    'model': g[t(0x17c)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x17d)],
                'onDelete': g[t(0x17d)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[t(0x16d)][t(0x181)],
                'references': {
                    'model': g[u(0x162)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x17d)],
                'onDelete': g[u(0x17d)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[t(0x16d)][t(0x172)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0x16d)][t(0x172)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = s, e = {};
        e[v(0x17e)] = w(0x182) + 's';
        const f = e;
        return d[v(0x164)](f[w(0x17e)]);
    }
};