'use strict';
const G = b, H = b;
(function (c, d) {
    const E = b, F = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(E(0x1f5)) / (0x1f15 + 0xff5 * -0x1 + -0x31 * 0x4f) + parseInt(F(0x21d)) / (-0x1 * 0x23bc + -0x5 * -0x4a0 + 0xc9e) + parseInt(E(0x207)) / (0x110a + -0x214c + 0x1045) * (-parseInt(F(0x216)) / (0x2093 * 0x1 + 0x8e8 + 0x84b * -0x5)) + -parseInt(E(0x226)) / (-0x1ee * 0xb + 0x123 * -0x1a + 0x99 * 0x55) * (-parseInt(E(0x203)) / (-0x1def + 0x177d + 0x678)) + parseInt(E(0x22a)) / (0xe4d + -0x1f0f + -0x10c9 * -0x1) + parseInt(F(0x1f6)) / (0xc1 * -0xd + -0x1 * 0x549 + -0xa * -0x183) * (parseInt(F(0x21a)) / (0x1893 + 0x1186 + -0x10 * 0x2a1)) + -parseInt(E(0x1f2)) / (-0x171d + -0x1d37 + 0x345e * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x44ea * -0xc + -0x2 * 0x802e + 0x3 * 0x1b25f));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x2149 + 0x83f + -0xb * 0x39a);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[G(0x202) + H(0x200)] || function (c) {
    const I = H;
    return c && c[I(0x204)] ? c : { 'default': c };
};
const k = {};
k[G(0x208)] = !![], Object[G(0x215) + H(0x222)](exports, H(0x204), k);
function a() {
    const L = [
        'open',
        'chat',
        'ERR_CREATI',
        'DHdcQ',
        'payload',
        'isGroup',
        '../../util',
        'update',
        '13302980aAOieJ',
        'Emit',
        'rvice',
        '534337OAknUK',
        '2853912SLXQoQ',
        'sequelize',
        'create',
        'mediaName',
        'ls/Ticket',
        'findByPk',
        'chat:creat',
        'GFOAz',
        'getTime',
        'tenantId',
        'fault',
        'QYSwg',
        '__importDe',
        '4182378BLLtHD',
        '__esModule',
        'ervices/Sh',
        'where',
        '3PDskuc',
        'value',
        'type',
        'contactId',
        '../../help',
        's/queueVal',
        'model',
        'NG_MESSAGE',
        'quotedMsg',
        'whatsappId',
        'ers/socket',
        'ls/Message',
        'ticket',
        '../../mode',
        'defineProp',
        '858808KoAHhI',
        '_SYSTEM',
        'contact',
        'status',
        '9pniqnF',
        '../TicketS',
        'body',
        '1193694gxBWjZ',
        'default',
        'mediaType',
        'pending',
        'findOne',
        'erty',
        'gzdkU',
        'owTicketSe',
        'DLFzf',
        '5rejUqo',
        'sNVex',
        'DqUqS',
        'idation',
        '6358527SYrmob',
        'include',
        'mJRLK'
    ];
    a = function () {
        return L;
    };
    return a();
}
const sequelize_1 = require(G(0x1f7)), socketEmit_1 = __importDefault(require(G(0x20b) + G(0x211) + G(0x1f3))), Message_1 = __importDefault(require(G(0x214) + G(0x212))), Ticket_1 = __importDefault(require(G(0x214) + G(0x1fa))), ShowTicketService_1 = __importDefault(require(G(0x21b) + H(0x205) + G(0x224) + H(0x1f4))), queueValidation_1 = __importDefault(require(H(0x1f0) + H(0x20c) + H(0x229))), CreateForwardMessageService = async ({
        userId: l,
        tenantId: m,
        message: n,
        contact: o,
        ticketIdOrigin: p
    }) => {
        const J = G, K = G, q = {};
        q[J(0x228)] = K(0x1ea), q[K(0x227)] = J(0x220), q[K(0x201)] = K(0x1eb), q[K(0x223)] = J(0x213), q[K(0x22c)] = J(0x218), q[J(0x1ed)] = J(0x20f), q[J(0x225)] = K(0x1ec) + K(0x20e) + K(0x217), q[J(0x1fd)] = J(0x1fc) + 'e';
        const r = q, s = {};
        s['id'] = p, s[K(0x1ff)] = m;
        const t = await (-0x32 * 0x16 + 0x480 * -0x1 + -0x8cc * -0x1, ShowTicketService_1[K(0x21e)])(s);
        let u;
        const v = {
                [sequelize_1['Op']['or']]: [
                    r[K(0x228)],
                    r[J(0x227)]
                ]
            }, w = {};
        w[J(0x219)] = v, w[K(0x1ff)] = m, w[J(0x20a)] = o['id'];
        const x = {};
        x[K(0x206)] = w, u = await Ticket_1[K(0x21e)][J(0x221)](x);
        !u && (u = await Ticket_1[J(0x21e)][J(0x1f8)]({
            'contactId': o['id'],
            'status': r[J(0x228)],
            'isGroup': o[K(0x1ef)],
            'userId': l,
            'tenantId': m,
            'unreadMessages': 0x0,
            'whatsappId': t[K(0x210)],
            'lastMessage': n[J(0x21c)],
            'lastMessageAt': new Date()[J(0x1fe)](),
            'answered': !![]
        }));
        const y = {
                'body': n[K(0x21c)],
                'contactId': o['id'],
                'fromMe': !![],
                'read': !![],
                'mediaType': n?.[J(0x21f)],
                'mediaUrl': n?.[J(0x1f9)],
                'mediaName': n?.[K(0x1f9)],
                'timestamp': new Date()[K(0x1fe)](),
                'userId': l,
                'scheduleDate': null,
                'sendType': r[K(0x201)],
                'status': r[J(0x227)],
                'ticketId': u['id'],
                'tenantId': m
            }, z = await Message_1[K(0x21e)][K(0x1f8)](y), A = {};
        A[K(0x1ff)] = m;
        const B = {};
        B[J(0x20d)] = Ticket_1[J(0x21e)], B['as'] = r[J(0x223)], B[J(0x206)] = A, B[J(0x22b)] = [r[J(0x22c)]];
        const C = await Message_1[K(0x21e)][J(0x1fb)](z['id'], {
            'include': [
                B,
                {
                    'model': Message_1[K(0x21e)],
                    'as': r[K(0x1ed)],
                    'include': [r[K(0x22c)]]
                }
            ]
        });
        if (!C)
            throw new Error(r[K(0x225)]);
        await u[J(0x1f1)]({
            'lastMessage': C[K(0x21c)],
            'lastMessageAt': new Date()[K(0x1fe)](),
            'answered': !![]
        }), await (0x431 + -0xfb6 + 0x1 * 0xb85, queueValidation_1[K(0x21e)])(u[K(0x210)], u[K(0x1ff)], [C]);
        const D = {};
        D[K(0x1ff)] = m, D[J(0x209)] = r[J(0x1fd)], D[J(0x1ee)] = C, (-0x2 * -0xafa + -0x5aa + -0x104a * 0x1, socketEmit_1[K(0x21e)])(D);
    };
exports[G(0x21e)] = CreateForwardMessageService;