'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0x1b2)) / (0x1dfa + 0x1a * -0x8f + -0x317 * 0x5) * (parseInt(v(0x1a4)) / (0x21e2 + 0x10c6 + -0x32a6)) + parseInt(v(0x1a6)) / (-0x1faf * 0x1 + 0x2167 + -0x1 * 0x1b5) * (-parseInt(u(0x1b4)) / (0x2 * -0x6da + -0x32e * -0x5 + 0x3e * -0x9)) + parseInt(u(0x1a7)) / (-0xf0e * -0x2 + 0xfbc + -0x2dd3) * (-parseInt(v(0x1b5)) / (-0xa48 + 0x1 * 0x1826 + 0x2 * -0x6ec)) + -parseInt(u(0x1ae)) / (-0x1a9f + 0x4 * 0x55d + 0x532 * 0x1) + -parseInt(u(0x1a8)) / (0x27 * -0xb + 0x207b + 0x3 * -0xa42) + parseInt(u(0x1ab)) / (0x1 * 0x673 + -0x22f9 + -0x3 * -0x985) * (-parseInt(u(0x1a9)) / (0x1469 + -0x259 + -0x1206)) + parseInt(u(0x1b0)) / (0x2 * 0xc11 + 0xf2 * -0x1 + -0x1725);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1ec3b * -0x1 + -0x9d * -0xaa9 + 0x3412f));
function a() {
    const A = [
        'emit',
        'RLsJe',
        '2392432QfIHOd',
        'txhgS',
        '62130926VAnLql',
        'cket',
        '1234613YNuKaB',
        ':ticketLis',
        '390104mnRHKd',
        '294fkXqQB',
        'contact:',
        'default',
        'defineProp',
        'type',
        'value',
        'payload',
        '__esModule',
        'indexOf',
        'getIO',
        'erty',
        'toString',
        '2hswpuT',
        '../libs/so',
        '27syeOci',
        '28790UJJVaZ',
        '4996480mEzYPN',
        '620qkjYVk',
        ':contactLi',
        '220599FIqoDz'
    ];
    a = function () {
        return A;
    };
    return a();
}
const t = {};
t[w(0x19d)] = !![], Object[w(0x1b8) + x(0x1a2)](exports, x(0x19f), t);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xa * 0x332 + 0x1995 + 0x7fc);
        let h = e[f];
        return h;
    }, b(c, d);
}
const socket_1 = require(x(0x1a5) + w(0x1b1)), emitEvent = ({
        tenantId: e,
        type: f,
        payload: g
    }) => {
        const y = w, z = w, h = {};
        h[y(0x1ad)] = function (m, n) {
            return m !== n;
        }, h[y(0x1af)] = z(0x1b6);
        const i = h, j = (-0x58b * -0x3 + 0x7a * -0x29 + -0x1 * -0x2e9, socket_1[z(0x1a1)])();
        let k = e + (y(0x1b3) + 't');
        i[y(0x1ad)](f[z(0x1a0)](i[y(0x1af)]), -(-0x1fbb + 0x50b * 0x1 + 0x1 * 0x1ab1)) && (k = e + (y(0x1aa) + 'st'));
        const l = {};
        l[y(0x1b9)] = f, l[z(0x19e)] = g, j['to'](e[y(0x1a3)]())[z(0x1ac)](k, l);
    };
exports[x(0x1b7)] = emitEvent;