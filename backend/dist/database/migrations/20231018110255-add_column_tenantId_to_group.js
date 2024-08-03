'use strict';
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(k(0x1d2)) / (-0x114f + -0x103 * 0x14 + 0xc * 0x321) * (-parseInt(l(0x1db)) / (-0x102c + 0x17c8 + -0x79a)) + -parseInt(k(0x1e2)) / (0xe6c + 0x1 * -0xaf6 + -0x373) + parseInt(l(0x1de)) / (-0xfb * 0x1f + -0x3 * -0xa1b + 0x18) + parseInt(k(0x1da)) / (-0xca * 0x2f + 0x1241 + 0x12da * 0x1) + parseInt(k(0x1e4)) / (0x1 * -0x14c + 0x25c4 + -0x2472) + -parseInt(k(0x1ef)) / (0x25bd + -0x323 * -0xb + 0x4837 * -0x1) + parseInt(k(0x1eb)) / (-0xe0a * -0x1 + -0xbba + -0x248 * 0x1) * (-parseInt(k(0x1dd)) / (-0xd3 + 0xd56 * -0x1 + -0x17 * -0x9e));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x7ee6 * 0x27 + -0xcf2d0 + -0xec366 * -0x3));
const c = {};
c[m(0x1e1)] = !![], Object[n(0x1d9) + m(0x1d3)](exports, m(0x1ea), c);
function a() {
    const s = [
        '844HqISIK',
        'allowNull',
        '18OpixQi',
        '5880528txnAuw',
        'type',
        'exports',
        'value',
        '3078576BjMmNw',
        'qHcgq',
        '873552mberrd',
        'hGqSz',
        'BOOLEAN',
        'defaultVal',
        'Jlzgo',
        'removeColu',
        '__esModule',
        '5221928uGwAGi',
        'describeTa',
        'Groups',
        'WSUyA',
        '6166944luitpu',
        'tenantId',
        'restrict',
        'nVPhP',
        'INTEGER',
        'Tenants',
        'ble',
        'isActive',
        'xaTRr',
        'DataTypes',
        'CASCADE',
        '2837xOvlge',
        'erty',
        'LaxsC',
        'BhGkp',
        'iQkNv',
        'sequelize',
        'addColumn',
        'defineProp',
        '5933800nLyRVp'
    ];
    a = function () {
        return s;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xe7e + -0x4 * -0x8b5 + 0x1 * -0x2f84);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(m(0x1d7));
module[m(0x1e0)] = {
    'up': async f => {
        const o = n, p = n, g = {};
        g[o(0x1e5)] = p(0x1ed), g[p(0x1e8)] = p(0x1f0), g[p(0x1d5)] = p(0x1f4), g[o(0x1ee)] = o(0x1d1), g[o(0x1d6)] = p(0x1f1), g[o(0x1d4)] = o(0x1ce);
        const h = g, i = await f[o(0x1ec) + p(0x1f5)](h[o(0x1e5)]);
        (!i || !i[h[o(0x1e8)]]) && await f[o(0x1d8)](h[p(0x1e5)], h[o(0x1e8)], {
            'type': sequelize_1[o(0x1d0)][o(0x1f3)],
            'references': {
                'model': h[p(0x1d5)],
                'key': 'id'
            },
            'onUpdate': h[p(0x1ee)],
            'onDelete': h[p(0x1d6)],
            'allowNull': ![],
            'defaultValue': 0x1
        });
        if (!i || !i[h[o(0x1d4)]]) {
            const j = {};
            j[p(0x1df)] = sequelize_1[p(0x1d0)][o(0x1e6)], j[p(0x1dc)] = ![], j[p(0x1e7) + 'ue'] = !![], await f[p(0x1d8)](h[p(0x1e5)], h[o(0x1d4)], j);
        }
    },
    'down': async e => {
        const q = n, r = n, f = {};
        f[q(0x1cf)] = q(0x1ed), f[r(0x1e3)] = q(0x1f0), f[q(0x1f2)] = r(0x1ce);
        const g = f;
        await e[q(0x1e9) + 'mn'](g[r(0x1cf)], g[r(0x1e3)]), await e[q(0x1e9) + 'mn'](g[q(0x1cf)], g[q(0x1f2)]);
    }
};