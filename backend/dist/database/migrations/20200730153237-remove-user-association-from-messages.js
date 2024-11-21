'use strict';
const k = b, l = b;
function a() {
    const q = [
        'RNIaM',
        '44PXuiaN',
        'INTEGER',
        'CASCADE',
        'HQHnJ',
        '262990YMCuMP',
        '15VZetzE',
        '176TIeXVX',
        'DataTypes',
        '279tAiHOj',
        '__esModule',
        '111272pwNUMD',
        'DMjYC',
        '1982824IIEPhk',
        'Messages',
        'Users',
        '2624676SrtRTO',
        'userId',
        'cvfMY',
        'PqNXZ',
        'value',
        '221842oFsEcb',
        '7829862ycufdU',
        'erty',
        '5lxzFKE',
        '891838VFSEfC',
        'sequelize',
        'qLqQZ',
        'addColumn',
        'SET\x20NULL',
        'aXVrs',
        'exports',
        'removeColu',
        'defineProp'
    ];
    a = function () {
        return q;
    };
    return a();
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x189)) / (-0x1cb9 + -0x4 * -0x4a3 + 0xa2e) + parseInt(i(0x185)) / (0xec1 + 0x2240 + -0x30ff * 0x1) * (-parseInt(j(0x176)) / (-0x11e * 0xd + 0x8d * -0x10 + 0x1759 * 0x1)) + -parseInt(j(0x17d)) / (0x5 * -0x6dc + -0x129c + 0xd3b * 0x4) * (parseInt(i(0x188)) / (0x1c95 + -0x2027 + 0x397)) + parseInt(i(0x186)) / (0x212c + -0x843 * 0x1 + -0x17 * 0x115) + parseInt(i(0x17b)) / (0x1 * 0x17c8 + 0x17e8 + -0x2fa9) * (-parseInt(i(0x177)) / (-0x1ced + 0x3 * -0x507 + 0x2c0a)) + parseInt(j(0x179)) / (0x1a2f + 0x3 * -0xad9 + -0x665 * -0x1) * (parseInt(j(0x175)) / (0x2512 + 0xed2 + -0x33da)) + -parseInt(j(0x171)) / (0xb23 * 0x3 + 0x2513 + -0x4671) * (parseInt(j(0x180)) / (-0xdf * 0x19 + 0x2370 + -0x5 * 0x2b9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x86e3a + 0x49907 + -0x1c7b0));
const g = {};
g[k(0x184)] = !![], Object[l(0x191) + k(0x187)](exports, k(0x17a), g);
const sequelize_1 = require(l(0x18a));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x10ec + 0x1e0d + 0x1 * -0xbb1);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[k(0x18f)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x17c)] = n(0x17e), e[m(0x183)] = n(0x181);
        const f = e;
        return d[m(0x190) + 'mn'](f[m(0x17c)], f[n(0x183)]);
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0x174)] = p(0x17e), e[p(0x170)] = p(0x181), e[p(0x182)] = o(0x17f), e[o(0x18e)] = p(0x173), e[o(0x18b)] = p(0x18d);
        const f = e;
        return d[o(0x18c)](f[o(0x174)], f[o(0x170)], {
            'type': sequelize_1[o(0x178)][o(0x172)],
            'references': {
                'model': f[o(0x182)],
                'key': 'id'
            },
            'onUpdate': f[o(0x18e)],
            'onDelete': f[o(0x18b)]
        });
    }
};