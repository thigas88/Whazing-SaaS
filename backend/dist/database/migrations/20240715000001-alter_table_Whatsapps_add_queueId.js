'use strict';
const k = b, l = b;
function a() {
    const q = [
        '283344iKjHlJ',
        'Whatsapps',
        'removeColu',
        'SET\x20NULL',
        'qcJNn',
        '1225798GkLpVu',
        'Queues',
        'vtIlR',
        'addColumn',
        'exports',
        '78BcqxiQ',
        'value',
        'xIvEZ',
        'queueId',
        'DataTypes',
        'MlFBl',
        'INTEGER',
        'sequelize',
        '6344CdZIBq',
        '687060nIoMBu',
        'TTuve',
        '141076lBVfXr',
        'uQvKv',
        'erty',
        'defineProp',
        'ihIxm',
        '478782zJOpoB',
        '73680fDGtyS',
        '__esModule',
        '16eQdKzz',
        'CASCADE'
    ];
    a = function () {
        return q;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1492 + -0x4d3 + -0x2 * 0x72a);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x180)) / (-0x1f2 * -0x1 + 0x6bb * 0x1 + -0x8ac) + parseInt(i(0x17d)) / (0x1e34 + 0xbd3 * -0x1 + -0x125f) * (parseInt(i(0x175)) / (0x77b + 0x29 * -0xc3 + 0x17c3)) + parseInt(j(0x16b)) / (-0x143b + 0xec0 + 0x57f) + -parseInt(i(0x17e)) / (-0x14ec + 0x1e62 * 0x1 + -0x971) + parseInt(i(0x186)) / (-0xa9 * 0x4 + 0x1c93 + 0xc9 * -0x21) + -parseInt(i(0x170)) / (-0x61d + 0x1 * -0x1359 + 0x197d) + parseInt(j(0x188)) / (-0x347 * -0x2 + 0x6f7 + -0x3 * 0x47f) * (parseInt(j(0x185)) / (-0x1 * 0x8d8 + -0xc34 + 0x1515));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x23373 + 0x164ed * -0x1 + -0xc * -0xf84));
const g = {};
g[k(0x176)] = !![], Object[k(0x183) + l(0x182)](exports, l(0x187), g);
const sequelize_1 = require(k(0x17c));
module[l(0x174)] = {
    'up': d => {
        const m = l, n = k, e = {};
        e[m(0x16f)] = m(0x16c), e[m(0x17a)] = n(0x178), e[n(0x177)] = n(0x171), e[m(0x17f)] = n(0x189), e[m(0x172)] = n(0x16e);
        const f = e;
        return d[n(0x173)](f[n(0x16f)], f[m(0x17a)], {
            'type': sequelize_1[n(0x179)][n(0x17b)],
            'references': {
                'model': f[n(0x177)],
                'key': 'id'
            },
            'onUpdate': f[m(0x17f)],
            'onDelete': f[m(0x172)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x181)] = o(0x16c), e[p(0x184)] = o(0x178);
        const f = e;
        return d[p(0x16d) + 'mn'](f[p(0x181)], f[p(0x184)]);
    }
};