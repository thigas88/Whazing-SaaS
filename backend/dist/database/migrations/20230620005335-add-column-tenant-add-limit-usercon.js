'use strict';
const o = b, p = b;
(function (d, e) {
    const m = b, n = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(m(0x14e)) / (0x2096 + 0x890 + -0x1 * 0x2925) + -parseInt(m(0x14f)) / (-0xa8c + -0x19cb + 0x2459) * (parseInt(m(0x157)) / (-0x1c * 0xe3 + 0x4 * -0x862 + -0x11 * -0x36f)) + parseInt(n(0x154)) / (0x1919 + 0x1 * -0x18c5 + 0x4 * -0x14) * (parseInt(m(0x140)) / (-0xd * 0x59 + 0x1ed9 + -0x1a4f)) + parseInt(n(0x13c)) / (0x1b5f + -0x994 + -0x11c5) + parseInt(m(0x158)) / (-0x2510 + -0xda3 * 0x1 + 0x2 * 0x195d) + -parseInt(n(0x153)) / (-0x8 * -0x2a1 + -0x13f9 + -0x1 * 0x107) * (-parseInt(m(0x145)) / (0x14a8 + 0xb43 * 0x3 + -0x3668)) + parseInt(m(0x15a)) / (-0x15ba + -0xa4c * 0x1 + 0x26 * 0xd8) * (-parseInt(n(0x13e)) / (0x228b + -0x2e1 + -0x1f9f));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0x7 * 0x2d7b5 + -0x582 * -0x3 + -0x53b26));
function a() {
    const u = [
        'ions',
        'addColumn',
        '3273447EzEKik',
        '8161104DqdgHu',
        'exports',
        '30pqznpl',
        'erty',
        'JBwtd',
        'removeColu',
        'describeTa',
        '10004574IVkQtA',
        'value',
        '11275649DLJVUp',
        'iGvBf',
        '6955015yNyWPx',
        '__esModule',
        'INTEGER',
        'SrXXT',
        'maxUsers',
        '3051ViGuwN',
        'ble',
        'Tenants',
        'maxConnect',
        'defineProp',
        'sqHTk',
        'GjFhu',
        'allowNull',
        'yrUET',
        '551870SSRgZZ',
        '2LTJJJi',
        'type',
        'sequelize',
        'DataTypes',
        '8392kNfxqk',
        '4qbybUW'
    ];
    a = function () {
        return u;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1b92 + -0x269d + -0x623 * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const c = {};
c[o(0x13d)] = !![], Object[p(0x149) + p(0x15b)](exports, p(0x141), c);
const sequelize_1 = require(p(0x151));
module[p(0x159)] = {
    'up': async g => {
        const q = p, r = o, h = {};
        h[q(0x15c)] = r(0x147), h[r(0x143)] = r(0x144), h[q(0x14b)] = r(0x148) + r(0x155);
        const i = h, j = await g[r(0x13b) + q(0x146)](i[q(0x15c)]);
        if (!j || !j[i[q(0x143)]]) {
            const k = {};
            k[r(0x150)] = sequelize_1[q(0x152)][q(0x142)], k[q(0x14c)] = !![], await g[r(0x156)](i[r(0x15c)], i[q(0x143)], k);
        }
        if (!j || !j[i[r(0x14b)]]) {
            const l = {};
            l[r(0x150)] = sequelize_1[r(0x152)][q(0x142)], l[r(0x14c)] = !![], await g[q(0x156)](i[r(0x15c)], i[q(0x14b)], l);
        }
    },
    'down': async e => {
        const s = o, t = p, f = {};
        f[s(0x14a)] = s(0x147), f[s(0x14d)] = s(0x144), f[t(0x13f)] = s(0x148) + s(0x155);
        const g = f;
        await e[s(0x15d) + 'mn'](g[t(0x14a)], g[t(0x14d)]), await e[s(0x15d) + 'mn'](g[t(0x14a)], g[s(0x13f)]);
    }
};