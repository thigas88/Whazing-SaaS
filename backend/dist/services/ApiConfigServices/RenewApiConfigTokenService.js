'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x72)) / (0x1c81 + -0xfc5 + -0x1 * 0xcbb) + -parseInt(t(0x65)) / (-0x1383 + 0x12b7 * 0x1 + -0x2 * -0x67) * (-parseInt(t(0x8a)) / (-0x5 * 0x7b9 + -0xb * 0x40 + 0x8 * 0x52c)) + -parseInt(t(0x89)) / (-0x1 * -0xba5 + -0x22be + 0x171d) * (-parseInt(s(0x86)) / (0x2705 * -0x1 + -0x1 * -0x6e2 + 0x2028)) + parseInt(s(0x79)) / (-0x1a0a + 0x2048 + -0x638) + -parseInt(t(0x7f)) / (0x2d2 + 0x485 + -0x138 * 0x6) * (-parseInt(t(0x7b)) / (-0x1557 + -0x1 * 0x1a03 + 0x2f62)) + parseInt(s(0x6a)) / (0x101c + -0x2245 + 0x919 * 0x2) + -parseInt(s(0x66)) / (0x266a + -0x486 + -0x21da);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1c923 + -0x45f45 + 0x2a4e8 * 0x2));
var __importDefault = this && this[u(0x6b) + v(0x7d)] || function (c) {
    const w = v;
    return c && c[w(0x80)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x208f * 0x1 + -0x1bc4 + 0x3cb8);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[u(0x8c)] = !![], Object[v(0x6d) + v(0x8b)](exports, v(0x80), k);
const jsonwebtoken_1 = require(u(0x7a) + 'en'), ApiConfig_1 = __importDefault(require(v(0x71) + u(0x88) + 'ig')), auth_1 = __importDefault(require(u(0x7c) + u(0x77))), AppError_1 = __importDefault(require(u(0x85) + u(0x6e) + 'r')), RenewApiConfigTokenService = async ({
        apiId: g,
        sessionId: h,
        tenantId: i
    }) => {
        const x = u, y = v, j = {};
        j[x(0x75)] = y(0x74) + x(0x78) + y(0x7e), j[x(0x84)] = y(0x82), j[x(0x6f)] = y(0x73);
        const l = j, {secret: m} = auth_1[y(0x68)], n = await ApiConfig_1[y(0x68)][y(0x87)](g);
        if (!n)
            throw new AppError_1[(x(0x68))](l[x(0x75)], -0x2af + -0xb5c + 0xf9f);
        const o = {};
        o[y(0x6c)] = i, o[x(0x76)] = l[x(0x84)], o[x(0x70)] = h;
        const p = {};
        p[x(0x81)] = l[x(0x6f)];
        const q = (-0x320 * -0x2 + 0x458 * 0x2 + -0x10 * 0xef, jsonwebtoken_1[y(0x69)])(o, m, p), r = {};
        return r[x(0x67)] = q, n[y(0x83)](r), n[y(0x8d)](), n;
    };
exports[u(0x68)] = RenewApiConfigTokenService;
function a() {
    const z = [
        'ls/ApiConf',
        '4JFEGAm',
        '3RKtYyZ',
        'erty',
        'value',
        'reload',
        '491072HvvRPg',
        '4100560Azkljo',
        'token',
        'default',
        'sign',
        '1692486yytUpd',
        '__importDe',
        'tenantId',
        'defineProp',
        'rs/AppErro',
        'ZePuA',
        'sessionId',
        '../../mode',
        '60175xoWNBw',
        '730d',
        'ERR_API_CO',
        'pLnuz',
        'profile',
        'ig/auth',
        'NFIG_NOT_F',
        '1093272femnBv',
        'jsonwebtok',
        '69144saPVYN',
        '../../conf',
        'fault',
        'OUND',
        '21aAOOLn',
        '__esModule',
        'expiresIn',
        'admin',
        'update',
        'Nxlck',
        '../../erro',
        '27850OSprMI',
        'findByPk'
    ];
    a = function () {
        return z;
    };
    return a();
}