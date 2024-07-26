'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3db + -0xb * 0x67 + 0x1d0);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const z = [
        'defineProp',
        'BYFjj',
        'yXefZ',
        'STRING',
        '8480169BdbYot',
        '8OYMtCo',
        'removeColu',
        'value',
        'all',
        '1248009AhLxgQ',
        'sequelize',
        'defaultVal',
        'Tickets',
        '2LfKMvc',
        'erty',
        'rXtro',
        '__esModule',
        'PuvGc',
        'exports',
        '309934jNWpFa',
        '5688192DUbYqw',
        'allowNull',
        '5WIynLj',
        '1510396BYIAtI',
        'DataTypes',
        'SlplJ',
        'type',
        'chatFlowId',
        'DATE',
        'INTEGER',
        'addColumn',
        'AyCMG',
        '1075949ohlhnO',
        '7581230XqmQSh',
        'closedAt',
        'stepChatFl',
        'RGdYJ',
        'bYxTx'
    ];
    a = function () {
        return z;
    };
    return a();
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x150)) / (-0xbe3 * 0x2 + 0x102f * -0x1 + 0xb * 0x3a2) * (parseInt(r(0x14a)) / (-0x1 * 0x269b + -0x23e8 + 0x1 * 0x4a85)) + -parseInt(r(0x146)) / (-0x17b * -0x11 + 0x12a8 * 0x2 + 0xf9e * -0x4) + -parseInt(s(0x154)) / (-0x2374 + 0x3b * -0x45 + -0x1 * -0x335f) * (-parseInt(s(0x153)) / (0x23e0 + 0xa9 + -0x2484)) + -parseInt(r(0x151)) / (0xe * -0x1e + 0x2 * 0x1351 + -0x24f8) + -parseInt(s(0x15d)) / (-0x16 * -0x93 + 0x2e * -0x6d + -0x6fb * -0x1) * (-parseInt(s(0x142)) / (-0x2 * 0xf3a + -0x12f0 + 0x316c)) + parseInt(s(0x141)) / (-0x7f1 + -0x20be + -0xa2e * -0x4) + parseInt(r(0x15e)) / (0x1 * -0xcf5 + 0x1b67 + -0xe68);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0xa3c63 + 0x8aa73 + -0xa6451));
const q = {};
q[t(0x144)] = !![], Object[u(0x163) + u(0x14b)](exports, u(0x14d), q);
const sequelize_1 = require(u(0x147));
module[t(0x14f)] = {
    'up': g => {
        const v = t, w = t, h = {};
        h[v(0x162)] = v(0x149), h[w(0x14c)] = w(0x158), h[v(0x13e)] = v(0x160) + 'ow', h[v(0x161)] = w(0x15f);
        const i = h, j = {};
        j[v(0x157)] = sequelize_1[w(0x155)][w(0x15a)], j[v(0x148) + 'ue'] = null, j[w(0x152)] = !![];
        const k = {};
        k[w(0x157)] = sequelize_1[v(0x155)][w(0x140)], k[v(0x148) + 'ue'] = null, k[v(0x152)] = !![];
        const l = {};
        return l[w(0x157)] = sequelize_1[v(0x155)][v(0x159)], l[w(0x148) + 'ue'] = null, l[v(0x152)] = !![], Promise[w(0x145)]([
            g[w(0x15b)](i[v(0x162)], i[w(0x14c)], j),
            g[w(0x15b)](i[w(0x162)], i[v(0x13e)], k),
            g[w(0x15b)](i[v(0x162)], i[v(0x161)], l)
        ]);
    },
    'down': d => {
        const x = u, y = t, e = {};
        e[x(0x156)] = x(0x149), e[x(0x13f)] = x(0x158), e[x(0x14e)] = y(0x160) + 'ow', e[y(0x15c)] = y(0x15f);
        const f = e;
        return Promise[y(0x145)]([
            d[y(0x143) + 'mn'](f[y(0x156)], f[y(0x13f)]),
            d[x(0x143) + 'mn'](f[y(0x156)], f[x(0x14e)]),
            d[x(0x143) + 'mn'](f[y(0x156)], f[x(0x15c)])
        ]);
    }
};