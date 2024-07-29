'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x47 * 0x32 + 0x532 + 0x916 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x6e)) / (0x3 * 0x6e1 + -0x1c95 + 0xb9 * 0xb) * (parseInt(j(0x79)) / (0xf * 0x174 + 0x8 * 0x37b + -0x31a2)) + -parseInt(i(0x75)) / (-0x2 * 0xaae + -0x1119 + -0x2 * -0x133c) + parseInt(i(0x7e)) / (-0x9 * 0x23d + 0x2436 + -0x100d * 0x1) + -parseInt(j(0x6c)) / (0x1661 + 0x25 * 0x11 + -0x1 * 0x18d1) + -parseInt(i(0x83)) / (-0x10f7 + -0x16cc + 0x1 * 0x27c9) + parseInt(i(0x80)) / (-0x1f4d * -0x1 + 0xd * 0x287 + -0x4021) + parseInt(j(0x7d)) / (0x86d + -0x2f7 + -0x2b7 * 0x2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1a31b * 0x4 + 0x4b5 + 0xb58d7));
function a() {
    const q = [
        'sequelize',
        '1602FmcBDo',
        'xpgoP',
        'RobZF',
        'addColumn',
        '4162480Sfbsyv',
        '129096oqogLu',
        'exports',
        '1969779PdEYED',
        'defineProp',
        'value',
        '272154MMyHuT',
        'pMdXR',
        'Messages',
        'STRING',
        'CASCADE',
        '1567065rbHRGL',
        'NKZnp',
        '399hAJjRy',
        'erty',
        'khOON',
        'removeColu',
        'SET\x20NULL',
        '__esModule',
        'quotedMsgI',
        '1437384AUIFFO',
        'lmuJb',
        'DataTypes'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0x82)] = !![], Object[l(0x81) + l(0x6f)](exports, k(0x73), g);
const sequelize_1 = require(k(0x78));
module[l(0x7f)] = {
    'up': d => {
        const m = l, n = l, e = {};
        e[m(0x6d)] = m(0x85), e[n(0x70)] = m(0x74) + 'd', e[m(0x76)] = n(0x6b), e[m(0x7b)] = m(0x72);
        const f = e;
        return d[n(0x7c)](f[n(0x6d)], f[m(0x70)], {
            'type': sequelize_1[m(0x77)][m(0x6a)],
            'references': {
                'model': f[m(0x6d)],
                'key': 'id'
            },
            'onUpdate': f[n(0x76)],
            'onDelete': f[m(0x7b)]
        });
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0x84)] = o(0x85), e[o(0x7a)] = o(0x74) + 'd';
        const f = e;
        return d[p(0x71) + 'mn'](f[p(0x84)], f[p(0x7a)]);
    }
};