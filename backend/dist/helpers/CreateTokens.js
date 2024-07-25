'use strict';
function a() {
    const y = [
        '__importDe',
        'usarname',
        '1029955tLQDzs',
        'fault',
        '4IPVpfm',
        'tokenVersi',
        '4404PwEvsx',
        '__esModule',
        '8407700wOFJlk',
        'ssToken',
        'auth',
        'createAcce',
        '146514RAdCFD',
        'erty',
        '8LlIeED',
        '../config/',
        '35labTwE',
        '58371gxXNBK',
        'eshToken',
        'value',
        'defineProp',
        'name',
        'default',
        'tenantId',
        '550029qkrhdN',
        'jsonwebtok',
        'expiresIn',
        'profile',
        '2340585gsWXRW',
        'sign',
        'createRefr'
    ];
    a = function () {
        return y;
    };
    return a();
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1d0)) / (0x1 * 0x6ad + -0x1 * 0x1e20 + 0x1774) + -parseInt(p(0x1cb)) / (0x161d + -0x6f4 + -0xf27) + -parseInt(q(0x1d7)) / (0x1c9e + 0x1a91 + 0x2 * -0x1b96) + parseInt(q(0x1e2)) / (0x24d7 + 0x243d + 0x14e * -0x38) * (-parseInt(q(0x1e0)) / (0x2 * 0x6fd + -0xbea + -0x20b)) + -parseInt(q(0x1e4)) / (0x37d * -0x2 + -0x169c + 0x1d9c) * (parseInt(q(0x1cf)) / (-0x3 * 0x89e + 0x1 * 0x1bd7 + -0x1f6)) + -parseInt(q(0x1cd)) / (-0x11f * -0x5 + 0x1d9c + -0x232f) * (parseInt(p(0x1db)) / (0x15d3 + 0xbdb * -0x2 + -0x7b * -0x4)) + parseInt(p(0x1e6)) / (0x5 * -0x751 + -0x1395 + 0x3834);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2c23e + -0x713d * 0x1 + -0x2eb45 * -0x2));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x12f2 + 0x1 * 0x13dd + 0xde);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x1de) + s(0x1e1)] || function (c) {
    const t = r;
    return c && c[t(0x1e5)] ? c : { 'default': c };
};
const o = {};
o[r(0x1d2)] = !![], Object[s(0x1d3) + s(0x1cc)](exports, s(0x1e5), o), exports[r(0x1dd) + s(0x1d1)] = exports[s(0x1ca) + s(0x1e7)] = void (-0xa * 0x329 + 0x3a9 * 0x3 + -0x1 * -0x149f);
const jsonwebtoken_1 = require(s(0x1d8) + 'en'), auth_1 = __importDefault(require(s(0x1ce) + r(0x1c9))), createAccessToken = e => {
        const u = r, v = r, {
                secret: f,
                expiresIn: g
            } = auth_1[u(0x1d5)], h = {};
        h[u(0x1df)] = e[u(0x1d4)], h[v(0x1d6)] = e[v(0x1d6)], h[u(0x1da)] = e[v(0x1da)], h['id'] = e['id'];
        const i = {};
        return i[v(0x1d9)] = g, (0x1148 + 0x229b + 0x25 * -0x167, jsonwebtoken_1[v(0x1dc)])(h, f, i);
    };
exports[r(0x1ca) + r(0x1e7)] = createAccessToken;
const createRefreshToken = e => {
    const w = s, x = s, {
            refreshSecret: f,
            refreshExpiresIn: g
        } = auth_1[w(0x1d5)], h = {};
    h['id'] = e['id'], h[x(0x1e3) + 'on'] = e[x(0x1e3) + 'on'];
    const i = {};
    return i[w(0x1d9)] = g, (0x3da + 0xe07 + -0x11e1, jsonwebtoken_1[x(0x1dc)])(h, f, i);
};
exports[r(0x1dd) + s(0x1d1)] = createRefreshToken;