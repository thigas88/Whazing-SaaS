'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0x185)) / (-0x1a11 + -0x185f + 0x3271) + -parseInt(w(0x18e)) / (-0x2f * -0x55 + -0x1536 + -0x1df * -0x3) * (parseInt(x(0x194)) / (0x16 + 0x4d3 + 0x2 * -0x273)) + -parseInt(w(0x18a)) / (0xc2 * 0x29 + -0x547 * -0x7 + -0x53b * 0xd) * (parseInt(w(0x196)) / (-0x2337 + 0x97e + 0x19be)) + -parseInt(w(0x193)) / (0xe4f + 0x22 * -0x1 + -0xe27) * (parseInt(w(0x1a9)) / (0x7fd * 0x3 + 0x1 * -0x1f98 + -0x14 * -0x62)) + parseInt(x(0x198)) / (-0x964 + -0xa63 * -0x1 + 0xd * -0x13) + -parseInt(w(0x1a7)) / (-0x1e2f + -0x167 * -0x1a + -0x63e) + parseInt(x(0x1a2)) / (0x1 * 0x353 + -0x31 + 0x12 * -0x2c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x289f * -0x3 + -0x6a6d * -0x9 + 0x37d9d));
var __importDefault = this && this[y(0x199) + z(0x19e)] || function (c) {
    const A = z;
    return c && c[A(0x18d)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1a9 + -0x1f * -0x7b + -0xbb7);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[z(0x1a4)] = !![], Object[z(0x18c) + y(0x18f)](exports, y(0x18d), k);
const jsonwebtoken_1 = require(z(0x187) + 'en'), ApiConfig_1 = __importDefault(require(y(0x1a0) + z(0x1a3) + 'ig')), auth_1 = __importDefault(require(y(0x19d) + z(0x1aa))), CreateApiConfigService = async ({
        name: g,
        sessionId: h,
        urlServiceStatus: i,
        urlMessageStatus: j,
        userId: l,
        authToken: m,
        tenantId: n
    }) => {
        const B = y, C = y, o = {};
        o[B(0x189)] = C(0x188), o[C(0x190)] = C(0x1ab);
        const p = o, {secret: q} = auth_1[B(0x19c)], r = {};
        r[C(0x19b)] = n, r[C(0x19f)] = p[B(0x189)], r[C(0x1a5)] = h;
        const s = {};
        s[B(0x19a)] = p[C(0x190)];
        const t = (-0x2ae + -0x1000 + 0x957 * 0x2, jsonwebtoken_1[B(0x1a8)])(r, q, s), u = {};
        u[B(0x18b)] = g, u[C(0x1a5)] = h, u[B(0x1a6)] = t, u[C(0x195)] = m, u[C(0x192) + C(0x191)] = i, u[C(0x1a1) + B(0x191)] = j, u[B(0x197)] = l, u[C(0x19b)] = n;
        const v = await ApiConfig_1[B(0x19c)][B(0x186)](u);
        return v;
    };
exports[y(0x19c)] = CreateApiConfigService;
function a() {
    const D = [
        '2SMsuKQ',
        'erty',
        'EDTwO',
        'Status',
        'urlService',
        '738288XGoZNs',
        '270000bKJtWb',
        'authToken',
        '95pFYBaO',
        'userId',
        '4510568slgoRg',
        '__importDe',
        'expiresIn',
        'tenantId',
        'default',
        '../../conf',
        'fault',
        'profile',
        '../../mode',
        'urlMessage',
        '19610260cTfwvr',
        'ls/ApiConf',
        'value',
        'sessionId',
        'token',
        '2991492ZMGPoW',
        'sign',
        '42QzMhxW',
        'ig/auth',
        '730d',
        '279751QhLgGf',
        'create',
        'jsonwebtok',
        'admin',
        'iySty',
        '121948IVurit',
        'name',
        'defineProp',
        '__esModule'
    ];
    a = function () {
        return D;
    };
    return a();
}