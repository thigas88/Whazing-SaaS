'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x1e0)) / (-0x1 * -0x16bd + 0x2 * -0x587 + 0x5d7 * -0x2) * (parseInt(l(0x1d5)) / (0x1 * -0x8cb + -0x56c + -0xb * -0x14b)) + -parseInt(l(0x1dc)) / (-0x319 * 0x2 + 0x1a09 + -0x13d4) + -parseInt(l(0x1e1)) / (0x4e7 * -0x2 + 0x3f0 + 0x5e2) * (-parseInt(l(0x1ca)) / (0x617 * -0x1 + 0x387 + 0x1 * 0x295)) + -parseInt(l(0x1db)) / (-0x18a0 + 0x1d * -0xad + -0xf1 * -0x2f) + -parseInt(m(0x1d3)) / (-0x9df * -0x1 + 0x1 * 0x1b6e + -0x16f * 0x1a) + -parseInt(m(0x1cf)) / (-0x61 * 0x2e + -0x1992 * -0x1 + -0x81c) + parseInt(m(0x1cd)) / (-0xa75 * 0x2 + -0x17 * 0x4f + 0x1c0c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd * 0x381 + 0xf176 * -0x9 + 0xcc9dd));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x33a * -0x5 + -0x21e6 + -0x23 * -0x8f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[n(0x1de)] = !![], Object[n(0x1d6) + o(0x1d1)](exports, o(0x1cb), k);
const sequelize_1 = require(n(0x1d8));
function a() {
    const t = [
        'erty',
        'BdNYr',
        '1898953WOUlSH',
        'DataTypes',
        '10ZozUbK',
        'defineProp',
        'qwvxk',
        'sequelize',
        'UUID',
        'Sequelize',
        '1038924xnQgAR',
        '1567260UQFEnH',
        'oxLOy',
        'value',
        'ApiConfigs',
        '109554CEaMOx',
        '400412MLpllB',
        'literal',
        'exports',
        'changeColu',
        'gen_random',
        '25vgNMTL',
        '__esModule',
        'all',
        '15047127CcsYYd',
        '_uuid()',
        '2914808aRABsm',
        'zAhMi'
    ];
    a = function () {
        return t;
    };
    return a();
}
module[n(0x1e3)] = {
    'up': d => {
        const p = n, q = o, e = {};
        e[p(0x1d7)] = p(0x1df), e[q(0x1d0)] = q(0x1c9) + p(0x1ce);
        const f = e;
        return Promise[q(0x1cc)]([d[p(0x1e4) + 'mn'](f[p(0x1d7)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[q(0x1d4)][p(0x1d9)],
                'defaultValue': sequelize_1[p(0x1da)][q(0x1e2)](f[q(0x1d0)])
            })]);
    },
    'down': d => {
        const r = n, s = n, e = {};
        e[r(0x1dd)] = s(0x1df), e[s(0x1d2)] = s(0x1c9) + s(0x1ce);
        const f = e;
        return Promise[s(0x1cc)]([d[s(0x1e4) + 'mn'](f[s(0x1dd)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[r(0x1d4)][r(0x1d9)],
                'defaultValue': sequelize_1[r(0x1da)][s(0x1e2)](f[s(0x1d2)])
            })]);
    }
};