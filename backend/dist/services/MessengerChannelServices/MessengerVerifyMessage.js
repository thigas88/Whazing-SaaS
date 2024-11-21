'use strict';
function a() {
    const x = [
        '837819pZofnR',
        'mid',
        'fault',
        'reply_to',
        '../../help',
        'defineProp',
        'messageDat',
        '1115884xozuur',
        'read',
        'mediaType',
        '64bdsgwg',
        '__importDe',
        '../Message',
        '562802KippKN',
        'reateMessa',
        'fromMe',
        '1508295bJRPMj',
        'Fggmy',
        'message',
        'default',
        'type',
        'tenantId',
        'getTime',
        'timestamp',
        '311370lBCxMs',
        'ticketId',
        'messageId',
        'status',
        '1164898KlRfsk',
        '1683900TLXxBR',
        'tedForMess',
        'contactId',
        'geService',
        'value',
        'erty',
        '__esModule',
        'ageId',
        'message_id',
        'ers/getQuo',
        'quotedMsgI',
        'update',
        'text',
        'received',
        'Services/C',
        'body'
    ];
    a = function () {
        return x;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1f3f + 0x405 + -0xe92 * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x1fd)) / (0x1100 + 0xf7e + -0x207d) + parseInt(r(0x1f2)) / (-0x11ed + 0x5 * -0x6bd + 0x33a0) + -parseInt(r(0x212)) / (-0x6a * -0x47 + 0x12a7 + -0x300a) + -parseInt(q(0x1ec)) / (-0x900 + 0x1 * 0x1f5a + -0x1656) + -parseInt(r(0x1f5)) / (0x1fdf + 0x1e3 + -0x21bd) + -parseInt(r(0x202)) / (0x1113 + 0x26 * 0x1d + -0x155b) + parseInt(q(0x201)) / (0xd63 + -0x259 * 0x2 + -0x8aa) * (parseInt(r(0x1ef)) / (-0x1b * -0xa2 + 0x1dd7 + -0x2ee5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xda26 + -0x2a79e + 0x5f5da));
var __importDefault = this && this[s(0x1f0) + s(0x214)] || function (c) {
    const u = s;
    return c && c[u(0x208)] ? c : { 'default': c };
};
const k = {};
k[s(0x206)] = !![], Object[s(0x1ea) + t(0x207)](exports, s(0x208), k);
const getQuotedForMessageId_1 = __importDefault(require(t(0x216) + s(0x20b) + t(0x203) + t(0x209))), CreateMessageService_1 = __importDefault(require(s(0x1f1) + s(0x210) + t(0x1f3) + t(0x205))), MessengerVerifyMessage = async (f, g, h) => {
        const v = t, w = t, i = {};
        i[v(0x1f6)] = w(0x20f);
        const j = i;
        let l;
        if (f?.[v(0x1f7)]?.[w(0x215)]?.[v(0x213)]) {
            const p = await (-0x13e4 + 0x33e + 0x10a6, getQuotedForMessageId_1[v(0x1f8)])(f[v(0x1f7)][v(0x215)][w(0x213)], g[v(0x1fa)]);
            l = p?.['id'] || undefined;
        }
        const m = {};
        m[v(0x1ff)] = f[w(0x20a)] || '', m[w(0x1fe)] = g['id'], m[w(0x204)] = h['id'], m[w(0x211)] = f[w(0x1f7)][w(0x20e)] || '', m[w(0x1f4)] = ![], m[v(0x1ee)] = f[v(0x1f9)], m[v(0x1ed)] = ![], m[w(0x20c) + 'd'] = l, m[w(0x1fc)] = f[v(0x1fc)], m[w(0x200)] = j[w(0x1f6)];
        const n = m;
        await g[v(0x20d)]({
            'lastMessage': n[v(0x211)],
            'lastMessageAt': new Date()[v(0x1fb)](),
            'answered': ![]
        });
        const o = {};
        o[v(0x1eb) + 'a'] = n, o[v(0x1fa)] = g[v(0x1fa)], await (0x13e4 + 0x10af + -0x2493, CreateMessageService_1[w(0x1f8)])(o);
    };
exports[s(0x1f8)] = MessengerVerifyMessage;