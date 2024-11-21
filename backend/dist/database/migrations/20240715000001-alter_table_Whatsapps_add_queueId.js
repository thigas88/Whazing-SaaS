'use strict';
function a() {
    const q = [
        '496521ENWRzC',
        'Queues',
        'avblx',
        'Whatsapps',
        '135069sfJySy',
        '1897448zyjKtp',
        'IqByT',
        '5rpbrMc',
        '786968bdRLXj',
        'DataTypes',
        '3541743MFalTY',
        'addColumn',
        '3816000DQjsoL',
        'fuKVg',
        'INTEGER',
        'YDJkL',
        'SET\x20NULL',
        'queueId',
        'CASCADE',
        'SGXZh',
        'FtPfH',
        '__esModule',
        'sequelize',
        'erty',
        '2NYmreO',
        '7vOFwFn',
        'removeColu',
        'exports',
        '901872kwhRgR',
        'GdiZl',
        'defineProp',
        'value'
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
            const f = parseInt(i(0x95)) / (0x2222 + -0xaf * -0x33 + 0x227f * -0x2) * (-parseInt(j(0x89)) / (0x3b * 0x1d + 0x1fe7 + -0x2694)) + -parseInt(i(0x91)) / (0x1324 + -0x907 + -0xa1a) + -parseInt(i(0x76)) / (-0xe59 + -0x1 * 0x226b + 0x30c8) + parseInt(i(0x78)) / (-0x18a6 * -0x1 + -0x1aa7 * -0x1 + 0xcd2 * -0x4) * (parseInt(j(0x8d)) / (0x15ab + 0x4 * -0x29f + -0xb29)) + parseInt(j(0x8a)) / (0xaf3 * -0x1 + -0x1 * 0x2683 + 0x7b * 0x67) * (parseInt(i(0x79)) / (0x47 * 0x2a + 0x1556 * 0x1 + -0x20f4)) + parseInt(j(0x7b)) / (0x117a * -0x1 + -0xd7b + 0x1 * 0x1efe) + parseInt(i(0x7d)) / (-0x1 * 0x143e + 0x35 * 0x3d + 0x1 * 0x7a7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6ad * -0xe9 + 0x49 * 0x1f7 + 0x9502e));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb4 * -0x8 + 0x22 * -0xc8 + 0x1566);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
g[k(0x90)] = !![], Object[k(0x8f) + k(0x88)](exports, k(0x86), g);
const sequelize_1 = require(l(0x87));
module[k(0x8c)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x8e)] = n(0x94), e[n(0x84)] = n(0x82), e[n(0x80)] = n(0x92), e[m(0x77)] = m(0x83), e[n(0x93)] = m(0x81);
        const f = e;
        return d[m(0x7c)](f[m(0x8e)], f[m(0x84)], {
            'type': sequelize_1[m(0x7a)][m(0x7f)],
            'references': {
                'model': f[n(0x80)],
                'key': 'id'
            },
            'onUpdate': f[m(0x77)],
            'onDelete': f[n(0x93)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0x7e)] = o(0x94), e[p(0x85)] = p(0x82);
        const f = e;
        return d[o(0x8b) + 'mn'](f[o(0x7e)], f[p(0x85)]);
    }
};