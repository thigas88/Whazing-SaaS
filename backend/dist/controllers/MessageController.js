'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(C(0x135)) / (0x1 * -0x37d + 0x1c67 * 0x1 + 0x18e9 * -0x1) * (-parseInt(C(0x108)) / (-0xd62 * -0x1 + 0x13fe + -0x215e)) + parseInt(D(0xf0)) / (-0xdbc + 0x11b7 + -0x3f8) + parseInt(C(0x10b)) / (0x1 * -0xc + -0x1032 * -0x1 + -0x19d * 0xa) + -parseInt(D(0x113)) / (0x23a7 + 0x43d + -0x27df) + parseInt(C(0xc8)) / (0xdde + 0x1c33 + 0xe5 * -0x2f) + -parseInt(D(0xec)) / (-0xc3 * 0x3 + -0xf53 + 0x11a3) + parseInt(C(0x12b)) / (-0x1 * 0x1807 + 0x24cc + -0x43f * 0x3) * (-parseInt(D(0xff)) / (-0x6d1 + -0x88 * 0x19 + 0x35b * 0x6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xeef7c + 0x1df * 0xd76 + 0x4458f));
var __importDefault = this && this[E(0x12f) + F(0x100)] || function (c) {
    const G = E;
    return c && c[G(0xf2)] ? c : { 'default': c };
};
const q = {};
q[F(0xce)] = !![], Object[F(0xc2) + E(0xcb)](exports, E(0xf2), q), exports[F(0xd8)] = exports[F(0xca)] = exports[E(0xb9)] = exports[F(0x10f)] = exports[E(0x11d) + E(0x141)] = exports[E(0xf4)] = void (0xbe + 0x2e7 * -0xd + 0x24fd);
const AppError_1 = __importDefault(require(E(0xef) + E(0xc5))), DeleteMessageSystem_1 = __importDefault(require(E(0xc0) + F(0x116) + F(0xfa))), SetTicketMessagesAsRead_1 = __importDefault(require(E(0xc0) + F(0x12a) + E(0xfc) + E(0xe2))), Message_1 = __importDefault(require(F(0x103) + F(0xc7))), CreateForwardMessageService_1 = __importDefault(require(E(0x132) + E(0xe0) + E(0xd4) + F(0x117) + E(0x102) + E(0xbe))), CreateMessageSystemService_1 = __importDefault(require(F(0x132) + E(0xe0) + F(0xd4) + F(0x119) + F(0xed) + F(0x10d))), ListMessagesService_1 = __importDefault(require(F(0x132) + E(0xe0) + E(0x134) + F(0x114) + F(0xf5))), ShowTicketService_1 = __importDefault(require(F(0x132) + E(0xd2) + F(0xc9) + E(0xbc) + F(0x10d))), logger_1 = require(E(0x131) + E(0xeb)), EditWhatsAppMessage_1 = __importDefault(require(E(0x132) + F(0x129) + E(0xcd) + F(0x120) + F(0x133))), index = async (e, f) => {
        const H = E, I = F, {ticketId: g} = e[H(0xcf)], {pageNumber: h} = e[H(0x145)], {tenantId: i} = e[I(0x12c)], j = {};
        j[H(0x13d)] = h, j[I(0xf6)] = g, j[H(0x140)] = i;
        const {
            count: k,
            messages: l,
            messagesOffLine: m,
            ticket: n,
            hasMore: o
        } = await (0xe63 + -0x1f29 + -0xe2 * -0x13, ListMessagesService_1[H(0xf8)])(j);
        (0x1 * 0x1020 + -0xc02 + 0x1f * -0x22, SetTicketMessagesAsRead_1[I(0xf8)])(n);
        const p = {};
        return p[H(0x10c)] = k, p[I(0xe8)] = l, p[H(0xdf) + I(0x13f)] = m, p[H(0xd5)] = n, p[H(0x121)] = o, f[I(0x147)](p);
    };
exports[F(0xf4)] = index;
const ListCountMensagens = async (f, g) => {
    const J = F, K = F, h = {};
    h[J(0xd3)] = J(0xf1) + J(0x11a) + K(0xda), h[J(0xe1)] = K(0x13e) + J(0x112) + K(0xb7) + K(0x11c), h[J(0xba)] = function (j, k) {
        return j !== k;
    }, h[K(0x11e)] = J(0x146), h[K(0x144)] = J(0x13a), h[J(0xfd)] = J(0xe5);
    const i = h;
    try {
        if (i[K(0xba)](i[K(0x11e)], i[J(0x144)])) {
            const j = await Message_1[J(0xf8)][K(0x10c)](), k = {};
            return k[K(0x10c)] = j, g[J(0x147)](k);
        } else
            e[K(0x13b)](i[J(0xd3)], f);
    } catch (m) {
        if (i[K(0xba)](i[J(0xfd)], i[K(0xfd)])) {
            const o = {};
            return o[J(0x115)] = i[J(0xe1)], d[J(0x123)](-0xc43 + -0x1715 + 0x254c)[J(0x147)](o);
        } else {
            const o = {};
            return o[J(0x115)] = i[K(0xe1)], g[J(0x123)](-0x1 * 0x8f0 + -0x8e9 * -0x1 + -0x1fb * -0x1)[K(0x147)](o);
        }
    }
};
exports[F(0x11d) + E(0x141)] = ListCountMensagens;
const store = async (g, h) => {
    const L = E, M = E, i = {};
    i[L(0x107)] = M(0xf9) + M(0xbb) + 'G', i[L(0x11b)] = M(0x138) + M(0x142) + M(0xdd), i[M(0x101)] = function (s, t) {
        return s instanceof t;
    }, i[M(0x125)] = function (s, t) {
        return s === t;
    }, i[L(0x105)] = L(0xe7) + M(0x139), i[M(0x143)] = function (s, t) {
        return s === t;
    }, i[L(0x12d)] = M(0x111), i[M(0x118)] = M(0xb8), i[M(0xd7)] = M(0x130), i[L(0xea)] = L(0x11f), i[L(0x110)] = function (s, t) {
        return s !== t;
    }, i[M(0x106)] = M(0xd1), i[M(0xe4)] = L(0xde), i[M(0x128)] = M(0x13c), i[L(0xd9)] = L(0xf1) + L(0x11a) + L(0xda), i[L(0x124)] = L(0xe9), i[M(0xfb)] = function (s, t) {
        return s > t;
    }, i[L(0xbd)] = L(0xdc);
    const j = i, {ticketId: k} = g[M(0xcf)], {
            tenantId: l,
            id: m
        } = g[L(0x12c)], n = g[M(0x10e)], o = g[M(0x126)], p = {};
    p['id'] = k, p[L(0x140)] = l;
    const r = await (0x1ee + 0x908 + 0x2e * -0x3d, ShowTicketService_1[L(0xf8)])(p);
    try {
        if (j[L(0x110)](j[M(0x106)], j[M(0x106)])) {
            const t = {};
            return t[L(0xf8)] = j, g && h[L(0xf2)] ? i : t;
        } else
            await (-0x1484 + 0xf23 + -0x9 * -0x99, SetTicketMessagesAsRead_1[L(0xf8)])(r);
    } catch (t) {
        if (j[L(0x110)](j[M(0xe4)], j[L(0x128)]))
            console[L(0x13b)](j[M(0xd9)], t);
        else {
            f[L(0xcc)][L(0x115)](M(0xf9) + L(0xbb) + M(0xc4) + g);
            throw new h[(L(0xf8))](j[M(0x107)]);
        }
    }
    try {
        if (n[L(0xd0)]) {
            if (j[L(0x125)](j[M(0x124)], j[L(0x124)])) {
                const v = {};
                v[L(0xc3)] = n, v[M(0x140)] = l, v[L(0xe3)] = o, v[M(0xd5)] = r, v[M(0xc1)] = m, v[L(0x109) + 'te'] = n[L(0x109) + 'te'], v[M(0xe6)] = n[M(0xe6)] || j[L(0xd7)], v[M(0x123)] = j[L(0xea)], v[M(0xbf)] = n[M(0xbf)], await (0x27b * -0x4 + 0x40 * 0x41 + -0x32a * 0x2, CreateMessageSystemService_1[M(0xf8)])(v);
            } else
                e[M(0x13b)](j[L(0x11b)], f);
        } else {
            if (o && j[M(0xfb)](o[M(0xd6)], 0x78f + -0x186d + 0xfe * 0x11)) {
                if (j[M(0x110)](j[L(0xbd)], j[M(0xbd)])) {
                    const y = {};
                    return y[L(0x115)] = y[L(0x127)], e[L(0x123)](0x1bfe * -0x1 + -0x49 * 0x2 + 0x1e20)[L(0x147)](y);
                } else
                    o[M(0x104)](async (y, z) => {
                        const N = L, O = L;
                        if (j[N(0x143)](j[O(0x12d)], j[N(0x118)])) {
                            if (j[O(0x101)](i, j[N(0xf8)]) && j[N(0x125)](k[O(0x127)], j[O(0x105)])) {
                                const B = {};
                                return B[N(0x115)] = p[N(0x127)], o[N(0x123)](0x1787 + -0x254d + 0x1 * 0xf56)[N(0x147)](B);
                            }
                            throw n;
                        } else {
                            const B = {
                                'fromMe': n[N(0xc6)],
                                'body': Array[O(0xfe)](n[O(0x10e)]) ? n[O(0x10e)][z] : n[N(0x10e)],
                                'idFront': Array[O(0xfe)](n[O(0xbf)]) ? n[N(0xbf)][z] : n[O(0xbf)],
                                'read': ![]
                            };
                            await (0x43c + 0x2 * 0x6d4 + -0x14 * 0xe5, CreateMessageSystemService_1[N(0xf8)])({
                                'msg': B,
                                'tenantId': l,
                                'medias': [y],
                                'ticket': r,
                                'userId': m,
                                'scheduleDate': n[N(0x109) + 'te'] ? new Date(Array[O(0xfe)](n[N(0x109) + 'te']) ? n[N(0x109) + 'te'][z] : n[O(0x109) + 'te']) : undefined,
                                'sendType': n[N(0xe6)] || j[O(0xd7)],
                                'status': j[N(0xea)],
                                'idFront': Array[O(0xfe)](n[N(0xbf)]) ? n[N(0xbf)][z] : n[N(0xbf)]
                            });
                        }
                    });
            } else {
                const y = {};
                y[L(0xc3)] = n, y[M(0x140)] = l, y[M(0xe3)] = o, y[L(0xd5)] = r, y[M(0xc1)] = m, y[M(0x109) + 'te'] = n[L(0x109) + 'te'], y[M(0xe6)] = n[M(0xe6)] || j[L(0xd7)], y[M(0x123)] = j[M(0xea)], y[L(0xbf)] = n[M(0xbf)], await (-0x2496 + 0x1 * -0xbe7 + 0x307d, CreateMessageSystemService_1[M(0xf8)])(y);
            }
        }
    } catch (z) {
        console[M(0x13b)](j[M(0x11b)], z);
    }
    return h[M(0x137)]();
};
exports[F(0x10f)] = store;
const edit = async (f, g) => {
    const P = E, Q = E, h = {};
    h[P(0x10a)] = function (n, o) {
        return n instanceof o;
    }, h[P(0xee)] = function (n, o) {
        return n === o;
    }, h[Q(0xf7)] = P(0xe7) + P(0x139);
    const i = h, {messageId: j} = f[P(0xcf)], {tenantId: k} = f[Q(0x12c)], l = +k, {body: m} = f[P(0x10e)];
    try {
        const n = {};
        n[Q(0xf3)] = j, n[Q(0x140)] = l, n[Q(0x10e)] = m;
        const {
            ticketId: o,
            message: p
        } = await (0x1 * 0x1b16 + -0x2183 + 0x66d, EditWhatsAppMessage_1[Q(0xf8)])(n);
    } catch (r) {
        if (i[Q(0x10a)](r, AppError_1[P(0xf8)]) && i[Q(0xee)](r[Q(0x127)], i[Q(0xf7)])) {
            const s = {};
            return s[Q(0x115)] = r[P(0x127)], g[Q(0x123)](-0x1401 * -0x1 + -0x1 * -0x26e1 + -0x3952)[Q(0x147)](s);
        }
        throw r;
    }
    return g[P(0x137)]();
};
exports[E(0xb9)] = edit;
const remove = async (d, e) => {
    const R = E, S = E, f = {};
    f[R(0xdb)] = R(0xf9) + S(0xbb) + 'G';
    const g = f, {messageId: h} = d[R(0xcf)], {tenantId: i} = d[R(0x12c)];
    try {
        await (-0x4 * -0x55f + -0x25c3 * 0x1 + 0x1047, DeleteMessageSystem_1[R(0xf8)])(d[S(0x10e)]['id'], h, i);
    } catch (j) {
        logger_1[S(0xcc)][R(0x115)](R(0xf9) + R(0xbb) + S(0xc4) + j);
        throw new AppError_1[(S(0xf8))](g[S(0xdb)]);
    }
    return e[R(0x137)]();
};
exports[F(0xca)] = remove;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x24ba + -0x31c * -0xa + -0x1a3 * 0x29);
        let h = e[f];
        return h;
    }, b(c, d);
}
const forward = async (d, e) => {
    const T = E, U = F, f = d[T(0x10e)], {user: g} = d;
    for (const h of f[U(0xe8)]) {
        const i = {};
        i[U(0xc1)] = g['id'], i[T(0x140)] = g[T(0x140)], i[T(0x127)] = h, i[U(0x12e)] = f[U(0x12e)], i[U(0x122) + T(0x136)] = h[T(0xf6)], await (0xb4 + -0x23bf + 0x230b, CreateForwardMessageService_1[U(0xf8)])(i);
    }
    return e[U(0x137)]();
};
function a() {
    const V = [
        'ices/EditW',
        'value',
        'params',
        'mediaUrl',
        'qqFMx',
        's/TicketSe',
        'tlgDT',
        'ervices/Cr',
        'ticket',
        'length',
        'mPuRH',
        'forward',
        'NELDl',
        'ead',
        'fIcEB',
        'AcOkm',
        'temService',
        'jbMNT',
        'messagesOf',
        's/MessageS',
        'Wgoml',
        'Read',
        'medias',
        'OYPov',
        'bvrHS',
        'sendType',
        'ERR_EDITIN',
        'messages',
        'FvfbF',
        'wKGTa',
        'ogger',
        '2393762vHgXnR',
        'eSystemSer',
        'TYUeS',
        '../errors/',
        '4935705xLbmiy',
        'SetTicketM',
        '__esModule',
        'messageId',
        'index',
        'Service',
        'ticketId',
        'EkjZc',
        'default',
        'ERR_DELETE',
        'sageSystem',
        'iFEWQ',
        'MessagesAs',
        'SQDZR',
        'isArray',
        '2657961SYgdtm',
        'fault',
        'zislD',
        'dMessageSe',
        '../models/',
        'forEach',
        'ERbvm',
        'aXEnL',
        'obguK',
        '10190GuKFxr',
        'scheduleDa',
        'unmcq',
        '5417900MHIrSK',
        'count',
        'vice',
        'body',
        'store',
        'bvmCY',
        'XLCxT',
        '\x20erro\x20ao\x20c',
        '7121155ZYaJKz',
        'stMessages',
        'error',
        '/DeleteMes',
        'eateForwar',
        'YorCz',
        'eateMessag',
        'essagesAsR',
        'ZwCAU',
        'ensagens.',
        'ListCountM',
        'EixaP',
        'pending',
        'hatsAppMes',
        'hasMore',
        'ticketIdOr',
        'status',
        'RqdVr',
        'uCfch',
        'files',
        'message',
        'QeTCf',
        's/WbotServ',
        '/SetTicket',
        '8GlnCrh',
        'user',
        'xxubo',
        'contact',
        '__importDe',
        'chat',
        '../utils/l',
        '../service',
        'sage',
        'ervices/Li',
        '194izzVlQ',
        'igin',
        'send',
        'try\x20Create',
        'G_WAPP_MSG',
        'LCNUN',
        'log',
        'lNhCl',
        'pageNumber',
        'Ocorreu\x20um',
        'fLine',
        'tenantId',
        'ensagens',
        'MessageSys',
        'WtQtm',
        'CrrWW',
        'query',
        'vJppO',
        'json',
        'ontar\x20as\x20m',
        'GIxXL',
        'edit',
        'ecjkm',
        '_SYSTEM_MS',
        'wTicketSer',
        'vgZik',
        'rvice',
        'idFront',
        '../helpers',
        'userId',
        'defineProp',
        'msg',
        'G:\x20',
        'AppError',
        'fromMe',
        'Message',
        '6012114dFSkHg',
        'rvices/Sho',
        'remove',
        'erty',
        'logger'
    ];
    a = function () {
        return V;
    };
    return a();
}
exports[F(0xd8)] = forward;