'use strict';
const o = b, p = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2477 + -0x20db * -0x1 + 0x10 * 0x4d);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x139)) / (-0x79 * 0x49 + 0x1410 + 0xe72) * (parseInt(m(0x14a)) / (-0x1eda + -0x469 * 0x4 + 0x3080)) + parseInt(m(0x15e)) / (-0x2455 + 0x1c9c + -0x2 * -0x3de) + -parseInt(m(0x152)) / (0xaa7 + -0x74b + -0x358) * (parseInt(n(0x15d)) / (-0xdc7 + 0xbad + 0x21f)) + -parseInt(m(0x14d)) / (-0x1 * 0x26cb + 0x108 * 0x1d + 0x8e9) * (-parseInt(m(0x134)) / (-0x2 * -0x1123 + -0x8f8 * 0x3 + -0x1 * 0x757)) + parseInt(n(0x13d)) / (0x1a8d + 0x1ff * 0xd + -0x3478) + parseInt(n(0x13a)) / (0x1760 * 0x1 + -0x3d1 * 0x3 + -0x2f9 * 0x4) + parseInt(m(0x15b)) / (0xa83 + -0xa9 * 0x1d + -0x6f * -0x14) * (-parseInt(m(0x13e)) / (0x283 + -0x1d33 + 0x1abb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7657c + -0x9 * 0x2091b + 0x23482b * 0x1));
var __importDefault = this && this[o(0x145) + p(0x13c)] || function (c) {
    const q = p;
    return c && c[q(0x141)] ? c : { 'default': c };
};
const k = {};
k[p(0x157)] = !![], Object[o(0x14c) + p(0x13b)](exports, o(0x141), k);
const axios_1 = __importDefault(require(o(0x135))), AppError_1 = __importDefault(require(p(0x151) + p(0x149) + 'r')), logger_1 = require(o(0x13f) + p(0x136)), GetRegisteredPhone = async e => {
        const r = o, s = p, f = {};
        f[r(0x143)] = r(0x14b), f[r(0x155)] = r(0x158) + r(0x147);
        const g = f, h = process[s(0x159)][r(0x156) + '0'] + (s(0x14f) + s(0x154) + r(0x15c));
        try {
            const i = {};
            i[s(0x138)] = g[s(0x143)], i[r(0x15f)] = h, i[r(0x137)] = {}, i[r(0x137)][r(0x148) + 'EY'] = e, i[r(0x137)][s(0x144) + 'pe'] = g[r(0x155)];
            const j = await (-0x1247 + 0x5e * 0x5e + -0x103d, axios_1[r(0x153)])(i);
            return j[s(0x160)];
        } catch (l) {
            logger_1[r(0x14e)][r(0x15a)](l);
            throw new AppError_1[(r(0x153))](r(0x140) + s(0x142) + s(0x146) + s(0x150) + l);
        }
    };
function a() {
    const t = [
        'mber',
        '295LchIqF',
        '1045401JcZALk',
        'url',
        'data',
        '49vXlFQJ',
        'axios',
        's/logger',
        'headers',
        'method',
        '2LQibQe',
        '6570900hoZrNk',
        'erty',
        'fault',
        '5133664PvRODb',
        '11298133HGuCfk',
        '../../util',
        '360_NOT_GE',
        '__esModule',
        'T_PHONE_NU',
        'HTWGd',
        'Content-Ty',
        '__importDe',
        'MBER_REGIS',
        'n/json',
        'D360-API-K',
        'rs/AppErro',
        '784002HOUSHO',
        'get',
        'defineProp',
        '798558dAbmOO',
        'logger',
        '/v1/config',
        'TERED:\x20',
        '../../erro',
        '51176igAIim',
        'default',
        's/phone_nu',
        'YFAbM',
        'API_URL_36',
        'value',
        'applicatio',
        'env',
        'error',
        '20MYWEYU'
    ];
    a = function () {
        return t;
    };
    return a();
}
exports[p(0x153)] = GetRegisteredPhone;