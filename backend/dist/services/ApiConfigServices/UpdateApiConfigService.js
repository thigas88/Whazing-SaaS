'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x18e)) / (0x4c7 + 0x7 * 0x11 + 0x53d * -0x1) * (parseInt(x(0x1b3)) / (0x1b41 + 0x10 * 0x229 + -0x3dcf)) + parseInt(x(0x196)) / (0x71 * 0x58 + 0x7 * -0x131 + -0x1e7e) * (-parseInt(x(0x194)) / (0xaa5 + 0x1 * -0x107e + 0x5dd)) + parseInt(y(0x1ae)) / (-0x18c6 + 0x631 + 0x129a) + -parseInt(y(0x1a9)) / (0x80a + 0x17 * 0x13d + -0x247f * 0x1) * (-parseInt(x(0x1b1)) / (-0xb * 0x2aa + 0x15cf + 0x1 * 0x786)) + -parseInt(y(0x1a5)) / (-0x13c * -0xd + 0x2ad + -0x3bd * 0x5) * (-parseInt(x(0x192)) / (0x7 * -0x47 + 0x1a68 + -0x186e)) + -parseInt(y(0x199)) / (0x8 * -0x4a8 + 0x65 * 0xa + 0x2 * 0x10ac) + parseInt(y(0x191)) / (0x1 * 0x676 + 0x59 * -0x59 + 0x1886);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xd81 * -0x6d + 0x4 * -0x14a82 + -0x5 * -0x14216));
var __importDefault = this && this[z(0x1a6) + z(0x1a3)] || function (c) {
    const B = A;
    return c && c[B(0x1ac)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x14c2 + 0x1 * -0x12c9 + -0x6b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[z(0x1b2)] = !![], Object[A(0x1aa) + z(0x1ab)](exports, A(0x1ac), k);
const AppError_1 = __importDefault(require(z(0x1af) + z(0x19f) + 'r')), ApiConfig_1 = __importDefault(require(z(0x197) + z(0x1a0) + 'ig')), UpdateApiConfigService = async ({
        apiData: g,
        apiId: h,
        tenantId: i
    }) => {
        const C = A, D = A, j = {};
        j[C(0x18f)] = D(0x19b) + C(0x19e) + C(0x1a4);
        const l = j, m = {};
        m['id'] = h, m[C(0x1ad)] = i;
        const n = {};
        n[D(0x195)] = m;
        const o = await ApiConfig_1[C(0x1b4)][D(0x19d)](n);
        if (!o)
            throw new AppError_1[(D(0x1b4))](l[C(0x18f)], 0x37 + -0xf * 0x1b + 0x2f2);
        const {
                name: p,
                sessionId: q,
                urlServiceStatus: r,
                urlMessageStatus: s,
                userId: t,
                authToken: u,
                isActive: v
            } = g, w = {};
        return w[D(0x19a)] = p, w[D(0x1a2)] = q, w[C(0x198) + C(0x1b0)] = r, w[C(0x190) + C(0x1b0)] = s, w[D(0x193)] = t, w[D(0x1a1)] = u, w[C(0x1a8)] = v, await o[C(0x19c)](w), await o[D(0x1a7)](), o;
    };
exports[A(0x1b4)] = UpdateApiConfigService;
function a() {
    const E = [
        'rs/AppErro',
        'ls/ApiConf',
        'authToken',
        'sessionId',
        'fault',
        'OUND',
        '472RSKPFl',
        '__importDe',
        'reload',
        'isActive',
        '6wTwhaP',
        'defineProp',
        'erty',
        '__esModule',
        'tenantId',
        '2950965pGOLZV',
        '../../erro',
        'Status',
        '2389408oPEpWh',
        'value',
        '44oSZgkj',
        'default',
        '37660mtJFdZ',
        'JBOua',
        'urlMessage',
        '5561457nioeLa',
        '85122ExvNgL',
        'userId',
        '8PKnAPz',
        'where',
        '763473PuYMiN',
        '../../mode',
        'urlService',
        '2070010qgZRZL',
        'name',
        'ERR_API_CO',
        'update',
        'findOne',
        'NFIG_NOT_F'
    ];
    a = function () {
        return E;
    };
    return a();
}