'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0xa6)) / (0x97b * 0x3 + 0x214e + -0x3dbe) + parseInt(o(0xb7)) / (-0x1 * 0xecb + -0xb93 * 0x1 + -0x1a60 * -0x1) * (parseInt(n(0xa7)) / (-0xfc * -0x5 + -0x657 * 0x3 + -0x387 * -0x4)) + -parseInt(n(0xb3)) / (-0x2031 + -0x1496 + -0x3 * -0x1199) + parseInt(o(0xb0)) / (-0x1258 + 0x1b1e + -0x8c1) + -parseInt(n(0xba)) / (0x1 * -0xee6 + -0x1 * -0x44b + 0x3 * 0x38b) * (parseInt(n(0xc0)) / (-0x21d6 + 0x2c7 + 0x1f16)) + -parseInt(n(0xb2)) / (0x2 * 0x9b + -0x2161 + 0x2033) + parseInt(n(0xab)) / (-0x1 * -0xd3f + -0x2088 + 0x1352);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7c060 + -0xb59 * -0x9 + -0x34efe));
function a() {
    const u = [
        'ACwlo',
        'CEtzX',
        '3241JzKezq',
        'messageDat',
        'geService',
        'defineProp',
        'reateMessa',
        '__importDe',
        'chat',
        '275277RLCFrS',
        '18tflKFU',
        'tenantId',
        '../Message',
        'text',
        '6351201fqYfXb',
        'zIDZs',
        '__esModule',
        'Services/C',
        'default',
        '1154725AFuUpI',
        'xplbP',
        '1661192Hczqri',
        '957680UDPdqp',
        'update',
        'message',
        'fault',
        '138826MfcQlY',
        'getTime',
        'erty',
        '4062zEPmOq',
        'item_id',
        'received',
        'value'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[p(0xa4) + p(0xb6)] || function (c) {
    const r = q;
    return c && c[r(0xad)] ? c : { 'default': c };
};
const k = {};
k[q(0xbd)] = !![], Object[q(0xc3) + p(0xb9)](exports, p(0xad), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x346 * 0x4 + -0x2243 + 0x2fff);
        let h = e[f];
        return h;
    }, b(c, d);
}
const CreateMessageService_1 = __importDefault(require(q(0xa9) + q(0xae) + q(0xc4) + p(0xc2))), VerifyMessage = async (d, e, f, g) => {
        const s = q, t = p, h = {
                'ACwlo': function (l, m) {
                    return l(m);
                },
                'zIDZs': s(0xa5),
                'CEtzX': t(0xbc),
                'xplbP': function (l, m) {
                    return l || m;
                }
            }, i = {
                'messageId': h[s(0xbe)](String, d[t(0xb5)][s(0xbb)]),
                'ticketId': f['id'],
                'contactId': e ? undefined : g['id'],
                'body': d[t(0xb5)][t(0xaa)],
                'fromMe': e,
                'read': e,
                'mediaType': h[s(0xac)],
                'quotedMsgId': '',
                'timestamp': new Date()[s(0xb8)](),
                'status': h[s(0xbf)]
            };
        await f[t(0xb4)]({
            'lastMessage': d[s(0xb5)][s(0xaa)],
            'lastMessageAt': new Date()[t(0xb8)](),
            'answered': h[s(0xb1)](e, ![])
        });
        const j = {};
        j[t(0xc1) + 'a'] = i, j[t(0xa8)] = f[s(0xa8)], await (-0x1ced + 0x1f0d * -0x1 + 0x9 * 0x6aa, CreateMessageService_1[t(0xaf)])(j);
    };
exports[p(0xaf)] = VerifyMessage;