'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x14d)) / (0x1 * 0x3f8 + 0x4d2 + -0xd * 0xad) * (-parseInt(i(0x140)) / (-0x2330 + 0x1 * 0x12f7 + 0x103b)) + parseInt(j(0x143)) / (-0x2 * -0x11a7 + -0xa5a + -0x18f1) * (parseInt(j(0x151)) / (0x253e + 0x1db + -0x57 * 0x73)) + -parseInt(i(0x157)) / (-0x1 * 0xe03 + 0x1 * -0xed9 + -0x1ce1 * -0x1) + parseInt(j(0x156)) / (-0x1df * 0x3 + 0x22b3 + -0x1d10) + parseInt(j(0x14a)) / (-0xd2f + 0x23b5 + -0x167f) * (parseInt(i(0x153)) / (0x2 * -0xfd6 + 0x1b83 * 0x1 + -0x1d * -0x25)) + parseInt(i(0x159)) / (0x19ed + -0x247f + -0x1 * -0xa9b) + -parseInt(i(0x147)) / (0x25a6 * 0x1 + -0x52c + -0x30 * 0xad);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5 * -0x12b65 + 0x5 * -0x138ae + 0x95 * 0x1ac0));
const g = {};
g[k(0x152)] = !![], Object[l(0x15c) + k(0x154)](exports, k(0x14c), g);
const sequelize_1 = require(l(0x15d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3 * 0x441 + -0x1 * 0x3d6 + 0x11d9);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const q = [
        '729846ijWifc',
        'userId',
        'DataTypes',
        'defineProp',
        'sequelize',
        'addColumn',
        'CASCADE',
        '4ItSsfz',
        'exports',
        'INTEGER',
        '9042KwyqSI',
        'fVXqg',
        'removeColu',
        'iIIYI',
        '411060WWuYHx',
        'zPRkB',
        'upETs',
        '7cIcJBP',
        'kqPvu',
        '__esModule',
        '119162CWgOkz',
        'IVZqp',
        'vKfgK',
        'Users',
        '172IcySQl',
        'value',
        '2998200BUBuli',
        'erty',
        'SET\x20NULL',
        '1566018MlwFyD',
        '1650735eSftVW',
        'Messages'
    ];
    a = function () {
        return q;
    };
    return a();
}
module[l(0x141)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0x144)] = n(0x158), e[m(0x146)] = m(0x15a);
        const f = e;
        return d[m(0x145) + 'mn'](f[m(0x144)], f[n(0x146)]);
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0x14e)] = o(0x158), e[o(0x14b)] = p(0x15a), e[p(0x14f)] = p(0x150), e[o(0x149)] = o(0x15f), e[o(0x148)] = p(0x155);
        const f = e;
        return d[o(0x15e)](f[o(0x14e)], f[p(0x14b)], {
            'type': sequelize_1[o(0x15b)][p(0x142)],
            'references': {
                'model': f[p(0x14f)],
                'key': 'id'
            },
            'onUpdate': f[o(0x149)],
            'onDelete': f[p(0x148)]
        });
    }
};