'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0xcf)) / (0x31 * -0x8 + -0xee4 + 0x349 * 0x5) * (parseInt(n(0xe1)) / (-0x3 * -0x907 + 0x13 * -0x45 + -0x15f4)) + parseInt(n(0xbf)) / (0x12d8 + 0x808 + -0x12b * 0x17) + parseInt(n(0xdb)) / (0x2b * 0x79 + 0x1 * -0x10a2 + -0x3ad * 0x1) + -parseInt(n(0xc5)) / (0xb3e * 0x3 + -0x7e0 + -0x19d5) + parseInt(n(0xd0)) / (-0x86 * -0xb + 0x120a + -0x2 * 0xbe3) * (-parseInt(n(0xd1)) / (-0x5a6 + -0x1 * 0x1277 + -0x19c * -0xf)) + parseInt(n(0xe3)) / (-0x4e * -0x1b + 0xad4 + 0x1306 * -0x1) + parseInt(n(0xf0)) / (0x11 * 0xae + -0x1 * -0x6c9 + 0x21 * -0x8e) * (parseInt(o(0xce)) / (-0x1e0 + 0xb5 + 0x135));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x85184 + -0x45a8f * -0x1 + -0x22 * -0x6a7d));
function a() {
    const w = [
        'emit',
        '/socket',
        'esSystem',
        'defineProp',
        'ageListene',
        'XGxbL',
        '\x20Tenant:\x20',
        'OPENING',
        './Telegram',
        '1545552MOqlOn',
        'ession\x20|\x20E',
        's/logger',
        '/tbot',
        'getIO',
        'fault',
        '568liOEof',
        'value',
        '4465944TFtZCM',
        'initTbot',
        'error',
        'erty',
        'update',
        ':whatsappS',
        '__esModule',
        'StartTbotS',
        'RVAL',
        'ession',
        'rror:\x20',
        'ckMessages',
        '../../util',
        '1502901SHvCwU',
        'tenantId',
        'default',
        '3840732nrSpYH',
        'SendMessag',
        '../../libs',
        'qOfRe',
        'logger',
        'eListener',
        '5718900bzvosE',
        'status',
        'CHECK_INTE',
        '__importDe',
        './tbotMess',
        'ERROR:\x20che',
        'Taabn',
        'env',
        'tbotMessag',
        '30nORgGX',
        '971VoSDPp',
        '264618QBYXbP',
        '189RrRmjq'
    ];
    a = function () {
        return w;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x29b + 0x10e * 0x4 + 0x30b * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[p(0xc8) + q(0xe0)] || function (c) {
    const r = q;
    return c && c[r(0xe9)] ? c : { 'default': c };
};
const k = {};
k[p(0xe2)] = !![], Object[p(0xd5) + p(0xe6)](exports, p(0xe9), k), exports[q(0xea) + p(0xec)] = void (0x2259 + 0x8b5 + -0x2b0e);
const socket_1 = require(q(0xc1) + q(0xd3)), tbot_1 = require(p(0xc1) + q(0xde)), logger_1 = require(p(0xef) + q(0xdd)), tbotMessageListener_1 = require(q(0xc9) + q(0xd6) + 'r'), TelegramSendMessagesSystem_1 = __importDefault(require(p(0xda) + q(0xc0) + p(0xd4))), checkingTelegram = {}, checkMessages = async (c, d) => {
        const s = q, t = p;
        if (checkingTelegram[d])
            return;
        checkingTelegram[d] = !![];
        try {
            await (0x1 * -0xb11 + -0x1f9c + 0x5f * 0x73, TelegramSendMessagesSystem_1[s(0xbe)])(c, d);
        } catch (e) {
            logger_1[t(0xc3)][s(0xe5)](t(0xca) + s(0xee) + s(0xd8) + d + '::', e);
        }
        checkingTelegram[d] = ![];
    }, StartTbotSession = async d => {
        const u = p, v = p, e = {
                'Taabn': u(0xd9),
                'XGxbL': u(0xe7),
                'qOfRe': function (h, i, j, l, m) {
                    return h(i, j, l, m);
                }
            }, f = (0x811 + 0xd46 + -0x1557, socket_1[v(0xdf)])(), g = {};
        g[v(0xc6)] = e[u(0xcb)], await d[u(0xe7)](g), f[v(0xd2)](d[u(0xbd)] + (u(0xe8) + v(0xec)), {
            'action': e[v(0xd7)],
            'session': d
        });
        try {
            const h = await (0xf1 * -0x29 + -0x1bc5 * 0x1 + 0x425e, tbot_1[v(0xe4)])(d);
            (0xdb + -0x8 * 0x3ce + 0x1d95, tbotMessageListener_1[u(0xcd) + u(0xc4)])(h), e[v(0xc2)](setInterval, checkMessages, +(process[v(0xcc)][v(0xc7) + v(0xeb)] || 0xa88 + -0xf73 + -0x1 * -0x1873), h, d[u(0xbd)]);
        } catch (i) {
            logger_1[v(0xc3)][u(0xe5)](u(0xea) + v(0xdc) + u(0xed) + i);
        }
    };
exports[q(0xea) + p(0xec)] = StartTbotSession;