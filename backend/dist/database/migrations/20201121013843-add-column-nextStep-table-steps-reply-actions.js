'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x1de)) / (-0x1b6b + -0x5 * 0x32d + 0x2b4d) * (parseInt(i(0x1e0)) / (-0x2 * 0x119 + 0x6f4 + -0x4c0)) + parseInt(j(0x1e9)) / (-0x2 * -0x443 + -0x2e * 0x2b + -0x43 * 0x3) * (-parseInt(i(0x1e2)) / (0x284 + 0xcb * 0x25 + -0x1fd7)) + -parseInt(j(0x1ea)) / (0x575 * 0x4 + 0x477 + -0x1a46) * (parseInt(j(0x1e7)) / (-0x1e5a + 0x4d7 + 0x3 * 0x883)) + -parseInt(i(0x1ef)) / (-0x58 * -0xe + 0x1 * 0x135d + -0xc13 * 0x2) * (parseInt(i(0x1e3)) / (0x2 * -0x839 + -0x25b * 0xa + 0x2808)) + parseInt(j(0x1ee)) / (-0x146d + -0x19ab * -0x1 + -0x535) + -parseInt(j(0x1f1)) / (0x1 * 0x15ef + 0x1 * 0x22cc + 0x17 * -0x277) + -parseInt(i(0x1dc)) / (0x5f4 + 0x1d * 0x10d + 0x1231 * -0x2) * (-parseInt(j(0x1f6)) / (0x5 * 0x1e4 + 0x207d + -0x29e5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5803 * -0x4 + -0x60faa * 0x1 + -0x10 * -0xaac4));
const g = {};
g[k(0x1f3)] = !![], Object[k(0x1fb) + k(0x1dd)](exports, l(0x1df), g);
function a() {
    const q = [
        '__esModule',
        '544126JQquTe',
        'DataTypes',
        '120NPsqux',
        '1920xvhtWy',
        'StepsReply',
        'CASCADE',
        'exports',
        '7026yGfzAQ',
        'sequelize',
        '23337uGwDLF',
        '965MpslyW',
        'nextStep',
        'removeColu',
        'WAoqW',
        '3516192GgMUFp',
        '10479gNoskT',
        'cRlyA',
        '4072390FnfoRQ',
        'FOGNR',
        'value',
        'Actions',
        'SiNZW',
        '132knGNJV',
        'addColumn',
        'INTEGER',
        'ZOOHA',
        'lbFVM',
        'defineProp',
        '1319373iPVpzi',
        'erty',
        '1zuMTzR'
    ];
    a = function () {
        return q;
    };
    return a();
}
const sequelize_1 = require(l(0x1e8));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1f3 * -0x4 + 0x5 * 0x29c + 0x3e * -0xe);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[k(0x1e6)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0x1f2)] = m(0x1e4) + m(0x1f4), e[n(0x1fa)] = m(0x1eb), e[m(0x1f9)] = m(0x1e4), e[m(0x1ed)] = m(0x1e5);
        const f = e;
        return d[m(0x1f7)](f[m(0x1f2)], f[m(0x1fa)], {
            'type': sequelize_1[n(0x1e1)][n(0x1f8)],
            'references': {
                'model': f[n(0x1f9)],
                'key': 'id'
            },
            'onUpdate': f[n(0x1ed)],
            'onDelete': f[n(0x1ed)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0x1f0)] = o(0x1e4) + p(0x1f4), e[o(0x1f5)] = p(0x1eb);
        const f = e;
        return d[p(0x1ec) + 'mn'](f[p(0x1f0)], f[p(0x1f5)]);
    }
};