'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x1bb)) / (0x1049 + -0x2420 + 0x13d8) * (parseInt(o(0x1a3)) / (0x2 * 0x272 + -0x25bd * 0x1 + 0x20db)) + -parseInt(o(0x1b2)) / (0xe7 * 0x1 + 0x18b7 + -0x199b) + parseInt(n(0x1aa)) / (-0x1e32 + 0x1852 + 0x5e4) * (parseInt(n(0x1bf)) / (-0x435 * -0x6 + -0x2500 + -0x9 * -0x14f)) + parseInt(o(0x1a2)) / (-0x4d0 + -0x1043 + 0x1 * 0x1519) + parseInt(n(0x1a5)) / (0x2131 + 0x230d + -0x4437) + parseInt(n(0x1c2)) / (-0x1338 + -0x51a * 0x5 + 0x2cc2) * (parseInt(o(0x1b9)) / (-0x4d7 + 0x15a0 + -0x10c0)) + -parseInt(o(0x1b5)) / (-0x2447 + -0x1384 + 0x37d5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x10 * 0x1c62a + 0x9d2dd + 0x20eb6e));
function a() {
    const v = [
        'addColumn',
        'MoMUf',
        '15391410CxHkEd',
        'rxRWx',
        'all',
        'exports',
        '843849wNZFGI',
        '__esModule',
        '28004SNIEye',
        'name',
        'jSfRV',
        'STRING',
        '1136565snlNIX',
        'jXahE',
        'renameColu',
        '16TLwBJE',
        'words',
        'removeColu',
        '9515982Xshxnr',
        '2MMVrbM',
        'wjPgO',
        '7514283jjBUHu',
        'erty',
        'defineProp',
        'reply',
        'sequelize',
        '12qnvRxn',
        'TgeRB',
        'CpRCM',
        'AutoReply',
        'value',
        'ARRAY',
        'maLGJ',
        'DataTypes',
        '3062433KrXXiZ'
    ];
    a = function () {
        return v;
    };
    return a();
}
const m = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3 * 0x8ff + 0xd * 0xc7 + 0x1282);
        let h = e[f];
        return h;
    }, b(c, d);
}
m[p(0x1ae)] = !![], Object[q(0x1a7) + q(0x1a6)](exports, p(0x1ba), m);
const sequelize_1 = require(p(0x1a9));
module[q(0x1b8)] = {
    'up': d => {
        const r = p, s = p, e = {};
        e[r(0x1bd)] = r(0x1ad), e[s(0x1ac)] = r(0x1a8), e[s(0x1b0)] = s(0x1bc), e[r(0x1b4)] = s(0x1a0);
        const f = e;
        return Promise[r(0x1b7)]([
            d[s(0x1c1) + 'mn'](f[r(0x1bd)], f[r(0x1ac)], f[r(0x1b0)]),
            d[r(0x1a1) + 'mn'](f[s(0x1bd)], f[s(0x1b4)])
        ]);
    },
    'down': d => {
        const t = q, u = p, e = {};
        e[t(0x1a4)] = u(0x1ad), e[u(0x1b6)] = u(0x1bc), e[t(0x1c0)] = u(0x1a8), e[u(0x1ab)] = u(0x1a0);
        const f = e;
        return Promise[t(0x1b7)]([
            d[t(0x1c1) + 'mn'](f[u(0x1a4)], f[t(0x1b6)], f[t(0x1c0)]),
            d[t(0x1b3)](f[t(0x1a4)], f[u(0x1ab)], { 'type': sequelize_1[u(0x1b1)][t(0x1af)](sequelize_1[t(0x1b1)][t(0x1be)]) })
        ]);
    }
};