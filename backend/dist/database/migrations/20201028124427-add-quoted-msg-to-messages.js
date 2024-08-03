'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x315 * -0x3 + 0x1 * -0x211c + 0xc47 * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0xb1)) / (0x2fe + 0x1 * 0x1882 + -0x1b7f) * (parseInt(j(0xbf)) / (0x444 + -0x166d + -0x1 * -0x122b)) + parseInt(j(0xcb)) / (0xf1 * 0x5 + 0x1b7f * -0x1 + 0x16cd) * (parseInt(i(0xd1)) / (-0x1 * -0xa62 + 0x185f * -0x1 + -0x4ab * -0x3)) + -parseInt(j(0xb4)) / (0x6 * -0x168 + -0x16f4 + 0x1 * 0x1f69) + -parseInt(i(0xbb)) / (0x39b + 0x1 * -0xd54 + 0x5 * 0x1f3) * (parseInt(j(0xca)) / (0x52 * 0x1 + 0x1 * 0x1cf0 + -0x1d3b)) + parseInt(j(0xc0)) / (0x74 * -0x30 + 0x1252 + -0x1bb * -0x2) * (parseInt(j(0xba)) / (-0x194 * 0x16 + -0x2 * -0x40f + -0x1aa3 * -0x1)) + parseInt(j(0xc4)) / (-0x42c + 0x821 + -0x3eb) * (parseInt(j(0xbd)) / (-0x125 * 0x1 + -0x2239 + 0x2369)) + -parseInt(j(0xb5)) / (0x1ae + 0x593 * 0x4 + -0x17ee) * (parseInt(i(0xb3)) / (0x670 * -0x4 + -0x1 * 0x1241 + 0x1 * 0x2c0e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1772e5 * -0x1 + -0x1 * -0x5f48 + 0x244e37));
function a() {
    const q = [
        'STRING',
        '__esModule',
        'addColumn',
        '225spEuFO',
        '6SiZutK',
        'sequelize',
        '11LFrtDK',
        'KZQDr',
        '16LpRLVM',
        '485864yYpKCL',
        'IPgpJ',
        'exports',
        'PdUhk',
        '5009460oCTlLR',
        'value',
        'erty',
        'defineProp',
        'removeColu',
        'yyrwe',
        '9088541wDmRXs',
        '150YgvVuu',
        'CASCADE',
        'dXnzU',
        'sTOkT',
        'Messages',
        'SET\x20NULL',
        '130912aqmNsQ',
        '102547RdXWHB',
        'DataTypes',
        '11076anPyTl',
        '6087990QjmtNp',
        '15396wYJXip',
        'quotedMsgI'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0xc5)] = !![], Object[l(0xc7) + k(0xc6)](exports, l(0xb8), g);
const sequelize_1 = require(k(0xbc));
module[l(0xc2)] = {
    'up': d => {
        const m = l, n = k, e = {};
        e[m(0xc1)] = n(0xcf), e[m(0xcd)] = n(0xb6) + 'd', e[m(0xc3)] = m(0xcc), e[n(0xc9)] = n(0xd0);
        const f = e;
        return d[m(0xb9)](f[n(0xc1)], f[m(0xcd)], {
            'type': sequelize_1[m(0xb2)][m(0xb7)],
            'references': {
                'model': f[m(0xc1)],
                'key': 'id'
            },
            'onUpdate': f[n(0xc3)],
            'onDelete': f[m(0xc9)]
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0xbe)] = o(0xcf), e[p(0xce)] = o(0xb6) + 'd';
        const f = e;
        return d[p(0xc8) + 'mn'](f[o(0xbe)], f[p(0xce)]);
    }
};