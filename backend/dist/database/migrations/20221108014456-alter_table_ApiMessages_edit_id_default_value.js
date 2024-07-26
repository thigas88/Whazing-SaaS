'use strict';
const n = b, o = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x449 + -0x8 * -0x64 + 0x3 * -0x242);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0xa6)) / (-0xa43 + 0x1c28 + -0x11e4) + -parseInt(m(0xb6)) / (0x251a + -0x4e9 * 0x3 + 0x19 * -0xe5) * (parseInt(m(0xbd)) / (-0x1f51 + 0x31f + -0x3 * -0x967)) + -parseInt(l(0xb2)) / (0xe3e + -0x1 * 0x1253 + -0x419 * -0x1) * (-parseInt(m(0xb4)) / (0x1064 + -0x1636 + -0x41 * -0x17)) + -parseInt(m(0xbb)) / (-0x16c3 + -0xa2f + -0x1a6 * -0x14) + -parseInt(m(0xbf)) / (0x1fc7 + 0x2159 + -0x4119) + -parseInt(l(0xbe)) / (0x1511 * 0x1 + 0x79d * -0x2 + -0x5cf * 0x1) * (parseInt(l(0xbc)) / (-0xf * 0xc7 + 0x25f8 + -0x1a46)) + parseInt(l(0xaf)) / (-0x1160 + -0x219e + -0xb8 * -0x47);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x11e26 + -0x640b + 0x3e494));
function a() {
    const t = [
        'all',
        'literal',
        '__esModule',
        'defineProp',
        '1278252FxtvFt',
        '9yfjyMV',
        '1086KMBWOs',
        '1394864kUtwJe',
        '702114tGOvnW',
        'padtY',
        'changeColu',
        'Sequelize',
        '278725Khafnw',
        'BKvYr',
        'sequelize',
        '_uuid()',
        'gen_random',
        'mMDzE',
        'erty',
        'EmDqW',
        'DataTypes',
        '10677690rMBXMI',
        'UUID',
        'exports',
        '408652yTIpso',
        'ApiMessage',
        '5fnvrPZ',
        'value',
        '1366mBCEBI'
    ];
    a = function () {
        return t;
    };
    return a();
}
const k = {};
k[n(0xb5)] = !![], Object[o(0xba) + n(0xac)](exports, o(0xb9), k);
const sequelize_1 = require(n(0xa8));
module[n(0xb1)] = {
    'up': d => {
        const p = n, q = n, e = {};
        e[p(0xad)] = q(0xb3) + 's', e[p(0xa3)] = p(0xaa) + p(0xa9);
        const f = e;
        return Promise[q(0xb7)]([d[q(0xa4) + 'mn'](f[q(0xad)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[p(0xae)][q(0xb0)],
                'defaultValue': sequelize_1[q(0xa5)][p(0xb8)](f[p(0xa3)])
            })]);
    },
    'down': d => {
        const r = n, s = n, e = {};
        e[r(0xab)] = s(0xb3) + 's', e[s(0xa7)] = s(0xaa) + s(0xa9);
        const f = e;
        return Promise[s(0xb7)]([d[r(0xa4) + 'mn'](f[r(0xab)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[s(0xae)][r(0xb0)],
                'defaultValue': sequelize_1[r(0xa5)][s(0xb8)](f[r(0xa7)])
            })]);
    }
};