'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x1a2)) / (0x3 * -0x7b1 + -0x2707 * 0x1 + 0x3e1b) + parseInt(s(0x19e)) / (0xb * -0xe5 + 0x1 * 0x1cb7 + 0x2b2 * -0x7) * (-parseInt(r(0x192)) / (-0x5 * 0x4fd + 0x43c * 0x1 + 0x14b8)) + -parseInt(s(0x186)) / (0x131 * -0x11 + 0xeb + 0x135a) * (parseInt(s(0x18b)) / (-0x2 * 0x35b + 0xd * -0x25 + 0x89c)) + -parseInt(r(0x18c)) / (-0x12b5 + -0x383 + 0x163e) * (parseInt(s(0x198)) / (-0xbfd * 0x3 + 0x2 * -0x404 + 0x2c06)) + parseInt(r(0x187)) / (0x9cc + 0xce7 * -0x3 + 0x1cf1) * (-parseInt(r(0x1a4)) / (-0x6b7 + 0x2559 + 0x45f * -0x7)) + parseInt(r(0x197)) / (-0x20f2 + -0x3a * 0x25 + -0x5 * -0x846) * (parseInt(r(0x188)) / (-0xec7 + -0x197e + 0x3c * 0xac)) + -parseInt(s(0x183)) / (0x1bd3 * 0x1 + 0x517 + -0x20de) * (-parseInt(s(0x18a)) / (-0xee8 + 0x1 * -0x15ff + 0x24f4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x117e * -0x2 + -0x235af + 0x56f0b));
function a() {
    const y = [
        '__importDe',
        'reload',
        'messageBus',
        'value',
        'ls/Tenant',
        '184QyJygN',
        'update',
        'defineProp',
        'fault',
        '290102YpHgcr',
        'default',
        '91107bfdsfp',
        'where',
        'findOne',
        'inessHours',
        'urs',
        '60tzuMAe',
        'rs/AppErro',
        'businessHo',
        '128KXypKU',
        '248hzUmJZ',
        '7117qHpuNd',
        'OZHTa',
        '3708458AflxTS',
        '1725URDFmj',
        '204VOQNQe',
        'attributes',
        '../../mode',
        '__esModule',
        'ERR_NO_TEN',
        'ANT_FOUND',
        '11598foKdFz',
        '../../erro',
        'erty',
        'MXIas',
        'HICbs',
        '10XOYpku',
        '52297nIBNvf'
    ];
    a = function () {
        return y;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x279 + 0x1a46 + -0x1b3c);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[t(0x199) + t(0x1a1)] || function (c) {
    const v = t;
    return c && c[v(0x18f)] ? c : { 'default': c };
};
const k = {};
k[t(0x19c)] = !![], Object[t(0x1a0) + t(0x194)](exports, u(0x18f), k);
const AppError_1 = __importDefault(require(u(0x193) + u(0x184) + 'r')), Tenant_1 = __importDefault(require(t(0x18e) + u(0x19d))), UpdateBusinessHoursService = async ({
        businessHours: h,
        tenantId: i
    }) => {
        const w = u, x = u, j = {};
        j[w(0x195)] = x(0x190) + x(0x191), j[w(0x189)] = x(0x185) + w(0x1a8), j[x(0x196)] = x(0x19b) + w(0x1a7);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[w(0x1a5)] = m;
        const o = await Tenant_1[x(0x1a3)][w(0x1a6)](n);
        if (!o)
            throw new AppError_1[(w(0x1a3))](l[x(0x195)], 0x26 * 0xda + 0xfd6 * -0x1 + 0x779 * -0x2);
        const p = {};
        p[x(0x185) + x(0x1a8)] = h, await o[x(0x19f)](p);
        const q = {};
        return q[w(0x18d)] = [
            l[x(0x189)],
            l[x(0x196)]
        ], await o[w(0x19a)](q), o;
    };
exports[t(0x1a3)] = UpdateBusinessHoursService;