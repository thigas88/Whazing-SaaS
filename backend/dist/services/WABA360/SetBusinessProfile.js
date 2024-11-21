'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x93)) / (-0xb * 0x1fd + 0x1136 + 0x6 * 0xc7) + -parseInt(m(0xa4)) / (0x5fb * -0x1 + -0x21d9 + 0x1 * 0x27d6) + parseInt(m(0x8d)) / (-0x30 * -0x9 + 0x20d * 0x1 + -0x3 * 0x13e) + -parseInt(m(0x98)) / (0x1471 + 0x1 * 0xbbc + -0x2029) * (-parseInt(n(0xa0)) / (0x255 * 0x3 + 0x8 * 0x202 + -0x170a)) + -parseInt(n(0xa7)) / (-0x215f + -0x1 * -0x1ca2 + 0x4c3 * 0x1) + -parseInt(m(0x9f)) / (0x21c7 + 0x328 + -0x24e8) + parseInt(n(0xa8)) / (0x3ce + 0x677 + -0xa3d * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7729a + -0x14e7a2 + 0x5 * 0x84973));
var __importDefault = this && this[o(0x89) + p(0xa2)] || function (c) {
    const q = p;
    return c && c[q(0x83)] ? c : { 'default': c };
};
function a() {
    const t = [
        'n/json',
        'post',
        'axios',
        'API_URL_36',
        '1115310kPjRXG',
        '55LWftTH',
        'value',
        'fault',
        's/profile',
        '6610ZdjpNx',
        'defineProp',
        '../../util',
        '8270688hqHKRY',
        '8420232pEpXRe',
        's/logger',
        'zkQrP',
        '__esModule',
        'D360-API-K',
        'Content-Ty',
        'method',
        '360_NOT_SE',
        '../../erro',
        '__importDe',
        'gs/busines',
        'data',
        'T_BUSINESS',
        '294429rFDfjG',
        'headers',
        'rs/AppErro',
        'ulPPf',
        'env',
        'error',
        '96179uaUeoG',
        'erty',
        'logger',
        'applicatio',
        'url',
        '418756jFkIQu',
        'default',
        '/v1/settin'
    ];
    a = function () {
        return t;
    };
    return a();
}
const k = {};
k[p(0xa1)] = !![], Object[p(0xa5) + o(0x94)](exports, p(0x83), k);
const axios_1 = __importDefault(require(p(0x9d))), AppError_1 = __importDefault(require(o(0x88) + o(0x8f) + 'r')), logger_1 = require(p(0xa6) + p(0xa9)), SetBusinessProfile = async ({
        data: e,
        apiKey: f
    }) => {
        const r = o, s = o, g = {};
        g[r(0x90)] = r(0x9c), g[r(0x82)] = s(0x96) + r(0x9b);
        const h = g, i = process[s(0x91)][r(0x9e) + '0'] + (r(0x9a) + s(0x8a) + s(0xa3));
        try {
            const j = {};
            return j[s(0x86)] = h[r(0x90)], j[r(0x97)] = i, j[s(0x8b)] = e, j[s(0x8e)] = {}, j[s(0x8e)][s(0x84) + 'EY'] = f, j[s(0x8e)][r(0x85) + 'pe'] = h[s(0x82)], await (-0x26b * -0xb + -0x20c3 + 0x62a, axios_1[r(0x99)])(j), !![];
        } catch (l) {
            logger_1[r(0x95)][r(0x92)](l);
            throw new AppError_1[(r(0x99))](r(0x87) + r(0x8c) + ':\x20' + l);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3 * -0x89 + -0x3b * -0x39 + -0xe3c);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[o(0x99)] = SetBusinessProfile;