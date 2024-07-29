'use strict';
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(k(0xc8)) / (-0x1 * 0x18b2 + 0x23d2 + -0x3b5 * 0x3) * (-parseInt(l(0xc5)) / (0x2063 + 0x4e8 + -0x2549)) + parseInt(l(0xc6)) / (0xd * -0x259 + 0x3c * 0x61 + 0x7cc) + -parseInt(k(0xce)) / (-0x1 * -0x1537 + -0x5f1 + -0xf42) + -parseInt(l(0xc4)) / (0x20b * -0x7 + -0x1283 + 0x20d5) * (parseInt(k(0xb3)) / (-0x1bb1 + 0x2321 + -0x76a)) + parseInt(k(0xcd)) / (-0x6 * 0x3bf + 0x103a + 0x647) + -parseInt(k(0xbe)) / (-0x7d + -0x23 + 0xa8) + -parseInt(k(0xc1)) / (-0xf1 + -0x7 * 0x152 + 0xa38) * (-parseInt(l(0xbf)) / (-0x1b00 + -0x1776 + -0x194 * -0x20));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0x1597a2 + -0x1a3 * 0x139 + -0x56f9d * 0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x43c + 0x108b + -0xb9e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const c = {};
c[m(0xb2)] = !![], Object[n(0xb9) + m(0xbb)](exports, n(0xb1), c);
function a() {
    const s = [
        'removeColu',
        'wBBkk',
        'defineProp',
        'GmVnc',
        'erty',
        'sequelize',
        'TEXT',
        '13709232PYkpPv',
        '190KgZrji',
        'dataJson',
        '1100286AxsgpY',
        'DataTypes',
        'ble',
        '1178105iMYKKz',
        '62466JMcpXt',
        '4702041enwYGK',
        'describeTa',
        '1anCBOm',
        'lJRJa',
        'type',
        'exports',
        'addColumn',
        '1192583hvzilI',
        '839504FtIqPM',
        '__esModule',
        'value',
        '30vezhQV',
        'allowNull',
        'fnvLl',
        'Messages'
    ];
    a = function () {
        return s;
    };
    return a();
}
const sequelize_1 = require(n(0xbc));
module[m(0xcb)] = {
    'up': async f => {
        const o = n, p = m, g = {};
        g[o(0xb5)] = p(0xb6), g[o(0xc9)] = p(0xc0);
        const h = g, i = await f[p(0xc7) + o(0xc3)](h[o(0xb5)]);
        if (!i || !i[h[p(0xc9)]]) {
            const j = {};
            j[o(0xca)] = sequelize_1[p(0xc2)][p(0xbd)], j[p(0xb4)] = !![], await f[p(0xcc)](h[p(0xb5)], h[p(0xc9)], j);
        }
    },
    'down': async e => {
        const q = n, r = m, f = {};
        f[q(0xb8)] = q(0xb6), f[q(0xba)] = r(0xc0);
        const g = f;
        await e[q(0xb7) + 'mn'](g[r(0xb8)], g[q(0xba)]);
    }
};