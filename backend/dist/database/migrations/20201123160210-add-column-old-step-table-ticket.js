'use strict';
const l = b, m = b;
function a() {
    const r = [
        'value',
        '901902CNTEeW',
        'NgcYz',
        'MxcSy',
        'StepsReply',
        'INTEGER',
        '7OTXsLw',
        '1063437bQHLGA',
        'Tickets',
        'all',
        '10502397kgqeSb',
        'oReplyId',
        'DataTypes',
        'exports',
        '6496256tAylgJ',
        'removeColu',
        'SET\x20NULL',
        '10996ZZaUIG',
        '1415ivwGGp',
        '7366164uUalNF',
        'nJesZ',
        '1976715EcYuof',
        'erty',
        'UUVdz',
        'oldStepAut',
        'sDseL',
        'sequelize',
        'EuXfi',
        'CASCADE',
        'defineProp',
        'addColumn',
        '__esModule',
        'fZIaa'
    ];
    a = function () {
        return r;
    };
    return a();
}
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(j(0xc1)) / (-0x2020 + 0x442 + -0x1bdf * -0x1) + -parseInt(j(0xbb)) / (0x4 * 0xd3 + 0x1e7 * 0x14 + -0x32e * 0xd) + parseInt(k(0xae)) / (0x2d7 * 0x5 + 0x1c0a + -0x2a3a) + parseInt(j(0xaa)) / (0x501 + 0x199f + -0xf4e * 0x2) * (parseInt(j(0xab)) / (0x3ec + -0x16e1 + -0x1 * -0x12fa)) + -parseInt(k(0xac)) / (-0xd3 * 0x9 + 0x1 * -0x827 + 0xf98) * (parseInt(j(0xc0)) / (-0x24cd * 0x1 + 0x11ca + -0x2 * -0x985)) + parseInt(j(0xa7)) / (-0x1d5 * 0x2 + 0x1add + -0x3 * 0x7b9) + parseInt(k(0xc4)) / (0x968 * -0x4 + -0x214a + 0x1bb * 0x29);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4a690 + 0x3b867 * -0x4 + 0x1dd007));
const i = {};
i[l(0xba)] = !![], Object[l(0xb6) + l(0xaf)](exports, m(0xb8), i);
const sequelize_1 = require(m(0xb3));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1256 + -0x8 * -0x4b1 + -0x13 * 0x2e8);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[l(0xa6)] = {
    'up': d => {
        const n = l, o = m, e = {};
        e[n(0xb0)] = n(0xc2), e[n(0xb9)] = n(0xb1) + o(0xc5), e[o(0xbc)] = o(0xbe), e[n(0xb4)] = n(0xb5), e[n(0xad)] = n(0xa9);
        const f = e;
        return Promise[o(0xc3)]([d[o(0xb7)](f[n(0xb0)], f[n(0xb9)], {
                'type': sequelize_1[n(0xc6)][o(0xbf)],
                'references': {
                    'model': f[o(0xbc)],
                    'key': 'id'
                },
                'onUpdate': f[o(0xb4)],
                'onDelete': f[n(0xad)],
                'allowNull': !![],
                'defaultValue': null
            })]);
    },
    'down': d => {
        const p = m, q = m, e = {};
        e[p(0xbd)] = p(0xc2), e[p(0xb2)] = p(0xb1) + q(0xc5);
        const f = e;
        return d[q(0xa8) + 'mn'](f[q(0xbd)], f[q(0xb2)]);
    }
};