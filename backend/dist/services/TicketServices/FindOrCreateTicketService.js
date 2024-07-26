'use strict';
const aE = b, aF = b;
(function (c, d) {
    const aC = b, aD = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(aC(0x148)) / (0x2313 + 0xc7f * -0x3 + 0x26b) * (-parseInt(aC(0x11c)) / (0x1fb * -0xc + -0xb27 * -0x2 + -0x178 * -0x1)) + parseInt(aD(0x161)) / (0x5d7 * 0x6 + 0x230e + 0xa03 * -0x7) * (-parseInt(aC(0x162)) / (0x1 * 0x2424 + -0x14ff + -0xf21)) + parseInt(aD(0x165)) / (0x855 + 0x5 * -0x4ff + 0x10ab) + parseInt(aD(0x1b6)) / (-0x1 * 0x1dc5 + -0x2573 + -0x13 * -0x38a) + parseInt(aC(0x173)) / (0xdc6 + 0x128f * -0x1 + 0x4d0) + -parseInt(aD(0x124)) / (-0x2073 + 0x1d7 * -0x13 + -0x1a * -0x298) * (-parseInt(aC(0x1bf)) / (0x18a0 + 0x1 * -0x907 + -0x7c8 * 0x2)) + -parseInt(aC(0x14b)) / (0x11cf + -0x1da5 * 0x1 + -0x10 * -0xbe) * (parseInt(aD(0x167)) / (-0x1e95 * 0x1 + 0x2349 + -0x4a9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1ff6 * 0x6 + 0x14445 + -0x4058));
var __importDefault = this && this[aE(0x19a) + aE(0x15e)] || function (c) {
    const aG = aF;
    return c && c[aG(0x12b)] ? c : { 'default': c };
};
const s = {};
s[aE(0x158)] = !![], Object[aE(0x15c) + aE(0x1bd)](exports, aF(0x12b), s);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x11 * -0x241 + -0x4 * -0x6ce + 0xc31 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(aF(0x1a7)), Contact_1 = __importDefault(require(aF(0x1b2) + aE(0x168))), Ticket_1 = __importDefault(require(aF(0x1b2) + aE(0x1bb))), User_1 = __importDefault(require(aE(0x1b2) + aE(0x11e))), ShowTicketService_1 = __importDefault(require(aF(0x15b) + aF(0x13f))), CampaignContacts_1 = __importDefault(require(aE(0x1b2) + aE(0x141) + aE(0x199))), socketEmit_1 = __importDefault(require(aF(0x1b0) + aE(0x153) + aE(0x186))), CheckChatBotFlowWelcome_1 = __importDefault(require(aF(0x1b0) + aF(0x196) + aE(0x13a) + aE(0x15a))), CreateLogTicketService_1 = __importDefault(require(aE(0x1a1) + aF(0x13c) + aF(0x137))), Message_1 = __importDefault(require(aF(0x1b2) + aE(0x19e))), ListSettingsService_1 = __importDefault(require(aE(0x11f) + aF(0x179) + aF(0x19c) + aF(0x143))), Whatsapp_1 = __importDefault(require(aE(0x1b2) + aE(0x184) + 'p')), VerifyContactBaileys_1 = require(aE(0x12a) + aF(0x155) + aE(0x136) + aE(0x190) + aF(0x19f)), FindOrCreateTicketService = async ({
        contact: G,
        whatsappId: H,
        unreadMessages: I,
        tenantId: J,
        groupContact: K,
        msg: L,
        isSync: M,
        channel: N
    }) => {
        const aH = aE, aI = aF, O = {};
        O[aH(0x17a)] = aH(0x12f), O[aH(0x1ac)] = function (a8, a9) {
            return a8 === a9;
        }, O[aI(0x163)] = aH(0x17d), O[aH(0x172)] = function (a8, a9) {
            return a8 !== a9;
        }, O[aI(0x14c)] = aI(0x14f), O[aI(0x16d)] = function (a8, a9) {
            return a8 !== a9;
        }, O[aI(0x1b1)] = aH(0x16e), O[aI(0x13e)] = function (a8, a9) {
            return a8 === a9;
        }, O[aH(0x133)] = aH(0x185), O[aI(0x12c)] = aI(0x146), O[aI(0x11b)] = aH(0x121), O[aH(0x14a)] = aI(0x149), O[aI(0x140)] = function (a8, a9) {
            return a8 === a9;
        }, O[aI(0x1b4)] = aI(0x119), O[aI(0x1ab)] = aI(0x14e), O[aH(0x1b9)] = function (a8, a9) {
            return a8 === a9;
        }, O[aH(0x147)] = aI(0x1a3), O[aH(0x17c)] = function (a8, a9) {
            return a8 === a9;
        }, O[aI(0x138)] = function (a8, a9) {
            return a8 === a9;
        }, O[aH(0x194)] = aI(0x17b), O[aH(0x145)] = aH(0x13b), O[aH(0x1af)] = aI(0x181), O[aI(0x131)] = aI(0x19b), O[aI(0x11a)] = aH(0x11d), O[aH(0x188)] = aH(0x1a6), O[aH(0x1b7)] = aI(0x120), O[aI(0x16c)] = aI(0x125), O[aH(0x156)] = aH(0x139), O[aH(0x1aa)] = function (a8, a9) {
            return a8 !== a9;
        }, O[aI(0x189)] = aI(0x166), O[aI(0x176)] = aH(0x19d), O[aH(0x180)] = aH(0x15f), O[aH(0x13d)] = aI(0x183), O[aH(0x175)] = aH(0x1a8), O[aI(0x130)] = function (a8, a9) {
            return a8 > a9;
        }, O[aI(0x187)] = aI(0x1c0) + aI(0x14d), O[aI(0x1b3)] = function (a8, a9) {
            return a8 === a9;
        }, O[aH(0x191)] = aI(0x12e), O[aH(0x177)] = aI(0x1bc), O[aH(0x18f)] = aI(0x178), O[aH(0x135)] = function (a8, a9) {
            return a8 === a9;
        }, O[aH(0x126)] = aI(0x123), O[aH(0x144)] = aI(0x129), O[aH(0x17f)] = function (a8, a9) {
            return a8 === a9;
        }, O[aH(0x128)] = aI(0x154), O[aH(0x157)] = aI(0x160), O[aI(0x1ad)] = function (a8, a9) {
            return a8 && a9;
        }, O[aH(0x122)] = aH(0x171);
        const P = O;
        let Q;
        P[aH(0x1ac)](N, P[aI(0x163)]) ? P[aI(0x172)](P[aH(0x14c)], P[aH(0x14c)]) ? e = f[aH(0x195)] : Q = L[aH(0x195)] : P[aH(0x16d)](P[aI(0x1b1)], P[aI(0x1b1)]) ? (h[aI(0x169)] = P[aI(0x17a)], R[aI(0x1b5)] = S[-0x251 * 0x7 + 0x3d * -0x6f + 0x2aaa]['id'], T[aI(0x159) + aI(0x174)] = new U()[aH(0x170)]()) : Q = L[aI(0x17e)][aI(0x195)];
        if (P[aH(0x13e)](N, P[aH(0x133)]) && L && Q) {
            if (P[aH(0x13e)](P[aH(0x12c)], P[aI(0x11b)]))
                e[aI(0x1b5)] = f[aI(0x1b5)];
            else {
                const ab = {};
                ab[aH(0x192)] = G['id'], ab[aH(0x18c)] = L[aH(0x17e)]?.['id'];
                const ac = {};
                ac[aI(0x164)] = ab;
                const ad = await CampaignContacts_1[aI(0x198)][aI(0x18d)](ac);
                if (ad?.['id']) {
                    if (P[aI(0x13e)](P[aH(0x14a)], P[aH(0x14a)])) {
                        const ae = {};
                        return ae[aH(0x127) + aI(0x142)] = !![], ae;
                    } else {
                        const ag = {};
                        return ag[aI(0x198)] = S, ag && h[aH(0x12b)] ? R : ag;
                    }
                }
            }
        }
        if (L && L[aH(0x195)]) {
            if (P[aI(0x140)](P[aI(0x1b4)], P[aI(0x1b4)])) {
                const ag = {};
                ag[aI(0x18c)] = L[aH(0x17e)]?.['id'];
                const ah = {};
                ah[aH(0x164)] = ag, ah[aI(0x18a)] = [P[aI(0x1ab)]];
                const ai = await Message_1[aH(0x198)][aH(0x18d)](ah);
                if (P[aH(0x1b9)](ai?.[aH(0x14e)]?.[aH(0x169)], P[aH(0x147)]) && P[aH(0x17c)](ai?.[aH(0x14e)][aH(0x1be) + 'e'], L[aI(0x197)])) {
                    if (P[aH(0x138)](P[aH(0x194)], P[aI(0x194)])) {
                        const aj = ai[aH(0x14e)];
                        return aj[aH(0x1b8) + aI(0x142)] = !![], aj;
                    } else {
                        const al = d[aI(0x14e)];
                        return al[aH(0x1b8) + aH(0x142)] = !![], al;
                    }
                }
            } else {
                const am = {};
                return am[aI(0x127) + aH(0x142)] = !![], am;
            }
        }
        const R = {
                [sequelize_1['Op']['or']]: [
                    P[aI(0x17a)],
                    P[aI(0x145)]
                ]
            }, S = {};
        S[aH(0x169)] = R, S[aI(0x1c1)] = J, S[aI(0x18e)] = H, S[aI(0x192)] = K ? K['id'] : G['id'];
        const T = {};
        T[aH(0x1a4)] = Contact_1[aH(0x198)], T['as'] = P[aH(0x1af)], T[aH(0x18a)] = [
            P[aH(0x131)],
            P[aI(0x11a)],
            {
                'association': P[aH(0x188)],
                'attributes': [
                    'id',
                    P[aH(0x1b7)]
                ]
            }
        ];
        const U = {};
        U[aI(0x1a4)] = User_1[aH(0x198)], U['as'] = P[aH(0x16c)], U[aI(0x193)] = [
            'id',
            P[aH(0x1b7)]
        ];
        const V = {};
        V[aH(0x15d) + 'n'] = P[aH(0x133)], V[aH(0x193)] = [
            'id',
            P[aH(0x1b7)],
            P[aI(0x156)]
        ];
        const W = {};
        W[aI(0x164)] = S, W[aI(0x18a)] = [
            T,
            U,
            V
        ];
        let X = await Ticket_1[aH(0x198)][aI(0x18d)](W);
        if (X) {
            if (P[aH(0x1aa)](P[aH(0x189)], P[aH(0x176)])) {
                I = [
                    P[aI(0x180)],
                    P[aH(0x13d)],
                    P[aI(0x163)],
                    P[aI(0x175)]
                ][aI(0x182)](N) && P[aH(0x130)](I, 0x24d9 + -0xaa9 * -0x1 + -0x2f82) ? I += X[aH(0x150) + aH(0x132)] : I;
                const am = {};
                am[aH(0x150) + aH(0x132)] = I, await X[aH(0x118)](am);
                const an = {};
                return an[aH(0x1c1)] = J, an[aI(0x16f)] = P[aI(0x187)], an[aH(0x1a0)] = X, (0x13f * 0x5 + 0x59b + -0xbd6, socketEmit_1[aH(0x198)])(an), X;
            } else
                e = f[aI(0x17e)][aH(0x195)];
        }
        if (K) {
            if (P[aI(0x1b3)](P[aH(0x191)], P[aI(0x191)])) {
                const ap = {};
                ap[aH(0x192)] = K['id'], ap[aI(0x1c1)] = J, ap[aI(0x18e)] = H;
                const aq = {};
                aq[aH(0x164)] = ap, aq[aH(0x134)] = [[
                        P[aH(0x177)],
                        P[aI(0x18f)]
                    ]], aq[aI(0x18a)] = [
                    {
                        'model': Contact_1[aI(0x198)],
                        'as': P[aI(0x1af)],
                        'include': [
                            P[aH(0x131)],
                            P[aI(0x11a)],
                            {
                                'association': P[aI(0x188)],
                                'attributes': [
                                    'id',
                                    P[aI(0x1b7)]
                                ]
                            }
                        ]
                    },
                    {
                        'model': User_1[aI(0x198)],
                        'as': P[aH(0x16c)],
                        'attributes': [
                            'id',
                            P[aI(0x1b7)]
                        ]
                    },
                    {
                        'association': P[aI(0x133)],
                        'attributes': [
                            'id',
                            P[aI(0x1b7)],
                            P[aH(0x156)]
                        ]
                    }
                ], X = await Ticket_1[aH(0x198)][aH(0x18d)](aq);
                if (X) {
                    if (P[aI(0x135)](P[aH(0x126)], P[aH(0x144)]))
                        R[aH(0x1b5)] && (o[aI(0x1b5)] = p[aH(0x1b5)]), U[aI(0x151)] && (ap[aI(0x151)] = aq[aI(0x151)]);
                    else {
                        const as = {};
                        as[aI(0x169)] = P[aH(0x145)], as[aH(0x1b5)] = null, as[aH(0x150) + aI(0x132)] = I, await X[aI(0x118)](as);
                        const at = {};
                        return at[aI(0x1c1)] = J, at[aH(0x16f)] = P[aH(0x187)], at[aI(0x1a0)] = X, (-0x292 * 0x6 + 0xc7 * 0x3 + 0xd17, socketEmit_1[aH(0x198)])(at), X;
                    }
                }
            } else
                e[aI(0x151)] = f[aH(0x151)];
        } else {
            const av = {
                    [sequelize_1['Op']['in']]: [
                        P[aI(0x17a)],
                        P[aH(0x145)]
                    ]
                }, aw = {};
            aw[aI(0x169)] = av, aw[aI(0x1c1)] = J, aw[aH(0x18e)] = H, aw[aI(0x192)] = G['id'];
            const ax = {};
            ax[aI(0x164)] = aw, ax[aH(0x134)] = [[
                    P[aH(0x177)],
                    P[aH(0x18f)]
                ]], ax[aH(0x18a)] = [
                {
                    'model': Contact_1[aH(0x198)],
                    'as': P[aH(0x1af)],
                    'include': [
                        P[aH(0x131)],
                        P[aH(0x11a)],
                        {
                            'association': P[aH(0x188)],
                            'attributes': [
                                'id',
                                P[aI(0x1b7)]
                            ]
                        }
                    ]
                },
                {
                    'model': User_1[aH(0x198)],
                    'as': P[aI(0x16c)],
                    'attributes': [
                        'id',
                        P[aH(0x1b7)]
                    ]
                },
                {
                    'association': P[aH(0x133)],
                    'attributes': [
                        'id',
                        P[aH(0x1b7)],
                        P[aI(0x156)]
                    ]
                }
            ], X = await Ticket_1[aH(0x198)][aI(0x18d)](ax);
            if (X) {
                const ay = {};
                ay[aH(0x169)] = P[aH(0x145)], ay[aI(0x1b5)] = null, ay[aI(0x150) + aH(0x132)] = I, await X[aI(0x118)](ay);
                const az = {};
                return az[aI(0x1c1)] = J, az[aI(0x16f)] = P[aI(0x187)], az[aH(0x1a0)] = X, (0x51 * -0x42 + -0x595 * -0x3 + -0x423 * -0x1, socketEmit_1[aH(0x198)])(az), X;
            }
        }
        const Y = P[aH(0x17f)]((await (0x8bb + 0xbf2 + 0x1 * -0x14ad, ListSettingsService_1[aI(0x198)])(J))?.[aI(0x16b)](aA => aA[aI(0x17e)] === aI(0x1ae) + aI(0x1a5) + 'ts')?.[aI(0x158)], P[aI(0x128)]) || ![], Z = {};
        Z[aI(0x192)] = K ? K['id'] : G['id'], Z[aH(0x169)] = P[aH(0x145)], Z[aH(0x12d)] = !!K, Z[aI(0x150) + aI(0x132)] = I, Z[aH(0x18e)] = H, Z[aI(0x1c1)] = J, Z[aH(0x18b)] = N;
        const a0 = Z, a1 = {};
        a1['id'] = H;
        const a2 = {};
        a2[aH(0x164)] = a1;
        const a3 = await Whatsapp_1[aI(0x198)][aH(0x18d)](a2);
        a3 && (a3[aH(0x1b5)] && (a0[aI(0x1b5)] = a3[aH(0x1b5)]), a3[aI(0x151)] && (a0[aI(0x151)] = a3[aH(0x151)]));
        if (Y && G['id']) {
            const aA = G, aB = await aA[aH(0x16a)]();
            aB && aB[0xca9 + 0x2 * 0xa0b + -0x20bf]?.['id'] && (a0[aH(0x169)] = P[aH(0x17a)], a0[aI(0x1b5)] = aB[-0x1570 + 0x10a9 * 0x2 + -0xbe2]['id'], a0[aH(0x159) + aI(0x174)] = new Date()[aI(0x170)]());
        }
        L && (a0[aI(0x1be) + 'e'] = await (-0x74 + -0x55 * -0x2b + -0xdd3, VerifyContactBaileys_1[aH(0x152) + aH(0x1a2)])(L));
        const a4 = await Ticket_1[aH(0x198)][aI(0x160)](a0), a5 = {};
        a5[aI(0x1a9)] = a4['id'], a5[aI(0x16f)] = P[aH(0x157)], await (0x57d + 0xc14 + 0x5db * -0x3, CreateLogTicketService_1[aH(0x198)])(a5);
        (P[aH(0x1ad)](L, !Q) || M) && await (-0xe5b + -0x216a + 0x2fc5, CheckChatBotFlowWelcome_1[aI(0x198)])(a4);
        const a6 = {};
        a6['id'] = a4['id'], a6[aH(0x1c1)] = J, X = await (-0x1897 * -0x1 + -0x442 * -0x1 + -0x1cd9, ShowTicketService_1[aI(0x198)])(a6), X[aI(0x1ba) + 'ue'](P[aH(0x122)], !![]);
        const a7 = {};
        return a7[aH(0x1c1)] = J, a7[aI(0x16f)] = P[aH(0x187)], a7[aH(0x1a0)] = X, (-0x1c73 + 0x250d + -0x89a, socketEmit_1[aI(0x198)])(a7), X;
    };
exports[aF(0x198)] = FindOrCreateTicketService;
function a() {
    const aJ = [
        'WClVZ',
        'AywTA',
        'wtbDk',
        'include',
        'channel',
        'messageId',
        'findOne',
        'whatsappId',
        'viJoY',
        'ContactBai',
        'qzVaX',
        'contactId',
        'attributes',
        'wYTaN',
        'fromMe',
        'ers/CheckC',
        'body',
        'default',
        'nContacts',
        '__importDe',
        'extraInfo',
        'istSetting',
        'KmmXG',
        'ls/Message',
        'leys',
        'payload',
        './CreateLo',
        'sage',
        'closed',
        'model',
        'etsToWalle',
        'wallets',
        'sequelize',
        'messenger',
        'ticketId',
        'uwAcs',
        'mdWCl',
        'iWrhk',
        'AFriw',
        'DirectTick',
        'QYdxF',
        '../../help',
        'XAfHe',
        '../../mode',
        'MfGTP',
        'zBJna',
        'userId',
        '405318UyAOgE',
        'yymdq',
        'isFarewell',
        'rOZuL',
        'setDataVal',
        'ls/Ticket',
        'updatedAt',
        'erty',
        'lastMessag',
        '9IuPmBc',
        'ticket:upd',
        'tenantId',
        'update',
        'MRLTM',
        'vRzNG',
        'CAbbA',
        '20222ULgipz',
        'tags',
        'ls/User',
        '../Setting',
        'name',
        'SZMNS',
        'NaYhq',
        'NNstH',
        '758456eVkxTB',
        'user',
        'SthhT',
        'isCampaign',
        'jOxZi',
        'JKtdJ',
        '../WbotSer',
        '__esModule',
        'VLyDf',
        'isGroup',
        'hdqpK',
        'open',
        'LQCck',
        'vCmmb',
        'ages',
        'pHGXL',
        'order',
        'iwUEe',
        'ers/Verify',
        'vice',
        'UgbyM',
        'isDeleted',
        'hatBotFlow',
        'pending',
        'gTicketSer',
        'lnubQ',
        'LqBNg',
        'etService',
        'eKLfN',
        'ls/Campaig',
        'Message',
        'sService',
        'IgZTi',
        'vliuC',
        'ibwBK',
        'HAKpi',
        '1QQzUVK',
        'HXoXA',
        'ltFpQ',
        '687700XjpAMh',
        'FzIQK',
        'ate',
        'ticket',
        'TAqNR',
        'unreadMess',
        'queueId',
        'getBodyMes',
        'ers/socket',
        'enabled',
        'vices/help',
        'YJTcj',
        'VuEWV',
        'value',
        'startedAtt',
        'Welcome',
        './ShowTick',
        'defineProp',
        'associatio',
        'fault',
        'telegram',
        'create',
        '24399FalkLd',
        '4vjWRmp',
        'NcyGt',
        'where',
        '140575kmLfuR',
        'CCdIw',
        '22MglgjT',
        'ls/Contact',
        'status',
        'getWallets',
        'find',
        'ywSOF',
        'Ltlgq',
        'PayDl',
        'type',
        'getTime',
        'isCreated',
        'GOBTp',
        '566594NAbxJj',
        'endanceAt',
        'gkxqc',
        'gLxsI',
        'dTgFw',
        'DESC',
        'Services/L',
        'UQWrR',
        'ZoFOM',
        'szXgo',
        'instagram',
        'key',
        'oacpo',
        'imUaY',
        'contact',
        'includes',
        'waba',
        'ls/Whatsap',
        'whatsapp',
        'Emit'
    ];
    a = function () {
        return aJ;
    };
    return a();
}