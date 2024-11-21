'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0x17e)) / (-0x1d * -0xd6 + 0x1646 * 0x1 + -0x3 * 0xf81) * (-parseInt(z(0x181)) / (-0x655 + -0x159d + 0x1bf4)) + parseInt(z(0x166)) / (0x3 * -0x835 + -0x1800 + -0x19 * -0x1f2) * (-parseInt(A(0x18a)) / (0x1 * 0x131f + 0x586 + -0x18a1)) + parseInt(A(0x186)) / (-0x9e3 * 0x1 + -0x1833 + 0x221b) + -parseInt(A(0x156)) / (0x1aa8 + -0x361 + -0x1 * 0x1741) * (parseInt(z(0x159)) / (-0x6 * -0x23e + -0x222e + -0x1e3 * -0xb)) + parseInt(z(0x180)) / (0x1706 + -0x1549 + -0x1 * 0x1b5) * (-parseInt(A(0x150)) / (-0xc * 0x2a5 + -0x2077 + 0x403c)) + parseInt(z(0x172)) / (-0xbf2 + 0x1c0c * 0x1 + 0x404 * -0x4) + -parseInt(A(0x16c)) / (-0x5ef * 0x4 + 0x58 * -0x5e + -0x3817 * -0x1) * (parseInt(A(0x16e)) / (-0x1c9a + 0x2665 * -0x1 + 0x1 * 0x430b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa637 * -0xd + 0x1 * 0xe0da9 + 0x1ba55));
var __importDefault = this && this[B(0x179) + B(0x174)] || function (c) {
    const D = C;
    return c && c[D(0x16b)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x7 * 0x43f + 0x1391 + -0x2ffe);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[C(0x188)] = !![], Object[B(0x171) + C(0x14c)](exports, B(0x16b), k);
function a() {
    const G = [
        'includes',
        'value',
        'whatsapp',
        '1879828XPqZAM',
        'default',
        'userId',
        'ticketId',
        'howContact',
        'erty',
        'isActiveDe',
        '$create',
        'iAdDY',
        '67995KBZyiW',
        'contactId',
        'status',
        './CreateLo',
        'type',
        'instagram',
        '338622wdDDIa',
        '../../help',
        'ICBJz',
        '70CeHgIE',
        'ticket',
        'ontactOpen',
        'Services/S',
        'channel',
        'vice',
        'ticket:upd',
        '../../erro',
        'ERR_CREATI',
        'payload',
        './ShowTick',
        'Tickets',
        'mand',
        '3kzajGv',
        'oFhCj',
        'cIeph',
        'ers/socket',
        'emfEY',
        '__esModule',
        '201927fNGUPg',
        'gTicketSer',
        '108lORgvG',
        'ate',
        'etService',
        'defineProp',
        '5615120UyQtlW',
        'aultWhatsA',
        'fault',
        'NG_TICKET',
        'UkqYf',
        'tenantId',
        'Service',
        '__importDe',
        '../Contact',
        'rs/AppErro',
        'kIXeY',
        'ers/CheckC',
        '1603KtqfMv',
        'Emit',
        '416BkNJjf',
        '796fZJDMt',
        'isGroup',
        'telegram',
        'create',
        'ers/GetDef',
        '4369845yQNBIs'
    ];
    a = function () {
        return G;
    };
    return a();
}
const AppError_1 = __importDefault(require(B(0x160) + C(0x17b) + 'r')), CheckContactOpenTickets_1 = __importDefault(require(C(0x157) + C(0x17d) + C(0x15b) + C(0x164))), GetDefaultWhatsApp_1 = __importDefault(require(C(0x157) + C(0x185) + B(0x173) + 'pp')), socketEmit_1 = __importDefault(require(B(0x157) + B(0x169) + C(0x17f))), ShowContactService_1 = __importDefault(require(B(0x17a) + B(0x15c) + B(0x18e) + B(0x178))), CreateLogTicketService_1 = __importDefault(require(B(0x153) + C(0x16d) + C(0x15e))), ShowTicketService_1 = __importDefault(require(C(0x163) + B(0x170))), CreateTicketService = async ({
        contactId: i,
        status: j,
        userId: l,
        tenantId: m,
        channel: n,
        channelId: channelId = undefined
    }) => {
        const E = B, F = C, o = {};
        o[E(0x17c)] = F(0x155), o[F(0x176)] = F(0x183), o[E(0x167)] = E(0x189), o[F(0x14f)] = E(0x161) + F(0x175), o[F(0x158)] = E(0x15a), o[F(0x16a)] = E(0x184), o[F(0x168)] = E(0x15f) + E(0x16f);
        const p = o, q = await (0x1 * 0x1488 + 0x4cb + -0x1953, GetDefaultWhatsApp_1[E(0x18b)])(m, channelId);
        if (!n || ![
                p[E(0x17c)],
                p[E(0x176)],
                p[E(0x167)]
            ][E(0x187)](n))
            throw new AppError_1[(E(0x18b))](p[F(0x14f)]);
        await (0xd2e + -0x1 * -0xc3d + -0x196b, CheckContactOpenTickets_1[F(0x18b)])(i);
        const r = {};
        r['id'] = i, r[E(0x177)] = m;
        const {isGroup: s} = await (0x1506 + 0xfd6 + 0x1 * -0x24dc, ShowContactService_1[F(0x18b)])(r), t = {};
        t[F(0x151)] = i, t[F(0x152)] = j, t[E(0x182)] = s, t[E(0x18c)] = l, t[F(0x14d) + E(0x165)] = !![], t[E(0x15d)] = n, t[E(0x177)] = m;
        const {id: u} = await q[F(0x14e)](p[E(0x158)], t), v = {};
        v['id'] = u, v[E(0x177)] = m;
        const w = await (-0x1527 + 0xe3a + 0x6ed, ShowTicketService_1[F(0x18b)])(v);
        if (!w)
            throw new AppError_1[(E(0x18b))](p[F(0x14f)]);
        const x = {};
        x[E(0x18c)] = l, x[E(0x18d)] = w['id'], x[E(0x154)] = p[E(0x16a)], await (-0x1307 + 0x523 + 0xde4, CreateLogTicketService_1[F(0x18b)])(x);
        const y = {};
        return y[F(0x177)] = m, y[E(0x154)] = p[E(0x168)], y[F(0x162)] = w, (-0x8cb * 0x1 + -0x1614 + 0x1edf, socketEmit_1[F(0x18b)])(y), w;
    };
exports[B(0x18b)] = CreateTicketService;