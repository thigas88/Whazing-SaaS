'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x182)) / (-0x447 + -0x1 * -0x16e1 + -0x633 * 0x3) * (-parseInt(m(0x184)) / (-0x96b + -0x1 * 0xfb3 + 0x86 * 0x30)) + parseInt(n(0x175)) / (0x6b4 + 0xbb * 0x2 + 0x1 * -0x827) + -parseInt(n(0x187)) / (0xad * -0x1d + -0x1 * 0x1f72 + 0x330f) + parseInt(n(0x179)) / (-0x2f * 0xc5 + -0x7 * 0x427 + 0xd * 0x505) + -parseInt(n(0x17d)) / (0x241 + 0x1 * 0x1d41 + -0x1f7c) + -parseInt(m(0x18b)) / (-0x746 + 0x4d6 + 0x277 * 0x1) * (-parseInt(n(0x17c)) / (0x1 * 0xd13 + -0x8b * 0x1c + -0x229 * -0x1)) + parseInt(m(0x185)) / (-0x767 + 0x230b * -0x1 + 0x2a7b) * (parseInt(n(0x188)) / (0x1f6e + 0x1 * -0x24a + -0x1 * 0x1d1a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * 0x2aeec + 0xb05d * 0x7 + -0x7 * 0x10cdf));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x2569 + 0xaad + -0x11 * 0x2bf);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x178) + o(0x18f)] || function (c) {
    const q = o;
    return c && c[q(0x18d)] ? c : { 'default': c };
};
const k = {};
function a() {
    const t = [
        'fault',
        'rs/AppErro',
        'axios',
        'erty',
        '/v1/config',
        'n/json',
        'data',
        'applicatio',
        'Content-Ty',
        'mber',
        'ctbuc',
        'T_PHONE_NU',
        'API_URL_36',
        '../../erro',
        'D360-API-K',
        '360_NOT_GE',
        'TERED:\x20',
        's/logger',
        '12246Olshbg',
        '../../util',
        's/phone_nu',
        '__importDe',
        '173135FJGCFG',
        'get',
        'defineProp',
        '330632NPYXeJ',
        '1242486NQGKcd',
        'value',
        'vAGfB',
        'url',
        'env',
        '1pGDSiA',
        'error',
        '9978LLRrTt',
        '24120XoVoyM',
        'default',
        '104828wukNvN',
        '1130ITAApJ',
        'MBER_REGIS',
        'headers',
        '14bofwYL',
        'method',
        '__esModule',
        'logger'
    ];
    a = function () {
        return t;
    };
    return a();
}
k[p(0x17e)] = !![], Object[p(0x17b) + p(0x192)](exports, o(0x18d), k);
const axios_1 = __importDefault(require(o(0x191))), AppError_1 = __importDefault(require(o(0x170) + o(0x190) + 'r')), logger_1 = require(p(0x176) + p(0x174)), GetRegisteredPhone = async e => {
        const r = o, s = o, f = {};
        f[r(0x16d)] = r(0x17a), f[s(0x17f)] = s(0x16a) + s(0x168);
        const g = f, h = process[s(0x181)][r(0x16f) + '0'] + (s(0x167) + s(0x177) + r(0x16c));
        try {
            const i = {};
            i[s(0x18c)] = g[r(0x16d)], i[r(0x180)] = h, i[s(0x18a)] = {}, i[s(0x18a)][r(0x171) + 'EY'] = e, i[s(0x18a)][r(0x16b) + 'pe'] = g[s(0x17f)];
            const j = await (0x18b3 + -0x2e9 + -0x15ca, axios_1[r(0x186)])(i);
            return j[r(0x169)];
        } catch (l) {
            logger_1[r(0x18e)][s(0x183)](l);
            throw new AppError_1[(r(0x186))](s(0x172) + s(0x16e) + r(0x189) + s(0x173) + l);
        }
    };
exports[p(0x186)] = GetRegisteredPhone;