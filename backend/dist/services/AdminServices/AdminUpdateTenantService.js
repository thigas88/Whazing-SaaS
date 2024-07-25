'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0x113)) / (-0x65 * -0x3 + 0x13 * -0x191 + -0x32d * -0x9) * (-parseInt(C(0xf8)) / (-0x17fc + 0x12e9 + -0x1 * -0x515)) + parseInt(C(0x110)) / (-0x1ac3 * -0x1 + -0x1 * -0x49 + 0x301 * -0x9) * (parseInt(B(0x116)) / (-0x1983 + -0xcc8 + -0x1d3 * -0x15)) + parseInt(B(0x114)) / (-0x1db * 0x11 + -0x68 + 0x174 * 0x16) + parseInt(B(0x100)) / (-0x15b4 + 0xf63 + -0x1 * -0x657) * (parseInt(B(0xfd)) / (0x89e * -0x1 + 0x3b7 + 0x4ee)) + parseInt(B(0xfa)) / (-0xf * -0x20f + 0x10d4 + -0x2fad) + -parseInt(B(0x117)) / (-0x1688 * 0x1 + 0x1 * -0x167 + 0x17f8) * (-parseInt(C(0x101)) / (0x51 * 0x1 + -0x1cf6 + -0x1caf * -0x1)) + parseInt(C(0x111)) / (0x7ce * 0x1 + 0x26dd * 0x1 + -0x2ea0) * (-parseInt(C(0x10a)) / (-0x1720 + -0xfa9 + 0x26d5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4d932 + -0xbc973 + 0x9d7 * 0x1af));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x26ef + 0x110e + 0x56 * 0x44);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const I = [
        'PHHem',
        'value',
        'ions',
        '1110148ZVPlDv',
        'recurrence',
        '9460480mGOBgz',
        'fQDPj',
        'update',
        '664958wuyCuN',
        'findByPk',
        'maxConnect',
        '60iPsaAz',
        '3330jfWToi',
        'erty',
        'fault',
        'planId',
        'dueDate',
        'email',
        '../../mode',
        'defineProp',
        'cnpj',
        '10363884IxzLHL',
        'default',
        'maxUsers',
        'status',
        'ls/Tenant',
        'ownerId',
        '2040498jrUiDU',
        '55ODjaWz',
        '__esModule',
        '1SEzwBN',
        '5088720CuxbRU',
        '__importDe',
        '4GrmnLJ',
        '15237mOgTTo',
        'phone',
        'name'
    ];
    a = function () {
        return I;
    };
    return a();
}
var __importDefault = this && this[D(0x115) + E(0x103)] || function (c) {
    const F = E;
    return c && c[F(0x112)] ? c : { 'default': c };
};
const k = {};
k[E(0x11b)] = !![], Object[D(0x108) + D(0x102)](exports, D(0x112), k);
const Tenant_1 = __importDefault(require(D(0x107) + E(0x10e))), AdminUpdateTenantService = async ({
        id: f,
        name: g,
        cnpj: h,
        maxUsers: i,
        maxConnections: j,
        planId: l,
        phone: m,
        email: n,
        dueDate: o,
        recurrence: p
    }) => {
        const G = E, H = E, q = {};
        q[G(0x11a)] = function (z, A) {
            return z !== A;
        }, q[H(0xfb)] = function (z, A) {
            return z !== A;
        };
        const r = q, s = await Tenant_1[H(0x10b)][G(0xfe)](f), t = {};
        t[H(0x119)] = g, t[G(0x109)] = h, t[H(0x118)] = m, t[H(0x106)] = n, t[H(0x105)] = o, t[G(0xf9)] = p;
        const u = t;
        if (r[H(0x11a)](i, undefined))
            u[G(0x10c)] = i;
        if (r[H(0x11a)](j, undefined))
            u[G(0xff) + G(0xf7)] = j;
        if (r[H(0xfb)](l, undefined))
            u[H(0x104)] = l;
        await s[G(0xfc)](u);
        const v = {};
        v['id'] = s['id'], v[H(0x119)] = s[H(0x119)], v[G(0x109)] = s[G(0x109)], v[G(0x10d)] = s[G(0x10d)], v[H(0x10f)] = s[G(0x10f)], v[H(0x10c)] = s[H(0x10c)], v[H(0xff) + G(0xf7)] = s[G(0xff) + H(0xf7)], v[G(0x104)] = s[G(0x104)], v[H(0x118)] = s[H(0x118)], v[G(0x106)] = s[H(0x106)], v[G(0x105)] = s[H(0x105)], v[H(0xf9)] = s[G(0xf9)];
        const w = v;
        return w;
    };
exports[E(0x10b)] = AdminUpdateTenantService;