'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x71)) / (0x3 * -0x2cc + -0x11 * -0xb + 0xda * 0x9) + parseInt(i(0x7d)) / (-0x192 * 0x14 + -0x33 * -0x57 + -0x203 * -0x7) * (parseInt(i(0x75)) / (0x1d3 * 0xd + -0x15ba * -0x1 + -0x2d6e)) + parseInt(j(0x7c)) / (0x186 * -0x6 + -0x70 * -0xa + -0x99 * -0x8) + -parseInt(i(0x76)) / (0xe9 * 0x18 + 0x3 * -0x371 + -0xb80 * 0x1) * (-parseInt(j(0x89)) / (-0x27 * 0x83 + -0x6cd * 0x1 + 0x1ac8)) + -parseInt(j(0x6d)) / (0x1b64 + -0xc6b + -0xef2) * (parseInt(i(0x82)) / (0x117a + 0x1649 + -0x27bb)) + parseInt(i(0x83)) / (0x1 * 0x2558 + 0xb82 + 0x1 * -0x30d1) * (-parseInt(j(0x7a)) / (-0xdb9 + 0x6c + 0xd57)) + parseInt(j(0x77)) / (0x5 * -0x10f + 0xc42 + -0x6ec) * (parseInt(i(0x81)) / (0x1c19 * 0x1 + 0x129e + 0x1 * -0x2eab));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1fc3b + 0x1187f2 * -0x1 + 0x1d8486));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1dcb * 0x1 + -0x5ff * 0x5 + 0x99);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const q = [
        'tVZzR',
        '73443mGyvlT',
        'LDEaT',
        'exports',
        '__esModule',
        '117PdzXlG',
        '415MMsZrA',
        '37433MmACmE',
        'defineProp',
        'INTEGER',
        '28690cenuPi',
        'vcardConta',
        '95872AIwwSe',
        '13318inTxqS',
        'RLeCJ',
        'CASCADE',
        'ctId',
        '6372miaYHC',
        '13896jXjmcd',
        '2250cPPKjm',
        'Messages',
        'YrkTt',
        'Contacts',
        'value',
        'removeColu',
        '3258xSDxvf',
        'DataTypes',
        'sequelize',
        'brbut',
        'xYrRR',
        '2779mCiUnQ',
        'erty',
        'addColumn'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0x87)] = !![], Object[l(0x78) + k(0x6e)](exports, l(0x74), g);
const sequelize_1 = require(k(0x6a));
module[k(0x73)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x70)] = m(0x84), e[n(0x6c)] = n(0x7b) + m(0x80), e[n(0x7e)] = n(0x86), e[m(0x72)] = n(0x7f);
        const f = e;
        return d[m(0x6f)](f[m(0x70)], f[m(0x6c)], {
            'type': sequelize_1[n(0x69)][m(0x79)],
            'references': {
                'model': f[m(0x7e)],
                'key': 'id'
            },
            'onUpdate': f[m(0x72)],
            'onDelete': f[m(0x72)]
        });
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0x85)] = p(0x84), e[o(0x6b)] = o(0x7b) + p(0x80);
        const f = e;
        return d[p(0x88) + 'mn'](f[o(0x85)], f[p(0x6b)]);
    }
};