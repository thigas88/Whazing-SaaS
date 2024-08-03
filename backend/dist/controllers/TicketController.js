'use strict';
const O = b, P = b;
(function (c, d) {
    const M = b, N = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(M(0x249)) / (0x6b9 + 0x2587 + -0x2c3f) + -parseInt(N(0x217)) / (-0xd2d + 0xf26 + 0x1f7 * -0x1) + parseInt(M(0x201)) / (0xe58 + 0x93a + -0x178f) * (parseInt(N(0x2ab)) / (-0x1 * 0x3b4 + 0x1 * -0xea3 + 0x125b)) + parseInt(M(0x264)) / (0x1466 + -0x267b + 0x296 * 0x7) * (-parseInt(M(0x2ba)) / (-0x1bd6 + 0x55 * -0x6b + 0x3f63)) + -parseInt(N(0x2b7)) / (0x1d89 + -0x20ce * -0x1 + -0x3e50) * (parseInt(M(0x253)) / (-0x141b + -0xb78 + 0x1f9b)) + -parseInt(N(0x2c0)) / (0x3 * 0xcad + -0xa25 + -0x1bd9) * (parseInt(N(0x24c)) / (0x1667 + 0x5 * 0x151 + -0x3 * 0x9a6)) + -parseInt(N(0x1f4)) / (-0x2 * -0xf8 + -0x1ea1 * 0x1 + -0x3 * -0x994) * (-parseInt(N(0x2a3)) / (-0x1509 + -0x136b + -0xd80 * -0x3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x455f * -0x2b + 0x71a19 + 0x61 * 0x22f4));
var __importDefault = this && this[O(0x2ca) + P(0x25d)] || function (c) {
    const Q = O;
    return c && c[Q(0x298)] ? c : { 'default': c };
};
const q = {};
q[O(0x2c5)] = !![], Object[O(0x238) + O(0x2a9)](exports, P(0x298), q), exports[O(0x23e)] = exports[P(0x20d) + 'ts'] = exports[O(0x25e) + O(0x22e)] = exports[O(0x232)] = exports[P(0x1f2)] = exports[O(0x265)] = exports[O(0x2cc)] = exports[P(0x1ff)] = void (-0x733 * 0x2 + -0x1f7a + 0x2de * 0x10);
const sequelize_1 = require(P(0x293)), socket_1 = require(O(0x244) + P(0x22e)), Message_1 = __importDefault(require(O(0x268) + P(0x29f))), CreateLogTicketService_1 = __importDefault(require(P(0x2ac) + O(0x26b) + P(0x2a2) + P(0x22a) + O(0x207))), CreateTicketService_1 = __importDefault(require(P(0x2ac) + O(0x26b) + O(0x2a2) + O(0x25a) + O(0x210))), DeleteTicketService_1 = __importDefault(require(O(0x2ac) + O(0x26b) + O(0x225) + P(0x233) + O(0x210))), ListTicketsService_1 = __importDefault(require(O(0x2ac) + O(0x26b) + P(0x256) + O(0x2c2) + O(0x2bd))), ShowLogTicketService_1 = __importDefault(require(P(0x2ac) + O(0x26b) + P(0x243) + P(0x245) + O(0x21b))), ShowTicketService_1 = __importDefault(require(O(0x2ac) + O(0x26b) + P(0x243) + P(0x28c) + P(0x20b))), UpdateTicketService_1 = __importDefault(require(P(0x2ac) + P(0x26b) + O(0x279) + O(0x25a) + O(0x210))), closeTicketsService_1 = require(P(0x2ac) + O(0x26b) + O(0x2a6) + O(0x226) + O(0x210)), delTicketsService_1 = require(O(0x2ac) + O(0x26b) + P(0x229) + O(0x212) + O(0x20b)), Whatsapp_1 = __importDefault(require(O(0x268) + P(0x291))), AppError_1 = __importDefault(require(P(0x286) + P(0x2d2))), CreateMessageSystemService_1 = __importDefault(require(P(0x2ac) + P(0x2d0) + O(0x2b8) + O(0x29b) + P(0x251) + P(0x20b))), pupa_1 = require(O(0x266) + O(0x246)), Ticket_1 = __importDefault(require(O(0x268) + P(0x287))), ListSettingsService_1 = __importDefault(require(O(0x2ac) + P(0x261) + P(0x2b4) + P(0x22c) + P(0x21b))), index = async (e, f) => {
        const R = O, S = O, {
                tenantId: g,
                profile: h
            } = e[R(0x1fc)], {
                searchParam: i,
                pageNumber: j,
                status: k,
                date: l,
                showAll: m,
                withUnreadMessages: n,
                queuesIds: o,
                isNotAssignedUser: p,
                includeNotQueueDefined: r
            } = e[R(0x2d1)], s = e[S(0x1fc)]['id'], t = {};
        t[R(0x241) + 'm'] = i, t[S(0x1f9)] = j, t[S(0x28b)] = k, t[S(0x23a)] = l, t[S(0x219)] = m, t[R(0x204)] = s, t[S(0x2bc) + S(0x23d)] = n, t[S(0x269)] = o, t[S(0x263) + R(0x26f)] = p, t[R(0x254) + R(0x26e) + 'ed'] = r, t[S(0x2ce)] = g, t[R(0x23c)] = h;
        const {
                tickets: u,
                count: v,
                hasMore: w
            } = await (0x2 * -0x29c + 0x815 * 0x1 + -0x2dd * 0x1, ListTicketsService_1[R(0x2be)])(t), x = {};
        return x[S(0x2c4)] = u, x[S(0x218)] = v, x[S(0x26c)] = w, f[S(0x28b)](-0x1ddc + 0xb68 + -0x99e * -0x2)[S(0x20a)](x);
    };
exports[P(0x1ff)] = index;
const store = async (i, j) => {
    const T = O, U = O, k = {};
    k[T(0x2af)] = function (C, D) {
        return C !== D;
    }, k[U(0x28d)] = T(0x2bb), k[T(0x2cb)] = function (C, D) {
        return C === D;
    }, k[T(0x230)] = T(0x242) + T(0x297) + 'ts', k[T(0x2c7)] = U(0x270) + T(0x22f) + T(0x27b) + U(0x202), k[U(0x282)] = T(0x275), k[U(0x257)] = U(0x1f5), k[U(0x2b5)] = T(0x20f), k[U(0x24d)] = U(0x1fa), k[T(0x21f)] = function (C, D) {
        return C != D;
    }, k[T(0x26d)] = function (C, D) {
        return C == D;
    }, k[T(0x2ae)] = T(0x2aa), k[U(0x2c3)] = U(0x2cf), k[U(0x2b9)] = T(0x23f), k[T(0x1f7)] = U(0x235), k[T(0x2cd)] = function (C, D) {
        return C !== D;
    }, k[T(0x259)] = T(0x250);
    const l = k, {tenantId: m} = i[U(0x1fc)], {
            contactId: n,
            status: o,
            userId: p,
            channel: r,
            channelId: s
        } = i[U(0x2b2)], t = {};
    t[T(0x28b)] = l[T(0x257)];
    const u = {};
    u[U(0x28b)] = l[U(0x2b5)];
    const v = {
        [sequelize_1['Op']['or']]: [
            t,
            u
        ]
    };
    v[U(0x2b6)] = n, v[T(0x2ce)] = m, v[U(0x240)] = r;
    const w = {};
    w[T(0x277)] = v;
    const x = await Ticket_1[T(0x2be)][T(0x290)](w), y = await (0x39 * 0xb + 0x3 * -0x1b4 + 0x2a9, ListSettingsService_1[T(0x2be)])(m), z = l[U(0x2cb)](y?.[U(0x1f3)](C => {
            const V = T, W = T;
            if (l[V(0x2af)](l[V(0x28d)], l[V(0x28d)])) {
                const E = {};
                return E[V(0x236)] = v[W(0x236)], u[W(0x28b)](-0x1553 + 0x1e0b * 0x1 + -0x6c4)[V(0x20a)](E);
            } else
                return l[W(0x2cb)](C[W(0x213)], l[V(0x230)]);
        })?.[U(0x2c5)], l[U(0x24d)]) ? 'S' : 'N';
    if (x && !!x[T(0x204)] && l[T(0x21f)](x[U(0x204)], p) && l[T(0x26d)](z, 'S')) {
        if (l[U(0x2af)](l[T(0x2ae)], l[U(0x2c3)]))
            throw new AppError_1[(T(0x2be))](l[U(0x2c7)]);
        else
            return u[T(0x28b)](-0x14 * -0x191 + -0x2169 + 0x2dd)[T(0x20a)](v);
    }
    if (x) {
        if (l[U(0x2cb)](l[T(0x2b9)], l[U(0x1f7)]))
            throw new t[(T(0x2be))](l[T(0x2c7)]);
        else
            return j[T(0x28b)](0x1207 + -0x901 + -0x83e)[U(0x20a)](x);
    }
    const A = {};
    A[U(0x2b6)] = n, A[T(0x28b)] = o, A[T(0x204)] = p, A[U(0x2ce)] = m, A[U(0x240)] = r, A[T(0x267)] = s;
    const B = await (0x13e * 0x19 + 0x1 * -0x101 + -0x1e0d, CreateTicketService_1[T(0x2be)])(A);
    if (!p) {
        if (l[U(0x2cd)](l[T(0x259)], l[T(0x259)])) {
            const F = (0x50 * -0x22 + -0x2623 + 0x30c3, A[T(0x2a7)])(), G = {};
            G[T(0x237)] = l[U(0x282)], G[U(0x200)] = l, F['to'](G + ':' + j[U(0x28b)])[U(0x294)](k + T(0x24e), G);
        } else {
            const F = (0xe14 + -0x184d + -0x1 * -0xa39, socket_1[U(0x2a7)])();
            F['to'](m + ':' + B[T(0x28b)])[U(0x294)](m + T(0x24e), {
                'action': l[T(0x282)],
                'ticket': B
            });
        }
    }
    return j[T(0x28b)](-0x1 * 0x2249 + -0x14b * -0x18 + -0x409 * -0x1)[T(0x20a)](B);
};
exports[P(0x2cc)] = store;
const show = async (i, j) => {
    const X = O, Y = P, k = {};
    k[X(0x28a)] = X(0x20f), k[Y(0x26a)] = X(0x262) + X(0x21d), k[X(0x20c)] = Y(0x216);
    const l = k, {ticketId: m} = i[X(0x299)], {tenantId: n} = i[Y(0x1fc)], o = i[Y(0x1fc)]['id'], p = {};
    p['id'] = m, p[X(0x2ce)] = n;
    const r = await (-0x456 + 0x277 * 0x5 + 0x7fd * -0x1, ShowTicketService_1[X(0x2be)])(p), s = { [sequelize_1['Op'][Y(0x284)]]: null }, t = {};
    t[X(0x2b6)] = r[X(0x2b6)], t[Y(0x2c9) + 'te'] = s, t[Y(0x28b)] = l[Y(0x28a)];
    const u = t, v = {};
    v[X(0x277)] = u;
    const w = await Message_1[Y(0x2be)][X(0x21c)](v);
    r[X(0x28f) + 'ue'](l[Y(0x26a)], w);
    const x = {};
    return x[Y(0x204)] = o, x[Y(0x252)] = m, x[Y(0x29d)] = l[X(0x20c)], await (-0x10cf + -0x1597 * -0x1 + -0x4c8, CreateLogTicketService_1[X(0x2be)])(x), j[X(0x28b)](0x22cb + -0x20e7 + -0x11c)[Y(0x20a)](r);
};
exports[O(0x265)] = show;
const update = async (l, m) => {
    const Z = P, a0 = O, n = {};
    n[Z(0x283)] = Z(0x215) + a0(0x2b1) + a0(0x227) + 'o', n[a0(0x255)] = a0(0x205) + Z(0x27d) + a0(0x295), n[a0(0x203)] = function (z, A) {
        return z === A;
    }, n[a0(0x25f)] = Z(0x273), n[a0(0x208)] = function (z, A) {
        return z === A;
    }, n[Z(0x274)] = Z(0x278), n[a0(0x231)] = function (z, A) {
        return z !== A;
    }, n[a0(0x2b0)] = Z(0x2c6), n[a0(0x2bf)] = a0(0x2b3), n[Z(0x296)] = Z(0x20f);
    const o = n, {ticketId: p} = l[Z(0x299)], {tenantId: r} = l[a0(0x1fc)], s = l[a0(0x1fc)]['id'], {isTransference: t} = l[Z(0x2b2)], u = { ...l[Z(0x2b2)] };
    u[a0(0x2ce)] = r;
    const v = u, w = {};
    w[a0(0x2a0)] = v, w[Z(0x252)] = p, w[Z(0x1f1) + a0(0x2a5)] = t, w[a0(0x27f) + a0(0x260)] = s;
    const {ticket: x} = await (-0x21fd + 0x1c66 + -0x597 * -0x1, UpdateTicketService_1[a0(0x2be)])(w);
    if (o[Z(0x203)](v[a0(0x28b)], o[a0(0x25f)])) {
        if (o[Z(0x208)](o[Z(0x274)], o[a0(0x274)])) {
            const y = {};
            y['id'] = x[Z(0x228)], y[Z(0x2ce)] = r;
            const z = {};
            z[a0(0x277)] = y;
            const A = await Whatsapp_1[a0(0x2be)][a0(0x290)](z);
            if (A?.[Z(0x222) + a0(0x27e)]) {
                if (o[a0(0x231)](o[Z(0x2b0)], o[Z(0x2b0)])) {
                    const C = {};
                    C[a0(0x28b)] = k, C[Z(0x1fe)] = l, C[a0(0x272)] = m, C[a0(0x228)] = n, C[Z(0x24a)] = o, j[Z(0x29e)](o[a0(0x283)], C);
                    const D = {};
                    return D[Z(0x236)] = o[a0(0x255)], p[a0(0x28b)](0x1eee + -0x1ee7 * -0x1 + -0x3c45)[Z(0x20a)](D);
                } else {
                    const C = await x[Z(0x22b) + a0(0x2ad)](), D = {};
                    D[a0(0x285)] = C, D[Z(0x24f)] = x[a0(0x27c)][Z(0x24f)];
                    const E = (0x6e1 + -0xf5f + -0x1 * -0x87e, pupa_1[a0(0x1fd)])(A[a0(0x222) + a0(0x27e)] || '', D), F = {};
                    F[Z(0x2b2)] = E, F[a0(0x24b)] = !![], F[a0(0x2c8)] = !![];
                    const G = {};
                    G[a0(0x2a1)] = F, G[Z(0x2ce)] = r, G[Z(0x200)] = x, G[Z(0x204)] = l[a0(0x1fc)]['id'], G[Z(0x292)] = o[a0(0x2bf)], G[a0(0x28b)] = o[Z(0x296)], G[Z(0x1f1)] = ![], G[Z(0x214)] = ![];
                    const H = G;
                    await (0x230e + -0x1050 + -0x12be, CreateMessageSystemService_1[a0(0x2be)])(H);
                    const I = {};
                    I[a0(0x29c) + Z(0x29f)] = !![], await x[a0(0x1f2)](I);
                }
            }
        } else {
            const K = {};
            K[a0(0x28b)] = k, K[a0(0x1fe)] = K, K[Z(0x272)] = L, K[Z(0x228)] = n, K[Z(0x24a)] = o, j[a0(0x29e)](o[a0(0x283)], K);
            const L = {};
            return L[Z(0x236)] = o[Z(0x255)], p[Z(0x28b)](-0x267c + 0xbce * 0x1 + -0x4b5 * -0x6)[Z(0x20a)](L);
        }
    }
    return m[a0(0x28b)](-0x1976 * 0x1 + -0x428 + 0x1e66)[a0(0x20a)](x);
};
exports[O(0x1f2)] = update;
const remove = async (f, g) => {
    const a1 = O, a2 = O, h = {};
    h[a1(0x25b)] = a1(0x20e), h[a2(0x2c1)] = a1(0x258) + a2(0x29a);
    const i = h, {ticketId: j} = f[a1(0x299)], {tenantId: k} = f[a2(0x1fc)], l = f[a2(0x1fc)]['id'], m = {};
    m['id'] = j, m[a2(0x2ce)] = k, m[a2(0x204)] = l;
    const n = await (0x2653 * 0x1 + -0x682 + -0x9 * 0x389, DeleteTicketService_1[a1(0x2be)])(m), o = (-0x159 * -0x5 + -0xa * 0x27e + -0x299 * -0x7, socket_1[a1(0x2a7)])();
    o['to'](k + ':' + n[a2(0x28b)])['to'](k + ':' + j)['to'](k + (a2(0x224) + a1(0x280)))[a2(0x294)](k + a2(0x24e), {
        'action': i[a1(0x25b)],
        'ticketId': +j
    });
    const p = {};
    return p[a1(0x236)] = i[a2(0x2c1)], g[a1(0x28b)](0x112 + 0x1a4f + -0x1a99)[a1(0x20a)](p);
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7 * 0x444 + -0x109c + 0x3069);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[O(0x232)] = remove;
const showLogsTicket = async (d, e) => {
    const a3 = O, a4 = P, {ticketId: f} = d[a3(0x299)], g = {};
    g[a4(0x252)] = f;
    const h = await (-0x2e6 + 0x264b * -0x1 + 0x2931, ShowLogTicketService_1[a3(0x2be)])(g);
    return e[a4(0x28b)](-0x1064 * 0x2 + 0x1795 * 0x1 + 0x9fb)[a4(0x20a)](h);
};
exports[P(0x25e) + O(0x22e)] = showLogsTicket;
const closeTickets = async (h, i) => {
    const a5 = P, a6 = O, j = {
            'zryFW': function (k, l) {
                return k === l;
            },
            'oaIBD': a5(0x242) + a5(0x297) + 'ts',
            'BsGSI': function (k, l) {
                return k !== l;
            },
            'tefhk': a5(0x234),
            'tlqat': function (k, l) {
                return k(l);
            },
            'YelIS': function (k, l) {
                return k(l);
            },
            'rcngD': function (k, l) {
                return k || l;
            },
            'BkQpA': a6(0x23b),
            'FXGlH': a6(0x1fb),
            'BqJvE': a6(0x215) + a6(0x2b1) + a6(0x227) + 'o',
            'JpWQe': a6(0x205) + a6(0x27d) + a5(0x295),
            'wymOl': a6(0x247) + a6(0x211) + a6(0x206),
            'HNOHb': function (k, l) {
                return k !== l;
            },
            'dtDBi': a6(0x2a4)
        };
    try {
        if (j[a6(0x289)](j[a6(0x220)], j[a5(0x220)])) {
            const l = {};
            return l[a5(0x236)] = f[a5(0x236)], e[a5(0x28b)](0x1 * -0x1b89 + -0x1fc2 * -0x1 + -0x245)[a5(0x20a)](l);
        } else {
            const l = j[a5(0x25c)](Number, h[a5(0x1fc)]['id']), m = j[a6(0x2a8)](Number, h[a6(0x1fc)][a5(0x2ce)]), {
                    status: n,
                    startDate: o,
                    endDate: p,
                    whatsappId: r,
                    isGroup: s
                } = h[a5(0x2b2)];
            if (j[a6(0x239)](!n, !o) || !p || !r || j[a5(0x1f6)](s, undefined)) {
                if (j[a6(0x1f6)](j[a5(0x271)], j[a6(0x1f8)]))
                    return j[a5(0x1f6)](d[a5(0x213)], j[a6(0x288)]);
                else {
                    const w = {};
                    w[a5(0x28b)] = n, w[a6(0x1fe)] = o, w[a6(0x272)] = p, w[a5(0x228)] = r, w[a5(0x24a)] = s, console[a6(0x29e)](j[a5(0x27a)], w);
                    const x = {};
                    return x[a6(0x236)] = j[a5(0x21e)], i[a6(0x28b)](0xa2b * -0x1 + -0x21d5 * -0x1 + -0xf6 * 0x17)[a5(0x20a)](x);
                }
            }
            const t = {};
            t[a6(0x28b)] = n, t[a6(0x1fe)] = o, t[a6(0x272)] = p, t[a5(0x228)] = r, t[a5(0x24a)] = s, t[a5(0x204)] = l, t[a6(0x2ce)] = m, await (-0x175e + -0x1390 + 0x2aee, closeTicketsService_1[a5(0x20d) + a5(0x248)])(t);
            const u = {};
            return u[a6(0x236)] = j[a5(0x209)], i[a6(0x28b)](0xaf9 + 0x2 * 0x132e + -0x308d)[a6(0x20a)](u);
        }
    } catch (y) {
        if (j[a6(0x21a)](j[a5(0x28e)], j[a5(0x28e)])) {
            const A = {};
            return A[a5(0x2be)] = j, A && h[a6(0x298)] ? i : A;
        } else {
            const A = {};
            return A[a5(0x236)] = y[a5(0x236)], i[a5(0x28b)](0x1bc8 + 0x11f8 + -0x2bcc)[a6(0x20a)](A);
        }
    }
};
exports[O(0x20d) + 'ts'] = closeTickets;
function a() {
    const a9 = [
        'ltmqq',
        'status',
        'wTicketSer',
        'vJtAf',
        'dtDBi',
        'setDataVal',
        'findOne',
        'Whatsapp',
        'sendType',
        'sequelize',
        'emit',
        'provided',
        'ASRJi',
        'ignedTicke',
        '__esModule',
        'params',
        'eted',
        'eateMessag',
        'isFarewell',
        'type',
        'warn',
        'Message',
        'ticketData',
        'msg',
        'rvices/Cre',
        '36XSXCFu',
        'TASLG',
        'ence',
        'rvices/clo',
        'getIO',
        'YelIS',
        'erty',
        'HVRpi',
        '192596ibfhbl',
        '../service',
        'ocol',
        'dDlju',
        'naCDF',
        'vBZdS',
        'ltando\x20na\x20',
        'body',
        'bot',
        'ervices/Li',
        'soLaC',
        'contactId',
        '14aYqBvJ',
        'ervices/Cr',
        'BXyPS',
        '42kBjxaK',
        'AelBZ',
        'withUnread',
        'rvice',
        'default',
        'YDJdC',
        '78363ZiVzUO',
        'UCmVX',
        'tTicketsSe',
        'QjHLY',
        'tickets',
        'value',
        'cUBWc',
        'ZjMzq',
        'read',
        'scheduleDa',
        '__importDe',
        'hopTo',
        'store',
        'Hwflw',
        'tenantId',
        'YSPoh',
        's/MessageS',
        'query',
        'AppError',
        'isTransfer',
        'update',
        'find',
        '14271389LhfBiy',
        'open',
        'zryFW',
        'BtEYo',
        'FXGlH',
        'pageNumber',
        'enabled',
        'aAWVo',
        'user',
        'pupa',
        'startDate',
        'index',
        'ticket',
        '24LtnyLR',
        '\x20usuário',
        'eNyvh',
        'userId',
        'All\x20filter',
        'ssfully',
        'etService',
        'gXJWl',
        'wymOl',
        'json',
        'vice',
        'fhPkx',
        'closeTicke',
        'delete',
        'pending',
        'ervice',
        'osed\x20succe',
        'TicketsSer',
        'key',
        'note',
        'Filtros\x20fa',
        'access',
        '1641298fzsjoi',
        'count',
        'showAll',
        'HNOHb',
        'Service',
        'findAll',
        'essages',
        'JpWQe',
        'ODFFy',
        'tefhk',
        'CUcdy',
        'farewellMe',
        'lAesg',
        ':notificat',
        'rvices/Del',
        'seTicketsS',
        'solicitaçã',
        'whatsappId',
        'rvices/del',
        'ateLogTick',
        'ensureProt',
        'stSettings',
        'kxPfw',
        'cket',
        'atribuido\x20',
        'upAQy',
        'Gmrhv',
        'remove',
        'eteTicketS',
        'TZrRh',
        'taAVL',
        'message',
        'action',
        'defineProp',
        'rcngD',
        'date',
        'auXel',
        'profile',
        'Messages',
        'delTickets',
        'HIsCn',
        'channel',
        'searchPara',
        'NotViewAss',
        'rvices/Sho',
        '../libs/so',
        'wLogTicket',
        'upa',
        'Tickets\x20cl',
        'tsService',
        '39282bWSflS',
        'isGroup',
        'fromMe',
        '970ZjYHAW',
        'SSgGl',
        ':ticket',
        'name',
        'yKNBZ',
        'eSystemSer',
        'ticketId',
        '3627848iZzJrv',
        'includeNot',
        'mPLzy',
        'rvices/Lis',
        'jBoiv',
        'ticket\x20del',
        'TIXky',
        'ateTicketS',
        'aFbsE',
        'tlqat',
        'fault',
        'showLogsTi',
        'igcEW',
        'est',
        's/SettingS',
        'scheduledM',
        'isNotAssig',
        '782975svMdxS',
        'show',
        '../utils/p',
        'channelId',
        '../models/',
        'queuesIds',
        'NXxmQ',
        's/TicketSe',
        'hasMore',
        'MbyUw',
        'QueueDefin',
        'nedUser',
        'Ticket\x20já\x20',
        'BkQpA',
        'endDate',
        'closed',
        'omtyL',
        'create',
        'MzZtZ',
        'where',
        'RVRwd',
        'rvices/Upd',
        'BqJvE',
        'para\x20outro',
        'contact',
        's\x20must\x20be\x20',
        'ssage',
        'userIdRequ',
        'ion',
        'KtPGQ',
        'axMij',
        'bXeLM',
        'not',
        'protocol',
        '../errors/',
        'Ticket',
        'oaIBD',
        'BsGSI'
    ];
    a = function () {
        return a9;
    };
    return a();
}
const delTickets = async (i, j) => {
    const a7 = P, a8 = P, k = {};
    k[a7(0x276)] = function (m, n) {
        return m || n;
    }, k[a7(0x22d)] = function (m, n) {
        return m === n;
    }, k[a8(0x281)] = a8(0x215) + a8(0x2b1) + a8(0x227) + 'o', k[a7(0x223)] = a7(0x205) + a8(0x27d) + a8(0x295), k[a7(0x221)] = a7(0x247) + a8(0x211) + a8(0x206);
    const l = k;
    try {
        const {
            status: m,
            startDate: n,
            endDate: o,
            whatsappId: p,
            isGroup: r
        } = i[a7(0x2b2)];
        if (l[a8(0x276)](!m, !n) || !o || !p || l[a8(0x22d)](r, undefined)) {
            const u = {};
            u[a8(0x28b)] = m, u[a7(0x1fe)] = n, u[a7(0x272)] = o, u[a8(0x228)] = p, u[a7(0x24a)] = r, console[a7(0x29e)](l[a8(0x281)], u);
            const v = {};
            return v[a7(0x236)] = l[a7(0x223)], j[a7(0x28b)](0x73 * -0x40 + 0x1a8f + 0x3c1)[a8(0x20a)](v);
        }
        const s = {};
        s[a8(0x28b)] = m, s[a7(0x1fe)] = n, s[a8(0x272)] = o, s[a7(0x228)] = p, s[a7(0x24a)] = r, await (0x1 * 0x1882 + 0xa19 * 0x3 + -0x36cd, delTicketsService_1[a8(0x23e) + a8(0x21b)])(s);
        const t = {};
        return t[a7(0x236)] = l[a7(0x221)], j[a8(0x28b)](0xd6 * 0x28 + -0x2185 + 0xdd)[a8(0x20a)](t);
    } catch (w) {
        const x = {};
        return x[a8(0x236)] = w[a8(0x236)], j[a8(0x28b)](-0x5ca + -0x2313 + 0x2ad1)[a8(0x20a)](x);
    }
};
exports[O(0x23e)] = delTickets;