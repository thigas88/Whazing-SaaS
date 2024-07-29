'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x203)) / (-0x397 + -0xbfc + -0x2 * -0x7ca) * (parseInt(i(0x1f5)) / (0x1946 + -0x1259 + -0x6eb)) + -parseInt(j(0x1f1)) / (0x5 * -0xfe + 0x51 * -0x20 + -0x5 * -0x305) + -parseInt(j(0x1ff)) / (-0x2693 + -0x25e5 * -0x1 + 0x2 * 0x59) + parseInt(j(0x207)) / (0x203d + -0x49 * 0x5 + -0x1ecb) * (-parseInt(i(0x205)) / (-0x8f8 + -0x1 * -0x1ae7 + -0x11e9)) + -parseInt(i(0x1f6)) / (-0x38a * 0x1 + 0x5bf * 0x5 + -0x192a) + parseInt(j(0x1f3)) / (0xf48 + 0x1989 + -0x28c9) + -parseInt(i(0x1fd)) / (0x2 * 0x1139 + -0x1994 + 0x77 * -0x13) * (-parseInt(j(0x204)) / (-0x1 * -0x1b56 + -0xb * -0x215 + -0x47 * 0xb5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x100c8 + 0x3a3b9 + 0x142f * -0x23));
const g = {};
g[k(0x20a)] = !![], Object[l(0x1f7) + l(0x1f0)](exports, l(0x1fb), g);
const sequelize_1 = require(k(0x1fe));
function a() {
    const q = [
        'Csutp',
        'BYvDx',
        'value',
        'whatsappId',
        'Whatsapps',
        'GDJfo',
        'CASCADE',
        'removeColu',
        'erty',
        '547608uQKvBF',
        'byImM',
        '663296iZkJRs',
        'INTEGER',
        '273992nUdMOO',
        '957929lrbXfT',
        'defineProp',
        'SET\x20NULL',
        'yGsNY',
        'exports',
        '__esModule',
        'Tickets',
        '2789109kUXrrr',
        'sequelize',
        '825372yPWsqw',
        'DataTypes',
        'dzeuG',
        'IRJLT',
        '1shDfYO',
        '20SLLWMJ',
        '36TkxCJt',
        'addColumn',
        '158810XgMnVx'
    ];
    a = function () {
        return q;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb05 + 0x1053 + -0x35e);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[l(0x1fa)] = {
    'up': d => {
        const m = l, n = l, e = {};
        e[m(0x201)] = n(0x1fc), e[m(0x202)] = n(0x20b), e[n(0x20d)] = n(0x20c), e[m(0x208)] = m(0x20e), e[n(0x1f9)] = n(0x1f8);
        const f = e;
        return d[n(0x206)](f[m(0x201)], f[n(0x202)], {
            'type': sequelize_1[n(0x200)][m(0x1f4)],
            'references': {
                'model': f[m(0x20d)],
                'key': 'id'
            },
            'onUpdate': f[m(0x208)],
            'onDelete': f[m(0x1f9)]
        });
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0x209)] = p(0x1fc), e[o(0x1f2)] = p(0x20b);
        const f = e;
        return d[o(0x20f) + 'mn'](f[p(0x209)], f[o(0x1f2)]);
    }
};