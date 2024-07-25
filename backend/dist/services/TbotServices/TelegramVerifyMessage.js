'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0xad)) / (0x3 * 0x1f5 + -0x182c + 0x124e) + -parseInt(q(0x9a)) / (-0x1689 + 0x47c + 0x120f) + parseInt(r(0xa1)) / (-0x3c + -0x1383 + 0x13c2) + parseInt(q(0xb2)) / (0x852 + -0x89e * -0x1 + -0x1 * 0x10ec) * (-parseInt(r(0xa4)) / (0x2 * -0x6f7 + -0x1 * 0xbdf + 0x19d2)) + -parseInt(r(0xa0)) / (-0x23c + -0x1 * 0x1e2b + 0x206d) * (-parseInt(q(0xb0)) / (-0x1cfd + 0x1e4e * 0x1 + -0x14a)) + -parseInt(q(0x8d)) / (-0x1437 + 0x187 * 0x1 + 0x12b8) * (parseInt(q(0x8a)) / (-0x23ef + 0x45 * 0x35 + 0x15af)) + -parseInt(q(0x9f)) / (-0x295 * 0x1 + 0x1967 * -0x1 + 0x1c06) * (-parseInt(r(0x97)) / (0x65 * -0x23 + 0x113e + -0x364));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5a8 * -0xd6 + -0x5 * 0x244b + 0x88ef4 * 0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4 * -0x4cf + -0xe99 * -0x1 + 0x1 * 0x52c);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0xa6) + t(0x96)] || function (c) {
    const u = s;
    return c && c[u(0x9b)] ? c : { 'default': c };
};
const k = {};
k[t(0xb3)] = !![], Object[s(0x9d) + t(0xac)](exports, t(0x9b), k);
function a() {
    const x = [
        '532060HrEecv',
        '__esModule',
        'IWwkP',
        'defineProp',
        'received',
        '10TeEvhc',
        '156OVUEQF',
        '539811BDrspV',
        'ageId',
        'reply_to_m',
        '255LoFrvs',
        'rrLxK',
        '__importDe',
        'update',
        'tenantId',
        'messageDat',
        'Services/C',
        'default',
        'erty',
        '206492gGXaWj',
        'reateMessa',
        '../../help',
        '94934xtbpVe',
        'chat',
        '6708mUoEuj',
        'value',
        'sage',
        'xDKRZ',
        'getTime',
        'edited_mes',
        '9SfSDZh',
        'essage',
        'xUFIW',
        '2130792SuqWYK',
        'mugbd',
        'ers/getQuo',
        'tedForMess',
        'date',
        'message',
        '../Message',
        'text',
        'message_id',
        'fault',
        '5460466LVbzTW',
        'geService',
        'olJGC'
    ];
    a = function () {
        return x;
    };
    return a();
}
const getQuotedForMessageId_1 = __importDefault(require(t(0xaf) + s(0x8f) + t(0x90) + s(0xa2))), CreateMessageService_1 = __importDefault(require(s(0x93) + s(0xaa) + s(0xae) + s(0x98))), VerifyMessage = async (d, e, f, g) => {
        const v = s, w = s, h = {
                'mugbd': function (o, p) {
                    return o && p;
                },
                'IWwkP': function (o, p) {
                    return o(p);
                },
                'rrLxK': v(0xb1),
                'xDKRZ': function (o, p) {
                    return o * p;
                },
                'xUFIW': w(0x9e),
                'olJGC': function (o, p) {
                    return o || p;
                }
            };
        let i, j = {};
        i = d?.[v(0x92)], j = d?.[w(0xa7)];
        h[v(0x8e)](!i, j) && (i = j?.[w(0x89) + w(0xb4)]);
        let l;
        if (i?.[w(0xa3) + w(0x8b)]?.[v(0x95)]) {
            const o = await (0x1a3b + 0x1bf * 0x7 + -0x2674, getQuotedForMessageId_1[v(0xab)])(i[w(0xa3) + v(0x8b)][w(0x95)], f[v(0xa8)]);
            l = o?.['id'] || undefined;
        }
        const m = {
            'messageId': h[w(0x9c)](String, i?.[w(0x95)]),
            'ticketId': f['id'],
            'contactId': e ? undefined : g['id'],
            'body': i[w(0x94)],
            'fromMe': e,
            'read': e,
            'mediaType': h[w(0xa5)],
            'quotedMsgId': l,
            'timestamp': h[v(0xb5)](+i[v(0x91)], 0x2 * 0x665 + 0x1bb6 + 0x1 * -0x2498),
            'status': h[v(0x8c)]
        };
        await f[w(0xa7)]({
            'lastMessage': i[w(0x94)],
            'lastMessageAt': new Date()[v(0xb6)](),
            'answered': h[v(0x99)](e, ![])
        });
        const n = {};
        n[w(0xa9) + 'a'] = m, n[w(0xa8)] = f[v(0xa8)], await (-0x1c6e + 0x529 + 0x353 * 0x7, CreateMessageService_1[v(0xab)])(n);
    };
exports[s(0xab)] = VerifyMessage;