'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x116a * 0x1 + 0x155b + -0x36d * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const l = b, m = b;
(function (d, e) {
    const j = b, k = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(j(0x8f)) / (-0x22da + 0xf1 * -0x25 + 0x45b * 0x10) + parseInt(j(0x8e)) / (0x51 * 0x59 + 0x14e9 * 0x1 + -0x3110) + -parseInt(j(0x9e)) / (-0x31 * 0xc5 + 0xcd * 0x1 + -0x1 * -0x24eb) * (-parseInt(j(0x96)) / (0xa4 * -0x7 + 0x19 * -0x173 + 0x1 * 0x28bb)) + parseInt(k(0x86)) / (0x25c2 + 0x655 + -0x2c12) * (-parseInt(k(0x94)) / (0x25d9 + 0x1956 + -0x3f29)) + parseInt(j(0x93)) / (0x335 * 0x7 + 0x25be + -0x97 * 0x66) * (-parseInt(j(0x98)) / (0x1 * 0x7f + 0x2b7 * -0x9 + 0x17f8)) + parseInt(k(0x9c)) / (-0x2186 + -0x21a + 0x23a9) + parseInt(k(0x84)) / (-0x467 + -0x105a + 0x14cb);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0x21 * -0x47d4 + -0x24a87 * -0x1 + -0x53 * -0x2b16));
function a() {
    const r = [
        'DataTypes',
        '3400876sysBPQ',
        'IxQgk',
        '8UkeCRy',
        'Queues',
        'exports',
        '__esModule',
        '5097654OjSkZj',
        'sequelize',
        '3ZuXwlW',
        'Tickets',
        'restrict',
        'value',
        'CASCADE',
        'vHRVq',
        'mjoRs',
        'addColumn',
        'allowNull',
        '1961390lLiuww',
        'ToiIM',
        '81495aoGoZw',
        'LTWFH',
        'INTEGER',
        'removeColu',
        'erty',
        'defineProp',
        'defaultVal',
        'cxguv',
        '768548WLnjNt',
        '888651PJOkPq',
        'queue',
        'cOixB',
        'type',
        '3520013uNtGjr',
        '54OmspIK'
    ];
    a = function () {
        return r;
    };
    return a();
}
const c = {};
c[l(0xa1)] = !![], Object[m(0x8b) + l(0x8a)](exports, l(0x9b), c);
const sequelize_1 = require(m(0x9d));
module[l(0x9a)] = {
    'up': async e => {
        const n = m, o = m, f = {};
        f[n(0xa4)] = o(0x9f), f[o(0xa3)] = o(0x90), f[o(0x91)] = n(0x99), f[n(0x85)] = n(0xa2), f[n(0x87)] = o(0xa0);
        const g = f;
        await e[o(0x89) + 'mn'](g[o(0xa4)], g[o(0xa3)]), await e[o(0xa5)](g[o(0xa4)], g[o(0xa3)], {
            'type': sequelize_1[o(0x95)][o(0x88)],
            'references': {
                'model': g[o(0x91)],
                'key': 'id'
            },
            'onUpdate': g[n(0x85)],
            'onDelete': g[n(0x87)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': async f => {
        const p = l, q = m, g = {};
        g[p(0x97)] = p(0x9f), g[q(0x8d)] = q(0x90);
        const h = g;
        await f[q(0x89) + 'mn'](h[p(0x97)], h[p(0x8d)]);
        const i = {};
        i[q(0x92)] = sequelize_1[q(0x95)][p(0x88)], i[p(0x8c) + 'ue'] = null, i[q(0xa6)] = !![], await f[p(0xa5)](h[p(0x97)], h[q(0x8d)], i);
    }
};