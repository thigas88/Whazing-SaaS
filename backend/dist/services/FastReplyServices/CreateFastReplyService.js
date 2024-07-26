'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x118)) / (-0x1fe + 0x14dd + 0xa1 * -0x1e) * (-parseInt(m(0x113)) / (0x5b * -0x27 + 0x10f9 + -0x31a)) + -parseInt(m(0x11e)) / (0x5 * -0x35b + -0x1159 + 0x2223) * (parseInt(l(0x116)) / (-0x496 * 0x5 + 0xc59 + 0x1 * 0xa99)) + -parseInt(m(0x10d)) / (-0x2c * -0xbc + -0x1d0e + 0x1 * -0x33d) + -parseInt(l(0x123)) / (-0x12b5 + 0xd39 + -0x8d * -0xa) + -parseInt(m(0x10e)) / (0xa * -0xf7 + 0x9f1 + -0x44) + -parseInt(l(0x120)) / (0x7ac + 0xd6f + -0x1513) * (-parseInt(m(0x124)) / (0x225e + 0x14 * 0x1e7 + 0xa57 * -0x7)) + -parseInt(l(0x119)) / (-0x17 * -0x74 + -0x61 * -0x3d + 0x4c9 * -0x7) * (-parseInt(l(0x11d)) / (-0x29 * 0xe + -0xb * -0x155 + -0xc5e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x46dfd + -0x3 * 0x6574f + -0x125 * -0x1eec));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2010 + -0x1a39 + -0x4ca * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const s = [
        '4308750TDgaoS',
        '7805462bSwLES',
        'defineProp',
        'erty',
        'key',
        'fault',
        '1202298qvmaaX',
        'ls/FastRep',
        '../../mode',
        '4vPalfm',
        'media',
        '1vxtQCz',
        '820IbUquL',
        'message',
        'userId',
        '__importDe',
        '536195BtsJqn',
        '3918756lengQo',
        'tenantId',
        '730648zkMged',
        'default',
        'value',
        '8128584imLfLc',
        '81oNoEZv',
        'create',
        '__esModule'
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0x11c) + o(0x112)] || function (c) {
    const p = o;
    return c && c[p(0x126)] ? c : { 'default': c };
};
const k = {};
k[n(0x122)] = !![], Object[n(0x10f) + o(0x110)](exports, o(0x126), k);
const FastReply_1 = __importDefault(require(o(0x115) + o(0x114) + 'ly')), CreateFastReplyService = async ({
        key: d,
        message: e,
        userId: f,
        tenantId: g,
        media: h
    }) => {
        const q = o, r = n, i = {};
        i[q(0x111)] = d, i[q(0x11a)] = e, i[q(0x11b)] = f, i[q(0x11f)] = g, i[q(0x117)] = h;
        const j = await FastReply_1[r(0x121)][r(0x125)](i);
        return j;
    };
exports[n(0x121)] = CreateFastReplyService;