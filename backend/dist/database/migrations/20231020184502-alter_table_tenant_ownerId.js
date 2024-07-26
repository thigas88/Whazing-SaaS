'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0xfb)) / (0x2 * -0x1e8 + -0x36e * 0xb + 0x298b) * (-parseInt(l(0xdd)) / (0x1523 * 0x1 + -0x22e * 0x8 + -0x69 * 0x9)) + parseInt(m(0xed)) / (0x12e + -0x2f * 0x5b + -0xea * -0x11) + -parseInt(l(0xf0)) / (-0x1 * -0x1a57 + -0xaf1 + 0x16 * -0xb3) + parseInt(m(0xe3)) / (-0x1093 * 0x1 + -0x70f + -0xad * -0x23) + parseInt(m(0xfc)) / (-0x9aa + -0x19ee * -0x1 + -0x103e) * (parseInt(l(0xf2)) / (-0x30d + -0x910 + -0x25 * -0x54)) + -parseInt(l(0xf4)) / (0x493 + -0x130f + 0xe84) + -parseInt(l(0xe0)) / (0xdbe + 0x3 * -0x2da + -0x527 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x473a2 + -0x1c1 * -0x1d7 + -0x31509));
const k = {};
k[n(0xf8)] = !![], Object[n(0xf9) + n(0xea)](exports, n(0xe5), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x161a + -0x1853 + -0x4f * -0xa);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const t = [
        '1675568AxkFLZ',
        'FpfvB',
        '338317TkYZHj',
        'sequelize',
        '632016SRalfR',
        'traint',
        'pFJIG',
        'wtHHk',
        'value',
        'defineProp',
        'gEvUA',
        '533774EztbVz',
        '36VeskNd',
        'Tenants',
        '2pEUDDw',
        'exports',
        'INTEGER',
        '5073228xwQraQ',
        'CASCADE',
        'ownerId',
        '2306795LPWIDP',
        'nerId_fkey',
        '__esModule',
        'changeColu',
        'all',
        'tXMzl',
        'Tenants_ow',
        'erty',
        'removeCons',
        'KHMdj',
        '233097swOSyf',
        'DataTypes',
        'VDdFf'
    ];
    a = function () {
        return t;
    };
    return a();
}
const sequelize_1 = require(o(0xf3));
module[o(0xde)] = {
    'up': d => {
        const p = n, q = o, e = {};
        e[p(0xec)] = p(0xfd), e[q(0xf6)] = p(0xe9) + q(0xe4), e[p(0xe8)] = p(0xe2), e[p(0xf7)] = q(0xe1);
        const f = e;
        return Promise[q(0xe7)]([
            d[p(0xeb) + q(0xf5)](f[q(0xec)], f[q(0xf6)]),
            d[q(0xe6) + 'mn'](f[q(0xec)], f[q(0xe8)], {
                'type': sequelize_1[p(0xee)][p(0xdf)],
                'references': {
                    'model': f[q(0xec)],
                    'key': 'id'
                },
                'onUpdate': f[q(0xf7)],
                'onDelete': f[q(0xf7)],
                'allowNull': !![]
            })
        ]);
    },
    'down': d => {
        const r = n, s = n, e = {};
        e[r(0xfa)] = r(0xfd), e[s(0xf1)] = r(0xe2), e[s(0xef)] = r(0xe1);
        const f = e;
        return Promise[r(0xe7)]([d[r(0xe6) + 'mn'](f[r(0xfa)], f[s(0xf1)], {
                'type': sequelize_1[s(0xee)][r(0xdf)],
                'references': {
                    'model': f[r(0xfa)],
                    'key': 'id'
                },
                'onUpdate': f[s(0xef)],
                'onDelete': f[r(0xef)],
                'allowNull': !![]
            })]);
    }
};