'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0xa1)) / (-0x99d * -0x2 + -0x618 + -0x1 * 0xd21) * (parseInt(v(0xa8)) / (-0x16 * 0x83 + 0x2 * -0x10eb + 0x2d1a)) + parseInt(v(0xa2)) / (0x6f * 0xe + -0x477 * 0x1 + -0x198) + parseInt(u(0x93)) / (0x5 * -0x678 + -0x2 * 0x7f5 + 0x3046) + parseInt(v(0xa0)) / (-0x3 * -0x6f1 + 0x5 * 0x46b + -0x2ae5) + -parseInt(v(0xb5)) / (-0x1ed + -0x1b2e + 0x1d21) * (parseInt(v(0x9d)) / (0x13df + -0x1833 + 0x45b)) + parseInt(u(0x99)) / (0x1445 + -0xe * -0x123 + 0xf * -0x269) * (parseInt(v(0xab)) / (0x2b7 * 0x2 + -0xf0 * 0x29 + 0x210b)) + -parseInt(u(0xa3)) / (-0x3b * -0x5d + -0x2067 + 0xb02) * (parseInt(v(0xa9)) / (0xbc2 + -0x185e * 0x1 + 0xca7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xb * 0x2d39 + 0xb * 0x20e61 + 0x5e59a * -0x2));
var __importDefault = this && this[w(0xaf) + w(0xac)] || function (c) {
    const y = w;
    return c && c[y(0x8f)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xd07 + 0xcdb * -0x1 + 0x63);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[w(0xa4)] = !![], Object[x(0x9a) + x(0xa6)](exports, w(0x8f), k);
function a() {
    const B = [
        'dEnmz',
        'ERR_NO_STE',
        '49yecFKQ',
        '../../../e',
        'sReply',
        '2032525zsolJT',
        '2312PZyPEK',
        '945732JaRDDL',
        '10EAyJCt',
        'value',
        'hprik',
        'erty',
        'attributes',
        '860nCGpng',
        '3118841HxLjln',
        'default',
        '11358WxCylY',
        'fault',
        'reload',
        'bAUXF',
        '__importDe',
        'where',
        'yzWnc',
        'findOne',
        'P_AUTO_REP',
        'userId',
        '248964iopgAl',
        '__esModule',
        'odels/Step',
        '../../../m',
        'update',
        '3920720encBDW',
        'LY_FOUND',
        'rrors/AppE',
        'rror',
        'initialSte',
        'reply',
        '4456YIoMaA',
        'defineProp'
    ];
    a = function () {
        return B;
    };
    return a();
}
const AppError_1 = __importDefault(require(x(0x9e) + w(0x95) + w(0x96))), StepsReply_1 = __importDefault(require(x(0x91) + x(0x90) + w(0x9f))), UpdateStepsReplyService = async ({
        stepsReplyData: h,
        stepsReplyId: i
    }) => {
        const z = w, A = w, j = {};
        j[z(0x9b)] = A(0x98), j[A(0xae)] = A(0xb4), j[A(0xa5)] = A(0x97) + 'p', j[z(0xb1)] = A(0x9c) + z(0xb3) + z(0x94);
        const l = j, {
                reply: m,
                userId: n,
                initialStep: o
            } = h, p = {};
        p['id'] = i;
        const q = {};
        q[A(0xb0)] = p, q[A(0xa7)] = [
            'id',
            l[z(0x9b)],
            l[z(0xae)],
            l[A(0xa5)]
        ];
        const r = await StepsReply_1[A(0xaa)][A(0xb2)](q);
        if (!r)
            throw new AppError_1[(z(0xaa))](l[z(0xb1)], -0x1f61 + -0x67 * 0x5 + 0x4 * 0x8be);
        const s = {};
        s[A(0x98)] = m, s[A(0xb4)] = n, s[A(0x97) + 'p'] = o, await r[z(0x92)](s);
        const t = {};
        return t[z(0xa7)] = [
            'id',
            l[A(0x9b)],
            l[z(0xae)],
            l[z(0xa5)]
        ], await r[A(0xad)](t), r;
    };
exports[w(0xaa)] = UpdateStepsReplyService;