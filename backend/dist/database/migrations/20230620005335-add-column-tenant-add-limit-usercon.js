'use strict';
function a() {
    const u = [
        '__esModule',
        'type',
        'maxConnect',
        '4QCakyK',
        '843304DQbISu',
        'xngPI',
        'maxUsers',
        '25101qPxBKg',
        'exports',
        '600JWKwxr',
        'GjMpX',
        'ble',
        '1142334eNuhDh',
        'value',
        '260327TyUPBq',
        'Tenants',
        'defineProp',
        '7438260uxXhzZ',
        'WTThQ',
        'addColumn',
        'DataTypes',
        'describeTa',
        'allowNull',
        'removeColu',
        'ions',
        'YMnqv',
        '1073178ylLBeT',
        'INTEGER',
        'sequelize',
        '10MvyHho',
        '1254069mcaWnR',
        'erty',
        'VQwco',
        'OPuqn'
    ];
    a = function () {
        return u;
    };
    return a();
}
const o = b, p = b;
(function (d, e) {
    const m = b, n = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(m(0x20b)) / (-0x2f6 + -0x3ee * -0x2 + 0xb3 * -0x7) + -parseInt(m(0x1f5)) / (-0x1f2c + -0x296 * 0x6 + 0x2eb2) + parseInt(m(0x1f9)) / (-0x107 * 0xd + 0x149e + -0x8 * 0xe8) * (parseInt(n(0x200)) / (-0x1 * -0x10e7 + 0x73b + -0x181e)) + -parseInt(m(0x1f8)) / (0x8e0 + 0x2 * 0xb25 + 0x1 * -0x1f25) * (parseInt(m(0x209)) / (-0x1331 + 0x201a + -0xce3)) + parseInt(n(0x201)) / (-0xedf + 0x231f + -0x1439) + parseInt(n(0x206)) / (-0xb27 * 0x1 + 0x122e * -0x2 + 0x2f8b) * (-parseInt(m(0x204)) / (-0x7c9 * -0x1 + -0x2566 + -0x159 * -0x16)) + parseInt(n(0x20e)) / (-0x1559 + 0xe * 0x1bb + -0x2d7);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0x4 * -0x1d6f3 + -0x229f * -0x17 + 0xa98ed));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x25bd + -0x23a5 + -0x27);
        let h = e[f];
        return h;
    }, b(c, d);
}
const c = {};
c[o(0x20a)] = !![], Object[p(0x20d) + p(0x1fa)](exports, p(0x1fd), c);
const sequelize_1 = require(p(0x1f7));
module[o(0x205)] = {
    'up': async g => {
        const q = o, r = p, h = {};
        h[q(0x1fb)] = q(0x20c), h[q(0x1f4)] = q(0x203), h[r(0x20f)] = r(0x1ff) + r(0x1f3);
        const i = h, j = await g[q(0x212) + r(0x208)](i[q(0x1fb)]);
        if (!j || !j[i[q(0x1f4)]]) {
            const k = {};
            k[q(0x1fe)] = sequelize_1[r(0x211)][r(0x1f6)], k[q(0x1f1)] = !![], await g[r(0x210)](i[q(0x1fb)], i[q(0x1f4)], k);
        }
        if (!j || !j[i[q(0x20f)]]) {
            const l = {};
            l[r(0x1fe)] = sequelize_1[q(0x211)][r(0x1f6)], l[q(0x1f1)] = !![], await g[r(0x210)](i[q(0x1fb)], i[r(0x20f)], l);
        }
    },
    'down': async e => {
        const s = p, t = o, f = {};
        f[s(0x207)] = t(0x20c), f[s(0x1fc)] = s(0x203), f[s(0x202)] = t(0x1ff) + t(0x1f3);
        const g = f;
        await e[s(0x1f2) + 'mn'](g[s(0x207)], g[t(0x1fc)]), await e[s(0x1f2) + 'mn'](g[s(0x207)], g[s(0x202)]);
    }
};