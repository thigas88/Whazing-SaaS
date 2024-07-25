'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x184)) / (-0x14ce + 0x74 + 0x145b) + parseInt(m(0x17b)) / (-0x11e * -0x13 + 0x12a7 * 0x1 + -0x27df) * (parseInt(m(0x182)) / (0x225 * 0x1 + 0xbf + -0x2e1 * 0x1)) + parseInt(n(0x191)) / (-0x19 * 0x81 + -0x3f3 + 0x1090) * (-parseInt(m(0x171)) / (-0x1 * 0x6bb + 0x12d * 0x1c + 0x1 * -0x1a2c)) + parseInt(n(0x16d)) / (-0x1 * 0x1eaa + 0x8 * 0x4db + -0x4 * 0x20a) * (parseInt(m(0x18c)) / (-0x26d7 + -0xef * 0x19 + 0x3e35)) + parseInt(m(0x193)) / (-0x1049 + 0x8ef + 0x3f * 0x1e) + parseInt(m(0x186)) / (0x1502 * -0x1 + -0xcdd + 0x7c * 0x46) + -parseInt(n(0x16e)) / (-0x9 * 0x147 + 0x1887 + 0x2 * -0x67f) * (parseInt(n(0x18f)) / (-0x483 + -0x2 * 0x841 + 0x1510));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5ff18 + -0xad3ea + 0x1f5809));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x397 + 0x166c + 0x8b6 * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x189) + o(0x188)] || function (c) {
    const q = p;
    return c && c[q(0x17f)] ? c : { 'default': c };
};
const k = {};
k[o(0x17d)] = !![], Object[o(0x18d) + o(0x17a)](exports, o(0x17f), k);
function a() {
    const t = [
        '17776nhqSQR',
        'logger',
        'value',
        'applicatio',
        '__esModule',
        'Content-Ty',
        'env',
        '507kpjtbB',
        's/profile',
        '1609621NOSBuB',
        'CELBo',
        '6655131RqttmW',
        'gs/busines',
        'fault',
        '__importDe',
        'RuxqF',
        'data',
        '7inMgcZ',
        'defineProp',
        '360_NOT_SE',
        '3113olYxvy',
        'T_BUSINESS',
        '56bgRmNM',
        'post',
        '1249584PAQBAr',
        'n/json',
        'default',
        'url',
        'API_URL_36',
        '10981740JjEOrp',
        '54410ZnmXEm',
        'headers',
        's/logger',
        '45370TzhOsf',
        'D360-API-K',
        'error',
        '../../erro',
        '../../util',
        '/v1/settin',
        'rs/AppErro',
        'axios',
        'method',
        'erty'
    ];
    a = function () {
        return t;
    };
    return a();
}
const axios_1 = __importDefault(require(p(0x178))), AppError_1 = __importDefault(require(p(0x174) + o(0x177) + 'r')), logger_1 = require(p(0x175) + o(0x170)), SetBusinessProfile = async ({
        data: e,
        apiKey: f
    }) => {
        const r = p, s = o, g = {};
        g[r(0x185)] = r(0x192), g[s(0x18a)] = r(0x17e) + s(0x169);
        const h = g, i = process[s(0x181)][s(0x16c) + '0'] + (s(0x176) + r(0x187) + r(0x183));
        try {
            const j = {};
            return j[s(0x179)] = h[r(0x185)], j[s(0x16b)] = i, j[s(0x18b)] = e, j[r(0x16f)] = {}, j[r(0x16f)][r(0x172) + 'EY'] = f, j[r(0x16f)][s(0x180) + 'pe'] = h[r(0x18a)], await (0x4 * 0x883 + 0x1 * 0x1675 + -0xb4d * 0x5, axios_1[r(0x16a)])(j), !![];
        } catch (l) {
            logger_1[r(0x17c)][s(0x173)](l);
            throw new AppError_1[(r(0x16a))](r(0x18e) + r(0x190) + ':\x20' + l);
        }
    };
exports[p(0x16a)] = SetBusinessProfile;