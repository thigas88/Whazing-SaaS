'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1048 * -0x1 + -0x886 + -0x6e4);
        let h = e[f];
        return h;
    }, b(c, d);
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0xe1)) / (0xbf * 0x25 + 0x52f * 0x1 + 0x4af * -0x7) * (parseInt(m(0xe6)) / (-0x1f * -0x49 + -0x6a * -0x3b + -0x2143)) + -parseInt(m(0xe4)) / (-0x65 * -0x1a + -0x4 * 0x707 + 0x1 * 0x11dd) + parseInt(m(0xf4)) / (0x2461 + 0x1 * 0x21a3 + -0x4600) + parseInt(l(0xf6)) / (-0x23fb + 0xf1c + 0x2fc * 0x7) + parseInt(l(0xde)) / (-0x9c7 * 0x1 + -0x3c1 + 0xd8e) * (parseInt(m(0xf7)) / (-0x2 * -0x3a1 + 0x156 + -0x2db * 0x3)) + -parseInt(l(0xe5)) / (-0x121 * -0x2 + -0x71 + 0x1 * -0x1c9) + -parseInt(l(0xed)) / (0x185 + 0xa2d * 0x1 + -0xf * 0xc7) * (-parseInt(m(0xe0)) / (-0x633 + -0x5 * -0x242 + -0x1af * 0x3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x922d7 + -0xe8deb + 0x1029c5));
const k = {};
k[n(0xf1)] = !![], Object[o(0xec) + o(0xf9)](exports, o(0xfa), k);
const sequelize_1 = require(o(0xf5));
function a() {
    const t = [
        'gInRs',
        'DataTypes',
        'value',
        'gen_random',
        'literal',
        '2582540NNSALi',
        'sequelize',
        '4802415xkASpK',
        '626192JObUzP',
        'all',
        'erty',
        '__esModule',
        '66FBSMnc',
        'changeColu',
        '1730CiHPVM',
        '596FoDluX',
        'UUID',
        '_uuid()',
        '2626329ZwLpzJ',
        '6645792mFgAiM',
        '1120TQulIi',
        'Etzqh',
        'exports',
        'lERlH',
        'ApiMessage',
        'yuxch',
        'defineProp',
        '8010LMQCGv',
        'Sequelize'
    ];
    a = function () {
        return t;
    };
    return a();
}
module[n(0xe8)] = {
    'up': d => {
        const p = o, q = n, e = {};
        e[p(0xe9)] = q(0xea) + 's', e[p(0xef)] = q(0xf2) + p(0xe3);
        const f = e;
        return Promise[q(0xf8)]([d[q(0xdf) + 'mn'](f[q(0xe9)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[p(0xf0)][p(0xe2)],
                'defaultValue': sequelize_1[q(0xee)][p(0xf3)](f[p(0xef)])
            })]);
    },
    'down': d => {
        const r = n, s = o, e = {};
        e[r(0xe7)] = s(0xea) + 's', e[r(0xeb)] = s(0xf2) + r(0xe3);
        const f = e;
        return Promise[r(0xf8)]([d[r(0xdf) + 'mn'](f[s(0xe7)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[s(0xf0)][r(0xe2)],
                'defaultValue': sequelize_1[r(0xee)][r(0xf3)](f[r(0xeb)])
            })]);
    }
};