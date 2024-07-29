'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x149)) / (-0x16a * -0xe + -0x26f * -0x10 + -0x3abb) + -parseInt(n(0x152)) / (0xfb3 * 0x1 + -0x15be + 0x1 * 0x60d) + -parseInt(n(0x135)) / (0xc26 + 0x3 * 0x84a + -0x2501) * (-parseInt(n(0x14c)) / (0x393 * -0x2 + -0x136b + 0x1a95 * 0x1)) + parseInt(n(0x130)) / (0x1170 * -0x1 + 0x222b * -0x1 + 0x1d8 * 0x1c) + parseInt(m(0x13e)) / (0x120b + -0xa58 + -0x7ad) * (parseInt(m(0x14e)) / (0x1dae + -0x13d * 0x7 + -0x14fc)) + parseInt(m(0x13d)) / (0x1f31 + 0x26c5 + -0x45ee) * (parseInt(n(0x12f)) / (-0x1fa6 + 0x2e9 * -0xb + 0x1f * 0x20e)) + parseInt(m(0x136)) / (-0x5f * -0x46 + 0xe * -0x175 + -0x2 * 0x2c5) * (-parseInt(n(0x133)) / (-0x20df + 0x1b84 + 0x566 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x72ca1 + 0xe38d2 + -0x3c289 * -0x1));
var __importDefault = this && this[o(0x13a) + p(0x134)] || function (c) {
    const q = p;
    return c && c[q(0x151)] ? c : { 'default': c };
};
const k = {};
function a() {
    const t = [
        'erty',
        'rs/AppErro',
        '37820sQuobo',
        'WcRaf',
        '7sTVvsy',
        '360_NOT_SE',
        '/v1/settin',
        '__esModule',
        '1907430bAwdDS',
        'applicatio',
        '../../util',
        'D360-API-K',
        'data',
        'logger',
        'default',
        'API_URL_36',
        '2936556wefEyw',
        '3653870tFkIWz',
        'env',
        'T_BUSINESS',
        '11IBXiwJ',
        'fault',
        '402hmVoHr',
        '3935770wpRrkQ',
        'post',
        'gs/busines',
        '../../erro',
        '__importDe',
        'Content-Ty',
        's/logger',
        '16IaHniZ',
        '4495674PcxhfA',
        'axios',
        'method',
        'value',
        'error',
        'LbnLe',
        's/profile',
        'n/json',
        'defineProp',
        'url',
        'headers',
        '1344017pnOdUL'
    ];
    a = function () {
        return t;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x122f + -0x356 + 0x9 * 0x285);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[p(0x141)] = !![], Object[p(0x146) + p(0x14a)](exports, p(0x151), k);
const axios_1 = __importDefault(require(p(0x13f))), AppError_1 = __importDefault(require(o(0x139) + p(0x14b) + 'r')), logger_1 = require(o(0x129) + o(0x13c)), SetBusinessProfile = async ({
        data: e,
        apiKey: f
    }) => {
        const r = o, s = o, g = {};
        g[r(0x143)] = r(0x137), g[r(0x14d)] = s(0x128) + s(0x145);
        const h = g, i = process[r(0x131)][r(0x12e) + '0'] + (r(0x150) + s(0x138) + r(0x144));
        try {
            const j = {};
            return j[r(0x140)] = h[s(0x143)], j[s(0x147)] = i, j[s(0x12b)] = e, j[s(0x148)] = {}, j[s(0x148)][s(0x12a) + 'EY'] = f, j[s(0x148)][s(0x13b) + 'pe'] = h[s(0x14d)], await (0x197f + -0x3a2 + -0x15dd, axios_1[r(0x12d)])(j), !![];
        } catch (l) {
            logger_1[s(0x12c)][s(0x142)](l);
            throw new AppError_1[(r(0x12d))](s(0x14f) + s(0x132) + ':\x20' + l);
        }
    };
exports[p(0x12d)] = SetBusinessProfile;