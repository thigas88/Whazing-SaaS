'use strict';
const D = b, E = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xbb2 + 0x2478 + -0x1 * 0x2f57);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0xe8)) / (-0x155b + 0xfb3 + 0x7 * 0xcf) + -parseInt(B(0xec)) / (-0x1aed + -0x1da0 + -0x388f * -0x1) + parseInt(C(0xe0)) / (-0x971 + 0x1f3f + -0x15cb) * (parseInt(C(0xda)) / (0x1 * -0x202d + 0x11bf + 0xe72)) + -parseInt(B(0xe3)) / (0x7 * -0x55c + 0xfa1 + -0x4 * -0x57a) * (parseInt(B(0xeb)) / (0x1d0 + -0x1 * 0x1d39 + -0x925 * -0x3)) + -parseInt(B(0xf0)) / (0x4a * -0x17 + 0xc14 + -0x1 * 0x567) + parseInt(C(0xdb)) / (-0x5 * -0x68 + 0x1fb5 * 0x1 + -0x21b5) + parseInt(B(0xf5)) / (0x17d * -0xd + 0x134 * 0x17 + -0x84a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7b749 * 0x1 + -0x2fe * 0x1be + -0x539 * -0x18c));
function a() {
    const I = [
        '../../mode',
        'ownerId',
        'phone',
        'recurrence',
        '12093uTgMyj',
        'erty',
        'fault',
        '1674455LXkYoi',
        'AGyLR',
        'KawJB',
        'default',
        'status',
        '149781qkixmm',
        'ions',
        'cnpj',
        '6VUhrWS',
        '2625722vcrjRL',
        '__importDe',
        'planId',
        'ls/Tenant',
        '9194724bQAdFE',
        'dueDate',
        'maxUsers',
        'name',
        'findByPk',
        '21452796JKOKgA',
        'maxConnect',
        'email',
        'value',
        '__esModule',
        'update',
        'defineProp',
        'kWqnh',
        '1268QvoUZN',
        '1144664bLlJQz'
    ];
    a = function () {
        return I;
    };
    return a();
}
var __importDefault = this && this[D(0xed) + E(0xe2)] || function (c) {
    const F = D;
    return c && c[F(0xd6)] ? c : { 'default': c };
};
const k = {};
k[E(0xd5)] = !![], Object[D(0xd8) + D(0xe1)](exports, D(0xd6), k);
const Tenant_1 = __importDefault(require(E(0xdc) + D(0xef))), AdminUpdateTenantService = async ({
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
        q[G(0xe5)] = function (z, A) {
            return z !== A;
        }, q[G(0xd9)] = function (z, A) {
            return z !== A;
        }, q[H(0xe4)] = function (z, A) {
            return z !== A;
        };
        const r = q, s = await Tenant_1[H(0xe6)][G(0xf4)](f), t = {};
        t[H(0xf3)] = g, t[G(0xea)] = h, t[H(0xde)] = m, t[H(0xd4)] = n, t[H(0xf1)] = o, t[G(0xdf)] = p;
        const u = t;
        if (r[G(0xe5)](i, undefined))
            u[G(0xf2)] = i;
        if (r[G(0xd9)](j, undefined))
            u[G(0xd3) + H(0xe9)] = j;
        if (r[H(0xe4)](l, undefined))
            u[H(0xee)] = l;
        await s[G(0xd7)](u);
        const v = {};
        v['id'] = s['id'], v[G(0xf3)] = s[H(0xf3)], v[G(0xea)] = s[H(0xea)], v[H(0xe7)] = s[H(0xe7)], v[H(0xdd)] = s[H(0xdd)], v[G(0xf2)] = s[G(0xf2)], v[G(0xd3) + H(0xe9)] = s[H(0xd3) + G(0xe9)], v[G(0xee)] = s[H(0xee)], v[H(0xde)] = s[H(0xde)], v[H(0xd4)] = s[G(0xd4)], v[H(0xf1)] = s[G(0xf1)], v[H(0xdf)] = s[G(0xdf)];
        const w = v;
        return w;
    };
exports[D(0xe6)] = AdminUpdateTenantService;