'use strict';
const s = b, t = b;
function a() {
    const z = [
        'Senha\x20rede',
        'lWVuG',
        'store',
        'ssWordServ',
        '7fxAGHB',
        'ices/SendM',
        'message',
        '976718OyfOpw',
        'error',
        '../service',
        'E-mail\x20env',
        'VwCKx',
        '189mjMgHY',
        '1348365WRqHYw',
        'default',
        'json',
        '446696eTzQMG',
        '3aGktCL',
        'params',
        'ce/ResetPa',
        '__esModule',
        '11476300UhymSN',
        'resetPassw',
        '\x20sucesso',
        's/ForgotPa',
        'swordServi',
        '__importDe',
        '12HiwVZd',
        'erty',
        'ail',
        'iado\x20com\x20s',
        'Verifique\x20',
        'rairw',
        's/ResetPas',
        'o\x20Token\x20in',
        '48800378jHbRJl',
        '64564BYVRPC',
        'ssword',
        'finida\x20com',
        'formado',
        'ucesso',
        'value',
        'ords',
        '8489508FUJTcN',
        'status',
        'uuid',
        'fault',
        'defineProp'
    ];
    a = function () {
        return z;
    };
    return a();
}
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0xa3)) / (-0x1 * -0x1199 + 0x19ed * -0x1 + 0x855) + parseInt(q(0x90)) / (0x2b9 * 0x9 + 0x7 * -0x255 + -0x1 * 0x82c) * (-parseInt(q(0xad)) / (0x16 * -0x8d + 0x8 * -0x316 + 0x41 * 0x91)) + -parseInt(r(0xb7)) / (0x2f9 * 0x7 + 0x1ca1 + -0x316c) * (parseInt(r(0xa9)) / (-0x1 * -0xf7f + 0x24d9 + -0x3453)) + -parseInt(q(0x97)) / (0x16 + -0xdba + 0xdaa) * (parseInt(q(0xa0)) / (0x2a3 + 0x1ce8 + -0x1f84 * 0x1)) + -parseInt(r(0xac)) / (-0x203d + -0x418 + 0x245d) * (parseInt(r(0xa8)) / (-0x1 * 0xb73 + 0x2bf + 0x8bd * 0x1)) + -parseInt(q(0xb1)) / (-0x25d7 * -0x1 + -0x5 * -0x611 + -0x4422) + parseInt(q(0x8f)) / (-0x1 * 0xd23 + 0x494 + 0x1 * 0x89a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1607d + -0x188169 + -0x11f29f * -0x2));
var __importDefault = this && this[s(0xb6) + t(0x9a)] || function (c) {
    const u = t;
    return c && c[u(0xb0)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xa * -0x1d + -0xc * -0x1df + -0x6ee * 0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[s(0x95)] = !![], Object[t(0x9b) + t(0x88)](exports, s(0xb0), k), exports[t(0xb2) + t(0x96)] = exports[s(0x9e)] = void (-0x432 * -0x4 + -0x223 * 0x2 + -0x641 * 0x2);
const uuid_1 = require(s(0x99)), SendMail_1 = __importDefault(require(s(0xa5) + s(0xb4) + s(0x9f) + s(0xa1) + s(0x89))), ResetPassword_1 = __importDefault(require(s(0xa5) + s(0x8d) + s(0xb5) + s(0xaf) + s(0x91))), store = async (f, g) => {
        const v = t, w = s, h = {};
        h[v(0xa7)] = w(0xa6) + w(0x8a) + v(0x94);
        const i = h, {email: j} = f[w(0xae)], l = (0x1 * -0x1c73 + -0x1 * 0x1a8d + -0xb * -0x500, uuid_1['v4'])(), m = await (0x1e88 + -0x26d6 + 0x84e * 0x1, SendMail_1[w(0xaa)])(j, l);
        if (!m) {
            const o = {};
            return o[v(0xa2)] = i[v(0xa7)], g[w(0x98)](0x22c2 + 0x27d + -0x2477)[w(0xab)](o);
        }
        const n = {};
        return n[v(0xa4)] = i[w(0xa7)], g[v(0x98)](0x47f * -0x1 + 0x1e97 + -0x1884)[v(0xab)](n);
    };
exports[t(0x9e)] = store;
const resetPasswords = async (f, g) => {
    const x = s, y = s, h = {};
    h[x(0x9d)] = x(0x9c) + y(0x92) + y(0xb3), h[y(0x8c)] = x(0x8b) + y(0x8e) + y(0x93);
    const i = h, {
            email: j,
            token: l,
            password: m
        } = f[x(0xae)], n = await (0x1994 + 0x10 * -0x1a2 + 0x8c, ResetPassword_1[y(0xaa)])(j, l, m);
    if (!n) {
        const p = {};
        return p[x(0xa2)] = i[x(0x9d)], g[x(0x98)](-0xc4b * -0x1 + 0x1 * -0x373 + -0x810)[y(0xab)](p);
    }
    const o = {};
    return o[x(0xa4)] = i[y(0x8c)], g[x(0x98)](0x1 * 0x1115 + 0x21 * -0x119 + -0x6e8 * -0x3)[x(0xab)](o);
};
exports[t(0xb2) + s(0x96)] = resetPasswords;