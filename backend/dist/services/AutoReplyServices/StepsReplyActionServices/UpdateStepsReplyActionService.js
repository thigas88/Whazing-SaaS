'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x18c)) / (-0x2 * 0x62b + -0x17d7 + 0x242e) + -parseInt(A(0x1b9)) / (-0x1 * 0x2689 + -0x313 + -0x5f2 * -0x7) * (-parseInt(z(0x1b5)) / (0x1 * 0x111d + -0x20e2 + 0xfc8)) + parseInt(A(0x194)) / (0x12dd + 0x832 + 0x2b * -0xa1) + -parseInt(A(0x1ba)) / (0xa4 * 0x32 + -0x1 * 0x98e + -0x1 * 0x1675) * (parseInt(z(0x1b2)) / (-0x1 * 0x17c7 + -0x1d09 * -0x1 + -0x1 * 0x53c)) + -parseInt(A(0x1a4)) / (-0x270b + 0x25af + 0x1 * 0x163) + parseInt(A(0x1a2)) / (-0x97 * 0x31 + -0x229e + 0x3f8d) * (-parseInt(A(0x1b0)) / (0x18ee + -0x718 * -0x1 + -0x1ffd)) + -parseInt(A(0x19d)) / (0x31a * 0x2 + -0x100b + 0x34b * 0x3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x73e3a + -0x338da + 0xee190));
var __importDefault = this && this[B(0x19a) + B(0x1ab)] || function (c) {
    const D = C;
    return c && c[D(0x1a5)] ? c : { 'default': c };
};
const k = {};
k[C(0x199)] = !![], Object[C(0x196) + B(0x1ad)](exports, B(0x1a5), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x22cb + 0x1177 + -0x32b7);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const G = [
        '6akKTIP',
        'where',
        'QZaKZ',
        'findOne',
        '495734PZYinb',
        '616255nESTkA',
        'P_AUTO_REP',
        'rror',
        'sbmwo',
        '505181NrwjtC',
        'ination',
        'userId',
        'RbNfU',
        'uPNbD',
        'nextStepId',
        'mxVpq',
        'sReplyActi',
        '1463384GTSSWv',
        '../../../m',
        'defineProp',
        'odels/Step',
        'words',
        'value',
        '__importDe',
        'NsaVD',
        'default',
        '448020xKAZGI',
        'update',
        'rrors/AppE',
        'userIdDest',
        'dyufT',
        '112696NwiPhu',
        'reload',
        '2716595HuzAyO',
        '__esModule',
        'LY_FOUND',
        'attributes',
        'ition',
        'action',
        'ERR_NO_STE',
        'fault',
        'replyDefin',
        'erty',
        'WLjFh',
        'queueId',
        '333qOFdSx',
        'stepReplyI',
        '6VImqmj',
        '../../../e',
        'PDbpv'
    ];
    a = function () {
        return G;
    };
    return a();
}
const AppError_1 = __importDefault(require(B(0x1b3) + B(0x19f) + C(0x1bc))), StepsReplyAction_1 = __importDefault(require(C(0x195) + B(0x197) + B(0x193) + 'on')), UpdateStepsReplyActionService = async ({
        stepsReplyActionData: h,
        stepsReplyActionId: i
    }) => {
        const E = B, F = B, j = {};
        j[E(0x18b)] = E(0x1b1) + 'd', j[E(0x1b4)] = E(0x198), j[F(0x1b7)] = E(0x1a9), j[E(0x192)] = E(0x18e), j[E(0x1a1)] = E(0x1af), j[F(0x1ae)] = F(0x1a0) + E(0x18d), j[E(0x18f)] = E(0x191), j[E(0x190)] = E(0x1ac) + F(0x1a8), j[F(0x19b)] = E(0x1aa) + E(0x1bb) + F(0x1a6);
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
        v[F(0x1b6)] = u, v[E(0x1a7)] = [
            'id',
            l[F(0x18b)],
            l[E(0x1b4)],
            l[F(0x1b7)],
            l[F(0x192)],
            l[F(0x1a1)],
            l[F(0x1ae)],
            l[E(0x18f)],
            l[F(0x190)]
        ];
        const w = await StepsReplyAction_1[F(0x19c)][F(0x1b8)](v);
        if (!w)
            throw new AppError_1[(F(0x19c))](l[E(0x19b)], 0x1 * 0x2417 + 0x193c + -0x7 * 0x889);
        const x = {};
        x[F(0x1b1) + 'd'] = m, x[F(0x198)] = n, x[E(0x1a9)] = o, x[E(0x18e)] = p, x[E(0x1af)] = q, x[F(0x1a0) + E(0x18d)] = r, x[F(0x191)] = s, x[E(0x1ac) + F(0x1a8)] = t, await w[E(0x19e)](x);
        const y = {};
        return y[F(0x1a7)] = [
            'id',
            l[E(0x18b)],
            l[E(0x1b4)],
            l[E(0x1b7)],
            l[F(0x192)],
            l[F(0x1a1)],
            l[E(0x1ae)],
            l[F(0x18f)],
            l[E(0x190)]
        ], await w[F(0x1a3)](y), w;
    };
exports[C(0x19c)] = UpdateStepsReplyActionService;