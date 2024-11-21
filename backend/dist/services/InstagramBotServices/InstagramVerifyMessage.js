'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xa61 + 0x985 + 0xc5 * -0x18);
        let h = e[f];
        return h;
    }, b(c, d);
}
const p = b, q = b;
function a() {
    const u = [
        '292482JwSHIR',
        'reateMessa',
        '370337KvuHYL',
        'Services/C',
        'Cqahk',
        'message',
        '115YtRkKa',
        'iErIx',
        '11574840EgdrVJ',
        'received',
        '1213880BKqupL',
        'text',
        'geService',
        'value',
        '../Message',
        'messageDat',
        'item_id',
        'fault',
        '36HOsbMC',
        '__importDe',
        'TTALS',
        '3OiJetJ',
        '9897741UOhIGb',
        '3714676iDHGSt',
        '3143766jYZWSI',
        'erty',
        '__esModule',
        'chat',
        'defineProp',
        'default',
        'tenantId',
        'kBLlb',
        'getTime',
        'update'
    ];
    a = function () {
        return u;
    };
    return a();
}
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x179)) / (-0x98 * -0x12 + -0xff + -0x9b0) + -parseInt(o(0x18f)) / (0x1a1 + 0x2 * 0x3ed + -0x979) + -parseInt(n(0x18c)) / (-0x52 * -0x4e + -0x1 * 0x2605 + 0xd0c) * (-parseInt(o(0x18e)) / (0xb * -0x1f7 + 0x115 * -0x1d + -0x3502 * -0x1)) + -parseInt(o(0x17d)) / (-0x102b * 0x1 + -0x2 * -0xd73 + -0xab6) * (-parseInt(o(0x177)) / (-0x1 * 0x1c3 + -0x5fb + 0x7c4)) + parseInt(n(0x18d)) / (0x789 + 0x1c00 + 0x2d * -0xca) + -parseInt(o(0x181)) / (0x1 * -0x5b7 + -0x223 * 0x3 + 0xc28) * (-parseInt(o(0x189)) / (0xe31 + -0x1284 + 0x45c)) + -parseInt(o(0x17f)) / (-0x1 * 0xfb8 + -0x1 * -0x122b + 0x1 * -0x269);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb1e * 0x1d9 + -0x33f3b * -0x1 + 0x2 * 0x100e2e));
var __importDefault = this && this[p(0x18a) + q(0x188)] || function (c) {
    const r = q;
    return c && c[r(0x16f)] ? c : { 'default': c };
};
const k = {};
k[q(0x184)] = !![], Object[p(0x171) + p(0x16e)](exports, p(0x16f), k);
const CreateMessageService_1 = __importDefault(require(q(0x185) + q(0x17a) + q(0x178) + q(0x183))), VerifyMessage = async (d, e, f, g) => {
        const s = q, t = p, h = {
                'kBLlb': function (l, m) {
                    return l(m);
                },
                'TTALS': s(0x170),
                'Cqahk': s(0x180),
                'iErIx': function (l, m) {
                    return l || m;
                }
            }, i = {
                'messageId': h[s(0x174)](String, d[s(0x17c)][s(0x187)]),
                'ticketId': f['id'],
                'contactId': e ? undefined : g['id'],
                'body': d[t(0x17c)][s(0x182)],
                'fromMe': e,
                'read': e,
                'mediaType': h[t(0x18b)],
                'quotedMsgId': '',
                'timestamp': new Date()[s(0x175)](),
                'status': h[s(0x17b)]
            };
        await f[s(0x176)]({
            'lastMessage': d[s(0x17c)][t(0x182)],
            'lastMessageAt': new Date()[s(0x175)](),
            'answered': h[t(0x17e)](e, ![])
        });
        const j = {};
        j[t(0x186) + 'a'] = i, j[t(0x173)] = f[s(0x173)], await (0x219f + -0x1ceb * 0x1 + -0x4b4, CreateMessageService_1[s(0x172)])(j);
    };
exports[p(0x172)] = VerifyMessage;