'use strict';
const k = b, l = b;
function a() {
    const q = [
        'Whatsapps',
        'sequelize',
        'value',
        '185664vyttwQ',
        'erty',
        'defineProp',
        '805743gmfpZv',
        '752ZsUCxQ',
        'ORTsP',
        '3685kEKuIZ',
        'INTEGER',
        'ajxNR',
        '11txBKXv',
        'BrsNk',
        'addColumn',
        '8bWROEf',
        'exports',
        '1097988MDTtXy',
        'SET\x20NULL',
        'MQdgz',
        'chatFlowId',
        'pAJPF',
        '7202RQzhon',
        '38830lANqDK',
        '84DLEAiL',
        'removeColu',
        'CASCADE',
        '21EYXYwM',
        'DataTypes',
        'ChatFlow',
        'vxjFQ',
        '__esModule',
        'OjBPy',
        '47086yugade'
    ];
    a = function () {
        return q;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x42e * 0x8 + 0x29 * 0xb + -0x21cd);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x17f)) / (0x1fc6 + -0x54e + -0x1a77) + parseInt(i(0x174)) / (-0x1348 + 0x2501 + -0x38b * 0x5) * (parseInt(i(0x176)) / (-0xae * 0xf + 0x1e8 + 0x84d)) + -parseInt(j(0x187)) / (-0x101 * 0x7 + 0x153 * -0x19 + 0xd62 * 0x3) * (parseInt(j(0x167)) / (0x27f + 0x1 * 0x1a23 + 0x5 * -0x5b9)) + parseInt(j(0x183)) / (-0x3 * 0xc89 + 0x2081 + 0x8 * 0xa4) * (parseInt(j(0x179)) / (0x3 * -0x54b + 0x1392 + 0x3aa * -0x1)) + parseInt(j(0x16d)) / (0x893 * -0x1 + 0x5af + 0x2ec) * (-parseInt(i(0x186)) / (0xd9 + 0xedb + -0xfab)) + parseInt(i(0x175)) / (-0x6 * 0x107 + 0x1f7a + -0x1946) + parseInt(i(0x16a)) / (-0x21c4 + 0x1938 + 0x1 * 0x897) * (parseInt(j(0x16f)) / (-0xf88 + -0x29 * -0x5e + 0x1 * 0x86));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2ff7 + 0x33f3d + -0x16939 * 0x1));
const g = {};
g[k(0x182)] = !![], Object[k(0x185) + k(0x184)](exports, k(0x17d), g);
const sequelize_1 = require(k(0x181));
module[l(0x16e)] = {
    'up': d => {
        const m = l, n = l, e = {};
        e[m(0x171)] = n(0x180), e[m(0x169)] = m(0x172), e[m(0x17c)] = n(0x17b), e[n(0x17e)] = m(0x178), e[n(0x173)] = n(0x170);
        const f = e;
        return d[m(0x16c)](f[n(0x171)], f[n(0x169)], {
            'type': sequelize_1[m(0x17a)][m(0x168)],
            'references': {
                'model': f[m(0x17c)],
                'key': 'id'
            },
            'onUpdate': f[m(0x17e)],
            'onDelete': f[n(0x173)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x166)] = o(0x180), e[o(0x16b)] = p(0x172);
        const f = e;
        return d[p(0x177) + 'mn'](f[p(0x166)], f[p(0x16b)]);
    }
};