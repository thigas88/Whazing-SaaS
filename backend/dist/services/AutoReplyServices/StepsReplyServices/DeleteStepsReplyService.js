'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x98)) / (-0x1ad0 + -0x1 * 0x133 + -0x2 * -0xe02) + -parseInt(m(0x88)) / (0x7b * 0xc + 0xc * -0x47 + -0x26e) + parseInt(m(0x8d)) / (0x194c + -0x1a * 0x167 + 0x1 * 0xb2d) + -parseInt(n(0xa0)) / (-0x1acb * 0x1 + 0x1cc4 + -0x1 * 0x1f5) * (-parseInt(m(0x87)) / (-0x3d1 * 0x8 + -0x1 * -0x88f + -0x2 * -0xaff)) + -parseInt(n(0x93)) / (-0x5 * -0x751 + 0x8b * -0x5 + -0x2 * 0x10ec) * (parseInt(n(0x9e)) / (-0x103a + 0xf69 + 0x12 * 0xc)) + parseInt(n(0x99)) / (-0x16e5 * 0x1 + 0x1ca2 + 0x1e7 * -0x3) * (-parseInt(m(0x9d)) / (-0x1529 + -0x1e3 + 0x1715)) + parseInt(m(0x96)) / (0x1 * 0x240f + -0x18f1 * 0x1 + -0xb14);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x1136a1 + -0x7aec2 * -0x3 + 0x65228));
var __importDefault = this && this[o(0x9f) + p(0x9b)] || function (c) {
    const q = p;
    return c && c[q(0x89)] ? c : { 'default': c };
};
const k = {};
function a() {
    const t = [
        'defineProp',
        'odels/Step',
        '21319400POWRAJ',
        'rrors/AppE',
        '422241zNomNU',
        '3341864zMMHXn',
        'default',
        'fault',
        'erty',
        '27oTKihS',
        '35MONgaA',
        '__importDe',
        '1455664SRNSna',
        'ERR_NO_STE',
        'where',
        '../../../e',
        'destroy',
        '15kpxJQj',
        '1487652TVzjCU',
        '__esModule',
        '../../../m',
        'qGJRj',
        'P_AUTO_REP',
        '465852XrIVBm',
        'findOne',
        'sReply',
        'LY_FOUND',
        'value',
        'rror',
        '195702BEqbob'
    ];
    a = function () {
        return t;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1099 + 0x20c8 + -0xfa9);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[o(0x91)] = !![], Object[o(0x94) + o(0x9c)](exports, p(0x89), k);
const StepsReply_1 = __importDefault(require(o(0x8a) + o(0x95) + o(0x8f))), AppError_1 = __importDefault(require(o(0xa3) + p(0x97) + o(0x92))), DeleteStepsReplyService = async f => {
        const r = p, s = o, g = {};
        g[r(0x8b)] = s(0xa1) + s(0x8c) + s(0x90);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[s(0xa2)] = i;
        const l = await StepsReply_1[r(0x9a)][r(0x8e)](j);
        if (!l)
            throw new AppError_1[(r(0x9a))](h[r(0x8b)], 0x21e * 0x11 + -0x1b27 + -0x8f * 0xd);
        await l[r(0x86)]();
    };
exports[p(0x9a)] = DeleteStepsReplyService;