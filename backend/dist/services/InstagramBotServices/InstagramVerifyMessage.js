'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x9c)) / (-0x2c * -0x20 + -0xb * 0x18d + 0xb90) * (parseInt(n(0x9e)) / (0x19f7 + 0x371 * -0xa + 0x875)) + -parseInt(o(0x97)) / (0x211b + -0x1f7f + -0x199) * (-parseInt(n(0x9b)) / (-0x13a + -0x2226 + 0x2364)) + parseInt(o(0x96)) / (0x1693 * 0x1 + -0x2593 + 0xf05) * (parseInt(n(0xb2)) / (0x1543 * 0x1 + -0x1 * 0x455 + -0x10e8)) + parseInt(o(0x95)) / (0xb5 * -0x1 + 0x1 * 0x1e0b + -0x1d4f) + -parseInt(o(0x98)) / (-0x97 * 0xb + 0xb * -0x10f + 0x122a) + parseInt(n(0xb4)) / (0x248d + -0x182a + -0xc5a) + -parseInt(o(0xa5)) / (0x53 * -0xa + 0x241 + 0x107);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * 0x13de1 + 0xb * 0x1715 + 0x5f43));
var __importDefault = this && this[p(0xac) + q(0xb0)] || function (c) {
    const r = p;
    return c && c[r(0xb3)] ? c : { 'default': c };
};
const k = {};
function a() {
    const u = [
        '144366SdPOoU',
        '__esModule',
        '2444220AczWsk',
        'received',
        'update',
        '2069963DEeydg',
        '35EAXsvI',
        '3THFfwi',
        '1816688EGIGDp',
        'text',
        'Services/C',
        '1229548fMeqpj',
        '7BSFjIp',
        'getTime',
        '53722omloeF',
        'uELGe',
        'tenantId',
        'default',
        'messageDat',
        '../Message',
        'geService',
        '3758500EQwyVG',
        'value',
        'chat',
        'uWZMV',
        'message',
        'defineProp',
        'item_id',
        '__importDe',
        'QRJxh',
        'erty',
        'reateMessa',
        'fault',
        'gfSKm'
    ];
    a = function () {
        return u;
    };
    return a();
}
k[q(0xa6)] = !![], Object[q(0xaa) + q(0xae)](exports, p(0xb3), k);
const CreateMessageService_1 = __importDefault(require(q(0xa3) + p(0x9a) + q(0xaf) + q(0xa4))), VerifyMessage = async (d, e, f, g) => {
        const s = q, t = p, h = {
                'gfSKm': function (l, m) {
                    return l(m);
                },
                'QRJxh': s(0xa7),
                'uELGe': s(0xb5),
                'uWZMV': function (l, m) {
                    return l || m;
                }
            }, i = {
                'messageId': h[s(0xb1)](String, d[t(0xa9)][s(0xab)]),
                'ticketId': f['id'],
                'contactId': e ? undefined : g['id'],
                'body': d[t(0xa9)][t(0x99)],
                'fromMe': e,
                'read': e,
                'mediaType': h[t(0xad)],
                'quotedMsgId': '',
                'timestamp': new Date()[t(0x9d)](),
                'status': h[t(0x9f)]
            };
        await f[s(0x94)]({
            'lastMessage': d[t(0xa9)][s(0x99)],
            'lastMessageAt': new Date()[s(0x9d)](),
            'answered': h[s(0xa8)](e, ![])
        });
        const j = {};
        j[s(0xa2) + 'a'] = i, j[s(0xa0)] = f[s(0xa0)], await (-0xdb7 + -0x4 * 0x95f + 0x3333, CreateMessageService_1[t(0xa1)])(j);
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0xe7b + 0xa * 0x2da + -0x2a6b);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[p(0xa1)] = VerifyMessage;