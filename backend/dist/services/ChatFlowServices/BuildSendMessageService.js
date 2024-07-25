'use strict';
const L = b, M = b;
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(J(0x179)) / (-0xb * -0x133 + -0x31 * -0xaf + 0x275 * -0x13) * (parseInt(J(0x190)) / (-0x13a5 + 0x8b * -0x17 + -0x11 * -0x1e4)) + parseInt(K(0x1b4)) / (-0x3 * -0x385 + -0x1753 + 0xcc7) + parseInt(K(0x164)) / (-0xe3b + -0x1174 + -0x3 * -0xa91) + -parseInt(J(0x19b)) / (-0x1 * -0xf59 + 0x27 * -0xb9 + -0x449 * -0x3) * (parseInt(K(0x175)) / (-0x1466 + -0x1a2d + 0x2e99 * 0x1)) + -parseInt(J(0x186)) / (0x24c9 + 0x2 * 0xd06 + -0x3ece) * (parseInt(J(0x1b1)) / (0x4 * 0x27d + -0x1 * 0x1c4f + 0x1263)) + -parseInt(K(0x184)) / (-0x14e7 + 0xa + 0xa73 * 0x2) * (parseInt(J(0x18d)) / (-0x4 * -0x51f + -0x1e8 + -0x128a)) + parseInt(K(0x18e)) / (-0x18c5 * -0x1 + -0xf08 + -0x1 * 0x9b2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xa * -0x489b + -0x9abf9 + -0x19f * -0x76a));
var __importDefault = this && this[L(0x17f) + L(0x170)] || function (c) {
    const N = M;
    return c && c[N(0x183)] ? c : { 'default': c };
};
const k = {};
function a() {
    const Q = [
        'COBqP',
        'name',
        'whatsappId',
        'quotedMsg',
        '_SYSTEM',
        'XkByr',
        'default',
        'MediaField',
        'fault',
        'TZqdo',
        'chat:creat',
        'ers/socket',
        'lwjBP',
        '18UePZHP',
        'mediaUrl',
        'pending',
        'NG_MESSAGE',
        '580557CQFnHg',
        's/pupa',
        'split',
        '../../help',
        'error',
        'chat',
        '__importDe',
        's/logger',
        'update',
        'cBuOx',
        '__esModule',
        '9sZIsyW',
        'payload',
        '780360FunVwC',
        'type',
        'BuildSendM',
        'BxTyB',
        '../../util',
        'getTime',
        'value',
        '3507870QtAGfb',
        '6226231jBwSDN',
        'mediaType',
        '2ACQZuv',
        'substr',
        'indexOf',
        'message',
        'FOHbl',
        'erty',
        'model',
        'ofyVQ',
        'ls/Message',
        'ERR_CREATI',
        'ocol',
        '1096145SRoukZ',
        'defineProp',
        'DKdUW',
        'protocol',
        'ticket',
        'include',
        'bot',
        'create',
        'pupa',
        'findByPk',
        '../../mode',
        's/queueVal',
        'length',
        'MhYfr',
        'contactId',
        'where',
        'ls/Ticket',
        'ice',
        'JOTUF',
        'idation',
        'ensureProt',
        'tenantId',
        '48QFSULI',
        'data',
        'NfzyW',
        '590697hhgKTD',
        'body',
        'logger',
        '2694272PvWuUc',
        'contact',
        'essageServ',
        'Emit'
    ];
    a = function () {
        return Q;
    };
    return a();
}
k[M(0x18c)] = !![], Object[L(0x19c) + L(0x195)](exports, M(0x183), k);
const pupa_1 = require(L(0x18a) + M(0x17a)), logger_1 = require(M(0x18a) + L(0x180)), Ticket_1 = __importDefault(require(M(0x1a5) + L(0x1ab))), Message_1 = __importDefault(require(M(0x1a5) + L(0x198))), socketEmit_1 = __importDefault(require(L(0x17c) + L(0x173) + L(0x167))), queueValidation_1 = __importDefault(require(L(0x18a) + L(0x1a6) + M(0x1ae))), BuildSendMessageService = async ({
        msg: m,
        tenantId: n,
        ticket: o,
        userId: p
    }) => {
        const O = M, P = M, q = {};
        q[O(0x171)] = O(0x17e), q[O(0x16d)] = O(0x1a1), q[P(0x174)] = P(0x177), q[P(0x189)] = function (t, u) {
            return t === u;
        }, q[P(0x19d)] = P(0x16f), q[O(0x182)] = function (t, u) {
            return t - u;
        }, q[O(0x197)] = O(0x19f), q[P(0x168)] = O(0x165), q[O(0x1ad)] = O(0x16b), q[O(0x1b3)] = P(0x199) + O(0x178) + O(0x16c), q[O(0x194)] = P(0x172) + 'e', q[O(0x1a8)] = P(0x188) + O(0x166) + O(0x1ac);
        const r = q, s = {
                'ticketId': o['id'],
                'body': '',
                'contactId': o[P(0x1a9)],
                'fromMe': !![],
                'read': !![],
                'mediaType': r[O(0x171)],
                'mediaUrl': undefined,
                'timestamp': new Date()[O(0x18b)](),
                'quotedMsgId': undefined,
                'userId': p,
                'scheduleDate': undefined,
                'sendType': r[O(0x16d)],
                'status': r[O(0x174)],
                'tenantId': n
            };
        try {
            if (r[O(0x189)](m[O(0x187)], r[O(0x19d)]) && m[P(0x1b2)][O(0x176)]) {
                const t = m[O(0x1b2)][P(0x176)][P(0x17b)]('/'), u = {
                        ...s,
                        'body': m[O(0x1b2)][P(0x169)],
                        'mediaUrl': t[r[O(0x182)](t[O(0x1a7)], 0x1 * 0x1df2 + 0x8 * -0xed + 0x783 * -0x3)],
                        'mediaType': m[P(0x1b2)][O(0x187)] ? m[O(0x1b2)]?.[P(0x187)][O(0x191)](-0xca7 * -0x1 + 0x1326 + -0x7 * 0x48b, m[O(0x1b2)][O(0x187)][P(0x192)]('/')) : r[P(0x171)]
                    }, v = await Message_1[O(0x16e)][P(0x1a2)](u), w = {};
                w[O(0x1b0)] = n;
                const x = {};
                x[O(0x196)] = Ticket_1[O(0x16e)], x['as'] = r[O(0x197)], x[P(0x1aa)] = w, x[P(0x1a0)] = [r[O(0x168)]];
                const y = await Message_1[P(0x16e)][O(0x1a4)](v['id'], {
                    'include': [
                        x,
                        {
                            'model': Message_1[O(0x16e)],
                            'as': r[O(0x1ad)],
                            'include': [r[P(0x168)]]
                        }
                    ]
                });
                if (!y)
                    throw new Error(r[P(0x1b3)]);
                await o[O(0x181)]({
                    'lastMessage': y[O(0x1b5)],
                    'lastMessageAt': new Date()[O(0x18b)]()
                }), await (-0xa7f + -0x137 * -0x17 + -0x1172, queueValidation_1[O(0x16e)])(o[O(0x16a)], o[O(0x1b0)], [y]);
                const z = {};
                z[P(0x1b0)] = n, z[O(0x187)] = r[P(0x194)], z[P(0x185)] = y, (-0x10ef + 0xf6 * -0x27 + 0x3669 * 0x1, socketEmit_1[O(0x16e)])(z);
            } else {
                const A = await o[O(0x1af) + O(0x19a)](), B = {};
                B[P(0x19e)] = A, B[O(0x169)] = o[P(0x165)][P(0x169)], m[O(0x1b2)][P(0x193)] = (-0x1521 + 0x108c + 0x495, pupa_1[P(0x1a3)])(m[O(0x1b2)][O(0x193)] || '', B);
                const C = { ...s };
                C[P(0x1b5)] = m[O(0x1b2)][P(0x193)], C[P(0x18f)] = r[O(0x171)];
                const D = await Message_1[P(0x16e)][O(0x1a2)](C), E = {};
                E[O(0x1b0)] = n;
                const F = {};
                F[P(0x196)] = Ticket_1[P(0x16e)], F['as'] = r[O(0x197)], F[P(0x1aa)] = E, F[O(0x1a0)] = [r[P(0x168)]];
                const G = await Message_1[P(0x16e)][P(0x1a4)](D['id'], {
                    'include': [
                        F,
                        {
                            'model': Message_1[P(0x16e)],
                            'as': r[O(0x1ad)],
                            'include': [r[P(0x168)]]
                        }
                    ]
                });
                if (!G)
                    throw new Error(r[O(0x1b3)]);
                await o[O(0x181)]({
                    'lastMessage': G[P(0x1b5)],
                    'lastMessageAt': new Date()[P(0x18b)](),
                    'answered': !![]
                }), await (-0x1 * -0x107b + -0x1f7a * 0x1 + 0xeff, queueValidation_1[O(0x16e)])(o[O(0x16a)], o[P(0x1b0)], [G]);
                const H = {};
                H[P(0x1b0)] = n, H[P(0x187)] = r[O(0x194)], H[O(0x185)] = G, (0x1319 + -0x1a0e + 0x6f5, socketEmit_1[P(0x16e)])(H);
            }
        } catch (I) {
            logger_1[O(0x1b6)][P(0x17d)](r[O(0x1a8)], I);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1949 * -0x1 + 0x2a1 * -0xc + -0x3a39 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[M(0x16e)] = BuildSendMessageService;