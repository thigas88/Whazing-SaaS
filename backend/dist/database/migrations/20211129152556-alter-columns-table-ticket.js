'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x100)) / (-0x73b * -0x1 + -0x11b0 + 0xa76) * (parseInt(r(0x11f)) / (0x1 * 0x1bc8 + -0x65b * -0x6 + -0x41e8)) + -parseInt(r(0x102)) / (0x35 * -0x79 + -0x11f3 * -0x2 + 0x13 * -0x92) + -parseInt(s(0xff)) / (0x1 * 0xc65 + 0x11db + 0xf1e * -0x2) + parseInt(s(0x112)) / (0x2217 + -0x38c + -0x1e86) + parseInt(r(0x117)) / (0x2e * -0x39 + 0x237 * -0x3 + -0x25 * -0x75) * (parseInt(s(0x106)) / (-0x15b + -0x57d + -0x6df * -0x1)) + -parseInt(r(0x103)) / (-0x5a6 + 0x181e + -0x1270) + parseInt(r(0x10c)) / (0x1b36 + 0x14fc + -0x3029);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x937 * 0x277 + 0x13 * -0x15621 + 0x118792));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x150c + -0x2 * 0xde6 + 0x7bc);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = {};
q[t(0x11c)] = !![], Object[u(0x120) + u(0x105)](exports, u(0x10e), q);
const sequelize_1 = require(t(0xfd));
function a() {
    const z = [
        'closedAt',
        'sequelize',
        'DmWEh',
        '7139212qIUYax',
        '114414gCeJcW',
        'type',
        '5180106NxSSFL',
        '12011464dYggHK',
        'Tickets',
        'erty',
        '7BqMiHo',
        'exports',
        'removeColu',
        'DATE',
        'defaultVal',
        'JpANZ',
        '12462912mJGoXN',
        'chatFlowId',
        '__esModule',
        'STRING',
        'rQSvY',
        'stepChatFl',
        '4535905zppply',
        'ygCRj',
        'allowNull',
        'oAdeN',
        'INTEGER',
        '10495098KgMQDA',
        'DataTypes',
        'TsplF',
        'addColumn',
        'XhZwm',
        'value',
        'Qphex',
        'all',
        '34lWeRgs',
        'defineProp'
    ];
    a = function () {
        return z;
    };
    return a();
}
module[u(0x107)] = {
    'up': g => {
        const v = t, w = t, h = {};
        h[v(0x113)] = v(0x104), h[w(0x115)] = w(0x10d), h[v(0x11d)] = v(0x111) + 'ow', h[v(0x10b)] = v(0xfc);
        const i = h, j = {};
        j[v(0x101)] = sequelize_1[v(0x118)][v(0x116)], j[w(0x10a) + 'ue'] = null, j[w(0x114)] = !![];
        const k = {};
        k[v(0x101)] = sequelize_1[v(0x118)][w(0x10f)], k[v(0x10a) + 'ue'] = null, k[v(0x114)] = !![];
        const l = {};
        return l[w(0x101)] = sequelize_1[w(0x118)][v(0x109)], l[v(0x10a) + 'ue'] = null, l[w(0x114)] = !![], Promise[w(0x11e)]([
            g[w(0x11a)](i[w(0x113)], i[w(0x115)], j),
            g[w(0x11a)](i[w(0x113)], i[w(0x11d)], k),
            g[v(0x11a)](i[w(0x113)], i[w(0x10b)], l)
        ]);
    },
    'down': d => {
        const x = u, y = t, e = {};
        e[x(0x11b)] = x(0x104), e[x(0xfe)] = y(0x10d), e[x(0x119)] = y(0x111) + 'ow', e[y(0x110)] = y(0xfc);
        const f = e;
        return Promise[y(0x11e)]([
            d[x(0x108) + 'mn'](f[x(0x11b)], f[x(0xfe)]),
            d[x(0x108) + 'mn'](f[x(0x11b)], f[y(0x119)]),
            d[y(0x108) + 'mn'](f[x(0x11b)], f[x(0x110)])
        ]);
    }
};