'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0xf0)) / (-0x1 * -0x1e78 + -0x40 * -0x25 + -0x27b7) + parseInt(n(0xf7)) / (0x572 * 0x4 + -0x9 * 0x11f + -0xbaf) * (-parseInt(n(0xdf)) / (-0xd * -0x167 + 0x13b5 + -0x1 * 0x25ed)) + parseInt(n(0x100)) / (0x1860 + 0x1f0e + -0x376a) * (-parseInt(o(0xe0)) / (-0x1299 + -0xd03 + -0x3 * -0xa8b)) + parseInt(n(0xf9)) / (0x8 * 0x2b0 + 0x1420 + -0x2 * 0x14cd) * (-parseInt(o(0xef)) / (0x2 * 0x5cb + 0xb6a + -0x16f9)) + parseInt(n(0xfb)) / (-0x1934 + -0x879 + 0x21b5) + -parseInt(n(0xff)) / (0xe96 + -0x9dc + 0x1 * -0x4b1) * (parseInt(n(0xfe)) / (-0x1 * -0x1d35 + -0x16b4 * -0x1 + -0x33df * 0x1)) + parseInt(n(0x106)) / (-0xb * 0xfd + 0x9b2 + 0x138);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2e0d6 * 0x4 + -0x46d0e * -0x2 + -0x1e * -0x4ffd));
function a() {
    const u = [
        '1597594meMLKk',
        'env',
        '486186MdqcnB',
        'value',
        '4302120BVpwqh',
        'wait',
        'contacts',
        '1066850ddIlzy',
        '72vpmtxy',
        '160692gebxjb',
        'fault',
        'Content-Ty',
        'API_URL_36',
        'konBI',
        '__importDe',
        '30173957HjTgVm',
        'rs/AppErro',
        'force_chec',
        'url',
        's/logger',
        'data',
        'error',
        '3azHTlr',
        '70RAJchm',
        'axios',
        'n/json',
        '/v1/contac',
        '360_NOT_GE',
        'erty',
        'applicatio',
        '../../erro',
        '__esModule',
        'default',
        'defineProp',
        '../../util',
        'T_CONTACTS',
        'method',
        'D360-API-K',
        '28BRMVoi',
        '302115avCzDS',
        'headers',
        'post',
        'blocking',
        'logger',
        'UbjSg',
        'MxDpG'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[p(0x105) + p(0x101)] || function (c) {
    const r = p;
    return c && c[r(0xe8)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x9 * -0x213 + 0x1 * -0x1d2e + 0xb62);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[p(0xfa)] = !![], Object[p(0xea) + p(0xe5)](exports, q(0xe8), k);
const axios_1 = __importDefault(require(p(0xe1))), AppError_1 = __importDefault(require(q(0xe7) + p(0x107) + 'r')), logger_1 = require(p(0xeb) + p(0x10a)), CheckContact = async ({
        contacts: e,
        apiKey: f
    }) => {
        const s = p, t = q, g = {};
        g[s(0x104)] = s(0xf2), g[s(0xf6)] = t(0xfc), g[t(0xf5)] = s(0xe6) + s(0xe2);
        const h = g, i = process[s(0xf8)][s(0x103) + '0'] + (t(0xe3) + 'ts');
        try {
            const j = {};
            j[s(0xed)] = h[s(0x104)], j[t(0x109)] = i, j[s(0x10b)] = {}, j[s(0xf1)] = {}, j[s(0x10b)][s(0xf3)] = h[s(0xf6)], j[s(0x10b)][t(0x108) + 'k'] = !![], j[s(0x10b)][t(0xfd)] = e, j[s(0xf1)][t(0xee) + 'EY'] = f, j[s(0xf1)][s(0x102) + 'pe'] = h[s(0xf5)];
            const l = await (-0x6d1 * 0x3 + 0x455 * 0x6 + -0x58b, axios_1[t(0xe9)])(j);
            return l[t(0x10b)];
        } catch (m) {
            logger_1[s(0xf4)][t(0x10c)](m);
            throw new AppError_1[(s(0xe9))](s(0xe4) + t(0xec) + ':\x20' + m);
        }
    };
exports[q(0xe9)] = CheckContact;