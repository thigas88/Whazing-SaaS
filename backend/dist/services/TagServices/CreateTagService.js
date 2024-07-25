'use strict';
const n = b, o = b;
function a() {
    const s = [
        '335jYURYq',
        '__esModule',
        'ls/Tag',
        'default',
        '1528nHXaII',
        '../../mode',
        '17842825ghQdFA',
        'tag',
        'erty',
        '__importDe',
        '1359536uTbmfA',
        '17543890ALGoHG',
        '13374WvrLGe',
        'userId',
        'fault',
        'defineProp',
        '90AztCjK',
        '119189LfMCrW',
        '2364681QwjEuT',
        'create',
        '93908zjQOQj',
        'isActive',
        'value',
        '2ALPKKy',
        'tenantId',
        'color'
    ];
    a = function () {
        return s;
    };
    return a();
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x19a)) / (0x10ba + 0xbc1 * 0x2 + -0x283b) * (-parseInt(m(0x18d)) / (-0x2522 + -0x1da8 + 0x72 * 0x96)) + parseInt(l(0x195)) / (-0x23e + -0xd12 + 0x1 * 0xf53) + -parseInt(l(0x197)) / (-0x338 * 0x1 + -0xb68 + 0x1 * 0xea4) * (-parseInt(l(0x19d)) / (-0x66b * 0x1 + -0x2cf * 0x8 + 0x1ce8)) + -parseInt(l(0x193)) / (-0xd9e + -0x2 * 0x44 + -0x2 * -0x716) * (parseInt(l(0x194)) / (-0x1 * 0x33d + -0x9de + 0xd22)) + parseInt(l(0x1a1)) / (0x1c3 * -0x13 + -0x1 * -0x4cd + 0x1cb4) * (parseInt(l(0x18f)) / (0x503 * -0x4 + 0x13 * -0x169 + 0x2ee0)) + -parseInt(l(0x18e)) / (0x1 * 0x15b9 + -0x246e * 0x1 + 0x1 * 0xebf) + parseInt(m(0x1a3)) / (-0x15b5 + -0x12c3 + 0x2883);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x17cd15 + 0x52d5 * -0x4c + 0xe7d04));
var __importDefault = this && this[n(0x18c) + n(0x191)] || function (c) {
    const p = o;
    return c && c[p(0x19e)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xbcf * 0x2 + -0xc0e + -0x18d * -0x18);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[o(0x199)] = !![], Object[n(0x192) + o(0x1a5)](exports, n(0x19e), k);
const Tag_1 = __importDefault(require(o(0x1a2) + n(0x19f))), CreateTagService = async ({
        tag: d,
        color: e,
        isActive: f,
        userId: g,
        tenantId: h
    }) => {
        const q = o, r = o, i = {};
        i[q(0x1a4)] = d, i[q(0x19c)] = e, i[q(0x198)] = f, i[q(0x190)] = g, i[r(0x19b)] = h;
        const j = await Tag_1[q(0x1a0)][r(0x196)](i);
        return j;
    };
exports[n(0x1a0)] = CreateTagService;