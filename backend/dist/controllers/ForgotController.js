'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0xc3)) / (-0x19b5 + 0x1 * -0x4a9 + 0x137 * 0x19) * (-parseInt(r(0xbf)) / (0x11c7 + 0x26c2 + -0x3887)) + -parseInt(q(0xb2)) / (0x839 + 0xc4b * 0x3 + -0x2d17) + -parseInt(q(0xd6)) / (0x329 * 0x6 + -0x1b51 + 0x85f) + parseInt(r(0xd2)) / (-0x85 * 0x28 + -0x165d + -0x11 * -0x28a) + parseInt(r(0xd9)) / (0x160 + -0x2 * 0x21e + 0x2e2) + parseInt(r(0xd8)) / (-0x1c03 * 0x1 + 0xc * 0x2e + 0x19e2) * (-parseInt(r(0xc0)) / (-0x1d82 + -0x28 * -0x4 + 0x1cea)) + parseInt(r(0xc7)) / (0x1135 + 0x22fc * -0x1 + 0x11d0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1635 * 0x5f + -0x66844 + -0x9baa1 * -0x2));
var __importDefault = this && this[s(0xb4) + s(0xd0)] || function (c) {
    const u = t;
    return c && c[u(0xb1)] ? c : { 'default': c };
};
const k = {};
function a() {
    const z = [
        '5478408RmIsTh',
        'params',
        'ce/ResetPa',
        'store',
        'Verifique\x20',
        's/ResetPas',
        'status',
        'default',
        'json',
        'fault',
        'message',
        '761345UuSyJN',
        's/ForgotPa',
        'Edfrv',
        'Senha\x20rede',
        '490840pedyuX',
        'value',
        '1057HFJvFh',
        '586710rcpDPv',
        'ssword',
        'E-mail\x20env',
        '\x20sucesso',
        'swordServi',
        'defineProp',
        '__esModule',
        '1274787COPseI',
        '../service',
        '__importDe',
        'formado',
        'finida\x20com',
        'ices/SendM',
        'SCcaC',
        'o\x20Token\x20in',
        'XmUcJ',
        'ords',
        'uuid',
        'ssWordServ',
        'ail',
        '256126VwcAZu',
        '6568rKhcbQ',
        'ucesso',
        'erty',
        '1YBFXPy',
        'iado\x20com\x20s',
        'error',
        'resetPassw'
    ];
    a = function () {
        return z;
    };
    return a();
}
k[s(0xd7)] = !![], Object[t(0xb0) + t(0xc2)](exports, s(0xb1), k), exports[s(0xc6) + t(0xbb)] = exports[t(0xca)] = void (0x5f * -0x67 + 0x15b7 + 0x1 * 0x1082);
const uuid_1 = require(t(0xbc)), SendMail_1 = __importDefault(require(t(0xb3) + s(0xd3) + s(0xbd) + t(0xb7) + s(0xbe))), ResetPassword_1 = __importDefault(require(s(0xb3) + t(0xcc) + s(0xaf) + t(0xc9) + t(0xac))), store = async (f, g) => {
        const v = s, w = s, h = {};
        h[v(0xb8)] = w(0xad) + v(0xc4) + v(0xc1);
        const i = h, {email: j} = f[w(0xc8)], l = (-0x199a + 0x1 * 0x1f22 + 0x1 * -0x588, uuid_1['v4'])(), m = await (0x122d * -0x1 + 0x17be + -0x591, SendMail_1[w(0xce)])(j, l);
        if (!m) {
            const o = {};
            return o[w(0xd1)] = i[v(0xb8)], g[v(0xcd)](0x10d * -0x3 + 0x1dfb + -0x1a0c)[v(0xcf)](o);
        }
        const n = {};
        return n[w(0xc5)] = i[v(0xb8)], g[v(0xcd)](-0x4 * 0x373 + 0x4ce + -0x2 * -0x549)[w(0xcf)](n);
    };
exports[s(0xca)] = store;
const resetPasswords = async (f, g) => {
    const x = s, y = t, h = {};
    h[x(0xba)] = y(0xd5) + x(0xb6) + x(0xae), h[y(0xd4)] = x(0xcb) + x(0xb9) + y(0xb5);
    const i = h, {
            email: j,
            token: l,
            password: m
        } = f[x(0xc8)], n = await (0x2 * 0x10e7 + -0x26c + -0xce * 0x27, ResetPassword_1[y(0xce)])(j, l, m);
    if (!n) {
        const p = {};
        return p[y(0xd1)] = i[y(0xba)], g[y(0xcd)](0x210d * 0x1 + 0x1 * -0x19b + -0x1eaa)[y(0xcf)](p);
    }
    const o = {};
    return o[y(0xc5)] = i[y(0xd4)], g[y(0xcd)](0x11ca + -0x381 + -0x1 * 0xcb5)[x(0xcf)](o);
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x5 * 0x97 + 0x1c35 + -0xc4b * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[t(0xc6) + t(0xbb)] = resetPasswords;