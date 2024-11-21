'use strict';
const a0 = b, a1 = b;
(function (c, d) {
    const Y = b, Z = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(Y(0x1ac)) / (-0x1c7f + 0x123e + 0xa42) + -parseInt(Y(0x1f6)) / (-0x162 + -0x1 * -0x1e49 + 0xd * -0x239) + -parseInt(Y(0x1de)) / (0x16f5 + 0x225 * -0x4 + -0xe5e) + parseInt(Y(0x198)) / (-0x19a7 + -0x11c * 0xe + 0x2933) + -parseInt(Y(0x1ec)) / (0x1ac4 + -0x4d * -0x17 + -0x116 * 0x1f) + -parseInt(Y(0x1b1)) / (-0x20a1 + -0x1744 + 0x23 * 0x199) + -parseInt(Z(0x186)) / (-0x16e + 0x96 + 0x1 * 0xdf) * (-parseInt(Z(0x191)) / (-0x10c3 + -0x54a * -0x1 + 0xb81));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x63e40 + -0x5ba * -0x136 + 0x245f * -0x44));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x1e66 + -0x69 * -0x41 + -0x37b6);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[a0(0x1e2) + a1(0x1f8)] || function (c) {
    const a2 = a0;
    return c && c[a2(0x1dc)] ? c : { 'default': c };
};
const o = {};
o[a1(0x1c2)] = !![], Object[a1(0x19c) + a0(0x1d8)](exports, a0(0x1dc), o), exports[a0(0x176) + a0(0x1f7) + 'ge'] = exports[a0(0x1c1) + a0(0x1fc) + 'a'] = exports[a0(0x1a0) + a1(0x183)] = exports[a0(0x187) + a1(0x16b)] = void (0x21c + 0x8f + -0x1 * 0x2ab);
const socket_1 = require(a1(0x166) + a1(0x1d6)), InternalMessage_1 = __importDefault(require(a0(0x1f4) + a0(0x163) + a0(0x1fd))), User_1 = __importDefault(require(a1(0x1f4) + a1(0x173))), ListCountUnreadMessage_1 = __importDefault(require(a1(0x196) + a0(0x1a7) + a1(0x1a1) + a1(0x174) + a1(0x1d2))), MessageService_1 = __importDefault(require(a1(0x196) + a1(0x1a7) + a1(0x1b5) + a1(0x17f) + 'ce')), ReadMessageService_1 = __importDefault(require(a1(0x196) + a1(0x1a7) + a1(0x192) + a1(0x168) + a0(0x167))), logger_1 = require(a1(0x18e) + a0(0x1ce)), listarMensagens = async (f, g) => {
        const a3 = a1, a4 = a1, h = {};
        h[a3(0x1ff)] = a3(0x200) + a3(0x1e4) + a3(0x1fb), h[a3(0x1af)] = a3(0x169) + a4(0x199) + a3(0x18d) + a4(0x209) + a3(0x170), h[a4(0x1e1)] = function (j, k) {
            return j === k;
        }, h[a3(0x1cd)] = a3(0x161), h[a3(0x1ef)] = a4(0x1c9), h[a4(0x16a)] = a3(0x1d0), h[a4(0x1ed)] = a4(0x1c6), h[a4(0x1bd)] = a3(0x169) + a3(0x203) + a4(0x1b6) + a4(0x17d);
        const i = h;
        try {
            if (i[a3(0x1e1)](i[a4(0x1cd)], i[a3(0x1ef)]))
                throw new d(i[a3(0x1ff)]);
            else {
                const {id: k} = f[a3(0x178)], {userId: l} = f[a4(0x160)], {isGroup: m} = f[a4(0x1ad)], n = await MessageService_1[a3(0x207)][a3(0x187) + a4(0x16b)](k, l, m), p = {};
                return p[a4(0x1d4)] = n, g[a3(0x1f2)](0x1447 + 0x2 * -0x1345 + -0x3 * -0x659)[a4(0x15a)](p);
            }
        } catch (q) {
            if (i[a4(0x1e1)](i[a4(0x16a)], i[a3(0x1ed)])) {
                f[a3(0x182)](g);
                const s = {};
                return s[a4(0x182)] = i[a4(0x1af)], h[a4(0x1f2)](0x3e3 * -0x8 + 0x3 * -0x55d + 0x3123)[a4(0x15a)](s);
            } else {
                console[a4(0x182)](q);
                const s = {};
                return s[a4(0x182)] = i[a3(0x1bd)], g[a3(0x1f2)](-0x2561 * 0x1 + 0x1a82 + -0x7 * -0x1d5)[a3(0x15a)](s);
            }
        }
    };
exports[a1(0x187) + a0(0x16b)] = listarMensagens;
const criarMensagem = async (n, p) => {
    const a5 = a1, a6 = a0, q = {};
    q[a5(0x1dd)] = a6(0x169) + a5(0x203) + a6(0x1b6) + a6(0x17d), q[a6(0x15d)] = a6(0x169) + a6(0x1f3) + a6(0x18a) + a6(0x1b4) + a5(0x1be), q[a6(0x1ab)] = function (s, t) {
        return s !== t;
    }, q[a5(0x1bb)] = a5(0x1c4), q[a6(0x1b0)] = a5(0x18b), q[a5(0x195)] = function (s, t) {
        return s !== t;
    }, q[a5(0x1b2)] = a5(0x19a), q[a6(0x1c3)] = a6(0x1a5), q[a5(0x18c)] = function (s, t) {
        return s === t;
    }, q[a5(0x15b)] = a5(0x172), q[a5(0x184)] = a6(0x15f), q[a6(0x1df)] = function (s, t) {
        return s !== t;
    }, q[a6(0x1c7)] = a6(0x1a2), q[a6(0x1ae)] = a5(0x181), q[a6(0x19d)] = a5(0x1e9), q[a6(0x1cf)] = a6(0x200) + a5(0x1e4) + a6(0x1fb), q[a5(0x1db)] = a6(0x169) + a6(0x1f3) + a5(0x164) + a6(0x193), q[a5(0x17a)] = a5(0x16d), q[a5(0x1f5)] = function (s, t) {
        return s === t;
    }, q[a6(0x1e6)] = a5(0x16e), q[a6(0x1a4)] = function (s, t) {
        return s === t;
    }, q[a6(0x1da)] = a5(0x1d1), q[a5(0x17c)] = a6(0x190), q[a6(0x18f)] = function (s, t) {
        return s > t;
    }, q[a5(0x206)] = function (s, t) {
        return s === t;
    }, q[a5(0x1ee)] = a6(0x1a3), q[a5(0x1ea)] = a6(0x1d3), q[a6(0x1cc)] = a5(0x1ba), q[a5(0x177)] = a5(0x1e0), q[a5(0x1a8)] = a5(0x19b), q[a5(0x1c8)] = a6(0x1a9);
    const r = q;
    try {
        const {
                text: s,
                timestamp: t,
                receiverId: u,
                isGroup: v
            } = n[a6(0x1e3)], {
                id: w,
                tenantId: x
            } = n[a5(0x178)], y = n[a5(0x162)], z = (-0x2572 + -0xc1 + -0x7 * -0x575, socket_1[a5(0x1f0)])(), A = {
                'text': s,
                'timestamp': t,
                'receiverId': u,
                'senderId': w,
                'tenantId': x,
                'groupId': null,
                'mediaType': r[a6(0x17a)],
                'mediaUrl': undefined,
                'createdAt': new Date(),
                'updatedAt': new Date()
            };
        if (r[a6(0x1f5)](v, !![]) || r[a6(0x1f5)](v, r[a5(0x1e6)])) {
            if (r[a5(0x1a4)](r[a6(0x1da)], r[a6(0x17c)])) {
                E[a6(0x182)](F);
                const N = {};
                return N[a5(0x182)] = r[a6(0x1dd)], H[a6(0x1f2)](0x9dd * 0x1 + -0x209f * 0x1 + 0x1 * 0x18b6)[a5(0x15a)](N);
            } else
                A[a6(0x201)] = undefined, A[a6(0x197)] = u;
        }
        let B = {};
        if (y && r[a5(0x18f)](y[a5(0x188)], -0x1462 * -0x1 + -0x1ef9 + 0xa97)) {
            if (r[a6(0x206)](r[a5(0x1ee)], r[a6(0x1ee)]))
                await Promise[a6(0x208)](y[a6(0x205)](async N => {
                    const a7 = a6, a8 = a6;
                    if (r[a7(0x1ab)](r[a7(0x1bb)], r[a8(0x1b0)])) {
                        try {
                            if (r[a7(0x195)](r[a7(0x1b2)], r[a8(0x1c3)])) {
                                if (!N[a8(0x1e7)]) {
                                    if (r[a7(0x18c)](r[a7(0x15b)], r[a7(0x184)]))
                                        D[a8(0x1cb)][a8(0x182)](E);
                                    else {
                                        const R = N[a7(0x1ca)][a7(0x19f)]('/')[-0x1971 + 0x71 * -0x53 + 0x3e15][a8(0x19f)](';')[-0x2034 + -0x1d59 * -0x1 + 0x2b * 0x11];
                                        N[a8(0x1e7)] = new Date()[a8(0x1b7)]() + '.' + R;
                                    }
                                }
                            } else
                                F[a7(0x201)] = H, I[a8(0x197)] = J;
                        } catch (T) {
                            if (r[a8(0x1df)](r[a8(0x1c7)], r[a8(0x1c7)])) {
                                E[a7(0x182)](F);
                                const V = {};
                                return V[a8(0x182)] = r[a7(0x15d)], H[a8(0x1f2)](-0x680 + 0x1096 + -0x822)[a7(0x15a)](V);
                            } else
                                logger_1[a8(0x1cb)][a8(0x182)](T);
                        }
                        const O = {
                                ...A,
                                'text': N[a7(0x17e) + 'me'],
                                'mediaUrl': N[a8(0x1e7)],
                                'mediaType': N[a8(0x1d9)] || N[a7(0x1ca)][a7(0x1eb)](-0x1d * -0x136 + 0x283 * 0xd + -0x43c5 * 0x1, N[a7(0x1ca)][a7(0x17b)]('/'))
                            }, P = await MessageService_1[a7(0x207)][a8(0x1a0) + a8(0x183)](O);
                        B = await InternalMessage_1[a7(0x207)][a7(0x1f1)](P['id']);
                        if (!B) {
                            if (r[a7(0x1df)](r[a7(0x1ae)], r[a7(0x19d)]))
                                throw new Error(r[a7(0x1cf)]);
                            else {
                                if (!F[a8(0x1e7)]) {
                                    const W = K[a7(0x1ca)][a7(0x19f)]('/')[0x1a * -0x10f + -0x1c26 + -0x128f * -0x3][a8(0x19f)](';')[-0x27 * 0xb3 + 0x1384 + 0x5 * 0x18d];
                                    L[a8(0x1e7)] = new m()[a8(0x1b7)]() + '.' + W;
                                }
                            }
                        }
                    } else {
                        const X = {};
                        return X[a8(0x207)] = J, F && H[a8(0x1dc)] ? I : X;
                    }
                }));
            else {
                const O = E[a5(0x1ca)][a6(0x19f)]('/')[0x7 * 0x545 + 0x109 * -0x22 + -0x1b * 0x10][a6(0x19f)](';')[-0x1383 + -0x2414 + 0x3797];
                F[a5(0x1e7)] = new H()[a5(0x1b7)]() + '.' + O;
            }
        } else {
            if (r[a6(0x1a4)](r[a6(0x1ea)], r[a5(0x1ea)]))
                B = await MessageService_1[a5(0x207)][a6(0x1a0) + a5(0x183)](A);
            else {
                E[a5(0x182)](F);
                const P = {};
                return P[a5(0x182)] = r[a6(0x1db)], H[a6(0x1f2)](0x505 * -0x1 + -0x1efd + 0x25f6)[a5(0x15a)](P);
            }
        }
        const C = {};
        C['id'] = B['id'];
        const D = {};
        D[a5(0x1b8)] = User_1[a6(0x207)], D['as'] = r[a5(0x1cc)], D[a5(0x15e)] = [
            'id',
            r[a6(0x177)]
        ];
        const E = {};
        E[a5(0x1b8)] = User_1[a6(0x207)], E['as'] = r[a6(0x1a8)], E[a6(0x15e)] = [
            'id',
            r[a5(0x177)]
        ];
        const F = {};
        F[a6(0x189)] = C, F[a5(0x20a)] = [
            D,
            E
        ];
        const G = await InternalMessage_1[a5(0x207)][a5(0x1c5)](F), H = {};
        H['id'] = G['id'], H[a6(0x201)] = G[a6(0x201)], H[a6(0x1d9)] = G[a5(0x1d9)], H[a5(0x1bc)] = G[a6(0x1bc)], H[a6(0x1fa)] = G[a5(0x1fa)], H[a5(0x1d5)] = w, H[a6(0x1bf)] = G[a6(0x1bf)], H[a5(0x1ba)] = G[a6(0x1ba)], H[a5(0x197)] = G[a5(0x197)], H[a6(0x19b)] = G[a6(0x19b)], H[a6(0x171)] = s;
        const I = {};
        I[a5(0x1e5)] = r[a6(0x1c8)], I[a6(0x1a6)] = H, z[a6(0x1d7)](x + (a6(0x175) + a5(0x180) + 'no'), I);
        const J = {};
        J['id'] = G['id'], J[a6(0x201)] = u, J[a5(0x1d5)] = w, J[a5(0x1d9)] = G[a5(0x1d9)], J[a5(0x1bf)] = G[a6(0x1bf)], J[a6(0x1ba)] = G[a5(0x1ba)], J[a6(0x197)] = G[a6(0x197)], J[a5(0x19b)] = G[a5(0x19b)], J[a5(0x171)] = s;
        const K = {};
        K[a6(0x1e5)] = r[a5(0x1c8)], K[a6(0x1a6)] = J, z[a6(0x1d7)](x + (a5(0x175) + a5(0x180) + a5(0x179) + a5(0x1fe)), K);
        const L = {};
        return L[a5(0x159)] = G, p[a5(0x1f2)](-0x3e5 + -0xcd3 + 0x1181)[a6(0x15a)](L);
    } catch (P) {
        console[a6(0x182)](P);
        const Q = {};
        return Q[a5(0x182)] = r[a6(0x1db)], p[a6(0x1f2)](-0x3 * -0x506 + -0x26ff + 0x19e1)[a5(0x15a)](Q);
    }
};
exports[a0(0x1a0) + a0(0x183)] = criarMensagem;
function a() {
    const ad = [
        'Message/Re',
        'sagem.',
        't-interno',
        'NXGcx',
        '../service',
        'groupId',
        '891460DQFHru',
        '\x20erro\x20ao\x20m',
        'FNbVy',
        'receiver',
        'defineProp',
        'pOsoH',
        'marcadas\x20c',
        'split',
        'criarMensa',
        'Message/Li',
        'sOxFN',
        'guzyr',
        'AKTOe',
        'SvGUy',
        'data',
        's/Internal',
        'vrdoC',
        'update',
        'xVcNW',
        'fMPcp',
        '227733oxFWeJ',
        'query',
        'yCOrs',
        'aOImx',
        'hrLek',
        '746172EHLDlk',
        'WUAUd',
        'omo\x20lida.',
        'ensagens\x20n',
        'Message/Me',
        'istar\x20as\x20m',
        'getTime',
        'model',
        'userId',
        'sender',
        'kokAa',
        'mediaName',
        'ZMTmz',
        'ão\x20lidas.',
        'timestamp',
        'Mensagems\x20',
        'marcarMens',
        'value',
        'JyXsn',
        'YmoOZ',
        'findOne',
        'DlChs',
        'RttjM',
        'fVZCt',
        'TDVwp',
        'mimetype',
        'logger',
        'DgeMP',
        'TnXkk',
        'ogger',
        'ZHckD',
        'fpEyt',
        'ZkMAJ',
        'eadMessage',
        'UMvKd',
        'mensagens',
        'senderId',
        'cket',
        'emit',
        'erty',
        'mediaType',
        'omvhv',
        'RqkXR',
        '__esModule',
        'PQyKz',
        '653667uCWByc',
        'lEDPc',
        'name',
        'hXttI',
        '__importDe',
        'body',
        'NG_MESSAGE',
        'action',
        'fZPti',
        'filename',
        'lOcJk',
        'yLjjw',
        'iozoA',
        'substr',
        '1611690MOXqFC',
        'sfGQw',
        'CDuJn',
        'rbZmx',
        'getIO',
        'findByPk',
        'status',
        '\x20erro\x20ao\x20c',
        '../models/',
        'ctWwp',
        '914214dAFfhw',
        'nreadMessa',
        'fault',
        'QJjbc',
        'mediaUrl',
        '_SYSTEM',
        'agemNaoLid',
        'ssage',
        'acao',
        'tByrP',
        'ERR_CREATI',
        'receiverId',
        'nsagem-cha',
        '\x20erro\x20ao\x20l',
        'count',
        'map',
        'jHXTk',
        'default',
        'all',
        'nsagens\x20co',
        'include',
        'mensagem',
        'json',
        'uUjWy',
        'isGroup',
        'kIpMV',
        'attributes',
        'aGwEn',
        'params',
        'AWEpV',
        'files',
        'InternalMe',
        'riar\x20a\x20men',
        ':unread-me',
        '../libs/so',
        'ervice',
        'adMessageS',
        'Ocorreu\x20um',
        'eGtus',
        'agens',
        'message',
        'chat',
        'true',
        'DNurX',
        'mo\x20lida.',
        'text',
        'wdQou',
        'User',
        'stCountUnr',
        ':mensagem-',
        'listCountU',
        'yXnpO',
        'user',
        'no-notific',
        'dwUOp',
        'indexOf',
        'NarTK',
        'ensagens.',
        'originalna',
        'ssageServi',
        'chat-inter',
        'CwxCM',
        'error',
        'gem',
        'NtJyC',
        'Lwbke',
        '4942UHGKqq',
        'listarMens',
        'length',
        'where',
        'ontar\x20as\x20m',
        'vwMtu',
        'bmRHk',
        'arcar\x20a\x20me',
        '../utils/l',
        'Gvcap',
        'DmCQj',
        '10216FjQVxc'
    ];
    a = function () {
        return ad;
    };
    return a();
}
const marcarMensagemNaoLida = async (f, g) => {
    const a9 = a0, aa = a1, h = {
            'DNurX': a9(0x1a9),
            'lOcJk': function (i, j) {
                return i(j);
            },
            'xVcNW': a9(0x1c0) + a9(0x19e) + a9(0x1b3),
            'QJjbc': a9(0x169) + aa(0x199) + aa(0x18d) + a9(0x209) + a9(0x170)
        };
    try {
        const {contactId: i} = f[aa(0x160)], {
                id: j,
                tenantId: k
            } = f[a9(0x178)], {isGroup: l} = f[a9(0x1e3)], m = (-0x1 * -0x2492 + 0x1 * 0x2193 + -0x1 * 0x4625, socket_1[a9(0x1f0)])(), n = {};
        n[aa(0x1b9)] = j, n[a9(0x1d5)] = i, n[a9(0x15c)] = l, await (-0x21b + -0x2a5 + -0x26 * -0x20, ReadMessageService_1[aa(0x207)])(n), m[a9(0x1d7)](k + (a9(0x165) + aa(0x202) + a9(0x194)), {
            'action': h[aa(0x16f)],
            'data': {
                'receiverId': j,
                'isGroup': l,
                'senderId': h[aa(0x1e8)](Number, i)
            }
        });
        const p = {};
        return p[a9(0x16c)] = h[a9(0x1aa)], g[a9(0x1f2)](-0x15 * -0x6 + 0x1ae + 0x59 * -0x4)[aa(0x15a)](p);
    } catch (q) {
        console[a9(0x182)](q);
        const r = {};
        return r[aa(0x182)] = h[a9(0x1f9)], g[a9(0x1f2)](-0x2ed * 0x1 + 0xc6b + -0x78a)[aa(0x15a)](r);
    }
};
exports[a0(0x1c1) + a0(0x1fc) + 'a'] = marcarMensagemNaoLida;
const listCountUnreadMessage = async (f, g) => {
    const ab = a0, ac = a1, h = {};
    h[ab(0x185)] = ac(0x169) + ab(0x1f3) + ac(0x18a) + ac(0x1b4) + ac(0x1be);
    const i = h;
    try {
        const {id: j} = f[ac(0x178)], k = await (-0x5 * -0x129 + -0x3 * 0x411 + 0x666, ListCountUnreadMessage_1[ab(0x207)])(j), l = {};
        return l[ac(0x204)] = k, g[ac(0x1f2)](0xb46 + 0x1f05 + -0x2983)[ac(0x15a)](l);
    } catch (m) {
        console[ac(0x182)](m);
        const n = {};
        return n[ac(0x182)] = i[ab(0x185)], g[ac(0x1f2)](0x129f + 0x3fa + -0x14a5)[ac(0x15a)](n);
    }
};
exports[a0(0x176) + a1(0x1f7) + 'ge'] = listCountUnreadMessage;