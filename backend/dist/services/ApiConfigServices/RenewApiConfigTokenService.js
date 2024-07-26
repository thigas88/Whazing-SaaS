'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x1e16 + -0x1e19 + -0xf * -0x418);
        let h = e[f];
        return h;
    }, b(c, d);
}
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0x160)) / (-0xfa9 * 0x1 + 0x2295 + -0x1 * 0x12eb) + -parseInt(t(0x14c)) / (0x403 * -0x4 + -0x3 * -0x90a + -0x3b * 0x30) * (parseInt(s(0x14d)) / (0x209 * -0xb + -0x1ed6 * -0x1 + -0x8 * 0x10e)) + parseInt(t(0x13f)) / (0xf36 + 0x1 * -0x1eb3 + -0x93 * -0x1b) + parseInt(s(0x159)) / (0x21ae + 0x3 * 0x7b3 + -0x1c61 * 0x2) + parseInt(t(0x15d)) / (-0x11 * 0xdf + 0xef * 0x2 + -0x1 * -0xcf7) * (-parseInt(t(0x139)) / (-0x6b * -0x29 + 0xf * -0x7e + -0x5 * 0x1f2)) + parseInt(t(0x14a)) / (0x20a3 + 0x2ad + 0x8d2 * -0x4) + parseInt(s(0x13a)) / (0x1 * 0x5c9 + -0x4 * -0x949 + -0x225 * 0x14) * (-parseInt(t(0x151)) / (-0x8cc * -0x2 + -0x12a7 + 0x1 * 0x119));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3c41d + -0x1 * 0x14b093 + 0x1d30de));
var __importDefault = this && this[u(0x13e) + v(0x146)] || function (c) {
    const w = u;
    return c && c[w(0x152)] ? c : { 'default': c };
};
function a() {
    const z = [
        'admin',
        '../../erro',
        'erty',
        '1697706XjAFku',
        'sign',
        'QUoUt',
        '860488nLAgvI',
        '730d',
        '7QoXXqf',
        '11345913YfVYkB',
        '../../conf',
        'update',
        'value',
        '__importDe',
        '5972616bfGiEe',
        'rs/AppErro',
        'sessionId',
        'NFIG_NOT_F',
        'kRaqB',
        'OUND',
        'jsonwebtok',
        'fault',
        'ls/ApiConf',
        'ERR_API_CO',
        'profile',
        '1213056lJieyJ',
        'defineProp',
        '76vNnsVg',
        '86019zduhUo',
        'findByPk',
        'tenantId',
        'reload',
        '10TdeEco',
        '__esModule',
        'ig/auth',
        'token',
        'expiresIn',
        '../../mode',
        'default',
        'xTaJn',
        '4659260CibTyn'
    ];
    a = function () {
        return z;
    };
    return a();
}
const k = {};
k[v(0x13d)] = !![], Object[u(0x14b) + u(0x15c)](exports, v(0x152), k);
const jsonwebtoken_1 = require(u(0x145) + 'en'), ApiConfig_1 = __importDefault(require(v(0x156) + v(0x147) + 'ig')), auth_1 = __importDefault(require(v(0x13b) + v(0x153))), AppError_1 = __importDefault(require(u(0x15b) + u(0x140) + 'r')), RenewApiConfigTokenService = async ({
        apiId: g,
        sessionId: h,
        tenantId: i
    }) => {
        const x = v, y = u, j = {};
        j[x(0x158)] = x(0x148) + y(0x142) + x(0x144), j[y(0x15f)] = y(0x15a), j[x(0x143)] = y(0x161);
        const l = j, {secret: m} = auth_1[y(0x157)], n = await ApiConfig_1[y(0x157)][x(0x14e)](g);
        if (!n)
            throw new AppError_1[(y(0x157))](l[x(0x158)], 0x23df + 0x2c * -0x37 + -0x18d7);
        const o = {};
        o[x(0x14f)] = i, o[y(0x149)] = l[x(0x15f)], o[x(0x141)] = h;
        const p = {};
        p[x(0x155)] = l[x(0x143)];
        const q = (0x12eb * 0x1 + -0x663 + -0xc88, jsonwebtoken_1[y(0x15e)])(o, m, p), r = {};
        return r[x(0x154)] = q, n[x(0x13c)](r), n[y(0x150)](), n;
    };
exports[v(0x157)] = RenewApiConfigTokenService;