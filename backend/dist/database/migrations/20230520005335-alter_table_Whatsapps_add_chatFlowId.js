'use strict';
const k = b, l = b;
function a() {
    const q = [
        'addColumn',
        '274315rQKNSO',
        'INTEGER',
        'Whatsapps',
        '12NcvqEZ',
        'removeColu',
        '776940eGKnje',
        'wNjZX',
        'erty',
        'DataTypes',
        '6824580tXfOhA',
        '9QrwpmZ',
        '2151784zfIxOV',
        'exports',
        'defineProp',
        '822017ZBrNqo',
        '209944aELvlZ',
        'ZlKTe',
        'FwzGn',
        'qkGdo',
        'FQBxX',
        '3tflKzH',
        'yQvov',
        'chatFlowId',
        '__esModule',
        'kgRHi',
        '220148xAXgBQ',
        'ChatFlow',
        'value',
        'sequelize',
        'CASCADE',
        'SET\x20NULL'
    ];
    a = function () {
        return q;
    };
    return a();
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x1a0)) / (0xeff + -0x4b1 + -0xa4d) + parseInt(i(0x18a)) / (0x22e3 + -0x3 * 0x16f + -0x1e94) * (-parseInt(i(0x185)) / (0x5 * 0x5a1 + 0x1444 * -0x1 + -0x1 * 0x7de)) + -parseInt(i(0x196)) / (0x123 * -0x17 + 0xbb1 + 0xe78 * 0x1) + -parseInt(i(0x191)) / (0x11 * 0x25 + -0x4 * 0x59f + -0x4 * -0x503) + -parseInt(j(0x194)) / (-0x8a3 + 0x24c8 + 0x17 * -0x139) * (parseInt(j(0x19f)) / (-0x1 * 0x157b + 0x37f * 0x3 + 0xb05)) + parseInt(j(0x19c)) / (0xf0 + -0x23 * 0x113 + 0x3 * 0xc3b) * (parseInt(j(0x19b)) / (0x21d1 * 0x1 + 0x1 * 0x205b + -0x4223)) + parseInt(j(0x19a)) / (0xfe + 0xa23 + -0xb17);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2517 * 0x19 + 0x4491c + 0x19620));
const g = {};
g[k(0x18c)] = !![], Object[k(0x19e) + l(0x198)](exports, l(0x188), g);
const sequelize_1 = require(k(0x18d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x13b + 0x185a + 0x1 * -0x1813);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[l(0x19d)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x183)] = n(0x193), e[n(0x186)] = m(0x187), e[m(0x189)] = n(0x18b), e[n(0x184)] = n(0x18e), e[m(0x1a1)] = m(0x18f);
        const f = e;
        return d[m(0x190)](f[n(0x183)], f[n(0x186)], {
            'type': sequelize_1[m(0x199)][n(0x192)],
            'references': {
                'model': f[n(0x189)],
                'key': 'id'
            },
            'onUpdate': f[m(0x184)],
            'onDelete': f[n(0x1a1)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0x197)] = o(0x193), e[p(0x182)] = p(0x187);
        const f = e;
        return d[p(0x195) + 'mn'](f[o(0x197)], f[o(0x182)]);
    }
};