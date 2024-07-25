'use strict';
const H = b, I = b;
function a() {
    const O = [
        'USER_GROUP',
        '27xriCEJ',
        '_NOT_FOUND',
        '../../erro',
        '8303982GOBUIl',
        '907285gkabMa',
        'rs/AppErro',
        'dels/Users',
        'senderId',
        './../../mo',
        'update',
        'receiverId',
        '../../mode',
        'erty',
        'lMessage',
        'sageGroups',
        'length',
        'ls/ReadMes',
        '8NfMSBH',
        'ssageId',
        'findAll',
        'defineProp',
        '8423586ZiWNbI',
        'findOne',
        'where',
        '17676KUnbmq',
        'internalMe',
        'value',
        'forEach',
        'read',
        'Groups',
        '20aSXcxt',
        'fault',
        'fsSno',
        'userGroupI',
        '831350PSafqF',
        'euEpj',
        '4077934KRkrhS',
        '__importDe',
        'groupId',
        '1400772EPlASA',
        'create',
        '__esModule',
        'ls/Interna',
        '22fOgBBB',
        'QhXBY',
        'userId',
        'default'
    ];
    a = function () {
        return O;
    };
    return a();
}
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(F(0x18a)) / (-0x10c + -0x418 + 0x525) * (-parseInt(G(0x172)) / (0x1bed + -0x16 * -0x86 + -0x276f)) + -parseInt(F(0x181)) / (0x25eb * 0x1 + -0x1 * 0xea7 + -0x1 * 0x1741) + -parseInt(F(0x178)) / (0xd1 * 0x9 + -0x1a06 * 0x1 + 0x12b1) * (parseInt(G(0x18e)) / (-0xdfe + -0x13b7 + 0x21ba)) + parseInt(F(0x18d)) / (0x459 * 0x2 + 0x1 * -0xf79 + 0x6cd) + -parseInt(G(0x17e)) / (-0x989 * 0x1 + 0x18e * 0x7 + -0x152) + parseInt(F(0x16b)) / (0x1cc4 + -0x1d7 + -0x51 * 0x55) * (parseInt(G(0x16f)) / (-0x89 * -0x3 + -0x188c + 0x16fa)) + -parseInt(F(0x17c)) / (0xaf6 + 0x176c * 0x1 + -0x2258) * (-parseInt(F(0x185)) / (0x45d * -0x7 + 0x17 * -0x132 + -0x33a * -0x12));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xfd * 0x12e3 + -0x131fb7 + 0x31825a));
var __importDefault = this && this[H(0x17f) + H(0x179)] || function (c) {
    const J = I;
    return c && c[J(0x183)] ? c : { 'default': c };
};
const k = {};
k[H(0x174)] = !![], Object[H(0x16e) + I(0x166)](exports, H(0x183), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x775 + 0xc1 * 0xf + -0x1160);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(H(0x18c) + H(0x18f) + 'r')), InternalMessage_1 = __importDefault(require(H(0x165) + H(0x184) + H(0x167))), ReadMessageGroups_1 = __importDefault(require(I(0x165) + I(0x16a) + H(0x168))), UsersGroups_1 = __importDefault(require(I(0x192) + I(0x190) + H(0x177))), ReadMessageService = async ({
        senderId: l,
        userId: m,
        isGroup: n
    }) => {
        const K = H, L = H, o = {};
        o[K(0x17d)] = function (q, r) {
            return q <= r;
        }, o[K(0x17a)] = function (q, r) {
            return q === r;
        }, o[L(0x186)] = K(0x189) + K(0x18b);
        const p = o;
        if (p[L(0x17a)](n, ![])) {
            const q = {};
            q[L(0x176)] = !![];
            const r = {};
            r[K(0x191)] = l, r[K(0x164)] = m;
            const s = {};
            s[L(0x171)] = r, await InternalMessage_1[L(0x188)][L(0x193)](q, s);
        } else {
            const t = {};
            t[K(0x180)] = l, t[L(0x187)] = m;
            const u = {};
            u[L(0x171)] = t;
            const v = await UsersGroups_1[K(0x188)][K(0x170)](u);
            !v && new AppError_1[(K(0x188))](p[L(0x186)], -0x173f + 0x10f + 0x24 * 0xa9);
            const w = {};
            w[L(0x180)] = v[K(0x180)];
            const x = {};
            x[K(0x171)] = w;
            const y = await InternalMessage_1[K(0x188)][K(0x16d)](x);
            y[K(0x175)](async z => {
                const M = L, N = K, A = {};
                A[M(0x173) + N(0x16c)] = z['id'], A[M(0x17b) + 'd'] = v['id'];
                const B = {};
                B[M(0x171)] = A;
                const C = await ReadMessageGroups_1[N(0x188)][N(0x16d)](B);
                if (p[M(0x17d)](C[N(0x169)], 0x1 * 0x1483 + -0x2410 + 0x1 * 0xf8d)) {
                    const D = {};
                    D[M(0x173) + N(0x16c)] = z['id'], D[N(0x17b) + 'd'] = v['id'];
                    const E = D;
                    await ReadMessageGroups_1[M(0x188)][M(0x182)](E);
                }
            });
        }
    };
exports[H(0x188)] = ReadMessageService;