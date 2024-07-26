'use strict';
const l = b, m = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2178 + -0x36e * -0xb + -0xd * 0x565);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0x11e)) / (-0x1b3c + 0x4 * 0x159 + 0x7 * 0x31f) * (-parseInt(j(0x129)) / (0x94 * 0x41 + 0x1c7b + -0x420d)) + -parseInt(k(0x130)) / (-0x1fbc + -0x2a9 + 0x2268) + parseInt(k(0x11d)) / (0x2170 + 0xa93 + 0x7 * -0x649) + parseInt(k(0x128)) / (-0x1 * 0x369 + -0x1c21 + 0x1f8f) * (-parseInt(k(0x131)) / (-0x290 + -0x1b65 + -0x19 * -0x133)) + -parseInt(k(0x132)) / (-0xb65 + 0x4 * 0x53d + -0x988) * (-parseInt(j(0x111)) / (0x3a6 + -0xe * -0x26c + -0x2586)) + -parseInt(k(0x116)) / (-0x261 * -0xa + 0x149a + 0xf * -0x2f5) * (-parseInt(j(0x11c)) / (0x8d6 * -0x3 + -0x1 * 0x266f + -0xf * -0x455)) + parseInt(j(0x11a)) / (0xfff + -0xbd3 * 0x1 + 0x1 * -0x421);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x54c5 * 0x27 + 0x392 * 0x204 + -0xacea5));
function a() {
    const r = [
        'jwViX',
        'CASCADE',
        'ROHBv',
        'PvBgD',
        'all',
        '4695uUrTgA',
        '2197660BfoaqU',
        'value',
        'sequelize',
        'StepsReply',
        'Tickets',
        '__esModule',
        'PFwBr',
        '2774460PDXDxM',
        '4062ztGsAu',
        '1967gSFEQi',
        'pTZZM',
        '17632vaztQo',
        'oReplyId',
        'INTEGER',
        'removeColu',
        'SET\x20NULL',
        '9PllELi',
        'JoeGE',
        'oldStepAut',
        'HzLon',
        '14122669AdyPPZ',
        'addColumn',
        '3234310CoCisj',
        '4169684djMpfB',
        '1BqUkmI',
        'DataTypes',
        'defineProp',
        'exports',
        'erty'
    ];
    a = function () {
        return r;
    };
    return a();
}
const i = {};
i[l(0x12a)] = !![], Object[l(0x120) + l(0x122)](exports, l(0x12e), i);
const sequelize_1 = require(m(0x12b));
module[l(0x121)] = {
    'up': d => {
        const n = l, o = l, e = {};
        e[n(0x117)] = o(0x12d), e[o(0x119)] = n(0x118) + n(0x112), e[o(0x126)] = n(0x12c), e[o(0x133)] = o(0x124), e[n(0x125)] = o(0x115);
        const f = e;
        return Promise[o(0x127)]([d[o(0x11b)](f[o(0x117)], f[n(0x119)], {
                'type': sequelize_1[o(0x11f)][n(0x113)],
                'references': {
                    'model': f[n(0x126)],
                    'key': 'id'
                },
                'onUpdate': f[n(0x133)],
                'onDelete': f[n(0x125)],
                'allowNull': !![],
                'defaultValue': null
            })]);
    },
    'down': d => {
        const p = m, q = l, e = {};
        e[p(0x123)] = p(0x12d), e[q(0x12f)] = q(0x118) + q(0x112);
        const f = e;
        return d[p(0x114) + 'mn'](f[q(0x123)], f[q(0x12f)]);
    }
};