'use strict';
const D = b, E = b;
function a() {
    const I = [
        'phone',
        'status',
        '4676924hNnOCY',
        'email',
        '__importDe',
        '8RqwVCT',
        'cnpj',
        'name',
        'ls/Tenant',
        'ownerId',
        'GyBaX',
        'planId',
        'maxConnect',
        'defineProp',
        'value',
        'ions',
        'erty',
        '__esModule',
        'maxUsers',
        '3126411MlTjgD',
        'recurrence',
        'default',
        '1855359HCURKa',
        'AphlZ',
        'dueDate',
        '30WKgKvX',
        'findByPk',
        '96024nQAnLD',
        '../../mode',
        '796396JbIBmQ',
        '374pfEttc',
        '125LBDmbZ',
        'fault',
        '90212KxGfSR',
        '6CmboXA',
        'update'
    ];
    a = function () {
        return I;
    };
    return a();
}
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(B(0x15e)) / (-0x3 * -0x733 + 0xa7f * 0x1 + -0x1f * 0x109) + parseInt(C(0x15f)) / (0x1 * -0x1b22 + -0xfbf * -0x1 + 0xb65) * (parseInt(C(0x163)) / (0xd43 + -0xb * 0xf9 + -0x28d)) + parseInt(C(0x162)) / (-0x1 * 0x9e9 + -0x1b57 * -0x1 + -0x116a) * (-parseInt(B(0x160)) / (-0xd66 + 0x16 * -0xb8 + 0x1d3b)) + -parseInt(C(0x15c)) / (0x33f * 0xa + 0xe42 * 0x2 + -0x14c * 0x2f) + -parseInt(C(0x167)) / (0x19be + 0x1 * -0x943 + -0x1074) + parseInt(C(0x16a)) / (-0x31 * 0xcc + -0x1c9 + 0x28dd) * (parseInt(C(0x154)) / (0x11b * 0x13 + -0x2c * -0x1d + -0x19f4)) + -parseInt(C(0x15a)) / (-0x1c3 * 0x5 + 0x1 * 0x17c6 + -0xeed * 0x1) * (-parseInt(B(0x157)) / (-0x2 * -0xd44 + -0x1 * -0x169a + 0x1 * -0x3117));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xbdf3a + -0x1df9 * -0x3 + 0x256 * -0x29b));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6f * 0x19 + -0x22 * 0xb + -0x812 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[D(0x169) + E(0x161)] || function (c) {
    const F = D;
    return c && c[F(0x152)] ? c : { 'default': c };
};
const k = {};
k[D(0x14f)] = !![], Object[D(0x172) + D(0x151)](exports, E(0x152), k);
const Tenant_1 = __importDefault(require(E(0x15d) + E(0x16d))), AdminUpdateTenantService = async ({
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
        const G = D, H = D, q = {};
        q[G(0x16f)] = function (z, A) {
            return z !== A;
        }, q[H(0x158)] = function (z, A) {
            return z !== A;
        };
        const r = q, s = await Tenant_1[G(0x156)][H(0x15b)](f), t = {};
        t[H(0x16c)] = g, t[G(0x16b)] = h, t[G(0x165)] = m, t[H(0x168)] = n, t[G(0x159)] = o, t[G(0x155)] = p;
        const u = t;
        if (r[H(0x16f)](i, undefined))
            u[H(0x153)] = i;
        if (r[H(0x16f)](j, undefined))
            u[G(0x171) + H(0x150)] = j;
        if (r[G(0x158)](l, undefined))
            u[H(0x170)] = l;
        await s[G(0x164)](u);
        const v = {};
        v['id'] = s['id'], v[G(0x16c)] = s[G(0x16c)], v[H(0x16b)] = s[G(0x16b)], v[H(0x166)] = s[H(0x166)], v[H(0x16e)] = s[H(0x16e)], v[H(0x153)] = s[H(0x153)], v[G(0x171) + G(0x150)] = s[G(0x171) + G(0x150)], v[G(0x170)] = s[H(0x170)], v[H(0x165)] = s[H(0x165)], v[G(0x168)] = s[H(0x168)], v[H(0x159)] = s[H(0x159)], v[G(0x155)] = s[H(0x155)];
        const w = v;
        return w;
    };
exports[D(0x156)] = AdminUpdateTenantService;