'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0xa3)) / (0xbae + 0xf + -0xbbc) * (-parseInt(n(0xa8)) / (-0x8 * 0x478 + 0x1 * -0x17f2 + 0x3bb4)) + -parseInt(m(0xa0)) / (0x2205 + 0x1b68 + 0x1eb5 * -0x2) + parseInt(m(0xae)) / (-0x1b17 + 0xdb8 * 0x2 + 0x5 * -0x11) + parseInt(m(0x93)) / (-0x12c2 + 0x11ae + 0x1 * 0x119) * (-parseInt(m(0x9d)) / (0x10fc + -0x14d0 + -0x3da * -0x1)) + -parseInt(n(0xac)) / (-0xeef + -0x2f1 * 0x4 + 0x1aba) + -parseInt(n(0xa9)) / (0x7 * 0x589 + 0x241c + -0x4ad3) + parseInt(n(0x8c)) / (0x1f56 + -0x6d9 * 0x2 + -0x119b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x103e1f + -0x6b723 + 0x2528c5));
var __importDefault = this && this[o(0xa1) + o(0x91)] || function (c) {
    const q = o;
    return c && c[q(0x8b)] ? c : { 'default': c };
};
function a() {
    const t = [
        '5yNrCuV',
        'D360-API-K',
        'method',
        'defineProp',
        'data',
        '415726nqQoXW',
        '890008ufXITx',
        'T_BUSINESS',
        'Content-Ty',
        '9379419KqEnVj',
        'default',
        '7386944SuDXEe',
        'url',
        'rs/AppErro',
        '360_NOT_SE',
        'erty',
        's/profile',
        '__esModule',
        '16889589FKuoFb',
        'applicatio',
        'n/json',
        '../../erro',
        'gs/busines',
        'fault',
        'headers',
        '18760NKulPA',
        '../../util',
        'logger',
        'ZgEiQ',
        'value',
        'LAZQh',
        'post',
        'env',
        '/v1/settin',
        'API_URL_36',
        '1290KzqsOk',
        'axios',
        's/logger',
        '4722399DMfCME',
        '__importDe',
        'error'
    ];
    a = function () {
        return t;
    };
    return a();
}
const k = {};
k[o(0x97)] = !![], Object[p(0xa6) + p(0xb2)](exports, p(0x8b), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x25cf + -0x17f5 + 0x470 * -0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const axios_1 = __importDefault(require(p(0x9e))), AppError_1 = __importDefault(require(o(0x8f) + o(0xb0) + 'r')), logger_1 = require(o(0x94) + o(0x9f)), SetBusinessProfile = async ({
        data: e,
        apiKey: f
    }) => {
        const r = p, s = p, g = {};
        g[r(0x96)] = r(0x99), g[r(0x98)] = r(0x8d) + s(0x8e);
        const h = g, i = process[r(0x9a)][s(0x9c) + '0'] + (r(0x9b) + r(0x90) + s(0x8a));
        try {
            const j = {};
            return j[r(0xa5)] = h[r(0x96)], j[s(0xaf)] = i, j[r(0xa7)] = e, j[r(0x92)] = {}, j[r(0x92)][s(0xa4) + 'EY'] = f, j[r(0x92)][r(0xab) + 'pe'] = h[r(0x98)], await (0x1c8f + -0x2013 + 0x384, axios_1[r(0xad)])(j), !![];
        } catch (l) {
            logger_1[s(0x95)][r(0xa2)](l);
            throw new AppError_1[(s(0xad))](r(0xb1) + s(0xaa) + ':\x20' + l);
        }
    };
exports[p(0xad)] = SetBusinessProfile;