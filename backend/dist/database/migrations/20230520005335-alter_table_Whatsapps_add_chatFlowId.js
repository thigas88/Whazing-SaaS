'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x9 * 0x3b3 + -0xb * 0x25e + -0x56a);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const q = [
        '28qbQJVn',
        '2IolHNw',
        'defineProp',
        'AsHoQ',
        '1177485CgPpMa',
        'DQcAu',
        'Whatsapps',
        'removeColu',
        'xgYLO',
        'exports',
        '80177CkgNxu',
        'INTEGER',
        'ZOtnB',
        'SET\x20NULL',
        'DataTypes',
        'hHAUN',
        'sequelize',
        'YsKkg',
        '972942JYCkeW',
        'lStNy',
        'ChatFlow',
        'CASCADE',
        'erty',
        'addColumn',
        'value',
        '7490504EHRScK',
        '3542562jgjLaQ',
        '__esModule',
        '9247656qcegOK',
        '5HqNvtS',
        'chatFlowId',
        '11146990CbTTKX'
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
            const f = parseInt(i(0x1de)) / (-0x417 + -0x1 * 0x25ff + 0x2a17) * (-parseInt(i(0x1f5)) / (-0x25cf + 0xaf * -0x21 + 0x3c60)) + parseInt(j(0x1d8)) / (0x24 + -0xee3 + 0x761 * 0x2) + parseInt(i(0x1ed)) / (-0x28c + 0x11e1 + -0xf51) * (-parseInt(i(0x1f1)) / (0x1d3b + 0x2 * 0x1283 + -0x423c)) + -parseInt(j(0x1e6)) / (0x6c * -0x2 + -0x1729 + 0x1807) * (-parseInt(j(0x1f4)) / (0x2 * 0x106b + 0x1 * 0x1f0f + -0x3fde)) + parseInt(j(0x1f0)) / (-0xa49 + 0x1116 * -0x2 + 0x2c7d) + -parseInt(j(0x1ee)) / (-0xb * 0x1d7 + 0xbd7 * -0x2 + 0x2bf4 * 0x1) + parseInt(j(0x1f3)) / (0x148a * -0x1 + 0xc75 + 0x81f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0xe2bf * 0x1d + -0x81d4b * 0x3 + 0x40c272));
const g = {};
g[k(0x1ec)] = !![], Object[k(0x1f6) + k(0x1ea)](exports, k(0x1ef), g);
const sequelize_1 = require(l(0x1e4));
module[k(0x1dd)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0x1dc)] = n(0x1da), e[m(0x1d9)] = n(0x1f2), e[m(0x1e3)] = n(0x1e8), e[n(0x1e0)] = m(0x1e9), e[n(0x1d7)] = m(0x1e1);
        const f = e;
        return d[n(0x1eb)](f[n(0x1dc)], f[n(0x1d9)], {
            'type': sequelize_1[n(0x1e2)][m(0x1df)],
            'references': {
                'model': f[m(0x1e3)],
                'key': 'id'
            },
            'onUpdate': f[n(0x1e0)],
            'onDelete': f[m(0x1d7)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x1e5)] = p(0x1da), e[p(0x1e7)] = p(0x1f2);
        const f = e;
        return d[p(0x1db) + 'mn'](f[o(0x1e5)], f[p(0x1e7)]);
    }
};