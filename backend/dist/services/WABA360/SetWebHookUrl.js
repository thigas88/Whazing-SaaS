'use strict';
function a() {
    const v = [
        's/webhook',
        '10mFOrjs',
        'env',
        's/logger',
        'API_URL_36',
        'headers',
        'defineProp',
        '255FkIjpk',
        '808392JftOZd',
        'rs/AppErro',
        'method',
        '29273700AhcXKG',
        'D360-API-K',
        'eQCko',
        '8723331YmJiLn',
        'Content-Ty',
        'applicatio',
        '360_NOT_SE',
        'default',
        '4LfLGws',
        'ymArU',
        '2176911XYnxse',
        '__importDe',
        '/v1/config',
        'logger',
        'value',
        'fault',
        'error',
        '../../erro',
        '167545mrHuRE',
        'axios',
        '__esModule',
        '270sRsBSr',
        'data',
        '436148VwCIKA',
        'T_WEBHOOK:',
        '8qJuqZN',
        'url',
        'post',
        'n/json',
        '../../util',
        '18264hFZCLH',
        'erty'
    ];
    a = function () {
        return v;
    };
    return a();
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0xed)) / (0x781 * -0x2 + -0xf * -0x1dc + 0x3 * -0x44b) + parseInt(p(0xde)) / (-0x19 * -0x5c + -0x31b * 0xb + 0x192f * 0x1) * (parseInt(p(0xfe)) / (0xf7 * -0x4 + 0xc19 + -0x83a)) + -parseInt(o(0xf4)) / (-0xeb7 * -0x1 + 0x4e8 + -0x139b) * (parseInt(o(0xfd)) / (-0x672 + 0xbf5 * 0x3 + -0x1d68)) + parseInt(p(0xeb)) / (0x164e + -0xee3 + -0x1 * 0x765) * (parseInt(p(0xe8)) / (-0xb30 + 0x175 * -0x5 + 0x1280)) + -parseInt(p(0xef)) / (0x6a3 + 0x4 * -0x7a3 + 0x17f1) * (-parseInt(p(0x104)) / (0xa8e + -0x16a2 + 0xc1d)) + -parseInt(o(0xf7)) / (-0x304 * 0x1 + -0x2 * 0x3a3 + 0xa54) * (-parseInt(p(0xe0)) / (0x6b * 0x23 + 0xc0e * -0x3 + 0x1594)) + -parseInt(o(0x101)) / (0x1cd * 0x2 + -0xd * 0x1 + -0x381);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x43e28 + -0x9c3ee + 0xdde60));
var __importDefault = this && this[q(0xe1) + r(0xe5)] || function (c) {
    const s = q;
    return c && c[s(0xea)] ? c : { 'default': c };
};
const k = {};
k[r(0xe4)] = !![], Object[r(0xfc) + r(0xf5)](exports, q(0xea), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1268 + 0xde9 + 0x55c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const axios_1 = __importDefault(require(r(0xe9))), AppError_1 = __importDefault(require(r(0xe7) + q(0xff) + 'r')), logger_1 = require(r(0xf3) + r(0xf9)), SetWebHookUrl = async ({
        url: f,
        apiKey: g
    }) => {
        const t = q, u = r, h = {};
        h[t(0x103)] = u(0xf1), h[u(0xdf)] = t(0x106) + t(0xf2);
        const i = h, j = process[u(0xf8)][u(0xfa) + '0'] + (u(0xe2) + t(0xf6));
        try {
            const l = {};
            l[t(0xf0)] = f;
            const m = {};
            return m[t(0x100)] = i[t(0x103)], m[t(0xf0)] = j, m[u(0xec)] = l, m[t(0xfb)] = {}, m[t(0xfb)][t(0x102) + 'EY'] = g, m[t(0xfb)][t(0x105) + 'pe'] = i[u(0xdf)], await (-0x15cf + -0x1fc * 0x11 + 0x378b, axios_1[t(0xdd)])(m), !![];
        } catch (n) {
            logger_1[u(0xe3)][u(0xe6)](n);
            throw new AppError_1[(t(0xdd))](u(0x107) + u(0xee) + '\x20' + n);
        }
    };
exports[q(0xdd)] = SetWebHookUrl;