'use strict';
function a() {
    const D = [
        'KEzvb',
        'ticket',
        'Waba360',
        'default',
        'channel',
        'defineProp',
        '1227688xBhTVA',
        '728676iSGaTd',
        'ticketId',
        './GetMedia',
        '70lPEiiw',
        'erty',
        'wabaMediaI',
        'Services/C',
        'ugFJH',
        '59068tNXiti',
        'messageId',
        '__importDe',
        'status',
        'msg',
        'MOhtE',
        'timestamp',
        'body',
        'received',
        'contactId',
        'sended',
        '../Message',
        'mediaType',
        'tenantId',
        'chat',
        '1763PHWmpu',
        'includes',
        'read',
        '322137gwprDk',
        'getTime',
        'reateMessa',
        'type',
        'fault',
        'fromMe',
        '__esModule',
        '324010aoYVzh',
        'kDpLL',
        '1112112snmcps',
        'value',
        'mediaUrl',
        'messageDat',
        '254VvrzQv',
        'HVwgN',
        'template',
        '8Nqpach',
        'text',
        'geService',
        'update'
    ];
    a = function () {
        return D;
    };
    return a();
}
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0x1cd)) / (-0x1f05 + -0x604 + -0x2 * -0x1285) * (parseInt(x(0x1dd)) / (0x1b60 + 0x2259 + 0x8d1 * -0x7)) + -parseInt(x(0x1d0)) / (-0x2553 + 0x1733 + 0x149 * 0xb) + -parseInt(x(0x1be)) / (-0x17c + 0x1b6b + -0x19eb) * (-parseInt(w(0x1b9)) / (-0x1 * 0x9fd + -0x4 * -0x13a + -0x28d * -0x2)) + parseInt(x(0x1b6)) / (0x9b7 + -0x5e5 * -0x2 + -0x9 * 0x263) + -parseInt(w(0x1b5)) / (-0xf5 * -0x1f + 0x1 * 0x17c9 + 0x123 * -0x2f) + -parseInt(x(0x1e0)) / (0x9e0 + -0x834 + 0x8c * -0x3) * (parseInt(w(0x1d9)) / (0x46d * 0x7 + 0x1 * 0x1a6f + 0x3961 * -0x1)) + -parseInt(w(0x1d7)) / (0x1 * -0x1886 + -0x26fb * 0x1 + 0x3f8b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x143c0 * -0x1 + 0x10f5c + -0x9853));
var __importDefault = this && this[y(0x1c0) + z(0x1d4)] || function (c) {
    const A = z;
    return c && c[A(0x1d6)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2bb + 0x1 * 0x207e + -0x1c10);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[y(0x1da)] = !![], Object[z(0x1b4) + y(0x1ba)](exports, z(0x1d6), k);
const CreateMessageService_1 = __importDefault(require(z(0x1c9) + z(0x1bc) + y(0x1d2) + y(0x1e2))), GetMediaWaba360_1 = __importDefault(require(y(0x1b8) + z(0x1e6))), VerifyMediaMessage = async (g, h, i, j) => {
        const B = z, C = z, l = {};
        l[B(0x1c3)] = C(0x1e1), l[B(0x1e4)] = B(0x1cc), l[B(0x1de)] = C(0x1df), l[C(0x1d8)] = B(0x1c8), l[C(0x1bd)] = B(0x1c6);
        const m = l;
        let n;
        try {
            const t = {};
            t[B(0x1b3)] = g, t[B(0x1c2)] = h, t[B(0x1e5)] = i, n = await (0x1b69 + 0x1a56 + -0x35bf, GetMediaWaba360_1[C(0x1e7)])(t);
        } catch (u) {
        }
        let o;
        if (![
                m[B(0x1c3)],
                m[B(0x1e4)],
                m[B(0x1de)]
            ][C(0x1ce)](h[B(0x1d3)])) {
            const v = h;
            o = v[h[C(0x1d3)]]['id'];
        }
        const p = {};
        p[B(0x1bf)] = h['id'] || '', p[B(0x1b7)] = i['id'], p[B(0x1c7)] = h[B(0x1d5)] ? undefined : j['id'], p[C(0x1c5)] = h?.[C(0x1e1)]?.[C(0x1c5)] || n || '', p[B(0x1d5)] = h[B(0x1d5)], p[C(0x1cf)] = h[B(0x1d5)], p[B(0x1db)] = n, p[C(0x1ca)] = h[B(0x1d3)], p[C(0x1c4)] = +h[C(0x1c4)], p[C(0x1bb) + 'd'] = o, p[C(0x1c1)] = h[C(0x1d5)] ? m[C(0x1d8)] : m[B(0x1bd)];
        const q = p;
        await i[B(0x1e3)]({
            'lastMessage': h?.[B(0x1e1)]?.[B(0x1c5)] || n,
            'lastMessageAt': new Date()[B(0x1d1)](),
            'answered': h[C(0x1d5)] || ![]
        });
        const r = {};
        r[B(0x1dc) + 'a'] = q, r[C(0x1cb)] = i[C(0x1cb)];
        const s = await (0x14e * 0x1a + 0x1a4d + -0x3c39, CreateMessageService_1[C(0x1e7)])(r);
        return s;
    };
exports[y(0x1e7)] = VerifyMediaMessage;