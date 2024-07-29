'use strict';
const s = b, t = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x27 * 0xd3 + -0x17fd + 0x1 * -0x66a);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x1e7)) / (0x949 + -0x21d1 + 0x1889) * (-parseInt(q(0x1dd)) / (0xe1a + -0x1 * -0x1cf7 + -0x2b0f)) + parseInt(q(0x1d6)) / (-0x86f + -0x26d5 + 0xf7 * 0x31) + parseInt(q(0x1c2)) / (0xec5 + -0x25f * -0x1 + 0x4 * -0x448) * (-parseInt(r(0x1d9)) / (0x7d6 + -0x2601 + -0xa8 * -0x2e)) + parseInt(r(0x1df)) / (0x2 * 0x4b1 + 0x1737 * -0x1 + 0xddb) * (parseInt(r(0x1d0)) / (0x1 * 0x2f7 + 0x14fa + 0x1 * -0x17ea)) + -parseInt(r(0x1bf)) / (0x2 * 0xaf + -0x13c0 + 0x126a) + parseInt(r(0x1d4)) / (0xde * 0x17 + -0x499 + -0x1ea * 0x8) + parseInt(r(0x1cf)) / (0x2 * 0xa35 + -0x29f * -0x1 + -0x16ff);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x42c2e + -0x4ac9c + 0x4 * 0x3aa57));
function a() {
    const x = [
        'status',
        'mediaType',
        '../Message',
        'ers/getQuo',
        'Services/C',
        '955312JMptOs',
        'geService',
        'ticketId',
        '529156LkJTbG',
        'type',
        'contactId',
        'quotedMsgI',
        'fault',
        'read',
        'messageId',
        'tenantId',
        'default',
        'text',
        'reateMessa',
        'getTime',
        'gQVXG',
        '1112270dRTBUk',
        '1470KYwzXK',
        'body',
        'received',
        'messageDat',
        '5552730lwkbKE',
        'erty',
        '150216WZYvyF',
        'update',
        'ageId',
        '5OsPbVn',
        'message_id',
        'reply_to',
        '../../help',
        '248GabLaa',
        'tedForMess',
        '7368PpBaHO',
        '__importDe',
        'value',
        '__esModule',
        'mid',
        'fromMe',
        'message',
        'timestamp',
        '3253hJRzDy',
        'defineProp'
    ];
    a = function () {
        return x;
    };
    return a();
}
var __importDefault = this && this[s(0x1e0) + s(0x1c6)] || function (c) {
    const u = s;
    return c && c[u(0x1e2)] ? c : { 'default': c };
};
const k = {};
k[s(0x1e1)] = !![], Object[s(0x1e8) + s(0x1d5)](exports, t(0x1e2), k);
const getQuotedForMessageId_1 = __importDefault(require(t(0x1dc) + s(0x1ec) + s(0x1de) + s(0x1d8))), CreateMessageService_1 = __importDefault(require(s(0x1eb) + s(0x1be) + s(0x1cc) + s(0x1c0))), MessengerVerifyMessage = async (f, g, h) => {
        const v = t, w = t, i = {};
        i[v(0x1ce)] = v(0x1d2);
        const j = i;
        let l;
        if (f?.[w(0x1e5)]?.[v(0x1db)]?.[v(0x1e3)]) {
            const p = await (0x1558 * 0x1 + 0xef6 + -0x244e, getQuotedForMessageId_1[w(0x1ca)])(f[w(0x1e5)][w(0x1db)][v(0x1e3)], g[w(0x1c9)]);
            l = p?.['id'] || undefined;
        }
        const m = {};
        m[w(0x1c8)] = f[w(0x1da)] || '', m[v(0x1c1)] = g['id'], m[v(0x1c4)] = h['id'], m[v(0x1d1)] = f[v(0x1e5)][w(0x1cb)] || '', m[w(0x1e4)] = ![], m[w(0x1ea)] = f[v(0x1c3)], m[w(0x1c7)] = ![], m[v(0x1c5) + 'd'] = l, m[w(0x1e6)] = f[w(0x1e6)], m[w(0x1e9)] = j[v(0x1ce)];
        const n = m;
        await g[w(0x1d7)]({
            'lastMessage': n[w(0x1d1)],
            'lastMessageAt': new Date()[w(0x1cd)](),
            'answered': ![]
        });
        const o = {};
        o[v(0x1d3) + 'a'] = n, o[v(0x1c9)] = g[v(0x1c9)], await (0xb8b * -0x3 + 0x710 + 0x1b91, CreateMessageService_1[w(0x1ca)])(o);
    };
exports[t(0x1ca)] = MessengerVerifyMessage;