'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x126)) / (0x23bf * -0x1 + -0x1f25 + 0x42e5) * (-parseInt(i(0x135)) / (-0x802 + -0x17ca + 0x1fce)) + -parseInt(i(0x11c)) / (0x1b9a + -0x1cd * 0x13 + -0x35 * -0x20) + -parseInt(j(0x124)) / (-0x7 * -0x4a3 + 0xc5 + -0xb12 * 0x3) * (parseInt(j(0x12e)) / (-0x1 * 0xf65 + -0x3b * -0x2 + 0xef4)) + -parseInt(j(0x11d)) / (-0x3 * 0x1f7 + 0x1fe5 + 0xe * -0x1db) * (parseInt(j(0x137)) / (-0x11c6 + 0x1ba3 + -0x9d6)) + parseInt(i(0x11e)) / (-0x2061 + -0x5f7 + -0x1330 * -0x2) + parseInt(i(0x130)) / (-0x1 * -0x2309 + -0xade + -0x1822) * (-parseInt(j(0x127)) / (0x8 * 0x44c + -0x1 * -0x5c6 + 0x4 * -0xa07)) + parseInt(j(0x136)) / (0x1d77 + 0x28 * -0xe3 + 0x60c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x875f * 0x1 + 0x1736 * -0x19 + 0x6b5 * 0xb2));
const g = {};
function a() {
    const q = [
        'value',
        'sequelize',
        'CASCADE',
        'Users',
        'vcjFI',
        '5AnfVAp',
        'addColumn',
        '1467AhCyME',
        '__esModule',
        'MNHCz',
        'MTLVe',
        'QUIVK',
        '82168FDmzIb',
        '7581090ZsjGhX',
        '116599ewKmTA',
        'erty',
        'exports',
        'userId',
        'MobTw',
        'SET\x20NULL',
        '103905BuXlaS',
        '42GYwyoc',
        '87168uWCzAL',
        'defineProp',
        'INTEGER',
        'xaVzx',
        'removeColu',
        'DataTypes',
        '781668tmvDDf',
        'moLut',
        '1SDjRpO',
        '7400PsTdqc',
        'Messages'
    ];
    a = function () {
        return q;
    };
    return a();
}
g[k(0x129)] = !![], Object[k(0x11f) + l(0x138)](exports, k(0x131), g);
const sequelize_1 = require(l(0x12a));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xe4c + -0x43 * -0x35 + 0xef * -0x1d);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[l(0x118)] = {
    'up': d => {
        const m = l, n = l, e = {};
        e[m(0x132)] = m(0x128), e[m(0x121)] = m(0x119);
        const f = e;
        return d[m(0x122) + 'mn'](f[m(0x132)], f[n(0x121)]);
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x125)] = p(0x128), e[o(0x134)] = p(0x119), e[o(0x133)] = p(0x12c), e[p(0x12d)] = p(0x12b), e[o(0x11a)] = o(0x11b);
        const f = e;
        return d[o(0x12f)](f[p(0x125)], f[o(0x134)], {
            'type': sequelize_1[p(0x123)][o(0x120)],
            'references': {
                'model': f[o(0x133)],
                'key': 'id'
            },
            'onUpdate': f[o(0x12d)],
            'onDelete': f[o(0x11a)]
        });
    }
};