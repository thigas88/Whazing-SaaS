'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0xe3)) / (-0x34c * -0x7 + -0x3 * 0x551 + -0x720) * (-parseInt(o(0xe5)) / (-0x1201 + 0x22ad + -0x10aa)) + parseInt(o(0xda)) / (-0x3 * -0xc95 + -0x11eb + -0x13d1) + -parseInt(o(0x100)) / (-0x1 * -0x44d + 0x6e7 + -0x10 * 0xb3) + -parseInt(n(0xe6)) / (0x1956 + -0x2698 + 0x3 * 0x46d) * (parseInt(n(0x103)) / (-0x17dd * -0x1 + -0x1cac + -0x4d5 * -0x1)) + -parseInt(o(0xd4)) / (0x7df * -0x2 + 0xdd2 + 0x1f3) * (parseInt(n(0xf7)) / (0x684 + -0x1109 + 0xa8d)) + parseInt(n(0xeb)) / (-0x2 * -0xc43 + 0x821 + -0x209e) + parseInt(o(0xd7)) / (0x191 * -0x1 + 0x535 + -0x39a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x6 * 0x1b0fe + -0x37f63 * 0x3 + 0x1e0845));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2526 + -0x3 * 0x4f9 + 0x1 * -0x156b);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[p(0xf8) + q(0xd1)] || function (c) {
    const r = q;
    return c && c[r(0xe1)] ? c : { 'default': c };
};
const k = {};
k[p(0xe4)] = !![], Object[p(0xef) + p(0xd0)](exports, p(0xe1), k), exports[p(0xf0) + p(0xdd)] = void (-0xf * -0x20b + -0x124 * -0x16 + -0x37bd);
const socket_1 = require(q(0xf6) + q(0xfd)), tbot_1 = require(p(0xf6) + p(0xfe)), logger_1 = require(q(0xe2) + p(0xf4)), tbotMessageListener_1 = require(p(0xf2) + p(0xf1) + 'r'), TelegramSendMessagesSystem_1 = __importDefault(require(q(0xec) + q(0xe9) + q(0xd3))), checkingTelegram = {}, checkMessages = async (c, d) => {
        const s = q, t = q;
        if (checkingTelegram[d])
            return;
        checkingTelegram[d] = !![];
        try {
            await (0x2378 + -0x1 * -0x773 + 0x1 * -0x2aeb, TelegramSendMessagesSystem_1[s(0xe8)])(c, d);
        } catch (e) {
            logger_1[s(0xee)][s(0xdc)](t(0xfc) + s(0xde) + t(0xd2) + d + '::', e);
        }
        checkingTelegram[d] = ![];
    }, StartTbotSession = async d => {
        const u = p, v = q, e = {
                'yUfSI': u(0xed),
                'DbDrp': u(0xf5),
                'RdqCU': function (h, i, j, l, m) {
                    return h(i, j, l, m);
                }
            }, f = (0x2 * 0xb7 + 0x24b5 + 0x2ef * -0xd, socket_1[v(0xd8)])(), g = {};
        g[v(0xdf)] = e[v(0xe0)], await d[v(0xf5)](g), f[u(0xd9)](d[v(0xea)] + (u(0xdb) + v(0xdd)), {
            'action': e[u(0xe7)],
            'session': d
        });
        try {
            const h = await (0x17b9 * -0x1 + -0x3c0 * 0x3 + -0x22f9 * -0x1, tbot_1[v(0x102)])(d);
            (0xdcd + 0x5bf * -0x1 + 0x407 * -0x2, tbotMessageListener_1[u(0xff) + v(0xd6)])(h), e[u(0xf9)](setInterval, checkMessages, +(process[u(0xfa)][v(0xf3) + u(0xd5)] || -0x254b * -0x1 + 0x2565 + -0x3728), h, d[u(0xea)]);
        } catch (i) {
            logger_1[v(0xee)][u(0xdc)](u(0xf0) + u(0x101) + v(0xfb) + i);
        }
    };
exports[q(0xf0) + p(0xdd)] = StartTbotSession;
function a() {
    const w = [
        './tbotMess',
        'CHECK_INTE',
        's/logger',
        'update',
        '../../libs',
        '4181064AISfdg',
        '__importDe',
        'RdqCU',
        'env',
        'rror:\x20',
        'ERROR:\x20che',
        '/socket',
        '/tbot',
        'tbotMessag',
        '2545500oZAAAs',
        'ession\x20|\x20E',
        'initTbot',
        '6TnIDxI',
        'erty',
        'fault',
        '\x20Tenant:\x20',
        'esSystem',
        '7fKTjia',
        'RVAL',
        'eListener',
        '5140970lRscxV',
        'getIO',
        'emit',
        '2530944hqvTNo',
        ':whatsappS',
        'error',
        'ession',
        'ckMessages',
        'status',
        'yUfSI',
        '__esModule',
        '../../util',
        '229QNeMXo',
        'value',
        '34CTGmrG',
        '568185CfDJBf',
        'DbDrp',
        'default',
        'SendMessag',
        'tenantId',
        '4738239VctnSt',
        './Telegram',
        'OPENING',
        'logger',
        'defineProp',
        'StartTbotS',
        'ageListene'
    ];
    a = function () {
        return w;
    };
    return a();
}