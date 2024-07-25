'use strict';
function a() {
    const q = [
        '104FekDCn',
        'value',
        '5479677YBIlao',
        'GftfO',
        'mGsgN',
        'sequelize',
        'quotedMsgI',
        'Messages',
        'addColumn',
        'STRING',
        'CASCADE',
        'exports',
        '1387596XSmhRI',
        '1791715jLCuiz',
        '5380398VTXWUj',
        '22598744blsntX',
        '27448ueHyEz',
        'defineProp',
        'bxyjN',
        '4312035oLHqyj',
        '__esModule',
        'SET\x20NULL',
        'DataTypes',
        'SLAyp',
        'removeColu',
        'erty',
        'tRkds',
        'GXZsf'
    ];
    a = function () {
        return q;
    };
    return a();
}
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x1ee)) / (-0x224 + 0x1 * 0x1f3d + -0x1d18) * (parseInt(i(0x1fa)) / (-0x1a8 + -0xaa1 + 0x3 * 0x419)) + -parseInt(j(0x1fc)) / (-0xeba + -0x17a7 + 0xccc * 0x3) + -parseInt(i(0x1ea)) / (0x15cc + -0x5a * 0x3b + -0x10a) + parseInt(i(0x1eb)) / (-0x631 + -0x1 * -0x1873 + -0xa1 * 0x1d) + -parseInt(j(0x1ec)) / (0x1d6 + 0x2125 * 0x1 + -0x22f5) + -parseInt(i(0x1f1)) / (0x1 * 0xfbc + -0x19cb + 0xa16) + parseInt(i(0x1ed)) / (-0x45 * 0x63 + -0x1d0d + 0x37c4);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x199d25 + 0x15c60 + 0x1 * -0xcdf07));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1027 * 0x2 + 0x1d5f + -0x2 * -0x26b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
g[k(0x1fb)] = !![], Object[l(0x1ef) + k(0x1f7)](exports, k(0x1f2), g);
const sequelize_1 = require(l(0x1ff));
module[l(0x1e9)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x1f8)] = n(0x201), e[m(0x1f9)] = n(0x200) + 'd', e[n(0x1fd)] = m(0x1e8), e[m(0x1fe)] = n(0x1f3);
        const f = e;
        return d[n(0x202)](f[n(0x1f8)], f[m(0x1f9)], {
            'type': sequelize_1[m(0x1f4)][n(0x1e7)],
            'references': {
                'model': f[m(0x1f8)],
                'key': 'id'
            },
            'onUpdate': f[m(0x1fd)],
            'onDelete': f[m(0x1fe)]
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0x1f5)] = o(0x201), e[o(0x1f0)] = o(0x200) + 'd';
        const f = e;
        return d[p(0x1f6) + 'mn'](f[p(0x1f5)], f[o(0x1f0)]);
    }
};