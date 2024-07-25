'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0xb1)) / (-0x19 * -0x189 + 0x31 * -0x3 + -0x1 * 0x25cd) + parseInt(m(0xa4)) / (-0x1 * -0x29c + -0x26e0 * 0x1 + 0x2446) + -parseInt(l(0x9a)) / (-0x4a4 + 0x1 * 0x1489 + -0xfe2) * (-parseInt(m(0xae)) / (0x141 * -0x17 + 0x2 * -0x64d + 0x2975 * 0x1)) + parseInt(l(0xb0)) / (-0x218e + 0x221 * -0x7 + 0x183d * 0x2) * (parseInt(m(0xa0)) / (0xfe * -0x17 + 0x1e1c + 0x1f * -0x3c)) + parseInt(l(0xb2)) / (-0x115 * 0xa + 0xb48 + -0x6f) + parseInt(l(0xa2)) / (-0x4ec * -0x6 + 0xacb + -0x1 * 0x284b) + -parseInt(l(0xa9)) / (-0x21 * -0x22 + -0x1747 * 0x1 + 0x12ee);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x9d * 0xbe1 + -0x8a52b + 0x6a1 * 0x3bc));
function a() {
    const v = [
        'value',
        '21824415bbfnuk',
        'isnetsul',
        'fault',
        'log',
        'OPEN_IA_UR',
        '2300348kREETj',
        'response',
        '3845GsCIRV',
        '1010000DvYLlZ',
        '8000755OSoUiP',
        'default',
        'eToIA',
        'env',
        'qKNNc',
        '6xnStej',
        '__importDe',
        'post',
        'nhXwi',
        'defineProp',
        'axios',
        '6114LIytmF',
        '__esModule',
        '3009440XMFZlc',
        '/message_s',
        '1120658uLyQWD',
        'data',
        'sendMessag',
        'erty'
    ];
    a = function () {
        return v;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x935 * 0x4 + 0x7 * 0x3bb + 0xb4e);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[n(0x9b) + n(0xab)] || function (c) {
    const p = o;
    return c && c[p(0xa1)] ? c : { 'default': c };
};
const k = {};
k[n(0xa8)] = !![], Object[o(0x9e) + n(0xa7)](exports, n(0xa1), k), exports[o(0xa6) + o(0x97)] = void (0x1 * 0x15d + -0x1 * 0x1933 + 0x17d6 * 0x1);
const axios_1 = __importDefault(require(n(0x9f))), sendMessageToIA = async d => {
        const q = o, r = n, e = {
                'nhXwi': function (f, g) {
                    return f(g);
                },
                'qKNNc': function (f, g) {
                    return f(g);
                }
            };
        try {
            const f = { ...d }, g = await axios_1[q(0xb3)][r(0x9c)](process[r(0x98)][q(0xad) + 'L'] + (r(0xa3) + q(0xaa)), f);
            return e[r(0x9d)](handleSucces, g);
        } catch (h) {
            return e[q(0x99)](handleError, h);
        }
    };
exports[n(0xa6) + o(0x97)] = sendMessageToIA;
const handleError = c => {
        const s = n, t = n;
        console[s(0xac)](c[s(0xaf)]);
    }, handleSucces = c => {
        const u = n;
        return c[u(0xa5)];
    };