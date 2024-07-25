'use strict';
const n = b, o = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x43e + -0x6 * -0x386 + -0xfe9);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x119)) / (0x17f9 + 0x107a + -0x1439 * 0x2) * (parseInt(l(0x10a)) / (-0x2609 + 0x569 * 0x2 + -0x1b39 * -0x1)) + parseInt(m(0x11f)) / (0x10fd + -0x38b * 0x6 + 0x448) * (-parseInt(l(0x103)) / (0x275 + -0x56 * -0x65 + 0x245f * -0x1)) + -parseInt(l(0x109)) / (0x2 * -0x1317 + 0x16 * 0x81 + -0x1b1d * -0x1) * (-parseInt(m(0x112)) / (0x684 * 0x3 + -0x1 * 0x673 + -0xd13)) + parseInt(l(0xfe)) / (0xfcf + -0xf98 + -0x30) + -parseInt(l(0x118)) / (-0x1 * 0x1e65 + 0x3d5 + -0x6a6 * -0x4) * (-parseInt(l(0xff)) / (-0x501 + 0x2236 + -0x1d2c)) + parseInt(l(0x10c)) / (0x2437 + 0x193c + 0x4f * -0xc7) + -parseInt(m(0x10e)) / (-0xc04 + 0x3 * -0x695 + 0x1fce) * (parseInt(m(0x11b)) / (0x196b + -0x237 + -0x3dc * 0x6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2f4c7 + 0x5165a + -0x4e479 * -0x2));
var __importDefault = this && this[n(0x101) + n(0x106)] || function (c) {
    const p = o;
    return c && c[p(0x105)] ? c : { 'default': c };
};
const k = {};
k[o(0x11a)] = !![], Object[o(0x11e) + n(0x104)](exports, n(0x105), k), exports[n(0x117) + o(0xfd)] = exports[o(0x10b)] = void (0x61 * 0x35 + 0x2126 * -0x1 + 0x29d * 0x5);
const GetTokenAndLinkedPage_1 = __importDefault(require(o(0x113) + n(0x108) + n(0x11c) + n(0x115) + o(0x120))), SetLogoutLinkedPage_1 = __importDefault(require(n(0x113) + o(0x108) + n(0x107) + o(0x10d) + o(0x122))), store = async (d, e) => {
        const q = o, r = o, {
                whatsapp: f,
                accountId: g,
                userToken: h
            } = d[q(0x121)], i = {};
        return i[q(0x111)] = f, i[q(0x100)] = g, i[r(0x116)] = h, i[q(0x102)] = d[r(0x11d)][q(0x102)], await (0x18a * 0x2 + -0x217e * -0x1 + -0x2 * 0x1249, GetTokenAndLinkedPage_1[q(0x10f)])(i), e[q(0x114)](0x32 * -0x78 + -0xd6a * 0x2 + -0xb * -0x4a4)[r(0x110)]();
    };
function a() {
    const u = [
        'accountId',
        '__importDe',
        'tenantId',
        '1601552LXbsnB',
        'erty',
        '__esModule',
        'fault',
        'Services/S',
        's/Facebook',
        '40gDQPRI',
        '20LjzgYA',
        'store',
        '13306170kWthbS',
        'etLogoutLi',
        '1729805ZKyeEA',
        'default',
        'json',
        'whatsapp',
        '1130352cXdpSd',
        '../service',
        'status',
        'etTokenAnd',
        'userToken',
        'facebookLo',
        '120MShQvh',
        '63719DfbWdf',
        'value',
        '204BTSwzX',
        'Services/G',
        'user',
        'defineProp',
        '3DVkaYd',
        'LinkedPage',
        'body',
        'nkedPage',
        'gout',
        '1269961fYamMD',
        '883602apKarN'
    ];
    a = function () {
        return u;
    };
    return a();
}
exports[n(0x10b)] = store;
const facebookLogout = async (d, e) => {
    const s = o, t = o, f = d[s(0x121)], g = {};
    return g[t(0x111)] = f, g[s(0x102)] = d[s(0x11d)][s(0x102)], await (-0x146d + -0x2618 + 0x3a85, SetLogoutLinkedPage_1[t(0x10f)])(g), e[s(0x114)](0x1ab + -0xa08 + 0x1 * 0x925)[t(0x110)]();
};
exports[n(0x117) + o(0xfd)] = facebookLogout;