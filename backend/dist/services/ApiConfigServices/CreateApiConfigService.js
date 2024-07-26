'use strict';
const y = b, z = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xd83 + -0x6f0 + -0xd * 0x6d);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0x12d)) / (-0x1 * -0x16bd + 0x7b4 + -0x1e70) * (parseInt(x(0x11a)) / (-0x92e * 0x3 + 0x85b + 0x1331 * 0x1)) + -parseInt(x(0x10e)) / (0x47b * 0x3 + 0x16be + -0x242c) * (parseInt(x(0x120)) / (0x2142 + 0xd5a + -0xd5 * 0x38)) + -parseInt(w(0x12e)) / (0x25da + -0x1db + -0x23fa) + parseInt(w(0x10f)) / (-0x4d2 * -0x1 + -0x36 * 0x4f + -0x1f * -0x62) + parseInt(x(0x130)) / (-0xb48 + 0x1216 + 0x6c7 * -0x1) * (parseInt(x(0x113)) / (0x1c * 0x26 + -0x572 * -0x1 + -0x992)) + parseInt(x(0x12b)) / (0x419 * -0x1 + 0xbe * 0xf + -0x700) * (-parseInt(w(0x115)) / (0x9de + 0xbf8 + -0x15cc)) + parseInt(w(0x125)) / (-0x1bbf + -0x1560 + 0x312a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x42990 + 0xd6f60 + 0x1 * -0x3168));
var __importDefault = this && this[y(0x10d) + y(0x112)] || function (c) {
    const A = y;
    return c && c[A(0x11e)] ? c : { 'default': c };
};
const k = {};
function a() {
    const D = [
        'admin',
        'create',
        '../../conf',
        '16468309RIfpuc',
        'name',
        'Vdvlg',
        'erty',
        'userId',
        '730d',
        '6318657ultqAM',
        'value',
        '102idHLSC',
        '965165WnPFjJ',
        'sign',
        '7KRrYLA',
        '../../mode',
        'urlMessage',
        'ls/ApiConf',
        'tenantId',
        '__importDe',
        '3rDnxiC',
        '1715550uXzdHw',
        'xSDeT',
        'authToken',
        'fault',
        '457712bDiDxk',
        'Status',
        '10MkiLeZ',
        'ig/auth',
        'profile',
        'urlService',
        'sessionId',
        '4246wtimAE',
        'token',
        'jsonwebtok',
        'default',
        '__esModule',
        'expiresIn',
        '2266600GTtWHl',
        'defineProp'
    ];
    a = function () {
        return D;
    };
    return a();
}
k[z(0x12c)] = !![], Object[y(0x121) + y(0x128)](exports, y(0x11e), k);
const jsonwebtoken_1 = require(y(0x11c) + 'en'), ApiConfig_1 = __importDefault(require(y(0x131) + y(0x10b) + 'ig')), auth_1 = __importDefault(require(z(0x124) + z(0x116))), CreateApiConfigService = async ({
        name: g,
        sessionId: h,
        urlServiceStatus: i,
        urlMessageStatus: j,
        userId: l,
        authToken: m,
        tenantId: n
    }) => {
        const B = y, C = z, o = {};
        o[B(0x127)] = B(0x122), o[C(0x110)] = C(0x12a);
        const p = o, {secret: q} = auth_1[B(0x11d)], r = {};
        r[B(0x10c)] = n, r[C(0x117)] = p[C(0x127)], r[B(0x119)] = h;
        const s = {};
        s[C(0x11f)] = p[C(0x110)];
        const t = (-0x2409 + 0x14ea + -0x4f * -0x31, jsonwebtoken_1[B(0x12f)])(r, q, s), u = {};
        u[C(0x126)] = g, u[B(0x119)] = h, u[B(0x11b)] = t, u[B(0x111)] = m, u[C(0x118) + B(0x114)] = i, u[C(0x10a) + C(0x114)] = j, u[C(0x129)] = l, u[B(0x10c)] = n;
        const v = await ApiConfig_1[C(0x11d)][B(0x123)](u);
        return v;
    };
exports[z(0x11d)] = CreateApiConfigService;