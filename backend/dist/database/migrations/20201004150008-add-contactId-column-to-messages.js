'use strict';
const k = b, l = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x22b5 + -0xa30 + 0x2ec8);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x1f8)) / (0x1cf2 + -0x2f * -0x29 + 0x2 * -0x123c) * (-parseInt(j(0x1f7)) / (-0x3 * -0x619 + 0x1 * -0xa2b + -0x81e)) + -parseInt(i(0x1ff)) / (-0x27 * -0x14 + -0x8 * -0x49c + -0x27e9) * (parseInt(i(0x1e7)) / (0xbe1 + 0x1513 * 0x1 + -0x20f0 * 0x1)) + parseInt(j(0x1fb)) / (-0x7 * -0x565 + -0x2e2 * -0x9 + -0x1fd8 * 0x2) + parseInt(i(0x1ee)) / (0x1b * 0x161 + 0x1 * 0x2494 + -0x49c9) * (-parseInt(i(0x1ea)) / (-0x3 * -0x3ef + -0x1346 * -0x1 + 0x1f0c * -0x1)) + -parseInt(i(0x1fa)) / (0x1310 * 0x2 + -0x23d * -0x5 + -0x3149) + parseInt(i(0x1fd)) / (-0xab9 + -0x7 * -0x110 + 0x352) + parseInt(j(0x1ef)) / (0x2117 * 0x1 + 0x1349 + 0x1 * -0x3456);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb2a7 * 0xb + 0xa16b5 + 0x574 * 0x180));
const g = {};
g[k(0x1f5)] = !![], Object[k(0x1f3) + k(0x1eb)](exports, l(0x1e5), g);
function a() {
    const q = [
        '10348326ZrfTWY',
        'Contacts',
        '30OuFbvb',
        'DataTypes',
        'aJJdC',
        'HyWYy',
        '__esModule',
        'Messages',
        '408656MhdBuV',
        'TopnB',
        'CASCADE',
        '7iJzPIg',
        'erty',
        'INTEGER',
        'addColumn',
        '148914FSDwBd',
        '14062560LCGsgZ',
        'removeColu',
        'exports',
        'sequelize',
        'defineProp',
        'jaLNU',
        'value',
        'contactId',
        '915202AEHeOJ',
        '3nsnkFI',
        'RmIHb',
        '859992kcoypn',
        '3324215nVHmQQ',
        'QhHrs'
    ];
    a = function () {
        return q;
    };
    return a();
}
const sequelize_1 = require(k(0x1f2));
module[k(0x1f1)] = {
    'up': d => {
        const m = l, n = k, e = {};
        e[m(0x1e3)] = n(0x1e6), e[n(0x1fc)] = m(0x1f6), e[n(0x1e8)] = n(0x1fe), e[n(0x1f9)] = m(0x1e9);
        const f = e;
        return d[n(0x1ed)](f[n(0x1e3)], f[m(0x1fc)], {
            'type': sequelize_1[n(0x200)][n(0x1ec)],
            'references': {
                'model': f[m(0x1e8)],
                'key': 'id'
            },
            'onUpdate': f[n(0x1f9)],
            'onDelete': f[n(0x1f9)]
        });
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0x1f4)] = o(0x1e6), e[p(0x1e4)] = p(0x1f6);
        const f = e;
        return d[o(0x1f0) + 'mn'](f[o(0x1f4)], f[o(0x1e4)]);
    }
};