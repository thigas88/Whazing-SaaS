'use strict';
const n = b, o = b;
function a() {
    const t = [
        'erty',
        'value',
        '6WUqcJz',
        'exports',
        'wZdBD',
        'DataTypes',
        'ApiMessage',
        '1912650OSqoGz',
        '4IYYyHI',
        '2057069yMuxCn',
        '3508296pQPyWW',
        '__esModule',
        '153126JSdzjC',
        'gen_random',
        'literal',
        'sequelize',
        '_uuid()',
        'Sequelize',
        '971145wnNGPS',
        'QxSrK',
        'changeColu',
        'all',
        'IoKcn',
        'defineProp',
        'mNmPA',
        '1554220CBseFT',
        '616375MZBgjk',
        'UUID',
        '63xkROqj'
    ];
    a = function () {
        return t;
    };
    return a();
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x1e2)) / (0x134a + 0x1bff + 0x8 * -0x5e9) * (parseInt(m(0x1d8)) / (-0x179f + 0x10 * 0x13c + 0x3e1)) + -parseInt(m(0x1e8)) / (0x16ef + -0x847 * -0x1 + -0x1f33) + -parseInt(m(0x1de)) / (0x9c3 + 0x1 * 0x1831 + 0x1 * -0x21f0) * (-parseInt(m(0x1f0)) / (0x9f2 + 0x220e + 0x9 * -0x4e3)) + -parseInt(m(0x1dd)) / (-0x3d4 + 0x9e5 * 0x3 + -0x19d5 * 0x1) + -parseInt(l(0x1df)) / (0x757 + -0x1 * -0x1f67 + -0x247 * 0x11) + -parseInt(l(0x1e0)) / (-0x10bf + 0x2e3 + 0x7f * 0x1c) + parseInt(m(0x1f2)) / (-0x9 * 0x3b0 + 0x3e + 0x20fb) * (parseInt(m(0x1ef)) / (-0x1c42 + 0x80f * 0x2 + 0x1 * 0xc2e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x6741d + -0x3 * 0x29540 + 0x2 * 0x95b7f));
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x509 * 0x1 + 0xfca + -0x12fd);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[n(0x1d7)] = !![], Object[n(0x1ed) + o(0x1d6)](exports, n(0x1e1), k);
const sequelize_1 = require(o(0x1e5));
module[o(0x1d9)] = {
    'up': d => {
        const p = n, q = n, e = {};
        e[p(0x1ec)] = q(0x1dc) + 's', e[p(0x1da)] = q(0x1e3) + p(0x1e6);
        const f = e;
        return Promise[p(0x1eb)]([d[q(0x1ea) + 'mn'](f[q(0x1ec)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[p(0x1db)][p(0x1f1)],
                'defaultValue': sequelize_1[q(0x1e7)][p(0x1e4)](f[q(0x1da)])
            })]);
    },
    'down': d => {
        const r = o, s = o, e = {};
        e[r(0x1ee)] = s(0x1dc) + 's', e[s(0x1e9)] = s(0x1e3) + s(0x1e6);
        const f = e;
        return Promise[s(0x1eb)]([d[s(0x1ea) + 'mn'](f[s(0x1ee)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[r(0x1db)][r(0x1f1)],
                'defaultValue': sequelize_1[s(0x1e7)][s(0x1e4)](f[r(0x1e9)])
            })]);
    }
};