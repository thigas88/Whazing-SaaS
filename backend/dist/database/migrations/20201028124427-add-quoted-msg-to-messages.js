'use strict';
function a() {
    const q = [
        'CASCADE',
        'PgYNh',
        'defineProp',
        '2QzoYft',
        'Messages',
        '789486UXsRyd',
        '2535275rOBZhi',
        '1782987adhydY',
        'sequelize',
        'value',
        'DXoKK',
        '79308pRivPD',
        'removeColu',
        'iAWwL',
        'STRING',
        '171721IpIwuq',
        'SET\x20NULL',
        '4zAOWjG',
        '17451Ihqrsv',
        'addColumn',
        'DataTypes',
        'CeIPo',
        'cObWH',
        '408MCcaZw',
        'quotedMsgI',
        '2686130KhfaGL',
        'exports',
        'OKmqR',
        'erty',
        '664HWIHTm',
        '__esModule',
        '852ZLkyWb'
    ];
    a = function () {
        return q;
    };
    return a();
}
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x1ec)) / (-0x10cc + -0x57 * -0x5f + -0xf7c) + parseInt(i(0x1ea)) / (-0x2e2 + 0x788 * 0x5 + -0x22c4) * (-parseInt(i(0x1ee)) / (0x7db * 0x1 + -0xa9 + -0x72f)) + -parseInt(i(0x1f8)) / (0x12 * 0x83 + -0x1 * 0xd1b + 0x3e9) * (-parseInt(i(0x1ed)) / (0x1 * 0xff7 + 0x4 * -0x558 + -0x56e * -0x1)) + parseInt(j(0x1fe)) / (-0x2d8 + -0x872 + 0xb50) * (-parseInt(i(0x1f9)) / (0x983 + 0x76 + -0x9f2)) + parseInt(i(0x1e4)) / (0xdbf + 0x1af0 + -0x28a7) * (parseInt(i(0x1f2)) / (0x2a3 * -0x4 + -0x55 * -0x3d + -0x9ac)) + parseInt(j(0x200)) / (-0x33a + 0xc6 + 0x27e) + parseInt(i(0x1f6)) / (-0xc33 + 0x13d * -0x1f + -0x3e5 * -0xd) * (-parseInt(j(0x1e6)) / (0x188a + 0x232f + -0x3bad));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4b1 * -0x12 + -0x1081 * 0x1e + 0x81428));
const g = {};
g[k(0x1f0)] = !![], Object[k(0x1e9) + k(0x1e3)](exports, l(0x1e5), g);
const sequelize_1 = require(l(0x1ef));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x109d * -0x1 + -0x262e + 0x45 * 0x57);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[k(0x201)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x1fc)] = m(0x1eb), e[n(0x1f1)] = m(0x1ff) + 'd', e[m(0x1e8)] = n(0x1e7), e[n(0x1fd)] = m(0x1f7);
        const f = e;
        return d[n(0x1fa)](f[n(0x1fc)], f[n(0x1f1)], {
            'type': sequelize_1[m(0x1fb)][m(0x1f5)],
            'references': {
                'model': f[n(0x1fc)],
                'key': 'id'
            },
            'onUpdate': f[m(0x1e8)],
            'onDelete': f[m(0x1fd)]
        });
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0x1e2)] = o(0x1eb), e[o(0x1f4)] = o(0x1ff) + 'd';
        const f = e;
        return d[p(0x1f3) + 'mn'](f[p(0x1e2)], f[o(0x1f4)]);
    }
};