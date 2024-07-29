'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0xee)) / (0x1828 + -0x4d6 + -0x1351) * (-parseInt(j(0xd5)) / (-0x22 * -0x53 + -0x3 * 0x4f5 + 0x3db)) + parseInt(j(0xe8)) / (-0x193 + 0x1e40 + -0x1caa) * (-parseInt(j(0xdb)) / (-0xae * -0xf + 0x11c6 + -0x1bf4)) + parseInt(i(0xe9)) / (-0x1eeb + -0x1450 + 0xa0 * 0x52) + parseInt(i(0xef)) / (0xf0c + -0x120d * 0x1 + 0x307) + -parseInt(i(0xdf)) / (-0x12e * -0x2 + -0x438 + 0x1e3) + parseInt(i(0xd7)) / (0x1d34 + -0x1eb * 0x7 + -0x1 * 0xfbf) + -parseInt(i(0xe3)) / (-0x207c + 0x5f + -0x66e * -0x5) * (parseInt(j(0xe0)) / (-0x8 * 0x144 + -0x8b * 0x1 + -0x1 * -0xab5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x61ad8 + -0x70eb2 + -0x3c26 * -0x32));
const g = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x190f + 0xf33 + 0xaad);
        let h = e[f];
        return h;
    }, b(c, d);
}
g[k(0xe2)] = !![], Object[k(0xec) + k(0xda)](exports, l(0xea), g);
function a() {
    const q = [
        '88lLJZzW',
        'INTEGER',
        'Plans',
        'ktvBU',
        '553875ADjYLE',
        '10wWgdCk',
        'Tenants',
        'value',
        '12391713VZoDTX',
        'vPAfa',
        'JhOBW',
        'SOcIj',
        'planId',
        '15879SimMzz',
        '446010pUtiqT',
        '__esModule',
        'SET\x20NULL',
        'defineProp',
        'addColumn',
        '11OtSAun',
        '6753072coVRcm',
        'removeColu',
        'HCKKe',
        'exports',
        'HolHk',
        'CASCADE',
        '151892bRguLM',
        'sequelize',
        '1838256lVtVlG',
        'KSPAu',
        'DataTypes',
        'erty'
    ];
    a = function () {
        return q;
    };
    return a();
}
const sequelize_1 = require(l(0xd6));
module[k(0xd2)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0xde)] = n(0xe1), e[m(0xd8)] = n(0xe7), e[n(0xe5)] = n(0xdd), e[n(0xd1)] = n(0xd4), e[m(0xd3)] = n(0xeb);
        const f = e;
        return d[m(0xed)](f[n(0xde)], f[n(0xd8)], {
            'type': sequelize_1[n(0xd9)][n(0xdc)],
            'references': {
                'model': f[m(0xe5)],
                'key': 'id'
            },
            'onUpdate': f[n(0xd1)],
            'onDelete': f[n(0xd3)]
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0xe4)] = p(0xe1), e[p(0xe6)] = o(0xe7);
        const f = e;
        return d[o(0xf0) + 'mn'](f[p(0xe4)], f[o(0xe6)]);
    }
};