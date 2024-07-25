'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0x89)) / (-0xc * 0x26b + -0x1 * -0x8ef + 0x1416) + -parseInt(z(0x95)) / (0xebc + 0xbf3 + -0x1aad) * (parseInt(A(0x97)) / (0x1948 + -0x34 * 0x33 + -0xee9)) + parseInt(z(0x91)) / (-0x39 * -0x68 + -0x1 * 0xe5d + -0x8c7) + -parseInt(z(0xb3)) / (-0x2 * -0xa2d + 0x2088 + 0x15b * -0x27) * (parseInt(A(0x9b)) / (0xdb * 0x6 + -0xed * 0x5 + -0x7b)) + parseInt(z(0xaf)) / (-0x18f * -0x9 + 0x1b66 + 0x14b3 * -0x2) + parseInt(A(0xa0)) / (-0xd * -0x112 + 0x65 * -0x37 + 0x7d1) + -parseInt(A(0xa7)) / (0x129b * 0x1 + -0xf * 0x25b + -0x1 * -0x10c3) * (-parseInt(A(0xa1)) / (-0x2517 + -0x1 * 0x1eb0 + 0x1b * 0x283));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4 * -0x4ae64 + 0x7f5db + -0xf87db));
var __importDefault = this && this[B(0xa5) + B(0xa9)] || function (c) {
    const D = B;
    return c && c[D(0x8f)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1e46 + -0xa41 + 0x9 * 0x490);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[B(0xb9)] = !![], Object[C(0xa8) + B(0xb1)](exports, B(0x8f), k);
const AppError_1 = __importDefault(require(B(0x93) + B(0xb5) + B(0xa6))), StepsReplyAction_1 = __importDefault(require(B(0x8c) + C(0x9d) + C(0xa2) + 'on')), UpdateStepsReplyActionService = async ({
        stepsReplyActionData: h,
        stepsReplyActionId: i
    }) => {
        const E = B, F = C, j = {};
        j[E(0xab)] = E(0x9c) + 'd', j[E(0x96)] = F(0x8b), j[E(0x92)] = E(0xa4), j[F(0x9f)] = E(0x94), j[F(0x90)] = E(0x8e), j[F(0xb4)] = F(0x9a) + E(0xad), j[F(0x9e)] = E(0xac), j[F(0x98)] = F(0xb7) + E(0xb0), j[F(0x8d)] = E(0x8a) + F(0xaa) + E(0x99);
        const l = j, {
                stepReplyId: m,
                words: n,
                action: o,
                userId: p,
                queueId: q,
                userIdDestination: r,
                nextStepId: s,
                replyDefinition: t
            } = h, u = {};
        u['id'] = i;
        const v = {};
        v[F(0xba)] = u, v[E(0xb6)] = [
            'id',
            l[E(0xab)],
            l[E(0x96)],
            l[F(0x92)],
            l[F(0x9f)],
            l[E(0x90)],
            l[F(0xb4)],
            l[E(0x9e)],
            l[E(0x98)]
        ];
        const w = await StepsReplyAction_1[E(0xb2)][E(0xae)](v);
        if (!w)
            throw new AppError_1[(E(0xb2))](l[F(0x8d)], -0x5de + 0xb6a * 0x1 + -0x4 * 0xfe);
        const x = {};
        x[F(0x9c) + 'd'] = m, x[E(0x8b)] = n, x[E(0xa4)] = o, x[F(0x94)] = p, x[F(0x8e)] = q, x[E(0x9a) + F(0xad)] = r, x[F(0xac)] = s, x[F(0xb7) + F(0xb0)] = t, await w[F(0xa3)](x);
        const y = {};
        return y[F(0xb6)] = [
            'id',
            l[F(0xab)],
            l[F(0x96)],
            l[E(0x92)],
            l[E(0x9f)],
            l[E(0x90)],
            l[E(0xb4)],
            l[E(0x9e)],
            l[F(0x98)]
        ], await w[F(0xb8)](y), w;
    };
function a() {
    const G = [
        'stepReplyI',
        'odels/Step',
        'nhwpn',
        'KDuYU',
        '5762104fItuUx',
        '493130YGCkJw',
        'sReplyActi',
        'update',
        'action',
        '__importDe',
        'rror',
        '225RJtoKU',
        'defineProp',
        'fault',
        'P_AUTO_REP',
        'czexq',
        'nextStepId',
        'ination',
        'findOne',
        '4127788LNbEtI',
        'ition',
        'erty',
        'default',
        '13010dBENhY',
        'bOXMY',
        'rrors/AppE',
        'attributes',
        'replyDefin',
        'reload',
        'value',
        'where',
        '1404579tNIsML',
        'ERR_NO_STE',
        'words',
        '../../../m',
        'AROkr',
        'queueId',
        '__esModule',
        'CNhYP',
        '3889988GhVtfd',
        'YqAEM',
        '../../../e',
        'userId',
        '1697716fHhwzn',
        'cwwOQ',
        '3bBmDkq',
        'TLeLf',
        'LY_FOUND',
        'userIdDest',
        '1224NbRQRM'
    ];
    a = function () {
        return G;
    };
    return a();
}
exports[C(0xb2)] = UpdateStepsReplyActionService;