'use strict';
const t = b, u = b;
function a() {
    const y = [
        'NJbWK',
        '6536070WtJKlB',
        'ls/Tenant',
        '632310NZNaop',
        'findOne',
        '24Jmcvlv',
        'erty',
        'attributes',
        '__importDe',
        '9176560ArLlzy',
        '__esModule',
        'reload',
        'messageBus',
        'BFqCD',
        'where',
        'businessHo',
        '7XZvsLb',
        'rs/AppErro',
        'urs',
        'inessHours',
        '../../erro',
        '413908ZWzzli',
        '../../mode',
        '37792nWkKHM',
        '21LGLVdp',
        'ERR_NO_TEN',
        'dcGww',
        'ANT_FOUND',
        'defineProp',
        'value',
        'update',
        '809124BeEIZp',
        'fault',
        '541785vlRAwd',
        'default'
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
            const f = parseInt(r(0x72)) / (-0xf59 * 0x2 + 0x1dc5 + 0xee) * (parseInt(r(0x79)) / (0x158c + 0x59 * 0x59 + -0x347b)) + parseInt(r(0x7a)) / (-0x10a3 + -0x7a * -0x22 + -0x72 * -0x1) * (parseInt(r(0x77)) / (0x2 * 0x8aa + -0x198e + 0xd3 * 0xa)) + parseInt(s(0x83)) / (0x13 * -0x181 + -0x1eb7 + 0x3b4f) + -parseInt(r(0x81)) / (-0x22c9 + -0xa2 * 0x17 + 0x315d) + -parseInt(s(0x88)) / (-0x91d + -0x11d * -0x13 + -0x5 * 0x267) * (parseInt(r(0x8a)) / (0x5f5 + -0x1750 + 0x1 * 0x1163)) + parseInt(r(0x86)) / (-0x153c + 0x10 * 0x146 + 0xe5) + -parseInt(s(0x8e)) / (-0x1bdf + 0x10bb * -0x1 + 0x2ca4 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x646f7 + -0x31983 * 0x2 + 0xbb * 0x793));
var __importDefault = this && this[t(0x8d) + t(0x82)] || function (c) {
    const v = u;
    return c && c[v(0x8f)] ? c : { 'default': c };
};
const k = {};
k[u(0x7f)] = !![], Object[u(0x7e) + u(0x8b)](exports, t(0x8f), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xf35 + -0x6b * 0x5 + 0x14 * 0xe3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(u(0x76) + u(0x73) + 'r')), Tenant_1 = __importDefault(require(u(0x78) + u(0x87))), UpdateMessageBusinessHoursService = async ({
        messageBusinessHours: h,
        tenantId: i
    }) => {
        const w = t, x = u, j = {};
        j[w(0x85)] = w(0x7b) + x(0x7d), j[w(0x92)] = x(0x71) + x(0x74), j[x(0x7c)] = w(0x91) + x(0x75);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[x(0x70)] = m;
        const o = await Tenant_1[w(0x84)][x(0x89)](n);
        if (!o)
            throw new AppError_1[(w(0x84))](l[x(0x85)], 0x1034 + -0xa2c + -0x474);
        const p = {};
        p[x(0x91) + x(0x75)] = h, await o[w(0x80)](p);
        const q = {};
        return q[w(0x8c)] = [
            l[w(0x92)],
            l[x(0x7c)]
        ], await o[w(0x90)](q), o;
    };
exports[u(0x84)] = UpdateMessageBusinessHoursService;