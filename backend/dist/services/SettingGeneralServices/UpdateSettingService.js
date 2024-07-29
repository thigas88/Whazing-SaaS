'use strict';
function a() {
    const w = [
        '../../mode',
        'defineProp',
        '3xpZAwo',
        'ls/Setting',
        'default',
        '6MOWSkb',
        'key',
        'ERR_NO_SET',
        '__importDe',
        '2845512hScFIg',
        'fault',
        'update',
        'blWaY',
        '../../erro',
        'rs/AppErro',
        'value',
        'erty',
        'sGeneral',
        'findOne',
        '2934350fhwLAh',
        '900436oadeix',
        '3512934IapTjJ',
        '21645980SBIASd',
        '__esModule',
        '1296ydUgCt',
        'where',
        'TING_FOUND',
        '1489296HPCAuv',
        '8232ZOCrAH'
    ];
    a = function () {
        return w;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1985 * 0x1 + -0x13c3 + 0x2e06);
        let h = e[f];
        return h;
    }, b(c, d);
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xc1)) / (0x18b4 + -0x21d9 + 0x926 * 0x1) + -parseInt(q(0xcc)) / (-0x2 * 0x6ab + 0x47 * 0x3c + -0xd3 * 0x4) + -parseInt(q(0xc5)) / (-0x19ed + 0x1589 + -0x31 * -0x17) * (parseInt(q(0xd7)) / (-0xfad + 0x20a2 + 0x10f1 * -0x1)) + -parseInt(p(0xd6)) / (-0x1 * 0x1b1d + 0x1c42 + -0x120) * (parseInt(q(0xc8)) / (0x251c + 0x14 * 0xc1 + 0xb * -0x4be)) + parseInt(p(0xc2)) / (0x24cd + -0x2129 * 0x1 + -0x39d) * (-parseInt(p(0xbe)) / (0x1 * -0x51b + -0x1cc9 + 0x21ec)) + -parseInt(q(0xd8)) / (0x1 * -0x50a + -0x254d + 0x2a60) + parseInt(p(0xd9)) / (0x2395 + -0x1 * 0x5f3 + -0x1d98);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x10f22e + -0x4e2c8 + 0x1 * 0xbb4b));
var __importDefault = this && this[r(0xcb) + s(0xcd)] || function (c) {
    const t = r;
    return c && c[t(0xda)] ? c : { 'default': c };
};
const k = {};
k[s(0xd2)] = !![], Object[s(0xc4) + s(0xd3)](exports, r(0xda), k);
const AppError_1 = __importDefault(require(r(0xd0) + s(0xd1) + 'r')), SettingsGeneral_1 = __importDefault(require(s(0xc3) + s(0xc6) + r(0xd4))), UpdateSettingService = async ({
        key: g,
        value: h
    }) => {
        const u = s, v = r, i = {};
        i[u(0xcf)] = v(0xca) + u(0xc0);
        const j = i, l = {};
        l[u(0xc9)] = g;
        const m = {};
        m[u(0xbf)] = l;
        const n = await SettingsGeneral_1[u(0xc7)][u(0xd5)](m);
        if (!n)
            throw new AppError_1[(u(0xc7))](j[v(0xcf)], -0xfb1 + -0x22d2 + 0x3417);
        const o = {};
        return o[u(0xd2)] = h, await n[v(0xce)](o), n;
    };
exports[r(0xc7)] = UpdateSettingService;