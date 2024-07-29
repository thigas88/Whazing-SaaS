'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(j(0x15c)) / (0x1fa0 + -0xc2a + 0x11 * -0x125) * (-parseInt(j(0x15d)) / (0x496 + 0x751 * 0x5 + -0x2929)) + parseInt(k(0x15a)) / (-0x886 + 0x5d6 + 0x2b3) + -parseInt(k(0x144)) / (-0xe51 + 0x737 * 0x3 + 0x2 * -0x3a8) + parseInt(j(0x14d)) / (-0x23ca + -0x1972 + -0x3d41 * -0x1) + parseInt(k(0x148)) / (-0x9b4 + 0x131 * 0x2 + 0x758) * (-parseInt(j(0x143)) / (-0x1f87 + -0x511 + -0x5 * -0x753)) + -parseInt(j(0x14f)) / (-0x6 * 0xdb + 0x1364 + 0x3 * -0x4be) * (-parseInt(j(0x158)) / (0x2da + -0x21b2 + 0x1ee1)) + -parseInt(k(0x164)) / (-0x154f + 0xbdc + -0x97d * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x809b7 * -0x1 + -0xca1fe + 0x7cc19 * 0x4));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x24b2 + 0x11 * 0x1dd + -0x431c);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const r = [
        'SlYET',
        'oReplyId',
        'all',
        '__esModule',
        '1121560DXZSWt',
        '7jMdTqD',
        '4842508QlULmT',
        'DataTypes',
        'StepsReply',
        'HwkPJ',
        '6550824Tghpje',
        'sequelize',
        'SET\x20NULL',
        'removeColu',
        'kDXiV',
        '3848770WgNaNy',
        'JTsza',
        '656VjBZFN',
        'oldStepAut',
        'CASCADE',
        'gkTIm',
        'Tickets',
        'erty',
        'value',
        'defineProp',
        'addColumn',
        '107037vhlTry',
        'exports',
        '1301400PQsXpW',
        'XmpuV',
        '14cISLWm',
        '132162ayvSzp',
        'EPtUi',
        'INTEGER'
    ];
    a = function () {
        return r;
    };
    return a();
}
const i = {};
i[l(0x155)] = !![], Object[l(0x156) + m(0x154)](exports, l(0x163), i);
const sequelize_1 = require(m(0x149));
module[m(0x159)] = {
    'up': d => {
        const n = m, o = l, e = {};
        e[n(0x15b)] = o(0x153), e[n(0x15e)] = o(0x150) + n(0x161), e[o(0x160)] = n(0x146), e[o(0x14c)] = o(0x151), e[o(0x152)] = o(0x14a);
        const f = e;
        return Promise[n(0x162)]([d[o(0x157)](f[o(0x15b)], f[n(0x15e)], {
                'type': sequelize_1[n(0x145)][o(0x15f)],
                'references': {
                    'model': f[o(0x160)],
                    'key': 'id'
                },
                'onUpdate': f[o(0x14c)],
                'onDelete': f[o(0x152)],
                'allowNull': !![],
                'defaultValue': null
            })]);
    },
    'down': d => {
        const p = m, q = l, e = {};
        e[p(0x14e)] = p(0x153), e[q(0x147)] = q(0x150) + q(0x161);
        const f = e;
        return d[p(0x14b) + 'mn'](f[q(0x14e)], f[q(0x147)]);
    }
};