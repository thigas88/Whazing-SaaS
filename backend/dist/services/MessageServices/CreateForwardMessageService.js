'use strict';
const G = b, H = b;
(function (c, d) {
    const E = b, F = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(E(0x15a)) / (-0x2194 + -0x11 * 0x186 + 0x3b7b * 0x1) + -parseInt(E(0x14d)) / (0x1 * 0x2029 + 0x8be + -0x13 * 0x227) * (parseInt(E(0x178)) / (0x48a + -0x1844 + 0x13bd)) + parseInt(F(0x16f)) / (-0x1902 + 0x1 * -0x75d + 0x2063) + parseInt(F(0x17b)) / (-0x1b * -0x3d + 0x1a * -0x39 + -0xa0 * 0x1) * (-parseInt(F(0x17a)) / (0x8f3 + 0x25 * -0x79 + -0x448 * -0x2)) + parseInt(E(0x15e)) / (0xf62 + -0x3 * 0x59 + -0xe50) * (-parseInt(E(0x170)) / (-0x31 * -0x9 + -0x102 * -0x1c + -0x193 * 0x13)) + -parseInt(E(0x16b)) / (-0x212b * -0x1 + -0x1f5d + 0x3 * -0x97) * (-parseInt(F(0x18f)) / (-0xbb9 * -0x1 + 0x24d5 + -0x87 * 0x5c)) + parseInt(E(0x159)) / (-0x136d + -0x23b1 + 0x3729) * (parseInt(F(0x179)) / (0x22fb + -0xd6c + -0x1 * 0x1583));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5 * 0x37949 + -0x14ced9 * 0x1 + 0xe763f));
var __importDefault = this && this[G(0x15c) + G(0x153)] || function (c) {
    const I = H;
    return c && c[I(0x166)] ? c : { 'default': c };
};
const k = {};
k[H(0x16e)] = !![], Object[G(0x18d) + G(0x16d)](exports, H(0x166), k);
const sequelize_1 = require(H(0x157)), socketEmit_1 = __importDefault(require(H(0x154) + H(0x172) + H(0x156))), Message_1 = __importDefault(require(G(0x171) + G(0x17d))), Ticket_1 = __importDefault(require(H(0x171) + H(0x17e))), ShowTicketService_1 = __importDefault(require(H(0x191) + H(0x165) + G(0x16c) + H(0x164))), queueValidation_1 = __importDefault(require(G(0x183) + G(0x176) + H(0x177))), CreateForwardMessageService = async ({
        userId: l,
        tenantId: m,
        message: n,
        contact: o,
        ticketIdOrigin: p
    }) => {
        const J = G, K = G, q = {};
        q[J(0x161)] = K(0x158), q[K(0x168)] = J(0x15b), q[K(0x169)] = J(0x16a), q[K(0x18e)] = J(0x163), q[J(0x187)] = J(0x14e), q[J(0x190)] = K(0x162), q[J(0x18c)] = K(0x186) + K(0x17c) + J(0x155), q[K(0x15f)] = J(0x14f) + 'e';
        const r = q, s = {};
        s['id'] = p, s[K(0x174)] = m;
        const t = await (0x2 * -0x1247 + 0x1c25 + 0x869 * 0x1, ShowTicketService_1[K(0x18a)])(s);
        let u;
        const v = {
                [sequelize_1['Op']['or']]: [
                    r[J(0x161)],
                    r[J(0x168)]
                ]
            }, w = {};
        w[K(0x15d)] = v, w[J(0x174)] = m, w[K(0x182)] = o['id'];
        const x = {};
        x[K(0x175)] = w, u = await Ticket_1[J(0x18a)][K(0x185)](x);
        !u && (u = await Ticket_1[J(0x18a)][J(0x17f)]({
            'contactId': o['id'],
            'status': r[K(0x161)],
            'isGroup': o[K(0x184)],
            'userId': l,
            'tenantId': m,
            'unreadMessages': 0x0,
            'whatsappId': t[J(0x188)],
            'lastMessage': n[K(0x180)],
            'lastMessageAt': new Date()[K(0x152)](),
            'answered': !![]
        }));
        const y = {
                'body': n[J(0x180)],
                'contactId': o['id'],
                'fromMe': !![],
                'read': !![],
                'mediaType': n?.[K(0x160)],
                'mediaUrl': n?.[K(0x18b)],
                'mediaName': n?.[J(0x18b)],
                'timestamp': new Date()[K(0x152)](),
                'userId': l,
                'scheduleDate': null,
                'sendType': r[K(0x169)],
                'status': r[J(0x168)],
                'ticketId': u['id'],
                'tenantId': m
            }, z = await Message_1[J(0x18a)][K(0x17f)](y), A = {};
        A[K(0x174)] = m;
        const B = {};
        B[K(0x151)] = Ticket_1[J(0x18a)], B['as'] = r[J(0x18e)], B[K(0x175)] = A, B[J(0x173)] = [r[K(0x187)]];
        const C = await Message_1[K(0x18a)][J(0x167)](z['id'], {
            'include': [
                B,
                {
                    'model': Message_1[J(0x18a)],
                    'as': r[J(0x190)],
                    'include': [r[K(0x187)]]
                }
            ]
        });
        if (!C)
            throw new Error(r[K(0x18c)]);
        await u[K(0x189)]({
            'lastMessage': C[J(0x180)],
            'lastMessageAt': new Date()[K(0x152)](),
            'answered': !![]
        }), await (0x1549 * -0x1 + -0x180c + -0x41f * -0xb, queueValidation_1[J(0x18a)])(u[J(0x188)], u[K(0x174)], [C]);
        const D = {};
        D[J(0x174)] = m, D[J(0x181)] = r[K(0x15f)], D[J(0x150)] = C, (-0x1 * -0x1b0f + -0x6 * -0x43 + -0x1ca1 * 0x1, socketEmit_1[J(0x18a)])(D);
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xa * -0x25 + 0x13c4 + 0x1 * -0x13e9);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const L = [
        's/queueVal',
        'idation',
        '14853PXexoX',
        '19421232rvjuoQ',
        '2575782yMczEQ',
        '10yWMoXy',
        'NG_MESSAGE',
        'ls/Message',
        'ls/Ticket',
        'create',
        'body',
        'type',
        'contactId',
        '../../util',
        'isGroup',
        'findOne',
        'ERR_CREATI',
        'VPVFU',
        'whatsappId',
        'update',
        'default',
        'mediaName',
        'WDezO',
        'defineProp',
        'dIEZE',
        '10OUymaG',
        'xJsRn',
        '../TicketS',
        '418JbiUzy',
        'contact',
        'chat:creat',
        'payload',
        'model',
        'getTime',
        'fault',
        '../../help',
        '_SYSTEM',
        'Emit',
        'sequelize',
        'open',
        '22qTCMxc',
        '973683waSTke',
        'pending',
        '__importDe',
        'status',
        '1771JDzDZC',
        'zAjnw',
        'mediaType',
        'deekw',
        'quotedMsg',
        'ticket',
        'rvice',
        'ervices/Sh',
        '__esModule',
        'findByPk',
        'kEevU',
        'uLRRZ',
        'chat',
        '6506307vRajDz',
        'owTicketSe',
        'erty',
        'value',
        '766164dGFQDF',
        '17768oUiHYj',
        '../../mode',
        'ers/socket',
        'include',
        'tenantId',
        'where'
    ];
    a = function () {
        return L;
    };
    return a();
}
exports[G(0x18a)] = CreateForwardMessageService;