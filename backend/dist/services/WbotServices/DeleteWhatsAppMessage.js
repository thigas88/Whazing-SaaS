'use strict';
const A = b, B = b;
(function (c, d) {
    const y = b, z = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(y(0x19a)) / (0x25aa + 0xc1f + -0x162 * 0x24) * (-parseInt(y(0x198)) / (0xe * 0x2be + 0x70f + -0x2d71)) + parseInt(z(0x173)) / (-0x12af + 0xdf * 0x29 + -0x1 * 0x1105) * (-parseInt(z(0x190)) / (0x1fd9 + 0x27c + -0x2251)) + parseInt(z(0x174)) / (-0x1e39 + 0xdf * 0x12 + 0xe90) + -parseInt(z(0x17c)) / (-0x7d * 0x50 + 0x317 + 0x23ff * 0x1) * (-parseInt(z(0x193)) / (-0x7f1 * -0x4 + 0x1c7e + -0x3c3b)) + parseInt(y(0x196)) / (0x4b * -0xc + 0xe6 * 0x15 + 0xf52 * -0x1) + -parseInt(y(0x176)) / (-0x1a88 + 0x343 + 0x174e) * (-parseInt(z(0x189)) / (-0x169 * -0x5 + -0x1 * -0x199a + 0x21 * -0xfd)) + parseInt(z(0x19e)) / (0x247c + -0x895 * 0x2 + -0x1347) * (-parseInt(z(0x188)) / (-0x1d4d + 0x1714 + 0x645));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x9d * 0x7bf + -0xeb6f + -0x9789));
var __importDefault = this && this[A(0x19b) + A(0x17f)] || function (c) {
    const C = A;
    return c && c[C(0x199)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x250d + 0x25f * -0x4 + -0x7 * -0x6d9);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[A(0x1a2)] = !![], Object[B(0x191) + B(0x186)](exports, A(0x199), k);
function a() {
    const F = [
        'key',
        'findOne',
        '../../help',
        '../../mode',
        '../../erro',
        'ynQCB',
        'tMessageBa',
        '\x20found\x20wit',
        'sendMessag',
        'ERR_DELETE',
        'ers/GetTic',
        'number',
        'isDeleted',
        '5706SWwryx',
        '1092260PclNXT',
        'update',
        '6399VUKYkU',
        'model',
        '_WAPP_MSG',
        'isGroup',
        'where',
        'h\x20this\x20ID.',
        '175356VUklmx',
        'ers/GetWbo',
        'rs/AppErro',
        'fault',
        'ls/Ticket',
        'parse',
        'ketWbotBai',
        'leys',
        'g.us',
        'contact',
        'erty',
        'include',
        '4092vOKYOe',
        '1490KGOQpw',
        'ieugb',
        'ls/Message',
        'log',
        's.whatsapp',
        'delete',
        'dCxYg',
        '8hmiWxK',
        'defineProp',
        'KPADi',
        '28DKeLzd',
        'ticket',
        '.net',
        '1559752iYjUwX',
        'bQooz',
        '60644KhDMro',
        '__esModule',
        '3hubZsL',
        '__importDe',
        'NaIPp',
        'default',
        '16489ZIjCfl',
        'ileys',
        'dataJson',
        'No\x20message',
        'value'
    ];
    a = function () {
        return F;
    };
    return a();
}
const AppError_1 = __importDefault(require(A(0x16a) + B(0x17e) + 'r')), Message_1 = __importDefault(require(B(0x169) + A(0x18b))), Ticket_1 = __importDefault(require(A(0x169) + B(0x180))), GetTicketWbotBaileys_1 = __importDefault(require(A(0x168) + A(0x170) + B(0x182) + B(0x183))), GetWbotMessageBaileys_1 = __importDefault(require(A(0x168) + A(0x17d) + B(0x16c) + B(0x19f))), DeleteWhatsAppMessage = async i => {
        const D = B, E = B, j = {};
        j[D(0x192)] = D(0x194), j[E(0x197)] = D(0x185), j[D(0x18f)] = D(0x1a1) + E(0x16d) + E(0x17b), j[E(0x18a)] = D(0x184), j[D(0x16b)] = E(0x18d) + E(0x195), j[D(0x19c)] = D(0x16f) + E(0x178);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[D(0x177)] = Ticket_1[D(0x19d)], n['as'] = l[E(0x192)], n[D(0x187)] = [l[E(0x197)]];
        const o = {};
        o[D(0x17a)] = m, o[E(0x187)] = [n];
        const p = await Message_1[E(0x19d)][D(0x167)](o);
        if (!p)
            throw new AppError_1[(D(0x19d))](l[E(0x18f)]);
        const {ticket: q} = p, r = await (-0x1f * 0xe0 + -0xa4 + 0x1bc4, GetWbotMessageBaileys_1[D(0x19d)])(q, i);
        try {
            const t = await (-0x1a4f + 0x20e + 0x7 * 0x377, GetTicketWbotBaileys_1[E(0x19d)])(q), u = r, v = JSON[D(0x181)](u[E(0x1a0)]), w = {};
            w[E(0x18e)] = v[D(0x166)], await t[D(0x16e) + 'e'](q[E(0x185)][D(0x171)] + '@' + (q[E(0x179)] ? l[E(0x18a)] : l[E(0x16b)]), w);
        } catch (x) {
            console[D(0x18c)](x);
            throw new AppError_1[(D(0x19d))](l[E(0x19c)]);
        }
        const s = {};
        return s[E(0x172)] = !![], await p[E(0x175)](s), p;
    };
exports[A(0x19d)] = DeleteWhatsAppMessage;