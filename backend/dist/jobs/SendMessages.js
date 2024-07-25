'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0xd9)) / (-0x2f6 * -0xd + 0x355 * -0xb + -0x1d6) + parseInt(n(0xe4)) / (0x1 * 0x20e7 + -0x10d0 + -0x1015) * (parseInt(o(0xd7)) / (0x1bc7 + 0x20ca + -0x151 * 0x2e)) + parseInt(o(0xd4)) / (-0xb15 + -0x1b67 + 0x2680) * (-parseInt(n(0xe1)) / (0x1 * 0x1b9 + -0x1ba7 + 0x19f3)) + -parseInt(n(0xd6)) / (0x202 * 0x2 + -0x80e + -0x10 * -0x41) * (parseInt(o(0xe9)) / (0x26ba + 0x45 * -0x45 + -0x141a)) + -parseInt(n(0xe8)) / (-0x1926 + -0x2 * 0x37c + 0x2026) * (-parseInt(o(0xdd)) / (-0x520 * 0x2 + -0x10d + -0x5ab * -0x2)) + -parseInt(n(0xde)) / (0x1aa0 + 0xbe9 * -0x1 + -0xead) + parseInt(o(0xcf)) / (0x1d6 * -0x5 + -0x13 * -0xe8 + 0x17 * -0x59);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x45983 + 0xf22d0 + -0xb3e1f));
var __importDefault = this && this[p(0xd8) + p(0xe2)] || function (c) {
    const r = q;
    return c && c[r(0xda)] ? c : { 'default': c };
};
function a() {
    const u = [
        'value',
        'default',
        '\x20messages',
        'ot-baileys',
        'logger',
        'Error\x20send',
        'eBaileys',
        '7347780mRSKjQ',
        'ogger',
        'essagesSys',
        '../libs/wb',
        'leys',
        '203308LCYrzw',
        'defineProp',
        '4764918Gclyzj',
        '2364342EmcUXp',
        '__importDe',
        '900694seKVeA',
        '__esModule',
        'erty',
        '../service',
        '62433fveuuM',
        '1067030PrzSWX',
        'oyMzc',
        'error',
        '5iGpXrk',
        'fault',
        'sendMessag',
        '2vfGrJP',
        's/WbotServ',
        '../utils/l',
        'message',
        '1080JevdYc',
        '7DfizQB',
        'temWbotBai',
        'getWbot',
        'ices/SendM'
    ];
    a = function () {
        return u;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1649 + 0x14ab + 0x267);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[q(0xed)] = !![], Object[p(0xd5) + q(0xdb)](exports, p(0xda), k), exports[p(0xe3) + p(0xce)] = void (0x4 * -0x1a5 + 0xec * 0x1 + -0x2d4 * -0x2);
const wbot_baileys_1 = require(p(0xd2) + q(0xcb)), SendMessagesSystemWbotBaileys_1 = __importDefault(require(p(0xdc) + q(0xe5) + p(0xec) + q(0xd1) + p(0xea) + q(0xd3))), logger_1 = require(q(0xe6) + q(0xd0)), sendMessageBaileys = async (e, f, g = undefined) => {
        const s = p, t = q, h = {};
        h[s(0xdf)] = t(0xcd) + t(0xca);
        const i = h;
        try {
            const j = (0x22e3 + 0x2d2 * -0x1 + -0x2011, wbot_baileys_1[t(0xeb)])(e);
            await (-0x3b * 0x3e + 0x9c * -0x19 + 0x1d86, SendMessagesSystemWbotBaileys_1[s(0xc9)])(j, f, g);
        } catch (l) {
            const m = {};
            m[t(0xe7)] = i[t(0xdf)], m[s(0xe0)] = l, logger_1[t(0xcc)][s(0xe0)](m);
            throw new Error(l);
        }
    };
exports[q(0xe3) + q(0xce)] = sendMessageBaileys;