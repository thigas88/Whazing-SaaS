'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0x92)) / (-0x219c + -0x1eb4 + 0x59 * 0xb9) + -parseInt(x(0xa4)) / (-0x6 * 0x5d0 + -0x1bf0 + -0x2 * -0x1f69) * (-parseInt(x(0xae)) / (-0x2 * 0x12c1 + 0xa4b + 0x1b3a)) + -parseInt(x(0x8f)) / (-0x147 * 0x11 + 0x21b1 * 0x1 + -0xbf6) + -parseInt(w(0xb0)) / (0x1fe9 + 0x27 * 0x5 + -0x1 * 0x20a7) * (-parseInt(w(0x86)) / (0x1 * 0x2194 + -0x31d * 0x7 + -0xbc3)) + parseInt(w(0x9f)) / (-0x1 * -0x1a6e + -0x16e0 + -0x1 * 0x387) * (-parseInt(x(0xab)) / (-0x4c6 * 0x7 + -0x107 * -0xa + 0x172c)) + -parseInt(x(0xaf)) / (0x1732 + -0x5 * -0x15d + -0x1dfa) + parseInt(x(0x9c)) / (0x24b0 + -0x2 * -0xf21 + -0x8 * 0x85d) * (parseInt(w(0x96)) / (0xa3 * 0x1f + 0x12f6 + -0x26a8 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3b077 + 0x4 * -0x49a9 + 0x235f1));
var __importDefault = this && this[y(0x8b) + y(0x98)] || function (c) {
    const A = y;
    return c && c[A(0x99)] ? c : { 'default': c };
};
const k = {};
k[y(0xb2)] = !![], Object[y(0xa6) + y(0xa2)](exports, y(0x99), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x30 * 0x20 + -0x883 * 0x3 + 0x140b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const CreateMessageService_1 = __importDefault(require(z(0x8e) + y(0x91) + z(0x94) + y(0x89))), GetMediaWaba360_1 = __importDefault(require(z(0x8d) + z(0xa5))), VerifyMediaMessage = async (g, h, i, j) => {
        const B = z, C = y, l = {};
        l[B(0xa0)] = C(0x8a), l[C(0xb6)] = C(0xad), l[B(0x9a)] = C(0xb1), l[B(0x85)] = C(0x82), l[B(0xa1)] = B(0xac);
        const m = l;
        let n;
        try {
            const t = {};
            t[B(0xb7)] = g, t[B(0xaa)] = h, t[C(0xa7)] = i, n = await (-0xfa * 0x1 + -0x20b * -0x3 + -0x527 * 0x1, GetMediaWaba360_1[B(0x95)])(t);
        } catch (u) {
        }
        let o;
        if (![
                m[B(0xa0)],
                m[C(0xb6)],
                m[B(0x9a)]
            ][B(0x8c)](h[C(0x97)])) {
            const v = h;
            o = v[h[B(0x97)]]['id'];
        }
        const p = {};
        p[C(0xb5)] = h['id'] || '', p[B(0x93)] = i['id'], p[C(0x90)] = h[C(0x88)] ? undefined : j['id'], p[C(0x84)] = h?.[C(0x8a)]?.[B(0x84)] || n || '', p[C(0x88)] = h[B(0x88)], p[C(0x83)] = h[C(0x88)], p[B(0xb3)] = n, p[C(0xa9)] = h[B(0x97)], p[B(0xa3)] = +h[C(0xa3)], p[C(0x87) + 'd'] = o, p[C(0x9b)] = h[B(0x88)] ? m[B(0x85)] : m[C(0xa1)];
        const q = p;
        await i[B(0x9d)]({
            'lastMessage': h?.[C(0x8a)]?.[C(0x84)] || n,
            'lastMessageAt': new Date()[B(0xa8)](),
            'answered': h[B(0x88)] || ![]
        });
        const r = {};
        r[C(0x9e) + 'a'] = q, r[B(0xb4)] = i[C(0xb4)];
        const s = await (-0x2 * 0xd09 + -0x1 * 0xf68 + 0x297a, CreateMessageService_1[C(0x95)])(r);
        return s;
    };
exports[y(0x95)] = VerifyMediaMessage;
function a() {
    const D = [
        'messageId',
        'CbjIf',
        'channel',
        'sended',
        'read',
        'body',
        'Ylabh',
        '1494TSQaII',
        'wabaMediaI',
        'fromMe',
        'geService',
        'text',
        '__importDe',
        'includes',
        './GetMedia',
        '../Message',
        '2351636fnQweJ',
        'contactId',
        'Services/C',
        '103422UDaIgb',
        'ticketId',
        'reateMessa',
        'default',
        '30976dvlWQY',
        'type',
        'fault',
        '__esModule',
        'ikqIG',
        'status',
        '4300uNqERQ',
        'update',
        'messageDat',
        '28ibqScq',
        'NUsGc',
        'kmgMw',
        'erty',
        'timestamp',
        '16570kDkLiC',
        'Waba360',
        'defineProp',
        'ticket',
        'getTime',
        'mediaType',
        'msg',
        '583016sFqpTc',
        'received',
        'chat',
        '66DTPWcV',
        '4551228fTUpIk',
        '8165HqCTTY',
        'template',
        'value',
        'mediaUrl',
        'tenantId'
    ];
    a = function () {
        return D;
    };
    return a();
}