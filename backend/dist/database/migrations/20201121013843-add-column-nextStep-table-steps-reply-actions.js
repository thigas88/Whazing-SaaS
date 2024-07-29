'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5 * 0x60f + -0x37c + -0x19ff);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const q = [
        'mdleX',
        '455116nFpdAD',
        'addColumn',
        'INTEGER',
        '4kWeZCa',
        'Actions',
        '30pPVmRC',
        'exports',
        'defineProp',
        '2183892sDxNZi',
        'nextStep',
        'jIjlD',
        'sequelize',
        'erty',
        '6930100zqzHQz',
        'StepsReply',
        '3339119uTWAjR',
        '44128733kBLhSI',
        'removeColu',
        'vcxwQ',
        '90549rwwddi',
        'FBZEd',
        'RjPhA',
        '__esModule',
        'bzIPb',
        '6UXelfJ',
        '694484BEdpQe',
        '408yPAivE',
        'CASCADE',
        'value',
        'DataTypes'
    ];
    a = function () {
        return q;
    };
    return a();
}
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0xd8)) / (0x3 * 0x5bb + -0x4 * 0x2f3 + 0x5c * -0xf) + parseInt(i(0xe1)) / (-0x962 * -0x2 + 0x122e + -0x24f0) * (-parseInt(i(0xe6)) / (0x1 * -0x24cf + 0x3ed * -0x8 + 0x443a)) + -parseInt(j(0xde)) / (-0x37f + 0x2 * -0x77b + 0x1279) * (-parseInt(j(0xe3)) / (-0x104e * 0x1 + -0x1 * 0xc1a + 0x1c6d)) + parseInt(i(0xd7)) / (-0xf38 + -0x2592 + -0x1a * -0x208) * (-parseInt(i(0xed)) / (-0x791 + -0x1c1c + 0x23b4)) + -parseInt(j(0xd9)) / (0x1c8f * -0x1 + 0xdc6 + 0xed1 * 0x1) * (parseInt(i(0xd2)) / (0xf08 + -0xb7f + 0x2 * -0x1c0)) + -parseInt(j(0xeb)) / (-0x1f2 * -0x1 + 0x3 * 0xb26 + -0x235a) + parseInt(i(0xee)) / (-0xa2f + -0x633 + 0x106d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x25f3b + -0x17a502 + 0x113431 * 0x2));
const g = {};
g[k(0xdb)] = !![], Object[k(0xe5) + l(0xea)](exports, k(0xd5), g);
const sequelize_1 = require(k(0xe9));
module[l(0xe4)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0xe8)] = m(0xec) + n(0xe2), e[n(0xd3)] = n(0xe7), e[n(0xd4)] = m(0xec), e[n(0xd1)] = n(0xda);
        const f = e;
        return d[m(0xdf)](f[n(0xe8)], f[n(0xd3)], {
            'type': sequelize_1[m(0xdc)][n(0xe0)],
            'references': {
                'model': f[n(0xd4)],
                'key': 'id'
            },
            'onUpdate': f[n(0xd1)],
            'onDelete': f[m(0xd1)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0xd6)] = o(0xec) + p(0xe2), e[p(0xdd)] = o(0xe7);
        const f = e;
        return d[p(0xd0) + 'mn'](f[p(0xd6)], f[o(0xdd)]);
    }
};