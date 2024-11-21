'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2090 + 0x3e6 + -0x617 * -0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x1ce)) / (0x1ec2 + -0x12 * 0x15b + -0x1 * 0x65b) * (-parseInt(o(0x1d0)) / (0x269f * 0x1 + -0x659 * -0x2 + -0x47 * 0xb9)) + parseInt(o(0x1e1)) / (-0xf3a * 0x2 + 0x1 * 0x1ac9 + -0x13a * -0x3) + parseInt(p(0x1d4)) / (0x2709 * -0x1 + -0x37c + -0x1 * -0x2a89) * (parseInt(o(0x1e7)) / (-0x10c2 + 0x2c6 * -0x1 + 0x138d)) + parseInt(o(0x1d2)) / (0x2264 + -0x4 * 0x978 + 0x382) + parseInt(o(0x1e8)) / (0x28 * 0x97 + 0x1f * 0x130 + -0x3c61) + parseInt(p(0x1d1)) / (0x18a6 + -0xedd + -0xb * 0xe3) * (parseInt(p(0x1dd)) / (0xfb * -0xb + 0x7f7 * -0x3 + 0x22b7)) + -parseInt(o(0x1da)) / (-0x1ac1 + 0xfca + -0x3 * -0x3ab) * (parseInt(o(0x1e3)) / (0x1f87 * 0x1 + 0x207b + -0x3ff7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x35 * 0x8f + -0x2c789 * -0x5 + -0x2e764));
var __importDefault = this && this[q(0x1cc) + q(0x1cb)] || function (c) {
    const s = q;
    return c && c[s(0x1ca)] ? c : { 'default': c };
};
const k = {};
k[r(0x1e2)] = !![], Object[r(0x1e5) + q(0x1d5)](exports, q(0x1ca), k);
const AppError_1 = __importDefault(require(r(0x1df) + r(0x1d8) + 'r')), FastReply_1 = __importDefault(require(r(0x1e0) + r(0x1e9) + 'ly')), DeleteFastReplyService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = r, u = r, h = {};
        h[t(0x1e6)] = t(0x1d3) + u(0x1d7) + t(0x1dc), h[u(0x1cf)] = u(0x1cd) + u(0x1c9) + 'S';
        const i = h, j = {};
        j['id'] = f, j[t(0x1e4)] = g;
        const l = {};
        l[u(0x1db)] = j;
        const m = await FastReply_1[t(0x1de)][u(0x1d9)](l);
        if (!m)
            throw new AppError_1[(u(0x1de))](i[u(0x1e6)], -0x2 * 0x653 + 0x8c5 + -0x7f * -0xb);
        try {
            await m[u(0x1d6)]();
        } catch (n) {
            throw new AppError_1[(t(0x1de))](i[t(0x1cf)], -0x1447 + -0x5 * 0x710 + 0x392b);
        }
    };
function a() {
    const v = [
        '301915GXWJou',
        '200151GVuGON',
        'ls/FastRep',
        'EPLY_EXIST',
        '__esModule',
        'fault',
        '__importDe',
        'ERR_FAST_R',
        '89EytUlg',
        'TJdAH',
        '9498gHxBpa',
        '3216lhqTEl',
        '5011326MYmfpx',
        'ERR_NO_FAS',
        '44OZSPil',
        'erty',
        'destroy',
        'T_REPLY_FO',
        'rs/AppErro',
        'findOne',
        '370HszDrl',
        'where',
        'UND',
        '3447xMgcFG',
        'default',
        '../../erro',
        '../../mode',
        '1715133tBfCRb',
        'value',
        '327921ClSiGy',
        'tenantId',
        'defineProp',
        'eYJNZ'
    ];
    a = function () {
        return v;
    };
    return a();
}
exports[q(0x1de)] = DeleteFastReplyService;