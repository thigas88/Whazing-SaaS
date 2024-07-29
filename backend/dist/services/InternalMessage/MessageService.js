'use strict';
const M = b, N = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x205c + -0x1 * 0x135e + -0xbe2);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const V = [
        'where',
        '5223779KCpbCZ',
        'ls/Interna',
        'create',
        'qaCFt',
        'WkoWS',
        '2196840qPiYgc',
        'ls/User',
        'QBxsO',
        'agens',
        'groupId',
        'mEkIQ',
        'marcarMens',
        'findAll',
        '5118dPpVBs',
        '../../mode',
        '18soSpWP',
        'false',
        'agemNaoLid',
        'default',
        'MSnhU',
        'xAbuX',
        '9798DbBrrr',
        'ada.',
        'BRmOZ',
        'order',
        '24BtOfaB',
        'vcRkF',
        'yzxqe',
        '280408IxlDvq',
        'gem',
        'Mensagem\x20n',
        'bWRFT',
        '__esModule',
        'value',
        'defineProp',
        'ffptD',
        'criarMensa',
        'name',
        'xsOVC',
        'findByPk',
        'BRtWt',
        '301OdpsAS',
        'fault',
        'sequelize',
        'jnpGz',
        'isUnread',
        'timestamp',
        'dUTyW',
        'lMessage',
        'qLRKy',
        'nTUIz',
        'ZeWfU',
        '2054684PlPMCz',
        '__importDe',
        'OaLMt',
        'update',
        'erty',
        '620ewgJij',
        'listarMens',
        'zGERD',
        'MHIVT',
        'NStBl',
        'senderId',
        'ão\x20encontr',
        'receiverId',
        'receiver',
        '731842XIbGcj',
        '915bGLASR',
        'ZEjtX',
        'sender',
        'limit',
        'attributes',
        'model',
        'include',
        'wAJND',
        'lylYe'
    ];
    a = function () {
        return V;
    };
    return a();
}
(function (c, d) {
    const K = b, L = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(K(0x168)) / (-0x25d * 0xb + -0x59 * 0x47 + -0x32af * -0x1) + -parseInt(K(0x15a)) / (-0xf1 * 0x5 + -0x3 * -0x3f5 + 0x1 * -0x728) + parseInt(K(0x13b)) / (-0x1 * 0xa2e + 0xe7f + -0x44e) * (parseInt(K(0x15f)) / (0xb * 0x56 + 0x51a + 0x232 * -0x4)) + parseInt(L(0x11c)) / (-0x20b * -0x4 + -0x8b8 * -0x3 + -0x1 * 0x224f) * (parseInt(L(0x133)) / (0x1a73 + 0x1 * -0x22be + 0x851)) + parseInt(L(0x14f)) / (0x1ce0 + -0x246 + 0x1 * -0x1a93) * (parseInt(K(0x142)) / (-0x6 * 0x9e + -0x251f + 0x28db)) + -parseInt(K(0x135)) / (-0x2b * -0x65 + 0x2 * 0x21e + 0x306 * -0x7) * (parseInt(L(0x12b)) / (0x25c8 + -0x139 * 0x18 + 0x56 * -0x19)) + parseInt(K(0x126)) / (-0x162e + -0x1289 + -0x6f * -0x5e) * (parseInt(L(0x13f)) / (0x7ec + -0xa1 + 0x5 * -0x173));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x18ac35 + 0xe331b + -0x18d2a4));
var __importDefault = this && this[M(0x15b) + M(0x150)] || function (c) {
    const O = N;
    return c && c[O(0x146)] ? c : { 'default': c };
};
const k = {};
k[M(0x147)] = !![], Object[M(0x148) + M(0x15e)](exports, N(0x146), k);
const sequelize_1 = require(N(0x151)), InternalMessage_1 = __importDefault(require(N(0x134) + M(0x127) + N(0x156))), User_1 = __importDefault(require(N(0x134) + M(0x12c)));
class MessageService {
    static async [N(0x160) + M(0x12e)](o, p, q) {
        const P = N, Q = N, r = {};
        r[P(0x157)] = P(0x144) + Q(0x165) + P(0x13c), r[Q(0x145)] = function (t, u) {
            return t === u;
        }, r[Q(0x140)] = Q(0x124), r[P(0x14e)] = function (t, u) {
            return t == u;
        }, r[Q(0x15c)] = Q(0x136), r[P(0x149)] = function (t, u) {
            return t === u;
        }, r[P(0x141)] = Q(0x13d), r[P(0x152)] = P(0x11e), r[Q(0x159)] = P(0x14b), r[P(0x129)] = P(0x167), r[P(0x130)] = P(0x154), r[P(0x139)] = function (t, u) {
            return t !== u;
        }, r[P(0x158)] = P(0x155), r[Q(0x12d)] = P(0x11d), r[P(0x13a)] = function (t, u) {
            return t === u;
        }, r[Q(0x12a)] = Q(0x163);
        const s = r;
        try {
            if (s[Q(0x145)](s[Q(0x140)], s[Q(0x140)])) {
                let t;
                if (s[P(0x14e)](q, s[P(0x15c)])) {
                    if (s[P(0x149)](s[Q(0x141)], s[P(0x141)])) {
                        const u = {};
                        u[P(0x164)] = o, u[Q(0x166)] = p;
                        const v = {};
                        v[P(0x166)] = o, v[P(0x164)] = p;
                        const w = {
                                [sequelize_1['Op']['or']]: [
                                    u,
                                    v
                                ]
                            }, x = {};
                        x[P(0x121)] = User_1[Q(0x138)], x['as'] = s[P(0x152)], x[Q(0x120)] = [
                            'id',
                            s[Q(0x159)]
                        ];
                        const y = {};
                        y[Q(0x121)] = User_1[Q(0x138)], y['as'] = s[Q(0x129)], y[Q(0x120)] = [
                            'id',
                            s[P(0x159)]
                        ];
                        const z = {};
                        z[P(0x125)] = w, z[P(0x122)] = [
                            x,
                            y
                        ], z[Q(0x13e)] = [s[Q(0x130)]], z[Q(0x11f)] = 0x1f4, t = await InternalMessage_1[P(0x138)][Q(0x132)](z);
                    } else
                        throw new d(s[Q(0x157)]);
                } else {
                    if (s[P(0x139)](s[P(0x158)], s[Q(0x12d)])) {
                        const B = {};
                        B[P(0x12f)] = p;
                        const C = {};
                        C[P(0x121)] = User_1[P(0x138)], C['as'] = s[P(0x152)], C[P(0x120)] = [
                            'id',
                            s[P(0x159)]
                        ];
                        const D = {};
                        D[P(0x121)] = User_1[Q(0x138)], D['as'] = s[P(0x129)], D[Q(0x120)] = [
                            'id',
                            s[P(0x159)]
                        ];
                        const E = {};
                        E[Q(0x125)] = B, E[P(0x122)] = [
                            C,
                            D
                        ], E[P(0x13e)] = [s[Q(0x130)]], E[P(0x11f)] = 0x1f4, t = await InternalMessage_1[Q(0x138)][Q(0x132)](E);
                    } else
                        throw d;
                }
                return t;
            } else
                throw d;
        } catch (H) {
            if (s[P(0x13a)](s[Q(0x12a)], s[P(0x12a)]))
                throw H;
            else {
                const J = {};
                return J[Q(0x138)] = j, g && h[Q(0x146)] ? i : J;
            }
        }
    }
    static async [M(0x14a) + M(0x143)](d) {
        const R = M, S = N, e = {};
        e[R(0x161)] = function (g, h) {
            return g !== h;
        }, e[S(0x14c)] = R(0x162);
        const f = e;
        try {
            if (f[R(0x161)](f[S(0x14c)], f[S(0x14c)]))
                throw d;
            else
                return await InternalMessage_1[R(0x138)][S(0x128)](d);
        } catch (h) {
            throw h;
        }
    }
    static async [N(0x131) + M(0x137) + 'a'](e) {
        const T = N, U = N, f = {};
        f[T(0x123)] = T(0x144) + T(0x165) + T(0x13c);
        const g = f;
        try {
            const h = await InternalMessage_1[T(0x138)][T(0x14d)](e);
            if (!h)
                throw new Error(g[U(0x123)]);
            const i = {};
            i[U(0x153)] = !![], await h[T(0x15d)](i);
        } catch (j) {
            throw j;
        }
    }
}
exports[M(0x138)] = MessageService;