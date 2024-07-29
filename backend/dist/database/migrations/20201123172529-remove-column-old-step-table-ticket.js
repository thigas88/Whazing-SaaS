'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x1d3)) / (0xb99 * -0x3 + 0x71 * 0x10 + 0x19 * 0x11c) + parseInt(j(0x1db)) / (0x1459 * 0x1 + 0x1e92 + -0x32e9 * 0x1) + parseInt(i(0x1bd)) / (0x11 * -0x5 + 0x1c8b * -0x1 + -0x5c7 * -0x5) + -parseInt(i(0x1ce)) / (-0x228a + -0x92f + 0x2bbd) * (-parseInt(i(0x1cb)) / (-0x12da + 0x1ccc + -0x9ed)) + -parseInt(i(0x1d7)) / (0x45a + -0x1cd9 + 0x1 * 0x1885) + parseInt(j(0x1ca)) / (-0x1 * 0x1b23 + -0x454 + -0x1d * -0x116) * (-parseInt(i(0x1c9)) / (0x1 * 0x1c73 + -0x1dc6 + -0x15b * -0x1)) + parseInt(j(0x1c1)) / (0x795 + 0x11ce * 0x1 + -0x195a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x50899 + -0xa1c75 + 0x1be938));
function a() {
    const q = [
        'EDFpa',
        '20fNgyjr',
        'oReplyId',
        '__esModule',
        'value',
        'aTtSj',
        '390195jtZrWp',
        'sequelize',
        'all',
        'DataTypes',
        '90624GmYmfO',
        'exports',
        'oldStepAut',
        'QNlRT',
        '1515568mpVTXw',
        'YndUK',
        'removeColu',
        '109869AWWQum',
        'CASCADE',
        'ZjfRG',
        'EhsVk',
        '1252800KWwfaH',
        'Tickets',
        'erty',
        'StepsReply',
        'INTEGER',
        'addColumn',
        'Fiifv',
        'defineProp',
        '1687216jEtXee',
        '28vmBZlo',
        '1151950GESSGP',
        'SET\x20NULL'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0x1d1)] = !![], Object[l(0x1c8) + k(0x1c3)](exports, l(0x1d0), g);
const sequelize_1 = require(k(0x1d4));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * 0xe9 + -0x1 * -0x2507 + 0xc5f * -0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[l(0x1d8)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x1da)] = n(0x1c2), e[n(0x1c0)] = m(0x1d9) + m(0x1cf);
        const f = e;
        return Promise[m(0x1d5)]([d[m(0x1bc) + 'mn'](f[m(0x1da)], f[m(0x1c0)])]);
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0x1cd)] = o(0x1c2), e[o(0x1c7)] = p(0x1d9) + o(0x1cf), e[o(0x1dc)] = o(0x1c4), e[p(0x1d2)] = o(0x1be), e[p(0x1bf)] = o(0x1cc);
        const f = e;
        return d[p(0x1c6)](f[p(0x1cd)], f[o(0x1c7)], {
            'type': sequelize_1[o(0x1d6)][o(0x1c5)],
            'references': {
                'model': f[p(0x1dc)],
                'key': 'id'
            },
            'onUpdate': f[o(0x1d2)],
            'onDelete': f[p(0x1bf)],
            'allowNull': !![],
            'defaultValue': null
        });
    }
};