'use strict';
const k = b, l = b;
function a() {
    const q = [
        'SET\x20NULL',
        'NcbJl',
        'CASCADE',
        'erty',
        '72PqwQqe',
        'Whatsapps',
        'userId',
        'Tbhjt',
        'value',
        'INTEGER',
        'lrgns',
        '849ubbQmv',
        '243729URDTOW',
        'removeColu',
        '753180AGugDI',
        '22620aveJVp',
        'DataTypes',
        '12MTKDXH',
        'ndvYX',
        '105fyFaUZ',
        'exports',
        '55HTXIQM',
        'Users',
        '495222osFGkz',
        '1402vXDgRo',
        '135imTIjy',
        '__esModule',
        '12532949qQoJjw',
        'nssLz',
        '23724TjJpoU',
        'defineProp',
        'addColumn',
        'Wregb',
        'WObJh',
        'sequelize'
    ];
    a = function () {
        return q;
    };
    return a();
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x1f0)) / (-0x372 + 0x69d + 0x9 * -0x5a) * (-parseInt(j(0x1da)) / (0x402 + 0xcb0 + -0x4 * 0x42c)) + parseInt(i(0x1db)) / (-0x2359 * 0x1 + 0xa3c + 0x86 * 0x30) * (parseInt(i(0x1f4)) / (0x1982 * 0x1 + 0xaae * 0x2 + -0x3 * 0xf9e)) + parseInt(j(0x1d5)) / (-0x1d9d + 0x8ca + 0x14d8) * (-parseInt(i(0x1df)) / (-0x7d * -0x19 + 0x1da5 * 0x1 + -0x1 * 0x29d4)) + parseInt(i(0x1d9)) / (-0x1e66 + 0x1 * 0x107 + 0x1d66) + -parseInt(i(0x1e9)) / (0x2513 + -0xa24 + -0x47 * 0x61) * (-parseInt(i(0x1f1)) / (-0x1 * -0x1788 + 0x849 + -0x1fc8)) + parseInt(i(0x1f3)) / (0x1e7b + -0x1f91 + -0x12 * -0x10) * (-parseInt(j(0x1d7)) / (0x7af + 0x162f + -0x1dd3)) + parseInt(i(0x1d3)) / (0x1da7 * -0x1 + -0x2 * -0xcf4 + 0x3cb) * (parseInt(j(0x1dd)) / (-0xc78 + 0x1e91 + 0xa5 * -0x1c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0xcdd42 * 0x1 + -0x585d4 * -0x1 + -0x2 * -0x751cc));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb5 * 0x35 + 0x10 * 0x52 + 0x222c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
g[k(0x1ed)] = !![], Object[k(0x1e0) + l(0x1e8)](exports, k(0x1dc), g);
const sequelize_1 = require(k(0x1e4));
module[k(0x1d6)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x1e3)] = n(0x1ea), e[n(0x1ec)] = m(0x1eb), e[m(0x1de)] = n(0x1d8), e[n(0x1ef)] = n(0x1e7), e[m(0x1d4)] = m(0x1e5);
        const f = e;
        return d[n(0x1e1)](f[n(0x1e3)], f[n(0x1ec)], {
            'type': sequelize_1[m(0x1f5)][n(0x1ee)],
            'references': {
                'model': f[n(0x1de)],
                'key': 'id'
            },
            'onUpdate': f[n(0x1ef)],
            'onDelete': f[m(0x1d4)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0x1e2)] = p(0x1ea), e[o(0x1e6)] = o(0x1eb);
        const f = e;
        return d[o(0x1f2) + 'mn'](f[p(0x1e2)], f[p(0x1e6)]);
    }
};