'use strict';
function a() {
    const w = [
        'userIdRequ',
        'value',
        'erty',
        'est',
        '__esModule',
        'toString',
        '__importDe',
        's/TicketSe',
        'ticketId',
        '7QJLrye',
        'rvices/Upd',
        '306956vfISCx',
        'ticketData',
        '../service',
        'ateTicketS',
        'fault',
        '20CAfmjI',
        'forEach',
        'defineProp',
        '7833704zEZnQx',
        'tenantId',
        'kXwGp',
        '1091982MaShHf',
        '312PfvvZi',
        'ervice',
        'status',
        '1113343RrcTba',
        '1377261tobihm',
        '43602WjiBAT',
        'default',
        '47163710QTBBAR',
        'pending'
    ];
    a = function () {
        return w;
    };
    return a();
}
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x194)) / (0x268c * 0x1 + -0x2 * 0x2b9 + -0x1 * 0x2119) + -parseInt(n(0x1a5)) / (-0x3a3 * -0x3 + 0x1d * -0xd5 + 0x1 * 0xd3a) + parseInt(n(0x196)) / (0x1d * -0x1d + 0x67a * -0x4 + 0x1d34) * (-parseInt(o(0x191)) / (-0x129a + -0x15a * 0x4 + -0xcd * -0x1e)) + parseInt(o(0x1aa)) / (0x142 + -0x1b * 0x9f + 0xf88) * (-parseInt(o(0x190)) / (-0x1a1a * -0x1 + -0x803 * -0x4 + 0x2e8 * -0x14)) + parseInt(n(0x1a3)) / (-0xd3f * -0x1 + -0xfbb * -0x1 + -0x1cf3) * (-parseInt(o(0x18d)) / (0x1dc5 + -0x1 * 0xd87 + -0x19f * 0xa)) + parseInt(n(0x195)) / (0x1bdb + -0x1e5 * -0xd + -0x3473) + parseInt(n(0x198)) / (-0x23bc + -0x930 + 0x2 * 0x167b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xdcfc1 + 0xb8530 + -0xdb573 * 0x1));
var __importDefault = this && this[p(0x1a0) + p(0x1a9)] || function (c) {
    const r = p;
    return c && c[r(0x19e)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x27 * -0x5 + 0x1069 * -0x1 + 0x3 * 0x63d);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[p(0x19b)] = !![], Object[p(0x18c) + p(0x19c)](exports, p(0x19e), k);
const UpdateTicketService_1 = __importDefault(require(p(0x1a7) + p(0x1a1) + q(0x1a4) + p(0x1a8) + q(0x192))), UpdateDeletedUserOpenTicketsStatus = async (d, e, f) => {
        const s = q, t = q, g = {};
        g[s(0x18f)] = t(0x199);
        const h = g;
        d[t(0x18b)](async i => {
            const u = t, v = t, j = i['id'][u(0x19f)](), l = {};
            l[u(0x193)] = h[u(0x18f)], l[v(0x18e)] = e;
            const m = {};
            m[u(0x1a6)] = l, m[u(0x1a2)] = j, m[v(0x19a) + v(0x19d)] = f, await (-0x626 * -0x2 + -0x36 * 0x95 + 0x1322, UpdateTicketService_1[v(0x197)])(m);
        });
    };
exports[p(0x197)] = UpdateDeletedUserOpenTicketsStatus;