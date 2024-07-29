'use strict';
const B = b, C = b;
function a() {
    const G = [
        'isActiveDe',
        'includes',
        '1520JDwQpw',
        '839848YiFONI',
        'eKmLu',
        'ticket',
        'default',
        'channel',
        'payload',
        '264qbEonR',
        'NG_TICKET',
        '18YgFcnl',
        'cYNLZ',
        '63978WzGliD',
        'Emit',
        'aultWhatsA',
        './CreateLo',
        'etService',
        '55OpPdjl',
        'ate',
        'UjLqu',
        'ers/GetDef',
        'contactId',
        '__importDe',
        '112156RQIyYS',
        'Tickets',
        'vieyQ',
        '$create',
        'Services/S',
        'YiFzF',
        'howContact',
        'type',
        'rs/AppErro',
        'ers/socket',
        'ontactOpen',
        '876106PsXsaV',
        'erty',
        'ERR_CREATI',
        'ticket:upd',
        '../../help',
        'fault',
        '605790bVCLtw',
        'whatsapp',
        '351708FBaArr',
        'Service',
        'status',
        '44usOjII',
        './ShowTick',
        'isGroup',
        '../../erro',
        'yZdHg',
        'gTicketSer',
        'defineProp',
        'VEldy',
        '../Contact',
        'userId',
        'create',
        'vice',
        '__esModule',
        'telegram',
        'ticketId',
        'ers/CheckC',
        'mand',
        'tenantId',
        'value',
        'instagram'
    ];
    a = function () {
        return G;
    };
    return a();
}
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x129)) / (-0x21a * 0xf + -0x1 * 0x42a + -0x23b1 * -0x1) + parseInt(A(0x113)) / (-0x3 * 0xa22 + -0x2221 * -0x1 + -0x1 * 0x3b9) * (-parseInt(A(0x11a)) / (0x535 + -0x1 * 0x2c2 + -0x270)) + -parseInt(z(0x13c)) / (0x4ca * -0x7 + -0x6e1 + 0x286b) + -parseInt(A(0x123)) / (-0x6d * -0x41 + 0x29c + -0x1e44) * (parseInt(z(0x11e)) / (-0x1b8 + -0x3a8 * -0x8 + 0x2 * -0xdc1)) + -parseInt(z(0x134)) / (0x9 * 0x193 + -0x8b8 + 0x2 * -0x2b6) + -parseInt(z(0x114)) / (0x73 * 0x35 + 0x26f1 + -0x3eb8) * (-parseInt(A(0x11c)) / (-0x2254 + -0x1273 * -0x1 + 0xfea)) + -parseInt(A(0x13a)) / (0x36d * -0x5 + 0x20b9 * 0x1 + 0xb5 * -0x16) * (-parseInt(A(0x13f)) / (-0x637 * -0x2 + 0x244a + -0x11 * 0x2dd));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xbd94 + -0x1 * -0x1d51b + -0x1 * -0x17581));
var __importDefault = this && this[B(0x128) + B(0x139)] || function (c) {
    const D = B;
    return c && c[D(0x109)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1b71 + -0x1fe6 + -0x4a * -0x13);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[C(0x10f)] = !![], Object[C(0x145) + C(0x135)](exports, B(0x109), k);
const AppError_1 = __importDefault(require(C(0x142) + C(0x131) + 'r')), CheckContactOpenTickets_1 = __importDefault(require(C(0x138) + B(0x10c) + B(0x133) + C(0x12a))), GetDefaultWhatsApp_1 = __importDefault(require(B(0x138) + B(0x126) + C(0x120) + 'pp')), socketEmit_1 = __importDefault(require(B(0x138) + C(0x132) + B(0x11f))), ShowContactService_1 = __importDefault(require(B(0x147) + B(0x12d) + C(0x12f) + B(0x13d))), CreateLogTicketService_1 = __importDefault(require(B(0x121) + B(0x144) + B(0x14a))), ShowTicketService_1 = __importDefault(require(C(0x140) + B(0x122))), CreateTicketService = async ({
        contactId: i,
        status: j,
        userId: l,
        tenantId: m,
        channel: n,
        channelId: channelId = undefined
    }) => {
        const E = B, F = B, o = {};
        o[E(0x11d)] = E(0x110), o[F(0x12e)] = E(0x10a), o[E(0x125)] = E(0x13b), o[F(0x115)] = F(0x136) + E(0x11b), o[F(0x12b)] = E(0x116), o[E(0x146)] = E(0x149), o[E(0x143)] = F(0x137) + F(0x124);
        const p = o, q = await (0x10ca * 0x1 + -0x1084 + 0x5 * -0xe, GetDefaultWhatsApp_1[F(0x117)])(m, channelId);
        if (!n || ![
                p[E(0x11d)],
                p[E(0x12e)],
                p[F(0x125)]
            ][E(0x112)](n))
            throw new AppError_1[(F(0x117))](p[F(0x115)]);
        await (-0x2045 + 0xcb5 + 0x1390, CheckContactOpenTickets_1[F(0x117)])(i);
        const r = {};
        r['id'] = i, r[E(0x10e)] = m;
        const {isGroup: s} = await (0x1 * 0x18d1 + 0x1907 + -0x31d8, ShowContactService_1[F(0x117)])(r), t = {};
        t[E(0x127)] = i, t[F(0x13e)] = j, t[F(0x141)] = s, t[E(0x148)] = l, t[F(0x111) + E(0x10d)] = !![], t[E(0x118)] = n, t[E(0x10e)] = m;
        const {id: u} = await q[F(0x12c)](p[F(0x12b)], t), v = {};
        v['id'] = u, v[F(0x10e)] = m;
        const w = await (0x101 * 0x9 + -0x19c7 + 0x10be, ShowTicketService_1[E(0x117)])(v);
        if (!w)
            throw new AppError_1[(E(0x117))](p[E(0x115)]);
        const x = {};
        x[E(0x148)] = l, x[F(0x10b)] = w['id'], x[F(0x130)] = p[F(0x146)], await (-0x2 * -0x25f + 0x22f9 + -0x27b7, CreateLogTicketService_1[F(0x117)])(x);
        const y = {};
        return y[E(0x10e)] = m, y[F(0x130)] = p[E(0x143)], y[E(0x119)] = w, (-0x25f2 + 0x2ec + 0x2306, socketEmit_1[E(0x117)])(y), w;
    };
exports[C(0x117)] = CreateTicketService;