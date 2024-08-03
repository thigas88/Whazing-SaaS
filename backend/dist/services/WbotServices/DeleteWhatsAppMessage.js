'use strict';
const A = b, B = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5cc + 0x93b * -0x1 + -0x39 * -0x13);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const y = b, z = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(y(0xe3)) / (-0x1b06 + -0x169e + 0x31a5) * (parseInt(z(0xee)) / (-0x22e + -0x1ca4 + 0x4 * 0x7b5)) + -parseInt(z(0xe8)) / (-0x1199 + -0xa77 * -0x2 + -0x352) + parseInt(z(0xcd)) / (-0x35e + -0xd * -0x29f + -0x1eb1) + -parseInt(y(0xf0)) / (0x1 * -0x535 + -0x57d + -0x1 * -0xab7) + -parseInt(y(0xf1)) / (-0x42 * -0x43 + -0xd * 0x4d + -0xd57) + parseInt(z(0xd6)) / (-0x52 * -0x2 + -0xa9c + 0x9ff) * (-parseInt(z(0xf4)) / (0x1 * -0x169f + 0xfaf * -0x1 + 0x2656)) + -parseInt(z(0xde)) / (-0x23be + -0x2 * 0xcd3 + 0x3d6d) * (-parseInt(y(0xd9)) / (-0x1 * -0x2194 + -0xe6c + -0x131e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x66541 + 0x3 * 0x26e1e + -0x10 * 0x2170));
var __importDefault = this && this[A(0xea) + B(0xfa)] || function (c) {
    const C = B;
    return c && c[C(0xcf)] ? c : { 'default': c };
};
function a() {
    const F = [
        '.net',
        'number',
        '4194550NGmVnC',
        'include',
        'model',
        'value',
        'ERR_DELETE',
        '45XLqGxo',
        'dataJson',
        's.whatsapp',
        'coIEx',
        'where',
        '106822nIHvQJ',
        'contact',
        '../../mode',
        'No\x20message',
        'iJcTm',
        '2391294ltSaPz',
        'isDeleted',
        '__importDe',
        '../../help',
        'ileys',
        'log',
        '22pnwYbf',
        'sendMessag',
        '5320870dtdBTK',
        '8583786QLQoPr',
        'ketWbotBai',
        'ls/Message',
        '922352KlvKam',
        'delete',
        'ticket',
        'oEOWB',
        'tMessageBa',
        'rs/AppErro',
        'fault',
        'ers/GetTic',
        'findOne',
        'ers/GetWbo',
        'key',
        '\x20found\x20wit',
        'NzPok',
        '../../erro',
        'ls/Ticket',
        'isGroup',
        'h\x20this\x20ID.',
        'update',
        'defineProp',
        'erty',
        '4040548pLcuRC',
        '_WAPP_MSG',
        '__esModule',
        'default',
        'leys',
        'g.us',
        'yBtmw',
        'parse',
        'xwZTt',
        '14DaFTvb'
    ];
    a = function () {
        return F;
    };
    return a();
}
const k = {};
k[B(0xdc)] = !![], Object[A(0x106) + A(0xcc)](exports, B(0xcf), k);
const AppError_1 = __importDefault(require(B(0x101) + A(0xf9) + 'r')), Message_1 = __importDefault(require(A(0xe5) + A(0xf3))), Ticket_1 = __importDefault(require(B(0xe5) + A(0x102))), GetTicketWbotBaileys_1 = __importDefault(require(A(0xeb) + A(0xfb) + B(0xf2) + B(0xd1))), GetWbotMessageBaileys_1 = __importDefault(require(A(0xeb) + B(0xfd) + A(0xf8) + A(0xec))), DeleteWhatsAppMessage = async i => {
        const D = A, E = B, j = {};
        j[D(0xe1)] = E(0xf6), j[D(0xf7)] = E(0xe4), j[D(0xd3)] = E(0xe6) + D(0xff) + D(0x104), j[D(0xd5)] = E(0xd2), j[E(0x100)] = D(0xe0) + D(0xd7), j[E(0xe7)] = E(0xdd) + E(0xce);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[E(0xdb)] = Ticket_1[D(0xd0)], n['as'] = l[D(0xe1)], n[D(0xda)] = [l[E(0xf7)]];
        const o = {};
        o[E(0xe2)] = m, o[E(0xda)] = [n];
        const p = await Message_1[E(0xd0)][E(0xfc)](o);
        if (!p)
            throw new AppError_1[(D(0xd0))](l[E(0xd3)]);
        const {ticket: q} = p, r = await (0x2537 + -0x14fc + 0x569 * -0x3, GetWbotMessageBaileys_1[D(0xd0)])(q, i);
        try {
            const t = await (0x1c0d * 0x1 + 0x463 * -0x8 + 0x70b, GetTicketWbotBaileys_1[E(0xd0)])(q), u = r, v = JSON[E(0xd4)](u[D(0xdf)]), w = {};
            w[E(0xf5)] = v[D(0xfe)], await t[D(0xef) + 'e'](q[E(0xe4)][D(0xd8)] + '@' + (q[D(0x103)] ? l[E(0xd5)] : l[D(0x100)]), w);
        } catch (x) {
            console[D(0xed)](x);
            throw new AppError_1[(E(0xd0))](l[E(0xe7)]);
        }
        const s = {};
        return s[E(0xe9)] = !![], await p[E(0x105)](s), p;
    };
exports[A(0xd0)] = DeleteWhatsAppMessage;