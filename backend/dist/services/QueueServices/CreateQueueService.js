'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x241f + -0x1b4 * -0xa + -0x3467 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = b, p = b;
function a() {
    const t = [
        '3314402DOXRCJ',
        'defineProp',
        'isActive',
        '1hrQiuQ',
        '856210yhzbni',
        '__esModule',
        '__importDe',
        '1349918OPSeYQ',
        'create',
        'queue',
        'default',
        'fault',
        'value',
        '143sDErNE',
        '54WbZWjX',
        'erty',
        'userId',
        '3132366UQmghW',
        '200lGJSBs',
        'from_ia',
        'tenantId',
        'ls/Queue',
        '16780DLbzHf',
        'color',
        '1450904smGbqc',
        '176064NRtQZC',
        '../../mode'
    ];
    a = function () {
        return t;
    };
    return a();
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0xd2)) / (-0xb * 0x229 + -0x3d2 * -0x5 + 0x4aa) * (parseInt(m(0xd6)) / (-0x1e94 + -0x268e + 0x4524)) + parseInt(n(0xcd)) / (0xa96 + -0x197b + 0x48 * 0x35) + -parseInt(m(0xc6)) / (0x1 * -0x1ed9 + 0x21d2 + -0x2f5) * (-parseInt(m(0xca)) / (0x5e3 * -0x5 + -0x67 * 0x59 + 0x4143)) + parseInt(n(0xc5)) / (0x5 * 0x723 + 0xab * 0x31 + -0x4464) + -parseInt(m(0xcf)) / (-0x1d99 + -0x3f6 + 0x2196) + parseInt(m(0xcc)) / (0x3 * 0xa67 + -0x1bb1 + -0xdf * 0x4) * (-parseInt(n(0xc2)) / (0x1a * 0x117 + 0x17a4 + -0x33f1)) + parseInt(m(0xd3)) / (-0x62 * 0x43 + -0x103d + 0x29ed * 0x1) * (parseInt(n(0xc1)) / (-0x1c60 + 0x101b + 0x10 * 0xc5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1cf0b7 + -0x14e6b6 + 0x91db * 0xc));
var __importDefault = this && this[o(0xd5) + p(0xda)] || function (c) {
    const q = p;
    return c && c[q(0xd4)] ? c : { 'default': c };
};
const k = {};
k[o(0xc0)] = !![], Object[p(0xd0) + p(0xc3)](exports, p(0xd4), k);
const Queue_1 = __importDefault(require(o(0xce) + o(0xc9))), CreateQueueService = async ({
        queue: d,
        isActive: e,
        userId: f,
        from_ia: g,
        color: h,
        tenantId: i
    }) => {
        const r = p, s = p, j = {};
        j[r(0xd8)] = d, j[r(0xd1)] = e, j[r(0xc4)] = f, j[r(0xc7)] = g, j[s(0xcb)] = h, j[r(0xc8)] = i;
        const l = await Queue_1[r(0xd9)][r(0xd7)](j);
        return l;
    };
exports[p(0xd9)] = CreateQueueService;