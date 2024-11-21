'use strict';
const N = b, O = b;
(function (c, d) {
    const L = b, M = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(L(0x7a)) / (-0x5 * 0x418 + -0x2362 + 0x4f * 0xb5) * (-parseInt(M(0x96)) / (0x1c88 * -0x1 + -0x1f75 + -0x3bff * -0x1)) + parseInt(L(0x8e)) / (-0x1c24 + 0x7 * 0x385 + -0x96 * -0x6) + -parseInt(M(0x91)) / (-0x1f1 + -0x1d71 * -0x1 + -0x1b7c * 0x1) + -parseInt(L(0xbd)) / (-0x11f3 + -0x137c + -0x11a * -0x22) + parseInt(L(0x9e)) / (-0x1465 + 0xe58 + 0x613) * (parseInt(L(0xda)) / (0x21e2 + -0xe * 0x1f3 + -0x1 * 0x691)) + -parseInt(M(0x95)) / (0x1e7 * 0x5 + -0x43 * -0x22 + -0x1261) + parseInt(L(0xe8)) / (-0x91f * -0x1 + -0x395 * -0x8 + 0x1 * -0x25be);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x8e83d + -0x5cd7e * -0x3 + 0x14162));
function a() {
    const S = [
        'info',
        'apuuA',
        'Ireeu',
        'tenantId',
        'error',
        'mediaUrl',
        'mediaType',
        'NJdHp',
        'body',
        'endMessage',
        'update',
        'YmeMm',
        'time',
        'axios',
        'contactId',
        'quotedMsg',
        'bot',
        'FKICT',
        'ujvUl',
        'webhook',
        'DFslW',
        'QFByI',
        'data',
        'axacm',
        'ERR_CREATI',
        'sSCvT',
        'length',
        '5682245EjhKsz',
        'IpHZZ',
        'NG_MESSAGE',
        '../Contact',
        'TagField',
        'HAmaA',
        'TsxNV',
        'ShYfa',
        'string',
        'defineProp',
        'ticket',
        'idation',
        'type',
        '_SYSTEM',
        'Services/U',
        '__esModule',
        'QWSQq',
        's/queueVal',
        'PCMVc',
        'ers/Mustac',
        'Qjcrz',
        'whatsappId',
        'create',
        'chat:creat',
        'lfgYV',
        'rCMfm',
        'FyKYm',
        'substr',
        'logger',
        '49KhRvrM',
        ':::\x20BuildS',
        'MediaField',
        '../../util',
        'where',
        'essageServ',
        'get',
        'AdMDx',
        'ers/socket',
        'model',
        'ctTagsBotS',
        'YOquu',
        'Service',
        'ervice',
        '13618800oCNIXr',
        'WBFZI',
        'iUhin',
        '__importDe',
        'DelayField',
        'RsCHm',
        '../../help',
        'default',
        'WebhookFie',
        '289985iIxpGJ',
        'message',
        'erty',
        'pending',
        'PNLaw',
        'Osfai',
        'OtOaK',
        'indexOf',
        'pdateConta',
        'getTime',
        'fault',
        'NmeJV',
        'BuildSendM',
        's/logger',
        'gyvwk',
        'ls/Ticket',
        'OrMVA',
        'toString',
        'HGmvc',
        'findByPk',
        '665409AYUBAx',
        'qyxjV',
        'payload',
        '2783984NGaFJy',
        'chat',
        'include',
        'Emit',
        '6839944ldwUhc',
        '8kVPEvD',
        'lyKex',
        'HnyIe',
        '../../mode',
        'tag',
        'vvmwI',
        'contact',
        'ice',
        '370188HaavlX',
        'ls/Message',
        'split',
        'value'
    ];
    a = function () {
        return S;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xd41 + -0x1dc * -0x15 + -0x33d9);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[N(0x74) + N(0x84)] || function (c) {
    const P = N;
    return c && c[P(0xcc)] ? c : { 'default': c };
};
const k = {};
k[O(0xa1)] = !![], Object[N(0xc6) + N(0x7c)](exports, N(0xcc), k);
const axios_1 = __importDefault(require(N(0xaf))), Mustache_1 = __importDefault(require(O(0x77) + O(0xd0) + 'he')), logger_1 = require(N(0xdd) + N(0x87)), Ticket_1 = __importDefault(require(N(0x99) + O(0x89))), Message_1 = __importDefault(require(O(0x99) + N(0x9f))), socketEmit_1 = __importDefault(require(O(0x77) + O(0xe2) + O(0x94))), queueValidation_1 = __importDefault(require(N(0xdd) + N(0xce) + N(0xc8))), UpdateContactTagsBotService_1 = __importDefault(require(N(0xc0) + N(0xcb) + O(0x82) + N(0xe4) + N(0xe7))), delay = c => new Promise(d => setTimeout(d, c)), BuildSendMessageService = async ({
        msg: j,
        tenantId: l,
        ticket: m,
        userId: n
    }) => {
        const Q = N, R = N, o = {
                'YOquu': Q(0xba) + Q(0xbf) + R(0xca),
                'AdMDx': R(0x86) + Q(0xdf) + Q(0x9d),
                'PNLaw': R(0xdb) + R(0xab) + Q(0xe6),
                'ShYfa': Q(0x92),
                'lyKex': R(0xb2),
                'TsxNV': R(0x7d),
                'ujvUl': function (q, r) {
                    return q === r;
                },
                'HGmvc': R(0x79) + 'ld',
                'YmeMm': function (q, r) {
                    return q !== r;
                },
                'sSCvT': R(0xd5),
                'HnyIe': R(0xd7),
                'OrMVA': function (q, r) {
                    return q === r;
                },
                'PCMVc': Q(0xe9),
                'Osfai': R(0xc5),
                'axacm': Q(0x76),
                'Ireeu': R(0x88),
                'QFByI': function (q, r) {
                    return q === r;
                },
                'FKICT': R(0x75),
                'Qjcrz': function (q, r) {
                    return q !== r;
                },
                'DFslW': Q(0xc2),
                'apuuA': function (q, r) {
                    return q * r;
                },
                'IpHZZ': function (q, r) {
                    return q(r);
                },
                'rCMfm': Q(0xc1),
                'NmeJV': function (q, r) {
                    return q === r;
                },
                'QWSQq': Q(0xdc),
                'OtOaK': function (q, r) {
                    return q - r;
                },
                'NJdHp': Q(0xc7),
                'qyxjV': R(0x9c),
                'iUhin': R(0xb1),
                'vvmwI': Q(0xd4) + 'e'
            }, p = {
                'ticketId': m['id'],
                'body': '',
                'contactId': m[R(0xb0)],
                'fromMe': !![],
                'read': !![],
                'mediaType': o[R(0xc4)],
                'mediaUrl': undefined,
                'timestamp': new Date()[Q(0x83)](),
                'quotedMsgId': undefined,
                'userId': n,
                'scheduleDate': undefined,
                'sendType': o[Q(0x97)],
                'status': o[R(0xc3)],
                'tenantId': l
            };
        try {
            if (o[R(0xb4)](j[R(0xc9)], o[R(0x8c)]) && j[R(0xb8)][R(0xb5)]) {
                if (o[R(0xad)](o[R(0xbb)], o[Q(0x98)])) {
                    if (o[R(0xb4)](j[R(0xb8)][R(0xb5)], ''))
                        return;
                    try {
                        if (o[R(0x8a)](o[Q(0xcf)], o[Q(0xcf)])) {
                            j[R(0xb8)][Q(0xb5)] = await (-0xe59 + -0x231f + -0x1 * -0x3178, Mustache_1[R(0x78)])(j[Q(0xb8)][Q(0xb5)], m[Q(0x9c)], m);
                            if (o[Q(0x8a)](typeof j[Q(0xb8)][R(0xb5)], o[R(0x7f)])) {
                                if (o[Q(0xb4)](o[R(0xb9)], o[R(0xb9)])) {
                                    await axios_1[Q(0x78)][R(0xe0)](j[R(0xb8)][Q(0xb5)]);
                                    return;
                                } else {
                                    const r = {};
                                    return r[R(0x78)] = j, g && h[R(0xcc)] ? i : r;
                                }
                            }
                        } else
                            throw new d(o[R(0xe5)]);
                    } catch (s) {
                        if (o[Q(0xad)](o[Q(0xa4)], o[Q(0xa4)]))
                            throw new d(o[R(0xe5)]);
                        else
                            logger_1[Q(0xd9)][Q(0xa2)](o[Q(0x7e)], s);
                    }
                } else
                    e[R(0xd9)][R(0xa6)](o[R(0xe1)], f);
            }
            if (o[Q(0xb7)](j[Q(0xc9)], o[R(0xb3)]) && j[Q(0xb8)][Q(0xae)]) {
                if (o[Q(0xd1)](o[R(0xb6)], o[R(0xb6)]))
                    e[R(0xd9)][R(0xa2)](o[Q(0x7e)], f);
                else {
                    const w = o[Q(0xa3)](j[Q(0xb8)][Q(0xae)], 0x1825 + -0x251 + 0x94 * -0x1f);
                    await o[Q(0xbe)](delay, w);
                    return;
                }
            }
            if (o[R(0xb7)](j[Q(0xc9)], o[R(0xd6)]) && j[R(0xb8)][Q(0x9a)]) {
                if (o[Q(0x8a)](j[Q(0xb8)][Q(0x9a)], null))
                    return;
                await (0x59d + 0x140 * 0x9 + 0x59f * -0x3, UpdateContactTagsBotService_1[R(0x78)])({
                    'tagId': j[Q(0xb8)][R(0x9a)],
                    'contactId': m[Q(0xb0)][Q(0x8b)](),
                    'tenantId': l
                });
                return;
            }
            if (o[Q(0x85)](j[Q(0xc9)], o[Q(0xcd)]) && j[Q(0xb8)][Q(0xa7)]) {
                const x = j[R(0xb8)][R(0xa7)][Q(0xa0)]('/'), y = {
                        ...p,
                        'body': '',
                        'mediaUrl': x[o[R(0x80)](x[R(0xbc)], 0x8b * -0x12 + 0xbb0 + -0x1e9)],
                        'mediaType': j[R(0xb8)][Q(0xc9)] ? j[Q(0xb8)]?.[R(0xc9)][R(0xd8)](0x1548 + -0xe1a + -0x72e, j[Q(0xb8)][Q(0xc9)][Q(0x81)]('/')) : o[R(0xc4)]
                    }, z = await Message_1[R(0x78)][Q(0xd3)](y), A = {};
                A[Q(0xa5)] = l;
                const B = {};
                B[R(0xe3)] = Ticket_1[Q(0x78)], B['as'] = o[Q(0xa9)], B[Q(0xde)] = A, B[Q(0x93)] = [o[R(0x8f)]];
                const C = await Message_1[Q(0x78)][Q(0x8d)](z['id'], {
                    'include': [
                        B,
                        {
                            'model': Message_1[R(0x78)],
                            'as': o[R(0xea)],
                            'include': [o[R(0x8f)]]
                        }
                    ]
                });
                if (!C)
                    throw new Error(o[R(0xe5)]);
                await m[R(0xac)]({
                    'lastMessage': C[Q(0xaa)],
                    'lastMessageAt': new Date()[R(0x83)]()
                }), await (0x8dc + -0x2201 + 0x1925, queueValidation_1[Q(0x78)])(m[Q(0xd2)], m[R(0xa5)], [C]);
                const D = {};
                D[R(0xa5)] = l, D[R(0xc9)] = o[R(0x9b)], D[Q(0x90)] = C, (0x327 + -0x1f * -0x5a + -0xe0d * 0x1, socketEmit_1[Q(0x78)])(D);
            } else {
                j[R(0xb8)][R(0x7b)] = await (-0x171 * 0x9 + -0x1 * -0xf0b + -0x212, Mustache_1[R(0x78)])(j[R(0xb8)][R(0x7b)], m[Q(0x9c)], m);
                const E = { ...p };
                E[R(0xaa)] = j[R(0xb8)][Q(0x7b)], E[Q(0xa8)] = o[Q(0xc4)];
                const F = await Message_1[R(0x78)][Q(0xd3)](E), G = {};
                G[R(0xa5)] = l;
                const H = {};
                H[R(0xe3)] = Ticket_1[Q(0x78)], H['as'] = o[R(0xa9)], H[R(0xde)] = G, H[R(0x93)] = [o[Q(0x8f)]];
                const I = await Message_1[R(0x78)][R(0x8d)](F['id'], {
                    'include': [
                        H,
                        {
                            'model': Message_1[Q(0x78)],
                            'as': o[R(0xea)],
                            'include': [o[R(0x8f)]]
                        }
                    ]
                });
                if (!I)
                    throw new Error(o[Q(0xe5)]);
                await m[Q(0xac)]({
                    'lastMessage': I[Q(0xaa)],
                    'lastMessageAt': new Date()[Q(0x83)](),
                    'answered': !![]
                }), await (0x1a56 + 0x5bd + -0x7 * 0x495, queueValidation_1[R(0x78)])(m[Q(0xd2)], m[R(0xa5)], [I]);
                const J = {};
                J[R(0xa5)] = l, J[R(0xc9)] = o[R(0x9b)], J[Q(0x90)] = I, (-0x1 * 0x13cd + -0x31 * -0xf + 0x877 * 0x2, socketEmit_1[Q(0x78)])(J);
            }
        } catch (K) {
            logger_1[R(0xd9)][R(0xa6)](o[R(0xe1)], K);
        }
    };
exports[O(0x78)] = BuildSendMessageService;