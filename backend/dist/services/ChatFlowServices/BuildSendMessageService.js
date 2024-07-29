'use strict';
const S = b, T = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x1c15 + 0xefc + 0xdc0);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const Q = b, R = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(Q(0x128)) / (0x916 * -0x1 + -0x8e * 0x25 + 0x43b * 0x7) + parseInt(R(0x11e)) / (-0x2 * 0x8de + 0xe3 * -0x1 + 0x12a1) * (parseInt(Q(0xf1)) / (0x47 * -0x20 + 0x21da + -0x18f7)) + parseInt(R(0xa8)) / (-0x1699 + -0xc85 * 0x3 + 0x3c2c) * (-parseInt(Q(0xad)) / (0x2c3 * -0x5 + -0x2040 + 0x170a * 0x2)) + parseInt(Q(0x10b)) / (-0x2 * -0xee4 + 0x2 * 0xb48 + -0x25 * 0x16a) + parseInt(R(0xd5)) / (-0x4 * 0x4c6 + 0x2 * -0xdc + 0x14d7) * (parseInt(Q(0x117)) / (0x138f + 0x1916 + -0x1a7 * 0x1b)) + parseInt(R(0xd9)) / (-0x147d + -0x1d74 + 0x1 * 0x31fa) * (-parseInt(Q(0x125)) / (0x777 + -0x171 + 0x1 * -0x5fc)) + parseInt(Q(0xcc)) / (-0x2 * -0xdfd + -0x254 + -0x39 * 0x73) * (-parseInt(Q(0xff)) / (0x7 * 0x449 + 0x154b * -0x1 + -0x8a8));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x155c9 + -0x17c33 + 0x66d3e * 0x1));
var __importDefault = this && this[S(0xd7) + T(0xbf)] || function (c) {
    const U = T;
    return c && c[U(0xb6)] ? c : { 'default': c };
};
const k = {};
k[T(0xbb)] = !![], Object[S(0xb7) + T(0x10c)](exports, S(0xb6), k);
const pupa_1 = require(S(0xfa) + T(0xc7)), logger_1 = require(S(0xfa) + T(0xec)), Ticket_1 = __importDefault(require(T(0xe3) + T(0x11f))), Message_1 = __importDefault(require(S(0xe3) + S(0xb4))), socketEmit_1 = __importDefault(require(S(0xdc) + T(0xbd) + T(0x123))), queueValidation_1 = __importDefault(require(T(0xfa) + S(0xdf) + T(0xf4))), UpdateContactTagsBotService_1 = __importDefault(require(T(0xe6) + T(0x120) + T(0x100) + S(0x111) + S(0xdb))), axios_1 = __importDefault(require(S(0xf3))), delay = c => new Promise(d => setTimeout(d, c)), BuildSendMessageService = async ({
        msg: m,
        tenantId: n,
        ticket: o,
        userId: p
    }) => {
        const V = T, W = T, q = {
                'kGytZ': V(0xef) + V(0xca) + W(0xfe),
                'ForRx': W(0xc0) + W(0x106) + W(0xc9),
                'suUAB': V(0xd2) + V(0x11c) + V(0xe5),
                'yXZxk': V(0xb8),
                'jPuBy': V(0xaa),
                'diVTr': W(0x101),
                'hAwtH': function (s, t) {
                    return s === t;
                },
                'Ssppr': V(0x127) + 'ld',
                'IvVWS': function (s, t) {
                    return s === t;
                },
                'rnEna': W(0xd4),
                'SjmdN': W(0xf2),
                'FHBoh': function (s, t) {
                    return s === t;
                },
                'WGVoZ': V(0xb2),
                'bwUCh': W(0xe0),
                'CAEkp': function (s, t) {
                    return s === t;
                },
                'zarZI': V(0xf7),
                'EAHlf': function (s, t) {
                    return s === t;
                },
                'jEpUO': V(0x10e),
                'HIHvz': function (s, t) {
                    return s === t;
                },
                'dRXDW': V(0x114),
                'PYWXd': V(0xd8),
                'TYDmi': function (s, t) {
                    return s !== t;
                },
                'obBCL': V(0xc8),
                'HVxOB': V(0x119),
                'PyWbN': function (s, t) {
                    return s * t;
                },
                'vevfJ': function (s, t) {
                    return s(t);
                },
                'adCzs': function (s, t) {
                    return s === t;
                },
                'WmwTS': W(0xba),
                'lqzVg': W(0xda),
                'hKPix': function (s, t) {
                    return s - t;
                },
                'niuLI': W(0x12a),
                'IeMGL': W(0xd3),
                'LUpDD': W(0xb3),
                'inpNB': W(0x116) + 'e'
            }, r = {
                'ticketId': o['id'],
                'body': '',
                'contactId': o[W(0x104)],
                'fromMe': !![],
                'read': !![],
                'mediaType': q[W(0xe9)],
                'mediaUrl': undefined,
                'timestamp': new Date()[W(0xb9)](),
                'quotedMsgId': undefined,
                'userId': p,
                'scheduleDate': undefined,
                'sendType': q[W(0x102)],
                'status': q[W(0xc6)],
                'tenantId': n
            };
        try {
            if (q[W(0x10a)](m[W(0x121)], q[W(0x12b)]) && m[W(0xed)][W(0x12e)]) {
                if (q[W(0x109)](q[W(0xb0)], q[V(0x105)]))
                    e[W(0xbc)][V(0xc3)](q[V(0xf9)], f);
                else {
                    if (q[W(0xac)](m[W(0xed)][V(0x12e)], ''))
                        return;
                    try {
                        if (q[W(0xac)](q[W(0x10f)], q[W(0xe2)])) {
                            const u = {};
                            return u[V(0x113)] = j, g && h[W(0xb6)] ? i : u;
                        } else {
                            const u = {};
                            u[W(0xab)] = o[V(0xab)] || '', u[V(0x103)] = o[V(0xd3)]?.[W(0x103)] || '', u[V(0xb5)] = o[V(0xd3)]?.[W(0xb5)] || '', u[W(0x126) + 'r'] = o[W(0xd3)]?.[V(0xde)] || '', u[V(0xc2)] = o[W(0xc2)]?.[W(0x103)] || '', u[V(0x12d)] = o[V(0xc2)]?.[V(0xb5)] || '', m[V(0xed)][W(0x12e)] = (-0x6 * -0x5c9 + -0xdb6 + -0x1500, pupa_1[V(0xce)])(m[V(0xed)][V(0x12e)], u);
                            if (q[W(0xea)](typeof m[W(0xed)][V(0x12e)], q[V(0xcd)])) {
                                if (q[W(0x118)](q[W(0xd6)], q[V(0xd6)])) {
                                    await axios_1[V(0x113)][W(0x12f)](m[W(0xed)][V(0x12e)]);
                                    return;
                                } else
                                    e[V(0xbc)][V(0xd1)](q[W(0xf6)], f);
                            }
                        }
                    } catch (w) {
                        if (q[W(0xcf)](q[W(0x11d)], q[W(0x11d)]))
                            logger_1[W(0xbc)][W(0xc3)](q[V(0xf9)], w);
                        else
                            throw new d(q[W(0x11a)]);
                    }
                }
            }
            if (q[V(0xcf)](m[W(0x121)], q[W(0xa7)]) && m[V(0xed)][V(0xf0)]) {
                if (q[V(0x130)](q[V(0xe1)], q[V(0xbe)])) {
                    const y = q[V(0xae)](m[W(0xed)][W(0xf0)], -0x917 + -0xbf5 + 0x18f4);
                    await q[V(0xe8)](delay, y);
                    return;
                } else
                    throw new d(q[V(0x11a)]);
            }
            if (q[W(0xaf)](m[W(0x121)], q[W(0xc5)]) && m[V(0xed)][V(0xe4)]) {
                if (q[W(0x109)](m[V(0xed)][V(0xe4)], null))
                    return;
                await (-0x1991 + -0x2a * 0x42 + -0x2465 * -0x1, UpdateContactTagsBotService_1[V(0x113)])({
                    'tagId': m[V(0xed)][V(0xe4)],
                    'contactId': o[W(0x104)][W(0xc1)](),
                    'tenantId': n
                });
                return;
            }
            if (q[V(0xaf)](m[W(0x121)], q[W(0x108)]) && m[V(0xed)][V(0xfb)]) {
                const A = m[V(0xed)][V(0xfb)][W(0x110)]('/'), B = {
                        ...r,
                        'body': '',
                        'mediaUrl': A[q[V(0x11b)](A[W(0x10d)], -0x1195 + -0xa8c * 0x1 + 0xd * 0x22a)],
                        'mediaType': m[V(0xed)][W(0x121)] ? m[V(0xed)]?.[W(0x121)][W(0xc4)](0x21de + 0xf77 + -0x3155, m[V(0xed)][V(0x121)][V(0x107)]('/')) : q[W(0xe9)]
                    }, C = await Message_1[V(0x113)][W(0x112)](B), D = {};
                D[V(0xa9)] = n;
                const E = {};
                E[W(0x115)] = Ticket_1[V(0x113)], E['as'] = q[V(0xeb)], E[V(0x12c)] = D, E[W(0xee)] = [q[W(0x122)]];
                const F = await Message_1[W(0x113)][V(0x124)](C['id'], {
                    'include': [
                        E,
                        {
                            'model': Message_1[V(0x113)],
                            'as': q[W(0xb1)],
                            'include': [q[W(0x122)]]
                        }
                    ]
                });
                if (!F)
                    throw new Error(q[W(0x11a)]);
                await o[V(0x129)]({
                    'lastMessage': F[V(0xfd)],
                    'lastMessageAt': new Date()[V(0xb9)]()
                }), await (0x8 * 0x15e + -0x1d * -0xd7 + -0x5 * 0x70f, queueValidation_1[W(0x113)])(o[W(0xf5)], o[V(0xa9)], [F]);
                const G = {};
                G[W(0xa9)] = n, G[V(0x121)] = q[V(0xfc)], G[V(0xd0)] = F, (0x1832 + -0x5 * -0x61a + -0xdad * 0x4, socketEmit_1[V(0x113)])(G);
            } else {
                const H = await o[V(0xcb) + V(0xe7)](), I = {};
                I[V(0xab)] = H, I[W(0x103)] = o[V(0xd3)][V(0x103)], m[W(0xed)][W(0xf8)] = (-0x2577 + -0x21 * 0x9f + 0x6 * 0x9a9, pupa_1[V(0xce)])(m[V(0xed)][W(0xf8)] || '', I);
                const J = { ...r };
                J[V(0xfd)] = m[W(0xed)][V(0xf8)], J[V(0xdd)] = q[W(0xe9)];
                const K = await Message_1[W(0x113)][W(0x112)](J), L = {};
                L[W(0xa9)] = n;
                const M = {};
                M[V(0x115)] = Ticket_1[W(0x113)], M['as'] = q[V(0xeb)], M[W(0x12c)] = L, M[V(0xee)] = [q[W(0x122)]];
                const N = await Message_1[V(0x113)][V(0x124)](K['id'], {
                    'include': [
                        M,
                        {
                            'model': Message_1[W(0x113)],
                            'as': q[V(0xb1)],
                            'include': [q[W(0x122)]]
                        }
                    ]
                });
                if (!N)
                    throw new Error(q[V(0x11a)]);
                await o[V(0x129)]({
                    'lastMessage': N[W(0xfd)],
                    'lastMessageAt': new Date()[W(0xb9)](),
                    'answered': !![]
                }), await (-0xf7a + -0x78d + 0x1707, queueValidation_1[V(0x113)])(o[W(0xf5)], o[V(0xa9)], [N]);
                const O = {};
                O[W(0xa9)] = n, O[W(0x121)] = q[V(0xfc)], O[V(0xd0)] = N, (-0x1f79 + 0x13d9 + 0xba0, socketEmit_1[W(0x113)])(O);
            }
        } catch (P) {
            logger_1[W(0xbc)][V(0xd1)](q[W(0xf6)], P);
        }
    };
exports[S(0x113)] = BuildSendMessageService;
function a() {
    const X = [
        '72472kDbDEr',
        'EAHlf',
        'eLBch',
        'suUAB',
        'hKPix',
        'NG_MESSAGE',
        'dRXDW',
        '10qXcvqH',
        'ls/Ticket',
        'Services/U',
        'type',
        'IeMGL',
        'Emit',
        'findByPk',
        '29080tlBWbo',
        'phoneNumbe',
        'WebhookFie',
        '164224TZyEFI',
        'update',
        'ticket',
        'Ssppr',
        'where',
        'userEmail',
        'webhook',
        'get',
        'TYDmi',
        'PYWXd',
        '1295908yxGUnP',
        'tenantId',
        'bot',
        'protocol',
        'FHBoh',
        '5OLZOrb',
        'PyWbN',
        'adCzs',
        'rnEna',
        'LUpDD',
        'VjDEW',
        'quotedMsg',
        'ls/Message',
        'email',
        '__esModule',
        'defineProp',
        'chat',
        'getTime',
        'TagField',
        'value',
        'logger',
        'ers/socket',
        'HVxOB',
        'fault',
        'BuildSendM',
        'toString',
        'user',
        'info',
        'substr',
        'WmwTS',
        'diVTr',
        's/pupa',
        'IBYdT',
        'ice',
        'endMessage',
        'ensureProt',
        '11tjCwtD',
        'zarZI',
        'pupa',
        'HIHvz',
        'payload',
        'error',
        'ERR_CREATI',
        'contact',
        'lxOOU',
        '259doScFB',
        'jEpUO',
        '__importDe',
        'DelayField',
        '504xgtvWO',
        'MediaField',
        'ervice',
        '../../help',
        'mediaType',
        'number',
        's/queueVal',
        'MPUdt',
        'obBCL',
        'bwUCh',
        '../../mode',
        'tag',
        '_SYSTEM',
        '../Contact',
        'ocol',
        'vevfJ',
        'yXZxk',
        'CAEkp',
        'niuLI',
        's/logger',
        'data',
        'include',
        ':::\x20BuildS',
        'time',
        '125724TIlkdo',
        'czQzb',
        'axios',
        'idation',
        'whatsappId',
        'ForRx',
        'string',
        'message',
        'kGytZ',
        '../../util',
        'mediaUrl',
        'inpNB',
        'body',
        'Service',
        '2151660ZZyTKQ',
        'pdateConta',
        'pending',
        'jPuBy',
        'name',
        'contactId',
        'SjmdN',
        'essageServ',
        'indexOf',
        'lqzVg',
        'IvVWS',
        'hAwtH',
        '1161222DpXXTK',
        'erty',
        'length',
        'jRocp',
        'WGVoZ',
        'split',
        'ctTagsBotS',
        'create',
        'default',
        'vDMlJ',
        'model',
        'chat:creat'
    ];
    a = function () {
        return X;
    };
    return a();
}