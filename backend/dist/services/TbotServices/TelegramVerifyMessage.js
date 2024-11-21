'use strict';
function a() {
    const x = [
        '2432904XoSzCn',
        'reateMessa',
        '5599422ANWuYG',
        'message_id',
        'messageDat',
        'text',
        '__esModule',
        'value',
        'essage',
        'received',
        'tedForMess',
        'SKbrk',
        'tenantId',
        'aMeto',
        'ageId',
        '360UWZKGw',
        'getTime',
        '93SEijmG',
        'edited_mes',
        'date',
        '5130215iyxsQf',
        'fault',
        'default',
        '39604eEjnGU',
        'ers/getQuo',
        '3130IaqbdQ',
        'QtJOT',
        '../../help',
        '7KdVNrH',
        'update',
        'Services/C',
        'geService',
        'FRVmt',
        '1953760sjtNHn',
        'reply_to_m',
        'nNYEc',
        'erty',
        '__importDe',
        '../Message',
        'FIpPd',
        '2814300wBiFHz',
        'defineProp',
        'sage',
        'chat',
        'message'
    ];
    a = function () {
        return x;
    };
    return a();
}
const s = b, t = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x99 * -0x3d + -0x1fad + 0x41b * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0xd5)) / (-0x1 * 0x1909 + 0x861 * -0x1 + 0x216b) * (parseInt(r(0xb2)) / (0x5c * -0x1d + 0x1bbe + 0x10 * -0x115)) + -parseInt(q(0xd7)) / (0x21c7 * -0x1 + -0x1c * 0x10f + 0x3f6e) * (parseInt(r(0xb0)) / (0x8f3 + 0x1655 * 0x1 + -0x1f44)) + parseInt(q(0xad)) / (-0x25b + 0x31e + -0xbe) + -parseInt(r(0xc6)) / (0x316 + 0x5 * 0x1d3 + -0x1 * 0xc2f) + parseInt(r(0xb5)) / (0x1 * 0x14f3 + -0x80 + 0x1 * -0x146c) * (-parseInt(r(0xba)) / (0x41f + 0x476 + -0xb * 0xc7)) + parseInt(q(0xc8)) / (-0x5 * 0xb2 + 0xa45 + -0x361 * 0x2) + -parseInt(r(0xc1)) / (0x1 * -0x6ba + 0x248d + -0x1dc9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd094 * 0xb + -0xac93f + 0x18429 * 0xb));
var __importDefault = this && this[s(0xbe) + s(0xae)] || function (c) {
    const u = s;
    return c && c[u(0xcc)] ? c : { 'default': c };
};
const k = {};
k[s(0xcd)] = !![], Object[s(0xc2) + t(0xbd)](exports, t(0xcc), k);
const getQuotedForMessageId_1 = __importDefault(require(t(0xb4) + s(0xb1) + s(0xd0) + t(0xd4))), CreateMessageService_1 = __importDefault(require(s(0xbf) + t(0xb7) + s(0xc7) + s(0xb8))), VerifyMessage = async (d, e, f, g) => {
        const v = t, w = t, h = {
                'QtJOT': function (o, p) {
                    return o && p;
                },
                'nNYEc': function (o, p) {
                    return o(p);
                },
                'FIpPd': v(0xc4),
                'SKbrk': function (o, p) {
                    return o * p;
                },
                'aMeto': w(0xcf),
                'FRVmt': function (o, p) {
                    return o || p;
                }
            };
        let i, j = {};
        i = d?.[v(0xc5)], j = d?.[v(0xb6)];
        h[w(0xb3)](!i, j) && (i = j?.[w(0xd8) + w(0xc3)]);
        let l;
        if (i?.[v(0xbb) + w(0xce)]?.[w(0xc9)]) {
            const o = await (-0x2 * 0x8bf + -0x2 * -0xb7e + -0x2 * 0x2bf, getQuotedForMessageId_1[v(0xaf)])(i[w(0xbb) + w(0xce)][w(0xc9)], f[v(0xd2)]);
            l = o?.['id'] || undefined;
        }
        const m = {
            'messageId': h[w(0xbc)](String, i?.[v(0xc9)]),
            'ticketId': f['id'],
            'contactId': e ? undefined : g['id'],
            'body': i[w(0xcb)],
            'fromMe': e,
            'read': e,
            'mediaType': h[v(0xc0)],
            'quotedMsgId': l,
            'timestamp': h[w(0xd1)](+i[v(0xd9)], -0x401 * 0x9 + -0x2ea + 0x2adb * 0x1),
            'status': h[w(0xd3)]
        };
        await f[w(0xb6)]({
            'lastMessage': i[v(0xcb)],
            'lastMessageAt': new Date()[w(0xd6)](),
            'answered': h[w(0xb9)](e, ![])
        });
        const n = {};
        n[w(0xca) + 'a'] = m, n[w(0xd2)] = f[v(0xd2)], await (-0x164 * 0x10 + 0xb4a + -0xaf6 * -0x1, CreateMessageService_1[v(0xaf)])(n);
    };
exports[t(0xaf)] = VerifyMessage;