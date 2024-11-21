'use strict';
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(k(0x99)) / (-0xcea * 0x3 + 0xed8 + 0x17e7) + parseInt(k(0x91)) / (0x19cb + 0x3e * 0x71 + -0x3527) * (-parseInt(k(0x93)) / (-0x1 * -0xbaf + 0x1 * 0x16d9 + -0x1 * 0x2285)) + parseInt(l(0x8c)) / (0x3 * -0x90d + -0x1e80 + -0x1339 * -0x3) * (-parseInt(k(0x9a)) / (0x1c56 + 0x2 * -0x4f5 + -0x1267)) + parseInt(l(0x8f)) / (0x1db7 * 0x1 + 0x5 * 0x6ec + 0x9 * -0x725) * (-parseInt(l(0x8d)) / (0x133 + 0x1b21 + -0x15 * 0x159)) + -parseInt(k(0x8b)) / (-0x2400 + -0x1 * -0x1115 + 0x12f3) * (-parseInt(k(0x86)) / (0xd * 0xb9 + 0x44f + -0xdab)) + parseInt(l(0x9c)) / (0x2433 * 0x1 + 0x10b7 + -0x34e0) + parseInt(k(0x82)) / (-0x119 * -0x13 + -0x1 * -0x5db + -0x1aab * 0x1);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x1ba7 * -0x2b + -0xf4f * -0x4f + 0x9 * -0x27fb));
const c = {};
function a() {
    const s = [
        '4789050DLGTpd',
        'isActive',
        'RMqyb',
        'UEYTj',
        'CASCADE',
        'BOOLEAN',
        'Tenants',
        'AGatK',
        'nlrZa',
        'kpdcD',
        'motFn',
        'defineProp',
        'sequelize',
        'Groups',
        'allowNull',
        'type',
        '6846136DXlzwt',
        'ohsPF',
        '__esModule',
        'tenantId',
        '1477017APJtMi',
        'addColumn',
        'INTEGER',
        'fBvKk',
        'dVrYt',
        '48BseNan',
        '2140LLeEdB',
        '14NCYWAd',
        'restrict',
        '1270824pPGQzg',
        'erty',
        '2PytecX',
        'describeTa',
        '2709339ATcXbX',
        'defaultVal',
        'removeColu',
        'DataTypes',
        'exports',
        'ble',
        '92370ONxAdM',
        '1355MgiLaP',
        'value'
    ];
    a = function () {
        return s;
    };
    return a();
}
c[m(0x9b)] = !![], Object[n(0x7d) + m(0x90)](exports, n(0x84), c);
const sequelize_1 = require(n(0x7e));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x260e + -0x258 + 0x28df);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[n(0x97)] = {
    'up': async f => {
        const o = m, p = m, g = {};
        g[o(0x7b)] = p(0x7f), g[p(0x7a)] = p(0x85), g[p(0x9e)] = o(0xa2), g[o(0x9f)] = p(0xa0), g[p(0x89)] = o(0x8e), g[o(0x8a)] = o(0x9d);
        const h = g, i = await f[p(0x92) + p(0x98)](h[o(0x7b)]);
        (!i || !i[h[o(0x7a)]]) && await f[p(0x87)](h[p(0x7b)], h[o(0x7a)], {
            'type': sequelize_1[o(0x96)][o(0x88)],
            'references': {
                'model': h[o(0x9e)],
                'key': 'id'
            },
            'onUpdate': h[p(0x9f)],
            'onDelete': h[p(0x89)],
            'allowNull': ![],
            'defaultValue': 0x1
        });
        if (!i || !i[h[p(0x8a)]]) {
            const j = {};
            j[p(0x81)] = sequelize_1[p(0x96)][p(0xa1)], j[o(0x80)] = ![], j[o(0x94) + 'ue'] = !![], await f[p(0x87)](h[p(0x7b)], h[o(0x8a)], j);
        }
    },
    'down': async e => {
        const q = n, r = n, f = {};
        f[q(0x79)] = r(0x7f), f[r(0x83)] = r(0x85), f[q(0x7c)] = r(0x9d);
        const g = f;
        await e[r(0x95) + 'mn'](g[r(0x79)], g[q(0x83)]), await e[r(0x95) + 'mn'](g[q(0x79)], g[q(0x7c)]);
    }
};