'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x183)) / (-0x7 * 0x44d + 0x215a * 0x1 + 0xa * -0x53) * (parseInt(n(0x180)) / (-0x1597 * 0x1 + -0x1625 * 0x1 + 0x2bbe)) + -parseInt(n(0x191)) / (-0x7 * -0x557 + 0x7 * 0x167 + 0x2f * -0x101) + parseInt(n(0x171)) / (-0x1a8d + 0x264 + 0x182d) * (parseInt(n(0x16e)) / (-0xbf5 + -0xe5 * 0x29 + 0x30a7)) + parseInt(n(0x19a)) / (-0x1c18 + -0x8c + 0x6 * 0x4c7) * (-parseInt(o(0x193)) / (-0x1678 + -0x19e9 + 0x3068)) + -parseInt(o(0x185)) / (-0xec3 * 0x2 + -0x2429 * -0x1 + -0x69b) * (-parseInt(n(0x17a)) / (-0x3b2 * -0x6 + 0x25 * -0xd + -0xa21 * 0x2)) + parseInt(n(0x16b)) / (-0x198f + 0x1308 + 0x29 * 0x29) + parseInt(n(0x197)) / (0x7 * 0xef + -0x1c40 + 0x15c2) * (parseInt(o(0x192)) / (0x1be5 + 0x1 * 0x1aff + -0x36d8));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xbd649 * 0x1 + 0x1 * -0xe3ff + 0x2f71a * 0x1));
var __importDefault = this && this[p(0x19b) + p(0x195)] || function (c) {
    const r = q;
    return c && c[r(0x18e)] ? c : { 'default': c };
};
const k = {};
k[p(0x181)] = !![], Object[q(0x17c) + p(0x188)](exports, p(0x18e), k), exports[q(0x173) + q(0x189)] = void (0x1483 + 0x66 * -0x2e + -0x22f);
const socket_1 = require(q(0x16a) + q(0x18f)), tbot_1 = require(p(0x16a) + p(0x199)), logger_1 = require(q(0x18b) + p(0x17b)), tbotMessageListener_1 = require(q(0x179) + q(0x198) + 'r'), TelegramSendMessagesSystem_1 = __importDefault(require(p(0x177) + q(0x196) + q(0x19d))), checkingTelegram = {}, checkMessages = async (c, d) => {
        const s = p, t = q;
        if (checkingTelegram[d])
            return;
        checkingTelegram[d] = !![];
        try {
            await (-0x1882 + 0xc73 * -0x2 + -0x66 * -0x7c, TelegramSendMessagesSystem_1[s(0x187)])(c, d);
        } catch (e) {
            logger_1[s(0x184)][t(0x170)](s(0x172) + t(0x175) + s(0x16c) + d + '::', e);
        }
        checkingTelegram[d] = ![];
    }, StartTbotSession = async d => {
        const u = p, v = q, e = {
                'nGCpv': u(0x169),
                'qYoIM': v(0x16f),
                'LTRRO': function (h, i, j, l, m) {
                    return h(i, j, l, m);
                }
            }, f = (0x3 * -0x282 + -0x22bd + 0x2a43, socket_1[u(0x17e)])(), g = {};
        g[u(0x186)] = e[u(0x18c)], await d[u(0x16f)](g), f[v(0x194)](d[u(0x18a)] + (v(0x19e) + v(0x189)), {
            'action': e[u(0x17d)],
            'session': d
        });
        try {
            const h = await (0x1 * 0x26c1 + -0x2 * -0x7cd + -0x365b, tbot_1[u(0x16d)])(d);
            (0x13d * 0x10 + 0xa3e + -0x1e0e * 0x1, tbotMessageListener_1[u(0x17f) + v(0x190)])(h), e[v(0x19c)](setInterval, checkMessages, +(process[v(0x182)][v(0x174) + v(0x178)] || 0x2305 + 0x1a99 * -0x1 + 0xb1c), h, d[v(0x18a)]);
        } catch (i) {
            logger_1[u(0x184)][u(0x170)](u(0x173) + v(0x176) + u(0x18d) + i);
        }
    };
exports[q(0x173) + q(0x189)] = StartTbotSession;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x15 * -0x1ac + -0x1 * 0xe57 + 0x32dc);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const w = [
        '112882QWAcDb',
        'logger',
        '2224JsxOPv',
        'status',
        'default',
        'erty',
        'ession',
        'tenantId',
        '../../util',
        'nGCpv',
        'rror:\x20',
        '__esModule',
        '/socket',
        'eListener',
        '5429151UukNpC',
        '5349444RoqsOT',
        '154SydJcG',
        'emit',
        'fault',
        'SendMessag',
        '55yAsBYt',
        'ageListene',
        '/tbot',
        '205152ApSEWS',
        '__importDe',
        'LTRRO',
        'esSystem',
        ':whatsappS',
        'OPENING',
        '../../libs',
        '6746720CCsQlW',
        '\x20Tenant:\x20',
        'initTbot',
        '1433050dHxKii',
        'update',
        'error',
        '8PFbysI',
        'ERROR:\x20che',
        'StartTbotS',
        'CHECK_INTE',
        'ckMessages',
        'ession\x20|\x20E',
        './Telegram',
        'RVAL',
        './tbotMess',
        '29133bfrHQk',
        's/logger',
        'defineProp',
        'qYoIM',
        'getIO',
        'tbotMessag',
        '16bnsXmj',
        'value',
        'env'
    ];
    a = function () {
        return w;
    };
    return a();
}