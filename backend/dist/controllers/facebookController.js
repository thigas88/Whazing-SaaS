'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0xf9)) / (0x1bb3 + -0xb2f + 0x3 * -0x581) * (-parseInt(m(0x115)) / (0x2354 + 0x1e2f * -0x1 + 0x107 * -0x5)) + -parseInt(l(0xfb)) / (-0x6 * -0xcf + 0xcf2 + -0x11c9) * (parseInt(l(0x10a)) / (-0x2 * -0x1f7 + 0x7 * -0x249 + 0x3 * 0x407)) + parseInt(l(0xfa)) / (0x1e2f * 0x1 + -0x1e62 * -0x1 + -0x3c8c) * (parseInt(l(0xf4)) / (-0x176c * 0x1 + -0x23a0 + 0x3b12)) + parseInt(m(0x10f)) / (0x8 * -0x151 + -0x1cc8 + 0x9 * 0x45f) * (-parseInt(l(0xf3)) / (-0x11b * 0x1 + -0x5 * 0x1e5 + -0x54e * -0x2)) + parseInt(l(0x113)) / (0x3b * 0x1c + -0x11f9 + 0xb8e) * (-parseInt(l(0x114)) / (-0x2 * 0x10ad + 0x5 * -0x677 + -0x1 * -0x41b7)) + parseInt(m(0x108)) / (0x26b8 + 0x8 * 0x43c + -0x488d) + parseInt(l(0xfd)) / (0x1399 + 0xbe * 0x2a + -0x31 * 0x109);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x25286 + -0x132f4 * -0x1 + 0xe5b5));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * 0x93b + -0x1dbe + 0xc38);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        'defineProp',
        '721SfJFUr',
        '__importDe',
        '../service',
        'store',
        '3159EAgopR',
        '6440UOEjyc',
        '234130AyMiwK',
        'etTokenAnd',
        'user',
        'etLogoutLi',
        '42304FrRmWC',
        '6XCXyMW',
        'erty',
        'fault',
        'LinkedPage',
        'value',
        '3VpCIqi',
        '1875185NbzrAg',
        '18LCctsM',
        's/Facebook',
        '5576748qqTNtQ',
        'accountId',
        'facebookLo',
        'tenantId',
        'body',
        '__esModule',
        'Services/G',
        'nkedPage',
        'gout',
        'userToken',
        'default',
        '2032514ODTzOS',
        'whatsapp',
        '210296wvgawJ',
        'status',
        'json',
        'Services/S'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[n(0x110) + n(0xf6)] || function (c) {
    const p = n;
    return c && c[p(0x102)] ? c : { 'default': c };
};
const k = {};
k[o(0xf8)] = !![], Object[o(0x10e) + o(0xf5)](exports, n(0x102), k), exports[o(0xff) + n(0x105)] = exports[n(0x112)] = void (0x181 * -0x4 + -0x2 * -0xe15 + -0x10e * 0x15);
const GetTokenAndLinkedPage_1 = __importDefault(require(n(0x111) + n(0xfc) + n(0x103) + n(0xf0) + o(0xf7))), SetLogoutLinkedPage_1 = __importDefault(require(o(0x111) + o(0xfc) + o(0x10d) + n(0xf2) + o(0x104))), store = async (d, e) => {
        const q = n, r = n, {
                whatsapp: f,
                accountId: g,
                userToken: h
            } = d[q(0x101)], i = {};
        return i[r(0x109)] = f, i[q(0xfe)] = g, i[q(0x106)] = h, i[q(0x100)] = d[q(0xf1)][q(0x100)], await (-0x14a0 + -0x116 * -0x2 + -0x2 * -0x93a, GetTokenAndLinkedPage_1[r(0x107)])(i), e[r(0x10b)](0x1 * 0x299 + 0x26af + -0x240 * 0x12)[q(0x10c)]();
    };
exports[o(0x112)] = store;
const facebookLogout = async (d, e) => {
    const s = o, t = n, f = d[s(0x101)], g = {};
    return g[t(0x109)] = f, g[s(0x100)] = d[t(0xf1)][t(0x100)], await (-0x1b6 + 0x27 * -0x49 + 0xcd5, SetLogoutLinkedPage_1[t(0x107)])(g), e[t(0x10b)](0x2d0 + -0x1859 + 0x1651)[t(0x10c)]();
};
exports[n(0xff) + n(0x105)] = facebookLogout;