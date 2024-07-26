'use strict';
const r = b, s = b;
function a() {
    const y = [
        '../../conf',
        'start',
        'toString',
        '__esModule',
        '118684KeTnnm',
        '6gjVOxr',
        'messenger',
        '6228704HHoLjK',
        'messages',
        '13933017KloiTA',
        'verify',
        '135EpipXG',
        '../../libs',
        'rHandleMes',
        'defineProp',
        '/rabbitmq-',
        'fault',
        'parse',
        'default',
        '41852XlBclF',
        '343130ygIPYX',
        'AMQP_URL',
        '1038pTySOe',
        'content',
        'erty',
        './Messenge',
        '55692xQuWBt',
        '2290qiwbge',
        'sage',
        '52228hXtvaG',
        'env',
        'value',
        'token',
        'secret',
        'server',
        'mIHZh',
        '__importDe',
        'consume',
        'ig/auth',
        'jsonwebtok'
    ];
    a = function () {
        return y;
    };
    return a();
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x17c)) / (0x40f + 0x2583 + 0x2991 * -0x1) + parseInt(q(0x17d)) / (0xa67 * -0x1 + -0x851 + 0x12ba) * (-parseInt(p(0x16e)) / (-0x1f98 + -0x1f6 * -0x8 + -0x1 * -0xfeb)) + -parseInt(q(0x16d)) / (0x149c + 0x243 * 0xa + -0x2b36) * (parseInt(q(0x174)) / (-0x148 * -0x17 + -0x1614 + 0x33 * -0x25)) + parseInt(p(0x17f)) / (-0xd99 + -0x1943 + 0x26e2 * 0x1) * (-parseInt(p(0x183)) / (0x3f2 + 0x151d * -0x1 + 0x1132)) + parseInt(p(0x170)) / (-0x186c + 0x1789 + 0xeb) + parseInt(p(0x172)) / (0x1831 + 0xd55 + -0x257d) + -parseInt(p(0x184)) / (0xc7c + 0x1 * -0xfe9 + -0x377 * -0x1) * (-parseInt(q(0x186)) / (0x5db * 0x6 + 0x8d1 + -0x2be8));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xe7daa * 0x1 + -0x26 * -0x34e4 + 0x13a204));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x20c8 + 0x94 + -0x1ffd);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x165) + s(0x179)] || function (c) {
    const t = s;
    return c && c[t(0x16c)] ? c : { 'default': c };
};
const o = {};
o[s(0x160)] = !![], Object[r(0x177) + r(0x181)](exports, s(0x16c), o);
const jsonwebtoken_1 = require(s(0x168) + 'en'), rabbitmq_server_1 = __importDefault(require(r(0x175) + r(0x178) + r(0x163))), auth_1 = __importDefault(require(r(0x169) + r(0x167))), MessengerHandleMessage_1 = __importDefault(require(r(0x182) + r(0x176) + r(0x185))), MessengerConsumer = async () => {
        const u = s, v = r, d = {};
        d[u(0x164)] = u(0x16f);
        const e = d, f = new rabbitmq_server_1[(u(0x17b))](process[u(0x15f)][v(0x17e)] || '');
        await f[u(0x16a)](), f[u(0x166)](e[v(0x164)], g => {
            const w = v, x = v, h = JSON[w(0x17a)](g[w(0x180)][x(0x16b)]()), i = (-0x1 * -0xc77 + -0x239b + 0x1724, jsonwebtoken_1[x(0x173)])(h[w(0x161)], auth_1[x(0x17b)][x(0x162)]);
            if (!i)
                return;
            (0x25f1 + -0xd5 * -0x5 + -0x2a1a, MessengerHandleMessage_1[x(0x17b)])(h[x(0x171)]);
        });
    };
exports[s(0x17b)] = MessengerConsumer;