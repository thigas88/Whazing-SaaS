'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xad)) / (-0x11 * 0x157 + 0x655 * -0x1 + -0x101 * -0x1d) + parseInt(q(0xc5)) / (-0x1b7d + 0x1e4b + -0x2cc) + -parseInt(q(0xa7)) / (0x2a7 * -0x9 + 0x1f * -0xf9 + -0x1d * -0x1dd) * (parseInt(q(0xc3)) / (-0x6 * 0x7d + 0x119 * 0xb + 0x39 * -0x29)) + -parseInt(p(0xbb)) / (-0xc * 0x21d + -0x76 * 0x2e + 0x2e95) + parseInt(p(0xbe)) / (-0xbac + -0x1 * 0x8f3 + -0x2f3 * -0x7) + parseInt(p(0xb1)) / (0x120a * -0x1 + -0x836 * -0x1 + 0x349 * 0x3) + -parseInt(p(0xb3)) / (0x1776 + 0x261e + -0x3d8c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x7422d + 0xb438 + -0x1e86e));
var __importDefault = this && this[r(0xb4) + s(0xb9)] || function (c) {
    const t = r;
    return c && c[t(0xb2)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x260e + 0x1510 + 0x119e);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[s(0xbd)] = !![], Object[r(0xba) + r(0xb7)](exports, s(0xb2), k);
function a() {
    const w = [
        'default',
        'NT_MESSAGE',
        'data',
        '../../util',
        '350200puHojr',
        '../../erro',
        '1086662gGOqjs',
        'method',
        's/logger',
        'env',
        'eadPF',
        'n/json',
        'rs/AppErro',
        'headers',
        '21ZGQwuw',
        'url',
        'PDlAM',
        'Content-Ty',
        'post',
        'D360-API-K',
        '668609XSMZvH',
        'logger',
        'axios',
        'error',
        '4202534BERpUd',
        '__esModule',
        '3790048kNDMaZ',
        '__importDe',
        '/v1/messag',
        '360_NOT_SE',
        'erty',
        'applicatio',
        'fault',
        'defineProp',
        '3550865ihnPBJ',
        'API_URL_36',
        'value',
        '2287608RYtPjv'
    ];
    a = function () {
        return w;
    };
    return a();
}
const axios_1 = __importDefault(require(s(0xaf))), AppError_1 = __importDefault(require(r(0xc4) + r(0xa5) + 'r')), logger_1 = require(s(0xc2) + s(0xa1)), SentMessage = async ({
        message: f,
        apiKey: g
    }) => {
        const u = s, v = s, h = {};
        h[u(0xa3)] = u(0xab), h[v(0xa9)] = v(0xb8) + u(0xa4);
        const i = h, j = process[u(0xa2)][v(0xbc) + '0'] + (v(0xb5) + 'es');
        try {
            const l = { ...f }, m = {};
            m[v(0xa0)] = i[v(0xa3)], m[u(0xa8)] = j, m[v(0xc1)] = l, m[v(0xa6)] = {}, m[v(0xa6)][u(0xac) + 'EY'] = g, m[v(0xa6)][v(0xaa) + 'pe'] = i[v(0xa9)];
            const n = await (0x1 * 0x2241 + 0x3f1 * 0x1 + 0x1 * -0x2632, axios_1[v(0xbf)])(m);
            return n[v(0xc1)];
        } catch (o) {
            logger_1[u(0xae)][v(0xb0)](o);
            throw new AppError_1[(u(0xbf))](u(0xb6) + u(0xc0) + ':\x20' + o);
        }
    };
exports[r(0xbf)] = SentMessage;