'use strict';
const l = b, m = b;
(function (d, e) {
    const j = b, k = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(j(0xf1)) / (0x880 + -0x1 * 0x2665 + -0x59 * -0x56) * (-parseInt(j(0xf0)) / (-0x254c + -0x6 * -0x462 + 0x2 * 0x581)) + parseInt(k(0xd4)) / (-0x3 * -0x401 + 0x8cb * -0x3 + 0xe61) + parseInt(k(0xf5)) / (0x9ee * -0x1 + 0x2357 + -0x1965) + -parseInt(k(0xed)) / (0x22ce + 0x1 * 0x1d72 + -0x403b) * (-parseInt(j(0xda)) / (0x1 * 0x347 + 0x80d + -0xb4e)) + parseInt(k(0xe2)) / (-0x74c + 0x20cc + -0x1979) + parseInt(j(0xe4)) / (0x1ef0 + 0x1838 + -0x310 * 0x12) + -parseInt(j(0xef)) / (-0x1 * -0x102f + -0x8 * -0x306 + -0x2856);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x792da + 0x1 * 0xb0d2b + 0x3c186));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1405 + 0x7a * -0x11 + 0xe78 * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const c = {};
c[l(0xeb)] = !![], Object[m(0xde) + l(0xd9)](exports, m(0xee), c);
function a() {
    const r = [
        '14773878RpneRc',
        '2iklwAo',
        '625443NyleTQ',
        'VsTns',
        'dSIZk',
        'Tickets',
        '3081860PjHixD',
        'removeColu',
        'EUhYT',
        'DataTypes',
        '984711HRSjvR',
        'exports',
        'AsrUI',
        'Queues',
        'sequelize',
        'erty',
        '6RXHFaB',
        'TKfyD',
        'PaKQL',
        'defaultVal',
        'defineProp',
        'addColumn',
        'queue',
        'queueId',
        '5658646wlAPHL',
        'uvaho',
        '470112SAAime',
        'ytEFe',
        'CASCADE',
        'type',
        'IjwVz',
        'allowNull',
        'INTEGER',
        'value',
        'restrict',
        '3876060QxAcRQ',
        '__esModule'
    ];
    a = function () {
        return r;
    };
    return a();
}
const sequelize_1 = require(m(0xd8));
module[m(0xd5)] = {
    'up': async e => {
        const n = l, o = l, f = {};
        f[n(0xe5)] = n(0xf4), f[o(0xd2)] = n(0xe0), f[o(0xd6)] = o(0xe1), f[n(0xdc)] = n(0xd7), f[o(0xe3)] = n(0xe6), f[o(0xf3)] = n(0xec);
        const g = f;
        await e[o(0xd1) + 'mn'](g[o(0xe5)], g[n(0xd2)]), await e[o(0xdf)](g[o(0xe5)], g[n(0xd6)], {
            'type': sequelize_1[o(0xd3)][o(0xea)],
            'references': {
                'model': g[o(0xdc)],
                'key': 'id'
            },
            'onUpdate': g[n(0xe3)],
            'onDelete': g[o(0xf3)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': async f => {
        const p = l, q = m, g = {};
        g[p(0xe8)] = q(0xf4), g[p(0xdb)] = p(0xe1), g[p(0xf2)] = p(0xe0);
        const h = g;
        await f[q(0xd1) + 'mn'](h[p(0xe8)], h[p(0xdb)]);
        const i = {};
        i[p(0xe7)] = sequelize_1[p(0xd3)][p(0xea)], i[p(0xdd) + 'ue'] = null, i[p(0xe9)] = !![], await f[p(0xdf)](h[q(0xe8)], h[p(0xf2)], i);
    }
};