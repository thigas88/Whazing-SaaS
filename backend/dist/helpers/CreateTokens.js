'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x15d)) / (-0x80f * 0x3 + -0x1 * 0x86d + 0x209b * 0x1) * (parseInt(q(0x14e)) / (-0x767 * 0x1 + 0xb00 + 0x1 * -0x397)) + -parseInt(p(0x148)) / (-0x5e * 0x2f + 0xe5d + 0x2e8) * (parseInt(p(0x157)) / (0x11 * 0x15 + 0x3 * 0x63e + -0x1 * 0x141b)) + -parseInt(q(0x149)) / (-0xf8b + 0x1d70 + -0xde0) + parseInt(q(0x14a)) / (0x1c5b * 0x1 + 0x2510 + -0x4165) + -parseInt(q(0x14c)) / (0x6ee + -0x2620 + 0x1f39) * (-parseInt(p(0x161)) / (0x1ecd + -0x3 * -0x19c + 0x1 * -0x2399)) + -parseInt(p(0x15a)) / (0x1e65 + -0x18ca + -0x1 * 0x592) + -parseInt(q(0x151)) / (0x1fd1 + 0x6d7 * -0x1 + 0x10a * -0x18);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x18fb5 + -0x1 * 0x4e54a + -0x331b * -0x29));
var __importDefault = this && this[r(0x158) + s(0x146)] || function (c) {
    const t = s;
    return c && c[t(0x150)] ? c : { 'default': c };
};
const o = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * 0x118b + -0x7c2 + -0x1a0e);
        let h = e[f];
        return h;
    }, b(c, d);
}
o[s(0x155)] = !![], Object[r(0x164) + r(0x162)](exports, s(0x150), o), exports[s(0x147) + r(0x154)] = exports[r(0x14d) + r(0x15f)] = void (0x1eb5 + 0x1443 + 0x32f8 * -0x1);
const jsonwebtoken_1 = require(r(0x153) + 'en'), auth_1 = __importDefault(require(s(0x160) + s(0x159))), createAccessToken = e => {
        const u = s, v = r, {
                secret: f,
                expiresIn: g
            } = auth_1[u(0x14f)], h = {};
        h[v(0x15c)] = e[u(0x15b)], h[u(0x163)] = e[v(0x163)], h[v(0x14b)] = e[v(0x14b)], h['id'] = e['id'];
        const i = {};
        return i[u(0x15e)] = g, (-0x6d * 0x56 + 0x1c9d + 0x801, jsonwebtoken_1[v(0x152)])(h, f, i);
    };
exports[r(0x14d) + r(0x15f)] = createAccessToken;
const createRefreshToken = e => {
    const w = r, x = s, {
            refreshSecret: f,
            refreshExpiresIn: g
        } = auth_1[w(0x14f)], h = {};
    h['id'] = e['id'], h[x(0x156) + 'on'] = e[w(0x156) + 'on'];
    const i = {};
    return i[x(0x15e)] = g, (0x30c + -0xfa0 + -0xc94 * -0x1, jsonwebtoken_1[w(0x152)])(h, f, i);
};
function a() {
    const y = [
        'createAcce',
        '138mKTOCc',
        'default',
        '__esModule',
        '1306060aavrhq',
        'sign',
        'jsonwebtok',
        'eshToken',
        'value',
        'tokenVersi',
        '8BSvPLU',
        '__importDe',
        'auth',
        '1734165EXfAUZ',
        'name',
        'usarname',
        '2965wfESMI',
        'expiresIn',
        'ssToken',
        '../config/',
        '4079128vkptVB',
        'erty',
        'tenantId',
        'defineProp',
        'fault',
        'createRefr',
        '79383kCuujM',
        '376465RJshGW',
        '2784516BGHBqw',
        'profile',
        '7CgsoeJ'
    ];
    a = function () {
        return y;
    };
    return a();
}
exports[r(0x147) + r(0x154)] = createRefreshToken;