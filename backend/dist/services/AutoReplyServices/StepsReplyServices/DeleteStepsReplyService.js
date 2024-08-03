'use strict';
function a() {
    const t = [
        'destroy',
        'rror',
        '4365672eRInMW',
        '8103120wZnUkr',
        '__esModule',
        'YDATA',
        'default',
        'where',
        'erty',
        '7VQBImc',
        'findOne',
        'rrors/AppE',
        '1026FjkxEi',
        '../../../m',
        'defineProp',
        'LY_FOUND',
        '../../../e',
        '5144104wPZreZ',
        '1968636AyRunn',
        'sReply',
        'value',
        '19752JMZVlW',
        'fault',
        'odels/Step',
        'P_AUTO_REP',
        'ERR_NO_STE',
        '2499414wmfqTh',
        '__importDe',
        '1925311ljcWjA'
    ];
    a = function () {
        return t;
    };
    return a();
}
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0xc8)) / (0xce + -0xb0b * 0x2 + 0x1549) + parseInt(m(0xbe)) / (0xa9 * -0x4 + -0x16db + 0x1981) + parseInt(m(0xcb)) / (-0x82d + -0xa90 + 0x64 * 0x30) + -parseInt(m(0xbd)) / (0x1e82 + -0x1b93 + -0x2eb * 0x1) + parseInt(m(0xcc)) / (-0x11 * -0x1f6 + 0x554 + 0xd * -0x2f9) + parseInt(m(0xc6)) / (0x25bc + -0x2308 + 0x7 * -0x62) * (parseInt(n(0xb5)) / (0xb5d + 0x2e * -0x55 + 0x70 * 0x9)) + -parseInt(n(0xc1)) / (-0x13e4 + 0x1b3b * -0x1 + 0x2f27) * (parseInt(m(0xb8)) / (0x2173 + -0xd44 * -0x2 + -0x3bf2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xcaed * -0x5 + 0xdec18 + 0x45 * 0x12c1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2b5 * 0x9 + 0x3 * -0x1b7 + 0x2 * 0xf19);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0xc7) + o(0xc2)] || function (c) {
    const q = p;
    return c && c[q(0xb0)] ? c : { 'default': c };
};
const k = {};
k[p(0xc0)] = !![], Object[o(0xba) + p(0xb4)](exports, p(0xb0), k);
const StepsReply_1 = __importDefault(require(o(0xb9) + o(0xc3) + o(0xbf))), AppError_1 = __importDefault(require(p(0xbc) + p(0xb7) + p(0xca))), DeleteStepsReplyService = async f => {
        const r = o, s = o, g = {};
        g[r(0xb1)] = s(0xc5) + s(0xc4) + r(0xbb);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[r(0xb3)] = i;
        const l = await StepsReply_1[s(0xb2)][s(0xb6)](j);
        if (!l)
            throw new AppError_1[(s(0xb2))](h[s(0xb1)], -0x247f + 0x4 * 0x74b + 0x2b * 0x35);
        await l[r(0xc9)]();
    };
exports[o(0xb2)] = DeleteStepsReplyService;