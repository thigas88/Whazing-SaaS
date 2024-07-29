'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x206)) / (-0x683 * 0x2 + -0x1af * 0xc + 0x213b) + -parseInt(p(0x211)) / (0x9b5 + 0x1203 + -0x1 * 0x1bb6) + -parseInt(p(0x1f5)) / (-0xc4e + -0xd87 + -0x19d8 * -0x1) + parseInt(q(0x1f7)) / (0xd7 * 0x12 + -0x1 * 0x1e95 + 0xf7b) + parseInt(q(0x1f1)) / (0x1df6 + -0x21e9 * -0x1 + -0x3fda) + -parseInt(p(0x1f6)) / (0x66d + 0xf5b * 0x1 + -0x15c2) * (parseInt(p(0x205)) / (0xb * -0x3 + 0x1dba + -0x1d92)) + parseInt(q(0x20e)) / (-0x16c3 * 0x1 + -0x4c * -0x9 + 0x141f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd6e83 * -0x1 + 0xc3d7b + 0xac1b4));
var __importDefault = this && this[r(0x213) + s(0x1fa)] || function (c) {
    const t = r;
    return c && c[t(0x1fe)] ? c : { 'default': c };
};
function a() {
    const w = [
        '../../erro',
        '../../util',
        '__esModule',
        'value',
        'post',
        'default',
        'error',
        'url',
        'vDRKB',
        '6463618nVwnnN',
        '418232yWHWoE',
        'data',
        'axios',
        'D360-API-K',
        'env',
        's/logger',
        'applicatio',
        'headers',
        '9940840VdjXVO',
        'rs/AppErro',
        'erty',
        '860400EYJHjU',
        'defineProp',
        '__importDe',
        '/v1/messag',
        '360_NOT_SE',
        'method',
        '447225BZJbQG',
        'n/json',
        'NT_MESSAGE',
        'wooAS',
        '2180322PQGKFJ',
        '6IWsPve',
        '3827704uveGhe',
        'Content-Ty',
        'API_URL_36',
        'fault',
        'logger'
    ];
    a = function () {
        return w;
    };
    return a();
}
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3 * 0x5b1 + 0x19e + 0x1164);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[s(0x1ff)] = !![], Object[s(0x212) + r(0x210)](exports, s(0x1fe), k);
const axios_1 = __importDefault(require(s(0x208))), AppError_1 = __importDefault(require(s(0x1fc) + r(0x20f) + 'r')), logger_1 = require(r(0x1fd) + r(0x20b)), SentMessage = async ({
        message: f,
        apiKey: g
    }) => {
        const u = r, v = s, h = {};
        h[u(0x204)] = u(0x200), h[v(0x1f4)] = v(0x20c) + u(0x1f2);
        const i = h, j = process[u(0x20a)][u(0x1f9) + '0'] + (u(0x214) + 'es');
        try {
            const l = { ...f }, m = {};
            m[u(0x1f0)] = i[u(0x204)], m[v(0x203)] = j, m[u(0x207)] = l, m[v(0x20d)] = {}, m[v(0x20d)][v(0x209) + 'EY'] = g, m[v(0x20d)][v(0x1f8) + 'pe'] = i[u(0x1f4)];
            const n = await (0x2 * -0x118a + -0x35 * 0xd + 0x25c5, axios_1[v(0x201)])(m);
            return n[v(0x207)];
        } catch (o) {
            logger_1[v(0x1fb)][u(0x202)](o);
            throw new AppError_1[(v(0x201))](v(0x1ef) + u(0x1f3) + ':\x20' + o);
        }
    };
exports[r(0x201)] = SentMessage;