'use strict';
const l = b, m = b;
(function (d, e) {
    const j = b, k = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(j(0xb1)) / (-0x98 * 0x22 + 0x1 * -0x16d + -0x1 * -0x159e) * (-parseInt(k(0xb4)) / (-0x6b1 * 0x1 + 0x1b83 + 0x30 * -0x6f)) + -parseInt(j(0xa4)) / (0x11cc + 0x1cba + 0xbd * -0x3f) * (-parseInt(k(0xb2)) / (0x13c + -0x621 + -0x3 * -0x1a3)) + -parseInt(k(0x96)) / (0x11aa + -0x10a7 + -0xfe) + -parseInt(j(0x95)) / (0x772 + 0x255 * -0x7 + 0x8e7) * (parseInt(j(0xad)) / (-0x189 * -0xf + -0x708 + -0xff8)) + parseInt(j(0xae)) / (0x22b9 + -0xe18 + 0x1499 * -0x1) + -parseInt(j(0xaf)) / (-0xc6b + 0x1e * -0xe5 + -0xd6 * -0x2f) + parseInt(j(0xa7)) / (-0x1 * 0x4d3 + 0x912 + -0x1 * 0x435) * (parseInt(j(0x9e)) / (0x25b0 + 0x1b85 + -0x412a));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x4 * 0x61b + 0x1e09b + 0xc7be));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x785 * 0x4 + -0xee1 + -0xe9f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const c = {};
c[l(0x9d)] = !![], Object[m(0xa3) + l(0x99)](exports, l(0xb0), c);
function a() {
    const r = [
        'OBwET',
        'WsPrB',
        '6lieoSA',
        '964555OeOhTk',
        'allowNull',
        'MXzsV',
        'erty',
        'Queues',
        'DataTypes',
        'removeColu',
        'value',
        '5390oxtQcl',
        'CASCADE',
        'sequelize',
        'WIipC',
        'restrict',
        'defineProp',
        '5652ZErwpN',
        'INTEGER',
        'addColumn',
        '9470eLLjJM',
        'Hxhxz',
        'type',
        'Tickets',
        'YHthL',
        'defaultVal',
        '2172121PBxldO',
        '1783904JhQimu',
        '1284012ubEEOk',
        '__esModule',
        '11183SLGaNn',
        '8hDCgwk',
        'queue',
        '22fasxFz',
        'wJozx',
        'exports'
    ];
    a = function () {
        return r;
    };
    return a();
}
const sequelize_1 = require(m(0xa0));
module[l(0xb6)] = {
    'up': async e => {
        const n = m, o = l, f = {};
        f[n(0xa1)] = o(0xaa), f[o(0x98)] = o(0xb3), f[o(0x94)] = o(0x9a), f[n(0xab)] = o(0x9f), f[n(0xb7)] = o(0xa2);
        const g = f;
        await e[o(0x9c) + 'mn'](g[o(0xa1)], g[n(0x98)]), await e[n(0xa6)](g[n(0xa1)], g[o(0x98)], {
            'type': sequelize_1[n(0x9b)][n(0xa5)],
            'references': {
                'model': g[n(0x94)],
                'key': 'id'
            },
            'onUpdate': g[n(0xab)],
            'onDelete': g[n(0xb7)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': async f => {
        const p = l, q = m, g = {};
        g[p(0xa8)] = p(0xaa), g[p(0xb5)] = p(0xb3);
        const h = g;
        await f[p(0x9c) + 'mn'](h[q(0xa8)], h[p(0xb5)]);
        const i = {};
        i[p(0xa9)] = sequelize_1[p(0x9b)][q(0xa5)], i[p(0xac) + 'ue'] = null, i[p(0x97)] = !![], await f[q(0xa6)](h[p(0xa8)], h[p(0xb5)], i);
    }
};