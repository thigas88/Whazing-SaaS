'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x1c2)) / (0x2 * -0xa1d + 0x3b * 0x29 + 0x2b2 * 0x4) + -parseInt(x(0x1db)) / (-0x10f1 * -0x2 + -0x164b + -0xb95) * (-parseInt(x(0x1e6)) / (0xc * -0x33e + -0x2345 * -0x1 + 0x3a6)) + parseInt(x(0x1fd)) / (0x618 + -0x349 + -0x2cb) * (parseInt(x(0x1f3)) / (0x8 * -0x382 + 0x1 * 0x12aa + 0x96b)) + parseInt(y(0x1d5)) / (0x3 * -0x455 + -0x1322 + 0x2027) * (parseInt(y(0x1f6)) / (-0xaf4 + -0x11d0 + 0x75 * 0x3f)) + parseInt(y(0x1e3)) / (0x128c + -0x7e0 + -0xaa4) * (-parseInt(y(0x1ff)) / (0x1 * 0x6e6 + 0xfc9 + 0xd * -0x1be)) + -parseInt(x(0x1ef)) / (-0x341 * -0x3 + 0x1 * 0x4b + 0x2 * -0x502) * (parseInt(y(0x1c6)) / (0x24d2 + -0x21e7 + -0x2e0)) + -parseInt(x(0x1f8)) / (0x13d0 + -0x7 * -0x4bd + -0x34ef);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2032b + 0x15d79 * -0x1 + 0xb7526 * 0x1));
function a() {
    const E = [
        '41670WUSCpx',
        '../Message',
        '__importDe',
        'answered',
        'enIARestCl',
        'eToIA',
        '34862zHWBwX',
        'QCyYr',
        'sendType',
        'RxNiL',
        'status',
        'geSystemSe',
        'dLNAt',
        'number',
        '1835848TUdHgg',
        'whatsappId',
        'reateMessa',
        '87whtKfP',
        '__esModule',
        'dateQueueI',
        'ient',
        'sendMessag',
        'isGroup',
        'findByPk',
        'umber',
        'msg',
        '4330FAjgPt',
        'contactId',
        'queue_tran',
        'parse',
        '5QbNCqJ',
        'pending',
        'ticket',
        '217HZZitY',
        'body',
        '9508656Adyqcw',
        'ls/Contact',
        'tenantId',
        'ervices/Up',
        'typeMessag',
        '1284692iFcWxN',
        'is_chat_ia',
        '27UlUgHd',
        'receiver_n',
        'answer',
        '../TicketS',
        'Transfer',
        'bot',
        'erty',
        'message',
        'ticket_id',
        'default',
        'ls/Whatsap',
        'value',
        '1058033PvYaOZ',
        'contact_na',
        'rvice',
        'log',
        '2277QEJbcg',
        'defineProp',
        'name',
        '../../mode',
        'Services/C',
        '../../rest',
        'read',
        'MHLRl',
        'Sljra',
        'fault',
        'Clients/op',
        'ATicket',
        'ber',
        'sender_num',
        'fromMe'
    ];
    a = function () {
        return E;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xee3 + -0x16 * 0x60 + 0x18e3);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[z(0x1d7) + A(0x1cf)] || function (c) {
    const B = z;
    return c && c[B(0x1e7)] ? c : { 'default': c };
};
const k = {};
k[z(0x1c1)] = !![], Object[A(0x1c7) + z(0x205)](exports, z(0x1e7), k);
const Contact_1 = __importDefault(require(z(0x1c9) + A(0x1f9))), openIARestClient_1 = require(z(0x1cb) + z(0x1d0) + z(0x1d9) + z(0x1e9)), CreateMessageSystemService_1 = __importDefault(require(A(0x1d6) + z(0x1ca) + z(0x1e5) + A(0x1e0) + z(0x1c4))), Whatsapp_1 = __importDefault(require(A(0x1c9) + z(0x1c0) + 'p')), UpdateQueueIATicket_1 = __importDefault(require(z(0x202) + z(0x1fb) + z(0x1e8) + z(0x1d1))), VerifyMensageOpenIA = async (h, i, j, l) => {
        const C = z, D = z, m = {};
        m[C(0x1cd)] = function (o, p) {
            return o === p;
        }, m[D(0x1ce)] = C(0x1f4), m[C(0x1e1)] = D(0x204), m[D(0x1de)] = function (o, p) {
            return o == p;
        }, m[C(0x1dc)] = D(0x203);
        const n = m;
        if (n[D(0x1cd)](j[D(0x1df)], n[C(0x1ce)]) && !i[C(0x1d4)] && !j[C(0x1eb)] && !j[C(0x1d8)] && j[D(0x1fe)])
            try {
                const o = await Contact_1[C(0x208)][C(0x1ec)](j[C(0x1f0)]), p = await Whatsapp_1[D(0x208)][D(0x1ec)](j[D(0x1e4)]), q = {};
                q['id'] = h['id'], q[C(0x1c3) + 'me'] = o[C(0x1c8)], q[D(0x207)] = j['id'], q[C(0x1f7)] = i[D(0x1f7)], q[C(0x1d3) + D(0x1d2)] = p[C(0x1e2)], q[C(0x200) + D(0x1ed)] = o[C(0x1e2)];
                const r = {};
                r[C(0x206)] = q;
                let s = await (-0x4a9 * -0x5 + 0xc64 * 0x3 + -0x1 * 0x3c79, openIARestClient_1[C(0x1ea) + D(0x1da)])(r);
                s = JSON[C(0x1f2)](s);
                const t = {};
                t[D(0x1f7)] = s[D(0x206)][D(0x201)], t[D(0x1d4)] = !![], t[D(0x1cc)] = !![], t[D(0x1dd)] = n[C(0x1e1)];
                const u = t, v = {};
                v[C(0x1ee)] = u, v[D(0x1fa)] = j[D(0x1fa)], v[D(0x1f5)] = j, v[C(0x1dd)] = u[C(0x1dd)], v[D(0x1df)] = n[C(0x1ce)], await (0x6a9 + -0x8 * 0x2d4 + 0xff7, CreateMessageSystemService_1[C(0x208)])(v), n[C(0x1de)](s[C(0x206)][D(0x1fc) + 'e'], n[C(0x1dc)]) && await (-0x1 * -0x248e + -0x4 * -0x88 + -0x26ae, UpdateQueueIATicket_1[C(0x208)])(p[C(0x1f1) + 'sf'], j);
            } catch (w) {
                console[C(0x1c5)](w);
            }
    };
exports[A(0x208)] = VerifyMensageOpenIA;