'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x797 * -0x3 + 0x4 * -0x1a6 + -0xf3a * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x103)) / (0x2 * 0xd05 + 0x3 * 0x167 + 0x229 * -0xe) * (parseInt(m(0xf9)) / (0x20 * 0x4 + 0x1 * 0x67 + 0xe5 * -0x1)) + -parseInt(m(0x105)) / (0x2 * -0x2ff + 0x1ef8 + 0x1 * -0x18f7) * (-parseInt(l(0x100)) / (0x25c + -0x242b + 0x21d3)) + parseInt(l(0x10c)) / (-0x1da + -0x20ad + 0x6 * 0x5c2) + parseInt(m(0x104)) / (-0x19 * 0x89 + 0x1 * -0x1d42 + 0x43 * 0xa3) * (-parseInt(l(0xf8)) / (0xfff * -0x1 + -0x20c * -0x7 + 0x1b2)) + -parseInt(m(0x113)) / (-0x1 * -0x26dd + 0x255b + -0x4c30) + parseInt(m(0x10b)) / (-0x2b3 * 0x5 + -0x1 * 0x3fd + -0x41 * -0x45) + parseInt(m(0xfe)) / (0x1979 * -0x1 + -0x17f * -0xb + 0x90e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7243e + 0x2 * 0x991ae + 0x1c739));
var __importDefault = this && this[n(0x112) + o(0xf3)] || function (c) {
    const p = o;
    return c && c[p(0x101)] ? c : { 'default': c };
};
const k = {};
k[n(0x114)] = !![], Object[n(0x102) + o(0x10a)](exports, o(0x101), k), exports[n(0x108) + o(0xfd)] = exports[n(0xf4)] = void (-0x6ab + -0x6d9 * -0x4 + 0x1 * -0x14b9);
const GetTokenAndLinkedPage_1 = __importDefault(require(o(0xfa) + o(0xff) + o(0xf5) + o(0x10d) + n(0x107))), SetLogoutLinkedPage_1 = __importDefault(require(o(0xfa) + n(0xff) + o(0x10f) + o(0x115) + n(0xfc))), store = async (d, e) => {
        const q = n, r = n, {
                whatsapp: f,
                accountId: g,
                userToken: h
            } = d[q(0x116)], i = {};
        return i[q(0xfb)] = f, i[r(0x110)] = g, i[q(0x106)] = h, i[q(0xf7)] = d[q(0x10e)][q(0xf7)], await (0x2425 + -0x876 + -0x13 * 0x175, GetTokenAndLinkedPage_1[r(0xf6)])(i), e[q(0x109)](0x5 * -0x37f + -0x217 * -0x1 + -0x564 * -0x3)[q(0x111)]();
    };
exports[o(0xf4)] = store;
function a() {
    const u = [
        'etLogoutLi',
        'body',
        'fault',
        'store',
        'Services/G',
        'default',
        'tenantId',
        '7FaAfkW',
        '786852xlVoyC',
        '../service',
        'whatsapp',
        'nkedPage',
        'gout',
        '11090360joLFUr',
        's/Facebook',
        '1171936bLLwVu',
        '__esModule',
        'defineProp',
        '4GOKRBP',
        '10197402clDnEP',
        '9gmIXDs',
        'userToken',
        'LinkedPage',
        'facebookLo',
        'status',
        'erty',
        '65079IzZNTC',
        '864145JwQRcP',
        'etTokenAnd',
        'user',
        'Services/S',
        'accountId',
        'json',
        '__importDe',
        '9115536fNtNnP',
        'value'
    ];
    a = function () {
        return u;
    };
    return a();
}
const facebookLogout = async (d, e) => {
    const s = o, t = n, f = d[s(0x116)], g = {};
    return g[s(0xfb)] = f, g[s(0xf7)] = d[s(0x10e)][s(0xf7)], await (-0x1a9a + 0x216b + -0x6d1, SetLogoutLinkedPage_1[t(0xf6)])(g), e[t(0x109)](0xe4b * 0x2 + 0x1d41 + -0x390f)[t(0x111)]();
};
exports[o(0x108) + n(0xfd)] = facebookLogout;