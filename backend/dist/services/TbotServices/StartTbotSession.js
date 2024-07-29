'use strict';
function a() {
    const w = [
        '2452732ieWqoF',
        'emit',
        'ckMessages',
        'ageListene',
        '/tbot',
        'default',
        '__esModule',
        'status',
        '1060380rLhkwv',
        'SendMessag',
        ':whatsappS',
        'tbotMessag',
        'logger',
        'env',
        's/logger',
        'OwwVN',
        'erty',
        '578629TjrDmE',
        '__importDe',
        'error',
        'ession\x20|\x20E',
        'bXkCQ',
        'tenantId',
        'fault',
        'eListener',
        'update',
        'value',
        'RVAL',
        'StartTbotS',
        'CHECK_INTE',
        'defineProp',
        '\x20Tenant:\x20',
        '1989009CjirAX',
        'getIO',
        '../../libs',
        '2620440QHVsHM',
        './tbotMess',
        'KWqhn',
        'ERROR:\x20che',
        'ession',
        '135MsBUHH',
        '32906rlWOiw',
        'OPENING',
        '35112BbxxCp',
        '/socket',
        './Telegram',
        '../../util',
        'initTbot',
        '98QigtHJ',
        'esSystem',
        'rror:\x20'
    ];
    a = function () {
        return w;
    };
    return a();
}
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0xd5)) / (-0x23da + -0x7 * 0x28d + 0x35b6) + parseInt(o(0xba)) / (-0x14a5 + -0x2 * 0xebb + 0x321d) * (parseInt(o(0xb9)) / (-0x31a * 0xb + -0x95a + 0x2b7b * 0x1)) + parseInt(n(0xc4)) / (0x1 * -0x1511 + 0x756 + 0xdbf) + parseInt(o(0xcc)) / (0x12db + 0x5 * 0x1a2 + -0x1b00) + -parseInt(n(0xb4)) / (0xf * 0x120 + 0xabd * 0x1 + 0x1b97 * -0x1) + -parseInt(o(0xc1)) / (0xd32 + -0x1 * 0x2586 + 0x185b) * (-parseInt(n(0xbc)) / (-0x1864 + 0xad8 * -0x2 + 0x38c * 0xd)) + -parseInt(n(0xb1)) / (-0x1c99 + -0x1fb3 + 0x3c55 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x960cc + -0x1 * -0x67889 + 0x1 * -0x9e315));
var __importDefault = this && this[p(0xd6) + q(0xdb)] || function (c) {
    const r = q;
    return c && c[r(0xca)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xbaf + 0x1592 + 0x10 * -0x209);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[p(0xde)] = !![], Object[q(0xe2) + q(0xd4)](exports, q(0xca), k), exports[q(0xe0) + q(0xb8)] = void (0x21fa + 0x734 + 0x2f1 * -0xe);
const socket_1 = require(p(0xb3) + p(0xbd)), tbot_1 = require(q(0xb3) + p(0xc8)), logger_1 = require(p(0xbf) + p(0xd2)), tbotMessageListener_1 = require(q(0xb5) + p(0xc7) + 'r'), TelegramSendMessagesSystem_1 = __importDefault(require(q(0xbe) + p(0xcd) + q(0xc2))), checkingTelegram = {}, checkMessages = async (c, d) => {
        const s = q, t = p;
        if (checkingTelegram[d])
            return;
        checkingTelegram[d] = !![];
        try {
            await (0x13d5 * -0x1 + -0x1e6d * -0x1 + -0xa98, TelegramSendMessagesSystem_1[s(0xc9)])(c, d);
        } catch (e) {
            logger_1[s(0xd0)][s(0xd7)](t(0xb7) + s(0xc6) + t(0xe3) + d + '::', e);
        }
        checkingTelegram[d] = ![];
    }, StartTbotSession = async d => {
        const u = q, v = p, e = {
                'OwwVN': u(0xbb),
                'bXkCQ': v(0xdd),
                'KWqhn': function (h, i, j, l, m) {
                    return h(i, j, l, m);
                }
            }, f = (0x15d + 0x16b3 + -0x268 * 0xa, socket_1[u(0xb2)])(), g = {};
        g[v(0xcb)] = e[v(0xd3)], await d[v(0xdd)](g), f[u(0xc5)](d[v(0xda)] + (u(0xce) + u(0xb8)), {
            'action': e[u(0xd9)],
            'session': d
        });
        try {
            const h = await (0x6a8 * -0x4 + -0x7 * -0x45f + -0x1 * 0x3f9, tbot_1[v(0xc0)])(d);
            (-0x1f29 + 0xfe7 + 0x3 * 0x516, tbotMessageListener_1[v(0xcf) + u(0xdc)])(h), e[u(0xb6)](setInterval, checkMessages, +(process[v(0xd1)][u(0xe1) + u(0xdf)] || 0x2 * 0xbf5 + -0xbd3 + 0x771), h, d[v(0xda)]);
        } catch (i) {
            logger_1[v(0xd0)][v(0xd7)](u(0xe0) + v(0xd8) + u(0xc3) + i);
        }
    };
exports[q(0xe0) + p(0xb8)] = StartTbotSession;