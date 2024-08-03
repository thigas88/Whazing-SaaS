'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x166)) / (0x1 * 0xc61 + 0x12 * -0x19c + 0x1098) * (parseInt(p(0x14f)) / (-0x1cb2 * 0x1 + -0x15d * -0xb + 0xdb5)) + parseInt(q(0x149)) / (0x1713 + 0x177c + -0x2e8c) * (parseInt(p(0x148)) / (0x20a4 + -0x1 * 0x1dd1 + -0x2cf)) + parseInt(p(0x15d)) / (-0xe8a + -0x143f + 0x5 * 0x6f6) * (parseInt(p(0x16e)) / (-0x8f0 + -0x17 * -0x1a0 + -0x1c6a)) + parseInt(p(0x160)) / (-0x2340 + -0x19cf + 0x3d16) * (parseInt(q(0x146)) / (-0x17e4 + 0x1526 + 0x2c6)) + -parseInt(p(0x164)) / (0x1 * -0x12f1 + -0x27 * -0x11 + 0x1 * 0x1063) + parseInt(p(0x157)) / (-0x1 * -0x1445 + -0xfb * 0xd + -0x77c) * (parseInt(q(0x168)) / (-0x1 * 0x118d + -0x599 + -0x3 * -0x7bb)) + -parseInt(q(0x150)) / (-0x23c0 + -0x2405 + 0x5 * 0xe5d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x73769 * -0x1 + -0x4 * -0x2dc6d + 0x95 * -0x14b2));
var __importDefault = this && this[r(0x153) + s(0x14e)] || function (c) {
    const t = r;
    return c && c[t(0x155)] ? c : { 'default': c };
};
const o = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2582 + 0xccc + -0x18 * 0x20b);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const y = [
        '9qlIgqy',
        'whatsappId',
        'env',
        'content',
        'AMQP_URL',
        'fault',
        '222XHVvIP',
        '12365136cZCcOT',
        'value',
        'qBFpr',
        '__importDe',
        'start',
        '__esModule',
        'token',
        '268670dQyIcP',
        '/rabbitmq-',
        'ssage360',
        'waba360',
        'defineProp',
        './HandleMe',
        '42465NrRlGH',
        'secret',
        'messages',
        '7XrBBRI',
        '../../libs',
        'jsonwebtok',
        'toString',
        '468603XYQxFn',
        'verify',
        '5367TFBljY',
        'ig/auth',
        '341rPhcwP',
        'server',
        '../../conf',
        'default',
        'consume',
        'parse',
        '234DbrqDh',
        '5120976FGmhTV',
        'erty',
        '410060yARGIb'
    ];
    a = function () {
        return y;
    };
    return a();
}
o[s(0x151)] = !![], Object[s(0x15b) + s(0x147)](exports, r(0x155), o);
const jsonwebtoken_1 = require(r(0x162) + 'en'), rabbitmq_server_1 = __importDefault(require(s(0x161) + s(0x158) + s(0x169))), auth_1 = __importDefault(require(r(0x16a) + r(0x167))), HandleMessage360_1 = __importDefault(require(r(0x15c) + r(0x159))), Consumer360 = async () => {
        const u = s, v = r, d = {};
        d[u(0x152)] = v(0x15a);
        const e = d, f = new rabbitmq_server_1[(u(0x16b))](process[u(0x14b)][v(0x14d)] || '');
        await f[v(0x154)](), f[u(0x16c)](e[u(0x152)], g => {
            const w = v, x = v, h = JSON[w(0x16d)](g[x(0x14c)][w(0x163)]()), i = (0x1d37 + 0x5db * 0x4 + -0x181 * 0x23, jsonwebtoken_1[w(0x165)])(h[x(0x156)], auth_1[x(0x16b)][x(0x15e)]);
            (-0x18ea + -0xcb1 + 0x259b, HandleMessage360_1[x(0x16b)])(h[x(0x15f)], i[w(0x14a)]);
        });
    };
exports[s(0x16b)] = Consumer360;