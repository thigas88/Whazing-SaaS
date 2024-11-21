'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0x1ad)) / (0x91b * 0x4 + 0x1455 + -0x38c0) + parseInt(j(0x1a9)) / (-0x1 * 0xe95 + 0x5d5 + 0x2 * 0x461) + parseInt(k(0x1b0)) / (-0x1 * -0x47e + -0x23a8 * 0x1 + 0x1f2d) * (-parseInt(j(0x1ba)) / (0x11a * 0x6 + 0xb11 * 0x2 + 0x1cba * -0x1)) + -parseInt(j(0x1a7)) / (0x10e8 + 0x10b6 + -0x1 * 0x2199) + -parseInt(j(0x1af)) / (-0x4 * -0x274 + 0xb5e + -0x1528 * 0x1) + parseInt(k(0x1b3)) / (-0x1bb3 + 0xb * 0x1f7 + 0x61d) + -parseInt(k(0x1b8)) / (-0x13d * 0x1a + 0x2350 * -0x1 + -0x6c1 * -0xa);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x823 * 0x225 + -0xb93 * 0x11b + 0x275051));
function a() {
    const r = [
        '543265aKQWfO',
        'wNcVH',
        '1327006CTnSbu',
        'value',
        'closedAt',
        'LrzcL',
        '938396aHZKgj',
        'QGzoz',
        '6603870tLCyea',
        '31350xslNPV',
        'removeColu',
        'addColumn',
        '3725589HEMdqP',
        'defineProp',
        'DataTypes',
        'lnSYK',
        'Tickets',
        '553672xnbHJZ',
        'DATE',
        '100FVRbQK',
        'exports',
        'sequelize',
        'all',
        'erty',
        '__esModule'
    ];
    a = function () {
        return r;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4e6 * 0x7 + -0x1705 + 0x3af3 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const i = {};
i[l(0x1aa)] = !![], Object[m(0x1b4) + l(0x1a5)](exports, l(0x1a6), i);
const sequelize_1 = require(m(0x1bc));
module[m(0x1bb)] = {
    'up': d => {
        const n = m, o = l, e = {};
        e[n(0x1ac)] = n(0x1b7), e[o(0x1b6)] = n(0x1ab);
        const f = e;
        return Promise[n(0x1a4)]([d[n(0x1b1) + 'mn'](f[o(0x1ac)], f[o(0x1b6)])]);
    },
    'down': d => {
        const p = m, q = m, e = {};
        e[p(0x1a8)] = p(0x1b7), e[q(0x1ae)] = p(0x1ab);
        const f = e;
        return Promise[q(0x1a4)]([d[q(0x1b2)](f[p(0x1a8)], f[p(0x1ae)], {
                'type': sequelize_1[q(0x1b5)][p(0x1b9)](),
                'allowNull': !![],
                'defaultValue': null
            })]);
    }
};