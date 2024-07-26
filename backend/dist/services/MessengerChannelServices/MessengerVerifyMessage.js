'use strict';
function a() {
    const x = [
        'Services/C',
        '3534296mMIyCN',
        '592609OKrXLH',
        'messageDat',
        '2BPxsSz',
        'mid',
        'message_id',
        'tedForMess',
        'default',
        'tenantId',
        'value',
        '__esModule',
        'messageId',
        '351xmvkxO',
        'update',
        'mediaType',
        'read',
        '2352861vDbuRG',
        'timestamp',
        '../../help',
        'received',
        '__importDe',
        'status',
        'BTmLL',
        '17416476vaKGJM',
        'geService',
        'text',
        'message',
        '400vYEHBY',
        'body',
        '763otisAN',
        'ticketId',
        'type',
        'reateMessa',
        'getTime',
        'defineProp',
        'quotedMsgI',
        '5394BGdxai',
        'ers/getQuo',
        'fault',
        'contactId',
        'fromMe',
        '43080sTKdKz',
        '258370RcwGzs',
        '../Message',
        'reply_to',
        'ageId',
        'erty'
    ];
    a = function () {
        return x;
    };
    return a();
}
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x70)) / (-0x701 * 0x2 + -0x5 * -0x4b8 + -0xdf * 0xb) * (parseInt(q(0x72)) / (-0x90d + 0xb * -0x1af + -0x1b94 * -0x1)) + parseInt(q(0x7f)) / (0x1929 + -0x1 * -0x13e4 + -0x1 * 0x2d0a) + -parseInt(q(0x6f)) / (-0x945 + 0x226 + 0x723) + parseInt(r(0x8a)) / (0x1423 + 0x477 + -0x1895) * (parseInt(q(0x93)) / (0x1 * -0x257 + -0xdcc + 0x1029)) + -parseInt(q(0x8c)) / (0x94f * 0x2 + -0x1 * 0x2662 + 0x9 * 0x233) * (parseInt(r(0x98)) / (-0x119f * -0x1 + -0x6ee + -0x1 * 0xaa9)) + -parseInt(q(0x7b)) / (-0x1a99 + -0x2419 + 0x3ebb) * (parseInt(q(0x99)) / (-0x1cf + -0x1e95 * 0x1 + -0x1 * -0x206e)) + parseInt(r(0x86)) / (-0x1605 + 0x1fc * 0xb + 0x3c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x60bb8 + 0x21cb + 0x2465b));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x180b + -0x10d5 + 0x364 * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0x83) + s(0x95)] || function (c) {
    const u = s;
    return c && c[u(0x79)] ? c : { 'default': c };
};
const k = {};
k[t(0x78)] = !![], Object[t(0x91) + s(0x9d)](exports, t(0x79), k);
const getQuotedForMessageId_1 = __importDefault(require(t(0x81) + t(0x94) + s(0x75) + s(0x9c))), CreateMessageService_1 = __importDefault(require(t(0x9a) + t(0x6e) + t(0x8f) + s(0x87))), MessengerVerifyMessage = async (f, g, h) => {
        const v = t, w = s, i = {};
        i[v(0x85)] = v(0x82);
        const j = i;
        let l;
        if (f?.[v(0x89)]?.[v(0x9b)]?.[w(0x73)]) {
            const p = await (-0x1 * 0x691 + -0xb7d + 0x907 * 0x2, getQuotedForMessageId_1[w(0x76)])(f[v(0x89)][w(0x9b)][w(0x73)], g[v(0x77)]);
            l = p?.['id'] || undefined;
        }
        const m = {};
        m[w(0x7a)] = f[w(0x74)] || '', m[w(0x8d)] = g['id'], m[v(0x96)] = h['id'], m[v(0x8b)] = f[v(0x89)][v(0x88)] || '', m[v(0x97)] = ![], m[v(0x7d)] = f[v(0x8e)], m[v(0x7e)] = ![], m[v(0x92) + 'd'] = l, m[v(0x80)] = f[v(0x80)], m[w(0x84)] = j[v(0x85)];
        const n = m;
        await g[w(0x7c)]({
            'lastMessage': n[v(0x8b)],
            'lastMessageAt': new Date()[w(0x90)](),
            'answered': ![]
        });
        const o = {};
        o[v(0x71) + 'a'] = n, o[w(0x77)] = g[w(0x77)], await (-0x23e * -0x3 + -0x465 + -0x255 * 0x1, CreateMessageService_1[w(0x76)])(o);
    };
exports[s(0x76)] = MessengerVerifyMessage;