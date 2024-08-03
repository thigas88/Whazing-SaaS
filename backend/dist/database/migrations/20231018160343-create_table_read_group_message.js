'use strict';
const r = b, s = b;
function a() {
    const x = [
        'eGroups',
        'createTabl',
        'DataTypes',
        'ent',
        'InternalMe',
        'ssage',
        'eHTjf',
        'autoIncrem',
        'allowNull',
        'SET\x20NULL',
        'erty',
        'type',
        '24432RCrLLV',
        'INTEGER',
        '1731420OeJdgx',
        '8007573eLKyil',
        'sequelize',
        'IagxR',
        '12042760NpwphY',
        'primaryKey',
        'dropTable',
        '437JGFiCc',
        '68358TJKfbO',
        'CASCADE',
        'yyyjS',
        'ReadMessag',
        '355pzQIdz',
        'defineProp',
        'INrip',
        '322485HAfIHx',
        '165qHqFek',
        'DATE',
        'exports',
        'value',
        'GHJyb',
        '2007blCzpc',
        '28FQtEKr',
        'pFLyt',
        '__esModule',
        'BIGINT',
        '6682ZeFVkd',
        'UsersGroup'
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
            const f = -parseInt(p(0x1ae)) / (0x7 * -0x373 + -0x14ee * -0x1 + 0x338) * (parseInt(p(0x1c1)) / (0x252e + -0x71b + -0x1 * 0x1e11)) + -parseInt(q(0x1b6)) / (-0xbc1 + -0x1 * -0x1c03 + -0x1 * 0x103f) * (parseInt(p(0x1bd)) / (0x1e2e + -0xb19 * 0x1 + 0x65b * -0x3)) + parseInt(q(0x1b3)) / (-0xb6e + -0x1 * -0x10d3 + 0x1 * -0x560) * (-parseInt(p(0x1af)) / (-0x17 * 0xe5 + 0x3a * -0x1d + 0x217 * 0xd)) + parseInt(p(0x1a8)) / (0x1 * -0x204d + -0x350 * 0xb + 0x44c4) + -parseInt(q(0x1a5)) / (0x4d * -0x2c + 0x1 * -0x171e + -0x2462 * -0x1) * (parseInt(q(0x1bc)) / (0x5 * 0x1c1 + -0x8 + 0x22d * -0x4)) + parseInt(p(0x1ab)) / (-0xee4 * -0x1 + -0x211d + 0x1243) + parseInt(p(0x1b7)) / (-0x1f22 + 0x1e5b + 0xe * 0xf) * (parseInt(p(0x1a7)) / (0x3bf + -0xc * -0x1c9 + 0x6d * -0x3b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x18 * -0xd204 + -0x96874 + 0x21463));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1f1 * 0x7 + -0x1c83 * 0x1 + 0x1090);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = {};
o[r(0x1ba)] = !![], Object[s(0x1b4) + s(0x1cd)](exports, s(0x1bf), o);
const sequelize_1 = require(s(0x1a9));
module[r(0x1b9)] = {
    'up': e => {
        const t = r, u = r, f = {};
        f[t(0x1aa)] = t(0x1b2) + t(0x1c3), f[t(0x1b5)] = t(0x1c7) + u(0x1c8), f[t(0x1b1)] = u(0x1b0), f[t(0x1c9)] = u(0x1cc), f[t(0x1bb)] = u(0x1c2) + 's';
        const g = f, h = {};
        return h[u(0x1a4)] = sequelize_1[t(0x1c5)][t(0x1a6)], h[t(0x1ac)] = !![], h[t(0x1ca) + t(0x1c6)] = !![], h[t(0x1cb)] = ![], e[t(0x1c4) + 'e'](g[u(0x1aa)], {
            'id': h,
            'internalMessageId': {
                'type': sequelize_1[t(0x1c5)][u(0x1c0)],
                'references': {
                    'model': g[u(0x1b5)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x1b1)],
                'onDelete': g[u(0x1c9)]
            },
            'userGroupId': {
                'type': sequelize_1[u(0x1c5)][t(0x1a6)],
                'references': {
                    'model': g[u(0x1bb)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x1b1)],
                'onDelete': g[u(0x1b1)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[t(0x1c5)][t(0x1b8)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x1c5)][t(0x1b8)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = s, e = {};
        e[v(0x1be)] = v(0x1b2) + v(0x1c3);
        const f = e;
        return d[v(0x1ad)](f[w(0x1be)]);
    }
};