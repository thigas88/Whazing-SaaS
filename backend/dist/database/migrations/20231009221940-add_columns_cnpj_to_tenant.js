'use strict';
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(k(0x12b)) / (-0x1fd3 + 0x1343 + -0x1 * -0xc91) + parseInt(l(0x12d)) / (-0x6 * -0x2c8 + 0x355 * -0x9 + 0xd4f) + -parseInt(l(0x135)) / (0x631 * -0x1 + -0x22ff + 0x2933) * (parseInt(l(0x13d)) / (-0x17f0 + 0xe65 + -0x1 * -0x98f)) + parseInt(k(0x139)) / (0x1623 + 0x1 * 0x314 + -0x1932) + parseInt(l(0x130)) / (0x1e08 * 0x1 + 0x1ecd + 0x1445 * -0x3) * (-parseInt(l(0x134)) / (0x1486 + -0xfb0 + -0x4cf)) + parseInt(l(0x12f)) / (0x2283 + 0x3 * 0x876 + -0xbf9 * 0x5) * (-parseInt(l(0x13a)) / (0x1 * 0x18cd + -0x40b + 0x1 * -0x14b9)) + parseInt(k(0x144)) / (0x17ba + -0x20a2 + 0x8f2);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x7ae94 * 0x1 + 0x4 * 0x1bf23 + 0x3fb * 0x201));
const c = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x9 * -0x189 + -0x15f5 + 0x94b);
        let h = e[f];
        return h;
    }, b(c, d);
}
c[m(0x128)] = !![], Object[n(0x140) + m(0x136)](exports, m(0x129), c);
const sequelize_1 = require(m(0x13b));
function a() {
    const s = [
        'ble',
        'exports',
        '7FtrsRZ',
        '411UFTuTJ',
        'erty',
        'type',
        'hQSUG',
        '3462925cZJsiL',
        '3442383KxoUsv',
        'sequelize',
        'DataTypes',
        '7380TrIoRj',
        'STRING',
        'allowNull',
        'defineProp',
        'UCUoM',
        'MEYoh',
        'addColumn',
        '1469020aTxWcU',
        'Tenants',
        'value',
        '__esModule',
        'CNBnn',
        '204667igQgCF',
        'cnpj',
        '1125340lkdrfd',
        'describeTa',
        '8IOnAdm',
        '510402XyTqKf',
        'removeColu'
    ];
    a = function () {
        return s;
    };
    return a();
}
module[m(0x133)] = {
    'up': async f => {
        const o = m, p = n, g = {};
        g[o(0x12a)] = o(0x127), g[o(0x142)] = p(0x12c);
        const h = g, i = await f[o(0x12e) + p(0x132)](h[o(0x12a)]);
        if (!i || !i[h[o(0x142)]]) {
            const j = {};
            j[o(0x137)] = sequelize_1[p(0x13c)][p(0x13e)], j[o(0x13f)] = ![], await f[p(0x143)](h[o(0x12a)], h[o(0x142)], j);
        }
    },
    'down': async e => {
        const q = m, r = n, f = {};
        f[q(0x141)] = q(0x127), f[r(0x138)] = r(0x12c);
        const g = f;
        await e[r(0x131) + 'mn'](g[q(0x141)], g[r(0x138)]);
    }
};