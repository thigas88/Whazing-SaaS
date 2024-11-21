'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x5 * -0x18d + 0x26ed + 0x93d * -0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const t = [
        'QueueInteg',
        'defineProp',
        '54gzeznR',
        '1680816oWBhYp',
        '137990TFzQdm',
        'dvRPa',
        '45VmRorK',
        'KqtpI',
        'QFQZI',
        '1123lGdTiN',
        'value',
        '5501104jcWsgf',
        'exports',
        '1074nRyOiv',
        'useIntegra',
        'Tickets',
        'all',
        'DataTypes',
        'erty',
        '__esModule',
        'BBPwV',
        'HlGUa',
        'sequelize',
        'nId',
        'INTEGER',
        'removeColu',
        'type',
        'defaultVal',
        'addColumn',
        'allowNull',
        'asbJM',
        'tion',
        'integratio',
        'rations',
        '154640lOynpS',
        '822519OEAGgU',
        '1900088bGzADW',
        'BOOLEAN',
        'UsrQT'
    ];
    a = function () {
        return t;
    };
    return a();
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x97)) / (0x188e + -0x1db9 + 0x52c) * (parseInt(l(0x9b)) / (0x1e75 + -0x17 * -0x8b + -0x2af0)) + parseInt(m(0x8a)) / (0x2705 + 0xd * 0x266 + -0x8 * 0x8c6) + -parseInt(l(0x8b)) / (-0x42 * -0x61 + -0x57b * -0x3 + 0x296f * -0x1) + parseInt(m(0x89)) / (-0x2a * -0x1d + -0xce + -0x3ef) * (-parseInt(m(0x90)) / (0x5c6 * -0x1 + 0x1 * 0x2157 + -0x1b8b)) + parseInt(l(0x99)) / (-0xc7 * 0xf + -0x1727 * 0x1 + 0x22d7) + -parseInt(m(0x91)) / (0x17 * 0xb5 + -0xb2a + -0x511) + parseInt(l(0x94)) / (0x37c + -0xc2f + 0x45e * 0x2) * (-parseInt(l(0x92)) / (-0x952 + 0x1 * 0x409 + 0x553));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x10189f + 0x41bf5 + -0x12329 * -0x13));
const k = {};
k[n(0x98)] = !![], Object[o(0x8f) + n(0xa0)](exports, n(0xa1), k);
const sequelize_1 = require(n(0x7d));
module[o(0x9a)] = {
    'up': e => {
        const p = n, q = o, f = {};
        f[p(0xa3)] = q(0x9d), f[q(0xa2)] = p(0x9c) + q(0x86), f[p(0x95)] = p(0x87) + p(0x7e), f[q(0x93)] = q(0x8e) + q(0x88);
        const g = f, h = {};
        return h[q(0x81)] = sequelize_1[p(0x9f)][p(0x8c)], h[q(0x82) + 'ue'] = ![], h[p(0x84)] = !![], (e[q(0x83)](g[p(0xa3)], g[p(0xa2)], h), e[q(0x83)](g[q(0xa3)], g[q(0x95)], {
            'references': {
                'model': g[p(0x93)],
                'key': 'id'
            },
            'type': sequelize_1[q(0x9f)][p(0x7f)],
            'defaultValue': null,
            'allowNull': !![]
        }));
    },
    'down': d => {
        const r = n, s = n, e = {};
        e[r(0x85)] = r(0x9d), e[r(0x96)] = s(0x9c) + r(0x86), e[r(0x8d)] = r(0x87) + s(0x7e);
        const f = e;
        return Promise[r(0x9e)]([
            d[s(0x80) + 'mn'](f[r(0x85)], f[s(0x96)]),
            d[r(0x80) + 'mn'](f[s(0x85)], f[r(0x8d)])
        ]);
    }
};