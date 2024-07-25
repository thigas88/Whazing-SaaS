'use strict';
function a() {
    const z = [
        '40mFtSpt',
        'swordServi',
        'iado\x20com\x20s',
        'uuid',
        'Verifique\x20',
        'value',
        's/ForgotPa',
        'PRXYT',
        'ce/ResetPa',
        '../service',
        'ucesso',
        'fault',
        '44354574mvdgPS',
        '__importDe',
        '2440alWTJh',
        'formado',
        '187845luBILj',
        'store',
        '\x20sucesso',
        'json',
        'defineProp',
        'Senha\x20rede',
        'resetPassw',
        '2213850QTEdpr',
        '400323fhaCPN',
        'error',
        '650150CAAnTD',
        'default',
        'ofaKl',
        'E-mail\x20env',
        'status',
        '3406948iIJxhJ',
        'ssWordServ',
        '3537idtmAk',
        'ail',
        's/ResetPas',
        'ssword',
        'ords',
        '20FUulzB',
        'params',
        '__esModule',
        '16zbhGYZ',
        'finida\x20com',
        'erty',
        'xUqBB',
        'ices/SendM',
        'o\x20Token\x20in',
        'message'
    ];
    a = function () {
        return z;
    };
    return a();
}
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x216)) / (0x123 * -0x1 + 0xe5 * 0x1 + 0x3f) + -parseInt(r(0x21b)) / (-0x183e + 0x1 * -0x1aa5 + 0x32e5) + parseInt(r(0x20c)) / (0xb03 + -0x8a * 0x27 + 0xa06) * (-parseInt(q(0x1fc)) / (0xc7b * 0x1 + 0x269a * -0x1 + 0x1a23)) + -parseInt(r(0x1f2)) / (0x101 * -0x1 + 0x1e68 + -0x1d62) * (parseInt(q(0x213)) / (-0x9a6 + 0x1f4c + 0x2 * -0xad0)) + -parseInt(r(0x214)) / (0x16f + -0x6e5 + 0x57d * 0x1) * (-parseInt(q(0x1f5)) / (-0xa7e + -0x192d + -0x1 * -0x23b3)) + parseInt(q(0x21d)) / (-0x104e + -0x1210 + -0x2267 * -0x1) * (-parseInt(r(0x20a)) / (-0xbd * 0x1e + 0x9f2 * -0x2 + -0x4 * -0xa85)) + parseInt(q(0x208)) / (0x25b0 + 0x1e * 0x14b + 0x1 * -0x4c6f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4 * 0x39e9d + -0x13a8ff + 0x12d7fd));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * -0x1e4 + 0x1360 + -0x153a);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0x209) + t(0x207)] || function (c) {
    const u = t;
    return c && c[u(0x1f4)] ? c : { 'default': c };
};
const k = {};
k[t(0x201)] = !![], Object[t(0x210) + t(0x1f7)](exports, t(0x1f4), k), exports[t(0x212) + t(0x1f1)] = exports[s(0x20d)] = void (-0x1 * 0x236c + 0x1 * -0x4c4 + 0x2830);
const uuid_1 = require(t(0x1ff)), SendMail_1 = __importDefault(require(t(0x205) + s(0x202) + t(0x21c) + t(0x1f9) + s(0x1ee))), ResetPassword_1 = __importDefault(require(s(0x205) + t(0x1ef) + t(0x1fd) + s(0x204) + t(0x1f0))), store = async (f, g) => {
        const v = t, w = s, h = {};
        h[v(0x218)] = w(0x219) + w(0x1fe) + v(0x206);
        const i = h, {email: j} = f[w(0x1f3)], l = (0xe3c + -0x1 * 0x16d6 + 0x16f * 0x6, uuid_1['v4'])(), m = await (-0x21e4 + -0x95 * 0x8 + -0x4 * -0x9a3, SendMail_1[w(0x217)])(j, l);
        if (!m) {
            const o = {};
            return o[w(0x1fb)] = i[w(0x218)], g[w(0x21a)](-0x146a + 0x538 + -0x332 * -0x5)[v(0x20f)](o);
        }
        const n = {};
        return n[w(0x215)] = i[v(0x218)], g[v(0x21a)](-0xb60 + -0x1cc1 + 0x29b5)[v(0x20f)](n);
    };
exports[t(0x20d)] = store;
const resetPasswords = async (f, g) => {
    const x = s, y = t, h = {};
    h[x(0x203)] = y(0x211) + x(0x1f6) + x(0x20e), h[x(0x1f8)] = x(0x200) + y(0x1fa) + x(0x20b);
    const i = h, {
            email: j,
            token: l,
            password: m
        } = f[x(0x1f3)], n = await (0xe9a + 0x3a5 + -0x1b * 0xad, ResetPassword_1[y(0x217)])(j, l, m);
    if (!n) {
        const p = {};
        return p[y(0x1fb)] = i[y(0x203)], g[y(0x21a)](-0x2d1 * -0x2 + -0x1 * -0x1cd7 + -0x21b1)[y(0x20f)](p);
    }
    const o = {};
    return o[x(0x215)] = i[y(0x1f8)], g[y(0x21a)](0xd3a * -0x2 + 0x1333 + -0x13 * -0x77)[x(0x20f)](o);
};
exports[s(0x212) + t(0x1f1)] = resetPasswords;