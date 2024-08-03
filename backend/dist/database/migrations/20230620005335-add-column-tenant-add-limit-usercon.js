'use strict';
const o = b, p = b;
(function (d, e) {
    const m = b, n = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(m(0x1fd)) / (-0x24c1 + 0x2 * -0x79 + 0x4 * 0x96d) + -parseInt(m(0x1eb)) / (0x259e + -0xa3 * 0x26 + -0xd6a) * (-parseInt(m(0x1fe)) / (-0xd37 + 0x82 + 0xcb8)) + -parseInt(n(0x1ee)) / (-0x3a7 + -0x16a7 + -0x6 * -0x463) + -parseInt(n(0x205)) / (-0x1 * -0xce3 + -0x46 * 0x11 + -0x838) + parseInt(n(0x1ff)) / (-0x1c18 + 0x9ac * -0x1 + 0x25ca) + -parseInt(n(0x1ef)) / (0x5 * 0x4ab + -0xdf0 + -0x960) + parseInt(m(0x1f8)) / (-0x2240 + -0x1a7d * 0x1 + -0x14b * -0x2f);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x1 * 0x4a565 + -0x138755 * 0x1 + -0x6 * -0x5aaef));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x10 * 0x1fd + -0x49b * -0x1 + 0x1d1f);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        '25836aNsdwa',
        'MkYtB',
        'Ipzer',
        '2100768mHfnqs',
        '323848uCMyas',
        'DataTypes',
        'describeTa',
        'addColumn',
        'defineProp',
        'Tenants',
        'maxUsers',
        'BIZxN',
        'type',
        '6354680KDvQSk',
        'orPkO',
        '__esModule',
        'exports',
        'tUKTW',
        '231962oOPSxi',
        '141WJyyLE',
        '2411106HmIean',
        'removeColu',
        'sequelize',
        'erty',
        'maxConnect',
        'CoFFm',
        '4097590zbhLJQ',
        'ions',
        'allowNull',
        'INTEGER',
        'value',
        'ble'
    ];
    a = function () {
        return u;
    };
    return a();
}
const c = {};
c[o(0x209)] = !![], Object[p(0x1f3) + o(0x202)](exports, o(0x1fa), c);
const sequelize_1 = require(o(0x201));
module[o(0x1fb)] = {
    'up': async g => {
        const q = p, r = p, h = {};
        h[q(0x1ed)] = r(0x1f4), h[r(0x1f6)] = r(0x1f5), h[r(0x1fc)] = r(0x203) + q(0x206);
        const i = h, j = await g[q(0x1f1) + r(0x1ea)](i[r(0x1ed)]);
        if (!j || !j[i[q(0x1f6)]]) {
            const k = {};
            k[r(0x1f7)] = sequelize_1[r(0x1f0)][r(0x208)], k[q(0x207)] = !![], await g[q(0x1f2)](i[q(0x1ed)], i[q(0x1f6)], k);
        }
        if (!j || !j[i[q(0x1fc)]]) {
            const l = {};
            l[q(0x1f7)] = sequelize_1[q(0x1f0)][q(0x208)], l[r(0x207)] = !![], await g[q(0x1f2)](i[r(0x1ed)], i[r(0x1fc)], l);
        }
    },
    'down': async e => {
        const s = o, t = o, f = {};
        f[s(0x204)] = s(0x1f4), f[t(0x1f9)] = t(0x1f5), f[s(0x1ec)] = t(0x203) + t(0x206);
        const g = f;
        await e[s(0x200) + 'mn'](g[t(0x204)], g[t(0x1f9)]), await e[t(0x200) + 'mn'](g[s(0x204)], g[s(0x1ec)]);
    }
};