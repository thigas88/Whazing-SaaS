'use strict';
const o = b, p = b;
function a() {
    const u = [
        'addColumn',
        '1115362QBHuVo',
        'ble',
        '4730247ckbauD',
        'defaultVal',
        '553287qgisZf',
        '44QNshhl',
        'exports',
        'XlnUS',
        'DataTypes',
        'is_open_ia',
        'Xglut',
        'sequelize',
        'type',
        'queue_tran',
        'dZWLR',
        '32BbwGNk',
        '6021103LXXCoX',
        'kdgLW',
        'value',
        'defineProp',
        'GAJxz',
        '171114QzTPGj',
        'INTEGER',
        'Whatsapps',
        '133405YzXScs',
        'erty',
        '2408620DHGaHz',
        'allowNull',
        '1vJghQX',
        'describeTa',
        '114XSPnov',
        'LzSgL',
        'removeColu',
        'BOOLEAN',
        '__esModule'
    ];
    a = function () {
        return u;
    };
    return a();
}
(function (d, e) {
    const m = b, n = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(m(0x112)) / (0x67c * -0x6 + 0x30b * -0x5 + 0x3620) * (parseInt(n(0x11a)) / (0x71e * -0x3 + 0x1b47 * 0x1 + 0x65 * -0xf)) + -parseInt(n(0x10b)) / (-0x176f + 0x1 * -0x2315 + 0x3a87 * 0x1) * (-parseInt(m(0x11f)) / (0xb71 + -0x56f + 0x1a * -0x3b)) + parseInt(n(0x10e)) / (0x1405 + 0x460 + -0x1860) * (parseInt(m(0x114)) / (0x2 * -0x12ec + -0xfda + 0xd6e * 0x4)) + -parseInt(n(0x11e)) / (-0xa6e + -0x1e5f + 0xa35 * 0x4) * (parseInt(m(0x105)) / (-0x1661 + -0x6f * -0x43 + 0x2 * -0x352)) + parseInt(n(0x11c)) / (-0x1b0f + 0x206b * 0x1 + -0x553) + parseInt(m(0x110)) / (0x2315 + -0x59 * 0x67 + 0xc4) + -parseInt(n(0x106)) / (0x1e46 + 0x1d75 * 0x1 + -0x3bb0);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0x3099a + 0x599ab + -0x151e5 * 0x1));
const c = {};
c[o(0x108)] = !![], Object[p(0x109) + p(0x10f)](exports, o(0x118), c);
const sequelize_1 = require(p(0x101));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x11 * 0x11c + 0x1bb3 + -0x2d90);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[p(0x120)] = {
    'up': async g => {
        const q = p, r = o, h = {};
        h[q(0x10a)] = q(0x10d), h[q(0x115)] = q(0xff), h[q(0x104)] = q(0x103) + 'sf';
        const i = h, j = await g[r(0x113) + r(0x11b)](i[r(0x10a)]);
        if (!j || !j[i[q(0x115)]]) {
            const k = {};
            k[r(0x102)] = sequelize_1[r(0x122)][r(0x117)], k[r(0x11d) + 'ue'] = ![], k[q(0x111)] = !![], await g[q(0x119)](i[q(0x10a)], i[q(0x115)], k);
        }
        if (!j || !j[i[q(0x104)]]) {
            const l = {};
            l[q(0x102)] = sequelize_1[r(0x122)][r(0x10c)], l[r(0x111)] = !![], await g[q(0x119)](i[r(0x10a)], i[q(0x104)], l);
        }
    },
    'down': async e => {
        const s = p, t = p, f = {};
        f[s(0x107)] = s(0x10d), f[t(0x100)] = t(0xff), f[s(0x121)] = t(0x103) + 'sf';
        const g = f;
        await e[t(0x116) + 'mn'](g[t(0x107)], g[t(0x100)]), await e[t(0x116) + 'mn'](g[s(0x107)], g[s(0x121)]);
    }
};