'use strict';
const k = b, l = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1c05 + 0x156d + -0x184b * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0xed)) / (0x2396 + 0x46a + -0xd55 * 0x3) * (parseInt(i(0xfa)) / (0x1f5f + -0x5af + 0x13 * -0x15a)) + parseInt(i(0xe8)) / (-0x88 + -0x2524 + 0x25af) * (-parseInt(i(0xfd)) / (-0x217c + -0x1b54 + 0x3cd4)) + parseInt(i(0xe2)) / (-0x7dc + -0x2135 + 0x2916) * (parseInt(i(0xf6)) / (0x2340 + -0x1c6 * -0xe + 0x3c0e * -0x1)) + -parseInt(j(0xf0)) / (0x165 * -0x11 + -0x76b + 0x5 * 0x63b) + -parseInt(i(0xfb)) / (0x202d * -0x1 + -0xe70 + 0x2ea5) * (-parseInt(j(0xf2)) / (-0x1d2f + -0x2 * 0x100b + -0x1 * -0x3d4e)) + -parseInt(j(0xf8)) / (-0x550 + -0xaa2 * -0x2 + -0xfea) + parseInt(j(0xf4)) / (-0x6ff + -0xf12 + 0x46c * 0x5) * (parseInt(j(0xf7)) / (-0x45 * 0x3e + -0x1a35 * 0x1 + 0x2af7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x86daa + 0xdef4b + -0xe7976));
function a() {
    const q = [
        'INTEGER',
        '762iWAamF',
        'COutq',
        '__esModule',
        'erty',
        'SET\x20NULL',
        '67376vavmMM',
        'DataTypes',
        'userId',
        '3252263eUWZqH',
        'removeColu',
        '18Tujrpb',
        'JVRUq',
        '3873628IYHRzh',
        'PJOkV',
        '5729058iRfUqs',
        '12IGbXgk',
        '212590ahDQwH',
        'addColumn',
        '18cSodwQ',
        '3646392Pafvdm',
        'defineProp',
        '9596XlKpuQ',
        'iNrfW',
        'Users',
        'CASCADE',
        'sequelize',
        'Messages',
        'GbGFH',
        '5yLuIEV',
        'kbhSD',
        'eAWil',
        'value',
        'exports'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0xe5)] = !![], Object[l(0xfc) + k(0xeb)](exports, k(0xea), g);
const sequelize_1 = require(k(0xdf));
module[k(0xe6)] = {
    'up': d => {
        const m = l, n = l, e = {};
        e[m(0xe3)] = m(0xe0), e[m(0xf3)] = m(0xef), e[m(0xf5)] = n(0xdd), e[n(0xe4)] = n(0xde), e[n(0xe1)] = n(0xec);
        const f = e;
        return d[n(0xf9)](f[m(0xe3)], f[n(0xf3)], {
            'type': sequelize_1[n(0xee)][n(0xe7)],
            'references': {
                'model': f[m(0xf5)],
                'key': 'id'
            },
            'onUpdate': f[n(0xe4)],
            'onDelete': f[m(0xe1)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0xdc)] = o(0xe0), e[p(0xe9)] = p(0xef);
        const f = e;
        return d[o(0xf1) + 'mn'](f[p(0xdc)], f[o(0xe9)]);
    }
};