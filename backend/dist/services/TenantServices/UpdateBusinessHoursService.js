'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x87)) / (0x15 * -0x17 + -0x146f + 0x477 * 0x5) + -parseInt(s(0x6a)) / (0x14a7 + 0x1d6b + -0x4 * 0xc84) + -parseInt(s(0x7b)) / (0x8 * -0x424 + 0x1984 + -0x1 * -0x79f) + -parseInt(r(0x6e)) / (0x1c5 * -0x1 + -0x1 * 0x193 + -0x35c * -0x1) + -parseInt(r(0x7a)) / (0x1 * 0xca5 + -0x11ab * 0x2 + 0x16b6) + -parseInt(s(0x73)) / (-0x4b7 * -0x8 + -0x98a + -0x1c28) * (-parseInt(r(0x77)) / (0xeba + 0x1 * -0x297 + -0xc1c)) + parseInt(r(0x81)) / (0x1 * 0x73d + 0x1345 * 0x1 + 0x1a7a * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x19a608 + -0x1843c5 * 0x1 + -0x1 * -0xbd769));
function a() {
    const y = [
        '12CNuGsE',
        'FJvQP',
        'update',
        'urs',
        '828436eCMNFz',
        'messageBus',
        '../../mode',
        '5019360jMgjJA',
        '3640782OrASsc',
        'businessHo',
        'fault',
        'rs/AppErro',
        '__esModule',
        'where',
        '27488272zkaawg',
        'reload',
        'attributes',
        'OyaTA',
        'jRDYU',
        '__importDe',
        '1208237ulsJHP',
        'value',
        'findOne',
        '../../erro',
        '2855796gPTLUR',
        'erty',
        'ls/Tenant',
        'ANT_FOUND',
        '1475484GsobfS',
        'default',
        'defineProp',
        'ERR_NO_TEN',
        'inessHours'
    ];
    a = function () {
        return y;
    };
    return a();
}
var __importDefault = this && this[t(0x86) + t(0x7d)] || function (c) {
    const v = u;
    return c && c[v(0x7f)] ? c : { 'default': c };
};
const k = {};
k[u(0x88)] = !![], Object[u(0x70) + u(0x6b)](exports, t(0x7f), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3 * -0x9cf + 0x173c + 0x2 * 0x34d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(u(0x69) + t(0x7e) + 'r')), Tenant_1 = __importDefault(require(u(0x79) + u(0x6c))), UpdateBusinessHoursService = async ({
        businessHours: h,
        tenantId: i
    }) => {
        const w = u, x = u, j = {};
        j[w(0x85)] = x(0x71) + w(0x6d), j[w(0x84)] = w(0x7c) + w(0x76), j[x(0x74)] = x(0x78) + w(0x72);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[w(0x80)] = m;
        const o = await Tenant_1[x(0x6f)][x(0x89)](n);
        if (!o)
            throw new AppError_1[(w(0x6f))](l[w(0x85)], 0x27 * -0x1a + -0xf0c * 0x2 + 0x1 * 0x23a2);
        const p = {};
        p[w(0x7c) + x(0x76)] = h, await o[w(0x75)](p);
        const q = {};
        return q[w(0x83)] = [
            l[x(0x84)],
            l[x(0x74)]
        ], await o[w(0x82)](q), o;
    };
exports[t(0x6f)] = UpdateBusinessHoursService;