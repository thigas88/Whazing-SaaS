'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0x1bc)) / (-0x11d2 + 0x2 * 0x470 + -0x4f * -0x1d) * (parseInt(w(0x19f)) / (-0x20d3 + -0x13 * 0x1e + 0x230f)) + parseInt(w(0x1bf)) / (-0x2341 * 0x1 + 0x3 * -0xa75 + 0x42a3 * 0x1) + -parseInt(x(0x197)) / (0x1b4b + 0x125f + 0x2 * -0x16d3) + -parseInt(x(0x1ac)) / (-0x5 * 0x403 + -0x209f + -0x34b3 * -0x1) + parseInt(x(0x1a5)) / (-0x13aa + -0x110f + 0x199 * 0x17) + -parseInt(w(0x19a)) / (0x3 * 0x103 + 0x3f0 * 0x3 + -0xed2) + -parseInt(x(0x193)) / (-0xfe5 * 0x1 + 0xaac + -0x10d * -0x5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x86b39 * -0x1 + -0x8008 * -0x9 + 0x251 * -0x169));
var __importDefault = this && this[y(0x1a7) + z(0x195)] || function (c) {
    const A = y;
    return c && c[A(0x1a2)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xa94 + -0x5f3 + 0x11 * -0x2e);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const D = [
        'defineProp',
        'received',
        '21172UVzfxb',
        'mediaUrl',
        'Waba360',
        '2674062kQsLbL',
        'includes',
        'ticket',
        'Xoloy',
        'geService',
        'channel',
        'contactId',
        '4080776GJrjPF',
        'chat',
        'fault',
        'uCoRc',
        '174244hEulbr',
        'read',
        './GetMedia',
        '6170297ouHhly',
        'reateMessa',
        'ticketId',
        'value',
        'status',
        '102VnRZxm',
        'template',
        'default',
        '__esModule',
        'sended',
        'messageId',
        '5410278rWTdiN',
        'messageDat',
        '__importDe',
        'getTime',
        'gNnar',
        'type',
        '../Message',
        '4025310QzoKHF',
        'timestamp',
        'update',
        'msg',
        'erty',
        'tenantId',
        'body',
        'Services/C',
        'text',
        'EDkIv',
        'mediaType',
        'wabaMediaI',
        'FjXWc',
        'fromMe'
    ];
    a = function () {
        return D;
    };
    return a();
}
k[y(0x19d)] = !![], Object[y(0x1ba) + z(0x1b0)](exports, y(0x1a2), k);
const CreateMessageService_1 = __importDefault(require(y(0x1ab) + z(0x1b3) + y(0x19b) + z(0x1c3))), GetMediaWaba360_1 = __importDefault(require(y(0x199) + z(0x1be))), VerifyMediaMessage = async (g, h, i, j) => {
        const B = z, C = y, l = {};
        l[B(0x1c2)] = B(0x1b4), l[B(0x1b5)] = B(0x194), l[B(0x1a9)] = C(0x1a0), l[B(0x1b8)] = C(0x1a3), l[B(0x196)] = C(0x1bb);
        const m = l;
        let n;
        try {
            const t = {};
            t[C(0x1c4)] = g, t[B(0x1af)] = h, t[B(0x1c1)] = i, n = await (0x1bd + -0x1 * 0x2390 + 0x7 * 0x4d5, GetMediaWaba360_1[C(0x1a1)])(t);
        } catch (u) {
        }
        let o;
        if (![
                m[B(0x1c2)],
                m[B(0x1b5)],
                m[B(0x1a9)]
            ][C(0x1c0)](h[B(0x1aa)])) {
            const v = h;
            o = v[h[C(0x1aa)]]['id'];
        }
        const p = {};
        p[C(0x1a4)] = h['id'] || '', p[B(0x19c)] = i['id'], p[C(0x1c5)] = h[B(0x1b9)] ? undefined : j['id'], p[B(0x1b2)] = h?.[C(0x1b4)]?.[C(0x1b2)] || n || '', p[C(0x1b9)] = h[B(0x1b9)], p[B(0x198)] = h[C(0x1b9)], p[B(0x1bd)] = n, p[B(0x1b6)] = h[C(0x1aa)], p[C(0x1ad)] = +h[C(0x1ad)], p[C(0x1b7) + 'd'] = o, p[C(0x19e)] = h[C(0x1b9)] ? m[C(0x1b8)] : m[C(0x196)];
        const q = p;
        await i[B(0x1ae)]({
            'lastMessage': h?.[C(0x1b4)]?.[C(0x1b2)] || n,
            'lastMessageAt': new Date()[B(0x1a8)](),
            'answered': h[B(0x1b9)] || ![]
        });
        const r = {};
        r[C(0x1a6) + 'a'] = q, r[C(0x1b1)] = i[B(0x1b1)];
        const s = await (-0x183d + 0x3 * -0x5eb + 0xfa * 0x2b, CreateMessageService_1[B(0x1a1)])(r);
        return s;
    };
exports[y(0x1a1)] = VerifyMediaMessage;