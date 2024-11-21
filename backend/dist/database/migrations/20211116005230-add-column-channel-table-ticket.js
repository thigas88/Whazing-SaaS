'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0x133)) / (-0x14a3 + 0x1cc * 0x11 + 0x9e8 * -0x1) * (-parseInt(k(0x14c)) / (0x167 * 0x1b + 0x1 * -0x1933 + -0xca8)) + parseInt(j(0x138)) / (0x1cc3 * -0x1 + 0x2 * 0x3 + 0x5c * 0x50) * (parseInt(j(0x13f)) / (-0xab9 * -0x3 + -0xd0 * 0x1f + -0x6f7)) + -parseInt(k(0x146)) / (-0x213d + 0x1 * 0x3fb + 0x1d47) * (parseInt(j(0x147)) / (0x156f + 0x1 * -0xe27 + -0x742)) + parseInt(k(0x149)) / (-0x3 * 0xcaa + -0x2263 * -0x1 + 0x6 * 0x9b) * (-parseInt(k(0x130)) / (0xf * 0x14f + -0x1c7 * -0x9 + -0x2398)) + -parseInt(k(0x132)) / (-0x1f9 + -0x12 * -0xc + -0x12a * -0x1) + parseInt(k(0x144)) / (0x4 * -0x2f5 + -0x33 * 0xa4 + 0x2c8a) * (parseInt(j(0x13b)) / (-0x33b + 0x50c + 0x2 * -0xe3)) + parseInt(j(0x135)) / (-0x12d * -0xd + -0xd * 0x2f6 + 0x1741);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x25 * -0x35a1 + 0x11e0ad + 0x3b79a));
const i = {};
i[l(0x139)] = !![], Object[l(0x142) + l(0x14d)](exports, l(0x140), i);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2433 * 0x1 + -0x21ec + -0x118);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const r = [
        'exports',
        'defineProp',
        'addColumn',
        '6553990ITqZfi',
        'Tickets',
        '22510MltYIb',
        '648yaNYok',
        'OobNe',
        '7BAFhTf',
        'TkmsC',
        'all',
        '366844aInEin',
        'erty',
        'fimxO',
        '1616776TvKXuK',
        'removeColu',
        '5779467MUZHON',
        '5nwoVJY',
        'whatsapp',
        '28678560TaQyUz',
        'DataTypes',
        'channel',
        '328719qYarRS',
        'value',
        'sequelize',
        '11YeLgKC',
        'STRING',
        'hVxMR',
        'Byrlc',
        '4DnAMLj',
        '__esModule'
    ];
    a = function () {
        return r;
    };
    return a();
}
const sequelize_1 = require(l(0x13a));
module[m(0x141)] = {
    'up': d => {
        const n = l, o = m, e = {};
        e[n(0x14a)] = n(0x145), e[n(0x148)] = o(0x137), e[n(0x13d)] = o(0x134);
        const f = e;
        return Promise[o(0x14b)]([d[n(0x143)](f[o(0x14a)], f[o(0x148)], {
                'type': sequelize_1[n(0x136)][o(0x13c)],
                'allowNull': !![],
                'defaultValue': f[n(0x13d)]
            })]);
    },
    'down': d => {
        const p = m, q = l, e = {};
        e[p(0x12f)] = q(0x145), e[q(0x13e)] = p(0x137);
        const f = e;
        return Promise[p(0x14b)]([d[p(0x131) + 'mn'](f[q(0x12f)], f[p(0x13e)])]);
    }
};