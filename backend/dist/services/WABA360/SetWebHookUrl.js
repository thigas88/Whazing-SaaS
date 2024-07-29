'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x15a)) / (-0xc32 + 0x2321 * -0x1 + 0x2f54) + parseInt(p(0x17e)) / (0x116 + -0x57b * 0x7 + -0x53 * -0x73) * (-parseInt(p(0x160)) / (-0x2 * 0x1060 + -0x1811 + 0x38d4)) + -parseInt(p(0x181)) / (0x7a8 + -0x1ff * 0x1 + 0x121 * -0x5) * (-parseInt(p(0x162)) / (0x31 * 0x14 + -0x2cc * 0xa + -0x4d5 * -0x5)) + -parseInt(p(0x17c)) / (-0x1 * -0x737 + 0x10d * -0x7 + 0x6 * 0x7) * (-parseInt(o(0x16d)) / (0x24a9 + -0x94 * 0x2b + 0xbc6 * -0x1)) + -parseInt(p(0x167)) / (0x2256 + -0xa38 + -0x1816 * 0x1) * (parseInt(p(0x183)) / (0x241 * -0xb + 0x147d + 0x457)) + parseInt(p(0x16c)) / (0xef1 + -0xdc4 * 0x1 + 0x3 * -0x61) + -parseInt(o(0x170)) / (0x206d + -0xdb7 * -0x2 + -0x3bd0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x74fb * 0x25 + 0x144d13 + -0x178e5b));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1a2 * -0x1 + 0xfb * 0x9 + -0x6f * 0x15);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0x173) + r(0x16b)] || function (c) {
    const s = r;
    return c && c[s(0x163)] ? c : { 'default': c };
};
const k = {};
k[r(0x180)] = !![], Object[q(0x15f) + r(0x169)](exports, q(0x163), k);
function a() {
    const v = [
        'D360-API-K',
        's/webhook',
        'headers',
        'iKiGf',
        '60uhRHPX',
        'logger',
        '72qoFmrm',
        'T_WEBHOOK:',
        'value',
        '12WdsOtr',
        'error',
        '193518FBmhkQ',
        '118219aywBsN',
        'env',
        'Content-Ty',
        'url',
        'nUhFB',
        'defineProp',
        '63579vSmHXr',
        's/logger',
        '2454665CCCTDc',
        '__esModule',
        'post',
        '360_NOT_SE',
        '../../util',
        '416mewuZG',
        'API_URL_36',
        'erty',
        'n/json',
        'fault',
        '9329920MWSYip',
        '286132EjBaac',
        'axios',
        '/v1/config',
        '1726989kbqtah',
        '../../erro',
        'default',
        '__importDe',
        'rs/AppErro',
        'data',
        'applicatio',
        'method'
    ];
    a = function () {
        return v;
    };
    return a();
}
const axios_1 = __importDefault(require(q(0x16e))), AppError_1 = __importDefault(require(q(0x171) + q(0x174) + 'r')), logger_1 = require(q(0x166) + q(0x161)), SetWebHookUrl = async ({
        url: f,
        apiKey: g
    }) => {
        const t = q, u = q, h = {};
        h[t(0x15e)] = u(0x164), h[t(0x17b)] = t(0x176) + t(0x16a);
        const i = h, j = process[t(0x15b)][t(0x168) + '0'] + (t(0x16f) + u(0x179));
        try {
            const l = {};
            l[t(0x15d)] = f;
            const m = {};
            return m[u(0x177)] = i[u(0x15e)], m[t(0x15d)] = j, m[u(0x175)] = l, m[t(0x17a)] = {}, m[t(0x17a)][u(0x178) + 'EY'] = g, m[t(0x17a)][t(0x15c) + 'pe'] = i[u(0x17b)], await (0x2 * 0x2d5 + -0x59e + -0x6 * 0x2, axios_1[t(0x172)])(m), !![];
        } catch (n) {
            logger_1[t(0x17d)][u(0x182)](n);
            throw new AppError_1[(t(0x172))](t(0x165) + u(0x17f) + '\x20' + n);
        }
    };
exports[q(0x172)] = SetWebHookUrl;