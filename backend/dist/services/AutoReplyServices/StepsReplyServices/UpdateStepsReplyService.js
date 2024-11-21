'use strict';
function a() {
    const B = [
        '1964320hHQevC',
        'attributes',
        'odels/Step',
        'yuqHb',
        '__importDe',
        '12955DotscJ',
        'reload',
        'update',
        'initialSte',
        'where',
        'LY_FOUND',
        '8mGbgYv',
        'findOne',
        'value',
        '7156224RHnlZP',
        'defineProp',
        'erty',
        '22ulrOzt',
        'rrors/AppE',
        '2LMjwIc',
        'rror',
        'P_AUTO_REP',
        'reply',
        '463568KGCvFJ',
        'default',
        '1518iRENNG',
        '../../../e',
        'plfmu',
        'userId',
        'ERR_NO_STE',
        '__esModule',
        'Clcrd',
        'lVOhW',
        '5223470uqLLjG',
        '2049699TUGhkw',
        '540206sLtbaF',
        'fault',
        'sReply',
        '../../../m'
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
            const f = parseInt(u(0x1bb)) / (-0x353 * -0x1 + -0x21ba + 0x1e68) * (parseInt(v(0x1a4)) / (0xcae + -0x901 * -0x2 + -0x2 * 0xf57)) + parseInt(u(0x1a3)) / (-0x1113 + 0x12b2 + -0x19c) + parseInt(v(0x1a8)) / (0x109c + -0x8b6 + 0x1 * -0x7e2) + -parseInt(u(0x1ad)) / (-0x6ae * 0x3 + 0x227a + -0x1 * 0xe6b) * (-parseInt(u(0x19a)) / (-0x39f * -0x3 + 0x7 * -0x4d6 + 0x1703)) + -parseInt(u(0x198)) / (-0x26 * 0x64 + -0x2156 + 0x1 * 0x3035) * (parseInt(v(0x1b3)) / (0x1d03 + -0xd18 + -0x1 * 0xfe3)) + -parseInt(u(0x1b6)) / (0xeb7 * 0x1 + -0x799 + 0x7 * -0x103) + parseInt(u(0x1a2)) / (-0x1031 + -0x2f * 0x85 + 0x28a6) * (-parseInt(v(0x1b9)) / (-0x1d * -0xbf + -0x3fa + 0x1 * -0x119e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7 * -0x11c50 + 0x79d2f + -0x257 * 0x38d));
var __importDefault = this && this[w(0x1ac) + w(0x1a5)] || function (c) {
    const y = w;
    return c && c[y(0x19f)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1653 + -0x7cf * -0x1 + -0x1c8d * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[w(0x1b5)] = !![], Object[x(0x1b7) + w(0x1b8)](exports, x(0x19f), k);
const AppError_1 = __importDefault(require(w(0x19b) + x(0x1ba) + w(0x195))), StepsReply_1 = __importDefault(require(w(0x1a7) + x(0x1aa) + w(0x1a6))), UpdateStepsReplyService = async ({
        stepsReplyData: h,
        stepsReplyId: i
    }) => {
        const z = w, A = x, j = {};
        j[z(0x19c)] = A(0x197), j[A(0x1a1)] = z(0x19d), j[z(0x1ab)] = z(0x1b0) + 'p', j[A(0x1a0)] = z(0x19e) + A(0x196) + A(0x1b2);
        const l = j, {
                reply: m,
                userId: n,
                initialStep: o
            } = h, p = {};
        p['id'] = i;
        const q = {};
        q[z(0x1b1)] = p, q[A(0x1a9)] = [
            'id',
            l[z(0x19c)],
            l[z(0x1a1)],
            l[A(0x1ab)]
        ];
        const r = await StepsReply_1[z(0x199)][z(0x1b4)](q);
        if (!r)
            throw new AppError_1[(A(0x199))](l[z(0x1a0)], -0x1d9c + -0x5b3 * -0x4 + 0x864);
        const s = {};
        s[z(0x197)] = m, s[A(0x19d)] = n, s[z(0x1b0) + 'p'] = o, await r[A(0x1af)](s);
        const t = {};
        return t[z(0x1a9)] = [
            'id',
            l[z(0x19c)],
            l[z(0x1a1)],
            l[z(0x1ab)]
        ], await r[A(0x1ae)](t), r;
    };
exports[x(0x199)] = UpdateStepsReplyService;