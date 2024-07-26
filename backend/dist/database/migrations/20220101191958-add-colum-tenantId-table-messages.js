'use strict';
const l = b, m = b;
function a() {
    const r = [
        '178186RNpRde',
        'tenantId',
        'defineProp',
        'kLRMI',
        '4916634SGWXnF',
        'Tenants',
        'rNPWc',
        'erty',
        '894607dCxEaZ',
        '457743STdUvo',
        'exports',
        '1017555NEoPdr',
        'OPnuX',
        'PybGg',
        'sequelize',
        'restrict',
        'KAdVt',
        'addColumn',
        'removeColu',
        'Ttahn',
        '8118000cTUJEg',
        'all',
        'value',
        'Messages',
        '8vPpyEN',
        'DataTypes',
        '16MfgXxD',
        'gmJHx',
        '1401405YmfKuf',
        'INTEGER',
        'CASCADE',
        '__esModule'
    ];
    a = function () {
        return r;
    };
    return a();
}
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0x8e)) / (0x485 * -0x1 + 0xc77 * 0x1 + -0x1 * 0x7f1) + -parseInt(k(0xa5)) / (0x2 * -0xba8 + 0x177e + -0x2c) + -parseInt(j(0x90)) / (0x2 * -0x10ba + 0x195d + 0x81a) + -parseInt(k(0x9d)) / (-0x1902 + 0xaa2 + 0xe64) * (-parseInt(k(0xa1)) / (-0x367 * 0xa + -0x26a4 * -0x1 + 0x1 * -0x499)) + -parseInt(j(0xa9)) / (0xb21 + 0x943 + 0x4f * -0x42) + parseInt(j(0xad)) / (0x1000 + -0xcf6 + 0x3 * -0x101) * (-parseInt(j(0x9f)) / (0x15c1 + 0x1493 + 0x1526 * -0x2)) + parseInt(k(0x99)) / (-0x1 * -0x260f + -0x31b + -0x22eb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x62b93 + -0x35 * -0x30fb + -0x9f2b0));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2d1 + -0xa81 + -0x4a0 * -0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const i = {};
i[l(0x9b)] = !![], Object[l(0xa7) + m(0xac)](exports, l(0xa4), i);
const sequelize_1 = require(m(0x93));
module[l(0x8f)] = {
    'up': d => {
        const n = l, o = l, e = {};
        e[n(0x91)] = o(0x9c), e[n(0xa8)] = n(0xa6), e[o(0xa0)] = n(0xaa), e[n(0x95)] = n(0xa3), e[n(0x92)] = o(0x94);
        const f = e;
        return Promise[n(0x9a)]([d[n(0x96)](f[o(0x91)], f[n(0xa8)], {
                'type': sequelize_1[n(0x9e)][o(0xa2)],
                'references': {
                    'model': f[n(0xa0)],
                    'key': 'id'
                },
                'onUpdate': f[o(0x95)],
                'onDelete': f[o(0x92)],
                'allowNull': !![],
                'defaultValue': null
            })]);
    },
    'down': d => {
        const p = m, q = l, e = {};
        e[p(0xab)] = p(0x9c), e[p(0x98)] = q(0xa6);
        const f = e;
        return Promise[q(0x9a)]([d[q(0x97) + 'mn'](f[q(0xab)], f[q(0x98)])]);
    }
};