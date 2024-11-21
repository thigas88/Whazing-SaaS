'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x146)) / (-0x21b7 + -0x10a5 + 0x325d) * (parseInt(o(0x14f)) / (0x2 * -0x44a + -0xced * -0x3 + -0x83 * 0x3b)) + parseInt(o(0x13c)) / (-0x1974 + 0x3a7 + 0x15d0) + -parseInt(n(0x141)) / (-0x1 * -0x232b + 0xbf7 * 0x3 + 0x11c3 * -0x4) + parseInt(o(0x140)) / (-0x27 * -0xf1 + -0x1 * 0x148 + -0x236a) * (-parseInt(o(0x158)) / (0x20e * -0x2 + 0xda * 0x13 + -0xc0c)) + -parseInt(n(0x145)) / (0x3 * 0x18f + -0x1b * 0x81 + -0x1 * -0x8f5) + parseInt(n(0x147)) / (0xa * -0xf2 + -0x1e41 + -0x1 * -0x27bd) * (parseInt(n(0x155)) / (-0x7d0 * -0x2 + 0xb30 + -0x1ac7)) + parseInt(n(0x148)) / (0x1042 + 0xf0 * -0x1a + 0x828) * (parseInt(o(0x14b)) / (-0x15ae + -0x7 * -0x95 + 0x9 * 0x1f6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x41db3 + 0xc7290 + 0x526 * -0x107));
const m = {};
m[p(0x153)] = !![], Object[p(0x151) + q(0x14c)](exports, q(0x14d), m);
const sequelize_1 = require(q(0x13d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1188 * -0x2 + -0x1 * 0xee5 + -0x12f3);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        'fbObject',
        '24wpDBci',
        'DataTypes',
        'JSONB',
        'iAwUr',
        'fbPageId',
        'aBghb',
        'all',
        '817650mUyvoL',
        'sequelize',
        'cIUxt',
        'Whatsapps',
        '1380485BjfNvu',
        '5606620CEgSZl',
        'defaultVal',
        'ceISL',
        'JDoLM',
        '1994496PXPfvi',
        '803593FlGsmX',
        '4866032UpCyFg',
        '30aDZKXx',
        'type',
        'exports',
        '6766639TKLMyY',
        'erty',
        '__esModule',
        'addColumn',
        '2whrktQ',
        'TEXT',
        'defineProp',
        'LhsTJ',
        'value',
        'allowNull',
        '9oqaBhs',
        'removeColu'
    ];
    a = function () {
        return v;
    };
    return a();
}
module[p(0x14a)] = {
    'up': f => {
        const r = q, s = p, g = {};
        g[r(0x138)] = r(0x13f), g[r(0x143)] = r(0x139), g[r(0x13e)] = r(0x157);
        const h = g, i = {};
        i[s(0x149)] = sequelize_1[s(0x159)][s(0x150)], i[r(0x154)] = !![], i[r(0x142) + 'ue'] = null;
        const j = {};
        return j[s(0x149)] = sequelize_1[s(0x159)][r(0x15a)], j[r(0x154)] = !![], j[s(0x142) + 'ue'] = null, Promise[r(0x13b)]([
            f[s(0x14e)](h[s(0x138)], h[s(0x143)], i),
            f[r(0x14e)](h[s(0x138)], h[s(0x13e)], j)
        ]);
    },
    'down': d => {
        const t = p, u = p, e = {};
        e[t(0x13a)] = u(0x13f), e[t(0x152)] = u(0x139), e[t(0x144)] = t(0x157);
        const f = e;
        return Promise[u(0x13b)]([
            d[u(0x156) + 'mn'](f[t(0x13a)], f[t(0x152)]),
            d[u(0x156) + 'mn'](f[u(0x13a)], f[t(0x144)])
        ]);
    }
};