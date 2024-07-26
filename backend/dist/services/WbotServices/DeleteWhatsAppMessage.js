'use strict';
const A = b, B = b;
function a() {
    const F = [
        '__esModule',
        '../../erro',
        'ketWbotBai',
        'default',
        'include',
        'h\x20this\x20ID.',
        'key',
        'ers/GetWbo',
        '7250004TrBRfc',
        'dataJson',
        'where',
        'hMxfM',
        '124edRKPz',
        'LMoKU',
        'tMessageBa',
        '253qNiBbl',
        'sendMessag',
        's.whatsapp',
        '.net',
        'AEqTd',
        'ls/Ticket',
        'findOne',
        '4691432LzSNqg',
        'isGroup',
        'parse',
        '3109715TEytbw',
        'ileys',
        'ticket',
        'g.us',
        'fault',
        'model',
        '../../help',
        'log',
        'leys',
        '../../mode',
        '12olaPDI',
        'No\x20message',
        'value',
        '7BfsBkg',
        'ERR_DELETE',
        'delete',
        '3350664DEtGnU',
        'update',
        '_WAPP_MSG',
        '\x20found\x20wit',
        '__importDe',
        '808227sPyjUK',
        'ls/Message',
        '40533cQMkRz',
        '329100SDuVHz',
        'ers/GetTic',
        'isDeleted',
        'cFUxQ',
        'number',
        'defineProp',
        'FqYYt',
        'contact',
        'erty',
        'rs/AppErro',
        'qTArL'
    ];
    a = function () {
        return F;
    };
    return a();
}
(function (c, d) {
    const y = b, z = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(y(0xd4)) / (0x4c9 + 0x1079 * -0x2 + -0x67 * -0x46) + -parseInt(z(0xcf)) / (0x15f4 + 0x79 * 0x2 + -0x16e4) + parseInt(y(0xd6)) / (-0xe1b + 0x85f * -0x1 + 0x167d) * (-parseInt(y(0xee)) / (0x1a4f + -0x5 * 0x601 + 0x6a * 0x9)) + parseInt(z(0xbf)) / (0x48 * 0x7 + 0x2584 + -0x2777 * 0x1) * (parseInt(y(0xc9)) / (-0xd * 0x2 + -0x1 * 0x14a3 + -0x5 * -0x427)) + parseInt(z(0xcc)) / (-0x1e88 + -0x171 * 0x18 + -0x503 * -0xd) * (-parseInt(z(0xf8)) / (0x1750 + 0x9e + -0x17e6)) + parseInt(z(0xea)) / (-0x33a * -0x5 + -0x77 * -0x1f + -0x1e82) + -parseInt(z(0xd7)) / (0x1a5 * 0x11 + 0x697 * 0x3 + -0x2fb0) * (-parseInt(y(0xf1)) / (-0x4b5 + 0xc6 * 0x20 + -0x1400));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x694fb * 0x2 + -0x119f97 + -0x95b07 * -0x2));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1cfa + 0x246b * -0x1 + 0x2ba * 0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[A(0xd3) + A(0xc3)] || function (c) {
    const C = B;
    return c && c[C(0xe2)] ? c : { 'default': c };
};
const k = {};
k[A(0xcb)] = !![], Object[B(0xdc) + B(0xdf)](exports, B(0xe2), k);
const AppError_1 = __importDefault(require(B(0xe3) + B(0xe0) + 'r')), Message_1 = __importDefault(require(B(0xc8) + B(0xd5))), Ticket_1 = __importDefault(require(A(0xc8) + B(0xf6))), GetTicketWbotBaileys_1 = __importDefault(require(A(0xc5) + B(0xd8) + B(0xe4) + B(0xc7))), GetWbotMessageBaileys_1 = __importDefault(require(A(0xc5) + B(0xe9) + B(0xf0) + B(0xc0))), DeleteWhatsAppMessage = async i => {
        const D = B, E = A, j = {};
        j[D(0xed)] = D(0xc1), j[D(0xdd)] = D(0xde), j[E(0xe1)] = D(0xca) + D(0xd2) + D(0xe7), j[D(0xef)] = D(0xc2), j[E(0xda)] = E(0xf3) + E(0xf4), j[D(0xf5)] = E(0xcd) + D(0xd1);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[E(0xc4)] = Ticket_1[E(0xe5)], n['as'] = l[E(0xed)], n[D(0xe6)] = [l[E(0xdd)]];
        const o = {};
        o[E(0xec)] = m, o[D(0xe6)] = [n];
        const p = await Message_1[D(0xe5)][D(0xf7)](o);
        if (!p)
            throw new AppError_1[(D(0xe5))](l[D(0xe1)]);
        const {ticket: q} = p, r = await (0x2660 + 0x23bc + 0xc * -0x62d, GetWbotMessageBaileys_1[D(0xe5)])(q, i);
        try {
            const t = await (-0x3 * -0xa33 + 0x6ad * -0x1 + -0x17ec, GetTicketWbotBaileys_1[D(0xe5)])(q), u = r, v = JSON[E(0xbe)](u[D(0xeb)]), w = {};
            w[E(0xce)] = v[D(0xe8)], await t[D(0xf2) + 'e'](q[D(0xde)][E(0xdb)] + '@' + (q[D(0xbd)] ? l[D(0xef)] : l[D(0xda)]), w);
        } catch (x) {
            console[D(0xc6)](x);
            throw new AppError_1[(E(0xe5))](l[D(0xf5)]);
        }
        const s = {};
        return s[E(0xd9)] = !![], await p[D(0xd0)](s), p;
    };
exports[B(0xe5)] = DeleteWhatsAppMessage;