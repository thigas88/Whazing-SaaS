'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x86)) / (0x3a9 * -0x5 + -0x15af + 0x1d * 0x161) * (-parseInt(m(0x7c)) / (-0x1 * -0xa8d + 0x1396 + -0xa0b * 0x3)) + parseInt(l(0x7d)) / (0x58a * 0x1 + -0x7 * 0x421 + -0xb0 * -0x22) + parseInt(l(0x93)) / (0xe5f + -0x25d9 + 0x61 * 0x3e) * (-parseInt(m(0x7b)) / (0x11 * -0x171 + 0x17aa + -0x16 * -0xa)) + parseInt(m(0x8e)) / (0x2 * -0x12f1 + 0x70f * -0x5 + 0x4933) * (parseInt(m(0x91)) / (-0x1e0a + 0x167 * 0x6 + -0x1 * -0x15a7)) + parseInt(m(0x82)) / (0x3 * 0x35f + 0x73 * -0x4 + -0x849) * (parseInt(l(0x8f)) / (0x1fb3 + -0x1622 + 0x4 * -0x262)) + parseInt(l(0x8b)) / (0x187c + -0x1 * -0x1ea9 + -0x371b) + -parseInt(l(0x7e)) / (-0xf9a + 0x194 * 0xd + -0x4df);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5a45d * 0x1 + 0x431b6 * -0x2 + 0x8bba3));
function a() {
    const s = [
        'tenantId',
        '9vUHWAF',
        '../../mode',
        'ls/Tag',
        'value',
        'defineProp',
        '4135900eFwxQe',
        'default',
        'tag',
        '1140cTIeld',
        '314694SdkWmM',
        '__esModule',
        '9135xCJgqf',
        '__importDe',
        '1766260PJRhcZ',
        'fault',
        '5YvkiOg',
        '53980cBioYc',
        '883461FZPWsT',
        '4825348MtcacF',
        'isActive',
        'create',
        'color',
        '128gnKWCE',
        'userId',
        'erty'
    ];
    a = function () {
        return s;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * -0xa43 + 0x51c * 0x6 + -0x9a8);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[n(0x92) + o(0x7a)] || function (c) {
    const p = o;
    return c && c[p(0x90)] ? c : { 'default': c };
};
const k = {};
k[o(0x89)] = !![], Object[o(0x8a) + n(0x84)](exports, o(0x90), k);
const Tag_1 = __importDefault(require(o(0x87) + o(0x88))), CreateTagService = async ({
        tag: d,
        color: e,
        isActive: f,
        userId: g,
        tenantId: h
    }) => {
        const q = n, r = o, i = {};
        i[q(0x8d)] = d, i[q(0x81)] = e, i[q(0x7f)] = f, i[q(0x83)] = g, i[q(0x85)] = h;
        const j = await Tag_1[r(0x8c)][q(0x80)](i);
        return j;
    };
exports[n(0x8c)] = CreateTagService;