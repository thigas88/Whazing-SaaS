'use strict';
const M = b, N = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x43 * 0x7 + 0x2448 + -0x2188);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const K = b, L = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(K(0xf9)) / (-0x25b7 + -0x1c46 + 0x41fe) + parseInt(L(0x139)) / (-0x2186 + 0x18d5 + 0x8b3) + -parseInt(K(0x121)) / (-0x1660 + -0xc1c + 0x227f) * (parseInt(K(0x117)) / (0x103a + -0x1 * -0x1c8a + -0x2cc0 * 0x1)) + parseInt(K(0x107)) / (0x25c9 + -0xeb6 + -0x1 * 0x170e) * (parseInt(L(0x11d)) / (-0x745 + 0x2683 + -0x12 * 0x1bc)) + parseInt(K(0x11f)) / (-0xd4e + -0xb9 * -0x3 + 0xb2a * 0x1) + -parseInt(L(0x106)) / (-0x26dd + -0x669 * -0x1 + 0x207c) + parseInt(L(0x115)) / (-0x99 * -0x3b + -0x1 * -0x2164 + 0x1 * -0x449e) * (parseInt(L(0x137)) / (0x265 * 0x3 + 0x70b * -0x3 + 0xdfc));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x667dd + -0xa8081 * 0x1 + 0x1f2bae));
function a() {
    const V = [
        'update',
        '10545568fWuiSe',
        '10wGaEjT',
        'dvafR',
        'groupId',
        'senderId',
        'ThXEG',
        'GPjUl',
        'agens',
        '__importDe',
        'ls/User',
        'beDdP',
        'gem',
        'sender',
        'eBqNd',
        'Mensagem\x20n',
        '6570WAUImz',
        'where',
        '11540HvyNQU',
        'Nqurb',
        'findByPk',
        '__esModule',
        'ão\x20encontr',
        'iePfD',
        '4181790AWLRDY',
        'erty',
        '4765775tZXWME',
        'model',
        '744OlwRxE',
        'fault',
        'tZoeb',
        'ls/Interna',
        'MHZRj',
        'ada.',
        'azBua',
        'reverse',
        'FVYSl',
        'receiverId',
        'JTgUI',
        '../../mode',
        'order',
        'bJsDm',
        'DlBOE',
        'yBciE',
        'wbvKS',
        'include',
        'sequelize',
        'CNxbp',
        'isUnread',
        'timestamp',
        '23810GhHkLx',
        'lMessage',
        '421560PhkCRn',
        'agemNaoLid',
        'PwMiK',
        'FbHsD',
        'default',
        'LfThW',
        'false',
        'fsuNV',
        'MUQrd',
        'criarMensa',
        'name',
        'create',
        'findAll',
        'YjAeB',
        'value',
        'marcarMens',
        '1055253bQmMlL',
        'receiver',
        'PhFnM',
        'limit',
        'wKrjw',
        'attributes',
        'listarMens',
        'HIWKv',
        'wMTSr',
        'defineProp',
        'IRJJO',
        'DESC'
    ];
    a = function () {
        return V;
    };
    return a();
}
var __importDefault = this && this[M(0x10e) + N(0x122)] || function (c) {
    const O = M;
    return c && c[O(0x11a)] ? c : { 'default': c };
};
const k = {};
k[M(0xf7)] = !![], Object[M(0x102) + M(0x11e)](exports, M(0x11a), k);
const sequelize_1 = require(M(0x133)), InternalMessage_1 = __importDefault(require(M(0x12c) + M(0x124) + M(0x138))), User_1 = __importDefault(require(N(0x12c) + N(0x10f)));
class MessageService {
    static async [M(0xff) + N(0x10d)](o, p, q) {
        const P = M, Q = M, r = {};
        r[P(0xfb)] = Q(0x114) + P(0x11b) + P(0x126), r[Q(0x101)] = function (t, u) {
            return t === u;
        }, r[P(0x12e)] = P(0x113), r[Q(0x130)] = P(0x110), r[Q(0x12b)] = function (t, u) {
            return t == u;
        }, r[P(0xf6)] = Q(0xef), r[P(0xf0)] = function (t, u) {
            return t !== u;
        }, r[Q(0x125)] = P(0x123), r[Q(0xeb)] = Q(0x100), r[P(0x103)] = Q(0x112), r[P(0xec)] = P(0xf3), r[Q(0x118)] = Q(0xfa), r[Q(0xfd)] = P(0x136), r[Q(0x134)] = Q(0x104), r[Q(0x129)] = function (t, u) {
            return t === u;
        }, r[Q(0xf1)] = Q(0x131), r[P(0x10b)] = function (t, u) {
            return t === u;
        }, r[P(0x10c)] = Q(0x127);
        const s = r;
        try {
            if (s[Q(0x101)](s[P(0x12e)], s[Q(0x130)]))
                throw d;
            else {
                let u;
                if (s[P(0x12b)](q, s[P(0xf6)])) {
                    if (s[P(0xf0)](s[Q(0x125)], s[P(0xeb)])) {
                        const v = {};
                        v[P(0x10a)] = o, v[Q(0x12a)] = p;
                        const w = {};
                        w[P(0x12a)] = o, w[Q(0x10a)] = p;
                        const x = {
                                [sequelize_1['Op']['or']]: [
                                    v,
                                    w
                                ]
                            }, y = {};
                        y[Q(0x120)] = User_1[Q(0xed)], y['as'] = s[P(0x103)], y[P(0xfe)] = [
                            'id',
                            s[P(0xec)]
                        ];
                        const z = {};
                        z[P(0x120)] = User_1[P(0xed)], z['as'] = s[P(0x118)], z[P(0xfe)] = [
                            'id',
                            s[P(0xec)]
                        ];
                        const A = {};
                        A[Q(0x116)] = x, A[P(0x132)] = [
                            y,
                            z
                        ], A[P(0x12d)] = [[
                                s[Q(0xfd)],
                                s[P(0x134)]
                            ]], A[P(0xfc)] = 0x1f4, u = await InternalMessage_1[P(0xed)][Q(0xf5)](A);
                    } else
                        throw new d(s[Q(0xfb)]);
                } else {
                    if (s[P(0x129)](s[Q(0xf1)], s[P(0xf1)])) {
                        const C = {};
                        C[Q(0x109)] = p;
                        const D = {};
                        D[P(0x120)] = User_1[P(0xed)], D['as'] = s[Q(0x103)], D[P(0xfe)] = [
                            'id',
                            s[P(0xec)]
                        ];
                        const E = {};
                        E[Q(0x120)] = User_1[Q(0xed)], E['as'] = s[P(0x118)], E[P(0xfe)] = [
                            'id',
                            s[P(0xec)]
                        ];
                        const F = {};
                        F[P(0x116)] = C, F[P(0x132)] = [
                            D,
                            E
                        ], F[P(0x12d)] = [[
                                s[P(0xfd)],
                                s[P(0x134)]
                            ]], F[P(0xfc)] = 0x1f4, u = await InternalMessage_1[Q(0xed)][P(0xf5)](F);
                    } else
                        throw d;
                }
                return u[P(0x128)]();
            }
        } catch (H) {
            if (s[Q(0x10b)](s[P(0x10c)], s[Q(0x10c)]))
                throw H;
            else {
                const J = {};
                return J[P(0xed)] = j, g && h[P(0x11a)] ? i : J;
            }
        }
    }
    static async [N(0xf2) + N(0x111)](d) {
        const R = M, S = M, e = {};
        e[R(0x12f)] = function (g, h) {
            return g !== h;
        }, e[R(0x108)] = S(0xee);
        const f = e;
        try {
            if (f[R(0x12f)](f[S(0x108)], f[R(0x108)]))
                throw d;
            else
                return await InternalMessage_1[S(0xed)][S(0xf4)](d);
        } catch (h) {
            throw h;
        }
    }
    static async [N(0xf8) + M(0x13a) + 'a'](e) {
        const T = N, U = N, f = {};
        f[T(0x11c)] = U(0x114) + T(0x11b) + U(0x126);
        const g = f;
        try {
            const h = await InternalMessage_1[U(0xed)][T(0x119)](e);
            if (!h)
                throw new Error(g[T(0x11c)]);
            const i = {};
            i[U(0x135)] = !![], await h[U(0x105)](i);
        } catch (j) {
            throw j;
        }
    }
}
exports[N(0xed)] = MessageService;