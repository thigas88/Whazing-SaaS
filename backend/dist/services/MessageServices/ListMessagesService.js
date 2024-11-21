'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0xbc)) / (-0xde7 * -0x2 + 0x132f * -0x1 + -0x89e * 0x1) * (parseInt(C(0xc4)) / (0xe61 + 0x13b * 0xf + 0x2c * -0xbf)) + -parseInt(C(0xbf)) / (0x26eb + -0x72f + -0x1fb9) + parseInt(C(0xb6)) / (-0xa * -0x2da + 0x74e + -0x23ce) * (parseInt(C(0xdc)) / (-0x2 * 0x1066 + 0x493 * 0x8 + 0x1 * -0x3c7)) + -parseInt(C(0xc8)) / (-0x2f4 + 0x2ba * 0x2 + 0x2 * -0x13d) * (parseInt(B(0xd3)) / (-0x1 * -0xa39 + -0xc77 + -0x1 * -0x245)) + parseInt(C(0xaa)) / (0x1 * -0x1225 + 0x82 + 0x1 * 0x11ab) * (parseInt(B(0xd7)) / (0x1 * -0x2375 + 0xa * -0x227 + 0x3904)) + parseInt(C(0xcd)) / (0x1c27 * -0x1 + 0x2549 * 0x1 + -0x918) * (-parseInt(C(0xad)) / (0xe5 * 0xd + -0x1 * 0xd35 + 0x19f)) + parseInt(C(0xce)) / (0x383 * -0x6 + 0xc1 * 0x1f + -0x241) * (parseInt(C(0xc5)) / (-0x5aa + -0x3d0 + 0x987));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x14fad4 + -0xabf5 * 0x1d + 0x29b55 * 0x14));
var __importDefault = this && this[D(0xcb) + E(0xb4)] || function (c) {
    const F = E;
    return c && c[F(0xc6)] ? c : { 'default': c };
};
const k = {};
k[D(0xca)] = !![], Object[D(0xe2) + D(0xab)](exports, D(0xc6), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xc * -0xa3 + -0x2359 * -0x1 + -0x2 * 0xd86);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(D(0xaf) + D(0xb9) + 'r')), Message_1 = __importDefault(require(D(0xda) + D(0xb2))), MessageOffLine_1 = __importDefault(require(E(0xda) + D(0xb2) + D(0xdd))), Ticket_1 = __importDefault(require(E(0xda) + D(0xc1))), ShowTicketService_1 = __importDefault(require(E(0xa9) + E(0xc0) + E(0xe0) + D(0xcc))), ListMessagesService = async ({
        pageNumber: pageNumber = '1',
        ticketId: i,
        tenantId: j
    }) => {
        const G = D, H = E, l = {};
        l[G(0xdf)] = H(0xd2) + G(0xc7), l[H(0xb0)] = function (z, A) {
            return z * A;
        }, l[H(0xe3)] = function (z, A) {
            return z - A;
        }, l[H(0xac)] = G(0xe1), l[G(0xbd)] = H(0xb7), l[H(0xbe)] = H(0xb5), l[H(0xd4)] = H(0xb3), l[H(0xdb)] = function (z, A) {
            return z === A;
        }, l[H(0xae)] = function (z, A) {
            return z > A;
        }, l[G(0xcf)] = function (z, A) {
            return z + A;
        };
        const m = l, n = {};
        n['id'] = i, n[H(0xde)] = j;
        const o = await (0x249b + -0x4f5 + -0x1fa6 * 0x1, ShowTicketService_1[G(0xd5)])(n);
        if (!o)
            throw new AppError_1[(H(0xd5))](m[H(0xdf)], 0x1aee + -0x5b7 * 0x3 + 0xb * -0xbf);
        const p = -0xb26 * -0x2 + 0x197f + -0x2fad * 0x1, q = m[H(0xb0)](p, m[G(0xe3)](+pageNumber, -0x4c6 * -0x3 + -0x1e4f + 0xffe)), r = {};
        r[H(0xb8)] = o[G(0xb8)], r[G(0xc3)] = o[G(0xc3)], r[H(0xd1)] = o[G(0xd1)], r['id'] = o['id'];
        const s = {};
        s[G(0xb1)] = Ticket_1[G(0xd5)], s[H(0xd8)] = r, s[H(0xe4)] = !![];
        const {
            count: t,
            rows: u
        } = await Message_1[G(0xd5)][H(0xd9) + H(0xbb)]({
            'limit': p,
            'include': [
                m[H(0xac)],
                {
                    'model': Message_1[H(0xd5)],
                    'as': m[G(0xbd)],
                    'include': [m[H(0xac)]]
                },
                s
            ],
            'offset': q,
            'order': [[
                    m[G(0xbe)],
                    m[H(0xd4)]
                ]]
        });
        let v = [];
        if (m[G(0xdb)](+pageNumber, 0x1 * -0x12bd + 0x1f * 0x7a + 0x3f8)) {
            const x = {};
            x[G(0xba)] = i;
            const y = {};
            y[H(0xd8)] = x, y[G(0xd0)] = [
                m[G(0xac)],
                {
                    'model': Message_1[H(0xd5)],
                    'as': m[H(0xbd)],
                    'include': [m[G(0xac)]]
                }
            ], y[H(0xc2)] = [[
                    m[H(0xbe)],
                    m[G(0xd4)]
                ]];
            const {rows: z} = await MessageOffLine_1[G(0xd5)][G(0xd9) + H(0xbb)](y);
            v = z;
        }
        const w = m[H(0xae)](t, m[G(0xcf)](q, u[H(0xd6)]));
        return {
            'messages': u[H(0xc9)](),
            'messagesOffLine': v,
            'ticket': o,
            'count': t,
            'hasMore': w
        };
    };
exports[D(0xd5)] = ListMessagesService;
function a() {
    const I = [
        '../../mode',
        'mTRNw',
        '62120SUaWkd',
        'OffLine',
        'tenantId',
        'SLana',
        'owTicketSe',
        'contact',
        'defineProp',
        'nYODa',
        'required',
        '../TicketS',
        '151336kGCENc',
        'erty',
        'nIKQy',
        '24893cwYLfc',
        'qEhcn',
        '../../erro',
        'HnDcs',
        'model',
        'ls/Message',
        'DESC',
        'fault',
        'createdAt',
        '36YmFkFz',
        'quotedMsg',
        'queueId',
        'rs/AppErro',
        'ticketId',
        'ntAll',
        '5DjYcmW',
        'CzGre',
        'KHbPO',
        '2892492rIbOCL',
        'ervices/Sh',
        'ls/Ticket',
        'order',
        'contactId',
        '20248ctvGHN',
        '3612856rZDOlG',
        '__esModule',
        'KET_FOUND',
        '3941394iBsDPE',
        'reverse',
        'value',
        '__importDe',
        'rvice',
        '5630RsUyLo',
        '156ualbDI',
        'oezCm',
        'include',
        'whatsappId',
        'ERR_NO_TIC',
        '14xQDRaV',
        'hADFs',
        'default',
        'length',
        '306IolyRs',
        'where',
        'findAndCou'
    ];
    a = function () {
        return I;
    };
    return a();
}