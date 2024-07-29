'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x1f1)) / (0xe00 + 0x3f2 * -0x9 + 0x1583) + parseInt(r(0x1f8)) / (-0x1 * -0x335 + -0x1 * 0x9e6 + 0x157 * 0x5) + -parseInt(s(0x1f7)) / (0x26bf * 0x1 + -0x1a3e + 0x63f * -0x2) + -parseInt(s(0x1fa)) / (0x1767 + -0x18dc + 0x179) * (-parseInt(r(0x1dd)) / (0xd29 + -0x10a9 + 0x11 * 0x35)) + -parseInt(r(0x1e1)) / (-0x24ef + -0x1400 + 0x38f5) * (parseInt(s(0x1e8)) / (-0x13e + -0x76 * 0x2 + 0x231)) + -parseInt(r(0x1db)) / (0x2675 + -0x111d * 0x1 + 0x8 * -0x2aa) + parseInt(s(0x1f9)) / (0xef4 + -0x17b2 + 0x8c7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x13259 + 0x14b8f3 + -0x81252));
const q = {};
q[t(0x1e4)] = !![], Object[u(0x1e2) + u(0x1e5)](exports, t(0x1e6), q);
const sequelize_1 = require(t(0x1da));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x456 + 0x1076 * 0x2 + -0xd60 * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const z = [
        'NJAEz',
        '195uHxcfU',
        'type',
        'closedAt',
        'DataTypes',
        '1224txHkJs',
        'defineProp',
        'jgdWe',
        'value',
        'erty',
        '__esModule',
        'removeColu',
        '18424QUhwpU',
        'Tickets',
        'DipLv',
        'all',
        'SuPsf',
        'mErzJ',
        'tiZlk',
        'DATE',
        'defaultVal',
        '113274RlDMiu',
        'eAtFL',
        'chatFlowId',
        'STRING',
        'addColumn',
        'allowNull',
        '1429461uXxyko',
        '1717844PCUlQB',
        '18912915YTjTaA',
        '35412dwKZzb',
        'INTEGER',
        'zfJae',
        'stepChatFl',
        'exports',
        'sequelize',
        '11426168zGsdFW'
    ];
    a = function () {
        return z;
    };
    return a();
}
module[t(0x1d9)] = {
    'up': g => {
        const v = t, w = u, h = {};
        h[v(0x1f2)] = w(0x1e9), h[v(0x1dc)] = v(0x1f3), h[v(0x1d7)] = w(0x1d8) + 'ow', h[w(0x1ed)] = w(0x1df);
        const i = h, j = {};
        j[w(0x1de)] = sequelize_1[v(0x1e0)][w(0x1d6)], j[v(0x1f0) + 'ue'] = null, j[w(0x1f6)] = !![];
        const k = {};
        k[w(0x1de)] = sequelize_1[v(0x1e0)][v(0x1f4)], k[w(0x1f0) + 'ue'] = null, k[v(0x1f6)] = !![];
        const l = {};
        return l[v(0x1de)] = sequelize_1[w(0x1e0)][w(0x1ef)], l[v(0x1f0) + 'ue'] = null, l[v(0x1f6)] = !![], Promise[v(0x1eb)]([
            g[v(0x1f5)](i[v(0x1f2)], i[v(0x1dc)], j),
            g[v(0x1f5)](i[w(0x1f2)], i[v(0x1d7)], k),
            g[v(0x1f5)](i[w(0x1f2)], i[w(0x1ed)], l)
        ]);
    },
    'down': d => {
        const x = t, y = t, e = {};
        e[x(0x1ea)] = x(0x1e9), e[y(0x1ee)] = x(0x1f3), e[y(0x1e3)] = y(0x1d8) + 'ow', e[x(0x1ec)] = x(0x1df);
        const f = e;
        return Promise[x(0x1eb)]([
            d[x(0x1e7) + 'mn'](f[x(0x1ea)], f[y(0x1ee)]),
            d[x(0x1e7) + 'mn'](f[x(0x1ea)], f[y(0x1e3)]),
            d[x(0x1e7) + 'mn'](f[x(0x1ea)], f[x(0x1ec)])
        ]);
    }
};