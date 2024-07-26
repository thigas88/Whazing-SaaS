'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x1c6)) / (0x1 * -0x1cb5 + -0x1de8 + 0x3a9e) + parseInt(m(0x1ce)) / (-0x1 * -0x16d9 + 0x7 * -0x503 + -0x61f * -0x2) + -parseInt(m(0x1d5)) / (-0xaad + 0x2c * 0xd1 + 0xaa * -0x26) * (parseInt(m(0x1ba)) / (-0x14 * -0xcc + -0xfb9 + -0x33)) + -parseInt(l(0x1c4)) / (0x38d * 0x1 + 0x1c3c + 0x1fc4 * -0x1) * (-parseInt(m(0x1c9)) / (-0x11d4 * -0x1 + 0x2 * -0xd58 + 0x3 * 0x2f6)) + -parseInt(l(0x1b7)) / (0x25ba + 0x183 + -0x2736) + -parseInt(l(0x1bc)) / (0x1 * -0x10f + -0x2 * 0xde7 + 0x1ce5 * 0x1) * (-parseInt(l(0x1d4)) / (0x25 * -0x38 + 0x17c2 + 0x1 * -0xfa1)) + parseInt(l(0x1cf)) / (0x22c2 + -0x22ba + -0x1 * -0x2) * (-parseInt(m(0x1b5)) / (-0x1737 + 0x290 + 0x14b2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2 * 0x1f6b2 + 0xa7fe * 0x11 + -0x158a7));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1cb4 + -0x1a05 + -0x7f * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[n(0x1d3) + n(0x1b6)] || function (c) {
    const p = n;
    return c && c[p(0x1cb)] ? c : { 'default': c };
};
const k = {};
function a() {
    const u = [
        'value',
        '__esModule',
        'body',
        'gout',
        '146394AFmDLS',
        '3830100EZDYdS',
        '../service',
        's/Facebook',
        'status',
        '__importDe',
        '1521eaTHXA',
        '375CMKamS',
        'store',
        'LinkedPage',
        'nkedPage',
        'defineProp',
        '11YqEqmk',
        'fault',
        '3744258LKptiM',
        'user',
        'facebookLo',
        '19216bYWdhf',
        'tenantId',
        '28256AEQdeN',
        'json',
        'accountId',
        'etLogoutLi',
        'default',
        'Services/S',
        'userToken',
        'erty',
        '5165aDAvDT',
        'whatsapp',
        '695597kqKQhA',
        'Services/G',
        'etTokenAnd',
        '3126IXkqoB'
    ];
    a = function () {
        return u;
    };
    return a();
}
k[o(0x1ca)] = !![], Object[n(0x1b4) + n(0x1c3)](exports, o(0x1cb), k), exports[n(0x1b9) + o(0x1cd)] = exports[n(0x1b1)] = void (-0x1 * 0xd8b + 0x2a8 * 0xa + 0x457 * -0x3);
const GetTokenAndLinkedPage_1 = __importDefault(require(n(0x1d0) + n(0x1d1) + o(0x1c7) + n(0x1c8) + o(0x1b2))), SetLogoutLinkedPage_1 = __importDefault(require(o(0x1d0) + o(0x1d1) + o(0x1c1) + n(0x1bf) + o(0x1b3))), store = async (d, e) => {
        const q = n, r = o, {
                whatsapp: f,
                accountId: g,
                userToken: h
            } = d[q(0x1cc)], i = {};
        return i[q(0x1c5)] = f, i[r(0x1be)] = g, i[r(0x1c2)] = h, i[r(0x1bb)] = d[q(0x1b8)][q(0x1bb)], await (-0x6 * 0x2e + -0x7ff + -0x1 * -0x913, GetTokenAndLinkedPage_1[q(0x1c0)])(i), e[r(0x1d2)](-0x14d3 + 0x20c5 + 0x2 * -0x595)[r(0x1bd)]();
    };
exports[n(0x1b1)] = store;
const facebookLogout = async (d, e) => {
    const s = o, t = o, f = d[s(0x1cc)], g = {};
    return g[s(0x1c5)] = f, g[t(0x1bb)] = d[t(0x1b8)][s(0x1bb)], await (0x3 * 0x980 + 0xb * -0x3d + 0x109 * -0x19, SetLogoutLinkedPage_1[t(0x1c0)])(g), e[s(0x1d2)](0x1a0d + -0x9b8 + -0x52f * 0x3)[t(0x1bd)]();
};
exports[n(0x1b9) + o(0x1cd)] = facebookLogout;