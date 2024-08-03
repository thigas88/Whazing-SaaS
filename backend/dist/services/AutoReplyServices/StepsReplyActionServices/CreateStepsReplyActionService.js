'use strict';
const q = b, r = b;
function a() {
    const v = [
        'create',
        'userId',
        'odels/Step',
        'value',
        '__importDe',
        'stepReplyI',
        'action',
        '../../../m',
        '403433sMqNqc',
        '893820OPCWyz',
        'replyDefin',
        'defineProp',
        'userIdDest',
        '120552RkvEVk',
        '6dlyQBu',
        'queueId',
        'default',
        'erty',
        '26574cMPuSu',
        '__esModule',
        '71162CzCYjN',
        '1866980hcNlRq',
        'nextStepId',
        'ition',
        'ination',
        '198urWBvL',
        '2416690aFjANy',
        'fault',
        'sReplyActi',
        'words',
        '180pfalmd'
    ];
    a = function () {
        return v;
    };
    return a();
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0xef)) / (0xfcd + 0x7 * -0xbf + -0x1 * 0xa93) + -parseInt(o(0xf0)) / (0x1 * 0x1067 + 0x1 * -0x4cb + -0xb9a) + -parseInt(p(0xf9)) / (-0xe73 + -0x1 * 0x94d + -0x1 * -0x17c3) * (-parseInt(o(0xe6)) / (0x7 * 0x2a5 + -0xc0b * -0x1 + -0xf45 * 0x2)) + -parseInt(p(0x101)) / (-0xf01 + 0x1e79 * 0x1 + -0xf73) * (-parseInt(p(0xf5)) / (-0x1d81 + 0x184a + 0x53d)) + -parseInt(p(0xfb)) / (0xdfb * -0x1 + 0x47d * -0x8 + -0x31ea * -0x1) + -parseInt(p(0xf4)) / (-0x35 + -0x2 * 0x9be + -0x21 * -0x99) * (parseInt(p(0x100)) / (0x1a3d + -0x1723 + -0x311)) + -parseInt(p(0xfc)) / (-0x7 * 0x3ae + 0x1ab5 * 0x1 + 0x1 * -0xe9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x30 * -0x2218 + 0x5a * -0x112 + 0xb801d));
var __importDefault = this && this[q(0xeb) + q(0xe3)] || function (c) {
    const s = r;
    return c && c[s(0xfa)] ? c : { 'default': c };
};
const k = {};
k[q(0xea)] = !![], Object[q(0xf2) + r(0xf8)](exports, q(0xfa), k);
const StepsReplyAction_1 = __importDefault(require(q(0xee) + q(0xe9) + q(0xe4) + 'on')), CreateStepsReplyActionService = async ({
        stepReplyId: d,
        words: e,
        action: f,
        userId: g,
        queueId: h,
        userIdDestination: i,
        nextStepId: j,
        replyDefinition: l
    }) => {
        const t = r, u = r, m = {};
        m[t(0xec) + 'd'] = d, m[t(0xe5)] = e, m[t(0xed)] = f, m[u(0xe8)] = g, m[t(0xf6)] = h, m[u(0xf3) + t(0xff)] = i, m[t(0xfd)] = j, m[u(0xf1) + t(0xfe)] = l;
        const n = await StepsReplyAction_1[t(0xf7)][t(0xe7)](m);
        return n;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4 * 0x635 + -0xa5 + 0x2 * 0xd2e);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[r(0xf7)] = CreateStepsReplyActionService;