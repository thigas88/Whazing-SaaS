'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1beb + 0x3e9 + 0xf9d * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0xb4)) / (0x2a1 * -0x5 + -0xfa * -0x22 + -0x140e) * (-parseInt(C(0xbb)) / (-0x1 * 0x1113 + -0x1 * 0x126d + 0x3f2 * 0x9)) + -parseInt(B(0xb7)) / (0x1eec + 0xbfb * -0x1 + -0x2 * 0x977) + -parseInt(C(0xaf)) / (-0x214c + 0x1c1f + 0x531) * (parseInt(B(0xb2)) / (-0x18f5 * -0x1 + -0xb5f * -0x1 + 0x34d * -0xb)) + parseInt(B(0xa1)) / (0x1391 + 0x2 * -0x13d + -0x1111) * (-parseInt(C(0x9c)) / (-0x24d5 + -0x1db1 + 0x428d)) + -parseInt(C(0xb3)) / (0x3d4 + 0x99a * 0x2 + -0x80 * 0x2e) + -parseInt(B(0x9b)) / (0x11b2 + 0x13c5 + -0x256e) * (-parseInt(C(0xa7)) / (-0x1cd * 0xa + -0x269 * 0xd + 0x3161)) + parseInt(C(0xb6)) / (0x19fd + -0x12 * 0x94 + -0xf8a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x10b52a + -0x1 * 0xa0d1e + -0x3379 * -0x19));
var __importDefault = this && this[D(0xb8) + E(0xa6)] || function (c) {
    const F = E;
    return c && c[F(0x9e)] ? c : { 'default': c };
};
const k = {};
function a() {
    const I = [
        'defineProp',
        '../../mode',
        '23176bShmru',
        'ownerId',
        'default',
        '10oxVDwP',
        '9113448UYrWDz',
        '105767OauVfe',
        'maxConnect',
        '22815001hsWzpP',
        '3349578FQyUyT',
        '__importDe',
        'value',
        'update',
        '12UMMQuh',
        'ions',
        'phone',
        '5236524YFeTJu',
        '2149Vthhec',
        'email',
        '__esModule',
        'ls/Tenant',
        'planId',
        '5034Rospjs',
        'name',
        'erty',
        'maxUsers',
        'cnpj',
        'fault',
        '10HyLIRc',
        'status',
        'recurrence',
        'findByPk',
        'dueDate',
        'jmydf'
    ];
    a = function () {
        return I;
    };
    return a();
}
k[D(0xb9)] = !![], Object[E(0xad) + E(0xa3)](exports, D(0x9e), k);
const Tenant_1 = __importDefault(require(D(0xae) + D(0x9f))), AdminUpdateTenantService = async ({
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
        const G = D, H = E, q = {};
        q[G(0xac)] = function (z, A) {
            return z !== A;
        };
        const r = q, s = await Tenant_1[H(0xb1)][H(0xaa)](f), t = {};
        t[G(0xa2)] = g, t[H(0xa5)] = h, t[G(0x9a)] = m, t[H(0x9d)] = n, t[G(0xab)] = o, t[G(0xa9)] = p;
        const u = t;
        if (r[G(0xac)](i, undefined))
            u[H(0xa4)] = i;
        if (r[G(0xac)](j, undefined))
            u[G(0xb5) + G(0xbc)] = j;
        if (r[H(0xac)](l, undefined))
            u[H(0xa0)] = l;
        await s[G(0xba)](u);
        const v = {};
        v['id'] = s['id'], v[H(0xa2)] = s[G(0xa2)], v[G(0xa5)] = s[G(0xa5)], v[G(0xa8)] = s[G(0xa8)], v[G(0xb0)] = s[G(0xb0)], v[H(0xa4)] = s[H(0xa4)], v[G(0xb5) + G(0xbc)] = s[G(0xb5) + H(0xbc)], v[H(0xa0)] = s[H(0xa0)], v[H(0x9a)] = s[H(0x9a)], v[G(0x9d)] = s[G(0x9d)], v[H(0xab)] = s[H(0xab)], v[H(0xa9)] = s[H(0xa9)];
        const w = v;
        return w;
    };
exports[D(0xb1)] = AdminUpdateTenantService;