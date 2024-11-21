'use strict';
const M = b, N = b;
(function (c, d) {
    const K = b, L = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(K(0x2b7)) / (0xcf1 * 0x3 + 0xc3 * -0x5 + -0x2303 * 0x1) + parseInt(L(0x285)) / (-0x13ae + 0xe5f * 0x1 + 0x551) * (-parseInt(L(0x297)) / (-0x1e6a * -0x1 + -0x148e + -0x9d9)) + parseInt(K(0x2a0)) / (0xce5 * 0x2 + 0x6 * 0x249 + -0x277c) + parseInt(K(0x200)) / (-0xd5 * -0xe + 0x1b92 + -0x2733) + -parseInt(K(0x29e)) / (-0x6cd * 0x1 + -0x1100 + 0x141 * 0x13) * (parseInt(K(0x20e)) / (-0x345 * -0x3 + -0x6a * -0x4c + -0x2940)) + parseInt(K(0x233)) / (-0xd * 0x5b + 0x3 * 0x28f + -0x306) * (-parseInt(L(0x25c)) / (0x107 * 0x1c + 0x20b2 + -0x55 * 0xb9)) + parseInt(K(0x292)) / (-0x2669 + -0x16 * -0xe3 + 0x12f1) * (parseInt(L(0x290)) / (0x7c * -0x33 + -0x231e + 0x3bdd));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5c7f5 * 0x1 + 0x26c69 * 0x7 + -0xcb6b9 * 0x1));
var __importDefault = this && this[M(0x271) + M(0x216)] || function (c) {
    const O = N;
    return c && c[O(0x294)] ? c : { 'default': c };
};
const u = {};
u[N(0x29f)] = !![], Object[M(0x283) + N(0x2ab)](exports, N(0x294), u), exports[N(0x26e) + 'n'] = exports[M(0x267)] = exports[M(0x24e)] = exports[N(0x21c)] = exports[N(0x206)] = exports[M(0x2b1) + N(0x1f8)] = exports[N(0x1f4)] = void (-0xbe3 + -0x2e9 + 0xecc);
const AppError_1 = __importDefault(require(N(0x28e) + M(0x1f6))), DeleteMessageSystem_1 = __importDefault(require(N(0x28b) + M(0x23a) + M(0x265))), SetTicketMessagesAsRead_1 = __importDefault(require(N(0x28b) + M(0x27a) + N(0x239) + N(0x22b))), Message_1 = __importDefault(require(M(0x237) + N(0x259))), Ticket_1 = __importDefault(require(N(0x237) + N(0x213))), CreateForwardMessageService_1 = __importDefault(require(M(0x21d) + M(0x238) + M(0x218) + M(0x2a3) + N(0x257) + M(0x223))), CreateMessageSystemService_1 = __importDefault(require(N(0x21d) + N(0x238) + M(0x218) + N(0x2aa) + M(0x293) + M(0x20b))), ListMessagesService_1 = __importDefault(require(N(0x21d) + M(0x238) + N(0x2a4) + N(0x256) + N(0x273))), ShowTicketService_1 = __importDefault(require(N(0x21d) + N(0x2b2) + N(0x289) + N(0x25e) + N(0x20b))), logger_1 = require(N(0x299) + N(0x21b)), EditWhatsAppMessage_1 = __importDefault(require(M(0x21d) + N(0x20a) + N(0x205) + M(0x29c) + M(0x210))), SendWhatsAppReaction_1 = __importDefault(require(M(0x21d) + N(0x20a) + M(0x2ac) + N(0x2ae) + M(0x220))), index = async (e, f) => {
        const P = M, Q = M, {ticketId: g} = e[P(0x2a6)], {pageNumber: h} = e[P(0x2ad)], {tenantId: i} = e[P(0x29b)], j = {};
        j[Q(0x28a)] = h, j[P(0x27d)] = g, j[Q(0x221)] = i;
        const {
            count: k,
            messages: l,
            messagesOffLine: m,
            ticket: n,
            hasMore: o
        } = await (-0xd * -0x80 + 0x2154 + 0x9f5 * -0x4, ListMessagesService_1[P(0x1f5)])(j);
        (-0x1 * 0x1307 + -0x6c * 0x39 + -0x2b13 * -0x1, SetTicketMessagesAsRead_1[P(0x1f5)])(n);
        const p = {};
        return p[Q(0x240)] = k, p[P(0x250)] = l, p[P(0x20d) + P(0x26c)] = m, p[Q(0x1f9)] = n, p[P(0x282)] = o, f[P(0x22c)](p);
    };
exports[M(0x1f4)] = index;
const ListCountMensagens = async (f, g) => {
    const R = M, S = M, h = {};
    h[R(0x258)] = R(0x2a5) + R(0x234) + S(0x207), h[S(0x298)] = function (j, k) {
        return j !== k;
    }, h[S(0x236)] = R(0x26b), h[S(0x22d)] = S(0x272), h[S(0x24d)] = function (j, k) {
        return j !== k;
    }, h[S(0x24f)] = R(0x24b), h[S(0x2af)] = S(0x255), h[S(0x211)] = R(0x201) + S(0x262) + R(0x2b5) + S(0x27c);
    const i = h;
    try {
        if (i[S(0x298)](i[S(0x236)], i[S(0x22d)])) {
            const j = await Message_1[R(0x1f5)][R(0x240)](), k = {};
            return k[R(0x240)] = j, g[R(0x22c)](k);
        } else {
            const m = {};
            return m[R(0x1f5)] = j, g && h[R(0x294)] ? i : m;
        }
    } catch (m) {
        if (i[R(0x24d)](i[R(0x24f)], i[S(0x2af)])) {
            const n = {};
            return n[R(0x274)] = i[S(0x211)], g[S(0x24a)](0x1 * 0x23e3 + 0x18 + 0x1 * -0x2207)[R(0x22c)](n);
        } else
            e[R(0x264)](i[R(0x258)], f);
    }
};
exports[N(0x2b1) + M(0x1f8)] = ListCountMensagens;
const store = async (g, h) => {
    const T = M, U = M, i = {};
    i[T(0x2b9)] = T(0x245) + U(0x27b) + U(0x22f), i[U(0x226)] = function (r, s) {
        return r instanceof s;
    }, i[U(0x25a)] = T(0x245) + U(0x27b) + U(0x2ba), i[U(0x296)] = U(0x2a9) + T(0x225) + U(0x222), i[U(0x249)] = U(0x2a9) + U(0x225) + T(0x241), i[U(0x269)] = function (r, s) {
        return r === s;
    }, i[U(0x235)] = T(0x22a) + U(0x1fa), i[U(0x21e)] = T(0x201) + U(0x262) + U(0x2b5) + T(0x27c), i[U(0x1fe)] = function (r, s) {
        return r !== s;
    }, i[T(0x224)] = U(0x284), i[T(0x1f3)] = T(0x29a), i[U(0x261)] = T(0x23b), i[U(0x203)] = U(0x279), i[T(0x287)] = T(0x2b6) + U(0x281) + 'G', i[T(0x202)] = U(0x227) + T(0x230) + T(0x248), i[U(0x29d)] = T(0x21a), i[U(0x1fd)] = T(0x263), i[T(0x286)] = U(0x268), i[U(0x215)] = U(0x2a5) + T(0x234) + U(0x207), i[U(0x25f)] = function (r, s) {
        return r === s;
    }, i[U(0x2b3)] = T(0x26f), i[U(0x28f)] = T(0x20c), i[U(0x278)] = T(0x232), i[U(0x2a7)] = function (r, s) {
        return r > s;
    }, i[U(0x295)] = T(0x275), i[U(0x2a8)] = T(0x1ff), i[T(0x28d)] = T(0x21f), i[U(0x2b4)] = T(0x254), i[T(0x280)] = U(0x214);
    const j = i, {ticketId: k} = g[U(0x2a6)], {
            tenantId: l,
            id: m
        } = g[T(0x29b)], n = g[U(0x209)], o = g[T(0x1f7)], p = {};
    p['id'] = k, p[U(0x221)] = l;
    const q = await (0x33b * 0x2 + -0xd9d + -0x727 * -0x1, ShowTicketService_1[U(0x1f5)])(p);
    try {
        if (j[U(0x269)](j[T(0x29d)], j[T(0x1fd)])) {
            k[U(0x274)](j[T(0x2b9)], l);
            if (j[U(0x226)](m, n[U(0x1f5)])) {
                const t = {};
                return t[T(0x27e)] = t[U(0x27e)], s[U(0x24a)](-0x7f * 0x36 + 0x4 * -0x4cd + 0x2f8e)[U(0x23d)](t);
            }
            const s = {};
            return s[T(0x27e)] = j[T(0x25a)], s[U(0x274)] = r[U(0x27e)], q[U(0x24a)](0x48d + 0x2179 + -0x2412)[U(0x23d)](s);
        } else
            await (0x396 + -0x24a6 + 0x2110, SetTicketMessagesAsRead_1[U(0x1f5)])(q);
    } catch (s) {
        if (j[T(0x1fe)](j[U(0x286)], j[U(0x286)])) {
            f[T(0x264)](j[T(0x296)], g);
            const v = {};
            return v[T(0x27e)] = j[U(0x249)], h[U(0x24a)](-0x4a7 * -0x2 + -0xd37 + 0x119 * 0x5)[T(0x23d)](v);
        } else
            console[T(0x264)](j[U(0x215)], s);
    }
    try {
        if (j[T(0x25f)](j[T(0x2b3)], j[U(0x2b3)])) {
            if (n[T(0x252)]) {
                if (j[T(0x269)](j[T(0x28f)], j[T(0x278)])) {
                    if (j[T(0x226)](i, j[T(0x1f5)]) && j[U(0x269)](k[T(0x27e)], j[U(0x235)])) {
                        const w = {};
                        return w[U(0x274)] = p[U(0x27e)], o[T(0x24a)](-0x108a + -0x2 * -0x108b + -0x3bf * 0x4)[T(0x22c)](w);
                    }
                    throw n;
                } else {
                    const w = {};
                    w[T(0x228)] = n, w[U(0x221)] = l, w[T(0x204)] = o, w[U(0x1f9)] = q, w[T(0x20f)] = m, w[T(0x219) + 'te'] = n[T(0x219) + 'te'], w[T(0x231)] = n[T(0x231)] || j[T(0x261)], w[U(0x24a)] = j[T(0x203)], w[U(0x270)] = n[T(0x270)], await (0x1 * -0x9c + -0x2646 + 0x26e2, CreateMessageSystemService_1[U(0x1f5)])(w);
                }
            } else {
                if (o && j[T(0x2a7)](o[U(0x2a1)], 0x1b9a + 0xe94 + 0x1 * -0x2a2e)) {
                    if (j[T(0x269)](j[T(0x295)], j[U(0x2a8)])) {
                        const y = {};
                        return y[T(0x27e)] = y[U(0x27e)], e[T(0x24a)](0x1e77 + -0x3a * -0x61 + -0x32e1)[T(0x23d)](y);
                    } else
                        o[T(0x25d)](async (y, z) => {
                            const V = T, W = U;
                            if (j[V(0x1fe)](j[W(0x224)], j[V(0x1f3)])) {
                                const A = {
                                    'fromMe': n[V(0x242)],
                                    'body': Array[W(0x266)](n[W(0x209)]) ? n[W(0x209)][z] : n[V(0x209)],
                                    'idFront': Array[W(0x266)](n[V(0x270)]) ? n[V(0x270)][z] : n[V(0x270)],
                                    'read': ![]
                                };
                                await (-0x10 * 0x1f3 + 0x4 * 0x262 + 0x15a8, CreateMessageSystemService_1[V(0x1f5)])({
                                    'msg': A,
                                    'tenantId': l,
                                    'medias': [y],
                                    'ticket': q,
                                    'userId': m,
                                    'scheduleDate': n[W(0x219) + 'te'] ? new Date(Array[V(0x266)](n[W(0x219) + 'te']) ? n[V(0x219) + 'te'][z] : n[W(0x219) + 'te']) : undefined,
                                    'sendType': n[V(0x231)] || j[V(0x261)],
                                    'status': j[V(0x203)],
                                    'idFront': Array[V(0x266)](n[V(0x270)]) ? n[W(0x270)][z] : n[V(0x270)]
                                });
                            } else {
                                const C = {};
                                return C[W(0x274)] = j[V(0x21e)], p[W(0x24a)](-0x1 * 0x1850 + -0xc * -0x177 + 0x8b0)[W(0x22c)](C);
                            }
                        });
                } else {
                    if (j[T(0x25f)](j[T(0x28d)], j[T(0x2b4)])) {
                        const z = {};
                        return z[T(0x274)] = z[T(0x27e)], e[U(0x24a)](0x2244 + -0x1 * 0x12bf + -0xdf5)[U(0x22c)](z);
                    } else {
                        const z = {};
                        z[T(0x228)] = n, z[T(0x221)] = l, z[T(0x204)] = o, z[U(0x1f9)] = q, z[T(0x20f)] = m, z[T(0x219) + 'te'] = n[T(0x219) + 'te'], z[T(0x231)] = n[T(0x231)] || j[U(0x261)], z[U(0x24a)] = j[T(0x203)], z[T(0x270)] = n[U(0x270)], await (-0xb2 * 0x4 + -0x11af + -0x1f * -0xa9, CreateMessageSystemService_1[T(0x1f5)])(z);
                    }
                }
            }
        } else {
            f[U(0x2b0)][T(0x274)](T(0x2b6) + U(0x281) + T(0x247) + g);
            throw new h[(U(0x1f5))](j[U(0x287)]);
        }
    } catch (B) {
        j[U(0x269)](j[T(0x280)], j[U(0x280)]) ? console[T(0x264)](j[U(0x202)], B) : e[U(0x264)](j[U(0x202)], f);
    }
    return h[U(0x23d)]();
};
exports[M(0x206)] = store;
const edit = async (f, g) => {
    const X = M, Y = N, h = {};
    h[X(0x24c)] = function (n, o) {
        return n instanceof o;
    }, h[X(0x244)] = function (n, o) {
        return n === o;
    }, h[X(0x23f)] = Y(0x22a) + Y(0x1fa);
    const i = h, {messageId: j} = f[X(0x2a6)], {tenantId: k} = f[X(0x29b)], l = +k, {body: m} = f[Y(0x209)];
    try {
        const n = {};
        n[Y(0x253)] = j, n[X(0x221)] = l, n[X(0x209)] = m;
        const {
            ticketId: o,
            message: p
        } = await (0x6 * 0x5b8 + 0x1 * 0x1e0b + 0xcdf * -0x5, EditWhatsAppMessage_1[Y(0x1f5)])(n);
    } catch (q) {
        if (i[Y(0x24c)](q, AppError_1[Y(0x1f5)]) && i[X(0x244)](q[Y(0x27e)], i[X(0x23f)])) {
            const r = {};
            return r[Y(0x274)] = q[Y(0x27e)], g[X(0x24a)](-0x4e4 + -0x10e1 + -0x21 * -0xb5)[Y(0x22c)](r);
        }
        throw q;
    }
    return g[Y(0x23d)]();
};
exports[M(0x21c)] = edit;
const remove = async (d, e) => {
    const Z = N, a0 = M, f = {};
    f[Z(0x260)] = a0(0x2b6) + Z(0x281) + 'G';
    const g = f, {messageId: h} = d[Z(0x2a6)], {tenantId: i} = d[a0(0x29b)];
    try {
        await (0x23f6 + -0x1772 * 0x1 + -0xc84, DeleteMessageSystem_1[Z(0x1f5)])(d[Z(0x209)]['id'], h, i);
    } catch (j) {
        logger_1[a0(0x2b0)][Z(0x274)](Z(0x2b6) + a0(0x281) + Z(0x247) + j);
        throw new AppError_1[(a0(0x1f5))](g[a0(0x260)]);
    }
    return e[Z(0x23d)]();
};
exports[N(0x24e)] = remove;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x187 * 0x19 + 0xcf7 + -0x217 * -0xd);
        let h = e[f];
        return h;
    }, b(c, d);
}
const forward = async (d, e) => {
    const a1 = M, a2 = N, f = d[a1(0x209)], {user: g} = d;
    for (const h of f[a2(0x250)]) {
        const i = {};
        i[a2(0x20f)] = g['id'], i[a1(0x221)] = g[a2(0x221)], i[a1(0x27e)] = h, i[a1(0x291)] = f[a2(0x291)], i[a2(0x229) + a1(0x212)] = h[a2(0x27d)], await (-0x404 + -0x1 * -0x1337 + -0xf33, CreateForwardMessageService_1[a2(0x1f5)])(i);
    }
    return e[a2(0x23d)]();
};
exports[M(0x267)] = forward;
const addReaction = async (m, n) => {
    const a3 = N, a4 = M, o = {};
    o[a3(0x23c)] = a3(0x291), o[a4(0x251)] = a3(0x2a9) + a4(0x225) + a3(0x222), o[a4(0x243)] = a4(0x2a9) + a4(0x225) + a4(0x241), o[a4(0x2b8)] = a4(0x1fb) + a3(0x28c) + a4(0x23e), o[a3(0x276)] = a4(0x245) + a3(0x27b) + a3(0x22f), o[a4(0x1fc)] = function (q, r) {
        return q instanceof r;
    }, o[a3(0x217)] = a3(0x245) + a4(0x27b) + a4(0x2ba);
    const p = o;
    try {
        const {
                messageId: q,
                ticketId: r,
                reaction: s
            } = m[a3(0x209)], {
                tenantId: t,
                id: v
            } = m[a4(0x29b)], w = {};
        w[a3(0x253)] = q;
        const x = {};
        x[a3(0x288)] = w;
        const y = await Message_1[a4(0x1f5)][a4(0x277)](x), z = {};
        z[a4(0x26a)] = [p[a4(0x23c)]];
        const A = await Ticket_1[a4(0x1f5)][a3(0x27f)](r, z);
        if (!y) {
            console[a4(0x264)](p[a3(0x251)], q);
            const G = {};
            return G[a3(0x27e)] = p[a4(0x243)], n[a3(0x24a)](0xe9 + 0x14a + 0x1 * -0x9f)[a3(0x23d)](G);
        }
        const B = {};
        B[a3(0x253)] = q, B[a4(0x1f9)] = A, B[a4(0x2a2) + 'pe'] = s;
        const C = await (0x127f + -0x97a + 0x905 * -0x1, SendWhatsAppReaction_1[a4(0x1f5)])(B), D = {};
        D[a3(0x22e)] = s, D[a4(0x20f)] = v;
        const E = await y[a3(0x25b)]({
                'reactions': [
                    ...y[a4(0x246)],
                    D
                ]
            }), F = {};
        return F[a4(0x27e)] = p[a3(0x2b8)], F[a3(0x26d) + a4(0x208)] = C, F[a3(0x246)] = E[a3(0x246)], n[a4(0x24a)](-0x1c4d + 0xfcd * 0x1 + 0xd48)[a4(0x23d)](F);
    } catch (H) {
        console[a3(0x274)](p[a4(0x276)], H);
        if (p[a3(0x1fc)](H, AppError_1[a3(0x1f5)])) {
            const J = {};
            return J[a4(0x27e)] = H[a3(0x27e)], n[a3(0x24a)](-0x10b + 0x19bf + -0x2 * 0xb92)[a3(0x23d)](J);
        }
        const I = {};
        return I[a4(0x27e)] = p[a4(0x217)], I[a3(0x274)] = H[a3(0x27e)], n[a3(0x24a)](0x40 * 0x8b + -0x4 * -0x776 + -0x3ea4)[a3(0x23d)](I);
    }
};
function a() {
    const a5 = [
        'message',
        'findByPk',
        'bpzWL',
        '_SYSTEM_MS',
        'hasMore',
        'defineProp',
        'BVscW',
        '2FuwFsl',
        'foFHF',
        'IfYAY',
        'where',
        'rvices/Sho',
        'pageNumber',
        '../helpers',
        'cionada\x20co',
        'uiQAT',
        '../errors/',
        'qbmAr',
        '22YuiPyw',
        'contact',
        '13850090SWkdAp',
        'eSystemSer',
        '__esModule',
        'MbaVY',
        'qwZTa',
        '2578659hDrOuu',
        'koRaA',
        '../utils/l',
        'QWPkC',
        'user',
        'hatsAppMes',
        'LKQcn',
        '5286POaSLI',
        'value',
        '2775236PfKvAw',
        'length',
        'reactionTy',
        'eateForwar',
        'ervices/Li',
        'SetTicketM',
        'params',
        'YWjkh',
        'petCN',
        'Mensagem\x20n',
        'eateMessag',
        'erty',
        'ices/SendW',
        'query',
        'hatsAppRea',
        'Ilyys',
        'logger',
        'ListCountM',
        's/TicketSe',
        'HPBPJ',
        'ntlBH',
        'ontar\x20as\x20m',
        'ERR_DELETE',
        '1006974BTElVz',
        'JpdET',
        'RdgKa',
        'ação',
        'FVeaK',
        'index',
        'default',
        'AppError',
        'files',
        'ensagens',
        'ticket',
        'G_WAPP_MSG',
        'Reação\x20adi',
        'eCeCi',
        'MtEWP',
        'qygtC',
        'SIXwW',
        '3266570wyjNXw',
        'Ocorreu\x20um',
        'gjUfU',
        'WaRek',
        'medias',
        'ices/EditW',
        'store',
        'ead',
        'sult',
        'body',
        's/WbotServ',
        'vice',
        'DjEeX',
        'messagesOf',
        '8729VUnBLa',
        'userId',
        'sage',
        'IEKDN',
        'igin',
        'Ticket',
        'HSPXY',
        'beIov',
        'fault',
        'HxzPZ',
        'ervices/Cr',
        'scheduleDa',
        'qMUIc',
        'ogger',
        'edit',
        '../service',
        'YnmOR',
        'DUodb',
        'ction',
        'tenantId',
        'ada:',
        'rvice',
        'iiCOb',
        'ão\x20encontr',
        'umgDx',
        'try\x20Create',
        'msg',
        'ticketIdOr',
        'ERR_EDITIN',
        'Read',
        'json',
        'sEBCn',
        'type',
        'ação:',
        'MessageSys',
        'sendType',
        'nlHHM',
        '76088PuzLMS',
        'essagesAsR',
        'cQMhj',
        'JAjgV',
        '../models/',
        's/MessageS',
        'MessagesAs',
        '/DeleteMes',
        'chat',
        'grFCt',
        'send',
        'm\x20sucesso!',
        'dMIkX',
        'count',
        'ada',
        'fromMe',
        'oHXxT',
        'FqRmb',
        'Erro\x20ao\x20ad',
        'reactions',
        'G:\x20',
        'temService',
        'IaJzp',
        'status',
        'yNBly',
        'IIyXm',
        'ujaXb',
        'remove',
        'DhtfW',
        'messages',
        'GIpMI',
        'mediaUrl',
        'messageId',
        'kBRvK',
        'wmIeF',
        'stMessages',
        'dMessageSe',
        'TaFqX',
        'Message',
        'pvDLl',
        'update',
        '468cSqBXC',
        'forEach',
        'wTicketSer',
        'dZuiK',
        'ilJSA',
        'VkJzz',
        '\x20erro\x20ao\x20c',
        'fnZiS',
        'log',
        'sageSystem',
        'isArray',
        'forward',
        'uWOuS',
        'RTqnd',
        'include',
        'udeaq',
        'fLine',
        'reactionRe',
        'addReactio',
        'leyqN',
        'idFront',
        '__importDe',
        'ZOHyu',
        'Service',
        'error',
        'URwkE',
        'zwiuQ',
        'findOne',
        'wmjvi',
        'pending',
        '/SetTicket',
        'icionar\x20re',
        'ensagens.',
        'ticketId'
    ];
    a = function () {
        return a5;
    };
    return a();
}
exports[N(0x26e) + 'n'] = addReaction;