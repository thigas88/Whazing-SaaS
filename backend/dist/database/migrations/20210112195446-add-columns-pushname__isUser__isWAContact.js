'use strict';
const t = b, u = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x11 * -0xcd + 0xd7a + 0x1e4);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x1e2)) / (0x55c + -0xf * -0x263 + 0x3 * -0xdb8) + -parseInt(s(0x1d1)) / (0x1d8d + 0x1 * 0x22d4 + -0x405f * 0x1) * (-parseInt(r(0x1c4)) / (-0x1 * 0x2f5 + -0x3 * 0x101 + -0x5fb * -0x1)) + -parseInt(s(0x1e0)) / (-0x1 * -0x136d + 0x243a * 0x1 + 0x1 * -0x37a3) + -parseInt(r(0x1c9)) / (0x5c4 * 0x4 + -0x21b3 + 0xaa8) + -parseInt(s(0x1c3)) / (0x12af + 0x21eb + -0x3494) + -parseInt(r(0x1ce)) / (0x9c6 + 0x13 * -0x167 + -0x1 * -0x10e6) + parseInt(r(0x1c5)) / (-0x11e2 + -0x2d * 0x9 + 0x137f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2359 * -0x81 + 0x7d * -0xcfb + 0x2 * -0x8f23));
const q = {};
q[t(0x1c2)] = !![], Object[t(0x1c8) + u(0x1df)](exports, u(0x1da), q);
const sequelize_1 = require(u(0x1cf));
function a() {
    const z = [
        'Contacts',
        '58HVuyxa',
        'WNkPW',
        'addColumn',
        'SzMjw',
        'defaultVal',
        'removeColu',
        'pushname',
        'isWAContac',
        'BOOLEAN',
        '__esModule',
        'STRING',
        'segzi',
        'zrtjo',
        'oScfq',
        'erty',
        '3469872HVuMoM',
        'allowNull',
        '1107959WVodcY',
        'CYFJS',
        'isUser',
        'value',
        '5193528kdFbXu',
        '33909dynzZi',
        '16719464OWLbSl',
        'type',
        'iTFrl',
        'defineProp',
        '3291970beamHt',
        'DataTypes',
        'xdxTk',
        'exports',
        'all',
        '3188983aEtcNX',
        'sequelize'
    ];
    a = function () {
        return z;
    };
    return a();
}
module[t(0x1cc)] = {
    'up': g => {
        const v = t, w = u, h = {};
        h[v(0x1cb)] = v(0x1d0), h[w(0x1c7)] = w(0x1d7), h[v(0x1dd)] = w(0x1c1), h[v(0x1d4)] = w(0x1d8) + 't';
        const i = h, j = {};
        j[w(0x1c6)] = sequelize_1[v(0x1ca)][w(0x1db)], j[w(0x1e1)] = !![], j[w(0x1d5) + 'ue'] = null;
        const k = {};
        k[v(0x1c6)] = sequelize_1[w(0x1ca)][v(0x1d9)], k[w(0x1e1)] = !![], k[w(0x1d5) + 'ue'] = null;
        const l = {};
        return l[w(0x1c6)] = sequelize_1[v(0x1ca)][w(0x1d9)], l[w(0x1e1)] = !![], l[w(0x1d5) + 'ue'] = null, Promise[w(0x1cd)]([
            g[v(0x1d3)](i[v(0x1cb)], i[w(0x1c7)], j),
            g[v(0x1d3)](i[w(0x1cb)], i[v(0x1dd)], k),
            g[v(0x1d3)](i[v(0x1cb)], i[w(0x1d4)], l)
        ]);
    },
    'down': d => {
        const x = t, y = u, e = {};
        e[x(0x1e3)] = y(0x1d0), e[y(0x1d2)] = y(0x1d7), e[y(0x1dc)] = y(0x1c1), e[y(0x1de)] = x(0x1d8) + 't';
        const f = e;
        return Promise[x(0x1cd)]([
            d[x(0x1d6) + 'mn'](f[x(0x1e3)], f[x(0x1d2)]),
            d[x(0x1d6) + 'mn'](f[y(0x1e3)], f[x(0x1dc)]),
            d[x(0x1d6) + 'mn'](f[y(0x1e3)], f[y(0x1de)])
        ]);
    }
};