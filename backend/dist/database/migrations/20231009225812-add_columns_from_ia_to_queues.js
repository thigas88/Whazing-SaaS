'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x9 * 0x215 + -0x1 * 0x376 + 0x1 * 0x17eb);
        let h = e[f];
        return h;
    }, b(c, d);
}
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(k(0x1c4)) / (-0x1 * 0x16a7 + -0x11 * 0x1e8 + 0x3710) + parseInt(k(0x1ce)) / (0x24cd * -0x1 + -0x445 * -0x1 + -0x1ea * -0x11) * (-parseInt(k(0x1c1)) / (0x1f3a + -0x24b8 + 0x581)) + -parseInt(k(0x1ca)) / (-0x3ef + -0x19ba + 0x1dad) + parseInt(k(0x1ba)) / (-0xd5 * 0x23 + 0x1 * -0x25e7 + 0x430b) * (-parseInt(k(0x1d7)) / (-0x92 + 0x2542 + -0x24aa)) + parseInt(k(0x1b8)) / (0x612 + -0x7ed + 0x1 * 0x1e2) * (-parseInt(k(0x1c2)) / (-0x1 * -0xd81 + -0x31e + -0xa5b * 0x1)) + -parseInt(k(0x1bb)) / (0x1 * -0x112 + -0x31 * -0x70 + -0x1 * 0x1455) + parseInt(k(0x1d8)) / (0xa6b + -0x9 * 0x63 + -0x1 * 0x6e6);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x8 * -0x18df7 + -0x5189 * 0x4f + 0xc3 * 0x243d));
function a() {
    const s = [
        '__esModule',
        '4063044ZbiJVx',
        'Queues',
        'sequelize',
        'BOOLEAN',
        '835774uMDlqR',
        'PkDxn',
        'erty',
        'defaultVal',
        'DataTypes',
        'cnpj',
        'type',
        'defineProp',
        'addColumn',
        '202206VKVnKs',
        '59752770myliXd',
        '56pEYvKd',
        'removeColu',
        '25DjxknN',
        '9501489BpDDwy',
        'QQJKd',
        'allowNull',
        'describeTa',
        'yWyKL',
        'from_ia',
        '9UsJruG',
        '1610496nxJVuE',
        'ble',
        '103947PAkxzB',
        'ruKhq',
        'value',
        'exports',
        'hQElD'
    ];
    a = function () {
        return s;
    };
    return a();
}
const c = {};
c[m(0x1c6)] = !![], Object[n(0x1d5) + n(0x1d0)](exports, n(0x1c9), c);
const sequelize_1 = require(m(0x1cc));
module[m(0x1c7)] = {
    'up': async f => {
        const o = m, p = m, g = {};
        g[o(0x1c5)] = o(0x1cb), g[o(0x1bf)] = p(0x1d3), g[o(0x1bc)] = o(0x1c0);
        const h = g, i = await f[o(0x1be) + o(0x1c3)](h[o(0x1c5)]);
        if (!i || !i[h[p(0x1bf)]]) {
            const j = {};
            j[p(0x1d4)] = sequelize_1[o(0x1d2)][p(0x1cd)], j[p(0x1d1) + 'ue'] = ![], j[p(0x1bd)] = !![], await f[o(0x1d6)](h[o(0x1c5)], h[p(0x1bc)], j);
        }
    },
    'down': async e => {
        const q = n, r = m, f = {};
        f[q(0x1c8)] = r(0x1cb), f[r(0x1cf)] = q(0x1c0);
        const g = f;
        await e[r(0x1b9) + 'mn'](g[q(0x1c8)], g[q(0x1cf)]);
    }
};