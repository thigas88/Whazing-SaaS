'use strict';
const D = b, E = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x23db + 0xe19 + -0x9 * 0x564);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(B(0x1ac)) / (0x272 * 0x5 + 0x1ef7 + 0x566 * -0x8) + -parseInt(C(0x1af)) / (-0x26 + 0xa3 * 0xb + -0x6d9) + parseInt(C(0x195)) / (0x139c + 0xb86 * -0x3 + 0xef9) + parseInt(B(0x187)) / (0x1d98 + 0x6 * -0x103 + -0x3 * 0x7d6) + -parseInt(C(0x17e)) / (0x1101 * 0x2 + 0x8f * 0x39 + -0x41d4) * (-parseInt(C(0x172)) / (-0x190 * 0x7 + 0x18f8 + -0xe02)) + parseInt(B(0x184)) / (-0x7a * 0x2 + 0x17e4 + -0x16e9) * (parseInt(C(0x177)) / (-0x1ad9 + -0x395 * -0x2 + 0x2d1 * 0x7)) + -parseInt(C(0x197)) / (-0x3b * 0x92 + 0x9 * 0x32c + 0x107 * 0x5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x9088d + 0x7 * -0xcc19 + 0x19b0ea));
var __importDefault = this && this[D(0x173) + E(0x171)] || function (c) {
    const F = E;
    return c && c[F(0x17c)] ? c : { 'default': c };
};
const k = {};
k[E(0x174)] = !![], Object[E(0x1b5) + E(0x1b6)](exports, D(0x17c), k);
const VerifyStepsChatFlowTicket_1 = __importDefault(require(D(0x19d) + E(0x17a) + E(0x18f) + D(0x199) + D(0x181))), FindOrCreateTicketService_1 = __importDefault(require(D(0x180) + E(0x1a9) + D(0x170) + D(0x1b9) + E(0x179))), VerifyBusinessHours_1 = __importDefault(require(D(0x1b4) + D(0x178) + D(0x19b) + E(0x1a2) + E(0x18c))), ShowWhatsAppService_1 = __importDefault(require(D(0x1b0) + E(0x1b8) + D(0x190) + D(0x17b))), InstagramVerifyContact_1 = __importDefault(require(E(0x19f) + D(0x1b3) + D(0x194))), InstagramVerifyMediaMessage_1 = __importDefault(require(E(0x19f) + D(0x186) + E(0x17f))), InstagramVerifyMessage_1 = __importDefault(require(D(0x19f) + D(0x1ad) + E(0x18d))), handleRealtimeReceive = async (h, i) => {
        const G = D, H = D, j = {};
        j[G(0x1a6)] = function (z, A) {
            return z === A;
        }, j[H(0x1a7)] = H(0x1ab), j[H(0x193)] = function (z, A) {
            return z !== A;
        }, j[G(0x198)] = G(0x19a), j[H(0x185)] = function (z, A) {
            return z / A;
        };
        const l = j, m = {};
        m['id'] = i['id'];
        const n = await (0x53 * -0x59 + -0x1d3c + -0x135d * -0x3, ShowWhatsAppService_1[H(0x1b2)])(m), o = {};
        o[G(0x1b7)] = h[G(0x1a1)][G(0x1b7)], o[G(0x1aa) + G(0x192)] = '';
        const p = await i[H(0x1a5)][G(0x1a3) + 'ad'](o)[G(0x182)](), q = await (0x871 * 0x1 + -0x1477 * 0x1 + 0xa2 * 0x13, InstagramVerifyContact_1[G(0x1b2)])(p, i, n[G(0x183)]), r = i?.[G(0x1a8) + 'in'], s = l[H(0x1a6)](r?.['pk'], h[G(0x1a1)][G(0x18b)]), t = {};
        t[H(0x1ae)] = q, t[H(0x19e)] = i['id'], t[H(0x1b1) + H(0x1a0)] = s ? 0x1194 + -0x1 * 0x1ef6 + 0xd62 : 0x83b + -0x901 + -0xc7 * -0x1, t[H(0x183)] = n[H(0x183)], t[G(0x175)] = { ...h[G(0x1a1)] }, t[G(0x18a)] = l[G(0x1a7)], t[G(0x175)][H(0x191)] = s;
        const u = await (-0x124a + 0x3f * 0xd + 0xf17, FindOrCreateTicketService_1[G(0x1b2)])(t);
        if (u?.[G(0x17d) + G(0x176)])
            return;
        l[H(0x193)](h[H(0x1a1)][H(0x188)], l[G(0x198)]) ? await (-0x10e4 + 0x5 * -0x23 + 0x1 * 0x1193, InstagramVerifyMediaMessage_1[H(0x1b2)])(h, s, u, q) : await (0x153f + 0x1a21 + -0x2f60, InstagramVerifyMessage_1[G(0x1b2)])(h, s, u, q);
        const v = await i[H(0x18e)][G(0x1a3) + 'ad'](h[H(0x1a1)][G(0x1b7)]);
        v[G(0x19c) + 'en'](h[H(0x1a1)][H(0x196)]);
        const w = {};
        w[G(0x191)] = s, w[G(0x189)] = h[H(0x1a1)]?.[H(0x19a)] || '', await (0x5 * 0x19b + 0x1b5c + -0x2363, VerifyStepsChatFlowTicket_1[H(0x1b2)])(w, u), await (0x1bb * -0xd + -0x11f * -0x10 + 0x48f, VerifyBusinessHours_1[G(0x1b2)])({
            'fromMe': s,
            'timestamp': l[G(0x185)](h[H(0x1a1)][G(0x1a4)], 0xcc7 * -0x1 + -0xd1 * 0xb + 0x2d * 0x92)
        }, u);
    };
exports[E(0x1b2)] = handleRealtimeReceive;
function a() {
    const I = [
        'urs',
        'sage',
        'entity',
        'VerifyStep',
        'howWhatsAp',
        'fromMe',
        'sor',
        'ioOgO',
        'tact',
        '2541894qjfWCI',
        'item_id',
        '5731560fcSgpx',
        'pdlDB',
        'sChatFlowT',
        'text',
        'ers/Verify',
        'markItemSe',
        '../ChatFlo',
        'whatsappId',
        './Instagra',
        'ages',
        'message',
        'BusinessHo',
        'directThre',
        'timestamp',
        'feed',
        'thdtc',
        'cKiHD',
        'accountLog',
        'ervices/Fi',
        'oldest_cur',
        'instagram',
        '73318wNmnHN',
        'mVerifyMes',
        'contact',
        '1050500nGqMEv',
        '../Whatsap',
        'unreadMess',
        'default',
        'mVerifyCon',
        '../WbotSer',
        'defineProp',
        'erty',
        'thread_id',
        'pService/S',
        'TicketServ',
        'ndOrCreate',
        'fault',
        '3792YlPNYm',
        '__importDe',
        'value',
        'msg',
        'Message',
        '4288MqGbLv',
        'vices/help',
        'ice',
        'wServices/',
        'pService',
        '__esModule',
        'isFarewell',
        '1795LLkiLi',
        'iaMessage',
        '../TicketS',
        'icket',
        'request',
        'tenantId',
        '7882szHJEw',
        'LFwwA',
        'mVerifyMed',
        '547936hTkNiV',
        'item_type',
        'body',
        'channel',
        'user_id'
    ];
    a = function () {
        return I;
    };
    return a();
}