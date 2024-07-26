'use strict';
const r = b, s = b;
function a() {
    const x = [
        'createTabl',
        'ReadMessag',
        '92127hiEOdr',
        'dropTable',
        'DataTypes',
        'SET\x20NULL',
        'DATE',
        'value',
        'Ygulb',
        '254365Xdmgat',
        '6614LAPaVF',
        'InternalMe',
        '7nQWHER',
        'xBsoQ',
        '1861900kkXEdI',
        'INTEGER',
        'allowNull',
        'primaryKey',
        'ent',
        '1028632uXYSwJ',
        'BIGINT',
        '16SRlIJs',
        '69882QvIKbl',
        'erty',
        'eGroups',
        'exports',
        '__esModule',
        'defineProp',
        'zWcAN',
        '24xLZSKf',
        'UsersGroup',
        'KjBMh',
        'autoIncrem',
        'qWWMf',
        '1473939EuCUmI',
        'sequelize',
        'type',
        'CASCADE',
        '8QTGMtT',
        '40KWtIwx',
        'JuzQH',
        'ssage'
    ];
    a = function () {
        return x;
    };
    return a();
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x166)) / (-0x2669 * 0x1 + 0x1 * 0x1685 + 0xd * 0x139) * (-parseInt(p(0x149)) / (0x4 * 0x485 + 0x21da + -0x33ec * 0x1)) + parseInt(q(0x16b)) / (0x1 * -0x55d + 0x404 * -0x3 + 0x45b * 0x4) + -parseInt(q(0x154)) / (0x26c * -0x2 + 0x11 * -0x172 + 0x1d6e) * (parseInt(p(0x148)) / (0xd3 * 0x29 + -0x2e * 0x5e + 0x10e2 * -0x1)) + -parseInt(q(0x155)) / (-0x218e + -0x4 * 0x72d + 0x3e48) * (-parseInt(q(0x14b)) / (0x2322 + -0x1e82 + -0x499)) + -parseInt(q(0x165)) / (-0x2189 + -0x164e + 0x37df) * (-parseInt(q(0x161)) / (0xd47 + 0xd0 * 0x1c + 0x11ff * -0x2)) + parseInt(p(0x14d)) / (-0x10ea + -0x6c1 * 0x2 + -0x1 * -0x1e76) + parseInt(p(0x152)) / (0x1 * -0x1775 + -0x2 * -0x3ad + 0x1026) * (-parseInt(p(0x15c)) / (0x499 * -0x6 + -0x237b + 0x3f1d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2b121 + -0x2afed + 0x76ccf));
const o = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x95 * -0x23 + -0xc28 * -0x1 + -0x1f44);
        let h = e[f];
        return h;
    }, b(c, d);
}
o[r(0x146)] = !![], Object[r(0x15a) + r(0x156)](exports, r(0x159), o);
const sequelize_1 = require(s(0x162));
module[s(0x158)] = {
    'up': e => {
        const t = r, u = r, f = {};
        f[t(0x15e)] = u(0x16a) + u(0x157), f[u(0x160)] = t(0x14a) + u(0x168), f[t(0x147)] = t(0x164), f[u(0x14c)] = t(0x144), f[u(0x167)] = t(0x15d) + 's';
        const g = f, h = {};
        return h[t(0x163)] = sequelize_1[t(0x143)][t(0x14e)], h[u(0x150)] = !![], h[t(0x15f) + u(0x151)] = !![], h[u(0x14f)] = ![], e[u(0x169) + 'e'](g[t(0x15e)], {
            'id': h,
            'internalMessageId': {
                'type': sequelize_1[t(0x143)][t(0x153)],
                'references': {
                    'model': g[t(0x160)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x147)],
                'onDelete': g[t(0x14c)]
            },
            'userGroupId': {
                'type': sequelize_1[t(0x143)][u(0x14e)],
                'references': {
                    'model': g[u(0x167)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x147)],
                'onDelete': g[u(0x147)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[u(0x143)][t(0x145)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x143)][u(0x145)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = s, e = {};
        e[v(0x15b)] = w(0x16a) + v(0x157);
        const f = e;
        return d[w(0x16c)](f[w(0x15b)]);
    }
};