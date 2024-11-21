'use strict';
const o = b, p = b;
(function (d, e) {
    const m = b, n = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(m(0x87)) / (-0x19 * 0x10d + 0x2d4 * 0x6 + 0x94e * 0x1) * (parseInt(m(0x85)) / (0x220a + -0x1fcd + 0x23b * -0x1)) + -parseInt(m(0x83)) / (0x28 * -0x55 + 0xb * 0x53 + 0xa * 0xf9) * (parseInt(m(0x84)) / (-0x8 * 0x2ea + 0x1 * 0x1c2d + -0x4d9)) + -parseInt(m(0x8c)) / (0x67a * -0x5 + 0x5f * -0x3 + 0x6 * 0x596) + -parseInt(n(0x81)) / (0xd * 0x185 + 0x126c + 0x2627 * -0x1) + -parseInt(m(0x80)) / (-0x1994 + 0x1 * -0xf25 + 0x1 * 0x28c0) * (-parseInt(n(0x8e)) / (0x142 + 0xd7e + -0xeb8)) + parseInt(n(0x7f)) / (-0xca9 + -0x1703 + 0x23b5) * (-parseInt(m(0x93)) / (-0x120d + -0x1dc5 + -0x1 * -0x2fdc)) + parseInt(m(0x7b)) / (-0x152 * 0x1b + 0x227e + 0x133);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0x7 * 0x123b + 0x25 * 0x1159 + -0x31576 * -0x1));
function a() {
    const u = [
        'value',
        'addColumn',
        'defineProp',
        'type',
        '20528981eIBaYI',
        'describeTa',
        'maxUsers',
        'AfFrt',
        '675wAsTIq',
        '2168516zqdRKZ',
        '1498746CvUFza',
        'xfhuK',
        '2085399zvlKLg',
        '4gXulJe',
        '390166BlhEtG',
        'removeColu',
        '3uZoajG',
        'maxConnect',
        'BTVbC',
        'erty',
        '__esModule',
        '1101805ldoDZO',
        'exports',
        '16fQYpHT',
        'INTEGER',
        'sequelize',
        'Tenants',
        'iPyav',
        '44830yyjewh',
        'ions',
        'allowNull',
        'OrlOG',
        'DycYh',
        'DataTypes',
        'ble'
    ];
    a = function () {
        return u;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1b69 + -0x1 * -0x13de + -0x2ed2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const c = {};
c[o(0x77)] = !![], Object[p(0x79) + p(0x8a)](exports, p(0x8b), c);
const sequelize_1 = require(o(0x90));
module[p(0x8d)] = {
    'up': async g => {
        const q = o, r = p, h = {};
        h[q(0x89)] = q(0x91), h[r(0x92)] = q(0x7d), h[q(0x82)] = r(0x88) + q(0x94);
        const i = h, j = await g[r(0x7c) + r(0x76)](i[r(0x89)]);
        if (!j || !j[i[r(0x92)]]) {
            const k = {};
            k[q(0x7a)] = sequelize_1[q(0x75)][q(0x8f)], k[r(0x95)] = !![], await g[r(0x78)](i[r(0x89)], i[q(0x92)], k);
        }
        if (!j || !j[i[r(0x82)]]) {
            const l = {};
            l[q(0x7a)] = sequelize_1[q(0x75)][q(0x8f)], l[q(0x95)] = !![], await g[q(0x78)](i[r(0x89)], i[q(0x82)], l);
        }
    },
    'down': async e => {
        const s = o, t = p, f = {};
        f[s(0x7e)] = t(0x91), f[s(0x97)] = t(0x7d), f[s(0x96)] = s(0x88) + s(0x94);
        const g = f;
        await e[s(0x86) + 'mn'](g[s(0x7e)], g[s(0x97)]), await e[t(0x86) + 'mn'](g[t(0x7e)], g[s(0x96)]);
    }
};