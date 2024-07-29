'use strict';
const F = b, G = b;
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(D(0x1b9)) / (0x1b6a + -0x119b + -0x9ce * 0x1) + parseInt(E(0x180)) / (-0x1 * 0x2089 + 0x1b90 + -0x19 * -0x33) * (parseInt(D(0x1ae)) / (-0x149e + 0x1 * 0x1f82 + -0xae1)) + parseInt(E(0x189)) / (0x1268 + 0x3d * 0x13 + -0x16eb) + -parseInt(E(0x196)) / (-0x2405 * -0x1 + -0x155f + 0x5 * -0x2ed) * (parseInt(E(0x15f)) / (0x1 * 0x2191 + -0x148e + -0xcfd)) + parseInt(D(0x1a6)) / (-0x57 * 0x15 + 0xb * -0x79 + 0xd3 * 0xf) * (-parseInt(D(0x13a)) / (-0x87e * -0x1 + 0x22c9 + -0x2b3f)) + parseInt(E(0x18f)) / (0x10aa * -0x2 + -0x1 * 0xb03 + -0x14 * -0x238) * (parseInt(E(0x18e)) / (-0x2 * 0x5d6 + 0xdf * 0x2c + -0x1a9e)) + parseInt(D(0x19d)) / (-0xe25 + -0x71d + -0x13 * -0x11f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x41b00 + -0x2f4ab + -0x6 * -0x1fbda));
var __importDefault = this && this[F(0x179) + G(0x139)] || function (c) {
    const H = G;
    return c && c[H(0x16b)] ? c : { 'default': c };
};
const q = {};
q[G(0x136)] = !![], Object[F(0x14c) + G(0x135)](exports, G(0x16b), q), exports[G(0x149)] = exports[G(0x1ad)] = exports[F(0x191)] = exports[F(0x15a)] = exports[F(0x144) + G(0x145)] = exports[F(0x146)] = void (0x53 * -0x60 + 0x1 * -0xd13 + -0x49 * -0x9b);
const AppError_1 = __importDefault(require(F(0x1ab) + G(0x1a3))), DeleteMessageSystem_1 = __importDefault(require(G(0x188) + F(0x14d) + F(0x157))), SetTicketMessagesAsRead_1 = __importDefault(require(G(0x188) + F(0x176) + F(0x141) + G(0x19a))), Message_1 = __importDefault(require(F(0x13b) + G(0x194))), CreateForwardMessageService_1 = __importDefault(require(G(0x177) + F(0x186) + F(0x14e) + G(0x12d) + G(0x138) + G(0x1b3))), CreateMessageSystemService_1 = __importDefault(require(G(0x177) + F(0x186) + G(0x14e) + G(0x1ba) + G(0x198) + F(0x17b))), ListMessagesService_1 = __importDefault(require(F(0x177) + F(0x186) + F(0x193) + G(0x1b6) + G(0x19e))), ShowTicketService_1 = __importDefault(require(G(0x177) + F(0x13e) + F(0x13d) + F(0x12f) + G(0x17b))), logger_1 = require(F(0x190) + F(0x1b1)), EditWhatsAppMessage_1 = __importDefault(require(F(0x177) + G(0x154) + F(0x19f) + G(0x13f) + G(0x167))), index = async (e, f) => {
        const I = G, J = F, {ticketId: g} = e[I(0x1a0)], {pageNumber: h} = e[I(0x16f)], {tenantId: i} = e[I(0x1a2)], j = {};
        j[I(0x18a)] = h, j[J(0x17d)] = g, j[J(0x18b)] = i;
        const {
            count: k,
            messages: l,
            messagesOffLine: m,
            ticket: n,
            hasMore: o
        } = await (-0x425 + 0x1a36 + -0x1611, ListMessagesService_1[I(0x148)])(j);
        (0x1f5f + -0x237 + -0x1d28, SetTicketMessagesAsRead_1[J(0x148)])(n);
        const p = {};
        return p[I(0x162)] = k, p[I(0x197)] = l, p[I(0x15b) + I(0x182)] = m, p[I(0x158)] = n, p[J(0x1bb)] = o, f[I(0x160)](p);
    };
exports[F(0x146)] = index;
const ListCountMensagens = async (f, g) => {
    const K = F, L = G, h = {};
    h[K(0x1b2)] = function (j, k) {
        return j instanceof k;
    }, h[K(0x130)] = function (j, k) {
        return j === k;
    }, h[L(0x134)] = K(0x17a) + L(0x19c), h[K(0x173)] = K(0x1af) + L(0x156) + K(0x175) + L(0x152), h[L(0x15d)] = function (j, k) {
        return j === k;
    }, h[K(0x166)] = K(0x1a8), h[L(0x1a7)] = L(0x183);
    const i = h;
    try {
        if (i[L(0x15d)](i[L(0x166)], i[K(0x166)])) {
            const j = await Message_1[K(0x148)][L(0x162)](), k = {};
            return k[K(0x162)] = j, g[L(0x160)](k);
        } else {
            if (i[K(0x1b2)](i, j[K(0x148)]) && i[L(0x130)](k[L(0x174)], i[L(0x134)])) {
                const m = {};
                return m[K(0x140)] = p[K(0x174)], o[L(0x16d)](0x26e3 + 0x7f * -0xe + -0x1e61)[L(0x160)](m);
            }
            throw n;
        }
    } catch (m) {
        if (i[K(0x15d)](i[K(0x1a7)], i[L(0x1a7)])) {
            const n = {};
            return n[L(0x140)] = i[L(0x173)], g[K(0x16d)](-0x1 * -0x1a + 0x20a4 + -0x1eca)[K(0x160)](n);
        } else {
            const p = {};
            return p[L(0x140)] = i[K(0x173)], d[L(0x16d)](0x4e * -0x3b + 0x4 * -0x2a4 + 0x1e7e)[L(0x160)](p);
        }
    }
};
exports[G(0x144) + G(0x145)] = ListCountMensagens;
const store = async (g, h) => {
    const M = G, N = F, i = {};
    i[M(0x19b)] = M(0x1b7) + N(0x16c) + 'G', i[M(0x1ac)] = M(0x169) + N(0x1a9) + N(0x1b4), i[M(0x150)] = function (s, t) {
        return s === t;
    }, i[N(0x17c)] = N(0x142), i[N(0x153)] = M(0x170), i[N(0x184)] = N(0x155), i[N(0x15e)] = N(0x16a) + N(0x13c) + N(0x178), i[M(0x131)] = M(0x17e), i[M(0x12c)] = M(0x159), i[N(0x172)] = N(0x14f), i[M(0x17f)] = M(0x132), i[N(0x1a5)] = function (s, t) {
        return s > t;
    }, i[M(0x15c)] = function (s, t) {
        return s !== t;
    }, i[N(0x1b5)] = N(0x195), i[N(0x1b8)] = M(0x18c);
    const j = i, {ticketId: k} = g[M(0x1a0)], {
            tenantId: l,
            id: m
        } = g[N(0x1a2)], n = g[M(0x181)], o = g[M(0x143)], p = {};
    p['id'] = k, p[M(0x18b)] = l;
    const r = await (-0xa3 * 0x6 + -0xf3 * 0x10 + -0x3 * -0x656, ShowTicketService_1[N(0x148)])(p);
    try {
        if (j[M(0x150)](j[M(0x131)], j[M(0x131)]))
            await (-0xb56 + 0x16e * -0x17 + 0x2c38, SetTicketMessagesAsRead_1[M(0x148)])(r);
        else {
            const t = {};
            return t[M(0x148)] = j, g && h[M(0x16b)] ? i : t;
        }
    } catch (t) {
        if (j[N(0x150)](j[N(0x12c)], j[M(0x172)])) {
            const v = {};
            return v[N(0x140)] = f[N(0x174)], v[N(0x16d)](0x13f * -0x1 + 0x7 * 0x26a + -0x1 * 0xe17)[M(0x160)](v);
        } else
            console[N(0x12e)](j[M(0x15e)], t);
    }
    try {
        if (n[N(0x163)]) {
            if (j[M(0x150)](j[M(0x17f)], j[M(0x17f)])) {
                const v = {};
                v[N(0x164)] = n, v[N(0x18b)] = l, v[M(0x133)] = o, v[M(0x158)] = r, v[M(0x137)] = m, v[M(0x18d) + 'te'] = n[M(0x18d) + 'te'], v[M(0x151)] = n[M(0x151)] || j[N(0x153)], v[N(0x16d)] = j[M(0x184)], v[M(0x14a)] = n[M(0x14a)], await (0x35e * 0x3 + -0x295 * 0xd + -0x1 * -0x1777, CreateMessageSystemService_1[M(0x148)])(v);
            } else {
                f[M(0x187)][M(0x140)](M(0x1b7) + N(0x16c) + M(0x147) + g);
                throw new h[(N(0x148))](j[N(0x19b)]);
            }
        } else {
            if (o && j[N(0x1a5)](o[N(0x1bc)], -0x1042 * -0x2 + -0x1927 * -0x1 + -0x18f * 0x25))
                j[M(0x15c)](j[M(0x1b5)], j[N(0x1b8)]) ? o[M(0x185)](async (x, y) => {
                    const O = M, P = N, z = {};
                    z[O(0x14b)] = j[O(0x1ac)];
                    const A = z;
                    if (j[O(0x150)](j[O(0x17c)], j[P(0x17c)])) {
                        const B = {
                            'fromMe': n[O(0x168)],
                            'body': Array[P(0x16e)](n[P(0x181)]) ? n[O(0x181)][y] : n[O(0x181)],
                            'idFront': Array[O(0x16e)](n[P(0x14a)]) ? n[O(0x14a)][y] : n[O(0x14a)],
                            'read': ![]
                        };
                        await (-0x662 + -0x12fc + -0x1 * -0x195e, CreateMessageSystemService_1[O(0x148)])({
                            'msg': B,
                            'tenantId': l,
                            'medias': [x],
                            'ticket': r,
                            'userId': m,
                            'scheduleDate': n[O(0x18d) + 'te'] ? new Date(Array[O(0x16e)](n[O(0x18d) + 'te']) ? n[P(0x18d) + 'te'][y] : n[O(0x18d) + 'te']) : undefined,
                            'sendType': n[P(0x151)] || j[P(0x153)],
                            'status': j[O(0x184)],
                            'idFront': Array[P(0x16e)](n[O(0x14a)]) ? n[O(0x14a)][y] : n[P(0x14a)]
                        });
                    } else
                        e[O(0x12e)](A[O(0x14b)], z);
                }) : e[M(0x12e)](j[M(0x15e)], f);
            else {
                const y = {};
                y[N(0x164)] = n, y[N(0x18b)] = l, y[M(0x133)] = o, y[N(0x158)] = r, y[N(0x137)] = m, y[N(0x18d) + 'te'] = n[N(0x18d) + 'te'], y[N(0x151)] = n[M(0x151)] || j[M(0x153)], y[N(0x16d)] = j[M(0x184)], y[M(0x14a)] = n[M(0x14a)], await (0xa1 * -0x15 + 0x1c26 * 0x1 + -0xef1, CreateMessageSystemService_1[M(0x148)])(y);
            }
        }
    } catch (z) {
        console[N(0x12e)](j[M(0x1ac)], z);
    }
    return h[N(0x1a1)]();
};
exports[F(0x15a)] = store;
const edit = async (f, g) => {
    const Q = G, R = G, h = {};
    h[Q(0x199)] = function (n, o) {
        return n instanceof o;
    }, h[R(0x192)] = function (n, o) {
        return n === o;
    }, h[Q(0x1a4)] = Q(0x17a) + Q(0x19c);
    const i = h, {messageId: j} = f[Q(0x1a0)], {tenantId: k} = f[R(0x1a2)], l = +k, {body: m} = f[R(0x181)];
    try {
        const n = {};
        n[R(0x171)] = j, n[Q(0x18b)] = l, n[R(0x181)] = m;
        const {
            ticketId: o,
            message: p
        } = await (0x95 * -0x11 + -0x14c8 + 0x1ead, EditWhatsAppMessage_1[Q(0x148)])(n);
    } catch (r) {
        if (i[Q(0x199)](r, AppError_1[R(0x148)]) && i[Q(0x192)](r[Q(0x174)], i[Q(0x1a4)])) {
            const s = {};
            return s[Q(0x140)] = r[R(0x174)], g[Q(0x16d)](-0x2581 + 0x1f79 + 0x798)[Q(0x160)](s);
        }
        throw r;
    }
    return g[Q(0x1a1)]();
};
exports[F(0x191)] = edit;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x10cc + 0x8f * -0xd + -0x1 * -0x193b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const remove = async (d, e) => {
    const S = F, T = G, f = {};
    f[S(0x1aa)] = S(0x1b7) + S(0x16c) + 'G';
    const g = f, {messageId: h} = d[T(0x1a0)], {tenantId: i} = d[S(0x1a2)];
    try {
        await (0x1 * 0x2501 + 0x21be + -0x46bf, DeleteMessageSystem_1[T(0x148)])(d[S(0x181)]['id'], h, i);
    } catch (j) {
        logger_1[T(0x187)][S(0x140)](T(0x1b7) + T(0x16c) + T(0x147) + j);
        throw new AppError_1[(T(0x148))](g[S(0x1aa)]);
    }
    return e[T(0x1a1)]();
};
exports[F(0x1ad)] = remove;
function a() {
    const W = [
        'sBKCe',
        '429669wCVmtE',
        'eateMessag',
        'hasMore',
        'length',
        'BfrKv',
        'eateForwar',
        'log',
        'wTicketSer',
        'WaPrU',
        'NxHqX',
        'qyPlr',
        'medias',
        'vlBzH',
        'erty',
        'value',
        'userId',
        'dMessageSe',
        'fault',
        '92264cNsVPS',
        '../models/',
        'essagesAsR',
        'rvices/Sho',
        's/TicketSe',
        'hatsAppMes',
        'error',
        'MessagesAs',
        'bXDUx',
        'files',
        'ListCountM',
        'ensagens',
        'index',
        'G:\x20',
        'default',
        'forward',
        'idFront',
        'vQJPF',
        'defineProp',
        '/DeleteMes',
        'ervices/Cr',
        'jKDMw',
        'nkvlz',
        'sendType',
        'ensagens.',
        'HrHTW',
        's/WbotServ',
        'pending',
        '\x20erro\x20ao\x20c',
        'sageSystem',
        'ticket',
        'RNXaT',
        'store',
        'messagesOf',
        'TuRpN',
        'GHcXC',
        'asXuo',
        '6HhaojU',
        'json',
        'igin',
        'count',
        'mediaUrl',
        'msg',
        'ticketIdOr',
        'BckxS',
        'sage',
        'fromMe',
        'try\x20Create',
        'SetTicketM',
        '__esModule',
        '_SYSTEM_MS',
        'status',
        'isArray',
        'query',
        'chat',
        'messageId',
        'agxbh',
        'rjzuz',
        'message',
        'ontar\x20as\x20m',
        '/SetTicket',
        '../service',
        'ead',
        '__importDe',
        'ERR_EDITIN',
        'vice',
        'rBfCM',
        'ticketId',
        'dmLQB',
        'oPjeD',
        '19228WPOWlA',
        'body',
        'fLine',
        'jdziT',
        'zeOfM',
        'forEach',
        's/MessageS',
        'logger',
        '../helpers',
        '767512BYZOHM',
        'pageNumber',
        'tenantId',
        'TIYSu',
        'scheduleDa',
        '2161360rfZTeD',
        '9TVJJCV',
        '../utils/l',
        'edit',
        'zxKdx',
        'ervices/Li',
        'Message',
        'fHnCP',
        '1581205XpfidS',
        'messages',
        'eSystemSer',
        'MdeSB',
        'Read',
        'cqiNp',
        'G_WAPP_MSG',
        '4901644EnuhoW',
        'Service',
        'ices/EditW',
        'params',
        'send',
        'user',
        'AppError',
        'YltVY',
        'USuGY',
        '7XbqTPE',
        'pbapm',
        'YaLSW',
        'MessageSys',
        'AwBxG',
        '../errors/',
        'IEdwL',
        'remove',
        '69XdlyWq',
        'Ocorreu\x20um',
        'contact',
        'ogger',
        'okGMT',
        'rvice',
        'temService',
        'gwChN',
        'stMessages',
        'ERR_DELETE'
    ];
    a = function () {
        return W;
    };
    return a();
}
const forward = async (d, e) => {
    const U = F, V = G, f = d[U(0x181)], {user: g} = d;
    for (const h of f[U(0x197)]) {
        const i = {};
        i[V(0x137)] = g['id'], i[V(0x18b)] = g[V(0x18b)], i[V(0x174)] = h, i[V(0x1b0)] = f[U(0x1b0)], i[U(0x165) + U(0x161)] = h[U(0x17d)], await (0x1 * 0x8bd + 0x24 * -0xe2 + -0x170b * -0x1, CreateForwardMessageService_1[V(0x148)])(i);
    }
    return e[V(0x1a1)]();
};
exports[F(0x149)] = forward;