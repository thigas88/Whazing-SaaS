'use strict';
const p = b, q = b;
function a() {
    const v = [
        'HOnHz',
        'STRING',
        'AutoReply',
        'all',
        '1312JvQRgZ',
        'TOcib',
        '30534330pkUrbS',
        'sequelize',
        '51570xngBDI',
        '61mKLIPk',
        'DataTypes',
        '__esModule',
        '3703380igJpfo',
        'ARRAY',
        'reply',
        '9086391PSjSEq',
        'name',
        'defineProp',
        'MiBxX',
        'gfIBi',
        'XWClo',
        '1335iXnUPO',
        'wtgXc',
        'value',
        'words',
        '12010CDovgE',
        'renameColu',
        '1660wrhcUC',
        'erty',
        'addColumn',
        'removeColu',
        'XWKie',
        'jOPee',
        'exports',
        '31724gTZNdg'
    ];
    a = function () {
        return v;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x19f6 + -0x1 * -0x13bf + -0x2c17);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x1ad)) / (-0x1616 + -0x12 * 0x53 + -0x1bed * -0x1) * (-parseInt(n(0x1bd)) / (-0x1e3 + 0xa88 + -0x8a3)) + -parseInt(n(0x1b9)) / (-0x1ebc + 0x63 * -0x3 + 0x1fe8) * (-parseInt(n(0x1bf)) / (0x1 * 0x19c7 + -0x1 * 0x249b + 0xad8)) + parseInt(n(0x1ac)) / (0x1 * 0x72d + 0x12e0 + 0x188 * -0x11) + -parseInt(o(0x1b0)) / (0x8e9 * 0x4 + -0x63 + -0x137 * 0x1d) + parseInt(o(0x1a3)) / (0x1 * -0x1f5 + 0x1a1f + -0x1823) * (-parseInt(n(0x1a8)) / (-0x3 * 0x50f + 0x16e2 + -0x7ad)) + -parseInt(o(0x1b3)) / (-0x144 * -0x6 + -0x1 * -0xca1 + 0xa18 * -0x2) + parseInt(n(0x1aa)) / (0x5f * 0x43 + -0x9 * -0x72 + -0x1cd5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x9cd4e + 0x904 * 0xe5 + 0xfc6 * 0x9b));
const m = {};
m[p(0x1bb)] = !![], Object[q(0x1b5) + p(0x1c0)](exports, q(0x1af), m);
const sequelize_1 = require(q(0x1ab));
module[q(0x1a2)] = {
    'up': d => {
        const r = p, s = q, e = {};
        e[r(0x1ba)] = s(0x1a6), e[s(0x1a0)] = r(0x1b2), e[r(0x1a4)] = s(0x1b4), e[s(0x1b8)] = s(0x1bc);
        const f = e;
        return Promise[s(0x1a7)]([
            d[r(0x1be) + 'mn'](f[r(0x1ba)], f[r(0x1a0)], f[r(0x1a4)]),
            d[s(0x19f) + 'mn'](f[s(0x1ba)], f[r(0x1b8)])
        ]);
    },
    'down': d => {
        const t = q, u = p, e = {};
        e[t(0x1a9)] = t(0x1a6), e[u(0x1b7)] = t(0x1b4), e[u(0x1a1)] = t(0x1b2), e[u(0x1b6)] = u(0x1bc);
        const f = e;
        return Promise[t(0x1a7)]([
            d[t(0x1be) + 'mn'](f[u(0x1a9)], f[u(0x1b7)], f[u(0x1a1)]),
            d[u(0x19e)](f[t(0x1a9)], f[u(0x1b6)], { 'type': sequelize_1[t(0x1ae)][t(0x1b1)](sequelize_1[t(0x1ae)][u(0x1a5)]) })
        ]);
    }
};