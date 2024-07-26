'use strict';
const L = b, M = b;
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(J(0x1c2)) / (0x2007 * 0x1 + 0x1a30 + 0x1 * -0x3a36) + parseInt(K(0x1f6)) / (-0x1 * -0xb07 + 0x1 * -0x822 + 0x2e3 * -0x1) * (-parseInt(J(0x1de)) / (-0x26b7 + -0x15 * 0x9 + -0x1 * -0x2777)) + parseInt(K(0x1fc)) / (-0x16c4 + 0x67 * -0x7 + 0x1 * 0x1999) * (-parseInt(J(0x1b7)) / (-0xd * -0x8d + -0x8cd + 0x1a9)) + parseInt(J(0x1f9)) / (-0x1a25 + -0x26e4 + 0x1 * 0x410f) * (parseInt(K(0x1b3)) / (0x9d0 + -0x49 * -0x58 + -0x22e1 * 0x1)) + -parseInt(K(0x1f0)) / (-0x153 + 0x67f * 0x3 + 0xd3 * -0x16) + parseInt(J(0x1bf)) / (0x1 * 0x232f + 0x1e8f + 0x9 * -0x74d) * (-parseInt(J(0x1c9)) / (0x148f + -0x6ad * 0x5 + 0x66e * 0x2)) + -parseInt(K(0x1e9)) / (0x17eb + -0x19 * -0x9 + 0x1 * -0x18c1) * (-parseInt(K(0x1cb)) / (-0xd2f + 0x2373 + -0xed * 0x18));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x84 * 0x2836 + -0x16639b + 0x39b207));
var __importDefault = this && this[L(0x1f3) + M(0x1e1)] || function (c) {
    const N = M;
    return c && c[N(0x1da)] ? c : { 'default': c };
};
function a() {
    const U = [
        'XgVoA',
        'ada.',
        'default',
        'EsBwZ',
        '343032hoCFWV',
        'HTCpA',
        'order',
        '__importDe',
        'update',
        'findByPk',
        '6fhQSDg',
        'erty',
        'senderId',
        '6bAsCBR',
        'JpZAC',
        'create',
        '332uoOVPk',
        'sender',
        'ocNTQ',
        'attributes',
        'ZsfWz',
        'qHmXG',
        '3508491HOnvfx',
        'QWiYZ',
        'uNxhc',
        'include',
        '78045xMHJpB',
        'IBnOi',
        'marcarMens',
        'limit',
        'agens',
        'AAunU',
        'lOQef',
        'ynKbO',
        '18Ttlqwp',
        'aYdRR',
        'isUnread',
        '1455818yTQjfL',
        'defineProp',
        'value',
        'receiver',
        'name',
        'qZuDp',
        'LmOFY',
        '2241130uZmPmC',
        'agemNaoLid',
        '4699404PIyBbI',
        'GuEhq',
        'Mensagem\x20n',
        'ls/Interna',
        'lMessage',
        'GTDrU',
        'listarMens',
        'groupId',
        'model',
        'wYwrg',
        'FpGki',
        'ULzel',
        'where',
        'SDANh',
        'false',
        '__esModule',
        'nrQea',
        'timestamp',
        'ão\x20encontr',
        '219885aLVOcs',
        'criarMensa',
        '../../mode',
        'fault',
        'XOXzW',
        'findAll',
        'ls/User',
        'JeuJo',
        'receiverId',
        'gem',
        'ALhPd',
        '110rAuGPi',
        'sequelize',
        'zeEov'
    ];
    a = function () {
        return U;
    };
    return a();
}
const k = {};
k[L(0x1c4)] = !![], Object[L(0x1c3) + M(0x1f7)](exports, M(0x1da), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x1d + 0x20da + -0x1 * 0x1f49);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(L(0x1ea)), InternalMessage_1 = __importDefault(require(L(0x1e0) + L(0x1ce) + L(0x1cf))), User_1 = __importDefault(require(L(0x1e0) + L(0x1e4)));
class MessageService {
    static async [M(0x1d1) + M(0x1bb)](o, p, q) {
        const O = L, P = M, r = {};
        r[O(0x1c7)] = O(0x1cd) + O(0x1dd) + O(0x1ed), r[O(0x1b2)] = function (t, u) {
            return t === u;
        }, r[P(0x1c8)] = O(0x1ec), r[P(0x1ef)] = function (t, u) {
            return t == u;
        }, r[O(0x1eb)] = P(0x1d9), r[P(0x1bd)] = function (t, u) {
            return t === u;
        }, r[P(0x1d5)] = P(0x1d8), r[P(0x1b8)] = O(0x1b5), r[P(0x1d6)] = P(0x1ae), r[P(0x1e5)] = O(0x1c6), r[P(0x1d4)] = P(0x1c5), r[P(0x1c0)] = O(0x1dc), r[P(0x1b1)] = function (t, u) {
            return t !== u;
        }, r[P(0x1d0)] = O(0x1db), r[O(0x1f1)] = O(0x1b4), r[O(0x1af)] = function (t, u) {
            return t === u;
        }, r[O(0x1be)] = O(0x1e2);
        const s = r;
        try {
            if (s[O(0x1b2)](s[P(0x1c8)], s[P(0x1c8)])) {
                let t;
                if (s[O(0x1ef)](q, s[O(0x1eb)])) {
                    if (s[O(0x1bd)](s[O(0x1d5)], s[P(0x1b8)])) {
                        const v = {};
                        return v[O(0x1ee)] = j, g && h[P(0x1da)] ? i : v;
                    } else {
                        const v = {};
                        v[O(0x1f8)] = o, v[P(0x1e6)] = p;
                        const w = {};
                        w[P(0x1e6)] = o, w[O(0x1f8)] = p;
                        const x = {
                                [sequelize_1['Op']['or']]: [
                                    v,
                                    w
                                ]
                            }, y = {};
                        y[P(0x1d3)] = User_1[P(0x1ee)], y['as'] = s[O(0x1d6)], y[P(0x1b0)] = [
                            'id',
                            s[O(0x1e5)]
                        ];
                        const z = {};
                        z[P(0x1d3)] = User_1[P(0x1ee)], z['as'] = s[P(0x1d4)], z[P(0x1b0)] = [
                            'id',
                            s[O(0x1e5)]
                        ];
                        const A = {};
                        A[O(0x1d7)] = x, A[O(0x1b6)] = [
                            y,
                            z
                        ], A[O(0x1f2)] = [s[O(0x1c0)]], A[P(0x1ba)] = 0x1f4, t = await InternalMessage_1[O(0x1ee)][P(0x1e3)](A);
                    }
                } else {
                    if (s[O(0x1b1)](s[O(0x1d0)], s[O(0x1f1)])) {
                        const B = {};
                        B[P(0x1d2)] = p;
                        const C = {};
                        C[O(0x1d3)] = User_1[O(0x1ee)], C['as'] = s[O(0x1d6)], C[P(0x1b0)] = [
                            'id',
                            s[O(0x1e5)]
                        ];
                        const D = {};
                        D[P(0x1d3)] = User_1[O(0x1ee)], D['as'] = s[O(0x1d4)], D[P(0x1b0)] = [
                            'id',
                            s[O(0x1e5)]
                        ];
                        const E = {};
                        E[O(0x1d7)] = B, E[P(0x1b6)] = [
                            C,
                            D
                        ], E[O(0x1f2)] = [s[O(0x1c0)]], E[P(0x1ba)] = 0x1f4, t = await InternalMessage_1[O(0x1ee)][O(0x1e3)](E);
                    } else
                        throw d;
                }
                return t;
            } else
                throw new d(s[P(0x1c7)]);
        } catch (H) {
            if (s[P(0x1af)](s[P(0x1be)], s[O(0x1be)]))
                throw H;
            else
                throw d;
        }
    }
    static async [L(0x1df) + M(0x1e7)](d) {
        const Q = M, R = M, e = {};
        e[Q(0x1cc)] = function (g, h) {
            return g === h;
        }, e[R(0x1fa)] = R(0x1bc);
        const f = e;
        try {
            if (f[Q(0x1cc)](f[Q(0x1fa)], f[R(0x1fa)]))
                return await InternalMessage_1[R(0x1ee)][Q(0x1fb)](d);
            else
                throw d;
        } catch (h) {
            throw h;
        }
    }
    static async [L(0x1b9) + M(0x1ca) + 'a'](e) {
        const S = L, T = L, f = {};
        f[S(0x1e8)] = S(0x1cd) + T(0x1dd) + S(0x1ed);
        const g = f;
        try {
            const h = await InternalMessage_1[T(0x1ee)][S(0x1f5)](e);
            if (!h)
                throw new Error(g[T(0x1e8)]);
            const i = {};
            i[T(0x1c1)] = !![], await h[S(0x1f4)](i);
        } catch (j) {
            throw j;
        }
    }
}
exports[M(0x1ee)] = MessageService;