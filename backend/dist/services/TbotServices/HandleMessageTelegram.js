'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0x20c)) / (0x105c + -0x1f5f * -0x1 + -0x12a * 0x29) + parseInt(B(0x229)) / (0x17 * -0x107 + 0x1 * -0x2268 + -0x477 * -0xd) + -parseInt(B(0x21b)) / (0x32 * -0x5 + -0x26ab + 0x69c * 0x6) + parseInt(C(0x202)) / (-0x1 * -0xc31 + -0x129a + -0x66d * -0x1) + -parseInt(C(0x22b)) / (0x6c5 + 0x1 * -0x1ab7 + 0x1 * 0x13f7) * (parseInt(B(0x200)) / (-0x2a1 * 0xb + -0x6e3 + 0x1 * 0x23d4)) + -parseInt(C(0x1f7)) / (-0x3b9 * -0x1 + -0x1 * -0x57a + -0x92c) * (-parseInt(C(0x1ec)) / (-0x22d + -0xa39 + 0x2 * 0x637)) + parseInt(C(0x203)) / (-0x748 + 0x1 * -0xacf + 0x488 * 0x4);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xfb * -0x1226 + -0x131e91 + 0x5a98f * 0x9));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x46 + 0x816 + -0x673);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const I = [
        'BusinessHo',
        'message',
        'edited_mes',
        'ice',
        'VerifyStep',
        'fault',
        'sChatFlowT',
        '332660fEMctf',
        'VerifyCont',
        'VerifyMess',
        'pqixW',
        'ages',
        '__importDe',
        'age',
        '../WbotSer',
        'Zwzwz',
        '__esModule',
        'zhVus',
        'text',
        'TicketServ',
        'from',
        'contact',
        '1354152EFWKEp',
        'defineProp',
        'tenantId',
        'VerifyMedi',
        'pService',
        'fromMe',
        'vices/help',
        'getMe',
        'update',
        'telegram',
        'sage',
        'icket',
        'howWhatsAp',
        'ndOrCreate',
        '1441736BqsiaT',
        'urs',
        '65Jvxvtw',
        'date',
        'aMessage',
        'ExQyG',
        'isFarewell',
        '110104oehAwZ',
        'msg',
        'timestamp',
        'body',
        'pService/S',
        'whatsappId',
        'ers/Verify',
        '../ChatFlo',
        'Message',
        '../Whatsap',
        'ervices/Fi',
        '175riSdwz',
        'unreadMess',
        './Telegram',
        'chat',
        '../TicketS',
        'act',
        'wServices/',
        'erty',
        'value',
        '290922fzvrAC',
        'channel',
        '2461656jaZAta',
        '5891814GRMCww',
        'default'
    ];
    a = function () {
        return I;
    };
    return a();
}
var __importDefault = this && this[D(0x211) + E(0x20a)] || function (c) {
    const F = D;
    return c && c[F(0x215)] ? c : { 'default': c };
};
const k = {};
k[E(0x1ff)] = !![], Object[D(0x21c) + E(0x1fe)](exports, E(0x215), k);
const ShowWhatsAppService_1 = __importDefault(require(E(0x1f5) + D(0x1f0) + D(0x227) + D(0x21f))), TelegramVerifyContact_1 = __importDefault(require(E(0x1f9) + D(0x20d) + E(0x1fc))), FindOrCreateTicketService_1 = __importDefault(require(D(0x1fb) + D(0x1f6) + D(0x228) + D(0x218) + E(0x208))), TelegramVerifyMediaMessage_1 = __importDefault(require(E(0x1f9) + D(0x21e) + D(0x1e9))), TelegramVerifyMessage_1 = __importDefault(require(E(0x1f9) + D(0x20e) + D(0x212))), VerifyBusinessHours_1 = __importDefault(require(D(0x213) + E(0x221) + D(0x1f2) + D(0x205) + D(0x22a))), VerifyStepsChatFlowTicket_1 = __importDefault(require(D(0x1f3) + E(0x1fd) + E(0x209) + D(0x20b) + D(0x226))), HandleMessage = async (h, i) => {
        const G = E, H = D, j = {};
        j[G(0x216)] = function (z, A) {
            return z && A;
        }, j[H(0x1ea)] = function (z, A) {
            return z === A;
        }, j[H(0x214)] = function (z, A) {
            return z * A;
        }, j[H(0x20f)] = H(0x224);
        const l = j, m = {};
        m['id'] = i['id'];
        const n = await (0x1f95 + -0x1c33 + -0x2 * 0x1b1, ShowWhatsAppService_1[H(0x204)])(m);
        let o, p = {};
        o = h?.[H(0x206)], p = h?.[G(0x223)];
        l[G(0x216)](!o, p) && (o = p?.[G(0x207) + G(0x225)]);
        const q = o?.[H(0x1fa)], r = await h[G(0x224)][G(0x222)](), s = l[H(0x1ea)](r['id'], h[H(0x206)]?.[G(0x219)]['id']), t = {
                ...o,
                'timestamp': l[G(0x214)](+o[G(0x22c)], 0x1a49 * 0x1 + -0x20d4 + 0xa73)
            }, u = await (-0x5 * -0x73d + -0x189 * -0x9 + -0x1 * 0x3202, TelegramVerifyContact_1[G(0x204)])(h, n[H(0x21d)]), v = {};
        v[G(0x21a)] = u, v[H(0x1f1)] = i['id'], v[H(0x1f8) + G(0x210)] = s ? 0x1 * 0x85a + -0x921 + 0xc7 : -0x2b * -0x39 + 0x1 * -0x2113 + 0x1781 * 0x1, v[G(0x21d)] = n[G(0x21d)], v[H(0x1ed)] = { ...t }, v[H(0x201)] = l[G(0x20f)], v[H(0x1ed)][G(0x220)] = s;
        const w = await (0x1 * 0x22d6 + -0xa00 * -0x1 + -0x2cd6, FindOrCreateTicketService_1[H(0x204)])(v);
        if (w?.[H(0x1eb) + G(0x1f4)])
            return;
        !t?.[G(0x217)] && q?.['id'] ? await (-0x1567 + 0x2 * 0x581 + 0xa65 * 0x1, TelegramVerifyMediaMessage_1[H(0x204)])(h, s, w, u) : await (-0x1952 * -0x1 + 0x3f * 0x2b + -0x23e7, TelegramVerifyMessage_1[H(0x204)])(h, s, w, u);
        const x = {};
        x[G(0x220)] = s, x[H(0x1ef)] = o[H(0x217)] || '', await (-0x47 * -0x47 + 0xe87 * -0x2 + 0x33 * 0x2f, VerifyStepsChatFlowTicket_1[G(0x204)])(x, w);
        const y = {};
        y[G(0x220)] = s, y[G(0x1ee)] = t[G(0x1ee)], await (0x628 * -0x1 + 0x257 * -0x3 + -0xd2d * -0x1, VerifyBusinessHours_1[G(0x204)])(y, w);
    };
exports[D(0x204)] = HandleMessage;