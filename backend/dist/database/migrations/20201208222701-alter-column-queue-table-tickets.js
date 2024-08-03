'use strict';
const l = b, m = b;
function a() {
    const r = [
        'type',
        '__esModule',
        'allowNull',
        'value',
        'defaultVal',
        '1629761OmahRs',
        'sequelize',
        'LXPgh',
        'mffIz',
        'sJIKn',
        'exports',
        'MPpju',
        'uzwVF',
        'removeColu',
        'queueId',
        'uXYZx',
        'INTEGER',
        '6447282UUGqBr',
        'CASCADE',
        'restrict',
        'addColumn',
        '3865630gAGuMa',
        'Tickets',
        '1536998orlpur',
        'zNifc',
        'erty',
        '161240irgpKE',
        '202857IoKvHN',
        'Amvpp',
        '786291HRiUVY',
        '639RdDOnq',
        'DataTypes',
        'WGIUe',
        '8gGqPJA',
        'Queues',
        'queue',
        'defineProp',
        '32OurEmD'
    ];
    a = function () {
        return r;
    };
    return a();
}
(function (d, e) {
    const j = b, k = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(j(0xe0)) / (0x2098 + 0x3 * 0x2cc + -0x28fb) + parseInt(k(0xda)) / (0xb * 0x2c5 + -0x168c + -0xe1 * 0x9) + parseInt(k(0xde)) / (0xaec + 0x1f97 * -0x1 + 0x14ae) * (-parseInt(j(0xe8)) / (-0xc43 + 0x234 + 0xa13)) + -parseInt(j(0xd8)) / (-0x9 * -0xa7 + 0xa57 + -0x5 * 0x33d) + -parseInt(j(0xd4)) / (-0x11b7 + 0x4d5 + -0x38 * -0x3b) + parseInt(j(0xc8)) / (0x2 * -0x776 + 0xf89 + -0x1e * 0x5) * (parseInt(j(0xe4)) / (0xaf0 + -0x135e + -0x6 * -0x169)) + -parseInt(k(0xe1)) / (-0x1 * 0x1d4c + -0x7f4 + 0x2549) * (-parseInt(j(0xdd)) / (0x347 * 0x1 + 0x26e * -0xf + -0x1 * -0x2135));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0xd657 * -0xf + 0x9dd8d + 0x94 * 0x1303));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1fb0 + 0xda6 + -0x2c93);
        let h = e[f];
        return h;
    }, b(c, d);
}
const c = {};
c[l(0xc6)] = !![], Object[m(0xe7) + m(0xdc)](exports, l(0xc4), c);
const sequelize_1 = require(m(0xc9));
module[m(0xcd)] = {
    'up': async e => {
        const n = l, o = l, f = {};
        f[n(0xcb)] = o(0xd9), f[n(0xca)] = n(0xe6), f[n(0xd2)] = n(0xd1), f[n(0xdb)] = o(0xe5), f[n(0xcc)] = n(0xd5), f[n(0xdf)] = n(0xd6);
        const g = f;
        await e[n(0xd0) + 'mn'](g[n(0xcb)], g[o(0xca)]), await e[o(0xd7)](g[n(0xcb)], g[n(0xd2)], {
            'type': sequelize_1[o(0xe2)][o(0xd3)],
            'references': {
                'model': g[o(0xdb)],
                'key': 'id'
            },
            'onUpdate': g[n(0xcc)],
            'onDelete': g[n(0xdf)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': async f => {
        const p = l, q = m, g = {};
        g[p(0xce)] = q(0xd9), g[q(0xcf)] = q(0xd1), g[q(0xe3)] = q(0xe6);
        const h = g;
        await f[q(0xd0) + 'mn'](h[q(0xce)], h[q(0xcf)]);
        const i = {};
        i[q(0xc3)] = sequelize_1[p(0xe2)][p(0xd3)], i[q(0xc7) + 'ue'] = null, i[q(0xc5)] = !![], await f[q(0xd7)](h[p(0xce)], h[q(0xe3)], i);
    }
};