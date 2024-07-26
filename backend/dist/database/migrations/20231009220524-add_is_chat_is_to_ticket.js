'use strict';
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(k(0x18d)) / (-0x1e6d + -0x1b74 + -0x3e * -0xef) * (parseInt(l(0x186)) / (0x709 * 0x1 + -0x1699 + 0xf92)) + -parseInt(l(0x196)) / (0xa4b + 0xc37 + -0x1 * 0x167f) + parseInt(l(0x190)) / (-0x7 * 0xb + 0x3ec + 0xd * -0x47) * (parseInt(l(0x18e)) / (-0x2d4 + -0x1 * -0x18b + 0x14e * 0x1)) + parseInt(k(0x198)) / (-0xd3 * 0x29 + -0xdc * 0x17 + 0x3595) * (-parseInt(k(0x192)) / (0x1721 * 0x1 + 0x1e7d + -0x327 * 0x11)) + -parseInt(l(0x18a)) / (-0x5fc * 0x1 + 0x26a5 + -0x20a1) * (-parseInt(l(0x185)) / (0xb * -0x206 + -0xb81 * 0x3 + 0x38ce)) + parseInt(l(0x19e)) / (-0x451 + -0x1 * -0x2225 + -0x29 * 0xba) + -parseInt(k(0x189)) / (0x2ef * -0x7 + -0x3b * 0x15 + 0x196b) * (parseInt(l(0x19c)) / (0x4fd + -0x2065 * 0x1 + 0x4 * 0x6dd));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0x2e8b6 + -0xd6 * -0xeda + -0x64f0e));
function a() {
    const s = [
        'allowNull',
        'sequelize',
        '1217064RgXedU',
        'value',
        '2754654sVtqTc',
        'exports',
        'DataTypes',
        'Tickets',
        '25063392Akbmfw',
        'IZhDS',
        '9263070grfwsq',
        'ble',
        'vYZJO',
        'defineProp',
        'addColumn',
        'HLWcs',
        'erty',
        'removeColu',
        '34218kOCaaC',
        '2xRtAUP',
        'is_chat_ia',
        '__esModule',
        '11fcwSBx',
        '2472vHZKnS',
        'BOOLEAN',
        'type',
        '807769XktSax',
        '3176695REVXZH',
        'sWUQW',
        '4JzXrbq',
        'defaultVal',
        '7BqvzuF',
        'describeTa'
    ];
    a = function () {
        return s;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2506 + -0x2da * -0xd + -0xbb * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const c = {};
c[m(0x197)] = !![], Object[m(0x1a1) + m(0x183)](exports, n(0x188), c);
const sequelize_1 = require(m(0x195));
module[m(0x199)] = {
    'up': async f => {
        const o = n, p = n, g = {};
        g[o(0x1a0)] = p(0x19b), g[p(0x18f)] = o(0x187);
        const h = g, i = await f[p(0x193) + p(0x19f)](h[o(0x1a0)]);
        if (!i || !i[h[p(0x18f)]]) {
            const j = {};
            j[p(0x18c)] = sequelize_1[o(0x19a)][p(0x18b)], j[p(0x191) + 'ue'] = ![], j[p(0x194)] = !![], await f[p(0x1a2)](h[o(0x1a0)], h[o(0x18f)], j);
        }
    },
    'down': async e => {
        const q = m, r = m, f = {};
        f[q(0x182)] = r(0x19b), f[r(0x19d)] = q(0x187);
        const g = f;
        await e[q(0x184) + 'mn'](g[r(0x182)], g[q(0x19d)]);
    }
};