'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0xa9)) / (0x201b + 0xb1 * -0x1 + -0x1f69) + -parseInt(q(0x9f)) / (-0x7d7 + -0x1f9 + -0x2 * -0x4e9) * (parseInt(q(0x9d)) / (-0xd02 + 0xd18 + 0x1 * -0x13)) + -parseInt(q(0xa5)) / (0x3d * -0x11 + -0x167 + 0xa * 0x8c) * (-parseInt(q(0xaf)) / (0x1 * -0x90a + -0x1a65 * -0x1 + -0x13d * 0xe)) + parseInt(p(0xb2)) / (-0xf51 + -0x5e * -0x57 + -0x109b) + -parseInt(q(0xbc)) / (-0x130b + 0x110a + 0x208) * (-parseInt(p(0xb7)) / (0x962 * -0x1 + 0x2 * 0x4d3 + 0x5 * -0xc)) + -parseInt(q(0xa2)) / (0x1 * 0x1b + 0x15 * 0xf3 + -0x1401) * (-parseInt(q(0xbe)) / (0x2f * 0x21 + 0x7 * -0x193 + -0x28 * -0x20)) + parseInt(p(0xbd)) / (-0x1655 + 0x10db * -0x2 + -0x3816 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1177e9 + -0xafd07 + -0x9 * -0xdfda));
function a() {
    const y = [
        '535540RUAkLZ',
        'rHandleMes',
        '../../libs',
        'start',
        './Messenge',
        'messages',
        'erty',
        '12OwKfNM',
        'parse',
        '798844GIopBL',
        'jsonwebtok',
        'verify',
        '117vuFUJJ',
        'messenger',
        'value',
        '393992cXJLHI',
        'secret',
        '__esModule',
        'env',
        '324818DRfbGy',
        'fault',
        'toString',
        'default',
        'defineProp',
        '/rabbitmq-',
        '25LoUQHB',
        'ig/auth',
        'AMQP_URL',
        '4220370dUYURC',
        '../../conf',
        'consume',
        'content',
        'fYyyG',
        '8SDoeLa',
        'server',
        'token',
        'sage',
        '__importDe',
        '4288291NjWWTK',
        '3940574kNwUcg'
    ];
    a = function () {
        return y;
    };
    return a();
}
var __importDefault = this && this[r(0xbb) + s(0xaa)] || function (c) {
    const t = s;
    return c && c[t(0xa7)] ? c : { 'default': c };
};
const o = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1af + 0xa3 * -0x34 + 0x2009);
        let h = e[f];
        return h;
    }, b(c, d);
}
o[s(0xa4)] = !![], Object[s(0xad) + s(0x9c)](exports, s(0xa7), o);
const jsonwebtoken_1 = require(s(0xa0) + 'en'), rabbitmq_server_1 = __importDefault(require(r(0xc0) + r(0xae) + s(0xb8))), auth_1 = __importDefault(require(s(0xb3) + r(0xb0))), MessengerHandleMessage_1 = __importDefault(require(s(0xc2) + r(0xbf) + r(0xba))), MessengerConsumer = async () => {
        const u = s, v = r, d = {};
        d[u(0xb6)] = u(0xa3);
        const e = d, f = new rabbitmq_server_1[(u(0xac))](process[u(0xa8)][v(0xb1)] || '');
        await f[v(0xc1)](), f[u(0xb4)](e[u(0xb6)], g => {
            const w = v, x = u, h = JSON[w(0x9e)](g[w(0xb5)][w(0xab)]()), i = (0x1af + -0x18d2 + -0x1 * -0x1723, jsonwebtoken_1[w(0xa1)])(h[w(0xb9)], auth_1[w(0xac)][w(0xa6)]);
            if (!i)
                return;
            (0x97 * -0x1b + -0x616 + -0x31 * -0x73, MessengerHandleMessage_1[x(0xac)])(h[w(0xc3)]);
        });
    };
exports[r(0xac)] = MessengerConsumer;