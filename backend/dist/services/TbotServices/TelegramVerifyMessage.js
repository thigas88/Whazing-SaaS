'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x92)) / (-0x1244 + -0x8f * -0x1a + -0x3bf * -0x1) + parseInt(r(0x99)) / (0x66c * 0x5 + -0x7c1 + -0x1859) + -parseInt(q(0x9a)) / (-0x9f7 * -0x1 + -0x1969 + 0xf75) + -parseInt(q(0x8c)) / (0x1813 + -0x1601 * 0x1 + -0x20e) + -parseInt(q(0x97)) / (0x1 * 0x2af + 0x1 * -0x268c + 0x1 * 0x23e2) * (parseInt(r(0x91)) / (-0x1 * 0x10f5 + -0x48d * 0x7 + -0x13 * -0x292)) + parseInt(r(0xb2)) / (-0x6c3 + -0x41 * 0x4d + 0x1a57) + parseInt(q(0x8f)) / (0x120d * 0x1 + 0x1 * 0x2069 + -0x326e) * (parseInt(q(0x9f)) / (0x49f + 0x9b2 + 0xe48 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x114d8 * 0x2 + 0x6b * -0x39b + 0xdec3));
var __importDefault = this && this[s(0x9d) + t(0x93)] || function (c) {
    const u = t;
    return c && c[u(0x9b)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x286 * -0xb + 0xb7 + -0x113 * 0x1a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[s(0x9e)] = !![], Object[t(0xb1) + t(0x96)](exports, t(0x9b), k);
function a() {
    const x = [
        'date',
        '461172vZzjeM',
        'OmZbp',
        'message_id',
        '29312lhsoPZ',
        'essage',
        '12vOfErh',
        '84873YeMeAL',
        'fault',
        '../Message',
        'sage',
        'erty',
        '109340XOWIIw',
        'Services/C',
        '117038bxvafA',
        '131568btBJcC',
        '__esModule',
        'reply_to_m',
        '__importDe',
        'value',
        '261THmnsC',
        'edited_mes',
        'update',
        'default',
        'reateMessa',
        'lKVEc',
        'message',
        'chat',
        'received',
        'wSGJG',
        'getTime',
        'messageDat',
        'sFRMF',
        'ageId',
        'geService',
        'jnNIS',
        'hGVVH',
        '../../help',
        'defineProp',
        '372729VLinbe',
        'text',
        'tenantId',
        'ers/getQuo',
        'tedForMess'
    ];
    a = function () {
        return x;
    };
    return a();
}
const getQuotedForMessageId_1 = __importDefault(require(s(0xb0) + s(0xb5) + s(0xb6) + s(0xac))), CreateMessageService_1 = __importDefault(require(t(0x94) + t(0x98) + t(0xa3) + t(0xad))), VerifyMessage = async (d, e, f, g) => {
        const v = s, w = t, h = {
                'jnNIS': function (o, p) {
                    return o && p;
                },
                'wSGJG': function (o, p) {
                    return o(p);
                },
                'sFRMF': v(0xa6),
                'OmZbp': function (o, p) {
                    return o * p;
                },
                'hGVVH': w(0xa7),
                'lKVEc': function (o, p) {
                    return o || p;
                }
            };
        let i, j = {};
        i = d?.[w(0xa5)], j = d?.[w(0xa1)];
        h[w(0xae)](!i, j) && (i = j?.[w(0xa0) + v(0x95)]);
        let l;
        if (i?.[v(0x9c) + v(0x90)]?.[v(0x8e)]) {
            const o = await (0x2538 + -0x1 * 0x14cb + -0x106d, getQuotedForMessageId_1[w(0xa2)])(i[v(0x9c) + w(0x90)][w(0x8e)], f[w(0xb4)]);
            l = o?.['id'] || undefined;
        }
        const m = {
            'messageId': h[w(0xa8)](String, i?.[w(0x8e)]),
            'ticketId': f['id'],
            'contactId': e ? undefined : g['id'],
            'body': i[v(0xb3)],
            'fromMe': e,
            'read': e,
            'mediaType': h[w(0xab)],
            'quotedMsgId': l,
            'timestamp': h[v(0x8d)](+i[v(0x8b)], 0x1111 * 0x1 + 0x1 * -0xd8 + 0x41b * -0x3),
            'status': h[w(0xaf)]
        };
        await f[v(0xa1)]({
            'lastMessage': i[w(0xb3)],
            'lastMessageAt': new Date()[w(0xa9)](),
            'answered': h[w(0xa4)](e, ![])
        });
        const n = {};
        n[v(0xaa) + 'a'] = m, n[w(0xb4)] = f[v(0xb4)], await (-0x22a * -0x3 + -0x7ef + -0x29 * -0x9, CreateMessageService_1[w(0xa2)])(n);
    };
exports[s(0xa2)] = VerifyMessage;