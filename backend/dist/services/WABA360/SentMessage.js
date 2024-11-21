'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xd0)) / (-0x71 * -0x1d + 0x9 * -0x83 + -0x831) * (-parseInt(q(0xf5)) / (-0x23e5 + 0x1 * 0x10c0 + 0x1 * 0x1327)) + parseInt(p(0xd7)) / (0x21f3 * -0x1 + -0x11f * 0x22 + 0xa4c * 0x7) + parseInt(p(0xf0)) / (0x2bf + 0xcd9 * 0x2 + -0x1 * 0x1c6d) * (parseInt(p(0xdd)) / (-0x5 * -0x489 + 0x1a47 * -0x1 + 0x3 * 0x135)) + -parseInt(q(0xe6)) / (-0x12a4 + 0xa7 * 0x29 + -0x1 * 0x815) * (parseInt(q(0xd8)) / (-0xfea + 0x7 * -0xf7 + 0x16b2)) + -parseInt(p(0xe2)) / (-0x231 * 0x7 + 0x5 * 0x685 + -0x113a) + -parseInt(q(0xcf)) / (0x3e3 + -0x5 * 0x557 + 0x16d9) * (-parseInt(p(0xd9)) / (0x9 * -0x22b + -0x1128 + 0x24b5)) + parseInt(p(0xf1)) / (-0x2 * 0x1206 + -0xe * 0x26c + 0x45ff);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x11c3 * 0x119 + -0x3 * 0x9d2a + -0x5 * -0x65733));
function a() {
    const w = [
        'value',
        '2821680WzVSxj',
        'QTjMZ',
        '../../erro',
        'data',
        '1790526qFBvxJ',
        'url',
        'default',
        'erty',
        'NT_MESSAGE',
        'D360-API-K',
        'n/json',
        '../../util',
        'API_URL_36',
        'axios',
        '880516ruvpPE',
        '18047403CRBupO',
        'rs/AppErro',
        'logger',
        'error',
        '2KVsoFT',
        'defineProp',
        'NSncC',
        '1578744WXqOLz',
        '1251857wZVNlt',
        'env',
        '__importDe',
        'Content-Ty',
        'fault',
        'method',
        '__esModule',
        '59424ffdPOf',
        '7efMINZ',
        '40OwaHKs',
        'post',
        'headers',
        's/logger',
        '5iZRiQA',
        '/v1/messag',
        'applicatio',
        '360_NOT_SE'
    ];
    a = function () {
        return w;
    };
    return a();
}
var __importDefault = this && this[r(0xd2) + r(0xd4)] || function (c) {
    const t = r;
    return c && c[t(0xd6)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x24 + -0x2568 + -0x2611 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[r(0xe1)] = !![], Object[r(0xcd) + r(0xe9)](exports, r(0xd6), k);
const axios_1 = __importDefault(require(r(0xef))), AppError_1 = __importDefault(require(r(0xe4) + s(0xf2) + 'r')), logger_1 = require(s(0xed) + r(0xdc)), SentMessage = async ({
        message: f,
        apiKey: g
    }) => {
        const u = r, v = s, h = {};
        h[u(0xce)] = v(0xda), h[u(0xe3)] = v(0xdf) + v(0xec);
        const i = h, j = process[u(0xd1)][u(0xee) + '0'] + (u(0xde) + 'es');
        try {
            const l = { ...f }, m = {};
            m[u(0xd5)] = i[u(0xce)], m[u(0xe7)] = j, m[v(0xe5)] = l, m[v(0xdb)] = {}, m[v(0xdb)][u(0xeb) + 'EY'] = g, m[v(0xdb)][u(0xd3) + 'pe'] = i[u(0xe3)];
            const n = await (0x934 + 0xa8b + -0x13bf, axios_1[u(0xe8)])(m);
            return n[u(0xe5)];
        } catch (o) {
            logger_1[v(0xf3)][u(0xf4)](o);
            throw new AppError_1[(u(0xe8))](v(0xe0) + v(0xea) + ':\x20' + o);
        }
    };
exports[s(0xe8)] = SentMessage;