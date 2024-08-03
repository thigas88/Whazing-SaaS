'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x18a)) / (-0x89 * -0x3a + 0x2348 + -0x4251 * 0x1) + -parseInt(l(0x18b)) / (0x8fd + -0x8cc * 0x3 + -0x1 * -0x1169) * (-parseInt(m(0x197)) / (-0x1 * -0x2405 + 0x18a * 0x9 + 0x4 * -0xc77)) + -parseInt(m(0x187)) / (-0x17c2 + -0x1b84 + 0x334a) + -parseInt(m(0x199)) / (-0xf * 0xed + 0xf54 + -0x16c) + parseInt(m(0x190)) / (-0x8a5 + 0x30 * 0xb8 + 0x19d5 * -0x1) + parseInt(m(0x18e)) / (-0x1d05 + -0x2274 + 0x3f80) * (-parseInt(l(0x18d)) / (0x1425 + 0x1 * 0x16fd + -0x2b1a)) + parseInt(m(0x195)) / (-0x12ad + -0xeba + 0x2170);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x368a2 + -0x1 * 0x776c + -0x10706));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x13e7 + 0x1 * 0x19d6 + -0x469 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[n(0x18f) + o(0x18c)] || function (c) {
    const p = n;
    return c && c[p(0x193)] ? c : { 'default': c };
};
const k = {};
k[o(0x189)] = !![], Object[o(0x186) + n(0x192)](exports, n(0x193), k);
function a() {
    const s = [
        '803775xQmzoP',
        'defineProp',
        '409756rFbyEW',
        'sQhEb',
        'value',
        '142328hQGQZs',
        '329126fgYaER',
        'fault',
        '32xyEEMv',
        '193753sbyBxk',
        '__importDe',
        '1142772aQaltF',
        'Message',
        'erty',
        '__esModule',
        'default',
        '18405QIejWk',
        'findOne',
        '3BlvGoz',
        '../models/'
    ];
    a = function () {
        return s;
    };
    return a();
}
const Message_1 = __importDefault(require(o(0x198) + o(0x191))), getQuotedForMessageId = async (c, d) => {
        const q = o, r = o, e = {
                'sQhEb': function (g, h) {
                    return g(h);
                }
            }, f = await Message_1[q(0x194)][q(0x196)]({
                'where': {
                    'messageId': e[q(0x188)](String, c),
                    'tenantId': +d
                }
            });
        return f;
    };
exports[n(0x194)] = getQuotedForMessageId;