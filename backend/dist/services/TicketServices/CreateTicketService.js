'use strict';
const B = b, C = b;
function a() {
    const G = [
        'Emit',
        'aultWhatsA',
        'tenantId',
        '2cvAOQq',
        'zGVVj',
        'ers/CheckC',
        'default',
        'gTicketSer',
        'contactId',
        '1376890CBqMIC',
        './CreateLo',
        'type',
        '1857834FhGNib',
        '5315rWhQms',
        '3815361joSTum',
        'ERR_CREATI',
        '../../help',
        'ticket:upd',
        'Service',
        'ers/socket',
        'erty',
        '../../erro',
        'rs/AppErro',
        'vice',
        'fault',
        'isGroup',
        'ticket',
        '49112lBcDAu',
        'isActiveDe',
        'csmEw',
        '__esModule',
        '2089424xkmqIu',
        'etService',
        'status',
        './ShowTick',
        'ticketId',
        'payload',
        'ate',
        'channel',
        '../Contact',
        'NG_TICKET',
        '131799obKwlI',
        'howContact',
        '5pvXuKD',
        'value',
        'create',
        'ers/GetDef',
        'ontactOpen',
        'whatsapp',
        '497rQQerZ',
        'userId',
        'instagram',
        '$create',
        'CHkza',
        '__importDe',
        '22xybfpo',
        'includes',
        'ZFHYj',
        'mand',
        'GTGjG',
        'Tickets',
        'aNkKj',
        'ReJmG',
        'telegram',
        'defineProp',
        'Services/S'
    ];
    a = function () {
        return G;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x15c7 * 0x1 + -0x76 * 0x52 + -0x1 * -0x11f7);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0x22f)) / (-0x92f * -0x4 + -0x222c + 0x83 * -0x5) * (-parseInt(A(0x225)) / (-0xa6 * 0x19 + 0x1787 + -0x1 * 0x74f)) + parseInt(A(0x209)) / (-0x19fd + -0x1 * 0xc21 + -0x2b * -0xe3) + parseInt(z(0x1ff)) / (-0x241 * -0x9 + -0x3d * -0x29 + -0x1e0a) + parseInt(z(0x20b)) / (-0x39 * 0x2 + -0x3ec + 0x463 * 0x1) * (parseInt(z(0x22e)) / (0x1964 + -0x547 * 0x2 + 0xed0 * -0x1)) + parseInt(z(0x211)) / (-0x1af1 + -0x3fd + 0x1ef5) * (-parseInt(z(0x1fb)) / (0x16f0 + -0x114 + -0x15d4)) + -parseInt(A(0x230)) / (-0x10df + -0x17 * -0x11c + -0x89c) + -parseInt(z(0x22b)) / (0x8 * -0x282 + -0xf3 + 0x150d) * (-parseInt(z(0x217)) / (0x51f + -0x5ad + 0x33 * 0x3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x84c62 + -0x3ecd3 + 0x10c0ac));
var __importDefault = this && this[B(0x216) + B(0x1f8)] || function (c) {
    const D = B;
    return c && c[D(0x1fe)] ? c : { 'default': c };
};
const k = {};
k[C(0x20c)] = !![], Object[B(0x220) + B(0x1f4)](exports, C(0x1fe), k);
const AppError_1 = __importDefault(require(B(0x1f5) + B(0x1f6) + 'r')), CheckContactOpenTickets_1 = __importDefault(require(B(0x232) + C(0x227) + C(0x20f) + B(0x21c))), GetDefaultWhatsApp_1 = __importDefault(require(C(0x232) + C(0x20e) + B(0x223) + 'pp')), socketEmit_1 = __importDefault(require(C(0x232) + B(0x1f3) + C(0x222))), ShowContactService_1 = __importDefault(require(C(0x207) + C(0x221) + C(0x20a) + B(0x1f2))), CreateLogTicketService_1 = __importDefault(require(B(0x22c) + B(0x229) + C(0x1f7))), ShowTicketService_1 = __importDefault(require(B(0x202) + B(0x200))), CreateTicketService = async ({
        contactId: i,
        status: j,
        userId: l,
        tenantId: m,
        channel: n,
        channelId: channelId = undefined
    }) => {
        const E = B, F = C, o = {};
        o[E(0x21d)] = F(0x213), o[E(0x215)] = E(0x21f), o[E(0x1fd)] = E(0x210), o[F(0x21e)] = E(0x231) + F(0x208), o[E(0x21b)] = F(0x1fa), o[E(0x219)] = E(0x20d), o[E(0x226)] = E(0x233) + F(0x205);
        const p = o, q = await (-0x1960 + 0x16ad + 0x1 * 0x2b3, GetDefaultWhatsApp_1[F(0x228)])(m, channelId);
        if (!n || ![
                p[F(0x21d)],
                p[E(0x215)],
                p[F(0x1fd)]
            ][F(0x218)](n))
            throw new AppError_1[(F(0x228))](p[E(0x21e)]);
        await (0xbc7 + -0x12d6 * -0x1 + -0x1e9d, CheckContactOpenTickets_1[F(0x228)])(i);
        const r = {};
        r['id'] = i, r[E(0x224)] = m;
        const {isGroup: s} = await (0xc7f + 0x12cf + -0x1f4e, ShowContactService_1[F(0x228)])(r), t = {};
        t[F(0x22a)] = i, t[E(0x201)] = j, t[E(0x1f9)] = s, t[E(0x212)] = l, t[E(0x1fc) + E(0x21a)] = !![], t[E(0x206)] = n, t[F(0x224)] = m;
        const {id: u} = await q[E(0x214)](p[E(0x21b)], t), v = {};
        v['id'] = u, v[F(0x224)] = m;
        const w = await (0x19 * 0x158 + -0x56f * -0x6 + -0x4232, ShowTicketService_1[F(0x228)])(v);
        if (!w)
            throw new AppError_1[(F(0x228))](p[E(0x21e)]);
        const x = {};
        x[E(0x212)] = l, x[F(0x203)] = w['id'], x[E(0x22d)] = p[E(0x219)], await (-0x1 * 0xf5b + -0x96b * -0x2 + 0x21 * -0x1b, CreateLogTicketService_1[E(0x228)])(x);
        const y = {};
        return y[E(0x224)] = m, y[E(0x22d)] = p[E(0x226)], y[E(0x204)] = w, (-0xe * 0x22d + -0x1370 * -0x1 + 0xb06, socketEmit_1[E(0x228)])(y), w;
    };
exports[C(0x228)] = CreateTicketService;