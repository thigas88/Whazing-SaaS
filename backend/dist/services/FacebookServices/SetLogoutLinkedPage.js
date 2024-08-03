'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0x1d1)) / (-0x187 * -0x8 + 0x2 * 0x12fa + -0x322b) + parseInt(u(0x1c5)) / (-0xda3 * 0x1 + 0x7 * 0x1b5 + 0x1b2) + parseInt(v(0x1b9)) / (0x2d * 0x4f + -0x1 * 0x9ed + -0x151 * 0x3) * (-parseInt(v(0x1c3)) / (0x4ea + -0x1cbb + 0x17d5)) + parseInt(v(0x1bf)) / (0x52f + -0x1c15 + 0x16eb) * (parseInt(v(0x1c9)) / (0xd69 * 0x1 + 0x1334 + -0x2097)) + -parseInt(u(0x1b5)) / (0x1934 * 0x1 + -0x65 * -0x9 + 0x2 * -0xe5d) + -parseInt(u(0x1cc)) / (0x1 * 0xa4 + -0x1073 * 0x1 + 0x32b * 0x5) + parseInt(u(0x1cb)) / (0x9 * -0x423 + -0x22e9 + -0x9 * -0x805);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x801c5 + 0x235 * 0x2ad + -0x1 * 0x88dff));
function a() {
    const B = [
        'update',
        'action',
        'DISCONNECT',
        '186328QVuGHb',
        'fbPageId',
        '372324KgZGRS',
        '/socket',
        'session',
        'where',
        '6tsfqKF',
        'tokenAPI',
        '11200320zNLemY',
        '1609424nSGhKF',
        '__importDe',
        'erty',
        'defineProp',
        'ls/Whatsap',
        '700208rpkmSi',
        '__esModule',
        'emit',
        ':whatsappS',
        'PxRge',
        '../../libs',
        'tenantId',
        'default',
        '735210PRLHUf',
        'fault',
        'ession',
        'status',
        '24TKNimL',
        'getIO',
        '../../mode',
        'fbObject',
        'value',
        'OHCJX',
        '1497785ORvQfv'
    ];
    a = function () {
        return B;
    };
    return a();
}
var __importDefault = this && this[w(0x1cd) + w(0x1b6)] || function (c) {
    const y = w;
    return c && c[y(0x1d2)] ? c : { 'default': c };
};
const q = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x147 * -0x5 + 0x1d3a + -0x1525 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
q[w(0x1bd)] = !![], Object[x(0x1cf) + x(0x1ce)](exports, x(0x1d2), q);
const socket_1 = require(w(0x1b2) + w(0x1c6)), Whatsapp_1 = __importDefault(require(x(0x1bb) + x(0x1d0) + 'p')), SetLogoutLinkedPage = async ({
        whatsapp: i,
        tenantId: j
    }) => {
        const z = x, A = x, k = {};
        k[z(0x1d5)] = A(0x1c2) + 'ED', k[A(0x1be)] = A(0x1c0);
        const l = k, m = (0x2 * -0x33b + 0x1b * -0x1c + -0x1 * -0x96a, socket_1[A(0x1ba)])(), n = {};
        n[z(0x1c4)] = null, n[A(0x1bc)] = {}, n[A(0x1ca)] = null, n[z(0x1b8)] = l[A(0x1d5)];
        const o = n, p = {};
        p['id'] = i['id'], p[A(0x1b3)] = j;
        const r = {};
        r[z(0x1c8)] = p, Whatsapp_1[A(0x1b4)][A(0x1c0)](o, r);
        const s = {
                ...i,
                ...o
            }, t = {};
        t[A(0x1c1)] = l[z(0x1be)], t[z(0x1c7)] = s, m[z(0x1d3)](j + (A(0x1d4) + A(0x1b7)), t);
    };
exports[w(0x1b4)] = SetLogoutLinkedPage;