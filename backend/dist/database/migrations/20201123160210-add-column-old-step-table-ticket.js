'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0x1f7)) / (0x8b * -0x35 + -0xd1b + -0x1 * -0x29e3) + -parseInt(j(0x203)) / (-0x1400 + -0xccc + -0x1ee * -0x11) * (parseInt(j(0x209)) / (-0xf6a + -0x145a + 0x47 * 0x81)) + parseInt(j(0x208)) / (-0xc0e + -0x191 * 0x1 + 0xda3) * (-parseInt(j(0x1f5)) / (-0x2b8 + 0x2 * -0x76d + 0x1197)) + parseInt(j(0x1fb)) / (-0x16d1 + -0x3 * 0x9b1 + 0x33ea) + -parseInt(k(0x20b)) / (0x882 + -0x7 * 0x493 + -0x17 * -0x106) + -parseInt(k(0x1f2)) / (0x1bc1 + -0x1b41 + -0x78) * (parseInt(k(0x1ee)) / (-0x22a9 + 0x513 * 0x4 + 0x26 * 0x61)) + parseInt(j(0x205)) / (-0x6d1 * -0x2 + -0x184a + 0xab2) * (parseInt(j(0x207)) / (-0x8 * 0xb5 + 0xe02 + -0x84f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xc730 * 0x9 + 0x1a1f09 + -0x13bb2b));
const i = {};
function a() {
    const r = [
        '__esModule',
        '45286zlwGcb',
        'SET\x20NULL',
        '25130RYXlLY',
        'DataTypes',
        '2299xHPIuf',
        '41368cJezWA',
        '111qQWQUZ',
        'all',
        '3151897MzBhkX',
        'exports',
        'oReplyId',
        'StepsReply',
        'Tickets',
        'addColumn',
        '63cSqgMb',
        'CASCADE',
        'BNlGG',
        'FOeYN',
        '601192nsAwZL',
        'erty',
        'ghJoe',
        '220DLgJAK',
        'oldStepAut',
        '1478211AQggxR',
        'sequelize',
        'value',
        'SVIJd',
        '6860610HJbSJv',
        'yaqAB',
        'INTEGER',
        'removeColu',
        'QOdVJ',
        'SJukU',
        'defineProp'
    ];
    a = function () {
        return r;
    };
    return a();
}
i[l(0x1f9)] = !![], Object[m(0x201) + m(0x1f3)](exports, m(0x202), i);
const sequelize_1 = require(l(0x1f8));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xc9 + 0x1c14 + -0x1af0);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[m(0x20c)] = {
    'up': d => {
        const n = m, o = l, e = {};
        e[n(0x1f0)] = o(0x20f), e[n(0x1fc)] = n(0x1f6) + o(0x20d), e[o(0x1f4)] = o(0x20e), e[n(0x1ff)] = o(0x1ef), e[n(0x200)] = n(0x204);
        const f = e;
        return Promise[o(0x20a)]([d[o(0x1ed)](f[n(0x1f0)], f[n(0x1fc)], {
                'type': sequelize_1[o(0x206)][o(0x1fd)],
                'references': {
                    'model': f[n(0x1f4)],
                    'key': 'id'
                },
                'onUpdate': f[o(0x1ff)],
                'onDelete': f[n(0x200)],
                'allowNull': !![],
                'defaultValue': null
            })]);
    },
    'down': d => {
        const p = l, q = l, e = {};
        e[p(0x1fa)] = q(0x20f), e[p(0x1f1)] = q(0x1f6) + q(0x20d);
        const f = e;
        return d[p(0x1fe) + 'mn'](f[q(0x1fa)], f[q(0x1f1)]);
    }
};