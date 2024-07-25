'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0xf2)) / (0x1050 + -0xc * 0x65 + -0xb93) * (-parseInt(p(0xf1)) / (-0x4 * 0x116 + 0x35f * -0x7 + 0x1bf3 * 0x1)) + -parseInt(o(0xfb)) / (-0x18ff + -0x137e + 0x2c80) + -parseInt(p(0xfe)) / (0x19a * 0xb + -0x22d * -0x10 + -0x346a) + parseInt(o(0xef)) / (0x6 * -0x649 + 0x232 * -0x7 + 0x3519) * (parseInt(p(0xf7)) / (-0x3 * 0xbac + 0x1 * 0x24d7 + -0x1 * 0x1cd)) + -parseInt(p(0xe8)) / (0x3b5 * -0x1 + -0xcc1 * 0x2 + 0x26 * 0xc5) * (parseInt(p(0xf8)) / (0x7c4 + 0x2469 + 0x3 * -0xeb7)) + parseInt(o(0xf3)) / (0xa0b + 0x1 * 0x2407 + 0x2e09 * -0x1) * (-parseInt(o(0xed)) / (-0x1362 + -0x1172 + -0x27 * -0xf2)) + -parseInt(o(0xe1)) / (0x4d * 0x11 + 0xcdf + -0x11f1) * (-parseInt(o(0xfa)) / (0x3e * -0x9 + -0x1ad3 + 0x1d0d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x163f3a + -0x3c366 + -0x5 * 0x1545e));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xf19 + -0x1b6a + -0x1 * -0xd31);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        'ition',
        '../../../m',
        '3066916lrFPLZ',
        'fault',
        'odels/Step',
        'value',
        '10805608FxRQrY',
        '__esModule',
        'queueId',
        'erty',
        'userIdDest',
        'words',
        'nextStepId',
        '11984MDveog',
        'default',
        'replyDefin',
        'action',
        'userId',
        '7010NEAdXD',
        'sReplyActi',
        '912055fUTZfG',
        'stepReplyI',
        '10wHVxmJ',
        '238995KYNazW',
        '5103OCRtfs',
        'create',
        '__importDe',
        'ination',
        '6QGdfYp',
        '4456srDiyD',
        'defineProp',
        '48uIGASg',
        '69870YhpoID'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0xf5) + r(0xff)] || function (c) {
    const s = r;
    return c && c[s(0xe2)] ? c : { 'default': c };
};
const k = {};
k[q(0xe0)] = !![], Object[r(0xf9) + r(0xe4)](exports, q(0xe2), k);
const StepsReplyAction_1 = __importDefault(require(q(0xfd) + r(0x100) + q(0xee) + 'on')), CreateStepsReplyActionService = async ({
        stepReplyId: d,
        words: e,
        action: f,
        userId: g,
        queueId: h,
        userIdDestination: i,
        nextStepId: j,
        replyDefinition: l
    }) => {
        const t = r, u = q, m = {};
        m[t(0xf0) + 'd'] = d, m[t(0xe6)] = e, m[t(0xeb)] = f, m[t(0xec)] = g, m[t(0xe3)] = h, m[u(0xe5) + t(0xf6)] = i, m[t(0xe7)] = j, m[t(0xea) + u(0xfc)] = l;
        const n = await StepsReplyAction_1[u(0xe9)][u(0xf4)](m);
        return n;
    };
exports[q(0xe9)] = CreateStepsReplyActionService;