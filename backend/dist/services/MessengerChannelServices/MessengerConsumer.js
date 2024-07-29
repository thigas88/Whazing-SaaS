'use strict';
function a() {
    const y = [
        'token',
        'verify',
        '4fLfIKi',
        'parse',
        '../../libs',
        'vIDRx',
        '__importDe',
        '1217430gtnbXz',
        'AMQP_URL',
        'ig/auth',
        'server',
        'erty',
        'rHandleMes',
        '183598lLFrVq',
        'messenger',
        'secret',
        'messages',
        'toString',
        '../../conf',
        '6TnaRRH',
        '134Fbutye',
        '/rabbitmq-',
        '1023350IZSWZS',
        'env',
        'defineProp',
        'consume',
        '7152InrObW',
        '1307971Melmeq',
        'start',
        'default',
        '__esModule',
        'fault',
        'value',
        'jsonwebtok',
        './Messenge',
        '1382408sdkWaY',
        '985375qivUXA',
        'content',
        'sage'
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
            const f = -parseInt(p(0x17c)) / (0x25a7 + -0x11 * 0x71 + 0x1 * -0x1e25) + -parseInt(q(0x183)) / (-0x10cd + 0x317 * -0x1 + 0x13e6) * (-parseInt(p(0x189)) / (0x10bb + 0xede + 0x26e * -0xd)) + -parseInt(p(0x198)) / (-0x14aa + -0x1440 + 0x152 * 0x1f) * (-parseInt(p(0x193)) / (-0x60d + 0x155 * -0xb + 0x14b9)) + parseInt(p(0x182)) / (0x17e6 + -0x1 * 0x2351 + 0xb71) * (-parseInt(q(0x18a)) / (-0x619 + -0x108d * 0x1 + -0x87 * -0x2b)) + parseInt(q(0x192)) / (-0x1d * -0x16 + 0x19e8 + -0x1c5e * 0x1) + parseInt(q(0x176)) / (0x1 * 0xbc + -0x6 * 0x24a + 0xd09 * 0x1) + -parseInt(p(0x185)) / (0x1819 + 0x1b7 * 0xd + -0x2e5a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x18a01 + -0x2b61c + 0x72e75));
var __importDefault = this && this[r(0x175) + r(0x18e)] || function (c) {
    const t = s;
    return c && c[t(0x18d)] ? c : { 'default': c };
};
const o = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x43 * 0x73 + 0x1b * -0xf3 + -0x303);
        let h = e[f];
        return h;
    }, b(c, d);
}
o[r(0x18f)] = !![], Object[s(0x187) + r(0x17a)](exports, s(0x18d), o);
const jsonwebtoken_1 = require(r(0x190) + 'en'), rabbitmq_server_1 = __importDefault(require(s(0x19a) + s(0x184) + r(0x179))), auth_1 = __importDefault(require(s(0x181) + s(0x178))), MessengerHandleMessage_1 = __importDefault(require(r(0x191) + s(0x17b) + s(0x195))), MessengerConsumer = async () => {
        const u = s, v = r, d = {};
        d[u(0x19b)] = u(0x17d);
        const e = d, f = new rabbitmq_server_1[(v(0x18c))](process[v(0x186)][v(0x177)] || '');
        await f[u(0x18b)](), f[v(0x188)](e[v(0x19b)], g => {
            const w = v, x = u, h = JSON[w(0x199)](g[x(0x194)][x(0x180)]()), i = (0x2c5 * 0x5 + 0x1d70 + -0x62f * 0x7, jsonwebtoken_1[w(0x197)])(h[w(0x196)], auth_1[w(0x18c)][w(0x17e)]);
            if (!i)
                return;
            (0x7fa * -0x1 + 0x1637 + -0xe3d, MessengerHandleMessage_1[w(0x18c)])(h[x(0x17f)]);
        });
    };
exports[r(0x18c)] = MessengerConsumer;