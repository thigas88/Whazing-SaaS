'use strict';
const G = b, H = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x71a * 0x3 + 0x5 * -0x753 + 0x3a65);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const E = b, F = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(E(0xa1)) / (0x133 * 0x2 + 0x45b + -0x6c0) + parseInt(F(0x82)) / (-0x18d2 + 0x9c8 * -0x1 + 0x229c) * (-parseInt(F(0x92)) / (-0x1bc5 * -0x1 + 0x2600 + -0x2 * 0x20e1)) + -parseInt(E(0xab)) / (-0x3 * -0x159 + 0x1 * -0x12c2 + -0x4e9 * -0x3) + parseInt(F(0x90)) / (-0x1d * -0x71 + -0x5cb * -0x5 + -0x29bf) * (-parseInt(F(0x9a)) / (-0x1 * -0xdfb + -0x1d5d + 0x3a * 0x44)) + parseInt(E(0x93)) / (0x932 + -0x1c3c + 0x3 * 0x65b) + -parseInt(E(0xa4)) / (0x25a2 + -0x1426 + 0x45d * -0x4) * (-parseInt(E(0xad)) / (0x1144 + -0x1 * -0x10f1 + 0x36 * -0xa2)) + -parseInt(F(0xaf)) / (0x39c + -0x4a * 0x3 + 0x2b4 * -0x1) * (-parseInt(E(0x96)) / (-0x191f * 0x1 + -0xec0 + 0x27ea));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xab7e0 + -0x92fea + 0x1d2087));
var __importDefault = this && this[G(0xa7) + G(0x85)] || function (c) {
    const I = G;
    return c && c[I(0xb9)] ? c : { 'default': c };
};
const k = {};
k[H(0xa5)] = !![], Object[G(0xa9) + G(0xaa)](exports, H(0xb9), k);
const sequelize_1 = require(H(0x9d)), socketEmit_1 = __importDefault(require(G(0x8c) + G(0xbb) + G(0x9e))), Message_1 = __importDefault(require(G(0xa2) + H(0x7c))), Ticket_1 = __importDefault(require(H(0xa2) + G(0xa8))), ShowTicketService_1 = __importDefault(require(G(0xb4) + H(0x98) + H(0x7a) + H(0x83))), queueValidation_1 = __importDefault(require(G(0x88) + G(0xba) + G(0xb1))), CreateForwardMessageService = async ({
        userId: l,
        tenantId: m,
        message: n,
        contact: o,
        ticketIdOrigin: p
    }) => {
        const J = H, K = G, q = {};
        q[J(0x94)] = J(0xac), q[J(0xa3)] = J(0xb5), q[K(0xa0)] = J(0x84), q[K(0x86)] = J(0xb6), q[J(0x99)] = J(0x7d), q[K(0x80)] = J(0x7e), q[J(0xb2)] = J(0x91) + K(0x9f) + K(0x8a), q[J(0xae)] = J(0xb7) + 'e';
        const r = q, s = {};
        s['id'] = p, s[K(0x7b)] = m;
        const t = await (0x17f2 + -0x2a * -0xdc + 0x1e05 * -0x2, ShowTicketService_1[K(0x79)])(s);
        let u;
        const v = {
                [sequelize_1['Op']['or']]: [
                    r[J(0x94)],
                    r[K(0xa3)]
                ]
            }, w = {};
        w[K(0xb8)] = v, w[K(0x7b)] = m, w[K(0x87)] = o['id'];
        const x = {};
        x[K(0x97)] = w, u = await Ticket_1[J(0x79)][J(0x9b)](x);
        !u && (u = await Ticket_1[K(0x79)][J(0x8f)]({
            'contactId': o['id'],
            'status': r[K(0x94)],
            'isGroup': o[K(0xa6)],
            'userId': l,
            'tenantId': m,
            'unreadMessages': 0x0,
            'whatsappId': t[K(0x7f)],
            'lastMessage': n[J(0x8e)],
            'lastMessageAt': new Date()[K(0x9c)](),
            'answered': !![]
        }));
        const y = {
                'body': n[K(0x8e)],
                'contactId': o['id'],
                'fromMe': !![],
                'read': !![],
                'mediaType': n?.[J(0xb3)],
                'mediaUrl': n?.[K(0x78)],
                'mediaName': n?.[K(0x78)],
                'timestamp': new Date()[K(0x9c)](),
                'userId': l,
                'scheduleDate': null,
                'sendType': r[K(0xa0)],
                'status': r[K(0xa3)],
                'ticketId': u['id'],
                'tenantId': m
            }, z = await Message_1[J(0x79)][J(0x8f)](y), A = {};
        A[J(0x7b)] = m;
        const B = {};
        B[K(0x89)] = Ticket_1[J(0x79)], B['as'] = r[J(0x86)], B[J(0x97)] = A, B[K(0x81)] = [r[J(0x99)]];
        const C = await Message_1[J(0x79)][K(0x8d)](z['id'], {
            'include': [
                B,
                {
                    'model': Message_1[K(0x79)],
                    'as': r[J(0x80)],
                    'include': [r[K(0x99)]]
                }
            ]
        });
        if (!C)
            throw new Error(r[K(0xb2)]);
        await u[K(0x8b)]({
            'lastMessage': C[K(0x8e)],
            'lastMessageAt': new Date()[K(0x9c)](),
            'answered': !![]
        }), await (0x1ac0 + 0x12f5 + -0x2db5, queueValidation_1[J(0x79)])(u[J(0x7f)], u[J(0x7b)], [C]);
        const D = {};
        D[J(0x7b)] = m, D[J(0x95)] = r[J(0xae)], D[J(0xb0)] = C, (0x253 + -0x18d6 + 0x1683, socketEmit_1[J(0x79)])(D);
    };
function a() {
    const L = [
        'default',
        'owTicketSe',
        'tenantId',
        'ls/Message',
        'contact',
        'quotedMsg',
        'whatsappId',
        'JCMQD',
        'include',
        '62fkOfdP',
        'rvice',
        'chat',
        'fault',
        'TCKdj',
        'contactId',
        '../../util',
        'model',
        '_SYSTEM',
        'update',
        '../../help',
        'findByPk',
        'body',
        'create',
        '25115noypCI',
        'ERR_CREATI',
        '24987UuQSUO',
        '2290288gYXyCM',
        'aNyvR',
        'type',
        '22hWxoSQ',
        'where',
        'ervices/Sh',
        'cibMj',
        '258FDNbdq',
        'findOne',
        'getTime',
        'sequelize',
        'Emit',
        'NG_MESSAGE',
        'KPKXX',
        '35315krNiiZ',
        '../../mode',
        'gggcY',
        '10952SpcVmy',
        'value',
        'isGroup',
        '__importDe',
        'ls/Ticket',
        'defineProp',
        'erty',
        '1665488CUhYWA',
        'open',
        '6876vNhkTt',
        'OOiRS',
        '432470klpXbF',
        'payload',
        'idation',
        'MhaFn',
        'mediaType',
        '../TicketS',
        'pending',
        'ticket',
        'chat:creat',
        'status',
        '__esModule',
        's/queueVal',
        'ers/socket',
        'mediaName'
    ];
    a = function () {
        return L;
    };
    return a();
}
exports[G(0x79)] = CreateForwardMessageService;