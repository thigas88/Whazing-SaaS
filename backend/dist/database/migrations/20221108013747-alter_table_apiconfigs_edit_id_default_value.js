'use strict';
function a() {
    const t = [
        'defineProp',
        'UUID',
        '1480746Irszzt',
        'gen_random',
        '10TczFij',
        '13355928VQEMFX',
        '745085HiqUED',
        'ApiConfigs',
        'literal',
        '5295lPkGsH',
        'hCHEn',
        '55fsMWKa',
        'DataTypes',
        'sequelize',
        'erty',
        'all',
        '6rHXjCZ',
        '1089096XsXrhl',
        '7NBAGHR',
        'changeColu',
        'value',
        'mHIju',
        'QwXyt',
        '1180CwwGJX',
        'wyBqL',
        '__esModule',
        '5969424JTfHeX',
        '1402968mlVCRL',
        'Sequelize',
        '_uuid()',
        'exports'
    ];
    a = function () {
        return t;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x1909 + 0x15a0 + 0x43c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0xe7)) / (0x15 * -0x9e + -0x264f + -0x1 * -0x3346) + parseInt(l(0xdd)) / (-0x17 * -0x10d + -0x1 * 0xf4f + -0x1 * 0x8da) * (parseInt(l(0xf1)) / (-0x2204 + 0x16f7 + 0xb10)) + parseInt(m(0xd9)) / (0xe5 * -0x8 + 0x5e * -0x49 + 0x1 * 0x21fa) * (-parseInt(m(0xea)) / (-0x240d + -0x125d * 0x2 + 0x48cc)) + -parseInt(m(0xe3)) / (0xc33 + -0x1f5e + 0x1331) * (-parseInt(m(0xd4)) / (-0x1 * 0x307 + 0x56d * -0x7 + -0x1 * -0x2909)) + parseInt(m(0xdc)) / (0x9bd * 0x2 + 0x1f * -0xf7 + 0x8d * 0x13) + parseInt(l(0xe6)) / (0x21db + -0xab6 + -0x1 * 0x171c) * (-parseInt(l(0xe5)) / (-0x5cf * 0x3 + -0x1 * -0x102 + 0x1075)) + parseInt(l(0xec)) / (-0xd5e + 0x5 * -0x34 + 0xe6d) * (-parseInt(l(0xd3)) / (-0xb9c * 0x3 + 0x33b + 0x1fa5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5e7ff + 0x191998 + -0x2 * 0x8b4e2));
const k = {};
k[n(0xd6)] = !![], Object[o(0xe1) + n(0xef)](exports, n(0xdb), k);
const sequelize_1 = require(o(0xee));
module[n(0xe0)] = {
    'up': d => {
        const p = n, q = o, e = {};
        e[p(0xd7)] = p(0xe8), e[q(0xd8)] = p(0xe4) + p(0xdf);
        const f = e;
        return Promise[q(0xf0)]([d[p(0xd5) + 'mn'](f[p(0xd7)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[q(0xed)][p(0xe2)],
                'defaultValue': sequelize_1[q(0xde)][p(0xe9)](f[p(0xd8)])
            })]);
    },
    'down': d => {
        const r = o, s = o, e = {};
        e[r(0xeb)] = s(0xe8), e[s(0xda)] = s(0xe4) + r(0xdf);
        const f = e;
        return Promise[s(0xf0)]([d[s(0xd5) + 'mn'](f[s(0xeb)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[r(0xed)][s(0xe2)],
                'defaultValue': sequelize_1[s(0xde)][r(0xe9)](f[r(0xda)])
            })]);
    }
};