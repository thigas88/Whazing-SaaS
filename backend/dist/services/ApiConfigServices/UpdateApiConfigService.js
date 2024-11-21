'use strict';
function a() {
    const E = [
        '__importDe',
        'userId',
        'Status',
        'fault',
        'value',
        'authToken',
        '40566PjiZwL',
        'default',
        'urlService',
        'sessionId',
        'isActive',
        'OQkvr',
        'OUND',
        'reload',
        'ERR_API_CO',
        '47hZNrLS',
        'ls/ApiConf',
        'urlMessage',
        '5087700qjkELA',
        'where',
        'rs/AppErro',
        '126052ZIOTEa',
        '../../mode',
        'findOne',
        '14ptMQzJ',
        '__esModule',
        'defineProp',
        '2081718jBlKag',
        '11773610kLYhlq',
        'update',
        'erty',
        'NFIG_NOT_F',
        '1422918uGWmWP',
        '90vCsHJV',
        'tenantId',
        '1566592JEskAK',
        '../../erro',
        'name'
    ];
    a = function () {
        return E;
    };
    return a();
}
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x8c)) / (-0x1 * 0x153e + 0xf5b * 0x1 + 0x5e4) * (parseInt(y(0x83)) / (-0x7d * 0x35 + 0x17ee + -0x1f5 * -0x1)) + parseInt(y(0x72)) / (-0x1 * 0x13d7 + 0x194d + -0x573) + parseInt(x(0x92)) / (0x1 * -0x220a + 0x23d0 + -0x1c2) * (-parseInt(x(0x78)) / (0x1 * -0x24db + 0x2 * -0xd8a + 0x3ff4)) + parseInt(y(0x77)) / (-0x2083 + -0xe51 + 0x2eda) * (-parseInt(x(0x95)) / (-0x491 + 0x1 * 0x441 + 0x57)) + parseInt(y(0x7a)) / (0x17ec * 0x1 + -0x1d1c + -0x1 * -0x538) + parseInt(x(0x8f)) / (-0x2199 + 0x20 * -0xdd + 0x2 * 0x1ea1) + parseInt(x(0x73)) / (-0x2f * 0x29 + -0xac7 + 0x1258);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7979 * 0x3 + -0xa9930 + 0x15c009));
var __importDefault = this && this[z(0x7d) + A(0x80)] || function (c) {
    const B = A;
    return c && c[B(0x96)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xc3e + 0x1c55 + -0x1 * 0x2821);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[A(0x81)] = !![], Object[z(0x97) + z(0x75)](exports, A(0x96), k);
const AppError_1 = __importDefault(require(A(0x7b) + z(0x91) + 'r')), ApiConfig_1 = __importDefault(require(z(0x93) + z(0x8d) + 'ig')), UpdateApiConfigService = async ({
        apiData: g,
        apiId: h,
        tenantId: i
    }) => {
        const C = A, D = A, j = {};
        j[C(0x88)] = C(0x8b) + D(0x76) + C(0x89);
        const l = j, m = {};
        m['id'] = h, m[D(0x79)] = i;
        const n = {};
        n[C(0x90)] = m;
        const o = await ApiConfig_1[D(0x84)][D(0x94)](n);
        if (!o)
            throw new AppError_1[(D(0x84))](l[C(0x88)], -0x2360 * -0x1 + 0x1ca7 + -0x3e73);
        const {
                name: p,
                sessionId: q,
                urlServiceStatus: r,
                urlMessageStatus: s,
                userId: t,
                authToken: u,
                isActive: v
            } = g, w = {};
        return w[D(0x7c)] = p, w[C(0x86)] = q, w[D(0x85) + D(0x7f)] = r, w[C(0x8e) + D(0x7f)] = s, w[C(0x7e)] = t, w[D(0x82)] = u, w[C(0x87)] = v, await o[D(0x74)](w), await o[C(0x8a)](), o;
    };
exports[z(0x84)] = UpdateApiConfigService;