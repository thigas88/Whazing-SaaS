'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x194)) / (0x2216 * -0x1 + 0x12 * -0x1e7 + 0x11 * 0x405) * (-parseInt(p(0x19a)) / (-0x10ae + -0x5 * 0x466 + 0x26ae)) + parseInt(q(0x1a2)) / (-0x24de + -0x5ff + 0x2ae0) + parseInt(q(0x19e)) / (0x2c4 + 0x2568 + -0x808 * 0x5) + parseInt(p(0x195)) / (0x901 + -0x1 * -0x259f + -0x2e9b) * (-parseInt(q(0x1af)) / (-0x13f1 + -0x3 * 0x773 + 0x2a50)) + -parseInt(p(0x1ad)) / (-0x33 * -0x93 + 0xff6 + -0x2d38) * (parseInt(q(0x1a9)) / (0x1c8 * 0x10 + -0xcfa + -0xf7e)) + parseInt(p(0x199)) / (0x1a * -0xd + 0x128f * 0x1 + -0x1134) + parseInt(q(0x1b1)) / (-0x1 * 0x157d + -0x217 * -0x6 + -0xb1 * -0xd);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3 * -0x138ef + 0x83f53 * 0x1 + -0x609 * 0x139));
function a() {
    const w = [
        'headers',
        '899694UYQPBu',
        'default',
        'lMWaS',
        'D360-API-K',
        '__esModule',
        'error',
        'axios',
        '912OnbYeT',
        'fault',
        'value',
        'defineProp',
        '23625knziBZ',
        'n/json',
        '547818nblVhu',
        'tBCOX',
        '809990namHsp',
        '/v1/messag',
        'Content-Ty',
        'logger',
        'env',
        'rs/AppErro',
        'NT_MESSAGE',
        '../../util',
        '360_NOT_SE',
        's/logger',
        'method',
        '2iZoOsZ',
        '5kBUAQK',
        'applicatio',
        '../../erro',
        '__importDe',
        '3696660buzgjf',
        '564518xaLDBj',
        'url',
        'erty',
        'post',
        '2184724FEzUms',
        'API_URL_36',
        'data'
    ];
    a = function () {
        return w;
    };
    return a();
}
var __importDefault = this && this[r(0x198) + s(0x1aa)] || function (c) {
    const t = s;
    return c && c[t(0x1a6)] ? c : { 'default': c };
};
const k = {};
k[r(0x1ab)] = !![], Object[s(0x1ac) + s(0x19c)](exports, r(0x1a6), k);
const axios_1 = __importDefault(require(s(0x1a8))), AppError_1 = __importDefault(require(r(0x197) + r(0x18e) + 'r')), logger_1 = require(r(0x190) + r(0x192)), SentMessage = async ({
        message: f,
        apiKey: g
    }) => {
        const u = r, v = r, h = {};
        h[u(0x1a4)] = u(0x19d), h[v(0x1b0)] = v(0x196) + v(0x1ae);
        const i = h, j = process[v(0x18d)][u(0x19f) + '0'] + (u(0x1b2) + 'es');
        try {
            const l = { ...f }, m = {};
            m[u(0x193)] = i[v(0x1a4)], m[v(0x19b)] = j, m[v(0x1a0)] = l, m[v(0x1a1)] = {}, m[v(0x1a1)][v(0x1a5) + 'EY'] = g, m[v(0x1a1)][v(0x1b3) + 'pe'] = i[v(0x1b0)];
            const n = await (0x1c24 + -0x156d + -0x6b7, axios_1[u(0x1a3)])(m);
            return n[v(0x1a0)];
        } catch (o) {
            logger_1[v(0x18c)][v(0x1a7)](o);
            throw new AppError_1[(v(0x1a3))](v(0x191) + v(0x18f) + ':\x20' + o);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6ee + -0x7b4 + 0x2 * 0x129);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[r(0x1a3)] = SentMessage;