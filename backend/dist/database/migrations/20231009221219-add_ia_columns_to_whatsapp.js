'use strict';
const o = b, p = b;
(function (d, e) {
    const m = b, n = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(m(0x10d)) / (0x1435 + -0x794 * 0x2 + -0x11 * 0x4c) * (-parseInt(m(0x11e)) / (0x2065 * -0x1 + -0x109a + 0x3101)) + parseInt(m(0x129)) / (0x1 * -0xc7 + 0x1 * -0x1b7f + -0xd * -0x22d) + -parseInt(n(0x12a)) / (-0x5f + 0x1 * -0xcaa + 0xd0d) * (-parseInt(n(0x10e)) / (0x99e * 0x1 + -0x5bc + -0x3dd)) + parseInt(m(0x128)) / (0x2 * 0x16e + -0x24b4 + 0xa * 0x363) * (-parseInt(n(0x12c)) / (0xcca * -0x3 + -0x9b4 + -0x1 * -0x3019)) + parseInt(n(0x11a)) / (-0x10d1 * -0x1 + 0x1c99 + -0x2d62) * (parseInt(n(0x10c)) / (-0x22aa + 0x7 * 0x2 + 0x22a5)) + -parseInt(m(0x124)) / (-0x2599 + -0x1c44 + 0x41e7) * (-parseInt(n(0x122)) / (0x343 + -0x2 * -0xd21 + -0x1d7a)) + parseInt(n(0x11c)) / (0x1 * -0x26a4 + -0xd * 0x2a9 + -0x1 * -0x4945) * (parseInt(m(0x11f)) / (0x4ae + 0x4d5 * 0x5 + 0x2 * -0xe65));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x38c * 0x421 + 0x25f45 + 0x150eb5));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x6e * -0x59 + 0x9a * 0x2b + -0x3f13);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        'xgmia',
        '6185556DjCpRF',
        'exports',
        '241630GCMelf',
        '13czobTU',
        'describeTa',
        'type',
        '7711hXFszs',
        'defineProp',
        '4970tvEEzJ',
        'kkjzN',
        'Whatsapps',
        'jNRsH',
        '24WeSYkb',
        '618342lCopdC',
        '2378008dTPTQq',
        'INTEGER',
        '1950200aEOjMn',
        '__esModule',
        'is_open_ia',
        'DataTypes',
        'sequelize',
        'addColumn',
        '23967FMfgBm',
        '1CuJqvU',
        '5oKjTXw',
        'ble',
        'erty',
        'allowNull',
        'defaultVal',
        'EHQeZ',
        'value',
        'BOOLEAN',
        'mnnYn',
        'removeColu',
        'HrBRI',
        'queue_tran',
        '440RVOsDX'
    ];
    a = function () {
        return u;
    };
    return a();
}
const c = {};
c[o(0x114)] = !![], Object[o(0x123) + o(0x110)](exports, o(0x12d), c);
const sequelize_1 = require(p(0x10a));
module[p(0x11d)] = {
    'up': async g => {
        const q = p, r = o, h = {};
        h[q(0x113)] = r(0x126), h[q(0x11b)] = r(0x12e), h[r(0x127)] = r(0x119) + 'sf';
        const i = h, j = await g[q(0x120) + q(0x10f)](i[r(0x113)]);
        if (!j || !j[i[q(0x11b)]]) {
            const k = {};
            k[r(0x121)] = sequelize_1[r(0x109)][q(0x115)], k[q(0x112) + 'ue'] = ![], k[q(0x111)] = !![], await g[r(0x10b)](i[q(0x113)], i[r(0x11b)], k);
        }
        if (!j || !j[i[q(0x127)]]) {
            const l = {};
            l[q(0x121)] = sequelize_1[q(0x109)][r(0x12b)], l[q(0x111)] = !![], await g[q(0x10b)](i[q(0x113)], i[r(0x127)], l);
        }
    },
    'down': async e => {
        const s = p, t = p, f = {};
        f[s(0x118)] = t(0x126), f[s(0x125)] = t(0x12e), f[s(0x116)] = t(0x119) + 'sf';
        const g = f;
        await e[t(0x117) + 'mn'](g[s(0x118)], g[t(0x125)]), await e[t(0x117) + 'mn'](g[t(0x118)], g[t(0x116)]);
    }
};