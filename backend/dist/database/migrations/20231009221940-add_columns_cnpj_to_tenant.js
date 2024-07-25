'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x17f5 + 0xd00 + -0x23a1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(k(0x172)) / (0x2de * -0xa + 0x669 * -0x2 + 0x297f) * (parseInt(k(0x16f)) / (0x1 * 0x2531 + -0x1a26 + 0x235 * -0x5)) + -parseInt(l(0x162)) / (0xe6e * 0x1 + -0x1 * 0x56e + -0x8fd) * (-parseInt(k(0x15e)) / (0x11d1 * -0x1 + -0x2 * 0x46f + 0x557 * 0x5)) + parseInt(k(0x15b)) / (-0x2 * 0x887 + 0x2fe * 0x1 + -0xe15 * -0x1) + parseInt(l(0x165)) / (-0xcd * -0x2d + -0x127d + 0x8c3 * -0x2) + -parseInt(k(0x16c)) / (-0x86b * 0x1 + 0x1783 + -0xf11) * (-parseInt(k(0x169)) / (0x1 * -0x67 + 0x876 + 0x1 * -0x807)) + -parseInt(k(0x15c)) / (-0x7c * 0x1 + 0x24e1 + -0x34 * 0xb3) + parseInt(l(0x170)) / (0x7c9 * 0x1 + -0x4f + -0x770) * (-parseInt(k(0x160)) / (-0xb5 * 0x1 + -0x1692 + 0x1752));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x4e * 0xaa5 + -0x11d8b * 0x3 + 0xc567b));
const c = {};
c[m(0x154)] = !![], Object[n(0x157) + m(0x15f)](exports, n(0x158), c);
function a() {
    const s = [
        'exports',
        'addColumn',
        '1045821mJlwoQ',
        'sequelize',
        'allowNull',
        '1007990THaruc',
        '30OYITFe',
        'STRING',
        '1HIXxpB',
        'value',
        'BxVWi',
        'describeTa',
        'defineProp',
        '__esModule',
        'type',
        'ble',
        '283775fHLUMC',
        '6479415OtkqHi',
        'removeColu',
        '224404UWKTXL',
        'erty',
        '2937781cSAEGk',
        'PoqXg',
        '3mLocpa',
        'rsesq',
        'DataTypes',
        '4100454JTpHsx',
        'cnpj',
        'MqMVx',
        'Tenants',
        '32HsWOIg'
    ];
    a = function () {
        return s;
    };
    return a();
}
const sequelize_1 = require(m(0x16d));
module[n(0x16a)] = {
    'up': async f => {
        const o = n, p = m, g = {};
        g[o(0x155)] = p(0x168), g[o(0x167)] = o(0x166);
        const h = g, i = await f[p(0x156) + p(0x15a)](h[p(0x155)]);
        if (!i || !i[h[p(0x167)]]) {
            const j = {};
            j[p(0x159)] = sequelize_1[p(0x164)][o(0x171)], j[p(0x16e)] = ![], await f[o(0x16b)](h[o(0x155)], h[p(0x167)], j);
        }
    },
    'down': async e => {
        const q = n, r = n, f = {};
        f[q(0x161)] = q(0x168), f[q(0x163)] = q(0x166);
        const g = f;
        await e[r(0x15d) + 'mn'](g[r(0x161)], g[q(0x163)]);
    }
};