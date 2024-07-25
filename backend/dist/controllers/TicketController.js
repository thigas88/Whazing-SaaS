'use strict';
const O = b, P = b;
(function (c, d) {
    const M = b, N = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(M(0x11b)) / (0x27 * 0xc + -0x20e * -0x9 + -0x7 * 0x2e7) * (-parseInt(N(0x16b)) / (-0xd * -0x1dc + 0x6dd * -0x1 + -0x114d)) + -parseInt(M(0xc7)) / (0x1777 + 0x23f3 * -0x1 + -0x7 * -0x1c9) + parseInt(N(0x145)) / (-0x1df9 + 0x3 * 0x657 + -0x57c * -0x2) * (-parseInt(N(0x176)) / (-0x25a * -0x4 + 0x142 * -0x16 + -0x1f * -0x97)) + -parseInt(N(0x15d)) / (0x1f64 + 0x1 * -0x160d + -0x951) + parseInt(M(0xbb)) / (-0xeb9 + -0x755 * 0x1 + 0x1615) * (-parseInt(M(0x14a)) / (0xe70 + -0x2706 + -0x1 * -0x189e)) + -parseInt(N(0x181)) / (-0x3a0 + -0x266d + -0x2 * -0x150b) * (parseInt(N(0x191)) / (-0xfca + -0x5 * 0x776 + 0x3522)) + parseInt(N(0xe9)) / (-0x4 * -0x2ea + -0x2470 + 0x9b * 0x29);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xd0ce1 + -0x1af92 + 0x14571 * 0x16));
var __importDefault = this && this[O(0xfd) + O(0x162)] || function (c) {
    const Q = O;
    return c && c[Q(0x11e)] ? c : { 'default': c };
};
const q = {};
q[O(0x109)] = !![], Object[O(0x144) + O(0xed)](exports, P(0x11e), q), exports[P(0xc5)] = exports[O(0xcb) + 'ts'] = exports[O(0xf1) + O(0x10b)] = exports[O(0x159)] = exports[P(0x186)] = exports[P(0xd1)] = exports[P(0x160)] = exports[O(0x185)] = void (0x1 * -0x1a1d + 0x2422 + -0x87 * 0x13);
const sequelize_1 = require(P(0x103)), socket_1 = require(P(0xca) + P(0x10b)), Message_1 = __importDefault(require(O(0x120) + O(0x178))), CreateLogTicketService_1 = __importDefault(require(P(0x117) + P(0xe3) + P(0xbc) + P(0x121) + O(0x194))), CreateTicketService_1 = __importDefault(require(P(0x117) + O(0xe3) + P(0xbc) + P(0xf4) + P(0x170))), DeleteTicketService_1 = __importDefault(require(O(0x117) + O(0xe3) + O(0x123) + O(0x10c) + O(0x170))), ListTicketsService_1 = __importDefault(require(O(0x117) + O(0xe3) + P(0x150) + P(0x100) + O(0xd9))), ShowLogTicketService_1 = __importDefault(require(O(0x117) + O(0xe3) + P(0x15e) + P(0x15c) + O(0x180))), ShowTicketService_1 = __importDefault(require(O(0x117) + O(0xe3) + O(0x15e) + O(0x114) + P(0xd5))), UpdateTicketService_1 = __importDefault(require(O(0x117) + P(0xe3) + O(0xd0) + P(0xf4) + P(0x170))), closeTicketsService_1 = require(O(0x117) + O(0xe3) + P(0x142) + P(0x132) + P(0x170)), delTicketsService_1 = require(O(0x117) + O(0xe3) + O(0x17a) + P(0xc3) + O(0xd5)), Whatsapp_1 = __importDefault(require(P(0x120) + P(0x192))), AppError_1 = __importDefault(require(P(0x124) + O(0x18e))), CreateMessageSystemService_1 = __importDefault(require(P(0x117) + O(0xd6) + O(0x193) + P(0xcd) + O(0x13b) + P(0xd5))), pupa_1 = require(P(0xfa) + P(0xea)), Ticket_1 = __importDefault(require(P(0x120) + O(0x130))), ListSettingsService_1 = __importDefault(require(O(0x117) + P(0x148) + P(0x189) + P(0x12b) + P(0x180))), index = async (e, f) => {
        const R = P, S = P, {
                tenantId: g,
                profile: h
            } = e[R(0xfb)], {
                searchParam: i,
                pageNumber: j,
                status: k,
                date: l,
                showAll: m,
                withUnreadMessages: n,
                queuesIds: o,
                isNotAssignedUser: p,
                includeNotQueueDefined: r
            } = e[S(0xdc)], s = e[R(0xfb)]['id'], t = {};
        t[S(0x19e) + 'm'] = i, t[S(0xcf)] = j, t[S(0x115)] = k, t[S(0x101)] = l, t[S(0xe0)] = m, t[S(0x174)] = s, t[R(0x10f) + R(0x158)] = n, t[S(0x172)] = o, t[S(0xe4) + S(0x111)] = p, t[R(0x19c) + S(0x118) + 'ed'] = r, t[S(0x11a)] = g, t[R(0x140)] = h;
        const {
                tickets: u,
                count: v,
                hasMore: w
            } = await (-0x267b + -0x258c + 0x1 * 0x4c07, ListTicketsService_1[S(0x14f)])(t), x = {};
        return x[S(0x171)] = u, x[R(0x19a)] = v, x[R(0xc9)] = w, f[R(0x115)](-0x6 * -0x3c1 + -0x419 * -0x2 + -0x1df0)[S(0x164)](x);
    };
exports[P(0x185)] = index;
const store = async (i, j) => {
    const T = O, U = P, k = {};
    k[T(0x161)] = U(0x168) + T(0x16a) + T(0x143) + 'o', k[T(0xd7)] = T(0xc4) + T(0x125) + T(0x119), k[U(0xd2)] = function (C, D) {
        return C === D;
    }, k[T(0x173)] = U(0xba), k[U(0x112)] = T(0xfc), k[U(0x133)] = U(0x17b) + T(0xda) + 'ts', k[T(0xc0)] = T(0x167), k[T(0x102)] = U(0xd4), k[T(0x116)] = T(0x18b), k[U(0x108)] = function (C, D) {
        return C != D;
    }, k[U(0xbf)] = function (C, D) {
        return C == D;
    }, k[U(0x175)] = U(0x13e), k[T(0x166)] = U(0xe2), k[T(0x16e)] = U(0x127) + U(0xd3) + U(0x153) + U(0x10e), k[U(0x128)] = U(0xf9), k[T(0xce)] = U(0x14b), k[U(0x190)] = T(0x19f), k[T(0x16f)] = T(0x122), k[U(0x107)] = U(0xf2);
    const l = k, {tenantId: m} = i[U(0xfb)], {
            contactId: n,
            status: o,
            userId: p,
            channel: r,
            channelId: s
        } = i[T(0x15f)], t = {};
    t[T(0x115)] = l[U(0xc0)];
    const u = {};
    u[T(0x115)] = l[T(0x102)];
    const v = {
        [sequelize_1['Op']['or']]: [
            t,
            u
        ]
    };
    v[T(0x135)] = n, v[U(0x11a)] = m, v[U(0x165)] = r;
    const w = {};
    w[U(0x195)] = v;
    const x = await Ticket_1[T(0x14f)][U(0x152)](w), y = await (-0x1955 + 0x49d * 0x2 + 0x24d * 0x7, ListSettingsService_1[U(0x14f)])(m), z = l[U(0xd2)](y?.[U(0x12a)](C => {
            const V = U, W = U;
            if (l[V(0xd2)](l[V(0x173)], l[W(0x112)])) {
                const E = {};
                E[V(0x115)] = k, E[V(0x179)] = l, E[W(0x163)] = m, E[V(0x129)] = n, E[W(0x11f)] = o, j[V(0xfe)](l[V(0x161)], E);
                const F = {};
                return F[V(0x196)] = l[W(0xd7)], p[W(0x115)](0x5 * 0x2e9 + 0x552 + -0x124f * 0x1)[W(0x164)](F);
            } else
                return l[W(0xd2)](C[W(0xe1)], l[V(0x133)]);
        })?.[T(0x109)], l[U(0x116)]) ? 'S' : 'N';
    if (x && !!x[T(0x174)] && l[U(0x108)](x[T(0x174)], p) && l[U(0xbf)](z, 'S')) {
        if (l[U(0xd2)](l[U(0x175)], l[T(0x166)])) {
            const D = {};
            return D[U(0x196)] = v[T(0x196)], u[T(0x115)](-0x2 * -0xd95 + 0x1483 + -0x2db9)[U(0x164)](D);
        } else
            throw new AppError_1[(T(0x14f))](l[T(0x16e)]);
    }
    if (x)
        return l[T(0xd2)](l[U(0x128)], l[T(0xce)]) ? u[U(0x115)](0x1967 + -0x79 * 0x1 + -0x1826)[T(0x164)](v) : j[U(0x115)](-0x22c8 + -0x7c8 + 0x2b58)[U(0x164)](x);
    const A = {};
    A[U(0x135)] = n, A[U(0x115)] = o, A[U(0x174)] = p, A[U(0x11a)] = m, A[U(0x165)] = r, A[U(0x139)] = s;
    const B = await (0x16b6 + 0x3 * 0x4cc + -0x251a, CreateTicketService_1[U(0x14f)])(A);
    if (!p) {
        if (l[T(0xd2)](l[T(0x190)], l[U(0x16f)])) {
            const F = {};
            return F[T(0x14f)] = j, w && A[U(0x11e)] ? F : F;
        } else {
            const F = (0xd * 0x1d + -0x5 * 0x398 + -0x29 * -0x67, socket_1[T(0x113)])();
            F['to'](m + ':' + B[U(0x115)])[U(0xff)](m + U(0x157), {
                'action': l[U(0x107)],
                'ticket': B
            });
        }
    }
    return j[U(0x115)](0x5f * -0xe + 0x83 * 0x1d + 0x1 * -0x8dd)[T(0x164)](B);
};
exports[O(0x160)] = store;
const show = async (i, j) => {
    const X = P, Y = P, k = {};
    k[X(0x131)] = X(0xd4), k[X(0x17f)] = X(0x11d) + Y(0x105), k[X(0x177)] = X(0x1a2);
    const l = k, {ticketId: m} = i[X(0x141)], {tenantId: n} = i[X(0xfb)], o = i[X(0xfb)]['id'], p = {};
    p['id'] = m, p[X(0x11a)] = n;
    const r = await (0x1873 + 0x2427 + -0x3c9a, ShowTicketService_1[X(0x14f)])(p), s = { [sequelize_1['Op'][X(0x182)]]: null }, t = {};
    t[X(0x135)] = r[Y(0x135)], t[X(0xee) + 'te'] = s, t[Y(0x115)] = l[Y(0x131)];
    const u = t, v = {};
    v[Y(0x195)] = u;
    const w = await Message_1[Y(0x14f)][Y(0xef)](v);
    r[X(0x15b) + 'ue'](l[Y(0x17f)], w);
    const x = {};
    return x[X(0x174)] = o, x[Y(0xf3)] = m, x[X(0xcc)] = l[X(0x177)], await (0x3 * -0x47 + -0x2618 + 0x26ed, CreateLogTicketService_1[X(0x14f)])(x), j[X(0x115)](-0x27 * 0x2 + -0x26da + 0x27f0)[Y(0x164)](r);
};
exports[O(0xd1)] = show;
const update = async (l, m) => {
    const Z = O, a0 = O, n = {};
    n[Z(0xdb)] = Z(0xf2), n[Z(0xe8)] = Z(0x168) + a0(0x16a) + a0(0x143) + 'o', n[Z(0x18a)] = Z(0xc4) + Z(0x125) + Z(0x119), n[Z(0x155)] = function (z, A) {
        return z === A;
    }, n[a0(0x136)] = Z(0xf8), n[a0(0xc6)] = function (z, A) {
        return z !== A;
    }, n[a0(0x12f)] = Z(0x126), n[a0(0xb9)] = function (z, A) {
        return z !== A;
    }, n[a0(0x184)] = a0(0x13f), n[Z(0x188)] = Z(0xf6), n[Z(0x156)] = Z(0x183), n[Z(0x16d)] = a0(0xd4);
    const o = n, {ticketId: p} = l[a0(0x141)], {tenantId: r} = l[Z(0xfb)], s = l[a0(0xfb)]['id'], {isTransference: t} = l[a0(0x15f)], u = { ...l[Z(0x15f)] };
    u[a0(0x11a)] = r;
    const v = u, w = {};
    w[Z(0xdf)] = v, w[a0(0xf3)] = p, w[a0(0xf7) + Z(0x106)] = t, w[a0(0x147) + a0(0x17c)] = s;
    const {ticket: x} = await (0x1bda + 0x23d * 0xf + -0x1a9 * 0x25, UpdateTicketService_1[a0(0x14f)])(w);
    if (o[Z(0x155)](v[Z(0x115)], o[Z(0x136)])) {
        if (o[Z(0xc6)](o[Z(0x12f)], o[a0(0x12f)])) {
            const z = (-0x1 * 0x12b5 + 0x6cf + -0x5f3 * -0x2, h[a0(0x113)])(), A = {};
            A[a0(0x12c)] = o[a0(0xdb)], A[a0(0x14e)] = l, z['to'](i + ':' + j[Z(0x115)])[a0(0xff)](k + a0(0x157), A);
        } else {
            const z = {};
            z['id'] = x[a0(0x129)], z[Z(0x11a)] = r;
            const A = {};
            A[Z(0x195)] = z;
            const B = await Whatsapp_1[a0(0x14f)][a0(0x152)](A);
            if (B?.[a0(0x197) + Z(0x12d)]) {
                if (o[Z(0xb9)](o[a0(0x184)], o[Z(0x188)])) {
                    const C = await x[Z(0x11c) + a0(0x187)](), D = {};
                    D[Z(0xc1)] = C, D[Z(0x17d)] = x[a0(0xd8)][Z(0x17d)];
                    const E = (0x8dc + -0xd4 * 0x1d + 0x794 * 0x2, pupa_1[a0(0x154)])(B[Z(0x197) + a0(0x12d)] || '', D), F = {};
                    F[Z(0x15f)] = E, F[Z(0x199)] = !![], F[a0(0x13d)] = !![];
                    const G = {};
                    G[a0(0x198)] = F, G[a0(0x11a)] = r, G[Z(0x14e)] = x, G[Z(0x174)] = l[Z(0xfb)]['id'], G[Z(0x19d)] = o[Z(0x156)], G[a0(0x115)] = o[Z(0x16d)], G[Z(0xf7)] = ![], G[Z(0x1a0)] = ![];
                    const H = G;
                    await (0x5 * -0x74f + 0xc7 + 0x28e * 0xe, CreateMessageSystemService_1[a0(0x14f)])(H);
                    const I = {};
                    I[a0(0xe5) + a0(0x178)] = !![], await x[a0(0x186)](I);
                } else {
                    const K = {};
                    K[a0(0x115)] = k, K[Z(0x179)] = K, K[a0(0x163)] = L, K[Z(0x129)] = n, K[a0(0x11f)] = o, j[Z(0xfe)](o[a0(0xe8)], K);
                    const L = {};
                    return L[a0(0x196)] = o[Z(0x18a)], p[Z(0x115)](0x123 * 0x11 + 0x247d * -0x1 + 0x12ba)[a0(0x164)](L);
                }
            }
        }
    }
    return m[Z(0x115)](0x2 * -0xd18 + -0x4 * -0x10 + 0x1ab8)[a0(0x164)](x);
};
exports[P(0x186)] = update;
const remove = async (f, g) => {
    const a1 = O, a2 = O, h = {};
    h[a1(0x18f)] = a2(0x13a), h[a2(0xe7)] = a1(0x1a1) + a1(0x110);
    const i = h, {ticketId: j} = f[a1(0x141)], {tenantId: k} = f[a1(0xfb)], l = f[a1(0xfb)]['id'], m = {};
    m['id'] = j, m[a2(0x11a)] = k, m[a2(0x174)] = l;
    const n = await (-0x1fd8 + -0xc8f * -0x3 + -0x1 * 0x5d5, DeleteTicketService_1[a2(0x14f)])(m), o = (0x3 * -0xbb0 + 0xb55 + 0x17bb, socket_1[a1(0x113)])();
    o['to'](k + ':' + n[a1(0x115)])['to'](k + ':' + j)['to'](k + (a1(0xf0) + a1(0x14c)))[a1(0xff)](k + a1(0x157), {
        'action': i[a1(0x18f)],
        'ticketId': +j
    });
    const p = {};
    return p[a1(0x196)] = i[a1(0xe7)], g[a2(0x115)](0x221a * 0x1 + 0xd81 + -0x2ed3)[a1(0x164)](p);
};
function a() {
    const a9 = [
        'sKhhN',
        'value',
        'bbhNm',
        'cket',
        'eteTicketS',
        'XMdMV',
        '\x20usuário',
        'withUnread',
        'eted',
        'nedUser',
        'rCcqN',
        'getIO',
        'wTicketSer',
        'status',
        'DIkSs',
        '../service',
        'QueueDefin',
        'provided',
        'tenantId',
        '1dsGTcT',
        'ensureProt',
        'scheduledM',
        '__esModule',
        'isGroup',
        '../models/',
        'ateLogTick',
        'kVqtk',
        'rvices/Del',
        '../errors/',
        's\x20must\x20be\x20',
        'TDeDM',
        'Ticket\x20já\x20',
        'YvBfR',
        'whatsappId',
        'find',
        'stSettings',
        'action',
        'ssage',
        'uJjtS',
        'kJYrw',
        'Ticket',
        'hTHvw',
        'seTicketsS',
        'PPvaW',
        'qoRWO',
        'contactId',
        'iDPXC',
        'IriUe',
        'ssfully',
        'channelId',
        'delete',
        'eSystemSer',
        'LtvHg',
        'read',
        'Yakor',
        'wuYnn',
        'profile',
        'params',
        'rvices/clo',
        'solicitaçã',
        'defineProp',
        '73316qmLLOW',
        'ocGLI',
        'userIdRequ',
        's/SettingS',
        'expYb',
        '4832tMPYzm',
        'xwdQQ',
        'ion',
        'hPJTa',
        'ticket',
        'default',
        'rvices/Lis',
        'gpVpT',
        'findOne',
        'para\x20outro',
        'pupa',
        'IfVrC',
        'zLkWt',
        ':ticket',
        'Messages',
        'remove',
        'QMNEy',
        'setDataVal',
        'wLogTicket',
        '3486750pqJVpA',
        'rvices/Sho',
        'body',
        'store',
        'Evjft',
        'fault',
        'endDate',
        'json',
        'channel',
        'PPKry',
        'open',
        'Filtros\x20fa',
        'Tickets\x20cl',
        'ltando\x20na\x20',
        '93358kUmMlQ',
        'nXiPL',
        'ZHnJt',
        'LKTOb',
        'xIZZw',
        'ervice',
        'tickets',
        'queuesIds',
        'iDfHT',
        'userId',
        'oxSEt',
        '260RvzBDr',
        'KkRNV',
        'Message',
        'startDate',
        'rvices/del',
        'NotViewAss',
        'est',
        'name',
        'TLZno',
        'wPVJs',
        'Service',
        '9XfGFqn',
        'not',
        'bot',
        'FGWds',
        'index',
        'update',
        'ocol',
        'NtLPG',
        'ervices/Li',
        'YhvCb',
        'enabled',
        'qNqon',
        'oOSVQ',
        'AppError',
        'aVhTj',
        'OEknq',
        '1410330HXyzVr',
        'Whatsapp',
        'ervices/Cr',
        'etService',
        'where',
        'message',
        'farewellMe',
        'msg',
        'fromMe',
        'count',
        'exwQa',
        'includeNot',
        'sendType',
        'searchPara',
        'cIuoD',
        'note',
        'ticket\x20del',
        'access',
        'tsService',
        'rpDAh',
        'BcaoE',
        'EOBdf',
        '12929DVSbUG',
        'rvices/Cre',
        'DHVIr',
        'AkOYi',
        'gaiUg',
        'rprCs',
        'protocol',
        'achld',
        'TicketsSer',
        'All\x20filter',
        'delTickets',
        'VMPIH',
        '286023xcpKZe',
        'fDnjV',
        'hasMore',
        '../libs/so',
        'closeTicke',
        'type',
        'eateMessag',
        'tgklj',
        'pageNumber',
        'rvices/Upd',
        'show',
        'azizj',
        'atribuido\x20',
        'pending',
        'vice',
        's/MessageS',
        'SqKOX',
        'contact',
        'rvice',
        'ignedTicke',
        'AuzPc',
        'query',
        'czbSi',
        'FSoiw',
        'ticketData',
        'showAll',
        'key',
        'VBNvM',
        's/TicketSe',
        'isNotAssig',
        'isFarewell',
        'onkmf',
        'etSOw',
        'KcuRH',
        '40773205IuolpZ',
        'upa',
        'AtuXA',
        'OiPUb',
        'erty',
        'scheduleDa',
        'findAll',
        ':notificat',
        'showLogsTi',
        'create',
        'ticketId',
        'ateTicketS',
        'osed\x20succe',
        'JlrhB',
        'isTransfer',
        'closed',
        'OXuuY',
        '../utils/p',
        'user',
        'rDXgJ',
        '__importDe',
        'warn',
        'emit',
        'tTicketsSe',
        'date',
        'ZWWti',
        'sequelize',
        'XxBLV',
        'essages',
        'ence',
        'DvDeM'
    ];
    a = function () {
        return a9;
    };
    return a();
}
exports[P(0x159)] = remove;
const showLogsTicket = async (d, e) => {
    const a3 = P, a4 = P, {ticketId: f} = d[a3(0x141)], g = {};
    g[a4(0xf3)] = f;
    const h = await (-0x562 * 0x3 + 0x25e1 * -0x1 + 0x3607, ShowLogTicketService_1[a4(0x14f)])(g);
    return e[a4(0x115)](0x13eb + 0x667 * -0x4 + 0x679 * 0x1)[a3(0x164)](h);
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x509 * 0x7 + 0x9 * -0x78 + 0xf27 * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[P(0xf1) + O(0x10b)] = showLogsTicket;
const closeTickets = async (h, i) => {
    const a5 = P, a6 = O, j = {
            'qNqon': function (k, l) {
                return k === l;
            },
            'DHVIr': a5(0x17b) + a6(0xda) + 'ts',
            'AtuXA': a5(0x127) + a5(0xd3) + a5(0x153) + a6(0x10e),
            'IriUe': function (k, l) {
                return k === l;
            },
            'czbSi': a6(0xbe),
            'achld': a5(0x12e),
            'OiPUb': function (k, l) {
                return k(l);
            },
            'rpDAh': function (k, l) {
                return k(l);
            },
            'QMNEy': function (k, l) {
                return k || l;
            },
            'XxBLV': function (k, l) {
                return k === l;
            },
            'ocGLI': a5(0xe6),
            'TLZno': a6(0x168) + a5(0x16a) + a6(0x143) + 'o',
            'hPJTa': a6(0xc4) + a5(0x125) + a5(0x119),
            'exwQa': a6(0x169) + a5(0xf5) + a5(0x138),
            'fDnjV': function (k, l) {
                return k !== l;
            },
            'expYb': a5(0x18d),
            'gpVpT': a6(0x16c)
        };
    try {
        if (j[a5(0x137)](j[a5(0xdd)], j[a5(0xc2)]))
            return j[a5(0x18c)](d[a6(0xe1)], j[a5(0xbd)]);
        else {
            const l = j[a6(0xec)](Number, h[a5(0xfb)]['id']), m = j[a5(0x1a4)](Number, h[a5(0xfb)][a6(0x11a)]), {
                    status: n,
                    startDate: o,
                    endDate: p,
                    whatsappId: r,
                    isGroup: s
                } = h[a6(0x15f)];
            if (j[a6(0x15a)](!n, !o) || !p || !r || j[a5(0x18c)](s, undefined)) {
                if (j[a6(0x104)](j[a5(0x146)], j[a5(0x146)])) {
                    const v = {};
                    v[a6(0x115)] = n, v[a5(0x179)] = o, v[a5(0x163)] = p, v[a5(0x129)] = r, v[a6(0x11f)] = s, console[a6(0xfe)](j[a5(0x17e)], v);
                    const w = {};
                    return w[a5(0x196)] = j[a6(0x14d)], i[a6(0x115)](0x1a62 * 0x1 + 0x1 * -0x397 + -0x153b * 0x1)[a5(0x164)](w);
                } else
                    throw new d[(a5(0x14f))](j[a5(0xeb)]);
            }
            const t = {};
            t[a6(0x115)] = n, t[a5(0x179)] = o, t[a6(0x163)] = p, t[a6(0x129)] = r, t[a5(0x11f)] = s, t[a5(0x174)] = l, t[a5(0x11a)] = m, await (0x6 * -0x469 + 0x1a9e + -0x1 * 0x28, closeTicketsService_1[a6(0xcb) + a5(0x1a3)])(t);
            const u = {};
            return u[a6(0x196)] = j[a5(0x19b)], i[a5(0x115)](0x266f * 0x1 + 0xc5b + -0x3202)[a5(0x164)](u);
        }
    } catch (y) {
        if (j[a6(0xc8)](j[a5(0x149)], j[a6(0x151)])) {
            const z = {};
            return z[a6(0x196)] = y[a5(0x196)], i[a5(0x115)](0xeab + 0x1d15 + 0x32 * -0xd6)[a6(0x164)](z);
        } else {
            const B = {};
            return B[a5(0x196)] = f[a6(0x196)], e[a6(0x115)](0x2 * -0x37d + 0x3f3 + 0x4fb)[a6(0x164)](B);
        }
    }
};
exports[P(0xcb) + 'ts'] = closeTickets;
const delTickets = async (i, j) => {
    const a7 = P, a8 = O, k = {};
    k[a7(0x134)] = function (m, n) {
        return m || n;
    }, k[a7(0x10d)] = function (m, n) {
        return m === n;
    }, k[a7(0xde)] = a8(0x168) + a7(0x16a) + a8(0x143) + 'o', k[a7(0x13c)] = a8(0xc4) + a7(0x125) + a8(0x119), k[a7(0x10a)] = a8(0x169) + a7(0xf5) + a7(0x138);
    const l = k;
    try {
        const {
            status: m,
            startDate: n,
            endDate: o,
            whatsappId: p,
            isGroup: r
        } = i[a8(0x15f)];
        if (l[a8(0x134)](!m, !n) || !o || !p || l[a8(0x10d)](r, undefined)) {
            const u = {};
            u[a7(0x115)] = m, u[a8(0x179)] = n, u[a8(0x163)] = o, u[a7(0x129)] = p, u[a7(0x11f)] = r, console[a7(0xfe)](l[a7(0xde)], u);
            const v = {};
            return v[a7(0x196)] = l[a8(0x13c)], j[a7(0x115)](-0x1318 + 0xac3 + -0x9e5 * -0x1)[a7(0x164)](v);
        }
        const s = {};
        s[a7(0x115)] = m, s[a8(0x179)] = n, s[a7(0x163)] = o, s[a8(0x129)] = p, s[a7(0x11f)] = r, await (0x1ec + 0x1 * -0x5e7 + 0x3fb, delTicketsService_1[a7(0xc5) + a7(0x180)])(s);
        const t = {};
        return t[a7(0x196)] = l[a7(0x10a)], j[a8(0x115)](-0x2423 + -0x1 * -0x14dd + 0x100e)[a7(0x164)](t);
    } catch (w) {
        const x = {};
        return x[a7(0x196)] = w[a8(0x196)], j[a8(0x115)](-0xf30 + -0x26b0 + 0x37d4)[a8(0x164)](x);
    }
};
exports[O(0xc5)] = delTickets;