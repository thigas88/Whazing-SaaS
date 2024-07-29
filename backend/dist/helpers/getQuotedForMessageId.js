'use strict';
function a() {
    const s = [
        '../models/',
        '5943120lzDCQT',
        'erty',
        '1746SEZFYZ',
        'default',
        '11pSdUPd',
        '291668VToNFd',
        '10648NRbRIw',
        '__importDe',
        '3gPETin',
        'BUrNA',
        'Message',
        '321678vNOEGh',
        'fault',
        '74838KuayAg',
        'findOne',
        '20BMsUiL',
        'defineProp',
        '350832BmFyZI',
        '__esModule',
        '253356oxUWHz',
        'value'
    ];
    a = function () {
        return s;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x63 + 0x1eee + -0x1dcf);
        let h = e[f];
        return h;
    }, b(c, d);
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0xcc)) / (0x56 * -0x45 + -0x13e + 0x186d * 0x1) + -parseInt(m(0xc4)) / (0x11b * 0x14 + 0x1b4e + -0x3168) + parseInt(m(0xc7)) / (-0x5 * -0x22d + 0x89 * -0x2f + 0xe49) * (parseInt(l(0xbc)) / (-0xea4 + 0x1 * 0x2ef + 0xbb9)) + parseInt(l(0xce)) / (-0xfe9 + 0x604 + 0x9ea) * (-parseInt(l(0xd0)) / (-0x3aa + -0x2580 + 0x2930)) + parseInt(l(0xca)) / (0xb * 0x1a2 + -0xf1 * -0x1b + -0x2 * 0x15ad) + parseInt(l(0xc5)) / (0x3 * 0x371 + 0x80e * 0x3 + -0x2275) * (-parseInt(l(0xc1)) / (0x39 + 0x7f * 0x10 + -0x820)) + parseInt(m(0xbf)) / (-0xa77 * -0x2 + 0x3 * -0x21a + 0xe96 * -0x1) * (parseInt(l(0xc3)) / (0x22 * -0x59 + -0x58 * -0x2c + 0x343 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x24ed7 * 0x1 + 0x23e63 + -0x2685f));
var __importDefault = this && this[n(0xc6) + o(0xcb)] || function (c) {
    const p = o;
    return c && c[p(0xd1)] ? c : { 'default': c };
};
const k = {};
k[n(0xbd)] = !![], Object[o(0xcf) + n(0xc0)](exports, n(0xd1), k);
const Message_1 = __importDefault(require(o(0xbe) + n(0xc9))), getQuotedForMessageId = async (c, d) => {
        const q = n, r = o, e = {
                'BUrNA': function (g, h) {
                    return g(h);
                }
            }, f = await Message_1[q(0xc2)][r(0xcd)]({
                'where': {
                    'messageId': e[q(0xc8)](String, c),
                    'tenantId': +d
                }
            });
        return f;
    };
exports[n(0xc2)] = getQuotedForMessageId;