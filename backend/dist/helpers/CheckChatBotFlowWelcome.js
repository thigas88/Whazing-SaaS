'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(C(0x70)) / (-0x121c + -0x1 * -0x9fe + -0xe7 * -0x9) * (-parseInt(C(0x6d)) / (-0x109e + 0xac8 + -0x176 * -0x4)) + -parseInt(D(0x7b)) / (0x408 + -0x1622 + -0x1 * -0x121d) + -parseInt(D(0x7a)) / (-0x185 * 0x11 + -0x549 * -0x2 + 0xf47) * (-parseInt(D(0x81)) / (0x1b5d + -0x4 * 0x60a + -0x330)) + parseInt(D(0xa0)) / (-0x231c + -0x797 * -0x4 + -0x4c6 * -0x1) + parseInt(C(0x96)) / (0x2 * 0x964 + -0x741 * 0x3 + 0x302 * 0x1) * (-parseInt(C(0x7c)) / (0xc26 + -0x55 * 0x3d + 0x823)) + parseInt(C(0x9a)) / (0x1 * 0x1c8f + 0x660 + -0x22e6) * (-parseInt(C(0x8a)) / (-0x1 * 0x1095 + -0xc * -0x22b + -0x965)) + parseInt(D(0x75)) / (-0xd93 + 0x295 * 0xb + 0x2f5 * -0x5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2ab * 0x6e5 + 0x4609d * 0x1 + 0x855 * -0x19f));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x853 + 0xdb7 + -0x159d);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const J = [
        '__importDe',
        'erty',
        'botTicketA',
        'Service/Sh',
        'whatsappId',
        'tenantId',
        '730BRXKGx',
        'findByPk',
        'owWhatsApp',
        '__esModule',
        'sContactTe',
        'fault',
        'ateLogTick',
        'defineProp',
        's/ChatFlow',
        'lineList',
        'Services/I',
        's/Whatsapp',
        '6987659iaQqra',
        'default',
        'ticketId',
        'rvices/Cre',
        '8793qrgydn',
        'isDeleted',
        'isActive',
        'etService',
        'find',
        'update',
        '1560594RlEwNY',
        '../models/',
        'number',
        'chatBot',
        'value',
        'Frktk',
        'key',
        'findOne',
        'channel',
        'contactId',
        '28218TpnqjR',
        'from',
        'Setting',
        '65YtxUda',
        'ChatFlow',
        'type',
        'Service',
        'UUCaT',
        '4379848LBgmMi',
        '../service',
        'ctive',
        'Contact',
        'userId',
        '4rHyMqC',
        '1145856OhsEwh',
        '8uNIkbA',
        's/TicketSe',
        'flow',
        'isGroup',
        'chatFlowId',
        '2416675LEwQkA',
        'start',
        'where'
    ];
    a = function () {
        return J;
    };
    return a();
}
var __importDefault = this && this[E(0x84) + F(0x8f)] || function (c) {
    const G = F;
    return c && c[G(0x8d)] ? c : { 'default': c };
};
const k = {};
k[F(0xa4)] = !![], Object[E(0x91) + F(0x85)](exports, F(0x8d), k);
const Contact_1 = __importDefault(require(F(0xa1) + F(0x78))), Setting_1 = __importDefault(require(E(0xa1) + E(0x6f))), ChatFlow_1 = __importDefault(require(F(0xa1) + E(0x71))), CreateLogTicketService_1 = __importDefault(require(F(0x76) + E(0x7d) + E(0x99) + F(0x90) + F(0x9d))), IsContactTest_1 = __importDefault(require(E(0x76) + F(0x92) + F(0x94) + E(0x8e) + 'st')), ShowWhatsAppService_1 = __importDefault(require(F(0x76) + F(0x95) + E(0x87) + F(0x8c) + E(0x73))), CheckChatBotFlowWelcome = async j => {
        const H = E, I = F, l = {};
        l[H(0xa5)] = I(0x86) + I(0x77), l[H(0x74)] = H(0xa3);
        const m = l;
        if (j[H(0x79)] || j[I(0x7f)])
            return;
        const n = {};
        n[I(0xa6)] = m[I(0xa5)], n[H(0x89)] = j[I(0x89)];
        const o = {};
        o[I(0x83)] = n;
        const p = await Setting_1[H(0x97)][I(0xa7)](o), q = {};
        q['id'] = j[I(0x88)], q[H(0x89)] = j[I(0x89)];
        const r = await (0x1d3a + 0x180c + -0x3546, ShowWhatsAppService_1[I(0x97)])(q), s = r?.[H(0x80)] || p?.[I(0xa4)];
        if (!s)
            return;
        const t = {};
        t['id'] = +s, t[H(0x89)] = j[I(0x89)], t[H(0x9c)] = !![], t[H(0x9b)] = ![];
        const u = {};
        u[I(0x83)] = t;
        const v = await ChatFlow_1[H(0x97)][I(0xa7)](u);
        if (!v)
            return;
        const w = await Contact_1[H(0x97)][I(0x8b)](j[I(0xa9)]), {celularTeste: x} = v, y = w?.[H(0xa2)];
        if (await (-0x5f * 0x55 + -0x164e + 0x35d9, IsContactTest_1[I(0x97)])(y, x, j[H(0xa8)]))
            return;
        const z = v[I(0x7e)][H(0x93)][I(0x9e)](B => B[H(0x6e)] === I(0x82));
        await j[I(0x9f)]({
            'chatFlowId': v['id'],
            'stepChatFlow': z['to'],
            'lastInteractionBot': new Date()
        });
        const A = {};
        A[H(0x98)] = j['id'], A[H(0x72)] = m[H(0x74)], await (-0x1dd5 + -0x1 * 0x137d + -0x3152 * -0x1, CreateLogTicketService_1[H(0x97)])(A);
    };
exports[F(0x97)] = CheckChatBotFlowWelcome;