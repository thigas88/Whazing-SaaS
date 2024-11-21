'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(B(0x103)) / (-0x75f + -0x1 * 0x2f8 + -0xa58 * -0x1) * (-parseInt(C(0xd5)) / (-0xda * -0x15 + 0x1aea + -0xe * 0x333)) + parseInt(C(0xfe)) / (-0x1006 + 0x6c4 * -0x5 + 0x31dd) * (parseInt(C(0xe7)) / (0x1cf4 + -0x24 * 0xb5 + -0x4 * 0xdf)) + -parseInt(B(0xf5)) / (0xce9 * 0x1 + 0x4 * 0x359 + -0x1a48) + parseInt(B(0xce)) / (0x2383 * -0x1 + 0x986 + 0x1a03) + parseInt(B(0xfc)) / (-0x5fa * -0x4 + 0xb92 + -0x2373) + -parseInt(B(0xd1)) / (0x7e2 + 0x2649 + -0x2e23) * (parseInt(C(0xc7)) / (0x637 * -0x1 + 0x1dd0 + -0x1790)) + parseInt(B(0xe9)) / (-0x1d5d + 0x9 * 0x43 + 0x1b0c) * (parseInt(B(0x104)) / (-0x21a * 0x9 + -0x175 * 0xf + 0x1 * 0x28d0));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x34182 * -0x3 + -0x456e3 * 0x2 + 0x1b90e6));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x656 * -0x3 + -0x1 * 0x250b + -0x2 * -0x1c69);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[D(0xf4) + E(0x109)] || function (c) {
    const F = D;
    return c && c[F(0xf3)] ? c : { 'default': c };
};
const k = {};
function a() {
    const I = [
        'VfVIC',
        'AReTV',
        '1887417dVFWTC',
        'ervices/Fi',
        'mVerifyCon',
        'thread_id',
        'tenantId',
        'Message',
        'text',
        '1580088eNbNhs',
        'isFarewell',
        'user_id',
        '8TZlRwO',
        'contact',
        'TicketServ',
        'message',
        '18KlXzSa',
        'item_id',
        'mVerifyMed',
        'oldest_cur',
        'default',
        'directThre',
        'unreadMess',
        'msg',
        'iaMessage',
        './Instagra',
        'ndOrCreate',
        'BusinessHo',
        'entity',
        'value',
        'pService',
        'psDQH',
        'ers/Verify',
        '../WbotSer',
        '508vJtHAf',
        '../TicketS',
        '2020QpFobp',
        'ice',
        'defineProp',
        '../Whatsap',
        'markItemSe',
        'accountLog',
        'item_type',
        'VerifyStep',
        'howWhatsAp',
        'whatsappId',
        '__esModule',
        '__importDe',
        '1001535oOucqo',
        'urs',
        'sor',
        '../ChatFlo',
        'mVerifyMes',
        'sChatFlowT',
        'body',
        '7991858TNVPEY',
        'pService/S',
        '11601MyNslc',
        'vices/help',
        'uxgpl',
        'instagram',
        'feed',
        '110929vhSYYh',
        '5984rnGBlD',
        'qRmbX',
        'tact',
        'sage',
        'request',
        'fault',
        'timestamp',
        'fromMe',
        'icket',
        'channel',
        'wServices/',
        'erty',
        'ages'
    ];
    a = function () {
        return I;
    };
    return a();
}
k[D(0xe2)] = !![], Object[E(0xeb) + E(0x10f)](exports, E(0xf3), k);
const VerifyStepsChatFlowTicket_1 = __importDefault(require(E(0xf8) + E(0x10e) + D(0xf0) + D(0xfa) + E(0x10c))), FindOrCreateTicketService_1 = __importDefault(require(E(0xe8) + E(0xc8) + D(0xdf) + D(0xd3) + E(0xea))), VerifyBusinessHours_1 = __importDefault(require(D(0xe6) + D(0xff) + D(0xe5) + E(0xe0) + D(0xf6))), ShowWhatsAppService_1 = __importDefault(require(E(0xec) + E(0xfd) + D(0xf1) + E(0xe3))), InstagramVerifyContact_1 = __importDefault(require(D(0xde) + E(0xc9) + D(0x106))), InstagramVerifyMediaMessage_1 = __importDefault(require(E(0xde) + D(0xd7) + E(0xdd))), InstagramVerifyMessage_1 = __importDefault(require(E(0xde) + D(0xf9) + D(0x107))), handleRealtimeReceive = async (h, i) => {
        const G = E, H = E, j = {};
        j[G(0x100)] = function (z, A) {
            return z === A;
        }, j[G(0xe4)] = G(0x101), j[G(0x105)] = function (z, A) {
            return z !== A;
        }, j[H(0xc6)] = H(0xcd), j[H(0xc5)] = function (z, A) {
            return z / A;
        };
        const l = j, m = {};
        m['id'] = i['id'];
        const n = await (-0x1eae + -0x344 + 0x21f2, ShowWhatsAppService_1[H(0xd9)])(m), o = {};
        o[G(0xca)] = h[G(0xd4)][H(0xca)], o[G(0xd8) + H(0xf7)] = '';
        const p = await i[G(0x102)][H(0xda) + 'ad'](o)[H(0x108)](), q = await (-0x1327 + 0x19a2 + -0x67b * 0x1, InstagramVerifyContact_1[G(0xd9)])(p, i, n[H(0xcb)]), r = i?.[H(0xee) + 'in'], s = l[H(0x100)](r?.['pk'], h[G(0xd4)][H(0xd0)]), t = {};
        t[G(0xd2)] = q, t[H(0xf2)] = i['id'], t[G(0xdb) + H(0x110)] = s ? -0x1 * 0x1881 + 0x1 * 0x1f71 + -0x6f0 : 0xfff + -0x220c + 0x120e, t[H(0xcb)] = n[G(0xcb)], t[H(0xdc)] = { ...h[G(0xd4)] }, t[H(0x10d)] = l[H(0xe4)], t[H(0xdc)][H(0x10b)] = s;
        const u = await (0x1806 + -0x19ca + 0x1c4, FindOrCreateTicketService_1[G(0xd9)])(t);
        if (u?.[G(0xcf) + G(0xcc)])
            return;
        l[H(0x105)](h[H(0xd4)][H(0xef)], l[G(0xc6)]) ? await (0x14 * -0xfb + 0x355 * 0x1 + 0x1047, InstagramVerifyMediaMessage_1[G(0xd9)])(h, s, u, q) : await (-0x2 * -0xd42 + 0x24fd + -0x3f81, InstagramVerifyMessage_1[H(0xd9)])(h, s, u, q);
        const v = await i[G(0xe1)][H(0xda) + 'ad'](h[G(0xd4)][H(0xca)]);
        v[H(0xed) + 'en'](h[G(0xd4)][H(0xd6)]);
        const w = {};
        w[H(0x10b)] = s, w[H(0xfb)] = h[H(0xd4)]?.[H(0xcd)] || '', await (-0x13d7 + 0xc4 + 0x1313 * 0x1, VerifyStepsChatFlowTicket_1[G(0xd9)])(w, u), await (-0x52e * -0x2 + -0x1d6d + -0x65b * -0x3, VerifyBusinessHours_1[H(0xd9)])({
            'fromMe': s,
            'timestamp': l[G(0xc5)](h[G(0xd4)][G(0x10a)], 0x22e8 + 0x2569 + -0x4469)
        }, u);
    };
exports[D(0xd9)] = handleRealtimeReceive;