'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0xb1)) / (0x1 * 0xd1d + -0xb9 * -0x19 + -0x15b * 0x17) * (parseInt(m(0xbe)) / (-0x1 * -0x11ab + 0xbb4 + 0x1 * -0x1d5d)) + parseInt(l(0xbc)) / (0x67 * 0x33 + -0x23b2 + 0x3 * 0x510) + parseInt(l(0xbb)) / (0x1 * 0x713 + -0x115 * 0xb + 0x4d8) * (-parseInt(l(0xab)) / (0x1 * -0x1028 + -0x62c + 0x1659)) + parseInt(l(0xb4)) / (0x649 * 0x1 + 0xbbd + -0x1200) * (parseInt(l(0xb6)) / (-0x43c * 0x5 + 0x217b + -0xc48)) + -parseInt(m(0xaf)) / (0x6 * -0x38 + 0x1af * -0x3 + 0x665) * (-parseInt(l(0xb9)) / (0xcf9 + -0x125a + 0x56a)) + parseInt(m(0xae)) / (0x2489 + 0xb * 0x1cd + -0x384e) + parseInt(m(0xaa)) / (0xcb9 + 0x501 * -0x6 + 0x8 * 0x22b) * (parseInt(m(0xbf)) / (0xb8b * -0x2 + -0x2fa + 0xd0e * 0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xf925b + 0x1 * -0x186a27 + 0x3875 * 0x61));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x827 + -0x1a * -0x3e + 0x284);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[n(0xb7) + o(0xb3)] || function (c) {
    const p = n;
    return c && c[p(0xb2)] ? c : { 'default': c };
};
function a() {
    const s = [
        '188556WwajMT',
        'findOne',
        '3188756ApfFrz',
        '12ftRWuc',
        'bKBxM',
        '16078227PlPNCw',
        '65795ilRCQT',
        'default',
        'value',
        '3043110SJbxjQ',
        '16NZCoaF',
        'defineProp',
        '1nMLNIQ',
        '__esModule',
        'fault',
        '1824gUKBWY',
        'erty',
        '10199HHhees',
        '__importDe',
        'Message',
        '3909528LkwCYL',
        '../models/',
        '220kVemCQ'
    ];
    a = function () {
        return s;
    };
    return a();
}
const k = {};
k[n(0xad)] = !![], Object[n(0xb0) + n(0xb5)](exports, o(0xb2), k);
const Message_1 = __importDefault(require(n(0xba) + n(0xb8))), getQuotedForMessageId = async (c, d) => {
        const q = o, r = n, e = {
                'bKBxM': function (g, h) {
                    return g(h);
                }
            }, f = await Message_1[q(0xac)][r(0xbd)]({
                'where': {
                    'messageId': e[q(0xa9)](String, c),
                    'tenantId': +d
                }
            });
        return f;
    };
exports[n(0xac)] = getQuotedForMessageId;