'use strict';
const k = b, l = b;
function a() {
    const q = [
        '12zmGTkh',
        '122HfyFsI',
        '769nXGLLs',
        '1246221KjvRlt',
        'value',
        'exports',
        'SET\x20NULL',
        'oiQAC',
        'YRyVN',
        '__esModule',
        'defineProp',
        'Tenants',
        'zpzQs',
        'ORhuz',
        'INTEGER',
        'CASCADE',
        'removeColu',
        'Trbcq',
        '41238YKjARb',
        'planId',
        'sequelize',
        'Plans',
        'tKahw',
        '3641fnJCFC',
        'erty',
        '1477xcVKbt',
        '3513006cSAkJq',
        '1349615BmRhfl',
        '5710FNPOlH',
        '9269904sBTRQH',
        'jkhHU',
        'addColumn',
        'DataTypes'
    ];
    a = function () {
        return q;
    };
    return a();
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x8a)) / (-0xe2d + 0xf91 + -0x163) * (parseInt(j(0x89)) / (0x17 * -0x130 + -0x13b7 + 0x2f09)) + -parseInt(j(0x8b)) / (-0x1ca1 + -0x3a5 * 0x1 + -0x2049 * -0x1) + -parseInt(i(0x88)) / (0x1e60 + -0x151c * 0x1 + 0x250 * -0x4) * (parseInt(j(0xa3)) / (-0x14b9 + -0x246 * -0xd + 0x468 * -0x2)) + parseInt(j(0x9a)) / (-0x10f * 0x11 + 0x17 * 0xd + 0x10da) * (parseInt(i(0xa1)) / (-0x88d + 0x1cdb * -0x1 + 0x256f)) + parseInt(i(0x84)) / (0x89f + -0x9d3 + 0x13c) + -parseInt(i(0xa2)) / (0x21ef + -0x20bd + -0x129) + -parseInt(j(0x83)) / (0x16fa + 0x631 * 0x3 + -0x1 * 0x2983) * (parseInt(j(0x9f)) / (0x7 * -0x2c8 + -0x18d * 0x3 + 0x407 * 0x6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x913 * 0x6b + -0xd6 * -0x9 + -0x7a93e * -0x2));
const g = {};
g[k(0x8c)] = !![], Object[k(0x92) + l(0xa0)](exports, k(0x91), g);
const sequelize_1 = require(k(0x9c));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5cb * -0x1 + -0x1 * 0x24b + 0x47 * 0x1f);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[k(0x8d)] = {
    'up': d => {
        const m = l, n = l, e = {};
        e[m(0x99)] = n(0x93), e[n(0x8f)] = n(0x9b), e[m(0x95)] = n(0x9d), e[n(0x90)] = n(0x97), e[m(0x9e)] = m(0x8e);
        const f = e;
        return d[m(0x86)](f[n(0x99)], f[m(0x8f)], {
            'type': sequelize_1[n(0x87)][n(0x96)],
            'references': {
                'model': f[n(0x95)],
                'key': 'id'
            },
            'onUpdate': f[n(0x90)],
            'onDelete': f[n(0x9e)]
        });
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0x85)] = o(0x93), e[p(0x94)] = p(0x9b);
        const f = e;
        return d[o(0x98) + 'mn'](f[o(0x85)], f[o(0x94)]);
    }
};