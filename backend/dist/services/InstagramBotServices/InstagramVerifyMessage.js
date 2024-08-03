'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x1ae)) / (0x12 * 0x85 + 0x1 * 0x11fb + 0x9f * -0x2c) * (parseInt(o(0x1b3)) / (0x1f7b * 0x1 + 0x249f + -0x4418)) + parseInt(o(0x1ac)) / (-0x12e5 + 0x12dd + 0xb) * (-parseInt(o(0x198)) / (-0x19 * -0x54 + -0x1e86 + 0x3 * 0x772)) + -parseInt(n(0x1b0)) / (-0x996 + 0x1958 + -0xfbd) + parseInt(o(0x19b)) / (-0x1d40 + 0x1a41 + 0x1 * 0x305) * (parseInt(n(0x1a8)) / (-0x9c5 + 0x1543 + -0x24b * 0x5)) + -parseInt(n(0x1a1)) / (-0x3 * -0xaa9 + 0x2633 + -0x4626) + parseInt(n(0x1ba)) / (0x1d * -0x139 + 0x22f4 + 0x8a) + parseInt(o(0x1b1)) / (0x34 * 0x6b + 0x14fb + -0x2aad) * (parseInt(o(0x1b8)) / (0x50a * -0x5 + -0x6 * -0x3b9 + 0x2e7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7565b + 0x17bf * 0x29 + -0x764eb));
function a() {
    const u = [
        'geService',
        '386602zIeSzg',
        'update',
        'item_id',
        'qwDhj',
        'defineProp',
        '11NPuJkM',
        'fault',
        '3145707wYLOQT',
        '40kQMoKR',
        'reateMessa',
        'value',
        '19002UqZhjR',
        'umHXQ',
        'message',
        'getTime',
        'tenantId',
        'EXRBl',
        '2009736jsRKKe',
        'Services/C',
        'MjCrr',
        '__importDe',
        'received',
        '__esModule',
        '../Message',
        '679woqfII',
        'text',
        'erty',
        'chat',
        '101844iVvYXY',
        'default',
        '2zJexAX',
        'messageDat',
        '1692050NZkGdd',
        '1312940euzXJd'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[p(0x1a4) + q(0x1b9)] || function (c) {
    const r = p;
    return c && c[r(0x1a6)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2119 + -0x36 + 0x6fb * 0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[p(0x19a)] = !![], Object[q(0x1b7) + q(0x1aa)](exports, q(0x1a6), k);
const CreateMessageService_1 = __importDefault(require(p(0x1a7) + p(0x1a2) + p(0x199) + p(0x1b2))), VerifyMessage = async (d, e, f, g) => {
        const s = p, t = p, h = {
                'EXRBl': function (l, m) {
                    return l(m);
                },
                'MjCrr': s(0x1ab),
                'umHXQ': t(0x1a5),
                'qwDhj': function (l, m) {
                    return l || m;
                }
            }, i = {
                'messageId': h[t(0x1a0)](String, d[s(0x19d)][t(0x1b5)]),
                'ticketId': f['id'],
                'contactId': e ? undefined : g['id'],
                'body': d[t(0x19d)][t(0x1a9)],
                'fromMe': e,
                'read': e,
                'mediaType': h[t(0x1a3)],
                'quotedMsgId': '',
                'timestamp': new Date()[t(0x19e)](),
                'status': h[t(0x19c)]
            };
        await f[t(0x1b4)]({
            'lastMessage': d[s(0x19d)][t(0x1a9)],
            'lastMessageAt': new Date()[s(0x19e)](),
            'answered': h[s(0x1b6)](e, ![])
        });
        const j = {};
        j[t(0x1af) + 'a'] = i, j[t(0x19f)] = f[s(0x19f)], await (-0x1543 + 0x1330 + -0x3 * -0xb1, CreateMessageService_1[s(0x1ad)])(j);
    };
exports[p(0x1ad)] = VerifyMessage;