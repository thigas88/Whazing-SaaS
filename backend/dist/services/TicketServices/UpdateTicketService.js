'use strict';
const a3 = b, a4 = b;
(function (c, d) {
    const a1 = b, a2 = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(a1(0x123)) / (0x1 * -0x1edd + 0xe * -0xb5 + 0x28c4) * (-parseInt(a1(0x141)) / (0x2330 + 0x5 * 0x35f + -0xb * 0x4bb)) + -parseInt(a2(0x17b)) / (0x4e8 + -0x29 * 0xb2 + -0x5d * -0x41) + parseInt(a2(0x17e)) / (-0xc5f * -0x2 + 0x1581 + 0x93f * -0x5) + parseInt(a2(0x150)) / (0x1ea7 + -0x2b * -0x2e + 0x132e * -0x2) + parseInt(a1(0x15d)) / (-0x1 * 0x7c7 + -0x182b + 0x2e8 * 0xb) + parseInt(a1(0x12c)) / (0x1bba * 0x1 + 0x2cd * -0xa + 0x4f * 0x1) + parseInt(a1(0x130)) / (-0x19d9 * 0x1 + 0x255c + -0xb7b) * (-parseInt(a1(0x180)) / (-0x1 * 0x1e95 + -0x1 * -0x7f6 + 0x16a8));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5c * 0x89 + 0x92911 + -0x9c0e));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4 * -0x9ba + -0x1 * 0x11b1 + -0x6e * 0x2f);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[a3(0x11d) + a3(0x175)] || function (c) {
    const a5 = a3;
    return c && c[a5(0x15a)] ? c : { 'default': c };
};
const k = {};
k[a4(0x14e)] = !![], Object[a3(0x149) + a4(0x13d)](exports, a4(0x15a), k);
const AppError_1 = __importDefault(require(a4(0x162) + a4(0x122) + 'r')), CheckContactOpenTickets_1 = __importDefault(require(a3(0x177) + a4(0x134) + a4(0x16c) + a3(0x127))), SetTicketMessagesAsRead_1 = __importDefault(require(a3(0x177) + a3(0x126) + a4(0x181) + a3(0x16f))), Contact_1 = __importDefault(require(a4(0x13e) + a4(0x119))), Ticket_1 = __importDefault(require(a3(0x13e) + a3(0x15f))), User_1 = __importDefault(require(a3(0x13e) + a4(0x107))), socketEmit_1 = __importDefault(require(a4(0x177) + a3(0x176) + a4(0x10f))), CreateLogTicketService_1 = __importDefault(require(a4(0x146) + a4(0x165) + a4(0x13f))), UpdateTicketService = async ({
        ticketData: s,
        ticketId: t,
        isTransference: u,
        userIdRequest: v
    }) => {
        const a6 = a3, a7 = a4, w = {};
        w[a6(0x138)] = a7(0x14f) + a7(0x13c), w[a7(0x115)] = a6(0x140) + a7(0x131), w[a7(0x14a)] = a7(0x113), w[a7(0x124)] = a6(0x178), w[a7(0x139)] = a7(0x17f), w[a6(0x108)] = a6(0x164), w[a6(0x11a)] = a6(0x174), w[a6(0x133)] = a6(0x16d), w[a7(0x137)] = a6(0x14d), w[a6(0x11c)] = a7(0x135), w[a6(0x151)] = function (Q, R) {
            return Q !== R;
        }, w[a6(0x132)] = a6(0x157), w[a7(0x10a)] = a6(0x125), w[a7(0x12e)] = function (Q, R) {
            return Q === R;
        }, w[a6(0x128)] = function (Q, R) {
            return Q === R;
        }, w[a6(0x11b)] = a6(0x15e), w[a7(0x143)] = a7(0x110), w[a7(0x160)] = a6(0x172), w[a6(0x153)] = function (Q, R) {
            return Q === R;
        }, w[a6(0x16e)] = a6(0x179), w[a6(0x12f)] = function (Q, R) {
            return Q === R;
        }, w[a7(0x152)] = function (Q, R) {
            return Q !== R;
        }, w[a6(0x16a)] = a7(0x112), w[a7(0x10c)] = function (Q, R) {
            return Q === R;
        }, w[a6(0x166)] = a6(0x15c), w[a7(0x114)] = a7(0x17d), w[a7(0x156)] = a7(0x13a), w[a7(0x111)] = function (Q, R) {
            return Q === R;
        }, w[a7(0x117)] = function (Q, R) {
            return Q !== R;
        }, w[a6(0x159)] = a7(0x145), w[a6(0x169)] = function (Q, R) {
            return Q === R;
        }, w[a7(0x118)] = function (Q, R) {
            return Q === R;
        }, w[a7(0x168)] = a7(0x154), w[a6(0x182)] = a6(0x15b) + a7(0x170), w[a6(0x106)] = a7(0x161) + a7(0x11f), w[a7(0x109)] = a7(0x171) + a6(0x16b);
        const x = w, {
                status: y,
                userId: z,
                tenantId: A,
                queueId: B
            } = s, C = {};
        C['id'] = t, C[a6(0x13b)] = A;
        const D = {};
        D[a7(0x142)] = Contact_1[a6(0x14c)], D['as'] = x[a7(0x14a)], D[a7(0x136)] = [
            x[a6(0x124)],
            x[a6(0x139)],
            {
                'association': x[a6(0x108)],
                'attributes': [
                    'id',
                    x[a6(0x11a)]
                ]
            }
        ];
        const E = {};
        E[a7(0x142)] = User_1[a6(0x14c)], E['as'] = x[a6(0x133)], E[a7(0x129)] = [
            'id',
            x[a7(0x11a)]
        ];
        const F = {};
        F[a6(0x147) + 'n'] = x[a7(0x137)], F[a7(0x129)] = [
            'id',
            x[a6(0x11a)],
            x[a6(0x11c)]
        ];
        const G = {};
        G[a7(0x10e)] = C, G[a6(0x136)] = [
            D,
            E,
            F
        ];
        const H = await Ticket_1[a7(0x14c)][a7(0x144)](G);
        if (!H) {
            if (x[a7(0x151)](x[a6(0x132)], x[a6(0x132)]))
                F[a7(0x10d) + 'd'] = null, G[a6(0x17a) + a6(0x11e)] = null, M[a6(0x14b) + a7(0x12a)] = new j()[a7(0x17c)]();
            else
                throw new AppError_1[(a6(0x14c))](x[a6(0x138)], -0x1 * -0x133b + 0x20aa + -0x3251);
        }
        await (-0x8 * 0x409 + 0x1bdc + -0x46c * -0x1, SetTicketMessagesAsRead_1[a6(0x14c)])(H);
        const I = x[a7(0x151)](H[a7(0x158)], x[a7(0x10a)]) && x[a7(0x12e)](s[a7(0x158)], x[a7(0x10a)]), J = H[a7(0x158)], K = H[a6(0x16d)]?.['id'];
        if (x[a7(0x128)](J, x[a7(0x11b)])) {
            if (x[a6(0x151)](x[a7(0x143)], x[a6(0x160)]))
                await (-0x441 + -0x88d * 0x2 + 0x155b, CheckContactOpenTickets_1[a7(0x14c)])(H[a7(0x113)]['id']);
            else {
                const S = {};
                return S[a7(0x14c)] = j, F && G[a7(0x15a)] ? S : S;
            }
        }
        const L = x[a6(0x153)](y, x[a6(0x16e)]) ? x[a6(0x11b)] : y, M = {};
        M[a6(0x158)] = L, M[a6(0x12b)] = B, M[a7(0x163)] = z;
        const N = M;
        if (x[a7(0x12f)](L, x[a7(0x11b)])) {
            if (x[a6(0x152)](x[a6(0x16a)], x[a7(0x16a)]))
                throw new C[(a7(0x14c))](x[a7(0x138)], -0x18ca + -0x9a9 * -0x2 + 0x52 * 0x16);
            else
                N[a7(0x10b)] = new Date()[a7(0x17c)]();
        }
        x[a7(0x128)](J, x[a7(0x10a)]) && x[a6(0x10c)](L, x[a6(0x166)]) && (x[a6(0x151)](x[a7(0x114)], x[a6(0x156)]) ? (N[a6(0x10d) + 'd'] = null, N[a6(0x17a) + a6(0x11e)] = null, N[a6(0x14b) + a6(0x12a)] = new Date()[a6(0x17c)]()) : D[a7(0x10b)] = new E()[a7(0x17c)]());
        await H[a7(0x12d)](N);
        if (x[a7(0x111)](J, x[a6(0x10a)]) && x[a6(0x10c)](L, x[a7(0x166)])) {
            if (x[a6(0x117)](x[a7(0x159)], x[a6(0x159)])) {
                const V = {};
                V[a7(0x13b)] = F, V[a7(0x120)] = x[a6(0x115)], V[a6(0x155)] = G, (-0x2 * -0x6b6 + -0x1b80 + -0xd4 * -0x11, E[a6(0x14c)])(V);
            } else {
                const V = {};
                V[a7(0x163)] = v, V[a6(0x148)] = t, V[a7(0x120)] = x[a7(0x166)], await (0x753 + -0x856 + -0x1 * -0x103, CreateLogTicketService_1[a7(0x14c)])(V);
            }
        }
        if (x[a7(0x169)](L, x[a7(0x11b)])) {
            const W = {};
            W[a6(0x163)] = v, W[a7(0x148)] = t, W[a7(0x120)] = x[a7(0x11b)], await (-0x1729 + 0x1 * -0xae5 + 0x220e, CreateLogTicketService_1[a7(0x14c)])(W);
        }
        if (x[a7(0x111)](J, x[a7(0x166)]) && x[a6(0x118)](L, x[a6(0x10a)])) {
            const X = {};
            X[a7(0x163)] = v, X[a6(0x148)] = t, X[a7(0x120)] = x[a6(0x10a)], await (0x67a * 0x4 + -0x269f + 0xf * 0xd9, CreateLogTicketService_1[a7(0x14c)])(X);
        }
        if (u) {
            const Y = {};
            Y[a6(0x163)] = v, Y[a6(0x148)] = t, Y[a7(0x120)] = x[a6(0x168)], await (0xe3b + -0x3d * -0x4f + 0x1 * -0x210e, CreateLogTicketService_1[a7(0x14c)])(Y);
            if (z) {
                const Z = {};
                Z[a6(0x163)] = z, Z[a7(0x148)] = t, Z[a6(0x120)] = x[a6(0x182)], await (-0xf3 * -0x14 + 0x1 * 0x503 + -0x17ff * 0x1, CreateLogTicketService_1[a6(0x14c)])(Z);
            }
        }
        await H[a6(0x116)]();
        u && await H[a6(0x105) + 'ue'](x[a7(0x106)], !![]);
        if (I) {
            const a0 = {};
            a0[a7(0x13b)] = A, a0[a7(0x120)] = x[a7(0x115)], a0[a6(0x155)] = H, (-0x804 + 0x4 * -0x89 + -0x34 * -0x32, socketEmit_1[a6(0x14c)])(a0);
        }
        const O = {};
        O[a7(0x13b)] = A, O[a6(0x120)] = x[a7(0x109)], O[a6(0x155)] = H, (0x11ba + 0x32a + -0x14e4, socketEmit_1[a7(0x14c)])(O);
        const P = {};
        return P[a7(0x167)] = H, P[a7(0x173)] = J, P[a7(0x121)] = K, P;
    };
function a() {
    const a8 = [
        'mGjDP',
        'tbFZL',
        'kzPKL',
        'kOnam',
        'tenantId',
        'KET_FOUND',
        'erty',
        '../../mode',
        'vice',
        'notificati',
        '578OPzNoj',
        'model',
        'FLBHv',
        'findOne',
        'RWnlN',
        './CreateLo',
        'associatio',
        'ticketId',
        'defineProp',
        'BchCb',
        'startedAtt',
        'default',
        'whatsapp',
        'value',
        'ERR_NO_TIC',
        '2336340AyTCVE',
        'BhxbW',
        'qMvqs',
        'UbjcK',
        'transfered',
        'payload',
        'NUdGk',
        'JcJSJ',
        'status',
        'XNPYT',
        '__esModule',
        'receivedTr',
        'open',
        '948174HihYOe',
        'closed',
        'ls/Ticket',
        'usAHO',
        'isTransfer',
        '../../erro',
        'userId',
        'wallets',
        'gTicketSer',
        'Xoltj',
        'ticket',
        'TNKBL',
        'HmmbL',
        'YGjgw',
        'ate',
        'ontactOpen',
        'user',
        'lFOJz',
        'sAsRead',
        'ansfer',
        'ticket:upd',
        'fSTOM',
        'oldStatus',
        'name',
        'fault',
        'ers/socket',
        '../../help',
        'extraInfo',
        'close',
        'stepAutoRe',
        '561861gfdhku',
        'getTime',
        'uiWLU',
        '2890980lvFnoX',
        'tags',
        '216cHAFBZ',
        'ketMessage',
        'Lyhmm',
        'setDataVal',
        'YZRiZ',
        'ls/User',
        'ZbrPQ',
        'HCSXl',
        'NAUum',
        'closedAt',
        'UGQCt',
        'autoReplyI',
        'where',
        'Emit',
        'ZXhfV',
        'QIhpj',
        'AZYfF',
        'contact',
        'GKnlg',
        'IKkcE',
        'reload',
        'Kovzp',
        'GAPZJ',
        'ls/Contact',
        'lCirE',
        'BnXdH',
        'nyHdw',
        '__importDe',
        'plyId',
        'ence',
        'type',
        'oldUserId',
        'rs/AppErro',
        '1601oWsqEm',
        'ABXYE',
        'pending',
        'ers/SetTic',
        'Tickets',
        'SjznF',
        'attributes',
        'endanceAt',
        'queueId',
        '2709931iVEwvC',
        'update',
        'rpDlr',
        'MCohQ',
        '170736zlLztf',
        'on:new',
        'xxalF',
        'JmFke',
        'ers/CheckC',
        'isDeleted',
        'include'
    ];
    a = function () {
        return a8;
    };
    return a();
}
exports[a3(0x14c)] = UpdateTicketService;