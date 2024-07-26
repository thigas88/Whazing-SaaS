'use strict';
const w = b, x = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2130 + -0x14 * -0xe9 + -0x2d2 * 0x12);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0xb2)) / (-0x1a68 * -0x1 + 0x3c * -0xa3 + -0x35 * -0x39) * (parseInt(v(0xc1)) / (-0xbbf + 0x10b + 0xab6)) + -parseInt(v(0xa3)) / (0x63f + -0x72 * 0x41 + 0x16b6) * (-parseInt(u(0xc5)) / (0x2038 + -0x157b + 0x3d * -0x2d)) + -parseInt(u(0xbc)) / (0x26 * -0x83 + -0x267b * 0x1 + 0x39f2) + -parseInt(v(0xa2)) / (-0x694 + -0x2052 + 0x5e * 0x6a) * (parseInt(v(0xa1)) / (-0xfe6 + -0x3c7 * -0x2 + 0x85f * 0x1)) + -parseInt(v(0xab)) / (0x326 * 0x8 + 0x2 * -0x89b + -0x7f2) + parseInt(v(0xb5)) / (0x1a3e + 0x4 * 0x5be + -0x312d) + -parseInt(u(0xc0)) / (0x1345 + -0x2538 + 0x11fd);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x8e * 0x35b + 0x1 * -0x1d773 + 0x958e5));
function a() {
    const B = [
        'lete',
        '5224952xnGVKE',
        'TACT_FOUND',
        'fault',
        'tenantId',
        '__esModule',
        'payload',
        'erty',
        '406FNAZLj',
        'emXEJ',
        'destroy',
        '1675953JmEhWY',
        'IQGRr',
        'ls/Ticket',
        'T_TICKETS_',
        '__importDe',
        'where',
        'value',
        '1023575LMOWTi',
        'Emit',
        'contact:de',
        'count',
        '53800LlTXEc',
        '3540jzcttT',
        '../../erro',
        'type',
        'rs/AppErro',
        '154312jRoiVr',
        'REGISTERED',
        '../../help',
        'ers/socket',
        'ERR_NO_CON',
        'ls/Contact',
        'defineProp',
        '63eDkRvV',
        '218358mlhIuW',
        '51UDcviK',
        'contactId',
        'default',
        'findOne',
        '../../mode',
        'ERR_CONTAC',
        'kpnJe'
    ];
    a = function () {
        return B;
    };
    return a();
}
var __importDefault = this && this[w(0xb9) + x(0xad)] || function (c) {
    const y = x;
    return c && c[y(0xaf)] ? c : { 'default': c };
};
const k = {};
k[x(0xbb)] = !![], Object[x(0xa0) + x(0xb1)](exports, x(0xaf), k);
const Contact_1 = __importDefault(require(w(0xa7) + x(0xca))), AppError_1 = __importDefault(require(x(0xc2) + x(0xc4) + 'r')), Ticket_1 = __importDefault(require(w(0xa7) + x(0xb7))), socketEmit_1 = __importDefault(require(x(0xc7) + x(0xc8) + x(0xbd))), DeleteContactService = async ({
        id: i,
        tenantId: j
    }) => {
        const z = w, A = w, l = {};
        l[z(0xa9)] = z(0xc9) + z(0xac), l[A(0xb3)] = A(0xa8) + z(0xb8) + A(0xc6), l[z(0xb6)] = A(0xbe) + A(0xaa);
        const m = l, n = {};
        n['id'] = i, n[A(0xae)] = j;
        const o = {};
        o[A(0xba)] = n;
        const p = await Contact_1[z(0xa5)][z(0xa6)](o);
        if (!p)
            throw new AppError_1[(A(0xa5))](m[z(0xa9)], 0x21b8 + 0x1356 + -0x337a);
        const q = {};
        q[z(0xa4)] = i;
        const r = {};
        r[A(0xba)] = q;
        const s = await Ticket_1[z(0xa5)][A(0xbf)](r);
        if (s)
            throw new AppError_1[(z(0xa5))](m[A(0xb3)], 0x2708 + -0xfc7 * -0x1 + -0x353b);
        await p[A(0xb4)]();
        const t = {};
        t[z(0xae)] = j, t[z(0xc3)] = m[A(0xb6)], t[A(0xb0)] = p, (-0x1 * -0x239f + 0x2 * -0xf87 + -0x491, socketEmit_1[z(0xa5)])(t);
    };
exports[w(0xa5)] = DeleteContactService;