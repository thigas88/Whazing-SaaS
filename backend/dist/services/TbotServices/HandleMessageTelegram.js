'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0x17a)) / (0x235 + -0x2273 * -0x1 + -0xb * 0x355) + parseInt(C(0x161)) / (0x23c6 + 0xb1 * -0x2 + 0x2 * -0x1131) + parseInt(C(0x17b)) / (-0xdd0 + -0x10 + 0xde3) + parseInt(C(0x190)) / (-0xf9e + 0xb3 * -0x1 + -0x25 * -0x71) + -parseInt(B(0x184)) / (0x7bb * 0x1 + 0x2e * 0x95 + -0x227c) * (-parseInt(B(0x174)) / (0x9b * -0x2 + 0x18b * 0x2 + -0x3 * 0x9e)) + parseInt(C(0x194)) / (0xa22 * 0x3 + 0xf * 0x54 + 0x8b * -0x41) + -parseInt(B(0x19b)) / (0x1c94 + -0x1 * 0x198d + -0x2ff);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa093f + 0x935 * 0x9 + 0x6b7c * 0x2));
var __importDefault = this && this[D(0x180) + E(0x197)] || function (c) {
    const F = D;
    return c && c[F(0x162)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xbb3 * -0x3 + -0x1377 + 0x1 * 0x37f1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
function a() {
    const I = [
        '2304232KLcxhg',
        '__esModule',
        '../WbotSer',
        'VerifyStep',
        'body',
        'act',
        'pService/S',
        'ndOrCreate',
        'value',
        'BzbhZ',
        'VerifyMess',
        'sage',
        'unreadMess',
        'pService',
        'telegram',
        'vices/help',
        'Message',
        'VerifyCont',
        'BusinessHo',
        '48Hpyhzi',
        'wServices/',
        'ervices/Fi',
        'update',
        'text',
        'isFarewell',
        '1050323OivyKV',
        '2337030ngUKHX',
        './Telegram',
        'date',
        'OnXGo',
        'UlEtI',
        '__importDe',
        'chat',
        'ice',
        'timestamp',
        '20610bSgQiX',
        'howWhatsAp',
        'TicketServ',
        'default',
        'getMe',
        'message',
        'erty',
        'tenantId',
        'whatsappId',
        'aMessage',
        '../ChatFlo',
        'from',
        '4331880DUWZPw',
        'ers/Verify',
        'ckuiu',
        'contact',
        '5902099GyyrJz',
        'channel',
        '../TicketS',
        'fault',
        'edited_mes',
        'ages',
        'urs',
        '16847472hrmRih',
        'defineProp',
        'msg',
        'sChatFlowT',
        'icket',
        'VerifyMedi',
        'fromMe',
        'age',
        '../Whatsap'
    ];
    a = function () {
        return I;
    };
    return a();
}
k[D(0x169)] = !![], Object[E(0x19c) + E(0x18a)](exports, E(0x162), k);
const ShowWhatsAppService_1 = __importDefault(require(E(0x1a3) + D(0x167) + D(0x185) + D(0x16e))), TelegramVerifyContact_1 = __importDefault(require(E(0x17c) + D(0x172) + D(0x166))), FindOrCreateTicketService_1 = __importDefault(require(E(0x196) + D(0x176) + E(0x168) + D(0x186) + D(0x182))), TelegramVerifyMediaMessage_1 = __importDefault(require(E(0x17c) + D(0x1a0) + D(0x18d))), TelegramVerifyMessage_1 = __importDefault(require(E(0x17c) + D(0x16b) + E(0x1a2))), VerifyBusinessHours_1 = __importDefault(require(D(0x163) + D(0x170) + E(0x191) + E(0x173) + E(0x19a))), VerifyStepsChatFlowTicket_1 = __importDefault(require(E(0x18e) + E(0x175) + E(0x164) + D(0x19e) + D(0x19f))), HandleMessage = async (h, i) => {
        const G = E, H = E, j = {};
        j[G(0x192)] = function (z, A) {
            return z && A;
        }, j[G(0x17f)] = function (z, A) {
            return z === A;
        }, j[G(0x17e)] = function (z, A) {
            return z * A;
        }, j[H(0x16a)] = G(0x16f);
        const l = j, m = {};
        m['id'] = i['id'];
        const n = await (-0x263 * 0x5 + -0x15d4 + 0x21c3, ShowWhatsAppService_1[H(0x187)])(m);
        let o, p = {};
        o = h?.[G(0x189)], p = h?.[H(0x177)];
        l[H(0x192)](!o, p) && (o = p?.[G(0x198) + H(0x16c)]);
        const q = o?.[G(0x181)], r = await h[H(0x16f)][H(0x188)](), s = l[G(0x17f)](r['id'], h[H(0x189)]?.[G(0x18f)]['id']), t = {
                ...o,
                'timestamp': l[G(0x17e)](+o[H(0x17d)], 0x1 * -0x25a8 + 0x2471 + 0x3 * 0x1b5)
            }, u = await (-0x1 * 0x315 + 0xda1 + -0xa8c, TelegramVerifyContact_1[H(0x187)])(h, n[H(0x18b)]), v = {};
        v[H(0x193)] = u, v[G(0x18c)] = i['id'], v[G(0x16d) + G(0x199)] = s ? -0x2295 + -0x224d + 0x44e2 : 0x1 * -0xde2 + 0x581 * 0x6 + 0x1 * -0x1323, v[H(0x18b)] = n[G(0x18b)], v[G(0x19d)] = { ...t }, v[H(0x195)] = l[G(0x16a)], v[G(0x19d)][G(0x1a1)] = s;
        const w = await (0x27a * -0xd + -0x2023 + 0x4055, FindOrCreateTicketService_1[G(0x187)])(v);
        if (w?.[G(0x179) + G(0x171)])
            return;
        !t?.[H(0x178)] && q?.['id'] ? await (0x8bf * -0x2 + 0x69e + 0xae0, TelegramVerifyMediaMessage_1[G(0x187)])(h, s, w, u) : await (-0x17e7 + 0x1be8 + -0x5 * 0xcd, TelegramVerifyMessage_1[G(0x187)])(h, s, w, u);
        const x = {};
        x[H(0x1a1)] = s, x[G(0x165)] = o[H(0x178)] || '', await (0x1640 + -0x2069 * -0x1 + -0x36a9, VerifyStepsChatFlowTicket_1[G(0x187)])(x, w);
        const y = {};
        y[G(0x1a1)] = s, y[H(0x183)] = t[H(0x183)], await (0x3 * -0xc9c + -0x8c8 + 0x274 * 0x13, VerifyBusinessHours_1[G(0x187)])(y, w);
    };
exports[E(0x187)] = HandleMessage;