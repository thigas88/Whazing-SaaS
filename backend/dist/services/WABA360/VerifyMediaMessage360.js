'use strict';
function a() {
    const D = [
        'getTime',
        '65611iBSQit',
        'RthyY',
        'messageId',
        '__esModule',
        '14102344bqmeMF',
        'qZVEx',
        'chat',
        'wabaMediaI',
        './GetMedia',
        'default',
        'timestamp',
        'received',
        'defineProp',
        'channel',
        '203sfoyis',
        'geService',
        'tenantId',
        '12gXIqrn',
        'KCQGF',
        'value',
        'body',
        'fault',
        '3828XPkLTd',
        '34776401PfvEvl',
        'status',
        'text',
        '56uvKARW',
        '90kvWngz',
        'contactId',
        'msg',
        'mediaUrl',
        'ticket',
        '196QtmkCP',
        'type',
        'ticketId',
        'reateMessa',
        'sended',
        '119975dGcmpn',
        'update',
        'erty',
        'template',
        'fromMe',
        'Services/C',
        'Waba360',
        'read',
        'mediaType',
        '__importDe',
        'ZXWJY',
        'bLsxj',
        'messageDat',
        '1020447dIOTBn',
        'includes',
        '../Message',
        '191529FCAzFm'
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
            const f = -parseInt(w(0x10e)) / (0xf59 + 0x57a * -0x5 + 0xc0a * 0x1) + -parseInt(w(0xf1)) / (0x181b + 0x1 * -0x110b + -0x81 * 0xe) * (-parseInt(x(0x10c)) / (0x1 * -0x2327 + -0x263a + 0x4964)) + parseInt(x(0xf7)) / (0x1bff + 0x3c4 * 0x1 + -0xbd * 0x2b) * (-parseInt(x(0xfc)) / (-0x92 * 0x5 + -0x172b + 0x1a0a * 0x1)) + -parseInt(w(0xed)) / (-0x4a2 * -0x3 + 0xe * -0x247 + 0x1202) * (-parseInt(x(0xe5)) / (0xb2b * -0x3 + 0x989 + -0x1 * -0x17ff)) + -parseInt(x(0x112)) / (0x122 * -0xd + -0x2 * 0x10c8 + 0x1 * 0x3052) + -parseInt(x(0x109)) / (-0x1c7f * 0x1 + -0x4 * -0x94 + -0x4 * -0x68e) * (parseInt(x(0xf2)) / (0x54 + -0x61a * 0x4 + 0x7 * 0x372)) + parseInt(x(0xee)) / (-0x424 + -0x1 * 0x1a17 + -0x1f * -0xfa) * (parseInt(w(0xe8)) / (-0x2087 + -0x1ad4 + 0x3b67));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xae94f + 0x633ae + -0x2b96e));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x22fe + -0x83f * 0x4 + -0x11f);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[y(0x105) + z(0xec)] || function (c) {
    const A = y;
    return c && c[A(0x111)] ? c : { 'default': c };
};
const k = {};
k[z(0xea)] = !![], Object[z(0xe3) + z(0xfe)](exports, z(0x111), k);
const CreateMessageService_1 = __importDefault(require(y(0x10b) + z(0x101) + y(0xfa) + z(0xe6))), GetMediaWaba360_1 = __importDefault(require(y(0x116) + y(0x102))), VerifyMediaMessage = async (g, h, i, j) => {
        const B = z, C = y, l = {};
        l[B(0xe9)] = C(0xf0), l[B(0x10f)] = C(0x114), l[C(0x106)] = C(0xff), l[B(0x107)] = B(0xfb), l[B(0x113)] = B(0x119);
        const m = l;
        let n;
        try {
            const t = {};
            t[B(0xe4)] = g, t[B(0xf4)] = h, t[B(0xf6)] = i, n = await (-0x1211 + -0x1ea8 + 0x1 * 0x30b9, GetMediaWaba360_1[C(0x117)])(t);
        } catch (u) {
        }
        let o;
        if (![
                m[C(0xe9)],
                m[C(0x10f)],
                m[C(0x106)]
            ][B(0x10a)](h[B(0xf8)])) {
            const v = h;
            o = v[h[B(0xf8)]]['id'];
        }
        const p = {};
        p[B(0x110)] = h['id'] || '', p[C(0xf9)] = i['id'], p[C(0xf3)] = h[B(0x100)] ? undefined : j['id'], p[C(0xeb)] = h?.[C(0xf0)]?.[B(0xeb)] || n || '', p[C(0x100)] = h[C(0x100)], p[B(0x103)] = h[C(0x100)], p[B(0xf5)] = n, p[C(0x104)] = h[B(0xf8)], p[B(0x118)] = +h[C(0x118)], p[C(0x115) + 'd'] = o, p[B(0xef)] = h[B(0x100)] ? m[C(0x107)] : m[C(0x113)];
        const q = p;
        await i[C(0xfd)]({
            'lastMessage': h?.[C(0xf0)]?.[B(0xeb)] || n,
            'lastMessageAt': new Date()[B(0x10d)](),
            'answered': h[B(0x100)] || ![]
        });
        const r = {};
        r[B(0x108) + 'a'] = q, r[B(0xe7)] = i[C(0xe7)];
        const s = await (-0x22cd + -0x15a4 * -0x1 + -0x3 * -0x463, CreateMessageService_1[C(0x117)])(r);
        return s;
    };
exports[z(0x117)] = VerifyMediaMessage;