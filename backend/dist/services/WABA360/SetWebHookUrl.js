'use strict';
function a() {
    const v = [
        '360_NOT_SE',
        '77JGFbAQ',
        '../../erro',
        'headers',
        'value',
        '../../util',
        'T_WEBHOOK:',
        '56875qYctaG',
        'API_URL_36',
        'applicatio',
        '333896BsKRIA',
        'post',
        's/webhook',
        '__esModule',
        'uATkl',
        'Content-Ty',
        'n/json',
        '191222dfSQqT',
        'rs/AppErro',
        '__importDe',
        '1229946TDFcmk',
        'env',
        '45729ntLydb',
        'fault',
        'data',
        'default',
        '1375470SNltGJ',
        'erty',
        '2290ipDJPH',
        '284qviQfq',
        'error',
        '4453374oOdBFo',
        'url',
        '/v1/config',
        'method',
        'defineProp',
        'logger',
        'qJBcD',
        's/logger',
        'D360-API-K',
        'axios'
    ];
    a = function () {
        return v;
    };
    return a();
}
const q = b, r = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xde + -0x18f2 + -0x1 * -0x1a8c);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0xdc)) / (0x505 + 0x1 * 0x6d1 + 0xbd5 * -0x1) + -parseInt(o(0xdf)) / (-0x216 * -0x1 + -0x1ab7 + 0x7 * 0x385) + parseInt(p(0xbc)) / (0x1cf9 + 0x347 * -0x2 + -0x1668) + -parseInt(p(0xbf)) / (0x1499 * -0x1 + 0x17ff * -0x1 + 0x2c9c) * (-parseInt(o(0xd2)) / (-0x1357 + -0x1 * -0x2615 + 0x12b9 * -0x1)) + -parseInt(p(0xc1)) / (0x1044 + -0x5c * -0x58 + -0x45a * 0xb) + parseInt(p(0xcc)) / (0x9e7 + -0x2148 + 0x1768) * (-parseInt(o(0xd5)) / (-0x1206 * -0x2 + -0xe3e + -0x3a1 * 0x6)) + -parseInt(p(0xe1)) / (-0x13f1 + -0x1f7 * -0x2 + 0x403 * 0x4) * (-parseInt(o(0xbe)) / (0x1377 * -0x1 + 0x1 * 0x74f + 0xc32));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x79de6 + -0x1bf91 * -0x1 + 0x17641 * -0x2));
var __importDefault = this && this[q(0xde) + r(0xe2)] || function (c) {
    const s = r;
    return c && c[s(0xd8)] ? c : { 'default': c };
};
const k = {};
k[r(0xcf)] = !![], Object[r(0xc5) + r(0xbd)](exports, r(0xd8), k);
const axios_1 = __importDefault(require(q(0xca))), AppError_1 = __importDefault(require(r(0xcd) + q(0xdd) + 'r')), logger_1 = require(r(0xd0) + r(0xc8)), SetWebHookUrl = async ({
        url: f,
        apiKey: g
    }) => {
        const t = q, u = r, h = {};
        h[t(0xc7)] = t(0xd6), h[t(0xd9)] = u(0xd4) + u(0xdb);
        const i = h, j = process[t(0xe0)][u(0xd3) + '0'] + (u(0xc3) + t(0xd7));
        try {
            const l = {};
            l[u(0xc2)] = f;
            const m = {};
            return m[t(0xc4)] = i[t(0xc7)], m[u(0xc2)] = j, m[t(0xe3)] = l, m[t(0xce)] = {}, m[t(0xce)][u(0xc9) + 'EY'] = g, m[t(0xce)][t(0xda) + 'pe'] = i[u(0xd9)], await (0x50d + 0x446 + -0x953, axios_1[u(0xe4)])(m), !![];
        } catch (n) {
            logger_1[u(0xc6)][t(0xc0)](n);
            throw new AppError_1[(u(0xe4))](t(0xcb) + u(0xd1) + '\x20' + n);
        }
    };
exports[r(0xe4)] = SetWebHookUrl;