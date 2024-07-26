'use strict';
const o = b, p = b;
(function (d, e) {
    const m = b, n = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(m(0x1c8)) / (-0x354 * 0x4 + 0x1563 * -0x1 + 0x4 * 0x8ad) * (-parseInt(n(0x1d1)) / (-0x1 * -0x2515 + 0x1a90 + -0x3fa3)) + parseInt(m(0x1bc)) / (-0x8c0 + -0x74 * 0x52 + 0x2deb) + parseInt(n(0x1c5)) / (0x3 * -0xc95 + 0x1 * -0x437 + 0x29fa) + parseInt(n(0x1ba)) / (0x37e * 0x2 + -0xdf * -0x2 + -0x2e7 * 0x3) + -parseInt(n(0x1c6)) / (0x19b7 + 0x5b1 * 0x1 + -0x1f62) * (parseInt(m(0x1b7)) / (0xb58 + 0xf20 + -0x1a71)) + -parseInt(m(0x1bb)) / (0x1 * 0x1652 + -0x1d * -0xa6 + -0x2918) * (-parseInt(n(0x1b2)) / (0x1 * 0x240d + -0x12f + -0x22d5)) + -parseInt(m(0x1d0)) / (-0x689 + -0x1eda + -0xd * -0x2e1);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0xe5d80 + 0x1 * -0xbb5e5 + -0x438d * -0x87));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2395 + 0x237 + 0x167 * 0x19);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        'DataTypes',
        '44068Eknlur',
        '129972WtmfZF',
        'maxUsers',
        '77Prudvj',
        'type',
        'maxConnect',
        'UOyOb',
        'value',
        'TBgGq',
        'allowNull',
        '__esModule',
        '5920610OoXNUB',
        '14122wyuvfi',
        'GeaeC',
        'describeTa',
        '297SFFASM',
        'sequelize',
        'Tenants',
        'HzPIV',
        'exports',
        '119oDftfD',
        'yqOgn',
        'INTEGER',
        '5090075IXXdmu',
        '150376NeXogj',
        '1440999tcNXid',
        'defineProp',
        'ble',
        'removeColu',
        'erty',
        'addColumn',
        'ions',
        'aWIjQ'
    ];
    a = function () {
        return u;
    };
    return a();
}
const c = {};
c[o(0x1cc)] = !![], Object[o(0x1bd) + p(0x1c0)](exports, p(0x1cf), c);
const sequelize_1 = require(p(0x1b3));
module[o(0x1b6)] = {
    'up': async g => {
        const q = p, r = o, h = {};
        h[q(0x1cb)] = q(0x1b4), h[r(0x1d2)] = q(0x1c7), h[q(0x1c3)] = r(0x1ca) + r(0x1c2);
        const i = h, j = await g[q(0x1b1) + r(0x1be)](i[r(0x1cb)]);
        if (!j || !j[i[q(0x1d2)]]) {
            const k = {};
            k[r(0x1c9)] = sequelize_1[r(0x1c4)][q(0x1b9)], k[r(0x1ce)] = !![], await g[r(0x1c1)](i[r(0x1cb)], i[q(0x1d2)], k);
        }
        if (!j || !j[i[r(0x1c3)]]) {
            const l = {};
            l[r(0x1c9)] = sequelize_1[q(0x1c4)][r(0x1b9)], l[r(0x1ce)] = !![], await g[r(0x1c1)](i[r(0x1cb)], i[q(0x1c3)], l);
        }
    },
    'down': async e => {
        const s = o, t = o, f = {};
        f[s(0x1cd)] = s(0x1b4), f[s(0x1b5)] = t(0x1c7), f[t(0x1b8)] = t(0x1ca) + t(0x1c2);
        const g = f;
        await e[s(0x1bf) + 'mn'](g[t(0x1cd)], g[t(0x1b5)]), await e[t(0x1bf) + 'mn'](g[s(0x1cd)], g[s(0x1b8)]);
    }
};