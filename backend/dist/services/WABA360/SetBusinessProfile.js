'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x113)) / (-0x21ab + -0x1 * -0x26cb + -0x51f * 0x1) * (parseInt(n(0x11a)) / (-0xefb + 0xdfc + 0x101)) + parseInt(m(0x126)) / (0x525 * 0x3 + -0x8ad + -0xb * 0x9d) + -parseInt(m(0x129)) / (-0x4f7 + 0x2134 + -0x5 * 0x5a5) + -parseInt(n(0x12d)) / (-0x1d22 + 0x10b * 0x21 + -0x544 * 0x1) + parseInt(n(0x133)) / (-0x1 * 0x67 + -0x22 * -0x16 + -0x27f) * (parseInt(m(0x128)) / (0x1abd + -0x371 * -0x1 + 0x5d * -0x53)) + parseInt(m(0x12f)) / (0xc69 * 0x3 + 0x1 * 0x22 + -0x2555) * (parseInt(m(0x12e)) / (0x1b6 * 0x10 + -0x1272 + -0x8e5)) + -parseInt(n(0x123)) / (0xf0e + 0x997 + -0x189b * 0x1) * (parseInt(n(0x127)) / (-0x2e2 + -0x3 * 0x6fb + -0x1a * -0xeb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0xf913 + 0x35a7 * 0x1 + 0x41a54));
function a() {
    const t = [
        'axios',
        'Content-Ty',
        '360_NOT_SE',
        'T_BUSINESS',
        '722422NfzXAq',
        '../../util',
        's/logger',
        'default',
        'method',
        'defineProp',
        'post',
        '../../erro',
        'gs/busines',
        '3137100fndNTg',
        'url',
        'API_URL_36',
        '735726zsmvnr',
        '22wLPMbv',
        '9079DxOWMj',
        '751232yexwgj',
        'error',
        'applicatio',
        'value',
        '1278415EhPXFq',
        '45jAnJdJ',
        '518472tnHMFo',
        'data',
        'fault',
        'headers',
        '1662Qurqxs',
        '/v1/settin',
        'n/json',
        'logger',
        'env',
        'ADMAl',
        'D360-API-K',
        'tgZWQ',
        '__importDe',
        '__esModule',
        'erty',
        '1CXawiW',
        's/profile',
        'rs/AppErro'
    ];
    a = function () {
        return t;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2087 + 0x1 * -0x1414 + 0xb60 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x13b) + p(0x131)] || function (c) {
    const q = o;
    return c && c[q(0x13c)] ? c : { 'default': c };
};
const k = {};
k[p(0x12c)] = !![], Object[p(0x11f) + o(0x13d)](exports, o(0x13c), k);
const axios_1 = __importDefault(require(p(0x116))), AppError_1 = __importDefault(require(o(0x121) + p(0x115) + 'r')), logger_1 = require(o(0x11b) + p(0x11c)), SetBusinessProfile = async ({
        data: e,
        apiKey: f
    }) => {
        const r = o, s = o, g = {};
        g[r(0x138)] = r(0x120), g[s(0x13a)] = s(0x12b) + s(0x135);
        const h = g, i = process[s(0x137)][r(0x125) + '0'] + (r(0x134) + r(0x122) + r(0x114));
        try {
            const j = {};
            return j[r(0x11e)] = h[s(0x138)], j[r(0x124)] = i, j[s(0x130)] = e, j[s(0x132)] = {}, j[s(0x132)][s(0x139) + 'EY'] = f, j[s(0x132)][s(0x117) + 'pe'] = h[s(0x13a)], await (-0x2 * -0x5e6 + -0x1bcc + -0x20 * -0x80, axios_1[r(0x11d)])(j), !![];
        } catch (l) {
            logger_1[r(0x136)][r(0x12a)](l);
            throw new AppError_1[(s(0x11d))](s(0x118) + s(0x119) + ':\x20' + l);
        }
    };
exports[o(0x11d)] = SetBusinessProfile;