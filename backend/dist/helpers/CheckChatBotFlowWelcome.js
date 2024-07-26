'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(C(0x10f)) / (0x5d2 + 0x6 * 0x315 + -0x184f) * (parseInt(D(0x104)) / (0x1 * -0x1ba1 + 0x2 * -0xaa9 + 0x1 * 0x30f5)) + parseInt(C(0x120)) / (0x1851 * -0x1 + 0x2101 + -0x8ad) + parseInt(C(0x107)) / (-0x25c8 + -0x374 + 0x2940) + parseInt(D(0x117)) / (-0x1 * -0x127d + 0xea1 + 0x2119 * -0x1) * (-parseInt(C(0x10d)) / (0x1 * -0xa3 + 0xebe + -0xe15)) + parseInt(D(0x113)) / (-0x18a + -0x1fba + 0x214b) + parseInt(C(0x137)) / (-0x2db * -0x1 + -0x22c * 0x1 + -0xa7 * 0x1) + parseInt(D(0x125)) / (-0x249b * -0x1 + -0x14c2 * 0x1 + -0xfd0) * (parseInt(C(0x105)) / (0xd * 0x10 + -0x10b7 + 0xff1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4c5a * -0x3d + 0xe8e90 + 0x40 * -0x4f49));
var __importDefault = this && this[E(0x10c) + E(0x128)] || function (c) {
    const G = F;
    return c && c[G(0x109)] ? c : { 'default': c };
};
const k = {};
k[F(0x118)] = !![], Object[F(0x129) + E(0x114)](exports, E(0x109), k);
function a() {
    const J = [
        'contactId',
        '__importDe',
        '6pUmVFH',
        'kEUdg',
        '1WkZwJy',
        'ticketId',
        'update',
        'findOne',
        '6342903mSnlJM',
        'erty',
        'owWhatsApp',
        'default',
        '3706790IhRKYj',
        'value',
        'Contact',
        's/Whatsapp',
        'number',
        'ateLogTick',
        'tenantId',
        '../models/',
        'whatsappId',
        '1047066VdzONf',
        'key',
        'isActive',
        'etService',
        's/ChatFlow',
        '9LlRjdA',
        'chatFlowId',
        'ctive',
        'fault',
        'defineProp',
        'Services/I',
        'Setting',
        'SgrFi',
        'ChatFlow',
        'where',
        'type',
        'isDeleted',
        'Service',
        'from',
        's/TicketSe',
        'channel',
        'chatBot',
        'rvices/Cre',
        '5511312eEQbWD',
        '../service',
        'Service/Sh',
        'flow',
        'isGroup',
        'botTicketA',
        'lineList',
        'sContactTe',
        'findByPk',
        '2799514uCEtGv',
        '9985020EBXhbw',
        'find',
        '183384AbGGYl',
        'start',
        '__esModule',
        'userId'
    ];
    a = function () {
        return J;
    };
    return a();
}
const Contact_1 = __importDefault(require(E(0x11e) + E(0x119))), Setting_1 = __importDefault(require(F(0x11e) + F(0x12b))), ChatFlow_1 = __importDefault(require(F(0x11e) + F(0x12d))), CreateLogTicketService_1 = __importDefault(require(F(0x138) + F(0x133) + E(0x136) + E(0x11c) + F(0x123))), IsContactTest_1 = __importDefault(require(E(0x138) + E(0x124) + F(0x12a) + E(0x102) + 'st')), ShowWhatsAppService_1 = __importDefault(require(F(0x138) + F(0x11a) + E(0x139) + F(0x115) + E(0x131))), CheckChatBotFlowWelcome = async j => {
        const H = E, I = E, l = {};
        l[H(0x10e)] = I(0x100) + H(0x127), l[I(0x12c)] = H(0x135);
        const m = l;
        if (j[I(0x10a)] || j[H(0x13b)])
            return;
        const n = {};
        n[I(0x121)] = m[H(0x10e)], n[H(0x11d)] = j[H(0x11d)];
        const o = {};
        o[I(0x12e)] = n;
        const p = await Setting_1[H(0x116)][H(0x112)](o), q = {};
        q['id'] = j[H(0x11f)], q[I(0x11d)] = j[I(0x11d)];
        const r = await (0x2654 + 0x2380 + 0x3b1 * -0x14, ShowWhatsAppService_1[H(0x116)])(q), s = r?.[H(0x126)] || p?.[I(0x118)];
        if (!s)
            return;
        const t = {};
        t['id'] = +s, t[I(0x11d)] = j[I(0x11d)], t[I(0x122)] = !![], t[H(0x130)] = ![];
        const u = {};
        u[I(0x12e)] = t;
        const v = await ChatFlow_1[H(0x116)][I(0x112)](u);
        if (!v)
            return;
        const w = await Contact_1[I(0x116)][I(0x103)](j[H(0x10b)]), {celularTeste: x} = v, y = w?.[I(0x11b)];
        if (await (0x15cc + 0xb88 + -0x2154, IsContactTest_1[H(0x116)])(y, x, j[I(0x134)]))
            return;
        const z = v[H(0x13a)][I(0x101)][H(0x106)](B => B[I(0x132)] === I(0x108));
        await j[H(0x111)]({
            'chatFlowId': v['id'],
            'stepChatFlow': z['to'],
            'lastInteractionBot': new Date()
        });
        const A = {};
        A[H(0x110)] = j['id'], A[I(0x12f)] = m[I(0x12c)], await (0x9a6 + -0x3 * -0x58f + -0x1a53 * 0x1, CreateLogTicketService_1[I(0x116)])(A);
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x17bd * -0x1 + 0x9 * -0x344 + -0x6a7 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[E(0x116)] = CheckChatBotFlowWelcome;