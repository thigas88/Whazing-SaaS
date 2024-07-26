'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x190)) / (0x235c + 0xfc0 + -0x331b) + -parseInt(m(0x18b)) / (0x268c + -0x2681 + -0x9) * (-parseInt(m(0x18a)) / (-0xd * -0x1a5 + -0xe36 + 0xe5 * -0x8)) + -parseInt(l(0x180)) / (-0x8d * 0x3 + 0x1f7a + -0x1dcf) * (parseInt(l(0x184)) / (-0x7d * 0x3 + -0x1e99 + 0x2b * 0xbf)) + -parseInt(m(0x187)) / (0x1 * -0x21ce + 0x1 * 0x1736 + -0x9 * -0x12e) + -parseInt(m(0x185)) / (-0x1 * 0x8a1 + 0x308 + 0x5a0) + parseInt(m(0x19b)) / (0x3a * 0x44 + 0x1 * -0xa77 + -0x4e9 * 0x1) + parseInt(m(0x189)) / (0x1 * 0x205f + 0x4f9 * -0x3 + 0x1 * -0x116b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x148e6 * 0x7 + -0x3f6c7 * 0x1 + -0x8 * -0xdfcb));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x128 * -0x1d + -0x6 * -0x392 + 0x1 * 0xd9c);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[n(0x18c) + n(0x194)] || function (c) {
    const p = n;
    return c && c[p(0x19a)] ? c : { 'default': c };
};
const k = {};
k[n(0x197)] = !![], Object[n(0x193) + o(0x188)](exports, n(0x19a), k), exports[n(0x192) + o(0x183)] = void (0x2500 + -0x959 + -0x1ba7);
function a() {
    const v = [
        '10393896HPOeAP',
        '8ASHMvV',
        'response',
        'env',
        'eToIA',
        '1726070OPXpVR',
        '2208605miIVBQ',
        'axios',
        '1487370UvKKyC',
        'erty',
        '7640217cBLKdN',
        '3779037EqqMod',
        '2mEWflO',
        '__importDe',
        'post',
        'data',
        'OPEN_IA_UR',
        '1366060XdGFwD',
        'isnetsul',
        'sendMessag',
        'defineProp',
        'fault',
        'xOBbT',
        'log',
        'value',
        '/message_s',
        'default',
        '__esModule'
    ];
    a = function () {
        return v;
    };
    return a();
}
const axios_1 = __importDefault(require(n(0x186))), sendMessageToIA = async d => {
        const q = n, r = n, e = {
                'xOBbT': function (f, g) {
                    return f(g);
                }
            };
        try {
            const f = { ...d }, g = await axios_1[q(0x199)][q(0x18d)](process[r(0x182)][r(0x18f) + 'L'] + (q(0x198) + q(0x191)), f);
            return e[r(0x195)](handleSucces, g);
        } catch (h) {
            return e[q(0x195)](handleError, h);
        }
    };
exports[n(0x192) + o(0x183)] = sendMessageToIA;
const handleError = c => {
        const s = o, t = o;
        console[s(0x196)](c[t(0x181)]);
    }, handleSucces = c => {
        const u = n;
        return c[u(0x18e)];
    };