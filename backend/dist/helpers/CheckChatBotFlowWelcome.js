'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(C(0x1d5)) / (0x8 * 0x275 + -0x1a24 + 0x67d) + -parseInt(D(0x1d0)) / (-0x226f + -0xaa6 + 0x2d17) + parseInt(C(0x1ef)) / (-0xafa + 0x2e * 0xb5 + 0x1 * -0x1589) * (parseInt(D(0x1fd)) / (0x1738 + 0x56 * -0x16 + 0xb0 * -0x17)) + -parseInt(D(0x1e3)) / (0x5b * -0x43 + -0x1335 + 0x1 * 0x2b0b) * (parseInt(C(0x20b)) / (-0x9e4 + 0x3 * 0xa22 + -0x147c)) + parseInt(C(0x208)) / (-0x1b8c + 0x10ba + 0xad9 * 0x1) * (parseInt(C(0x1f7)) / (-0x29b * -0x1 + -0xaeb + -0x18 * -0x59)) + -parseInt(D(0x1ff)) / (0xe20 + 0xce * -0xb + -0x53d * 0x1) + parseInt(C(0x1e6)) / (-0x1a7f + 0x438 * 0x1 + 0x1 * 0x1651);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x609df + -0x8fdc7 + 0x1c0117));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1a0a + 0x2210 + -0x2b * 0x25);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[E(0x1d7) + F(0x1e0)] || function (c) {
    const G = F;
    return c && c[G(0x1e2)] ? c : { 'default': c };
};
const k = {};
k[F(0x1d2)] = !![], Object[E(0x1f5) + E(0x206)](exports, F(0x1e2), k);
const Contact_1 = __importDefault(require(E(0x1e8) + F(0x209))), Setting_1 = __importDefault(require(E(0x1e8) + F(0x200))), ChatFlow_1 = __importDefault(require(F(0x1e8) + E(0x201))), CreateLogTicketService_1 = __importDefault(require(E(0x1d9) + F(0x1dd) + F(0x1f1) + F(0x1d6) + F(0x20a))), IsContactTest_1 = __importDefault(require(E(0x1d9) + E(0x1e7) + F(0x1ed) + F(0x1f6) + 'st')), ShowWhatsAppService_1 = __importDefault(require(F(0x1d9) + F(0x1e5) + E(0x1ee) + F(0x1e4) + E(0x1d8))), CheckChatBotFlowWelcome = async j => {
        const H = E, I = F, l = {};
        l[H(0x1ea)] = H(0x1e1) + H(0x1fa), l[I(0x1e9)] = I(0x1f3);
        const m = l;
        if (j[H(0x1d4)] || j[H(0x1da)])
            return;
        const n = {};
        n[H(0x1f2)] = m[H(0x1ea)], n[H(0x1dc)] = j[I(0x1dc)];
        const o = {};
        o[H(0x1f8)] = n;
        const p = await Setting_1[H(0x1de)][I(0x1eb)](o), q = {};
        q['id'] = j[H(0x1df)], q[I(0x1dc)] = j[H(0x1dc)];
        const r = await (-0xd2f + 0x25 * 0x7 + 0x616 * 0x2, ShowWhatsAppService_1[I(0x1de)])(q), s = r?.[H(0x207)] || p?.[I(0x1d2)];
        if (!s)
            return;
        const t = {};
        t['id'] = +s, t[H(0x1dc)] = j[I(0x1dc)], t[H(0x204)] = !![], t[H(0x1cf)] = ![];
        const u = {};
        u[H(0x1f8)] = t;
        const v = await ChatFlow_1[I(0x1de)][I(0x1eb)](u);
        if (!v)
            return;
        const w = await Contact_1[I(0x1de)][H(0x205)](j[I(0x202)]), {celularTeste: x} = v, y = w?.[I(0x1fe)];
        if (w[H(0x1f0)])
            return;
        if (await (0x78e + 0x1 * 0x18bd + 0x49d * -0x7, IsContactTest_1[H(0x1de)])(y, x, j[I(0x1fc)]))
            return;
        const z = v[H(0x1d3)][H(0x1f9)][H(0x1db)](B => B[I(0x1f4)] === I(0x1d1));
        await j[I(0x203)]({
            'chatFlowId': v['id'],
            'stepChatFlow': z['to'],
            'lastInteractionBot': new Date()
        });
        const A = {};
        A[I(0x1fb)] = j['id'], A[H(0x1ec)] = m[I(0x1e9)], await (-0x1359 + 0x1296 * 0x1 + -0x27 * -0x5, CreateLogTicketService_1[I(0x1de)])(A);
    };
function a() {
    const J = [
        'ChatFlow',
        'contactId',
        'update',
        'isActive',
        'findByPk',
        'erty',
        'chatFlowId',
        '3059XgoakR',
        'Contact',
        'etService',
        '139386IIbLnY',
        'isDeleted',
        '25496ilxQoe',
        'start',
        'value',
        'flow',
        'userId',
        '1048932ntONUw',
        'ateLogTick',
        '__importDe',
        'Service',
        '../service',
        'isGroup',
        'find',
        'tenantId',
        's/TicketSe',
        'default',
        'whatsappId',
        'fault',
        'botTicketA',
        '__esModule',
        '100MdbjlF',
        'owWhatsApp',
        's/Whatsapp',
        '31298430DqUiKv',
        's/ChatFlow',
        '../models/',
        'bDtue',
        'QKScb',
        'findOne',
        'type',
        'Services/I',
        'Service/Sh',
        '21cTyOEC',
        'disableBot',
        'rvices/Cre',
        'key',
        'chatBot',
        'from',
        'defineProp',
        'sContactTe',
        '248VAmInp',
        'where',
        'lineList',
        'ctive',
        'ticketId',
        'channel',
        '205300YEmBmh',
        'number',
        '10134684MFmbjv',
        'Setting'
    ];
    a = function () {
        return J;
    };
    return a();
}
exports[F(0x1de)] = CheckChatBotFlowWelcome;