'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0x165)) / (-0x1163 + 0xc70 + -0x4f4 * -0x1) * (-parseInt(z(0x173)) / (0x4c * 0x77 + -0x2485 + -0x133 * -0x1)) + parseInt(z(0x169)) / (0x248d + -0x17af + 0x1 * -0xcdb) * (parseInt(A(0x176)) / (-0x25c6 + -0x23e * 0x4 + 0x2ec2)) + parseInt(A(0x166)) / (-0x97 * 0x19 + -0x2260 + 0xc49 * 0x4) * (-parseInt(z(0x160)) / (0x132b + 0xa21 + -0x1d46)) + -parseInt(z(0x147)) / (-0x3fa * -0x6 + -0x1a1d + 0x248) + parseInt(A(0x151)) / (-0x3 * -0x412 + -0x1cdd + 0x10af) * (-parseInt(z(0x13b)) / (-0x57 + 0x8b6 * -0x2 + 0x1 * 0x11cc)) + -parseInt(z(0x170)) / (0x1cfc + -0xaab * -0x3 + -0x3cf3) + parseInt(A(0x149)) / (-0xe7c + 0x2 * 0xeb8 + -0x15b * 0xb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x12eac0 + 0x1 * -0xc3fa1 + -0x12 * -0x247af));
var __importDefault = this && this[B(0x141) + B(0x14d)] || function (c) {
    const D = B;
    return c && c[D(0x167)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x9a2 + 0x1837 + 0x1051 * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[B(0x15b)] = !![], Object[B(0x159) + B(0x16d)](exports, B(0x167), k), exports[B(0x13c)] = void (0x234 * -0x9 + -0x1 * 0x351 + -0x1 * -0x1725);
const Contact_1 = __importDefault(require(B(0x16a) + B(0x153))), Ticket_1 = __importDefault(require(B(0x16a) + B(0x146))), Whatsapp_1 = __importDefault(require(C(0x16a) + C(0x175))), logger_1 = require(C(0x137) + C(0x16c)), send = async (j, l) => {
        const E = C, F = B, m = {};
        m[E(0x16b)] = F(0x140) + E(0x15d) + F(0x158), m[E(0x14e)] = F(0x154), m[F(0x148)] = F(0x162), m[E(0x177)] = E(0x143), m[F(0x15c)] = E(0x13e), m[F(0x171)] = F(0x178), m[F(0x168)] = F(0x152), m[E(0x142)] = F(0x174), m[F(0x16f)] = E(0x14b), m[E(0x15e)] = F(0x13d), m[E(0x15f)] = F(0x14a) + F(0x157), m[E(0x14c)] = E(0x14f) + 'nt';
        const n = m, {body: o} = j[E(0x155)], {ticketId: p} = j[E(0x144)], q = j[F(0x150)];
        logger_1[F(0x139)][F(0x179)](n[F(0x16b)]);
        const r = {};
        r[E(0x163)] = Contact_1[E(0x172)], r['as'] = n[E(0x14e)], r[E(0x145)] = [
            n[E(0x148)],
            n[F(0x177)],
            {
                'association': n[E(0x15c)],
                'attributes': [
                    'id',
                    n[E(0x171)]
                ]
            }
        ];
        const s = {};
        s[E(0x163)] = Whatsapp_1[F(0x172)], s['as'] = n[F(0x168)], s[E(0x16e)] = [
            n[F(0x142)],
            n[F(0x16f)],
            n[F(0x15e)]
        ];
        const t = {};
        t[E(0x145)] = [
            r,
            s
        ];
        const u = await Ticket_1[E(0x172)][E(0x164)](p, t);
        if (!u) {
            const v = {};
            return v[E(0x156)] = n[F(0x15f)], l[E(0x15a)](-0x2191 * -0x1 + -0x252a + 0x52d)[F(0x138)](v);
        }
        try {
            if (q)
                await Promise[E(0x161)](q[E(0x13f)](async x => {
                }));
            else {
            }
            const w = {};
            return w[F(0x156)] = n[E(0x14c)], l[E(0x15a)](-0x1 * 0xdd8 + -0xde8 + 0x1c88)[F(0x138)](w);
        } catch (x) {
            logger_1[E(0x139)][E(0x13a)]('e\x20' + x);
            const y = {};
            return y[F(0x156)] = x, l[E(0x15a)](-0x31 * -0x43 + 0x20f3 + -0x2c36 * 0x1)[F(0x138)](y);
        }
    };
exports[B(0x13c)] = send;
function a() {
    const G = [
        'include',
        'Ticket',
        '4381041xtEDqZ',
        'FnpJc',
        '22013805lQqJSi',
        'Ticket\x20not',
        'type',
        'ulAQa',
        'fault',
        'kOdAr',
        'Message\x20se',
        'files',
        '3443144eWOjoM',
        'whatsapp',
        'Contact',
        'contact',
        'body',
        'message',
        '\x20found',
        'controller',
        'defineProp',
        'status',
        'value',
        'KQnaf',
        'b\x20message\x20',
        'sDCVs',
        'wKOwb',
        '6sSnYnM',
        'all',
        'extraInfo',
        'model',
        'findByPk',
        '307TtPnUc',
        '5377100YbLpvl',
        '__esModule',
        'PlFUX',
        '12UjuhjV',
        '../models/',
        'Oxvko',
        'ogger',
        'erty',
        'attributes',
        'mcflt',
        '4755880KZdfJw',
        'tuUCM',
        'default',
        '8090utQehT',
        'number',
        'Whatsapp',
        '441736QIyatN',
        'xgUsQ',
        'name',
        'info',
        '../utils/l',
        'json',
        'logger',
        'warn',
        '18BvTqYp',
        'send',
        'tenantId',
        'wallets',
        'map',
        'Sending\x20hu',
        '__importDe',
        'YHDjN',
        'tags',
        'params'
    ];
    a = function () {
        return G;
    };
    return a();
}