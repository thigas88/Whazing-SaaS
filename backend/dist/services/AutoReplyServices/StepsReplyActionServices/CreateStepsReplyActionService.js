'use strict';
const q = b, r = b;
function a() {
    const v = [
        'words',
        '__importDe',
        'ition',
        '26iFJhnA',
        '37963Ioubji',
        '26074404TmgmZT',
        'replyDefin',
        'userIdDest',
        'queueId',
        'default',
        'defineProp',
        'odels/Step',
        '60NWikZm',
        'erty',
        '418747FofCgG',
        '2620096mDvGTo',
        'create',
        'action',
        'userId',
        'fault',
        '5192196BGHLGF',
        'nextStepId',
        'ination',
        '__esModule',
        'sReplyActi',
        'value',
        '../../../m',
        '3991572QkMDdG',
        'stepReplyI',
        '1399355kQUjHU'
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
            const f = -parseInt(o(0x142)) / (-0x33d * -0x3 + 0x9 * 0x1f3 + -0x1 * 0x1b41) * (-parseInt(o(0x141)) / (-0x1008 + 0x1 * 0x1027 + -0x1d)) + parseInt(p(0x13b)) / (-0x914 * -0x2 + 0x955 * 0x1 + -0x1b7a * 0x1) + parseInt(o(0x152)) / (-0x9ff * 0x2 + -0x388 * 0x8 + 0x3042) + parseInt(p(0x13d)) / (0x1f8f + 0x5 * 0x1a + -0x200c) + -parseInt(p(0x14a)) / (0x313 * 0x6 + -0x26dd + -0x1471 * -0x1) * (-parseInt(p(0x14c)) / (0x2d7 * 0x3 + -0xdd9 + -0x55b * -0x1)) + -parseInt(p(0x14d)) / (-0x1724 + 0xb * 0x17d + 0x6cd * 0x1) + -parseInt(p(0x143)) / (-0x1f75 + 0x2 * -0xc3b + 0x37f4);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x15be13 + -0x109dfa + 0x6b538));
var __importDefault = this && this[q(0x13f) + q(0x151)] || function (c) {
    const s = r;
    return c && c[s(0x155)] ? c : { 'default': c };
};
const k = {};
k[r(0x157)] = !![], Object[q(0x148) + q(0x14b)](exports, r(0x155), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4 * 0x168 + -0xce9 * 0x1 + -0x884 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const StepsReplyAction_1 = __importDefault(require(q(0x158) + q(0x149) + r(0x156) + 'on')), CreateStepsReplyActionService = async ({
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
        m[t(0x13c) + 'd'] = d, m[t(0x13e)] = e, m[u(0x14f)] = f, m[u(0x150)] = g, m[u(0x146)] = h, m[t(0x145) + u(0x154)] = i, m[t(0x153)] = j, m[t(0x144) + u(0x140)] = l;
        const n = await StepsReplyAction_1[u(0x147)][t(0x14e)](m);
        return n;
    };
exports[r(0x147)] = CreateStepsReplyActionService;