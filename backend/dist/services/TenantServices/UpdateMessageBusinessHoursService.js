'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1f8e + 0x172d * 0x1 + 0x9aa);
        let h = e[f];
        return h;
    }, b(c, d);
}
const t = b, u = b;
function a() {
    const y = [
        '1NTgiqn',
        '../../erro',
        'Qgvyb',
        'update',
        '9052720nOeeNy',
        'value',
        'ls/Tenant',
        '1049166EuWaCX',
        'default',
        '6334517BiMpkG',
        '__importDe',
        'ZkpkJ',
        'inessHours',
        '347294AggBXn',
        'attributes',
        'fault',
        'rs/AppErro',
        'ANT_FOUND',
        '__esModule',
        'defineProp',
        '81860kYZupT',
        'ERR_NO_TEN',
        'businessHo',
        'where',
        '2434344wnXbgH',
        'erty',
        '../../mode',
        'eYEHX',
        '2726510uQStlH',
        '100nFqHcg',
        'urs',
        'messageBus',
        'findOne',
        'reload',
        '45eCCLto'
    ];
    a = function () {
        return y;
    };
    return a();
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x16b)) / (0x3b * 0x6d + 0xb7c + -0x752 * 0x5) * (-parseInt(r(0x155)) / (-0x1 * -0xa9f + -0x10cf + 0x632)) + -parseInt(r(0x160)) / (-0x1c0b + -0x1fc6 * 0x1 + 0xef5 * 0x4) + parseInt(s(0x165)) / (-0x1d6f + 0x1 * -0x1957 + 0x36ca) * (parseInt(r(0x15c)) / (-0x2155 + -0x2510 + -0x2335 * -0x2)) + -parseInt(r(0x14f)) / (0x1 * 0x19cf + 0x305 + -0x1 * 0x1cce) + -parseInt(r(0x151)) / (0x177b + -0x102 * -0xa + -0x2188) + parseInt(s(0x14c)) / (0x263c + 0xc6f + -0x1 * 0x32a3) + parseInt(s(0x16a)) / (-0x503 + 0x3 * -0x5ab + 0x5 * 0x469) * (parseInt(s(0x164)) / (-0x164 * 0x12 + -0x6f3 + 0x2005));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1030a1 + -0x171a * -0x1f + 0x1a32d5));
var __importDefault = this && this[t(0x152) + u(0x157)] || function (c) {
    const v = t;
    return c && c[v(0x15a)] ? c : { 'default': c };
};
const k = {};
k[t(0x14d)] = !![], Object[t(0x15b) + u(0x161)](exports, u(0x15a), k);
const AppError_1 = __importDefault(require(u(0x149) + u(0x158) + 'r')), Tenant_1 = __importDefault(require(t(0x162) + t(0x14e))), UpdateMessageBusinessHoursService = async ({
        messageBusinessHours: h,
        tenantId: i
    }) => {
        const w = t, x = u, j = {};
        j[w(0x153)] = x(0x15d) + x(0x159), j[w(0x14a)] = x(0x15e) + x(0x166), j[x(0x163)] = w(0x167) + w(0x154);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[w(0x15f)] = m;
        const o = await Tenant_1[x(0x150)][x(0x168)](n);
        if (!o)
            throw new AppError_1[(w(0x150))](l[w(0x153)], -0x15bf + -0x8d0 + 0x2023);
        const p = {};
        p[x(0x167) + w(0x154)] = h, await o[w(0x14b)](p);
        const q = {};
        return q[x(0x156)] = [
            l[x(0x14a)],
            l[x(0x163)]
        ], await o[w(0x169)](q), o;
    };
exports[t(0x150)] = UpdateMessageBusinessHoursService;