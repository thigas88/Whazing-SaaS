'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0xaf)) / (-0xf * 0x1f9 + 0x2cf * 0x4 + 0x3ac * 0x5) * (-parseInt(z(0xa4)) / (0xcb2 * 0x1 + 0xa5 * 0x1f + -0x20ab)) + -parseInt(z(0xc6)) / (-0x24f3 * -0x1 + 0x39 * 0x97 + -0x468f) + -parseInt(z(0xa7)) / (-0x26c4 + -0x159b + 0x3c63) * (-parseInt(A(0xc2)) / (-0x20c3 + -0x1060 + 0x58 * 0x8f)) + parseInt(z(0xb3)) / (0x6f1 + -0x700 + 0x3 * 0x7) * (-parseInt(z(0xcb)) / (-0x518 * 0x2 + 0xd54 * -0x1 + 0x7b * 0x31)) + parseInt(z(0xca)) / (0x694 + -0x1ad5 + 0x1449) * (parseInt(z(0xba)) / (0x1 * 0xce1 + -0x5ca + -0x70e)) + -parseInt(A(0xbf)) / (0x1b * -0xb1 + 0x734 + -0x9b * -0x13) + parseInt(A(0xa9)) / (-0xe7c + 0x1beb + -0xd64);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4326f + 0xfcdc + -0x565 * -0x19b));
function a() {
    const G = [
        '__esModule',
        'replyDefin',
        '2076872oTKkDQ',
        'XUUQY',
        '3603644WNOEiO',
        'spiJB',
        'GInQZ',
        'P_AUTO_REP',
        'findOne',
        'KBpKo',
        '59Zzvran',
        'attributes',
        'value',
        'yEGrk',
        '6GAIngj',
        'rrors/AppE',
        'nextStepId',
        'fault',
        'userIdDest',
        'sVyvp',
        'odels/Step',
        '1504989OIRwml',
        'defineProp',
        'erty',
        'sReplyActi',
        'default',
        '5826440eSrrEY',
        'where',
        'MyguG',
        '5NJelgy',
        'reload',
        'words',
        '../../../e',
        '40224uqoKXO',
        'userId',
        'ition',
        'rror',
        '8UJRaqY',
        '132244NzaLXT',
        'wvZqB',
        'stepReplyI',
        'ERR_NO_STE',
        'update',
        'ination',
        'lkYiK',
        '__importDe',
        'queueId',
        'action',
        'LY_FOUND',
        '../../../m',
        '1418XdGZaJ'
    ];
    a = function () {
        return G;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x112c + 0x4d0 + 0xcfc);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[B(0xd2) + C(0xb6)] || function (c) {
    const D = B;
    return c && c[D(0xa5)] ? c : { 'default': c };
};
const k = {};
k[C(0xb1)] = !![], Object[B(0xbb) + C(0xbc)](exports, B(0xa5), k);
const AppError_1 = __importDefault(require(C(0xc5) + B(0xb4) + B(0xc9))), StepsReplyAction_1 = __importDefault(require(B(0xa3) + C(0xb9) + C(0xbd) + 'on')), UpdateStepsReplyActionService = async ({
        stepsReplyActionData: h,
        stepsReplyActionId: i
    }) => {
        const E = B, F = C, j = {};
        j[E(0xb2)] = F(0xcd) + 'd', j[F(0xcc)] = F(0xc4), j[E(0xab)] = F(0xa1), j[E(0xc1)] = E(0xc7), j[F(0xb8)] = E(0xa0), j[F(0xaa)] = E(0xb7) + E(0xd0), j[E(0xd1)] = E(0xb5), j[F(0xae)] = F(0xa6) + F(0xc8), j[E(0xa8)] = E(0xce) + F(0xac) + E(0xa2);
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
        v[E(0xc0)] = u, v[E(0xb0)] = [
            'id',
            l[F(0xb2)],
            l[E(0xcc)],
            l[E(0xab)],
            l[F(0xc1)],
            l[E(0xb8)],
            l[E(0xaa)],
            l[F(0xd1)],
            l[F(0xae)]
        ];
        const w = await StepsReplyAction_1[E(0xbe)][F(0xad)](v);
        if (!w)
            throw new AppError_1[(F(0xbe))](l[E(0xa8)], 0x22b0 + 0x2587 + 0xd * -0x56f);
        const x = {};
        x[E(0xcd) + 'd'] = m, x[E(0xc4)] = n, x[F(0xa1)] = o, x[F(0xc7)] = p, x[E(0xa0)] = q, x[F(0xb7) + E(0xd0)] = r, x[E(0xb5)] = s, x[F(0xa6) + E(0xc8)] = t, await w[F(0xcf)](x);
        const y = {};
        return y[E(0xb0)] = [
            'id',
            l[E(0xb2)],
            l[F(0xcc)],
            l[F(0xab)],
            l[E(0xc1)],
            l[F(0xb8)],
            l[F(0xaa)],
            l[E(0xd1)],
            l[E(0xae)]
        ], await w[E(0xc3)](y), w;
    };
exports[B(0xbe)] = UpdateStepsReplyActionService;