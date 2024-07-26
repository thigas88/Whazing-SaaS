'use strict';
function a() {
    const v = [
        'fromMe',
        '1722553jNzxgo',
        'getTime',
        'fault',
        'update',
        'messageId',
        'received',
        'IkwXv',
        '1048125apzTrM',
        'status',
        'body',
        '../Message',
        'Services/C',
        '__importDe',
        'tenantId',
        'geService',
        'value',
        'messageDat',
        'timestamp',
        'type',
        'contactId',
        'defineProp',
        'default',
        'text',
        '28514nTjkdL',
        '57096kvaLDh',
        '2139876zPjZqE',
        'erty',
        'ticketId',
        'reateMessa',
        'read',
        '29IhUwxE',
        '1709250cVBzRQ',
        '1404810RJJVmi',
        '__esModule',
        'mediaType'
    ];
    a = function () {
        return v;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd8f + 0x89 * -0x35 + 0x2b5a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x178)) / (0xf5b + 0x3b5 * 0x2 + -0xbc * 0x1f) * (-parseInt(o(0x171)) / (-0x1 * -0x47a + 0x978 + -0xdf0)) + -parseInt(o(0x185)) / (-0x1 * -0x5f9 + -0x3e7 * -0x6 + -0x1d60) + parseInt(o(0x173)) / (0xc17 * -0x1 + 0x7a0 + 0x1f * 0x25) + -parseInt(p(0x179)) / (0x1 * 0x10db + 0x1 * 0xa9f + 0x21 * -0xd5) + -parseInt(p(0x17a)) / (-0x31d * -0x1 + -0x575 * -0x7 + -0x294a) + parseInt(p(0x17e)) / (-0x1 * -0x138a + -0x9 + -0x6 * 0x33f) + parseInt(p(0x172)) / (-0x4 * 0x89c + -0x136d + -0x1ff * -0x1b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x83f * -0xc1 + 0x4797c + 0x1 * 0x5f539));
var __importDefault = this && this[q(0x18a) + r(0x180)] || function (c) {
    const s = q;
    return c && c[s(0x17b)] ? c : { 'default': c };
};
const k = {};
k[r(0x18d)] = !![], Object[q(0x16e) + q(0x174)](exports, q(0x17b), k);
const CreateMessageService_1 = __importDefault(require(q(0x188) + r(0x189) + q(0x176) + r(0x18c))), VerifyMessage360 = async (f, g, h) => {
        const t = r, u = q, i = {};
        i[t(0x184)] = t(0x183);
        const j = i, l = {};
        l[u(0x182)] = f['id'] || '', l[t(0x175)] = g['id'], l[u(0x191)] = f[t(0x17d)] ? undefined : h['id'], l[t(0x187)] = f[t(0x170)]?.[t(0x187)] || '', l[t(0x17d)] = f[t(0x17d)], l[t(0x17c)] = f[t(0x190)], l[u(0x177)] = f[t(0x17d)], l[u(0x18f)] = +f[t(0x18f)], l[u(0x186)] = j[u(0x184)];
        const m = l;
        await g[u(0x181)]({
            'lastMessage': m[t(0x187)],
            'lastMessageAt': new Date()[u(0x17f)](),
            'answered': f[t(0x17d)] || ![]
        });
        const n = {};
        n[t(0x18e) + 'a'] = m, n[t(0x18b)] = g[t(0x18b)], await (-0x2082 * -0x1 + -0x3 * 0x6e2 + -0x114 * 0xb, CreateMessageService_1[t(0x16f)])(n);
    };
exports[q(0x16f)] = VerifyMessage360;