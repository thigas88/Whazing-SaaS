'use strict';
function a() {
    const I = [
        'owTicketSe',
        'lnzdg',
        'ervices/Sh',
        'defineProp',
        'rs/AppErro',
        '483384fCFrWe',
        'sRnEa',
        '__importDe',
        'OffLine',
        'ls/Ticket',
        '../../mode',
        'quotedMsg',
        'ntAll',
        'VuUit',
        'LBXlB',
        'value',
        'rvice',
        'ls/Message',
        '../TicketS',
        'ticketId',
        'contactId',
        'findAndCou',
        'tenantId',
        '10437sGrRhc',
        'whatsappId',
        '__esModule',
        'where',
        'dPZkx',
        '183806gBdBTY',
        'DESC',
        'PsKpm',
        '65125xvbUlg',
        'jqfsN',
        'contact',
        'model',
        '20288rrkalu',
        '1017MlUjVx',
        '1138446SQGnBO',
        'ERR_NO_TIC',
        '116FOfmSj',
        'default',
        'required',
        'include',
        'fault',
        'createdAt',
        'length',
        '1420986sKXsZP',
        'KET_FOUND',
        'erty',
        'reverse',
        'zKSwR',
        'order',
        'queueId',
        'wvqwL',
        '../../erro',
        'VvMZv'
    ];
    a = function () {
        return I;
    };
    return a();
}
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0x125)) / (0x35d + -0x150d + 0x11b1) + -parseInt(C(0x146)) / (0xa * -0x27e + -0xa23 + 0x2f * 0xbf) + parseInt(B(0x120)) / (-0x37a * 0x9 + -0x2169 + -0x2f1 * -0x16) * (-parseInt(B(0x130)) / (-0x366 + -0x22b0 + 0x1 * 0x261a)) + -parseInt(B(0x128)) / (-0x95f * 0x2 + 0x1254 + 0x25 * 0x3) + parseInt(B(0x12e)) / (0x35 * -0x21 + 0x1d67 + -0x168c) + parseInt(C(0x137)) / (0xff7 + -0x134d + 0x29 * 0x15) + -parseInt(C(0x12c)) / (-0x2536 + -0x1291 * -0x2 + -0xe * -0x2) * (-parseInt(C(0x12d)) / (0x252c + 0x2533 + -0x4a56));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xdde * -0x2a + 0x1bd01 + -0x1e0f8));
var __importDefault = this && this[D(0x148) + D(0x134)] || function (c) {
    const F = D;
    return c && c[F(0x122)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1608 + 0x4ba * 0x1 + 0x255 * -0xb);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[E(0x150)] = !![], Object[D(0x144) + D(0x139)](exports, E(0x122), k);
const AppError_1 = __importDefault(require(E(0x13f) + D(0x145) + 'r')), Message_1 = __importDefault(require(E(0x14b) + D(0x152))), MessageOffLine_1 = __importDefault(require(D(0x14b) + E(0x152) + E(0x149))), Ticket_1 = __importDefault(require(D(0x14b) + E(0x14a))), ShowTicketService_1 = __importDefault(require(D(0x11b) + D(0x143) + E(0x141) + E(0x151))), ListMessagesService = async ({
        pageNumber: pageNumber = '1',
        ticketId: i,
        tenantId: j
    }) => {
        const G = E, H = E, l = {};
        l[G(0x14f)] = G(0x12f) + G(0x138), l[H(0x13b)] = function (z, A) {
            return z * A;
        }, l[H(0x127)] = function (z, A) {
            return z - A;
        }, l[G(0x129)] = H(0x12a), l[G(0x140)] = H(0x14c), l[H(0x124)] = H(0x135), l[G(0x147)] = H(0x126), l[G(0x14e)] = function (z, A) {
            return z === A;
        }, l[H(0x142)] = function (z, A) {
            return z > A;
        }, l[G(0x13e)] = function (z, A) {
            return z + A;
        };
        const m = l, n = {};
        n['id'] = i, n[G(0x11f)] = j;
        const o = await (-0x12e9 * -0x1 + -0x9b1 * -0x3 + -0xa6 * 0x4a, ShowTicketService_1[H(0x131)])(n);
        if (!o)
            throw new AppError_1[(H(0x131))](m[H(0x14f)], 0x1 * -0x3f1 + 0xd93 + -0x1 * 0x80e);
        const p = 0x4a6 + -0x1027 + 0xb9f, q = m[H(0x13b)](p, m[H(0x127)](+pageNumber, 0x1 * -0x9db + 0x2c0 + 0x71c)), r = {};
        r[G(0x13d)] = o[H(0x13d)], r[H(0x11d)] = o[G(0x11d)], r[H(0x121)] = o[G(0x121)], r['id'] = o['id'];
        const s = {};
        s[H(0x12b)] = Ticket_1[H(0x131)], s[H(0x123)] = r, s[G(0x132)] = !![];
        const {
            count: t,
            rows: u
        } = await Message_1[H(0x131)][G(0x11e) + G(0x14d)]({
            'limit': p,
            'include': [
                m[G(0x129)],
                {
                    'model': Message_1[H(0x131)],
                    'as': m[G(0x140)],
                    'include': [m[G(0x129)]]
                },
                s
            ],
            'offset': q,
            'order': [[
                    m[H(0x124)],
                    m[H(0x147)]
                ]]
        });
        let v = [];
        if (m[G(0x14e)](+pageNumber, -0x1 * 0x15ca + -0xb0 * -0x34 + 0xdf5 * -0x1)) {
            const x = {};
            x[H(0x11c)] = i;
            const y = {};
            y[G(0x123)] = x, y[G(0x133)] = [
                m[H(0x129)],
                {
                    'model': Message_1[H(0x131)],
                    'as': m[H(0x140)],
                    'include': [m[G(0x129)]]
                }
            ], y[G(0x13c)] = [[
                    m[G(0x124)],
                    m[H(0x147)]
                ]];
            const {rows: z} = await MessageOffLine_1[H(0x131)][H(0x11e) + H(0x14d)](y);
            v = z;
        }
        const w = m[G(0x142)](t, m[G(0x13e)](q, u[G(0x136)]));
        return {
            'messages': u[H(0x13a)](),
            'messagesOffLine': v,
            'ticket': o,
            'count': t,
            'hasMore': w
        };
    };
exports[D(0x131)] = ListMessagesService;