'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x1b5)) / (0x6d * 0x22 + 0x7b * -0x47 + 0x2 * 0x9d2) + parseInt(n(0x1b1)) / (0x1 * -0xa3b + -0x2020 + 0xe1f * 0x3) * (-parseInt(o(0x1b0)) / (-0x8d * -0x2f + 0x2f4 + -0x1cd4)) + parseInt(n(0x1b9)) / (-0x321 + -0x163d * -0x1 + 0x5e * -0x34) * (-parseInt(n(0x1be)) / (0x665 * -0x3 + -0x8e6 + 0x1c1a)) + -parseInt(o(0x1c3)) / (-0x2fa + 0x210d + 0x1e0d * -0x1) * (parseInt(o(0x1af)) / (0xea5 + 0x1023 + -0x1ec1)) + -parseInt(n(0x1a8)) / (-0x6 * 0x29d + -0x1253 + 0x2209) + -parseInt(n(0x1a3)) / (0x92e + -0x3fa * -0x1 + -0xd1f) * (-parseInt(n(0x1c2)) / (0x91a + 0xce5 + -0x15f5)) + parseInt(n(0x1a6)) / (0x8a * -0x23 + 0x1 * 0x1d + 0x322 * 0x6);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xef02f + -0x851d2 + 0x797a7));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0xcb5 + -0x1 * 0x17fa + 0x2650);
        let h = e[f];
        return h;
    }, b(c, d);
}
const m = {};
m[p(0x1ad)] = !![], Object[p(0x1bb) + q(0x1a1)](exports, p(0x1b7), m);
function a() {
    const v = [
        'DataTypes',
        '220ktjYOe',
        '6Vprcaj',
        'erty',
        'type',
        '238923nVDPnQ',
        'removeColu',
        'BOOLEAN',
        '19896085vJWDAR',
        'AJqST',
        '4204832aFHDQS',
        'all',
        'EdPjH',
        'AutoReply',
        'sequelize',
        'value',
        'IQcAK',
        '6105113lSWbSb',
        '3jTZaRR',
        '3283108pCYqVO',
        'PgeOG',
        'exports',
        'addColumn',
        '1828852leVjkM',
        'isActive',
        '__esModule',
        'allowNull',
        '4PheTQN',
        'wmhEu',
        'defineProp',
        'defaultVal',
        'STRING',
        '1254860Nrsvnv',
        'XzqDz',
        'celularTes'
    ];
    a = function () {
        return v;
    };
    return a();
}
const sequelize_1 = require(p(0x1ac));
module[q(0x1b3)] = {
    'up': f => {
        const r = p, s = q, g = {};
        g[r(0x1a7)] = r(0x1ab), g[r(0x1aa)] = s(0x1b6), g[r(0x1ae)] = s(0x1c0) + 'te';
        const h = g, i = {};
        i[s(0x1a2)] = sequelize_1[s(0x1c1)][r(0x1a5)], i[s(0x1b8)] = ![], i[r(0x1bc) + 'ue'] = !![];
        const j = {};
        return j[s(0x1a2)] = sequelize_1[r(0x1c1)][s(0x1bd)], j[s(0x1b8)] = !![], j[r(0x1bc) + 'ue'] = null, Promise[s(0x1a9)]([
            f[r(0x1b4)](h[r(0x1a7)], h[r(0x1aa)], i),
            f[s(0x1b4)](h[s(0x1a7)], h[s(0x1ae)], j)
        ]);
    },
    'down': d => {
        const t = q, u = p, e = {};
        e[t(0x1b2)] = t(0x1ab), e[t(0x1bf)] = u(0x1b6), e[t(0x1ba)] = t(0x1c0) + 'te';
        const f = e;
        return Promise[u(0x1a9)]([
            d[u(0x1a4) + 'mn'](f[t(0x1b2)], f[u(0x1bf)]),
            d[t(0x1a4) + 'mn'](f[t(0x1b2)], f[u(0x1ba)])
        ]);
    }
};