'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2db + -0x22af + 0x21ba);
        let h = e[f];
        return h;
    }, b(c, d);
}
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x209)) / (0x1ba5 * -0x1 + 0x180f + 0x397) * (parseInt(n(0x1f0)) / (-0xd23 + -0x18c * 0x3 + 0x11c9)) + parseInt(o(0x20c)) / (0x1270 * 0x1 + 0x10 * 0x49 + -0x16fd) * (parseInt(o(0x210)) / (-0x5d5 * 0x3 + 0x24af * -0x1 + 0x3632)) + parseInt(o(0x1ff)) / (0x2328 + 0x6a1 + 0x2c * -0xf3) * (-parseInt(n(0x1fc)) / (0x3 * 0x41b + 0x32 * -0x70 + -0xdf * -0xb)) + -parseInt(o(0x202)) / (-0x59 * -0x1d + 0xa83 + -0x1491) * (-parseInt(o(0x208)) / (0x1 * -0x821 + -0xac6 * 0x2 + 0x1db5)) + parseInt(n(0x20d)) / (-0x1bf3 + -0x25 * -0x7c + 0xa10) + parseInt(o(0x1ea)) / (-0x38 * 0x7b + 0xab2 + -0x40 * -0x41) + parseInt(o(0x1e9)) / (-0xc2 * 0x14 + -0x31f + -0x1d5 * -0xa) * (-parseInt(o(0x1fa)) / (-0x958 * -0x1 + 0x17f4 + -0x2140));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x508bf + 0xc01c + 0x1 * 0x82a75));
const m = {};
m[p(0x1f8)] = !![], Object[p(0x1ef) + p(0x1ed)](exports, p(0x1fb), m);
function a() {
    const v = [
        'changeColu',
        'CFCxA',
        'sequelize',
        'CASCADE',
        'value',
        'HUXRQ',
        '1164ayfhJF',
        '__esModule',
        '506886qxjMTU',
        'Groups',
        'rgQzg',
        '10vvtjPx',
        'ssage',
        'groupId',
        '161SxuHVg',
        'RffDr',
        'MdliP',
        'exports',
        'Grvog',
        'eGMZi',
        '9624CcHQQq',
        '1PpXmYz',
        'receiverId',
        'xUKaN',
        '3fkzddV',
        '2024487ESUMPJ',
        'DataTypes',
        'qKuvR',
        '457552adQpqr',
        'wrLZw',
        'InternalMe',
        'hVhah',
        'oWOhl',
        '902YFPPTG',
        '3359790unDSoH',
        'ccWxc',
        'Users',
        'erty',
        'INTEGER',
        'defineProp',
        '543290WsuBha',
        'all',
        'wGWeP',
        'SET\x20NULL'
    ];
    a = function () {
        return v;
    };
    return a();
}
const sequelize_1 = require(p(0x1f6));
module[q(0x205)] = {
    'up': d => {
        const r = p, s = q, e = {};
        e[r(0x1f5)] = s(0x1e6) + s(0x200), e[s(0x1e7)] = r(0x201), e[s(0x203)] = r(0x1fd), e[r(0x20b)] = s(0x1f7), e[r(0x1e8)] = s(0x20a), e[s(0x1f9)] = s(0x1ec), e[s(0x206)] = s(0x1f3);
        const f = e;
        return Promise[s(0x1f1)]([
            d[r(0x1f4) + 'mn'](f[r(0x1f5)], f[r(0x1e7)], {
                'type': sequelize_1[r(0x20e)][s(0x1ee)],
                'references': {
                    'model': f[r(0x203)],
                    'key': 'id'
                },
                'onUpdate': f[r(0x20b)],
                'onDelete': f[s(0x20b)],
                'allowNull': !![]
            }),
            d[r(0x1f4) + 'mn'](f[s(0x1f5)], f[s(0x1e8)], {
                'type': sequelize_1[r(0x20e)][r(0x1ee)],
                'references': {
                    'model': f[r(0x1f9)],
                    'key': 'id'
                },
                'onUpdate': f[r(0x20b)],
                'onDelete': f[s(0x206)],
                'allowNull': !![]
            })
        ]);
    },
    'down': d => {
        const t = p, u = p, e = {};
        e[t(0x1fe)] = u(0x1e6) + t(0x200), e[t(0x204)] = t(0x201), e[u(0x207)] = t(0x1fd), e[t(0x20f)] = t(0x1f7), e[u(0x211)] = t(0x20a), e[u(0x1eb)] = t(0x1ec), e[t(0x1f2)] = u(0x1f3);
        const f = e;
        return Promise[u(0x1f1)]([
            d[u(0x1f4) + 'mn'](f[t(0x1fe)], f[t(0x204)], {
                'type': sequelize_1[t(0x20e)][u(0x1ee)],
                'references': {
                    'model': f[t(0x207)],
                    'key': 'id'
                },
                'onUpdate': f[u(0x20f)],
                'onDelete': f[t(0x20f)],
                'allowNull': !![]
            }),
            d[u(0x1f4) + 'mn'](f[t(0x1fe)], f[u(0x211)], {
                'type': sequelize_1[t(0x20e)][t(0x1ee)],
                'references': {
                    'model': f[u(0x1eb)],
                    'key': 'id'
                },
                'onUpdate': f[u(0x20f)],
                'onDelete': f[t(0x1f2)],
                'allowNull': !![]
            })
        ]);
    }
};