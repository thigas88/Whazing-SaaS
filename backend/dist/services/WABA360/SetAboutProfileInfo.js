'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x5 * -0x3b8 + -0x85 + 0x1 * -0x10d9);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x14e)) / (-0x1 * 0x251b + -0xa53 + 0x2f6f) * (-parseInt(p(0x163)) / (-0xf2 + 0xba1 + -0xaad * 0x1)) + parseInt(o(0x14d)) / (-0x1b3 * 0x2 + -0x26dc + 0x2a45) * (-parseInt(p(0x143)) / (-0x76 + -0x458 * -0x1 + -0x3de)) + parseInt(p(0x14f)) / (-0xbe + -0x2 * 0x423 + 0x909) + parseInt(p(0x14c)) / (-0x2a8 * 0x5 + -0x8 * -0x266 + -0x5e2) + -parseInt(o(0x160)) / (-0x1ce1 + -0x2c1 + 0x1fa9) + parseInt(o(0x15d)) / (0x709 * -0x2 + -0x1a6 * -0xf + -0xaa0) + -parseInt(p(0x153)) / (-0x14c5 + -0xfc3 + -0x197 * -0x17);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x12722f + -0x26 * -0x8963 + 0xbe7bf));
var __importDefault = this && this[q(0x162) + q(0x144)] || function (c) {
    const s = r;
    return c && c[s(0x157)] ? c : { 'default': c };
};
const k = {};
function a() {
    const v = [
        'fault',
        '/v1/settin',
        'defineProp',
        '360_NOT_SE',
        'method',
        'patch',
        'env',
        'data',
        '694026TLfBpE',
        '3RotQws',
        '42ubwJHs',
        '8165750LWbzJI',
        'erty',
        'default',
        '../../erro',
        '9239040wgNbIl',
        'text',
        'D360-API-K',
        'axios',
        '__esModule',
        'error',
        'url',
        '/about',
        'n/json',
        's/logger',
        '7180056zFhcox',
        'headers',
        'OJvNm',
        '2052589gcDgpE',
        '../../util',
        '__importDe',
        '48196hCeBnu',
        'Content-Ty',
        'value',
        'T_ABOUT:\x20',
        'applicatio',
        'gs/profile',
        'API_URL_36',
        'GUJzq',
        'rs/AppErro',
        'logger',
        '5723260FHwoJK'
    ];
    a = function () {
        return v;
    };
    return a();
}
k[q(0x13b)] = !![], Object[q(0x146) + r(0x150)](exports, q(0x157), k);
const axios_1 = __importDefault(require(r(0x156))), AppError_1 = __importDefault(require(q(0x152) + q(0x141) + 'r')), logger_1 = require(q(0x161) + q(0x15c)), SetAboutProfileInfo = async ({
        text: f,
        apiKey: g
    }) => {
        const t = r, u = q, h = {};
        h[t(0x140)] = u(0x149), h[t(0x15f)] = t(0x13d) + t(0x15b);
        const i = h, j = process[t(0x14a)][t(0x13f) + '0'] + (u(0x145) + t(0x13e) + t(0x15a));
        try {
            const l = {};
            l[u(0x154)] = f;
            const m = {};
            return m[u(0x148)] = i[t(0x140)], m[u(0x159)] = j, m[t(0x14b)] = l, m[u(0x15e)] = {}, m[u(0x15e)][t(0x155) + 'EY'] = g, m[u(0x15e)][t(0x13a) + 'pe'] = i[u(0x15f)], await (-0xb53 + 0x1 * 0x4d9 + 0x67a, axios_1[t(0x151)])(m), !![];
        } catch (n) {
            logger_1[t(0x142)][u(0x158)](n);
            throw new AppError_1[(u(0x151))](u(0x147) + u(0x13c) + n);
        }
    };
exports[q(0x151)] = SetAboutProfileInfo;