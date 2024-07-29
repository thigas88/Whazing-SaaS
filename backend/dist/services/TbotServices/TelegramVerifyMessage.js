'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0xc4)) / (0x1ab6 + -0x16b0 + 0x3 * -0x157) * (-parseInt(q(0xd4)) / (0x3 * -0x41b + -0x119b * -0x1 + -0x548)) + -parseInt(r(0xc8)) / (0x1183 * -0x1 + 0x1ffc + -0x269 * 0x6) + -parseInt(r(0xda)) / (-0xd98 + -0x1 * -0x145c + 0x360 * -0x2) + -parseInt(q(0xd8)) / (0x1 * -0x129a + -0x1493 * 0x1 + 0x2732) * (parseInt(r(0xd5)) / (0xdb4 + 0xd40 + -0x8fa * 0x3)) + -parseInt(q(0xb8)) / (-0x1ec5 + 0x152c + 0x9a0) * (parseInt(r(0xdd)) / (0x1d26 + 0x1571 + -0x328f)) + -parseInt(q(0xc9)) / (-0xd5 * -0x26 + -0x1 * 0x110b + -0xe8a) * (-parseInt(q(0xbe)) / (0x14b * 0x11 + -0x2612 + 0x1 * 0x1021)) + -parseInt(q(0xcb)) / (-0x1e4e + 0x5 * -0x13b + 0x2480) * (-parseInt(q(0xb3)) / (0x1 * -0x1442 + 0x258e + -0x1140));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x77235 + 0xa84dd + -0x5f * 0xcb5));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xbd + -0x3ef * -0x1 + -0x281 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0xd1) + t(0xd2)] || function (c) {
    const u = t;
    return c && c[u(0xbb)] ? c : { 'default': c };
};
const k = {};
function a() {
    const x = [
        '21555AnokbG',
        'getTime',
        '4632991GbhWCc',
        'reply_to_m',
        'value',
        'ipIYS',
        'messageDat',
        'default',
        '__importDe',
        'fault',
        'sage',
        '72042luuChL',
        '6949938qPbUJF',
        'ageId',
        'text',
        '5ZLPSvM',
        'tedForMess',
        '1259692DGgBUB',
        'message',
        'chat',
        '8ckOjeW',
        'qbRKa',
        'RBShZ',
        'tenantId',
        'Services/C',
        '132cfYKkR',
        'ncmCj',
        '../../help',
        'erty',
        '../Message',
        '11376491taZRka',
        'ers/getQuo',
        'TMIft',
        '__esModule',
        'defineProp',
        'JzofR',
        '1230oVbkuO',
        'edited_mes',
        'geService',
        'update',
        'reateMessa',
        'received',
        '9kPOwqb',
        'message_id',
        'date',
        'essage',
        '3854937SwCLSh'
    ];
    a = function () {
        return x;
    };
    return a();
}
k[s(0xcd)] = !![], Object[t(0xbc) + s(0xb6)](exports, t(0xbb), k);
const getQuotedForMessageId_1 = __importDefault(require(s(0xb5) + t(0xb9) + s(0xd9) + s(0xd6))), CreateMessageService_1 = __importDefault(require(t(0xb7) + t(0xb2) + t(0xc2) + t(0xc0))), VerifyMessage = async (d, e, f, g) => {
        const v = s, w = s, h = {
                'ipIYS': function (o, p) {
                    return o && p;
                },
                'JzofR': function (o, p) {
                    return o(p);
                },
                'RBShZ': v(0xdc),
                'TMIft': function (o, p) {
                    return o * p;
                },
                'ncmCj': w(0xc3),
                'qbRKa': function (o, p) {
                    return o || p;
                }
            };
        let i, j = {};
        i = d?.[w(0xdb)], j = d?.[v(0xc1)];
        h[w(0xce)](!i, j) && (i = j?.[w(0xbf) + w(0xd3)]);
        let l;
        if (i?.[w(0xcc) + v(0xc7)]?.[v(0xc5)]) {
            const o = await (0x1 * -0x19c1 + 0x1 * 0x514 + 0x1 * 0x14ad, getQuotedForMessageId_1[v(0xd0)])(i[v(0xcc) + w(0xc7)][v(0xc5)], f[w(0xb1)]);
            l = o?.['id'] || undefined;
        }
        const m = {
            'messageId': h[w(0xbd)](String, i?.[w(0xc5)]),
            'ticketId': f['id'],
            'contactId': e ? undefined : g['id'],
            'body': i[v(0xd7)],
            'fromMe': e,
            'read': e,
            'mediaType': h[w(0xdf)],
            'quotedMsgId': l,
            'timestamp': h[v(0xba)](+i[v(0xc6)], 0x1c4e + 0x1 * -0x260b + 0xda5),
            'status': h[w(0xb4)]
        };
        await f[w(0xc1)]({
            'lastMessage': i[v(0xd7)],
            'lastMessageAt': new Date()[w(0xca)](),
            'answered': h[w(0xde)](e, ![])
        });
        const n = {};
        n[w(0xcf) + 'a'] = m, n[w(0xb1)] = f[w(0xb1)], await (0x1c * -0x2f + 0x18 * 0x35 + 0x2c, CreateMessageService_1[w(0xd0)])(n);
    };
exports[t(0xd0)] = VerifyMessage;