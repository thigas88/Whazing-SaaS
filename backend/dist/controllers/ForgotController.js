'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x1cf)) / (0x1f93 + 0x71f * -0x3 + 0x27 * -0x43) + parseInt(r(0x1d0)) / (-0x7db * -0x1 + -0x7 * -0x522 + -0x2bc7) * (parseInt(q(0x1c4)) / (0xb * -0x17d + -0xa * 0x1d9 + 0x22dc)) + -parseInt(r(0x1a3)) / (-0x1 * 0x146f + -0x276 + 0x159 * 0x11) * (-parseInt(q(0x1bd)) / (-0x1d1 + 0x8 * -0x5a + 0x4a6)) + -parseInt(r(0x1b7)) / (-0x761 + -0x1914 + 0x207b) * (parseInt(q(0x1be)) / (0x436 + -0x1 * 0x1b60 + -0x7bb * -0x3)) + -parseInt(r(0x1bf)) / (0x14 * 0x1ca + 0x1 * 0x10c9 + -0x3489) + -parseInt(r(0x1c3)) / (-0x21 * 0x121 + 0x5 * -0x185 + -0x2ce3 * -0x1) * (parseInt(r(0x1c8)) / (0x3 * -0xf7 + -0x1951 * 0x1 + 0x1c40)) + parseInt(r(0x1ca)) / (0x6 * 0x4c4 + -0x1a3 * -0x16 + 0x408f * -0x1) * (parseInt(r(0x1a1)) / (-0x7 * 0x2e1 + -0x11ab * 0x1 + 0x25de * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0xa3eca + -0x10f325 * -0x1 + 0x4823c));
var __importDefault = this && this[s(0x1bc) + t(0x1b4)] || function (c) {
    const u = s;
    return c && c[u(0x1b0)] ? c : { 'default': c };
};
const k = {};
k[t(0x1ab)] = !![], Object[s(0x1c6) + t(0x1b3)](exports, s(0x1b0), k), exports[s(0x1a5) + s(0x1a9)] = exports[s(0x1c7)] = void (0x714 + -0x204f + 0x193b);
const uuid_1 = require(t(0x1bb)), SendMail_1 = __importDefault(require(t(0x1af) + t(0x1ac) + t(0x1a8) + s(0x1b2) + s(0x1a7))), ResetPassword_1 = __importDefault(require(s(0x1af) + t(0x1c9) + s(0x1a2) + t(0x1cb) + t(0x1a0))), store = async (f, g) => {
        const v = s, w = s, h = {};
        h[v(0x1ce)] = w(0x1cd) + w(0x1ae) + w(0x1c1);
        const i = h, {email: j} = f[v(0x1c2)], l = (-0x1572 + 0x23e6 + -0xe74, uuid_1['v4'])(), m = await (-0x2 * 0x10dd + 0x745 * -0x2 + 0x3044 * 0x1, SendMail_1[v(0x1b8)])(j, l);
        if (!m) {
            const o = {};
            return o[v(0x1aa)] = i[v(0x1ce)], g[v(0x1ba)](0x952 + 0x24df * -0x1 + 0x1c55)[w(0x1b1)](o);
        }
        const n = {};
        return n[v(0x1b6)] = i[v(0x1ce)], g[w(0x1ba)](0x3e6 + -0x24dd + 0x228b)[v(0x1b1)](n);
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x17f5 + 0x343 + 0x24 * -0xb6);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[t(0x1c7)] = store;
function a() {
    const z = [
        'E-mail\x20env',
        'BkbKG',
        '116987ETevDO',
        '150170LTRWPe',
        'ssword',
        '12jTOqJF',
        'swordServi',
        '40SfSSfq',
        'o\x20Token\x20in',
        'resetPassw',
        'finida\x20com',
        'ail',
        'ssWordServ',
        'ords',
        'message',
        'value',
        's/ForgotPa',
        'sytgE',
        'iado\x20com\x20s',
        '../service',
        '__esModule',
        'json',
        'ices/SendM',
        'erty',
        'fault',
        'Senha\x20rede',
        'error',
        '583140zMYSHA',
        'default',
        '\x20sucesso',
        'status',
        'uuid',
        '__importDe',
        '713795rHGwgZ',
        '28oghpln',
        '5203000GjZaSi',
        'VHZSU',
        'ucesso',
        'params',
        '1296nfFcnr',
        '3sOraic',
        'Verifique\x20',
        'defineProp',
        'store',
        '22840pJousD',
        's/ResetPas',
        '7889354oRPgdC',
        'ce/ResetPa',
        'formado'
    ];
    a = function () {
        return z;
    };
    return a();
}
const resetPasswords = async (f, g) => {
    const x = t, y = s, h = {};
    h[x(0x1ad)] = y(0x1b5) + y(0x1a6) + x(0x1b9), h[x(0x1c0)] = y(0x1c5) + x(0x1a4) + x(0x1cc);
    const i = h, {
            email: j,
            token: l,
            password: m
        } = f[y(0x1c2)], n = await (0xb6b + 0xc0 * 0x20 + -0x1 * 0x236b, ResetPassword_1[x(0x1b8)])(j, l, m);
    if (!n) {
        const p = {};
        return p[y(0x1aa)] = i[x(0x1ad)], g[x(0x1ba)](-0x1ae7 + 0x16a4 + -0x1 * -0x50b)[y(0x1b1)](p);
    }
    const o = {};
    return o[y(0x1b6)] = i[y(0x1c0)], g[y(0x1ba)](-0x841 + 0x14 * -0x16d + 0x2659 * 0x1)[x(0x1b1)](o);
};
exports[s(0x1a5) + t(0x1a9)] = resetPasswords;