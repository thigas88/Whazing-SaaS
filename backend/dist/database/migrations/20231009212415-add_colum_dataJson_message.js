'use strict';
function a() {
    const s = [
        'ble',
        '3711112xtUoeU',
        'type',
        'xXMWC',
        'addColumn',
        'nfLvF',
        'defineProp',
        'sequelize',
        'LHtZk',
        'removeColu',
        'iqmgj',
        'value',
        '1393579WAKZeU',
        'describeTa',
        '13443250YhYtnA',
        '6IQejSp',
        '7222525PbOGzo',
        '__esModule',
        'erty',
        'exports',
        '1953lrqaNt',
        '1305040dLHtHj',
        'allowNull',
        'TEXT',
        'Messages',
        '744IyDAtW',
        '9vjmuux',
        'dataJson',
        '2507778PMJHbf',
        'DataTypes'
    ];
    a = function () {
        return s;
    };
    return a();
}
const m = b, n = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1700 + -0x3 * 0x10d + 0x1acf * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(k(0xc3)) / (0xe1d + -0x7e + 0x2a * -0x53) + -parseInt(l(0xb2)) / (0x5 * -0x6f7 + 0x1af3 * -0x1 + 0x3dc8) * (parseInt(k(0xad)) / (-0x23 * -0x25 + -0x240a + -0xf7f * -0x2)) + parseInt(l(0xae)) / (-0xf26 + -0x19d7 + 0x3 * 0xdab) + parseInt(l(0xa9)) / (0x25d8 + -0x2b * -0x7 + -0x2700) * (parseInt(l(0xa8)) / (-0xcb5 * 0x1 + -0x1 * -0x1215 + -0x55a * 0x1)) + -parseInt(l(0xb5)) / (-0xed * -0x3 + -0x2 * 0x127b + 0x2236) + -parseInt(l(0xb8)) / (0x42c + 0x43 * 0x2a + -0xf22) * (parseInt(l(0xb3)) / (0xe15 + -0x388 * 0x7 + 0xaac)) + -parseInt(l(0xc5)) / (0x14 * -0x1df + -0x4d4 * 0x1 + -0x1 * -0x2a4a);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x1 * 0x2090f + 0x14b * 0x10b9 + -0x1d * 0x471c));
const c = {};
c[m(0xc2)] = !![], Object[n(0xbd) + n(0xab)](exports, m(0xaa), c);
const sequelize_1 = require(n(0xbe));
module[n(0xac)] = {
    'up': async f => {
        const o = m, p = m, g = {};
        g[o(0xbc)] = p(0xb1), g[o(0xc1)] = o(0xb4);
        const h = g, i = await f[o(0xc4) + p(0xb7)](h[p(0xbc)]);
        if (!i || !i[h[p(0xc1)]]) {
            const j = {};
            j[o(0xb9)] = sequelize_1[p(0xb6)][o(0xb0)], j[o(0xaf)] = !![], await f[p(0xbb)](h[p(0xbc)], h[o(0xc1)], j);
        }
    },
    'down': async e => {
        const q = n, r = m, f = {};
        f[q(0xbf)] = q(0xb1), f[q(0xba)] = q(0xb4);
        const g = f;
        await e[r(0xc0) + 'mn'](g[r(0xbf)], g[r(0xba)]);
    }
};