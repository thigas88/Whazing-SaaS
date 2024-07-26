'use strict';
const L = b, M = b;
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(J(0xf7)) / (-0xe3a * -0x2 + -0x10c * 0x19 + 0xb * -0x35) + -parseInt(J(0x111)) / (0xab5 + -0x116 * 0x6 + -0x42f) + -parseInt(J(0x128)) / (0x3 * 0x886 + 0x4ed * -0x6 + 0x3ff) + -parseInt(J(0x11b)) / (-0xd39 + 0x2598 + 0x5 * -0x4df) + -parseInt(J(0x143)) / (0x274 * 0x2 + 0xa7b * 0x2 + -0x19d9) * (-parseInt(J(0x129)) / (-0x973 * -0x1 + 0x1 * -0x85d + -0x8 * 0x22)) + parseInt(K(0x122)) / (-0x399 + 0x957 + 0x4d * -0x13) + parseInt(K(0x139)) / (0x18f1 + 0xffe + 0x28e7 * -0x1) * (-parseInt(J(0xfd)) / (0x1db6 + 0xd53 + -0x2b * 0x100));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x61933 + -0x1 * 0x9a921 + 0xf19d3));
function a() {
    const Q = [
        'MediaField',
        's/queueVal',
        'data',
        'value',
        'substr',
        'create',
        'fejfH',
        'bot',
        'include',
        'sAfnr',
        'MlJbc',
        's/pupa',
        'OvZrb',
        'chat',
        'indexOf',
        '1339568OJQuYH',
        '__importDe',
        'BuildSendM',
        'length',
        'ice',
        'payload',
        'VmtJK',
        's/logger',
        'name',
        'logger',
        '15twNfVa',
        'ocol',
        'message',
        'type',
        'NG_MESSAGE',
        '359055VbvEun',
        'ticket',
        'default',
        'chat:creat',
        'fault',
        'update',
        '18avBmlx',
        'pending',
        'whatsappId',
        'mediaUrl',
        'wqkAa',
        'erty',
        'essageServ',
        'cljkg',
        'ls/Message',
        'Zcxih',
        '__esModule',
        'vGfXG',
        'defineProp',
        'ensureProt',
        'mediaType',
        'Emit',
        'body',
        'protocol',
        'where',
        'zdgnc',
        '167428mcsStD',
        '../../mode',
        'OPjBg',
        'tenantId',
        'error',
        'split',
        '_SYSTEM',
        'contactId',
        'ls/Ticket',
        'WLMOv',
        '778488axvksX',
        'model',
        'idation',
        'quotedMsg',
        'pupa',
        '../../help',
        'ERR_CREATI',
        '6244168cHYpyi',
        'ers/socket',
        'contact',
        '../../util',
        'getTime',
        'findByPk',
        '1396821HBNHcd',
        '2604126CncpEJ'
    ];
    a = function () {
        return Q;
    };
    return a();
}
var __importDefault = this && this[L(0x13a) + L(0xfb)] || function (c) {
    const N = L;
    return c && c[N(0x107)] ? c : { 'default': c };
};
const k = {};
k[L(0x12d)] = !![], Object[L(0x109) + M(0x102)](exports, L(0x107), k);
const pupa_1 = require(M(0x125) + L(0x135)), logger_1 = require(M(0x125) + M(0x140)), Ticket_1 = __importDefault(require(L(0x112) + L(0x119))), Message_1 = __importDefault(require(L(0x112) + M(0x105))), socketEmit_1 = __importDefault(require(L(0x120) + M(0x123) + L(0x10c))), queueValidation_1 = __importDefault(require(M(0x125) + L(0x12b) + M(0x11d))), BuildSendMessageService = async ({
        msg: m,
        tenantId: n,
        ticket: o,
        userId: p
    }) => {
        const O = M, P = L, q = {};
        q[O(0x13f)] = O(0x137), q[O(0x113)] = P(0x131), q[P(0x11a)] = P(0xfe), q[P(0x101)] = function (t, u) {
            return t === u;
        }, q[O(0x108)] = O(0x12a), q[O(0x136)] = function (t, u) {
            return t - u;
        }, q[P(0x133)] = P(0xf8), q[O(0x134)] = P(0x124), q[P(0x106)] = P(0x11e), q[O(0x130)] = P(0x121) + P(0xf6) + O(0x117), q[O(0x104)] = P(0xfa) + 'e', q[O(0x110)] = O(0x13b) + P(0x103) + P(0x13d);
        const r = q, s = {
                'ticketId': o['id'],
                'body': '',
                'contactId': o[O(0x118)],
                'fromMe': !![],
                'read': !![],
                'mediaType': r[O(0x13f)],
                'mediaUrl': undefined,
                'timestamp': new Date()[P(0x126)](),
                'quotedMsgId': undefined,
                'userId': p,
                'scheduleDate': undefined,
                'sendType': r[P(0x113)],
                'status': r[P(0x11a)],
                'tenantId': n
            };
        try {
            if (r[O(0x101)](m[O(0x146)], r[P(0x108)]) && m[P(0x12c)][O(0x100)]) {
                const t = m[P(0x12c)][O(0x100)][P(0x116)]('/'), u = {
                        ...s,
                        'body': m[O(0x12c)][P(0x141)],
                        'mediaUrl': t[r[O(0x136)](t[P(0x13c)], -0x7b * -0x8 + -0x24f3 + 0x211c)],
                        'mediaType': m[O(0x12c)][P(0x146)] ? m[O(0x12c)]?.[P(0x146)][O(0x12e)](0x2b * 0xd + -0x105 * 0x7 + -0x4f4 * -0x1, m[P(0x12c)][O(0x146)][O(0x138)]('/')) : r[P(0x13f)]
                    }, v = await Message_1[P(0xf9)][P(0x12f)](u), w = {};
                w[O(0x114)] = n;
                const x = {};
                x[P(0x11c)] = Ticket_1[O(0xf9)], x['as'] = r[O(0x133)], x[P(0x10f)] = w, x[O(0x132)] = [r[O(0x134)]];
                const y = await Message_1[P(0xf9)][O(0x127)](v['id'], {
                    'include': [
                        x,
                        {
                            'model': Message_1[O(0xf9)],
                            'as': r[P(0x106)],
                            'include': [r[O(0x134)]]
                        }
                    ]
                });
                if (!y)
                    throw new Error(r[P(0x130)]);
                await o[O(0xfc)]({
                    'lastMessage': y[P(0x10d)],
                    'lastMessageAt': new Date()[O(0x126)]()
                }), await (0x1682 + 0x1a84 * 0x1 + -0x3106, queueValidation_1[P(0xf9)])(o[O(0xff)], o[O(0x114)], [y]);
                const z = {};
                z[O(0x114)] = n, z[O(0x146)] = r[O(0x104)], z[P(0x13e)] = y, (0xf07 * 0x2 + 0x17d2 * -0x1 + -0x63c, socketEmit_1[O(0xf9)])(z);
            } else {
                const A = await o[P(0x10a) + O(0x144)](), B = {};
                B[P(0x10e)] = A, B[O(0x141)] = o[O(0x124)][O(0x141)], m[O(0x12c)][O(0x145)] = (-0x1 * -0x36d + -0x1 * -0x1c4b + -0x118 * 0x1d, pupa_1[O(0x11f)])(m[O(0x12c)][P(0x145)] || '', B);
                const C = { ...s };
                C[P(0x10d)] = m[O(0x12c)][O(0x145)], C[O(0x10b)] = r[O(0x13f)];
                const D = await Message_1[O(0xf9)][O(0x12f)](C), E = {};
                E[P(0x114)] = n;
                const F = {};
                F[P(0x11c)] = Ticket_1[O(0xf9)], F['as'] = r[P(0x133)], F[P(0x10f)] = E, F[O(0x132)] = [r[O(0x134)]];
                const G = await Message_1[O(0xf9)][P(0x127)](D['id'], {
                    'include': [
                        F,
                        {
                            'model': Message_1[P(0xf9)],
                            'as': r[O(0x106)],
                            'include': [r[P(0x134)]]
                        }
                    ]
                });
                if (!G)
                    throw new Error(r[P(0x130)]);
                await o[O(0xfc)]({
                    'lastMessage': G[P(0x10d)],
                    'lastMessageAt': new Date()[P(0x126)](),
                    'answered': !![]
                }), await (-0x2fe + -0x65b + -0x1 * -0x959, queueValidation_1[P(0xf9)])(o[P(0xff)], o[P(0x114)], [G]);
                const H = {};
                H[P(0x114)] = n, H[O(0x146)] = r[O(0x104)], H[O(0x13e)] = G, (-0x34d * -0x2 + 0x57 * -0xc + -0x2 * 0x143, socketEmit_1[O(0xf9)])(H);
            }
        } catch (I) {
            logger_1[P(0x142)][P(0x115)](r[O(0x110)], I);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xde * 0x1f + -0x37 * -0x4a + -0x29d2);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[L(0xf9)] = BuildSendMessageService;