'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1f6a * 0x1 + -0xc0e + -0x12ac);
        let h = e[f];
        return h;
    }, b(c, d);
}
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0xe9)) / (-0xfde + -0x18a * 0x7 + 0x1aa5) * (-parseInt(C(0xde)) / (0x1 * 0xa49 + -0x17f + -0x8c8)) + parseInt(C(0xc2)) / (-0x236b + -0x2b4 * -0x2 + 0x1e06) + parseInt(C(0xb8)) / (-0x79e + -0x2063 + -0x3 * -0xd57) + -parseInt(B(0xdb)) / (-0x1655 * 0x1 + 0xe4e * 0x1 + 0xce * 0xa) * (parseInt(B(0xcf)) / (-0x137d + -0x12be + 0x2641)) + parseInt(B(0xe8)) / (0x2a + -0x872 + -0x3 * -0x2c5) * (-parseInt(B(0xe3)) / (0x963 + -0x188 + 0x7d3 * -0x1)) + -parseInt(B(0xd7)) / (0xa78 + -0x1 * 0x24a + -0x825) + parseInt(B(0xdf)) / (0x3 * -0xadf + -0x50f * -0x5 + 0x75c) * (parseInt(C(0xb3)) / (0x1327 + -0x183 * -0xe + -0x2 * 0x1423));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x160f32 + -0x1 * 0xe4ebc + 0x1 * 0x5999d));
function a() {
    const I = [
        'defineProp',
        '4865HzhrsA',
        'TalWX',
        'ls/Ticket',
        '11046bDkmxr',
        '1057590dcnssC',
        'BvgEq',
        'sKFGJ',
        'ervices/Sh',
        '3546832MWaTka',
        'ls/Message',
        'contact',
        'EQRFH',
        'VtKzJ',
        '21OFgBMR',
        '158VrAamf',
        'length',
        '__esModule',
        'default',
        '209qOrZAd',
        'createdAt',
        'tenantId',
        'mKTBc',
        'ERR_NO_TIC',
        '144904TDWzip',
        'quotedMsg',
        'required',
        'aIKjh',
        'model',
        'DESC',
        '../TicketS',
        'include',
        'rs/AppErro',
        'reverse',
        '1985559KmiCDZ',
        'where',
        'rvice',
        'findAndCou',
        'fault',
        'queueId',
        '../../mode',
        'OffLine',
        'owTicketSe',
        'tPSOZ',
        '__importDe',
        '../../erro',
        'erty',
        '3570HJUvZY',
        'ntAll',
        'whatsappId',
        'order',
        'contactId',
        'SIKSu',
        'KET_FOUND',
        'uPsCJ',
        '7164990OaSLSa',
        'ticketId',
        'value'
    ];
    a = function () {
        return I;
    };
    return a();
}
var __importDefault = this && this[D(0xcc) + D(0xc6)] || function (c) {
    const F = D;
    return c && c[F(0xb1)] ? c : { 'default': c };
};
const k = {};
k[E(0xd9)] = !![], Object[D(0xda) + D(0xce)](exports, E(0xb1), k);
const AppError_1 = __importDefault(require(D(0xcd) + D(0xc0) + 'r')), Message_1 = __importDefault(require(E(0xc8) + E(0xe4))), MessageOffLine_1 = __importDefault(require(D(0xc8) + D(0xe4) + D(0xc9))), Ticket_1 = __importDefault(require(D(0xc8) + E(0xdd))), ShowTicketService_1 = __importDefault(require(D(0xbe) + E(0xe2) + E(0xca) + E(0xc4))), ListMessagesService = async ({
        pageNumber: pageNumber = '1',
        ticketId: i,
        tenantId: j
    }) => {
        const G = E, H = E, l = {};
        l[G(0xe0)] = H(0xb7) + G(0xd5), l[H(0xe1)] = function (z, A) {
            return z * A;
        }, l[H(0xe6)] = function (z, A) {
            return z - A;
        }, l[H(0xb6)] = G(0xe5), l[G(0xdc)] = G(0xb9), l[H(0xe7)] = H(0xb4), l[G(0xd4)] = H(0xbd), l[H(0xbb)] = function (z, A) {
            return z === A;
        }, l[G(0xd6)] = function (z, A) {
            return z > A;
        }, l[H(0xcb)] = function (z, A) {
            return z + A;
        };
        const m = l, n = {};
        n['id'] = i, n[H(0xb5)] = j;
        const o = await (-0xd9a + -0x851 + 0x15eb, ShowTicketService_1[H(0xb2)])(n);
        if (!o)
            throw new AppError_1[(H(0xb2))](m[H(0xe0)], -0x8b7 * -0x1 + 0x256b * 0x1 + -0x2c8e);
        const p = 0x2 * 0x12a + 0x1116 + 0x4c * -0x41, q = m[G(0xe1)](p, m[G(0xe6)](+pageNumber, -0x1 * -0x515 + 0xbd4 + 0x4 * -0x43a)), r = {};
        r[H(0xc7)] = o[G(0xc7)], r[G(0xd3)] = o[G(0xd3)], r[G(0xd1)] = o[H(0xd1)], r['id'] = o['id'];
        const s = {};
        s[H(0xbc)] = Ticket_1[H(0xb2)], s[H(0xc3)] = r, s[H(0xba)] = !![];
        const {
            count: t,
            rows: u
        } = await Message_1[G(0xb2)][H(0xc5) + H(0xd0)]({
            'limit': p,
            'include': [
                m[G(0xb6)],
                {
                    'model': Message_1[H(0xb2)],
                    'as': m[G(0xdc)],
                    'include': [m[H(0xb6)]]
                },
                s
            ],
            'offset': q,
            'order': [[
                    m[G(0xe7)],
                    m[G(0xd4)]
                ]]
        });
        let v = [];
        if (m[H(0xbb)](+pageNumber, 0x13ec + 0x1fe5 + -0x67a * 0x8)) {
            const x = {};
            x[G(0xd8)] = i;
            const y = {};
            y[G(0xc3)] = x, y[H(0xbf)] = [
                m[G(0xb6)],
                {
                    'model': Message_1[G(0xb2)],
                    'as': m[H(0xdc)],
                    'include': [m[G(0xb6)]]
                }
            ], y[G(0xd2)] = [[
                    m[H(0xe7)],
                    m[G(0xd4)]
                ]];
            const {rows: z} = await MessageOffLine_1[G(0xb2)][H(0xc5) + H(0xd0)](y);
            v = z;
        }
        const w = m[H(0xd6)](t, m[H(0xcb)](q, u[G(0xb0)]));
        return {
            'messages': u[H(0xc1)](),
            'messagesOffLine': v,
            'ticket': o,
            'count': t,
            'hasMore': w
        };
    };
exports[D(0xb2)] = ListMessagesService;