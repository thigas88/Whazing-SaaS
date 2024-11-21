'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0xc1)) / (0x2315 + 0xc15 + -0x2f29) + parseInt(o(0xc9)) / (-0x1 * 0x13eb + 0x128b + 0xb1 * 0x2) * (parseInt(n(0xda)) / (0x2 * 0x88 + -0x13a1 + 0x1294)) + parseInt(o(0xca)) / (-0x2 * 0xdbd + 0xe14 + 0xd6a) * (parseInt(n(0xbf)) / (-0x120b + -0x95 * -0xb + 0xba9 * 0x1)) + parseInt(o(0xc6)) / (-0xd7b + 0xf1a + -0x199 * 0x1) * (parseInt(n(0xcf)) / (-0xda5 + 0x10b2 + -0x9 * 0x56)) + -parseInt(n(0xd8)) / (0xa0 + 0x3a * -0x74 + 0x19b0) * (-parseInt(o(0xbc)) / (-0x200f * -0x1 + 0xd44 + -0x2d4a)) + parseInt(n(0xd1)) / (-0x1a6f + -0xcbc * 0x1 + -0x1 * -0x2735) * (-parseInt(n(0xc5)) / (0x1524 + -0x1 * 0x24c3 + 0x2 * 0x7d5)) + parseInt(n(0xc7)) / (-0x1475 + -0x14c6 + 0x2947) * (-parseInt(o(0xce)) / (-0x21e2 + 0x1eec + 0x303));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x19f41 + -0x5ddfd * 0x1 + 0x77069));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x1fd3 + -0x1 * 0x10ab + 0x313a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const m = {};
function a() {
    const v = [
        '1060575MuaawS',
        'BaileysKey',
        '81exrMBs',
        'defineProp',
        'xWWGU',
        '260445LbNcVG',
        'Yzxhj',
        '154743eMuCDC',
        'peEpt',
        'erty',
        'dropTable',
        '11YatWVy',
        '171294Jbttlo',
        '8204316bqrbCm',
        'CASCADE',
        '2kzQvav',
        '12LhjAGX',
        'KwMGc',
        'TEXT',
        'DataTypes',
        '13BNXEvh',
        '49JJRmNU',
        'STRING',
        '249430IGzRpI',
        'sequelize',
        '__esModule',
        'exports',
        'createTabl',
        'INTEGER',
        'Whatsapps',
        '322728bTJEDo',
        'value'
    ];
    a = function () {
        return v;
    };
    return a();
}
m[p(0xd9)] = !![], Object[q(0xbd) + p(0xc3)](exports, q(0xd3), m);
const sequelize_1 = require(q(0xd2));
module[q(0xd4)] = {
    'up': d => {
        const r = q, s = p, e = {};
        e[r(0xc2)] = r(0xdb) + 's', e[s(0xc0)] = s(0xd7), e[r(0xcb)] = r(0xc8);
        const f = e;
        return d[r(0xd5) + 'e'](f[s(0xc2)], {
            'whatsappId': {
                'type': sequelize_1[s(0xcd)][r(0xd6)],
                'primaryKey': !![],
                'allowNull': ![],
                'references': {
                    'model': f[r(0xc0)],
                    'key': 'id'
                },
                'onUpdate': f[s(0xcb)],
                'onDelete': f[s(0xcb)]
            },
            'type': {
                'type': sequelize_1[r(0xcd)][r(0xd0)],
                'primaryKey': !![],
                'allowNull': ![]
            },
            'key': {
                'type': sequelize_1[s(0xcd)][s(0xd0)],
                'primaryKey': !![],
                'allowNull': ![]
            },
            'value': {
                'type': sequelize_1[s(0xcd)][s(0xcc)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const t = q, u = p, e = {};
        e[t(0xbe)] = u(0xdb) + 's';
        const f = e;
        return d[t(0xc4)](f[t(0xbe)]);
    }
};