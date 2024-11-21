'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * -0xdf0 + -0x6e5 + 0x1 * -0x1467);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0xa5)) / (0x2 * -0xb11 + -0xc88 + -0x7d * -0x47) * (-parseInt(i(0x9c)) / (-0x2c1 * -0x7 + 0x5f3 * -0x1 + -0xd52)) + -parseInt(j(0xb0)) / (0x366 + -0x12b9 + 0xd * 0x12e) + -parseInt(j(0x9e)) / (-0x2177 * 0x1 + 0x1ed7 + -0x1a * -0x1a) * (parseInt(i(0x97)) / (0x1888 + -0x2643 + 0xdc0)) + parseInt(j(0x9b)) / (-0x19 * -0x4b + 0x5 * 0x295 + 0x18e * -0xd) + parseInt(i(0x9d)) / (0x21e6 + 0x2 * 0x816 + 0x22d * -0x17) + parseInt(i(0xad)) / (-0x119f * 0x1 + -0xc17 + 0x1dbe) * (-parseInt(j(0xa8)) / (-0xa93 + 0x4fc * 0x7 + -0x1848)) + parseInt(i(0xae)) / (-0x2302 + 0x8 * 0x44f + 0x94 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x51bd1 * -0x1 + 0x4e1f5 * 0x5 + -0x55238));
function a() {
    const q = [
        'DataTypes',
        'INTEGER',
        'erty',
        '696405nDDmiP',
        'addColumn',
        'Agtjk',
        'defineProp',
        '1890420SPToiu',
        '2vvuSXv',
        '10071502zMrbGx',
        '36NILJeT',
        'QPspZ',
        'sequelize',
        'WocpO',
        'Actions',
        'StepsReply',
        'value',
        '198761OLNTki',
        '__esModule',
        'WGELZ',
        '4077ftaUTs',
        'CASCADE',
        'exports',
        'MXHAo',
        'nextStep',
        '11992bNoZCv',
        '30109720ckpDnj',
        'removeColu',
        '5151225CvAKDr',
        'oMVaR'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0xa4)] = !![], Object[k(0x9a) + l(0x96)](exports, k(0xa6), g);
const sequelize_1 = require(k(0xa0));
module[k(0xaa)] = {
    'up': d => {
        const m = l, n = l, e = {};
        e[m(0xa7)] = m(0xa3) + n(0xa2), e[n(0xab)] = n(0xac), e[n(0x9f)] = m(0xa3), e[m(0x99)] = m(0xa9);
        const f = e;
        return d[m(0x98)](f[m(0xa7)], f[m(0xab)], {
            'type': sequelize_1[n(0x94)][n(0x95)],
            'references': {
                'model': f[n(0x9f)],
                'key': 'id'
            },
            'onUpdate': f[n(0x99)],
            'onDelete': f[n(0x99)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0xb1)] = o(0xa3) + p(0xa2), e[p(0xa1)] = o(0xac);
        const f = e;
        return d[p(0xaf) + 'mn'](f[p(0xb1)], f[p(0xa1)]);
    }
};