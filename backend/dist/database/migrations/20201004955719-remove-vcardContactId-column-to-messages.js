'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x1f8)) / (0x24e2 * 0x1 + -0x1 * 0x2345 + -0x19c * 0x1) * (-parseInt(i(0x201)) / (0xc7a + -0x748 + -0x530 * 0x1)) + -parseInt(j(0x1fd)) / (0x2672 + -0x200c + 0x147 * -0x5) + parseInt(j(0x20e)) / (-0x4e9 + -0x377 * 0x1 + 0x864) * (-parseInt(j(0x20a)) / (0x187 * 0x11 + 0xd4a + -0x273c)) + -parseInt(i(0x1fa)) / (0x1 * -0x230b + 0x1 * 0x491 + -0x10 * -0x1e8) + parseInt(i(0x1fe)) / (-0x13a0 + 0x4d5 * 0x5 + -0x482) * (parseInt(i(0x211)) / (0x14 * 0x8a + 0x2 * -0xfb5 + 0xe6 * 0x17)) + -parseInt(j(0x205)) / (0x5c * 0x10 + -0x19 + -0x59e) * (parseInt(j(0x1f4)) / (0xe9f + 0x94a + -0x61 * 0x3f)) + -parseInt(j(0x203)) / (0xeaa + -0x1eb2 + 0x1013) * (-parseInt(i(0x206)) / (-0x1 * -0x1b03 + -0x59f + -0x1558));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x73dff * -0x2 + -0xdb475 * -0x1 + 0x84ec7));
function a() {
    const q = [
        '630918FajRDl',
        '7wTdiQQ',
        'removeColu',
        'DataTypes',
        '32170BeVaaH',
        'exports',
        '187RWtiIc',
        'EVVcK',
        '27TKXMKp',
        '1328148RPSfHI',
        'defineProp',
        'Contacts',
        'xKTHq',
        '5OGTOlj',
        'ctId',
        'sequelize',
        'mszhH',
        '617244BCuVJk',
        'CASCADE',
        'eoSmx',
        '3723064KxrUDv',
        'INTEGER',
        'Messages',
        'value',
        '2377820kDprXB',
        'erty',
        'ytriP',
        'vcardConta',
        '13rEuxVl',
        'OLvpQ',
        '5908164kAwyGy',
        'addColumn',
        '__esModule'
    ];
    a = function () {
        return q;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4 * 0x8f5 + -0xb * -0x99 + -0x1f35 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
g[k(0x214)] = !![], Object[l(0x207) + l(0x1f5)](exports, k(0x1fc), g);
const sequelize_1 = require(l(0x20c));
module[l(0x202)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x209)] = m(0x213), e[n(0x1f9)] = m(0x1f7) + m(0x20b);
        const f = e;
        return d[m(0x1ff) + 'mn'](f[n(0x209)], f[m(0x1f9)]);
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0x1f6)] = o(0x213), e[p(0x204)] = o(0x1f7) + p(0x20b), e[p(0x210)] = p(0x208), e[p(0x20d)] = p(0x20f);
        const f = e;
        return d[p(0x1fb)](f[p(0x1f6)], f[p(0x204)], {
            'type': sequelize_1[o(0x200)][o(0x212)],
            'references': {
                'model': f[o(0x210)],
                'key': 'id'
            },
            'onUpdate': f[p(0x20d)],
            'onDelete': f[p(0x20d)]
        });
    }
};