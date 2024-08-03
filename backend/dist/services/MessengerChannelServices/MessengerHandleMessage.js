'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x171)) / (0x1b40 + -0x1 * -0x120e + 0x1 * -0x2d4d) + -parseInt(A(0x188)) / (-0x1657 + -0xe6e + 0x24c7 * 0x1) + -parseInt(B(0x15d)) / (-0x188 * 0x15 + -0x260f + 0xca * 0x59) * (parseInt(A(0x189)) / (-0x5d3 + -0x12c4 * -0x1 + -0xced)) + -parseInt(B(0x1ab)) / (0xd6f * 0x2 + 0x1 * 0xfd5 + 0x4be * -0x9) * (parseInt(A(0x1a0)) / (-0x4c6 + -0x1195 + 0x11 * 0x151)) + parseInt(B(0x190)) / (0xcdd + 0x21 * 0xc6 + -0x1 * 0x265c) * (-parseInt(A(0x16f)) / (0x1e54 + 0x39b * 0x2 + -0x2582)) + -parseInt(A(0x109)) / (-0x563 * -0x1 + 0x1b93 + 0x1 * -0x20ed) + -parseInt(A(0x1ac)) / (-0x1a2f + -0x18cc + 0x1 * 0x3305) * (-parseInt(B(0x145)) / (0x20a4 + 0x2023 + -0x4 * 0x102f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xc61ac + -0x19fbf * -0x2 + 0x2ed * 0x5ca));
var __importDefault = this && this[C(0x154) + C(0x13b)] || function (c) {
    const E = D;
    return c && c[E(0x121)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x25 * 0x1f + 0x64b + -0xc7);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[D(0x1ae)] = !![], Object[C(0x187) + D(0x14d)](exports, C(0x121), k);
const logger_1 = require(D(0x17d) + C(0x18f)), FindOrCreateTicketService_1 = __importDefault(require(D(0x168) + C(0x147) + D(0x113) + D(0x129) + D(0x17a))), messengerBot_1 = require(D(0x133) + C(0x1b7) + D(0x1af)), MessengerVerifyContact_1 = __importDefault(require(D(0x124) + D(0x134) + D(0x175))), MessengerVerifyMessage_1 = __importDefault(require(C(0x124) + D(0x11b) + D(0x140))), MessengerVerifyMediaMessage_1 = __importDefault(require(D(0x124) + C(0x11e) + C(0x18d))), VerifyStepsChatFlowTicket_1 = __importDefault(require(D(0x176) + D(0x184) + D(0x192) + C(0x149) + C(0x112))), MessengerMarkRead_1 = __importDefault(require(D(0x124) + D(0x11a))), MessengerShowChannel_1 = __importDefault(require(D(0x124) + D(0x11c) + 'el')), VerifyBusinessHours_1 = __importDefault(require(D(0x16e) + C(0x16a) + C(0x128) + D(0x12a) + D(0x142))), getMessageType = d => {
        const F = C, G = D, e = {};
        e[F(0x164)] = function (i, j) {
            return i > j;
        }, e[G(0x1a2)] = G(0x1b5), e[G(0x12b)] = function (i, j) {
            return i === j;
        }, e[G(0x114)] = G(0x14e), e[G(0x1a7)] = function (i, j) {
            return i === j;
        }, e[F(0x1a9)] = F(0x116), e[G(0x163)] = function (i, j) {
            return i === j;
        }, e[F(0x1a3)] = G(0x156), e[F(0x186)] = function (i, j) {
            return i === j;
        }, e[G(0x152)] = G(0x137), e[G(0x1b4)] = function (i, j) {
            return i === j;
        }, e[G(0x18b)] = F(0x10c), e[F(0x125)] = function (i, j) {
            return i === j;
        }, e[G(0x181)] = G(0x178);
        const f = e, {attachments: g} = d, h = g && f[F(0x164)](g[F(0x1aa)], 0x635 + -0x20d4 + 0x1a9f);
        if (d[G(0x1b5)] && !h)
            return f[G(0x1a2)];
        if (h && f[G(0x12b)](g[-0x159b + -0x12d0 + 0x1 * 0x286b][G(0x14b)], f[G(0x114)]))
            return f[F(0x114)];
        if (h && f[G(0x1a7)](g[0x1cb8 + 0xe5c + -0x2b14][G(0x14b)], f[G(0x1a9)]))
            return f[F(0x1a9)];
        if (h && f[F(0x163)](g[0x49 * 0x5b + 0x8df + 0x22d2 * -0x1][G(0x14b)], f[F(0x1a3)]))
            return f[F(0x1a3)];
        if (h && f[F(0x186)](g[0x1 * -0xd9b + -0x4 * 0x133 + 0x2a1 * 0x7][F(0x14b)], f[F(0x152)]))
            return f[G(0x152)];
        if (h && f[F(0x1b4)](g[0x20d4 + -0x14db * 0x1 + -0xbf9 * 0x1][F(0x14b)], f[G(0x18b)]))
            return f[F(0x18b)];
        if (h && f[G(0x125)](g[0x33 * -0x3 + 0x9d4 + -0x93b][F(0x14b)], f[F(0x181)]))
            return f[G(0x181)];
    }, MessengerHandleMessage = async c => {
        const H = D, I = C, d = {
                'tVhvT': function (e) {
                    return e();
                },
                'Fdnqm': function (e, f) {
                    return e > f;
                },
                'aWeoY': H(0x1b5),
                'WOeoP': function (e, f) {
                    return e === f;
                },
                'grnGw': H(0x14e),
                'QCOkX': H(0x116),
                'ZUOjo': H(0x156),
                'pitwl': I(0x137),
                'oAevj': function (e, f) {
                    return e === f;
                },
                'JJViQ': H(0x10c),
                'bUZfn': H(0x178),
                'VGEtz': function (e, f) {
                    return e(f);
                },
                'dqZwD': function (e, f) {
                    return e !== f;
                },
                'FhVTB': H(0x18c),
                'adaqg': function (e, f) {
                    return e !== f;
                },
                'TlMmV': H(0x1b2),
                'slVVG': H(0x14f),
                'cCnoj': I(0x115),
                'BIbtU': H(0x19a),
                'qhVBy': I(0x16c),
                'AYFpo': I(0x141),
                'pjJwQ': H(0x136),
                'wOhhU': H(0x144),
                'ZPgUE': H(0x1a4),
                'cYDLD': function (e, f) {
                    return e(f);
                }
            };
        return new Promise((e, f) => {
            const M = I, O = I, g = {
                    'ZJkjz': function (h) {
                        const J = b;
                        return d[J(0x19e)](h);
                    },
                    'mNtKT': function (h) {
                        const K = b;
                        return d[K(0x19e)](h);
                    },
                    'ADebE': function (h, i) {
                        const L = b;
                        return d[L(0x155)](h, i);
                    },
                    'rHTWy': d[M(0x157)],
                    'uhhYo': function (h, i) {
                        const N = M;
                        return d[N(0x197)](h, i);
                    },
                    'hsihm': d[O(0x13a)],
                    'oADes': function (h, i) {
                        const P = O;
                        return d[P(0x197)](h, i);
                    },
                    'NgZTh': d[M(0x1b8)],
                    'WlfhK': d[O(0x17b)],
                    'iTXkU': d[O(0x195)],
                    'LMRQq': function (h, i) {
                        const Q = M;
                        return d[Q(0x19d)](h, i);
                    },
                    'sIhPY': d[O(0x159)],
                    'mtTtf': d[M(0x18a)],
                    'UTQEf': function (h, i) {
                        const R = O;
                        return d[R(0x16d)](h, i);
                    },
                    'NYReC': function (h, i) {
                        const S = M;
                        return d[S(0x182)](h, i);
                    },
                    'wHnXx': d[O(0x143)],
                    'fUWMi': function (h, i) {
                        const T = O;
                        return d[T(0x1a8)](h, i);
                    },
                    'osHTQ': d[M(0x153)],
                    'iuGQp': d[M(0x19b)],
                    'XOMLE': function (h, i) {
                        const U = O;
                        return d[U(0x16d)](h, i);
                    },
                    'zRaET': d[O(0x15f)],
                    'Kbpeb': function (h, i) {
                        const V = M;
                        return d[V(0x1a8)](h, i);
                    },
                    'nxsog': d[M(0x131)],
                    'znGbS': d[M(0x12e)],
                    'xjMcz': function (h) {
                        const W = O;
                        return d[W(0x19e)](h);
                    },
                    'YwWIq': function (h, i) {
                        const X = M;
                        return d[X(0x197)](h, i);
                    },
                    'vjWiW': d[M(0x19f)],
                    'Ssvew': d[M(0x172)],
                    'ZGMfI': function (h, i) {
                        const Y = O;
                        return d[Y(0x19d)](h, i);
                    },
                    'mWTCo': d[O(0x1b3)],
                    'qfGpx': d[M(0x117)],
                    'nbHCa': function (h) {
                        const Z = O;
                        return d[Z(0x19e)](h);
                    },
                    'RWnuS': function (h, i) {
                        const a0 = M;
                        return d[a0(0x15c)](h, i);
                    }
                };
            ((async () => {
                const a2 = M, a4 = M, h = {
                        'KXVnQ': function (m, n) {
                            const a1 = b;
                            return g[a1(0x177)](m, n);
                        },
                        'nBiLZ': g[a2(0x11d)],
                        'ZohGc': function (m, n) {
                            const a3 = a2;
                            return g[a3(0x173)](m, n);
                        },
                        'bZlvs': g[a4(0x110)],
                        'eaYeF': function (m, n) {
                            const a5 = a2;
                            return g[a5(0x120)](m, n);
                        },
                        'iePaj': g[a2(0x10b)],
                        'rqivT': function (m, n) {
                            const a6 = a4;
                            return g[a6(0x173)](m, n);
                        },
                        'bXTNp': g[a4(0x132)],
                        'ZDZrp': g[a2(0x146)],
                        'aiFLD': function (m, n) {
                            const a7 = a4;
                            return g[a7(0x194)](m, n);
                        },
                        'CGsQY': g[a4(0x10a)],
                        'SyGar': function (m, n) {
                            const a8 = a4;
                            return g[a8(0x173)](m, n);
                        },
                        'AgXkX': g[a4(0x127)],
                        'TrvvU': function (m, n) {
                            const a9 = a2;
                            return g[a9(0x199)](m, n);
                        }
                    };
                let i, j;
                const l = -0x712 + 0x1db * 0x8 + -0x7c5;
                try {
                    if (g[a2(0x12d)](g[a4(0x122)], g[a2(0x122)])) {
                        g[a4(0x126)](d);
                        return;
                    } else {
                        if (g[a4(0x1a1)](c[a4(0x17e)], g[a2(0x17f)]))
                            return;
                        const n = c[a2(0x12c)][a2(0x15b)](), o = n?.[a2(0x17c)][a4(0x15b)](), p = {};
                        p[a2(0x169)] = n['id'], i = await (0xcd * -0xd + 0x249d + -0x1a34, MessengerShowChannel_1[a2(0x13f)])(p);
                        if (!i)
                            return;
                        const q = await (0x269d + 0x24c2 + -0x4b5f, messengerBot_1[a4(0x10f) + a4(0x162)])(i['id']);
                        if (!o?.[a2(0x167)] && o[a2(0x139)]) {
                            if (g[a4(0x173)](g[a2(0x191)], g[a2(0x191)])) {
                                (-0x102 * 0x5 + -0x1d6 * 0xe + 0x1ebe, MessengerMarkRead_1[a4(0x13f)])(o, i[a2(0x14a)]);
                                return;
                            } else {
                                const {attachments: v} = e, w = v && h[a2(0x19c)](v[a4(0x1aa)], -0x1 * -0x2155 + -0x61 * -0x26 + -0xfe9 * 0x3);
                                if (f[a2(0x1b5)] && !w)
                                    return h[a4(0x1b6)];
                                if (w && h[a4(0x10d)](v[-0x337 + 0x2 * 0xbb3 + 0x142f * -0x1][a4(0x14b)], h[a4(0x10e)]))
                                    return h[a4(0x10e)];
                                if (w && h[a2(0x166)](v[-0x1554 + 0x194d + -0x3f9][a4(0x14b)], h[a4(0x13e)]))
                                    return h[a4(0x13e)];
                                if (w && h[a2(0x185)](v[0x1abd + -0x2195 + -0x6d8 * -0x1][a4(0x14b)], h[a2(0x165)]))
                                    return h[a2(0x165)];
                                if (w && h[a4(0x185)](v[-0x25b0 + 0x2696 + 0x5 * -0x2e][a2(0x14b)], h[a2(0x138)]))
                                    return h[a2(0x138)];
                                if (w && h[a4(0x148)](v[-0x12 * 0xdb + 0x18e3 + 0x97d * -0x1][a2(0x14b)], h[a4(0x180)]))
                                    return h[a2(0x180)];
                                if (w && h[a2(0x130)](v[-0x1b34 + 0x1176 + -0x3a * -0x2b][a4(0x14b)], h[a2(0x161)]))
                                    return h[a2(0x161)];
                            }
                        }
                        j = await (0x9 * -0x2b7 + -0x1 * -0x1c8d + -0x11 * 0x3e, MessengerVerifyContact_1[a2(0x13f)])(o[a2(0x193)], q, i[a4(0x14a)]);
                        const r = {
                                ...o,
                                'type': g[a4(0x16b)](getMessageType, o[a4(0x167)]),
                                'fromMe': ![],
                                'body': o?.[a2(0x167)]?.[a2(0x1b5)] || '',
                                'timestamp': o[a4(0x174)],
                                'message_id': o[a4(0x167)][a4(0x14c)]
                            }, s = {};
                        s[a2(0x151)] = j, s[a2(0x160)] = i['id'], s[a4(0x158) + a2(0x1b1)] = l, s[a4(0x14a)] = i[a2(0x14a)], s[a2(0x118)] = r, s[a2(0x198)] = g[a2(0x170)];
                        const t = await (-0x1a52 + -0x1c61 + -0x13 * -0x2e1, FindOrCreateTicketService_1[a4(0x13f)])(s);
                        if (t?.[a2(0x123) + a2(0x183)]) {
                            if (g[a2(0x11f)](g[a2(0x150)], g[a4(0x18e)])) {
                                g[a4(0x111)](e);
                                return;
                            } else {
                                (-0x115b + 0x1417 + 0x14 * -0x23, f[a4(0x13f)])(g, h[a4(0x14a)]);
                                return;
                            }
                        }
                        if (t?.[a4(0x1a6) + a4(0x183)]) {
                            if (g[a4(0x12f)](g[a2(0x135)], g[a2(0x135)])) {
                                g[a2(0x1ad)](e);
                                return;
                            } else {
                                g[a4(0x1ad)](s);
                                return;
                            }
                        }
                        if (g[a4(0x1a1)](r[a2(0x14b)], g[a4(0x11d)]))
                            g[a4(0x11f)](g[a4(0x15e)], g[a2(0x15e)]) ? (g[a4(0x119)][a2(0x1b0)](h), h[a2(0x13c)](i, j)) : await (0x3 * 0x41d + 0x1 * 0x98b + 0x2 * -0xaf1, MessengerVerifyMediaMessage_1[a2(0x13f)])(i, r, t, j);
                        else {
                            if (g[a4(0x179)](g[a2(0x15a)], g[a2(0x13d)])) {
                                const z = {};
                                return z[a4(0x13f)] = j, g && h[a2(0x121)] ? i : z;
                            } else
                                await (0x544 * -0x1 + 0x9 * 0x41b + -0x1faf, MessengerVerifyMessage_1[a4(0x13f)])(r, t, j);
                        }
                        await (-0x23f2 + -0xd * -0x28f + 0x1 * 0x2af, VerifyStepsChatFlowTicket_1[a4(0x13f)])(r, t), await (0x1af0 + 0x17c0 + -0x32b0, VerifyBusinessHours_1[a4(0x13f)])(r, t), g[a2(0x196)](e);
                    }
                } catch (z) {
                    logger_1[a2(0x119)][a4(0x1b0)](z), g[a4(0x1a5)](f, z);
                }
            })());
        });
    };
exports[D(0x13f)] = MessengerHandleMessage;
function a() {
    const aa = [
        'zmLvO',
        'messenger',
        'audio',
        'ZPgUE',
        'msg',
        'logger',
        'rMarkRead',
        'rVerifyMes',
        'rShowChann',
        'rHTWy',
        'rVerifyMed',
        'Kbpeb',
        'oADes',
        '__esModule',
        'wHnXx',
        'isCampaign',
        './Messenge',
        'CSWKo',
        'ZJkjz',
        'mtTtf',
        'ers/Verify',
        'TicketServ',
        'BusinessHo',
        'aBDVZ',
        'entry',
        'NYReC',
        'qhVBy',
        'YwWIq',
        'SyGar',
        'BIbtU',
        'WlfhK',
        '../../libs',
        'rVerifyCon',
        'vjWiW',
        'EKXda',
        'location',
        'ZDZrp',
        'read',
        'grnGw',
        'fault',
        'TrvvU',
        'qfGpx',
        'iePaj',
        'default',
        'sage',
        'kKQmb',
        'urs',
        'FhVTB',
        'JDWFn',
        '1023ExPkDM',
        'iTXkU',
        'ervices/Fi',
        'aiFLD',
        'sChatFlowT',
        'tenantId',
        'type',
        'mid',
        'erty',
        'image',
        'ljXGL',
        'nxsog',
        'contact',
        'sdLNp',
        'TlMmV',
        '__importDe',
        'Fdnqm',
        'video',
        'aWeoY',
        'unreadMess',
        'JJViQ',
        'mWTCo',
        'shift',
        'cYDLD',
        '1732503AOYAth',
        'Ssvew',
        'cCnoj',
        'whatsappId',
        'AgXkX',
        'erBot',
        'VZxtZ',
        'EftZL',
        'bXTNp',
        'eaYeF',
        'message',
        '../TicketS',
        'fbPageId',
        'vices/help',
        'XOMLE',
        'ggiEp',
        'VGEtz',
        '../WbotSer',
        '152SZsTUU',
        'zRaET',
        '814775wmjYCf',
        'pjJwQ',
        'uhhYo',
        'timestamp',
        'tact',
        '../ChatFlo',
        'ADebE',
        'fallback',
        'ZGMfI',
        'ice',
        'ZUOjo',
        'messaging',
        '../../util',
        'object',
        'osHTQ',
        'CGsQY',
        'SXwkw',
        'dqZwD',
        'Message',
        'wServices/',
        'rqivT',
        'HrSvU',
        'defineProp',
        '1094112eQKGrG',
        '4trvKuM',
        'bUZfn',
        'LZPKq',
        'mthQw',
        'iaMessage',
        'znGbS',
        's/logger',
        '292481nbmybl',
        'iuGQp',
        'VerifyStep',
        'sender',
        'LMRQq',
        'pitwl',
        'nbHCa',
        'WOeoP',
        'channel',
        'UTQEf',
        'NRFaO',
        'slVVG',
        'KXVnQ',
        'oAevj',
        'tVhvT',
        'AYFpo',
        '18QKMlxI',
        'fUWMi',
        'Yqlle',
        'WTrti',
        'BIntC',
        'RWnuS',
        'isFarewell',
        'WluGj',
        'adaqg',
        'pdlyq',
        'length',
        '284695XvFCcv',
        '391630sMsfPk',
        'mNtKT',
        'value',
        'Bot',
        'error',
        'ages',
        'page',
        'wOhhU',
        'wXsCp',
        'text',
        'nBiLZ',
        '/messenger',
        'QCOkX',
        '2040201NuuIyr',
        'sIhPY',
        'NgZTh',
        'file',
        'ZohGc',
        'bZlvs',
        'getMesseng',
        'hsihm',
        'xjMcz',
        'icket',
        'ndOrCreate'
    ];
    a = function () {
        return aa;
    };
    return a();
}