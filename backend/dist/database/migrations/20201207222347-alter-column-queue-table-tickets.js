'use strict';
const l = b, m = b;
(function (d, e) {
    const j = b, k = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(j(0xbd)) / (-0x1c * 0x88 + 0x140c + -0x52b) * (-parseInt(j(0xb2)) / (0x12c1 * -0x1 + -0x160 + 0x1423)) + -parseInt(k(0xa8)) / (0x9f1 + -0x80c + 0x2 * -0xf1) * (parseInt(k(0xbb)) / (-0x2 * -0xacf + -0xbf * -0x15 + -0x2545)) + -parseInt(k(0xac)) / (0x2ae * -0x1 + -0xb * -0x37c + -0x23a1 * 0x1) * (parseInt(j(0xae)) / (-0x1f36 * -0x1 + -0x96b + -0x1 * 0x15c5)) + -parseInt(j(0x9e)) / (0x1 * 0x1c19 + -0x207f + 0x1 * 0x46d) * (-parseInt(k(0xaf)) / (0xfa * -0xf + 0x21a5 + -0x12f7)) + -parseInt(k(0xa2)) / (0x52f * 0x2 + -0x1168 + 0x713) + -parseInt(j(0xba)) / (0x59e + 0x130 * 0x1 + -0x6c4) + parseInt(j(0x9a)) / (0xf7 * 0x11 + -0x129d + 0x241);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0x23c6e + -0xc1c2b + -0x149827 * -0x1));
function a() {
    const r = [
        'INTEGER',
        'queue',
        'erty',
        '8750080uMBKUD',
        '8pdyiPx',
        'sequelize',
        '52613EfCNMm',
        '37666981jUtpyz',
        'Queues',
        'oiypT',
        'Tickets',
        '938fBqqQE',
        'defineProp',
        'restrict',
        'exports',
        '796500CANFqP',
        'xXhFO',
        'CASCADE',
        'addColumn',
        'removeColu',
        'DataTypes',
        '2033319NwfIDn',
        'iYkSZ',
        'VZLmV',
        'allowNull',
        '10mmuxGY',
        'type',
        '3278094EzKNku',
        '38056PregnK',
        'pMoYa',
        'uXemG',
        '2ypWOsf',
        'cHSFM',
        'defaultVal',
        'value',
        '__esModule'
    ];
    a = function () {
        return r;
    };
    return a();
}
const c = {};
c[l(0xb5)] = !![], Object[l(0x9f) + l(0xb9)](exports, m(0xb6), c);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x75f * 0x2 + 0x1ed * 0x12 + -0x30ce);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(l(0xbc));
module[l(0xa1)] = {
    'up': async e => {
        const n = m, o = l, f = {};
        f[n(0xaa)] = n(0x9d), f[n(0xb3)] = o(0xb8), f[n(0xb0)] = o(0x9b), f[n(0x9c)] = n(0xa4), f[o(0xa3)] = n(0xa0);
        const g = f;
        await e[n(0xa6) + 'mn'](g[n(0xaa)], g[n(0xb3)]), await e[o(0xa5)](g[o(0xaa)], g[o(0xb3)], {
            'type': sequelize_1[n(0xa7)][o(0xb7)],
            'references': {
                'model': g[n(0xb0)],
                'key': 'id'
            },
            'onUpdate': g[o(0x9c)],
            'onDelete': g[n(0xa3)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': async f => {
        const p = l, q = l, g = {};
        g[p(0xa9)] = q(0x9d), g[p(0xb1)] = p(0xb8);
        const h = g;
        await f[p(0xa6) + 'mn'](h[p(0xa9)], h[p(0xb1)]);
        const i = {};
        i[q(0xad)] = sequelize_1[q(0xa7)][q(0xb7)], i[q(0xb4) + 'ue'] = null, i[q(0xab)] = !![], await f[q(0xa5)](h[p(0xa9)], h[q(0xb1)], i);
    }
};