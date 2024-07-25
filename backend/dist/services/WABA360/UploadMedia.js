'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0xdc)) / (0x1 * 0xf79 + -0x3 * 0x20b + -0x957) * (parseInt(p(0xd1)) / (-0x1 * 0x223e + -0x1e19 + -0x1 * -0x4059)) + -parseInt(p(0xdd)) / (-0x1 * 0xbdc + 0x2483 + -0x18a4) + parseInt(q(0xe0)) / (0xf85 + 0x1017 + -0x1f98) * (parseInt(q(0xdb)) / (-0x689 + 0x3a * 0x1 + 0x3c * 0x1b)) + -parseInt(p(0xd2)) / (-0x2252 + 0x3 * 0xabf + 0x21b) + parseInt(p(0xd4)) / (0x1586 + 0x18b6 + 0x1 * -0x2e35) * (-parseInt(p(0xcc)) / (-0x38b * 0x5 + 0x112d * -0x2 + 0x3419)) + parseInt(p(0xc6)) / (0x2 * -0xe5e + -0x1879 + 0x353e) * (-parseInt(q(0xd3)) / (-0xd9 * 0x20 + -0x1205 + -0x2b * -0x10d)) + -parseInt(q(0xb9)) / (-0xfe5 + 0x5d2 + -0xb9 * -0xe) * (-parseInt(p(0xb8)) / (-0x2572 + 0x2620 + 0x6 * -0x1b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2073f + 0x6aba6 + -0x46027));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x26b3 * 0x1 + -0x7 * -0x16a + 0x5e7 * 0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0xcf) + r(0xdf)] || function (c) {
    const t = r;
    return c && c[t(0xcb)] ? c : { 'default': c };
};
const k = {};
k[r(0xc1)] = !![], Object[s(0xbe) + r(0xba)](exports, r(0xcb), k);
const axios_1 = __importDefault(require(r(0xc9))), AppError_1 = __importDefault(require(s(0xbc) + s(0xc3) + 'r')), logger_1 = require(r(0xb6) + s(0xbd)), UploadMedia = async ({
        file: f,
        apiKey: g
    }) => {
        const u = r, v = s, h = {};
        h[u(0xcd)] = u(0xc4), h[u(0xc2)] = v(0xd8) + v(0xd0);
        const i = h, j = process[u(0xc7)][u(0xce) + '0'] + v(0xc5);
        try {
            const l = {};
            l[v(0xc8)] = f;
            const m = {};
            m[v(0xb7)] = i[v(0xcd)], m[v(0xd6)] = j, m[v(0xd5)] = l, m[v(0xda)] = {}, m[v(0xda)][v(0xd9) + 'EY'] = g, m[v(0xda)][u(0xca) + 'pe'] = i[v(0xc2)];
            const n = await (-0x1949 + -0xfd4 + -0x1 * -0x291d, axios_1[u(0xbb)])(m);
            return n[v(0xd5)];
        } catch (o) {
            logger_1[u(0xc0)][u(0xbf)](o);
            throw new AppError_1[(u(0xbb))](v(0xde) + v(0xd7) + ':\x20' + o);
        }
    };
function a() {
    const w = [
        '../../erro',
        's/logger',
        'defineProp',
        'error',
        'logger',
        'value',
        'XWQcS',
        'rs/AppErro',
        'post',
        '/v1/media',
        '77931KmCAxj',
        'env',
        'file',
        'axios',
        'Content-Ty',
        '__esModule',
        '2661848ZPXruQ',
        'odyBF',
        'API_URL_36',
        '__importDe',
        'form-data',
        '56SfwzVt',
        '2397348AGBnSO',
        '310OXRnGe',
        '7IZYITH',
        'data',
        'url',
        'LOAD_MEDIA',
        'multipart/',
        'D360-API-K',
        'headers',
        '497095AwyoMJ',
        '17248ZFEWTq',
        '1560504nYsKVN',
        '360_NOT_UP',
        'fault',
        '8PwNeMn',
        '../../util',
        'method',
        '12ongcSF',
        '22971498UDqqmW',
        'erty',
        'default'
    ];
    a = function () {
        return w;
    };
    return a();
}
exports[s(0xbb)] = UploadMedia;