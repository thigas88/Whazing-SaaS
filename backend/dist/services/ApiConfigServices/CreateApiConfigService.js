'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0x1a0)) / (-0x11b * -0x4 + -0x11cb + 0x8 * 0x1ac) * (-parseInt(w(0x19f)) / (0x225d * -0x1 + -0x2318 + 0x4577)) + -parseInt(x(0x1ae)) / (0x1 * -0xd4f + 0xd3b * 0x2 + -0xd24) + -parseInt(w(0x1b8)) / (0xd01 + -0x7 * 0x2b7 + 0x604) + -parseInt(x(0x1be)) / (-0x20c2 + 0xd3 * 0x2f + -0x6d * 0xe) + -parseInt(x(0x1c4)) / (0xa6f * 0x3 + 0x7d0 + -0x2717 * 0x1) * (-parseInt(w(0x1a7)) / (0x1 * -0x168d + 0xc * 0x305 + -0x1 * 0xda8)) + parseInt(x(0x1a3)) / (-0x1051 * 0x1 + -0x6e9 * -0x3 + -0x462) * (parseInt(w(0x1b5)) / (-0x3 * -0x90f + -0xbf * 0x5 + -0x1769)) + parseInt(w(0x1a2)) / (-0x6e2 + -0x1c46 + 0x2332) * (parseInt(w(0x1a8)) / (-0x76e + -0x24bc + 0x2c35 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xbd2c3 + 0x1 * 0xd7b2b + -0xaf78c));
var __importDefault = this && this[y(0x1ac) + y(0x1b0)] || function (c) {
    const A = y;
    return c && c[A(0x1b3)] ? c : { 'default': c };
};
function a() {
    const D = [
        'expiresIn',
        '__importDe',
        'sign',
        '5266638unlslN',
        'value',
        'fault',
        '../../conf',
        'userId',
        '__esModule',
        'urlService',
        '115353LtJQuH',
        'jsonwebtok',
        'authToken',
        '7301056LpaJjM',
        'urlMessage',
        '730d',
        'ig/auth',
        'defineProp',
        'token',
        '7920820OvppEU',
        'Status',
        'POnxC',
        'erty',
        'sessionId',
        'create',
        '914676tFdNMO',
        'default',
        'NIorx',
        '28430ZIPIRq',
        '25Mesphq',
        'tenantId',
        '3380nirqRp',
        '568AddyVA',
        'name',
        '../../mode',
        'ls/ApiConf',
        '56DuATfF',
        '117799RkyYQB',
        'admin',
        'profile'
    ];
    a = function () {
        return D;
    };
    return a();
}
const k = {};
k[y(0x1af)] = !![], Object[z(0x1bc) + y(0x1c1)](exports, y(0x1b3), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1e12 + 0x1cd * 0x9 + -0x2ca8);
        let h = e[f];
        return h;
    }, b(c, d);
}
const jsonwebtoken_1 = require(y(0x1b6) + 'en'), ApiConfig_1 = __importDefault(require(z(0x1a5) + z(0x1a6) + 'ig')), auth_1 = __importDefault(require(z(0x1b1) + y(0x1bb))), CreateApiConfigService = async ({
        name: g,
        sessionId: h,
        urlServiceStatus: i,
        urlMessageStatus: j,
        userId: l,
        authToken: m,
        tenantId: n
    }) => {
        const B = y, C = y, o = {};
        o[B(0x1c0)] = C(0x1a9), o[C(0x1c6)] = C(0x1ba);
        const p = o, {secret: q} = auth_1[C(0x1c5)], r = {};
        r[C(0x1a1)] = n, r[B(0x1aa)] = p[B(0x1c0)], r[C(0x1c2)] = h;
        const s = {};
        s[B(0x1ab)] = p[C(0x1c6)];
        const t = (-0x8da + 0x6b7 + 0x223 * 0x1, jsonwebtoken_1[C(0x1ad)])(r, q, s), u = {};
        u[B(0x1a4)] = g, u[C(0x1c2)] = h, u[B(0x1bd)] = t, u[C(0x1b7)] = m, u[C(0x1b4) + C(0x1bf)] = i, u[B(0x1b9) + C(0x1bf)] = j, u[C(0x1b2)] = l, u[B(0x1a1)] = n;
        const v = await ApiConfig_1[B(0x1c5)][C(0x1c3)](u);
        return v;
    };
exports[z(0x1c5)] = CreateApiConfigService;