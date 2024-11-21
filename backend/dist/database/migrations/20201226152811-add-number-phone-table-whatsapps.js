'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x10f)) / (0x3 * 0x601 + -0x442 * -0x1 + -0x3c * 0x5f) * (-parseInt(o(0xf9)) / (-0x8f8 + -0x80 * 0x4 + -0x1 * -0xafa)) + -parseInt(o(0xf5)) / (-0x2115 + -0x9 * 0x221 + 0x3441) + parseInt(n(0x109)) / (0x10b0 + -0x21c6 + 0x111a) * (parseInt(n(0x104)) / (-0x16 * 0x1c1 + 0x1342 + 0x1359)) + -parseInt(n(0xff)) / (-0x11 * 0xb3 + 0x1e1f + -0x1236) + parseInt(n(0x115)) / (0x1 * 0x1273 + 0x112f + -0x239b) * (-parseInt(o(0x10d)) / (0x1 * -0xabd + 0x1 * -0x1639 + 0xce * 0x29)) + -parseInt(o(0xfb)) / (0x2011 + -0x1 * -0x1d46 + 0x3d4e * -0x1) + -parseInt(o(0x111)) / (-0xd * -0x6b + -0x2d * -0x4f + 0x8 * -0x269) * (-parseInt(o(0xfc)) / (0x1 * -0x142c + 0x961 + 0x1 * 0xad6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1d * -0xf653 + 0x28 * -0x8327 + 0x6b116));
const m = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xb5f + -0xe53 + 0x3e7);
        let h = e[f];
        return h;
    }, b(c, d);
}
m[p(0x113)] = !![], Object[q(0xf6) + q(0x108)](exports, q(0x10e), m);
const sequelize_1 = require(q(0xf8));
function a() {
    const v = [
        'DataTypes',
        '2208294ujBQsx',
        'defineProp',
        'STRING',
        'sequelize',
        '22mFOlnD',
        'dcoYR',
        '6070104GhdSkg',
        '19514jVnJuc',
        'all',
        'LIphS',
        '7433400dCWxCx',
        'JSONB',
        'zXZEc',
        'kkfFJ',
        'Whatsapps',
        '3835hhxouw',
        'type',
        'addColumn',
        'removeColu',
        'erty',
        '48IieKRz',
        'allowNull',
        'yOqpD',
        'number',
        '1424rMOvXU',
        '__esModule',
        '54751DcOyKY',
        'exports',
        '24370LtgrRX',
        'LpBRC',
        'value',
        'defaultVal',
        '53522Gnqovd',
        'phone'
    ];
    a = function () {
        return v;
    };
    return a();
}
module[q(0x110)] = {
    'up': f => {
        const r = q, s = q, g = {};
        g[r(0xfa)] = r(0x103), g[r(0x102)] = r(0x10c), g[r(0x112)] = r(0xf3);
        const h = g, i = {};
        i[s(0x105)] = sequelize_1[s(0xf4)][r(0xf7)], i[r(0x10a)] = !![], i[r(0x114) + 'ue'] = null;
        const j = {};
        return j[s(0x105)] = sequelize_1[r(0xf4)][s(0x100)], j[s(0x10a)] = !![], j[s(0x114) + 'ue'] = null, Promise[r(0xfd)]([
            f[r(0x106)](h[s(0xfa)], h[r(0x102)], i),
            f[r(0x106)](h[r(0xfa)], h[s(0x112)], j)
        ]);
    },
    'down': d => {
        const t = q, u = p, e = {};
        e[t(0xfe)] = t(0x103), e[u(0x101)] = u(0x10c), e[u(0x10b)] = u(0xf3);
        const f = e;
        return Promise[u(0xfd)]([d[t(0x107) + 'mn'](f[u(0xfe)], f[u(0x101)])]);
        return Promise[u(0xfd)]([d[t(0x107) + 'mn'](f[u(0xfe)], f[u(0x10b)])]);
    }
};