'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(B(0x1c8)) / (0x1aeb + 0xe3 * -0x28 + 0x16d * 0x6) + -parseInt(C(0x1a7)) / (0xeed * -0x1 + 0x89b + 0x32a * 0x2) + parseInt(C(0x1bb)) / (-0x5 * 0x752 + -0x22ea + -0x1 * -0x4787) * (-parseInt(C(0x1c1)) / (-0xb * -0x365 + -0x1158 + -0x13fb)) + parseInt(C(0x19e)) / (0x11c2 + -0x1826 + 0x669) + parseInt(C(0x1aa)) / (0x66c * -0x2 + 0xac9 * -0x3 + 0x2d39) + parseInt(C(0x1a5)) / (-0x230 + -0x836 * 0x4 + 0x230f) * (-parseInt(C(0x1c6)) / (-0x2089 + -0x5f8 * 0x2 + -0x2c81 * -0x1)) + parseInt(B(0x1dc)) / (-0xc22 + 0x15 * 0x161 + 0x10ca * -0x1) * (parseInt(B(0x1d6)) / (0x1926 + -0x158f * -0x1 + -0x2eab));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1b602 * 0x5 + 0x8098a * -0x2 + 0x2167f4));
function a() {
    const I = [
        'fromMe',
        'Message',
        'sChatFlowT',
        'isFarewell',
        'VerifyStep',
        '1712165GQGfMS',
        'update',
        'getMe',
        'telegram',
        'urs',
        'value',
        'ycrtS',
        '17717zCFmOA',
        'icket',
        '888230wfXXXl',
        'sage',
        'age',
        '4052436lCWPZx',
        'aMessage',
        'pService/S',
        'aLADH',
        'edited_mes',
        'text',
        '__importDe',
        'channel',
        'Nytav',
        'date',
        'tenantId',
        '__esModule',
        'HNnee',
        'from',
        'ndOrCreate',
        'TicketServ',
        './Telegram',
        '2302071XjucjD',
        'contact',
        'ages',
        'vices/help',
        'whatsappId',
        'ers/Verify',
        '4oRNieO',
        '../Whatsap',
        'howWhatsAp',
        'VerifyMess',
        'chat',
        '3488OMtcQH',
        '../WbotSer',
        '118013BJgdBk',
        'message',
        'act',
        'BusinessHo',
        'body',
        'pService',
        'erty',
        'VerifyCont',
        'fault',
        'ice',
        'VerifyMedi',
        'unreadMess',
        'timestamp',
        'defineProp',
        '1490zUzMdN',
        'wServices/',
        '../TicketS',
        '../ChatFlo',
        'ervices/Fi',
        'default',
        '105966qMqNew',
        'msg'
    ];
    a = function () {
        return I;
    };
    return a();
}
var __importDefault = this && this[D(0x1b0) + E(0x1d0)] || function (c) {
    const F = E;
    return c && c[F(0x1b5)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x196d * -0x1 + 0x19d * -0x1 + -0x1638);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[D(0x1a3)] = !![], Object[D(0x1d5) + E(0x1ce)](exports, E(0x1b5), k);
const ShowWhatsAppService_1 = __importDefault(require(D(0x1c2) + E(0x1ac) + D(0x1c3) + E(0x1cd))), TelegramVerifyContact_1 = __importDefault(require(D(0x1ba) + D(0x1cf) + E(0x1ca))), FindOrCreateTicketService_1 = __importDefault(require(E(0x1d8) + D(0x1da) + E(0x1b8) + D(0x1b9) + E(0x1d1))), TelegramVerifyMediaMessage_1 = __importDefault(require(E(0x1ba) + E(0x1d2) + D(0x1ab))), TelegramVerifyMessage_1 = __importDefault(require(E(0x1ba) + D(0x1c4) + D(0x1a9))), VerifyBusinessHours_1 = __importDefault(require(D(0x1c7) + D(0x1be) + D(0x1c0) + E(0x1cb) + D(0x1a2))), VerifyStepsChatFlowTicket_1 = __importDefault(require(E(0x1d9) + D(0x1d7) + D(0x19d) + E(0x19b) + D(0x1a6))), HandleMessage = async (h, i) => {
        const G = D, H = E, j = {};
        j[G(0x1b6)] = function (z, A) {
            return z && A;
        }, j[G(0x1b2)] = function (z, A) {
            return z === A;
        }, j[G(0x1a4)] = function (z, A) {
            return z * A;
        }, j[H(0x1ad)] = H(0x1a1);
        const l = j, m = {};
        m['id'] = i['id'];
        const n = await (-0x1 * -0x177b + -0x887 + -0x21 * 0x74, ShowWhatsAppService_1[H(0x1db)])(m);
        let o, p = {};
        o = h?.[G(0x1c9)], p = h?.[G(0x19f)];
        l[H(0x1b6)](!o, p) && (o = p?.[H(0x1ae) + H(0x1a8)]);
        const q = o?.[G(0x1c5)], r = await h[G(0x1a1)][H(0x1a0)](), s = l[H(0x1b2)](r['id'], h[H(0x1c9)]?.[H(0x1b7)]['id']), t = {
                ...o,
                'timestamp': l[G(0x1a4)](+o[H(0x1b3)], 0x18a9 + -0x1d * 0xc5 + 0x190)
            }, u = await (-0xe4a + 0x3 * 0x389 + 0x29 * 0x17, TelegramVerifyContact_1[G(0x1db)])(h, n[H(0x1b4)]), v = {};
        v[G(0x1bc)] = u, v[G(0x1bf)] = i['id'], v[H(0x1d3) + G(0x1bd)] = s ? -0xc07 * -0x1 + -0x5c * -0xd + -0x10b3 : 0x1 * -0x231 + 0x9da + -0x7a8, v[G(0x1b4)] = n[G(0x1b4)], v[G(0x198)] = { ...t }, v[H(0x1b1)] = l[H(0x1ad)], v[G(0x198)][G(0x199)] = s;
        const w = await (-0x2 * 0x77a + -0x1dc7 + 0x2cbb, FindOrCreateTicketService_1[G(0x1db)])(v);
        if (w?.[H(0x19c) + G(0x19a)])
            return;
        !t?.[H(0x1af)] && q?.['id'] ? await (0x21f7 + -0x1642 + -0x3e7 * 0x3, TelegramVerifyMediaMessage_1[G(0x1db)])(h, s, w, u) : await (0x1ad7 * 0x1 + 0x1d94 + 0x65 * -0x8f, TelegramVerifyMessage_1[G(0x1db)])(h, s, w, u);
        const x = {};
        x[G(0x199)] = s, x[G(0x1cc)] = o[G(0x1af)] || '', await (-0x2651 + 0x4 * 0x670 + 0xc91, VerifyStepsChatFlowTicket_1[H(0x1db)])(x, w);
        const y = {};
        y[H(0x199)] = s, y[G(0x1d4)] = t[G(0x1d4)], await (-0x1ce9 + -0x793 + -0x4 * -0x91f, VerifyBusinessHours_1[G(0x1db)])(y, w);
    };
exports[D(0x1db)] = HandleMessage;