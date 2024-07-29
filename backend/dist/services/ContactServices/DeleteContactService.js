'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0x106)) / (0x53d * 0x1 + 0xad1 + -0x1 * 0x100d) + parseInt(u(0x100)) / (0x26b1 * -0x1 + 0x12e3 + 0x13d0) * (parseInt(u(0xfa)) / (0x114a + 0x4 * 0x362 + -0x1ecf)) + parseInt(v(0x105)) / (-0x2 * 0x9df + -0x3cc * 0x5 + 0x26be) + parseInt(u(0xef)) / (0xdf3 + 0x1f7 * 0xb + -0x3 * 0xbd9) + -parseInt(v(0xe7)) / (0x1836 + 0x1ac2 + -0x1979 * 0x2) + -parseInt(u(0xf6)) / (0x1a6d + 0x1f11 + 0x1 * -0x3977) * (parseInt(v(0x101)) / (-0x1907 * -0x1 + 0x3 * 0x488 + 0x3 * -0xcdd)) + parseInt(u(0xf3)) / (0x1 * 0x57 + -0x1c9b + 0xf * 0x1e3) * (-parseInt(u(0xf9)) / (-0x1a4e + 0x82a + -0x1 * -0x122e));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x61f1b + -0xaa38d + 0x1 * 0x181128));
var __importDefault = this && this[w(0xeb) + x(0xfe)] || function (c) {
    const y = x;
    return c && c[y(0x10f)] ? c : { 'default': c };
};
const k = {};
k[x(0x110)] = !![], Object[x(0xf4) + w(0xfc)](exports, w(0x10f), k);
const Contact_1 = __importDefault(require(x(0x102) + x(0xf5))), AppError_1 = __importDefault(require(w(0x109) + x(0xfd) + 'r')), Ticket_1 = __importDefault(require(w(0x102) + x(0x10e))), socketEmit_1 = __importDefault(require(x(0x10a) + x(0x104) + x(0xfb))), DeleteContactService = async ({
        id: i,
        tenantId: j
    }) => {
        const z = x, A = w, l = {};
        l[z(0xf8)] = z(0xf1) + A(0x10b), l[A(0xf7)] = z(0x111) + z(0xff) + z(0xec), l[z(0xed)] = A(0x10c) + z(0x107);
        const m = l, n = {};
        n['id'] = i, n[z(0xf2)] = j;
        const o = {};
        o[A(0xe8)] = n;
        const p = await Contact_1[z(0x103)][z(0xe9)](o);
        if (!p)
            throw new AppError_1[(A(0x103))](m[z(0xf8)], 0x67a + 0x1f5d + -0x2443 * 0x1);
        const q = {};
        q[A(0xea)] = i;
        const r = {};
        r[A(0xe8)] = q;
        const s = await Ticket_1[A(0x103)][A(0xf0)](r);
        if (s)
            throw new AppError_1[(A(0x103))](m[A(0xf7)], 0x1498 + 0x2359 + -0x365d * 0x1);
        await p[A(0x10d)]();
        const t = {};
        t[A(0xf2)] = j, t[A(0xee)] = m[A(0xed)], t[A(0x108)] = p, (0xa7d + 0xa65 * -0x2 + 0x3 * 0x36f, socketEmit_1[A(0x103)])(t);
    };
exports[x(0x103)] = DeleteContactService;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6 * 0x629 + -0x4d8 + -0x1 * 0x1f37);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const B = [
        'count',
        'ERR_NO_CON',
        'tenantId',
        '9hccBuA',
        'defineProp',
        'ls/Contact',
        '21EcbTYM',
        'FjQNq',
        'eZrWV',
        '576490nPChTg',
        '2217fhxcNw',
        'Emit',
        'erty',
        'rs/AppErro',
        'fault',
        'T_TICKETS_',
        '2114tbaFlY',
        '1236376VUqtyI',
        '../../mode',
        'default',
        'ers/socket',
        '2279876dFozWl',
        '10787EBHNVV',
        'lete',
        'payload',
        '../../erro',
        '../../help',
        'TACT_FOUND',
        'contact:de',
        'destroy',
        'ls/Ticket',
        '__esModule',
        'value',
        'ERR_CONTAC',
        '2686296fFinyb',
        'where',
        'findOne',
        'contactId',
        '__importDe',
        'REGISTERED',
        'xUGMX',
        'type',
        '429875tWczxa'
    ];
    a = function () {
        return B;
    };
    return a();
}