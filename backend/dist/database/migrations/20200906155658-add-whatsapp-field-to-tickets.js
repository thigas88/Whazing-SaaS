'use strict';
const k = b, l = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1a56 + 0x651 + 0x14e4);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0xef)) / (0x4 * -0x770 + 0x1768 + 0x659) + -parseInt(i(0xe5)) / (-0x1 * 0x1ec7 + 0x1f57 * 0x1 + 0x1 * -0x8e) * (-parseInt(i(0xec)) / (-0x1af0 + 0x703 + 0x13f0)) + parseInt(i(0xe9)) / (0x1639 + -0x22ff + 0xcca) * (-parseInt(j(0xfc)) / (-0x4 * 0x46c + 0x1fe + 0xfb7)) + parseInt(i(0xfb)) / (-0x5d * 0x3 + -0x2488 + 0x25a5) + -parseInt(i(0xf3)) / (-0x1029 * -0x1 + -0x2b * 0xb1 + 0x3b * 0x3b) + -parseInt(j(0xe1)) / (-0x1dc1 * -0x1 + -0x2266 + 0x4ad) + -parseInt(j(0xf7)) / (-0x3 * -0x504 + -0x132c + 0x429) * (-parseInt(i(0xe3)) / (-0x1b47 + -0xd8b + 0x28dc));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1011 + 0x2b431 + -0xe693));
function a() {
    const q = [
        '81mqaaYH',
        'ETHrl',
        'erty',
        'SET\x20NULL',
        '1414692cEqgvy',
        '397075WCiZUz',
        'CASCADE',
        'removeColu',
        'uYZtY',
        'defineProp',
        '1853448CvQbfJ',
        'oOjQg',
        '714110NvKFaU',
        'addColumn',
        '24792UxFMxR',
        'Whatsapps',
        'bdbQR',
        'yJKXL',
        '8QHCPKB',
        'Tickets',
        'INTEGER',
        '9nJPtkF',
        'value',
        'exports',
        '165667cjKecp',
        'DataTypes',
        'pzrKw',
        'CBzXS',
        '1660428ESijgN',
        '__esModule',
        'sequelize',
        'whatsappId'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0xed)] = !![], Object[l(0xe0) + l(0xf9)](exports, l(0xf4), g);
const sequelize_1 = require(k(0xf5));
module[k(0xee)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0xe2)] = m(0xea), e[n(0xf2)] = n(0xf6), e[m(0xdf)] = m(0xe6), e[m(0xe7)] = m(0xfd), e[n(0xe8)] = m(0xfa);
        const f = e;
        return d[m(0xe4)](f[m(0xe2)], f[m(0xf2)], {
            'type': sequelize_1[m(0xf0)][n(0xeb)],
            'references': {
                'model': f[m(0xdf)],
                'key': 'id'
            },
            'onUpdate': f[n(0xe7)],
            'onDelete': f[m(0xe8)]
        });
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0xf1)] = p(0xea), e[p(0xf8)] = p(0xf6);
        const f = e;
        return d[p(0xfe) + 'mn'](f[o(0xf1)], f[o(0xf8)]);
    }
};