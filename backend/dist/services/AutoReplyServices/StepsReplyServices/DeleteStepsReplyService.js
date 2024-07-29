'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0xd3)) / (-0xe9 + 0x2175 + -0x208b * 0x1) * (-parseInt(m(0xcc)) / (-0x1f8d + 0x115 * 0x17 + 0x6ac)) + -parseInt(m(0xc5)) / (0x257 * -0xc + -0x2 * 0x8ed + 0x2df1) * (parseInt(m(0xc9)) / (-0x7f * -0x2b + -0x2329 + -0x8 * -0x1bb)) + -parseInt(m(0xc6)) / (-0x7 * 0x125 + 0x1 * 0x4ee + 0x2 * 0x18d) + -parseInt(n(0xc2)) / (-0xc95 * 0x3 + 0x277 * -0x4 + 0x89 * 0x59) * (-parseInt(m(0xd6)) / (-0xb8a + 0xe * 0xe3 + -0xd9)) + -parseInt(m(0xd0)) / (-0x233 + 0x1 * 0x1046 + -0x2cf * 0x5) * (parseInt(n(0xd7)) / (-0x2233 + 0x6d * 0x43 + 0x5b5)) + parseInt(n(0xda)) / (-0x4ec + -0x23 * 0x10d + 0x29bd) + -parseInt(n(0xc3)) / (-0x1604 * 0x1 + -0x2 * 0xc95 + 0x1 * 0x2f39);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x34a * -0x2a1 + 0x4efd4 + -0x7a95c));
function a() {
    const t = [
        '505566xdJtXE',
        'default',
        'value',
        '4485100ozcztZ',
        '../../../e',
        'LY_FOUND',
        'where',
        'ERR_NO_STE',
        '../../../m',
        'destroy',
        '14598GnHDMI',
        '6914501BNDTmg',
        'fault',
        '64146hJCONG',
        '358285rcTWIq',
        'rrors/AppE',
        'sReply',
        '20FTnNsv',
        '__esModule',
        'P_AUTO_REP',
        '1186798bTDGFp',
        'rror',
        'dlcLB',
        'odels/Step',
        '88CCNSsg',
        'findOne',
        'erty',
        '1OiyMzt',
        'defineProp',
        '__importDe',
        '2219FBZxlm'
    ];
    a = function () {
        return t;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * 0x134a + -0x305 * -0x5 + 0x55 * 0x49);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0xd5) + p(0xc4)] || function (c) {
    const q = p;
    return c && c[q(0xca)] ? c : { 'default': c };
};
const k = {};
k[p(0xd9)] = !![], Object[o(0xd4) + p(0xd2)](exports, o(0xca), k);
const StepsReply_1 = __importDefault(require(p(0xdf) + o(0xcf) + o(0xc8))), AppError_1 = __importDefault(require(p(0xdb) + o(0xc7) + p(0xcd))), DeleteStepsReplyService = async f => {
        const r = o, s = p, g = {};
        g[r(0xce)] = s(0xde) + s(0xcb) + r(0xdc);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[s(0xdd)] = i;
        const l = await StepsReply_1[r(0xd8)][s(0xd1)](j);
        if (!l)
            throw new AppError_1[(r(0xd8))](h[r(0xce)], 0xfd6 + 0xca7 + -0x1ae9);
        await l[r(0xe0)]();
    };
exports[o(0xd8)] = DeleteStepsReplyService;