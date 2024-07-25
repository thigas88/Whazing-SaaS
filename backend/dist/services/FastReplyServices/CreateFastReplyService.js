'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x150)) / (-0x473 * 0x7 + -0x263a + 0x4560) + -parseInt(m(0x151)) / (-0x103 * -0x19 + 0x1bed + -0xe * 0x3cd) * (parseInt(l(0x15f)) / (-0x1 * -0x2002 + 0x2 * 0x3f2 + -0x1 * 0x27e3)) + -parseInt(m(0x14f)) / (-0x24af * 0x1 + -0x11 * 0xf7 + 0x351a) + -parseInt(l(0x15d)) / (-0xc42 * -0x1 + 0x405 + -0x1042 * 0x1) + -parseInt(l(0x162)) / (0x1d * -0x2c + 0x2cc * -0xd + -0x3 * -0xdca) * (-parseInt(m(0x158)) / (-0xe05 * -0x2 + 0x53 * -0x4e + -0x2b9)) + parseInt(l(0x161)) / (0x1029 + 0x1 * -0x1cea + 0xcc9 * 0x1) * (-parseInt(l(0x15e)) / (0x1 * 0xc22 + 0xec1 + 0x3d6 * -0x7)) + parseInt(l(0x15a)) / (-0x5 * -0x38d + -0x236a + 0x11b3 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x4fa1d + 0x1bc6 * -0x5 + 0xaa1fa));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2489 + 0x79e + -0x2 * -0xf1b);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[n(0x154) + n(0x14b)] || function (c) {
    const p = o;
    return c && c[p(0x14d)] ? c : { 'default': c };
};
function a() {
    const s = [
        '5787VQYuRx',
        '51qiswJe',
        'media',
        '7592AfzRIe',
        '281028IzVwbe',
        'default',
        'fault',
        'create',
        '__esModule',
        '../../mode',
        '912308YjJOIp',
        '577935AFSEmY',
        '13444didtQW',
        'erty',
        'message',
        '__importDe',
        'ls/FastRep',
        'tenantId',
        'value',
        '63VueNsq',
        'defineProp',
        '7467150FFhKYF',
        'userId',
        'key',
        '2292655bIiZba'
    ];
    a = function () {
        return s;
    };
    return a();
}
const k = {};
k[o(0x157)] = !![], Object[n(0x159) + n(0x152)](exports, n(0x14d), k);
const FastReply_1 = __importDefault(require(o(0x14e) + n(0x155) + 'ly')), CreateFastReplyService = async ({
        key: d,
        message: e,
        userId: f,
        tenantId: g,
        media: h
    }) => {
        const q = n, r = o, i = {};
        i[q(0x15c)] = d, i[q(0x153)] = e, i[q(0x15b)] = f, i[r(0x156)] = g, i[q(0x160)] = h;
        const j = await FastReply_1[q(0x163)][r(0x14c)](i);
        return j;
    };
exports[n(0x163)] = CreateFastReplyService;