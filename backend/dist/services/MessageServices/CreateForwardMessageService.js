'use strict';
const G = b, H = b;
(function (c, d) {
    const E = b, F = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(E(0x197)) / (0x825 * 0x1 + -0x219f * 0x1 + 0x197b) + -parseInt(E(0x18c)) / (0x9a8 + -0x79 * -0x21 + -0x119 * 0x17) + parseInt(E(0x179)) / (-0x1b * -0xa3 + 0x10fe + 0x6 * -0x5b2) * (-parseInt(E(0x195)) / (-0x79a + -0x1023 + -0x17c1 * -0x1)) + -parseInt(E(0x184)) / (0x490 + -0xea * -0x2 + -0x65f) + -parseInt(E(0x163)) / (-0xef * 0x6 + -0x1676 + 0x1c16) * (parseInt(F(0x196)) / (0x2503 + -0x23a1 + -0x15b)) + -parseInt(E(0x18b)) / (0x11ab + -0x22ad + 0x110a) + parseInt(F(0x177)) / (-0xd19 + 0x8 * -0x404 + -0x2d42 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0xe5d79 + 0x35316 * 0x1 + 0x138e05));
var __importDefault = this && this[G(0x18a) + G(0x19a)] || function (c) {
    const I = H;
    return c && c[I(0x198)] ? c : { 'default': c };
};
const k = {};
k[H(0x19e)] = !![], Object[G(0x190) + H(0x18e)](exports, G(0x198), k);
const sequelize_1 = require(G(0x194)), socketEmit_1 = __importDefault(require(G(0x183) + G(0x176) + G(0x168))), Message_1 = __importDefault(require(G(0x16f) + H(0x1a2))), Ticket_1 = __importDefault(require(H(0x16f) + H(0x178))), ShowTicketService_1 = __importDefault(require(G(0x1a0) + G(0x16d) + H(0x191) + H(0x187))), queueValidation_1 = __importDefault(require(H(0x16c) + G(0x19f) + G(0x165))), CreateForwardMessageService = async ({
        userId: l,
        tenantId: m,
        message: n,
        contact: o,
        ticketIdOrigin: p
    }) => {
        const J = H, K = H, q = {};
        q[J(0x171)] = K(0x19b), q[J(0x181)] = K(0x169), q[K(0x17a)] = K(0x172), q[J(0x17b)] = K(0x17e), q[K(0x193)] = K(0x199), q[J(0x19d)] = J(0x180), q[J(0x186)] = J(0x164) + K(0x188) + J(0x189), q[K(0x17d)] = J(0x19c) + 'e';
        const r = q, s = {};
        s['id'] = p, s[J(0x16a)] = m;
        const t = await (-0x844 * -0x3 + -0x1 * -0x11b6 + -0x2a82, ShowTicketService_1[K(0x174)])(s);
        let u;
        const v = {
                [sequelize_1['Op']['or']]: [
                    r[J(0x171)],
                    r[J(0x181)]
                ]
            }, w = {};
        w[K(0x167)] = v, w[K(0x16a)] = m, w[K(0x16b)] = o['id'];
        const x = {};
        x[J(0x1a3)] = w, u = await Ticket_1[K(0x174)][J(0x185)](x);
        !u && (u = await Ticket_1[K(0x174)][J(0x16e)]({
            'contactId': o['id'],
            'status': r[J(0x171)],
            'isGroup': o[J(0x192)],
            'userId': l,
            'tenantId': m,
            'unreadMessages': 0x0,
            'whatsappId': t[K(0x17f)],
            'lastMessage': n[K(0x18d)],
            'lastMessageAt': new Date()[J(0x173)](),
            'answered': !![]
        }));
        const y = {
                'body': n[J(0x18d)],
                'contactId': o['id'],
                'fromMe': !![],
                'read': !![],
                'mediaType': n?.[K(0x170)],
                'mediaUrl': n?.[K(0x175)],
                'mediaName': n?.[K(0x175)],
                'timestamp': new Date()[K(0x173)](),
                'userId': l,
                'scheduleDate': null,
                'sendType': r[K(0x17a)],
                'status': r[J(0x181)],
                'ticketId': u['id'],
                'tenantId': m
            }, z = await Message_1[K(0x174)][J(0x16e)](y), A = {};
        A[K(0x16a)] = m;
        const B = {};
        B[K(0x18f)] = Ticket_1[K(0x174)], B['as'] = r[J(0x17b)], B[K(0x1a3)] = A, B[K(0x1a1)] = [r[K(0x193)]];
        const C = await Message_1[K(0x174)][J(0x17c)](z['id'], {
            'include': [
                B,
                {
                    'model': Message_1[J(0x174)],
                    'as': r[K(0x19d)],
                    'include': [r[J(0x193)]]
                }
            ]
        });
        if (!C)
            throw new Error(r[K(0x186)]);
        await u[J(0x182)]({
            'lastMessage': C[J(0x18d)],
            'lastMessageAt': new Date()[J(0x173)](),
            'answered': !![]
        }), await (-0x10d7 + 0x215f + 0x4 * -0x422, queueValidation_1[K(0x174)])(u[J(0x17f)], u[K(0x16a)], [C]);
        const D = {};
        D[J(0x16a)] = m, D[J(0x166)] = r[K(0x17d)], D[K(0x162)] = C, (0x1 * 0x1905 + -0x19e1 + 0x14 * 0xb, socketEmit_1[J(0x174)])(D);
    };
exports[H(0x174)] = CreateForwardMessageService;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1f89 + 0x17f4 + 0x3 * 0x2fd);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const L = [
        'ervices/Sh',
        'create',
        '../../mode',
        'mediaType',
        'xbIVb',
        'chat',
        'getTime',
        'default',
        'mediaName',
        'ers/socket',
        '28824597JXYXkT',
        'ls/Ticket',
        '2626077zdNVVO',
        'EJoNJ',
        'OJdRS',
        'findByPk',
        'WFKQu',
        'ticket',
        'whatsappId',
        'quotedMsg',
        'RBRPr',
        'update',
        '../../help',
        '4484710jIoWcR',
        'findOne',
        'vweKy',
        'rvice',
        'NG_MESSAGE',
        '_SYSTEM',
        '__importDe',
        '162792SRzulq',
        '1523658PMIDGK',
        'body',
        'erty',
        'model',
        'defineProp',
        'owTicketSe',
        'isGroup',
        'iuTDd',
        'sequelize',
        '4TffGqx',
        '35924OoepCy',
        '8156CsgIvA',
        '__esModule',
        'contact',
        'fault',
        'open',
        'chat:creat',
        'iAkuQ',
        'value',
        's/queueVal',
        '../TicketS',
        'include',
        'ls/Message',
        'where',
        'payload',
        '96FXbwRU',
        'ERR_CREATI',
        'idation',
        'type',
        'status',
        'Emit',
        'pending',
        'tenantId',
        'contactId',
        '../../util'
    ];
    a = function () {
        return L;
    };
    return a();
}