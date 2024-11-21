'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x1dc)) / (0x18f3 * -0x1 + -0x1a65 + 0x3359) + -parseInt(j(0x1dd)) / (-0x2 * 0x946 + 0x5 * -0x6db + 0xa91 * 0x5) + parseInt(j(0x1d5)) / (-0x4 * 0x5b7 + -0x1f56 + 0x3635 * 0x1) * (parseInt(j(0x1e2)) / (-0x34b + 0x1b89 + 0x183a * -0x1)) + -parseInt(i(0x1d4)) / (-0x2 * 0x119e + 0x1380 + 0xfc1) * (-parseInt(j(0x1d3)) / (-0x1b64 + -0x2 * -0xbca + 0x3d6)) + -parseInt(i(0x1da)) / (-0x1bd1 * -0x1 + 0x239 * 0x6 + -0xbc * 0x38) + parseInt(j(0x1d6)) / (0x26 * 0xed + 0x259e + -0x48c4) * (parseInt(i(0x1eb)) / (-0x1 * -0x1f21 + 0x3f0 + -0x2308)) + -parseInt(i(0x1e9)) / (-0x5e * 0x15 + -0x1 * 0x1dfb + 0x25bb) * (-parseInt(j(0x1d0)) / (0x2f * -0x49 + -0x197e + 0x26f0));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x43279 + 0x1cd7c9 + -0x120463 * 0x1));
const g = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5c * 0xe + 0x214a + -0x2482);
        let h = e[f];
        return h;
    }, b(c, d);
}
g[k(0x1e5)] = !![], Object[k(0x1db) + k(0x1e8)](exports, k(0x1e1), g);
const sequelize_1 = require(l(0x1e4));
function a() {
    const q = [
        'defineProp',
        '1515503kbktZq',
        '223332EnlNTn',
        'amHxF',
        'oldStepAut',
        'iJidw',
        '__esModule',
        '132PERfIb',
        'addColumn',
        'sequelize',
        'value',
        'FCarD',
        'CASCADE',
        'erty',
        '10croxIL',
        'SET\x20NULL',
        '450YSDQRu',
        'AkgVG',
        'DataTypes',
        'removeColu',
        'IPCDW',
        'StepsReply',
        'all',
        'INTEGER',
        '24829541XaUcbq',
        'KlemB',
        'Cgojl',
        '474efuhGc',
        '32555ymZSbE',
        '16479WErjYi',
        '183944wYwpVl',
        'Tickets',
        'oReplyId',
        'exports',
        '10435649jutoHq'
    ];
    a = function () {
        return q;
    };
    return a();
}
module[k(0x1d9)] = {
    'up': d => {
        const m = l, n = k, e = {};
        e[m(0x1d1)] = m(0x1d7), e[m(0x1d2)] = n(0x1df) + n(0x1d8);
        const f = e;
        return Promise[m(0x1f1)]([d[m(0x1ee) + 'mn'](f[n(0x1d1)], f[n(0x1d2)])]);
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x1ec)] = p(0x1d7), e[o(0x1e0)] = o(0x1df) + o(0x1d8), e[p(0x1e6)] = o(0x1f0), e[o(0x1de)] = p(0x1e7), e[o(0x1ef)] = o(0x1ea);
        const f = e;
        return d[o(0x1e3)](f[p(0x1ec)], f[p(0x1e0)], {
            'type': sequelize_1[p(0x1ed)][p(0x1f2)],
            'references': {
                'model': f[o(0x1e6)],
                'key': 'id'
            },
            'onUpdate': f[p(0x1de)],
            'onDelete': f[o(0x1ef)],
            'allowNull': !![],
            'defaultValue': null
        });
    }
};