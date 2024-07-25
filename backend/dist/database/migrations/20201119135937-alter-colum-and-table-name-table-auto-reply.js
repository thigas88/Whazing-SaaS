'use strict';
const p = b, q = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x21f5 + -0x1 * -0x1641 + -0x3 * 0x1280);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0xbd)) / (-0x755 * 0x2 + 0x25 * -0xe8 + 0x1b * 0x1c9) + -parseInt(n(0xca)) / (-0x177a + -0x11ff * 0x1 + 0x297b) + parseInt(o(0xbc)) / (-0x1361 + 0x77 * 0x40 + -0xa5c) + parseInt(n(0xbb)) / (0x16e0 + -0x1 * -0xccd + -0x23a9) + -parseInt(n(0xc1)) / (0x2442 + 0x1ea5 + 0x42e2 * -0x1) + -parseInt(n(0xbf)) / (-0x8 * -0x371 + 0x1 * 0x15d0 + -0x3152) + parseInt(n(0xcf)) / (-0xd0b + 0x134a + 0x4 * -0x18e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2dd * -0x131 + 0x1 * 0x30d7b + -0x4082f));
function a() {
    const v = [
        '138458YreRiz',
        'name',
        'DRZmG',
        'erty',
        'eEGrd',
        '4516190JQPhIp',
        'defineProp',
        'removeColu',
        'STRING',
        'all',
        'sequelize',
        'value',
        'renameColu',
        'DataTypes',
        'Pweql',
        'exports',
        'feyDQ',
        '358248NGsVYS',
        '29991iScKNt',
        '155099mJqlSi',
        'reply',
        '1683138FoycYl',
        'lrYJT',
        '402465XdsaLF',
        'AutoReply',
        'addColumn',
        'hqCLE',
        'words',
        'ARRAY',
        'tcVlP',
        'ESSuo',
        '__esModule'
    ];
    a = function () {
        return v;
    };
    return a();
}
const m = {};
m[p(0xd5)] = !![], Object[q(0xd0) + q(0xcd)](exports, p(0xc9), m);
const sequelize_1 = require(p(0xd4));
module[q(0xb9)] = {
    'up': d => {
        const r = p, s = q, e = {};
        e[r(0xb8)] = s(0xc2), e[s(0xc8)] = s(0xbe), e[r(0xc0)] = s(0xcb), e[s(0xc4)] = s(0xc5);
        const f = e;
        return Promise[r(0xd3)]([
            d[s(0xb6) + 'mn'](f[r(0xb8)], f[r(0xc8)], f[r(0xc0)]),
            d[r(0xd1) + 'mn'](f[r(0xb8)], f[r(0xc4)])
        ]);
    },
    'down': d => {
        const t = q, u = p, e = {};
        e[t(0xba)] = u(0xc2), e[u(0xce)] = u(0xcb), e[t(0xcc)] = u(0xbe), e[u(0xc7)] = u(0xc5);
        const f = e;
        return Promise[t(0xd3)]([
            d[u(0xb6) + 'mn'](f[u(0xba)], f[t(0xce)], f[u(0xcc)]),
            d[t(0xc3)](f[t(0xba)], f[u(0xc7)], { 'type': sequelize_1[u(0xb7)][t(0xc6)](sequelize_1[t(0xb7)][t(0xd2)]) })
        ]);
    }
};