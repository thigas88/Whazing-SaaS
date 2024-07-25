'use strict';
function a() {
    const B = [
        'tokenAPI',
        '3208284UnmRRo',
        '67340cPZBGA',
        '328wthUIC',
        '317243vbJiYv',
        '/socket',
        ':whatsappS',
        'defineProp',
        '187120gZesTQ',
        'tenantId',
        'ls/Whatsap',
        '../../libs',
        '__importDe',
        'session',
        'fbPageId',
        'default',
        'cCmbs',
        'fault',
        '1015ozfTDj',
        'ession',
        'getIO',
        '235JfcVtu',
        'action',
        '187fsRtxe',
        'YlNtp',
        'where',
        'erty',
        'DISCONNECT',
        'update',
        'emit',
        '12030IhUmpk',
        '8824dWFdNp',
        '9723oltylD',
        'status',
        '../../mode',
        'value',
        '__esModule',
        'fbObject'
    ];
    a = function () {
        return B;
    };
    return a();
}
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0xa3)) / (0x603 + -0x1dae + 0x17ac) + parseInt(u(0xa1)) / (-0x1f1d + -0x507 + 0x2426) + -parseInt(v(0x99)) / (0x7 * 0x1e7 + -0x18a3 + 0xb55) * (-parseInt(u(0xa2)) / (-0x25e4 + -0x1f * 0x21 + 0x29e7)) + parseInt(u(0xb4)) / (0xb44 + 0x1 * 0x10be + -0x1bfd) * (parseInt(u(0x97)) / (0x12d * 0x13 + 0x1913 + -0x2f64)) + parseInt(v(0xb1)) / (0xcf6 + 0x21f0 + -0x2edf * 0x1) * (parseInt(v(0x98)) / (0x53a + -0x1 * -0x1cb9 + -0x21eb)) + -parseInt(u(0xa0)) / (0x1ee4 + 0xd2d + 0x8 * -0x581) + -parseInt(u(0xa7)) / (-0x1f2 * 0x11 + 0x7eb * -0x1 + 0x2907) * (-parseInt(u(0xb6)) / (0x58b * 0x2 + 0xc3d + -0x1748));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x652d * -0x7 + -0x1d951 * -0x3 + -0x22bd * 0x27));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x124a + 0xf65 + -0x211c);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[w(0xab) + x(0xb0)] || function (c) {
    const y = x;
    return c && c[y(0x9d)] ? c : { 'default': c };
};
const q = {};
q[w(0x9c)] = !![], Object[w(0xa6) + w(0x93)](exports, w(0x9d), q);
const socket_1 = require(x(0xaa) + x(0xa4)), Whatsapp_1 = __importDefault(require(w(0x9b) + w(0xa9) + 'p')), SetLogoutLinkedPage = async ({
        whatsapp: i,
        tenantId: j
    }) => {
        const z = w, A = x, k = {};
        k[z(0xaf)] = A(0x94) + 'ED', k[A(0xb7)] = A(0x95);
        const l = k, m = (0x26a + -0x162b * 0x1 + 0x13c1, socket_1[A(0xb3)])(), n = {};
        n[A(0xad)] = null, n[z(0x9e)] = {}, n[A(0x9f)] = null, n[A(0x9a)] = l[A(0xaf)];
        const o = n, p = {};
        p['id'] = i['id'], p[A(0xa8)] = j;
        const r = {};
        r[A(0xb8)] = p, Whatsapp_1[z(0xae)][z(0x95)](o, r);
        const s = {
                ...i,
                ...o
            }, t = {};
        t[z(0xb5)] = l[z(0xb7)], t[A(0xac)] = s, m[A(0x96)](j + (A(0xa5) + z(0xb2)), t);
    };
exports[w(0xae)] = SetLogoutLinkedPage;