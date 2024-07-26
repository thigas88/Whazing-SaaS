'use strict';
function a() {
    const z = [
        'defaultVal',
        '2520444mVKkio',
        'pYdww',
        'removeColu',
        'sequelize',
        'STRING',
        '803238qEGbSK',
        '4tUpbwE',
        '12401172TZwapH',
        'ykfzs',
        'DataTypes',
        '8qLZYaY',
        '2hnxTFX',
        'tokenAPI',
        'wabaBSP',
        '__esModule',
        'exports',
        'type',
        '22702300VijPoO',
        'all',
        'ogzzg',
        'wabaKeyHoo',
        'Whatsapps',
        'IjjCb',
        '2122735kctIcu',
        'agYLU',
        'tzaCZ',
        'TEXT',
        'erty',
        'GOKBe',
        '7214526Jcmuaa',
        'defineProp',
        'allowNull',
        'LxaJt',
        '7847721roGoYD',
        'addColumn',
        'value'
    ];
    a = function () {
        return z;
    };
    return a();
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x1fc)) / (0x43 * 0x95 + 0xc1c * 0x1 + 0xd3 * -0x3e) + -parseInt(r(0x202)) / (-0x1113 + -0x185e * 0x1 + 0x2973) * (-parseInt(s(0x1f7)) / (-0x10c6 + -0x5 * 0x431 + 0x2 * 0x12df)) + -parseInt(r(0x1fd)) / (0x3 * 0x4d5 + 0x508 + -0x2d * 0x6f) * (parseInt(s(0x20e)) / (-0x641 + -0x25aa + 0x2bf0)) + -parseInt(s(0x1ef)) / (0x149f + 0x254b + -0x39e4) + -parseInt(s(0x1f3)) / (0x166b + 0x1 * -0x1c21 + 0x71 * 0xd) + -parseInt(s(0x201)) / (0xc9d * 0x1 + 0x6d3 * -0x2 + 0x111) * (-parseInt(s(0x1fe)) / (0x15b6 + -0x135f + -0x3b * 0xa)) + parseInt(s(0x208)) / (0x4b7 + -0x2207 * 0x1 + 0x1ba * 0x11);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4f * -0x4c37 + -0x2bf16 + 0x289020));
const q = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xbb + -0x12f3 + 0x1422);
        let h = e[f];
        return h;
    }, b(c, d);
}
q[t(0x1f5)] = !![], Object[t(0x1f0) + t(0x1ed)](exports, u(0x205), q);
const sequelize_1 = require(t(0x1fa));
module[u(0x206)] = {
    'up': g => {
        const v = t, w = u, h = {};
        h[v(0x1f2)] = v(0x20c), h[v(0x1ea)] = w(0x203), h[v(0x1eb)] = v(0x204), h[v(0x20a)] = w(0x20b) + 'k';
        const i = h, j = {};
        j[v(0x207)] = sequelize_1[v(0x200)][w(0x1ec)], j[v(0x1f1)] = !![], j[v(0x1f6) + 'ue'] = null;
        const k = {};
        k[w(0x207)] = sequelize_1[v(0x200)][w(0x1fb)], k[w(0x1f1)] = !![], k[w(0x1f6) + 'ue'] = null;
        const l = {};
        return l[w(0x207)] = sequelize_1[v(0x200)][w(0x1ec)], l[w(0x1f1)] = !![], l[w(0x1f6) + 'ue'] = null, Promise[w(0x209)]([
            g[w(0x1f4)](i[v(0x1f2)], i[v(0x1ea)], j),
            g[v(0x1f4)](i[v(0x1f2)], i[v(0x1eb)], k),
            g[v(0x1f4)](i[w(0x1f2)], i[w(0x20a)], l)
        ]);
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0x20d)] = x(0x20c), e[x(0x1ff)] = y(0x203), e[x(0x1ee)] = x(0x204), e[y(0x1f8)] = y(0x20b) + 'k';
        const f = e;
        return Promise[y(0x209)]([
            d[x(0x1f9) + 'mn'](f[x(0x20d)], f[x(0x1ff)]),
            d[x(0x1f9) + 'mn'](f[y(0x20d)], f[x(0x1ee)]),
            d[y(0x1f9) + 'mn'](f[y(0x20d)], f[x(0x1f8)])
        ]);
    }
};