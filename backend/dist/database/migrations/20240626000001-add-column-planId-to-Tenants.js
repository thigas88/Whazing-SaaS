'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xdeb * -0x1 + -0xa5 + 0x1065);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x1e5)) / (0x16 * 0x60 + -0xd * 0x19f + 0xcd4) + -parseInt(j(0x1da)) / (-0x1 * 0xffd + 0x1 * -0x95a + 0x1959) + parseInt(i(0x1f2)) / (-0x4f7 * -0x1 + -0xd * 0x281 + 0x1b99) * (parseInt(i(0x1e3)) / (-0x1 * -0x17f5 + -0x6 * -0xb3 + -0x1 * 0x1c23)) + parseInt(j(0x1ec)) / (0x13 * -0x1f3 + 0x77d + -0x3 * -0x9db) + parseInt(i(0x1e6)) / (0x1 * -0x7d3 + -0x340 + 0xb19) + parseInt(i(0x1e4)) / (-0x1271 * -0x1 + -0x2590 * 0x1 + 0x1326) * (-parseInt(j(0x1f1)) / (-0x737 * -0x3 + 0x1c90 + -0x16f * 0x23)) + parseInt(i(0x1e9)) / (-0x1ecd + 0x5ec * 0x2 + 0xbb * 0x1a) * (-parseInt(i(0x1e8)) / (-0xb27 + -0x7 * -0x28f + -0x6b8));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x35 * 0x27c5 + -0xccaa3 + 0xb25d8));
function a() {
    const q = [
        'INTEGER',
        'planId',
        'addColumn',
        'CASCADE',
        'erty',
        '68NdguyW',
        '238DbOlka',
        '23986ofTLWT',
        '2414532GGpwWG',
        'value',
        '29570UasYAB',
        '585pAiqem',
        'Plans',
        'HPHPS',
        '527150yDoKLA',
        'Tenants',
        'defineProp',
        'kurqc',
        'exports',
        '69416AcJbiv',
        '78066VHFVkG',
        'gjQdC',
        'iSpXe',
        'Uggcb',
        'sequelize',
        'DataTypes',
        '__esModule',
        'SET\x20NULL',
        '14294nWGoXg',
        'removeColu',
        'qiroT',
        'NmZzc'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0x1e7)] = !![], Object[l(0x1ee) + l(0x1e2)](exports, l(0x1d8), g);
const sequelize_1 = require(l(0x1d6));
module[l(0x1f0)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x1f4)] = n(0x1ed), e[m(0x1d5)] = m(0x1df), e[m(0x1ef)] = n(0x1ea), e[n(0x1f3)] = n(0x1e1), e[m(0x1eb)] = n(0x1d9);
        const f = e;
        return d[n(0x1e0)](f[n(0x1f4)], f[n(0x1d5)], {
            'type': sequelize_1[n(0x1d7)][m(0x1de)],
            'references': {
                'model': f[n(0x1ef)],
                'key': 'id'
            },
            'onUpdate': f[n(0x1f3)],
            'onDelete': f[m(0x1eb)]
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0x1dc)] = o(0x1ed), e[o(0x1dd)] = o(0x1df);
        const f = e;
        return d[p(0x1db) + 'mn'](f[o(0x1dc)], f[p(0x1dd)]);
    }
};