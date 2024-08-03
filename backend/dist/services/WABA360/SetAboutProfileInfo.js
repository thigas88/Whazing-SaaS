'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x170)) / (-0xd83 + 0xb * -0x2e + 0xf7e) + parseInt(p(0x161)) / (0x224d + -0x3 * -0x8ad + -0x1e29 * 0x2) * (-parseInt(p(0x149)) / (-0x4 * 0x3dc + -0xb56 + -0x1 * -0x1ac9)) + -parseInt(o(0x15c)) / (0x1 * 0x22db + -0xe3d + 0x3 * -0x6de) + -parseInt(p(0x164)) / (-0x1607 + 0x428 + 0x11e4) + -parseInt(o(0x156)) / (0x48a * 0x7 + 0x11dc + -0x319c) * (parseInt(p(0x15e)) / (0x8 * 0x4ab + 0x683 * -0x4 + -0xb45)) + -parseInt(o(0x15a)) / (-0x53 * 0x59 + 0x2371 * -0x1 + -0x166 * -0x2e) + parseInt(p(0x171)) / (0x2 * 0xa7f + 0x1efb + -0x33f0) * (parseInt(o(0x14b)) / (-0x95c + 0x1 * -0x4cb + 0xe31));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x39b40 + -0x1a29d + 0x9409));
function a() {
    const v = [
        'T_ABOUT:\x20',
        'logger',
        '../../erro',
        'D360-API-K',
        '6MeHdTh',
        '360_NOT_SE',
        '/about',
        'text',
        '519392axERUf',
        'error',
        '190704aExZYV',
        'KFVgS',
        '467131HfuXGw',
        'erty',
        'headers',
        '414288JuEbzV',
        'Content-Ty',
        's/logger',
        '952385lHhuEm',
        'env',
        '../../util',
        '__importDe',
        'API_URL_36',
        'YfnQP',
        'patch',
        'axios',
        'defineProp',
        'fault',
        '__esModule',
        'n/json',
        '88371IRBwbG',
        '9XaQDpk',
        'method',
        'value',
        '3JElbNT',
        '/v1/settin',
        '8324090DgJjjA',
        'applicatio',
        'gs/profile',
        'data',
        'url',
        'default',
        'rs/AppErro'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0x167) + r(0x16d)] || function (c) {
    const s = q;
    return c && c[s(0x16e)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2b0 * 0xc + -0x1d * 0x157 + -0xe7a * -0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[r(0x148)] = !![], Object[q(0x16c) + q(0x15f)](exports, r(0x16e), k);
const axios_1 = __importDefault(require(r(0x16b))), AppError_1 = __importDefault(require(q(0x154) + q(0x151) + 'r')), logger_1 = require(q(0x166) + r(0x163)), SetAboutProfileInfo = async ({
        text: f,
        apiKey: g
    }) => {
        const t = q, u = q, h = {};
        h[t(0x15d)] = u(0x16a), h[t(0x169)] = u(0x14c) + t(0x16f);
        const i = h, j = process[t(0x165)][t(0x168) + '0'] + (t(0x14a) + u(0x14d) + u(0x158));
        try {
            const l = {};
            l[u(0x159)] = f;
            const m = {};
            return m[u(0x147)] = i[t(0x15d)], m[t(0x14f)] = j, m[u(0x14e)] = l, m[u(0x160)] = {}, m[u(0x160)][u(0x155) + 'EY'] = g, m[u(0x160)][u(0x162) + 'pe'] = i[t(0x169)], await (0x6a3 * 0x3 + -0x2 * 0x71 + -0x1307, axios_1[u(0x150)])(m), !![];
        } catch (n) {
            logger_1[t(0x153)][u(0x15b)](n);
            throw new AppError_1[(t(0x150))](t(0x157) + u(0x152) + n);
        }
    };
exports[r(0x150)] = SetAboutProfileInfo;