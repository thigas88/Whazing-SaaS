'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0xbf)) / (0x1 * -0xb47 + -0x1f3a + 0x2a82) * (parseInt(l(0xd8)) / (0x3a * 0xb + 0x6cd * -0x5 + 0x1f85)) + -parseInt(l(0xc7)) / (0x2ef * 0xa + -0x11ab + -0xba8) * (-parseInt(l(0xd4)) / (0x943 * 0x1 + 0x815 + 0x455 * -0x4)) + -parseInt(l(0xc8)) / (0x25ac + -0x5e * 0x3f + 0x3 * -0x4d7) * (-parseInt(l(0xcd)) / (-0x1620 + -0x1528 + 0x2b4e)) + parseInt(l(0xd9)) / (-0x10f6 + -0x138e * -0x1 + -0x291) * (-parseInt(l(0xd5)) / (0x13f1 + 0x5 * 0x7be + -0x1 * 0x3a9f)) + -parseInt(m(0xce)) / (-0xea7 + 0x507 * -0x7 + -0x1 * -0x31e1) + parseInt(l(0xc9)) / (-0xcee + 0x17d6 + -0x1a * 0x6b) + -parseInt(l(0xd1)) / (0x1198 + -0x115b + -0x32) * (-parseInt(l(0xc1)) / (0x77 * 0x13 + 0x7 * -0x17 + -0x828));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x95969 + -0x1 * 0xce2f + 0x17e477 * 0x1));
function a() {
    const t = [
        '4118480SabezG',
        'literal',
        'qcWbe',
        'Sequelize',
        '108gSZSMx',
        '1591326cQcWEd',
        'erty',
        'ApiMessage',
        '11xLHZIu',
        'DataTypes',
        'UUID',
        '312fdDafk',
        '177176IUUrQJ',
        'all',
        '__esModule',
        '50JQmqrF',
        '539TPeQCm',
        'defineProp',
        'changeColu',
        'sequelize',
        '_uuid()',
        '57145pbKaBx',
        'gen_random',
        '12865524qctrUw',
        'EMYdC',
        'xuZLF',
        'value',
        'lQBtV',
        'exports',
        '48435VxJTEC',
        '407720IhCnWn'
    ];
    a = function () {
        return t;
    };
    return a();
}
const k = {};
k[n(0xc4)] = !![], Object[o(0xbb) + n(0xcf)](exports, o(0xd7), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb * -0x63 + 0x8c3 * 0x1 + -0xc49);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(o(0xbd));
module[o(0xc6)] = {
    'up': d => {
        const p = n, q = o, e = {};
        e[p(0xc2)] = q(0xd0) + 's', e[q(0xc3)] = q(0xc0) + p(0xbe);
        const f = e;
        return Promise[q(0xd6)]([d[q(0xbc) + 'mn'](f[p(0xc2)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[q(0xd2)][p(0xd3)],
                'defaultValue': sequelize_1[p(0xcc)][p(0xca)](f[p(0xc3)])
            })]);
    },
    'down': d => {
        const r = n, s = o, e = {};
        e[r(0xcb)] = s(0xd0) + 's', e[r(0xc5)] = r(0xc0) + r(0xbe);
        const f = e;
        return Promise[r(0xd6)]([d[s(0xbc) + 'mn'](f[s(0xcb)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[s(0xd2)][r(0xd3)],
                'defaultValue': sequelize_1[s(0xcc)][s(0xca)](f[s(0xc5)])
            })]);
    }
};