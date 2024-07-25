'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x1063 + 0xd41 + 0x45a * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const l = b, m = b;
(function (d, e) {
    const j = b, k = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(j(0x140)) / (0x113b + 0x5 * 0x6a1 + -0x325f) * (-parseInt(j(0x157)) / (0x1 * -0x16a2 + -0x859 * -0x1 + 0xe4b)) + -parseInt(j(0x154)) / (0x739 + 0x10 * 0xd3 + 0x1 * -0x1466) + -parseInt(j(0x158)) / (0x1768 + -0x9a6 + -0xdbe) + -parseInt(k(0x13d)) / (-0x21d9 * -0x1 + -0x25a4 + 0x3d0) + parseInt(j(0x15c)) / (0x2327 * 0x1 + -0x72d + -0x1bf4) * (parseInt(j(0x15a)) / (0xca4 * 0x2 + -0x548 * -0x2 + -0x23d1)) + parseInt(j(0x149)) / (0xa51 + -0x1 * -0x18f9 + 0x1 * -0x2342) + parseInt(j(0x159)) / (0x3c9 + 0x119 + 0x11 * -0x49) * (parseInt(k(0x14d)) / (-0x3e9 * 0x7 + 0x256b + 0x15 * -0x7a));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0xb521f + -0x21bf * 0x35 + -0xbafc * -0x28));
function a() {
    const r = [
        '9xXDQFu',
        '7bBRdZA',
        'ZwqID',
        '2831406kKpyyc',
        'Queues',
        'queue',
        'restrict',
        'type',
        'CASCADE',
        'wsMMO',
        '6371610TPFMbm',
        'DataTypes',
        'removeColu',
        '23qjklTO',
        'INTEGER',
        'value',
        'sequelize',
        'FagPg',
        'exports',
        'yFqcT',
        'defaultVal',
        'sWnnm',
        '3972616WcwspP',
        'KuTaZ',
        'defineProp',
        'erty',
        '28510490ivkjoR',
        'kAtTe',
        'bVAnI',
        'Tickets',
        'queueId',
        'allowNull',
        'ueLdB',
        '774537njsLgs',
        '__esModule',
        'addColumn',
        '74296HuXsdo',
        '2870752xKwvZm'
    ];
    a = function () {
        return r;
    };
    return a();
}
const c = {};
c[l(0x142)] = !![], Object[m(0x14b) + l(0x14c)](exports, l(0x155), c);
const sequelize_1 = require(l(0x143));
module[l(0x145)] = {
    'up': async e => {
        const n = l, o = l, f = {};
        f[n(0x144)] = n(0x150), f[n(0x14e)] = n(0x138), f[o(0x146)] = n(0x151), f[n(0x14a)] = o(0x15d), f[n(0x14f)] = n(0x13b), f[o(0x153)] = n(0x139);
        const g = f;
        await e[n(0x13f) + 'mn'](g[n(0x144)], g[o(0x14e)]), await e[o(0x156)](g[n(0x144)], g[n(0x146)], {
            'type': sequelize_1[n(0x13e)][n(0x141)],
            'references': {
                'model': g[o(0x14a)],
                'key': 'id'
            },
            'onUpdate': g[n(0x14f)],
            'onDelete': g[o(0x153)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': async f => {
        const p = m, q = m, g = {};
        g[p(0x15b)] = q(0x150), g[p(0x148)] = q(0x151), g[p(0x13c)] = p(0x138);
        const h = g;
        await f[q(0x13f) + 'mn'](h[p(0x15b)], h[p(0x148)]);
        const i = {};
        i[q(0x13a)] = sequelize_1[p(0x13e)][q(0x141)], i[p(0x147) + 'ue'] = null, i[q(0x152)] = !![], await f[q(0x156)](h[p(0x15b)], h[p(0x13c)], i);
    }
};