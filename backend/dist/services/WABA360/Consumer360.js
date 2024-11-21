'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xe5)) / (-0xf18 + 0x1 * -0x13f3 + 0x230c) * (parseInt(q(0xf6)) / (0x1f83 + -0x2e * -0x99 + -0x3aff)) + -parseInt(p(0xd1)) / (-0x1 * 0x19d1 + 0x5f4 + 0x13e0) * (-parseInt(p(0xf0)) / (0x3 * 0x77d + 0x14df + -0x1 * 0x2b52)) + parseInt(q(0xcf)) / (-0x13b + 0x1 * -0x1121 + 0x5 * 0x3ad) + parseInt(p(0xd6)) / (-0x9 * -0x1b7 + -0x6 * 0x389 + 0x5cd) * (-parseInt(p(0xe7)) / (0x6f * -0x45 + -0x2 * 0x4ff + -0x8 * -0x4fe)) + parseInt(q(0xe4)) / (0x7c6 + 0x2073 + -0x2831) + -parseInt(p(0xd7)) / (0x9a7 + 0x1 * -0x142c + 0xa8e) * (parseInt(q(0xdd)) / (-0x211e + -0x523 + -0x264b * -0x1)) + -parseInt(p(0xdf)) / (0x4 * -0x3fb + -0x1 * 0x118f + -0x2 * -0x10c3) * (parseInt(p(0xeb)) / (0x2d6 + 0x1a5 * -0x9 + 0xc03));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x89 * 0xe3d + -0x1 * -0x99dbd + -0xc0781));
function a() {
    const y = [
        '20eivGmG',
        'messages',
        '11YjMqxr',
        'ssage360',
        'jsonwebtok',
        'server',
        '__importDe',
        '3348504uXmCyD',
        '65gLkJPy',
        '../../conf',
        '386981ThAsdK',
        'start',
        'toString',
        'jAZUp',
        '4374252IlYQBS',
        '/rabbitmq-',
        'AMQP_URL',
        '__esModule',
        'verify',
        '2464OTqvVW',
        'value',
        'defineProp',
        'waba360',
        '../../libs',
        'fault',
        '15244BJnxUY',
        './HandleMe',
        '3051355DULMVw',
        'secret',
        '192MOYNpe',
        'parse',
        'whatsappId',
        'default',
        'consume',
        '24OUptYN',
        '2865681aTnEOg',
        'ig/auth',
        'env',
        'content',
        'token',
        'erty'
    ];
    a = function () {
        return y;
    };
    return a();
}
var __importDefault = this && this[r(0xe3) + s(0xf5)] || function (c) {
    const t = r;
    return c && c[t(0xee)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x22da + -0x1131 * 0x2 + 0x6e * 0xa3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = {};
o[s(0xf1)] = !![], Object[r(0xf2) + r(0xdc)](exports, s(0xee), o);
const jsonwebtoken_1 = require(r(0xe1) + 'en'), rabbitmq_server_1 = __importDefault(require(r(0xf4) + s(0xec) + s(0xe2))), auth_1 = __importDefault(require(r(0xe6) + s(0xd8))), HandleMessage360_1 = __importDefault(require(r(0xce) + s(0xe0))), Consumer360 = async () => {
        const u = s, v = s, d = {};
        d[u(0xea)] = v(0xf3);
        const e = d, f = new rabbitmq_server_1[(v(0xd4))](process[u(0xd9)][u(0xed)] || '');
        await f[v(0xe8)](), f[v(0xd5)](e[u(0xea)], g => {
            const w = u, x = v, h = JSON[w(0xd2)](g[x(0xda)][x(0xe9)]()), i = (-0xbb1 * 0x3 + 0x2416 * -0x1 + -0x1 * -0x4729, jsonwebtoken_1[w(0xef)])(h[x(0xdb)], auth_1[x(0xd4)][x(0xd0)]);
            (-0x25f0 + 0x11f3 * -0x1 + 0x37e3, HandleMessage360_1[w(0xd4)])(h[w(0xde)], i[w(0xd3)]);
        });
    };
exports[r(0xd4)] = Consumer360;