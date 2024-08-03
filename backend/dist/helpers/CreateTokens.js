'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1eb)) / (-0x211 * 0x8 + 0x1468 * 0x1 + 0x1 * -0x3df) + -parseInt(p(0x1e3)) / (0x5 * -0x233 + -0x2450 + -0x1 * -0x2f51) * (-parseInt(q(0x1f6)) / (-0x1f * 0xd1 + 0x7e * 0x4d + -0xa1 * 0x14)) + parseInt(q(0x1e4)) / (0x1479 + 0x1dad + -0x592 * 0x9) + -parseInt(q(0x1f0)) / (-0x1d36 + 0x1991 + -0x3aa * -0x1) * (parseInt(p(0x1fc)) / (0xcc0 + -0xb8a + 0x1 * -0x130)) + -parseInt(q(0x1e5)) / (-0xc5f + 0x14b1 + -0x84b) * (parseInt(q(0x1f3)) / (-0x376 + -0x14 * 0xad + 0x1102 * 0x1)) + -parseInt(p(0x1e7)) / (-0x1 * -0x22ff + 0x1abd + -0x51 * 0xc3) * (parseInt(p(0x1e8)) / (-0x1 * -0x1cff + -0x5aa + 0x1 * -0x174b)) + -parseInt(q(0x1dd)) / (-0x24db * -0x1 + -0x1fbb * 0x1 + -0x515) * (-parseInt(q(0x1df)) / (-0x114c + -0xd0a + 0x2 * 0xf31));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x21fb * 0x8b + -0x6 * 0x14b00 + 0x24c44a));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x41 * -0x79 + 0xe9b + -0x1 * -0x11fb);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x1f9) + r(0x1e0)] || function (c) {
    const t = s;
    return c && c[t(0x1ed)] ? c : { 'default': c };
};
const o = {};
o[s(0x1ee)] = !![], Object[r(0x1ef) + r(0x1f4)](exports, s(0x1ed), o), exports[r(0x1e2) + s(0x1f5)] = exports[r(0x1e9) + r(0x1e6)] = void (-0x42c + -0x13 * -0x199 + -0x1a2f);
const jsonwebtoken_1 = require(s(0x1e1) + 'en'), auth_1 = __importDefault(require(r(0x1f2) + r(0x1de))), createAccessToken = e => {
        const u = s, v = r, {
                secret: f,
                expiresIn: g
            } = auth_1[u(0x1fb)], h = {};
        h[v(0x1fd)] = e[u(0x1f1)], h[u(0x1ea)] = e[u(0x1ea)], h[v(0x1ec)] = e[u(0x1ec)], h['id'] = e['id'];
        const i = {};
        return i[v(0x1f8)] = g, (0x25f8 + -0x1 * -0x211 + 0x115 * -0x25, jsonwebtoken_1[u(0x1fa)])(h, f, i);
    };
function a() {
    const y = [
        '3553200rFXrFT',
        '707BMQEmA',
        'ssToken',
        '9AknAof',
        '1234190XGpWpZ',
        'createAcce',
        'tenantId',
        '508445yRMFBy',
        'profile',
        '__esModule',
        'value',
        'defineProp',
        '15DvGFQJ',
        'name',
        '../config/',
        '34136pNQSdO',
        'erty',
        'eshToken',
        '448389hDycye',
        'tokenVersi',
        'expiresIn',
        '__importDe',
        'sign',
        'default',
        '1883394gekYuL',
        'usarname',
        '88XOTZPJ',
        'auth',
        '2039712JrAEWc',
        'fault',
        'jsonwebtok',
        'createRefr',
        '6wvzPaH'
    ];
    a = function () {
        return y;
    };
    return a();
}
exports[s(0x1e9) + s(0x1e6)] = createAccessToken;
const createRefreshToken = e => {
    const w = r, x = s, {
            refreshSecret: f,
            refreshExpiresIn: g
        } = auth_1[w(0x1fb)], h = {};
    h['id'] = e['id'], h[x(0x1f7) + 'on'] = e[w(0x1f7) + 'on'];
    const i = {};
    return i[w(0x1f8)] = g, (0x265 * 0x9 + 0xb79 + -0x2106, jsonwebtoken_1[w(0x1fa)])(h, f, i);
};
exports[r(0x1e2) + r(0x1f5)] = createRefreshToken;