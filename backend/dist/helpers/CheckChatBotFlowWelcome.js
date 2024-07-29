'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(C(0x167)) / (0x2406 * 0x1 + -0x1 * -0xfc + -0x2501 * 0x1) * (parseInt(D(0x13b)) / (-0x1fb4 + 0x783 * 0x1 + 0x1833)) + parseInt(D(0x173)) / (0xb21 + -0xa14 + 0x1 * -0x10a) * (parseInt(D(0x14e)) / (-0x20a4 + 0x1 * 0x1e41 + 0x5 * 0x7b)) + parseInt(C(0x159)) / (-0x3 * 0x451 + -0x203a + 0x2d32) + parseInt(C(0x145)) / (0x1306 * -0x2 + -0x25b1 + 0x4bc3) + -parseInt(C(0x15b)) / (0x13 * -0x203 + 0x2072 + 0x5ce) * (parseInt(C(0x146)) / (-0x23bb + 0x1 * -0x1f3b + 0x42fe)) + -parseInt(C(0x164)) / (0x177f + 0x1f16 * 0x1 + -0x1b46 * 0x2) + -parseInt(D(0x160)) / (0x1911 + -0x3 * 0x312 + -0xfd1) * (-parseInt(C(0x16e)) / (0x1533 + -0x1fd * 0xc + 0x2 * 0x15a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7db * -0x13 + 0x57753 + -0x228d1));
function a() {
    const J = [
        '1051255anOLkL',
        'Contact',
        '70wiChyD',
        '__importDe',
        'defineProp',
        'Service/Sh',
        'type',
        '4070850PkQUHA',
        'ateLogTick',
        'Services/I',
        'findOne',
        '1923948YntAIm',
        'update',
        'lineList',
        '9593BMulKp',
        'owWhatsApp',
        'isGroup',
        'avFul',
        'number',
        'tenantId',
        '../service',
        '11trPRAG',
        'start',
        'value',
        'chatBot',
        'whatsappId',
        '295956JOhKhB',
        'etService',
        'findByPk',
        'chatFlowId',
        'fTnqE',
        '82QIuLxX',
        'botTicketA',
        'key',
        'fault',
        'erty',
        'sContactTe',
        'find',
        's/Whatsapp',
        'contactId',
        'flow',
        '643956WshDKN',
        '205816CpVhip',
        'rvices/Cre',
        'userId',
        '../models/',
        'default',
        'from',
        'ctive',
        'Setting',
        '16CHLpPV',
        'ChatFlow',
        'isDeleted',
        'ticketId',
        'isActive',
        's/ChatFlow',
        '__esModule',
        'channel',
        'where',
        'Service',
        's/TicketSe'
    ];
    a = function () {
        return J;
    };
    return a();
}
var __importDefault = this && this[E(0x15c) + E(0x13e)] || function (c) {
    const G = F;
    return c && c[G(0x154)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x733 * 0x2 + -0x192c * 0x1 + -0x3 * -0x3ff);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[F(0x170)] = !![], Object[F(0x15d) + E(0x13f)](exports, E(0x154), k);
const Contact_1 = __importDefault(require(E(0x149) + F(0x15a))), Setting_1 = __importDefault(require(E(0x149) + E(0x14d))), ChatFlow_1 = __importDefault(require(E(0x149) + E(0x14f))), CreateLogTicketService_1 = __importDefault(require(E(0x16d) + E(0x158) + F(0x147) + F(0x161) + E(0x137))), IsContactTest_1 = __importDefault(require(F(0x16d) + F(0x153) + F(0x162) + F(0x140) + 'st')), ShowWhatsAppService_1 = __importDefault(require(E(0x16d) + E(0x142) + E(0x15e) + F(0x168) + E(0x157))), CheckChatBotFlowWelcome = async j => {
        const H = E, I = E, l = {};
        l[H(0x13a)] = I(0x13c) + H(0x14c), l[I(0x16a)] = H(0x171);
        const m = l;
        if (j[H(0x148)] || j[H(0x169)])
            return;
        const n = {};
        n[I(0x13d)] = m[H(0x13a)], n[H(0x16c)] = j[I(0x16c)];
        const o = {};
        o[H(0x156)] = n;
        const p = await Setting_1[H(0x14a)][I(0x163)](o), q = {};
        q['id'] = j[H(0x172)], q[I(0x16c)] = j[H(0x16c)];
        const r = await (-0x5e2 + -0x343 + 0x925, ShowWhatsAppService_1[H(0x14a)])(q), s = r?.[H(0x139)] || p?.[H(0x170)];
        if (!s)
            return;
        const t = {};
        t['id'] = +s, t[H(0x16c)] = j[H(0x16c)], t[I(0x152)] = !![], t[H(0x150)] = ![];
        const u = {};
        u[H(0x156)] = t;
        const v = await ChatFlow_1[H(0x14a)][I(0x163)](u);
        if (!v)
            return;
        const w = await Contact_1[I(0x14a)][I(0x138)](j[I(0x143)]), {celularTeste: x} = v, y = w?.[I(0x16b)];
        if (await (0x3f0 + 0x247f * -0x1 + 0x1 * 0x208f, IsContactTest_1[I(0x14a)])(y, x, j[H(0x155)]))
            return;
        const z = v[H(0x144)][I(0x166)][I(0x141)](B => B[I(0x14b)] === I(0x16f));
        await j[I(0x165)]({
            'chatFlowId': v['id'],
            'stepChatFlow': z['to'],
            'lastInteractionBot': new Date()
        });
        const A = {};
        A[H(0x151)] = j['id'], A[I(0x15f)] = m[H(0x16a)], await (0x3d * 0xf + 0x6e9 + -0xa7c, CreateLogTicketService_1[I(0x14a)])(A);
    };
exports[F(0x14a)] = CheckChatBotFlowWelcome;