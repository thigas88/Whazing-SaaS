'use strict';
const p = b, q = b;
function a() {
    const u = [
        'default',
        '120laRmiH',
        '11560oegrBd',
        '/v1/contac',
        '360_NOT_GE',
        'Content-Ty',
        'D360-API-K',
        'post',
        '1034242uVkUgc',
        '49690IaQyCC',
        '318976ZiKauO',
        'wait',
        'T_CONTACTS',
        '12saWVvG',
        'force_chec',
        '3188DLrFkq',
        'fault',
        'data',
        'GQjKS',
        '__importDe',
        'edSWC',
        'applicatio',
        '3730VCcBLM',
        'contacts',
        's/logger',
        '../../util',
        'API_URL_36',
        'blocking',
        'erty',
        '../../erro',
        'n/json',
        'method',
        'rs/AppErro',
        '428253BqAjmK',
        'logger',
        'axios',
        'DzmRF',
        'value',
        '105mhKBIb',
        '__esModule',
        'url',
        'error',
        '261lPGxck',
        '92xtpICa',
        'defineProp',
        'env',
        'headers'
    ];
    a = function () {
        return u;
    };
    return a();
}
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x136)) / (-0x12ff + -0x12f + 0x1 * 0x142f) * (parseInt(o(0x121)) / (-0xcc1 + -0x43f * -0x3 + 0x6)) + -parseInt(n(0x131)) / (0x2696 + 0xad * 0xe + -0x3009) * (-parseInt(o(0x11a)) / (-0x2 * 0xcd4 + -0x18be + 0x326a)) + parseInt(n(0x13c)) / (-0x1921 + -0x1c7 * -0x13 + -0x89f) * (parseInt(o(0x13b)) / (-0xe65 + -0x13c1 * 0x1 + 0x222c)) + parseInt(n(0x12c)) / (-0x168b + -0x1f16 + 0x35a8) + parseInt(o(0x144)) / (-0x15cb + -0xbbd + 0x2190) + -parseInt(n(0x135)) / (0x112d * -0x1 + 0x287 * 0xd + -0x537 * 0x3) * (parseInt(o(0x143)) / (0x5 * -0x3ee + -0x190c + 0x2cbc)) + -parseInt(o(0x142)) / (0x1ff * 0x2 + -0x106 * 0x25 + 0x21eb) * (parseInt(n(0x118)) / (0xd40 + 0x26 * 0x11 + 0x21 * -0x7a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x29b0f + -0x1 * -0x2b8ad + -0x18ac5 * -0x1));
var __importDefault = this && this[p(0x11e) + p(0x11b)] || function (c) {
    const r = q;
    return c && c[r(0x132)] ? c : { 'default': c };
};
const k = {};
k[q(0x130)] = !![], Object[q(0x137) + p(0x127)](exports, p(0x132), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1948 + -0xd00 + -0xb32);
        let h = e[f];
        return h;
    }, b(c, d);
}
const axios_1 = __importDefault(require(p(0x12e))), AppError_1 = __importDefault(require(q(0x128) + p(0x12b) + 'r')), logger_1 = require(q(0x124) + p(0x123)), CheckContact = async ({
        contacts: e,
        apiKey: f
    }) => {
        const s = p, t = p, g = {};
        g[s(0x12f)] = s(0x141), g[s(0x11f)] = s(0x116), g[t(0x11d)] = s(0x120) + t(0x129);
        const h = g, i = process[s(0x138)][t(0x125) + '0'] + (s(0x13d) + 'ts');
        try {
            const j = {};
            j[t(0x12a)] = h[t(0x12f)], j[s(0x133)] = i, j[s(0x11c)] = {}, j[s(0x139)] = {}, j[s(0x11c)][s(0x126)] = h[t(0x11f)], j[s(0x11c)][t(0x119) + 'k'] = !![], j[s(0x11c)][s(0x122)] = e, j[s(0x139)][s(0x140) + 'EY'] = f, j[s(0x139)][t(0x13f) + 'pe'] = h[t(0x11d)];
            const l = await (0x200c + -0xb45 + -0x6ed * 0x3, axios_1[t(0x13a)])(j);
            return l[t(0x11c)];
        } catch (m) {
            logger_1[t(0x12d)][t(0x134)](m);
            throw new AppError_1[(t(0x13a))](t(0x13e) + s(0x117) + ':\x20' + m);
        }
    };
exports[p(0x13a)] = CheckContact;