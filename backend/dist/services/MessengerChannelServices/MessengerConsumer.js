'use strict';
function a() {
    const y = [
        '319750duusHR',
        '__importDe',
        'messenger',
        '4541369PMjDAC',
        'jsonwebtok',
        'content',
        'HtbnB',
        '/rabbitmq-',
        'sage',
        'toString',
        '223794pbtPOT',
        'erty',
        'verify',
        '546928NwWKJS',
        'token',
        '3005248rQJNpi',
        '../../conf',
        'value',
        './Messenge',
        'secret',
        'rHandleMes',
        'AMQP_URL',
        'start',
        '2295894HcRMJW',
        'server',
        'messages',
        '__esModule',
        'env',
        'ig/auth',
        '1200992oDbZbd',
        'parse',
        'fault',
        'default',
        '112VrGhLi',
        'consume',
        'defineProp',
        '6nMgSqR',
        '../../libs'
    ];
    a = function () {
        return y;
    };
    return a();
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x113)) / (0x3 * -0x30b + 0xd * -0x25 + 0xb03) + -parseInt(q(0xfd)) / (-0x2509 * -0x1 + -0x1e * 0xd5 + -0xc11 * 0x1) + parseInt(q(0xf7)) / (-0xfbc + 0x2 * -0xcee + -0x1 * -0x299b) + parseInt(q(0x115)) / (0x19a * -0x1 + -0x91 * 0x15 + 0xd83) + parseInt(p(0x106)) / (-0x48f + -0x400 * -0x6 + 0x16 * -0xe2) + -parseInt(p(0x104)) / (0x23c9 + 0x1923 + -0x3ce6) * (-parseInt(p(0x109)) / (0xc9f + -0x10e3 + 0x44b)) + parseInt(p(0x101)) / (-0x9 * 0x226 + -0x1710 + 0x1 * 0x2a6e) * (-parseInt(q(0x110)) / (0x203e + -0x1d85 + -0x2b0));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xc * -0xd570 + -0xcb71a + -0x6c889 * -0x5));
var __importDefault = this && this[r(0x107) + r(0xff)] || function (c) {
    const t = s;
    return c && c[t(0xfa)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2511 * 0x1 + 0x1 * -0x18a7 + 0xb77 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = {};
o[r(0x117)] = !![], Object[s(0x103) + r(0x111)](exports, s(0xfa), o);
const jsonwebtoken_1 = require(r(0x10a) + 'en'), rabbitmq_server_1 = __importDefault(require(r(0x105) + r(0x10d) + r(0xf8))), auth_1 = __importDefault(require(s(0x116) + s(0xfc))), MessengerHandleMessage_1 = __importDefault(require(s(0x118) + r(0xf4) + r(0x10e))), MessengerConsumer = async () => {
        const u = s, v = s, d = {};
        d[u(0x10c)] = u(0x108);
        const e = d, f = new rabbitmq_server_1[(v(0x100))](process[v(0xfb)][u(0xf5)] || '');
        await f[u(0xf6)](), f[u(0x102)](e[v(0x10c)], g => {
            const w = v, x = u, h = JSON[w(0xfe)](g[x(0x10b)][x(0x10f)]()), i = (-0x26c6 + 0x11e2 + 0x14e4, jsonwebtoken_1[w(0x112)])(h[x(0x114)], auth_1[x(0x100)][w(0xf3)]);
            if (!i)
                return;
            (-0x19eb + 0x1ed * 0xd + 0xe2, MessengerHandleMessage_1[w(0x100)])(h[w(0xf9)]);
        });
    };
exports[r(0x100)] = MessengerConsumer;