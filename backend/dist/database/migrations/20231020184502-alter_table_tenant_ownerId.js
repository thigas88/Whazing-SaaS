'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x1c2)) / (0x8d5 + 0x2539 + 0x2e0d * -0x1) + -parseInt(m(0x1cc)) / (-0x1 * 0x20fc + -0x1080 + 0x317e) + parseInt(m(0x1ba)) / (-0x383 + 0x1bc * -0x5 + 0xc32) + -parseInt(m(0x1b4)) / (-0x4 * -0x5ab + 0x1 * 0xe95 + -0x253d) * (-parseInt(m(0x1ac)) / (-0x614 * -0x1 + 0x36a * 0x1 + 0x1e5 * -0x5)) + parseInt(m(0x1c7)) / (0xc31 + 0x3b * -0x8d + 0x1454) + -parseInt(l(0x1bd)) / (0x2bd * 0x7 + 0x815 * 0x3 + 0x2b63 * -0x1) * (parseInt(m(0x1ca)) / (0x80c + -0x41c * 0x1 + -0x3e8)) + parseInt(l(0x1c3)) / (-0x6 * -0x138 + -0x1428 + -0x9d * -0x15) * (-parseInt(l(0x1ad)) / (-0x1c24 + -0x17b9 + 0x135 * 0x2b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x10d50 + -0x77be * -0xd + -0xb * -0x2026));
const k = {};
k[n(0x1b6)] = !![], Object[o(0x1c6) + n(0x1ae)](exports, n(0x1be), k);
const sequelize_1 = require(o(0x1c4));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x154a + -0x2132 + -0x2b7 * -0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const t = [
        '2456250uvGRlY',
        'CASCADE',
        'Tenants_ow',
        '403949XCavzy',
        '__esModule',
        'DataTypes',
        'INTEGER',
        'ownerId',
        '595188SNLVHK',
        '6092856qWWJRT',
        'sequelize',
        'Tenants',
        'defineProp',
        '2376576pAWgWh',
        'sVrWM',
        'exports',
        '24IQmGFz',
        'removeCons',
        '1292690yxPsQF',
        'BICdU',
        '20cjzOZT',
        '10WIESur',
        'erty',
        'piuji',
        'RyOih',
        'OOjcA',
        'JwBvA',
        'nerId_fkey',
        '106504MuhNjV',
        'all',
        'value',
        'traint',
        'kknqL',
        'changeColu'
    ];
    a = function () {
        return t;
    };
    return a();
}
module[n(0x1c9)] = {
    'up': d => {
        const p = n, q = n, e = {};
        e[p(0x1af)] = q(0x1c5), e[p(0x1b8)] = q(0x1bc) + q(0x1b3), e[q(0x1b0)] = p(0x1c1), e[q(0x1c8)] = p(0x1bb);
        const f = e;
        return Promise[q(0x1b5)]([
            d[q(0x1cb) + q(0x1b7)](f[p(0x1af)], f[q(0x1b8)]),
            d[q(0x1b9) + 'mn'](f[p(0x1af)], f[p(0x1b0)], {
                'type': sequelize_1[q(0x1bf)][p(0x1c0)],
                'references': {
                    'model': f[p(0x1af)],
                    'key': 'id'
                },
                'onUpdate': f[q(0x1c8)],
                'onDelete': f[q(0x1c8)],
                'allowNull': !![]
            })
        ]);
    },
    'down': d => {
        const r = o, s = n, e = {};
        e[r(0x1ab)] = s(0x1c5), e[s(0x1b1)] = s(0x1c1), e[r(0x1b2)] = r(0x1bb);
        const f = e;
        return Promise[r(0x1b5)]([d[r(0x1b9) + 'mn'](f[s(0x1ab)], f[r(0x1b1)], {
                'type': sequelize_1[s(0x1bf)][s(0x1c0)],
                'references': {
                    'model': f[r(0x1ab)],
                    'key': 'id'
                },
                'onUpdate': f[s(0x1b2)],
                'onDelete': f[s(0x1b2)],
                'allowNull': !![]
            })]);
    }
};