'use strict';
const p = b, q = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xe67 * -0x1 + 0x1555 + 0xbb3 * -0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        'erty',
        'logger',
        '183lfOKAU',
        '265641hJXand',
        '../libs/wb',
        '../utils/l',
        'leys',
        'rpDhN',
        'value',
        'ot-baileys',
        '12895RCpDAn',
        '24TRYveH',
        'Error\x20send',
        'default',
        '1304600qDUOmG',
        '__importDe',
        '4770TORIfn',
        'ogger',
        '100jLGDXm',
        '\x20messages',
        'sendMessag',
        'essagesSys',
        'error',
        'eBaileys',
        '7928XrQoaf',
        'ices/SendM',
        'defineProp',
        's/WbotServ',
        'temWbotBai',
        '296uyrxwc',
        '__esModule',
        'getWbot',
        '942711ehNBXg',
        'fault',
        '../service',
        'message',
        '19112500pUZUkQ'
    ];
    a = function () {
        return u;
    };
    return a();
}
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0xbf)) / (0x1824 + -0x58f * 0x2 + 0x12f * -0xb) + -parseInt(n(0xa9)) / (-0xad * 0x16 + 0x14fd + -0x61d) * (-parseInt(n(0xbe)) / (0x15a7 + 0x321 + 0x11 * -0x175)) + parseInt(n(0xb4)) / (-0x1 * 0x99 + 0x1 * -0x1f5a + 0x1ff7) * (-parseInt(n(0xc6)) / (-0x726 + 0x2173 * -0x1 + 0x2 * 0x144f)) + parseInt(o(0xc7)) / (-0x2 * -0xe66 + -0x7c8 + 0x14fe * -0x1) * (-parseInt(o(0xb7)) / (0x1d16 + -0x1cdf + -0x30)) + -parseInt(o(0xaf)) / (-0x121 * 0x4 + -0x18af + 0x1d3b) * (parseInt(n(0xa7)) / (-0x89 * 0x2f + -0xbb9 * 0x1 + -0x24e9 * -0x1)) + parseInt(o(0xa5)) / (0x1798 + 0x1f49 * -0x1 + 0x7bb) + parseInt(n(0xbb)) / (-0xd2e + 0x202f + -0x12f6);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x6c81c + -0x3b * 0x1a09 + -0x983 * -0x1e8));
var __importDefault = this && this[p(0xa6) + q(0xb8)] || function (c) {
    const r = p;
    return c && c[r(0xb5)] ? c : { 'default': c };
};
const k = {};
k[q(0xc4)] = !![], Object[p(0xb1) + p(0xbc)](exports, p(0xb5), k), exports[p(0xab) + p(0xae)] = void (-0x1c57 + 0xce * 0x8 + -0x10b * -0x15);
const wbot_baileys_1 = require(q(0xc0) + q(0xc5)), SendMessagesSystemWbotBaileys_1 = __importDefault(require(p(0xb9) + q(0xb2) + p(0xb0) + q(0xac) + q(0xb3) + q(0xc2))), logger_1 = require(p(0xc1) + q(0xa8)), sendMessageBaileys = async (e, f, g = undefined) => {
        const s = p, t = p, h = {};
        h[s(0xc3)] = t(0xa3) + s(0xaa);
        const i = h;
        try {
            const j = (-0x888 + -0x18d9 + 0x2161, wbot_baileys_1[t(0xb6)])(e);
            await (-0x1898 + -0x1fe7 + 0x647 * 0x9, SendMessagesSystemWbotBaileys_1[t(0xa4)])(j, f, g);
        } catch (l) {
            const m = {};
            m[s(0xba)] = i[s(0xc3)], m[t(0xad)] = l, logger_1[s(0xbd)][s(0xad)](m);
            throw new Error(l);
        }
    };
exports[p(0xab) + p(0xae)] = sendMessageBaileys;