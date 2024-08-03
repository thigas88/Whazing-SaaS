'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x207)) / (-0x140e * -0x1 + -0x1511 * 0x1 + 0x104 * 0x1) * (parseInt(l(0x1fa)) / (0x1409 * -0x1 + -0x1993 + 0x1 * 0x2d9e)) + parseInt(l(0x1f4)) / (0x1 * -0x2421 + 0xd48 + -0x4c * -0x4d) + parseInt(m(0x1fd)) / (0x87b * 0x1 + -0xf62 + 0x6eb) * (parseInt(l(0x201)) / (-0xdf1 + -0x2546 + 0x333c)) + parseInt(m(0x1fb)) / (0xc9a + -0x14c5 * 0x1 + 0x831) * (parseInt(m(0x1f3)) / (0x29 * -0x4d + 0x1 * 0x547 + 0x715)) + parseInt(l(0x20d)) / (0x11c5 * -0x1 + 0x7e1 * 0x3 + -0x5d6) * (-parseInt(l(0x212)) / (0x16cf + 0x4 * -0x3c6 + -0x3d7 * 0x2)) + -parseInt(m(0x210)) / (-0x19ab * 0x1 + -0x23 * 0x42 + 0x22bb) + parseInt(m(0x1f2)) / (-0x89b + 0x103 + 0x1 * 0x7a3) * (parseInt(l(0x202)) / (0x535 + 0x1e57 + -0x20 * 0x11c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1d * 0x209c + -0x644 * 0x1b0 + 0x1 * 0x130f6d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x11c + -0x5e3 + 0x8ee);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
function a() {
    const t = [
        'Tenants',
        'KghcA',
        '5942816TCgoVI',
        'gIjXx',
        'defineProp',
        '5909370bIvlrg',
        'all',
        '9pZNNjK',
        'value',
        'nerId_fkey',
        'traint',
        '11QxamIC',
        '7TOKmtQ',
        '528054NqyNxZ',
        'DLhlO',
        'pqIOE',
        'erty',
        'sequelize',
        'ownerId',
        '72872jPIOnE',
        '574206tcyztC',
        'debpC',
        '968016XGIsUU',
        'DVIMK',
        'DataTypes',
        'cYMxB',
        '10SeXDGh',
        '6459972XcYCzi',
        'Tenants_ow',
        '__esModule',
        'removeCons',
        'changeColu',
        '23vikLLr',
        'CASCADE',
        'exports',
        'INTEGER'
    ];
    a = function () {
        return t;
    };
    return a();
}
k[n(0x1ef)] = !![], Object[n(0x20f) + n(0x1f7)](exports, o(0x204), k);
const sequelize_1 = require(n(0x1f8));
module[o(0x209)] = {
    'up': d => {
        const p = o, q = n, e = {};
        e[p(0x200)] = q(0x20b), e[q(0x1f6)] = q(0x203) + p(0x1f0), e[p(0x1f5)] = p(0x1f9), e[q(0x20c)] = p(0x208);
        const f = e;
        return Promise[p(0x211)]([
            d[p(0x205) + q(0x1f1)](f[p(0x200)], f[p(0x1f6)]),
            d[p(0x206) + 'mn'](f[q(0x200)], f[q(0x1f5)], {
                'type': sequelize_1[p(0x1ff)][p(0x20a)],
                'references': {
                    'model': f[q(0x200)],
                    'key': 'id'
                },
                'onUpdate': f[q(0x20c)],
                'onDelete': f[p(0x20c)],
                'allowNull': !![]
            })
        ]);
    },
    'down': d => {
        const r = o, s = o, e = {};
        e[r(0x20e)] = s(0x20b), e[r(0x1fc)] = s(0x1f9), e[s(0x1fe)] = s(0x208);
        const f = e;
        return Promise[r(0x211)]([d[s(0x206) + 'mn'](f[s(0x20e)], f[r(0x1fc)], {
                'type': sequelize_1[r(0x1ff)][r(0x20a)],
                'references': {
                    'model': f[r(0x20e)],
                    'key': 'id'
                },
                'onUpdate': f[r(0x1fe)],
                'onDelete': f[s(0x1fe)],
                'allowNull': !![]
            })]);
    }
};