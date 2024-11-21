'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1d5)) / (0x1575 + -0x6 * 0x9 + 0xa9f * -0x2) * (parseInt(p(0x1e3)) / (-0x7a2 + 0x1b03 + -0x135f)) + parseInt(q(0x1d4)) / (0xd2a + 0x20 * 0xad + -0x1d * 0x133) * (parseInt(p(0x1cc)) / (0x11ca + -0x4c7 + 0xcff * -0x1)) + -parseInt(p(0x1dc)) / (0x6ee * -0x3 + -0x1730 + 0x2bff) + parseInt(p(0x1cd)) / (-0x1392 + -0x1 * 0x1a1b + 0x2db3) + parseInt(p(0x1db)) / (0x1802 + 0x1e6 + -0x19e1) + -parseInt(q(0x1da)) / (0x1c1a + -0xc51 * 0x1 + -0x6d * 0x25) + parseInt(p(0x1d7)) / (0x2301 + -0x51a + -0x1dde);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xf29cb * 0x1 + 0xa19ee + 0xdcafc));
var __importDefault = this && this[r(0x1e6) + r(0x1d3)] || function (c) {
    const t = r;
    return c && c[t(0x1d9)] ? c : { 'default': c };
};
const o = {};
o[s(0x1e5)] = !![], Object[s(0x1dd) + s(0x1d8)](exports, r(0x1d9), o), exports[s(0x1e1) + s(0x1d0)] = exports[s(0x1cb) + s(0x1e0)] = void (-0x20ab * 0x1 + 0xb61 + 0x154a);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1f09 + -0x119c + 0x326e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const jsonwebtoken_1 = require(r(0x1e2) + 'en'), auth_1 = __importDefault(require(s(0x1ce) + s(0x1df))), createAccessToken = e => {
        const u = r, v = r, {
                secret: f,
                expiresIn: g
            } = auth_1[u(0x1de)], h = {};
        h[u(0x1ca)] = e[v(0x1d1)], h[u(0x1cf)] = e[v(0x1cf)], h[u(0x1d2)] = e[v(0x1d2)], h['id'] = e['id'];
        const i = {};
        return i[v(0x1e4)] = g, (0x142 + 0x1 * -0xbac + -0x56 * -0x1f, jsonwebtoken_1[v(0x1c9)])(h, f, i);
    };
exports[r(0x1cb) + r(0x1e0)] = createAccessToken;
const createRefreshToken = e => {
    const w = s, x = r, {
            refreshSecret: f,
            refreshExpiresIn: g
        } = auth_1[w(0x1de)], h = {};
    h['id'] = e['id'], h[w(0x1d6) + 'on'] = e[w(0x1d6) + 'on'];
    const i = {};
    return i[w(0x1e4)] = g, (0x148c + 0xd * -0x115 + -0x67b, jsonwebtoken_1[w(0x1c9)])(h, f, i);
};
function a() {
    const y = [
        '228pEAttf',
        '1743270pxhIez',
        '../config/',
        'tenantId',
        'eshToken',
        'name',
        'profile',
        'fault',
        '19884jQDBZe',
        '1851lWAQtU',
        'tokenVersi',
        '7529364kJWbWE',
        'erty',
        '__esModule',
        '8741096xBntTq',
        '2039303QSoijj',
        '2452660AwkLUb',
        'defineProp',
        'default',
        'auth',
        'ssToken',
        'createRefr',
        'jsonwebtok',
        '388SBryht',
        'expiresIn',
        'value',
        '__importDe',
        'sign',
        'usarname',
        'createAcce'
    ];
    a = function () {
        return y;
    };
    return a();
}
exports[s(0x1e1) + s(0x1d0)] = createRefreshToken;