'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x92)) / (0x2c * -0x2 + 0x242d + 0x23d4 * -0x1) * (-parseInt(n(0x8d)) / (-0x19ca * -0x1 + -0x6e * -0x10 + -0x20a8)) + -parseInt(n(0xa2)) / (-0x47 * -0x25 + 0x1 * 0x1df5 + -0x1 * 0x2835) + -parseInt(n(0x9a)) / (0x15ce * 0x1 + -0x12e1 * 0x1 + -0x95 * 0x5) * (-parseInt(n(0x8a)) / (0x1840 + 0x1 * 0x579 + -0x1db4)) + -parseInt(o(0xa3)) / (-0xf3b + -0x22b1 + 0x31f2) * (parseInt(n(0xa4)) / (-0x45c + -0x14c2 + 0x1925)) + parseInt(o(0xa1)) / (0xb03 + 0x3f * -0x85 + 0x15c0) + -parseInt(n(0x99)) / (0x1 * 0x21bb + 0x1150 + -0x2 * 0x1981) + parseInt(o(0x96)) / (0x1 * 0x1523 + -0x2195 + 0xc7c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x29c1c + 0x2705f * -0x1 + -0x183cd * -0x1));
const m = {};
function a() {
    const v = [
        '10mWjbaa',
        'CWSMY',
        'wZJDh',
        '33970bEcTNu',
        'defaultVal',
        'fbPageId',
        'value',
        'defineProp',
        '1FNCTFX',
        'yntov',
        'addColumn',
        'erty',
        '3079720HZHUFm',
        'UFbpk',
        'IZdtp',
        '1328319vBooyi',
        '42556sEOcTe',
        'JSONB',
        'removeColu',
        'sequelize',
        'allowNull',
        '__esModule',
        'Whatsapps',
        '687560bkLtOH',
        '351291lDtacw',
        '18DQIhlk',
        '133042ZvvoaM',
        'TEXT',
        'all',
        'fbObject',
        'exports',
        'DataTypes',
        'type',
        'piruP'
    ];
    a = function () {
        return v;
    };
    return a();
}
m[p(0x90)] = !![], Object[p(0x91) + p(0x95)](exports, q(0x9f), m);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x17b9 * 0x1 + 0x24de + -0x895 * 0x7);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(q(0x9d));
module[q(0x86)] = {
    'up': f => {
        const r = p, s = q, g = {};
        g[r(0x89)] = s(0xa0), g[r(0x98)] = s(0x8f), g[s(0x8b)] = r(0x85);
        const h = g, i = {};
        i[s(0x88)] = sequelize_1[s(0x87)][r(0xa5)], i[r(0x9e)] = !![], i[s(0x8e) + 'ue'] = null;
        const j = {};
        return j[r(0x88)] = sequelize_1[r(0x87)][s(0x9b)], j[s(0x9e)] = !![], j[r(0x8e) + 'ue'] = null, Promise[s(0x84)]([
            f[r(0x94)](h[r(0x89)], h[s(0x98)], i),
            f[s(0x94)](h[s(0x89)], h[r(0x8b)], j)
        ]);
    },
    'down': d => {
        const t = q, u = p, e = {};
        e[t(0x8c)] = t(0xa0), e[t(0x97)] = u(0x8f), e[u(0x93)] = t(0x85);
        const f = e;
        return Promise[t(0x84)]([
            d[u(0x9c) + 'mn'](f[t(0x8c)], f[u(0x97)]),
            d[u(0x9c) + 'mn'](f[t(0x8c)], f[t(0x93)])
        ]);
    }
};