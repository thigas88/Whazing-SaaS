'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x1d4)) / (-0x1d50 + -0xc89 + 0x1 * 0x29da) * (parseInt(p(0x1d8)) / (-0x6a * -0xb + -0x191e + 0x1492)) + parseInt(p(0x1d5)) / (-0x26e4 * 0x1 + -0x1370 + 0x3a57) * (parseInt(o(0x1ba)) / (0x1 * -0xed + 0xc4d * -0x2 + 0x198b)) + parseInt(o(0x1d1)) / (-0x2065 * 0x1 + -0x2043 + 0x40ad) + parseInt(p(0x1c3)) / (-0x9a1 + -0xf6f + 0x1916) + parseInt(o(0x1b5)) / (0x2 * -0x43f + 0x43 * 0x7e + -0x1 * 0x1875) * (parseInt(o(0x1d9)) / (0x1d58 + -0x9f * -0x12 + -0x287e)) + -parseInt(o(0x1c5)) / (0x19 * 0xb9 + -0x15 * -0xbb + -0x215f) * (parseInt(p(0x1bb)) / (-0x16d2 + -0x1f * 0xdf + 0x31dd)) + parseInt(o(0x1b3)) / (-0x19ac + 0x2 * 0xc8c + -0x35 * -0x3) * (-parseInt(o(0x1cb)) / (-0x91f + 0x3 * -0x6ef + 0x1df8));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x19306 + -0x52eb * 0x7 + 0x2d3a7));
function a() {
    const v = [
        'received',
        'read',
        '845870ClPDGI',
        'value',
        'Services/C',
        '1342RoIVUY',
        '836316esRkLa',
        '__esModule',
        'mediaType',
        '238PIEMAW',
        '1384216eODwZj',
        'ticketId',
        '33nqNLGn',
        'messageDat',
        '7FTYZms',
        'kmefO',
        'tenantId',
        '../Message',
        'messageId',
        '4ZHdKuV',
        '2493670gzipiG',
        'fault',
        '__importDe',
        'type',
        'defineProp',
        'reateMessa',
        'status',
        'default',
        '1074114pNnajx',
        'getTime',
        '9wJVdhK',
        'erty',
        'body',
        'contactId',
        'geService',
        'update',
        '2281932gFtiiP',
        'timestamp',
        'fromMe',
        'text'
    ];
    a = function () {
        return v;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x21 * -0x85 + 0xd * 0x27 + -0x34 * -0x53);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0x1bd) + r(0x1bc)] || function (c) {
    const s = q;
    return c && c[s(0x1d6)] ? c : { 'default': c };
};
const k = {};
k[q(0x1d2)] = !![], Object[q(0x1bf) + r(0x1c6)](exports, q(0x1d6), k);
const CreateMessageService_1 = __importDefault(require(q(0x1b8) + q(0x1d3) + q(0x1c0) + r(0x1c9))), VerifyMessage360 = async (f, g, h) => {
        const t = q, u = r, i = {};
        i[t(0x1b6)] = t(0x1cf);
        const j = i, l = {};
        l[t(0x1b9)] = f['id'] || '', l[t(0x1b2)] = g['id'], l[u(0x1c8)] = f[u(0x1cd)] ? undefined : h['id'], l[u(0x1c7)] = f[u(0x1ce)]?.[u(0x1c7)] || '', l[t(0x1cd)] = f[u(0x1cd)], l[u(0x1d7)] = f[u(0x1be)], l[u(0x1d0)] = f[t(0x1cd)], l[u(0x1cc)] = +f[t(0x1cc)], l[t(0x1c1)] = j[t(0x1b6)];
        const m = l;
        await g[t(0x1ca)]({
            'lastMessage': m[u(0x1c7)],
            'lastMessageAt': new Date()[u(0x1c4)](),
            'answered': f[u(0x1cd)] || ![]
        });
        const n = {};
        n[t(0x1b4) + 'a'] = m, n[u(0x1b7)] = g[u(0x1b7)], await (-0x19a8 + 0x5 * 0x452 + -0x3 * -0x15a, CreateMessageService_1[u(0x1c2)])(n);
    };
exports[q(0x1c2)] = VerifyMessage360;