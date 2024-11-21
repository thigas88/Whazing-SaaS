'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x1a7)) / (-0xe * -0x18d + -0xcaa + -0x1 * 0x90b) + parseInt(m(0x1a5)) / (0xbd6 + -0x197f + 0xdab) * (-parseInt(n(0x19f)) / (0xf * -0x196 + -0x5 * 0x129 + -0x12 * -0x1a5)) + -parseInt(m(0x1ae)) / (-0x7 * 0x19d + 0x1428 + -0x8d9) + -parseInt(m(0x1af)) / (-0x131e * 0x1 + 0xf30 + 0x1 * 0x3f3) + parseInt(n(0x1b1)) / (-0x4 * -0x5d5 + -0x397 * -0x4 + 0x1 * -0x25aa) * (parseInt(n(0x1b4)) / (-0x8a * 0x2e + 0x15cd + -0x102 * -0x3)) + parseInt(m(0x1b8)) / (0x16e7 + -0x1661 * -0x1 + -0x2d40) + -parseInt(n(0x1b5)) / (0x1c69 * 0x1 + -0x45 * 0x61 + -0x1 * 0x23b) * (-parseInt(m(0x1a1)) / (-0x1 * -0x955 + -0x863 + -0xe8));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x21 * 0x75cd + -0x10859d + 0x28fc62));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2497 + 0x154 * -0x10 + -0x1eb * -0x1f);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x1b7) + o(0x1a9)] || function (c) {
    const q = p;
    return c && c[q(0x1ac)] ? c : { 'default': c };
};
const k = {};
k[o(0x1a6)] = !![], Object[o(0x1a3) + p(0x1b2)](exports, o(0x1ac), k);
function a() {
    const t = [
        '309466aRtCfr',
        'value',
        '581538mdWsEI',
        'where',
        'fault',
        'Setting',
        'key',
        '__esModule',
        'nYjgX',
        '3955164ZDXoIq',
        '3226385yCUMkY',
        '../models/',
        '1047732yBjmKt',
        'erty',
        'findOne',
        '42YoWkwj',
        '8653599Vgtczw',
        '../errors/',
        '__importDe',
        '1299248YWFlAa',
        'ERR_NO_SET',
        '6SBdCcr',
        'AppError',
        '20MDPaOH',
        'TING_FOUND',
        'defineProp',
        'default'
    ];
    a = function () {
        return t;
    };
    return a();
}
const Setting_1 = __importDefault(require(p(0x1b0) + p(0x1aa))), AppError_1 = __importDefault(require(o(0x1b6) + o(0x1a0))), CheckSettings = async f => {
        const r = o, s = p, g = {};
        g[r(0x1ad)] = s(0x19e) + r(0x1a2);
        const h = g, i = {};
        i[s(0x1ab)] = f;
        const j = {};
        j[r(0x1a8)] = i;
        const l = await Setting_1[s(0x1a4)][s(0x1b3)](j);
        if (!l)
            throw new AppError_1[(r(0x1a4))](h[s(0x1ad)], -0x1 * 0x2401 + -0x130b + 0x30 * 0x12e);
        return l[s(0x1a6)];
    };
exports[o(0x1a4)] = CheckSettings;