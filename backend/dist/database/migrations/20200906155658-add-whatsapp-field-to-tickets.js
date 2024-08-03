'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0xc7)) / (0xed3 + 0x2b * 0x5 + -0xfa9) + -parseInt(i(0xc1)) / (0x1c9e + -0xb75 + 0x1 * -0x1127) * (-parseInt(j(0xbf)) / (-0x4 * 0x89e + 0x1 * -0x653 + 0x28ce * 0x1)) + -parseInt(j(0xb2)) / (0x2033 + 0x101d + -0x304c) + parseInt(j(0xb5)) / (0x244a + -0x27 * -0x1f + 0x6 * -0x6d5) + -parseInt(i(0xb9)) / (0x1333 + 0x8 * -0x2a2 + 0x1e3) + parseInt(j(0xb1)) / (-0x4f2 * 0x1 + -0x1ae * 0x13 + 0x24e3) + parseInt(i(0xc6)) / (0x4bd * -0x3 + 0x281 + 0x6 * 0x1f5) * (parseInt(i(0xae)) / (-0x265c + 0x48b + 0x21da));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x31 * -0x4091 + -0x2 * -0x106ae + -0x3cb8d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4 * 0x39b + -0x1e17 + 0x2d31);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
function a() {
    const q = [
        '1390864EvOVGS',
        'value',
        'jZliu',
        'Tickets',
        'removeColu',
        'defineProp',
        '333jfnBtd',
        'nLGPJ',
        'CASCADE',
        '4012988UDDsBb',
        '545936WJOwqq',
        '__esModule',
        'SET\x20NULL',
        '2842100PEulFt',
        'sequelize',
        'YjSAc',
        'whatsappId',
        '6413370VDogav',
        'exports',
        'DataTypes',
        'itFSd',
        'KmaGn',
        'INTEGER',
        '4104276pymIsE',
        'addColumn',
        '2mAbKNh',
        'stoJa',
        'Whatsapps',
        'erty',
        'zsUbU',
        '169112echCjb'
    ];
    a = function () {
        return q;
    };
    return a();
}
g[k(0xc8)] = !![], Object[k(0xcc) + l(0xc4)](exports, k(0xb3), g);
const sequelize_1 = require(k(0xb6));
module[l(0xba)] = {
    'up': d => {
        const m = l, n = l, e = {};
        e[m(0xb7)] = n(0xca), e[n(0xaf)] = n(0xb8), e[n(0xbc)] = n(0xc3), e[n(0xc2)] = n(0xb0), e[m(0xc5)] = n(0xb4);
        const f = e;
        return d[m(0xc0)](f[n(0xb7)], f[n(0xaf)], {
            'type': sequelize_1[n(0xbb)][n(0xbe)],
            'references': {
                'model': f[n(0xbc)],
                'key': 'id'
            },
            'onUpdate': f[m(0xc2)],
            'onDelete': f[m(0xc5)]
        });
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0xc9)] = p(0xca), e[p(0xbd)] = p(0xb8);
        const f = e;
        return d[o(0xcb) + 'mn'](f[o(0xc9)], f[o(0xbd)]);
    }
};