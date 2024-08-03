'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0x1d0)) / (-0xd00 + 0x1 * -0x18d7 + 0x7 * 0x568) * (-parseInt(x(0x1d9)) / (0x26ac + -0xd * -0x1fc + -0x4076)) + -parseInt(w(0x1e2)) / (-0x2494 + -0x90e + -0x2da5 * -0x1) * (parseInt(w(0x1c7)) / (0xae * 0x1b + 0x351 + -0x15a7 * 0x1)) + parseInt(x(0x1dd)) / (0xc50 + -0x2568 + 0x191d) + -parseInt(w(0x1d4)) / (0x2b1 + 0x1087 * -0x1 + 0xddc) + parseInt(w(0x1c0)) / (-0x2 * 0xb2d + -0x3a0 + 0x1a01) * (parseInt(x(0x1e6)) / (0x228d + -0x9 * -0x3fb + 0x2 * -0x232c)) + parseInt(x(0x1d3)) / (-0x240b + -0x16de + 0x9d3 * 0x6) + -parseInt(w(0x1db)) / (0x3e1 * 0x7 + -0x1 * -0x14c2 + -0x2fdf);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x334d3 + -0x840a0 + 0xfcda9));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xea2 + 0x214 + -0xef6);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[y(0x1cd) + z(0x1c9)] || function (c) {
    const A = z;
    return c && c[A(0x1cb)] ? c : { 'default': c };
};
const k = {};
k[z(0x1c8)] = !![], Object[z(0x1d1) + y(0x1d8)](exports, y(0x1cb), k);
function a() {
    const D = [
        '40SftItT',
        '396067iNCqgX',
        '../../conf',
        'Status',
        'DQvaa',
        'CaSfv',
        '../../mode',
        'token',
        '2036IrzJbM',
        'value',
        'fault',
        'tenantId',
        '__esModule',
        'authToken',
        '__importDe',
        'ig/auth',
        'urlMessage',
        '1DWFYrF',
        'defineProp',
        'userId',
        '1337670CJzRfR',
        '91836uaaMZZ',
        'expiresIn',
        'create',
        'profile',
        'erty',
        '410052uApnym',
        'ls/ApiConf',
        '3467540YwCSFW',
        'name',
        '1033495msHZjH',
        'jsonwebtok',
        'admin',
        '730d',
        'sessionId',
        '1158DOgXJK',
        'default',
        'urlService',
        'sign'
    ];
    a = function () {
        return D;
    };
    return a();
}
const jsonwebtoken_1 = require(z(0x1de) + 'en'), ApiConfig_1 = __importDefault(require(y(0x1c5) + y(0x1da) + 'ig')), auth_1 = __importDefault(require(y(0x1c1) + z(0x1ce))), CreateApiConfigService = async ({
        name: g,
        sessionId: h,
        urlServiceStatus: i,
        urlMessageStatus: j,
        userId: l,
        authToken: m,
        tenantId: n
    }) => {
        const B = y, C = z, o = {};
        o[B(0x1c4)] = B(0x1df), o[B(0x1c3)] = C(0x1e0);
        const p = o, {secret: q} = auth_1[C(0x1e3)], r = {};
        r[B(0x1ca)] = n, r[C(0x1d7)] = p[B(0x1c4)], r[B(0x1e1)] = h;
        const s = {};
        s[B(0x1d5)] = p[B(0x1c3)];
        const t = (0x3 * 0x1b7 + -0x26a1 + 0x217c, jsonwebtoken_1[C(0x1e5)])(r, q, s), u = {};
        u[C(0x1dc)] = g, u[C(0x1e1)] = h, u[B(0x1c6)] = t, u[C(0x1cc)] = m, u[B(0x1e4) + B(0x1c2)] = i, u[C(0x1cf) + B(0x1c2)] = j, u[C(0x1d2)] = l, u[C(0x1ca)] = n;
        const v = await ApiConfig_1[C(0x1e3)][B(0x1d6)](u);
        return v;
    };
exports[z(0x1e3)] = CreateApiConfigService;