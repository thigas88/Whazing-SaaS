'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2458 + -0x1310 + 0x2 * 0x1c0a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0xbc)) / (0x1638 + -0xa58 + -0xbdf) + parseInt(l(0xae)) / (0x2b9 + -0x1 * -0x3b5 + 0x1 * -0x66c) + parseInt(m(0xb3)) / (0x1 * 0x1fb3 + -0x1 * 0x1594 + 0x2 * -0x50e) * (parseInt(m(0xc0)) / (-0x847 + 0x1a * 0xd7 + -0xd8b)) + -parseInt(m(0xb8)) / (-0x191b + 0x12ae * -0x2 + -0xac * -0x5d) * (-parseInt(m(0xbd)) / (0x1 * -0xf7e + 0x171e + -0x79a)) + parseInt(m(0xb0)) / (0x2165 + 0x1ada + -0x4 * 0xf0e) * (-parseInt(m(0xb1)) / (-0x14f0 + 0x1 * -0x859 + 0x4f * 0x5f)) + parseInt(l(0xad)) / (-0x57 * 0x51 + -0xe7f * 0x2 + 0x388e) + -parseInt(l(0xb2)) / (-0x5cb * -0x2 + 0x1 * 0x2114 + -0xee0 * 0x3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xe7be7 + -0x5f51a + 0x1f005d));
var __importDefault = this && this[n(0xba) + n(0xb7)] || function (c) {
    const p = o;
    return c && c[p(0xbb)] ? c : { 'default': c };
};
function a() {
    const s = [
        '32998TqXIes',
        '32usSKxn',
        '20507080WcpVZN',
        '141ITGQIo',
        'erty',
        'findOne',
        'aIRXV',
        'fault',
        '9220tpVfJT',
        'defineProp',
        '__importDe',
        '__esModule',
        '687286pzsySl',
        '2688nUFxis',
        '../models/',
        'Message',
        '88948YrSbqZ',
        'value',
        '2032020XYMgWT',
        '2703758KJtjHa',
        'default'
    ];
    a = function () {
        return s;
    };
    return a();
}
const k = {};
k[n(0xac)] = !![], Object[n(0xb9) + n(0xb4)](exports, o(0xbb), k);
const Message_1 = __importDefault(require(n(0xbe) + n(0xbf))), getQuotedForMessageId = async (c, d) => {
        const q = o, r = n, e = {
                'aIRXV': function (g, h) {
                    return g(h);
                }
            }, f = await Message_1[q(0xaf)][r(0xb5)]({
                'where': {
                    'messageId': e[q(0xb6)](String, c),
                    'tenantId': +d
                }
            });
        return f;
    };
exports[n(0xaf)] = getQuotedForMessageId;