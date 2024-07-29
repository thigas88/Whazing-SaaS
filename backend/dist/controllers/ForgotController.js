'use strict';
function a() {
    const z = [
        'E-mail\x20env',
        'params',
        '\x20sucesso',
        'formado',
        'swordServi',
        'fault',
        'finida\x20com',
        'defineProp',
        'ords',
        'store',
        'pnOpT',
        'ices/SendM',
        '290KmFdgx',
        '5315vFAcaE',
        '410109lgQFOS',
        '2000192yGqkam',
        '24273dbvlbH',
        'error',
        'iado\x20com\x20s',
        'utqTd',
        'ce/ResetPa',
        '1162vUBkXb',
        'value',
        'json',
        'o\x20Token\x20in',
        'zXjWc',
        'ail',
        '6DXptpw',
        'uuid',
        'ssword',
        's/ResetPas',
        '1062KAHyHS',
        '7460134TmsyHk',
        '317iDRlqz',
        '__esModule',
        'ucesso',
        'default',
        '305408kYbHfw',
        '../service',
        'ssWordServ',
        'Senha\x20rede',
        '__importDe',
        's/ForgotPa',
        'resetPassw',
        'message',
        'status',
        'erty',
        'Verifique\x20'
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
            const f = -parseInt(q(0x20a)) / (-0x23 * 0x3b + 0x1b61 + -0x134f) * (-parseInt(r(0x1fe)) / (0xb81 + -0x17 * 0x131 + 0xfe8)) + -parseInt(r(0x204)) / (0x24 * -0xaf + 0x19bf + 0x10 * -0x12) * (parseInt(r(0x20e)) / (0xaf8 + 0x2 * 0x5de + -0x16b0)) + parseInt(q(0x1f6)) / (-0x268b + 0x12a2 + 0x13ee) * (-parseInt(r(0x208)) / (-0x2688 + -0x1e0d + -0x547 * -0xd)) + -parseInt(q(0x1f7)) / (-0x679 * 0x5 + -0x332 * 0xb + 0x438a) + -parseInt(q(0x1f8)) / (-0x9d * 0xd + -0x167 * 0xa + 0x1 * 0x1607) + parseInt(r(0x1f9)) / (-0xdc7 + 0x20 * 0xa5 + 0xda * -0x8) * (-parseInt(q(0x1f5)) / (0x422 + -0xa79 + 0x661)) + parseInt(r(0x209)) / (-0x2238 + 0x176 * -0x13 + 0x1 * 0x3e05);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xcbbe + -0x3ed73 * -0x1 + -0x1 * 0x2ab0d));
var __importDefault = this && this[s(0x212) + t(0x1ee)] || function (c) {
    const u = s;
    return c && c[u(0x20b)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x38 * 0x90 + 0x17f0 + 0x979);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[t(0x1ff)] = !![], Object[t(0x1f0) + t(0x217)](exports, s(0x20b), k), exports[t(0x214) + s(0x1f1)] = exports[s(0x1f2)] = void (-0xd8b + 0x578 + 0x813);
const uuid_1 = require(s(0x205)), SendMail_1 = __importDefault(require(s(0x20f) + s(0x213) + t(0x210) + s(0x1f4) + s(0x203))), ResetPassword_1 = __importDefault(require(t(0x20f) + t(0x207) + t(0x1ed) + t(0x1fd) + s(0x206))), store = async (f, g) => {
        const v = s, w = t, h = {};
        h[v(0x1f3)] = v(0x1e9) + v(0x1fb) + v(0x20c);
        const i = h, {email: j} = f[w(0x1ea)], l = (0x135 * -0xd + -0x1b2a + -0x2adb * -0x1, uuid_1['v4'])(), m = await (-0x45a * 0x1 + -0x4a6 + 0x30 * 0x30, SendMail_1[w(0x20d)])(j, l);
        if (!m) {
            const o = {};
            return o[w(0x215)] = i[w(0x1f3)], g[v(0x216)](0x1368 + 0x1b0 + -0x208 * 0xa)[v(0x200)](o);
        }
        const n = {};
        return n[v(0x1fa)] = i[v(0x1f3)], g[v(0x216)](-0xb7 + -0x16c4 + -0x5 * -0x503)[v(0x200)](n);
    };
exports[s(0x1f2)] = store;
const resetPasswords = async (f, g) => {
    const x = s, y = t, h = {};
    h[x(0x1fc)] = y(0x211) + y(0x1ef) + x(0x1eb), h[y(0x202)] = x(0x218) + y(0x201) + x(0x1ec);
    const i = h, {
            email: j,
            token: l,
            password: m
        } = f[y(0x1ea)], n = await (-0x593 + -0x5 * -0x1ce + 0x1 * -0x373, ResetPassword_1[x(0x20d)])(j, l, m);
    if (!n) {
        const p = {};
        return p[y(0x215)] = i[y(0x1fc)], g[y(0x216)](0xfde + 0x976 + -0x188c)[x(0x200)](p);
    }
    const o = {};
    return o[x(0x1fa)] = i[x(0x202)], g[x(0x216)](0x2 * -0xa70 + -0xb5 * 0x2c + -0x2 * -0x1ac8)[y(0x200)](o);
};
exports[s(0x214) + t(0x1f1)] = resetPasswords;