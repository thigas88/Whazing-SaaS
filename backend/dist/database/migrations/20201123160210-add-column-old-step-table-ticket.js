'use strict';
function a() {
    const r = [
        'StepsReply',
        'defineProp',
        '916LuFvdI',
        'VioUe',
        'SET\x20NULL',
        'PMANW',
        'value',
        '24IhlHML',
        '11872670rXTXnw',
        '__esModule',
        'INTEGER',
        'ElZpK',
        '2870190SqwDkx',
        'yBBGH',
        'oReplyId',
        '1961078onNZCM',
        'JglYE',
        'all',
        'removeColu',
        '732177SphsSn',
        'CASCADE',
        'Tickets',
        'UZsSa',
        'addColumn',
        'gpLcE',
        '1654510fjbHSj',
        'DataTypes',
        'exports',
        'erty',
        '862748yPzAqi',
        '7725fnlnGS',
        '1gTkxTl',
        'oldStepAut',
        'sequelize'
    ];
    a = function () {
        return r;
    };
    return a();
}
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(j(0xb8)) / (-0x1ced + -0x117b + -0x2e69 * -0x1) * (parseInt(j(0xb6)) / (0x1504 + 0x5d9 + -0x55f * 0x5)) + parseInt(j(0xb7)) / (-0x25a4 + -0x18b7 + -0x14ca * -0x3) * (parseInt(k(0xbd)) / (-0x6a5 + -0x1538 * -0x1 + 0xe8f * -0x1)) + parseInt(j(0xb2)) / (-0x246c + -0x1e3 + -0x1be * -0x16) + parseInt(k(0xc7)) / (0x1d29 + -0x1 * 0x252d + -0xe * -0x93) + parseInt(j(0xa8)) / (0x1e56 + 0x87 * -0x15 + -0x133c) + parseInt(j(0xc2)) / (-0x1f45 + -0x2 * 0x937 + 0x31bb) * (parseInt(j(0xac)) / (-0x9ca + 0x2 * 0xf09 + -0x143f)) + -parseInt(k(0xc3)) / (-0x11f4 + 0xb4e + -0x358 * -0x2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4 * 0x8516 + -0x4a89 * 0x1f + -0x8a7 * -0x157));
const i = {};
i[l(0xc1)] = !![], Object[m(0xbc) + m(0xb5)](exports, m(0xc4), i);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x82e * -0x2 + 0x1 * 0x8a3 + 0x4c * -0x52);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(l(0xba));
module[l(0xb4)] = {
    'up': d => {
        const n = l, o = l, e = {};
        e[n(0xc0)] = n(0xae), e[n(0xa9)] = o(0xb9) + n(0xa7), e[o(0xbe)] = o(0xbb), e[o(0xaf)] = o(0xad), e[n(0xc8)] = o(0xbf);
        const f = e;
        return Promise[n(0xaa)]([d[n(0xb0)](f[n(0xc0)], f[o(0xa9)], {
                'type': sequelize_1[n(0xb3)][n(0xc5)],
                'references': {
                    'model': f[n(0xbe)],
                    'key': 'id'
                },
                'onUpdate': f[o(0xaf)],
                'onDelete': f[o(0xc8)],
                'allowNull': !![],
                'defaultValue': null
            })]);
    },
    'down': d => {
        const p = m, q = m, e = {};
        e[p(0xb1)] = q(0xae), e[p(0xc6)] = q(0xb9) + p(0xa7);
        const f = e;
        return d[q(0xab) + 'mn'](f[p(0xb1)], f[p(0xc6)]);
    }
};