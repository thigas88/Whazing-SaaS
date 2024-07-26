'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2680 + 0x1427 * -0x1 + 0x58f * -0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const G = b, H = b;
(function (c, d) {
    const E = b, F = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(E(0x1b3)) / (0x183 * -0x7 + -0x14c7 * 0x1 + -0x7 * -0x47b) * (-parseInt(E(0x1e8)) / (-0x144b + 0x2293 + -0xae * 0x15)) + parseInt(F(0x1ae)) / (-0xa * 0x373 + 0x4 * -0x63d + 0x3b75) * (-parseInt(F(0x1bf)) / (-0x205a + 0x1 * -0x1581 + 0x35df)) + parseInt(E(0x1ee)) / (-0x12b3 * 0x1 + 0x135b * -0x2 + -0x1cb7 * -0x2) * (-parseInt(E(0x1b2)) / (-0x3 * -0x27f + 0x190 * 0x11 + -0x2207)) + -parseInt(F(0x1d0)) / (-0x7 * 0x33a + 0x1 * -0x1328 + 0x121 * 0x25) * (-parseInt(E(0x1d9)) / (0x253f + -0x2 * -0xda3 + -0x407d * 0x1)) + parseInt(F(0x1c3)) / (-0x5e * -0x25 + -0x12a1 * -0x1 + -0x202e * 0x1) * (-parseInt(F(0x1c5)) / (0x8 * 0x2b7 + -0x116 * -0x6 + -0x1c32)) + parseInt(F(0x1dc)) / (0x1d33 + -0x1571 + -0x19 * 0x4f) * (-parseInt(F(0x1e2)) / (-0x14b7 + -0x2 * -0xc23 + -0x1 * 0x383)) + parseInt(F(0x1cb)) / (0x1 * -0x1d53 + -0x1084 + 0x2de4);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x18568 + -0x2123b + 0x56c49));
function a() {
    const L = [
        'chat',
        'chat:creat',
        'ls/Ticket',
        '16ezIKse',
        'idation',
        '../../mode',
        '88fRzQpT',
        'mediaName',
        'quotedMsg',
        'findOne',
        'CDDPa',
        'findByPk',
        '6348rXidEk',
        'owTicketSe',
        'include',
        'value',
        'contact',
        'weZYH',
        '1078wrxaPM',
        'update',
        'model',
        '../TicketS',
        'tenantId',
        'ervices/Sh',
        '225wxyRtY',
        'ticket',
        'kuSTr',
        'isGroup',
        'NFuXm',
        'contactId',
        '319686DKBJAk',
        '__esModule',
        'pending',
        'sequelize',
        '3810fqtAyA',
        '307oNhYKR',
        'mediaType',
        '__importDe',
        'whatsappId',
        'ls/Message',
        'jgFUx',
        'ERR_CREATI',
        'Seegl',
        'payload',
        'erty',
        's/queueVal',
        'ers/socket',
        '8fhGzaV',
        'body',
        'NG_MESSAGE',
        'default',
        '56367llEUkK',
        'type',
        '120EWSSKk',
        'where',
        '../../help',
        'xqVdE',
        'create',
        'open',
        '7350980fuDhKg',
        '../../util',
        'Emit',
        'rvice',
        'getTime',
        '143759NlRvGo',
        'cgeny',
        'status',
        '_SYSTEM',
        'defineProp',
        'fault'
    ];
    a = function () {
        return L;
    };
    return a();
}
var __importDefault = this && this[G(0x1b5) + H(0x1d5)] || function (c) {
    const I = G;
    return c && c[I(0x1af)] ? c : { 'default': c };
};
const k = {};
k[G(0x1e5)] = !![], Object[H(0x1d4) + G(0x1bc)](exports, G(0x1af), k);
const sequelize_1 = require(G(0x1b1)), socketEmit_1 = __importDefault(require(H(0x1c7) + H(0x1be) + H(0x1cd))), Message_1 = __importDefault(require(H(0x1db) + G(0x1b7))), Ticket_1 = __importDefault(require(H(0x1db) + H(0x1d8))), ShowTicketService_1 = __importDefault(require(H(0x1eb) + H(0x1ed) + H(0x1e3) + G(0x1ce))), queueValidation_1 = __importDefault(require(G(0x1cc) + H(0x1bd) + H(0x1da))), CreateForwardMessageService = async ({
        userId: l,
        tenantId: m,
        message: n,
        contact: o,
        ticketIdOrigin: p
    }) => {
        const J = H, K = G, q = {};
        q[J(0x1ba)] = J(0x1ca), q[J(0x1b8)] = J(0x1b0), q[J(0x1f0)] = K(0x1d6), q[K(0x1e0)] = J(0x1ef), q[K(0x1ac)] = J(0x1e6), q[J(0x1d1)] = K(0x1de), q[K(0x1e7)] = K(0x1b9) + K(0x1c1) + K(0x1d3), q[K(0x1c8)] = J(0x1d7) + 'e';
        const r = q, s = {};
        s['id'] = p, s[K(0x1ec)] = m;
        const t = await (0xf7c * 0x2 + -0x1 * 0x119c + 0x5 * -0x2ac, ShowTicketService_1[K(0x1c2)])(s);
        let u;
        const v = {
                [sequelize_1['Op']['or']]: [
                    r[K(0x1ba)],
                    r[J(0x1b8)]
                ]
            }, w = {};
        w[K(0x1d2)] = v, w[K(0x1ec)] = m, w[K(0x1ad)] = o['id'];
        const x = {};
        x[K(0x1c6)] = w, u = await Ticket_1[J(0x1c2)][K(0x1df)](x);
        !u && (u = await Ticket_1[K(0x1c2)][J(0x1c9)]({
            'contactId': o['id'],
            'status': r[K(0x1ba)],
            'isGroup': o[J(0x1f1)],
            'userId': l,
            'tenantId': m,
            'unreadMessages': 0x0,
            'whatsappId': t[J(0x1b6)],
            'lastMessage': n[K(0x1c0)],
            'lastMessageAt': new Date()[K(0x1cf)](),
            'answered': !![]
        }));
        const y = {
                'body': n[J(0x1c0)],
                'contactId': o['id'],
                'fromMe': !![],
                'read': !![],
                'mediaType': n?.[J(0x1b4)],
                'mediaUrl': n?.[K(0x1dd)],
                'mediaName': n?.[J(0x1dd)],
                'timestamp': new Date()[J(0x1cf)](),
                'userId': l,
                'scheduleDate': null,
                'sendType': r[J(0x1f0)],
                'status': r[J(0x1b8)],
                'ticketId': u['id'],
                'tenantId': m
            }, z = await Message_1[J(0x1c2)][K(0x1c9)](y), A = {};
        A[J(0x1ec)] = m;
        const B = {};
        B[K(0x1ea)] = Ticket_1[J(0x1c2)], B['as'] = r[K(0x1e0)], B[J(0x1c6)] = A, B[K(0x1e4)] = [r[J(0x1ac)]];
        const C = await Message_1[K(0x1c2)][K(0x1e1)](z['id'], {
            'include': [
                B,
                {
                    'model': Message_1[K(0x1c2)],
                    'as': r[J(0x1d1)],
                    'include': [r[K(0x1ac)]]
                }
            ]
        });
        if (!C)
            throw new Error(r[K(0x1e7)]);
        await u[J(0x1e9)]({
            'lastMessage': C[K(0x1c0)],
            'lastMessageAt': new Date()[J(0x1cf)](),
            'answered': !![]
        }), await (0xb8f * 0x2 + 0x13d5 + -0x2af3, queueValidation_1[K(0x1c2)])(u[K(0x1b6)], u[J(0x1ec)], [C]);
        const D = {};
        D[K(0x1ec)] = m, D[K(0x1c4)] = r[J(0x1c8)], D[J(0x1bb)] = C, (0x23d * -0x1 + -0xd37 + 0xf74, socketEmit_1[K(0x1c2)])(D);
    };
exports[H(0x1c2)] = CreateForwardMessageService;