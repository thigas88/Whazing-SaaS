'use strict';
const p = b, q = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1e40 + -0xdd8 + 0x1 * -0xe8a);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x1f8)) / (-0x1e83 + 0x5b * 0x29 + 0xff1) * (parseInt(n(0x1ef)) / (0x7 * 0x29f + -0x1 * -0x1896 + -0x2aed)) + -parseInt(o(0x1e0)) / (-0x7fa * 0x1 + -0x5 * 0x6f9 + 0x2ada) + -parseInt(o(0x200)) / (-0x2397 + -0x1 * -0x228e + 0x10d) * (-parseInt(n(0x202)) / (-0x744 + 0x85 * 0x2a + 0xe89 * -0x1)) + -parseInt(o(0x1f3)) / (-0x1 * -0x1d5 + -0xc61 + 0xa92) + parseInt(n(0x1e9)) / (-0x1 * 0x2054 + 0x20be + 0x3 * -0x21) + -parseInt(o(0x1eb)) / (-0x1ea + 0x2181 + -0x1f8f) + parseInt(o(0x203)) / (-0x13f5 + -0x1 * -0xbff + 0x7ff);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2401a + -0x2a586 + 0x6a186));
function a() {
    const v = [
        'aGjQn',
        'NVCLW',
        'lsTtF',
        'Users',
        'value',
        '1159214NyaZRl',
        'all',
        '1473712bkyXGB',
        'vnvno',
        'ssage',
        'groupId',
        '68114NrMYzt',
        'VVAKZ',
        'rtmWb',
        'DataTypes',
        '129402VhEASI',
        'CASCADE',
        'erty',
        'kKyvP',
        'NYVQK',
        '2RXKBbl',
        '__esModule',
        'changeColu',
        'KcEKr',
        'QCCpE',
        'PRuzz',
        'Groups',
        'INTEGER',
        '4szlZpn',
        'defineProp',
        '1119015dNUPPr',
        '2014974PbGBQc',
        'xaMoF',
        'exports',
        'sequelize',
        'receiverId',
        'InternalMe',
        '677274WcOGzq',
        'myKrN',
        'Zsrud',
        'SET\x20NULL'
    ];
    a = function () {
        return v;
    };
    return a();
}
const m = {};
m[p(0x1e8)] = !![], Object[p(0x201) + q(0x1f5)](exports, p(0x1f9), m);
const sequelize_1 = require(q(0x206));
module[p(0x205)] = {
    'up': d => {
        const r = q, s = q, e = {};
        e[r(0x1fd)] = s(0x1df) + s(0x1ed), e[s(0x1e6)] = r(0x1ee), e[s(0x204)] = s(0x1fe), e[s(0x1fc)] = s(0x1f4), e[s(0x1f7)] = s(0x1de), e[r(0x1e4)] = s(0x1e7), e[r(0x1e1)] = r(0x1e3);
        const f = e;
        return Promise[r(0x1ea)]([
            d[s(0x1fa) + 'mn'](f[r(0x1fd)], f[s(0x1e6)], {
                'type': sequelize_1[r(0x1f2)][r(0x1ff)],
                'references': {
                    'model': f[s(0x204)],
                    'key': 'id'
                },
                'onUpdate': f[r(0x1fc)],
                'onDelete': f[s(0x1fc)],
                'allowNull': !![]
            }),
            d[s(0x1fa) + 'mn'](f[r(0x1fd)], f[s(0x1f7)], {
                'type': sequelize_1[s(0x1f2)][r(0x1ff)],
                'references': {
                    'model': f[r(0x1e4)],
                    'key': 'id'
                },
                'onUpdate': f[s(0x1fc)],
                'onDelete': f[s(0x1e1)],
                'allowNull': !![]
            })
        ]);
    },
    'down': d => {
        const t = q, u = q, e = {};
        e[t(0x1f0)] = t(0x1df) + t(0x1ed), e[t(0x1f1)] = u(0x1ee), e[t(0x1fb)] = u(0x1fe), e[t(0x1e5)] = t(0x1f4), e[u(0x1f6)] = t(0x1de), e[u(0x1e2)] = u(0x1e7), e[t(0x1ec)] = t(0x1e3);
        const f = e;
        return Promise[u(0x1ea)]([
            d[u(0x1fa) + 'mn'](f[t(0x1f0)], f[u(0x1f1)], {
                'type': sequelize_1[u(0x1f2)][t(0x1ff)],
                'references': {
                    'model': f[u(0x1fb)],
                    'key': 'id'
                },
                'onUpdate': f[t(0x1e5)],
                'onDelete': f[t(0x1e5)],
                'allowNull': !![]
            }),
            d[u(0x1fa) + 'mn'](f[u(0x1f0)], f[u(0x1f6)], {
                'type': sequelize_1[t(0x1f2)][u(0x1ff)],
                'references': {
                    'model': f[u(0x1e2)],
                    'key': 'id'
                },
                'onUpdate': f[t(0x1e5)],
                'onDelete': f[u(0x1ec)],
                'allowNull': !![]
            })
        ]);
    }
};