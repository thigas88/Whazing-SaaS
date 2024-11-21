'use strict';
function a() {
    const w = [
        '12656wbvLZD',
        'OPENING',
        'ageListene',
        '../../libs',
        '../../util',
        '326428DqGlZt',
        '\x20Tenant:\x20',
        'esSystem',
        'tenantId',
        'rror:\x20',
        '1072575SwpzvP',
        's/logger',
        'SendMessag',
        'CHECK_INTE',
        'RVAL',
        '/socket',
        'default',
        'mOPqX',
        'tbotMessag',
        'initTbot',
        'emit',
        'erty',
        'ERROR:\x20che',
        'NfSWQ',
        '24rzMOan',
        '1MOezBV',
        '149420XlKGtM',
        '__esModule',
        'ckMessages',
        './tbotMess',
        'getIO',
        '1716xbzUhE',
        'value',
        'fault',
        '15344439gHcLGi',
        'StartTbotS',
        'update',
        '__importDe',
        '4961520KQPNTR',
        './Telegram',
        'logger',
        'UhvOB',
        ':whatsappS',
        '2934WelRvJ',
        'ession',
        'defineProp',
        'error',
        'eListener',
        'status',
        '/tbot',
        '4312jNmlKn',
        'env',
        'ession\x20|\x20E'
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
            const f = parseInt(n(0x201)) / (-0x17c5 + 0x3 * 0x313 + 0xe8d) * (parseInt(o(0x1ed)) / (-0x4 * 0x4d2 + -0x2 * -0x43 + -0x12c4 * -0x1)) + parseInt(n(0x200)) / (-0x1b31 * 0x1 + -0x13a2 * 0x1 + 0x2ed6) * (-parseInt(o(0x202)) / (-0xdb4 + -0x230d + 0x30c5)) + parseInt(o(0x1f2)) / (-0x2 * -0xa8e + 0x21a * 0x10 + -0xa1 * 0x57) + -parseInt(n(0x207)) / (-0x2098 + -0x73 + 0x2111 * 0x1) * (parseInt(o(0x1e5)) / (-0xb18 * 0x3 + -0xd98 + -0x2ee7 * -0x1)) + -parseInt(o(0x1e8)) / (0x1934 * -0x1 + 0x8c7 * 0x4 + -0x9e0) * (parseInt(o(0x213)) / (0x1471 + 0x2 * -0xb69 + -0x2 * -0x135)) + -parseInt(n(0x20e)) / (-0x39c + -0x1bf * -0x7 + -0x893 * 0x1) + parseInt(n(0x20a)) / (0x1a * -0xa2 + -0x3 * -0x43f + -0x25 * -0x1a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb4 * -0x78e + -0x1 * 0x26bb5 + 0x1782f));
var __importDefault = this && this[p(0x20d) + q(0x209)] || function (c) {
    const r = q;
    return c && c[r(0x203)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1639 + -0x92 * -0x2a + 0x24);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[q(0x208)] = !![], Object[q(0x1e0) + p(0x1fd)](exports, p(0x203), k), exports[q(0x20b) + p(0x1df)] = void (0x1d32 + 0x2 * 0x517 + -0x2760);
const socket_1 = require(p(0x1eb) + p(0x1f7)), tbot_1 = require(p(0x1eb) + q(0x1e4)), logger_1 = require(q(0x1ec) + q(0x1f3)), tbotMessageListener_1 = require(q(0x205) + q(0x1ea) + 'r'), TelegramSendMessagesSystem_1 = __importDefault(require(q(0x20f) + q(0x1f4) + q(0x1ef))), checkingTelegram = {}, checkMessages = async (c, d) => {
        const s = q, t = p;
        if (checkingTelegram[d])
            return;
        checkingTelegram[d] = !![];
        try {
            await (-0x1a30 + 0x2 * -0x12d6 + -0x86 * -0x7a, TelegramSendMessagesSystem_1[s(0x1f8)])(c, d);
        } catch (e) {
            logger_1[s(0x210)][t(0x1e1)](t(0x1fe) + t(0x204) + t(0x1ee) + d + '::', e);
        }
        checkingTelegram[d] = ![];
    }, StartTbotSession = async d => {
        const u = p, v = p, e = {
                'mOPqX': u(0x1e9),
                'NfSWQ': v(0x20c),
                'UhvOB': function (h, i, j, l, m) {
                    return h(i, j, l, m);
                }
            }, f = (0x883 + -0x18a6 + 0x1023, socket_1[u(0x206)])(), g = {};
        g[u(0x1e3)] = e[u(0x1f9)], await d[v(0x20c)](g), f[v(0x1fc)](d[u(0x1f0)] + (u(0x212) + u(0x1df)), {
            'action': e[v(0x1ff)],
            'session': d
        });
        try {
            const h = await (0x6 * 0x6b + -0xaeb + 0x869 * 0x1, tbot_1[u(0x1fb)])(d);
            (-0xafe + -0x1 * -0x23fd + -0x18ff, tbotMessageListener_1[v(0x1fa) + u(0x1e2)])(h), e[v(0x211)](setInterval, checkMessages, +(process[v(0x1e6)][u(0x1f5) + u(0x1f6)] || 0xbd8 + -0x173 * 0x10 + 0x1ee0), h, d[u(0x1f0)]);
        } catch (i) {
            logger_1[u(0x210)][u(0x1e1)](u(0x20b) + u(0x1e7) + v(0x1f1) + i);
        }
    };
exports[p(0x20b) + q(0x1df)] = StartTbotSession;