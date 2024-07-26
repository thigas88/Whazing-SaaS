'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x182)) / (0x1254 + 0x45d * -0x5 + 0x37e) * (parseInt(o(0x17a)) / (0x1d98 * 0x1 + 0x19d5 + -0x376b)) + parseInt(o(0x17d)) / (-0x7dd + -0x1a25 + -0xb57 * -0x3) * (-parseInt(o(0x18e)) / (0x1b76 + -0x29a * -0xc + -0x3aaa)) + parseInt(n(0x177)) / (0x159b + 0x12bf + -0x5c3 * 0x7) + parseInt(n(0x17f)) / (-0x6 * 0x510 + -0x4be * 0x7 + 0x3f98 * 0x1) + -parseInt(o(0x18a)) / (0x1d7f + 0x6 * -0x3bb + -0x716) + -parseInt(n(0x181)) / (0x1eee + 0x179f + -0x1 * 0x3685) * (parseInt(o(0x185)) / (0x1 * 0x2311 + -0xdd1 + -0x1 * 0x1537)) + parseInt(n(0x18c)) / (0x18c7 + -0x17be + 0x1 * -0xff);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x8 * -0x16232 + -0xd * -0x175ba + -0xf4e42));
var __importDefault = this && this[p(0x183) + p(0x18d)] || function (c) {
    const r = p;
    return c && c[r(0x17e)] ? c : { 'default': c };
};
const k = {};
function a() {
    const u = [
        'ot-baileys',
        '26516230LyooSK',
        'fault',
        '2773052CRQigb',
        'eBaileys',
        '\x20messages',
        '../libs/wb',
        '../service',
        'value',
        'essagesSys',
        'error',
        'erty',
        's/WbotServ',
        'defineProp',
        'ogger',
        'ices/SendM',
        '5976700hmrkEN',
        'logger',
        '../utils/l',
        '2914xQUnNn',
        'default',
        'Error\x20send',
        '3QcdeaY',
        '__esModule',
        '5877816PuWdDu',
        'leys',
        '8MxWvCe',
        '571LWISKP',
        '__importDe',
        'temWbotBai',
        '11447991jnWxbP',
        'fPLpX',
        'message',
        'sendMessag',
        'getWbot',
        '7443170VJBjty'
    ];
    a = function () {
        return u;
    };
    return a();
}
k[q(0x16f)] = !![], Object[p(0x174) + q(0x172)](exports, q(0x17e), k), exports[q(0x188) + p(0x18f)] = void (0x2428 + 0x2d * -0x5 + -0x2347);
const wbot_baileys_1 = require(p(0x16d) + p(0x18b)), SendMessagesSystemWbotBaileys_1 = __importDefault(require(p(0x16e) + q(0x173) + q(0x176) + q(0x170) + q(0x184) + p(0x180))), logger_1 = require(p(0x179) + p(0x175)), sendMessageBaileys = async (e, f, g = undefined) => {
        const s = q, t = q, h = {};
        h[s(0x186)] = t(0x17c) + t(0x190);
        const i = h;
        try {
            const j = (0x3 * 0xb8f + 0x675 + -0x10e * 0x27, wbot_baileys_1[t(0x189)])(e);
            await (-0x268f + 0x1eea + -0x7a5 * -0x1, SendMessagesSystemWbotBaileys_1[s(0x17b)])(j, f, g);
        } catch (l) {
            const m = {};
            m[s(0x187)] = i[t(0x186)], m[s(0x171)] = l, logger_1[t(0x178)][t(0x171)](m);
            throw new Error(l);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x869 * 0x3 + -0xdca + 0x2872);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[p(0x188) + p(0x18f)] = sendMessageBaileys;