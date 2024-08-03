'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x7e)) / (0x1ff1 + -0x26ff + 0x70f * 0x1) + -parseInt(j(0x79)) / (0x1eb3 + 0x17df + 0x9 * -0x610) + parseInt(j(0x7b)) / (0x16b6 + 0x6b * 0x54 + -0x39cf) + -parseInt(i(0x83)) / (0x2bb + 0x3 * -0xc79 + 0x22b4) * (-parseInt(j(0x84)) / (-0x868 + 0xf0c + -0x3 * 0x235)) + parseInt(i(0x99)) / (-0x1 * -0x1499 + -0xfe * -0x19 + -0x2d61 * 0x1) * (-parseInt(j(0x8d)) / (-0x17e2 + -0x2603 + 0x3dec)) + parseInt(j(0x85)) / (0x3 * -0x5fe + 0x17b4 * -0x1 + 0x29b6) * (-parseInt(j(0x93)) / (-0x9d * 0x2f + 0xa57 * 0x1 + 0x1285)) + parseInt(i(0x9a)) / (0x1c45 + -0x42 + 0x1 * -0x1bf9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5f26a + -0x78a * -0x9a + -0x468d * 0x13));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xde5 * -0x2 + 0x246c + -0x829 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
g[k(0x86)] = !![], Object[l(0x7a) + k(0x7d)](exports, k(0x96), g);
const sequelize_1 = require(k(0x87));
function a() {
    const q = [
        'yIiYj',
        'INTEGER',
        'TjwEg',
        'tJbOz',
        'Tickets',
        '293279RnuGbJ',
        'StepsReply',
        'IZgqo',
        'uoYLX',
        'oReplyId',
        'oldStepAut',
        '605673HZxtYY',
        'exports',
        'addColumn',
        '__esModule',
        'VtzSL',
        'removeColu',
        '78yQIaQL',
        '5910580CtPkqR',
        '561562xUkkOX',
        'defineProp',
        '1749471WkPqRG',
        'all',
        'erty',
        '113633AuDWYp',
        'uwzWb',
        'SET\x20NULL',
        'CASCADE',
        'DataTypes',
        '167932fKHQPC',
        '45hsWDTn',
        '32iKIGUu',
        'value',
        'sequelize'
    ];
    a = function () {
        return q;
    };
    return a();
}
module[l(0x94)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x8b)] = n(0x8c), e[n(0x8f)] = m(0x92) + m(0x91);
        const f = e;
        return Promise[m(0x7c)]([d[m(0x98) + 'mn'](f[m(0x8b)], f[n(0x8f)])]);
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0x7f)] = p(0x8c), e[o(0x90)] = o(0x92) + p(0x91), e[p(0x88)] = o(0x8e), e[p(0x97)] = o(0x81), e[p(0x8a)] = o(0x80);
        const f = e;
        return d[o(0x95)](f[o(0x7f)], f[o(0x90)], {
            'type': sequelize_1[o(0x82)][o(0x89)],
            'references': {
                'model': f[o(0x88)],
                'key': 'id'
            },
            'onUpdate': f[p(0x97)],
            'onDelete': f[p(0x8a)],
            'allowNull': !![],
            'defaultValue': null
        });
    }
};