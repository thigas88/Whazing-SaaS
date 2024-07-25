'use strict';
const o = b, p = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x23d0 + 0xb4 + -0x230c);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x18e)) / (0x1737 + -0xf * 0x27 + -0x14ed) * (-parseInt(m(0x17e)) / (-0xbf9 * -0x2 + -0xfa5 + -0xc1 * 0xb)) + parseInt(n(0x18a)) / (-0x20bf * 0x1 + 0x480 + 0x1c42) + -parseInt(n(0x194)) / (0x1 * -0xec5 + 0x8fe + 0x5cb * 0x1) + parseInt(m(0x191)) / (-0x1900 + -0x15bb + -0x176 * -0x20) * (parseInt(m(0x185)) / (-0xca + 0x711 + -0x1 * 0x641)) + -parseInt(n(0x181)) / (0x5 * 0x26d + 0x78 * -0x11 + -0x17 * 0x2e) + -parseInt(n(0x190)) / (0x1 * -0xe2d + -0x12 * -0x148 + -0x8db) + parseInt(n(0x189)) / (0x2092 + -0x6fc + 0x198d * -0x1) * (parseInt(m(0x192)) / (0x7 * -0x2b2 + 0xe74 + 0x474));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3f271 * -0x2 + 0x1 * 0xcfac3 + 0x2f43a));
var __importDefault = this && this[o(0x17f) + o(0x17a)] || function (c) {
    const q = p;
    return c && c[q(0x17c)] ? c : { 'default': c };
};
const k = {};
function a() {
    const t = [
        'rrors/AppE',
        'LY_FOUND',
        'fault',
        'ERR_NO_STE',
        '__esModule',
        'default',
        '668vOIhNi',
        '__importDe',
        'xgiYc',
        '5428549TyYybg',
        '../../../e',
        'odels/Step',
        'erty',
        '6fRiXpE',
        'value',
        'where',
        'rror',
        '548874nGXfyO',
        '2516499SUHlZN',
        'defineProp',
        'destroy',
        'findOne',
        '2340dAFTgi',
        'P_AUTO_REP',
        '3227656fAzHxL',
        '3449025UOfBZK',
        '220RRIETB',
        'sReply',
        '1531724nzwQqk',
        '../../../m'
    ];
    a = function () {
        return t;
    };
    return a();
}
k[o(0x186)] = !![], Object[o(0x18b) + o(0x184)](exports, p(0x17c), k);
const StepsReply_1 = __importDefault(require(o(0x195) + o(0x183) + o(0x193))), AppError_1 = __importDefault(require(o(0x182) + o(0x178) + p(0x188))), DeleteStepsReplyService = async f => {
        const r = o, s = p, g = {};
        g[r(0x180)] = s(0x17b) + s(0x18f) + r(0x179);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[s(0x187)] = i;
        const l = await StepsReply_1[r(0x17d)][s(0x18d)](j);
        if (!l)
            throw new AppError_1[(r(0x17d))](h[r(0x180)], -0x11e4 * -0x2 + 0x1635 + -0x3869);
        await l[r(0x18c)]();
    };
exports[p(0x17d)] = DeleteStepsReplyService;