'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x105)) / (0x1ad4 + 0xdc8 + -0x289b) + parseInt(o(0x101)) / (-0x208b * 0x1 + -0x364 * 0x1 + -0x3 * -0xbfb) * (parseInt(o(0xf4)) / (-0x73 + 0x5b9 + -0x1 * 0x543)) + -parseInt(o(0x107)) / (0xd * -0xb3 + -0x1 * 0x841 + -0x8ae * -0x2) + -parseInt(o(0x102)) / (0x11b3 + 0x1 * 0xdd3 + 0x1 * -0x1f81) + -parseInt(o(0xfb)) / (-0x1bd6 + -0x5 * 0xda + 0x1 * 0x201e) * (parseInt(n(0xff)) / (-0x1 * 0x1e63 + 0x2 * -0x1334 + 0x44d2 * 0x1)) + parseInt(n(0x109)) / (-0xce6 + -0xd04 + -0x2e2 * -0x9) * (-parseInt(n(0xfa)) / (-0x8ad + 0x23 * 0x3f + 0x19)) + parseInt(o(0xf3)) / (-0x5 * 0xd7 + -0x13 * -0xb9 + -0x3 * 0x32a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5e005 * -0x1 + -0x52f39 * -0x1 + -0x33cb * -0x27));
function a() {
    const u = [
        'value',
        '../libs/wb',
        '384881EnucEo',
        'Error\x20send',
        '3301228DRVgco',
        '__esModule',
        '12056rwaBkC',
        'ices/SendM',
        'leys',
        'defineProp',
        'essagesSys',
        'ogger',
        '../utils/l',
        'getWbot',
        'cAomY',
        'default',
        'eBaileys',
        'fault',
        '../service',
        'ot-baileys',
        '18601660dhYbft',
        '1033797OFhIgG',
        'error',
        'logger',
        'temWbotBai',
        'erty',
        'message',
        '1899eZEyCN',
        '6uMfnut',
        '__importDe',
        '\x20messages',
        's/WbotServ',
        '527331Umjtnn',
        'sendMessag',
        '2phltdZ',
        '4495940thaNZR'
    ];
    a = function () {
        return u;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x614 + 0x9 * -0x397 + -0x6b * -0x41);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[p(0xfc) + p(0xf0)] || function (c) {
    const r = q;
    return c && c[r(0x108)] ? c : { 'default': c };
};
const k = {};
k[p(0x103)] = !![], Object[p(0x10c) + p(0xf8)](exports, q(0x108), k), exports[p(0x100) + q(0x113)] = void (-0x4 * 0x46a + 0xd93 * -0x2 + 0x3e * 0xb9);
const wbot_baileys_1 = require(q(0x104) + p(0xf2)), SendMessagesSystemWbotBaileys_1 = __importDefault(require(p(0xf1) + p(0xfe) + q(0x10a) + p(0x10d) + p(0xf7) + q(0x10b))), logger_1 = require(q(0x10f) + p(0x10e)), sendMessageBaileys = async (e, f, g = undefined) => {
        const s = p, t = p, h = {};
        h[s(0x111)] = t(0x106) + s(0xfd);
        const i = h;
        try {
            const j = (0x1611 + -0x9 * -0x3 + -0x162c, wbot_baileys_1[s(0x110)])(e);
            await (-0x1105 + -0x221 + 0x1326, SendMessagesSystemWbotBaileys_1[s(0x112)])(j, f, g);
        } catch (l) {
            const m = {};
            m[s(0xf9)] = i[t(0x111)], m[t(0xf5)] = l, logger_1[s(0xf6)][t(0xf5)](m);
            throw new Error(l);
        }
    };
exports[q(0x100) + p(0x113)] = sendMessageBaileys;