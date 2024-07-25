'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(j(0x19e)) / (0xdf5 + -0x1 * 0x55e + 0x9d * -0xe) + parseInt(k(0x192)) / (0x2e * -0x9b + 0xb3a + -0x1 * -0x10a2) + parseInt(j(0x19d)) / (-0xa9 * -0x25 + 0x17 * 0x125 + -0x32bd) * (-parseInt(j(0x1a5)) / (0x1278 + 0xef6 + -0x216a)) + -parseInt(j(0x1a8)) / (0x1ccc + 0x9c3 + -0x268a) + -parseInt(k(0x195)) / (0x16c5 + -0xa6 * -0xb + -0x1de1) * (-parseInt(j(0x19a)) / (-0x41 * 0x27 + 0x740 + 0x2ae)) + -parseInt(k(0x199)) / (0x14b2 + -0x186b + 0x3c1) + parseInt(j(0x197)) / (-0x1aa9 + 0x1 * -0x2392 + -0x14 * -0x31d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x3430b + -0x12683 + -0x3 * -0x2b58d));
function a() {
    const r = [
        'JwwPi',
        '546uZHKiQ',
        '45879HMVsYs',
        'sequelize',
        'value',
        'bSpoE',
        'Users',
        '__esModule',
        'all',
        '604nUpxZA',
        'removeColu',
        'tIJxT',
        '2196855LQWdPa',
        'addColumn',
        'DataTypes',
        'status',
        'erty',
        'defineProp',
        '509900nUPQuf',
        'offline',
        'hotcP',
        '586884HICnYH',
        'gJYob',
        '2700909wqBJaB',
        'exports',
        '738240WkNHQe',
        '21wudaWE',
        'STRING'
    ];
    a = function () {
        return r;
    };
    return a();
}
const i = {};
i[l(0x1a0)] = !![], Object[m(0x191) + m(0x190)](exports, m(0x1a3), i);
const sequelize_1 = require(l(0x19f));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1e4c + 0x513 + 0x1ac6);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[l(0x198)] = {
    'up': d => {
        const n = l, o = m, e = {};
        e[n(0x196)] = n(0x1a2), e[n(0x1a7)] = n(0x18f), e[n(0x1a1)] = o(0x193);
        const f = e;
        return Promise[o(0x1a4)]([d[n(0x18d)](f[o(0x196)], f[n(0x1a7)], {
                'type': sequelize_1[n(0x18e)][o(0x19b)],
                'allowNull': ![],
                'defaultValue': f[n(0x1a1)]
            })]);
    },
    'down': d => {
        const p = m, q = l, e = {};
        e[p(0x194)] = q(0x1a2), e[q(0x19c)] = q(0x18f);
        const f = e;
        return Promise[p(0x1a4)]([d[p(0x1a6) + 'mn'](f[q(0x194)], f[q(0x19c)])]);
    }
};