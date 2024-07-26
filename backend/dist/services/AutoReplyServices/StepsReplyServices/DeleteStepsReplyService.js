'use strict';
const o = b, p = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x16ec + -0x13e1 * -0x1 + -0x28fc);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x1df)) / (0x40 * -0x22 + 0x2 * 0x59f + -0x2bd * 0x1) + parseInt(n(0x1d3)) / (-0x1e4d + 0x2665 + -0x816) * (parseInt(n(0x1d2)) / (0x1075 * -0x1 + 0x205d + -0xfe5)) + parseInt(m(0x1e3)) / (-0x1dbb + -0x15c3 + 0x2 * 0x19c1) * (-parseInt(n(0x1d9)) / (-0x1405 + -0x15ee + 0x4f * 0x88)) + parseInt(n(0x1e1)) / (0x1 * 0xd73 + 0x1f * -0x3b + 0x192 * -0x4) + parseInt(n(0x1d5)) / (0x1 * 0x123e + -0xd4b + 0x3c * -0x15) * (-parseInt(m(0x1e7)) / (0x21 * -0x126 + -0xe2d * -0x1 + -0x17c1 * -0x1)) + parseInt(m(0x1da)) / (-0x2483 + 0x2b * -0x8b + 0x3be5) * (-parseInt(m(0x1d1)) / (0x2c4 + -0x7 * -0x416 + -0x2 * 0xfaa)) + parseInt(m(0x1d4)) / (-0x1 * -0x166c + -0x1 * 0x5a8 + -0x10b9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x109279 + -0xb609a + 0x37993));
var __importDefault = this && this[o(0x1e5) + p(0x1dc)] || function (c) {
    const q = o;
    return c && c[q(0x1e6)] ? c : { 'default': c };
};
const k = {};
function a() {
    const t = [
        '281998XIhfeD',
        'rrors/AppE',
        '6195396yHVmMJ',
        'defineProp',
        '8OUIQtT',
        'default',
        '__importDe',
        '__esModule',
        '203512kXtLHX',
        '../../../e',
        'odels/Step',
        'sReply',
        'erty',
        'destroy',
        'ERR_NO_STE',
        '../../../m',
        'P_AUTO_REP',
        '391390ztBUeS',
        '288TUECeG',
        '4408aKMxFJ',
        '6320006ikBMwe',
        '7vAimLY',
        'osCdn',
        'LY_FOUND',
        'rror',
        '1281380UlXWOq',
        '99LFZlfd',
        'findOne',
        'fault',
        'value',
        'where'
    ];
    a = function () {
        return t;
    };
    return a();
}
k[o(0x1dd)] = !![], Object[p(0x1e2) + p(0x1eb)](exports, o(0x1e6), k);
const StepsReply_1 = __importDefault(require(p(0x1ee) + p(0x1e9) + o(0x1ea))), AppError_1 = __importDefault(require(p(0x1e8) + p(0x1e0) + p(0x1d8))), DeleteStepsReplyService = async f => {
        const r = p, s = p, g = {};
        g[r(0x1d6)] = s(0x1ed) + r(0x1ef) + s(0x1d7);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[r(0x1de)] = i;
        const l = await StepsReply_1[r(0x1e4)][r(0x1db)](j);
        if (!l)
            throw new AppError_1[(s(0x1e4))](h[s(0x1d6)], -0x2 * -0x503 + -0xc31 + 0x3bf);
        await l[r(0x1ec)]();
    };
exports[p(0x1e4)] = DeleteStepsReplyService;