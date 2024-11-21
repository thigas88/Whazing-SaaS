'use strict';
const o = b, p = b;
(function (d, e) {
    const m = b, n = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(m(0x13a)) / (0x1 * 0x478 + -0x1b2b + -0x4 * -0x5ad) + parseInt(m(0x132)) / (-0x2 * 0x12fd + -0x1 * 0x2681 + 0x197f * 0x3) + parseInt(m(0x141)) / (-0x1 * -0x1d60 + -0x1d * -0x103 + -0x3ab4) * (parseInt(n(0x14a)) / (-0x1b70 + 0x585 * -0x1 + 0x20f9)) + parseInt(m(0x14d)) / (0xc5f + -0x977 * -0x2 + 0x478 * -0x7) + -parseInt(m(0x131)) / (0xc25 + -0x717 * 0x3 + 0x926) * (parseInt(n(0x147)) / (0x23db * 0x1 + -0x49 * -0x6d + -0x42e9)) + parseInt(n(0x13c)) / (-0xd * 0x1a3 + 0x29 * -0x79 + 0x28b0) * (-parseInt(m(0x138)) / (-0x21ef + -0x5fb * 0x2 + 0x2dee)) + parseInt(n(0x130)) / (0x1486 + -0xd * 0x97 + -0x11 * 0xc1);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x911e * -0x14 + -0x1 * -0x57a46 + 0xaa375 * -0x1));
const c = {};
function a() {
    const u = [
        'exports',
        'INTEGER',
        'queue_tran',
        'JRpeR',
        '1681910bqeshL',
        '18XLkdHy',
        '594024QZWBum',
        'ble',
        'removeColu',
        'describeTa',
        '__esModule',
        'iRSbF',
        '198EVOMGK',
        'addColumn',
        '48030ZJjsol',
        'is_open_ia',
        '136536DuHLBo',
        'value',
        'Whatsapps',
        'type',
        'defineProp',
        '594yeULdu',
        'BOOLEAN',
        'yuELx',
        'LZiPR',
        'sequelize',
        'mjbGe',
        '1410584zgmagq',
        'MkyWl',
        'DataTypes',
        '14736tqydkZ',
        'allowNull',
        'erty',
        '1190910yZxaIU',
        'defaultVal'
    ];
    a = function () {
        return u;
    };
    return a();
}
c[o(0x13d)] = !![], Object[o(0x140) + p(0x14c)](exports, p(0x136), c);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xaeb + 0x1 * 0x20b6 + -0x1 * 0x2a72);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(p(0x145));
module[o(0x14f)] = {
    'up': async g => {
        const q = p, r = o, h = {};
        h[q(0x137)] = r(0x13e), h[q(0x146)] = r(0x13b), h[q(0x12f)] = q(0x151) + 'sf';
        const i = h, j = await g[q(0x135) + q(0x133)](i[q(0x137)]);
        if (!j || !j[i[q(0x146)]]) {
            const k = {};
            k[r(0x13f)] = sequelize_1[r(0x149)][q(0x142)], k[r(0x14e) + 'ue'] = ![], k[q(0x14b)] = !![], await g[q(0x139)](i[r(0x137)], i[q(0x146)], k);
        }
        if (!j || !j[i[q(0x12f)]]) {
            const l = {};
            l[r(0x13f)] = sequelize_1[r(0x149)][q(0x150)], l[r(0x14b)] = !![], await g[q(0x139)](i[q(0x137)], i[q(0x12f)], l);
        }
    },
    'down': async e => {
        const s = p, t = p, f = {};
        f[s(0x144)] = t(0x13e), f[s(0x143)] = s(0x13b), f[t(0x148)] = t(0x151) + 'sf';
        const g = f;
        await e[t(0x134) + 'mn'](g[s(0x144)], g[t(0x143)]), await e[t(0x134) + 'mn'](g[t(0x144)], g[t(0x148)]);
    }
};