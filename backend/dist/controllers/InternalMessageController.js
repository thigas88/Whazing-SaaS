'use strict';
const a2 = b, a3 = b;
(function (c, d) {
    const a0 = b, a1 = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(a0(0x168)) / (0x127f + 0x167d + -0x28fb) + parseInt(a1(0x1c4)) / (-0x6 * 0x25f + -0x5ea + 0x1426) + -parseInt(a0(0x14e)) / (-0x24f1 + 0x1a1f + -0x2f * -0x3b) * (parseInt(a1(0x13e)) / (0x777 + -0x9 * -0x6a + 0xb2d * -0x1)) + -parseInt(a1(0x176)) / (-0x1d * 0x47 + 0x10 * 0x242 + 0x1 * -0x1c10) + parseInt(a1(0x155)) / (-0x175b + 0x175d * -0x1 + -0x182 * -0x1f) + -parseInt(a0(0x1c6)) / (0x58a * -0x7 + -0x1c29 + -0x1652 * -0x3) + -parseInt(a1(0x150)) / (-0xa49 + -0x1416 + 0x1 * 0x1e67) * (-parseInt(a0(0x1d6)) / (-0x422 + -0x1381 * 0x1 + 0x17ac));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x58c4e * 0x2 + 0xb2aaf + -0xa9 * -0xb83));
var __importDefault = this && this[a2(0x186) + a2(0x15e)] || function (c) {
    const a4 = a2;
    return c && c[a4(0x1b1)] ? c : { 'default': c };
};
const o = {};
o[a3(0x16d)] = !![], Object[a3(0x147) + a2(0x181)](exports, a2(0x1b1), o), exports[a2(0x1a5) + a2(0x1da) + 'ge'] = exports[a3(0x1aa) + a3(0x1a1) + 'a'] = exports[a3(0x158) + a3(0x164)] = exports[a3(0x1bd) + a2(0x195)] = void (-0x97d + 0x1 * -0x2011 + 0x298e);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x939 + -0x231e + 0x1b19);
        let h = e[f];
        return h;
    }, b(c, d);
}
const socket_1 = require(a3(0x16b) + a3(0x187)), InternalMessage_1 = __importDefault(require(a3(0x134) + a3(0x167) + a2(0x1ba))), User_1 = __importDefault(require(a3(0x134) + a2(0x180))), ListCountUnreadMessage_1 = __importDefault(require(a2(0x18f) + a3(0x191) + a3(0x15a) + a2(0x145) + a3(0x14c))), MessageService_1 = __importDefault(require(a3(0x18f) + a2(0x191) + a3(0x163) + a3(0x193) + 'ce')), ReadMessageService_1 = __importDefault(require(a3(0x18f) + a3(0x191) + a3(0x1d8) + a3(0x1a7) + a3(0x190))), logger_1 = require(a2(0x1c0) + a2(0x1c2)), listarMensagens = async (f, g) => {
        const a5 = a2, a6 = a3, h = {};
        h[a5(0x1b5)] = function (j, k) {
            return j !== k;
        }, h[a6(0x19d)] = a5(0x17e), h[a5(0x19e)] = a5(0x17c), h[a5(0x188)] = function (j, k) {
            return j !== k;
        }, h[a5(0x1c3)] = a5(0x1ab), h[a5(0x1a4)] = a6(0x13d) + a6(0x14b) + a6(0x1a9) + a5(0x178);
        const i = h;
        try {
            if (i[a6(0x1b5)](i[a5(0x19d)], i[a5(0x19e)])) {
                const {id: j} = f[a6(0x1a8)], {userId: k} = f[a6(0x13b)], {isGroup: l} = f[a6(0x1d0)], m = await MessageService_1[a5(0x16c)][a5(0x1bd) + a5(0x195)](j, k, l), n = {};
                return n[a5(0x143)] = m, g[a5(0x17d)](0x5 * -0x73 + -0x1 * -0x7b2 + -0x4ab)[a5(0x1d1)](n);
            } else
                e[a5(0x15b)][a6(0x1b6)](f);
        } catch (q) {
            if (i[a6(0x188)](i[a5(0x1c3)], i[a6(0x1c3)])) {
                const s = f[a6(0x18e)][a6(0x1b0)]('/')[0x5c2 * -0x2 + 0xb * 0x191 + -0x2db * 0x2][a6(0x1b0)](';')[0x1 * -0x829 + 0x1 * -0x9df + 0x1208];
                g[a5(0x154)] = new h()[a5(0x14a)]() + '.' + s;
            } else {
                console[a6(0x1b6)](q);
                const s = {};
                return s[a6(0x1b6)] = i[a6(0x1a4)], g[a6(0x17d)](-0x932 + 0x2 * -0x149 + 0xdb8)[a6(0x1d1)](s);
            }
        }
    };
exports[a3(0x1bd) + a2(0x195)] = listarMensagens;
const criarMensagem = async (n, p) => {
    const a7 = a3, a8 = a2, q = {};
    q[a7(0x160)] = a7(0x13d) + a7(0x165) + a8(0x144) + a8(0x1bf), q[a7(0x1b8)] = a8(0x13d) + a7(0x165) + a8(0x149) + a8(0x135) + a7(0x161), q[a7(0x189)] = a8(0x13d) + a7(0x182) + a8(0x1ca) + a8(0x175) + a8(0x197), q[a7(0x179)] = function (s, t) {
        return s !== t;
    }, q[a7(0x1ad)] = a8(0x1a6), q[a7(0x15f)] = a7(0x19c), q[a7(0x1b4)] = function (s, t) {
        return s === t;
    }, q[a8(0x1cc)] = a7(0x192), q[a8(0x18b)] = a7(0x1cf), q[a7(0x159)] = a7(0x1b3), q[a7(0x1c5)] = function (s, t) {
        return s !== t;
    }, q[a8(0x173)] = a7(0x19f), q[a8(0x1a2)] = a8(0x169) + a7(0x16f) + a8(0x1bc), q[a7(0x15d)] = a8(0x13d) + a7(0x14b) + a8(0x1a9) + a7(0x178), q[a7(0x1d3)] = a8(0x1ac), q[a7(0x17a)] = function (s, t) {
        return s === t;
    }, q[a8(0x194)] = a7(0x1c1), q[a7(0x16e)] = function (s, t) {
        return s === t;
    }, q[a8(0x14f)] = a7(0x1bb), q[a7(0x174)] = function (s, t) {
        return s > t;
    }, q[a7(0x1af)] = function (s, t) {
        return s === t;
    }, q[a7(0x1db)] = a8(0x199), q[a8(0x177)] = a8(0x1b9), q[a7(0x1be)] = a7(0x142), q[a7(0x151)] = a8(0x19b), q[a7(0x152)] = a7(0x1d9), q[a8(0x156)] = a7(0x137), q[a7(0x13a)] = a7(0x140);
    const r = q;
    try {
        const {
                text: s,
                timestamp: t,
                receiverId: u,
                isGroup: v
            } = n[a8(0x196)], {
                id: w,
                tenantId: x
            } = n[a7(0x1a8)], y = n[a7(0x17f)], z = (-0x1b * -0x112 + 0xed1 * -0x1 + -0xe15, socket_1[a8(0x185)])(), A = {
                'text': s,
                'timestamp': t,
                'receiverId': u,
                'senderId': w,
                'tenantId': x,
                'groupId': null,
                'mediaType': r[a7(0x1d3)],
                'mediaUrl': undefined,
                'createdAt': new Date(),
                'updatedAt': new Date()
            };
        if (r[a8(0x17a)](v, !![]) || r[a8(0x17a)](v, r[a7(0x194)])) {
            if (r[a8(0x16e)](r[a8(0x14f)], r[a8(0x14f)]))
                A[a7(0x198)] = undefined, A[a7(0x171)] = u;
            else {
                E[a8(0x1b6)](F);
                const N = {};
                return N[a8(0x1b6)] = r[a7(0x160)], H[a8(0x17d)](-0x1e88 + 0x8b6 + 0x17c6)[a7(0x1d1)](N);
            }
        }
        let B = {};
        if (y && r[a8(0x174)](y[a8(0x1b2)], -0xf0e + 0x1508 + -0x5fa)) {
            if (r[a8(0x1af)](r[a7(0x1db)], r[a8(0x1db)]))
                await Promise[a7(0x146)](y[a7(0x18d)](async N => {
                    const a9 = a7, aa = a8, O = {};
                    O[a9(0x1cd)] = r[a9(0x189)];
                    const P = O;
                    if (r[a9(0x179)](r[a9(0x1ad)], r[a9(0x1ad)])) {
                        const R = {};
                        return R[aa(0x16c)] = J, F && H[a9(0x1b1)] ? I : R;
                    } else {
                        try {
                            if (r[a9(0x179)](r[a9(0x15f)], r[aa(0x15f)]))
                                F[a9(0x198)] = H, I[aa(0x171)] = J;
                            else {
                                if (!N[a9(0x154)]) {
                                    if (r[a9(0x1b4)](r[a9(0x1cc)], r[aa(0x18b)])) {
                                        if (!F[aa(0x154)]) {
                                            const V = K[a9(0x18e)][aa(0x1b0)]('/')[-0x231a + -0xf47 * 0x2 + -0x1 * -0x41a9][aa(0x1b0)](';')[0x19d2 + 0x1f76 * -0x1 + 0x5a4];
                                            L[a9(0x154)] = new m()[aa(0x14a)]() + '.' + V;
                                        }
                                    } else {
                                        const V = N[aa(0x18e)][a9(0x1b0)]('/')[0x715 + 0x275 * 0x3 + -0x89 * 0x1b][a9(0x1b0)](';')[-0x19a5 + 0x128a * 0x1 + 0x71b * 0x1];
                                        N[aa(0x154)] = new Date()[aa(0x14a)]() + '.' + V;
                                    }
                                }
                            }
                        } catch (W) {
                            if (r[aa(0x179)](r[a9(0x159)], r[aa(0x159)])) {
                                E[a9(0x1b6)](F);
                                const Y = {};
                                return Y[aa(0x1b6)] = P[aa(0x1cd)], H[a9(0x17d)](0x122b * -0x1 + -0x1 * -0x817 + 0xc08)[a9(0x1d1)](Y);
                            } else
                                logger_1[a9(0x15b)][a9(0x1b6)](W);
                        }
                        const R = {
                                ...A,
                                'text': N[aa(0x162) + 'me'],
                                'mediaUrl': N[a9(0x154)],
                                'mediaType': N[aa(0x1a3)] || N[a9(0x18e)][aa(0x172)](0xa27 * -0x2 + 0x1 * 0xeda + 0x574, N[a9(0x18e)][aa(0x13c)]('/'))
                            }, S = await MessageService_1[aa(0x16c)][aa(0x158) + aa(0x164)](R);
                        B = await InternalMessage_1[a9(0x16c)][aa(0x1d7)](S['id']);
                        if (!B) {
                            if (r[aa(0x1c5)](r[aa(0x173)], r[aa(0x173)])) {
                                E[a9(0x1b6)](F);
                                const Z = {};
                                return Z[a9(0x1b6)] = r[aa(0x1b8)], H[a9(0x17d)](0x6f9 * -0x5 + 0x19a5 + 0x2c * 0x41)[a9(0x1d1)](Z);
                            } else
                                throw new Error(r[a9(0x1a2)]);
                        }
                    }
                }));
            else
                throw new C(r[a7(0x1a2)]);
        } else {
            if (r[a7(0x1af)](r[a7(0x177)], r[a8(0x1be)])) {
                E[a7(0x1b6)](F);
                const P = {};
                return P[a7(0x1b6)] = r[a8(0x15d)], H[a8(0x17d)](0x455 + -0x22e3 + -0x26 * -0xdb)[a8(0x1d1)](P);
            } else
                B = await MessageService_1[a8(0x16c)][a8(0x158) + a8(0x164)](A);
        }
        const C = {};
        C['id'] = B['id'];
        const D = {};
        D[a8(0x139)] = User_1[a7(0x16c)], D['as'] = r[a8(0x151)], D[a7(0x183)] = [
            'id',
            r[a8(0x152)]
        ];
        const E = {};
        E[a8(0x139)] = User_1[a7(0x16c)], E['as'] = r[a7(0x156)], E[a8(0x183)] = [
            'id',
            r[a7(0x152)]
        ];
        const F = {};
        F[a7(0x13f)] = C, F[a7(0x141)] = [
            D,
            E
        ];
        const G = await InternalMessage_1[a8(0x16c)][a7(0x14d)](F), H = {};
        H['id'] = G['id'], H[a8(0x198)] = G[a8(0x198)], H[a7(0x1a3)] = G[a8(0x1a3)], H[a7(0x1dd)] = G[a8(0x1dd)], H[a8(0x1d4)] = G[a7(0x1d4)], H[a8(0x1a0)] = w, H[a8(0x157)] = G[a7(0x157)], H[a7(0x19b)] = G[a8(0x19b)], H[a8(0x171)] = G[a8(0x171)], H[a7(0x137)] = G[a7(0x137)], H[a8(0x1d5)] = s;
        const I = {};
        I[a8(0x1cb)] = r[a7(0x13a)], I[a8(0x138)] = H, z[a7(0x1ce)](x + (a8(0x1c9) + a7(0x1d2) + 'no'), I);
        const J = {};
        J['id'] = G['id'], J[a8(0x198)] = u, J[a7(0x1a0)] = w, J[a7(0x1a3)] = G[a7(0x1a3)], J[a7(0x157)] = G[a7(0x157)], J[a7(0x19b)] = G[a8(0x19b)], J[a8(0x171)] = G[a8(0x171)], J[a8(0x137)] = G[a8(0x137)], J[a8(0x1d5)] = s;
        const K = {};
        K[a8(0x1cb)] = r[a7(0x13a)], K[a8(0x138)] = J, z[a8(0x1ce)](x + (a7(0x1c9) + a7(0x1d2) + a7(0x15c) + a7(0x19a)), K);
        const L = {};
        return L[a8(0x170)] = G, p[a8(0x17d)](0xbcd + 0x10f * -0x7 + -0x39b)[a7(0x1d1)](L);
    } catch (P) {
        console[a8(0x1b6)](P);
        const Q = {};
        return Q[a8(0x1b6)] = r[a7(0x160)], p[a7(0x17d)](0x267d + 0x23ff + -0x4888)[a7(0x1d1)](Q);
    }
};
function a() {
    const af = [
        '596526hJCSpL',
        'AGKcc',
        'timestamp',
        'criarMensa',
        'RcgfQ',
        'Message/Li',
        'logger',
        'no-notific',
        'nnCJi',
        'fault',
        'guSDZ',
        'rFamA',
        'ão\x20lidas.',
        'originalna',
        'Message/Me',
        'gem',
        '\x20erro\x20ao\x20c',
        'marcadas\x20c',
        'InternalMe',
        '529874YvEZHR',
        'ERR_CREATI',
        'TOmpb',
        '../libs/so',
        'default',
        'value',
        'rOIWy',
        'NG_MESSAGE',
        'mensagem',
        'groupId',
        'substr',
        'PLpnd',
        'qTzfP',
        'nsagens\x20co',
        '93435QXnewY',
        'YUmNZ',
        'ensagens.',
        'nTCsn',
        'nGwpr',
        'isGroup',
        'PeWCa',
        'status',
        'UnPlU',
        'files',
        'User',
        'erty',
        '\x20erro\x20ao\x20m',
        'attributes',
        'DAxxe',
        'getIO',
        '__importDe',
        'cket',
        'hURqA',
        'vQPDF',
        'dzrWz',
        'ifRTE',
        'qUhCI',
        'map',
        'mimetype',
        '../service',
        'ervice',
        's/Internal',
        'ZlLcm',
        'ssageServi',
        'wFNJk',
        'agens',
        'body',
        'mo\x20lida.',
        'receiverId',
        'pSUHm',
        'acao',
        'sender',
        'YnBgN',
        'RLkYX',
        'FeUHz',
        'XaXhn',
        'senderId',
        'agemNaoLid',
        'sdOaz',
        'mediaType',
        'rzVPW',
        'listCountU',
        'CkrfY',
        'adMessageS',
        'user',
        'istar\x20as\x20m',
        'marcarMens',
        'fmSkT',
        'chat',
        'opkQJ',
        'Mensagems\x20',
        'DiZII',
        'split',
        '__esModule',
        'length',
        'vdKTr',
        'hmvOp',
        'Wlvtc',
        'error',
        'message',
        'nWlWu',
        'wCjyH',
        'ssage',
        'yEFhj',
        '_SYSTEM',
        'listarMens',
        'aDRpo',
        'sagem.',
        '../utils/l',
        'true',
        'ogger',
        'mWxTo',
        '1832844PuGRiG',
        'vXWoP',
        '5095342KaEsKX',
        't-interno',
        ':unread-me',
        ':mensagem-',
        'arcar\x20a\x20me',
        'action',
        'DeByw',
        'echhb',
        'emit',
        'slHJP',
        'query',
        'json',
        'chat-inter',
        'YWOBV',
        'mediaUrl',
        'text',
        '191871BQZeqI',
        'findByPk',
        'Message/Re',
        'name',
        'nreadMessa',
        'qrvQy',
        'count',
        'mediaName',
        'userId',
        '../models/',
        'ensagens\x20n',
        'omo\x20lida.',
        'receiver',
        'data',
        'model',
        'thTOk',
        'params',
        'indexOf',
        'Ocorreu\x20um',
        '66524YYdcmI',
        'where',
        'update',
        'include',
        'zciAl',
        'mensagens',
        'riar\x20a\x20men',
        'stCountUnr',
        'all',
        'defineProp',
        'GVoVx',
        'ontar\x20as\x20m',
        'getTime',
        '\x20erro\x20ao\x20l',
        'eadMessage',
        'findOne',
        '165zaVrEw',
        'oXXDU',
        '232ahusOD',
        'wvdwj',
        'AECZJ',
        'nsagem-cha',
        'filename'
    ];
    a = function () {
        return af;
    };
    return a();
}
exports[a3(0x158) + a2(0x164)] = criarMensagem;
const marcarMensagemNaoLida = async (f, g) => {
    const ab = a2, ac = a2, h = {
            'DAxxe': ab(0x140),
            'qUhCI': function (i, j) {
                return i(j);
            },
            'GVoVx': ac(0x1ae) + ab(0x166) + ab(0x136),
            'dzrWz': ac(0x13d) + ab(0x182) + ac(0x1ca) + ab(0x175) + ac(0x197)
        };
    try {
        const {contactId: i} = f[ab(0x13b)], {
                id: j,
                tenantId: k
            } = f[ac(0x1a8)], {isGroup: l} = f[ab(0x196)], m = (0x1 * 0x140a + 0xe66 + -0x2270, socket_1[ab(0x185)])(), n = {};
        n[ac(0x1de)] = j, n[ab(0x1a0)] = i, n[ac(0x17b)] = l, await (0x11 * -0x23a + 0x19e7 * 0x1 + -0x85 * -0x17, ReadMessageService_1[ab(0x16c)])(n), m[ab(0x1ce)](k + (ac(0x1c8) + ab(0x153) + ac(0x1c7)), {
            'action': h[ab(0x184)],
            'data': {
                'receiverId': j,
                'isGroup': l,
                'senderId': h[ac(0x18c)](Number, i)
            }
        });
        const p = {};
        return p[ab(0x1b7)] = h[ac(0x148)], g[ab(0x17d)](0x1b52 + -0xb8e + -0xefc)[ac(0x1d1)](p);
    } catch (q) {
        console[ac(0x1b6)](q);
        const r = {};
        return r[ab(0x1b6)] = h[ac(0x18a)], g[ab(0x17d)](0xb3 * -0xc + -0x2018 + -0x4 * -0xa9c)[ac(0x1d1)](r);
    }
};
exports[a2(0x1aa) + a3(0x1a1) + 'a'] = marcarMensagemNaoLida;
const listCountUnreadMessage = async (f, g) => {
    const ad = a3, ae = a2, h = {};
    h[ad(0x16a)] = ae(0x13d) + ad(0x165) + ad(0x149) + ad(0x135) + ae(0x161);
    const i = h;
    try {
        const {id: j} = f[ad(0x1a8)], k = await (0x1ac9 + -0x31a * 0x4 + 0xe61 * -0x1, ListCountUnreadMessage_1[ae(0x16c)])(j), l = {};
        return l[ad(0x1dc)] = k, g[ae(0x17d)](0x10a5 + -0x148e + 0x4b1)[ad(0x1d1)](l);
    } catch (m) {
        console[ad(0x1b6)](m);
        const n = {};
        return n[ad(0x1b6)] = i[ad(0x16a)], g[ad(0x17d)](0x21ab + 0x1f54 + -0x1 * 0x3f0b)[ae(0x1d1)](n);
    }
};
exports[a3(0x1a5) + a3(0x1da) + 'ge'] = listCountUnreadMessage;