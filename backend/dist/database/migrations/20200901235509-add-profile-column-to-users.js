'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0xf2)) / (-0x7 * -0x12b + 0x1e9 * -0x8 + 0x71c) * (-parseInt(j(0xe8)) / (-0x1 * -0x19ef + 0x2 * -0x178 + -0x16fd)) + parseInt(i(0xed)) / (-0x108c * 0x2 + -0x2378 + 0x4493) + -parseInt(i(0xfe)) / (0x1820 * -0x1 + 0x1 * 0x13e7 + 0x43d) + parseInt(j(0x100)) / (-0x1056 + 0x1b21 * 0x1 + -0xac6) + -parseInt(i(0xfa)) / (-0x83 * 0x3 + 0x237b + -0x10f6 * 0x2) + -parseInt(j(0xf0)) / (-0x1f1 + -0xea2 + 0x32 * 0x55) + parseInt(i(0xf9)) / (0x292 + -0x1 * -0x1eb1 + -0x213b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4d089 * 0x3 + 0x17191b + 0x3b4a5));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x43 * 0x56 + -0x1e9d + 0x903);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
g[k(0xea)] = !![], Object[l(0xf6) + l(0xff)](exports, l(0xf3), g);
function a() {
    const q = [
        'profile',
        'hGwWz',
        '2907964hGaVKE',
        'erty',
        '4008195jwFBKd',
        'exports',
        '4urbYQs',
        'admin',
        'value',
        'STRING',
        'vADXb',
        '4672737RyqCvU',
        'sequelize',
        'kjYuF',
        '4695803cQkdxO',
        'FjcIg',
        '91835lTmtUb',
        '__esModule',
        'tQpVu',
        'DataTypes',
        'defineProp',
        'addColumn',
        'removeColu',
        '7101648LNSVCh',
        '7336518nTOGaz',
        'Users'
    ];
    a = function () {
        return q;
    };
    return a();
}
const sequelize_1 = require(l(0xee));
module[k(0x101)] = {
    'up': d => {
        const m = l, n = l, e = {};
        e[m(0xf1)] = m(0xfb), e[m(0xfd)] = n(0xfc), e[m(0xef)] = m(0xe9);
        const f = e;
        return d[m(0xf7)](f[n(0xf1)], f[n(0xfd)], {
            'type': sequelize_1[m(0xf5)][n(0xeb)],
            'allowNull': ![],
            'defaultValue': f[m(0xef)]
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0xec)] = p(0xfb), e[o(0xf4)] = p(0xfc);
        const f = e;
        return d[o(0xf8) + 'mn'](f[o(0xec)], f[o(0xf4)]);
    }
};