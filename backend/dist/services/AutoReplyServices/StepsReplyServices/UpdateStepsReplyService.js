'use strict';
function a() {
    const B = [
        'reply',
        'defineProp',
        '344073mrQAYq',
        '__importDe',
        '26234wRkMoK',
        '22106KuwbZK',
        'findOne',
        'odels/Step',
        '2645068vIRqGP',
        '5VhRfRm',
        '__esModule',
        'crOja',
        'userId',
        'default',
        '../../../m',
        '45SkSJTP',
        'value',
        'gPiYi',
        'reload',
        'where',
        'rror',
        'update',
        'ERR_NO_STE',
        'sReply',
        'fault',
        'attributes',
        'vZdcB',
        'erty',
        '2302770pDxybx',
        '27700HryrEr',
        'LY_FOUND',
        'dYHye',
        'rrors/AppE',
        '49148CNelWi',
        'P_AUTO_REP',
        '../../../e',
        '1264OzxQVX',
        'initialSte',
        '18NsDBie'
    ];
    a = function () {
        return B;
    };
    return a();
}
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0x1b8)) / (0x21d0 + -0x123a + 0x1 * -0xf95) + parseInt(v(0x1ba)) / (0x1 * 0x49 + 0x1 * -0x143e + -0x13 * -0x10d) * (parseInt(u(0x1c5)) / (0x15eb + -0x8e2 + -0xd06)) + parseInt(v(0x1be)) / (0x25db + -0xda3 * 0x1 + -0x1834) * (parseInt(u(0x1bf)) / (-0x4 * -0x81a + 0x19df + 0x3a42 * -0x1)) + parseInt(u(0x1d2)) / (-0x2bb * -0x7 + -0x1529 + 0x212) + -parseInt(u(0x1bb)) / (0x49 * -0x60 + 0x1 * 0xb12 + 0x1055) * (parseInt(v(0x1da)) / (-0x1eb0 + 0x11ce + 0xcea)) + -parseInt(v(0x1dc)) / (-0x1424 + -0x381 * 0x3 + -0x1 * -0x1eb0) * (parseInt(u(0x1d3)) / (0x125d + 0x1 * 0x78b + -0x19de)) + parseInt(v(0x1d7)) / (0x2 * -0x499 + 0xdf5 + -0x4b8);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xac5f + -0x2e2cc + -0x9a0b7 * -0x1));
var __importDefault = this && this[w(0x1b9) + w(0x1ce)] || function (c) {
    const y = w;
    return c && c[y(0x1c0)] ? c : { 'default': c };
};
const k = {};
k[x(0x1c6)] = !![], Object[w(0x1de) + w(0x1d1)](exports, x(0x1c0), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x1c4b + 0x1a30 * -0x1 + 0x3833);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(w(0x1d9) + x(0x1d6) + x(0x1ca))), StepsReply_1 = __importDefault(require(x(0x1c4) + w(0x1bd) + w(0x1cd))), UpdateStepsReplyService = async ({
        stepsReplyData: h,
        stepsReplyId: i
    }) => {
        const z = x, A = x, j = {};
        j[z(0x1c7)] = A(0x1dd), j[z(0x1d0)] = A(0x1c2), j[A(0x1d5)] = z(0x1db) + 'p', j[z(0x1c1)] = A(0x1cc) + z(0x1d8) + z(0x1d4);
        const l = j, {
                reply: m,
                userId: n,
                initialStep: o
            } = h, p = {};
        p['id'] = i;
        const q = {};
        q[z(0x1c9)] = p, q[A(0x1cf)] = [
            'id',
            l[z(0x1c7)],
            l[z(0x1d0)],
            l[z(0x1d5)]
        ];
        const r = await StepsReply_1[z(0x1c3)][A(0x1bc)](q);
        if (!r)
            throw new AppError_1[(A(0x1c3))](l[A(0x1c1)], -0x15d6 + 0x1a * 0x59 + 0x17 * 0xa0);
        const s = {};
        s[z(0x1dd)] = m, s[A(0x1c2)] = n, s[A(0x1db) + 'p'] = o, await r[z(0x1cb)](s);
        const t = {};
        return t[z(0x1cf)] = [
            'id',
            l[z(0x1c7)],
            l[z(0x1d0)],
            l[A(0x1d5)]
        ], await r[z(0x1c8)](t), r;
    };
exports[x(0x1c3)] = UpdateStepsReplyService;