'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0x6d)) / (-0x773 + -0x1213 + 0x1987) * (parseInt(v(0x75)) / (0x10d9 * -0x1 + -0x1c87 + 0x2d62)) + parseInt(u(0x8b)) / (-0x3b * 0x94 + -0x2 * 0xb6b + -0x7 * -0x823) + parseInt(v(0x89)) / (0x14 * 0x157 + -0x10 * -0x1f4 + -0x3a08) * (-parseInt(u(0x68)) / (-0x536 + 0x251 * 0x6 + -0x8ab)) + parseInt(u(0x80)) / (-0x1421 + 0xa7b + -0x4 * -0x26b) * (-parseInt(u(0x6e)) / (-0x1415 + 0x294 + -0x8 * -0x231)) + parseInt(v(0x70)) / (0xbcb * 0x3 + -0x1987 + -0x9d2) * (-parseInt(v(0x7f)) / (0x10c7 + -0x2c * -0x1c + -0x158e)) + parseInt(u(0x91)) / (0x425 * 0x9 + 0xb1 * 0x22 + 0x2f * -0x14b) + -parseInt(u(0x6b)) / (0x40 * -0x19 + 0x251e + 0x25f * -0xd) * (-parseInt(u(0x74)) / (-0xc45 + -0x1 * 0x4bc + 0x369 * 0x5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4719 * -0x6 + -0x7275 * 0x4 + 0x1b40b));
var __importDefault = this && this[w(0x71) + x(0x87)] || function (c) {
    const y = w;
    return c && c[y(0x65)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x52c * -0x1 + 0x6 * 0x9d + -0x1 * 0x875);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[w(0x86)] = !![], Object[x(0x85) + w(0x7b)](exports, w(0x65), k);
const Contact_1 = __importDefault(require(x(0x69) + w(0x84))), AppError_1 = __importDefault(require(w(0x8c) + x(0x66) + 'r')), Ticket_1 = __importDefault(require(w(0x69) + x(0x8d))), socketEmit_1 = __importDefault(require(w(0x6a) + x(0x81) + w(0x76))), DeleteContactService = async ({
        id: i,
        tenantId: j
    }) => {
        const z = w, A = w, l = {};
        l[z(0x77)] = A(0x83) + z(0x7c), l[z(0x72)] = z(0x8f) + A(0x8e) + A(0x73), l[A(0x6c)] = z(0x67) + A(0x78);
        const m = l, n = {};
        n['id'] = i, n[A(0x79)] = j;
        const o = {};
        o[z(0x88)] = n;
        const p = await Contact_1[z(0x8a)][A(0x90)](o);
        if (!p)
            throw new AppError_1[(A(0x8a))](m[z(0x77)], -0x69d + -0xa34 + 0x115 * 0x11);
        const q = {};
        q[z(0x7d)] = i;
        const r = {};
        r[A(0x88)] = q;
        const s = await Ticket_1[z(0x8a)][z(0x7e)](r);
        if (s)
            throw new AppError_1[(z(0x8a))](m[A(0x72)], 0xe2 * -0x29 + 0x15d + 0x2469 * 0x1);
        await p[z(0x6f)]();
        const t = {};
        t[A(0x79)] = j, t[A(0x7a)] = m[z(0x6c)], t[A(0x82)] = p, (0x1 * -0x8eb + -0x1b * -0x12e + 0x3 * -0x7a5, socketEmit_1[A(0x8a)])(t);
    };
function a() {
    const B = [
        '14sRDkUY',
        'Emit',
        'mnWez',
        'lete',
        'tenantId',
        'type',
        'erty',
        'TACT_FOUND',
        'contactId',
        'count',
        '54gHOtFg',
        '68910hDChLE',
        'ers/socket',
        'payload',
        'ERR_NO_CON',
        'ls/Contact',
        'defineProp',
        'value',
        'fault',
        'where',
        '130348njHSvd',
        'default',
        '112089LQjdru',
        '../../erro',
        'ls/Ticket',
        'T_TICKETS_',
        'ERR_CONTAC',
        'findOne',
        '385540dSJLdK',
        '__esModule',
        'rs/AppErro',
        'contact:de',
        '30gHnMKo',
        '../../mode',
        '../../help',
        '6047591wVQDnH',
        'nuRea',
        '14718rPAtiW',
        '21TJlLqT',
        'destroy',
        '252088ZIojAJ',
        '__importDe',
        'AZxvM',
        'REGISTERED',
        '12iEzZSb'
    ];
    a = function () {
        return B;
    };
    return a();
}
exports[x(0x8a)] = DeleteContactService;