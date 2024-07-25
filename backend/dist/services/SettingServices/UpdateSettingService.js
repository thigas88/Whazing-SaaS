'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0xc0)) / (-0x80a + 0xc45 + -0x43a) * (-parseInt(p(0xd1)) / (-0xed2 + -0x1e47 + 0xf09 * 0x3)) + parseInt(p(0xbf)) / (0x217 + 0x45c + 0x2 * -0x338) * (parseInt(p(0xcc)) / (0x709 + 0xed * 0x17 + -0x1c50)) + -parseInt(p(0xbe)) / (0x11ec + -0x6 * -0x146 + -0x198b) * (parseInt(q(0xc7)) / (-0x990 + -0x236 + -0x14 * -0x97)) + -parseInt(q(0xc9)) / (0x4 * -0x720 + 0x13f9 * -0x1 + 0x3080) * (parseInt(p(0xc3)) / (-0x1f * 0x21 + -0x11af + 0x15b6)) + -parseInt(q(0xca)) / (-0x2048 + 0x603 + 0x1a4e) + -parseInt(q(0xd3)) / (-0x36 * 0x15 + 0x1 * 0x2261 + 0x1f * -0xf7) * (-parseInt(q(0xc8)) / (0x1946 * 0x1 + 0x985 * -0x1 + -0x1 * 0xfb6)) + parseInt(q(0xd7)) / (0x1 * -0x122b + 0x3d * -0x6 + 0x13a5 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4 * -0x374f + 0x32321 + 0x1 * -0x5fd5));
var __importDefault = this && this[r(0xd4) + r(0xcd)] || function (c) {
    const t = s;
    return c && c[t(0xc5)] ? c : { 'default': c };
};
const k = {};
k[r(0xc2)] = !![], Object[r(0xd0) + s(0xd5)](exports, s(0xc5), k);
const Setting_1 = __importDefault(require(s(0xcf) + r(0xd2))), UpdateSettingService = async ({
        key: g,
        value: h,
        tenantId: i
    }) => {
        const u = s, v = s, j = {};
        j[u(0xc4)] = g, j[v(0xc6)] = i;
        const l = {};
        l[u(0xcb)] = j;
        let m = await Setting_1[u(0xc1)][u(0xd6)](l);
        if (!m) {
            const n = {};
            n[v(0xc4)] = g, n[v(0xc2)] = h, n[u(0xc6)] = i, m = await Setting_1[u(0xc1)][v(0xce)](n);
        } else {
            const o = {};
            o[v(0xc2)] = h, await m[v(0xd8)](o);
        }
        return m;
    };
exports[s(0xc1)] = UpdateSettingService;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x67 * -0x9 + -0x2258 + -0x44d * -0x9);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const w = [
        '__esModule',
        'tenantId',
        '465282rQQBUu',
        '22qVpLoN',
        '77WRoseM',
        '4131711YpOOap',
        'where',
        '2700qnEyFQ',
        'fault',
        'create',
        '../../mode',
        'defineProp',
        '311324oCOVLZ',
        'ls/Setting',
        '917470FLqYgM',
        '__importDe',
        'erty',
        'findOne',
        '3814368KkGLVv',
        'update',
        '5jUtXvE',
        '1077bZcgkE',
        '1yABnhS',
        'default',
        'value',
        '90920SiJyzD',
        'key'
    ];
    a = function () {
        return w;
    };
    return a();
}