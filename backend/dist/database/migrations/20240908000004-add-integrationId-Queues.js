'use strict';
function a() {
    const t = [
        '3279810nVVjeX',
        'PEYim',
        '2208332Netsde',
        '1995660cbkQzh',
        '__esModule',
        'addColumn',
        'Rvlhn',
        '442672XWQcbI',
        'nId',
        'SET\x20NULL',
        '929299vhDRdB',
        'IknEs',
        'iQfEJ',
        'erty',
        '438333zaDCcW',
        'miUYT',
        'CASCADE',
        '5TwSKJj',
        'rations',
        'value',
        'INTEGER',
        'FfILB',
        'exports',
        'QueueInteg',
        'Queues',
        '896415cKnkwr',
        '2OQkKdq',
        'sequelize',
        'DataTypes',
        'CMHmZ',
        'Whatsapps',
        'filOl',
        'defineProp',
        'removeColu',
        'TdQgi',
        'integratio'
    ];
    a = function () {
        return t;
    };
    return a();
}
const n = b, o = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x203c + -0x2466 + 0x547);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x135)) / (-0x3cf + 0x1aa2 + -0x16d2) + parseInt(m(0x11d)) / (-0x4c1 + -0x34e + 0x811) * (-parseInt(m(0x140)) / (-0x7e3 + -0x1905 + -0x35 * -0x9f)) + parseInt(l(0x129)) / (-0x1 * 0x1f7b + -0x19d8 + 0x3957) + -parseInt(l(0x138)) / (-0x94f + 0x1fba + -0x1666) * (parseInt(l(0x127)) / (0xd6 * 0x13 + -0x2b1 + -0xd2b)) + -parseInt(l(0x131)) / (-0x1da4 + -0x1 * 0x5ce + -0x3 * -0xbd3) + parseInt(m(0x12e)) / (0x35f * 0x5 + 0x2 * -0xaef + 0x50b * 0x1) + parseInt(l(0x12a)) / (0x98 * -0x23 + -0x521 * 0x1 + -0x2e2 * -0x9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7dd76 + 0x40952 + 0x2db * 0x2e3));
const k = {};
k[n(0x13a)] = !![], Object[o(0x123) + n(0x134)](exports, n(0x12b), k);
const sequelize_1 = require(o(0x11e));
module[n(0x13d)] = {
    'up': d => {
        const p = n, q = o, e = {};
        e[p(0x120)] = q(0x13f), e[q(0x128)] = p(0x126) + p(0x12f), e[p(0x133)] = q(0x13e) + q(0x139), e[q(0x132)] = p(0x137), e[p(0x13c)] = q(0x130), e[p(0x136)] = q(0x121);
        const f = e;
        return d[p(0x12c)](f[q(0x120)], f[p(0x128)], {
            'type': sequelize_1[q(0x11f)][q(0x13b)],
            'references': {
                'model': f[q(0x133)],
                'key': 'id'
            },
            'onUpdate': f[p(0x132)],
            'onDelete': f[q(0x13c)]
        }), d[q(0x12c)](f[q(0x136)], f[p(0x128)], {
            'type': sequelize_1[p(0x11f)][q(0x13b)],
            'references': {
                'model': f[p(0x133)],
                'key': 'id'
            },
            'onUpdate': f[p(0x132)],
            'onDelete': f[p(0x13c)]
        });
    },
    'down': d => {
        const r = o, s = n, e = {};
        e[r(0x122)] = s(0x13f), e[s(0x12d)] = s(0x126) + r(0x12f), e[r(0x125)] = s(0x121);
        const f = e;
        return d[s(0x124) + 'mn'](f[r(0x122)], f[r(0x12d)]), d[r(0x124) + 'mn'](f[r(0x125)], f[r(0x12d)]);
    }
};