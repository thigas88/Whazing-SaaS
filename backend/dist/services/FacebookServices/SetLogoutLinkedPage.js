'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x239a + -0x25aa + 0x2d7 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0xdc)) / (0x28 + -0x1bdb + 0x1bb4) * (parseInt(v(0xd6)) / (0x468 + -0x167e + 0x1218)) + -parseInt(u(0xd3)) / (0x34c + -0xffd + 0xc * 0x10f) * (-parseInt(v(0xe7)) / (0x12cc + -0xf52 + -0x376)) + -parseInt(u(0xdb)) / (-0x92f + 0x20ad + -0x1779) + parseInt(v(0xd9)) / (0x147e + -0x487 + -0xff1) * (-parseInt(u(0xe4)) / (-0x16a + -0x1cc8 + 0x1e39)) + parseInt(u(0xea)) / (0x2191 + -0x57a * 0x2 + -0x1695) + parseInt(u(0xc7)) / (0x1da3 + 0x1321 * 0x2 + 0x2b * -0x194) + -parseInt(u(0xd5)) / (-0x266e + 0xbca + -0x1 * -0x1aae);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7336e * -0x1 + 0x4c90f * -0x1 + 0x3 * 0x1e6ce));
var __importDefault = this && this[w(0xc9) + w(0xcd)] || function (c) {
    const y = x;
    return c && c[y(0xce)] ? c : { 'default': c };
};
function a() {
    const B = [
        'fbObject',
        '476778FstIPN',
        'emit',
        '2354710IiPhuc',
        '19CxJbaO',
        'action',
        'fbPageId',
        '/socket',
        'where',
        'tokenAPI',
        '../../mode',
        'value',
        '77droAvM',
        ':whatsappS',
        'ls/Whatsap',
        '828740IXgKVK',
        'fyLpo',
        'tenantId',
        '4962000EVtsZu',
        'update',
        '4798962tPLiEe',
        'session',
        '__importDe',
        'VcjtO',
        'defineProp',
        'erty',
        'fault',
        '__esModule',
        '../../libs',
        'status',
        'default',
        'getIO',
        '15YkZGcm',
        'DISCONNECT',
        '4703260QhSYgu',
        '16646OQTYoB',
        'ession'
    ];
    a = function () {
        return B;
    };
    return a();
}
const q = {};
q[x(0xe3)] = !![], Object[x(0xcb) + w(0xcc)](exports, w(0xce), q);
const socket_1 = require(w(0xcf) + w(0xdf)), Whatsapp_1 = __importDefault(require(w(0xe2) + x(0xe6) + 'p')), SetLogoutLinkedPage = async ({
        whatsapp: i,
        tenantId: j
    }) => {
        const z = x, A = x, k = {};
        k[z(0xca)] = z(0xd4) + 'ED', k[z(0xe8)] = A(0xeb);
        const l = k, m = (-0x9f7 + 0xa32 + 0x1 * -0x3b, socket_1[z(0xd2)])(), n = {};
        n[z(0xde)] = null, n[A(0xd8)] = {}, n[A(0xe1)] = null, n[A(0xd0)] = l[z(0xca)];
        const o = n, p = {};
        p['id'] = i['id'], p[A(0xe9)] = j;
        const r = {};
        r[A(0xe0)] = p, Whatsapp_1[z(0xd1)][z(0xeb)](o, r);
        const s = {
                ...i,
                ...o
            }, t = {};
        t[z(0xdd)] = l[A(0xe8)], t[z(0xc8)] = s, m[A(0xda)](j + (z(0xe5) + z(0xd7)), t);
    };
exports[x(0xd1)] = SetLogoutLinkedPage;