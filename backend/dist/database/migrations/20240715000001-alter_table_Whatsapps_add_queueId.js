'use strict';
const k = b, l = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1a74 + 0x4f0 + 0x1609);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0xa0)) / (-0x1d4e + -0x186f + 0x11ea * 0x3) + -parseInt(j(0x96)) / (-0x175c + 0x1282 + 0x1 * 0x4dc) + parseInt(i(0x85)) / (-0xc66 + 0x1 * 0x1483 + -0x81a) * (-parseInt(i(0x8f)) / (0x126a + 0x257b + 0x37e1 * -0x1)) + parseInt(i(0x8a)) / (-0x602 + 0xb * -0x362 + 0x2b3d) * (-parseInt(j(0x86)) / (-0x711 + 0xb9c * -0x3 + -0x49 * -0x93)) + parseInt(j(0x9d)) / (0xd92 + -0xa * -0x2ab + -0x2839) * (parseInt(j(0x9b)) / (0x121 * 0xe + -0xa3 * 0x11 + -0x4f3)) + -parseInt(j(0x87)) / (-0x1a72 + 0x135 * 0x15 + 0x122) * (parseInt(i(0x8c)) / (0x1 * 0xed8 + 0x2 * -0x12f9 + 0x1724)) + parseInt(j(0x9a)) / (0x1bf * -0x2 + -0x264a + 0x29d3) * (parseInt(j(0x92)) / (-0xd35 + -0x1 * -0x207b + -0x133a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x27d * 0xcc + 0x15f * 0x1e7 + 0x52011));
function a() {
    const q = [
        '2904251xQoYZY',
        'erty',
        'vneON',
        '125025KbOTow',
        'INTEGER',
        'xYZwi',
        'Whatsapps',
        'tRdWL',
        'exports',
        '__esModule',
        '141lrQiqZ',
        '6eHCukA',
        '153NKPaYX',
        'Queues',
        'CfyHm',
        '2992380VJSRGA',
        'removeColu',
        '154290objHJx',
        'value',
        'defineProp',
        '20236zeHXDQ',
        'qTDyE',
        'queueId',
        '228ueADom',
        'sequelize',
        'DataTypes',
        'SET\x20NULL',
        '667738OjTRpH',
        'RVamr',
        'CASCADE',
        'addColumn',
        '734899WfyPwo',
        '8UjyxeS',
        'XhcXm'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0x8d)] = !![], Object[k(0x8e) + k(0x9e)](exports, l(0xa6), g);
const sequelize_1 = require(k(0x93));
module[l(0xa5)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x90)] = m(0xa3), e[n(0xa2)] = m(0x91), e[m(0x9c)] = m(0x88), e[m(0x89)] = m(0x98), e[n(0xa4)] = m(0x95);
        const f = e;
        return d[n(0x99)](f[n(0x90)], f[n(0xa2)], {
            'type': sequelize_1[m(0x94)][n(0xa1)],
            'references': {
                'model': f[n(0x9c)],
                'key': 'id'
            },
            'onUpdate': f[m(0x89)],
            'onDelete': f[n(0xa4)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0x97)] = o(0xa3), e[p(0x9f)] = o(0x91);
        const f = e;
        return d[p(0x8b) + 'mn'](f[o(0x97)], f[o(0x9f)]);
    }
};