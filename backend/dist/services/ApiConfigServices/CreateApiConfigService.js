'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0xd8)) / (0x22db + -0x1807 + -0xad3) * (parseInt(x(0xc1)) / (-0x2375 + -0x19d + 0x54 * 0x71)) + -parseInt(w(0xc3)) / (-0x21a0 + 0x122c + -0xf77 * -0x1) + parseInt(w(0xc6)) / (0x1 * -0x23e + -0x13a7 + -0x15e9 * -0x1) + parseInt(x(0xd7)) / (-0x1712 + -0x1612 + -0x1 * -0x2d29) + -parseInt(x(0xd4)) / (0x295 * -0x5 + 0x7e0 * 0x4 + -0x1291) * (parseInt(x(0xce)) / (0x1430 + -0x992 + -0xa97)) + parseInt(w(0xd6)) / (0x10 * 0x10d + -0x244c * -0x1 + -0x1a8a * 0x2) + parseInt(x(0xcc)) / (-0xb * 0x2b3 + 0x18 * 0x3e + 0x17ea);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x177d3 * -0x1 + -0x52f * 0xb + 0x3dba3));
function a() {
    const D = [
        '2327868EGjQlr',
        'Status',
        '497yiObUT',
        'ls/ApiConf',
        'urlService',
        'tenantId',
        'expiresIn',
        'sign',
        '15654QLxLwH',
        'create',
        '1314576WPfVHP',
        '270835PUKKLy',
        '87CtrTVz',
        '730d',
        'name',
        '__esModule',
        'YIZcm',
        'admin',
        'fntHF',
        'sessionId',
        'profile',
        'userId',
        'jsonwebtok',
        'default',
        'fault',
        '__importDe',
        'urlMessage',
        '1244plyrsN',
        'token',
        '293952HhVPot',
        'erty',
        '../../mode',
        '8892mxDUSS',
        '../../conf',
        'value',
        'defineProp',
        'authToken',
        'ig/auth'
    ];
    a = function () {
        return D;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3e6 + 0x1c3 * 0x6 + -0x2f * 0x4b);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[y(0xbf) + y(0xbe)] || function (c) {
    const A = z;
    return c && c[A(0xb5)] ? c : { 'default': c };
};
const k = {};
k[y(0xc8)] = !![], Object[y(0xc9) + y(0xc4)](exports, z(0xb5), k);
const jsonwebtoken_1 = require(y(0xbc) + 'en'), ApiConfig_1 = __importDefault(require(y(0xc5) + y(0xcf) + 'ig')), auth_1 = __importDefault(require(z(0xc7) + z(0xcb))), CreateApiConfigService = async ({
        name: g,
        sessionId: h,
        urlServiceStatus: i,
        urlMessageStatus: j,
        userId: l,
        authToken: m,
        tenantId: n
    }) => {
        const B = y, C = y, o = {};
        o[B(0xb6)] = C(0xb7), o[B(0xb8)] = C(0xb3);
        const p = o, {secret: q} = auth_1[C(0xbd)], r = {};
        r[C(0xd1)] = n, r[B(0xba)] = p[B(0xb6)], r[C(0xb9)] = h;
        const s = {};
        s[C(0xd2)] = p[C(0xb8)];
        const t = (0x3 * -0xb85 + 0xc4d + 0x206 * 0xb, jsonwebtoken_1[B(0xd3)])(r, q, s), u = {};
        u[B(0xb4)] = g, u[B(0xb9)] = h, u[C(0xc2)] = t, u[C(0xca)] = m, u[B(0xd0) + C(0xcd)] = i, u[B(0xc0) + B(0xcd)] = j, u[B(0xbb)] = l, u[C(0xd1)] = n;
        const v = await ApiConfig_1[C(0xbd)][C(0xd5)](u);
        return v;
    };
exports[y(0xbd)] = CreateApiConfigService;