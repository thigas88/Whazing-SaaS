'use strict';
const k = b, l = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x907 + 0x130d + -0xd29 * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x1c5)) / (-0x47 * 0x3b + -0x4 * 0x8e1 + 0x33e2 * 0x1) * (-parseInt(j(0x1c7)) / (0x183e + -0x5 * 0xf6 + -0x6 * 0x33d)) + parseInt(i(0x1cb)) / (0xdcc + -0x115 * 0x5 + -0x20 * 0x43) + parseInt(i(0x1dc)) / (0xe * 0x103 + -0x11 * -0x3e + 0x1 * -0x1244) + -parseInt(j(0x1df)) / (-0x1 * -0xf6d + 0x2559 + -0xb9 * 0x49) * (-parseInt(i(0x1c8)) / (-0xb * -0x25 + -0x1 * -0x16ed + -0x187e)) + -parseInt(i(0x1d8)) / (-0x211 + -0x60a + 0x6 * 0x15b) + -parseInt(i(0x1cf)) / (-0xb1e + -0x8 * -0x2f6 + -0x1e * 0x6b) * (parseInt(j(0x1c6)) / (-0x26b9 + 0xdb * 0x5 + 0x227b)) + parseInt(j(0x1d1)) / (-0x2384 + 0x1d77 + 0x617 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x28b * 0x653 + 0x19aebb + -0x3fdfd * 0x7));
const g = {};
function a() {
    const q = [
        '1463124QSIpQZ',
        'Messages',
        'INTEGER',
        '__esModule',
        '6448gbYjbU',
        'CASCADE',
        '2858140xSAGvf',
        'Contacts',
        'defineProp',
        'BryuV',
        'ctId',
        'addColumn',
        'HUiHJ',
        '2215241RsrxMh',
        'qvOVS',
        'LTCFl',
        'btqMk',
        '4547532jhEbKa',
        'erty',
        'sequelize',
        '111515NyAvlb',
        'exports',
        'DataTypes',
        'vcardConta',
        'removeColu',
        '375UgWdRl',
        '18351xpsiwr',
        '3548CqgTAf',
        '78ssZoSk',
        'value',
        'uHYUi'
    ];
    a = function () {
        return q;
    };
    return a();
}
g[k(0x1c9)] = !![], Object[k(0x1d3) + k(0x1dd)](exports, l(0x1ce), g);
const sequelize_1 = require(l(0x1de));
module[l(0x1e0)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0x1ca)] = m(0x1cc), e[m(0x1da)] = n(0x1c3) + m(0x1d5), e[m(0x1d9)] = n(0x1d2), e[n(0x1d4)] = m(0x1d0);
        const f = e;
        return d[m(0x1d6)](f[n(0x1ca)], f[m(0x1da)], {
            'type': sequelize_1[m(0x1c2)][n(0x1cd)],
            'references': {
                'model': f[n(0x1d9)],
                'key': 'id'
            },
            'onUpdate': f[m(0x1d4)],
            'onDelete': f[m(0x1d4)]
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x1db)] = p(0x1cc), e[o(0x1d7)] = p(0x1c3) + p(0x1d5);
        const f = e;
        return d[o(0x1c4) + 'mn'](f[o(0x1db)], f[o(0x1d7)]);
    }
};