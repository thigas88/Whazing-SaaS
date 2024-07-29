'use strict';
function a() {
    const q = [
        '1081074GKYwPw',
        'queueId',
        'cgXsL',
        'defineProp',
        'erty',
        'FRDYH',
        '333888pSTcbg',
        'SET\x20NULL',
        'sequelize',
        'XaLAE',
        '2760712QgmbRl',
        'removeColu',
        '40592259YsqPGa',
        '78tSVnOr',
        '768075Sjplsc',
        '1326369mefvYZ',
        'addColumn',
        'INTEGER',
        '767753qVNhgZ',
        'Ehazp',
        'CASCADE',
        '__esModule',
        'ycoeC',
        '10cWKvGi',
        'Whatsapps',
        'exports',
        'DataTypes',
        'Queues',
        'value',
        'VdNfS',
        'TxGaC'
    ];
    a = function () {
        return q;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd60 + -0x2636 + 0x356c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x1d7)) / (-0x39 + 0x718 + -0x36f * 0x2) + -parseInt(i(0x1e8)) / (0x511 * 0x3 + -0x1975 * -0x1 + -0x1453 * 0x2) + parseInt(j(0x1d8)) / (0x240b + 0xdbe + -0x31c6) + parseInt(j(0x1f2)) / (0xd * 0x2e6 + -0x131 + -0x2479) * (-parseInt(j(0x1e0)) / (-0x15b * 0xb + 0x2e0 + 0xc0e)) + parseInt(j(0x1d6)) / (-0x18b * -0x19 + -0xcb5 + -0x19d8) * (-parseInt(i(0x1db)) / (-0x2515 + 0x5 * -0x3d6 + -0x384a * -0x1)) + parseInt(i(0x1ee)) / (0x1 * 0x1a57 + 0x9b0 + -0x13 * 0x1e5) + parseInt(i(0x1f4)) / (-0x1681 + 0x8 * 0x440 + -0xb76);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x129d85 + 0xa339 + 0x6b * 0x4b1d));
const g = {};
g[k(0x1e5)] = !![], Object[l(0x1eb) + l(0x1ec)](exports, k(0x1de), g);
const sequelize_1 = require(k(0x1f0));
module[l(0x1e2)] = {
    'up': d => {
        const m = l, n = k, e = {};
        e[m(0x1e6)] = n(0x1e1), e[m(0x1df)] = n(0x1e9), e[n(0x1dc)] = n(0x1e4), e[m(0x1f1)] = m(0x1dd), e[m(0x1ea)] = m(0x1ef);
        const f = e;
        return d[n(0x1d9)](f[n(0x1e6)], f[n(0x1df)], {
            'type': sequelize_1[m(0x1e3)][n(0x1da)],
            'references': {
                'model': f[n(0x1dc)],
                'key': 'id'
            },
            'onUpdate': f[m(0x1f1)],
            'onDelete': f[n(0x1ea)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0x1e7)] = o(0x1e1), e[o(0x1ed)] = p(0x1e9);
        const f = e;
        return d[o(0x1f3) + 'mn'](f[p(0x1e7)], f[o(0x1ed)]);
    }
};