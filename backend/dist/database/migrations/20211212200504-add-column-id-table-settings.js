'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0xe3)) / (0x23 * 0x13 + 0x94d + -0xbe5) * (-parseInt(k(0xfa)) / (-0x1e0 + 0xa70 + 0x1b6 * -0x5)) + parseInt(k(0xe5)) / (0xb56 * -0x3 + 0x26f0 + -0x4eb * 0x1) + parseInt(j(0xf2)) / (0x1714 + -0x1 * 0xb8d + -0xb83) + -parseInt(j(0xeb)) / (-0x54d + 0x14b0 + 0x1 * -0xf5e) + parseInt(k(0xf3)) / (0x3 * -0x934 + -0x1 * -0x2241 + -0x69f) * (parseInt(j(0xf5)) / (-0x966 + 0x26e0 + -0x1d73)) + parseInt(j(0xe6)) / (0x2 * 0xde5 + 0x16df + -0x1 * 0x32a1) + parseInt(k(0xf6)) / (0xb5c * -0x1 + 0x2db + 0x88a) * (parseInt(j(0xe1)) / (0x1b * -0x31 + 0x20dd + -0x1ba8));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x26ee6 * 0x1 + -0x1 * 0xa02c5 + -0xa * -0x1bee6));
const i = {};
function a() {
    const r = [
        '__esModule',
        '2453996EGNZik',
        '19854PBBCsH',
        'DataTypes',
        '140ZPTvxQ',
        '10849239uKmudC',
        'value',
        'all',
        'Settings',
        '2218XSsCgQ',
        'addColumn',
        'allowNull',
        'defineProp',
        '10jcAQnB',
        'removeColu',
        '1125rucpZc',
        'YSimx',
        '893199KqRnfm',
        '4200064CCPZgb',
        'erty',
        'primaryKey',
        'exports',
        'sequelize',
        '4064065uMznlz',
        'ent',
        'type',
        'autoIncrem',
        'yhmNk',
        'INTEGER'
    ];
    a = function () {
        return r;
    };
    return a();
}
i[l(0xf7)] = !![], Object[l(0xe0) + l(0xe7)](exports, m(0xf1), i);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2255 + 0x14 * 0x5 + 0x22d0);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(m(0xea));
module[l(0xe9)] = {
    'up': e => {
        const n = m, o = m, f = {};
        f[n(0xef)] = o(0xf9);
        const g = f, h = {};
        return h[o(0xed)] = sequelize_1[o(0xf4)][o(0xf0)], h[o(0xee) + n(0xec)] = !![], h[n(0xe8)] = !![], h[o(0xdf)] = ![], Promise[o(0xf8)]([e[o(0xfb)](g[n(0xef)], 'id', h)]);
    },
    'down': d => {
        const p = m, q = m, e = {};
        e[p(0xe4)] = p(0xf9);
        const f = e;
        return Promise[p(0xf8)]([d[p(0xe2) + 'mn'](f[q(0xe4)], 'id')]);
    }
};