'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x141)) / (-0x247 * 0x5 + -0x1 * -0xba1 + -0x3d) + -parseInt(n(0x146)) / (0xdcc + -0x221b * -0x1 + 0xc9 * -0x3d) * (parseInt(n(0x13e)) / (-0x1e9 * -0x1 + 0xa6d * 0x1 + -0xc53)) + -parseInt(m(0x12c)) / (-0xccf + -0xbe7 + 0xf * 0x1a6) * (parseInt(m(0x14d)) / (-0x12ce * -0x1 + -0x1ead + -0x5f2 * -0x2)) + parseInt(n(0x13d)) / (-0x1c3b + 0x263c + -0x9fb) * (-parseInt(n(0x137)) / (0x183 + 0x1991 + -0x1b0d)) + -parseInt(m(0x148)) / (0xb * 0x30b + 0xa8d + -0x2bfe) * (-parseInt(n(0x12e)) / (0x1 * 0x32b + 0x3 * 0x15d + 0x1 * -0x739)) + -parseInt(n(0x129)) / (-0x35d + -0x1060 + -0x13c7 * -0x1) * (parseInt(m(0x13b)) / (0xad * -0x2c + 0x32f + 0x25 * 0xb8)) + -parseInt(n(0x12a)) / (0x9 * 0x63 + -0x26e * -0x5 + -0xf95 * 0x1) * (-parseInt(n(0x134)) / (-0x152b + 0x12f3 + -0x245 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x4e4a1 + 0x4a4b6 + -0x60114));
var __importDefault = this && this[o(0x14c) + p(0x131)] || function (c) {
    const q = o;
    return c && c[q(0x150)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xe4 * -0x15 + 0x1242 + 0x395 * -0xa);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[o(0x135)] = !![], Object[o(0x12d) + p(0x13a)](exports, p(0x150), k);
function a() {
    const t = [
        'API_URL_36',
        '57785usmKZk',
        'url',
        'T_PHONE_NU',
        'erty',
        '143jgNrnf',
        'mber',
        '270OkGGLu',
        '22374JjrOkW',
        's/phone_nu',
        'logger',
        '328675fzrysG',
        '../../erro',
        'n/json',
        '../../util',
        'env',
        '82NAHBkm',
        'default',
        '838792NrkbQL',
        'TERED:\x20',
        'eqwZK',
        'rs/AppErro',
        '__importDe',
        '15HfGZFp',
        'Content-Ty',
        'data',
        '__esModule',
        'headers',
        'method',
        's/logger',
        'MBER_REGIS',
        'applicatio',
        '/v1/config',
        '360_NOT_GE',
        '132520RJsmGU',
        '531276LbYAun',
        'D360-API-K',
        '6576gxlCtC',
        'defineProp',
        '27Gzwqdh',
        'get',
        'error',
        'fault',
        'trWmV',
        'axios',
        '130ZyTHrl',
        'value'
    ];
    a = function () {
        return t;
    };
    return a();
}
const axios_1 = __importDefault(require(p(0x133))), AppError_1 = __importDefault(require(p(0x142) + o(0x14b) + 'r')), logger_1 = require(o(0x144) + o(0x124)), GetRegisteredPhone = async e => {
        const r = p, s = o, f = {};
        f[r(0x14a)] = s(0x12f), f[r(0x132)] = s(0x126) + r(0x143);
        const g = f, h = process[s(0x145)][r(0x136) + '0'] + (r(0x127) + s(0x13f) + r(0x13c));
        try {
            const i = {};
            i[s(0x152)] = g[r(0x14a)], i[r(0x138)] = h, i[r(0x151)] = {}, i[r(0x151)][r(0x12b) + 'EY'] = e, i[r(0x151)][r(0x14e) + 'pe'] = g[s(0x132)];
            const j = await (0x2 * 0x954 + -0x11da * 0x1 + -0xce, axios_1[r(0x147)])(i);
            return j[r(0x14f)];
        } catch (l) {
            logger_1[r(0x140)][s(0x130)](l);
            throw new AppError_1[(s(0x147))](r(0x128) + s(0x139) + r(0x125) + s(0x149) + l);
        }
    };
exports[p(0x147)] = GetRegisteredPhone;