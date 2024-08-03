'use strict';
function a() {
    const a8 = [
        'user',
        'transfered',
        'GriIH',
        'AuuUR',
        'ls/User',
        'oJjjw',
        'sAsRead',
        'queueId',
        'DEsjs',
        '410369gCwCbj',
        'whatsapp',
        'NJQoC',
        'KlGyN',
        'tags',
        'berfx',
        'receivedTr',
        'jtmHb',
        'OGJbR',
        'QmKVD',
        'Emit',
        'vice',
        'ketMessage',
        'yXTcu',
        'closed',
        '5866042LFJpub',
        'wallets',
        'default',
        'update',
        'WhICY',
        'close',
        'ticket:upd',
        'tenantId',
        'ate',
        'ZxGlC',
        'ticketId',
        'autoReplyI',
        'attributes',
        'IDOqz',
        'ls/Contact',
        'uMWbr',
        '../../mode',
        'contact',
        '__importDe',
        'isDeleted',
        'XAjxh',
        'ERR_NO_TIC',
        '59804ZnbkbF',
        'gYjJw',
        'VSHyn',
        'ers/SetTic',
        'ZGcry',
        '1709308FwglpY',
        'extraInfo',
        'ence',
        'gTicketSer',
        'cGHgp',
        'include',
        'userId',
        'endanceAt',
        'qutFv',
        '1447227ClPAwt',
        'rs/AppErro',
        'ers/CheckC',
        'biUBD',
        'where',
        'type',
        'ticket',
        'oldUserId',
        'eNBDy',
        'stepAutoRe',
        '__esModule',
        'oldStatus',
        'ansfer',
        'ontactOpen',
        'BOdlQ',
        'model',
        'eUDDm',
        'jxsly',
        'status',
        'defineProp',
        '../../help',
        './CreateLo',
        'findOne',
        'setDataVal',
        'value',
        'payload',
        'MpSlr',
        'dTyUQ',
        'fault',
        'OGaxJ',
        'pending',
        'TirTE',
        '8731744uHZFqe',
        'startedAtt',
        'pPVIM',
        'erty',
        'iKNek',
        '../../erro',
        'nQyNs',
        'IsuRx',
        'sQAvS',
        'ls/Ticket',
        'RBZqU',
        'ers/socket',
        'clKem',
        '24hAimQb',
        'Tickets',
        'oiJTb',
        'WYjkB',
        'mMgNV',
        'open',
        'on:new',
        'Thybd',
        'KET_FOUND',
        'reload',
        '50ImTins',
        'associatio',
        'notificati',
        '433644dQcpTv',
        'RPNdl',
        'ptLgP',
        'closedAt',
        'gCUbt',
        'name',
        'plyId',
        'isTransfer',
        'uivcU',
        'getTime'
    ];
    a = function () {
        return a8;
    };
    return a();
}
const a3 = b, a4 = b;
(function (c, d) {
    const a1 = b, a2 = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(a1(0x1ab)) / (0x19de + 0x1 * -0x1b18 + -0x3f * -0x5) + -parseInt(a2(0x150)) / (0xc81 + 0x1406 + -0x2085) * (parseInt(a1(0x18b)) / (-0x1a4d + 0x2f * 0x4d + 0xc2d)) + parseInt(a1(0x155)) / (0x25a3 + -0x956 * 0x4 + -0x47) + -parseInt(a1(0x195)) / (-0x20 * -0x74 + -0x20 * -0xb7 + -0x255b) * (-parseInt(a1(0x198)) / (-0x6 * -0x281 + 0x14a3 * 0x1 + -0x23a3)) + -parseInt(a1(0x1ba)) / (-0x1a2f + 0x2277 + -0x841 * 0x1) + parseInt(a1(0x17e)) / (-0x169d + 0x2 * -0x106 + 0x18b1) + -parseInt(a1(0x15e)) / (0x37d * -0x8 + 0x1 * -0x517 + 0x2108);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x918e2 + 0xb0fcb * -0x1 + 0xb03de));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x22a1 + -0x81f + 0x3c * 0xbc);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[a3(0x1cc) + a4(0x17a)] || function (c) {
    const a5 = a3;
    return c && c[a5(0x168)] ? c : { 'default': c };
};
const k = {};
k[a4(0x176)] = !![], Object[a3(0x171) + a4(0x181)](exports, a4(0x168), k);
const AppError_1 = __importDefault(require(a3(0x183) + a4(0x15f) + 'r')), CheckContactOpenTickets_1 = __importDefault(require(a3(0x172) + a3(0x160) + a4(0x16b) + a3(0x18c))), SetTicketMessagesAsRead_1 = __importDefault(require(a4(0x172) + a4(0x153) + a3(0x1b7) + a4(0x1a8))), Contact_1 = __importDefault(require(a3(0x1ca) + a4(0x1c8))), Ticket_1 = __importDefault(require(a4(0x1ca) + a4(0x187))), User_1 = __importDefault(require(a3(0x1ca) + a3(0x1a6))), socketEmit_1 = __importDefault(require(a4(0x172) + a3(0x189) + a3(0x1b5))), CreateLogTicketService_1 = __importDefault(require(a3(0x173) + a4(0x158) + a3(0x1b6))), UpdateTicketService = async ({
        ticketData: s,
        ticketId: t,
        isTransference: u,
        userIdRequest: v
    }) => {
        const a6 = a3, a7 = a3, w = {};
        w[a6(0x1b3)] = a7(0x197) + a7(0x191), w[a7(0x182)] = a7(0x1cf) + a6(0x193), w[a7(0x1b2)] = a7(0x1cb), w[a6(0x188)] = a6(0x156), w[a7(0x19c)] = a6(0x1af), w[a6(0x1b8)] = a7(0x1bb), w[a7(0x16e)] = a6(0x19d), w[a6(0x18e)] = a6(0x1a2), w[a7(0x18a)] = a6(0x1ac), w[a6(0x1a0)] = a6(0x1cd), w[a6(0x1b0)] = function (Q, R) {
            return Q === R;
        }, w[a6(0x1c7)] = a7(0x1ae), w[a6(0x1be)] = function (Q, R) {
            return Q !== R;
        }, w[a7(0x154)] = a7(0x17c), w[a6(0x18d)] = function (Q, R) {
            return Q === R;
        }, w[a6(0x1a5)] = a6(0x1b9), w[a7(0x199)] = a7(0x152), w[a7(0x186)] = a6(0x1ad), w[a6(0x1ce)] = a6(0x1bf), w[a7(0x18f)] = function (Q, R) {
            return Q === R;
        }, w[a7(0x180)] = a6(0x178), w[a6(0x16c)] = a6(0x15d), w[a7(0x184)] = function (Q, R) {
            return Q === R;
        }, w[a7(0x19a)] = a6(0x190), w[a6(0x1a4)] = function (Q, R) {
            return Q === R;
        }, w[a7(0x166)] = a6(0x179), w[a7(0x1a7)] = a6(0x1c9), w[a7(0x1c3)] = function (Q, R) {
            return Q === R;
        }, w[a6(0x1b4)] = function (Q, R) {
            return Q === R;
        }, w[a6(0x17b)] = a7(0x159), w[a7(0x161)] = function (Q, R) {
            return Q === R;
        }, w[a6(0x1aa)] = function (Q, R) {
            return Q === R;
        }, w[a7(0x185)] = function (Q, R) {
            return Q === R;
        }, w[a7(0x192)] = a6(0x1a3), w[a7(0x17d)] = a6(0x1b1) + a6(0x16a), w[a6(0x151)] = a6(0x19f) + a6(0x157), w[a7(0x16f)] = a7(0x1c0) + a6(0x1c2);
        const x = w, {
                status: y,
                userId: z,
                tenantId: A,
                queueId: B
            } = s, C = {};
        C['id'] = t, C[a6(0x1c1)] = A;
        const D = {};
        D[a6(0x16d)] = Contact_1[a6(0x1bc)], D['as'] = x[a6(0x1b2)], D[a7(0x15a)] = [
            x[a6(0x188)],
            x[a6(0x19c)],
            {
                'association': x[a6(0x1b8)],
                'attributes': [
                    'id',
                    x[a6(0x16e)]
                ]
            }
        ];
        const E = {};
        E[a7(0x16d)] = User_1[a7(0x1bc)], E['as'] = x[a6(0x18e)], E[a6(0x1c6)] = [
            'id',
            x[a7(0x16e)]
        ];
        const F = {};
        F[a7(0x196) + 'n'] = x[a7(0x18a)], F[a6(0x1c6)] = [
            'id',
            x[a7(0x16e)],
            x[a7(0x1a0)]
        ];
        const G = {};
        G[a6(0x162)] = C, G[a7(0x15a)] = [
            D,
            E,
            F
        ];
        const H = await Ticket_1[a6(0x1bc)][a6(0x174)](G);
        if (!H) {
            if (x[a6(0x1b0)](x[a6(0x1c7)], x[a7(0x1c7)]))
                throw new AppError_1[(a7(0x1bc))](x[a7(0x182)], 0x2 * -0x7c9 + 0x1ebc + 0x1 * -0xd96);
            else {
                const R = {};
                R[a7(0x1c1)] = F, R[a7(0x163)] = x[a6(0x1b3)], R[a6(0x177)] = G, (-0x104d + 0xa * 0x3c7 + -0x1579, E[a6(0x1bc)])(R);
            }
        }
        await (0x18 * 0x101 + 0x661 + -0x1d * 0x10d, SetTicketMessagesAsRead_1[a6(0x1bc)])(H);
        const I = x[a7(0x1be)](H[a6(0x170)], x[a6(0x154)]) && x[a6(0x18d)](s[a7(0x170)], x[a6(0x154)]), J = H[a7(0x170)], K = H[a6(0x1a2)]?.['id'];
        x[a7(0x1b0)](J, x[a7(0x1a5)]) && (x[a7(0x1be)](x[a7(0x199)], x[a7(0x186)]) ? await (-0x6f * 0x10 + -0x98 * -0x23 + -0xdd8, CheckContactOpenTickets_1[a6(0x1bc)])(H[a7(0x1cb)]['id']) : D[a7(0x19b)] = new E()[a7(0x1a1)]());
        const L = x[a6(0x1b0)](y, x[a6(0x1ce)]) ? x[a7(0x1a5)] : y, M = {};
        M[a6(0x170)] = L, M[a6(0x1a9)] = B, M[a6(0x15b)] = z;
        const N = M;
        if (x[a7(0x18f)](L, x[a7(0x1a5)])) {
            if (x[a6(0x1b0)](x[a7(0x180)], x[a7(0x16c)]))
                throw new C[(a6(0x1bc))](x[a7(0x182)], 0x2341 + 0x2409 + 0x22db * -0x2);
            else
                N[a6(0x19b)] = new Date()[a6(0x1a1)]();
        }
        if (x[a6(0x184)](J, x[a6(0x154)]) && x[a7(0x1b0)](L, x[a7(0x19a)])) {
            if (x[a7(0x1a4)](x[a6(0x166)], x[a7(0x1a7)])) {
                const U = {};
                return U[a7(0x1bc)] = U, F && G[a6(0x168)] ? M : U;
            } else
                N[a6(0x1c5) + 'd'] = null, N[a6(0x167) + a6(0x19e)] = null, N[a6(0x17f) + a6(0x15c)] = new Date()[a7(0x1a1)]();
        }
        await H[a7(0x1bd)](N);
        if (x[a7(0x1c3)](J, x[a6(0x154)]) && x[a6(0x1b4)](L, x[a7(0x19a)])) {
            if (x[a6(0x1be)](x[a6(0x17b)], x[a6(0x17b)]))
                F[a6(0x1c5) + 'd'] = null, G[a7(0x167) + a6(0x19e)] = null, M[a6(0x17f) + a6(0x15c)] = new j()[a7(0x1a1)]();
            else {
                const V = {};
                V[a7(0x15b)] = v, V[a7(0x1c4)] = t, V[a6(0x163)] = x[a7(0x19a)], await (-0x3e * 0x67 + -0x2b * -0xd5 + -0xad5, CreateLogTicketService_1[a7(0x1bc)])(V);
            }
        }
        if (x[a6(0x161)](L, x[a6(0x1a5)])) {
            const W = {};
            W[a6(0x15b)] = v, W[a6(0x1c4)] = t, W[a7(0x163)] = x[a7(0x1a5)], await (0x481 * 0x8 + -0xa10 + -0x19f8, CreateLogTicketService_1[a6(0x1bc)])(W);
        }
        if (x[a6(0x1aa)](J, x[a7(0x19a)]) && x[a7(0x185)](L, x[a7(0x154)])) {
            const X = {};
            X[a7(0x15b)] = v, X[a6(0x1c4)] = t, X[a6(0x163)] = x[a7(0x154)], await (-0x1112 + -0x223a * 0x1 + 0x334c, CreateLogTicketService_1[a7(0x1bc)])(X);
        }
        if (u) {
            const Y = {};
            Y[a7(0x15b)] = v, Y[a7(0x1c4)] = t, Y[a7(0x163)] = x[a6(0x192)], await (-0x127 + -0x17d5 + 0x18fc, CreateLogTicketService_1[a6(0x1bc)])(Y);
            if (z) {
                const Z = {};
                Z[a6(0x15b)] = z, Z[a6(0x1c4)] = t, Z[a6(0x163)] = x[a7(0x17d)], await (-0x1796 + 0x2620 + 0x1 * -0xe8a, CreateLogTicketService_1[a7(0x1bc)])(Z);
            }
        }
        await H[a7(0x194)]();
        u && await H[a7(0x175) + 'ue'](x[a6(0x151)], !![]);
        if (I) {
            const a0 = {};
            a0[a7(0x1c1)] = A, a0[a7(0x163)] = x[a7(0x1b3)], a0[a6(0x177)] = H, (-0x1124 + -0x16d5 * -0x1 + -0x5b1, socketEmit_1[a7(0x1bc)])(a0);
        }
        const O = {};
        O[a6(0x1c1)] = A, O[a6(0x163)] = x[a6(0x16f)], O[a6(0x177)] = H, (0x4 * -0x4d5 + 0x1641 + -0x2ed, socketEmit_1[a6(0x1bc)])(O);
        const P = {};
        return P[a7(0x164)] = H, P[a6(0x169)] = J, P[a6(0x165)] = K, P;
    };
exports[a3(0x1bc)] = UpdateTicketService;