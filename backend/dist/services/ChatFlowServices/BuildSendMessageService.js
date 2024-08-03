'use strict';
const S = b, T = b;
(function (c, d) {
    const Q = b, R = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(Q(0xb7)) / (-0x2311 + -0x168b + 0x399d) + -parseInt(R(0x11e)) / (0x4cd * 0x1 + -0xcaf * 0x1 + 0x7e4 * 0x1) * (-parseInt(Q(0x107)) / (0x1 * 0x18e3 + 0x12aa * 0x1 + -0x2b8a)) + parseInt(Q(0x102)) / (0x11d6 + -0xb17 + -0x6bb) * (parseInt(R(0xd6)) / (0x13f3 + 0x1 * 0x1434 + -0x2822)) + -parseInt(R(0xd1)) / (-0x2573 * 0x1 + -0x7d3 * -0x2 + 0x15d3) + -parseInt(Q(0xd8)) / (-0x1695 + 0x1d11 * 0x1 + -0x675) + parseInt(Q(0x11d)) / (0x946 + -0x23ec + -0x2 * -0xd57) + parseInt(Q(0xab)) / (-0xc * -0x79 + -0x2 * -0x167 + 0x1 * -0x871);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2 * 0x39667 + 0x67 * 0x766 + -0x13 * -0x10515));
function a() {
    const X = [
        'SBddu',
        '../../help',
        'ticket',
        'hNinn',
        'rEuyS',
        'bot',
        'ZRWbl',
        '../../util',
        'ensureProt',
        'TagField',
        's/logger',
        'ocol',
        'fABLZ',
        'time',
        'payload',
        '4627440QijHwK',
        'UAQKe',
        'Efsly',
        'endMessage',
        'default',
        '1842485CmCCvG',
        'Wizwh',
        '10701453KmxjOj',
        'erty',
        'create',
        'getTime',
        'kEYXA',
        'OeQul',
        's/pupa',
        'phoneNumbe',
        'update',
        'value',
        'BsyNH',
        'tAEbG',
        'vBSox',
        'zBLpb',
        'bJwpW',
        '__importDe',
        'mediaUrl',
        'toString',
        'rWMdH',
        'epKEp',
        'pdateConta',
        'LvTGo',
        'MediaField',
        'Emit',
        'OtZeT',
        'type',
        'where',
        'defineProp',
        'mediaType',
        'message',
        'user',
        'bcYQp',
        'TIMTF',
        'idation',
        'ckkzZ',
        'ers/socket',
        'ervice',
        'virZg',
        'webhook',
        'number',
        'QmNno',
        'axios',
        '16oBvBwk',
        'include',
        'findByPk',
        'AbTiZ',
        'HdWJY',
        '246XNBdjv',
        '_SYSTEM',
        'quotedMsg',
        'contact',
        'ls/Message',
        'Service',
        'substr',
        'CWCdS',
        'RjbRf',
        'EGxMn',
        'tag',
        'ice',
        'info',
        'jtBOt',
        'body',
        'ls/Ticket',
        'split',
        'essageServ',
        'tenantId',
        'zxLdT',
        'Services/U',
        's/queueVal',
        '2185648MbDvhI',
        '40966rsFGcE',
        'AhxcR',
        'chat:creat',
        'email',
        'contactId',
        'chat',
        'saSOG',
        'ERR_CREATI',
        'model',
        'pupa',
        'indexOf',
        'WebhookFie',
        'aRTfd',
        'whatsappId',
        '../../mode',
        'length',
        'rHeUM',
        '__esModule',
        'NKIaB',
        'NG_MESSAGE',
        'name',
        'error',
        'protocol',
        'vlAAE',
        '12190959sFGwaa',
        'logger',
        'MiCcS',
        '../Contact',
        'userEmail',
        'fault',
        ':::\x20BuildS',
        'string',
        'BuildSendM',
        'LIcIK',
        'ctTagsBotS',
        'xwXAe',
        '1486569svhnwd',
        'RJmPa',
        'IAgzP',
        'tsAAs',
        'data',
        'pending',
        'DelayField',
        'ALtTK',
        'adtXs',
        'FGmcH',
        'get'
    ];
    a = function () {
        return X;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xf81 + 0x1 * -0x1b87 + -0xfe * -0x2c);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[S(0xe7) + T(0xb0)] || function (c) {
    const U = S;
    return c && c[U(0xa4)] ? c : { 'default': c };
};
const k = {};
k[T(0xe1)] = !![], Object[T(0xf3) + T(0xd9)](exports, S(0xa4), k);
const pupa_1 = require(S(0xc9) + S(0xde)), logger_1 = require(T(0xc9) + T(0xcc)), Ticket_1 = __importDefault(require(T(0xa1) + S(0x116))), Message_1 = __importDefault(require(S(0xa1) + T(0x10b))), socketEmit_1 = __importDefault(require(S(0xc3) + S(0xfb) + T(0xef))), queueValidation_1 = __importDefault(require(S(0xc9) + T(0x11c) + S(0xf9))), UpdateContactTagsBotService_1 = __importDefault(require(S(0xae) + S(0x11b) + T(0xec) + T(0xb5) + T(0xfc))), axios_1 = __importDefault(require(T(0x101))), delay = c => new Promise(d => setTimeout(d, c)), BuildSendMessageService = async ({
        msg: m,
        tenantId: n,
        ticket: o,
        userId: p
    }) => {
        const V = S, W = S, q = {
                'hNinn': V(0x125) + W(0xa6) + V(0x108),
                'AbTiZ': W(0xb3) + W(0x118) + V(0x112),
                'TIMTF': W(0xb1) + V(0xd4) + V(0x10c),
                'rHeUM': W(0x123),
                'FGmcH': W(0xc7),
                'aRTfd': W(0xbc),
                'SBddu': function (s, t) {
                    return s === t;
                },
                'RJmPa': W(0x129) + 'ld',
                'RjbRf': function (s, t) {
                    return s !== t;
                },
                'zBLpb': V(0xad),
                'jtBOt': function (s, t) {
                    return s !== t;
                },
                'adtXs': W(0x11f),
                'LIcIK': W(0xeb),
                'EGxMn': function (s, t) {
                    return s === t;
                },
                'ckkzZ': W(0xb2),
                'rEuyS': function (s, t) {
                    return s !== t;
                },
                'virZg': W(0xb9),
                'ALtTK': W(0xce),
                'bcYQp': function (s, t) {
                    return s === t;
                },
                'tAEbG': W(0x11a),
                'QmNno': V(0xb6),
                'OtZeT': function (s, t) {
                    return s === t;
                },
                'UAQKe': W(0xbd),
                'NKIaB': W(0xe6),
                'HdWJY': W(0xdc),
                'CWCdS': function (s, t) {
                    return s * t;
                },
                'tsAAs': function (s, t) {
                    return s(t);
                },
                'ZRWbl': function (s, t) {
                    return s === t;
                },
                'vBSox': W(0xcb),
                'Wizwh': function (s, t) {
                    return s === t;
                },
                'LvTGo': function (s, t) {
                    return s === t;
                },
                'vlAAE': W(0xee),
                'saSOG': function (s, t) {
                    return s - t;
                },
                'BsyNH': V(0xc4),
                'Efsly': V(0x10a),
                'rWMdH': V(0x109),
                'OeQul': V(0x120) + 'e'
            }, r = {
                'ticketId': o['id'],
                'body': '',
                'contactId': o[V(0x122)],
                'fromMe': !![],
                'read': !![],
                'mediaType': q[W(0xa3)],
                'mediaUrl': undefined,
                'timestamp': new Date()[V(0xdb)](),
                'quotedMsgId': undefined,
                'userId': p,
                'scheduleDate': undefined,
                'sendType': q[W(0xc0)],
                'status': q[V(0x12a)],
                'tenantId': n
            };
        try {
            if (q[V(0xc2)](m[V(0xf1)], q[V(0xb8)]) && m[W(0xbb)][W(0xfe)]) {
                if (q[W(0x10f)](q[W(0xe5)], q[V(0xe5)]))
                    throw new d(q[W(0xc5)]);
                else {
                    if (q[W(0xc2)](m[V(0xbb)][V(0xfe)], ''))
                        return;
                    try {
                        if (q[W(0x114)](q[V(0xbf)], q[W(0xb4)])) {
                            const t = {};
                            t[W(0xa9)] = o[W(0xa9)] || '', t[W(0xa7)] = o[V(0x10a)]?.[W(0xa7)] || '', t[W(0x121)] = o[V(0x10a)]?.[V(0x121)] || '', t[W(0xdf) + 'r'] = o[V(0x10a)]?.[V(0xff)] || '', t[W(0xf6)] = o[V(0xf6)]?.[V(0xa7)] || '', t[V(0xaf)] = o[W(0xf6)]?.[V(0x121)] || '', m[V(0xbb)][V(0xfe)] = (0x5c8 * -0x5 + -0xa70 + 0x2758, pupa_1[W(0x127)])(m[V(0xbb)][V(0xfe)], t);
                            if (q[V(0x110)](typeof m[W(0xbb)][W(0xfe)], q[V(0xfa)])) {
                                if (q[W(0xc6)](q[V(0xfd)], q[V(0xbe)])) {
                                    await axios_1[W(0xd5)][V(0xc1)](m[V(0xbb)][W(0xfe)]);
                                    return;
                                } else
                                    e[W(0xac)][W(0xa8)](q[V(0x105)], f);
                            }
                        } else {
                            const w = {};
                            return w[V(0xd5)] = j, g && h[W(0xa4)] ? i : w;
                        }
                    } catch (w) {
                        if (q[V(0xf7)](q[V(0xe3)], q[W(0x100)]))
                            throw new d(q[W(0xc5)]);
                        else
                            logger_1[V(0xac)][V(0x113)](q[V(0xf8)], w);
                    }
                }
            }
            if (q[W(0xf0)](m[V(0xf1)], q[W(0xd2)]) && m[V(0xbb)][V(0xcf)]) {
                if (q[V(0xc2)](q[V(0xa5)], q[V(0x106)]))
                    e[V(0xac)][V(0x113)](q[V(0xf8)], f);
                else {
                    const z = q[V(0x10e)](m[V(0xbb)][V(0xcf)], -0x405 * 0x1 + 0x2 * -0x25f + 0xcab);
                    await q[V(0xba)](delay, z);
                    return;
                }
            }
            if (q[W(0xc8)](m[W(0xf1)], q[V(0xe4)]) && m[W(0xbb)][W(0x111)]) {
                if (q[W(0xd7)](m[W(0xbb)][V(0x111)], null))
                    return;
                await (-0x18cb * 0x1 + 0x22ce + 0xe9 * -0xb, UpdateContactTagsBotService_1[W(0xd5)])({
                    'tagId': m[W(0xbb)][W(0x111)],
                    'contactId': o[V(0x122)][V(0xe9)](),
                    'tenantId': n
                });
                return;
            }
            if (q[W(0xed)](m[V(0xf1)], q[V(0xaa)]) && m[V(0xbb)][W(0xe8)]) {
                const A = m[W(0xbb)][V(0xe8)][V(0x117)]('/'), B = {
                        ...r,
                        'body': '',
                        'mediaUrl': A[q[V(0x124)](A[V(0xa2)], -0x25eb + -0x1b52 + 0x413e)],
                        'mediaType': m[W(0xbb)][V(0xf1)] ? m[V(0xbb)]?.[W(0xf1)][W(0x10d)](-0x4ee * 0x7 + 0x3d7 + 0x1eab, m[V(0xbb)][W(0xf1)][V(0x128)]('/')) : q[V(0xa3)]
                    }, C = await Message_1[W(0xd5)][V(0xda)](B), D = {};
                D[V(0x119)] = n;
                const E = {};
                E[V(0x126)] = Ticket_1[W(0xd5)], E['as'] = q[W(0xe2)], E[W(0xf2)] = D, E[W(0x103)] = [q[W(0xd3)]];
                const F = await Message_1[V(0xd5)][V(0x104)](C['id'], {
                    'include': [
                        E,
                        {
                            'model': Message_1[V(0xd5)],
                            'as': q[W(0xea)],
                            'include': [q[V(0xd3)]]
                        }
                    ]
                });
                if (!F)
                    throw new Error(q[W(0xc5)]);
                await o[V(0xe0)]({
                    'lastMessage': F[W(0x115)],
                    'lastMessageAt': new Date()[W(0xdb)]()
                }), await (0x92 * -0x17 + -0x1a7b + 0x2799, queueValidation_1[W(0xd5)])(o[W(0xa0)], o[W(0x119)], [F]);
                const G = {};
                G[W(0x119)] = n, G[W(0xf1)] = q[W(0xdd)], G[W(0xd0)] = F, (-0x1 * -0xb5 + -0x1573 + -0x162 * -0xf, socketEmit_1[W(0xd5)])(G);
            } else {
                const H = await o[W(0xca) + W(0xcd)](), I = {};
                I[V(0xa9)] = H, I[W(0xa7)] = o[W(0x10a)][W(0xa7)], m[V(0xbb)][W(0xf5)] = (0x1 * -0x37 + -0x167a + 0x16b1 * 0x1, pupa_1[V(0x127)])(m[V(0xbb)][V(0xf5)] || '', I);
                const J = { ...r };
                J[W(0x115)] = m[W(0xbb)][V(0xf5)], J[W(0xf4)] = q[V(0xa3)];
                const K = await Message_1[V(0xd5)][W(0xda)](J), L = {};
                L[V(0x119)] = n;
                const M = {};
                M[W(0x126)] = Ticket_1[W(0xd5)], M['as'] = q[W(0xe2)], M[W(0xf2)] = L, M[W(0x103)] = [q[W(0xd3)]];
                const N = await Message_1[V(0xd5)][V(0x104)](K['id'], {
                    'include': [
                        M,
                        {
                            'model': Message_1[V(0xd5)],
                            'as': q[V(0xea)],
                            'include': [q[V(0xd3)]]
                        }
                    ]
                });
                if (!N)
                    throw new Error(q[W(0xc5)]);
                await o[V(0xe0)]({
                    'lastMessage': N[W(0x115)],
                    'lastMessageAt': new Date()[W(0xdb)](),
                    'answered': !![]
                }), await (0xd82 + -0x10df + 0x35d, queueValidation_1[V(0xd5)])(o[V(0xa0)], o[V(0x119)], [N]);
                const O = {};
                O[V(0x119)] = n, O[W(0xf1)] = q[V(0xdd)], O[W(0xd0)] = N, (0xfb1 + 0x3e * 0x4f + -0x22d3, socketEmit_1[W(0xd5)])(O);
            }
        } catch (P) {
            logger_1[V(0xac)][W(0xa8)](q[W(0x105)], P);
        }
    };
exports[S(0xd5)] = BuildSendMessageService;