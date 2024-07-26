'use strict';
const n = b, o = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1bd8 + -0x81 * -0x3c + -0x38e4 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x13c)) / (0x8c2 + 0x1b67 + -0x34 * 0xb2) + parseInt(l(0x133)) / (0xba * 0x27 + 0x1 * -0x195e + 0x2f6 * -0x1) + -parseInt(m(0x13a)) / (0xb52 + 0x1dd0 + -0x57 * 0x79) + parseInt(l(0x146)) / (0xed7 + -0x241 + -0x1 * 0xc92) * (parseInt(l(0x138)) / (-0x941 + 0x26c9 + 0x5 * -0x5e7)) + -parseInt(m(0x13f)) / (-0x8f * 0x22 + -0x27 * -0xb5 + -0x88f * 0x1) + -parseInt(m(0x147)) / (0xcb3 * -0x1 + -0x5 * 0x65 + 0xeb3) * (parseInt(l(0x139)) / (0x2f9 * 0x8 + -0x106d + -0x753)) + -parseInt(m(0x145)) / (-0x503 * -0x1 + -0x17ef * -0x1 + -0x1ce9) * (-parseInt(l(0x13d)) / (-0x1ec2 + -0x115a * 0x2 + 0x4180));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7c817 * 0x1 + -0x4c954 + -0x52 * -0x3925));
function a() {
    const s = [
        '13375bKSZOd',
        '32poHFDh',
        '2071689oDPZtA',
        'create',
        '290898JHHvjD',
        '62330NuwXuu',
        'erty',
        '3950076rhBCdP',
        'name',
        '__esModule',
        '__importDe',
        'action',
        'defineProp',
        '1251iRQJUs',
        '584QriTVN',
        '396823pzHSzV',
        'ls/AutoRep',
        'userId',
        'fault',
        '807498OyCiXy',
        '../../mode',
        'tenantId',
        'default',
        'value'
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0x142) + o(0x132)] || function (c) {
    const p = o;
    return c && c[p(0x141)] ? c : { 'default': c };
};
const k = {};
k[o(0x137)] = !![], Object[o(0x144) + o(0x13e)](exports, o(0x141), k);
const AutoReply_1 = __importDefault(require(o(0x134) + o(0x130) + 'ly')), CreateAutoReplyService = async ({
        name: d,
        action: e,
        userId: f,
        tenantId: g
    }) => {
        const q = o, r = o, h = {};
        h[q(0x140)] = d, h[q(0x143)] = e, h[q(0x131)] = f, h[q(0x135)] = g;
        const i = await AutoReply_1[q(0x136)][q(0x13b)](h);
        return i;
    };
exports[o(0x136)] = CreateAutoReplyService;