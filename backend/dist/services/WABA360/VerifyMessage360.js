'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x731 + 0x1124 + -0x1687);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        'read',
        'value',
        'fromMe',
        '110712nrTXpe',
        'default',
        '../Message',
        'messageDat',
        '6jIBRVZ',
        'body',
        '3735IUzlim',
        'nIHvD',
        '352yaWUwq',
        'erty',
        'type',
        'text',
        'defineProp',
        'geService',
        'received',
        'ticketId',
        'mediaType',
        'update',
        '404306FsTHOX',
        'contactId',
        '__importDe',
        'Services/C',
        '10gPDoaj',
        '362437writvT',
        '9VBGrGS',
        'messageId',
        'reateMessa',
        '689328qLKIap',
        '__esModule',
        'getTime',
        'fault',
        '2400352uByIuc',
        '171170ZjiMdo',
        'tenantId',
        'status',
        'timestamp',
        '278KDvTlh'
    ];
    a = function () {
        return v;
    };
    return a();
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x1d0)) / (0x172f + -0x6 * -0xb2 + -0x3 * 0x91e) + -parseInt(o(0x1dd)) / (0xf3b + -0x1 * 0x780 + -0x7b9) * (-parseInt(o(0x1e7)) / (0x1 * 0x115d + -0x19c9 + -0x11 * -0x7f)) + parseInt(p(0x1d4)) / (0x1 * -0x127d + -0x1f74 + 0x31f5 * 0x1) * (parseInt(o(0x1cf)) / (-0x1a9c + 0x449 * -0x5 + 0x300e)) + -parseInt(o(0x1e5)) / (-0x1fe7 * -0x1 + 0x19d * 0xb + 0x10 * -0x31a) * (-parseInt(o(0x1f3)) / (-0x1 * 0x199 + 0x195a + 0x1 * -0x17ba)) + parseInt(o(0x1d8)) / (0x1559 * -0x1 + -0x6d9 + 0x1c3a) + parseInt(p(0x1d1)) / (0x164b + -0x1 * -0xcc2 + -0x53 * 0x6c) * (-parseInt(p(0x1d9)) / (0x9 * 0x225 + -0x69f + -0xca4)) + parseInt(o(0x1e9)) / (-0x1dd3 + -0x21a7 * 0x1 + 0x3f85) * (-parseInt(p(0x1e1)) / (-0x7f9 * -0x1 + -0x4c * -0x1f + -0x1121));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x436b9 * 0x1 + 0x3d5a4 + -0x1b89a * -0x2));
var __importDefault = this && this[q(0x1f5) + q(0x1d7)] || function (c) {
    const s = r;
    return c && c[s(0x1d5)] ? c : { 'default': c };
};
const k = {};
k[q(0x1df)] = !![], Object[r(0x1ed) + r(0x1ea)](exports, r(0x1d5), k);
const CreateMessageService_1 = __importDefault(require(r(0x1e3) + r(0x1ce) + q(0x1d3) + q(0x1ee))), VerifyMessage360 = async (f, g, h) => {
        const t = q, u = r, i = {};
        i[t(0x1e8)] = u(0x1ef);
        const j = i, l = {};
        l[t(0x1d2)] = f['id'] || '', l[u(0x1f0)] = g['id'], l[u(0x1f4)] = f[u(0x1e0)] ? undefined : h['id'], l[u(0x1e6)] = f[u(0x1ec)]?.[t(0x1e6)] || '', l[t(0x1e0)] = f[t(0x1e0)], l[t(0x1f1)] = f[u(0x1eb)], l[t(0x1de)] = f[u(0x1e0)], l[u(0x1dc)] = +f[t(0x1dc)], l[t(0x1db)] = j[t(0x1e8)];
        const m = l;
        await g[u(0x1f2)]({
            'lastMessage': m[u(0x1e6)],
            'lastMessageAt': new Date()[u(0x1d6)](),
            'answered': f[t(0x1e0)] || ![]
        });
        const n = {};
        n[u(0x1e4) + 'a'] = m, n[t(0x1da)] = g[t(0x1da)], await (-0x12a6 * 0x2 + 0x23 * 0x4b + 0xa1 * 0x2b, CreateMessageService_1[t(0x1e2)])(n);
    };
exports[r(0x1e2)] = VerifyMessage360;