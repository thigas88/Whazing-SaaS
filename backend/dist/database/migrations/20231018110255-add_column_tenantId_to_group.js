'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x39 * 0x6d + -0x4c6 * -0x3 + 0xbc8);
        let h = e[f];
        return h;
    }, b(c, d);
}
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(k(0x1ed)) / (0x2160 + -0x1 * -0x126d + -0x33cc) * (-parseInt(k(0x1dc)) / (0x25be + -0x85 * 0xd + -0x7 * 0x46d)) + -parseInt(l(0x1de)) / (0xcc * 0x19 + 0x1a79 + -0x3 * 0xf76) + -parseInt(l(0x1fd)) / (-0x1 * -0xefc + 0x2 * -0x652 + 0x254 * -0x1) + parseInt(k(0x1f8)) / (0x24b * 0x7 + -0x79f + -0x869) + parseInt(k(0x1ef)) / (-0x1f97 + 0x187c + 0x721) * (-parseInt(l(0x1f5)) / (-0x1aec + 0x1499 * 0x1 + -0x65a * -0x1)) + parseInt(k(0x1d6)) / (-0x1b + -0x15ad + 0x15d0) + -parseInt(k(0x1db)) / (-0x2 * -0xcf5 + 0xd53 + 0xd * -0x304) * (-parseInt(k(0x1eb)) / (-0xd * 0xf + -0x3b * -0x47 + -0xf90));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0xe629e + 0x328d5 * -0x1 + 0x136 * 0x16b5));
const c = {};
c[m(0x1ee)] = !![], Object[m(0x1e5) + n(0x1f9)](exports, m(0x1ec), c);
function a() {
    const s = [
        '2310772cvXoJz',
        'ADmYo',
        '2013504JVUeee',
        'tenantId',
        'ble',
        'JuHJL',
        'describeTa',
        '198XUjbrx',
        '2bhdXEg',
        'crXNL',
        '447867JuSQbG',
        'Tenants',
        'WFKxS',
        'BOHpo',
        'removeColu',
        'BOOLEAN',
        'allowNull',
        'defineProp',
        'mQRMe',
        'IaBrv',
        'ThSSR',
        'Groups',
        'INTEGER',
        '1235670IneNjP',
        '__esModule',
        '1122014SNcHfR',
        'value',
        '6jKljiA',
        'addColumn',
        'defaultVal',
        'isActive',
        'CASCADE',
        'type',
        '3463579MztyrK',
        'sequelize',
        'zCJMT',
        '129250SjbrVp',
        'erty',
        'restrict',
        'DataTypes',
        'exports'
    ];
    a = function () {
        return s;
    };
    return a();
}
const sequelize_1 = require(m(0x1f6));
module[m(0x1fc)] = {
    'up': async f => {
        const o = n, p = m, g = {};
        g[o(0x1dd)] = p(0x1e9), g[o(0x1e8)] = p(0x1d7), g[o(0x1e1)] = o(0x1df), g[p(0x1e6)] = p(0x1f3), g[o(0x1d5)] = p(0x1fa), g[o(0x1e0)] = o(0x1f2);
        const h = g, i = await f[o(0x1da) + o(0x1d8)](h[o(0x1dd)]);
        (!i || !i[h[o(0x1e8)]]) && await f[p(0x1f0)](h[p(0x1dd)], h[p(0x1e8)], {
            'type': sequelize_1[o(0x1fb)][p(0x1ea)],
            'references': {
                'model': h[o(0x1e1)],
                'key': 'id'
            },
            'onUpdate': h[o(0x1e6)],
            'onDelete': h[p(0x1d5)],
            'allowNull': ![],
            'defaultValue': 0x1
        });
        if (!i || !i[h[p(0x1e0)]]) {
            const j = {};
            j[o(0x1f4)] = sequelize_1[p(0x1fb)][o(0x1e3)], j[p(0x1e4)] = ![], j[o(0x1f1) + 'ue'] = !![], await f[o(0x1f0)](h[p(0x1dd)], h[p(0x1e0)], j);
        }
    },
    'down': async e => {
        const q = n, r = n, f = {};
        f[q(0x1f7)] = q(0x1e9), f[r(0x1d9)] = q(0x1d7), f[r(0x1e7)] = q(0x1f2);
        const g = f;
        await e[q(0x1e2) + 'mn'](g[r(0x1f7)], g[q(0x1d9)]), await e[q(0x1e2) + 'mn'](g[q(0x1f7)], g[r(0x1e7)]);
    }
};