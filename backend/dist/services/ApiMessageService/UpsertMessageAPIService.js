'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(C(0x104)) / (0xe2 * 0x8 + 0x1 * 0x1bf + -0x8ce) * (-parseInt(D(0x120)) / (0xfb7 + 0xfbe * -0x1 + -0x9 * -0x1)) + -parseInt(D(0x10a)) / (0x1a01 + -0x1165 + -0x899) * (parseInt(C(0x129)) / (-0x6b8 + -0x476 + -0x599 * -0x2)) + parseInt(D(0x11c)) / (-0x567 + 0xb * -0x374 + -0x8 * -0x56d) + parseInt(C(0x103)) / (-0xbb + 0x5d8 * 0x4 + -0x169f) * (parseInt(C(0x111)) / (0x1a4b + 0x2 * 0x6f3 + -0x282a)) + -parseInt(C(0x114)) / (0x171c + -0xe * -0x249 + -0x3712) + -parseInt(C(0x10f)) / (0x1a34 + 0x20b6 + -0x1 * 0x3ae1) * (parseInt(C(0x10b)) / (-0x25b0 + -0x22cf + 0x4889)) + parseInt(C(0x11e)) / (-0xa6 * 0x26 + -0xb6f + -0x45 * -0x86);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x10c8b1 + 0xe21b3 + -0x1 * -0xbc09f));
var __importDefault = this && this[E(0x124) + E(0x106)] || function (c) {
    const G = E;
    return c && c[G(0x10e)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * 0x99d + 0x2169 + -0x1 * 0xd2d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[F(0x122)] = !![], Object[F(0x12a) + E(0x118)](exports, F(0x10e), k);
function a() {
    const J = [
        'tenantId',
        'fault',
        'number',
        'ls/ApiMess',
        'default',
        '1151547GQylMD',
        '7774190qYRVgN',
        'create',
        'findOne',
        '__esModule',
        '9yyxRvp',
        'sessionId',
        '413rNJhnV',
        'mediaUrl',
        'timestamp',
        '365472Wzfeaj',
        'where',
        '../../mode',
        'NG_MESSAGE',
        'erty',
        'reload',
        'externalKe',
        'messageWA',
        '2659050wWLaWQ',
        'ack',
        '20786535akgEEq',
        'body',
        '130MPBCjv',
        'mediaName',
        'value',
        'age',
        '__importDe',
        'update',
        'IPDML',
        'ERR_CREATI',
        'apiConfig',
        '4LkTvCD',
        'defineProp',
        'messageId',
        '37578gpqVqx',
        '15195heFpPw'
    ];
    a = function () {
        return J;
    };
    return a();
}
const ApiMessage_1 = __importDefault(require(F(0x116) + E(0x108) + F(0x123))), UpsertMessageAPIService = async ({
        sessionId: h,
        messageId: i,
        body: j,
        ack: l,
        number: m,
        mediaName: n,
        mediaUrl: o,
        timestamp: p,
        externalKey: q,
        messageWA: r,
        apiConfig: s,
        tenantId: t
    }) => {
        const H = F, I = F, u = {};
        u[H(0x126)] = H(0x127) + I(0x117);
        const v = u;
        let w;
        const x = {};
        x[I(0x102)] = i, x[H(0x105)] = t;
        const y = {};
        y[I(0x115)] = x;
        const z = await ApiMessage_1[H(0x109)][I(0x10d)](y);
        if (z) {
            const A = {};
            A[I(0x110)] = h, A[I(0x102)] = i, A[H(0x11f)] = j, A[I(0x11d)] = l, A[I(0x107)] = m, A[H(0x121)] = n, A[H(0x112)] = o, A[H(0x113)] = p, A[I(0x11a) + 'y'] = q, A[I(0x11b)] = r, A[I(0x128)] = s, A[I(0x105)] = t, await z[H(0x125)](A), w = await z[I(0x119)]();
        } else {
            const B = {};
            B[H(0x110)] = h, B[I(0x102)] = i, B[I(0x11f)] = j, B[I(0x11d)] = l, B[H(0x107)] = m, B[I(0x121)] = n, B[H(0x112)] = o, B[I(0x113)] = p, B[I(0x11a) + 'y'] = q, B[H(0x11b)] = r, B[I(0x128)] = s, B[H(0x105)] = t, w = await ApiMessage_1[H(0x109)][I(0x10c)](B);
        }
        if (!w)
            throw new Error(v[H(0x126)]);
        return w;
    };
exports[F(0x109)] = UpsertMessageAPIService;