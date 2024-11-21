'use strict';
const A = b, B = b;
(function (c, d) {
    const y = b, z = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(y(0x17b)) / (-0x4 * 0x122 + -0xdcd + -0x1 * -0x1256) + -parseInt(z(0x177)) / (-0xb * 0xc7 + -0x2ea * 0x2 + 0xe63) * (-parseInt(z(0x176)) / (0x38a + 0x1 * 0x201f + 0x15f * -0x1a)) + -parseInt(y(0x154)) / (-0x15af + -0x1c4f * 0x1 + 0x25 * 0x15a) * (-parseInt(y(0x158)) / (-0x879 * -0x2 + 0x1f39 + -0x3026)) + parseInt(y(0x14f)) / (-0xa92 + 0x3a4 + 0x6f4) + parseInt(y(0x187)) / (0x1ddc + -0x2 * 0x1003 + 0x231) + -parseInt(y(0x152)) / (-0x48 + 0x261 * -0x5 + 0xc35) * (parseInt(z(0x170)) / (0x1 * 0x1e4f + -0x17db + -0x66b)) + parseInt(y(0x14d)) / (-0x2ab * 0x8 + 0x17 * 0x58 + -0x19 * -0x8a) * (-parseInt(y(0x186)) / (0x1 * 0x623 + -0x14f9 + -0x1 * -0xee1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x90833 + 0x590d1 + -0x5aba3));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1e6e + -0x5 * 0x45a + -0x75f);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const F = [
        '../../mode',
        'delete',
        '12356399UrcOvz',
        '5987303MyBGMq',
        'default',
        '10EyOUAK',
        'nFEkh',
        '5402322psWuTu',
        'ERR_DELETE',
        'hStLt',
        '56Mowxyw',
        'sendMessag',
        '16CUnkUO',
        'dataJson',
        'ticket',
        'tMessageBa',
        '944185ecRyWi',
        '__importDe',
        'where',
        'GksoJ',
        '../../erro',
        'defineProp',
        'ls/Ticket',
        'OopWb',
        'isGroup',
        '_WAPP_MSG',
        'ketWbotBai',
        'model',
        'parse',
        'ers/GetWbo',
        'findOne',
        'KXFON',
        'key',
        'log',
        '../../help',
        'erty',
        'No\x20message',
        'h\x20this\x20ID.',
        'ls/Message',
        's.whatsapp',
        '170010zQbOGk',
        'g.us',
        'number',
        'XZCQV',
        'rs/AppErro',
        'fault',
        '230853kFBwDl',
        '6ZEZDeU',
        'update',
        'ileys',
        'isDeleted',
        '901321husCXj',
        '\x20found\x20wit',
        'include',
        'leys',
        'value',
        '__esModule',
        'ers/GetTic',
        'contact',
        '.net'
    ];
    a = function () {
        return F;
    };
    return a();
}
var __importDefault = this && this[A(0x159) + B(0x175)] || function (c) {
    const C = A;
    return c && c[C(0x180)] ? c : { 'default': c };
};
const k = {};
k[A(0x17f)] = !![], Object[A(0x15d) + B(0x16b)](exports, A(0x180), k);
const AppError_1 = __importDefault(require(B(0x15c) + B(0x174) + 'r')), Message_1 = __importDefault(require(B(0x184) + A(0x16e))), Ticket_1 = __importDefault(require(A(0x184) + B(0x15e))), GetTicketWbotBaileys_1 = __importDefault(require(A(0x16a) + A(0x181) + A(0x162) + B(0x17e))), GetWbotMessageBaileys_1 = __importDefault(require(B(0x16a) + A(0x165) + A(0x157) + B(0x179))), DeleteWhatsAppMessage = async i => {
        const D = A, E = A, j = {};
        j[D(0x167)] = E(0x156), j[D(0x14e)] = D(0x182), j[E(0x15f)] = D(0x16c) + D(0x17c) + D(0x16d), j[E(0x173)] = E(0x171), j[E(0x151)] = D(0x16f) + D(0x183), j[E(0x15b)] = E(0x150) + E(0x161);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[D(0x163)] = Ticket_1[D(0x188)], n['as'] = l[E(0x167)], n[D(0x17d)] = [l[D(0x14e)]];
        const o = {};
        o[E(0x15a)] = m, o[D(0x17d)] = [n];
        const p = await Message_1[D(0x188)][D(0x166)](o);
        if (!p)
            throw new AppError_1[(D(0x188))](l[D(0x15f)]);
        const {ticket: q} = p, r = await (-0x11c6 + 0x1ca9 + 0x3a1 * -0x3, GetWbotMessageBaileys_1[D(0x188)])(q, i);
        try {
            const t = await (0xa88 * -0x2 + 0x1 * 0x7dc + 0xd34, GetTicketWbotBaileys_1[D(0x188)])(q), u = r, v = JSON[D(0x164)](u[D(0x155)]), w = {};
            w[D(0x185)] = v[E(0x168)], await t[E(0x153) + 'e'](q[E(0x182)][E(0x172)] + '@' + (q[D(0x160)] ? l[E(0x173)] : l[D(0x151)]), w);
        } catch (x) {
            console[D(0x169)](x);
            throw new AppError_1[(E(0x188))](l[D(0x15b)]);
        }
        const s = {};
        return s[D(0x17a)] = !![], await p[E(0x178)](s), p;
    };
exports[B(0x188)] = DeleteWhatsAppMessage;