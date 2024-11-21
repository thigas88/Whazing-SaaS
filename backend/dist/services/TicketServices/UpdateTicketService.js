'use strict';
const az = b, aA = b;
(function (c, d) {
    const ax = b, ay = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(ax(0x19b)) / (-0xa2f + 0x25a4 + 0xe * -0x1f6) + parseInt(ax(0x180)) / (0x952 * -0x3 + 0x24cd + 0x8d5 * -0x1) * (-parseInt(ay(0x1cb)) / (0xffb * -0x1 + 0x112 + 0x5 * 0x2fc)) + parseInt(ay(0x1f8)) / (-0x1b59 + -0x1fa2 * 0x1 + 0x3aff) * (-parseInt(ay(0x1a3)) / (-0x18e * -0x1 + 0x845 + 0x4e7 * -0x2)) + -parseInt(ay(0x1a4)) / (-0x1cd6 + -0xe9a + -0x2b76 * -0x1) * (parseInt(ax(0x167)) / (0x98b + 0xbfc + 0x560 * -0x4)) + -parseInt(ax(0x1f1)) / (-0x1f12 + -0x8e * -0x31 + 0x3ec) + parseInt(ay(0x1e8)) / (-0xb7 * -0x7 + 0x2638 + -0x2b30) + parseInt(ay(0x1d0)) / (-0x1fa1 + -0x2 * -0xe87 + 0x29d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x174f3f + 0x10c87 * 0x2 + -0xb6c71));
var __importDefault = this && this[az(0x16e) + aA(0x191)] || function (c) {
    const aB = az;
    return c && c[aB(0x166)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xd17 + 0x3b4 + -0xf7f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[aA(0x1d1)] = !![], Object[az(0x1c0) + az(0x14f)](exports, aA(0x166), k);
const AppError_1 = __importDefault(require(aA(0x183) + az(0x1de) + 'r')), CheckContactOpenTickets_1 = __importDefault(require(az(0x1d3) + aA(0x1ae) + az(0x1d2) + az(0x157))), SetTicketMessagesAsRead_1 = __importDefault(require(aA(0x1d3) + aA(0x1b5) + aA(0x200) + az(0x1c4))), Contact_1 = __importDefault(require(az(0x154) + aA(0x184))), Ticket_1 = __importDefault(require(az(0x154) + aA(0x1e6))), User_1 = __importDefault(require(aA(0x154) + az(0x163))), Whatsapp_1 = __importDefault(require(az(0x154) + az(0x152) + 'p')), socketEmit_1 = __importDefault(require(az(0x1d3) + az(0x181) + az(0x176))), CreateLogTicketService_1 = __importDefault(require(az(0x16b) + aA(0x1d9) + aA(0x1e3))), Mustache_1 = __importDefault(require(aA(0x1d3) + az(0x14d) + 'he')), CreateMessageSystemService_1 = __importDefault(require(az(0x1ec) + aA(0x1eb) + aA(0x175) + az(0x1ab) + az(0x189))), GetIntegrationsID_1 = __importDefault(require(aA(0x1d3) + aA(0x1c7) + aA(0x16a) + 'D')), UpdateTicketService = async ({
        ticketData: B,
        ticketId: C,
        isTransference: D,
        userIdRequest: E
    }) => {
        const aC = aA, aD = az, F = {};
        F[aC(0x1da)] = aC(0x1ef) + aC(0x1f5), F[aC(0x18a)] = aD(0x1e2) + aC(0x1aa), F[aD(0x17e)] = aD(0x160), F[aD(0x161)] = aC(0x1e4), F[aC(0x15c)] = aD(0x17f), F[aC(0x196)] = aC(0x1ee), F[aC(0x194)] = aD(0x173), F[aD(0x204)] = aD(0x1a9), F[aC(0x198)] = aD(0x186), F[aD(0x1e7)] = aD(0x1b9), F[aD(0x1d5)] = aD(0x1db), F[aD(0x1b2)] = function (a4, a5) {
            return a4 === a5;
        }, F[aC(0x19f)] = aD(0x1ac), F[aC(0x1b3)] = aD(0x188), F[aC(0x197)] = function (a4, a5) {
            return a4 !== a5;
        }, F[aD(0x1e1)] = aD(0x162), F[aD(0x1e0)] = function (a4, a5) {
            return a4 === a5;
        }, F[aD(0x1e5)] = aD(0x1b7), F[aC(0x153)] = aD(0x1b1), F[aD(0x15e)] = aC(0x15a), F[aD(0x1f4)] = function (a4, a5) {
            return a4 === a5;
        }, F[aC(0x15b)] = aD(0x14e), F[aD(0x1ed)] = function (a4, a5) {
            return a4 !== a5;
        }, F[aD(0x1f0)] = aD(0x19c), F[aC(0x192)] = function (a4, a5) {
            return a4 === a5;
        }, F[aC(0x1b0)] = aD(0x1a0), F[aC(0x17c)] = function (a4, a5) {
            return a4 !== a5;
        }, F[aD(0x1a1)] = aD(0x151), F[aD(0x1cc)] = function (a4, a5) {
            return a4 === a5;
        }, F[aC(0x18e)] = aC(0x1a8), F[aD(0x185)] = function (a4, a5) {
            return a4 === a5;
        }, F[aD(0x1fe)] = aC(0x1f9), F[aC(0x17b)] = aD(0x14c) + aC(0x1b6), F[aD(0x195)] = function (a4, a5) {
            return a4 === a5;
        }, F[aC(0x15d)] = function (a4, a5) {
            return a4 === a5;
        }, F[aD(0x1fd)] = aD(0x159) + aD(0x1d4) + aD(0x18c) + aC(0x171) + aD(0x172) + aC(0x1ca) + aD(0x19d) + aC(0x164) + aD(0x1ea) + 'o!', F[aC(0x193)] = aC(0x1cf), F[aC(0x1c6)] = aD(0x168) + aD(0x1be), F[aC(0x155)] = function (a4, a5) {
            return a4 === a5;
        }, F[aC(0x19e)] = aD(0x1dc), F[aC(0x156)] = aC(0x1dd) + aC(0x1c1), F[aD(0x16f)] = aC(0x1df) + aC(0x1bd), F[aD(0x1fb)] = aC(0x150) + aC(0x18b) + aD(0x203) + aD(0x1bc) + aC(0x17a) + aC(0x1b4) + aD(0x1d8) + aC(0x17d) + aC(0x165) + aD(0x1a7) + aC(0x169) + aC(0x182), F[aD(0x16c)] = aC(0x187) + aD(0x1d7);
        const G = F, {
                status: H,
                userId: I,
                tenantId: J,
                queueId: K
            } = B, L = B[aD(0x1dd) + aD(0x1c1)] || ![], M = B[aD(0x1df) + aD(0x1bd)] || null, N = B['IA'] || ![], O = {};
        O['id'] = C, O[aC(0x1bf)] = J;
        const P = {};
        P[aC(0x1a5)] = Contact_1[aC(0x1c8)], P['as'] = G[aC(0x17e)], P[aC(0x158)] = [
            G[aC(0x161)],
            G[aD(0x15c)],
            {
                'association': G[aC(0x196)],
                'attributes': [
                    'id',
                    G[aC(0x194)]
                ]
            }
        ];
        const Q = {};
        Q[aC(0x1a5)] = User_1[aC(0x1c8)], Q['as'] = G[aC(0x204)], Q[aD(0x1e9)] = [
            'id',
            G[aD(0x194)]
        ];
        const R = {};
        R[aC(0x190) + 'n'] = G[aD(0x198)], R[aD(0x1e9)] = [
            'id',
            G[aD(0x194)],
            G[aD(0x1e7)],
            G[aD(0x1d5)]
        ];
        const S = {};
        S[aC(0x1f3)] = O, S[aC(0x158)] = [
            P,
            Q,
            R
        ];
        const T = await Ticket_1[aD(0x1c8)][aD(0x1f7)](S);
        if (!T) {
            if (G[aD(0x1b2)](G[aD(0x19f)], G[aC(0x1b3)]))
                throw new O[(aC(0x1c8))](G[aD(0x1da)], 0x2fe * 0x1 + -0x1b + -0x14f);
            else
                throw new AppError_1[(aC(0x1c8))](G[aD(0x1da)], -0x40a + 0x1 * 0x20ca + -0x1b2c);
        }
        await (-0x31 * 0x1f + 0x1 * -0x20d1 + -0x20 * -0x136, SetTicketMessagesAsRead_1[aD(0x1c8)])(T);
        const U = G[aD(0x197)](T[aD(0x1d6)], G[aD(0x1e1)]) && G[aD(0x1b2)](B[aC(0x1d6)], G[aD(0x1e1)]), V = T[aC(0x1d6)], W = T[aD(0x1a9)]?.['id'];
        G[aC(0x1e0)](V, G[aD(0x1e5)]) && (G[aC(0x1b2)](G[aD(0x153)], G[aC(0x15e)]) ? P[aC(0x1cd)] = new Q()[aC(0x18f)]() : await (-0x12be + -0xa4c + 0x1d0a, CheckContactOpenTickets_1[aC(0x1c8)])(T[aC(0x160)]['id']));
        const X = G[aC(0x1f4)](H, G[aD(0x15b)]) ? G[aC(0x1e5)] : H, Y = {
                'status': X,
                'queueId': K,
                'userId': I,
                'imported': G[aD(0x1b2)](H, G[aD(0x1e5)]) ? null : T[aD(0x1f6)]
            };
        if (G[aD(0x1e0)](X, G[aC(0x1e5)])) {
            if (G[aD(0x1ed)](G[aC(0x1f0)], G[aC(0x1f0)])) {
                const a7 = {};
                return a7[aC(0x1c8)] = j, R && S[aC(0x166)] ? a7 : a7;
            } else
                Y[aD(0x1cd)] = new Date()[aD(0x18f)]();
        }
        if (G[aD(0x192)](V, G[aC(0x1e1)]) && G[aD(0x1f4)](X, G[aC(0x1b0)])) {
            if (G[aD(0x17c)](G[aD(0x1a1)], G[aC(0x1a1)])) {
                const a8 = {};
                a8[aD(0x1bf)] = R, a8[aD(0x1b8)] = G[aC(0x18a)], a8[aC(0x1ba)] = S, (0x1681 + -0x25d8 + 0xf57, Q[aC(0x1c8)])(a8);
            } else
                Y[aD(0x177) + 'd'] = null, Y[aD(0x178) + aC(0x1ad)] = null, Y[aC(0x1ff) + aC(0x1a6)] = new Date()[aD(0x18f)]();
        }
        await T[aC(0x1af)](Y);
        if (G[aC(0x1cc)](V, G[aD(0x1e1)]) && G[aD(0x1e0)](X, G[aD(0x1b0)])) {
            if (G[aC(0x1ed)](G[aD(0x18e)], G[aD(0x18e)]))
                R[aD(0x177) + 'd'] = null, S[aD(0x178) + aC(0x1ad)] = null, i[aD(0x1ff) + aC(0x1a6)] = new j()[aC(0x18f)]();
            else {
                const a9 = {};
                a9[aD(0x1c2)] = E, a9[aC(0x19a)] = C, a9[aD(0x1b8)] = G[aC(0x1b0)], await (-0x52c * 0x2 + -0x1 * 0x2361 + -0x5 * -0x925, CreateLogTicketService_1[aD(0x1c8)])(a9);
            }
        }
        if (G[aD(0x185)](X, G[aD(0x1e5)])) {
            const aa = {};
            aa[aD(0x1c2)] = E, aa[aD(0x19a)] = C, aa[aD(0x1b8)] = G[aD(0x1e5)], await (-0x108 + 0x47 * 0x6a + -0x1c5e, CreateLogTicketService_1[aD(0x1c8)])(aa);
        }
        if (G[aD(0x1b2)](V, G[aC(0x1b0)]) && G[aD(0x1b2)](X, G[aC(0x1e1)])) {
            const ab = {};
            ab[aD(0x1c2)] = E, ab[aC(0x19a)] = C, ab[aD(0x1b8)] = G[aD(0x1e1)], await (0x1 * -0x113e + 0x12a2 + 0x59 * -0x4, CreateLogTicketService_1[aD(0x1c8)])(ab);
        }
        if (D) {
            const ac = {};
            ac[aC(0x1c2)] = E, ac[aD(0x19a)] = C, ac[aC(0x1b8)] = G[aC(0x1fe)], await (-0x86b + 0x1473 + 0xdc * -0xe, CreateLogTicketService_1[aD(0x1c8)])(ac);
            if (I) {
                const ad = {};
                ad[aD(0x1c2)] = I, ad[aC(0x19a)] = C, ad[aC(0x1b8)] = G[aD(0x17b)], await (-0x1 * 0x419 + 0xaf8 + 0x1 * -0x6df, CreateLogTicketService_1[aD(0x1c8)])(ad);
            }
        }
        await T[aD(0x1fa)]();
        const Z = {};
        Z['id'] = T[aD(0x174)], Z[aD(0x1bf)] = J;
        const a0 = {};
        a0[aC(0x1f3)] = Z;
        const a1 = await Whatsapp_1[aD(0x1c8)][aC(0x1f7)](a0);
        if (G[aC(0x1cc)](a1?.[aC(0x1ce) + aC(0x1c9)], !![]) && G[aD(0x195)](V, G[aC(0x1e1)]) && G[aD(0x15d)](X, G[aC(0x1b0)])) {
            const ae = a1?.[aD(0x1ce) + aD(0x1c9) + aD(0x16d)] || G[aC(0x1fd)], af = await (-0x12f0 + 0x187 * -0x14 + 0x317c, Mustache_1[aC(0x1c8)])(ae, T[aD(0x160)], T), ag = {};
            ag[aD(0x1c5)] = af, ag[aC(0x201)] = !![], ag[aC(0x1fc)] = !![], ag[aD(0x1bb)] = G[aC(0x193)], ag[aD(0x1bf)] = T[aC(0x1bf)];
            const ah = ag, ai = {};
            ai[aD(0x15f)] = ah, ai[aD(0x1bf)] = T[aD(0x1bf)], ai[aD(0x18d)] = T, ai[aC(0x1bb)] = ah[aC(0x1bb)], ai[aD(0x1d6)] = G[aC(0x1e1)], await (0x236d * 0x1 + -0x1d60 + -0x60d, CreateMessageSystemService_1[aD(0x1c8)])(ai);
        }
        D && await T[aD(0x170) + 'ue'](G[aD(0x1c6)], !![]);
        if (D) {
            const aj = await (0xf10 + -0x1a99 + 0xb89 * 0x1, GetIntegrationsID_1[aC(0x1c8)])(T[aC(0x202)]);
            if (G[aC(0x155)](typeof aj, G[aD(0x19e)])) {
                await T[aC(0x170) + 'ue'](G[aC(0x156)], !![]), await T[aC(0x170) + 'ue'](G[aD(0x16f)], aj);
                const ak = {};
                ak[aD(0x1dd) + aC(0x1c1)] = !![], ak[aC(0x1df) + aC(0x1bd)] = aj;
                const al = ak;
                await T[aC(0x1af)](al), await T[aD(0x1fa)]();
            } else {
                await T[aD(0x170) + 'ue'](G[aC(0x156)], ![]), await T[aC(0x170) + 'ue'](G[aD(0x16f)], null);
                const am = {};
                am[aD(0x1dd) + aC(0x1c1)] = ![], am[aC(0x1df) + aC(0x1bd)] = null;
                const an = am;
                await T[aC(0x1af)](an), await T[aC(0x1fa)]();
            }
        }
        if (D) {
            const ao = {};
            ao['id'] = T[aD(0x174)], ao[aC(0x1bf)] = J;
            const ap = {};
            ap[aD(0x1f3)] = ao;
            const aq = await Whatsapp_1[aD(0x1c8)][aC(0x1f7)](ap);
            if (G[aC(0x1b2)](aq?.[aD(0x179) + aD(0x1c3)], !![])) {
                const ar = aq?.[aD(0x179) + aC(0x1f2) + 'SG'] || G[aC(0x1fb)], as = await (0x1e8c + -0x1 * -0x40 + -0x1ecc, Mustache_1[aD(0x1c8)])(ar, T[aD(0x160)], T), at = {};
                at[aD(0x1c5)] = as, at[aC(0x201)] = !![], at[aD(0x1fc)] = !![], at[aD(0x1bb)] = G[aC(0x193)], at[aC(0x1bf)] = T[aC(0x1bf)];
                const au = at, av = {};
                av[aD(0x15f)] = au, av[aC(0x1bf)] = T[aC(0x1bf)], av[aC(0x18d)] = T, av[aD(0x1bb)] = au[aD(0x1bb)], av[aC(0x1d6)] = G[aC(0x1e1)], await (0x4 * -0x8f8 + 0x22c3 * -0x1 + -0x1 * -0x46a3, CreateMessageSystemService_1[aD(0x1c8)])(av);
            }
        }
        if (U) {
            const aw = {};
            aw[aC(0x1bf)] = J, aw[aD(0x1b8)] = G[aD(0x18a)], aw[aD(0x1ba)] = T, (0xd0 + 0x11 * 0x51 + -0x631, socketEmit_1[aC(0x1c8)])(aw);
        }
        const a2 = {};
        a2[aC(0x1bf)] = J, a2[aD(0x1b8)] = G[aD(0x16c)], a2[aD(0x1ba)] = T, (-0xc * 0x304 + 0x2074 + 0x3bc, socketEmit_1[aC(0x1c8)])(a2);
        const a3 = {};
        return a3[aC(0x18d)] = T, a3[aD(0x199)] = V, a3[aD(0x1a2)] = W, a3;
    };
function a() {
    const aE = [
        'closedAt',
        'sendGreeti',
        'bot',
        '32966770UxJkeH',
        'value',
        'ontactOpen',
        '../../help',
        'ng}}\x20*{{na',
        'cHwuU',
        'status',
        'ate',
        'avor,\x20agua',
        'gTicketSer',
        'ClHib',
        'color',
        'number',
        'useIntegra',
        'rs/AppErro',
        'integratio',
        'cDkQc',
        'lVOVm',
        'notificati',
        'vice',
        'extraInfo',
        'jZsBW',
        'ls/Ticket',
        'sWHbP',
        '4824999tfTmNL',
        'attributes',
        'atendiment',
        'Services/C',
        '../Message',
        'stwqf',
        'wallets',
        'ERR_NO_TIC',
        'RJwot',
        '5997648bsqfwB',
        'nsfTicketM',
        'where',
        'cMEDL',
        'KET_FOUND',
        'imported',
        'findOne',
        '815020VRErRd',
        'transfered',
        'reload',
        'VMUiG',
        'read',
        'GFYdz',
        'TmJcd',
        'startedAtt',
        'ketMessage',
        'fromMe',
        'queueId',
        'tendimento',
        'WAUOT',
        'receivedTr',
        'ers/Mustac',
        'close',
        'erty',
        '‎\x20*{{name}',
        'ESniz',
        'ls/Whatsap',
        'QxYoB',
        '../../mode',
        'TYmla',
        'JyCey',
        'Tickets',
        'include',
        '‎\x20{{greeti',
        'SxNBn',
        'ztrsL',
        'bfLVf',
        'FEVhY',
        'mWnka',
        'msg',
        'contact',
        'BVhBU',
        'pending',
        'ls/User',
        'r\x20com\x20seu\x20',
        'ento\x20em\x20br',
        '__esModule',
        '1967QhccZm',
        'isTransfer',
        'm\x20irá\x20aten',
        'egrationsI',
        './CreateLo',
        'JRNUv',
        'MSG',
        '__importDe',
        'Saxhl',
        'setDataVal',
        '\x20nome\x20é\x20*{',
        '{user}}*\x20e',
        'name',
        'whatsappId',
        'reateMessa',
        'Emit',
        'autoReplyI',
        'stepAutoRe',
        'sendMsgTra',
        'o\x20transfer',
        'fCftz',
        'rdHrj',
        'rde\x20um\x20mom',
        'fveXK',
        'tags',
        '165214NDXsnZ',
        'ers/socket',
        'dê-lo.',
        '../../erro',
        'ls/Contact',
        'sIUeL',
        'whatsapp',
        'ticket:upd',
        'OMIxS',
        'rvice',
        'uJHPG',
        '}*\x20o\x20seu\x20a',
        'me}}*,\x20meu',
        'ticket',
        'rhRMU',
        'getTime',
        'associatio',
        'fault',
        'JXQZd',
        'UImGK',
        'ALfbw',
        'wqlwR',
        'gloEd',
        'PFMvM',
        'YNwKG',
        'oldStatus',
        'ticketId',
        '342863JPROes',
        'bKZvu',
        '\x20prossegui',
        'ZLzdN',
        'nKuXz',
        'open',
        'vtdCZ',
        'oldUserId',
        '5hKPNKJ',
        '13956sjmyFz',
        'model',
        'endanceAt',
        'eve,\x20algué',
        'BLCuj',
        'user',
        'on:new',
        'geSystemSe',
        'IaxeI',
        'plyId',
        'ers/CheckC',
        'update',
        'CBcVf',
        'RObnX',
        'XSvHd',
        'AeXfg',
        'ido.\x20Por\x20f',
        'ers/SetTic',
        'ansfer',
        'closed',
        'type',
        'isDeleted',
        'payload',
        'sendType',
        '\x20está\x20send',
        'nId',
        'ence',
        'tenantId',
        'defineProp',
        'tion',
        'userId',
        'nsfTicket',
        'sAsRead',
        'body',
        'DFARc',
        'ers/GetInt',
        'default',
        'ngAccepted',
        '\x20agora\x20vou',
        '60CUEVut',
        'RIfnK'
    ];
    a = function () {
        return aE;
    };
    return a();
}
exports[az(0x1c8)] = UpdateTicketService;