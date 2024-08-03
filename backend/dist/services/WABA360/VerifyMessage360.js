'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x962 + -0x4 * 0x2d2 + 0x1 * 0x292);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0xcc)) / (0x5bc * 0x2 + -0x21f5 * -0x1 + -0x11 * 0x2ac) * (parseInt(p(0xbc)) / (0x2d4 + -0x1 * 0xc91 + 0x9bf)) + -parseInt(p(0xb8)) / (0x5f7 + -0x13cf + 0xddb) * (-parseInt(o(0xc5)) / (-0x90f * -0x2 + 0x2529 + -0x3743)) + parseInt(p(0xb2)) / (0xd1 * 0x1d + -0x1f9 + -0x15af) + -parseInt(o(0xad)) / (0x38 * 0x49 + 0x1505 * 0x1 + -0x1 * 0x24f7) + parseInt(p(0xba)) / (-0x213e + 0x11 * -0x61 + 0x27b6) * (parseInt(p(0xc9)) / (-0xa2 + 0x18a2 + -0x17f8)) + parseInt(p(0xc3)) / (0x63 * 0x61 + 0x104e + 0x2 * -0x1ae4) + -parseInt(o(0xbd)) / (0x2 * 0x108b + 0x239 * 0xd + -0x3df1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x75 * -0xb65 + -0x33eff + 0x47abf));
var __importDefault = this && this[q(0xc7) + r(0xbf)] || function (c) {
    const s = q;
    return c && c[s(0xac)] ? c : { 'default': c };
};
function a() {
    const v = [
        'fromMe',
        '__importDe',
        'messageId',
        '8iKkLAU',
        'reateMessa',
        'timestamp',
        '581369oYSfva',
        'getTime',
        'default',
        'erty',
        'mediaType',
        '../Message',
        '__esModule',
        '4384200DTxbiQ',
        'received',
        'value',
        'messageDat',
        'JMTps',
        '2824510MUyNif',
        'tenantId',
        'update',
        'contactId',
        'geService',
        'text',
        '1032582wgmaIr',
        'read',
        '2403527fCJDGA',
        'type',
        '2nqeGZG',
        '12068380aWqjKv',
        'Services/C',
        'fault',
        'defineProp',
        'status',
        'ticketId',
        '4732497eKgtGW',
        'body',
        '4QwYOtJ'
    ];
    a = function () {
        return v;
    };
    return a();
}
const k = {};
k[q(0xaf)] = !![], Object[q(0xc0) + r(0xcf)](exports, q(0xac), k);
const CreateMessageService_1 = __importDefault(require(r(0xd1) + q(0xbe) + q(0xca) + q(0xb6))), VerifyMessage360 = async (f, g, h) => {
        const t = q, u = q, i = {};
        i[t(0xb1)] = u(0xae);
        const j = i, l = {};
        l[t(0xc8)] = f['id'] || '', l[u(0xc2)] = g['id'], l[t(0xb5)] = f[t(0xc6)] ? undefined : h['id'], l[u(0xc4)] = f[u(0xb7)]?.[u(0xc4)] || '', l[t(0xc6)] = f[u(0xc6)], l[u(0xd0)] = f[u(0xbb)], l[u(0xb9)] = f[t(0xc6)], l[u(0xcb)] = +f[t(0xcb)], l[u(0xc1)] = j[t(0xb1)];
        const m = l;
        await g[t(0xb4)]({
            'lastMessage': m[t(0xc4)],
            'lastMessageAt': new Date()[u(0xcd)](),
            'answered': f[t(0xc6)] || ![]
        });
        const n = {};
        n[u(0xb0) + 'a'] = m, n[t(0xb3)] = g[u(0xb3)], await (0xb99 + -0x24cf + 0x1936, CreateMessageService_1[t(0xce)])(n);
    };
exports[r(0xce)] = VerifyMessage360;