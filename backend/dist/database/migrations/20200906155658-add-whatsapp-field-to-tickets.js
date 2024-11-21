'use strict';
const k = b, l = b;
function a() {
    const q = [
        'addColumn',
        'tEKvm',
        'tHpmd',
        '124nxVhRL',
        '__esModule',
        'CASCADE',
        'DataTypes',
        '106377qMCgqb',
        '27boljvc',
        'Whatsapps',
        '66aJURpu',
        'BWFFb',
        '1708WJwJDL',
        'erty',
        'INTEGER',
        '1153548ILtrgk',
        'mSLII',
        '4164RwwlDD',
        'aprWO',
        '29034zQbjEF',
        'sequelize',
        '2106860fVXcWi',
        'whatsappId',
        '2820gEiVpD',
        'SET\x20NULL',
        'Tickets',
        'sUniV',
        'sUxeX',
        'defineProp',
        '2171832aRFuHP',
        'exports',
        'value',
        'removeColu'
    ];
    a = function () {
        return q;
    };
    return a();
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x1a6)) / (0xf74 * 0x1 + 0x12ae + -0x2221) + -parseInt(i(0x1a2)) / (-0x73 * 0xa + 0x2 * -0xe7d + -0x217a * -0x1) * (-parseInt(j(0x1b2)) / (0x20bf + 0x2cf * 0x1 + -0x238b)) + parseInt(j(0x1b0)) / (0x85b + 0xbc8 + -0x141f) * (-parseInt(i(0x1b6)) / (-0x2527 + -0x1dd7 + -0x16d * -0x2f)) + parseInt(i(0x1a9)) / (-0x1 * 0x10ca + -0x145c + -0x4 * -0x94b) * (-parseInt(j(0x1ab)) / (0x1aba + -0x7 * -0x471 + -0x39ca)) + -parseInt(j(0x1bc)) / (0xfe * 0x1 + -0x1d9b + 0x1ca5) + parseInt(i(0x1a7)) / (0x38 + 0x17 * -0xbf + 0x87d * 0x2) * (parseInt(j(0x1b4)) / (-0x81 * 0x1 + 0xbce + -0x1f * 0x5d)) + parseInt(j(0x1ae)) / (-0x15c3 + -0x1391 + 0x295f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x95f8b + -0x17f4d + 0x10816a));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x108e + 0x191c + -0x1 * 0x280a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const g = {};
g[k(0x1be)] = !![], Object[l(0x1bb) + l(0x1ac)](exports, k(0x1a3), g);
const sequelize_1 = require(l(0x1b3));
module[k(0x1bd)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x1af)] = n(0x1b8), e[m(0x1b1)] = m(0x1b5), e[m(0x1aa)] = m(0x1a8), e[n(0x1a1)] = n(0x1a4), e[n(0x1a0)] = m(0x1b7);
        const f = e;
        return d[n(0x1c0)](f[n(0x1af)], f[n(0x1b1)], {
            'type': sequelize_1[n(0x1a5)][n(0x1ad)],
            'references': {
                'model': f[n(0x1aa)],
                'key': 'id'
            },
            'onUpdate': f[n(0x1a1)],
            'onDelete': f[m(0x1a0)]
        });
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0x1ba)] = p(0x1b8), e[o(0x1b9)] = o(0x1b5);
        const f = e;
        return d[o(0x1bf) + 'mn'](f[o(0x1ba)], f[o(0x1b9)]);
    }
};