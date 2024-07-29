'use strict';
const r = b, s = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x254c * 0x1 + 0x115 * 0x13 + 0x34 * -0x116);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const w = [
        '360_NOT_UP',
        'data',
        '../../util',
        'fault',
        '6392050EhSFci',
        '__importDe',
        'logger',
        '__esModule',
        'value',
        'LOAD_MEDIA',
        'API_URL_36',
        'BgDse',
        '7456113RqRqYq',
        '/v1/media',
        '3810152ddiwkK',
        'url',
        'default',
        '../../erro',
        '3PzENND',
        'headers',
        'error',
        'erty',
        'method',
        'file',
        '24584jnFBMu',
        '9279830KzUJKz',
        'axios',
        'D360-API-K',
        'multipart/',
        's/logger',
        '72BteNGe',
        '1065420mXLmTa',
        'uxLUv',
        'form-data',
        'post',
        'env',
        'defineProp',
        'Content-Ty',
        'rs/AppErro',
        '8tQCVXG',
        '3928211uMkkdS'
    ];
    a = function () {
        return w;
    };
    return a();
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x17d)) / (-0x1977 * -0x1 + -0xd3a * -0x2 + 0x3 * -0x114e) * (-parseInt(q(0x183)) / (0x2670 + 0x1be2 + -0x4250)) + -parseInt(q(0x177)) / (0x9ed + 0xc7 * -0x17 + 0x7f7) * (parseInt(q(0x173)) / (0x264a + -0x47 * -0x8a + -0x4c8c)) + parseInt(q(0x169)) / (0x1e67 + -0x1663 + -0x7ff * 0x1) + parseInt(q(0x184)) / (-0x5 * 0x6f7 + -0x1fba + 0x1 * 0x4293) + -parseInt(p(0x164)) / (0x253b + 0xaac + -0x20 * 0x17f) + parseInt(q(0x163)) / (-0x1855 + 0x1c82 + 0x425 * -0x1) * (parseInt(q(0x171)) / (-0xe92 + -0x2122 + 0x2fbd)) + -parseInt(q(0x17e)) / (-0x1b72 + 0x3 * -0xb71 + 0x3dcf * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x56e37 + -0x4294d * 0x2 + -0x6 * -0x4249c));
var __importDefault = this && this[r(0x16a) + s(0x168)] || function (c) {
    const t = r;
    return c && c[t(0x16c)] ? c : { 'default': c };
};
const k = {};
k[s(0x16d)] = !![], Object[s(0x189) + r(0x17a)](exports, s(0x16c), k);
const axios_1 = __importDefault(require(s(0x17f))), AppError_1 = __importDefault(require(r(0x176) + r(0x18b) + 'r')), logger_1 = require(r(0x167) + s(0x182)), UploadMedia = async ({
        file: f,
        apiKey: g
    }) => {
        const u = s, v = s, h = {};
        h[u(0x170)] = v(0x187), h[u(0x185)] = u(0x181) + v(0x186);
        const i = h, j = process[v(0x188)][v(0x16f) + '0'] + v(0x172);
        try {
            const l = {};
            l[u(0x17c)] = f;
            const m = {};
            m[u(0x17b)] = i[v(0x170)], m[v(0x174)] = j, m[v(0x166)] = l, m[v(0x178)] = {}, m[v(0x178)][v(0x180) + 'EY'] = g, m[v(0x178)][u(0x18a) + 'pe'] = i[v(0x185)];
            const n = await (-0x1 * -0x5d3 + 0x162f + -0x1c02, axios_1[u(0x175)])(m);
            return n[u(0x166)];
        } catch (o) {
            logger_1[u(0x16b)][v(0x179)](o);
            throw new AppError_1[(v(0x175))](v(0x165) + v(0x16e) + ':\x20' + o);
        }
    };
exports[r(0x175)] = UploadMedia;