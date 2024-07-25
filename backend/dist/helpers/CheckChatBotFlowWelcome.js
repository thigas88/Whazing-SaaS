'use strict';
function a() {
    const J = [
        '8027544RtWqeQ',
        's/Whatsapp',
        'type',
        '3OhUaHt',
        'XQWnY',
        'whatsappId',
        '92233IjTkFU',
        'chatFlowId',
        'fault',
        'ctive',
        'qmawb',
        'sContactTe',
        'default',
        'from',
        'ticketId',
        '../models/',
        'lineList',
        'number',
        'Setting',
        'userId',
        '__esModule',
        'flow',
        '../service',
        'botTicketA',
        '908140NkwCFS',
        'start',
        'rvices/Cre',
        '__importDe',
        's/ChatFlow',
        'erty',
        'update',
        'Contact',
        '27879510JcwlZv',
        'tenantId',
        '40OmEaUn',
        'isActive',
        'ateLogTick',
        'contactId',
        '1845724WhVTrC',
        'channel',
        '982341KPpEiF',
        '6622092YxSbSn',
        'ChatFlow',
        'Services/I',
        'find',
        'etService',
        'key',
        'value',
        'where',
        'chatBot',
        'Service',
        '16bKXVIE',
        'findOne',
        'findByPk',
        'owWhatsApp',
        'Service/Sh',
        'isGroup',
        'isDeleted',
        's/TicketSe',
        'defineProp'
    ];
    a = function () {
        return J;
    };
    return a();
}
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(C(0xd7)) / (-0x14d2 + -0xced + -0x14 * -0x1b0) * (parseInt(C(0xf3)) / (-0x7c7 + -0x549 * 0x4 + 0x1ced)) + parseInt(C(0x110)) / (0x446 + 0x2044 + -0x2487) * (parseInt(C(0xf7)) / (0x13e6 + 0xbb3 * -0x1 + -0x82f)) + -parseInt(C(0xe9)) / (-0x17d * -0xb + -0x1 * 0x1d07 + 0x127 * 0xb) + parseInt(D(0xfa)) / (0x1893 * -0x1 + 0x2cf * -0x1 + 0x8 * 0x36d) + -parseInt(D(0x10d)) / (0x1 * 0x2606 + -0x10f3 * 0x1 + -0x150c) + parseInt(C(0x104)) / (0x21 * 0xcc + 0xba * 0x9 + -0x20ce) * (-parseInt(D(0xf9)) / (-0x1cd * 0xa + 0x549 * -0x5 + 0x2c78 * 0x1)) + parseInt(D(0xf1)) / (-0xcb * 0x2f + -0x8d * -0x1 + 0x3ad * 0xa);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7 * 0x2182f + -0xa257e + 0xa28cb));
var __importDefault = this && this[E(0xec) + E(0xd9)] || function (c) {
    const G = F;
    return c && c[G(0xe5)] ? c : { 'default': c };
};
const k = {};
k[E(0x100)] = !![], Object[F(0x10c) + E(0xee)](exports, E(0xe5), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * -0xcb5 + 0x13ea * -0x1 + -0x4ab);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Contact_1 = __importDefault(require(F(0xe0) + E(0xf0))), Setting_1 = __importDefault(require(E(0xe0) + F(0xe3))), ChatFlow_1 = __importDefault(require(E(0xe0) + F(0xfb))), CreateLogTicketService_1 = __importDefault(require(F(0xe7) + F(0x10b) + F(0xeb) + F(0xf5) + F(0xfe))), IsContactTest_1 = __importDefault(require(F(0xe7) + E(0xed) + E(0xfc) + E(0xdc) + 'st')), ShowWhatsAppService_1 = __importDefault(require(E(0xe7) + F(0x10e) + F(0x108) + E(0x107) + E(0x103))), CheckChatBotFlowWelcome = async j => {
        const H = E, I = F, l = {};
        l[H(0xd5)] = I(0xe8) + H(0xda), l[I(0xdb)] = I(0x102);
        const m = l;
        if (j[I(0xe4)] || j[I(0x109)])
            return;
        const n = {};
        n[I(0xff)] = m[H(0xd5)], n[I(0xf2)] = j[H(0xf2)];
        const o = {};
        o[I(0x101)] = n;
        const p = await Setting_1[I(0xdd)][H(0x105)](o), q = {};
        q['id'] = j[H(0xd6)], q[I(0xf2)] = j[H(0xf2)];
        const r = await (0x1 * 0x796 + 0x22d4 + -0x2a6a, ShowWhatsAppService_1[I(0xdd)])(q), s = r?.[H(0xd8)] || p?.[I(0x100)];
        if (!s)
            return;
        const t = {};
        t['id'] = +s, t[H(0xf2)] = j[H(0xf2)], t[I(0xf4)] = !![], t[H(0x10a)] = ![];
        const u = {};
        u[I(0x101)] = t;
        const v = await ChatFlow_1[H(0xdd)][I(0x105)](u);
        if (!v)
            return;
        const w = await Contact_1[H(0xdd)][H(0x106)](j[H(0xf6)]), {celularTeste: x} = v, y = w?.[H(0xe2)];
        if (await (-0x1df8 + -0x1926 + 0x11 * 0x33e, IsContactTest_1[I(0xdd)])(y, x, j[H(0xf8)]))
            return;
        const z = v[H(0xe6)][H(0xe1)][H(0xfd)](B => B[I(0xde)] === H(0xea));
        await j[I(0xef)]({
            'chatFlowId': v['id'],
            'stepChatFlow': z['to'],
            'lastInteractionBot': new Date()
        });
        const A = {};
        A[H(0xdf)] = j['id'], A[H(0x10f)] = m[H(0xdb)], await (0x1 * -0x1fab + 0x1d0c + -0x3d * -0xb, CreateLogTicketService_1[I(0xdd)])(A);
    };
exports[E(0xdd)] = CheckChatBotFlowWelcome;