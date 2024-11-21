'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0x181)) / (0xf * -0x193 + 0x1b74 + -0x1 * 0x3d6) + -parseInt(t(0x182)) / (-0x1a * 0x15d + 0x1d * 0x141 + 0xe9 * -0x1) + parseInt(s(0x186)) / (0x3 * -0x2d7 + -0x85e + 0x10e6) + parseInt(s(0x185)) / (0x1c * 0xa2 + 0xe12 * 0x2 + -0x2dd8) * (parseInt(t(0x172)) / (-0x13 * 0x1f9 + 0x51 * -0x13 + 0x2b83)) + parseInt(s(0x16f)) / (0x22ff * 0x1 + 0x1d26 + -0x401f) * (parseInt(t(0x175)) / (-0x1f6 * 0x9 + 0xf * -0x1b0 + -0x1 * -0x2afd)) + parseInt(s(0x178)) / (0x141c + -0x1 * -0x9e8 + -0x1dfc) * (parseInt(t(0x191)) / (-0x221b + 0x22a9 + -0x85)) + parseInt(t(0x17e)) / (0x24f3 + -0x3d * -0x5f + -0x3b8c) * (-parseInt(t(0x18c)) / (-0x24 * -0xee + 0x33 * 0x67 + -0x35f2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6881f * -0x3 + 0x29935 * -0x5 + 0x2113 * 0x159));
var __importDefault = this && this[u(0x17f) + v(0x17b)] || function (c) {
    const w = u;
    return c && c[w(0x17a)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x223d + -0x5cf * -0x1 + -0x1ddd * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[u(0x184)] = !![], Object[v(0x179) + v(0x174)](exports, u(0x17a), k);
const jsonwebtoken_1 = require(u(0x180) + 'en'), ApiConfig_1 = __importDefault(require(u(0x17d) + u(0x198) + 'ig')), auth_1 = __importDefault(require(u(0x197) + u(0x190))), AppError_1 = __importDefault(require(u(0x18e) + u(0x18a) + 'r')), RenewApiConfigTokenService = async ({
        apiId: g,
        sessionId: h,
        tenantId: i
    }) => {
        const x = v, y = v, j = {};
        j[x(0x18d)] = y(0x194) + x(0x187) + x(0x189), j[x(0x188)] = x(0x183), j[y(0x177)] = y(0x193);
        const l = j, {secret: m} = auth_1[x(0x195)], n = await ApiConfig_1[x(0x195)][x(0x192)](g);
        if (!n)
            throw new AppError_1[(x(0x195))](l[x(0x18d)], 0x228b * 0x1 + -0x2689 + 0x592 * 0x1);
        const o = {};
        o[y(0x176)] = i, o[y(0x173)] = l[y(0x188)], o[y(0x196)] = h;
        const p = {};
        p[y(0x171)] = l[x(0x177)];
        const q = (0x1 * 0x2550 + 0x6ea + 0x14d * -0x22, jsonwebtoken_1[y(0x170)])(o, m, p), r = {};
        return r[x(0x18f)] = q, n[y(0x17c)](r), n[x(0x18b)](), n;
    };
exports[v(0x195)] = RenewApiConfigTokenService;
function a() {
    const z = [
        'default',
        'sessionId',
        '../../conf',
        'ls/ApiConf',
        '18POGkQN',
        'sign',
        'expiresIn',
        '5vurijp',
        'profile',
        'erty',
        '861455RTBhwj',
        'tenantId',
        'yzREC',
        '5432EupIIy',
        'defineProp',
        '__esModule',
        'fault',
        'update',
        '../../mode',
        '14100GYDbxi',
        '__importDe',
        'jsonwebtok',
        '1440115yvqRor',
        '2816726YwaImA',
        'admin',
        'value',
        '325628sUEKEb',
        '816846dVoZBL',
        'NFIG_NOT_F',
        'bhgYJ',
        'OUND',
        'rs/AppErro',
        'reload',
        '5401nusKSB',
        'UtDfn',
        '../../erro',
        'token',
        'ig/auth',
        '9585lMiXSh',
        'findByPk',
        '730d',
        'ERR_API_CO'
    ];
    a = function () {
        return z;
    };
    return a();
}