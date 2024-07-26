'use strict';
const r = b, s = b;
function a() {
    const y = [
        '4766785VonKPp',
        'tenantId',
        'jsonwebtok',
        '48eHlYJy',
        'ssToken',
        'fault',
        '2484216wSvlrd',
        'eshToken',
        '../config/',
        'auth',
        'createRefr',
        '20392uyrigW',
        'name',
        'defineProp',
        '__importDe',
        '5263920SWiHAp',
        'expiresIn',
        'erty',
        '4473XrHRqK',
        'profile',
        '4249316XZnVZT',
        'usarname',
        'value',
        '23197KeXTIe',
        'sign',
        'tokenVersi',
        '463644cQDkaq',
        'createAcce',
        '__esModule',
        'default'
    ];
    a = function () {
        return y;
    };
    return a();
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1d3)) / (-0x12a5 + -0x63d * 0x1 + 0x18e3) * (-parseInt(p(0x1bf)) / (-0x257b + 0x9cc + 0x8b * 0x33)) + -parseInt(q(0x1b8)) / (0x1d83 + -0x2667 + -0x2b * -0x35) + parseInt(p(0x1d0)) / (0x55b + 0x2120 + 0xe5 * -0x2b) + -parseInt(q(0x1bc)) / (0x2 * 0xa97 + 0x2 * -0x347 + -0xe9b) + -parseInt(q(0x1cb)) / (-0x2203 + -0x208b + 0x1 * 0x4294) + -parseInt(p(0x1c2)) / (-0x285 * 0x7 + -0x19b * -0x12 + -0xb3c) + -parseInt(q(0x1c7)) / (0xb * -0x270 + -0x243b + 0x3f13) * (-parseInt(q(0x1ce)) / (0x2ff + -0x2216 * -0x1 + -0x250c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x6e664 + -0x2 * -0x225bb + 0xaeef3));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xb01 * 0x2 + -0x10 * 0x8e + -0x56 * 0x22);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x1ca) + s(0x1c1)] || function (c) {
    const t = s;
    return c && c[t(0x1ba)] ? c : { 'default': c };
};
const o = {};
o[s(0x1d2)] = !![], Object[r(0x1c9) + r(0x1cd)](exports, s(0x1ba), o), exports[r(0x1c6) + r(0x1c3)] = exports[s(0x1b9) + s(0x1c0)] = void (0x24bc + -0x2526 + 0x6a * 0x1);
const jsonwebtoken_1 = require(r(0x1be) + 'en'), auth_1 = __importDefault(require(s(0x1c4) + s(0x1c5))), createAccessToken = e => {
        const u = r, v = r, {
                secret: f,
                expiresIn: g
            } = auth_1[u(0x1bb)], h = {};
        h[u(0x1d1)] = e[u(0x1c8)], h[v(0x1bd)] = e[v(0x1bd)], h[v(0x1cf)] = e[u(0x1cf)], h['id'] = e['id'];
        const i = {};
        return i[v(0x1cc)] = g, (-0x87d + 0x2093 + -0x1816, jsonwebtoken_1[v(0x1b6)])(h, f, i);
    };
exports[r(0x1b9) + s(0x1c0)] = createAccessToken;
const createRefreshToken = e => {
    const w = s, x = s, {
            refreshSecret: f,
            refreshExpiresIn: g
        } = auth_1[w(0x1bb)], h = {};
    h['id'] = e['id'], h[x(0x1b7) + 'on'] = e[x(0x1b7) + 'on'];
    const i = {};
    return i[x(0x1cc)] = g, (0x5b3 + 0x4 * -0x695 + 0x14a1, jsonwebtoken_1[x(0x1b6)])(h, f, i);
};
exports[r(0x1c6) + r(0x1c3)] = createRefreshToken;