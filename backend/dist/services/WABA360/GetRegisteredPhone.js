'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x6bb + 0x117b + 0x47 * -0x23);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x11d)) / (-0x1a88 * 0x1 + -0x1a5c * 0x1 + 0x34e5) * (parseInt(m(0x116)) / (-0x1f65 + 0x678 + -0x18ef * -0x1)) + parseInt(n(0x130)) / (0x4 * -0x8a + 0x26f3 + -0x2c * 0xd6) + parseInt(n(0x134)) / (-0x181e + 0x100b + 0x817) * (-parseInt(m(0x120)) / (-0x14 * 0x175 + 0x1130 + -0x1 * -0xbf9)) + -parseInt(m(0x10b)) / (0x5f * 0x13 + 0x5 * -0x32d + -0x67 * -0x16) + parseInt(n(0x137)) / (-0x466 * -0x7 + -0x77e + -0x1745) * (-parseInt(m(0x12e)) / (-0x1aa9 + 0x1 * -0x7ae + 0x3 * 0xb75)) + -parseInt(m(0x11b)) / (0xd94 + -0x4a * -0x12 + -0x12bf * 0x1) * (-parseInt(n(0x10c)) / (0x1 * -0x253d + -0x1a5 * -0x14 + 0x463)) + parseInt(n(0x135)) / (-0x15e7 + -0x10 * 0x21f + 0x37e2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x91482 + 0x13e8c + -0x56cd * 0x5));
var __importDefault = this && this[o(0x117) + o(0x11f)] || function (c) {
    const q = p;
    return c && c[q(0x114)] ? c : { 'default': c };
};
function a() {
    const t = [
        'fault',
        '37445HvJrhI',
        'headers',
        's/phone_nu',
        'Content-Ty',
        '/v1/config',
        'erty',
        'mber',
        'n/json',
        'API_URL_36',
        'env',
        '360_NOT_GE',
        'axios',
        '../../erro',
        'data',
        '728YAvDvG',
        'value',
        '540651peOAst',
        'T_PHONE_NU',
        'get',
        'rs/AppErro',
        '36EXHniQ',
        '32041559zKFElQ',
        'yzxLf',
        '82194easxqR',
        '5678910OOeJDl',
        '70uMhiSn',
        'MBER_REGIS',
        'D360-API-K',
        'PcowN',
        'url',
        'method',
        'error',
        'default',
        '__esModule',
        'defineProp',
        '2OWgigq',
        '__importDe',
        'applicatio',
        'TERED:\x20',
        'logger',
        '501543NMxuos',
        's/logger',
        '835250vQcqVf',
        '../../util'
    ];
    a = function () {
        return t;
    };
    return a();
}
const k = {};
k[o(0x12f)] = !![], Object[p(0x115) + p(0x125)](exports, p(0x114), k);
const axios_1 = __importDefault(require(p(0x12b))), AppError_1 = __importDefault(require(o(0x12c) + p(0x133) + 'r')), logger_1 = require(o(0x11e) + p(0x11c)), GetRegisteredPhone = async e => {
        const r = p, s = o, f = {};
        f[r(0x136)] = s(0x132), f[r(0x10f)] = s(0x118) + s(0x127);
        const g = f, h = process[s(0x129)][s(0x128) + '0'] + (r(0x124) + s(0x122) + r(0x126));
        try {
            const i = {};
            i[s(0x111)] = g[s(0x136)], i[r(0x110)] = h, i[s(0x121)] = {}, i[s(0x121)][r(0x10e) + 'EY'] = e, i[s(0x121)][s(0x123) + 'pe'] = g[s(0x10f)];
            const j = await (-0x2208 + -0xb11 + 0x2d19 * 0x1, axios_1[r(0x113)])(i);
            return j[r(0x12d)];
        } catch (l) {
            logger_1[r(0x11a)][r(0x112)](l);
            throw new AppError_1[(r(0x113))](s(0x12a) + r(0x131) + r(0x10d) + s(0x119) + l);
        }
    };
exports[p(0x113)] = GetRegisteredPhone;