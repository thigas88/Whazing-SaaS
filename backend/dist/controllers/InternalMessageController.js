'use strict';
const a2 = b, a3 = b;
(function (c, d) {
    const a0 = b, a1 = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(a0(0x1a9)) / (-0x37c * 0x5 + 0x52f + 0xc3e) * (-parseInt(a1(0x17d)) / (0x1 * -0x154d + -0x17 * 0x35 + 0x1a12)) + parseInt(a1(0x199)) / (-0x1 * 0x130d + 0x1 * 0x9f3 + -0x91d * -0x1) + -parseInt(a1(0x1ae)) / (0x1df * 0x2 + 0xb2 * -0x1 + -0x308) * (parseInt(a0(0x189)) / (0x47a + -0x10d4 + 0x1 * 0xc5f)) + parseInt(a1(0x181)) / (-0x209 * -0xf + 0x1d3d + 0x3 * -0x13ea) * (-parseInt(a1(0x182)) / (-0x1bb + -0x1d8f + 0x1f51)) + -parseInt(a1(0x1a1)) / (0x417 * -0x3 + 0x1e7d + -0x918 * 0x2) + -parseInt(a0(0x198)) / (-0x1 * -0x2401 + -0xdc1 * 0x2 + -0x1 * 0x876) + -parseInt(a1(0x19c)) / (-0x695 + -0xd66 + 0x1405) * (-parseInt(a1(0x1ac)) / (0x5 * -0x1e2 + -0x34 * 0xb7 + 0x2ea1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4c792 + 0x3d7d0 * -0x1 + 0x123 * 0x3a9));
var __importDefault = this && this[a2(0x14b) + a2(0x11e)] || function (c) {
    const a4 = a2;
    return c && c[a4(0x175)] ? c : { 'default': c };
};
const o = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x65b * 0x2 + 0x4d1 * -0x2 + 0x5 * -0x6b);
        let h = e[f];
        return h;
    }, b(c, d);
}
o[a2(0x113)] = !![], Object[a3(0x127) + a3(0x144)](exports, a3(0x175), o), exports[a3(0x13c) + a2(0x138) + 'ge'] = exports[a3(0x12a) + a2(0x141) + 'a'] = exports[a3(0x183) + a3(0x168)] = exports[a3(0x160) + a2(0x136)] = void (-0x1 * 0xb89 + -0x1758 + 0x1 * 0x22e1);
const socket_1 = require(a3(0x109) + a2(0x151)), InternalMessage_1 = __importDefault(require(a2(0x180) + a2(0x167) + a3(0x111))), User_1 = __importDefault(require(a2(0x180) + a3(0x12d))), ListCountUnreadMessage_1 = __importDefault(require(a2(0x17f) + a3(0x192) + a2(0x10d) + a3(0x131) + a3(0x110))), MessageService_1 = __importDefault(require(a3(0x17f) + a3(0x192) + a3(0x11a) + a3(0x159) + 'ce')), ReadMessageService_1 = __importDefault(require(a2(0x17f) + a2(0x192) + a3(0x19d) + a2(0x146) + a3(0x191))), logger_1 = require(a3(0x125) + a2(0xff)), listarMensagens = async (f, g) => {
        const a5 = a2, a6 = a2, h = {};
        h[a5(0x14a)] = a6(0x12b) + a5(0x15d) + a5(0x13a) + a5(0x11c), h[a6(0x150)] = function (j, k) {
            return j === k;
        }, h[a5(0x119)] = a5(0x128), h[a5(0x190)] = function (j, k) {
            return j !== k;
        }, h[a5(0x156)] = a5(0x194);
        const i = h;
        try {
            if (i[a5(0x150)](i[a6(0x119)], i[a6(0x119)])) {
                const {id: j} = f[a5(0x14e)], {userId: k} = f[a6(0x123)], {isGroup: l} = f[a5(0x174)], m = await MessageService_1[a5(0x11f)][a6(0x160) + a5(0x136)](j, k, l), n = {};
                return n[a5(0x117)] = m, g[a6(0x165)](-0xce * -0x25 + -0x248f + 0x791)[a5(0x171)](n);
            } else {
                f[a6(0x11d)](g);
                const q = {};
                return q[a6(0x11d)] = i[a5(0x14a)], h[a6(0x165)](-0x25e8 + 0x6a * 0x10 + 0x213c)[a5(0x171)](q);
            }
        } catch (q) {
            if (i[a6(0x190)](i[a6(0x156)], i[a6(0x156)]))
                e[a5(0x1ad)][a5(0x11d)](f);
            else {
                console[a6(0x11d)](q);
                const s = {};
                return s[a6(0x11d)] = i[a6(0x14a)], g[a6(0x165)](-0x1a * -0x71 + -0x1207 + 0x7 * 0x137)[a6(0x171)](s);
            }
        }
    };
exports[a2(0x160) + a2(0x136)] = listarMensagens;
const criarMensagem = async (n, p) => {
    const a7 = a3, a8 = a3, q = {};
    q[a7(0x177)] = a8(0x12b) + a8(0x185) + a8(0x18c) + a7(0x1a3) + a7(0x17c), q[a7(0x18f)] = a7(0x12b) + a8(0x105) + a8(0x1ab) + a7(0x129) + a7(0x187), q[a7(0x135)] = a7(0x134) + a7(0x18a) + a8(0x1a5), q[a8(0xfe)] = a8(0x12b) + a7(0x105) + a7(0x140) + a7(0x124), q[a7(0x16e)] = function (s, t) {
        return s !== t;
    }, q[a8(0x172)] = a8(0x10a), q[a7(0x107)] = function (s, t) {
        return s === t;
    }, q[a8(0x152)] = a7(0x18b), q[a8(0x1aa)] = a7(0x1a7), q[a8(0x1a0)] = function (s, t) {
        return s === t;
    }, q[a7(0x116)] = a7(0x158), q[a8(0x12e)] = a7(0x179), q[a7(0x157)] = a8(0x18d), q[a7(0x155)] = a8(0x12f), q[a7(0x126)] = function (s, t) {
        return s !== t;
    }, q[a7(0x19f)] = a7(0x176), q[a7(0x13b)] = a7(0x101), q[a7(0x122)] = a8(0x13f), q[a7(0x164)] = a8(0x184), q[a7(0x17a)] = function (s, t) {
        return s !== t;
    }, q[a8(0x169)] = a7(0x162), q[a8(0x193)] = a8(0x149), q[a8(0x1a8)] = function (s, t) {
        return s > t;
    }, q[a7(0x13e)] = a7(0x145), q[a7(0x1a4)] = function (s, t) {
        return s !== t;
    }, q[a7(0x16b)] = a8(0x120), q[a8(0x173)] = a8(0x112), q[a7(0x170)] = a7(0x139), q[a8(0x12c)] = a7(0x103), q[a7(0x14f)] = a7(0x114), q[a8(0x100)] = a8(0x15b);
    const r = q;
    try {
        const {
                text: s,
                timestamp: t,
                receiverId: u,
                isGroup: v
            } = n[a7(0x133)], {
                id: w,
                tenantId: x
            } = n[a8(0x14e)], y = n[a8(0x14d)], z = (0x1633 + 0x1b1 + 0x2 * -0xbf2, socket_1[a7(0x106)])(), A = {
                'text': s,
                'timestamp': t,
                'receiverId': u,
                'senderId': w,
                'tenantId': x,
                'groupId': null,
                'mediaType': r[a7(0x122)],
                'mediaUrl': undefined,
                'createdAt': new Date(),
                'updatedAt': new Date()
            };
        if (r[a7(0x1a0)](v, !![]) || r[a8(0x107)](v, r[a8(0x164)])) {
            if (r[a8(0x17a)](r[a7(0x169)], r[a8(0x193)]))
                A[a7(0x178)] = undefined, A[a7(0x104)] = u;
            else {
                E[a7(0x11d)](F);
                const N = {};
                return N[a8(0x11d)] = r[a8(0x177)], H[a8(0x165)](-0x300 + 0x119 * 0xd + 0x951 * -0x1)[a8(0x171)](N);
            }
        }
        let B = {};
        if (y && r[a8(0x1a8)](y[a8(0x15a)], 0x14 * -0xda + 0xab8 + -0x2 * -0x328)) {
            if (r[a7(0x107)](r[a7(0x13e)], r[a8(0x13e)]))
                await Promise[a7(0x18e)](y[a7(0x148)](async N => {
                    const a9 = a7, aa = a7, O = {};
                    O[a9(0x143)] = r[a9(0xfe)];
                    const P = O;
                    if (r[a9(0x16e)](r[a9(0x172)], r[a9(0x172)])) {
                        if (!F[a9(0x10f)]) {
                            const R = K[a9(0x137)][aa(0x10b)]('/')[0x195f + -0x2 * -0xdca + -0x34f2][aa(0x10b)](';')[-0xecb + 0xafe + 0x3cd];
                            L[aa(0x10f)] = new m()[a9(0x14c)]() + '.' + R;
                        }
                    } else {
                        try {
                            if (r[aa(0x107)](r[a9(0x152)], r[aa(0x1aa)])) {
                                E[a9(0x11d)](F);
                                const U = {};
                                return U[a9(0x11d)] = r[aa(0x18f)], H[a9(0x165)](-0xfc7 * -0x2 + 0x31a + 0xe * -0x256)[a9(0x171)](U);
                            } else {
                                if (!N[aa(0x10f)]) {
                                    if (r[aa(0x1a0)](r[aa(0x116)], r[a9(0x12e)]))
                                        throw new O(r[a9(0x135)]);
                                    else {
                                        const V = N[a9(0x137)][aa(0x10b)]('/')[-0x25f8 + -0x61 * 0x1f + -0x128 * -0x2b][a9(0x10b)](';')[-0x56 * -0x26 + 0x73c * -0x2 + 0x1b4];
                                        N[aa(0x10f)] = new Date()[a9(0x14c)]() + '.' + V;
                                    }
                                }
                            }
                        } catch (W) {
                            if (r[a9(0x1a0)](r[a9(0x157)], r[a9(0x155)])) {
                                const Y = {};
                                return Y[aa(0x11f)] = J, F && H[aa(0x175)] ? I : Y;
                            } else
                                logger_1[a9(0x1ad)][aa(0x11d)](W);
                        }
                        const R = {
                                ...A,
                                'text': N[aa(0x19a) + 'me'],
                                'mediaUrl': N[a9(0x10f)],
                                'mediaType': N[aa(0x10c)] || N[aa(0x137)][a9(0x102)](0x66d + 0xb55 * 0x1 + 0x1 * -0x11c2, N[a9(0x137)][a9(0x130)]('/'))
                            }, S = await MessageService_1[a9(0x11f)][aa(0x183) + aa(0x168)](R);
                        B = await InternalMessage_1[a9(0x11f)][aa(0x13d)](S['id']);
                        if (!B) {
                            if (r[a9(0x126)](r[aa(0x19f)], r[aa(0x13b)]))
                                throw new Error(r[a9(0x135)]);
                            else {
                                E[a9(0x11d)](F);
                                const Z = {};
                                return Z[aa(0x11d)] = P[a9(0x143)], H[a9(0x165)](-0xf7 * -0x1 + -0xf3 * -0x25 + 0x101 * -0x22)[a9(0x171)](Z);
                            }
                        }
                    }
                }));
            else {
                const O = E[a7(0x137)][a8(0x10b)]('/')[-0x2a5 + 0x1 * -0x2002 + -0x2 * -0x1154][a7(0x10b)](';')[-0x2 * -0xf01 + 0x52d * 0x2 + 0x9 * -0x47c];
                F[a7(0x10f)] = new H()[a7(0x14c)]() + '.' + O;
            }
        } else
            r[a7(0x1a4)](r[a7(0x16b)], r[a7(0x173)]) ? B = await MessageService_1[a8(0x11f)][a7(0x183) + a7(0x168)](A) : (F[a7(0x178)] = H, I[a7(0x104)] = J);
        const C = {};
        C['id'] = B['id'];
        const D = {};
        D[a8(0x188)] = User_1[a8(0x11f)], D['as'] = r[a8(0x170)], D[a8(0xfd)] = [
            'id',
            r[a7(0x12c)]
        ];
        const E = {};
        E[a7(0x188)] = User_1[a7(0x11f)], E['as'] = r[a7(0x14f)], E[a7(0xfd)] = [
            'id',
            r[a7(0x12c)]
        ];
        const F = {};
        F[a8(0x186)] = C, F[a8(0x196)] = [
            D,
            E
        ];
        const G = await InternalMessage_1[a8(0x11f)][a7(0x142)](F), H = {};
        H['id'] = G['id'], H[a7(0x178)] = G[a8(0x178)], H[a7(0x10c)] = G[a7(0x10c)], H[a7(0x11b)] = G[a8(0x11b)], H[a8(0x16f)] = G[a7(0x16f)], H[a8(0x197)] = w, H[a8(0x17b)] = G[a7(0x17b)], H[a8(0x139)] = G[a8(0x139)], H[a8(0x104)] = G[a7(0x104)], H[a8(0x114)] = G[a7(0x114)], H[a8(0x121)] = s;
        const I = {};
        I[a7(0x1a6)] = r[a7(0x100)], I[a8(0x16d)] = H, z[a7(0x15c)](x + (a8(0x17e) + a8(0x19e) + 'no'), I);
        const J = {};
        J['id'] = G['id'], J[a8(0x178)] = u, J[a7(0x197)] = w, J[a7(0x10c)] = G[a8(0x10c)], J[a7(0x17b)] = G[a8(0x17b)], J[a7(0x139)] = G[a8(0x139)], J[a8(0x104)] = G[a8(0x104)], J[a8(0x114)] = G[a7(0x114)], J[a7(0x121)] = s;
        const K = {};
        K[a8(0x1a6)] = r[a7(0x100)], K[a8(0x16d)] = J, z[a7(0x15c)](x + (a8(0x17e) + a8(0x19e) + a8(0x154) + a8(0x118)), K);
        const L = {};
        return L[a7(0x115)] = G, p[a8(0x165)](0x249 * 0xd + -0x16e2 + -0x60a)[a8(0x171)](L);
    } catch (P) {
        console[a7(0x11d)](P);
        const Q = {};
        return Q[a8(0x11d)] = r[a7(0xfe)], p[a7(0x165)](-0x4 * 0x265 + 0xd86 + -0x1fe)[a7(0x171)](Q);
    }
};
exports[a2(0x183) + a3(0x168)] = criarMensagem;
const marcarMensagemNaoLida = async (f, g) => {
    const ab = a2, ac = a3, h = {
            'BvCAp': ab(0x15b),
            'kPPeG': function (i, j) {
                return i(j);
            },
            'voiBr': ab(0x153) + ab(0x15e) + ac(0x195),
            'miIDt': ab(0x12b) + ac(0x185) + ac(0x18c) + ac(0x1a3) + ab(0x17c)
        };
    try {
        const {contactId: i} = f[ab(0x123)], {
                id: j,
                tenantId: k
            } = f[ab(0x14e)], {isGroup: l} = f[ac(0x133)], m = (-0x2 * -0x454 + -0x631 + -0x277 * 0x1, socket_1[ab(0x106)])(), n = {};
        n[ab(0x147)] = j, n[ac(0x197)] = i, n[ab(0x163)] = l, await (-0x4a5 + -0x60b + 0xab0, ReadMessageService_1[ab(0x11f)])(n), m[ac(0x15c)](k + (ac(0x19b) + ab(0x108) + ab(0x161)), {
            'action': h[ab(0x16c)],
            'data': {
                'receiverId': j,
                'isGroup': l,
                'senderId': h[ac(0x1a2)](Number, i)
            }
        });
        const p = {};
        return p[ab(0x15f)] = h[ab(0x132)], g[ac(0x165)](-0x61 * 0x3 + -0xf69 + 0x4 * 0x455)[ac(0x171)](p);
    } catch (q) {
        console[ac(0x11d)](q);
        const r = {};
        return r[ab(0x11d)] = h[ab(0x10e)], g[ab(0x165)](0x2140 + -0x23cd * 0x1 + 0x481)[ab(0x171)](r);
    }
};
exports[a2(0x12a) + a2(0x141) + 'a'] = marcarMensagemNaoLida;
function a() {
    const af = [
        'mediaUrl',
        'wIZRu',
        'json',
        'ByjLa',
        'zEuyf',
        'query',
        '__esModule',
        'ocHhN',
        'UlcKv',
        'receiverId',
        'onTOC',
        'OZzND',
        'timestamp',
        'mo\x20lida.',
        '86ilrhQy',
        ':mensagem-',
        '../service',
        '../models/',
        '957624jYizCZ',
        '21VXgDUF',
        'criarMensa',
        'true',
        '\x20erro\x20ao\x20m',
        'where',
        'ão\x20lidas.',
        'model',
        '332715DLnMxy',
        'NG_MESSAGE',
        'suSzM',
        'arcar\x20a\x20me',
        'tTuYA',
        'all',
        'RnDJB',
        'PNHBy',
        'ervice',
        's/Internal',
        'ZchAS',
        'NwxLT',
        'omo\x20lida.',
        'include',
        'senderId',
        '2674962lSqWvE',
        '504993NiTOIE',
        'originalna',
        ':unread-me',
        '40paSJKl',
        'Message/Re',
        'chat-inter',
        'GaJKV',
        'XRARw',
        '1235248gsgYUM',
        'kPPeG',
        'nsagens\x20co',
        'butfy',
        '_SYSTEM',
        'action',
        'wkUpP',
        'vojfG',
        '14601qPLeFe',
        'abyYo',
        'ontar\x20as\x20m',
        '4923974KKbMGZ',
        'logger',
        '4pzBcTs',
        'attributes',
        'ZNzqZ',
        'ogger',
        'sfRSC',
        'LREkp',
        'substr',
        'name',
        'groupId',
        '\x20erro\x20ao\x20c',
        'getIO',
        'YVyMG',
        'nsagem-cha',
        '../libs/so',
        'TUXJS',
        'split',
        'mediaType',
        'Message/Li',
        'miIDt',
        'filename',
        'eadMessage',
        'ssage',
        'Imupr',
        'value',
        'receiver',
        'mensagem',
        'HzjgS',
        'mensagens',
        'acao',
        'FInKI',
        'Message/Me',
        'mediaName',
        'ensagens.',
        'error',
        'fault',
        'default',
        'bGrUR',
        'text',
        'QWdCt',
        'params',
        'sagem.',
        '../utils/l',
        'omwvU',
        'defineProp',
        'TIBLd',
        'ensagens\x20n',
        'marcarMens',
        'Ocorreu\x20um',
        'qprdF',
        'User',
        'hhNIa',
        'hAXOX',
        'indexOf',
        'stCountUnr',
        'voiBr',
        'body',
        'ERR_CREATI',
        'DFFsf',
        'agens',
        'mimetype',
        'nreadMessa',
        'sender',
        'istar\x20as\x20m',
        'kMCmo',
        'listCountU',
        'findByPk',
        'jtvdY',
        'chat',
        'riar\x20a\x20men',
        'agemNaoLid',
        'findOne',
        'fKdcl',
        'erty',
        'xvTwT',
        'adMessageS',
        'userId',
        'map',
        'TeaRy',
        'BIgqV',
        '__importDe',
        'getTime',
        'files',
        'user',
        'WeAEL',
        'slPHR',
        'cket',
        'flgRW',
        'Mensagems\x20',
        'no-notific',
        'wNKvN',
        'XxUaB',
        'LLzBB',
        'owXaL',
        'ssageServi',
        'length',
        'update',
        'emit',
        '\x20erro\x20ao\x20l',
        'marcadas\x20c',
        'message',
        'listarMens',
        't-interno',
        'twQCZ',
        'isGroup',
        'zYzXC',
        'status',
        'count',
        'InternalMe',
        'gem',
        'sGpKw',
        'oZHaP',
        'xbVeS',
        'BvCAp',
        'data',
        'wXbre'
    ];
    a = function () {
        return af;
    };
    return a();
}
const listCountUnreadMessage = async (f, g) => {
    const ad = a2, ae = a2, h = {};
    h[ad(0x16a)] = ae(0x12b) + ae(0x105) + ad(0x1ab) + ad(0x129) + ad(0x187);
    const i = h;
    try {
        const {id: j} = f[ad(0x14e)], k = await (-0xeba + -0x77d * 0x1 + -0x1637 * -0x1, ListCountUnreadMessage_1[ae(0x11f)])(j), l = {};
        return l[ae(0x166)] = k, g[ad(0x165)](-0x4f * -0xf + -0x17a + -0x1 * 0x25f)[ad(0x171)](l);
    } catch (m) {
        console[ad(0x11d)](m);
        const n = {};
        return n[ae(0x11d)] = i[ad(0x16a)], g[ad(0x165)](-0x17f + -0x14f * -0x9 + -0x42a * 0x2)[ad(0x171)](n);
    }
};
exports[a2(0x13c) + a3(0x138) + 'ge'] = listCountUnreadMessage;