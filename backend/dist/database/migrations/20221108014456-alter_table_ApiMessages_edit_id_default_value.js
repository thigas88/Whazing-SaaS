'use strict';
function a() {
    const t = [
        '_uuid()',
        '__esModule',
        'UUID',
        'sequelize',
        '2899744FznslM',
        'JKNYk',
        '40ELJsGj',
        '141582HqbsVQ',
        'all',
        'erty',
        '379722dfIQHR',
        '39WdqmuN',
        'ApiMessage',
        'literal',
        'gen_random',
        'value',
        'cIajG',
        'changeColu',
        'Sequelize',
        '5405736QgUfAi',
        '55vbhNLl',
        'gyfYY',
        '3061764dqguED',
        'exports',
        '233490qjLhoQ',
        'XoEkr',
        '74564NrXnlF',
        'DataTypes',
        'defineProp'
    ];
    a = function () {
        return t;
    };
    return a();
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0xac)) / (0x1621 + 0x8d7 * -0x1 + 0x13 * -0xb3) + -parseInt(l(0xae)) / (-0x3e1 + -0x32b * -0x1 + 0x17 * 0x8) * (parseInt(l(0x9f)) / (0xb70 + 0x1 * -0xbe9 + -0x3e * -0x2)) + parseInt(l(0x98)) / (0x4e * -0x62 + -0x7 * -0x502 + -0x52e) + parseInt(m(0xa8)) / (0x21 * 0x113 + 0x7d5 * -0x2 + -0x17 * 0xdc) * (-parseInt(m(0x9e)) / (0x1320 + -0x19ae + 0x694)) + -parseInt(l(0x9b)) / (-0x25b9 + 0x2345 + 0x27b) + -parseInt(l(0xa7)) / (0x8ae + 0x12f * -0x1 + -0x777) + -parseInt(m(0xaa)) / (0x1525 * -0x1 + 0x21a6 + -0xc78) * (-parseInt(m(0x9a)) / (0x3c1 + 0x102 + -0x4b9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x863b8 + -0x1 * 0x8e09c + 0x1804a0));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x10 * -0x6d + 0x1 * -0x138e + 0xd51);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[n(0xa3)] = !![], Object[n(0x93) + o(0x9d)](exports, o(0x95), k);
const sequelize_1 = require(n(0x97));
module[n(0xab)] = {
    'up': d => {
        const p = o, q = n, e = {};
        e[p(0xa9)] = p(0xa0) + 's', e[q(0xa4)] = q(0xa2) + p(0x94);
        const f = e;
        return Promise[p(0x9c)]([d[p(0xa5) + 'mn'](f[p(0xa9)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[q(0xaf)][p(0x96)],
                'defaultValue': sequelize_1[p(0xa6)][p(0xa1)](f[p(0xa4)])
            })]);
    },
    'down': d => {
        const r = o, s = o, e = {};
        e[r(0x99)] = s(0xa0) + 's', e[r(0xad)] = r(0xa2) + r(0x94);
        const f = e;
        return Promise[s(0x9c)]([d[r(0xa5) + 'mn'](f[r(0x99)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[r(0xaf)][r(0x96)],
                'defaultValue': sequelize_1[s(0xa6)][s(0xa1)](f[s(0xad)])
            })]);
    }
};