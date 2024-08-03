'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x102)) / (0x1a43 + -0x1 * 0xbe7 + -0x69 * 0x23) * (-parseInt(j(0xf9)) / (-0x76 + 0x230 + -0x1b8)) + -parseInt(j(0xea)) / (-0x2216 + -0x1 * -0x1543 + 0x3e * 0x35) * (parseInt(i(0x103)) / (0x23 * -0x1a + 0x1 * -0x1d4f + -0x1bb * -0x13)) + parseInt(j(0xfd)) / (-0x1306 + 0x1 * 0x961 + 0x9aa) + -parseInt(i(0xfb)) / (-0x224c + 0x265f + -0x40d) * (-parseInt(j(0xec)) / (-0xbe2 + 0x20b1 + 0x4c * -0x46)) + parseInt(i(0xef)) / (0x12bf + 0xfd1 * -0x2 + 0xceb) * (parseInt(i(0xf0)) / (0x257 * 0x1 + -0x186a + 0x161c)) + -parseInt(i(0x101)) / (0x6ae + -0x9a7 * -0x3 + 0xd * -0x2bd) + -parseInt(j(0xed)) / (0x86c + 0x1115 * -0x1 + 0x1 * 0x8b4) * (parseInt(i(0xeb)) / (-0x22 + -0x679 * 0x3 + -0x1d * -0xad));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x30b5c + -0x112 * 0x1fa + 0xac91));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x571 + 0x1 * 0x45 + 0x614);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
function a() {
    const q = [
        '60vAOlBZ',
        '651mjZOOw',
        '75163hLaPLI',
        'aCEfi',
        '88LYZlrk',
        '135369MXZoWF',
        'DataTypes',
        'htztY',
        'Whatsapps',
        'INTEGER',
        'CASCADE',
        'erty',
        'defineProp',
        'WBRZN',
        '169650BgDvbn',
        'IYVIM',
        '4986OHOgFF',
        'sequelize',
        '294830qQRSTm',
        'Queues',
        'exports',
        'fUEFa',
        '1337470JBiihD',
        '2atxeAe',
        '27364SlvyKx',
        'removeColu',
        'addColumn',
        '__esModule',
        'EFEWL',
        'queueId',
        'value',
        'mBTcq',
        'SET\x20NULL',
        '87raWjzg'
    ];
    a = function () {
        return q;
    };
    return a();
}
g[k(0x109)] = !![], Object[k(0xf7) + k(0xf6)](exports, k(0x106), g);
const sequelize_1 = require(l(0xfc));
module[k(0xff)] = {
    'up': d => {
        const m = l, n = l, e = {};
        e[m(0xe8)] = n(0xf3), e[m(0xfa)] = n(0x108), e[n(0xf8)] = n(0xfe), e[n(0x107)] = n(0xf5), e[m(0xee)] = m(0xe9);
        const f = e;
        return d[m(0x105)](f[m(0xe8)], f[m(0xfa)], {
            'type': sequelize_1[n(0xf1)][m(0xf4)],
            'references': {
                'model': f[m(0xf8)],
                'key': 'id'
            },
            'onUpdate': f[m(0x107)],
            'onDelete': f[m(0xee)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0xf2)] = o(0xf3), e[o(0x100)] = p(0x108);
        const f = e;
        return d[p(0x104) + 'mn'](f[p(0xf2)], f[p(0x100)]);
    }
};