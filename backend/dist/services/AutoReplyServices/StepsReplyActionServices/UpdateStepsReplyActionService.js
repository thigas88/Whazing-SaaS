'use strict';
const B = b, C = b;
function a() {
    const G = [
        'erty',
        'rrors/AppE',
        'findOne',
        'defineProp',
        '1425180fWkthB',
        'P_AUTO_REP',
        '1284652VQgQkY',
        'userIdDest',
        'queueId',
        'QOXht',
        'rror',
        '24742JxXyGk',
        'attributes',
        '36800orAWed',
        'where',
        '__importDe',
        'fault',
        '2204568fJyJiS',
        'update',
        '369EIJsdS',
        'DKILr',
        '../../../e',
        'userId',
        'QnWGX',
        'reload',
        'words',
        '798JGiHPf',
        'ition',
        'value',
        '3OHKAxa',
        'replyDefin',
        '18890PrnzCj',
        'JqKiT',
        'LY_FOUND',
        'RkzNJ',
        'odels/Step',
        'ination',
        'ERR_NO_STE',
        '12452wLbzjC',
        'YWMIJ',
        'VSpas',
        'cSLwh',
        'stepReplyI',
        'default',
        'awJRw',
        'action',
        '5424kKeNfa',
        'nextStepId',
        '../../../m',
        '38GJMgAq',
        'sReplyActi',
        '__esModule'
    ];
    a = function () {
        return G;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xf1a + 0x6 * 0x626 + 0x2 * -0x9fa);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x1d7)) / (-0x13 + -0xe27 + 0x1 * 0xe3b) * (-parseInt(z(0x1e5)) / (-0x1447 * 0x1 + 0x1003 + 0x446 * 0x1)) + parseInt(A(0x1f7)) / (0x1cd9 + 0x2 * -0xf9a + 0x25e) * (parseInt(z(0x1e0)) / (0x1ad2 * -0x1 + -0x1447 + 0x2f1d)) + -parseInt(A(0x1de)) / (-0xef7 + -0x2 * 0x9e3 + 0x22c2) + -parseInt(A(0x1eb)) / (-0x39f + -0x20ac + 0x2451 * 0x1) + -parseInt(z(0x1f4)) / (0x2 * -0x10a5 + 0xb36 + -0x161b * -0x1) * (-parseInt(z(0x1e7)) / (0x243a * 0x1 + 0x670 + -0x6b * 0x66)) + parseInt(z(0x1ed)) / (-0xc5 * -0x1f + 0x1 * 0xb29 + -0xf * 0x255) * (parseInt(z(0x1f9)) / (-0xd * -0x253 + 0x486 + -0x3f * 0x8d)) + -parseInt(z(0x200)) / (-0x54 + 0x1b4d + -0xd77 * 0x2) * (-parseInt(A(0x208)) / (0x5bc * -0x2 + -0x412 + 0xf96));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2bb55 * 0x2 + 0x7cd57 + -0x880cf));
var __importDefault = this && this[B(0x1e9) + C(0x1ea)] || function (c) {
    const D = B;
    return c && c[D(0x1d9)] ? c : { 'default': c };
};
const k = {};
k[B(0x1f6)] = !![], Object[B(0x1dd) + C(0x1da)](exports, C(0x1d9), k);
const AppError_1 = __importDefault(require(C(0x1ef) + C(0x1db) + C(0x1e4))), StepsReplyAction_1 = __importDefault(require(B(0x1d6) + B(0x1fd) + B(0x1d8) + 'on')), UpdateStepsReplyActionService = async ({
        stepsReplyActionData: h,
        stepsReplyActionId: i
    }) => {
        const E = C, F = C, j = {};
        j[E(0x203)] = F(0x204) + 'd', j[F(0x201)] = E(0x1f3), j[F(0x206)] = E(0x207), j[F(0x1ee)] = E(0x1f0), j[E(0x1fa)] = E(0x1e2), j[E(0x202)] = E(0x1e1) + F(0x1fe), j[E(0x1e3)] = E(0x209), j[F(0x1f1)] = E(0x1f8) + F(0x1f5), j[E(0x1fc)] = F(0x1ff) + F(0x1df) + F(0x1fb);
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
        v[F(0x1e8)] = u, v[E(0x1e6)] = [
            'id',
            l[E(0x203)],
            l[E(0x201)],
            l[E(0x206)],
            l[F(0x1ee)],
            l[E(0x1fa)],
            l[E(0x202)],
            l[E(0x1e3)],
            l[E(0x1f1)]
        ];
        const w = await StepsReplyAction_1[F(0x205)][E(0x1dc)](v);
        if (!w)
            throw new AppError_1[(E(0x205))](l[F(0x1fc)], -0x827 + -0x12 * 0x76 + 0x1207);
        const x = {};
        x[E(0x204) + 'd'] = m, x[F(0x1f3)] = n, x[E(0x207)] = o, x[E(0x1f0)] = p, x[F(0x1e2)] = q, x[F(0x1e1) + F(0x1fe)] = r, x[E(0x209)] = s, x[F(0x1f8) + F(0x1f5)] = t, await w[E(0x1ec)](x);
        const y = {};
        return y[F(0x1e6)] = [
            'id',
            l[E(0x203)],
            l[E(0x201)],
            l[E(0x206)],
            l[E(0x1ee)],
            l[F(0x1fa)],
            l[E(0x202)],
            l[E(0x1e3)],
            l[E(0x1f1)]
        ], await w[E(0x1f2)](y), w;
    };
exports[C(0x205)] = UpdateStepsReplyActionService;