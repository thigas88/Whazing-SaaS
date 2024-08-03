'use strict';
const D = b, E = b;
function a() {
    const I = [
        'rvice',
        'ls/Ticket',
        'ERR_NO_TIC',
        'reverse',
        'NMdGg',
        'quotedMsg',
        'fault',
        'findAndCou',
        'include',
        'KET_FOUND',
        'contactId',
        'erty',
        'dgSKf',
        'ntAll',
        '11526342zqHpVM',
        'whatsappId',
        'value',
        '../../mode',
        '__importDe',
        '3780CWiwJf',
        'rDFpP',
        'utuGE',
        'OffLine',
        'gpZdx',
        '3082605ufgiQI',
        '2rbzVeo',
        '__esModule',
        'rs/AppErro',
        'default',
        'kkGrX',
        'JUSax',
        'queueId',
        'owTicketSe',
        'ervices/Sh',
        '58242NDVoGY',
        '1933328DMQPuL',
        'where',
        '12472EuszSt',
        'length',
        'DESC',
        'tenantId',
        '../../erro',
        '21385845HEPonM',
        'order',
        'contact',
        '5652895NsbYbY',
        'createdAt',
        '../TicketS',
        'model',
        'required',
        'defineProp',
        'qkmng',
        'ticketId',
        'HdBkP',
        'ls/Message',
        'iWeaV'
    ];
    a = function () {
        return I;
    };
    return a();
}
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(B(0x1e3)) / (-0x2682 + 0x21a9 * 0x1 + 0x4da) * (parseInt(C(0x1da)) / (-0x923 * -0x2 + 0xd0b + -0x1f4f)) + -parseInt(B(0x1d9)) / (-0x3 * -0x143 + -0x67 * 0x31 + 0xff1) + -parseInt(C(0x1e4)) / (0x6 * 0x41 + 0x1b01 + -0x1c83) + parseInt(B(0x1b6)) / (-0x2 * -0xac7 + -0x5c9 * -0x1 + -0x1b52) + -parseInt(C(0x1cf)) / (-0x46d + 0x22a5 + 0x60a * -0x5) + -parseInt(B(0x1d4)) / (0x1938 + 0xe9b * -0x2 + 0x405) * (-parseInt(C(0x1ae)) / (-0x1012 + 0x2695 + -0x47f * 0x5)) + parseInt(C(0x1b3)) / (-0x26d4 + 0x2 * -0x573 + 0x31c3 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1c40fb * -0x1 + -0x5b497 + -0x7abf2));
var __importDefault = this && this[D(0x1d3) + E(0x1c7)] || function (c) {
    const F = E;
    return c && c[F(0x1db)] ? c : { 'default': c };
};
const k = {};
k[D(0x1d1)] = !![], Object[D(0x1bb) + D(0x1cc)](exports, D(0x1db), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xf31 + 0x5 * 0x2e + -0xe6a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(E(0x1b2) + E(0x1dc) + 'r')), Message_1 = __importDefault(require(D(0x1d2) + E(0x1bf))), MessageOffLine_1 = __importDefault(require(D(0x1d2) + D(0x1bf) + D(0x1d7))), Ticket_1 = __importDefault(require(D(0x1d2) + D(0x1c2))), ShowTicketService_1 = __importDefault(require(D(0x1b8) + D(0x1e2) + E(0x1e1) + D(0x1c1))), ListMessagesService = async ({
        pageNumber: pageNumber = '1',
        ticketId: i,
        tenantId: j
    }) => {
        const G = E, H = E, l = {};
        l[G(0x1c0)] = G(0x1c3) + H(0x1ca), l[H(0x1d8)] = function (z, A) {
            return z * A;
        }, l[G(0x1df)] = function (z, A) {
            return z - A;
        }, l[H(0x1d6)] = G(0x1b5), l[G(0x1d5)] = G(0x1c6), l[H(0x1c5)] = G(0x1b7), l[H(0x1cd)] = H(0x1b0), l[H(0x1bc)] = function (z, A) {
            return z === A;
        }, l[G(0x1be)] = function (z, A) {
            return z > A;
        }, l[G(0x1de)] = function (z, A) {
            return z + A;
        };
        const m = l, n = {};
        n['id'] = i, n[H(0x1b1)] = j;
        const o = await (0x1382 + -0x97d + -0xa05 * 0x1, ShowTicketService_1[H(0x1dd)])(n);
        if (!o)
            throw new AppError_1[(H(0x1dd))](m[G(0x1c0)], -0xd6 * -0x2b + -0x168b + -0x3 * 0x3f1);
        const p = 0x1cce + 0x1732 + -0x33e2, q = m[H(0x1d8)](p, m[G(0x1df)](+pageNumber, 0xd33 + 0x1a5 * 0x7 + -0x18b5)), r = {};
        r[G(0x1e0)] = o[H(0x1e0)], r[H(0x1cb)] = o[G(0x1cb)], r[H(0x1d0)] = o[G(0x1d0)], r['id'] = o['id'];
        const s = {};
        s[H(0x1b9)] = Ticket_1[G(0x1dd)], s[G(0x1ad)] = r, s[H(0x1ba)] = !![];
        const {
            count: t,
            rows: u
        } = await Message_1[H(0x1dd)][G(0x1c8) + G(0x1ce)]({
            'limit': p,
            'include': [
                m[G(0x1d6)],
                {
                    'model': Message_1[G(0x1dd)],
                    'as': m[G(0x1d5)],
                    'include': [m[H(0x1d6)]]
                },
                s
            ],
            'offset': q,
            'order': [[
                    m[H(0x1c5)],
                    m[G(0x1cd)]
                ]]
        });
        let v = [];
        if (m[G(0x1bc)](+pageNumber, 0xd54 + 0x13f * -0x1a + 0x1313)) {
            const x = {};
            x[G(0x1bd)] = i;
            const y = {};
            y[H(0x1ad)] = x, y[H(0x1c9)] = [
                m[H(0x1d6)],
                {
                    'model': Message_1[G(0x1dd)],
                    'as': m[H(0x1d5)],
                    'include': [m[H(0x1d6)]]
                }
            ], y[H(0x1b4)] = [[
                    m[H(0x1c5)],
                    m[G(0x1cd)]
                ]];
            const {rows: z} = await MessageOffLine_1[G(0x1dd)][H(0x1c8) + G(0x1ce)](y);
            v = z;
        }
        const w = m[G(0x1be)](t, m[H(0x1de)](q, u[H(0x1af)]));
        return {
            'messages': u[H(0x1c4)](),
            'messagesOffLine': v,
            'ticket': o,
            'count': t,
            'hasMore': w
        };
    };
exports[E(0x1dd)] = ListMessagesService;