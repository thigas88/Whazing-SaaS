'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0xfe)) / (0xc3 * 0xb + -0x1236 + 0x9d6) + -parseInt(m(0x10c)) / (-0x7 * -0x515 + 0x1358 + 0x36e9 * -0x1) + parseInt(l(0x10d)) / (0x2ce * -0x2 + 0xf40 + -0x1ed * 0x5) + parseInt(m(0x103)) / (-0x121d * 0x2 + 0x2187 + 0x2b7) * (parseInt(l(0xf2)) / (0x115f + -0x1953 + -0x7f9 * -0x1)) + -parseInt(m(0xfb)) / (-0x4 * -0x31a + 0x255e + -0x31c0) + -parseInt(l(0x102)) / (0xeb6 * 0x1 + 0x261 * -0x3 + -0x8a * 0xe) * (-parseInt(m(0x104)) / (0x81e + -0x34b * -0x2 + -0xeac)) + parseInt(l(0x113)) / (-0x1e6a + -0x1e44 + 0x3cb7) * (-parseInt(l(0x111)) / (0xc8 * -0x9 + 0x1cba + 0x4 * -0x56a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1ac06 + 0xbadf * -0xe + 0xbfb81 * 0x2));
var __importDefault = this && this[n(0x100) + o(0xf5)] || function (c) {
    const p = o;
    return c && c[p(0xf4)] ? c : { 'default': c };
};
const k = {};
function a() {
    const u = [
        '9zLbbVp',
        'facebookLo',
        'Services/G',
        '5utEKBf',
        'user',
        '__esModule',
        'fault',
        'whatsapp',
        'default',
        'erty',
        'gout',
        'json',
        '3084264CStcGV',
        'store',
        's/Facebook',
        '819496THnbIG',
        'etTokenAnd',
        '__importDe',
        'nkedPage',
        '602YCDlNO',
        '5118004YdJMfY',
        '624TuxQPc',
        'Services/S',
        'LinkedPage',
        'tenantId',
        'defineProp',
        'accountId',
        '../service',
        'etLogoutLi',
        '272104voypbO',
        '4666728zowPRA',
        'value',
        'status',
        'userToken',
        '5809510bYULbc',
        'body'
    ];
    a = function () {
        return u;
    };
    return a();
}
k[n(0x10e)] = !![], Object[n(0x108) + o(0xf8)](exports, o(0xf4), k), exports[n(0x114) + o(0xf9)] = exports[n(0xfc)] = void (0x69 + 0x6 * 0x12d + -0x777);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x1623 + -0xc42 + 0x1 * -0x8ef);
        let h = e[f];
        return h;
    }, b(c, d);
}
const GetTokenAndLinkedPage_1 = __importDefault(require(o(0x10a) + n(0xfd) + n(0x115) + n(0xff) + n(0x106))), SetLogoutLinkedPage_1 = __importDefault(require(o(0x10a) + o(0xfd) + n(0x105) + o(0x10b) + o(0x101))), store = async (d, e) => {
        const q = n, r = n, {
                whatsapp: f,
                accountId: g,
                userToken: h
            } = d[q(0x112)], i = {};
        return i[r(0xf6)] = f, i[q(0x109)] = g, i[r(0x110)] = h, i[r(0x107)] = d[q(0xf3)][q(0x107)], await (0x618 + 0xfa9 + -0x15c1, GetTokenAndLinkedPage_1[r(0xf7)])(i), e[r(0x10f)](0xce9 + -0x5 * -0x30f + -0x6 * 0x492)[r(0xfa)]();
    };
exports[n(0xfc)] = store;
const facebookLogout = async (d, e) => {
    const s = o, t = o, f = d[s(0x112)], g = {};
    return g[t(0xf6)] = f, g[t(0x107)] = d[s(0xf3)][s(0x107)], await (0x82 + 0x1f68 + -0x1fea, SetLogoutLinkedPage_1[t(0xf7)])(g), e[t(0x10f)](-0x88c + -0x4f1 + 0xe45)[s(0xfa)]();
};
exports[o(0x114) + n(0xf9)] = facebookLogout;