'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2324 + 0x1 * -0x822 + 0x1 * -0x1a21);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0xf7)) / (0x8 * 0x3dc + -0x15a7 + 0x8 * -0x127) * (parseInt(m(0xfa)) / (0x1a57 + -0xcff + 0x1 * -0xd56)) + -parseInt(n(0xfe)) / (-0x2471 + -0x26a7 + 0x4b1b) * (-parseInt(n(0xf3)) / (-0x2224 + 0x1 * 0xa36 + -0x2 * -0xbf9)) + parseInt(n(0xe9)) / (-0x8a6 + -0x223a + 0x2ae5) + -parseInt(n(0xfd)) / (-0x1 * -0xabf + 0x4 * 0x7fa + -0x2aa1) * (parseInt(m(0xfb)) / (0x3cd * 0x4 + -0x1 * 0x1517 + 0x5ea)) + -parseInt(n(0xe8)) / (-0x24af + -0x3b2 + 0x2869) + parseInt(m(0xf8)) / (-0x1937 + -0xd8e + 0x1 * 0x26ce) + -parseInt(n(0xf0)) / (-0x6a * 0x3d + -0x218 + 0x1b64) * (parseInt(m(0xed)) / (-0x1b5 + 0x26d6 + -0x2516));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x3f43d + 0x5 * 0x223e8 + 0x2240c));
function a() {
    const t = [
        'odels/Step',
        'defineProp',
        '637gLJxqO',
        '7943562AZnGxj',
        'sReplyActi',
        '1830UQCNqm',
        '1652wjOrFr',
        'erty',
        '9348QDJsIK',
        '3tklQln',
        'default',
        'where',
        'destroy',
        'OUND',
        '__esModule',
        'findOne',
        'rror',
        'rrors/AppE',
        '6502608nkpDIR',
        '4491155uUiqkK',
        'value',
        '../../../e',
        'PS_REPLY_F',
        '352lPwwWy',
        'ERR_NO_STE',
        '__importDe',
        '200400yvAomX',
        'vaFYx',
        'fault',
        '162308hfJDwi',
        '../../../m'
    ];
    a = function () {
        return t;
    };
    return a();
}
var __importDefault = this && this[o(0xef) + p(0xf2)] || function (c) {
    const q = p;
    return c && c[q(0xe4)] ? c : { 'default': c };
};
const k = {};
k[o(0xea)] = !![], Object[p(0xf6) + o(0xfc)](exports, p(0xe4), k);
const StepsReplyAction_1 = __importDefault(require(p(0xf4) + o(0xf5) + o(0xf9) + 'on')), AppError_1 = __importDefault(require(o(0xeb) + o(0xe7) + o(0xe6))), DeleteStepsReplyActionService = async f => {
        const r = o, s = p, g = {};
        g[r(0xf1)] = s(0xee) + s(0xec) + r(0xe3);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[s(0xe1)] = i;
        const l = await StepsReplyAction_1[s(0xff)][s(0xe5)](j);
        if (!l)
            throw new AppError_1[(r(0xff))](h[s(0xf1)], 0x1743 + -0xfe3 + -0x5cc);
        await l[r(0xe2)]();
    };
exports[p(0xff)] = DeleteStepsReplyActionService;