'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x9e)) / (0x34 * -0x1c + -0xe37 + 0x68 * 0x31) * (-parseInt(r(0xaa)) / (0x17ea + 0x9f * -0x13 + -0xc1b)) + -parseInt(s(0xb7)) / (0x25a5 + -0x25db + -0x39 * -0x1) * (-parseInt(r(0x98)) / (0x1 * -0x1c13 + 0x1 * 0x6cc + -0x1 * -0x154b)) + -parseInt(r(0xb2)) / (0x4d * -0x77 + 0x1b05 + 0x8cb) * (parseInt(r(0xb6)) / (-0x8aa * 0x1 + 0x2 * 0xe9 + 0x6de)) + -parseInt(s(0xb1)) / (0xc07 * -0x1 + -0x138b + -0x1 * -0x1f99) * (parseInt(r(0x95)) / (-0x146c + -0x3d * 0x61 + 0x2b91)) + parseInt(r(0xb4)) / (0x2186 + 0x1de9 + -0x3f66) * (parseInt(r(0xb8)) / (-0x1037 + -0x15 * 0x146 + 0x2aff)) + -parseInt(s(0x99)) / (0x2019 + 0x73 * 0x29 + -0x3279) * (-parseInt(s(0xb0)) / (0x3 * -0x90b + -0x1 * -0xd45 + -0x14 * -0xb2)) + parseInt(r(0x94)) / (0xa * 0x3a1 + -0x55 * -0x25 + -0x3086) * (-parseInt(r(0xa4)) / (0x1a82 + -0x2223 + 0x7 * 0x119));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xc86f7 + 0xdf345 + -0x10ec63));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4b7 + -0x1d12 + 0x18ed);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const z = [
        'DataTypes',
        'BOOLEAN',
        'DATE',
        '65QQRXpN',
        '3016lcgmSv',
        'removeColu',
        'FwfEb',
        '4iaxTSc',
        '2405656CMdFBQ',
        'all',
        'exports',
        'wYnlF',
        'lastLogout',
        '9301OXAxYV',
        'Users',
        'vojTi',
        'QuzSh',
        'addColumn',
        'erty',
        '167118Tggzmu',
        'sequelize',
        'XVRAP',
        'QEdyv',
        'wnoVf',
        'lastLogin',
        '142VDykIy',
        'value',
        'defineProp',
        '__esModule',
        'type',
        'defaultVal',
        '12LCOZAY',
        '20230OtjRKM',
        '367990yLAuSb',
        'TsvQC',
        '1537650FcssBl',
        'isOnline',
        '24YoTgXc',
        '496731sHudmh',
        '60FoUtsb'
    ];
    a = function () {
        return z;
    };
    return a();
}
const q = {};
q[t(0xab)] = !![], Object[u(0xac) + t(0xa3)](exports, u(0xad), q);
const sequelize_1 = require(t(0xa5));
module[u(0x9b)] = {
    'up': g => {
        const v = u, w = t, h = {};
        h[v(0xa1)] = w(0x9f), h[v(0xa7)] = v(0xa9), h[v(0x9c)] = v(0x9d), h[v(0xa6)] = v(0xb5);
        const i = h, j = {};
        j[v(0xae)] = sequelize_1[v(0xb9)][v(0x93)], j[w(0xaf) + 'ue'] = null;
        const k = {};
        k[v(0xae)] = sequelize_1[w(0xb9)][w(0x93)], k[v(0xaf) + 'ue'] = null;
        const l = {};
        return l[v(0xae)] = sequelize_1[v(0xb9)][w(0x92)], l[w(0xaf) + 'ue'] = ![], Promise[w(0x9a)]([
            g[w(0xa2)](i[w(0xa1)], i[w(0xa7)], j),
            g[v(0xa2)](i[v(0xa1)], i[v(0x9c)], k),
            g[v(0xa2)](i[w(0xa1)], i[v(0xa6)], l)
        ]);
    },
    'down': d => {
        const x = t, y = t, e = {};
        e[x(0x97)] = y(0x9f), e[y(0xb3)] = y(0xa9), e[y(0xa0)] = x(0x9d), e[x(0xa8)] = y(0xb5);
        const f = e;
        return Promise[x(0x9a)]([
            d[y(0x96) + 'mn'](f[y(0x97)], f[x(0xb3)]),
            d[y(0x96) + 'mn'](f[x(0x97)], f[y(0xa0)]),
            d[x(0x96) + 'mn'](f[y(0x97)], f[x(0xa8)])
        ]);
    }
};