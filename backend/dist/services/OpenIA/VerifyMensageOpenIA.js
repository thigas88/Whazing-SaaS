'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0xc4)) / (-0x1 * -0x25b5 + 0xf0f + -0x1 * 0x34c3) * (-parseInt(x(0xc0)) / (0x59 * -0x8 + -0x10f * -0x1 + 0x1 * 0x1bb)) + parseInt(y(0xe5)) / (0x46 * -0xf + 0x2 * -0x134b + -0x11 * -0x283) + -parseInt(x(0xc9)) / (-0x2701 + -0x2696 + -0x4d9b * -0x1) + parseInt(y(0xb7)) / (0xd1 * 0xb + -0x63 * -0xd + -0xdfd * 0x1) * (parseInt(y(0xa8)) / (0x1bb6 * 0x1 + 0x111b + -0x2ccb)) + -parseInt(y(0xc7)) / (0xffc + 0x1 * 0x26b + 0x1c * -0xa8) * (-parseInt(x(0xba)) / (0x1 * 0x24bc + -0x3 * 0xbe7 + 0x11 * -0xf)) + parseInt(y(0xca)) / (-0x1036 + -0x728 * 0x3 + 0x25b7) * (parseInt(y(0xd3)) / (0x13b9 + -0x17c6 + 0x417)) + -parseInt(y(0xa5)) / (0x1997 * -0x1 + 0x2295 + -0x8f3) * (parseInt(y(0xac)) / (0x9f0 + -0x13a * 0x1e + 0x2 * 0xd74));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5fbf5 + -0xc5 * 0x40d + 0x1 * 0xc38e7));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1461 + -0x177e * -0x1 + -0x27d);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[z(0xae) + z(0xb0)] || function (c) {
    const B = A;
    return c && c[B(0xd4)] ? c : { 'default': c };
};
const k = {};
k[z(0xdd)] = !![], Object[A(0xce) + A(0xdc)](exports, A(0xd4), k);
const Contact_1 = __importDefault(require(A(0xbf) + z(0xbe))), openIARestClient_1 = require(A(0xa9) + A(0xde) + z(0xd2) + z(0xb2)), CreateMessageSystemService_1 = __importDefault(require(A(0xa6) + z(0xe1) + z(0xd6) + z(0xd8) + A(0xcb))), Whatsapp_1 = __importDefault(require(z(0xbf) + A(0xaf) + 'p')), UpdateQueueIATicket_1 = __importDefault(require(A(0xe4) + z(0xe2) + z(0xa2) + A(0xa7))), VerifyMensageOpenIA = async (h, i, j, l) => {
        const C = z, D = z, m = {};
        m[C(0xaa)] = function (o, p) {
            return o === p;
        }, m[C(0xe0)] = C(0xb9), m[D(0xab)] = D(0xa0), m[D(0xa4)] = function (o, p) {
            return o == p;
        }, m[C(0xb1)] = D(0xe3);
        const n = m;
        if (n[D(0xaa)](j[C(0xdb)], n[D(0xe0)]) && !i[D(0xb8)] && !j[C(0xb4)] && !j[D(0xa3)] && j[D(0xc1)])
            try {
                const o = await Contact_1[D(0xe7)][C(0xbd)](j[D(0xb3)]), p = await Whatsapp_1[C(0xe7)][D(0xbd)](j[C(0xd1)]), q = {};
                q['id'] = h['id'], q[D(0xd0) + 'me'] = o[C(0xc2)], q[C(0xd5)] = j['id'], q[C(0xb5)] = i[D(0xb5)], q[C(0xd9) + D(0xc6)] = p[D(0xbb)], q[D(0xc5) + C(0xcd)] = o[C(0xbb)];
                const r = {};
                r[C(0xcc)] = q;
                let s = await (0x262e + 0x3b7 * 0x1 + -0x29e5, openIARestClient_1[C(0xbc) + C(0xc8)])(r);
                s = JSON[D(0xb6)](s);
                const t = {};
                t[D(0xb5)] = s[D(0xcc)][D(0xcf)], t[D(0xb8)] = !![], t[D(0xad)] = !![], t[C(0xd7)] = n[D(0xab)];
                const u = t, v = {};
                v[C(0xda)] = u, v[D(0xc3)] = j[D(0xc3)], v[D(0xa1)] = j, v[C(0xd7)] = u[D(0xd7)], v[D(0xdb)] = n[C(0xe0)], await (0x29f * -0xd + 0xd * 0x18 + -0x1 * -0x20db, CreateMessageSystemService_1[C(0xe7)])(v), n[D(0xa4)](s[D(0xcc)][D(0xe6) + 'e'], n[C(0xb1)]) && await (-0xfef * 0x2 + 0xd14 + 0x12ca, UpdateQueueIATicket_1[D(0xe7)])(p[C(0xdf) + 'sf'], j);
            } catch (w) {
                console[D(0xe8)](w);
            }
    };
function a() {
    const E = [
        'reateMessa',
        'sendType',
        'geSystemSe',
        'sender_num',
        'msg',
        'status',
        'erty',
        'value',
        'Clients/op',
        'queue_tran',
        'izeFm',
        'Services/C',
        'ervices/Up',
        'Transfer',
        '../TicketS',
        '14766HjTECN',
        'typeMessag',
        'default',
        'log',
        'bot',
        'ticket',
        'dateQueueI',
        'answered',
        'FCcof',
        '11vbjcLe',
        '../Message',
        'ATicket',
        '541932TRGuoI',
        '../../rest',
        'MVDrP',
        'FtOxa',
        '727752rgJCFX',
        'read',
        '__importDe',
        'ls/Whatsap',
        'fault',
        'MwegK',
        'ient',
        'contactId',
        'isGroup',
        'body',
        'parse',
        '20pieecM',
        'fromMe',
        'pending',
        '40wnoVtd',
        'number',
        'sendMessag',
        'findByPk',
        'ls/Contact',
        '../../mode',
        '402dMxNok',
        'is_chat_ia',
        'name',
        'tenantId',
        '1453urtoIi',
        'receiver_n',
        'ber',
        '528493HyhojG',
        'eToIA',
        '866620DzcQWw',
        '9sjDonJ',
        'rvice',
        'message',
        'umber',
        'defineProp',
        'answer',
        'contact_na',
        'whatsappId',
        'enIARestCl',
        '301780pVsrVB',
        '__esModule',
        'ticket_id'
    ];
    a = function () {
        return E;
    };
    return a();
}
exports[A(0xe7)] = VerifyMensageOpenIA;