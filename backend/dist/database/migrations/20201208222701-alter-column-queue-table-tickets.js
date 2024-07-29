'use strict';
const l = b, m = b;
(function (d, e) {
    const j = b, k = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(j(0x1cc)) / (0xdef + -0x192a + 0x4 * 0x2cf) * (-parseInt(j(0x1e2)) / (-0x2543 + 0x319 * -0x6 + 0x37db)) + -parseInt(k(0x1df)) / (-0x1077 + 0x1eb * 0x9 + -0xc9) + parseInt(j(0x1dc)) / (0x1383 + -0x1 * 0xc4c + -0x733) + parseInt(j(0x1dd)) / (0x253f + -0x1517 * 0x1 + -0x1023) * (parseInt(j(0x1da)) / (0x26d7 + -0xd1e + 0x9 * -0x2db)) + parseInt(k(0x1ce)) / (0x2d4 * 0xd + -0x1256 * -0x1 + -0x3713 * 0x1) * (parseInt(j(0x1cf)) / (0x1 * 0x525 + -0x1985 + -0x8 * -0x28d)) + -parseInt(k(0x1e3)) / (-0x16 * -0x197 + -0x1 * -0x45c + -0x274d) * (parseInt(j(0x1e5)) / (-0xb5 + 0x1475 + -0x13b6)) + parseInt(k(0x1d5)) / (-0xa24 + -0x1734 + -0x7 * -0x4c5);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0xcf * -0x243 + -0x3154f + 0x1 * 0x4d585));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x23ad + 0x38 * 0x1c + -0x115 * 0x25);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const r = [
        'queueId',
        '253384fXWKtO',
        '278555NnGKNZ',
        'sequelize',
        '1282263hBFseG',
        'erty',
        'addColumn',
        '472KICpir',
        '3711933eCLZhJ',
        'value',
        '10Oruzlz',
        'defaultVal',
        'KezOT',
        'vigzZ',
        'exports',
        'rLDvb',
        'INTEGER',
        'LoFvH',
        'lBwBZ',
        'defineProp',
        'NoEFy',
        'allowNull',
        'DZxBG',
        'queue',
        '866qvWdqz',
        'Tickets',
        '7HIXBXn',
        '2876008dMAzav',
        'DataTypes',
        'LRZYq',
        'removeColu',
        'restrict',
        'type',
        '6964518IvpBjd',
        '__esModule',
        'Queues',
        'hVswx',
        'CASCADE',
        '24uDKZJR'
    ];
    a = function () {
        return r;
    };
    return a();
}
const c = {};
c[l(0x1e4)] = !![], Object[l(0x1c7) + l(0x1e0)](exports, l(0x1d6), c);
const sequelize_1 = require(m(0x1de));
module[l(0x1e9)] = {
    'up': async e => {
        const n = m, o = m, f = {};
        f[n(0x1ca)] = n(0x1cd), f[n(0x1c8)] = o(0x1cb), f[n(0x1e8)] = o(0x1db), f[n(0x1e7)] = o(0x1d7), f[n(0x1ea)] = n(0x1d9), f[o(0x1d8)] = o(0x1d3);
        const g = f;
        await e[n(0x1d2) + 'mn'](g[n(0x1ca)], g[o(0x1c8)]), await e[n(0x1e1)](g[o(0x1ca)], g[n(0x1e8)], {
            'type': sequelize_1[o(0x1d0)][n(0x1c4)],
            'references': {
                'model': g[n(0x1e7)],
                'key': 'id'
            },
            'onUpdate': g[n(0x1ea)],
            'onDelete': g[o(0x1d8)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': async f => {
        const p = l, q = l, g = {};
        g[p(0x1c6)] = q(0x1cd), g[p(0x1d1)] = p(0x1db), g[p(0x1c5)] = q(0x1cb);
        const h = g;
        await f[q(0x1d2) + 'mn'](h[p(0x1c6)], h[p(0x1d1)]);
        const i = {};
        i[p(0x1d4)] = sequelize_1[q(0x1d0)][p(0x1c4)], i[p(0x1e6) + 'ue'] = null, i[p(0x1c9)] = !![], await f[q(0x1e1)](h[p(0x1c6)], h[p(0x1c5)], i);
    }
};