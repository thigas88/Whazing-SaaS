'use strict';
function a() {
    const x = [
        'Services/C',
        'ers/getQuo',
        'received',
        'reply_to',
        'fault',
        '58329vhQQfc',
        'tenantId',
        '3650CeQTvy',
        'geService',
        'read',
        'erty',
        'quotedMsgI',
        '__esModule',
        'default',
        'contactId',
        'text',
        '955099zpKkTW',
        'getTime',
        'reateMessa',
        '25jyjbqK',
        'ticketId',
        '728274mpwkQr',
        'mediaType',
        '4324341QtbVyZ',
        'message',
        '../../help',
        'ageId',
        'status',
        'value',
        'tedForMess',
        '3HExURK',
        'messageDat',
        '1365686LWxqAm',
        'timestamp',
        'fromMe',
        '3191880YSskwF',
        'mid',
        'ASadD',
        'defineProp',
        'type',
        'body',
        'message_id',
        'messageId',
        '__importDe',
        'update',
        '../Message',
        '5308992aUnbIF'
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
            const f = -parseInt(q(0x1c7)) / (0x17aa + -0x1f15 + -0x1 * -0x76c) + -parseInt(q(0x1a8)) / (-0x14c0 + -0x69 * 0x44 + -0x2 * -0x1853) * (parseInt(q(0x1a6)) / (0x1190 + -0x198d + 0x800 * 0x1)) + -parseInt(q(0x1ab)) / (-0x1 * -0x1871 + 0x1deb + -0x4 * 0xd96) + -parseInt(r(0x1ca)) / (0xb19 + 0x1a1d + -0x2531) * (-parseInt(q(0x1cc)) / (0x2626 + 0x7 * 0x1 + -0x2627)) + parseInt(q(0x19f)) / (0x2cd * 0x2 + -0x209 * 0x2 + 0x23 * -0xb) + -parseInt(r(0x1b6)) / (-0x1 * -0xb4d + 0x19b2 + -0x1 * 0x24f7) + -parseInt(r(0x1bc)) / (-0x1a83 + 0xe9c + 0xbf0) * (-parseInt(q(0x1be)) / (-0xc93 + -0x68 * 0x3e + 0x25cd * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7 * 0xb751 + -0x1 * 0x4801 + 0xcc7f7));
var __importDefault = this && this[s(0x1b3) + t(0x1bb)] || function (c) {
    const u = s;
    return c && c[u(0x1c3)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xa9 * 0x39 + 0x1fea + 0x1 * 0x755);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[s(0x1a4)] = !![], Object[t(0x1ae) + s(0x1c1)](exports, s(0x1c3), k);
const getQuotedForMessageId_1 = __importDefault(require(t(0x1a1) + t(0x1b8) + t(0x1a5) + s(0x1a2))), CreateMessageService_1 = __importDefault(require(s(0x1b5) + t(0x1b7) + t(0x1c9) + t(0x1bf))), MessengerVerifyMessage = async (f, g, h) => {
        const v = t, w = t, i = {};
        i[v(0x1ad)] = w(0x1b9);
        const j = i;
        let l;
        if (f?.[v(0x1a0)]?.[v(0x1ba)]?.[v(0x1ac)]) {
            const p = await (0x1 * -0x161 + 0xb * 0xf + 0xbc, getQuotedForMessageId_1[v(0x1c4)])(f[v(0x1a0)][w(0x1ba)][w(0x1ac)], g[v(0x1bd)]);
            l = p?.['id'] || undefined;
        }
        const m = {};
        m[w(0x1b2)] = f[w(0x1b1)] || '', m[w(0x1cb)] = g['id'], m[w(0x1c5)] = h['id'], m[v(0x1b0)] = f[w(0x1a0)][w(0x1c6)] || '', m[w(0x1aa)] = ![], m[w(0x19e)] = f[v(0x1af)], m[v(0x1c0)] = ![], m[v(0x1c2) + 'd'] = l, m[v(0x1a9)] = f[w(0x1a9)], m[w(0x1a3)] = j[w(0x1ad)];
        const n = m;
        await g[v(0x1b4)]({
            'lastMessage': n[v(0x1b0)],
            'lastMessageAt': new Date()[v(0x1c8)](),
            'answered': ![]
        });
        const o = {};
        o[w(0x1a7) + 'a'] = n, o[w(0x1bd)] = g[v(0x1bd)], await (-0x29 * 0x8e + -0x20aa * 0x1 + -0x4 * -0xdda, CreateMessageService_1[v(0x1c4)])(o);
    };
exports[t(0x1c4)] = MessengerVerifyMessage;