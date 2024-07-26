'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1b0)) / (0x8fc + -0x1c6d + -0x1372 * -0x1) * (-parseInt(p(0x1a0)) / (-0x21e + 0x7 * 0x398 + -0x1708)) + -parseInt(q(0x1ab)) / (0x1953 + -0x26af * -0x1 + 0x3fff * -0x1) * (-parseInt(q(0x1b8)) / (0x1 * 0x641 + 0x733 * -0x4 + -0x7 * -0x339)) + -parseInt(p(0x1ac)) / (-0x1 * 0x2043 + -0x8eb * 0x3 + 0x86f * 0x7) + -parseInt(p(0x19e)) / (-0x5ff * -0x4 + 0x2016 + 0x1a6 * -0x22) + -parseInt(p(0x1a6)) / (-0x15a4 + 0xc * 0x13c + 0xf * 0x75) * (parseInt(q(0x19b)) / (0x837 * -0x1 + 0xf76 + -0x737)) + -parseInt(q(0x1a4)) / (0x1f02 + -0x2017 + -0x2 * -0x8f) + parseInt(q(0x198)) / (0xcb + 0x1639 + -0x1 * 0x16fa);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xc874d + 0x11d727 * 0x1 + 0x282ff * 0x3));
var __importDefault = this && this[r(0x1b2) + r(0x1b9)] || function (c) {
    const t = r;
    return c && c[t(0x19c)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xf85 * -0x2 + -0x868 + 0x1 * 0x2905);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = {};
o[s(0x19d)] = !![], Object[s(0x1aa) + r(0x193)](exports, s(0x19c), o);
const jsonwebtoken_1 = require(s(0x1b5) + 'en'), rabbitmq_server_1 = __importDefault(require(s(0x194) + s(0x197) + s(0x1b6))), auth_1 = __importDefault(require(r(0x1a1) + s(0x1b1))), HandleMessage360_1 = __importDefault(require(r(0x1ad) + s(0x1a9))), Consumer360 = async () => {
        const u = r, v = r, d = {};
        d[u(0x1a7)] = v(0x1a5);
        const e = d, f = new rabbitmq_server_1[(u(0x199))](process[u(0x1a3)][u(0x1b4)] || '');
        await f[u(0x1af)](), f[u(0x196)](e[u(0x1a7)], g => {
            const w = u, x = u, h = JSON[w(0x195)](g[w(0x19a)][x(0x1b7)]()), i = (0xd * -0x20a + -0x2 * 0x11cf + 0x1f10 * 0x2, jsonwebtoken_1[w(0x1b3)])(h[w(0x1a2)], auth_1[x(0x199)][w(0x1ae)]);
            (0x319 * 0x2 + -0x1f0d + 0x18db, HandleMessage360_1[w(0x199)])(h[x(0x19f)], i[w(0x1a8)]);
        });
    };
function a() {
    const y = [
        'toString',
        '28LiCOMc',
        'fault',
        'erty',
        '../../libs',
        'parse',
        'consume',
        '/rabbitmq-',
        '26764400BOhcaG',
        'default',
        'content',
        '2047320ZdBQKB',
        '__esModule',
        'value',
        '2590524ZqHwbB',
        'messages',
        '742474nxfEfh',
        '../../conf',
        'token',
        'env',
        '11339910eirXft',
        'waba360',
        '21yLHZVF',
        'GMNUO',
        'whatsappId',
        'ssage360',
        'defineProp',
        '196104iraJzQ',
        '2875290FyigDX',
        './HandleMe',
        'secret',
        'start',
        '2ULlVxk',
        'ig/auth',
        '__importDe',
        'verify',
        'AMQP_URL',
        'jsonwebtok',
        'server'
    ];
    a = function () {
        return y;
    };
    return a();
}
exports[s(0x199)] = Consumer360;