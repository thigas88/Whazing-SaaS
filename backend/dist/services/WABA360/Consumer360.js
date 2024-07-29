'use strict';
const r = b, s = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1585 + -0xb5 * -0x2b + -0x1 * 0x3383);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x75)) / (-0x519 * -0x1 + 0x165e + -0x1b76) + -parseInt(p(0x69)) / (0xe5 * -0x21 + 0x5d6 + 0x17b1) * (-parseInt(q(0x6c)) / (-0x6ed + 0x1 * 0x862 + -0x25 * 0xa)) + parseInt(q(0x78)) / (0x3a2 * 0x8 + -0x1767 + 0x1 * -0x5a5) * (parseInt(q(0x72)) / (0x1d7b + 0x1283 + -0x2ff9)) + parseInt(q(0x7e)) / (0x248f + 0x1c13 * 0x1 + -0x409c) + parseInt(p(0x77)) / (0xabf + 0xf7f + -0x1a37) + parseInt(p(0x7d)) / (-0xbbe * 0x3 + 0x1db4 + -0x4f * -0x12) * (-parseInt(q(0x6e)) / (0x3 * 0x1e1 + -0x1 * 0x12c5 + 0xd2b)) + -parseInt(q(0x73)) / (0x26c5 + 0x819 + -0xa2 * 0x4a) * (parseInt(q(0x6a)) / (-0x547 + 0x2020 + -0x1ace));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x98bc7 + 0x220b9 * -0x6 + 0xed046));
var __importDefault = this && this[r(0x80) + r(0x7f)] || function (c) {
    const t = s;
    return c && c[t(0x8b)] ? c : { 'default': c };
};
const o = {};
function a() {
    const y = [
        'value',
        'whatsappId',
        'hvsKa',
        'parse',
        'consume',
        'secret',
        'jsonwebtok',
        'AMQP_URL',
        'verify',
        'ig/auth',
        '__esModule',
        '../../libs',
        'server',
        '../../conf',
        'token',
        'env',
        '6302AePEhi',
        '354563yZBKEt',
        'erty',
        '483VAoqJx',
        'toString',
        '81TSOLMS',
        'defineProp',
        'ssage360',
        'waba360',
        '5660mwhKZR',
        '470yISYYs',
        '/rabbitmq-',
        '375172mRHSuj',
        'content',
        '2704177BlvFFQ',
        '5360jwEzKF',
        'start',
        'messages',
        './HandleMe',
        'default',
        '1169896tWxBQV',
        '4830870fqtPuf',
        'fault',
        '__importDe'
    ];
    a = function () {
        return y;
    };
    return a();
}
o[r(0x81)] = !![], Object[s(0x6f) + s(0x6b)](exports, s(0x8b), o);
const jsonwebtoken_1 = require(r(0x87) + 'en'), rabbitmq_server_1 = __importDefault(require(r(0x8c) + r(0x74) + s(0x8d))), auth_1 = __importDefault(require(s(0x8e) + s(0x8a))), HandleMessage360_1 = __importDefault(require(r(0x7b) + s(0x70))), Consumer360 = async () => {
        const u = r, v = s, d = {};
        d[u(0x83)] = v(0x71);
        const e = d, f = new rabbitmq_server_1[(u(0x7c))](process[v(0x90)][u(0x88)] || '');
        await f[u(0x79)](), f[v(0x85)](e[u(0x83)], g => {
            const w = v, x = v, h = JSON[w(0x84)](g[x(0x76)][x(0x6d)]()), i = (0xc73 * -0x1 + -0x1cfd + 0x6 * 0x6e8, jsonwebtoken_1[x(0x89)])(h[x(0x8f)], auth_1[x(0x7c)][x(0x86)]);
            (-0x2256 + -0x3a + 0x2290, HandleMessage360_1[w(0x7c)])(h[w(0x7a)], i[w(0x82)]);
        });
    };
exports[s(0x7c)] = Consumer360;