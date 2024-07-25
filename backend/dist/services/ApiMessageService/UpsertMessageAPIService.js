'use strict';
const E = b, F = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x20d + 0x2423 + -0x246a);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(C(0x1c9)) / (0x2f4 + -0x11a0 + -0x11 * -0xdd) + -parseInt(D(0x1ec)) / (-0x25 + 0x35 * 0x8e + -0x1d3f) + -parseInt(C(0x1d8)) / (-0x160f * 0x1 + 0x1ce9 + -0x6d7) * (parseInt(C(0x1d9)) / (0xd5e + 0x3 * 0x29f + 0x1537 * -0x1)) + -parseInt(C(0x1e3)) / (0x1 * -0x2078 + -0x1 * -0xd9 + -0x32a * -0xa) + -parseInt(D(0x1d6)) / (0x5ba + -0xff6 + 0xa42) * (parseInt(D(0x1c6)) / (-0xcc6 + 0x1 * -0x486 + 0x1153)) + -parseInt(C(0x1c7)) / (0x69 * 0x12 + 0xc48 * 0x1 + 0x9d1 * -0x2) + parseInt(C(0x1d0)) / (-0x1e2a + 0x2 * 0x11ff + -0x5cb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x42a20 + 0x136e86 + -0x2cba8));
var __importDefault = this && this[E(0x1d7) + E(0x1d4)] || function (c) {
    const G = E;
    return c && c[G(0x1e5)] ? c : { 'default': c };
};
const k = {};
k[E(0x1ce)] = !![], Object[F(0x1e0) + F(0x1e6)](exports, E(0x1e5), k);
const ApiMessage_1 = __importDefault(require(F(0x1cc) + F(0x1d2) + E(0x1e4))), UpsertMessageAPIService = async ({
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
        const H = F, I = E, u = {};
        u[H(0x1cf)] = I(0x1df) + H(0x1dc);
        const v = u;
        let w;
        const x = {};
        x[I(0x1cd)] = i, x[I(0x1d3)] = t;
        const y = {};
        y[H(0x1ea)] = x;
        const z = await ApiMessage_1[H(0x1db)][H(0x1d1)](y);
        if (z) {
            const A = {};
            A[I(0x1eb)] = h, A[I(0x1cd)] = i, A[I(0x1e9)] = j, A[I(0x1e1)] = l, A[I(0x1de)] = m, A[H(0x1e2)] = n, A[I(0x1dd)] = o, A[I(0x1cb)] = p, A[H(0x1e8) + 'y'] = q, A[I(0x1da)] = r, A[H(0x1ca)] = s, A[I(0x1d3)] = t, await z[I(0x1d5)](A), w = await z[H(0x1c8)]();
        } else {
            const B = {};
            B[H(0x1eb)] = h, B[I(0x1cd)] = i, B[H(0x1e9)] = j, B[H(0x1e1)] = l, B[I(0x1de)] = m, B[H(0x1e2)] = n, B[I(0x1dd)] = o, B[I(0x1cb)] = p, B[H(0x1e8) + 'y'] = q, B[I(0x1da)] = r, B[H(0x1ca)] = s, B[I(0x1d3)] = t, w = await ApiMessage_1[H(0x1db)][I(0x1e7)](B);
        }
        if (!w)
            throw new Error(v[I(0x1cf)]);
        return w;
    };
exports[F(0x1db)] = UpsertMessageAPIService;
function a() {
    const J = [
        'mediaUrl',
        'number',
        'ERR_CREATI',
        'defineProp',
        'ack',
        'mediaName',
        '5215460LzGCFk',
        'age',
        '__esModule',
        'erty',
        'create',
        'externalKe',
        'body',
        'where',
        'sessionId',
        '693494FKnHZv',
        '14VxmfIO',
        '7376592XhvaBc',
        'reload',
        '75223lsfrWb',
        'apiConfig',
        'timestamp',
        '../../mode',
        'messageId',
        'value',
        'efqXG',
        '44269164lRvJQc',
        'findOne',
        'ls/ApiMess',
        'tenantId',
        'fault',
        'update',
        '967578sVJAUM',
        '__importDe',
        '2313357cstXwU',
        '8StkQyW',
        'messageWA',
        'default',
        'NG_MESSAGE'
    ];
    a = function () {
        return J;
    };
    return a();
}