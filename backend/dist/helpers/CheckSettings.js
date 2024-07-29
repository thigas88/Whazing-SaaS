'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x1d3)) / (0x1caa * 0x1 + -0x24fb * -0x1 + -0x41a4) * (-parseInt(m(0x1e1)) / (0x1aae + -0x181 + -0x192b)) + parseInt(m(0x1d7)) / (0x982 * -0x4 + 0x20 * -0x121 + 0x4a2b) + -parseInt(n(0x1dd)) / (0x10 * -0x10c + 0x1 * -0x1fa5 + -0x11 * -0x2d9) + -parseInt(m(0x1e3)) / (-0x2 * -0x169 + 0xc05 + -0xed2) * (-parseInt(n(0x1dc)) / (0x6be * 0x1 + 0x9 * 0x1ca + -0x16d2)) + parseInt(n(0x1da)) / (0x2bf * -0xb + -0x198d + -0x37c9 * -0x1) + parseInt(m(0x1ec)) / (-0xfa3 + -0x2436 + 0x33e1) + -parseInt(m(0x1d6)) / (0x1 * 0xaaf + 0x377 + -0xe1d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x20db * -0x3 + -0x66ea + -0x17f * -0x193));
var __importDefault = this && this[o(0x1d4) + o(0x1e2)] || function (c) {
    const q = p;
    return c && c[q(0x1eb)] ? c : { 'default': c };
};
const k = {};
k[p(0x1e7)] = !![], Object[o(0x1d5) + p(0x1e9)](exports, o(0x1eb), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x16f5 + 0x5c * -0x1 + 0x2 * -0xa63);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const t = [
        'value',
        'AppError',
        'erty',
        'TING_FOUND',
        '__esModule',
        '415984HZbKsY',
        '8HOYtwn',
        '__importDe',
        'defineProp',
        '837882XZkXdH',
        '2586LQJvfN',
        '../errors/',
        'key',
        '721315VrbFgU',
        'ERR_NO_SET',
        '626442PWlWaU',
        '640464ShchDf',
        'default',
        'Setting',
        'cvobQ',
        '23918nArcov',
        'fault',
        '5sfKowi',
        '../models/',
        'where',
        'findOne'
    ];
    a = function () {
        return t;
    };
    return a();
}
const Setting_1 = __importDefault(require(o(0x1e4) + o(0x1df))), AppError_1 = __importDefault(require(o(0x1d8) + o(0x1e8))), CheckSettings = async f => {
        const r = p, s = o, g = {};
        g[r(0x1e0)] = r(0x1db) + s(0x1ea);
        const h = g, i = {};
        i[s(0x1d9)] = f;
        const j = {};
        j[r(0x1e5)] = i;
        const l = await Setting_1[r(0x1de)][s(0x1e6)](j);
        if (!l)
            throw new AppError_1[(r(0x1de))](h[s(0x1e0)], 0xd5d + 0x1fe0 + 0x1 * -0x2ba9);
        return l[r(0x1e7)];
    };
exports[o(0x1de)] = CheckSettings;