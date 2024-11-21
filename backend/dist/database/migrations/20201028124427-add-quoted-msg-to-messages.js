'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x1e3)) / (0xa6 * -0x26 + 0x4b3 * 0x5 + -0x31 * -0x6) + -parseInt(i(0x1e8)) / (0x4fd * -0x2 + 0x914 + 0x1 * 0xe8) + -parseInt(i(0x1d8)) / (-0x1 * -0x1bef + 0xa05 + -0x25f1) * (-parseInt(j(0x1d5)) / (0x13a6 + 0xa9b * -0x3 + -0xc2f * -0x1)) + -parseInt(i(0x1df)) / (-0xdf0 + 0x417 * 0x1 + -0x34a * -0x3) * (-parseInt(i(0x1d9)) / (0xc * -0x2fe + 0x579 * 0x4 + -0x257 * -0x6)) + -parseInt(j(0x1d4)) / (-0x5a0 + -0x1 * -0xa07 + 0x14 * -0x38) * (-parseInt(j(0x1d0)) / (0xb4c + 0x1 * -0x2097 + 0x1553)) + -parseInt(j(0x1d2)) / (-0x1 * 0x1d23 + -0x445 + 0x2171) + -parseInt(i(0x1e2)) / (0x1fe9 + 0xdf * 0x12 + 0x6cb * -0x7) * (parseInt(j(0x1e5)) / (0x1073 * -0x1 + -0x2055 + 0x30d3 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x68734 * 0x2 + -0x897fc + 0x29436));
function a() {
    const q = [
        '1086QJKeaL',
        'defineProp',
        'WNfsw',
        'Messages',
        'hlWQl',
        'GPJUc',
        '7605JaoRIF',
        'removeColu',
        'evMLo',
        '6455990JZejpJ',
        '699309rYZmSJ',
        'exports',
        '11veJPlX',
        'fCvWl',
        'STRING',
        '118290OvDHYh',
        'quotedMsgI',
        'BBDLI',
        'value',
        'sequelize',
        '__esModule',
        'CASCADE',
        '91552EbwBKw',
        'SET\x20NULL',
        '6398640AZseDi',
        'erty',
        '175djFFMY',
        '10768DatXZS',
        'DataTypes',
        'addColumn',
        '687MwAMZf'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0x1cc)] = !![], Object[k(0x1da) + l(0x1d3)](exports, l(0x1ce), g);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd5a * 0x2 + 0x41 * -0x5c + 0x33dc);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(k(0x1cd));
module[k(0x1e4)] = {
    'up': d => {
        const m = l, n = k, e = {};
        e[m(0x1de)] = n(0x1dc), e[n(0x1ea)] = m(0x1e9) + 'd', e[m(0x1e1)] = m(0x1cf), e[m(0x1dd)] = n(0x1d1);
        const f = e;
        return d[n(0x1d7)](f[m(0x1de)], f[n(0x1ea)], {
            'type': sequelize_1[m(0x1d6)][m(0x1e7)],
            'references': {
                'model': f[m(0x1de)],
                'key': 'id'
            },
            'onUpdate': f[m(0x1e1)],
            'onDelete': f[m(0x1dd)]
        });
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0x1e6)] = o(0x1dc), e[p(0x1db)] = p(0x1e9) + 'd';
        const f = e;
        return d[p(0x1e0) + 'mn'](f[o(0x1e6)], f[o(0x1db)]);
    }
};