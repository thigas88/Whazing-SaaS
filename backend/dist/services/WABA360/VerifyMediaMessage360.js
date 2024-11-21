'use strict';
const y = b, z = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2628 + -0x9a8 + 0x3040);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0x85)) / (0x272 * 0x6 + -0x371 * -0xb + -0x3486) + parseInt(x(0x8f)) / (-0x356 + -0x29 + 0x381) + -parseInt(w(0x7d)) / (-0xa * -0x27a + 0x8a0 + -0x5 * 0x6ad) * (-parseInt(w(0x9c)) / (0x9a0 + -0x16c * -0x13 + -0x24a0)) + parseInt(x(0x9b)) / (0x191 * -0xb + 0x11 * 0x189 + -0x3 * 0x2f3) * (parseInt(w(0x79)) / (0x5 * 0x9b + 0x81b * 0x1 + 0x6 * -0x1da)) + -parseInt(x(0x99)) / (0x11 * 0x1a5 + 0x151c * 0x1 + 0x2 * -0x1885) * (parseInt(w(0x91)) / (-0x2660 + 0x1e98 * -0x1 + -0xb8 * -0x60)) + parseInt(w(0x9e)) / (-0x1b * 0x110 + 0x1572 + 0x1b * 0x45) + -parseInt(w(0x7a)) / (0x223 * -0x6 + -0x5e5 + -0x12c1 * -0x1) * (parseInt(x(0x80)) / (0x1300 + 0xa6f * -0x1 + -0x2 * 0x443));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xad65 * -0x5 + -0x179ff + 0x7202a));
var __importDefault = this && this[y(0x95) + y(0x9d)] || function (c) {
    const A = z;
    return c && c[A(0x78)] ? c : { 'default': c };
};
const k = {};
k[z(0x82)] = !![], Object[z(0x7f) + z(0x7c)](exports, y(0x78), k);
function a() {
    const D = [
        '../Message',
        'timestamp',
        'chat',
        'vCvtA',
        './GetMedia',
        'ticket',
        'getTime',
        'template',
        '__esModule',
        '1371666ctkMFO',
        '270nBMalY',
        'text',
        'erty',
        '6zRQgzQ',
        'ILCyQ',
        'defineProp',
        '7997HYwaMv',
        'SBnZp',
        'value',
        'update',
        'reateMessa',
        '174107eQvgqb',
        'status',
        'messageId',
        'read',
        'default',
        'includes',
        'Waba360',
        'wabaMediaI',
        'body',
        'messageDat',
        '39454NqsZYW',
        'WUigr',
        '4808TreOxr',
        'tenantId',
        'mediaType',
        'lReyP',
        '__importDe',
        'ticketId',
        'geService',
        'channel',
        '2912EAfANW',
        'type',
        '5gKskmb',
        '112924pQotSh',
        'fault',
        '2585034rKmRMa',
        'fromMe',
        'mediaUrl',
        'sended',
        'msg',
        'Services/C',
        'received',
        'contactId'
    ];
    a = function () {
        return D;
    };
    return a();
}
const CreateMessageService_1 = __importDefault(require(z(0x70) + z(0xa3) + y(0x84) + y(0x97))), GetMediaWaba360_1 = __importDefault(require(z(0x74) + z(0x8b))), VerifyMediaMessage = async (g, h, i, j) => {
        const B = y, C = y, l = {};
        l[B(0x7e)] = C(0x7b), l[C(0x81)] = C(0x72), l[C(0x90)] = C(0x77), l[B(0x94)] = B(0xa1), l[C(0x73)] = B(0xa4);
        const m = l;
        let n;
        try {
            const t = {};
            t[B(0x98)] = g, t[B(0xa2)] = h, t[C(0x75)] = i, n = await (0x773 + 0x4 * -0x5e7 + 0x1029, GetMediaWaba360_1[B(0x89)])(t);
        } catch (u) {
        }
        let o;
        if (![
                m[C(0x7e)],
                m[C(0x81)],
                m[B(0x90)]
            ][B(0x8a)](h[B(0x9a)])) {
            const v = h;
            o = v[h[C(0x9a)]]['id'];
        }
        const p = {};
        p[C(0x87)] = h['id'] || '', p[B(0x96)] = i['id'], p[B(0xa5)] = h[C(0x9f)] ? undefined : j['id'], p[B(0x8d)] = h?.[C(0x7b)]?.[B(0x8d)] || n || '', p[C(0x9f)] = h[C(0x9f)], p[C(0x88)] = h[C(0x9f)], p[C(0xa0)] = n, p[C(0x93)] = h[C(0x9a)], p[C(0x71)] = +h[B(0x71)], p[B(0x8c) + 'd'] = o, p[C(0x86)] = h[C(0x9f)] ? m[B(0x94)] : m[C(0x73)];
        const q = p;
        await i[C(0x83)]({
            'lastMessage': h?.[C(0x7b)]?.[C(0x8d)] || n,
            'lastMessageAt': new Date()[C(0x76)](),
            'answered': h[C(0x9f)] || ![]
        });
        const r = {};
        r[B(0x8e) + 'a'] = q, r[B(0x92)] = i[C(0x92)];
        const s = await (-0x59 + -0x1e78 + 0x17 * 0x157, CreateMessageService_1[C(0x89)])(r);
        return s;
    };
exports[y(0x89)] = VerifyMediaMessage;