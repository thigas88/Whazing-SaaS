'use strict';
function a() {
    const r = [
        'CwhLO',
        '72202iUyvYl',
        'bjtTx',
        'UDxjN',
        'value',
        'zQDjF',
        'addColumn',
        '__esModule',
        'all',
        'dGwiB',
        'exports',
        'Tenants',
        '2508910qUObIm',
        '1984372IygFkE',
        '690GISqeJ',
        '23450HZNagl',
        'CASCADE',
        '57omqEUQ',
        'defineProp',
        'sequelize',
        '208750UeqbOL',
        'restrict',
        '18tAdknU',
        'erty',
        'removeColu',
        'DataTypes',
        'ovDEE',
        '2457462RhvfxS',
        '6551992waUaAT',
        'Messages',
        'tenantId',
        'TFtQi',
        'INTEGER'
    ];
    a = function () {
        return r;
    };
    return a();
}
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0x1cd)) / (0x4 * 0x2ef + 0x939 + -0x14f4) + -parseInt(k(0x1ba)) / (-0x2429 * 0x1 + -0x21 * 0x10b + 0x4696) * (-parseInt(j(0x1ca)) / (0x66b * 0x2 + 0xf * -0x9f + -0x1 * 0x382)) + parseInt(j(0x1c6)) / (0x2 * -0x26f + -0x1aab + -0x1f8d * -0x1) + parseInt(k(0x1c8)) / (-0x1d07 + -0x150c + 0x190c * 0x2) * (-parseInt(k(0x1c7)) / (-0x3 * 0x8b6 + -0x2261 + -0x3c89 * -0x1)) + -parseInt(j(0x1b3)) / (0x1272 + 0x201b + -0x3286) + parseInt(j(0x1b4)) / (0x2201 + -0x252 * -0x9 + -0x5d * 0x97) + parseInt(k(0x1cf)) / (0xd26 + -0x1678 + 0x95b * 0x1) * (-parseInt(j(0x1c5)) / (-0x12e4 + 0x1148 + 0x1a6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xe49a8 + 0x6e467 * 0x2 + -0x6163 * 0x29));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x223 + -0x26cc + 0x2aa0);
        let h = e[f];
        return h;
    }, b(c, d);
}
const i = {};
i[l(0x1bd)] = !![], Object[l(0x1cb) + m(0x1d0)](exports, l(0x1c0), i);
const sequelize_1 = require(l(0x1cc));
module[m(0x1c3)] = {
    'up': d => {
        const n = l, o = l, e = {};
        e[n(0x1b7)] = n(0x1b5), e[n(0x1bc)] = o(0x1b6), e[o(0x1c2)] = o(0x1c4), e[n(0x1b9)] = n(0x1c9), e[o(0x1be)] = o(0x1ce);
        const f = e;
        return Promise[n(0x1c1)]([d[o(0x1bf)](f[o(0x1b7)], f[o(0x1bc)], {
                'type': sequelize_1[o(0x1b1)][n(0x1b8)],
                'references': {
                    'model': f[n(0x1c2)],
                    'key': 'id'
                },
                'onUpdate': f[o(0x1b9)],
                'onDelete': f[n(0x1be)],
                'allowNull': !![],
                'defaultValue': null
            })]);
    },
    'down': d => {
        const p = m, q = l, e = {};
        e[p(0x1bb)] = q(0x1b5), e[q(0x1b2)] = p(0x1b6);
        const f = e;
        return Promise[p(0x1c1)]([d[p(0x1d1) + 'mn'](f[q(0x1bb)], f[q(0x1b2)])]);
    }
};