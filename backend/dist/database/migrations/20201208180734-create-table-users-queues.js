'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1dc)) / (-0x1 * -0x74d + 0x1ab1 + -0x21fd) * (parseInt(q(0x1ca)) / (-0x3 * 0x4f0 + -0xd5f * -0x1 + 0x7 * 0x35)) + -parseInt(p(0x1c6)) / (0x2133 + -0x10c6 * 0x2 + 0x5c * 0x1) * (-parseInt(p(0x1c3)) / (0x1167 + -0x3 + -0x10 * 0x116)) + parseInt(q(0x1d2)) / (0x2 * -0x211 + -0x537 + 0x95e * 0x1) * (parseInt(q(0x1d7)) / (0x704 + -0x3c4 * 0x7 + 0x135e)) + -parseInt(q(0x1bf)) / (-0x57d * 0x4 + -0x11 * -0x4 + 0x15b7) * (parseInt(q(0x1de)) / (-0x9ce * -0x2 + -0x779 * 0x4 + 0xa50 * 0x1)) + -parseInt(q(0x1d5)) / (-0x5ae + 0x2bd + 0x1 * 0x2fa) + parseInt(p(0x1c5)) / (0x15a + 0x9b * -0xe + -0x2 * -0x395) * (-parseInt(q(0x1c4)) / (-0x2c * -0xa0 + 0x35 * 0x73 + 0x44 * -0xc1)) + parseInt(p(0x1cd)) / (0x58 * 0x26 + -0x11 * -0x18d + 0x11 * -0x251) * (parseInt(p(0x1e1)) / (-0x1131 + 0xb97 + 0x5a7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x13f7d + -0x28 * -0x11ea + 0x356d));
function a() {
    const x = [
        '2853994YhNDmL',
        'iewLX',
        'DataTypes',
        'Queues',
        '227689wIoHOG',
        'exports',
        'ent',
        'defineProp',
        '21236YzgeEB',
        '154MXtIHF',
        '123070oOFrXC',
        '3EwqEuA',
        'UsersQueue',
        'dropTable',
        'INTEGER',
        '2LhtkgU',
        'autoIncrem',
        'Users',
        '24lTiDnM',
        'type',
        'erty',
        'yazKK',
        '__esModule',
        '273495TvacLK',
        'value',
        'allowNull',
        '1122975Gzxayn',
        'SCzcv',
        '18xzIJxD',
        'DATE',
        'primaryKey',
        'WPtdv',
        'CASCADE',
        '163554CsZooX',
        'sequelize',
        '8gJiviw',
        'ZusRk',
        'createTabl'
    ];
    a = function () {
        return x;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x35 * 0x1f + 0x6 * 0x3ae + 0x73 * -0x1f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = {};
o[r(0x1d3)] = !![], Object[r(0x1c2) + r(0x1cf)](exports, r(0x1d1), o);
const sequelize_1 = require(r(0x1dd));
module[s(0x1c0)] = {
    'up': e => {
        const t = r, u = r, f = {};
        f[t(0x1d0)] = t(0x1c7) + 's', f[t(0x1bc)] = u(0x1be), f[t(0x1df)] = u(0x1db), f[u(0x1d6)] = u(0x1cc);
        const g = f, h = {};
        return h[u(0x1ce)] = sequelize_1[t(0x1bd)][u(0x1c9)], h[u(0x1d9)] = !![], h[u(0x1cb) + u(0x1c1)] = !![], h[u(0x1d4)] = ![], e[t(0x1e0) + 'e'](g[u(0x1d0)], {
            'id': h,
            'queueId': {
                'type': sequelize_1[t(0x1bd)][t(0x1c9)],
                'references': {
                    'model': g[u(0x1bc)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x1df)],
                'onDelete': g[u(0x1df)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[u(0x1bd)][t(0x1c9)],
                'references': {
                    'model': g[t(0x1d6)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x1df)],
                'onDelete': g[t(0x1df)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[u(0x1bd)][t(0x1d8)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0x1bd)][u(0x1d8)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = r, e = {};
        e[v(0x1da)] = v(0x1c7) + 's';
        const f = e;
        return d[v(0x1c8)](f[w(0x1da)]);
    }
};