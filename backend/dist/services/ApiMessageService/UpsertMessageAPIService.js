'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(C(0x105)) / (-0x5 * 0x6be + -0x345 * 0x1 + -0xc54 * -0x3) + -parseInt(C(0x107)) / (-0x2d * -0x9b + 0xaf0 + -0x262d) * (parseInt(D(0xfc)) / (0x2 * -0x31d + 0x5a2 * 0x4 + 0x1 * -0x104b)) + parseInt(C(0x108)) / (-0x1f74 * 0x1 + 0x7e5 * 0x2 + 0xfae) + -parseInt(D(0x102)) / (-0x9 * 0x202 + 0x761 + 0x55b * 0x2) + parseInt(D(0x11e)) / (-0x26a4 + -0x71 * -0x1f + 0x18fb) * (parseInt(C(0x10f)) / (0x2035 + -0x3fd + 0x7 * -0x407)) + parseInt(D(0x11a)) / (0x1 * -0x6df + 0x1f84 + -0x189d) * (parseInt(C(0x10d)) / (-0x459 + 0x1f9b + -0x1b39)) + -parseInt(C(0x101)) / (-0x1316 * -0x1 + 0x3b + -0x2f * 0x69) * (-parseInt(D(0x11f)) / (0x1 * 0x231d + 0x293 * 0x7 + -0x3517));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3 * 0x6455 + -0xe01f2 + -0x1e05 * -0xdf));
var __importDefault = this && this[E(0xfb) + F(0x113)] || function (c) {
    const G = F;
    return c && c[G(0x11d)] ? c : { 'default': c };
};
function a() {
    const J = [
        '8380TtSHhY',
        '2704680LKQsgM',
        'default',
        'erty',
        '1302200qUfDpo',
        'ack',
        '2548ZuRYvz',
        '558888QyaQuA',
        'body',
        'messageId',
        'externalKe',
        'ls/ApiMess',
        '666jWZrDZ',
        'value',
        '378gEbdzy',
        'defineProp',
        'NG_MESSAGE',
        'update',
        'fault',
        'timestamp',
        'reload',
        'messageWA',
        'mediaUrl',
        'findOne',
        'gUhvM',
        '49592HWwTlI',
        'apiConfig',
        'create',
        '__esModule',
        '16134SHTUdU',
        '46442yoBuPl',
        '../../mode',
        'sessionId',
        'age',
        'where',
        '__importDe',
        '3687DnTHxf',
        'tenantId',
        'mediaName',
        'number',
        'ERR_CREATI'
    ];
    a = function () {
        return J;
    };
    return a();
}
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1708 + 0xef9 * -0x2 + 0x7e5 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[E(0x10e)] = !![], Object[E(0x110) + E(0x104)](exports, E(0x11d), k);
const ApiMessage_1 = __importDefault(require(E(0x120) + E(0x10c) + E(0x122))), UpsertMessageAPIService = async ({
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
        const H = E, I = E, u = {};
        u[H(0x119)] = I(0x100) + I(0x111);
        const v = u;
        let w;
        const x = {};
        x[H(0x10a)] = i, x[I(0xfd)] = t;
        const y = {};
        y[I(0x123)] = x;
        const z = await ApiMessage_1[H(0x103)][H(0x118)](y);
        if (z) {
            const A = {};
            A[H(0x121)] = h, A[I(0x10a)] = i, A[I(0x109)] = j, A[H(0x106)] = l, A[H(0xff)] = m, A[H(0xfe)] = n, A[H(0x117)] = o, A[I(0x114)] = p, A[I(0x10b) + 'y'] = q, A[I(0x116)] = r, A[I(0x11b)] = s, A[I(0xfd)] = t, await z[H(0x112)](A), w = await z[I(0x115)]();
        } else {
            const B = {};
            B[I(0x121)] = h, B[H(0x10a)] = i, B[I(0x109)] = j, B[H(0x106)] = l, B[I(0xff)] = m, B[H(0xfe)] = n, B[H(0x117)] = o, B[I(0x114)] = p, B[I(0x10b) + 'y'] = q, B[I(0x116)] = r, B[I(0x11b)] = s, B[I(0xfd)] = t, w = await ApiMessage_1[I(0x103)][H(0x11c)](B);
        }
        if (!w)
            throw new Error(v[H(0x119)]);
        return w;
    };
exports[E(0x103)] = UpsertMessageAPIService;