'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x1df)) / (0x1021 + -0x2365 + 0x1345 * 0x1) + -parseInt(o(0x1d0)) / (-0x172 * 0x13 + 0x1885 + 0x2f3) * (parseInt(n(0x1db)) / (0x1b42 + -0x1 * 0x49 + -0x1af6)) + -parseInt(n(0x1f7)) / (-0x103d * 0x2 + -0xdc * -0x29 + -0xea * 0x3) + parseInt(o(0x1e1)) / (0xe19 + 0x26fa + 0x1 * -0x350e) * (-parseInt(n(0x1ec)) / (0x27b + 0xaf0 + -0xd65)) + -parseInt(o(0x1f5)) / (-0x21b1 + -0xf6b + -0x257 * -0x15) + -parseInt(n(0x1e9)) / (0x21f6 + -0x2114 + 0x6d * -0x2) * (parseInt(o(0x1f8)) / (0x11 * 0x112 + 0x1 * -0x1c79 + 0xa50)) + parseInt(o(0x1ea)) / (0x6 * 0x238 + -0x2029 + 0x5 * 0x3c7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x12bc + -0x1d1f2 + 0x558d7));
function a() {
    const v = [
        'changeColu',
        '1435518IVdIfx',
        'InternalMe',
        '1710348tWSiAd',
        '262233NwSOqt',
        'ssage',
        '4mKZmUO',
        'defineProp',
        'value',
        'JoKeV',
        'DataTypes',
        'Jiotn',
        'all',
        'sequelize',
        'DhSng',
        'PYWaU',
        'Users',
        '671712oLHSXG',
        'klCbW',
        'RGOtM',
        'erty',
        '363449zPaqMl',
        'Rvnsq',
        '1592075WKSlEe',
        'qJFMO',
        'uUrDr',
        'SET\x20NULL',
        'KUjli',
        'receiverId',
        'INTEGER',
        'CASCADE',
        '8EAwGIN',
        '20178150ntIxtB',
        'Groups',
        '6IqivZs',
        'OHgWZ',
        'groupId',
        'YVxfh',
        'exports',
        'qwBun',
        'Ltoed',
        '__esModule'
    ];
    a = function () {
        return v;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x23 * 0xd + -0x206a + 0x2401);
        let h = e[f];
        return h;
    }, b(c, d);
}
const m = {};
m[p(0x1d2)] = !![], Object[p(0x1d1) + q(0x1de)](exports, p(0x1f3), m);
const sequelize_1 = require(p(0x1d7));
module[p(0x1f0)] = {
    'up': d => {
        const r = p, s = p, e = {};
        e[r(0x1ed)] = r(0x1f6) + s(0x1f9), e[r(0x1d9)] = r(0x1ee), e[s(0x1dd)] = s(0x1eb), e[s(0x1dc)] = s(0x1e8), e[r(0x1d8)] = s(0x1e6), e[r(0x1e3)] = r(0x1da), e[s(0x1e5)] = r(0x1e4);
        const f = e;
        return Promise[s(0x1d6)]([
            d[s(0x1f4) + 'mn'](f[s(0x1ed)], f[s(0x1d9)], {
                'type': sequelize_1[s(0x1d4)][r(0x1e7)],
                'references': {
                    'model': f[s(0x1dd)],
                    'key': 'id'
                },
                'onUpdate': f[s(0x1dc)],
                'onDelete': f[r(0x1dc)],
                'allowNull': !![]
            }),
            d[s(0x1f4) + 'mn'](f[s(0x1ed)], f[r(0x1d8)], {
                'type': sequelize_1[s(0x1d4)][r(0x1e7)],
                'references': {
                    'model': f[s(0x1e3)],
                    'key': 'id'
                },
                'onUpdate': f[s(0x1dc)],
                'onDelete': f[s(0x1e5)],
                'allowNull': !![]
            })
        ]);
    },
    'down': d => {
        const t = q, u = p, e = {};
        e[t(0x1e2)] = t(0x1f6) + t(0x1f9), e[u(0x1d5)] = t(0x1ee), e[u(0x1e0)] = u(0x1eb), e[u(0x1f2)] = u(0x1e8), e[u(0x1f1)] = t(0x1e6), e[u(0x1d3)] = u(0x1da), e[u(0x1ef)] = t(0x1e4);
        const f = e;
        return Promise[u(0x1d6)]([
            d[t(0x1f4) + 'mn'](f[t(0x1e2)], f[t(0x1d5)], {
                'type': sequelize_1[u(0x1d4)][t(0x1e7)],
                'references': {
                    'model': f[u(0x1e0)],
                    'key': 'id'
                },
                'onUpdate': f[t(0x1f2)],
                'onDelete': f[t(0x1f2)],
                'allowNull': !![]
            }),
            d[u(0x1f4) + 'mn'](f[u(0x1e2)], f[u(0x1f1)], {
                'type': sequelize_1[u(0x1d4)][t(0x1e7)],
                'references': {
                    'model': f[t(0x1d3)],
                    'key': 'id'
                },
                'onUpdate': f[u(0x1f2)],
                'onDelete': f[u(0x1ef)],
                'allowNull': !![]
            })
        ]);
    }
};