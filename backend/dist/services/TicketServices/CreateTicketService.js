'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0x111)) / (-0x2218 + 0xa8c + 0x178d) * (parseInt(A(0x105)) / (-0x1bb * -0x16 + 0x1 * -0x2411 + -0x1ff)) + -parseInt(z(0x10e)) / (0x1615 + -0x84f + -0xdc3) + parseInt(A(0xed)) / (0x1202 + -0x1308 + 0x10a) + -parseInt(A(0x11e)) / (0x7ab * -0x1 + -0x7ce + 0xf7e) + -parseInt(z(0xfa)) / (-0x1b46 * 0x1 + 0x66b + 0x14e1) + parseInt(z(0x124)) / (-0x1c3 * 0x6 + -0xa28 + 0x4d * 0x45) * (parseInt(z(0x106)) / (-0x1402 + 0x366 + 0x10a4)) + -parseInt(z(0xf3)) / (-0x1 * 0x233f + -0x667 + 0x29af) * (-parseInt(z(0x114)) / (0x1302 + 0x2 * -0x1271 + -0x8f5 * -0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x68c * -0x9 + -0x3055e + 0x4ff6b));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x12ec + -0x27d * 0xd + 0x2 * 0x729);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[B(0xe9) + B(0xef)] || function (c) {
    const D = B;
    return c && c[D(0x109)] ? c : { 'default': c };
};
const k = {};
k[B(0x10a)] = !![], Object[B(0x100) + B(0x112)](exports, C(0x109), k);
const AppError_1 = __importDefault(require(C(0x119) + B(0xea) + 'r')), CheckContactOpenTickets_1 = __importDefault(require(C(0x104) + B(0xfb) + B(0xe5) + B(0x107))), GetDefaultWhatsApp_1 = __importDefault(require(B(0x104) + C(0xe8) + B(0x102) + 'pp')), socketEmit_1 = __importDefault(require(B(0x104) + C(0x11b) + B(0xee))), ShowContactService_1 = __importDefault(require(B(0xfe) + C(0xf4) + C(0x117) + B(0xe6))), CreateLogTicketService_1 = __importDefault(require(C(0xf5) + B(0x10c) + B(0xe7))), ShowTicketService_1 = __importDefault(require(C(0xf7) + B(0x108))), CreateTicketService = async ({
        contactId: i,
        status: j,
        userId: l,
        tenantId: m,
        channel: n,
        channelId: channelId = undefined
    }) => {
        const E = B, F = C, o = {};
        o[E(0x10f)] = E(0xfd), o[F(0x110)] = E(0xf0), o[E(0x103)] = E(0x115), o[F(0xf8)] = F(0x10d) + E(0x122), o[E(0x113)] = F(0xff), o[F(0x10b)] = E(0xf6), o[E(0xec)] = E(0x11a) + F(0x121);
        const p = o, q = await (-0xbd3 + -0x1a78 + -0x264b * -0x1, GetDefaultWhatsApp_1[E(0xf1)])(m, channelId);
        if (!n || ![
                p[E(0x10f)],
                p[E(0x110)],
                p[F(0x103)]
            ][E(0x11d)](n))
            throw new AppError_1[(E(0xf1))](p[E(0xf8)]);
        await (-0x135 + -0x3 * -0xa1f + -0x1d28, CheckContactOpenTickets_1[F(0xf1)])(i);
        const r = {};
        r['id'] = i, r[E(0x101)] = m;
        const {isGroup: s} = await (-0x2158 + -0x1b78 + 0x3cd0, ShowContactService_1[F(0xf1)])(r), t = {};
        t[E(0x118)] = i, t[E(0x11f)] = j, t[E(0x125)] = s, t[F(0xf2)] = l, t[E(0x123) + E(0x120)] = !![], t[F(0x116)] = n, t[E(0x101)] = m;
        const {id: u} = await q[E(0xeb)](p[E(0x113)], t), v = {};
        v['id'] = u, v[F(0x101)] = m;
        const w = await (0x17f7 + -0x3 * 0x4da + -0x969, ShowTicketService_1[E(0xf1)])(v);
        if (!w)
            throw new AppError_1[(F(0xf1))](p[F(0xf8)]);
        const x = {};
        x[E(0xf2)] = l, x[E(0xfc)] = w['id'], x[E(0xf9)] = p[F(0x10b)], await (-0xfb8 + 0x181b + -0x863, CreateLogTicketService_1[F(0xf1)])(x);
        const y = {};
        return y[F(0x101)] = m, y[F(0xf9)] = p[F(0xec)], y[E(0x11c)] = w, (-0xbd0 + 0x1 * -0x15cf + 0x1 * 0x219f, socketEmit_1[F(0xf1)])(y), w;
    };
function a() {
    const G = [
        'tenantId',
        'aultWhatsA',
        'NQLIb',
        '../../help',
        '264738oAdyuS',
        '149024BKyrFA',
        'Tickets',
        'etService',
        '__esModule',
        'value',
        'xRlyE',
        'gTicketSer',
        'ERR_CREATI',
        '304668Oeofui',
        'BZadQ',
        'IVXvk',
        '1MjSadm',
        'erty',
        'vSKna',
        '880kLvOaH',
        'whatsapp',
        'channel',
        'howContact',
        'contactId',
        '../../erro',
        'ticket:upd',
        'ers/socket',
        'payload',
        'includes',
        '614190pPVriD',
        'status',
        'mand',
        'ate',
        'NG_TICKET',
        'isActiveDe',
        '28uJOwxT',
        'isGroup',
        'ontactOpen',
        'Service',
        'vice',
        'ers/GetDef',
        '__importDe',
        'rs/AppErro',
        '$create',
        'kBkCu',
        '213256gTNcbQ',
        'Emit',
        'fault',
        'telegram',
        'default',
        'userId',
        '44064SndWOZ',
        'Services/S',
        './CreateLo',
        'create',
        './ShowTick',
        'WCDQU',
        'type',
        '524676vZeqro',
        'ers/CheckC',
        'ticketId',
        'instagram',
        '../Contact',
        'ticket',
        'defineProp'
    ];
    a = function () {
        return G;
    };
    return a();
}
exports[C(0xf1)] = CreateTicketService;