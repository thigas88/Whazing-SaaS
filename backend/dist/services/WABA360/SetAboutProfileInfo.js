'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x1ab)) / (0x10ce + -0x24d1 + 0x1404) + -parseInt(o(0x1ba)) / (-0xb21 + 0x1 * 0x15cb + -0xaa8) + parseInt(p(0x1b1)) / (0x1fb9 * 0x1 + 0x1853 + -0x3809) + -parseInt(p(0x1a1)) / (-0x47f + -0x2468 + 0x28eb) * (parseInt(p(0x1b0)) / (0x1 * -0x21a8 + 0x2cc * 0x8 + 0x107 * 0xb)) + parseInt(p(0x1b4)) / (0x8 * -0xda + -0x2174 * 0x1 + 0x36 * 0xbf) + parseInt(o(0x1a2)) / (0x14be + -0x1 * -0x22b7 + -0x127a * 0x3) + parseInt(o(0x1a9)) / (-0x61 * 0x1b + 0xfc5 + 0x1e * -0x2f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x94b4d * -0x1 + -0x3 * -0x1fa1f + 0x5 * 0x2bb8d));
var __importDefault = this && this[q(0x1a7) + q(0x1b8)] || function (c) {
    const s = q;
    return c && c[s(0x1b5)] ? c : { 'default': c };
};
const k = {};
function a() {
    const v = [
        '/about',
        'default',
        'D360-API-K',
        'n/json',
        'logger',
        'Content-Ty',
        'API_URL_36',
        '243368IYGttJ',
        '6276865ygcaFC',
        'applicatio',
        'url',
        'axios',
        'T_ABOUT:\x20',
        '__importDe',
        'defineProp',
        '8495008xsctIr',
        '360_NOT_SE',
        '513275YaLgTm',
        'text',
        'erty',
        'headers',
        'patch',
        '100whcJYM',
        '1764378WzAfZA',
        'method',
        's/logger',
        '6453318eEBxBE',
        '__esModule',
        'env',
        'dVITs',
        'fault',
        'error',
        '2434220MkTgsy',
        'value',
        'gcPiV',
        'data',
        'gs/profile',
        '/v1/settin',
        '../../util',
        'rs/AppErro',
        '../../erro'
    ];
    a = function () {
        return v;
    };
    return a();
}
k[r(0x1bb)] = !![], Object[q(0x1a8) + r(0x1ad)](exports, q(0x1b5), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1402 + -0x19c2 + 0x756);
        let h = e[f];
        return h;
    }, b(c, d);
}
const axios_1 = __importDefault(require(q(0x1a5))), AppError_1 = __importDefault(require(q(0x199) + q(0x198) + 'r')), logger_1 = require(q(0x197) + q(0x1b3)), SetAboutProfileInfo = async ({
        text: f,
        apiKey: g
    }) => {
        const t = q, u = r, h = {};
        h[t(0x1bc)] = t(0x1af), h[t(0x1b7)] = u(0x1a3) + t(0x19d);
        const i = h, j = process[t(0x1b6)][u(0x1a0) + '0'] + (u(0x196) + u(0x1be) + t(0x19a));
        try {
            const l = {};
            l[t(0x1ac)] = f;
            const m = {};
            return m[t(0x1b2)] = i[u(0x1bc)], m[t(0x1a4)] = j, m[t(0x1bd)] = l, m[u(0x1ae)] = {}, m[u(0x1ae)][t(0x19c) + 'EY'] = g, m[u(0x1ae)][t(0x19f) + 'pe'] = i[t(0x1b7)], await (-0x1277 + 0x3a * -0x2b + -0x53 * -0x57, axios_1[u(0x19b)])(m), !![];
        } catch (n) {
            logger_1[u(0x19e)][u(0x1b9)](n);
            throw new AppError_1[(t(0x19b))](t(0x1aa) + t(0x1a6) + n);
        }
    };
exports[q(0x19b)] = SetAboutProfileInfo;