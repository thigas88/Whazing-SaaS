'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x77)) / (0xab3 * -0x1 + -0x59 * -0x57 + -0x138b) * (-parseInt(l(0x73)) / (-0x1248 + 0x1829 + 0x9 * -0xa7)) + parseInt(l(0x67)) / (-0x11f2 + 0x13 * 0x49 + 0xc8a) + parseInt(l(0x7c)) / (-0x2f8 + -0x3e * -0x5 + 0x1c6) * (-parseInt(l(0x6c)) / (-0x196d + -0x1 * 0x26ce + 0x4040)) + parseInt(l(0x81)) / (-0xa59 * 0x3 + -0xf88 + -0x97 * -0x4f) + -parseInt(l(0x6f)) / (-0x1048 + -0x1 * -0x1381 + -0x332 * 0x1) * (-parseInt(m(0x6d)) / (-0x16e4 + 0x1a02 * 0x1 + -0x316)) + parseInt(l(0x71)) / (0x2a * -0xb + -0x1cd1 + 0x1ea8) + -parseInt(l(0x7f)) / (-0x703 * -0x3 + 0x11d6 + 0x26d5 * -0x1) * (parseInt(l(0x66)) / (0x2 * -0xf4d + -0x15bf + 0x3464));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4e7c4 * -0x2 + 0x62b16 + 0xcaa5b));
function a() {
    const t = [
        '__esModule',
        'Sequelize',
        '5NtKdUY',
        '48NhmtSF',
        'gen_random',
        '573083gFHvpr',
        'khCNg',
        '10391274uWtbsE',
        'erty',
        '186GvwclM',
        'zWdpY',
        'literal',
        'UUID',
        '12063OEVaWT',
        'all',
        'DataTypes',
        'GaQTA',
        'ApiConfigs',
        '839148FFoyBY',
        'defineProp',
        '_uuid()',
        '60CvwGHC',
        'value',
        '3727206bzlgOI',
        'changeColu',
        'sequelize',
        '6889674tnFQVt',
        '3510804LUntYK',
        'TjKwc',
        'exports'
    ];
    a = function () {
        return t;
    };
    return a();
}
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x635 + -0x17 * -0xcd + -0x183a);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[n(0x80)] = !![], Object[n(0x7d) + n(0x72)](exports, n(0x6a), k);
const sequelize_1 = require(o(0x83));
module[n(0x69)] = {
    'up': d => {
        const p = o, q = n, e = {};
        e[p(0x68)] = q(0x7b), e[p(0x74)] = q(0x6e) + q(0x7e);
        const f = e;
        return Promise[p(0x78)]([d[p(0x82) + 'mn'](f[q(0x68)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[q(0x79)][p(0x76)],
                'defaultValue': sequelize_1[q(0x6b)][p(0x75)](f[q(0x74)])
            })]);
    },
    'down': d => {
        const r = o, s = n, e = {};
        e[r(0x70)] = r(0x7b), e[s(0x7a)] = r(0x6e) + r(0x7e);
        const f = e;
        return Promise[r(0x78)]([d[s(0x82) + 'mn'](f[s(0x70)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[r(0x79)][r(0x76)],
                'defaultValue': sequelize_1[s(0x6b)][r(0x75)](f[s(0x7a)])
            })]);
    }
};