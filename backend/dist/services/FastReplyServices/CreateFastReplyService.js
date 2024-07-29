'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0xb3)) / (0x127b + -0x1cac + -0x5 * -0x20a) * (-parseInt(m(0xa3)) / (0x2 * -0x125 + 0x102b * 0x1 + -0xddf)) + -parseInt(l(0xa0)) / (-0x3b * -0x6a + -0x12e2 + -0x589) * (parseInt(l(0xa5)) / (0xff7 * 0x2 + -0x26b9 + 0x6cf)) + parseInt(l(0xad)) / (0xdfb + 0x24 + -0xa * 0x169) * (parseInt(l(0x9d)) / (0xa * -0x9 + 0x1e * -0x133 + 0x245a)) + -parseInt(m(0xaf)) / (-0x17fa + -0x1d79 + 0x357a) + parseInt(l(0xa6)) / (-0x1c65 + 0x1464 + -0x1 * -0x809) + -parseInt(m(0xb0)) / (-0x1a11 + 0x3 * -0xc47 + -0x1 * -0x3eef) + parseInt(l(0xa8)) / (-0x2073 * -0x1 + 0x21f * 0x2 + -0x24a7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x19df2e + 0x10d0f * 0x1c + -0x28231d));
function a() {
    const s = [
        '__esModule',
        '1038DARJvS',
        '__importDe',
        'media',
        '1187438Ucxwis',
        'default',
        '18108KNUFYE',
        '14715848IFGVCm',
        'value',
        '655570RfnfEo',
        'userId',
        'create',
        'message',
        '../../mode',
        '4258590fNMyLe',
        'defineProp',
        '3290259EikMKS',
        '10548873VGrpEw',
        'ls/FastRep',
        'tenantId',
        '1iyqLMP',
        'erty',
        'fault',
        '12cdcDlm',
        'key'
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0xa1) + o(0x9c)] || function (c) {
    const p = o;
    return c && c[p(0x9f)] ? c : { 'default': c };
};
const k = {};
k[o(0xa7)] = !![], Object[n(0xae) + n(0x9b)](exports, n(0x9f), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3d0 * 0x4 + 0x8de + -0x1783);
        let h = e[f];
        return h;
    }, b(c, d);
}
const FastReply_1 = __importDefault(require(o(0xac) + o(0xb1) + 'ly')), CreateFastReplyService = async ({
        key: d,
        message: e,
        userId: f,
        tenantId: g,
        media: h
    }) => {
        const q = o, r = o, i = {};
        i[q(0x9e)] = d, i[r(0xab)] = e, i[q(0xa9)] = f, i[r(0xb2)] = g, i[q(0xa2)] = h;
        const j = await FastReply_1[q(0xa4)][r(0xaa)](i);
        return j;
    };
exports[n(0xa4)] = CreateFastReplyService;