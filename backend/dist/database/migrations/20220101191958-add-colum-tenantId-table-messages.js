'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0xd8)) / (0x180 * 0xc + -0x1 * 0x1f1 + -0x100e) * (parseInt(j(0xea)) / (0x266e * -0x1 + -0x1d3c + 0x43ac)) + parseInt(k(0xdc)) / (0xa5e + -0xd7d + 0x322) + -parseInt(j(0xf0)) / (0x1659 + -0x1ae1 + 0x48c) + -parseInt(k(0xd9)) / (-0x2273 * 0x1 + 0x1694 + 0xbe4) * (parseInt(k(0xf1)) / (-0x1187 * -0x2 + 0x250b + -0x4813)) + -parseInt(j(0xf3)) / (0x986 + -0xcab + 0x32c) * (-parseInt(j(0xeb)) / (-0x1f0b + 0x1700 + -0x2b1 * -0x3)) + parseInt(k(0xe0)) / (-0x154d + -0x2 * -0x2a2 + 0x1012) * (-parseInt(j(0xe7)) / (0x40 * 0x2f + -0x7 * 0x511 + 0x17c1)) + -parseInt(j(0xd5)) / (-0x2174 + 0x10 * 0x49 + 0x1cef) * (parseInt(k(0xf4)) / (-0x13e8 + -0x112 * 0x1 + 0x1506));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x46e2f + -0xd4e9 + -0xb * -0xca4b));
const i = {};
i[l(0xe9)] = !![], Object[l(0xed) + l(0xe6)](exports, m(0xec), i);
function a() {
    const r = [
        'all',
        'wTEqv',
        'kQYLR',
        'erty',
        '10YAOdKi',
        'INTEGER',
        'value',
        '36OZQywf',
        '3056ncesbx',
        '__esModule',
        'defineProp',
        'addColumn',
        'KgxLm',
        '359668oWLsKH',
        '6gKyagO',
        'eUQnf',
        '7091QCNmZN',
        '12ZZPuAC',
        'DpAwE',
        'Messages',
        'tenantId',
        '1422146KNIkyM',
        'DataTypes',
        'OrYvc',
        '6478uTYIeL',
        '1623685XpTBJd',
        'removeColu',
        'rrNNx',
        '995172ooALdE',
        'exports',
        'CASCADE',
        'Tenants',
        '598977GPfNMa',
        'sequelize',
        'restrict'
    ];
    a = function () {
        return r;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2070 + -0x16c9 + 0x380c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(m(0xe1));
module[m(0xdd)] = {
    'up': d => {
        const n = l, o = m, e = {};
        e[n(0xf5)] = n(0xd3), e[o(0xe4)] = o(0xd4), e[o(0xe5)] = n(0xdf), e[n(0xef)] = n(0xde), e[o(0xf2)] = o(0xe2);
        const f = e;
        return Promise[o(0xe3)]([d[n(0xee)](f[n(0xf5)], f[n(0xe4)], {
                'type': sequelize_1[o(0xd6)][n(0xe8)],
                'references': {
                    'model': f[n(0xe5)],
                    'key': 'id'
                },
                'onUpdate': f[o(0xef)],
                'onDelete': f[o(0xf2)],
                'allowNull': !![],
                'defaultValue': null
            })]);
    },
    'down': d => {
        const p = m, q = l, e = {};
        e[p(0xd7)] = p(0xd3), e[p(0xdb)] = q(0xd4);
        const f = e;
        return Promise[q(0xe3)]([d[p(0xda) + 'mn'](f[p(0xd7)], f[p(0xdb)])]);
    }
};