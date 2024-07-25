'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0xc0)) / (0x518 * -0x5 + -0x4 * -0x1c6 + 0x1261) * (-parseInt(B(0xf2)) / (-0x6 * 0xfb + -0x158d + 0x5 * 0x57d)) + -parseInt(C(0xf1)) / (-0x19ab + 0x2bf * 0xd + -0x1 * 0xa05) + parseInt(B(0xe4)) / (0x1894 + 0xf * 0x203 + -0x9 * 0x615) + -parseInt(C(0xf8)) / (0x187d + 0x1a82 + -0x1e * 0x1b3) + -parseInt(C(0xce)) / (0x1c * -0x89 + -0xd49 + 0x1c4b * 0x1) + parseInt(C(0xd1)) / (-0xd04 + 0x19b3 + -0x1e * 0x6c) * (parseInt(C(0xe9)) / (0x1acd + 0x1c0 * -0x2 + -0x17 * 0x103)) + parseInt(C(0xef)) / (0x1 * -0x2392 + 0x1a54 + 0x5f * 0x19) * (parseInt(C(0xde)) / (0x4ff * -0x4 + -0x148 + 0x154e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x5f4e6 + 0x36d * 0x427 + 0x59b4));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3c4 + 0x1 * 0x191c + -0x1c21);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const I = [
        'channel',
        'text',
        'ndOrCreate',
        '110870bVhTeu',
        'item_type',
        '__esModule',
        'mVerifyMes',
        'value',
        'BusinessHo',
        '143316WtyNoN',
        'ages',
        'howWhatsAp',
        'icket',
        'markItemSe',
        '706976WKJxnD',
        'vices/help',
        'default',
        '../Whatsap',
        'accountLog',
        'VerifyStep',
        '1773lgwKie',
        'thread_id',
        '1523394WkIwUN',
        '22802LIxdXt',
        'defineProp',
        'iaMessage',
        'pService/S',
        'fJUsx',
        'mVerifyMed',
        '5631940XTUTPL',
        'message',
        'wServices/',
        'timestamp',
        'request',
        'feed',
        'body',
        'ers/Verify',
        'oldest_cur',
        'user_id',
        'mVerifyCon',
        'sage',
        '../TicketS',
        'cVuGo',
        './Instagra',
        'fromMe',
        'LvKde',
        'sor',
        'directThre',
        '3bCDDOZ',
        'item_id',
        '../ChatFlo',
        'erty',
        'sChatFlowT',
        'whatsappId',
        'ervices/Fi',
        'fault',
        'instagram',
        '../WbotSer',
        'unreadMess',
        'contact',
        'Message',
        'urs',
        '6693648XisYQx',
        'tXkvk',
        'entity',
        '84BOFNlX',
        'msg',
        'isFarewell',
        'pService',
        'eDJEk',
        'TicketServ',
        'tact',
        'tenantId',
        'ice',
        '__importDe'
    ];
    a = function () {
        return I;
    };
    return a();
}
var __importDefault = this && this[D(0xda) + D(0xc7)] || function (c) {
    const F = E;
    return c && c[F(0xe0)] ? c : { 'default': c };
};
const k = {};
k[D(0xe2)] = !![], Object[E(0xf3) + E(0xc3)](exports, E(0xe0), k);
const VerifyStepsChatFlowTicket_1 = __importDefault(require(D(0xc2) + D(0xfa) + D(0xee) + E(0xc4) + E(0xe7))), FindOrCreateTicketService_1 = __importDefault(require(E(0x104) + E(0xc6) + E(0xdd) + D(0xd6) + E(0xd9))), VerifyBusinessHours_1 = __importDefault(require(E(0xc9) + E(0xea) + D(0xff) + D(0xe3) + D(0xcd))), ShowWhatsAppService_1 = __importDefault(require(D(0xec) + E(0xf5) + E(0xe6) + E(0xd4))), InstagramVerifyContact_1 = __importDefault(require(E(0x106) + E(0x102) + D(0xd7))), InstagramVerifyMediaMessage_1 = __importDefault(require(D(0x106) + E(0xf7) + D(0xf4))), InstagramVerifyMessage_1 = __importDefault(require(E(0x106) + D(0xe1) + D(0x103))), handleRealtimeReceive = async (h, i) => {
        const G = D, H = E, j = {};
        j[G(0x108)] = function (z, A) {
            return z === A;
        }, j[H(0xd5)] = G(0xc8), j[G(0xcf)] = function (z, A) {
            return z !== A;
        }, j[H(0xf6)] = G(0xdc), j[H(0x105)] = function (z, A) {
            return z / A;
        };
        const l = j, m = {};
        m['id'] = i['id'];
        const n = await (0x3 * -0x84b + 0xf40 + 0x9a1, ShowWhatsAppService_1[G(0xeb)])(m), o = {};
        o[H(0xf0)] = h[H(0xf9)][H(0xf0)], o[G(0x100) + G(0x109)] = '';
        const p = await i[H(0xfd)][G(0xbf) + 'ad'](o)[H(0xfc)](), q = await (0x41 * -0x7b + -0x7 * -0x443 + 0x166, InstagramVerifyContact_1[H(0xeb)])(p, i, n[H(0xd8)]), r = i?.[G(0xed) + 'in'], s = l[H(0x108)](r?.['pk'], h[G(0xf9)][G(0x101)]), t = {};
        t[H(0xcb)] = q, t[H(0xc5)] = i['id'], t[H(0xca) + H(0xe5)] = s ? -0x533 + -0x13 * 0x15d + 0x1f1a : -0xb * 0x130 + 0x299 * 0x9 + -0xa50, t[G(0xd8)] = n[H(0xd8)], t[H(0xd2)] = { ...h[G(0xf9)] }, t[H(0xdb)] = l[H(0xd5)], t[H(0xd2)][H(0x107)] = s;
        const u = await (-0x37e + -0xc * 0x2d + 0x59a, FindOrCreateTicketService_1[H(0xeb)])(t);
        if (u?.[G(0xd3) + H(0xcc)])
            return;
        l[H(0xcf)](h[G(0xf9)][G(0xdf)], l[H(0xf6)]) ? await (0x3 * 0x8bd + 0xce7 + -0x271e, InstagramVerifyMediaMessage_1[H(0xeb)])(h, s, u, q) : await (-0x1cf8 + -0x1a5d + 0x3755, InstagramVerifyMessage_1[H(0xeb)])(h, s, u, q);
        const v = await i[G(0xd0)][G(0xbf) + 'ad'](h[H(0xf9)][G(0xf0)]);
        v[G(0xe8) + 'en'](h[G(0xf9)][H(0xc1)]);
        const w = {};
        w[H(0x107)] = s, w[H(0xfe)] = h[G(0xf9)]?.[H(0xdc)] || '', await (0x6 * -0x5 + 0xba9 + -0xb8b, VerifyStepsChatFlowTicket_1[H(0xeb)])(w, u), await (-0x135 + -0x13ed * -0x1 + -0x12b8, VerifyBusinessHours_1[G(0xeb)])({
            'fromMe': s,
            'timestamp': l[G(0x105)](h[H(0xf9)][H(0xfb)], 0x3b * -0xa + -0x2197 + 0x27cd * 0x1)
        }, u);
    };
exports[D(0xeb)] = handleRealtimeReceive;