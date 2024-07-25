'use strict';
const o = b, p = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb3c * 0x1 + 0x2355 + -0x1778);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0xad)) / (0x1d * 0xb5 + 0x11c3 + 0xcc1 * -0x3) * (parseInt(m(0xa8)) / (-0xe + -0x59 * -0x2d + 0xf95 * -0x1)) + -parseInt(m(0xa2)) / (-0x3 * 0x993 + 0x229b + 0x1 * -0x5df) * (-parseInt(n(0xa7)) / (0x2157 + 0x9ad + -0x2b * 0x100)) + parseInt(m(0xb2)) / (0x3 * -0x4de + -0xbed * -0x1 + 0xf * 0x2e) * (parseInt(m(0xa6)) / (0x1 * -0xf25 + 0x77f + 0x7ac)) + parseInt(n(0xab)) / (-0x16c + 0x4b8 * -0x5 + 0x190b) + parseInt(m(0xb0)) / (0x2307 + -0x328 + -0x1 * 0x1fd7) * (parseInt(m(0xb9)) / (0x1d + -0x25d5 + 0x25c1)) + parseInt(m(0xac)) / (0x42c + 0xdcd + -0x11ef) * (parseInt(m(0xb3)) / (0x1 * -0x113c + 0x1f4e + -0x3 * 0x4ad)) + -parseInt(n(0xb6)) / (-0x25be + -0x154d + 0x3b17 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8967b * 0x1 + 0x3 * 0x4811 + -0x4b21e));
var __importDefault = this && this[o(0xb5) + o(0xa4)] || function (c) {
    const q = p;
    return c && c[q(0xa1)] ? c : { 'default': c };
};
const k = {};
k[o(0xa3)] = !![], Object[p(0xae) + o(0xa5)](exports, p(0xa1), k);
function a() {
    const t = [
        'key',
        'lyTQr',
        '2616586VOsMXz',
        '15630TvQvUm',
        '181vLUXoN',
        'defineProp',
        '../models/',
        '75064zeYQBm',
        'AppError',
        '6635aogqzG',
        '847FFdGGk',
        'where',
        '__importDe',
        '17593284BSFVjI',
        'ERR_NO_SET',
        'TING_FOUND',
        '54vRZlrr',
        'findOne',
        '../errors/',
        'Setting',
        'default',
        '__esModule',
        '3GdJsqs',
        'value',
        'fault',
        'erty',
        '2358PuJCyQ',
        '2480152kHlJDE',
        '934GRAbFH'
    ];
    a = function () {
        return t;
    };
    return a();
}
const Setting_1 = __importDefault(require(p(0xaf) + p(0xbc))), AppError_1 = __importDefault(require(p(0xbb) + p(0xb1))), CheckSettings = async f => {
        const r = o, s = p, g = {};
        g[r(0xaa)] = s(0xb7) + r(0xb8);
        const h = g, i = {};
        i[s(0xa9)] = f;
        const j = {};
        j[r(0xb4)] = i;
        const l = await Setting_1[r(0xbd)][r(0xba)](j);
        if (!l)
            throw new AppError_1[(s(0xbd))](h[r(0xaa)], 0x383 + 0x43b * -0x1 + -0x2a * -0xe);
        return l[s(0xa3)];
    };
exports[o(0xbd)] = CheckSettings;