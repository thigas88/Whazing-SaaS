'use strict';
function a() {
    const G = [
        'vice',
        'Tickets',
        'telegram',
        'RTvOO',
        'ticket:upd',
        '282TUCEqG',
        'aultWhatsA',
        'fywiX',
        'channel',
        'instagram',
        '__importDe',
        './ShowTick',
        'rs/AppErro',
        'NG_TICKET',
        'ate',
        '8198414IMXmyk',
        '7qLHLKj',
        'erty',
        'etService',
        'Service',
        'whatsapp',
        'ticket',
        'howContact',
        'Emit',
        'mand',
        'value',
        'create',
        'contactId',
        '../Contact',
        'fault',
        '10LbBKdF',
        'DWlxO',
        '__esModule',
        'ontactOpen',
        'Services/S',
        '108RhrpEL',
        'type',
        '7592032RrAjjn',
        '$create',
        '36474RAsvAX',
        'ers/socket',
        'default',
        '../../help',
        'userId',
        '1162843lhsUsZ',
        'CNpCh',
        './CreateLo',
        'includes',
        '7800cqWWME',
        '542140AZSaYm',
        '13qEhGoG',
        'tenantId',
        '109365kTbbjx',
        'UtjPC',
        'ixQQP',
        'payload',
        'ticketId',
        '45azWMYS',
        'defineProp',
        'ers/GetDef',
        'ERR_CREATI',
        '1467qwmdYa',
        'isGroup',
        'Zpcla',
        'status',
        '../../erro',
        'gTicketSer',
        'isActiveDe',
        'ers/CheckC'
    ];
    a = function () {
        return G;
    };
    return a();
}
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x7b)) / (-0x112 * -0x1 + 0x15d2 + -0x1 * 0x16e3) * (parseInt(A(0xb7)) / (0x2501 * 0x1 + 0x5cf + -0x2ace)) + parseInt(z(0x91)) / (0x2cb * 0x5 + 0x1e05 + -0x2bf9) * (parseInt(z(0x84)) / (0x1f7 + -0x1ea9 * -0x1 + -0x209c)) + parseInt(z(0x88)) / (0xbf6 + -0x1449 + 0x10b * 0x8) * (parseInt(A(0x9e)) / (0x2 * 0x3fb + -0x5 * -0x10d + -0xd31)) + parseInt(A(0xa9)) / (-0x1f73 + -0x846 + 0x35 * 0xc0) * (-parseInt(A(0x79)) / (-0xea3 * -0x1 + 0x2661 + -0x34fc)) + parseInt(z(0x8d)) / (-0xb * -0x338 + -0x846 * -0x2 + -0x33eb) * (-parseInt(A(0x85)) / (0x1853 + -0x175a + -0xef)) + parseInt(A(0x80)) / (0xee5 + -0x3 * 0x447 + -0xb * 0x2f) * (-parseInt(A(0x77)) / (0x1da5 + 0x26a9 * 0x1 + -0x4442)) + -parseInt(z(0x86)) / (-0x235a + 0xf20 + 0x1447) * (-parseInt(A(0xa8)) / (-0x10d3 + 0x13de * -0x1 + 0x24bf));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xb * -0xadcb + 0x1 * -0xc683f + 0x1cb205));
var __importDefault = this && this[B(0xa3) + C(0xb6)] || function (c) {
    const D = C;
    return c && c[D(0xb9)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * 0x18a + -0x251d + -0x1 * -0x227f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[B(0xb2)] = !![], Object[C(0x8e) + C(0xaa)](exports, C(0xb9), k);
const AppError_1 = __importDefault(require(C(0x95) + C(0xa5) + 'r')), CheckContactOpenTickets_1 = __importDefault(require(B(0x7e) + B(0x98) + B(0xba) + C(0x9a))), GetDefaultWhatsApp_1 = __importDefault(require(C(0x7e) + C(0x8f) + C(0x9f) + 'pp')), socketEmit_1 = __importDefault(require(C(0x7e) + B(0x7c) + C(0xb0))), ShowContactService_1 = __importDefault(require(B(0xb5) + C(0x76) + B(0xaf) + C(0xac))), CreateLogTicketService_1 = __importDefault(require(C(0x82) + B(0x96) + C(0x99))), ShowTicketService_1 = __importDefault(require(C(0xa4) + C(0xab))), CreateTicketService = async ({
        contactId: i,
        status: j,
        userId: l,
        tenantId: m,
        channel: n,
        channelId: channelId = undefined
    }) => {
        const E = B, F = B, o = {};
        o[E(0x93)] = F(0xa2), o[F(0x89)] = E(0x9b), o[F(0x81)] = E(0xad), o[F(0xa0)] = E(0x90) + E(0xa6), o[F(0x9c)] = E(0xae), o[F(0xb8)] = E(0xb3), o[E(0x8a)] = F(0x9d) + F(0xa7);
        const p = o, q = await (0x7 * 0x25 + -0x1 * 0x2604 + 0x2501, GetDefaultWhatsApp_1[F(0x7d)])(m, channelId);
        if (!n || ![
                p[F(0x93)],
                p[E(0x89)],
                p[E(0x81)]
            ][E(0x83)](n))
            throw new AppError_1[(F(0x7d))](p[F(0xa0)]);
        await (-0x21eb * -0x1 + -0x12b3 * -0x2 + -0x4751, CheckContactOpenTickets_1[E(0x7d)])(i);
        const r = {};
        r['id'] = i, r[F(0x87)] = m;
        const {isGroup: s} = await (-0xff7 * 0x1 + -0x10 * -0x12f + -0x2f9, ShowContactService_1[F(0x7d)])(r), t = {};
        t[E(0xb4)] = i, t[F(0x94)] = j, t[F(0x92)] = s, t[F(0x7f)] = l, t[F(0x97) + F(0xb1)] = !![], t[F(0xa1)] = n, t[F(0x87)] = m;
        const {id: u} = await q[F(0x7a)](p[E(0x9c)], t), v = {};
        v['id'] = u, v[E(0x87)] = m;
        const w = await (-0xd1e + -0xdb5 * 0x1 + 0x1ad3, ShowTicketService_1[E(0x7d)])(v);
        if (!w)
            throw new AppError_1[(E(0x7d))](p[E(0xa0)]);
        const x = {};
        x[F(0x7f)] = l, x[E(0x8c)] = w['id'], x[F(0x78)] = p[F(0xb8)], await (0x3 * -0x7e7 + 0x3aa + 0x140b, CreateLogTicketService_1[E(0x7d)])(x);
        const y = {};
        return y[E(0x87)] = m, y[F(0x78)] = p[E(0x8a)], y[F(0x8b)] = w, (-0xcf7 * -0x2 + 0x4b1 * 0x7 + -0x3ac5, socketEmit_1[F(0x7d)])(y), w;
    };
exports[B(0x7d)] = CreateTicketService;