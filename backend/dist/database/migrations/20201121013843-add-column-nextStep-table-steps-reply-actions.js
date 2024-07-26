'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x1bd)) / (0xb8 + -0xe09 + 0xd52) * (-parseInt(i(0x1cc)) / (0x9a9 + -0xef * 0x11 + 0x1 * 0x638)) + parseInt(i(0x1cb)) / (-0x26b * 0x7 + -0x75 * 0x5 + 0x1339 * 0x1) + -parseInt(j(0x1d2)) / (0x14af + 0xc75 + -0x2120) + -parseInt(i(0x1c1)) / (0x14c7 + 0x2e5 + -0x17a7) + -parseInt(i(0x1c7)) / (-0x17a7 + 0x91e + 0xe8f) * (-parseInt(i(0x1c6)) / (-0x2 * -0xf86 + -0x24ab + 0x5a6)) + -parseInt(j(0x1c8)) / (0x1 * -0x4e3 + 0x1aa9 + 0x2e * -0x79) + parseInt(i(0x1b8)) / (0x438 + 0x27 * 0xcb + 0x54 * -0x6b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0xe1292 + -0x16 * -0x4ecb + -0x31 * -0x64c1));
const g = {};
g[k(0x1c0)] = !![], Object[k(0x1d3) + l(0x1c4)](exports, l(0x1ba), g);
function a() {
    const q = [
        '14zRcqMo',
        '4111494VVbLhd',
        '7264176hTXzNv',
        'nextStep',
        'sequelize',
        '2771412SgpnlN',
        '428gxpLGO',
        'XtiAH',
        'StepsReply',
        'WRKEc',
        'INTEGER',
        'addColumn',
        '3077832GljKiG',
        'defineProp',
        'YcaRK',
        '6525162eUhFpM',
        'removeColu',
        '__esModule',
        'aIVKz',
        'hNAbQ',
        '2546vzYCYL',
        'DataTypes',
        'Actions',
        'value',
        '5506615WUExaB',
        'Firpb',
        'CASCADE',
        'erty',
        'exports'
    ];
    a = function () {
        return q;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x1dcf + -0x11ae + 0x3135);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(k(0x1ca));
module[k(0x1c5)] = {
    'up': d => {
        const m = l, n = k, e = {};
        e[m(0x1c2)] = n(0x1ce) + n(0x1bf), e[m(0x1bb)] = m(0x1c9), e[m(0x1d4)] = n(0x1ce), e[n(0x1cf)] = n(0x1c3);
        const f = e;
        return d[m(0x1d1)](f[m(0x1c2)], f[n(0x1bb)], {
            'type': sequelize_1[m(0x1be)][n(0x1d0)],
            'references': {
                'model': f[n(0x1d4)],
                'key': 'id'
            },
            'onUpdate': f[n(0x1cf)],
            'onDelete': f[m(0x1cf)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x1bc)] = o(0x1ce) + o(0x1bf), e[p(0x1cd)] = o(0x1c9);
        const f = e;
        return d[o(0x1b9) + 'mn'](f[o(0x1bc)], f[p(0x1cd)]);
    }
};