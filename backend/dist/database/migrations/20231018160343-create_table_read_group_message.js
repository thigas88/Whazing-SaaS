'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xcb)) / (-0xb5 * 0x23 + -0x8b * -0x29 + -0x27d * -0x1) + -parseInt(p(0xc3)) / (0x26c2 + -0xb60 + -0x3 * 0x920) * (parseInt(q(0xc1)) / (-0x1a16 + -0x65f * 0x6 + 0x4053)) + -parseInt(p(0xd4)) / (-0x260f * -0x1 + 0x52 * -0x15 + -0x1f51) + parseInt(p(0xde)) / (0x2e5 * -0x1 + 0x6b5 + -0x3cb * 0x1) * (-parseInt(p(0xe4)) / (-0x5 * -0xc7 + -0x1ac8 + 0x16eb)) + parseInt(p(0xdf)) / (-0xcf0 + 0x3 * -0x83e + 0x25b1) + -parseInt(q(0xcc)) / (-0xdf * 0x5 + 0x247 * -0x9 + -0x1ea * -0xd) + -parseInt(p(0xc8)) / (0x1 * -0xf95 + -0x544 * 0x1 + -0xf3 * -0x16) * (-parseInt(p(0xc5)) / (0x231f + -0x7f9 + -0x1b1c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xcaa5 + -0x1acbc + 0x5ada7));
const o = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x14ed + -0x12aa * -0x2 + -0x3984);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        'ent',
        'exports',
        'primaryKey',
        'allowNull',
        'value',
        '25jmRLfD',
        '86506kXcFPB',
        'eGroups',
        'ofHBK',
        'createTabl',
        'ReadMessag',
        '246066ZGaTqh',
        'DATE',
        'dropTable',
        'nJvqf',
        'BIGINT',
        '27PLsiom',
        'INTEGER',
        '46250PqkJeP',
        'SET\x20NULL',
        '855220kLjhDG',
        'InternalMe',
        'erty',
        '99KBRoVP',
        'autoIncrem',
        'vNFhn',
        '36103uMprYq',
        '2777400ZCEDKn',
        'DataTypes',
        'type',
        'jNQFR',
        'CASCADE',
        'ssage',
        'defineProp',
        'UsersGroup',
        '73384DiNyFw',
        'YSKxU',
        '__esModule',
        'whEzB',
        'sequelize'
    ];
    a = function () {
        return x;
    };
    return a();
}
o[r(0xdd)] = !![], Object[s(0xd2) + r(0xc7)](exports, r(0xd6), o);
const sequelize_1 = require(s(0xd8));
module[s(0xda)] = {
    'up': e => {
        const t = s, u = r, f = {};
        f[t(0xca)] = t(0xe3) + u(0xe0), f[t(0xe1)] = u(0xc6) + t(0xd1), f[u(0xcf)] = t(0xd0), f[u(0xbf)] = t(0xc4), f[t(0xd5)] = t(0xd3) + 's';
        const g = f, h = {};
        return h[u(0xce)] = sequelize_1[t(0xcd)][u(0xc2)], h[t(0xdb)] = !![], h[u(0xc9) + u(0xd9)] = !![], h[t(0xdc)] = ![], e[u(0xe2) + 'e'](g[u(0xca)], {
            'id': h,
            'internalMessageId': {
                'type': sequelize_1[t(0xcd)][u(0xc0)],
                'references': {
                    'model': g[u(0xe1)],
                    'key': 'id'
                },
                'onUpdate': g[t(0xcf)],
                'onDelete': g[t(0xbf)]
            },
            'userGroupId': {
                'type': sequelize_1[u(0xcd)][u(0xc2)],
                'references': {
                    'model': g[t(0xd5)],
                    'key': 'id'
                },
                'onUpdate': g[u(0xcf)],
                'onDelete': g[t(0xcf)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[u(0xcd)][t(0xbd)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0xcd)][u(0xbd)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = s, e = {};
        e[v(0xd7)] = v(0xe3) + v(0xe0);
        const f = e;
        return d[v(0xbe)](f[v(0xd7)]);
    }
};