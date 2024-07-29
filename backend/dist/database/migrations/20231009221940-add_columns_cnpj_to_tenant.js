'use strict';
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(k(0x168)) / (-0x514 + -0x22e9 + 0x27fe) + parseInt(l(0x169)) / (0x8b7 * 0x4 + 0x1e04 + 0x26 * -0x1b5) + -parseInt(l(0x179)) / (0xac * 0xb + -0x3 * 0x6d + -0x61a) * (-parseInt(k(0x161)) / (0x181 * 0x14 + -0x1 * 0x19bf + 0xdd * -0x5)) + -parseInt(l(0x15e)) / (-0x1b3a + -0x1 * -0x1aa6 + -0x33 * -0x3) * (-parseInt(k(0x17b)) / (-0x1473 + 0x7 * -0xce + 0x1a1b)) + -parseInt(k(0x178)) / (0x99d * 0x1 + 0x31c + -0xcb2) * (parseInt(l(0x164)) / (0x21b8 + -0x32 * -0x6d + 0x36fa * -0x1)) + -parseInt(k(0x16c)) / (-0xd3 * 0x21 + -0x4ec + 0x126 * 0x1c) + parseInt(l(0x15f)) / (-0x821 * -0x3 + -0x1135 + 0x392 * -0x2) * (-parseInt(k(0x16d)) / (0x181a + 0x1a42 + -0x3251));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x4 * -0xc41f + 0x87 * -0xf0c + 0x7234 * 0x27));
function a() {
    const s = [
        'DataTypes',
        'hJXhV',
        'STRING',
        'defineProp',
        'type',
        'describeTa',
        '__esModule',
        'erty',
        '175MuzLvq',
        '2686590rFuZOp',
        'hAfiP',
        '783726UAvpIP',
        'ble',
        '40htfWOO',
        '4450wQyDWk',
        'Tenants',
        '4SdrJXO',
        'cnpj',
        'sequelize',
        '55456jhALGe',
        'exports',
        'value',
        'allowNull',
        '127768Luwtao',
        '2351014NIXWcj',
        'removeColu',
        'tgmnS',
        '4472505ZIijgX',
        '37004YfyYRg',
        'rZzFx',
        'addColumn'
    ];
    a = function () {
        return s;
    };
    return a();
}
const c = {};
c[m(0x166)] = !![], Object[m(0x173) + m(0x177)](exports, n(0x176), c);
const sequelize_1 = require(m(0x163));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x113e + 0x1 * 0x1bbd + 0xe8a * -0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[m(0x165)] = {
    'up': async f => {
        const o = n, p = n, g = {};
        g[o(0x16b)] = p(0x160), g[p(0x16e)] = o(0x162);
        const h = g, i = await f[p(0x175) + o(0x15d)](h[p(0x16b)]);
        if (!i || !i[h[o(0x16e)]]) {
            const j = {};
            j[p(0x174)] = sequelize_1[o(0x170)][o(0x172)], j[o(0x167)] = ![], await f[p(0x16f)](h[o(0x16b)], h[o(0x16e)], j);
        }
    },
    'down': async e => {
        const q = m, r = m, f = {};
        f[q(0x171)] = r(0x160), f[r(0x17a)] = r(0x162);
        const g = f;
        await e[q(0x16a) + 'mn'](g[r(0x171)], g[r(0x17a)]);
    }
};