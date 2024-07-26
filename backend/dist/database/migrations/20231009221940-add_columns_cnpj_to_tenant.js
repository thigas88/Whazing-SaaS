'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x21d2 + -0x25ea + 0x1 * 0x551);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const s = [
        '4856BTcIyY',
        'exports',
        'addColumn',
        'DataTypes',
        'Tenants',
        'cnpj',
        'qezKx',
        '8RifZjs',
        '59283HfSmrW',
        'value',
        'erty',
        '9936DdimrI',
        '1015080cDkoRM',
        'STRING',
        'sequelize',
        'removeColu',
        'pSjXH',
        '12zCMhgS',
        'fgXTS',
        'pPLMz',
        'describeTa',
        'defineProp',
        '1419768XgKwiq',
        '__esModule',
        'ble',
        '170705guTijJ',
        '816hKKjbx',
        'type',
        'allowNull',
        '73REVgXI',
        '2233932obrCnC',
        '11IrWAtz'
    ];
    a = function () {
        return s;
    };
    return a();
}
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(k(0x148)) / (-0x1693 + -0x12 * 0x67 + 0x1dd2) * (parseInt(k(0x156)) / (-0xa4 * -0x23 + -0x252b + 0x4eb * 0x3)) + parseInt(l(0x145)) / (-0x105d + 0x1783 + -0x723) * (parseInt(l(0x14b)) / (-0x2 * -0xeaa + -0x1 * 0x3a3 + -0x3ab * 0x7)) + -parseInt(l(0x144)) / (-0x217 * 0x12 + -0x8d * 0x33 + -0x5e * -0xb3) * (-parseInt(l(0x13c)) / (0x112b + 0x1e95 * 0x1 + -0x2fba)) + -parseInt(l(0x141)) / (-0xa * -0x67 + 0x9 * -0x403 + 0x201c) + parseInt(k(0x152)) / (0x1 * -0x1679 + -0x23f6 * 0x1 + 0x3a77) * (-parseInt(l(0x153)) / (0xc9 * -0x15 + 0x6f0 + -0x996 * -0x1)) + -parseInt(l(0x157)) / (-0x18 * 0x6a + -0x1d3f * -0x1 + -0x1345 * 0x1) + parseInt(l(0x14a)) / (0x1751 * -0x1 + -0x4c * 0xa + -0x1 * -0x1a54) * (-parseInt(k(0x149)) / (0x87 * -0x3b + -0x1 * 0x1da9 + 0x3cd2));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x102b4 + 0x59869 * -0x1 + 0x1 * 0xaa2a7));
const c = {};
c[m(0x154)] = !![], Object[m(0x140) + n(0x155)](exports, m(0x142), c);
const sequelize_1 = require(n(0x139));
module[m(0x14c)] = {
    'up': async f => {
        const o = m, p = m, g = {};
        g[o(0x151)] = o(0x14f), g[o(0x13b)] = o(0x150);
        const h = g, i = await f[p(0x13f) + p(0x143)](h[p(0x151)]);
        if (!i || !i[h[o(0x13b)]]) {
            const j = {};
            j[p(0x146)] = sequelize_1[p(0x14e)][p(0x158)], j[p(0x147)] = ![], await f[p(0x14d)](h[o(0x151)], h[p(0x13b)], j);
        }
    },
    'down': async e => {
        const q = n, r = n, f = {};
        f[q(0x13d)] = q(0x14f), f[r(0x13e)] = r(0x150);
        const g = f;
        await e[r(0x13a) + 'mn'](g[q(0x13d)], g[r(0x13e)]);
    }
};