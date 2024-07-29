'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x18e)) / (0x25 * 0x1 + 0x1709 + 0x11 * -0x15d) * (parseInt(j(0x19d)) / (0xd * 0x43 + 0xfe5 + 0x66e * -0x3)) + parseInt(i(0x1a8)) / (0x22 * -0x93 + 0x1 * -0x6b9 + 0x2 * 0xd21) * (parseInt(i(0x18f)) / (-0x1 * 0xa8d + 0x170 + -0x1 * -0x921)) + -parseInt(j(0x1a1)) / (-0x10 + 0x1a34 + 0x1a1f * -0x1) * (parseInt(j(0x19b)) / (0x6 * -0x61a + -0x359 * 0x3 + 0x1 * 0x2ead)) + parseInt(i(0x1a3)) / (-0x25cc + 0x18f1 + 0xce2) * (-parseInt(j(0x1a6)) / (0xb8c + -0x1854 + 0xcd0)) + parseInt(j(0x1aa)) / (-0x2c * -0x5b + -0x12cf + 0x4 * 0xcd) * (parseInt(i(0x1ad)) / (-0x258e + -0x1bbd + 0x4155)) + -parseInt(i(0x190)) / (0x9 * -0xde + -0x11bd * -0x1 + -0x9e4) * (-parseInt(j(0x18c)) / (-0x187e + -0x208 * 0x6 + 0x24ba)) + -parseInt(j(0x198)) / (0x12a3 * -0x1 + 0x1b6 + 0x10fa) * (parseInt(i(0x1ab)) / (-0xacd + -0x3a0 + 0x151 * 0xb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x392f0 * -0x4 + 0xe386c + 0x755f5));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xabe + -0x1547 + 0xc13);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
function a() {
    const q = [
        'ChatFlow',
        'HJxmK',
        'CASCADE',
        'chatFlowId',
        '__esModule',
        'RczbF',
        '1758016TFyIAS',
        'OnUGs',
        'INTEGER',
        '342mJFbXF',
        'sequelize',
        '6oITdtN',
        'exports',
        'addColumn',
        'SET\x20NULL',
        '62350Irwmne',
        'Whatsapps',
        '7637mBxADU',
        'otSbq',
        'DKlbj',
        '1384aDDigj',
        'JDEhE',
        '339PuvQie',
        'erty',
        '18HimkTG',
        '28gbLOcG',
        'removeColu',
        '608450LoslJr',
        'dTrHP',
        'value',
        '304296ckzoPM',
        'DataTypes',
        '216083cgOhoW',
        '26516KkFNYU',
        '55EyZUUD',
        'defineProp'
    ];
    a = function () {
        return q;
    };
    return a();
}
g[k(0x18b)] = !![], Object[l(0x191) + k(0x1a9)](exports, k(0x196), g);
const sequelize_1 = require(k(0x19c));
module[k(0x19e)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0x193)] = m(0x1a2), e[m(0x199)] = m(0x195), e[n(0x197)] = n(0x192), e[m(0x18a)] = m(0x194), e[n(0x1a4)] = n(0x1a0);
        const f = e;
        return d[m(0x19f)](f[n(0x193)], f[n(0x199)], {
            'type': sequelize_1[n(0x18d)][n(0x19a)],
            'references': {
                'model': f[n(0x197)],
                'key': 'id'
            },
            'onUpdate': f[n(0x18a)],
            'onDelete': f[m(0x1a4)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x1a5)] = o(0x1a2), e[p(0x1a7)] = o(0x195);
        const f = e;
        return d[o(0x1ac) + 'mn'](f[o(0x1a5)], f[o(0x1a7)]);
    }
};