'use strict';
const n = b, o = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xb2f + -0xb6f + 0x197);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x158)) / (0x14 * -0x12f + -0x277 * -0x3 + 0x1048) + parseInt(l(0x15a)) / (-0x2 * 0x7ed + 0x2401 + -0x1425) * (parseInt(m(0x15d)) / (-0x2b * -0x65 + -0x1 * 0x13 + 0x95 * -0x1d)) + parseInt(l(0x161)) / (-0x3 * -0xc1e + -0x2 * -0x105b + -0xc * 0x5c1) * (parseInt(l(0x178)) / (-0x7 * 0x42d + 0x1448 + -0x11f * -0x8)) + parseInt(m(0x15f)) / (0xb54 + 0x14da + 0xc * -0x2ae) * (-parseInt(l(0x16c)) / (-0x4ba + 0xe * 0x2c5 + -0x2205 * 0x1)) + parseInt(m(0x160)) / (-0x62c * 0x6 + 0x1 * 0x2569 + -0x1 * 0x59) * (parseInt(l(0x16b)) / (-0xc4f + 0x1f85 + -0x132d)) + parseInt(l(0x175)) / (0xb * -0x1a1 + 0x13e * 0x1f + -0x148d) * (-parseInt(m(0x165)) / (0x1672 + -0x3ce * 0x7 + 0x43b)) + parseInt(l(0x15c)) / (-0x2694 + 0x1 * -0x166d + 0x3d0d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1db693 + 0x1d32c6 + -0x2bf2ef));
function a() {
    const t = [
        'value',
        'Tenants_ow',
        'changeColu',
        'exports',
        'traint',
        '70ZFdgHG',
        'nUzsF',
        'ownerId',
        '5ATuvWY',
        'INTEGER',
        '__esModule',
        'DataTypes',
        '319775dUIdeM',
        'all',
        '1551162FsZSgi',
        'sequelize',
        '12217692sgxORR',
        '3yUqqfc',
        'uVQVv',
        '66hvqYxE',
        '8fxUUkM',
        '2909604iHQRWh',
        'Tklam',
        'erty',
        'defineProp',
        '1889877GpFJYS',
        'removeCons',
        'JZlSg',
        'CASCADE',
        'Tenants',
        'QGisE',
        '7044579sMxvVY',
        '509628rIuSnu',
        'nerId_fkey',
        'BPIlW',
        'bTNQR'
    ];
    a = function () {
        return t;
    };
    return a();
}
const k = {};
k[n(0x170)] = !![], Object[n(0x164) + n(0x163)](exports, n(0x17a), k);
const sequelize_1 = require(o(0x15b));
module[n(0x173)] = {
    'up': d => {
        const p = o, q = o, e = {};
        e[p(0x16e)] = p(0x169), e[p(0x167)] = p(0x171) + p(0x16d), e[p(0x16a)] = p(0x177), e[p(0x162)] = q(0x168);
        const f = e;
        return Promise[p(0x159)]([
            d[p(0x166) + p(0x174)](f[p(0x16e)], f[p(0x167)]),
            d[p(0x172) + 'mn'](f[q(0x16e)], f[p(0x16a)], {
                'type': sequelize_1[q(0x157)][q(0x179)],
                'references': {
                    'model': f[q(0x16e)],
                    'key': 'id'
                },
                'onUpdate': f[q(0x162)],
                'onDelete': f[p(0x162)],
                'allowNull': !![]
            })
        ]);
    },
    'down': d => {
        const r = n, s = o, e = {};
        e[r(0x15e)] = r(0x169), e[r(0x16f)] = r(0x177), e[s(0x176)] = s(0x168);
        const f = e;
        return Promise[s(0x159)]([d[r(0x172) + 'mn'](f[s(0x15e)], f[r(0x16f)], {
                'type': sequelize_1[s(0x157)][r(0x179)],
                'references': {
                    'model': f[s(0x15e)],
                    'key': 'id'
                },
                'onUpdate': f[r(0x176)],
                'onDelete': f[s(0x176)],
                'allowNull': !![]
            })]);
    }
};