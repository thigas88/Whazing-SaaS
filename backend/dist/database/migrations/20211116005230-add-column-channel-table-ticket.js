'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x18e3 + 0x21ec + -0x51 * 0xb7);
        let h = e[f];
        return h;
    }, b(c, d);
}
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0x101)) / (-0x1f22 + -0x1248 + -0x1079 * -0x3) + parseInt(k(0xef)) / (-0x234d + 0x13b + 0x2214) * (parseInt(k(0xed)) / (-0x67 * 0xb + -0x90b + 0xd7b)) + -parseInt(j(0xee)) / (0x24 * -0xf8 + -0x5ed * -0x1 + 0x5 * 0x5cb) * (parseInt(j(0x102)) / (-0x3 * -0x739 + 0x2062 + -0x3608)) + -parseInt(j(0xfe)) / (-0x2f0 + -0xe3 * 0x26 + 0x24a8) * (-parseInt(k(0xe8)) / (-0x1947 + 0x7 * 0x352 + 0x210)) + -parseInt(j(0xf1)) / (-0x1a85 * 0x1 + 0x8 * 0x1e3 + 0xb75) + -parseInt(j(0xf0)) / (-0x20c5 + 0x20f3 + -0x25) + parseInt(j(0xff)) / (0x23c8 + 0x1041 + 0x30f * -0x11);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4d * -0x1066 + 0xd79 * 0x1c + -0x1 * -0x2bb));
const i = {};
i[l(0xf3)] = !![], Object[m(0xf9) + l(0xf4)](exports, m(0xe9), i);
const sequelize_1 = require(l(0xfd));
function a() {
    const r = [
        'exports',
        '70eXUlEG',
        '__esModule',
        'kVqrr',
        'addColumn',
        'iIqLM',
        '3330tNDyGH',
        '275596WQiObh',
        '32ESZfQB',
        '2971467XoGdlL',
        '4701824CHtdWi',
        'channel',
        'value',
        'erty',
        'Tickets',
        'IQbOu',
        'XAvwd',
        'removeColu',
        'defineProp',
        'UbOEf',
        'STRING',
        'all',
        'sequelize',
        '295206jMUKIE',
        '5647410BBNUmO',
        'DataTypes',
        '332796caLqVI',
        '5sOYPiI',
        'whatsapp'
    ];
    a = function () {
        return r;
    };
    return a();
}
module[m(0x104)] = {
    'up': d => {
        const n = l, o = m, e = {};
        e[n(0xfa)] = o(0xf5), e[o(0xf7)] = o(0xf2), e[o(0xea)] = o(0x103);
        const f = e;
        return Promise[n(0xfc)]([d[o(0xeb)](f[n(0xfa)], f[n(0xf7)], {
                'type': sequelize_1[n(0x100)][o(0xfb)],
                'allowNull': !![],
                'defaultValue': f[n(0xea)]
            })]);
    },
    'down': d => {
        const p = m, q = m, e = {};
        e[p(0xf6)] = q(0xf5), e[q(0xec)] = p(0xf2);
        const f = e;
        return Promise[q(0xfc)]([d[p(0xf8) + 'mn'](f[p(0xf6)], f[q(0xec)])]);
    }
};