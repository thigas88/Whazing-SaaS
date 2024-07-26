'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0xdb)) / (-0x2 * 0x109c + 0x35 * -0x3 + 0x21d8) * (parseInt(B(0xc5)) / (-0x4 * 0x9ad + -0xae2 + -0x4 * -0xc66)) + parseInt(B(0xcf)) / (-0xc * 0x1ce + -0x1850 + -0x4f * -0x95) + parseInt(B(0xd3)) / (-0x12d * -0x1b + -0xbb * -0x1f + -0x1b30 * 0x2) + -parseInt(B(0xc8)) / (-0x82e * -0x2 + -0x1 * 0x19c9 + 0x972) + parseInt(B(0xba)) / (0x1005 + 0x1b04 + -0x2b03) + parseInt(C(0xb8)) / (-0x2 * -0x721 + 0xb3d + -0x1978) * (parseInt(C(0xdd)) / (-0x3 * 0x11b + -0x5 * 0x191 + -0x1b * -0x6a)) + -parseInt(B(0xe1)) / (-0x17 * -0x9a + 0x47 * -0x43 + -0x66 * -0xc) * (parseInt(C(0xdf)) / (-0x1 * 0x14e5 + 0x41 * 0x89 + -0x1 * 0xdda));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x57791 * -0x3 + 0x1 * 0xf1086 + 0x40 * -0x5494));
var __importDefault = this && this[D(0xe6) + E(0xb4)] || function (c) {
    const F = E;
    return c && c[F(0xb9)] ? c : { 'default': c };
};
function a() {
    const I = [
        '../ChatFlo',
        'from',
        'msg',
        'vices/help',
        '__importDe',
        'date',
        'unreadMess',
        'value',
        '../WbotSer',
        'GbscL',
        'ice',
        'VerifyMess',
        'contact',
        'VerifyStep',
        'vdNMj',
        'TicketServ',
        './Telegram',
        'VerifyCont',
        'pService/S',
        'body',
        'edited_mes',
        'erty',
        'wServices/',
        'fault',
        'tenantId',
        'message',
        'ages',
        '1183NZlewp',
        '__esModule',
        '3190596ZCqyQi',
        'chat',
        'sage',
        'CGeRV',
        'isFarewell',
        'whatsappId',
        'timestamp',
        'icket',
        'pService',
        'urs',
        'fromMe',
        '106514qmbuKf',
        'text',
        'channel',
        '2089825ueVYZB',
        'update',
        'telegram',
        'aMessage',
        'defineProp',
        'sChatFlowT',
        'Message',
        '2034345qugoHM',
        'act',
        'age',
        'ndOrCreate',
        '1372712fmpFez',
        'BusinessHo',
        'default',
        'ers/Verify',
        'NFaHw',
        'ervices/Fi',
        'VerifyMedi',
        'howWhatsAp',
        '3GHhYvD',
        'getMe',
        '61904hIiyDE',
        '../Whatsap',
        '8033180pglFtm',
        '../TicketS',
        '18wqhVRu'
    ];
    a = function () {
        return I;
    };
    return a();
}
const k = {};
k[D(0xe9)] = !![], Object[D(0xcc) + D(0xb2)](exports, E(0xb9), k);
const ShowWhatsAppService_1 = __importDefault(require(D(0xde) + E(0xaf) + D(0xda) + E(0xc2))), TelegramVerifyContact_1 = __importDefault(require(E(0xad) + D(0xae) + D(0xd0))), FindOrCreateTicketService_1 = __importDefault(require(E(0xe0) + E(0xd8) + D(0xd2) + E(0xac) + E(0xec))), TelegramVerifyMediaMessage_1 = __importDefault(require(E(0xad) + E(0xd9) + D(0xcb))), TelegramVerifyMessage_1 = __importDefault(require(E(0xad) + E(0xed) + E(0xd1))), VerifyBusinessHours_1 = __importDefault(require(E(0xea) + E(0xe5) + E(0xd6) + D(0xd4) + D(0xc3))), VerifyStepsChatFlowTicket_1 = __importDefault(require(E(0xe2) + E(0xb3) + E(0xef) + D(0xcd) + D(0xc1))), HandleMessage = async (h, i) => {
        const G = E, H = D, j = {};
        j[G(0xbd)] = function (z, A) {
            return z && A;
        }, j[G(0xf0)] = function (z, A) {
            return z === A;
        }, j[G(0xd7)] = function (z, A) {
            return z * A;
        }, j[H(0xeb)] = H(0xca);
        const l = j, m = {};
        m['id'] = i['id'];
        const n = await (-0x2d8 + 0x1 * 0x7e + 0x1 * 0x25a, ShowWhatsAppService_1[G(0xd5)])(m);
        let o, p = {};
        o = h?.[G(0xb6)], p = h?.[H(0xc9)];
        l[G(0xbd)](!o, p) && (o = p?.[G(0xb1) + H(0xbc)]);
        const q = o?.[G(0xbb)], r = await h[H(0xca)][H(0xdc)](), s = l[G(0xf0)](r['id'], h[G(0xb6)]?.[H(0xe3)]['id']), t = {
                ...o,
                'timestamp': l[H(0xd7)](+o[G(0xe7)], 0x13 * -0x13 + 0x51f + 0x32)
            }, u = await (0x1 * -0x1077 + -0x21 * 0x6e + 0x1ea5 * 0x1, TelegramVerifyContact_1[H(0xd5)])(h, n[G(0xb5)]), v = {};
        v[G(0xee)] = u, v[G(0xbf)] = i['id'], v[H(0xe8) + G(0xb7)] = s ? -0x5 * -0x6d6 + -0x79b + -0x1 * 0x1a93 : 0x1fe8 + 0x1 * -0x2b + -0x7ef * 0x4, v[G(0xb5)] = n[G(0xb5)], v[G(0xe4)] = { ...t }, v[G(0xc7)] = l[G(0xeb)], v[G(0xe4)][H(0xc4)] = s;
        const w = await (-0x2 * -0x83f + -0x1359 + 0x2db, FindOrCreateTicketService_1[G(0xd5)])(v);
        if (w?.[H(0xbe) + H(0xce)])
            return;
        !t?.[G(0xc6)] && q?.['id'] ? await (-0x8b6 + -0xd2e + 0x15e4, TelegramVerifyMediaMessage_1[H(0xd5)])(h, s, w, u) : await (-0x13a * 0x1 + 0xe5d * 0x2 + -0x1b80, TelegramVerifyMessage_1[H(0xd5)])(h, s, w, u);
        const x = {};
        x[G(0xc4)] = s, x[H(0xb0)] = o[H(0xc6)] || '', await (0x13d4 + 0x1495 + -0x2869, VerifyStepsChatFlowTicket_1[G(0xd5)])(x, w);
        const y = {};
        y[H(0xc4)] = s, y[G(0xc0)] = t[H(0xc0)], await (-0x2f * -0x9f + 0x208 + -0x1f39, VerifyBusinessHours_1[H(0xd5)])(y, w);
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x21c3 + 0x1a05 * 0x1 + -0x3b1c);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[D(0xd5)] = HandleMessage;