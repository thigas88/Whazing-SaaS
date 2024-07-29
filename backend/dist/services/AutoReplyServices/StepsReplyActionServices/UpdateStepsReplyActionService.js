'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x146)) / (-0x5 * 0x123 + 0x14d3 + -0xf23) + parseInt(z(0x153)) / (0x17e4 + 0x2595 + -0x1 * 0x3d77) + -parseInt(A(0x152)) / (-0x6c2 * -0x4 + -0xcf9 + -0xe0c) * (-parseInt(A(0x149)) / (-0xe1 + -0x933 + 0x13 * 0x88)) + -parseInt(A(0x14e)) / (0x3 * 0x8b5 + 0x1a6f + -0x1183 * 0x3) + -parseInt(A(0x147)) / (0x1eba + -0xcdd + 0x11d7 * -0x1) + parseInt(A(0x167)) / (0x191b + 0x11 * -0x151 + -0x2b3) * (-parseInt(z(0x14d)) / (0x203a + 0xa9 * -0xb + 0xd * -0x1eb)) + parseInt(z(0x148)) / (-0x26a7 + 0x4 * -0x286 + 0xdf * 0x38);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x102e5 * 0x7 + 0xba494 + 0x115 * 0x51b));
function a() {
    const G = [
        '../../../m',
        'rrors/AppE',
        'value',
        'erty',
        'where',
        'rEVha',
        'userId',
        'tjFkw',
        'LY_FOUND',
        'userIdDest',
        'update',
        '308992hETbVf',
        '4736712oKUtyb',
        '6779223GKrybF',
        '68532hfvttG',
        'TQmLa',
        'default',
        'P_AUTO_REP',
        '1476536vsdEVY',
        '3233290mArCeD',
        'ERR_NO_STE',
        'mcGkY',
        'replyDefin',
        '159TazEHP',
        '1730436qIAEak',
        '__importDe',
        'defineProp',
        'XwLxh',
        'ition',
        'ination',
        'gOOJd',
        'action',
        'rror',
        'Vqdbo',
        'odels/Step',
        'findOne',
        'sReplyActi',
        '../../../e',
        'reload',
        'attributes',
        'JLKXF',
        'stepReplyI',
        'queueId',
        'fault',
        '28rQgXWK',
        '__esModule',
        'words',
        'EOQZk',
        'nextStepId'
    ];
    a = function () {
        return G;
    };
    return a();
}
var __importDefault = this && this[B(0x154) + C(0x166)] || function (c) {
    const D = C;
    return c && c[D(0x168)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1bba + -0x24d5 + 0x1 * 0xa5d);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[C(0x16e)] = !![], Object[C(0x155) + C(0x16f)](exports, C(0x168), k);
const AppError_1 = __importDefault(require(C(0x160) + C(0x16d) + C(0x15b))), StepsReplyAction_1 = __importDefault(require(B(0x16c) + B(0x15d) + B(0x15f) + 'on')), UpdateStepsReplyActionService = async ({
        stepsReplyActionData: h,
        stepsReplyActionId: i
    }) => {
        const E = C, F = B, j = {};
        j[E(0x159)] = F(0x164) + 'd', j[E(0x156)] = F(0x169), j[F(0x14a)] = E(0x15a), j[F(0x15c)] = E(0x172), j[F(0x163)] = F(0x165), j[F(0x171)] = F(0x144) + F(0x158), j[F(0x142)] = F(0x16b), j[E(0x150)] = E(0x151) + F(0x157), j[E(0x16a)] = F(0x14f) + E(0x14c) + F(0x143);
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
        v[F(0x170)] = u, v[F(0x162)] = [
            'id',
            l[E(0x159)],
            l[E(0x156)],
            l[E(0x14a)],
            l[E(0x15c)],
            l[F(0x163)],
            l[F(0x171)],
            l[E(0x142)],
            l[E(0x150)]
        ];
        const w = await StepsReplyAction_1[E(0x14b)][F(0x15e)](v);
        if (!w)
            throw new AppError_1[(E(0x14b))](l[F(0x16a)], 0x1cca + 0x14fc * -0x1 + -0x63a);
        const x = {};
        x[F(0x164) + 'd'] = m, x[F(0x169)] = n, x[E(0x15a)] = o, x[F(0x172)] = p, x[F(0x165)] = q, x[F(0x144) + F(0x158)] = r, x[F(0x16b)] = s, x[F(0x151) + F(0x157)] = t, await w[E(0x145)](x);
        const y = {};
        return y[E(0x162)] = [
            'id',
            l[F(0x159)],
            l[E(0x156)],
            l[E(0x14a)],
            l[F(0x15c)],
            l[E(0x163)],
            l[F(0x171)],
            l[E(0x142)],
            l[F(0x150)]
        ], await w[F(0x161)](y), w;
    };
exports[B(0x14b)] = UpdateStepsReplyActionService;