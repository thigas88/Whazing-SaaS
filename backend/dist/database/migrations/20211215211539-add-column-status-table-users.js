'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(j(0x9e)) / (-0xc8a + 0x18 * 0x1a + 0xa1b) * (parseInt(j(0xa1)) / (-0xb0b * -0x1 + 0x2 * 0x576 + -0x15f5)) + parseInt(j(0xa9)) / (0x627 + -0x1772 * 0x1 + 0x114e) * (-parseInt(j(0xa5)) / (0xd5 * 0x1f + 0x860 * 0x4 + 0xbdb * -0x5)) + -parseInt(k(0xa0)) / (0x66b * -0x2 + 0x34a * -0xb + -0x1 * -0x3109) + -parseInt(k(0x98)) / (0x4 * 0x770 + -0x9 * 0x1de + -0x2 * 0x676) + parseInt(k(0x9f)) / (0x2562 + 0x726 + -0x2c81) * (-parseInt(j(0x9c)) / (-0xcbe + -0x4a8 * 0x1 + -0x2e * -0x61)) + parseInt(j(0xa2)) / (-0x1 * -0x18eb + 0x198 + 0x1a7a * -0x1) * (parseInt(j(0xa3)) / (-0x25e4 + -0x7db * 0x3 + 0x3d7f)) + parseInt(j(0xa4)) / (0xc14 + -0x76 * 0x3d + 0x1015) * (parseInt(j(0xb1)) / (0xb89 * 0x3 + 0x12ab + -0x353a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4c5 * 0x11c + 0xaff4 * 0x2 + 0x96224));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7 * 0x3f4 + 0x1 * -0x6df + 0x231e * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const i = {};
i[l(0xa7)] = !![], Object[m(0xac) + m(0x99)](exports, l(0xaa), i);
function a() {
    const r = [
        'sequelize',
        'defineProp',
        'Users',
        'ralYU',
        'offline',
        'exports',
        '2532YBdTPJ',
        'JPkEZ',
        'QwJdc',
        'Yqtbz',
        'addColumn',
        'DataTypes',
        '3468318zKsQpr',
        'erty',
        'status',
        'opAxG',
        '10424PxCqsO',
        'removeColu',
        '314399wPHTAD',
        '3325MpXfnS',
        '1390715DQafOb',
        '4SeOEJX',
        '10512NgEgOF',
        '4370BDcMNM',
        '134827ZoGKGl',
        '168xDwgJO',
        'all',
        'value',
        'STRING',
        '45318AFrtIP',
        '__esModule'
    ];
    a = function () {
        return r;
    };
    return a();
}
const sequelize_1 = require(m(0xab));
module[l(0xb0)] = {
    'up': d => {
        const n = l, o = l, e = {};
        e[n(0x95)] = o(0xad), e[n(0xae)] = o(0x9a), e[n(0x93)] = o(0xaf);
        const f = e;
        return Promise[n(0xa6)]([d[n(0x96)](f[o(0x95)], f[n(0xae)], {
                'type': sequelize_1[n(0x97)][n(0xa8)],
                'allowNull': ![],
                'defaultValue': f[o(0x93)]
            })]);
    },
    'down': d => {
        const p = l, q = m, e = {};
        e[p(0x94)] = p(0xad), e[q(0x9b)] = p(0x9a);
        const f = e;
        return Promise[q(0xa6)]([d[p(0x9d) + 'mn'](f[q(0x94)], f[p(0x9b)])]);
    }
};