'use strict';
const E = b, F = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x13cf + 0x18c * 0x9 + 0x749 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(C(0x17d)) / (-0x188b + -0x1dc5 + 0x1 * 0x3651) + parseInt(D(0x16d)) / (-0x162 * -0x4 + -0x1d0 * -0x8 + -0x1406) + -parseInt(C(0x181)) / (-0x1 * -0x2089 + 0x24d0 + 0x7d * -0x8e) + parseInt(C(0x17b)) / (-0x1b17 + -0x2 * -0xe7c + -0x9f * 0x3) + parseInt(C(0x18a)) / (-0x13 * 0x19 + -0x169 * -0x1 + 0x77) * (-parseInt(D(0x177)) / (0x2 * -0x64a + -0x243d + 0x30d7)) + -parseInt(C(0x17e)) / (-0xcd * -0x2f + 0x115f + -0x36fb) + parseInt(C(0x176)) / (-0x45d + 0xd * 0x1 + 0x458);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa5c9d + -0x2 * 0x3f9cd + -0x87b87 * -0x1));
var __importDefault = this && this[E(0x16a) + F(0x168)] || function (c) {
    const G = F;
    return c && c[G(0x186)] ? c : { 'default': c };
};
const k = {};
k[F(0x16e)] = !![], Object[F(0x189) + F(0x167)](exports, E(0x186), k);
function a() {
    const J = [
        'update',
        'UMUwU',
        '__esModule',
        'NG_MESSAGE',
        'where',
        'defineProp',
        '5wfoGaJ',
        'sessionId',
        'body',
        'erty',
        'fault',
        'messageWA',
        '__importDe',
        'default',
        'number',
        '791308YFMIki',
        'value',
        'ERR_CREATI',
        'create',
        'tenantId',
        'findOne',
        '../../mode',
        'messageId',
        'mediaName',
        '5006064fSGJeF',
        '1288026GvyVqJ',
        'externalKe',
        'reload',
        'timestamp',
        '2842300KbVzBV',
        'mediaUrl',
        '493872sKSrRT',
        '7322399aCjvNO',
        'ack',
        'ls/ApiMess',
        '753795mEdvLb',
        'apiConfig',
        'age'
    ];
    a = function () {
        return J;
    };
    return a();
}
const ApiMessage_1 = __importDefault(require(E(0x173) + E(0x180) + E(0x183))), UpsertMessageAPIService = async ({
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
        u[H(0x185)] = H(0x16f) + H(0x187);
        const v = u;
        let w;
        const x = {};
        x[H(0x174)] = i, x[H(0x171)] = t;
        const y = {};
        y[I(0x188)] = x;
        const z = await ApiMessage_1[I(0x16b)][I(0x172)](y);
        if (z) {
            const A = {};
            A[I(0x18b)] = h, A[I(0x174)] = i, A[I(0x166)] = j, A[H(0x17f)] = l, A[H(0x16c)] = m, A[H(0x175)] = n, A[I(0x17c)] = o, A[I(0x17a)] = p, A[I(0x178) + 'y'] = q, A[H(0x169)] = r, A[H(0x182)] = s, A[I(0x171)] = t, await z[I(0x184)](A), w = await z[H(0x179)]();
        } else {
            const B = {};
            B[H(0x18b)] = h, B[H(0x174)] = i, B[I(0x166)] = j, B[H(0x17f)] = l, B[H(0x16c)] = m, B[H(0x175)] = n, B[I(0x17c)] = o, B[H(0x17a)] = p, B[I(0x178) + 'y'] = q, B[H(0x169)] = r, B[H(0x182)] = s, B[I(0x171)] = t, w = await ApiMessage_1[I(0x16b)][I(0x170)](B);
        }
        if (!w)
            throw new Error(v[H(0x185)]);
        return w;
    };
exports[E(0x16b)] = UpsertMessageAPIService;