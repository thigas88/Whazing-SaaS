'use strict';
const l = b, m = b;
function a() {
    const r = [
        'value',
        '2698495csDsUK',
        'defineProp',
        'FpiwA',
        '11137VAyckQ',
        'WbkQj',
        '4571118EJwpgn',
        'aQUYD',
        'erty',
        'Queues',
        'sequelize',
        '8edIlZE',
        '1314954sqpWoT',
        '40FeEgBr',
        'SLvfK',
        'exports',
        'removeColu',
        'queue',
        '86979SqGEcH',
        'defaultVal',
        '3105606pAsHoR',
        'MxKju',
        'rjaUq',
        'Tickets',
        'type',
        'allowNull',
        '2176352dUWSOI',
        'restrict',
        'INTEGER',
        '__esModule',
        'CASCADE',
        'EWGXf',
        'addColumn',
        'DataTypes'
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
            const g = parseInt(j(0x12e)) / (-0x103 * -0x21 + 0x9d1 + -0x2b33) * (parseInt(k(0x137)) / (-0xe7e + 0x1e90 * -0x1 + -0x70 * -0x67)) + -parseInt(j(0x11a)) / (-0x296 * -0x1 + -0xf5e + 0x5 * 0x28f) * (parseInt(j(0x135)) / (-0xefa + 0x5b * 0x23 + -0x1 * -0x28d)) + parseInt(j(0x12b)) / (0x1774 + -0x3e * -0x77 + -0xd * 0x405) + -parseInt(j(0x136)) / (0xcff + -0x29 * -0x79 + -0x205a) + -parseInt(j(0x11c)) / (-0x1e * -0x50 + 0x1d * -0x13c + 0x1a73) + -parseInt(k(0x122)) / (-0x2221 + 0x36b + 0x1ebe) + parseInt(j(0x130)) / (0x263a + -0x16 * -0x12a + -0x3fcd);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0xa9a4 + 0x13 * 0x2386 + 0xef60));
const c = {};
c[l(0x12a)] = !![], Object[l(0x12c) + m(0x132)](exports, l(0x125), c);
const sequelize_1 = require(l(0x134));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x26a5 + -0xe5 * -0x1d + -0x3f7c);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[l(0x139)] = {
    'up': async e => {
        const n = m, o = m, f = {};
        f[n(0x12f)] = n(0x11f), f[n(0x131)] = n(0x13b), f[o(0x12d)] = n(0x133), f[o(0x11e)] = n(0x126), f[o(0x11d)] = o(0x123);
        const g = f;
        await e[o(0x13a) + 'mn'](g[o(0x12f)], g[o(0x131)]), await e[n(0x128)](g[o(0x12f)], g[o(0x131)], {
            'type': sequelize_1[n(0x129)][o(0x124)],
            'references': {
                'model': g[o(0x12d)],
                'key': 'id'
            },
            'onUpdate': g[n(0x11e)],
            'onDelete': g[n(0x11d)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': async f => {
        const p = m, q = m, g = {};
        g[p(0x127)] = q(0x11f), g[p(0x138)] = q(0x13b);
        const h = g;
        await f[p(0x13a) + 'mn'](h[q(0x127)], h[q(0x138)]);
        const i = {};
        i[p(0x120)] = sequelize_1[q(0x129)][q(0x124)], i[p(0x11b) + 'ue'] = null, i[p(0x121)] = !![], await f[q(0x128)](h[p(0x127)], h[q(0x138)], i);
    }
};