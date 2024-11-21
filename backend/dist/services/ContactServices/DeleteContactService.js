'use strict';
const w = b, x = b;
function a() {
    const B = [
        'tenantId',
        '1140649MffEBI',
        'ers/socket',
        '../../help',
        'findOne',
        '13478850RQfoeX',
        '7443378JmQXUX',
        'contactId',
        'REGISTERED',
        'ypKUP',
        'ls/Contact',
        'contact:de',
        '314968DgRVQd',
        'type',
        '__importDe',
        'payload',
        '6azFAZI',
        '__esModule',
        'TACT_FOUND',
        'lete',
        'T_TICKETS_',
        'value',
        'ERR_NO_CON',
        'where',
        '../../mode',
        '6499456mYkZWX',
        'ls/Ticket',
        'fault',
        'erty',
        'SaUKF',
        '1645184xyspXj',
        'rs/AppErro',
        'defineProp',
        'JybHS',
        'count',
        'ERR_CONTAC',
        '../../erro',
        '5FKEJku',
        'destroy',
        '5621931amBdHH',
        'default',
        'Emit'
    ];
    a = function () {
        return B;
    };
    return a();
}
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0x1d5)) / (0x117d + -0xde3 + 0x3 * -0x133) + -parseInt(u(0x1e0)) / (0x164 * 0x1 + 0xbb * -0x6 + 0x300) + -parseInt(u(0x1e4)) / (-0x1ebb * -0x1 + 0x1130 + -0x2fe8) * (-parseInt(v(0x1f2)) / (0x1 * 0x671 + 0x13 * 0x1ec + -0x2af1)) + -parseInt(v(0x1f9)) / (-0x649 + 0x2486 + -0x1e38) * (-parseInt(v(0x1da)) / (0x144d + -0xdd2 + -0x675)) + -parseInt(u(0x1fb)) / (-0xafc + 0x2ea * -0x4 + 0x16ab) + -parseInt(u(0x1ed)) / (0x2465 + 0x1 * -0x1795 + -0xcc8) + parseInt(v(0x1d9)) / (-0x1 * -0x1b1 + 0x2368 + -0x4 * 0x944);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x62f8e + -0x133 * -0x908 + 0x53ab9));
var __importDefault = this && this[w(0x1e2) + w(0x1ef)] || function (c) {
    const y = w;
    return c && c[y(0x1e5)] ? c : { 'default': c };
};
const k = {};
k[x(0x1e9)] = !![], Object[w(0x1f4) + x(0x1f0)](exports, x(0x1e5), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2420 + 0x1eed + -0x413b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Contact_1 = __importDefault(require(x(0x1ec) + w(0x1de))), AppError_1 = __importDefault(require(w(0x1f8) + w(0x1f3) + 'r')), Ticket_1 = __importDefault(require(w(0x1ec) + w(0x1ee))), socketEmit_1 = __importDefault(require(x(0x1d7) + x(0x1d6) + x(0x1d3))), DeleteContactService = async ({
        id: i,
        tenantId: j
    }) => {
        const z = w, A = x, l = {};
        l[z(0x1f1)] = A(0x1ea) + A(0x1e6), l[A(0x1f5)] = A(0x1f7) + z(0x1e8) + A(0x1dc), l[A(0x1dd)] = z(0x1df) + z(0x1e7);
        const m = l, n = {};
        n['id'] = i, n[z(0x1d4)] = j;
        const o = {};
        o[z(0x1eb)] = n;
        const p = await Contact_1[z(0x1d2)][z(0x1d8)](o);
        if (!p)
            throw new AppError_1[(A(0x1d2))](m[A(0x1f1)], -0x201f + 0x1ffd + 0x1b6);
        const q = {};
        q[z(0x1db)] = i;
        const r = {};
        r[z(0x1eb)] = q;
        const s = await Ticket_1[z(0x1d2)][z(0x1f6)](r);
        if (s)
            throw new AppError_1[(A(0x1d2))](m[A(0x1f5)], -0x685 + 0x4c * 0x5b + -0x12eb);
        await p[A(0x1fa)]();
        const t = {};
        t[A(0x1d4)] = j, t[A(0x1e1)] = m[A(0x1dd)], t[z(0x1e3)] = p, (0x959 * -0x1 + 0x170a + -0xdb1 * 0x1, socketEmit_1[z(0x1d2)])(t);
    };
exports[x(0x1d2)] = DeleteContactService;