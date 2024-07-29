'use strict';
const E = b, F = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x14c2 + -0x1c27 + 0x8af);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(C(0x169)) / (0x260d + -0x6e7 * 0x2 + -0x183e) * (-parseInt(D(0x164)) / (0x1c25 * 0x1 + 0x1f0a + 0x1 * -0x3b2d)) + parseInt(D(0x159)) / (-0x1 * 0x1c06 + -0x4 * -0x79 + 0x1a25) + -parseInt(D(0x15c)) / (-0x3 * 0xb8a + 0x687 + 0x1c1b) + parseInt(C(0x152)) / (0x17e7 + -0x709 + -0x10d9) + parseInt(D(0x16e)) / (0x4a8 + -0x15c6 + 0x2 * 0x892) + -parseInt(C(0x14c)) / (-0xa3 * -0x29 + 0x7c3 + -0x21d7) * (parseInt(C(0x16f)) / (0xc8 * 0x13 + 0x1f * 0x45 + -0x293 * 0x9)) + -parseInt(C(0x16b)) / (-0x92 * -0x11 + 0x14 * -0xb0 + 0x417) * (parseInt(C(0x162)) / (0x16f6 * 0x1 + -0x358 + 0x9ca * -0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x14 * -0x15ee9 + -0xfd862 + 0x3131a));
var __importDefault = this && this[E(0x171) + F(0x163)] || function (c) {
    const G = F;
    return c && c[G(0x160)] ? c : { 'default': c };
};
const k = {};
k[F(0x14d)] = !![], Object[E(0x150) + F(0x14e)](exports, E(0x160), k);
const ApiMessage_1 = __importDefault(require(E(0x151) + E(0x158) + F(0x15d))), UpsertMessageAPIService = async ({
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
        const H = E, I = F, u = {};
        u[H(0x161)] = I(0x14b) + H(0x165);
        const v = u;
        let w;
        const x = {};
        x[I(0x16a)] = i, x[I(0x15e)] = t;
        const y = {};
        y[H(0x15a)] = x;
        const z = await ApiMessage_1[H(0x153)][H(0x154)](y);
        if (z) {
            const A = {};
            A[I(0x155)] = h, A[H(0x16a)] = i, A[H(0x16d)] = j, A[H(0x170)] = l, A[I(0x14f)] = m, A[I(0x168)] = n, A[H(0x15f)] = o, A[H(0x166)] = p, A[H(0x157) + 'y'] = q, A[I(0x15b)] = r, A[I(0x167)] = s, A[H(0x15e)] = t, await z[H(0x14a)](A), w = await z[H(0x156)]();
        } else {
            const B = {};
            B[I(0x155)] = h, B[I(0x16a)] = i, B[I(0x16d)] = j, B[I(0x170)] = l, B[I(0x14f)] = m, B[H(0x168)] = n, B[I(0x15f)] = o, B[I(0x166)] = p, B[H(0x157) + 'y'] = q, B[I(0x15b)] = r, B[I(0x167)] = s, B[I(0x15e)] = t, w = await ApiMessage_1[I(0x153)][I(0x16c)](B);
        }
        if (!w)
            throw new Error(v[H(0x161)]);
        return w;
    };
exports[E(0x153)] = UpsertMessageAPIService;
function a() {
    const J = [
        'erty',
        'number',
        'defineProp',
        '../../mode',
        '9027150rhqJLd',
        'default',
        'findOne',
        'sessionId',
        'reload',
        'externalKe',
        'ls/ApiMess',
        '3871554ocECSR',
        'where',
        'messageWA',
        '4294180GwvqnV',
        'age',
        'tenantId',
        'mediaUrl',
        '__esModule',
        'pSoCw',
        '96490gUUpUw',
        'fault',
        '875764EzJoTo',
        'NG_MESSAGE',
        'timestamp',
        'apiConfig',
        'mediaName',
        '2eKaUsG',
        'messageId',
        '2763TULjiZ',
        'create',
        'body',
        '6979914fICIzk',
        '2264BFrrGy',
        'ack',
        '__importDe',
        'update',
        'ERR_CREATI',
        '3451jkiSBj',
        'value'
    ];
    a = function () {
        return J;
    };
    return a();
}