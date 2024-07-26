'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0xd0)) / (-0x1c62 + -0x2 * 0x351 + 0x2305 * 0x1) * (-parseInt(u(0xe4)) / (0x1 * -0x1b2f + 0x19bd * 0x1 + -0xc * -0x1f)) + -parseInt(v(0xd5)) / (0xa3a + 0x2 * -0x4f2 + 0x1 * -0x53) + -parseInt(u(0xe9)) / (-0x17df + 0x217f + -0x267 * 0x4) * (parseInt(u(0xde)) / (-0x1 * -0x1039 + 0x22d1 + -0x3305 * 0x1)) + -parseInt(v(0xf0)) / (0x2195 + 0x15a + 0x22e9 * -0x1) + -parseInt(u(0xda)) / (-0x1eca + 0x73f + 0x1 * 0x1792) + -parseInt(v(0xef)) / (0x194b + 0xb9e + -0x1 * 0x24e1) * (-parseInt(u(0xe3)) / (0x5b2 + 0x7 * 0x193 + -0x10ae)) + parseInt(v(0xe1)) / (0x7a * -0x3d + 0x2ed + 0x1 * 0x1a2f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x18 * 0x3572 + -0xdbfcf + -0x8a41 * -0x1d));
function a() {
    const B = [
        'action',
        'update',
        'erty',
        'default',
        '3305wtDDVw',
        '../../libs',
        'ession',
        'where',
        '../../mode',
        '2471100farQxM',
        'bRBJp',
        'session',
        ':whatsappS',
        '/socket',
        '3273648rYtgHB',
        'ls/Whatsap',
        'tokenAPI',
        'emit',
        '274015dLUPKY',
        'status',
        'DISCONNECT',
        '14987220vonQRw',
        'defineProp',
        '126GSDSXM',
        '502hBxfuW',
        'fault',
        'UQIyD',
        'fbPageId',
        '__importDe',
        '52QREQKL',
        '__esModule',
        'getIO',
        'tenantId',
        'value',
        'fbObject',
        '472840XprRSo',
        '4189500aGLgnR'
    ];
    a = function () {
        return B;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1ded + 0x2c * 0x15 + -0x20bd * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[w(0xe8) + w(0xe5)] || function (c) {
    const y = w;
    return c && c[y(0xea)] ? c : { 'default': c };
};
const q = {};
q[w(0xed)] = !![], Object[x(0xe2) + w(0xce)](exports, w(0xea), q);
const socket_1 = require(x(0xd1) + w(0xd9)), Whatsapp_1 = __importDefault(require(x(0xd4) + w(0xdb) + 'p')), SetLogoutLinkedPage = async ({
        whatsapp: i,
        tenantId: j
    }) => {
        const z = x, A = x, k = {};
        k[z(0xd6)] = A(0xe0) + 'ED', k[z(0xe6)] = A(0xcd);
        const l = k, m = (-0x1 * 0x890 + -0x2197 * -0x1 + -0x1 * 0x1907, socket_1[A(0xeb)])(), n = {};
        n[z(0xe7)] = null, n[A(0xee)] = {}, n[A(0xdc)] = null, n[z(0xdf)] = l[z(0xd6)];
        const o = n, p = {};
        p['id'] = i['id'], p[A(0xec)] = j;
        const r = {};
        r[A(0xd3)] = p, Whatsapp_1[A(0xcf)][A(0xcd)](o, r);
        const s = {
                ...i,
                ...o
            }, t = {};
        t[A(0xcc)] = l[z(0xe6)], t[z(0xd7)] = s, m[A(0xdd)](j + (A(0xd8) + z(0xd2)), t);
    };
exports[x(0xcf)] = SetLogoutLinkedPage;