'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xfc9 + -0x683 * -0x1 + -0x1571);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0xe8)) / (0xbf * 0x19 + -0x24f7 + 0x1251) * (-parseInt(o(0xe2)) / (-0x3 * 0xcf3 + 0x5 * 0x4a4 + 0xfa7 * 0x1)) + parseInt(o(0xfc)) / (0xc11 * -0x1 + -0x208a + 0x2c9e) * (-parseInt(o(0xf8)) / (0xfd2 + 0x61 * 0x31 + -0x225f)) + -parseInt(p(0x106)) / (-0x2038 + 0x1d2 * 0x13 + -0x259) * (parseInt(p(0x103)) / (0x13 * 0x71 + 0x2292 + -0x2aef)) + -parseInt(o(0xef)) / (0x8f3 + -0x1 * 0x536 + -0x3b6) + parseInt(o(0xfe)) / (0xa9 + -0x31d + 0x27c) * (parseInt(o(0xfb)) / (0x1 * -0x17fe + 0x29f + -0xab4 * -0x2)) + -parseInt(o(0xdc)) / (0x26 * -0x9d + -0x5 * 0x163 + -0x17 * -0x151) + parseInt(o(0xe3)) / (0x16ed * 0x1 + 0xc47 + -0x2329) * (parseInt(o(0x100)) / (-0x1 * 0x62a + -0x1f7 * -0x6 + -0x2a * 0x22));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x14 * 0x2dfc + -0x7e6e * 0x5 + 0xb303a));
var __importDefault = this && this[q(0x105) + q(0xeb)] || function (c) {
    const s = r;
    return c && c[s(0x101)] ? c : { 'default': c };
};
const k = {};
k[q(0xde)] = !![], Object[r(0xf4) + q(0xfa)](exports, r(0x101), k);
function a() {
    const v = [
        'D360-API-K',
        'KZdHT',
        'headers',
        '4697413umqLSO',
        '/photo',
        'axios',
        'data',
        'rs/AppErro',
        'defineProp',
        '360_NOT_SE',
        'multipart/',
        'error',
        '93076UTtpNA',
        'file',
        'erty',
        '94617BNPmNS',
        '84nrSSPb',
        'url',
        '240cQNhye',
        'post',
        '5187780PWuyYA',
        '__esModule',
        'env',
        '2586372GBzTkA',
        'API_URL_36',
        '__importDe',
        '5PwTXsl',
        'uLOTx',
        'T_PHOTO:\x20',
        '6208140VBnqLU',
        'form-data',
        'value',
        '/v1/settin',
        'gs/profile',
        'method',
        '397682ZBZWlt',
        '66wSSFHb',
        'Content-Ty',
        '../../util',
        'logger',
        'default',
        '1cKKjuY',
        '../../erro',
        's/logger',
        'fault'
    ];
    a = function () {
        return v;
    };
    return a();
}
const axios_1 = __importDefault(require(r(0xf1))), AppError_1 = __importDefault(require(q(0xe9) + q(0xf3) + 'r')), logger_1 = require(q(0xe5) + r(0xea)), SetPhotoProfileInfo = async ({
        file: f,
        apiKey: g
    }) => {
        const t = q, u = r, h = {};
        h[t(0xed)] = u(0xff), h[u(0x107)] = t(0xf6) + t(0xdd);
        const i = h, j = process[u(0x102)][t(0x104) + '0'] + (t(0xdf) + u(0xe0) + t(0xf0));
        try {
            const l = {};
            l[u(0xf9)] = f;
            const m = {};
            return m[u(0xe1)] = i[u(0xed)], m[u(0xfd)] = j, m[u(0xf2)] = l, m[u(0xee)] = {}, m[u(0xee)][u(0xec) + 'EY'] = g, m[u(0xee)][t(0xe4) + 'pe'] = i[t(0x107)], await (-0x1 * -0x1f6c + -0x16ad + -0x8bf, axios_1[t(0xe7)])(m), !![];
        } catch (n) {
            logger_1[t(0xe6)][t(0xf7)](n);
            throw new AppError_1[(u(0xe7))](u(0xf5) + t(0xdb) + n);
        }
    };
exports[q(0xe7)] = SetPhotoProfileInfo;