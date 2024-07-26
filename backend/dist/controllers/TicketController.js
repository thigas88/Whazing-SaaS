'use strict';
const O = b, P = b;
(function (c, d) {
    const M = b, N = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(M(0x175)) / (-0x2 * -0xc92 + -0x1a56 + 0x1 * 0x133) + parseInt(M(0x11f)) / (0x6e6 + 0x21cb + -0x1 * 0x28af) + parseInt(M(0x1dd)) / (0x1a36 + 0xeb1 + -0x28e4) * (-parseInt(M(0x190)) / (-0x4fa + -0x2542 + 0x2a40)) + -parseInt(M(0x117)) / (-0x174d + -0x3e * -0x79 + 0x5fc * -0x1) * (parseInt(M(0x1db)) / (-0xdb * -0x2d + 0xb3b + 0x31b4 * -0x1)) + parseInt(N(0x16f)) / (0x77c + 0xee1 + 0x2 * -0xb2b) * (parseInt(M(0x11a)) / (0xa8 * 0x37 + 0x1 * 0x1687 + -0x3a97)) + parseInt(M(0x193)) / (-0xa09 + 0x80 * 0x14 + 0x12) + parseInt(N(0x16d)) / (0x1c93 + 0x1e3c + -0x3ac5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x28a12 + -0x115 * -0x58b + 0xc553 * -0x1));
var __importDefault = this && this[O(0x1cb) + O(0x1b6)] || function (c) {
    const Q = O;
    return c && c[Q(0x17f)] ? c : { 'default': c };
};
const q = {};
q[P(0x12b)] = !![], Object[P(0x158) + O(0x11b)](exports, O(0x17f), q), exports[P(0x151)] = exports[O(0x16c) + 'ts'] = exports[P(0x1a1) + P(0x1bf)] = exports[P(0x1cd)] = exports[P(0x1bc)] = exports[O(0x155)] = exports[P(0x19b)] = exports[P(0x17b)] = void (0x1c78 + -0x189d * 0x1 + -0x3db);
const sequelize_1 = require(O(0x1ae)), socket_1 = require(P(0x16a) + P(0x1bf)), Message_1 = __importDefault(require(P(0x173) + P(0x13d))), CreateLogTicketService_1 = __importDefault(require(O(0x17c) + O(0x1e6) + O(0x1e4) + O(0x170) + P(0x166))), CreateTicketService_1 = __importDefault(require(P(0x17c) + P(0x1e6) + O(0x1e4) + P(0x122) + O(0x1e5))), DeleteTicketService_1 = __importDefault(require(P(0x17c) + P(0x1e6) + P(0x127) + P(0x1ac) + O(0x1e5))), ListTicketsService_1 = __importDefault(require(P(0x17c) + P(0x1e6) + P(0x1e8) + O(0x1eb) + O(0x1d3))), ShowLogTicketService_1 = __importDefault(require(O(0x17c) + P(0x1e6) + P(0x1ab) + P(0x1e7) + P(0x1b2))), ShowTicketService_1 = __importDefault(require(P(0x17c) + P(0x1e6) + P(0x1ab) + P(0x14b) + O(0x1a3))), UpdateTicketService_1 = __importDefault(require(O(0x17c) + P(0x1e6) + O(0x1ca) + O(0x122) + P(0x1e5))), closeTicketsService_1 = require(O(0x17c) + O(0x1e6) + P(0x1a4) + P(0x118) + O(0x1e5)), delTicketsService_1 = require(P(0x17c) + P(0x1e6) + O(0x177) + P(0x1e0) + O(0x1a3)), Whatsapp_1 = __importDefault(require(O(0x173) + O(0x161))), AppError_1 = __importDefault(require(O(0x1a7) + O(0x1e1))), CreateMessageSystemService_1 = __importDefault(require(O(0x17c) + O(0x1f0) + P(0x1c3) + P(0x19d) + O(0x148) + O(0x1a3))), pupa_1 = require(O(0x1cc) + O(0x13b)), Ticket_1 = __importDefault(require(P(0x173) + P(0x138))), ListSettingsService_1 = __importDefault(require(O(0x17c) + P(0x1be) + P(0x157) + O(0x143) + O(0x1b2))), index = async (e, f) => {
        const R = O, S = O, {
                tenantId: g,
                profile: h
            } = e[R(0x14a)], {
                searchParam: i,
                pageNumber: j,
                status: k,
                date: l,
                showAll: m,
                withUnreadMessages: n,
                queuesIds: o,
                isNotAssignedUser: p,
                includeNotQueueDefined: r
            } = e[R(0x130)], s = e[S(0x14a)]['id'], t = {};
        t[R(0x15c) + 'm'] = i, t[S(0x1ea)] = j, t[R(0x149)] = k, t[R(0x121)] = l, t[R(0x1d0)] = m, t[S(0x163)] = s, t[S(0x182) + S(0x16b)] = n, t[R(0x195)] = o, t[R(0x1ce) + R(0x1dc)] = p, t[R(0x141) + R(0x18a) + 'ed'] = r, t[R(0x1b0)] = g, t[R(0x186)] = h;
        const {
                tickets: u,
                count: v,
                hasMore: w
            } = await (-0x1471 + 0x112 * 0x1d + -0xa99, ListTicketsService_1[S(0x174)])(t), x = {};
        return x[R(0x18b)] = u, x[R(0x13e)] = v, x[S(0x184)] = w, f[R(0x149)](-0xa7b + -0x1 * 0x21a0 + 0x2ce3 * 0x1)[R(0x1a6)](x);
    };
exports[P(0x17b)] = index;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x25 * 0x2b + 0xf8f * -0x1 + 0xa6d * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const store = async (i, j) => {
    const T = O, U = P, k = {};
    k[T(0x1b4)] = U(0x123) + T(0x197) + T(0x1e3) + T(0x18f), k[U(0x178)] = function (C, D) {
        return C === D;
    }, k[T(0x1d1)] = U(0x1c4), k[T(0x16e)] = T(0x135), k[T(0x1a9)] = U(0x164) + T(0x129) + 'ts', k[U(0x156)] = T(0x167), k[T(0x14d)] = T(0x168), k[T(0x162)] = function (C, D) {
        return C === D;
    }, k[T(0x1d9)] = T(0x1ed), k[T(0x134)] = function (C, D) {
        return C != D;
    }, k[T(0x187)] = function (C, D) {
        return C == D;
    }, k[T(0x192)] = function (C, D) {
        return C !== D;
    }, k[T(0x12a)] = T(0x132), k[U(0x1b9)] = U(0x17d), k[U(0x15b)] = function (C, D) {
        return C === D;
    }, k[U(0x176)] = T(0x140), k[T(0x160)] = T(0x1cf);
    const l = k, {tenantId: m} = i[T(0x14a)], {
            contactId: n,
            status: o,
            userId: p,
            channel: r,
            channelId: s
        } = i[U(0x116)], t = {};
    t[T(0x149)] = l[T(0x156)];
    const u = {};
    u[U(0x149)] = l[T(0x14d)];
    const v = {
        [sequelize_1['Op']['or']]: [
            t,
            u
        ]
    };
    v[T(0x19e)] = n, v[U(0x1b0)] = m, v[T(0x188)] = r;
    const w = {};
    w[T(0x1b3)] = v;
    const x = await Ticket_1[U(0x174)][U(0x1d7)](w), y = await (-0x116b + 0x1 * -0x73c + 0x18a7, ListSettingsService_1[T(0x174)])(m), z = l[U(0x162)](y?.[T(0x1b5)](C => {
            const V = U, W = T;
            if (l[V(0x178)](l[V(0x1d1)], l[W(0x16e)]))
                throw new t[(W(0x174))](l[W(0x1b4)]);
            else
                return l[V(0x178)](C[V(0x1df)], l[W(0x1a9)]);
        })?.[T(0x12b)], l[T(0x1d9)]) ? 'S' : 'N';
    if (x && !!x[T(0x163)] && l[T(0x134)](x[U(0x163)], p) && l[T(0x187)](z, 'S')) {
        if (l[U(0x192)](l[U(0x12a)], l[U(0x12a)])) {
            const D = {};
            return D[U(0x191)] = v[U(0x191)], u[U(0x149)](-0xbad * 0x1 + 0x1d20 * -0x1 + 0x2ac1)[T(0x1a6)](D);
        } else
            throw new AppError_1[(T(0x174))](l[U(0x1b4)]);
    }
    if (x) {
        if (l[U(0x192)](l[U(0x1b9)], l[U(0x1b9)])) {
            const E = {};
            return E[U(0x174)] = j, w && E[U(0x17f)] ? i : E;
        } else
            return j[U(0x149)](0x1b50 + -0x10f3 + -0x995)[U(0x1a6)](x);
    }
    const A = {};
    A[T(0x19e)] = n, A[U(0x149)] = o, A[U(0x163)] = p, A[T(0x1b0)] = m, A[U(0x188)] = r, A[U(0x159)] = s;
    const B = await (0x1939 + -0x1 * 0x43c + -0x14fd, CreateTicketService_1[T(0x174)])(A);
    if (!p) {
        if (l[U(0x15b)](l[T(0x176)], l[U(0x176)])) {
            const E = (-0x265a * 0x1 + -0x147 * -0x10 + 0x2 * 0x8f5, socket_1[T(0x1c1)])();
            E['to'](m + ':' + B[U(0x149)])[U(0x1c7)](m + T(0x15e), {
                'action': l[U(0x160)],
                'ticket': B
            });
        } else
            return u[U(0x149)](0x114e + -0x1008 + -0x1 * 0x7e)[T(0x1a6)](v);
    }
    return j[T(0x149)](0xa74 + 0x31 * -0x62 + -0x1 * -0x916)[U(0x1a6)](B);
};
exports[O(0x19b)] = store;
const show = async (i, j) => {
    const X = P, Y = P, k = {};
    k[X(0x172)] = X(0x168), k[Y(0x196)] = Y(0x115) + Y(0x19c), k[Y(0x18d)] = X(0x1c2);
    const l = k, {ticketId: m} = i[Y(0x1d8)], {tenantId: n} = i[X(0x14a)], o = i[Y(0x14a)]['id'], p = {};
    p['id'] = m, p[Y(0x1b0)] = n;
    const r = await (-0x1ecb + 0x1001 + -0x4ee * -0x3, ShowTicketService_1[Y(0x174)])(p), s = { [sequelize_1['Op'][X(0x154)]]: null }, t = {};
    t[Y(0x19e)] = r[X(0x19e)], t[X(0x11e) + 'te'] = s, t[Y(0x149)] = l[X(0x172)];
    const u = t, v = {};
    v[Y(0x1b3)] = u;
    const w = await Message_1[Y(0x174)][Y(0x1ba)](v);
    r[X(0x1d4) + 'ue'](l[Y(0x196)], w);
    const x = {};
    return x[Y(0x163)] = o, x[X(0x171)] = m, x[X(0x1bd)] = l[Y(0x18d)], await (0x2 * 0xa2b + -0xd7e + -0x6d8, CreateLogTicketService_1[Y(0x174)])(x), j[X(0x149)](-0x1 * -0xc89 + -0x1 * -0xf09 + 0xd65 * -0x2)[Y(0x1a6)](r);
};
exports[O(0x155)] = show;
const update = async (l, m) => {
    const Z = O, a0 = P, n = {};
    n[Z(0x1e2)] = a0(0x1cf), n[Z(0x11d)] = Z(0x19a) + Z(0x1ef) + Z(0x1e9) + 'o', n[a0(0x14f)] = Z(0x1da) + a0(0x136) + Z(0x1bb), n[a0(0x1ad)] = function (z, A) {
        return z === A;
    }, n[Z(0x194)] = a0(0x180), n[Z(0x19f)] = Z(0x185), n[a0(0x165)] = a0(0x1b8), n[a0(0x183)] = function (z, A) {
        return z === A;
    }, n[a0(0x131)] = a0(0x179), n[Z(0x1f3)] = a0(0x15f), n[a0(0x181)] = Z(0x168);
    const o = n, {ticketId: p} = l[Z(0x1d8)], {tenantId: r} = l[Z(0x14a)], s = l[Z(0x14a)]['id'], {isTransference: t} = l[Z(0x116)], u = { ...l[a0(0x116)] };
    u[a0(0x1b0)] = r;
    const v = u, w = {};
    w[Z(0x1af)] = v, w[Z(0x171)] = p, w[a0(0x198) + Z(0x147)] = t, w[a0(0x12c) + Z(0x1f1)] = s;
    const {ticket: x} = await (0x1862 + 0x14d * -0x10 + -0x1c9 * 0x2, UpdateTicketService_1[Z(0x174)])(w);
    if (o[Z(0x1ad)](v[Z(0x149)], o[Z(0x194)])) {
        if (o[Z(0x1ad)](o[a0(0x19f)], o[Z(0x165)])) {
            const z = (0x171c + -0x4b4 + 0x8 * -0x24d, h[a0(0x1c1)])(), A = {};
            A[Z(0x137)] = o[a0(0x1e2)], A[a0(0x1a8)] = l, z['to'](i + ':' + j[a0(0x149)])[a0(0x1c7)](k + a0(0x15e), A);
        } else {
            const z = {};
            z['id'] = x[Z(0x126)], z[a0(0x1b0)] = r;
            const A = {};
            A[Z(0x1b3)] = z;
            const B = await Whatsapp_1[Z(0x174)][Z(0x1d7)](A);
            if (B?.[Z(0x15d) + a0(0x18e)]) {
                if (o[Z(0x183)](o[Z(0x131)], o[a0(0x131)])) {
                    const C = await x[Z(0x119) + Z(0x1c8)](), D = {};
                    D[Z(0x1ec)] = C, D[a0(0x12f)] = x[Z(0x1d6)][Z(0x12f)];
                    const E = (0x1899 + -0x1934 + 0x9b, pupa_1[a0(0x11c)])(B[Z(0x15d) + a0(0x18e)] || '', D), F = {};
                    F[Z(0x116)] = E, F[Z(0x18c)] = !![], F[a0(0x144)] = !![];
                    const G = {};
                    G[Z(0x1b7)] = F, G[a0(0x1b0)] = r, G[a0(0x1a8)] = x, G[Z(0x163)] = l[Z(0x14a)]['id'], G[Z(0x17a)] = o[Z(0x1f3)], G[Z(0x149)] = o[Z(0x181)], G[Z(0x198)] = ![], G[Z(0x14c)] = ![];
                    const H = G;
                    await (-0xde * 0x14 + 0x1 * -0xd46 + 0x1e9e, CreateMessageSystemService_1[Z(0x174)])(H);
                    const I = {};
                    I[Z(0x1ee) + Z(0x13d)] = !![], await x[a0(0x1bc)](I);
                } else {
                    const K = {};
                    K[Z(0x149)] = k, K[Z(0x1de)] = K, K[Z(0x1d5)] = L, K[Z(0x126)] = n, K[a0(0x139)] = o, j[Z(0x1b1)](o[Z(0x11d)], K);
                    const L = {};
                    return L[Z(0x191)] = o[Z(0x14f)], p[a0(0x149)](-0xbe4 + -0x51 * 0x5c + 0x38c * 0xc)[a0(0x1a6)](L);
                }
            }
        }
    }
    return m[Z(0x149)](-0x2303 + -0x1 * 0x1eec + 0x3 * 0x163d)[a0(0x1a6)](x);
};
exports[O(0x1bc)] = update;
const remove = async (f, g) => {
    const a1 = O, a2 = O, h = {};
    h[a1(0x1c6)] = a2(0x124), h[a1(0x1a0)] = a1(0x189) + a2(0x153);
    const i = h, {ticketId: j} = f[a2(0x1d8)], {tenantId: k} = f[a2(0x14a)], l = f[a1(0x14a)]['id'], m = {};
    m['id'] = j, m[a2(0x1b0)] = k, m[a1(0x163)] = l;
    const n = await (0x1 * -0xb9e + 0x26b6 + -0x1b18, DeleteTicketService_1[a2(0x174)])(m), o = (-0x12c8 * 0x2 + 0x1311 + 0x127f, socket_1[a1(0x1c1)])();
    o['to'](k + ':' + n[a2(0x149)])['to'](k + ':' + j)['to'](k + (a2(0x14e) + a1(0x125)))[a1(0x1c7)](k + a2(0x15e), {
        'action': i[a1(0x1c6)],
        'ticketId': +j
    });
    const p = {};
    return p[a1(0x191)] = i[a1(0x1a0)], g[a1(0x149)](0x1c * 0x1 + -0x1738 + 0x17e4)[a1(0x1a6)](p);
};
function a() {
    const a9 = [
        'hasMore',
        'McCTb',
        'profile',
        'ImgAF',
        'channel',
        'ticket\x20del',
        'QueueDefin',
        'tickets',
        'fromMe',
        'BUQjM',
        'ssage',
        '\x20usuário',
        '132geMjdy',
        'message',
        'zaUAJ',
        '3737934HDSILv',
        'pshqs',
        'queuesIds',
        'Niczm',
        'atribuido\x20',
        'isTransfer',
        'pGhhU',
        'Filtros\x20fa',
        'store',
        'essages',
        'eateMessag',
        'contactId',
        'ZHYSn',
        'qcrRk',
        'showLogsTi',
        'ssfully',
        'vice',
        'rvices/clo',
        'KixSZ',
        'json',
        '../errors/',
        'ticket',
        'KQeOv',
        'qaeXC',
        'rvices/Sho',
        'eteTicketS',
        'kBEcB',
        'sequelize',
        'ticketData',
        'tenantId',
        'warn',
        'Service',
        'where',
        'fVqCV',
        'find',
        'fault',
        'msg',
        'nsjPp',
        'avNZe',
        'findAll',
        'provided',
        'update',
        'type',
        's/SettingS',
        'cket',
        'TBWNl',
        'getIO',
        'access',
        'ervices/Cr',
        'IIAZd',
        'DCWFk',
        'lLrdJ',
        'emit',
        'ocol',
        'UEBnb',
        'rvices/Upd',
        '__importDe',
        '../utils/p',
        'remove',
        'isNotAssig',
        'create',
        'showAll',
        'oBRHR',
        'KCnxG',
        'rvice',
        'setDataVal',
        'endDate',
        'contact',
        'findOne',
        'params',
        'wDCDZ',
        'All\x20filter',
        '1381452zwWKpP',
        'nedUser',
        '76821VTwfFs',
        'startDate',
        'key',
        'TicketsSer',
        'AppError',
        'dufrs',
        'para\x20outro',
        'rvices/Cre',
        'ervice',
        's/TicketSe',
        'wLogTicket',
        'rvices/Lis',
        'solicitaçã',
        'pageNumber',
        'tTicketsSe',
        'protocol',
        'enabled',
        'isFarewell',
        'ltando\x20na\x20',
        's/MessageS',
        'est',
        'pyrGQ',
        'YIQdh',
        'scheduledM',
        'body',
        '20MCaEVD',
        'seTicketsS',
        'ensureProt',
        '929488XUwhjp',
        'erty',
        'pupa',
        'mHFul',
        'scheduleDa',
        '280344GdYoKA',
        'tsService',
        'date',
        'ateTicketS',
        'Ticket\x20já\x20',
        'delete',
        'ion',
        'whatsappId',
        'rvices/Del',
        'SqVvZ',
        'ignedTicke',
        'aEScl',
        'value',
        'userIdRequ',
        'hlOTb',
        'RGavs',
        'name',
        'query',
        'tIkOM',
        'rierN',
        'iGApL',
        'nqlyX',
        'feaPX',
        's\x20must\x20be\x20',
        'action',
        'Ticket',
        'isGroup',
        'osed\x20succe',
        'upa',
        'HJdoJ',
        'Message',
        'count',
        'AYewY',
        'gSLUm',
        'includeNot',
        'lPlhH',
        'stSettings',
        'read',
        'yRMLN',
        'EvbZG',
        'ence',
        'eSystemSer',
        'status',
        'user',
        'wTicketSer',
        'note',
        'MNpmm',
        ':notificat',
        'eXowq',
        'Tickets\x20cl',
        'delTickets',
        'qLpqE',
        'eted',
        'not',
        'show',
        'ZmcWn',
        'ervices/Li',
        'defineProp',
        'channelId',
        'faKCK',
        'vEAzx',
        'searchPara',
        'farewellMe',
        ':ticket',
        'bot',
        'qsyTz',
        'Whatsapp',
        'QwBle',
        'userId',
        'NotViewAss',
        'lIHjn',
        'etService',
        'open',
        'pending',
        'TDhyZ',
        '../libs/so',
        'Messages',
        'closeTicke',
        '12443770rWyUOK',
        'mHwAi',
        '7ynctut',
        'ateLogTick',
        'ticketId',
        'AIHiS',
        '../models/',
        'default',
        '358904UlzNpa',
        'ajSMQ',
        'rvices/del',
        'qJnac',
        'UHEfr',
        'sendType',
        'index',
        '../service',
        'WFDUn',
        'deQEe',
        '__esModule',
        'closed',
        'wHxLE',
        'withUnread',
        'IxGpi'
    ];
    a = function () {
        return a9;
    };
    return a();
}
exports[O(0x1cd)] = remove;
const showLogsTicket = async (d, e) => {
    const a3 = P, a4 = P, {ticketId: f} = d[a3(0x1d8)], g = {};
    g[a3(0x171)] = f;
    const h = await (0x5 * 0xe5 + -0x23e + -0x23b * 0x1, ShowLogTicketService_1[a3(0x174)])(g);
    return e[a4(0x149)](-0x35 * 0x6a + 0x82 * -0x2 + 0x17be * 0x1)[a4(0x1a6)](h);
};
exports[O(0x1a1) + O(0x1bf)] = showLogsTicket;
const closeTickets = async (h, i) => {
    const a5 = P, a6 = P, j = {
            'iGApL': function (k, l) {
                return k === l;
            },
            'pGhhU': a5(0x164) + a6(0x129) + 'ts',
            'HJdoJ': a6(0x19a) + a5(0x1ef) + a6(0x1e9) + 'o',
            'DCWFk': a6(0x1da) + a5(0x136) + a5(0x1bb),
            'yRMLN': function (k, l) {
                return k !== l;
            },
            'faKCK': a6(0x146),
            'pyrGQ': function (k, l) {
                return k(l);
            },
            'SqVvZ': function (k, l) {
                return k || l;
            },
            'hlOTb': a5(0x142),
            'qLpqE': a6(0x1c0),
            'qaeXC': a5(0x150) + a6(0x13a) + a5(0x1a2),
            'KixSZ': a6(0x1d2)
        };
    try {
        if (j[a6(0x145)](j[a5(0x15a)], j[a6(0x15a)]))
            return j[a5(0x133)](d[a5(0x1df)], j[a6(0x199)]);
        else {
            const l = j[a5(0x1f2)](Number, h[a5(0x14a)]['id']), m = j[a5(0x1f2)](Number, h[a5(0x14a)][a5(0x1b0)]), {
                    status: n,
                    startDate: o,
                    endDate: p,
                    whatsappId: r,
                    isGroup: s
                } = h[a6(0x116)];
            if (j[a5(0x128)](!n, !o) || !p || !r || j[a6(0x133)](s, undefined)) {
                if (j[a6(0x145)](j[a5(0x12d)], j[a5(0x152)])) {
                    const v = {};
                    v[a5(0x149)] = n, v[a5(0x1de)] = o, v[a5(0x1d5)] = p, v[a6(0x126)] = r, v[a6(0x139)] = s, console[a5(0x1b1)](j[a6(0x13c)], v);
                    const w = {};
                    return w[a6(0x191)] = j[a5(0x1c5)], i[a5(0x149)](-0x13 * -0x144 + 0x1e4e + -0x34ca)[a6(0x1a6)](w);
                } else {
                    const y = {};
                    y[a6(0x149)] = k, y[a6(0x1de)] = l, y[a6(0x1d5)] = m, y[a5(0x126)] = n, y[a6(0x139)] = o, j[a6(0x1b1)](j[a5(0x13c)], y);
                    const z = {};
                    return z[a6(0x191)] = j[a6(0x1c5)], p[a5(0x149)](0x2628 + 0x195 + -0x262d)[a5(0x1a6)](z);
                }
            }
            const t = {};
            t[a6(0x149)] = n, t[a5(0x1de)] = o, t[a6(0x1d5)] = p, t[a6(0x126)] = r, t[a5(0x139)] = s, t[a6(0x163)] = l, t[a6(0x1b0)] = m, await (-0xb * -0x31f + -0x1 * 0x2515 + 0x16 * 0x20, closeTicketsService_1[a6(0x16c) + a5(0x120)])(t);
            const u = {};
            return u[a5(0x191)] = j[a5(0x1aa)], i[a6(0x149)](0x1 * 0xe1e + 0x1 * -0x4af + 0x8a7 * -0x1)[a6(0x1a6)](u);
        }
    } catch (y) {
        if (j[a5(0x133)](j[a6(0x1a5)], j[a5(0x1a5)])) {
            const z = {};
            return z[a5(0x191)] = y[a6(0x191)], i[a6(0x149)](0x202 + 0x245a + 0xa * -0x3a4)[a6(0x1a6)](z);
        } else {
            const B = {};
            return B[a6(0x191)] = f[a6(0x191)], e[a5(0x149)](-0x1 * 0x65f + -0x9 * 0x1fd + 0x1a38)[a5(0x1a6)](B);
        }
    }
};
exports[O(0x16c) + 'ts'] = closeTickets;
const delTickets = async (i, j) => {
    const a7 = P, a8 = O, k = {};
    k[a7(0x17e)] = function (m, n) {
        return m || n;
    }, k[a8(0x1c9)] = function (m, n) {
        return m === n;
    }, k[a8(0x13f)] = a7(0x19a) + a7(0x1ef) + a8(0x1e9) + 'o', k[a7(0x169)] = a8(0x1da) + a8(0x136) + a7(0x1bb), k[a7(0x12e)] = a7(0x150) + a8(0x13a) + a8(0x1a2);
    const l = k;
    try {
        const {
            status: m,
            startDate: n,
            endDate: o,
            whatsappId: p,
            isGroup: r
        } = i[a8(0x116)];
        if (l[a8(0x17e)](!m, !n) || !o || !p || l[a8(0x1c9)](r, undefined)) {
            const u = {};
            u[a7(0x149)] = m, u[a7(0x1de)] = n, u[a7(0x1d5)] = o, u[a8(0x126)] = p, u[a7(0x139)] = r, console[a8(0x1b1)](l[a8(0x13f)], u);
            const v = {};
            return v[a8(0x191)] = l[a8(0x169)], j[a7(0x149)](0x22bd + -0x1662 + 0x133 * -0x9)[a7(0x1a6)](v);
        }
        const s = {};
        s[a8(0x149)] = m, s[a7(0x1de)] = n, s[a8(0x1d5)] = o, s[a7(0x126)] = p, s[a7(0x139)] = r, await (-0x1 * -0x228a + 0x1 * -0xf3b + 0x1 * -0x134f, delTicketsService_1[a8(0x151) + a7(0x1b2)])(s);
        const t = {};
        return t[a7(0x191)] = l[a7(0x12e)], j[a8(0x149)](-0x1d3c + -0x91d + 0x9f * 0x3f)[a8(0x1a6)](t);
    } catch (w) {
        const x = {};
        return x[a7(0x191)] = w[a8(0x191)], j[a7(0x149)](-0x27 * -0xcc + 0x12f6 * -0x1 + -0xa2a)[a7(0x1a6)](x);
    }
};
exports[P(0x151)] = delTickets;