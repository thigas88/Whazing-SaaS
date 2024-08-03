'use strict';
function a() {
    const U = [
        'fGQKz',
        'fiyfl',
        '2hQzdUy',
        'name',
        'XSRIu',
        '315007qilqTk',
        'update',
        'zyfKd',
        '44094FEfDrd',
        'listarMens',
        'senderId',
        'wmuSG',
        'lMessage',
        'findByPk',
        '242380ueGzfx',
        'Mensagem\x20n',
        'Uzkua',
        'MehdN',
        'isUnread',
        '__importDe',
        '14869395LHESDr',
        '11hkygXT',
        'sequelize',
        '1463343XQecsL',
        '35528830huJTOb',
        'erty',
        'agens',
        'findAll',
        'qQaQT',
        'erHHv',
        'KwbPa',
        'Purqm',
        'marcarMens',
        'bNJih',
        'ada.',
        'pkZyy',
        'gem',
        'criarMensa',
        'Lysoi',
        'where',
        'PHxdD',
        '714312wYzIou',
        'FZBXi',
        '../../mode',
        'ls/User',
        'LGhZF',
        '312KKDVer',
        'nyozJ',
        'groupId',
        'include',
        'LBLLU',
        'CNTmp',
        'default',
        'ls/Interna',
        'qPrcT',
        'OfTeg',
        'gDUXg',
        'fault',
        'timestamp',
        'bKjgK',
        '__esModule',
        'attributes',
        'agemNaoLid',
        'OTIbK',
        'XvWIS',
        'defineProp',
        '955tnvJNq',
        'AFVyx',
        'receiver',
        'VHDxB',
        'ão\x20encontr',
        'create',
        'model',
        'limit',
        'sender',
        'value',
        'order',
        'fMnLJ',
        'KyMJs',
        'false',
        'receiverId'
    ];
    a = function () {
        return U;
    };
    return a();
}
const L = b, M = b;
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(J(0xb0)) / (-0xe9d + 0x1 * -0x8e2 + -0x2f0 * -0x8) * (parseInt(K(0xda)) / (0x766 * 0x2 + -0x21d7 + -0x1 * -0x130d)) + -parseInt(K(0xef)) / (-0x5 * -0x2e + 0x1561 + -0x5f * 0x3c) + -parseInt(J(0xe6)) / (-0x1 * 0x258a + -0x15b8 + -0x6 * -0x9e1) + parseInt(K(0xc9)) / (-0xad1 + 0xbb5 + -0xdf) * (-parseInt(J(0xe0)) / (-0x1297 + -0x1908 + 0x2ba5 * 0x1)) + -parseInt(K(0xdd)) / (-0x1185 + -0x22f + 0x13bb) * (-parseInt(K(0xb5)) / (0x4 * -0x7bd + -0x9 * -0xaa + -0xc81 * -0x2)) + -parseInt(J(0xec)) / (0x627 * -0x2 + 0xa0f + -0x2 * -0x124) + -parseInt(J(0xf0)) / (0x1c41 + 0x2 * -0x436 + -0x13cb) * (-parseInt(J(0xed)) / (0x1c7a + 0x2641 * 0x1 + -0x16 * 0x308));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4f1b8 + -0x7f129 + 0x1bfbcd));
var __importDefault = this && this[L(0xeb) + L(0xc0)] || function (c) {
    const N = M;
    return c && c[N(0xc3)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2446 + -0x3 * -0xbb4 + -0xb * 0x66e);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[M(0xd2)] = !![], Object[M(0xc8) + M(0xf1)](exports, M(0xc3), k);
const sequelize_1 = require(M(0xee)), InternalMessage_1 = __importDefault(require(M(0xb2) + L(0xbc) + M(0xe4))), User_1 = __importDefault(require(M(0xb2) + M(0xb3)));
class MessageService {
    static async [L(0xe1) + L(0xf2)](o, p, q) {
        const O = L, P = L, r = {};
        r[O(0xd4)] = function (t, u) {
            return t !== u;
        }, r[O(0xf6)] = O(0xb4), r[O(0xcc)] = O(0xaa), r[P(0xf7)] = function (t, u) {
            return t == u;
        }, r[P(0xba)] = O(0xd6), r[O(0xca)] = function (t, u) {
            return t === u;
        }, r[P(0xd8)] = O(0xc6), r[P(0xbd)] = O(0xe9), r[O(0xe3)] = P(0xd1), r[P(0xbf)] = P(0xdb), r[P(0xd5)] = O(0xcb), r[O(0xad)] = P(0xc1), r[P(0xe8)] = O(0xbe), r[P(0xb6)] = function (t, u) {
            return t !== u;
        }, r[P(0xd9)] = O(0xf4), r[O(0xa8)] = P(0xc2);
        const s = r;
        try {
            if (s[P(0xd4)](s[O(0xf6)], s[O(0xcc)])) {
                let t;
                if (s[O(0xf7)](q, s[O(0xba)])) {
                    if (s[O(0xca)](s[O(0xd8)], s[P(0xbd)]))
                        throw d;
                    else {
                        const v = {};
                        v[P(0xe2)] = o, v[P(0xd7)] = p;
                        const w = {};
                        w[P(0xd7)] = o, w[O(0xe2)] = p;
                        const x = {
                                [sequelize_1['Op']['or']]: [
                                    v,
                                    w
                                ]
                            }, y = {};
                        y[P(0xcf)] = User_1[O(0xbb)], y['as'] = s[P(0xe3)], y[O(0xc4)] = [
                            'id',
                            s[P(0xbf)]
                        ];
                        const z = {};
                        z[P(0xcf)] = User_1[O(0xbb)], z['as'] = s[O(0xd5)], z[P(0xc4)] = [
                            'id',
                            s[O(0xbf)]
                        ];
                        const A = {};
                        A[P(0xae)] = x, A[P(0xb8)] = [
                            y,
                            z
                        ], A[P(0xd3)] = [s[P(0xad)]], A[O(0xd0)] = 0x1f4, t = await InternalMessage_1[P(0xbb)][P(0xf3)](A);
                    }
                } else {
                    if (s[O(0xca)](s[P(0xe8)], s[P(0xe8)])) {
                        const B = {};
                        B[P(0xb7)] = p;
                        const C = {};
                        C[O(0xcf)] = User_1[P(0xbb)], C['as'] = s[O(0xe3)], C[P(0xc4)] = [
                            'id',
                            s[O(0xbf)]
                        ];
                        const D = {};
                        D[P(0xcf)] = User_1[O(0xbb)], D['as'] = s[P(0xd5)], D[P(0xc4)] = [
                            'id',
                            s[O(0xbf)]
                        ];
                        const E = {};
                        E[P(0xae)] = B, E[P(0xb8)] = [
                            C,
                            D
                        ], E[O(0xd3)] = [s[O(0xad)]], E[P(0xd0)] = 0x1f4, t = await InternalMessage_1[P(0xbb)][P(0xf3)](E);
                    } else {
                        const G = {};
                        return G[P(0xbb)] = j, g && h[P(0xc3)] ? i : G;
                    }
                }
                return t;
            } else
                throw d;
        } catch (H) {
            if (s[O(0xb6)](s[O(0xd9)], s[O(0xa8)]))
                throw H;
            else
                throw d;
        }
    }
    static async [M(0xac) + L(0xab)](d) {
        const Q = L, R = M, e = {};
        e[Q(0xb1)] = R(0xe7) + Q(0xcd) + R(0xa9), e[R(0xc7)] = function (g, h) {
            return g !== h;
        }, e[R(0xaf)] = Q(0xf5), e[R(0xdc)] = Q(0xdf);
        const f = e;
        try {
            if (f[Q(0xc7)](f[R(0xaf)], f[R(0xdc)]))
                return await InternalMessage_1[Q(0xbb)][Q(0xce)](d);
            else
                throw new d(f[R(0xb1)]);
        } catch (h) {
            throw h;
        }
    }
    static async [M(0xf8) + M(0xc5) + 'a'](e) {
        const S = M, T = L, f = {};
        f[S(0xb9)] = T(0xe7) + S(0xcd) + T(0xa9);
        const g = f;
        try {
            const h = await InternalMessage_1[T(0xbb)][S(0xe5)](e);
            if (!h)
                throw new Error(g[T(0xb9)]);
            const i = {};
            i[S(0xea)] = !![], await h[T(0xde)](i);
        } catch (j) {
            throw j;
        }
    }
}
exports[L(0xbb)] = MessageService;