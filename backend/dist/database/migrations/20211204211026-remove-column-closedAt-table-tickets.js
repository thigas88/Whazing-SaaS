'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2599 + -0x155c + 0x3bc4);
        let h = e[f];
        return h;
    }, b(c, d);
}
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0xe3)) / (0x112 * -0x1f + 0x6 * 0x9 + -0x16f * -0x17) + -parseInt(k(0xdd)) / (-0x4cf * -0x1 + 0x26c * 0x2 + -0x9a5) + parseInt(j(0xe2)) / (-0x37 * 0x25 + -0x1b43 + 0x2339) * (parseInt(k(0xd1)) / (-0x2 * 0x6e6 + 0x2f8 * -0x4 + -0x890 * -0x3)) + parseInt(k(0xdb)) / (-0x1f8b + 0xb2 * 0x27 + 0x472) + -parseInt(k(0xe1)) / (0xdc7 + 0x1 * -0x263f + 0x187e) + -parseInt(j(0xe6)) / (0x30d + 0xa8e + -0xd94) + parseInt(j(0xd8)) / (-0x1a4b + -0x1cf8 + 0xb0f * 0x5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xb444f + 0xa0b63 + -0xe88e5));
const i = {};
i[l(0xd9)] = !![], Object[l(0xe0) + m(0xdc)](exports, l(0xd5), i);
const sequelize_1 = require(m(0xe7));
function a() {
    const r = [
        'erty',
        '406728cPkUMa',
        'jSVOM',
        'closedAt',
        'defineProp',
        '4952904OLVNiS',
        '1006629NYwuSe',
        '425774bvhJcE',
        'iyjTS',
        'exports',
        '3501008oZzETm',
        'sequelize',
        'sOOGM',
        'addColumn',
        '4fGVbxc',
        'Tickets',
        'YgKyw',
        'DATE',
        '__esModule',
        'DataTypes',
        'removeColu',
        '6361224THiyma',
        'value',
        'all',
        '2083155NgqbEZ'
    ];
    a = function () {
        return r;
    };
    return a();
}
module[l(0xe5)] = {
    'up': d => {
        const n = m, o = m, e = {};
        e[n(0xe4)] = o(0xd2), e[o(0xcf)] = n(0xdf);
        const f = e;
        return Promise[o(0xda)]([d[o(0xd7) + 'mn'](f[o(0xe4)], f[o(0xcf)])]);
    },
    'down': d => {
        const p = m, q = l, e = {};
        e[p(0xd3)] = p(0xd2), e[q(0xde)] = q(0xdf);
        const f = e;
        return Promise[p(0xda)]([d[q(0xd0)](f[p(0xd3)], f[q(0xde)], {
                'type': sequelize_1[p(0xd6)][p(0xd4)](),
                'allowNull': !![],
                'defaultValue': null
            })]);
    }
};