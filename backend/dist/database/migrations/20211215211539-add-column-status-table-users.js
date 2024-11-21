'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(j(0x176)) / (-0xc07 * 0x2 + 0x98c * 0x1 + 0xe83) * (parseInt(j(0x17a)) / (-0xe5 * -0x19 + -0x2333 + -0x8 * -0x19b)) + -parseInt(j(0x168)) / (0x1 * -0x5fc + 0x117d + 0xb7e * -0x1) * (-parseInt(j(0x16e)) / (-0x2307 + 0x17ec * -0x1 + 0x3af7 * 0x1)) + -parseInt(k(0x17e)) / (-0x16c5 + -0x1371 + 0x2a3b) * (parseInt(j(0x183)) / (-0x1feb + -0x108 * -0x7 + -0x1 * -0x18b9)) + -parseInt(j(0x170)) / (-0x1a8d + -0x245 * -0x7 + 0x11 * 0xa1) * (parseInt(k(0x174)) / (0x1c3e + -0x14f + -0x1ae7)) + parseInt(j(0x178)) / (0x7f2 + 0x18b0 + -0x1 * 0x2099) + parseInt(k(0x169)) / (0x1d29 * -0x1 + 0x212c + -0x153 * 0x3) * (parseInt(k(0x16c)) / (0x2e * -0x50 + -0xe97 + 0x1d02)) + parseInt(k(0x173)) / (-0x1 * 0x1c9b + 0x9e0 + 0x12c7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5f0e2 + 0x15 * -0x112c + 0x13 * 0x12d58));
const i = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x35f * -0xb + 0x13 * 0x209 + -0x30);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const r = [
        'defineProp',
        'sequelize',
        '35977812ENhKBG',
        '8JxNVTl',
        'exports',
        '702919ASmhAD',
        'offline',
        '10653615qFzvzt',
        'addColumn',
        '2hDvbjV',
        'STRING',
        'all',
        'FBuRN',
        '10NEbziB',
        '__esModule',
        'removeColu',
        'AJJSQ',
        'Users',
        '3101298sxSXsX',
        'GoIyh',
        'erty',
        'FekQD',
        '3jIFlMV',
        '2184120fBoXlC',
        'value',
        'DataTypes',
        '11xAUVgp',
        'status',
        '126064OnDDSv',
        'YzMPq',
        '11977385QCulWw'
    ];
    a = function () {
        return r;
    };
    return a();
}
i[l(0x16a)] = !![], Object[m(0x171) + m(0x166)](exports, m(0x17f), i);
const sequelize_1 = require(l(0x172));
module[m(0x175)] = {
    'up': d => {
        const n = m, o = l, e = {};
        e[n(0x17d)] = o(0x182), e[n(0x16f)] = n(0x16d), e[n(0x167)] = o(0x177);
        const f = e;
        return Promise[o(0x17c)]([d[o(0x179)](f[n(0x17d)], f[n(0x16f)], {
                'type': sequelize_1[n(0x16b)][o(0x17b)],
                'allowNull': ![],
                'defaultValue': f[n(0x167)]
            })]);
    },
    'down': d => {
        const p = m, q = l, e = {};
        e[p(0x184)] = q(0x182), e[q(0x181)] = q(0x16d);
        const f = e;
        return Promise[q(0x17c)]([d[p(0x180) + 'mn'](f[p(0x184)], f[p(0x181)])]);
    }
};