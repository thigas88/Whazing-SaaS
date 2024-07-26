'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x1cb)) / (0x86b * -0x2 + 0x5cb * 0x6 + 0x8b * -0x21) * (-parseInt(o(0x1e4)) / (-0xd * 0x19b + 0x2 * 0x6cd + 0x747)) + -parseInt(p(0x1d1)) / (0xd8a + 0x7ee + -0x1575) + -parseInt(o(0x1ce)) / (-0x4 * 0x449 + -0x23c + 0x124 * 0x11) * (parseInt(p(0x1d7)) / (-0x8cb * -0x4 + -0x3a6 + -0x64d * 0x5)) + -parseInt(o(0x1d2)) / (0x4 * 0x8e + -0x89 * 0x31 + -0x1 * -0x1807) * (-parseInt(p(0x1d6)) / (0x11c5 + -0x9c2 + -0x7fc)) + parseInt(o(0x1d9)) / (0x22ae + 0x23e0 * -0x1 + -0x1 * -0x13a) * (-parseInt(o(0x1e6)) / (0x209d + 0x455 * 0x3 + -0x2d93)) + parseInt(o(0x1cc)) / (0x19 + 0x3b3 * -0x5 + 0x1270) * (-parseInt(o(0x1d4)) / (0x1a2a + -0x1047 + -0x9d8)) + -parseInt(o(0x1d8)) / (0x14c + -0xb * -0x235 + -0x1987) * (-parseInt(p(0x1cf)) / (0x2e4 + -0x11 * 0x107 + -0x10 * -0xea));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x200a3 + 0x259 * 0x80c + -0x6 * 0x8bd7));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1c61 + -0x38f * 0x4 + -0xc5d * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        'nextStepId',
        'sReplyActi',
        'odels/Step',
        'ination',
        '__importDe',
        'value',
        'stepReplyI',
        'action',
        'erty',
        '10SoEDEK',
        '__esModule',
        '18EVactd',
        'defineProp',
        'ition',
        '../../../m',
        'userId',
        'create',
        'default',
        '109229KVrrsE',
        '60xzVtaY',
        'fault',
        '4KVakBe',
        '13vzCMMD',
        'userIdDest',
        '3234615EqVBAJ',
        '12cMUpnT',
        'replyDefin',
        '3253789ctzCTg',
        'queueId',
        '2235016ALeyqr',
        '6816685REKoAk',
        '79270608vCeKkd',
        '6359792VshLbP',
        'words'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0x1df) + r(0x1cd)] || function (c) {
    const s = r;
    return c && c[s(0x1e5)] ? c : { 'default': c };
};
const k = {};
k[q(0x1e0)] = !![], Object[r(0x1e7) + r(0x1e3)](exports, r(0x1e5), k);
const StepsReplyAction_1 = __importDefault(require(r(0x1e9) + q(0x1dd) + r(0x1dc) + 'on')), CreateStepsReplyActionService = async ({
        stepReplyId: d,
        words: e,
        action: f,
        userId: g,
        queueId: h,
        userIdDestination: i,
        nextStepId: j,
        replyDefinition: l
    }) => {
        const t = q, u = r, m = {};
        m[t(0x1e1) + 'd'] = d, m[u(0x1da)] = e, m[u(0x1e2)] = f, m[t(0x1c8)] = g, m[t(0x1d5)] = h, m[u(0x1d0) + t(0x1de)] = i, m[t(0x1db)] = j, m[t(0x1d3) + u(0x1e8)] = l;
        const n = await StepsReplyAction_1[u(0x1ca)][u(0x1c9)](m);
        return n;
    };
exports[q(0x1ca)] = CreateStepsReplyActionService;