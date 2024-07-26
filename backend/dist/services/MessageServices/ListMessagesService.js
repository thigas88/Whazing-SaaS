'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(B(0x10a)) / (-0x422 * -0x6 + -0x178f + 0x13c * -0x1) + parseInt(C(0xe9)) / (-0x260d + 0x1da5 + -0x1 * -0x86a) * (parseInt(C(0xdf)) / (0x1682 + 0xe7d * 0x1 + -0x24fc)) + -parseInt(C(0xeb)) / (-0x2e * -0x29 + -0x11 * 0x232 + 0x1df8) + -parseInt(B(0xf3)) / (-0x15f6 + 0x15b5 + -0x1 * -0x46) * (parseInt(C(0x10b)) / (0xa70 + -0x11a8 + 0x73e)) + parseInt(B(0xfb)) / (0x1231 + 0x1ed4 + 0x187f * -0x2) * (parseInt(B(0x107)) / (0xdd * -0x11 + 0xa * -0x1e7 + 0x311 * 0xb)) + parseInt(C(0x103)) / (0x268b * 0x1 + 0x154 + -0x13eb * 0x2) + -parseInt(B(0x10e)) / (-0x1 * -0x1ac1 + 0xd48 + -0x27ff);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x16364f + 0x142fa5 + -0x1d2d60));
var __importDefault = this && this[D(0x10d) + D(0xf1)] || function (c) {
    const F = D;
    return c && c[F(0xf5)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x105a + 0xd46 + -0x5c1 * 0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[E(0xf0)] = !![], Object[D(0xe6) + E(0x104)](exports, E(0xf5), k);
function a() {
    const I = [
        '9925722ihDDtV',
        'erty',
        'whatsappId',
        '../../mode',
        '136CyMhlw',
        'queueId',
        'order',
        '465731hkaSmV',
        '5448iTPfxo',
        'ERR_NO_TIC',
        '__importDe',
        '8485550hLfhhh',
        'required',
        'lPjVg',
        'ls/Message',
        'hgLot',
        'DESC',
        'createdAt',
        'OffLine',
        'TiDrb',
        'findAndCou',
        '4983lbTKQZ',
        '../../erro',
        'KET_FOUND',
        'zTWMC',
        'GLMJu',
        'qESur',
        'contact',
        'defineProp',
        'ls/Ticket',
        'clcng',
        '1774PNIijX',
        'contactId',
        '1594496XMtnVv',
        'model',
        'where',
        'length',
        'ntAll',
        'value',
        'fault',
        'tenantId',
        '6215RWxZkf',
        'inaIi',
        '__esModule',
        'NhGCe',
        'reverse',
        'rs/AppErro',
        'ervices/Sh',
        'include',
        '82509lEKwYG',
        'ticketId',
        '../TicketS',
        'Jjrla',
        'rvice',
        'quotedMsg',
        'owTicketSe',
        'default'
    ];
    a = function () {
        return I;
    };
    return a();
}
const AppError_1 = __importDefault(require(D(0xe0) + E(0xf8) + 'r')), Message_1 = __importDefault(require(E(0x106) + E(0x111))), MessageOffLine_1 = __importDefault(require(E(0x106) + E(0x111) + E(0xdc))), Ticket_1 = __importDefault(require(D(0x106) + E(0xe7))), ShowTicketService_1 = __importDefault(require(E(0xfd) + D(0xf9) + D(0x101) + D(0xff))), ListMessagesService = async ({
        pageNumber: pageNumber = '1',
        ticketId: i,
        tenantId: j
    }) => {
        const G = D, H = E, l = {};
        l[G(0xe4)] = G(0x10c) + H(0xe1), l[G(0x110)] = function (z, A) {
            return z * A;
        }, l[H(0xdd)] = function (z, A) {
            return z - A;
        }, l[G(0xf4)] = G(0xe5), l[G(0xe2)] = G(0x100), l[H(0xe3)] = H(0xdb), l[G(0xfe)] = G(0x113), l[H(0xe8)] = function (z, A) {
            return z === A;
        }, l[G(0xf6)] = function (z, A) {
            return z > A;
        }, l[H(0x112)] = function (z, A) {
            return z + A;
        };
        const m = l, n = {};
        n['id'] = i, n[G(0xf2)] = j;
        const o = await (0x3a * -0xa3 + -0x80e + 0x2cfc, ShowTicketService_1[G(0x102)])(n);
        if (!o)
            throw new AppError_1[(G(0x102))](m[H(0xe4)], -0x3 * 0x64f + -0x1c5f * 0x1 + -0x220 * -0x17);
        const p = -0x1bde + 0x190e + 0x2ee, q = m[H(0x110)](p, m[H(0xdd)](+pageNumber, 0x52 + -0x7 * -0xb5 + -0x544)), r = {};
        r[H(0x108)] = o[G(0x108)], r[H(0xea)] = o[G(0xea)], r[H(0x105)] = o[G(0x105)], r['id'] = o['id'];
        const s = {};
        s[H(0xec)] = Ticket_1[H(0x102)], s[H(0xed)] = r, s[H(0x10f)] = !![];
        const {
            count: t,
            rows: u
        } = await Message_1[H(0x102)][H(0xde) + H(0xef)]({
            'limit': p,
            'include': [
                m[H(0xf4)],
                {
                    'model': Message_1[G(0x102)],
                    'as': m[H(0xe2)],
                    'include': [m[H(0xf4)]]
                },
                s
            ],
            'offset': q,
            'order': [[
                    m[G(0xe3)],
                    m[H(0xfe)]
                ]]
        });
        let v = [];
        if (m[H(0xe8)](+pageNumber, -0x5b3 * 0x2 + -0x54f * -0x2 + 0xc9)) {
            const x = {};
            x[G(0xfc)] = i;
            const y = {};
            y[H(0xed)] = x, y[H(0xfa)] = [
                m[G(0xf4)],
                {
                    'model': Message_1[G(0x102)],
                    'as': m[G(0xe2)],
                    'include': [m[G(0xf4)]]
                }
            ], y[H(0x109)] = [[
                    m[H(0xe3)],
                    m[H(0xfe)]
                ]];
            const {rows: z} = await MessageOffLine_1[H(0x102)][H(0xde) + H(0xef)](y);
            v = z;
        }
        const w = m[H(0xf6)](t, m[H(0x112)](q, u[G(0xee)]));
        return {
            'messages': u[G(0xf7)](),
            'messagesOffLine': v,
            'ticket': o,
            'count': t,
            'hasMore': w
        };
    };
exports[D(0x102)] = ListMessagesService;