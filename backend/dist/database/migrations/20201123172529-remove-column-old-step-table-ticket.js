'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x73 * 0x43 + 0x61f + 0x23 * 0xbc);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x1ba)) / (0xc * 0xd6 + 0x794 + -0x119b) + parseInt(i(0x1d8)) / (-0x223 * -0x5 + -0x1a26 + -0xf79 * -0x1) + parseInt(i(0x1d4)) / (-0x19a6 + 0x1470 + 0x539) * (parseInt(j(0x1d3)) / (-0x1083 + 0x147 * 0x1d + -0x1484)) + -parseInt(i(0x1ca)) / (0x11fc + 0x1 * -0x109d + 0x2 * -0xad) + parseInt(i(0x1d2)) / (0x1fd1 + -0x1614 + -0x9b7) * (-parseInt(i(0x1be)) / (0x3 * 0x57b + 0x128 * 0x1a + -0x2e7a)) + parseInt(i(0x1bf)) / (0x180a + -0x14e4 + -0x10a * 0x3) + -parseInt(j(0x1cb)) / (0x1 * -0xd46 + 0x1148 + -0x153 * 0x3) * (-parseInt(i(0x1c9)) / (-0x567 * 0x6 + -0xe2 * -0x14 + 0xecc));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4 * -0x11638 + 0x3b2c0 + 0xb72a6));
const g = {};
function a() {
    const q = [
        'DataTypes',
        '10eQVirK',
        '7007275dJbigI',
        '13566141hUdDBB',
        'dtJhG',
        'removeColu',
        'StepsReply',
        'zxORW',
        'value',
        'all',
        '36aZHqUQ',
        '2151952YPiIWK',
        '3aeBaZC',
        'wDXkC',
        '__esModule',
        'oldStepAut',
        '1063154YudRGn',
        'SET\x20NULL',
        'oReplyId',
        'KZaQH',
        '444743ZVwApv',
        'defineProp',
        'sequelize',
        'exports',
        '903595VtVWCy',
        '6012096zyDFYz',
        'CASCADE',
        'erty',
        'Tickets',
        'Yaxnz',
        'addColumn',
        'geFgv',
        'kZnTZ',
        'INTEGER'
    ];
    a = function () {
        return q;
    };
    return a();
}
g[k(0x1d0)] = !![], Object[l(0x1bb) + l(0x1c1)](exports, k(0x1d6), g);
const sequelize_1 = require(k(0x1bc));
module[l(0x1bd)] = {
    'up': d => {
        const m = l, n = k, e = {};
        e[m(0x1cf)] = m(0x1c2), e[m(0x1d5)] = n(0x1d7) + n(0x1da);
        const f = e;
        return Promise[n(0x1d1)]([d[m(0x1cd) + 'mn'](f[n(0x1cf)], f[m(0x1d5)])]);
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0x1c5)] = o(0x1c2), e[o(0x1cc)] = p(0x1d7) + o(0x1da), e[p(0x1c3)] = o(0x1ce), e[o(0x1c6)] = p(0x1c0), e[o(0x1db)] = p(0x1d9);
        const f = e;
        return d[o(0x1c4)](f[p(0x1c5)], f[p(0x1cc)], {
            'type': sequelize_1[o(0x1c8)][p(0x1c7)],
            'references': {
                'model': f[o(0x1c3)],
                'key': 'id'
            },
            'onUpdate': f[o(0x1c6)],
            'onDelete': f[p(0x1db)],
            'allowNull': !![],
            'defaultValue': null
        });
    }
};